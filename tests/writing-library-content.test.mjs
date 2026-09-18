import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import matter from 'gray-matter'
const root=new URL('../',import.meta.url)
const manifest=JSON.parse(fs.readFileSync(new URL('docs/writing-library/manifest.json',root),'utf8'))
const read=slug=>matter(fs.readFileSync(new URL(`content/blog/${slug}.md`,root),'utf8'))
test('all100 articles have distinct publication dates spanning the approved year',()=>{
 assert.equal(manifest.articles.length,100)
 const files=fs.readdirSync(new URL('content/blog/',root)).filter(f=>f.endsWith('.md'))
 assert.equal(files.length,100)
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
