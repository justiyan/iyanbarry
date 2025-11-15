import type { Metadata } from 'next'

interface MetadataOptions {
  title?: string
  description?: string
  path?: string
}

export function generateMetadata({
  title,
  description = 'Personal site of Iyan Barry, an IT leader based in Brisbane, Australia. Sharing work, experiments, and thoughts on leadership, cybersecurity, AI, and building things.',
  path = '',
}: MetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} – Iyan Barry`
    : 'Iyan Barry – IT Leader & Builder'

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
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}