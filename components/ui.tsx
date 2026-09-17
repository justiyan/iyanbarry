export function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`site-shell ${className}`}>{children}</div>
}

export function SectionHead({ num, title }: { num: string; title: string }) {
  return <div className="section-head"><span className="eyebrow" aria-hidden="true">{num}</span><h2 className="section-title">{title}</h2></div>
}

export function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`editorial-section ${className}`}><Shell>{children}</Shell></section>
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="editorial-card">{children}</div>
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow mb-s3 block">{children}</span>
}
