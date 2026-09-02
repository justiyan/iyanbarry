export function Shell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-shell px-s5 max-md:px-s4 ${className}`}>{children}</div>
  )
}

export function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-s6 flex items-center gap-s3">
      <span className="font-mono text-[12px] font-medium text-accent">{num}</span>
      <h2 className="text-[26px] font-semibold tracking-tight2">{title}</h2>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  )
}

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`border-b border-hairline py-s7 max-md:py-s6 ${className}`}>
      <Shell>{children}</Shell>
    </section>
  )
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-hairline bg-white p-s5 transition-colors hover:border-ink-4 hover:bg-surface-2">
      {children}
    </div>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-s3 block font-mono text-[11px] uppercase tracking-[0.03em] text-accent">
      {children}
    </span>
  )
}
