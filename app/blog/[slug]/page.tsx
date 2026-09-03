import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Shell } from '@/components/ui'
import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { generateMetadata as generateMeta } from '@/lib/metadata'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostSlugs().map((p) => ({ slug: p.params.slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostData(params.slug)
  if (!post) return generateMeta({ title: 'Post not found' })
  return generateMeta({ title: post.title, description: post.summary, path: `/blog/${params.slug}` })
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData(params.slug)
  if (!post) notFound()

  return (
    <Layout>
      <article>
        <div className="border-b border-hairline">
          <Shell className="pb-s6 pt-s6">
            <Link href="/blog" className="mb-s5 inline-block font-mono text-[12px] text-ink-3 transition-colors hover:text-accent">
              ← All writing
            </Link>
            <div className="mb-s3 flex flex-wrap items-center gap-s3">
              <time className="font-mono text-[12.5px] text-ink-3">
                {new Date(post.date).toLocaleDateString('en-AU', { day: '2-digit', month: 'long', year: 'numeric' })}
              </time>
              {post.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] uppercase tracking-[0.03em] text-accent">{t}</span>
              ))}
            </div>
            <h1 className="max-w-[22ch] text-[clamp(30px,3.6vw,44px)] font-semibold">{post.title}</h1>
            {post.summary && (
              <p className="mt-s4 max-w-[62ch] text-[18px] leading-[1.6] text-ink-2">{post.summary}</p>
            )}
          </Shell>
        </div>

        <Shell className="py-s6">
          <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </Shell>

        <div className="border-t border-hairline">
          <Shell className="py-s6">
            <div className="max-w-[62ch]">
              <h2 className="mb-s3 text-[24px] font-semibold">Working on something similar?</h2>
              <p className="mb-s4 text-[16px] text-ink-2">
                I advise Australian mid-market executive teams on exactly these problems.
              </p>
              <Link href="/work-with-me" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
                See how I work
              </Link>
            </div>
          </Shell>
        </div>
      </article>
    </Layout>
  )
}
