import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import ts from 'typescript'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
// Pre-redesign baseline: text, imported data sources, dates, metadata and link
// literals must survive the visual change. Styling and pressed state are excluded.
const contentBaselines = {
  'app/about/page.tsx': 'd2bbb155402e22954ccdc32a22806aed9e69a79b9abcad8c8840f6c93e744541',
  'app/work-with-me/page.tsx': '477c29c85925b59e8eeee6b520785bbc372dfdc5561df989433ca7a8ddd9c354',
  'app/speaking/page.tsx': '5cb2724e1f84abb95e24b023f9aaf2b3bd600eef1cb356118024ca27d9097906',
  'app/contact/page.tsx': 'defc4adf88cbb1e4f8f9f95619a83b6959183e10406d9844450d770e30b5c808',
  // Approved single-publication-date display and publication-month filtering.
  // Unrelated page baselines remain unchanged; behavior has fixture tests.
  'app/blog/BlogClient.tsx': '10ff93a473d76a19369664feebed2edab7d0ac569158d59fcfa88e4e13d3b182',
  'app/blog/page.tsx': '358a7fabed459fb3e521f396dfe05b22f6b6d642571ae81442912dfd36bbe8f7',
  'app/blog/[slug]/page.tsx': '2a6e8ac9f11d77ec074f1968ca633a518c9155e68e6cf2c11b79d4e64f058db7',
  'components/PostDate.tsx': '415c27073d04d9a347d67110c67a823f7d4453121bb814b84538d8780e665993',
}

function contentFingerprint(file) {
  const source = ts.createSourceFile(file, read(file), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const parts = []
  function visit(node) {
    if (ts.isJsxAttribute(node) && ['className', 'aria-pressed'].includes(node.name.getText(source))) return
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isJsxText(node)) {
      // Approved background-only derivative is the same portrait, not a copy change.
      const text = node.text.replace('/images/iyan-barry-parchment.webp', '/images/iyan-barry-cio.jpg').replace(/\s+/g, ' ').trim()
      if (text) parts.push(text)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return createHash('sha256').update(JSON.stringify(parts)).digest('hex')
}

test('inner pages share editorial titles, arch portraits and open ruled content', () => {
  for (const file of Object.keys(contentBaselines).filter(file => file.startsWith('app/') && file !== 'app/blog/page.tsx')) {
    const source = read(file)
    assert.match(source, /<h1 className="[^"]*page-title/, `${file}: shared serif title`)
    assert.match(source, /className="page-hero"/, `${file}: consistent editorial hero rhythm`)
    assert.doesNotMatch(source, /rounded-card|rounded-xl/, `${file}: no legacy boxed panels`)
  }
  for (const file of ['app/about/page.tsx', 'app/speaking/page.tsx']) {
    assert.match(read(file), /editorial-portrait/, `${file}: natural arch portrait`)
  }
  assert.match(read('app/blog/BlogClient.tsx'), /data-post-list className="article-list"/)
  assert.doesNotMatch(read('components/PostDate.tsx'), /font-mono|text-\[10px\]/)
})

test('restyling preserves all existing copy, milestone dates, metadata and link literals', () => {
  for (const [file, expected] of Object.entries(contentBaselines)) {
    assert.equal(contentFingerprint(file), expected, `${file}: content changed during restyle`)
  }
})
