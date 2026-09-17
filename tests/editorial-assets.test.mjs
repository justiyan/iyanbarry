import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

test('IB icons use parchment lettering on teal at the established sizes', () => {
  const icons = python(`from PIL import Image
import json
out=[]
for name in ['icon.png','apple-touch-icon.png','favicon.ico']:
 im=Image.open('public/'+name).convert('RGB')
 colors=im.getcolors(im.width*im.height)
 out.append({'name':name,'size':list(im.size),'background':list(im.getpixel((0,0))),'parchment':sum(n for n,c in colors if c==(244,242,233))})
print(json.dumps(out))`)
  assert.deepEqual(icons.map(i => i.size), [[192,192], [180,180], [256,256]])
  for (const icon of icons) {
    assert.deepEqual(icon.background, [36,100,92], `${icon.name} teal background`)
    assert.ok(icon.parchment > 100, `${icon.name} parchment monogram`)
  }
})

const cwd = fileURLToPath(new URL('../', import.meta.url))
const python = code => {
  const result = spawnSync('python', ['-c', code], { cwd, encoding: 'utf8' })
  assert.equal(result.status, 0, result.stderr || result.stdout)
  return JSON.parse(result.stdout)
}

test('two-page speaker PDF uses the editorial palette and serif display headings', () => {
  const pdf = python(`import fitz,json
with fitz.open('public/downloads/iyan-barry-speaker-kit.pdf') as doc:
 pages=[]
 for p in doc:
  spans=[s for b in p.get_text('dict')['blocks'] if 'lines' in b for l in b['lines'] for s in l['spans']]
  fills=[tuple(round(v*255) for v in d['fill']) for d in p.get_drawings() if d['fill']]
  pages.append({'fills':fills,'colors':list(set(s['color'] for s in spans)),'headings':[s['font'] for s in spans if s['size']>=28],'rotation':p.rotation,'size':[p.rect.width,p.rect.height]})
 print(json.dumps(pages))`)
  assert.equal(pdf.length, 2)
  for (const page of pdf) {
    assert.ok(page.fills.some(c => c.join(',') === '244,242,233'), 'parchment page background')
    assert.ok(page.fills.some(c => c.join(',') === '225,231,219'), 'sage accent panel')
    for (const hex of ['203b39', '24645c', '53615b']) assert.ok(page.colors.includes(parseInt(hex, 16)), `text palette #${hex}`)
    assert.ok(page.headings.every(font => /Times|Georgia|Fraunces/.test(font)), 'serif display headings')
    assert.equal(page.rotation, 0)
    assert.ok(page.size[1] > page.size[0], 'portrait pages')
  }
})
