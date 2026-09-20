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

test('one Published date is visible while real modified dates remain machine-readable', async () => {
  const dateModule = load('components/PostDate.tsx')
  const fixture = { slug: 'ai', title: 'AI', date: '2026-09-18', retrospectiveDate: '2025-09-20', updated: '2026-09-19', tags: ['AI'], summary: 'Summary', wordCount: 800, readingMinutes: 4 }
  const markup = renderToStaticMarkup(React.createElement(dateModule.default, fixture))
  assert.match(markup, /Published/)
  assert.match(markup, /dateTime="2026-09-18"/)
  assert.equal((markup.match(/<time /g) || []).length, 1)
  assert.doesNotMatch(markup, /Retrospective|Updated|2026-09-19|2025-09-20/)
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
  const articleMarkup = renderToStaticMarkup(tree)
  assert.doesNotMatch(articleMarkup, /retrospective|Originally published/i)
  assert.equal((articleMarkup.match(/<time /g) || []).length, 1)
  const sitemap = load('app/sitemap.ts', { '@/lib/blog': { getSortedPostsData: () => [fixture] } }).default()
  assert.equal(sitemap.find(p => p.url.endsWith('/blog/ai')).lastModified.toISOString().slice(0, 10), fixture.updated)
  for (const file of ['app/page.tsx', 'app/blog/BlogClient.tsx', 'app/blog/[slug]/page.tsx']) {
    assert.doesNotMatch(readFileSync(path.join(root, file), 'utf8'), /retrospectiveDate|Originally published/)
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
  date: i < 19 ? '2026-09-17' : '2025-09-20',
  summary: i === 65 ? 'A unique procurement lesson' : 'Practical writing',
  tags: i < 19 ? ['AI'] : ['Leadership'], published: true, wordCount: 800, readingMinutes: 4,
}))

test('mobile controls stack at full width without duplicate dating notes', () => {
  const ui = library(fixturePosts())
  const source = readFileSync(path.join(root, 'app/blog/BlogClient.tsx'), 'utf8')
  assert.match(source, /data-writing-controls className="[^"]*flex-col[^\"]*md:flex-row/)
  assert.equal(ui.find(n => n.props?.['aria-label'] === 'Search articles').props.placeholder, 'Search articles')
  for (const label of ['Search articles', 'Publication month']) {
    const control = ui.find(n => n.props?.['aria-label'] === label)
    assert.match(control.props.className, /border-\[#788b80\]/)
    assert.match(control.props.className, /focus:ring-accent/)
  }
  assert.match(source, /data-writing-tags className="[^"]*overflow-x-auto/)
  const markup = ui.markup()
  assert.doesNotMatch(markup, /retrospective|original publication|Updated dates/i)
})

test('publication month options include all posts and format their dates', () => {
  const posts = fixturePosts()
  let ui = library(posts)
  assert.match(ui.markup(), /All months/)
  assert.match(ui.markup(), /September 2025/)
  assert.match(ui.markup(), /September 2026/)
  posts[0] = { ...posts[0], date: '2026-08-21' }
  ui = library(posts)
  assert.match(ui.markup(), /August 2026/)
  assert.equal(load('components/PostDate.tsx').formatPostMonth('2026-08-21'), 'August 2026')
})

test('search, tag and publication month filters reset pagination and clear empty results', () => {
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
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Publication month').props.onChange({ target: { value: '2025-09' } }))
  assert.deepEqual(ui.slugs(), [])
  assert.match(ui.markup(), /No articles match these filters/)
  assert.equal(ui.find(n => n.props?.['aria-label'] === 'Next page').props.disabled, true)
  clear()
  assert.equal(ui.slugs()[0], 'article-0')
  assert.equal(ui.slugs().length, 20)
  assert.ok(ui.find(n => Object.hasOwn(n.props || {}, 'data-featured-post')))
  next()
  ui.act(() => ui.find(n => n.props?.['aria-label'] === 'Publication month').props.onChange({ target: { value: '2025-09' } }))
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

test('pagination covers all 100 articles exactly once, with 20 including the first-page feature', () => {
  const ui = library(fixturePosts())
  const seen = []
  let page = 1
  while (true) {
    const slugs = ui.slugs()
    assert.equal(slugs.length, 20)
    assert.equal(Boolean(ui.find(n => Object.hasOwn(n.props || {}, 'data-featured-post'))), page === 1)
    const previous = ui.find(n => n.props?.['aria-label'] === 'Previous page')
    const next = ui.find(n => n.props?.['aria-label'] === 'Next page')
    assert.equal(previous.props.disabled, page === 1)
    seen.push(...slugs)
    if (next.props.disabled) break
    ui.act(() => next.props.onClick())
    page++
    assert.ok(page <= 5)
  }
  assert.deepEqual(seen, fixturePosts().map(p => p.slug))
  assert.equal(new Set(seen).size, 100)
  assert.equal(page, 5)
  assert.match(ui.markup(), /81–100 of 100 articles/)
})

test('weekly additions create a partial final page without omissions', () => {
  const posts = [...fixturePosts(), { ...fixturePosts()[0], slug: 'weekly-new', title: 'Weekly new article' }]
  const ui = library(posts)
  const seen = []
  const counts = []
  while (true) {
    counts.push(ui.slugs().length)
    seen.push(...ui.slugs())
    const next = ui.find(n => n.props?.['aria-label'] === 'Next page')
    if (next.props.disabled) break
    ui.act(() => next.props.onClick())
    assert.ok(counts.length <= 6)
  }
  assert.deepEqual(counts, [20, 20, 20, 20, 20, 1])
  assert.deepEqual(seen, posts.map(p => p.slug))
  assert.match(ui.markup(), /101–101 of 101 articles/)
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

test('legacy retrospective metadata is excluded without changing publication dates', async () => {
  await withPosts([
    { slug: 'malformed', date: '2026-09-18', retrospectiveDate: '2025-09-20' },
    { slug: 'impossible', date: '2026-09-18', retrospectiveDate: '2026-02-30' },
    { slug: 'future-topic', date: '2026-09-18', retrospectiveDate: '2026-09-19' },
  ], async api => {
    for (const post of api.getSortedPostsData()) {
      assert.equal(Object.hasOwn(post, 'retrospectiveDate'), false)
      assert.equal(post.date, '2026-09-18')
      assert.equal((await api.getPostData(post.slug)).retrospectiveDate, undefined)
    }
  })
})

test('newest publication sorts first even when older posts are updated today; ties use slug', async () => {
  await withPosts([
    { slug: 'a-old-topic', date: '2026-09-18', retrospectiveDate: '2025-09-20' },
    { slug: 'z-new-ai', date: '2026-09-18', retrospectiveDate: '2026-09-17' },
    { slug: 'later-publication', date: '2026-09-19', retrospectiveDate: '2025-01-01' },
    { slug: 'revised', date: '2023-11-10', updated: '2026-09-20' },
    { slug: 'original', date: '2026-09-17' },
    { slug: 'draft', date: '2026-09-21', published: false },
  ], async api => {
    const posts = api.getSortedPostsData()
    assert.deepEqual(posts.map(p => p.slug), ['later-publication', 'a-old-topic', 'z-new-ai', 'original', 'revised'])
    assert.equal(await api.getPostData('draft'), null)
    assert.ok(!api.getAllPostSlugs().some(p => p.params.slug === 'draft'))
    assert.ok(posts.every(p => !Object.hasOwn(p, 'content')), 'client metadata excludes article bodies')
    assert.equal(posts[4].retrospectiveDate, undefined, 'existing posts remain compatible')
  })
})
