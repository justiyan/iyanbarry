import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import { getSortedPostsData } from '@/lib/blog'

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Hi, I'm Iyan Barry – IT leader and builder.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Senior IT leader based in Brisbane, with experience transforming IT teams, uplifting cybersecurity, and using AI to automate workflows and solve real business problems.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Read the blog
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="https://www.linkedin.com/in/iyanbarry/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Connect on LinkedIn <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                IT Leadership
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Turning under-resourced IT teams into proactive, strategic partners. Focused on building sustainable systems and cultures that deliver real business value.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Cybersecurity & Governance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                ISO 27001 implementation, Microsoft Secure Score uplift, and Essential Eight compliance. Building security frameworks that protect without hindering productivity.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                AI & Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building AI-driven workflows and automation solutions. Focused on practical applications that remove friction from daily work and solve real business problems.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Recent Blog Posts Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're interested in IT strategy, AI, or just want to swap ideas about building things that matter, reach out.
            </p>
            <Link
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}