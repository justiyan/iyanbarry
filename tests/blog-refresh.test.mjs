import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const ts = require('typescript')
require.extensions['.ts'] = (module, filename) => {
  const source = readFileSync(filename, 'utf8')
  module._compile(ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true,
  }}).outputText, filename)
}
const { getSortedPostsData, getPostData, getAllPostSlugs } = require('../lib/blog.ts')

test('revision dates are shown consistently and the newest article is featured', () => {
  for (const path of ['app/page.tsx', 'app/blog/BlogClient.tsx', 'app/blog/[slug]/page.tsx']) {
    assert.ok(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8').includes('@/components/PostDate'), `${path} displays publication or revision dates`)
  }
  const article = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8')
  assert.ok(article.includes('dateModified'))
  assert.ok(article.includes('Originally published'))
  const index = readFileSync(new URL('../app/blog/BlogClient.tsx', import.meta.url), 'utf8')
  assert.ok(index.includes('data-featured-post'))
})

test('writing refresh preserves original dates and exposes real revision dates and reading times', async () => {
  const posts = getSortedPostsData()
  const originalSlugs = [
    'building-an-internal-ai-platform', 'leading-it-teams-in-the-real-world',
    'side-projects-as-a-leadership-lab', 'using-ai-as-an-it-leader',
    'why-i-started-iyanbarry-dot-com',
  ]
  const originals = posts.filter(post => originalSlugs.includes(post.slug))
  assert.equal(originals.length, 5)
  assert.equal(originals[0].slug, 'building-an-internal-ai-platform')
  const revised = posts.find(p => p.slug === 'leading-it-teams-in-the-real-world')
  assert.equal(revised.date, '2023-11-10')
  assert.equal(revised.updated, '2026-09-12', 'substantial revisions have a separate updated date')
  assert.ok(revised.readingMinutes >= 4)
  assert.ok(revised.wordCount >= 800)
  for (const post of originals) {
    const full = await getPostData(post.slug)
    assert.equal(full.updated, post.updated)
    assert.equal(full.readingMinutes, post.readingMinutes)
    assert.ok(full.content.includes('<h2>'))
    assert.ok(post.wordCount >= (post.slug.startsWith('why-i-started') ? 450 : 800))
    assert.doesNotMatch(full.content, /\\u[\da-f]{4}/i)
    assert.doesNotMatch(full.content, /5-10 hours per week|2-3 posts per week|junior developers are using GitHub Copilot/i)
  }
  assert.equal(getAllPostSlugs().length, posts.length)
})
