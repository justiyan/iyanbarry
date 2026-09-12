import type { Metadata } from 'next'

interface MetadataOptions {
  title?: string
  description?: string
  path?: string
}

const DEFAULT_DESC =
  'Iyan Barry is a Brisbane-based CIO building custom internal AI platforms with leading models, company knowledge and data governance designed around your business.'

export function generateMetadata({
  title,
  description = DEFAULT_DESC,
  path = '',
}: MetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | Iyan Barry`
    : 'Iyan Barry – CIO | Custom Internal AI Platforms & Governance'
  const url = `https://iyanbarry.com${path}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Iyan Barry',
      locale: 'en_AU',
      type: 'website',
      images: [{ url: '/images/iyan-barry-og.jpg', width: 1200, height: 630, alt: 'Iyan Barry' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/images/iyan-barry-og.jpg'],
    },
    alternates: { canonical: url },
  }
}
