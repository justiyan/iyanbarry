import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { createRequire, Module } from 'node:module'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const passthrough = ({ children }) => React.createElement('div', null, children)
const link = ({ children, ...props }) => React.createElement('a', props, children)
function nodes(tree, predicate) {
  if (!tree || typeof tree !== 'object') return []
  if (Array.isArray(tree)) return tree.flatMap(child => nodes(child, predicate))
  return [...(predicate(tree) ? [tree] : []), ...nodes(tree.props?.children, predicate)]
}

test('retrospective labels remain separate from visible and machine-readable publication dates', async () => {
  const dateModule = load('components/PostDate.tsx')
  const fixture = { slug: 'ai', title: 'AI', date: '2026-09-18', retrospectiveDate: '2025-09-20', updated: '2026-09-19', tags: ['AI'], summary: 'Summary', wordCount: 800, readingMinutes: 4 }
  const markup = renderToStaticMarkup(React.createElement(dateModule.default, fixture))
  assert.match(markup, /Retrospective · September 2025/)
  assert.match(markup, /dateTime="2026-09-19"/)
  assert.doesNotMatch(markup, /dateTime="2025-09-20"/)
  const article = load('app/blog/[slug]/page.tsx', {
    'next/navigation': { notFound: () => { throw new Error('not found') } },
    'next/link': link, '@/components/Layout': passthrough, '@/components/ui': { Shell: passthrough },
    '@/components/PostDate': dateModule,
    '@/lib/blog': { getPostData: async () => fixture },
    '@/lib/metadata': { generateMetadata: () => ({}) },
  })
  const meta = await article.generateMetadata({ params: { slug: 'ai' } })
  assert.equal(meta.openGraph.publishedTime, fixture.date)
  assert.equal(meta.openGraph.modifiedTime, fixture.updated)
  const tree = await article.default({ params: { slug: 'ai' } })
  const script = nodes(tree, node => node.type === 'script')[0]
  const schema = JSON.parse(script.props.dangerouslySetInnerHTML.__html)
  assert.equal(schema.datePublished, fixture.date)
  assert.equal(schema.dateModified, fixture.updated)
  assert.match(renderToStaticMarkup(tree), /not an earlier publication date/)
  const sitemap = load('app/sitemap.ts', { '@/lib/blog': { getSortedPostsData: () => [fixture] } }).default()
  assert.equal(sitemap.find(p => p.url.endsWith('/blog/ai')).lastModified.toISOString().slice(0, 10), fixture.updated)
  for (const file of ['app/page.tsx', 'app/blog/BlogClient.tsx', 'app/blog/[slug]/page.tsx']) {
    assert.match(readFileSync(path.join(root, file), 'utf8'), /retrospectiveDate=\{(?:post|p|featured)\.retrospectiveDate\}/)
  }
})
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..')
function load(relative, overrides = {}) {
  const filename = path.join(root, relative)
  const mod = new Module(filename)
  mod.filename = filename
  mod.paths = Module._nodeModulePaths(root)
  mod.require = id => Object.hasOwn(overrides, id) ? overrides[id] : require(id)
  mod._compile(ts.transpileModule(readFileSync(filename, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX,
  }}).outputText, filename)
  return mod.exports
}

// Exercise the component's real event handlers with deterministic hook state.
// Browser hydration/focus/layout are checked separately in parent browser QA.
function library(posts) {
  const state = []
  let cursor = 0
  const hooks = {
    ...React,
    useMemo: compute => compute(),
    useRef: initial => {
      const index = cursor++
      if (!(index in state)) state[index] = { current: initial }
      return state[index]
    },
    useState: initial => {
      const index = cursor++
      if (!(index in state)) state[index] = initial
      return [state[index], value => { state[index] = typeof value === 'function' ? value(state[index]) : value }]
    },
  }
  const Client = load('app/blog/BlogClient.tsx', {
    react: hooks, 'next/link': link, '@/components/ui': { Shell: passthrough },
    '@/components/PostDate': load('components/PostDate.tsx'),
  }).default
  let tree
  const render = () => { cursor = 0; tree = Client({ posts }); return tree }
  render()
  return {
    get tree() { return tree },
    find: predicate => nodes(tree, predicate)[0],
    markup: () => renderToStaticMarkup(tree),
    act: callback => { callback(); render() },
    slugs: () => {
      const results = nodes(tree, n => Object.hasOwn(n.props || {}, 'data-writing-results'))[0]
      return [...new Set(nodes(results, n => n.props?.href?.startsWith('/blog/')).map(n => n.props.href.slice(6)))]
    },
  }
}
const fixturePosts = () => Array.from({ length: 100 }, (_, i) => ({
  slug: `article-${i}`, title: i === 0 ? 'Newest AI article' : `Article ${i}`,
  date: '2026-09-18', retrospectiveDate: i < 19 ? '2026-09-17' : '2025-09-20',
  summary: i === 65 ? 'A unique procurement lesson' : 'Practical writing',
  tags: i < 19 ? ['AI'] : ['Leadership'], published: true, wordCount: 800, readingMinutes: 4,
}))

