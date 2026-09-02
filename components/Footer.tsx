import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-s4 px-s5 py-s6 text-[13.5px] text-ink-3 max-md:flex-col max-md:items-start max-md:px-s4">
        <div>© {new Date().getFullYear()} Iyan Barry · Brisbane, Australia</div>
        <div className="flex gap-s4">
          <a href="mailto:ask@iyanbarry.com" className="text-ink-2 transition-colors hover:text-ink">
            ask@iyanbarry.com
          </a>
          <a
            href="https://au.linkedin.com/in/iyanbarry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-2 transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
