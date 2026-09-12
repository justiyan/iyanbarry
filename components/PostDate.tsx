export function formatPostDate(date: string, long = false) {
  return new Date(date).toLocaleDateString('en-AU', {
    day: '2-digit', month: long ? 'long' : 'short', year: 'numeric', timeZone: 'UTC',
  })
}

export default function PostDate({ date, updated }: { date: string; updated?: string }) {
  const displayed = updated || date
  return (
    <span className="font-mono text-[12.5px] text-ink-3">
      <span className="mb-[2px] block text-[10px] uppercase tracking-[0.04em]">
        {updated ? 'Updated' : 'Published'}
      </span>
      <time dateTime={displayed}>{formatPostDate(displayed)}</time>
    </span>
  )
}
