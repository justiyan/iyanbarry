import type { Metadata } from 'next'
import './globals.css'

const DESCRIPTION =
  'Iyan Barry is a Brisbane-based CIO working across technology strategy, cybersecurity, data, AI and automation. Practical advice and hands-on delivery, with three decades of experience.'

export const metadata: Metadata = {
  metadataBase: new URL('https://iyanbarry.com'),
  title: {
    default: 'Iyan Barry – CIO | Technology, AI & Cybersecurity',
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
    'custom internal AI platforms',
    'enterprise AI development',
    'data integration',
    'workflow automation',
    'virtual CIO',
    'IT leadership speaker Australia',
  ],
  authors: [{ name: 'Iyan Barry', url: 'https://iyanbarry.com' }],
  creator: 'Iyan Barry',
  alternates: { canonical: 'https://iyanbarry.com' },
  openGraph: {
    title: 'Iyan Barry – CIO | Technology, AI & Cybersecurity',
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
    title: 'Iyan Barry – CIO | Technology, AI & Cybersecurity',
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
    'Custom Internal AI Platforms',
    'Retrieval-Augmented Generation',
    'Data Residency',
    'IT Leadership',
    'Data Integration',
    'Workflow Automation',
    'Technology Team Development',
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
