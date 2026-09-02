import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card, Tag } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Advisory',
  description:
    'Advisory engagements for Australian mid-market executive teams: IT & AI readiness assessments, cyber maturity uplift (Essential Eight, ISO 27001), fractional CIO and AI governance.',
}

const engagements = [
  {
    tag: 'Fixed fee \u00b7 2\u20133 weeks',
    title: 'IT & AI Readiness Assessment',
    summary:
      'A structured review of where your technology, security and data actually stand \u2014 and what to do about it in the next twelve months.',
    includes: [
      'Executive interviews and a review of your current environment',
      'Cyber maturity scored against the ACSC Essential Eight',
      'An honest read on where AI will and will not pay off',
      'A prioritised roadmap by effort and impact, costed at a high level',
      'A written report and a live session with your executive team or board',
    ],
    outcome: 'You leave with a decision-ready plan you can take to a board \u2014 not a vendor pitch.',
  },
  {
    tag: 'Scoped per engagement',
    title: 'Cyber Maturity Uplift',
    summary:
      'Getting a business from \u201cwe think we\u2019re probably fine\u201d to a defensible, evidenced security position.',
    includes: [
      'Essential Eight and ISO 27001 gap assessment',
      'A remediation plan sequenced by risk, not by product',
      'Governance, risk and incident response frameworks people will actually use',
      'Board-level reporting your directors can understand',
    ],
    outcome: 'Security you can evidence to a client, an insurer, an auditor or a regulator.',
  },
  {
    tag: 'Monthly retainer \u00b7 limited availability',
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
      'For organisations handling sensitive data \u2014 care, health, education, government-adjacent \u2014 that want AI without creating a privacy or compliance problem.',
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
  { n: '3', t: 'The work', d: 'Delivered by me, to the agreed date, ending in a written report and a live session with your executive team.' },
]

export default function WorkWithMe() {
  return (
    <Layout>
      <div className="border-b border-hairline">
        <Shell className="pb-[120px] pt-s7 max-md:pb-s6 max-md:pt-s6">
          <h1 className="mb-s4 max-w-[18ch] text-[clamp(34px,4.2vw,52px)] font-semibold">
            Advisory for Australian mid-market teams.
          </h1>
          <p className="mb-s5 max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            I work with a small number of organisations at a time, alongside my executive role.
            Engagements are scoped, fixed in duration, and delivered by me personally \u2014 there is
            no delivery team behind this.
          </p>
          <Link href="/contact" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
            Start a conversation
          </Link>
        </Shell>
      </div>

      <Section>
        <SectionHead num="01" title="Who this is for" />
        <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1 max-md:gap-s5">
          <div>
            <h3 className="mb-s3 text-[17px] font-semibold">A good fit</h3>
            <ul className="space-y-s2 text-[15px] leading-[1.65] text-ink-2">
              <li>Australian businesses roughly 50\u2013500 people.</li>
              <li>An IT manager or small team, but no CIO \u2014 and decisions that have outgrown the current structure.</li>
              <li>Executive teams being asked hard questions about cyber risk or AI by a board, an insurer or a major client.</li>
              <li>Regulated or sensitive sectors where getting technology wrong has consequences beyond downtime.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-s3 text-[17px] font-semibold">Not a good fit</h3>
            <ul className="space-y-s2 text-[15px] leading-[1.65] text-ink-2">
              <li>Anyone looking for a managed service provider. I do not run helpdesks or resell hardware.</li>
              <li>Organisations wanting a rubber stamp on a decision already made.</li>
              <li>Large enterprises needing a full delivery team \u2014 you want a firm, not an individual.</li>
            </ul>
            <p className="mt-s4 text-[14px] italic text-ink-3">
              I am a full-time serving CIO. Advisory work is deliberately capped so that it stays genuinely useful.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead num="02" title="Engagements" />
        <div className="grid grid-cols-2 gap-[26px] max-lg:grid-cols-1">
          {engagements.map((e) => (
            <Card key={e.title}>
              <Tag>{e.tag}</Tag>
              <h3 className="mb-s2 text-[19px] font-semibold">{e.title}</h3>
              <p className="mb-s4 text-[14.5px] leading-[1.62] text-ink-2">{e.summary}</p>
              <ul className="mb-s4 space-y-s2">
                {e.includes.map((i) => (
                  <li key={i} className="flex gap-s3 text-[14px] text-ink-2">
                    <span className="text-accent">\u2014</span>
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
        <SectionHead num="03" title="How it starts" />
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
