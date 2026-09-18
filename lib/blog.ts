import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  updated?: string

  wordCount: number
  readingMinutes: number
  summary: string
  tags: string[]
  published: boolean
  content?: string
}

function postMetadata(slug: string, data: Record<string, any>, body: string): BlogPost {
  const wordCount = (body.match(/\b[\w’'-]+\b/g) || []).length

  return {
    slug,
    title: data.title,
    date: data.date,
    updated: data.updated,

    summary: data.summary,
    tags: data.tags || [],
    published: data.published !== false,
    wordCount,
    readingMinutes: Math.max(1, Math.ceil(wordCount / 220)),
  }
}

export function getSortedPostsData(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return postMetadata(slug, matterResult.data, matterResult.content)
    })
    .filter((post) => post.published)

  return allPostsData.sort((a, b) => {
    return b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug)
  })
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(postsDirectory)) {
    return null
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    if (matterResult.data.published === false) return null

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      ...postMetadata(slug, matterResult.data, matterResult.content),
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return getSortedPostsData().map(post => ({ params: { slug: post.slug } }))
}