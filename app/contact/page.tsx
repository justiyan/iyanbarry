import Link from 'next/link'
import { Mail, Linkedin, MessageCircle } from 'lucide-react'
import Layout from '@/components/Layout'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata = generateMeta({
  title: 'Contact',
  description: 'Get in touch with Iyan Barry to discuss IT leadership, AI, cybersecurity, or collaborative opportunities.',
  path: '/contact',
})

export default function Contact() {
  return (
    <Layout>
      <div className="bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you'd like to connect about IT leadership, AI, cybersecurity, or just compare notes on side projects and experiments, reach out.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Email */}
            <div className="bg-muted/50 rounded-lg p-8 text-center hover:bg-muted/70 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Best for detailed discussions or collaboration opportunities
              </p>
              <Link
                href="mailto:iyanbarry@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                iyanbarry@gmail.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="bg-muted/50 rounded-lg p-8 text-center hover:bg-muted/70 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">LinkedIn</h3>
              <p className="text-muted-foreground mb-4">
                Great for professional networking and quick conversations
              </p>
              <Link
                href="https://www.linkedin.com/in/iyanbarry/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>

          {/* What to reach out about */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              What to reach out about
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">IT Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Team transformation, cybersecurity strategy, governance frameworks
                </p>
              </div>

              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">AI & Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Practical AI implementation, workflow automation, productivity tools
                </p>
              </div>

              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Side Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Building experiments, fintech ideas, trading systems
                </p>
              </div>

              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Speaking</h3>
                <p className="text-sm text-muted-foreground">
                  Conference talks, workshops, panel discussions
                </p>
              </div>

              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic advice, cybersecurity assessments, team coaching
                </p>
              </div>

              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Joint projects, research, knowledge sharing
                </p>
              </div>
            </div>
          </div>

          {/* Response time note */}
          <div className="text-center bg-muted/30 rounded-lg p-6">
            <p className="text-sm text-muted-foreground">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}