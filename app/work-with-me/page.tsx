import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card, Tag } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Internal AI Platforms & Advisory',
  description:
    'Custom internal AI platforms by Iyan Barry: leading models, company knowledge and governance designed together. Assessment, build, pilot and handover for Australian businesses.',
  alternates: { canonical: 'https://iyanbarry.com/work-with-me' },
  openGraph: {
    title: 'Internal AI Platforms & Advisory | Iyan Barry',
    description: 'Custom internal AI platforms connecting leading models and company knowledge, with access and data handling designed around your business.',
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
      'A structured review of where your technology, security and data actually stand — and what to do about it in the next twelve months.',
    includes: [
      'Executive interviews and a review of your current environment',
      'Cyber maturity scored against the ACSC Essential Eight',
      'An honest read on where AI will and will not pay off',
      'A prioritised roadmap by effort and impact, costed at a high level',
      'A written report and a live session with your executive team or board',
    ],
    outcome: 'You leave with a decision-ready plan you can take to a board — not a vendor pitch.',
  },
  {
    tag: 'Scoped per engagement',
    title: 'Cyber Maturity Uplift',
    summary:
      'Getting a business from “we think we’re probably fine” to a defensible, evidenced security position.',
    includes: [
      'Gap assessment against Essential Eight, ISO 27001, ISO 27032 or SMB1001',
      'A remediation plan sequenced by risk, not by product',
      'Governance, risk and incident response frameworks people will actually use',
      'Board-level reporting your directors can understand',
    ],
    outcome: 'Security you can evidence to a client, an insurer, an auditor or a regulator.',
  },
  {
    tag: 'Monthly retainer · limited availability',
    title: 'Fractional / Interim CIO',
    summary:
      'Executive technology leadership for organisations that need the judgement of a CIO but not a full-time salary.',
    includes: [
      'Technology strategy and roadmap ownership',
      'Board and executive reporting',
      'Vendor selection, contract review and negotiation support',
      'Coaching and structure for an existing IT team or manager',
    ],
    outcome: 'A steady hand on technology decisions, without another executive headcount.',
  },
  {
    tag: 'Workshop or advisory',
    title: 'AI Governance for Regulated Environments',
    summary:
      'For organisations handling sensitive data — care, health, education, government-adjacent — that want AI without creating a privacy or compliance problem.',
    includes: [
      'Acceptable-use and AI governance policy',
      'Data residency and cross-border transfer review',
      'Risk assessment for proposed AI use cases',
      'Staff guidance that is practical rather than prohibitive',
    ],
    outcome: 'A position on AI you can defend to your board, your regulator and your clients.',
  },
]

const steps = [
  { n: '1', t: 'A conversation', d: 'Thirty minutes, no charge, no pitch. You describe the problem; I tell you honestly whether I am the right person for it.' },
  { n: '2', t: 'A written proposal', d: 'Scope, deliverables, timeframe and fixed price in writing before anything begins. No open-ended day rates.' },
  { n: '3', t: 'Delivery and handover', d: 'For a build, the outcome is an agreed working platform, pilot findings and operating documentation. Advisory engagements deliver the agreed assessment or guidance. Ongoing support is separately scoped.' },
]

