import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata = generateMeta({
  title: 'Projects',
  description: 'A collection of things Iyan Barry has built, led, or experimented with. From enterprise IT transformations to side project prototypes.',
  path: '/projects',
})

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}