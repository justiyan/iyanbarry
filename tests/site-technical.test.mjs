import test from 'node:test'
import assert from 'node:assert/strict'
import {createRequire} from 'node:module'
import {readFileSync,existsSync} from 'node:fs'
const require=createRequire(import.meta.url)
test('www permanently redirects every path to the canonical apex host',async()=>{
 const config=require('../next.config.js')
 assert.equal(typeof config.redirects,'function')
 const rules=await config.redirects()
 assert.deepEqual(rules.find(r=>r.has?.some(h=>h.type==='host'&&h.value==='www.iyanbarry.com')),{source:'/:path*',has:[{type:'host',value:'www.iyanbarry.com'}],destination:'https://iyanbarry.com/:path*',permanent:true})
})
test('favicon is a real multi-size ICO and metadata exposes it',()=>{
 const path=new URL('../public/favicon.ico',import.meta.url)
 assert.ok(existsSync(path),'favicon exists')
 const ico=readFileSync(path);assert.equal(ico.readUInt16LE(2),1);assert.ok(ico.readUInt16LE(4)>=3)
 assert.match(readFileSync(new URL('../app/layout.tsx',import.meta.url),'utf8'),/favicon.ico/)
})