export default function WorkWithMe() {
  return (
    <Layout>
      <div className="border-b border-hairline">
        <Shell className="pb-[120px] pt-s7 max-md:pb-s6 max-md:pt-s6">
          <h1 className="mb-s4 max-w-[18ch] text-[clamp(34px,4.2vw,52px)] font-semibold">
            Internal AI platforms, built for your business.
          </h1>
          <p className="mb-s5 max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            Connect your people to leading AI models and organisational knowledge, with access
            and data handling designed around your requirements. I design and build the platform,
            working with your team from assessment through to pilot and handover.
          </p>
          <Link href="/contact" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
            Discuss your AI platform
          </Link>
        </Shell>
      </div>

      <Section id="internal-ai-platforms" className="scroll-mt-[80px]">
        <SectionHead num="01" title="Custom internal AI platforms" />
        <div className="grid grid-cols-2 gap-s6 max-lg:grid-cols-1">
          <div>
            <Tag>Scope agreed before build</Tag>
            <h3 className="mb-s3 text-[23px] font-semibold">An AI platform built around your organisation.</h3>
            <p className="mb-s4 text-[16px] leading-[1.65] text-ink-2">
              An internal platform can give people a consistent place to work with AI while
              giving the organisation a clearer view of how its information is used.
              The design starts with useful tasks and the boundaries the platform must respect.
            </p>
            <p className="mb-s3 text-[15px] text-ink-2">Depending on the agreed scope, it may include:</p>
            <ul className="list-disc space-y-s2 pl-s4 text-[15px] leading-[1.65] text-ink-2">
              <li>Corporate sign-in and role-based access.</li>
              <li>Selected frontier models accessed through approved services.</li>
              <li>Answers grounded in approved internal documents, with references staff can check.</li>
              <li>Purpose-built assistants for agreed workflows.</li>
              <li>Defined handling of uploads, conversations, retention and deletion.</li>
              <li>Appropriately scoped activity logging, usage visibility and cost controls.</li>
              <li>Staff guidance, evaluation and human review for higher-risk tasks.</li>
            </ul>
            <p className="mt-s4 text-[14px] text-ink-2">
              These are options to scope and verify. Hosting, AI usage and ongoing support costs
              are identified separately from the build.
            </p>
          </div>
          <div className="space-y-s5">
            <div className="rounded-card border border-hairline bg-surface-2 p-s5">
              <h3 className="mb-s3 text-[19px] font-semibold">What “internal” means</h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">
                The application can be hosted in your organisation’s cloud environment.
                Model requests may still be processed by external managed services. Processing
                location, retention and training-use terms are checked for each selected service
                and documented before sensitive information is used. Custom hosting alone is not
                a guarantee of security or compliance.
              </p>
            </div>
            <div>
              <h3 className="mb-s3 text-[19px] font-semibold">Built from practical experience</h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">
                Building an internal AI platform has shaped my approach to this work. The useful
                lessons sit beyond the chat interface: deciding which knowledge people can access,
                tracing data through connected services and making the platform understandable to
                the people operating it. I share those lessons without publishing internal systems or data.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-s6 border-t border-hairline pt-s5">
          <h3 className="mb-s4 text-[23px] font-semibold">From assessment to a working platform</h3>
          <div className="grid grid-cols-2 gap-s5 max-md:grid-cols-1">
            <div><h4 className="mb-s2 text-[17px]">Assess the need</h4><p className="text-[15px] text-ink-2">Identify useful tasks, permitted data and existing products or licences. If an existing enterprise product meets the requirements, I recommend it rather than a custom build.</p></div>
            <div><h4 className="mb-s2 text-[17px]">Agree the design</h4><p className="text-[15px] text-ink-2">Document identity and access, knowledge sources, model endpoints, processing locations, retention and support responsibilities.</p></div>
            <div><h4 className="mb-s2 text-[17px]">Build and pilot</h4><p className="text-[15px] text-ink-2">Implement the agreed platform and test it with a defined user group. Check retrieval permissions, answer quality and data flows before wider use.</p></div>
            <div><h4 className="mb-s2 text-[17px]">Handover and support</h4><p className="text-[15px] text-ink-2">Provide operating documentation and agree who maintains the platform, reviews model changes and handles incidents. Ongoing support is separately scoped.</p></div>
          </div>
          <Link href="/contact" className="mt-s5 inline-block text-[15px] font-medium text-accent hover:underline">Discuss your use case →</Link>
        </div>
      </Section>

      <Section>
        <SectionHead num="02" title="Who this is for" />
        <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1 max-md:gap-s5">
          <div>
            <h3 className="mb-s3 text-[17px] font-semibold">A good fit</h3>
            <ul className="space-y-s2 text-[15px] leading-[1.65] text-ink-2">
              <li>Australian businesses roughly 50–500 people.</li>
              <li>An existing CIO or IT team needing specialist AI build capacity, or a smaller team needing help with design and governance.</li>
              <li>Executive teams being asked hard questions about cyber risk or AI by a board, an insurer or a major client.</li>
              <li>Regulated or sensitive sectors where getting technology wrong has consequences beyond downtime.</li>
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
              I am a full-time serving CIO. Build and advisory engagements are deliberately capped
              and delivered by me personally, with scope and timeframes agreed before work begins.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead num="03" title="Supporting advisory engagements" />
        <div className="grid grid-cols-2 gap-[26px] max-lg:grid-cols-1">
          {engagements.map((e) => (
            <Card key={e.title}>
              <Tag>{e.tag}</Tag>
              <h3 className="mb-s2 text-[19px] font-semibold">{e.title}</h3>
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
          Pricing is discussed openly on a first call once scope is clear. I would rather tell you
          an engagement is not worth running than sell you one that is not.
        </p>
      </Section>

      <Section className="!border-b-0">
        <SectionHead num="04" title="How it starts" />
        <div className="grid grid-cols-3 gap-[26px] max-md:grid-cols-1">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="mb-s3 font-mono text-[13px] text-accent">0{s.n}</div>
              <h3 className="mb-s2 text-[17px] font-semibold">{s.t}</h3>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  )
}
