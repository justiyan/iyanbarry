'use client'

import Link from 'next/link'
import { useState, useMemo, useRef } from 'react'
import { Shell } from '@/components/ui'
import type { BlogPost } from '@/lib/blog'
import PostDate, { formatPostMonth } from '@/components/PostDate'

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [tag, setTag] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [month, setMonth] = useState('')
  const resultsRef = useRef<HTMLDivElement>(null)
  const goToPage = (nextPage: number) => {
    setPage(nextPage)
    resultsRef.current?.focus({ preventScroll: true })
    resultsRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' })
  }
  const search = query.trim().toLocaleLowerCase('en-AU')
  const hasFilters = Boolean(tag || search || month)
  const months = useMemo(() => Array.from(new Set(posts.map(p => p.date.slice(0, 7)))).sort().reverse(), [posts])
  const clearFilters = () => { setTag(null); setQuery(''); setMonth(''); setPage(1) }


  const tags = useMemo(() => {
    const s = new Set<string>()
    posts.forEach((p) => p.tags.forEach((t) => s.add(t)))
    return Array.from(s).sort()
  }, [posts])

  const filtered = useMemo(
    () => posts.filter(p => (!tag || p.tags.includes(tag))
      && (!month || p.date.startsWith(month))
      && (!search || [p.title, p.summary, ...p.tags].join(' ').toLocaleLowerCase('en-AU').includes(search))),
    [posts, tag, month, search]
  )
  const pageSize = 20
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const start = (currentPage - 1) * pageSize
  const visible = filtered.slice(start, start + pageSize)
  const featured = !hasFilters && currentPage === 1 ? visible[0] : null
  const listed = featured ? visible.slice(1) : visible

  return (
    <>
      <div className="page-hero">
        <Shell>
          <h1 className="page-title mb-s4 max-w-[18ch]">Writing</h1>
          <p className="max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            Practical writing about leading technology teams, building useful tools and making
            better decisions about AI, security and data. The details that matter when you have
            to make something work.
          </p>

        </Shell>
      </div>

      <Shell className="py-s6">
        <div data-writing-controls className="mb-s4 flex flex-col items-stretch gap-s3 md:flex-row md:items-end">
          <label className="min-w-0 w-full md:flex-1 text-[14px] text-ink-2">
            Search articles
            <input type="search" aria-label="Search articles" value={query}
              onChange={event => { setQuery(event.target.value); setPage(1) }}
              placeholder="Search articles"
              className="mt-s2 block min-h-[44px] w-full border border-[#788b80] bg-surface px-4 py-2 text-ink focus:border-accent focus:ring-2 focus:ring-accent" />
          </label>
          {months.length > 0 && (
            <label className="w-full md:w-auto text-[14px] text-ink-2">
              Publication month
              <select aria-label="Publication month" value={month}
                onChange={event => { setMonth(event.target.value); setPage(1) }}
                className="mt-s2 block min-h-[44px] w-full border border-[#788b80] bg-surface px-4 py-2 text-ink focus:border-accent focus:ring-2 focus:ring-accent">
                <option value="">All months</option>
                {months.map(value => <option key={value} value={value}>{formatPostMonth(`${value}-01`)}</option>)}
              </select>
            </label>
          )}
          {hasFilters && <button onClick={clearFilters} className="min-h-[44px] px-3 py-2 text-[14px] text-accent underline">Clear filters</button>}
        </div>
        <div data-writing-tags className="mb-s5 flex gap-s2 overflow-x-auto p-1 md:flex-wrap [&>button]:shrink-0 [&>button]:whitespace-nowrap">
          <button
            aria-pressed={tag === null}
            onClick={() => { setTag(null); setPage(1) }}
            className={`min-h-[44px] rounded-full border px-4 py-2 text-[14px] transition-colors ${
              tag === null ? 'border-accent bg-accent text-surface' : 'border-hairline text-ink-2 hover:border-accent'
            }`}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              aria-pressed={tag === t}
              onClick={() => { setTag(t); setPage(1) }}
              className={`min-h-[44px] rounded-full border px-4 py-2 text-[14px] transition-colors ${
                tag === t ? 'border-accent bg-accent text-surface' : 'border-hairline text-ink-2 hover:border-accent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div data-writing-results ref={resultsRef} role="region" aria-label="Articles" tabIndex={-1} className="scroll-mt-[100px] focus-visible:outline-accent">
        {featured && (
          <article data-featured-post className="mb-s6 border-y border-hairline bg-surface-2 p-8 md:p-12 max-md:px-5">
            <p className="eyebrow mb-s4">Latest writing</p>
            <h2 className="mb-s4 max-w-[30ch] font-display text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.15] tracking-[-0.03em]">
              <Link href={`/blog/${featured.slug}`} className="hover:text-accent">{featured.title}</Link>
            </h2>
            <p className="mb-s4 max-w-[65ch] text-[17px] leading-[1.65] text-ink-2">{featured.summary}</p>
            <div className="flex flex-wrap items-end gap-s4">
              <PostDate date={featured.date} />
              <span className="text-[13px] text-ink-3">{featured.readingMinutes} min read</span>
              <Link href={`/blog/${featured.slug}`} className="text-link">Read the article →</Link>
            </div>
          </article>
        )}

        <div data-post-list className="article-list">
          {listed.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid grid-cols-[175px_1fr] items-baseline gap-7 border-b border-hairline py-8 first:border-t max-md:grid-cols-1 max-md:gap-3"
            >
              <PostDate date={p.date} />
              <div>
                <h2 className="mb-3 font-display text-[28px] font-normal leading-[1.25] tracking-[-0.02em] transition-colors group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="text-[16px] leading-[1.7] text-ink-2">{p.summary}</p>
                <p className="mt-s2 text-[13px] text-ink-3">{p.readingMinutes} min read</p>
              </div>
            </Link>
          ))}
        </div>

        </div>

        {filtered.length === 0 && (
          <p className="py-s6 text-[15px] text-ink-3">No articles match these filters. Try another search or clear the filters.</p>
        )}

        <p aria-live="polite" className="mt-s5 text-[14px] text-ink-3">
          {filtered.length ? `${start + 1}–${start + visible.length}` : '0'} of {filtered.length} articles
          {hasFilters && ` (${posts.length} in the library)`}
        </p>
        <nav data-writing-pagination aria-label="Writing pages" className="mt-s4 flex flex-wrap items-center gap-s4">
          <button aria-label="Previous page" disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            className="min-h-[44px] border border-hairline px-4 py-2 text-[14px] hover:border-accent disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
          <span className="text-[14px] text-ink-3">Page {currentPage} of {pageCount}</span>
          <button aria-label="Next page" disabled={currentPage === pageCount}
            onClick={() => goToPage(currentPage + 1)}
            className="min-h-[44px] border border-hairline px-4 py-2 text-[14px] hover:border-accent disabled:cursor-not-allowed disabled:opacity-40">Next</button>
        </nav>

      </Shell>
    </>
  )
}
