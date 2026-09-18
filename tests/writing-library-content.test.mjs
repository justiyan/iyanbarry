import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import matter from 'gray-matter'
const root=new URL('../',import.meta.url)
const manifest=JSON.parse(fs.readFileSync(new URL('docs/writing-library/manifest.json',root),'utf8'))
const read=slug=>matter(fs.readFileSync(new URL(`content/blog/${slug}.md`,root),'utf8'))
test('Writing contains every article in the approved100-article collection',()=>{
 const files=fs.readdirSync(new URL('content/blog/',root)).filter(f=>f.endsWith('.md'))
 assert.ok(files.length>=100,`Only ${files.length} articles exist`)
 for(const slug of [...manifest.existing,...manifest.articles.map(a=>a.slug)])assert.ok(files.includes(`${slug}.md`),`Missing ${slug}`)
})
test('new articles retain real publication dates separately from retrospective topic dates',()=>{
 for(const brief of manifest.articles){const {data,content}=read(brief.slug)
  assert.equal(data.date,manifest.publicationDate,brief.slug);assert.equal(data.retrospectiveDate,brief.retrospectiveDate,brief.slug);assert.equal(data.title,brief.title,brief.slug);assert.equal(data.published,true,brief.slug)
  assert.ok(data.retrospectiveDate>=manifest.retrospectiveStart&&data.retrospectiveDate<=manifest.retrospectiveEnd,brief.slug)
  assert.ok((content.match(/\b[\w’'-]+\b/g)||[]).length>=(brief.group==='ai'?700:650),`${brief.slug} is too thin`)
  assert.ok(data.summary.length>40,`${brief.slug} needs a useful summary`)
 }
})
test('new articles omit public research-note blocks',()=>{
 for(const brief of manifest.articles){const {content}=read(brief.slug)
  assert.doesNotMatch(content,/^#{1,3}\s*(?:Sources|References|Bibliography)\b/im,brief.slug)
 }
})
test('all internal article links resolve to published articles',()=>{
 for(const brief of manifest.articles){const {content}=read(brief.slug)
  for(const m of content.matchAll(/\]\(\/blog\/([^)#]+)(?:#[^)]*)?\)/g))assert.notEqual(read(m[1]).data.published,false,`${brief.slug} links to unpublished ${m[1]}`)
 }
})
