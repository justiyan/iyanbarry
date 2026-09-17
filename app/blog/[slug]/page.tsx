import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Shell } from '@/components/ui'
import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { generateMetadata as generateMeta } from '@/lib/metadata'
import PostDate, { formatPostDate } from '@/components/PostDate'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostSlugs().map((p) => ({ slug: p.params.slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostData(params.slug)
  if (!post) return generateMeta({ title: 'Post not found' })
  const base = generateMeta({ title: post.title, description: post.summary, path: `/blog/${params.slug}` })
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article' as const,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ['Iyan Barry'],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData(params.slug)
  if (!post) notFound()
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { '@type': 'Person', name: 'Iyan Barry', url: 'https://iyanbarry.com/about' },
    mainEntityOfPage: `https://iyanbarry.com/blog/${post.slug}`,
    image: 'https://iyanbarry.com/images/iyan-barry-og.jpg',
    wordCount: post.wordCount,
  }

  return (
    <Layout>
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
        <div className="page-hero">
          <Shell>
            <Link href="/blog" className="text-link mb-s5">
              ← All writing
            </Link>
            <div className="mb-s3 flex flex-wrap items-end gap-s3">
              <PostDate date={post.date} updated={post.updated} />
              <span className="text-[13px] text-ink-3">{post.readingMinutes} min read</span>
              {post.tags.map((t) => (
                <span key={t} className="text-[13px] text-accent">{t}</span>
              ))}
            </div>
            {post.updated && (
              <p className="mb-s4 text-[14px] text-ink-3">Originally published {formatPostDate(post.date, true)}</p>
            )}
            <h1 className="page-title max-w-[24ch]">{post.title}</h1>
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
              <h2 className="section-title mb-s3">Working on something similar?</h2>
              <p className="mb-s4 text-[16px] text-ink-2">
                If this connects with something you’re working through, I’m happy to talk about
                where you’re stuck and whether I can help.
              </p>
              <Link href="/work-with-me" className="btn-primary">
                See how I work
              </Link>
            </div>
          </Shell>
        </div>
      </article>
    </Layout>
  )
}
