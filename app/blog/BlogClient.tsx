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
      <div className="border-b border-hairline">
        <Shell className="pb-s6 pt-s7 max-md:pt-s6">
          <h1 className="mb-s4 max-w-[18ch] text-[clamp(34px,4.2vw,52px)] font-semibold">Writing</h1>
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
            className={`rounded-full border px-[13px] py-[5px] font-mono text-[11px] uppercase tracking-[0.03em] transition-colors ${
              tag === null ? 'border-ink bg-ink text-white' : 'border-hairline text-ink-2 hover:border-ink-3'
            }`}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-[13px] py-[5px] font-mono text-[11px] uppercase tracking-[0.03em] transition-colors ${
                tag === t ? 'border-ink bg-ink text-white' : 'border-hairline text-ink-2 hover:border-ink-3'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {featured && (
          <article data-featured-post className="mb-s6 rounded-card border border-hairline bg-surface-2 p-s5 max-md:p-s4">
            <p className="mb-s3 font-mono text-[11px] uppercase tracking-[0.04em] text-accent">Latest writing</p>
            <h2 className="mb-s3 max-w-[30ch] text-[clamp(24px,3vw,34px)] font-semibold">
              <Link href={`/blog/${featured.slug}`} className="hover:text-accent">{featured.title}</Link>
            </h2>
            <p className="mb-s4 max-w-[65ch] text-[17px] leading-[1.65] text-ink-2">{featured.summary}</p>
            <div className="flex flex-wrap items-end gap-s4">
              <PostDate date={featured.date} updated={featured.updated} />
              <span className="font-mono text-[12px] text-ink-3">{featured.readingMinutes} min read</span>
              <Link href={`/blog/${featured.slug}`} className="text-[14px] font-medium text-accent hover:underline">Read the article →</Link>
            </div>
          </article>
        )}

        <div data-post-list>
          {listed.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid grid-cols-[120px_1fr] items-baseline gap-s5 border-b border-hairline py-s4 first:border-t max-md:grid-cols-1 max-md:gap-s1"
            >
              <PostDate date={p.date} updated={p.updated} />
              <div>
                <h2 className="mb-[4px] text-[17px] font-[550] transition-colors group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="text-[14.5px] text-ink-3">{p.summary}</p>
                <p className="mt-s2 font-mono text-[11px] text-ink-3">{p.readingMinutes} min read</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-s6 text-[15px] text-ink-3">No posts with that tag yet.</p>
        )}

        <p className="mt-s5 font-mono text-[12px] text-ink-3">
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
