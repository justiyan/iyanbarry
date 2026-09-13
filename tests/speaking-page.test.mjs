import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

test('speaking page leads with topics instead of a single-entry appearances list', () => {
  const page = readFileSync(new URL('../app/speaking/page.tsx', import.meta.url), 'utf8')
  assert.doesNotMatch(page, /Recent appearances|const appearances|Most recently/)
  assert.match(page, /SectionHead num="01" title="Topics"/)
  assert.match(page, /SectionHead num="02" title="Formats &amp; media kit"/)
  assert.match(page, /Planning an event\?/)
  assert.match(page, /Short bio/)
})
