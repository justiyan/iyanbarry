'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/work-with-me', label: 'Advisory' },
  { href: '/blog', label: 'Writing' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-white/[0.86] backdrop-blur-md">
      <div className="mx-auto grid h-[60px] max-w-shell grid-cols-[1fr_auto_1fr] items-center px-s5 max-md:px-s4">
        <Link
          href="/"
          className="flex items-center gap-[10px] text-[15px] font-semibold tracking-tight2 text-ink"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          Iyan Barry
        </Link>

        <nav className="flex justify-center gap-s5 text-[14px] font-[450] max-lg:invisible max-lg:w-0">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-ink ${
                pathname === l.href ? 'text-ink' : 'text-ink-2'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-s3">
          <Link
            href="/contact"
            className="rounded-btn border border-hairline px-[14px] py-[7px] text-[14px] font-medium text-ink transition-colors hover:border-ink hover:bg-surface-2 max-md:hidden"
          >
            Get in touch
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-ink-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-white lg:hidden">
          <nav className="mx-auto flex max-w-shell flex-col px-s4 py-s3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-s3 text-[15px] text-ink-2 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-s3 rounded-btn bg-ink px-s4 py-[11px] text-center text-[14.5px] font-medium text-white"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
