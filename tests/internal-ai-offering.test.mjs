import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('visitors can discover the internal AI offering and follow its service anchor', () => {
  const home = read('app/page.tsx')
  const work = read('app/work-with-me/page.tsx')
  assert.ok(home.includes('Give your people powerful AI.'), 'homepage leads with the approved AI positioning')
  assert.ok(home.includes('/work-with-me#internal-ai-platforms'), 'homepage links to the detailed offer')
  assert.ok(work.includes('id="internal-ai-platforms"'), 'service anchor exists')
  assert.ok(work.includes('Custom internal AI platforms'), 'service is named')
  assert.ok(work.includes('external managed services'), 'processing boundary is explained')
  assert.ok(work.includes('working platform'), 'build outcome is more than a report')
  assert.ok(work.includes('existing CIO'), 'existing technology leadership is not excluded')
  for (const path of ['app/page.tsx', 'app/work-with-me/page.tsx', 'app/layout.tsx', 'lib/metadata.ts']) {
    const source = read(path)
    assert.doesNotMatch(source, /\\u[\da-f]{4}/i, `${path}: no literal unicode escapes`)
    assert.doesNotMatch(source, /age sixteen|aged sixteen|at sixteen/i, `${path}: age wording stays removed`)
  }
})
