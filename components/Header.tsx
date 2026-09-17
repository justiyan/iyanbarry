'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '/work-with-me', label: 'Work with me' },
  { href: '/blog', label: 'Writing' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus() }
    }
    document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open])
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-shell header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>Iyan Barry<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? 'page' : undefined}>{link.label}</Link>)}
          <Link href="/contact" className="nav-cta" aria-current={active('/contact') ? 'page' : undefined}>Let’s talk ↗</Link>
        </nav>
        <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={open ? 'site-shell mobile-nav' : 'hidden'}>
        {navLinks.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}>Let’s talk ↗</Link>
      </nav>
    </header>
  )
}
