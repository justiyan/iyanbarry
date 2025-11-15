import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import TagBadge from './TagBadge'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  slug?: string
  status?: string
}

export default function ProjectCard({ title, description, tags, link, slug, status }: ProjectCardProps) {
  const href = link || `/projects/${slug}`
  const isExternal = !!link

  return (
    <div className="group relative bg-background border border-border rounded-lg p-6 hover:border-primary/20 transition-colors">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {isExternal && (
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>

      <p className="text-muted-foreground mt-2 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {status && (
        <div className="mb-4">
          <span className="text-xs font-medium text-primary">
            {status}
          </span>
        </div>
      )}

      <Link
        href={href}
        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {isExternal ? 'View Project' : 'Learn More'} →
      </Link>
    </div>
  )
}