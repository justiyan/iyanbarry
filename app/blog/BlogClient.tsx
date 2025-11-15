'use client'

import { useState, useMemo } from 'react'
import PostCard from '@/components/PostCard'
import { BlogPost } from '@/lib/blog'

interface BlogClientProps {
  posts: BlogPost[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [posts])

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter(post => post.tags.includes(selectedTag))
  }, [posts, selectedTag])

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on IT leadership, AI, cybersecurity, and the experiments that teach me something new.
          </p>
        </div>

        {/* Filter Tags */}
        {allTags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-medium text-foreground mb-4">Filter by topic:</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  selectedTag === null
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:bg-muted'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:bg-muted'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>

        {/* No results message */}
        {filteredPosts.length === 0 && posts.length > 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts found with the tag "{selectedTag}".
            </p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Show all posts
            </button>
          </div>
        )}

        {/* No posts message */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}

        {/* Results count */}
        {posts.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPosts.length} of {posts.length} posts
              {selectedTag && ` tagged with "${selectedTag}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}