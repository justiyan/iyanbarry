import Layout from '@/components/Layout'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata = generateMeta({
  title: 'About',
  description: 'Learn more about Iyan Barry, an IT leader based in Brisbane, Australia, focused on transforming technology teams and building practical solutions.',
  path: '/about',
})

export default function About() {
  return (
    <Layout>
      <div className="bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              About Iyan
            </h1>
          </div>

          {/* Main Bio Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="text-muted-foreground space-y-6 leading-relaxed">
              <p>
                I'm based in Brisbane, Australia, where I work as a General Manager – Information Technology, essentially serving in a CIO-equivalent role for a growing organization. My journey into this position wasn't traditional, but it's given me a unique perspective on what it takes to transform technology teams in the real world.
              </p>

              <p>
                When I took on this role, I inherited an IT team that was reactive and under-resourced—constantly firefighting with little time for strategic thinking. Over the past few years, I've led the transformation of that team into a structured, proactive capability that's genuinely aligned to business strategy. This wasn't about implementing trendy frameworks; it was about building trust, establishing clear priorities, and creating systems that actually work.
              </p>

              <p>
                A significant part of my work has focused on cybersecurity uplift. We've improved our Microsoft Secure Score substantially, aligned our security controls to ISO 27001 and the Essential Eight, and implemented governance and risk frameworks that protect the organization without creating bureaucratic overhead. The key has been making security practical and sustainable, not just compliant.
              </p>

              <p>
                I'm guided by a few core values: psychological safety (people do their best work when they feel secure), clarity of purpose (everyone should understand why their work matters), practical delivery (perfect is the enemy of good), and "think big, start small, scale fast" (ambitious vision, pragmatic execution).
              </p>

              <p>
                Beyond the day job, I have a deep interest in AI and automation. I'm particularly fascinated by using AI tools to build practical solutions that solve real problems, both for internal productivity and business value. I believe that hands-on building experience teaches lessons that you can't learn any other way.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Timeline</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/20 pl-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">2021</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Took on General Manager – IT role</h3>
                <p className="text-muted-foreground">Started leading the transformation of an overwhelmed, reactive IT function into a strategic capability.</p>
              </div>

              <div className="border-l-2 border-primary/20 pl-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">2022</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Major cybersecurity uplift program</h3>
                <p className="text-muted-foreground">Led comprehensive security improvements, ISO 27001 alignment, and Essential Eight implementation.</p>
              </div>

              <div className="border-l-2 border-primary/20 pl-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">2023</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Started serious AI tooling experiments</h3>
                <p className="text-muted-foreground">Began exploring practical applications of AI for internal productivity and workflow automation.</p>
              </div>

              <div className="border-l-2 border-primary/20 pl-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">2023</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Expanded AI and automation focus</h3>
                <p className="text-muted-foreground">Deepened expertise in AI-driven solutions and automated workflow development for business value.</p>
              </div>

              <div className="border-l-2 border-primary/20 pl-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">2023</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Started writing and sharing</h3>
                <p className="text-muted-foreground">Launched this site to document and share learnings from leadership, technology, and experimentation.</p>
              </div>
            </div>
          </div>

          {/* What I'm Working On Now */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">What I'm Working On Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">IT & Security Maturity</h3>
                <p className="text-muted-foreground">
                  Continuing to uplift IT maturity and cybersecurity posture, focusing on sustainable improvements that enable business growth without compromising security.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">AI-Powered Workflows</h3>
                <p className="text-muted-foreground">
                  Experimenting with AI-powered workflows and bots, exploring practical applications that remove friction from daily work.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Writing & Sharing</h3>
                <p className="text-muted-foreground">
                  Documenting lessons learned through this blog, focusing on the practical reality of leadership, AI adoption, and building things.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Staying current with emerging technologies and methodologies, focusing on practical applications that can drive business value and improve team effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}