import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card, Tag } from '@/components/ui'
import { capabilities } from '@/lib/capabilities'

export const metadata: Metadata = {
  title: 'Work with me',
  description:
    'Work with Iyan Barry on technology strategy, AI and automation, cybersecurity, data and integration. Practical advice and hands-on delivery from a Brisbane-based CIO.',
  alternates: { canonical: 'https://iyanbarry.com/work-with-me' },
  openGraph: {
    title: 'Work with me | Iyan Barry',
    description: 'Technology leadership, AI and automation, cybersecurity, data and integration. Practical advice and hands-on delivery.',
    url: 'https://iyanbarry.com/work-with-me',
    type: 'website',
    images: [{ url: '/images/iyan-barry-og.jpg', width: 1200, height: 630, alt: 'Iyan Barry, Chief Information Officer' }],
  },
}

const engagements = [
  {
    tag: 'Fixed fee · 2–3 weeks',
    title: 'IT & AI Readiness Assessment',
    summary:
      'A clear look at your technology, security and data, with a practical plan for what to do next.',
    includes: [
      'Executive interviews and a review of your current environment',
      'Cyber maturity scored against the ACSC Essential Eight',
      'A look at where AI could help and where it probably would not',
      'A prioritised roadmap by effort and impact, costed at a high level',
      'A written report and a live session with your executive team or board',
    ],
    outcome: 'A plan your team can use, with enough detail to explain the priorities to your board.',
  },
  {
    tag: 'Scoped per engagement',
    title: 'Cyber Maturity Uplift',
    summary:
      'Understand where your security needs work and make a plan your team can realistically deliver.',
    includes: [
      'Review against relevant controls, including Essential Eight and ISO 27001',
      'A plan that puts the most important fixes first',
      'Governance, risk and incident response frameworks people will actually use',
      'Board-level reporting your directors can understand',
    ],
    outcome: 'A clearer view of your risks, the work ahead and how to explain your progress.',
  },
  {
    tag: 'Monthly retainer · limited availability',
    title: 'Fractional / Interim CIO',
    summary:
      'Help with the decisions that usually land on a CIO’s desk, without adding a full-time role.',
    includes: [
      'Technology strategy and roadmap ownership',
      'Board and executive reporting',
      'Vendor selection, contract review and negotiation support',
      'Coaching and structure for an existing IT team or manager',
    ],
    outcome: 'Someone to work through the difficult calls with you and help your team follow through.',
  },
  {
    tag: 'Workshop or advisory',
    title: 'AI Governance for Regulated Environments',
    summary:
      'Work through what your people can use AI for, what information is appropriate and where the limits need to be.',
    includes: [
      'Acceptable-use and AI governance policy',
      'Data residency and cross-border transfer review',
      'Risk assessment for proposed AI use cases',
      'Staff guidance that is practical rather than prohibitive',
    ],
    outcome: 'Clear guidance for staff and a record of the decisions behind it.',
  },
]

const steps = [
  { n: '1', t: 'A conversation', d: 'We start with a short, no-charge conversation about what you need. I’ll be honest about whether I can help.' },
  { n: '2', t: 'Agree the work', d: 'We put the scope, timing, costs and what you’ll receive in writing before we start.' },
  { n: '3', t: 'Delivery and handover', d: 'For a build, you get the agreed working platform, pilot findings and documentation. For advice, you get the agreed review or plan. We agree any ongoing support separately.' },
]

