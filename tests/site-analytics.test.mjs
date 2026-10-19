import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('Vercel Web Analytics is installed and rendered once in the root layout', () => {
  const pkg = JSON.parse(read('package.json'))
  assert.match(pkg.dependencies?.['@vercel/analytics'] ?? '', /^\^?2\./, '@vercel/analytics v2 dependency')
  const layout = read('app/layout.tsx')
  assert.match(layout, /import\s*\{\s*Analytics\s*\}\s*from\s*'@vercel\/analytics\/next'/)
  assert.equal((layout.match(/<Analytics\b/g) || []).length, 1, 'exactly one <Analytics /> element')
  assert.match(layout, /<body>[\s\S]*<Analytics[\s\S]*<\/body>/, 'rendered inside body')
})

test('no other trackers or advertising scripts are added', () => {
  const layout = read('app/layout.tsx')
  assert.doesNotMatch(layout, /googletagmanager|gtag\(|google-analytics|facebook|fbq\(|hotjar|clarity/i)
})

test('privacy page discloses the analytics accurately and stays dated', () => {
  const privacy = read('app/privacy/page.tsx')
  assert.doesNotMatch(privacy, /doesn’t use analytics/, 'old no-analytics statement removed')
  assert.match(privacy, /Vercel Web Analytics/)
  assert.match(privacy, /cookies/i)
  assert.match(privacy, /24 hours/)
  assert.match(privacy, /referr/i)
  assert.match(privacy, /Last updated 20 October 2026/)
  assert.match(privacy, /Google Search Console/)
})
