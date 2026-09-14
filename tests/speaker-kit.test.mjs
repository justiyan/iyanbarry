import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = new URL('../', import.meta.url)
const read = path => readFileSync(new URL(path, root), 'utf8')

test('speaking content covers broad CIO decisions with concrete audience takeaways', () => {
  assert.ok(existsSync(new URL('lib/speaker-kit.json', root)), 'shared speaker content must exist')
  const kit = JSON.parse(read('lib/speaker-kit.json'))
  assert.equal(kit.topics.length, 6)
  for (const topic of kit.topics) {
    assert.ok(topic.audience.length > 10)
    assert.ok(topic.takeaway.length > 40)
  }
  const topics = JSON.stringify(kit.topics)
  for (const pattern of [/AI/, /internal platforms/i, /cyber/i, /team/i, /data/i, /jurisdictions/i]) assert.match(topics, pattern)
  assert.doesNotMatch(topics + kit.intro, /\b(vulnerable|children|care|health|not-for-profit)\b/i)
  assert.match(kit.bios.map(b => b.text).join(' '), /iTnews State of Data & AI/)
  const page = read('app/speaking/page.tsx')
  assert.match(page, /import speakerKit from '@\/lib\/speaker-kit.json'/)
  assert.match(page, /t.takeaway/)
  assert.doesNotMatch(page, /Recent appearances|transparent-background/)
})

test('downloaded kit and bios reproduce the shared content in at most two PDF pages', () => {
  const kit = JSON.parse(read('lib/speaker-kit.json'))
  for (const asset of kit.downloads) assert.ok(existsSync(new URL(`public${asset.href}`, root)), `missing ${asset.href}`)
  const bios = read('public/downloads/iyan-barry-bios.txt')
  for (const bio of kit.bios) assert.ok(bios.includes(bio.text))
  const result = spawnSync('python', ['-c', `import fitz,json; d=fitz.open('public/downloads/iyan-barry-speaker-kit.pdf'); print(json.dumps({'pages':len(d),'text':' '.join(p.get_text() for p in d),'links':sum(len(p.get_links()) for p in d)}))`], { cwd: fileURLToPath(root), encoding: 'utf8' })
  assert.equal(result.status, 0, result.stderr)
  const pdf = JSON.parse(result.stdout)
  assert.equal(pdf.pages, 2)
  assert.ok(pdf.links >= 2)
  const normalise = s => s.replace(/\s+/g, ' ').trim()
  for (const topic of kit.topics) {
    assert.ok(normalise(pdf.text).includes(normalise(topic.title)), topic.title)
    assert.ok(normalise(pdf.text).includes(normalise(topic.takeaway)), topic.takeaway)
  }
  for (const bio of kit.bios) assert.ok(normalise(pdf.text).includes(normalise(bio.text)), bio.len)
})

test('portrait downloads retain the approved website photo without claiming an uncropped original', () => {
  const kit = JSON.parse(read('lib/speaker-kit.json'))
  assert.ok(kit.downloads.some(a => a.href === '/downloads/iyan-barry-portrait.jpg'))
  assert.ok(kit.downloads.some(a => a.href === '/downloads/iyan-barry-portrait-square.jpg'))
  assert.deepEqual(readFileSync(new URL('public/downloads/iyan-barry-portrait.jpg', root)), readFileSync(new URL('public/images/iyan-barry-cio.jpg', root)))
  assert.ok(kit.downloads.some(a => /website crop/i.test(a.detail)))
})
