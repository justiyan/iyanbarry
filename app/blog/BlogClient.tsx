'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Shell } from '@/components/ui'
import type { BlogPost } from '@/lib/blog'
import PostDate from '@/components/PostDate'

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [tag, setTag] = useState<string | null>(null)

  const tags = useMemo(() => {
    const s = new Set<string>()
    posts.forEach((p) => p.tags.forEach((t) => s.add(t)))
    return Array.from(s).sort()
  }, [posts])

  const filtered = useMemo(
    () => (tag ? posts.filter((p) => p.tags.includes(tag)) : posts),
    [posts, tag]
  )
  const featured = !tag ? filtered[0] : null
  const listed = featured ? filtered.slice(1) : filtered

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
        <div className="mb-s5 flex flex-wrap gap-s2">
          <button
            onClick={() => setTag(null)}
            className={`min-h-[44px] rounded-full border px-4 py-2 text-[14px] transition-colors ${
              tag === null ? 'border-accent bg-accent text-surface' : 'border-hairline text-ink-2 hover:border-accent'
            }`}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`min-h-[44px] rounded-full border px-4 py-2 text-[14px] transition-colors ${
                tag === t ? 'border-accent bg-accent text-surface' : 'border-hairline text-ink-2 hover:border-accent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {featured && (
          <article data-featured-post className="mb-s6 border-y border-hairline bg-surface-2 p-8 md:p-12 max-md:px-5">
            <p className="eyebrow mb-s4">Latest writing</p>
            <h2 className="mb-s4 max-w-[30ch] font-display text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.15] tracking-[-0.03em]">
              <Link href={`/blog/${featured.slug}`} className="hover:text-accent">{featured.title}</Link>
            </h2>
            <p className="mb-s4 max-w-[65ch] text-[17px] leading-[1.65] text-ink-2">{featured.summary}</p>
            <div className="flex flex-wrap items-end gap-s4">
              <PostDate date={featured.date} updated={featured.updated} />
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
              <PostDate date={p.date} updated={p.updated} />
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

        {filtered.length === 0 && (
          <p className="py-s6 text-[15px] text-ink-3">No posts with that tag yet.</p>
        )}

        <p className="mt-s5 text-[14px] text-ink-3">
          {filtered.length} of {posts.length} posts
        </p>
        <p className="mt-s3 max-w-[65ch] text-[13px] text-ink-3">
          Older pieces are revisited when there’s more to say. Updated dates mark substantial
          revisions; the original publication date stays on each article.
        </p>
      </Shell>
    </>
  )
}
