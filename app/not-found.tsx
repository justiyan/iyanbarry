import Link from 'next/link'
import Layout from '@/components/Layout'
import { Shell } from '@/components/ui'

export default function NotFound() {
  return <Layout><section className="page-hero"><Shell><p className="eyebrow mb-s4">Page not found</p><h1 className="page-title max-w-[16ch]">That page isn’t here.</h1><p className="mt-s4 max-w-[52ch] text-ink-2">The link may have changed, or the address might be a little off. You can head back to the homepage or browse the writing.</p><div className="home-actions"><Link href="/" className="btn-primary">Back to the homepage ↗</Link><Link href="/blog" className="text-link">Browse the writing ↗</Link></div></Shell></section></Layout>
}
