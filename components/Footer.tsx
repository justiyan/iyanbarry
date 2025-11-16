import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Line patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 w-px h-full bg-white"></div>
        <div className="absolute left-2/4 top-0 w-px h-full bg-white"></div>
        <div className="absolute left-3/4 top-0 w-px h-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <Link href="/" className="inline-block text-3xl font-bold font-outfit text-white mb-6">
            Iyan Barry
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <Link href="/" className="text-light hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-light hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-light hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-light hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="mailto:iyanbarry@gmail.com"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-light hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/iyanbarry/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-light hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-light text-sm mb-2">
              © {new Date().getFullYear()} Iyan Barry. All rights reserved.
            </p>
            <p className="text-light/60 text-xs">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 20,90 80,90" fill="currentColor" className="text-primary" />
        </svg>
      </div>
    </footer>
  )
}