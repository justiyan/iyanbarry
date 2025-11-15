import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Iyan Barry – IT Leader & Builder',
  description: 'Personal site of Iyan Barry, an IT leader based in Brisbane, Australia. Sharing work, experiments, and thoughts on leadership, cybersecurity, AI, and building things.',
  openGraph: {
    title: 'Iyan Barry – IT Leader & Builder',
    description: 'Personal site of Iyan Barry, an IT leader based in Brisbane, Australia. Sharing work, experiments, and thoughts on leadership, cybersecurity, AI, and building things.',
    url: 'https://iyanbarry.com',
    siteName: 'Iyan Barry',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iyan Barry – IT Leader & Builder',
    description: 'Personal site of Iyan Barry, an IT leader based in Brisbane, Australia. Sharing work, experiments, and thoughts on leadership, cybersecurity, AI, and building things.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}