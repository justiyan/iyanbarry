import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iyan Barry. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="mailto:iyanbarry@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/iyanbarry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          Built with Next.js, TypeScript, and Tailwind CSS
        </div>
      </div>
    </footer>
  )
}