import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import Layout from '@/components/Layout'
import TagBadge from '@/components/TagBadge'
import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { generateMetadata as generateMeta } from '@/lib/metadata'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.params.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostProps) {
  const post = await getPostData(params.slug)

  if (!post) {
    return generateMeta({
      title: 'Post Not Found',
    })
  }

  return generateMeta({
    title: post.title,
    description: post.summary,
    path: `/blog/${params.slug}`,
  })
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <article className="bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </div>

          {/* Post header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}
          </header>

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Discuss this post →
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  )
}