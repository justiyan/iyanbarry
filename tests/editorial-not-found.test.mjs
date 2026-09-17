import test from 'node:test'
import assert from 'node:assert/strict'
import {existsSync,readFileSync} from 'node:fs'
test('missing pages use the shared editorial layout and a working recovery link',()=>{
 const p=new URL('../app/not-found.tsx',import.meta.url)
 assert.ok(existsSync(p),'custom branded missing-page view')
 const s=readFileSync(p,'utf8');assert.ok(s.includes('Layout')&&s.includes('page-title')&&s.includes('href="/"'))
})