export default function WorkWithMe() {
  return (
    <Layout>
      <div className="page-hero">
        <Shell>
          <h1 className="page-title mb-s4 max-w-[18ch]">
            Let’s work on what’s next.
          </h1>
          <p className="mb-s5 max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            You might need help making a technology decision, improving security, connecting
            systems or getting an AI idea into use. I work with you and your team to figure out
            what’s needed, then help get it done.
          </p>
          <Link href="/contact" className="btn-primary">
            Let’s talk
          </Link>
        </Shell>
      </div>

      <Section id="capabilities" className="scroll-mt-[80px]">
        <SectionHead num="01" title="How I can help" />
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {capabilities.map((c) => (
            <Card key={c.title}>
              <h3 className="mb-s3 font-display text-[28px] font-normal leading-tight">{c.title}</h3>
              <p className="mb-s3 text-[15px] leading-[1.65] text-ink-2">{c.summary}</p>
              <p className="border-t border-hairline pt-s3 text-[14px] text-ink-2">{c.examples}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="internal-ai-platforms" className="scroll-mt-[80px]">
        <SectionHead num="02" title="Custom internal AI platforms" />
        <div className="grid grid-cols-2 gap-s6 max-lg:grid-cols-1">
          <div>
            <Tag>A featured offering</Tag>
            <h3 className="mb-s4 font-display text-[34px] font-normal leading-tight">An AI platform built around your organisation.</h3>
            <p className="mb-s4 text-[16px] leading-[1.65] text-ink-2">
              Give your people one place to work with AI, using the models and company knowledge
              that fit their tasks. We start with what they need to do and how the information
              should be handled, rather than choosing a tool and working backwards.
            </p>
            <p className="mb-s3 text-[15px] text-ink-2">Depending on what you need, that could include:</p>
            <ul className="list-disc space-y-s2 pl-s4 text-[15px] leading-[1.65] text-ink-2">
              <li>Corporate sign-in and role-based access.</li>
              <li>Selected frontier models accessed through approved services.</li>
              <li>Answers grounded in approved internal documents, with references staff can check.</li>
              <li>Purpose-built assistants for agreed workflows.</li>
              <li>Defined handling of uploads, conversations, retention and deletion.</li>
              <li>Activity logs, a view of usage and controls on cost.</li>
              <li>Staff guidance, evaluation and human review for higher-risk tasks.</li>
            </ul>
            <p className="mt-s4 text-[14px] text-ink-2">
              We agree what’s included before building. Hosting, AI usage and ongoing support
              costs are set out separately, so you can see what you’re committing to.
            </p>
          </div>
          <div className="space-y-s5">
            <div className="bg-surface-2 p-7 md:p-9">
              <h3 className="mb-s3 font-display text-[28px] font-normal leading-tight">What “internal” means</h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">
                The app can run in your organisation’s cloud environment, while model requests
                may still go to external managed services. We check where each service processes
                data, what it keeps and whether it can use that data for training. Those decisions
                are documented before sensitive information is used. Custom hosting alone doesn’t
                guarantee security or compliance.
              </p>
            </div>
            <div>
              <h3 className="mb-s3 font-display text-[28px] font-normal leading-tight">What building one taught me</h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">
                Building an internal AI platform changed how I approach this work. A lot of the
                important decisions never show up in a demo: which documents someone can access,
                where an upload goes and who looks after the system when something changes.
                I bring those lessons to the work without sharing internal systems or data.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-s6 border-t border-hairline pt-s5">
          <h3 className="mb-s5 font-display text-[32px] font-normal leading-tight">From assessment to a working platform</h3>
          <div className="grid grid-cols-2 gap-s5 max-md:grid-cols-1">
            <div><h4 className="mb-s2 text-[17px]">Assess the need</h4><p className="text-[15px] text-ink-2">Identify useful tasks, permitted data and existing products or licences. If an existing enterprise product meets the requirements, I recommend it rather than a custom build.</p></div>
            <div><h4 className="mb-s2 text-[17px]">Agree the design</h4><p className="text-[15px] text-ink-2">Document identity and access, knowledge sources, model endpoints, processing locations, retention and support responsibilities.</p></div>
            <div><h4 className="mb-s2 text-[17px]">Build and pilot</h4><p className="text-[15px] text-ink-2">Implement the agreed platform and test it with a defined user group. Check retrieval permissions, answer quality and data flows before wider use.</p></div>
            <div><h4 className="mb-s2 text-[17px]">Handover and support</h4><p className="text-[15px] text-ink-2">Provide operating documentation and agree who maintains the platform, reviews model changes and handles incidents. Ongoing support is separately scoped.</p></div>
          </div>
          <Link href="/contact" className="text-link mt-s5">Discuss your use case →</Link>
        </div>
      </Section>

      <Section>
        <SectionHead num="03" title="Who I work with" />
        <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1 max-md:gap-s5">
          <div>
            <h3 className="mb-s3 text-[17px] font-semibold">A good fit</h3>
            <ul className="space-y-s2 text-[15px] leading-[1.65] text-ink-2">
              <li>Australian mid-market businesses that want practical help with technology.</li>
              <li>An existing CIO or IT team that needs another pair of hands, or a smaller team that needs help with the bigger decisions.</li>
              <li>Leaders trying to improve security, get more from their data or put AI to use.</li>
              <li>Organisations where sensitive information needs careful handling.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-s3 text-[17px] font-semibold">Not a good fit</h3>
            <ul className="space-y-s2 text-[15px] leading-[1.65] text-ink-2">
              <li>Anyone looking for a managed service provider. I do not run helpdesks or resell hardware.</li>
              <li>Organisations wanting a rubber stamp on a decision already made.</li>
              <li>Large enterprises needing a full delivery team — you want a firm, not an individual.</li>
            </ul>
            <p className="mt-s4 text-[14px] italic text-ink-3">
              I’m a working CIO, so I take on a small number of projects alongside my role.
              You work with me directly, and we agree the scope and timing before we start.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead num="04" title="Ways we can work together" />
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 max-lg:grid-cols-1">
          {engagements.map((e) => (
            <Card key={e.title}>
              <Tag>{e.tag}</Tag>
              <h3 className="mb-s3 font-display text-[28px] font-normal leading-tight">{e.title}</h3>
              <p className="mb-s4 text-[14.5px] leading-[1.62] text-ink-2">{e.summary}</p>
              <ul className="mb-s4 space-y-s2">
                {e.includes.map((i) => (
                  <li key={i} className="flex gap-s3 text-[14px] text-ink-2">
                    <span className="text-accent">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-hairline pt-s3 text-[14.5px] font-medium text-ink">{e.outcome}</p>
            </Card>
          ))}
        </div>
        <p className="mt-s5 max-w-[62ch] text-[15px] text-ink-2">
          These are starting points, not a fixed menu. If you need a data integration, an automation
          or a different kind of build, we can scope that together. We’ll talk about cost once we
          understand the work, and before you commit to it.
        </p>
      </Section>

      <Section className="!border-b-0">
        <SectionHead num="05" title="How it starts" />
        <div className="grid grid-cols-3 gap-[26px] max-md:grid-cols-1">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="mb-s3 border-t border-hairline pt-6 text-[13px] text-accent">0{s.n}</div>
              <h3 className="mb-s3 font-display text-[27px] font-normal leading-tight">{s.t}</h3>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  )
}
