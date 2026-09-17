import Link from 'next/link'
import { Shell } from './ui'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Shell>
        <div className="footer-cta">
          <div><div className="eyebrow">Start a conversation</div><h2>What are you<br /><em>working on?</em></h2></div>
          <div><p>Tell me what you’re trying to improve, or where you’re stuck. We can start with a short conversation. If I’m not the right person, I’ll say so.</p><Link className="btn-primary" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="footer-meta">
          <div>© {new Date().getFullYear()} Iyan Barry · Brisbane, Australia</div>
          <div className="flex flex-wrap gap-s4">
            <Link href="/contact">ask@iyanbarry.com ↗</Link>
            <a href="https://au.linkedin.com/in/iyanbarry" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </Shell>
    </footer>
  )
}
