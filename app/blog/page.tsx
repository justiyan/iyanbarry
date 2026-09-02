import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import BlogClient from './BlogClient'
import { getSortedPostsData } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on IT leadership, AI governance, cybersecurity and running technology in a regulated environment.',
}

export default function Blog() {
  return (
    <Layout>
      <BlogClient posts={getSortedPostsData()} />
    </Layout>
  )
}
