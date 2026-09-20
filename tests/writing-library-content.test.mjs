import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createHash } from 'node:crypto'
import matter from 'gray-matter'
import { remark } from 'remark'
const root=new URL('../',import.meta.url)
const manifest=JSON.parse(fs.readFileSync(new URL('docs/writing-library/manifest.json',root),'utf8'))
// Explicit options retain raw frontmatter on repeated reads (gray-matter's cache omits it).
const read=slug=>matter(fs.readFileSync(new URL(`content/blog/${slug}.md`,root),'utf8'),{})
const slugs=()=>fs.readdirSync(new URL('content/blog/',root)).filter(f=>f.endsWith('.md')).map(f=>f.slice(0,-3))
const baselineSlugs=new Set(manifest.articles.map(article=>article.slug))
const extraSlugs=()=>slugs().filter(slug=>!baselineSlugs.has(slug))

test('additional publications have complete metadata and substantial bodies',()=>{
 for(const slug of extraSlugs()){
  const {data,content}=read(slug)
  assert.ok(typeof data.title==='string'&&data.title.trim().length>0,`${slug}: title is required`)
  assert.ok(typeof data.summary==='string'&&data.summary.trim().length>40,`${slug}: substantial summary is required`)
  assert.ok(Array.isArray(data.tags)&&data.tags.length>0&&data.tags.every(tag=>typeof tag==='string'&&tag.trim().length>0),`${slug}: nonempty string tags are required`)
  assert.equal(data.published,true,`${slug}: published must be true`)
  assert.equal(data.retrospectiveDate,undefined,`${slug}: no retrospective publication metadata`)
  assert.ok((content.match(/\b[\w’'-]+\b/g)||[]).length>=650,`${slug}: body must contain at least 650 words`)
  assert.doesNotMatch(content,/^#{1,3}\s*(?:Sources|References|Bibliography)\b/im,slug)
 }
})
test('additional publication dates are quoted real ISO dates, not future Brisbane dates',()=>{
 const parts=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Brisbane',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date())
 const part=type=>parts.find(p=>p.type===type).value
 const today=`${part('year')}-${part('month')}-${part('day')}`
 for(const slug of extraSlugs()){
  const article=read(slug)
  for(const field of ['date',...(Object.hasOwn(article.data,'updated')?['updated']:[])]){
   const value=article.data[field]
   assert.equal(typeof value,'string',`${slug}: ${field} must be a quoted ISO string`)
   assert.match(value,/^\d{4}-\d{2}-\d{2}$/,`${slug}: ${field} must be YYYY-MM-DD`)
   const parsed=new Date(`${value}T00:00:00.000Z`)
   assert.ok(Number.isFinite(parsed.getTime()),`${slug}: invalid ${field}`)
   assert.equal(parsed.toISOString().slice(0,10),value,`${slug}: impossible ${field}`)
   assert.match(article.matter,new RegExp(`^${field}:[ \\t]*(["'])${value}\\1[ \\t]*(?:#.*)?$`,'m'),`${slug}: ${field} must be explicitly quoted`)
   assert.ok(value<=today,`${slug}: ${field} is in the future in Brisbane`)
  }
  if(Object.hasOwn(article.data,'updated'))assert.ok(article.data.updated>=article.data.date,`${slug}: updated precedes date`)
 }
})

test('titles and URL slugs are unique across the entire writing library',()=>{
 const titles=new Set(),urls=new Set()
 for(const slug of slugs()){
  assert.match(slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/,`${slug}: canonical URL slug required`)
  assert.ok(!urls.has(slug),`${slug}: duplicate URL slug`);urls.add(slug)
  const {data}=read(slug)
  if(Object.hasOwn(data,'slug'))assert.equal(data.slug,slug,`${slug}: metadata slug must match filename`)
  assert.equal(typeof data.title,'string',`${slug}: title is required`)
  const title=data.title.normalize('NFC').trim().replace(/\s+/g,' ').toLowerCase()
  assert.ok(!titles.has(title),`${slug}: duplicate title`);titles.add(title)
 }
})

test('additional publications link to real published articles and nonblog routes',()=>{
 const articles=new Set(slugs())
 const isFile=url=>fs.existsSync(url)&&fs.statSync(url).isFile()
 for(const slug of extraSlugs()){
  const tree=remark().parse(read(slug).content)
  const nodes=[]
  const visit=node=>{nodes.push(node);for(const child of node.children||[])visit(child)}
  visit(tree)
  const definitions=new Map(nodes.filter(node=>node.type==='definition').map(node=>[node.identifier,node.url]))
  const links=[]
  for(const node of nodes){
   if(node.type==='link')links.push(node.url)
   if(node.type==='linkReference'){
    assert.ok(definitions.has(node.identifier),`${slug}: missing link reference ${node.identifier}`)
    links.push(definitions.get(node.identifier))
   }
   if(node.type==='html')for(const match of node.value.matchAll(/<a\b[^>]*\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi))links.push(match[1]??match[2]??match[3])
  }
  for(const href of links){
   const url=new URL(href,`https://iyanbarry.com/blog/${slug}`)
   if(!['http:','https:'].includes(url.protocol)||!['iyanbarry.com','www.iyanbarry.com'].includes(url.hostname))continue
   const pathname=decodeURIComponent(url.pathname).replace(/\/$/,'')
   if(pathname.startsWith('/blog/')){
    const target=pathname.slice('/blog/'.length)
    assert.ok(articles.has(target),`${slug}: broken article link ${href}`)
    assert.equal(read(target).data.published,true,`${slug}: link to unpublished article ${href}`)
   }else{
    const page=new URL(`app${pathname}/page.tsx`,root)
    const asset=new URL(`public${pathname}`,root)
    assert.ok(isFile(page)||isFile(asset),`${slug}: broken internal route ${href}`)
   }
  }
 }
})

test('the fixed original 100 articles retain their full metadata and content',()=>{
 // Captured from commit 747fcb58708a61cfabba42b2705ea14421dfec82; never regenerate for weekly additions.
 // Normalize only CRLF so checkout line endings do not weaken cross-platform verification.
 const hashes=JSON.parse(fs.readFileSync(new URL('tests/fixtures/writing-library-baseline-sha256.json',root),'utf8'))
 assert.equal(Object.keys(hashes).length,100)
 assert.deepEqual(Object.keys(hashes).sort(),[...baselineSlugs].sort())
 for(const [slug,expected] of Object.entries(hashes)){
  const source=fs.readFileSync(new URL(`content/blog/${slug}.md`,root),'utf8').replace(/\r\n/g,'\n')
  assert.equal(createHash('sha256').update(source).digest('hex'),expected,`${slug}: baseline content or metadata changed`)
 }
})

test('all100 articles have distinct publication dates spanning the approved year',()=>{
 assert.equal(manifest.articles.length,100)
 const files=fs.readdirSync(new URL('content/blog/',root)).filter(f=>f.endsWith('.md'))
 for(const brief of manifest.articles)assert.ok(files.includes(`${brief.slug}.md`),`Missing baseline article: ${brief.slug}`)
 const dates=[]
 for(const brief of manifest.articles){const {data}=read(brief.slug)
  assert.equal(data.date,brief.date,brief.slug);assert.ok(data.date>=manifest.startDate&&data.date<=manifest.endDate,brief.slug)
  assert.equal(data.retrospectiveDate,undefined,brief.slug);dates.push(data.date)
 }
 assert.equal(new Set(dates).size,100);dates.sort();assert.equal(dates[0],manifest.startDate);assert.equal(dates.at(-1),manifest.endDate)
 assert.ok(Date.parse(dates.at(-1))-Date.parse(dates[0])>=360*86400000)
 const latest=[...manifest.articles].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,19)
 assert.ok(latest.every(a=>a.group==='ai'))
})
test('date-only change preserves substantial articles, titles and summaries',()=>{
 for(const brief of manifest.articles){const {data,content}=read(brief.slug)
  assert.equal(data.title,brief.title);assert.equal(data.published,true);assert.ok(data.summary.length>40)
  assert.ok((content.match(/\b[\w’'-]+\b/g)||[]).length>=(brief.group==='existing'?450:650),brief.slug)
  assert.ok(data.updated>=data.date,brief.slug)
 }
})
test('new articles omit public research-note blocks',()=>{
 for(const brief of manifest.articles.filter(a=>a.group!=='existing')){
  assert.doesNotMatch(read(brief.slug).content,/^#{1,3}\s*(?:Sources|References|Bibliography)\b/im,brief.slug)
 }
})
test('all internal article links resolve to published articles',()=>{
 for(const brief of manifest.articles){const {content}=read(brief.slug)
  for(const m of content.matchAll(/\]\(\/blog\/([^)#]+)(?:#[^)]*)?\)/g))assert.notEqual(read(m[1]).data.published,false,`${brief.slug} links to unpublished ${m[1]}`)
 }
})
