'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Shell } from '@/components/ui'
import { BlogPost } from '@/lib/blog'

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

  return (
    <>
      <div className="border-b border-hairline">
        <Shell className="pb-s6 pt-s7 max-md:pt-s6">
          <h1 className="mb-s4 max-w-[18ch] text-[clamp(34px,4.2vw,52px)] font-semibold">Writing</h1>
          <p className="max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            Notes on IT leadership, AI governance, cybersecurity and the practical realities of
            running technology in a regulated environment.
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

        <div>
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid grid-cols-[120px_1fr] items-baseline gap-s5 border-b border-hairline py-s4 first:border-t max-md:grid-cols-1 max-md:gap-s1"
            >
              <span className="font-mono text-[12.5px] text-ink-3">
                {new Date(p.date).toLocaleDateString('en-AU', {
                  day: '2-digit', month: 'short', year: 'numeric',
                })}
              </span>
              <div>
                <h2 className="mb-[4px] text-[17px] font-[550] transition-colors group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="text-[14.5px] text-ink-3">{p.summary}</p>
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
      </Shell>
    </>
  )
}
