import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('visitors can discover the internal AI offering and follow its service anchor', () => {
  const home = read('app/page.tsx')
  const work = read('app/work-with-me/page.tsx')
  assert.ok(home.includes('Technology leadership, with the ability to build.'), 'homepage leads with the broader CIO positioning')
  assert.ok(home.indexOf('id="capabilities"') < home.indexOf('id="internal-ai-platforms"'), 'breadth is visible before the featured AI offer')
  assert.ok(home.includes('/work-with-me#internal-ai-platforms'), 'homepage links to the detailed offer')
  assert.ok(work.includes('id="internal-ai-platforms"'), 'service anchor exists')
  assert.ok(work.includes('Custom internal AI platforms'), 'service is named')
  assert.ok(work.includes('external managed services'), 'processing boundary is explained')
  assert.ok(work.includes('working platform'), 'build outcome is more than a report')
  assert.ok(work.includes('existing CIO'), 'existing technology leadership is not excluded')
  assert.ok(home.includes('Let’s talk'), 'primary invitation is not limited to AI')
  const capabilities = read('lib/capabilities.ts')
  for (const title of ['Technology strategy & leadership', 'AI & automation', 'Cybersecurity & governance', 'Data & integration']) {
    assert.ok(capabilities.includes(title), `${title} is visible`)
  }
  for (const path of ['app/page.tsx', 'app/work-with-me/page.tsx', 'app/about/page.tsx']) {
    assert.ok(read(path).includes("@/lib/capabilities"), `${path} includes broader capabilities`)
  }
  assert.ok(read('app/about/page.tsx').includes('familiar with SMB1001 and ISO 27032'), 'framework familiarity is stated accurately')
  assert.ok(read('lib/speaker-kit.json').includes('familiar with SMB1001 and ISO 27032'), 'speaker bio reflects familiarity, not implementation')
  for (const path of ['app/page.tsx', 'app/work-with-me/page.tsx', 'app/about/page.tsx', 'app/speaking/page.tsx', 'app/contact/page.tsx', 'app/layout.tsx', 'lib/metadata.ts', 'lib/capabilities.ts']) {
    const source = read(path)
    assert.doesNotMatch(source, /ISO 27001 \/ ISO 27032 alignment|ISO 27032 and SMB1001-aligned controls|aligning controls to ISO 27001, ISO 27032, SMB1001/, `${path}: no overstated framework claims`)
    assert.doesNotMatch(source, /\\u[\da-f]{4}/i, `${path}: no literal unicode escapes`)
    assert.doesNotMatch(source, /age sixteen|aged sixteen|at sixteen/i, `${path}: age wording stays removed`)
  }
})
