import test from 'node:test'
import assert from 'node:assert/strict'
import {execFileSync} from 'node:child_process'
test('social sharing image uses the approved 1200x630 parchment composition',()=>{
 const result=JSON.parse(execFileSync('python',['-c',"from PIL import Image;import json;i=Image.open('public/images/iyan-barry-og.jpg');print(json.dumps({'size':i.size,'corner':i.getpixel((10,10))}))"],{encoding:'utf8'}))
 assert.deepEqual(result.size,[1200,630])
 assert.ok(result.corner.every((x,i)=>Math.abs(x-[244,242,233][i])<5))
})
