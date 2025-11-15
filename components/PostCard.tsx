import Link from 'next/link'
import TagBadge from './TagBadge'

interface PostCardProps {
  title: string
  summary: string
  date: string
  slug: string
  tags: string[]
}

export default function PostCard({ title, summary, date, slug, tags }: PostCardProps) {
  return (
    <article className="group bg-background border border-border rounded-lg p-6 hover:border-primary/20 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <time className="text-sm text-muted-foreground">
          {new Date(date).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        <Link href={`/blog/${slug}`}>
          {title}
        </Link>
      </h3>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <Link
        href={`/blog/${slug}`}
        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Read more →
      </Link>
    </article>
  )
}