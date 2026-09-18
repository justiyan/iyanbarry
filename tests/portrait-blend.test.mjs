import test from 'node:test'
import assert from 'node:assert/strict'
import {existsSync,readFileSync} from 'node:fs'
import {execFileSync} from 'node:child_process'
test('all on-page portraits use the blended derivative, retaining the original download',()=>{
 for(const p of ['app/page.tsx','app/about/page.tsx','app/speaking/page.tsx'])assert.ok(readFileSync(p,'utf8').includes('/images/iyan-barry-parchment.webp'),p)
 assert.ok(existsSync('public/images/iyan-barry-cio.jpg'))
})
test('blended portrait has parchment background while preserving foreground pixels',()=>{
 assert.ok(existsSync('public/images/iyan-barry-parchment.webp'),'blended derivative exists')
 const result=JSON.parse(execFileSync('python',['-c',`from PIL import Image
import numpy as np,json
old=np.array(Image.open('public/images/iyan-barry-cio.jpg').convert('RGB'));new=np.array(Image.open('public/images/iyan-barry-parchment.webp').convert('RGB'))
# central face and dark jacket regions: no regenerated or graded subject
regions=[(550,350,760,650),(500,1020,1050,1380)]
print(json.dumps({'size':list(new.shape),'topMatches':bool(np.all(new[:70]==[244,242,233])),'preserved':all(np.array_equal(old[y1:y2,x1:x2],new[y1:y2,x1:x2]) for x1,y1,x2,y2 in regions)}))`],{encoding:'utf8'}))
 assert.deepEqual(result.size,[1400,1400,3]);assert.ok(result.topMatches);assert.ok(result.preserved)
})
