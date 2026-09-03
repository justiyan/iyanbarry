import type { Metadata } from 'next'
import './globals.css'

const DESCRIPTION =
  'Iyan Barry is a Brisbane-based Chief Information Officer. He advises Australian mid-market executive teams on IT strategy, cyber maturity (Essential Eight, ISO 27001, ISO 27032, SMB1001) and practical AI adoption — and speaks on AI governance in regulated environments.'

export const metadata: Metadata = {
  metadataBase: new URL('https://iyanbarry.com'),
  title: {
    default: 'Iyan Barry – Chief Information Officer | IT Strategy, Cyber & AI Advisory',
    template: '%s | Iyan Barry',
  },
  description: DESCRIPTION,
  keywords: [
    'Iyan Barry',
    'CIO Brisbane',
    'IT strategy consultant Australia',
    'Essential Eight',
    'ISO 27001',
    'ISO 27032',
    'SMB1001',
    'AI governance',
    'virtual CIO',
    'IT leadership speaker Australia',
  ],
  authors: [{ name: 'Iyan Barry', url: 'https://iyanbarry.com' }],
  creator: 'Iyan Barry',
  alternates: { canonical: 'https://iyanbarry.com' },
  openGraph: {
    title: 'Iyan Barry – Chief Information Officer',
    description: DESCRIPTION,
    url: 'https://iyanbarry.com',
    siteName: 'Iyan Barry',
    locale: 'en_AU',
    type: 'profile',
    images: [
      {
        url: '/images/iyan-barry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Iyan Barry, Chief Information Officer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iyan Barry – Chief Information Officer',
    description: DESCRIPTION,
    images: ['/images/iyan-barry-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Iyan Barry',
  givenName: 'Iyan',
  familyName: 'Barry',
  jobTitle: 'Chief Information Officer',
  description: DESCRIPTION,
  url: 'https://iyanbarry.com',
  image: 'https://iyanbarry.com/images/iyan-barry-cio.jpg',
  email: 'mailto:ask@iyanbarry.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brisbane',
    addressRegion: 'QLD',
    addressCountry: 'AU',
  },
  knowsAbout: [
    'IT Strategy',
    'Cybersecurity Governance',
    'ACSC Essential Eight',
    'ISO 27001',
    'ISO 27032',
    'SMB1001',
    'NIST Cybersecurity Framework',
    'Artificial Intelligence Governance',
    'Data Residency',
    'IT Leadership',
  ],
  sameAs: [
    'https://au.linkedin.com/in/iyanbarry',
    'https://www.cio247.com',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
