import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
test('career timeline includes resume-backed progression without exposing private contact details',()=>{
 const page=read('app/about/page.tsx')
 for(const text of ['2002–2009','Intertranz','2010–2012','Suncorp','2012–Aug 2018','Feb 2019–Jul 2021','Domino','Jul 2021','Sep 2023–Nov 2024','Magical Getaway Foundation','Appointed Chief Information Officer','Internal AI platforms'])assert.ok(page.includes(text),text)
 assert.doesNotMatch(page,/0403|iyanbarry@gmail|Logikos|SPChat|MBA.*completed/i)
 assert.ok(page.includes('key={i.t}'),'multiple milestones can share a year without duplicate keys')
})
