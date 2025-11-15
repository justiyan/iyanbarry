interface TagBadgeProps {
  tag: string
  className?: string
}

export default function TagBadge({ tag, className = '' }: TagBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:bg-primary/10 transition-colors ${className}`}
    >
      {tag}
    </span>
  )
}