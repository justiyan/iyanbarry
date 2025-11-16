'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="w-full">
      <header className="absolute w-full z-50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold font-outfit text-white hover:text-primary transition-colors">
                Iyan Barry
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex flex-grow justify-center">
              <nav className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-white font-medium transition-colors hover:text-primary capitalize ${
                      pathname === link.href ? 'text-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:transform hover:-translate-y-1"
              >
                Let's Talk
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.90566 3.95808C3.88909 3.80893 4.02167 3.67634 4.1874 3.67634H11.1148C11.2806 3.67634 11.3966 3.79235 11.3966 3.95808V10.8855C11.3966 11.0512 11.264 11.1838 11.1148 11.1673L10.4685 11.1838C10.3028 11.1838 10.1702 11.0512 10.1868 10.9021L10.1702 5.74794L4.51885 11.3993C4.40284 11.5153 4.23712 11.5153 4.12111 11.3993L3.65707 10.9352C3.55763 10.8358 3.54106 10.6535 3.65707 10.5375L9.3084 4.88616H4.17083C4.02167 4.90273 3.88909 4.77015 3.88909 4.60442L3.90566 3.95808Z"
                    fill="currentColor" />
                </svg>
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 left-0 w-80 max-w-[80vw] h-full bg-dark text-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="text-2xl font-bold font-outfit">
                Iyan Barry
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md hover:bg-white/10 transition-colors bg-primary"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-semibold transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}