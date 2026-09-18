export function formatPostDate(date: string, long = false) {
  return new Date(date).toLocaleDateString('en-AU', {
    day: '2-digit', month: long ? 'long' : 'short', year: 'numeric', timeZone: 'UTC',
  })
}

export function formatRetrospectiveMonth(date: string) {
  return new Date(date).toLocaleDateString('en-AU', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export default function PostDate({ date, updated, retrospectiveDate }: { date: string; updated?: string; retrospectiveDate?: string }) {
  const displayed = updated || date
  return (
    <span className="text-[14px] leading-[1.6] text-ink-3">
      <span className="mb-1 block text-[11px] uppercase tracking-[0.12em]">
        {updated ? 'Updated' : 'Published'}
      </span>
      <time dateTime={displayed}>{formatPostDate(displayed)}</time>
      {retrospectiveDate && (
        <span className="mt-1 block text-[12px]">Retrospective · {formatRetrospectiveMonth(retrospectiveDate)}</span>
      )}
    </span>
  )
}
