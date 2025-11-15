import Layout from '@/components/Layout'
import BlogClient from './BlogClient'
import { getSortedPostsData } from '@/lib/blog'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <Layout>
      <BlogClient posts={posts} />
    </Layout>
  )
}