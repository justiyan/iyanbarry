'use client'

import { useState, useMemo } from 'react'
import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'
import TagBadge from '@/components/TagBadge'
import { projects } from '@/data/projects'

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    projects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [])

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects
    return projects.filter(project => project.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <Layout>
      <div className="bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of things I've built, led, or experimented with. From enterprise IT transformations to side project prototypes.
            </p>
          </div>

          {/* Filter Tags */}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found with the tag "{selectedTag}".
              </p>
              <button
                onClick={() => setSelectedTag(null)}
                className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Show all projects
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
              {selectedTag && ` tagged with "${selectedTag}"`}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}