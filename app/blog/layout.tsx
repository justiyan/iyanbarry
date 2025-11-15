import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata = generateMeta({
  title: 'Blog',
  description: 'Thoughts on IT leadership, AI, cybersecurity, and the experiments that teach me something new.',
  path: '/blog',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}