test('mobile controls stack at full width and retrospective note precedes controls', () => {
  const ui = library(fixturePosts())
  const source = readFileSync(path.join(root, 'app/blog/BlogClient.tsx'), 'utf8')
  assert.match(source, /data-writing-controls className="[^"]*flex-col[^\"]*md:flex-row/)
  assert.equal(ui.find(n => n.props?.['aria-label'] === 'Search articles').props.placeholder, 'Search articles')
  for (const label of ['Search articles', 'Retrospective month']) {
    const control = ui.find(n => n.props?.['aria-label'] === label)
    assert.match(control.props.className, /border-\[#788b80\]/)
    assert.match(control.props.className, /focus:ring-accent/)
  }
  assert.match(source, /data-writing-tags className="[^"]*overflow-x-auto/)
  const markup = ui.markup()
  assert.ok(markup.indexOf('Retrospective articles published') < markup.indexOf('data-writing-controls'))
})

test('archive note derives real publication and retrospective ranges from metadata', () => {
  const posts = fixturePosts()
  let ui = library(posts)
  assert.match(ui.markup(), /Retrospective articles published 18 September 2026/)
  assert.match(ui.markup(), /September 2025–September 2026/)
  assert.match(ui.markup(), /not earlier publication/)
  posts[0] = { ...posts[0], date: '2026-09-21' }
  ui = library(posts)
  assert.match(ui.markup(), /18 September 2026–21 September 2026/)
  assert.doesNotMatch(library([{ ...posts[0], retrospectiveDate: undefined }]).markup(), /Retrospective articles published/)
})

test('search, tag and retrospective month filters reset pagination and clear empty results', () => {
  const ui = library(fixturePosts())
  const next = () => ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Next page').props.onClick())
  const search = value => ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Search articles').props.onChange({ target: { value } }))
  const clear = () => ui.act(() => ui.find(n => n.type === 'button' && n.props.children === 'Clear filters').props.onClick())
  next(); next()
  assert.ok(ui.find(n => n.props?.['aria-label'] === 'Search articles'), 'search has an accessible label')
  search('  PROCUREMENT  ')
  assert.deepEqual(ui.slugs(), ['article-65'], 'summary search is case-insensitive and trimmed')
  assert.equal(ui.find(n => n.props?.['aria-label'] === 'Previous page').props.disabled, true)
  assert.equal(ui.find(n => Object.hasOwn(n.props || {}, 'data-featured-post')), undefined)
  search('Newest AI')
  assert.deepEqual(ui.slugs(), ['article-0'], 'title search')
  search('Leadership')
  assert.equal(ui.slugs()[0], 'article-19', 'tag text is searchable')
  clear(); next()
  ui.act(() => ui.find(n => n.type === 'button' && n.props.children === 'AI').props.onClick())
  assert.equal(ui.slugs()[0], 'article-0', 'tag change returns to page one')
  assert.equal(ui.find(n => n.type === 'button' && n.props.children === 'AI').props['aria-pressed'], true)
  next()
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Retrospective month').props.onChange({ target: { value: '2025-09' } }))
  assert.deepEqual(ui.slugs(), [])
  assert.match(ui.markup(), /No articles match these filters/)
  assert.equal(ui.find(n => n.props?.['aria-label'] === 'Next page').props.disabled, true)
  clear()
  assert.equal(ui.slugs()[0], 'article-0')
  assert.equal(ui.slugs().length, 12)
  assert.ok(ui.find(n => Object.hasOwn(n.props || {}, 'data-featured-post')))
  next()
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Retrospective month').props.onChange({ target: { value: '2025-09' } }))
  assert.equal(ui.slugs()[0], 'article-19')
  assert.ok(ui.find(n => n.props?.['aria-live'] === 'polite'))
})

test('page buttons focus and scroll the results region; search does not force scrolling', () => {
  const ui = library(fixturePosts())
  const region = ui.find(n => Object.hasOwn(n.props || {}, 'data-writing-results'))
  assert.equal(region.props.tabIndex, -1)
  assert.equal(region.props.role, 'region')
  assert.match(region.props.className, /scroll-mt-\[100px\]/)
  const events = []
  region.ref.current = {
    focus: options => events.push(['focus', options]),
    scrollIntoView: options => events.push(['scroll', options]),
  }
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Next page').props.onClick())
  assert.deepEqual(events, [['focus', { preventScroll: true }], ['scroll', { block: 'start', behavior: 'auto' }]])
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Previous page').props.onClick())
  assert.equal(events.length, 4)
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Search articles').props.onChange({ target: { value: 'AI' } }))
  assert.equal(events.length, 4)
})

test('pagination covers all 100 articles exactly once, with 12 including the first-page feature', () => {
  const ui = library(fixturePosts())
  const seen = []
  let page = 1
  while (true) {
    const slugs = ui.slugs()
    assert.equal(slugs.length, page < 9 ? 12 : 4)
    assert.equal(Boolean(ui.find(n => Object.hasOwn(n.props || {}, 'data-featured-post'))), page === 1)
    const previous = ui.find(n => n.props?.['aria-label'] === 'Previous page')
    const next = ui.find(n => n.props?.['aria-label'] === 'Next page')
    assert.equal(previous.props.disabled, page === 1)
    seen.push(...slugs)
    if (next.props.disabled) break
    ui.act(() => next.props.onClick())
    page++
    assert.ok(page <= 9)
  }
  assert.deepEqual(seen, fixturePosts().map(p => p.slug))
  assert.equal(new Set(seen).size, 100)
  assert.match(ui.markup(), /97–100 of 100 articles/)
})

async function withPosts(entries, run) {
  const dir = mkdtempSync(path.join(tmpdir(), 'writing-library-'))
  const previous = process.cwd()
  mkdirSync(path.join(dir, 'content/blog'), { recursive: true })
  for (const entry of entries) {
    const { slug, ...data } = entry
    writeFileSync(path.join(dir, 'content/blog', `${slug}.md`), `---\n${JSON.stringify({ title: slug, summary: 'Fixture summary', tags: ['AI'], ...data })}\n---\n## Body\n\nPrivate article body.`)
  }
  try {
    process.chdir(dir)
    return await run(load('lib/blog.ts'))
  } finally {
    process.chdir(previous)
    rmSync(dir, { recursive: true, force: true })
  }
}

test('invalid or post-publication retrospective dates are ignored without changing real dates', async () => {
  await withPosts([
    { slug: 'malformed', date: '2026-09-18', retrospectiveDate: 'not-a-date' },
    { slug: 'impossible', date: '2026-09-18', retrospectiveDate: '2026-02-30' },
    { slug: 'future-topic', date: '2026-09-18', retrospectiveDate: '2026-09-19' },
  ], async api => {
    for (const post of api.getSortedPostsData()) {
      assert.equal(post.retrospectiveDate, undefined)
      assert.equal(post.date, '2026-09-18')
      assert.equal((await api.getPostData(post.slug)).retrospectiveDate, undefined)
    }
  })
})

test('real publication/revision dates sort first; retrospective ties descend before slug', async () => {
  await withPosts([
    { slug: 'a-old-topic', date: '2026-09-18', retrospectiveDate: '2025-09-20' },
    { slug: 'z-new-ai', date: '2026-09-18', retrospectiveDate: '2026-09-17' },
    { slug: 'later-publication', date: '2026-09-19', retrospectiveDate: '2025-01-01' },
    { slug: 'revised', date: '2023-11-10', updated: '2026-09-20' },
    { slug: 'original', date: '2026-09-17' },
    { slug: 'draft', date: '2026-09-21', published: false },
  ], async api => {
    const posts = api.getSortedPostsData()
    assert.deepEqual(posts.map(p => p.slug), ['revised', 'later-publication', 'z-new-ai', 'a-old-topic', 'original'])
    assert.equal(posts[2].retrospectiveDate, '2026-09-17')
    assert.equal((await api.getPostData('z-new-ai')).retrospectiveDate, '2026-09-17')
    assert.ok(posts.every(p => !Object.hasOwn(p, 'content')), 'client metadata excludes article bodies')
    assert.equal(posts[4].retrospectiveDate, undefined, 'existing posts remain compatible')
  })
})
