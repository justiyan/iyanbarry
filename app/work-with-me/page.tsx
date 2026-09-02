import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Work with me',
  description:
    'Advisory engagements for Australian mid-market executive teams: IT & AI readiness assessments, cyber maturity uplift (Essential Eight, ISO 27001), and fractional CIO support.',
}

const engagements = [
  {
    n: '01',
    name: 'IT & AI Readiness Assessment',
    price: 'Fixed fee · 2–3 weeks',
    summary:
      'A structured review of where your technology, security and data actually stand — and what to do about it in the next twelve months.',
    includes: [
      'Executive interviews and a review of your current environment',
      'Cyber maturity scored against the ACSC Essential Eight',
      'An honest read on where AI will and will not pay off for you',
      'A prioritised roadmap by effort and impact, costed at a high level',
      'A written report and a live session with your executive team or board',
    ],
    outcome:
      'You leave with a decision-ready plan you can take to a board — not a vendor pitch.',
  },
  {
    n: '02',
    name: 'Cyber Maturity Uplift',
    price: 'Scoped per engagement',
    summary:
      'Getting a business from "we think we are probably fine" to a defensible, evidenced security position.',
    includes: [
      'Essential Eight and ISO 27001 gap assessment',
      'A remediation plan sequenced by risk, not by product',
      'Governance, risk and incident response frameworks that people will actually use',
      'Board-level reporting your directors can understand',
    ],
    outcome:
      'Security you can evidence to a client, an insurer, an auditor or a regulator.',
  },
  {
    n: '03',
    name: 'Fractional / Interim CIO',
    price: 'Monthly retainer · limited availability',
    summary:
      'Executive technology leadership for organisations that need the judgement of a CIO but not a full-time salary.',
    includes: [
      'Technology strategy and roadmap ownership',
      'Board and executive reporting',
      'Vendor selection, contract review and negotiation support',
      'Coaching and structure for an existing IT team or manager',
    ],
    outcome:
      'A steady hand on technology decisions, without carrying another executive headcount.',
  },
  {
    n: '04',
    name: 'AI Governance for Regulated Environments',
    price: 'Workshop or advisory',
    summary:
      'For organisations handling sensitive data — care, health, education, government-adjacent — that want AI without creating a privacy or compliance problem.',
    includes: [
      'Acceptable-use and AI governance policy',
      'Data residency and cross-border transfer review',
      'Risk assessment for proposed AI use cases',
      'Staff guidance that is practical rather than prohibitive',
    ],
    outcome:
      'A position on AI you can defend to your board, your regulator and your clients.',
  },
]

export default function WorkWithMe() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-white"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-medium text-white font-outfit leading-tight mb-6 max-w-3xl">
            <span className="text-light-muted">Advisory for</span><br />
            Australian mid-market<br />
            executive teams.
          </h1>
          <p className="text-lg text-light leading-relaxed max-w-2xl mb-8">
            I work with a small number of organisations at a time, alongside my
            executive role. Engagements are scoped, fixed in duration, and
            delivered by me personally — there is no delivery team behind this.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:-translate-y-1"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark font-outfit mb-6">
                Who this is for
              </h2>
              <ul className="space-y-3 text-light leading-relaxed">
                <li>Australian businesses roughly 50–500 people.</li>
                <li>
                  Organisations with an IT manager or small team, but no CIO —
                  and decisions that have outgrown the current structure.
                </li>
                <li>
                  Executive teams being asked hard questions about cyber risk or
                  AI by a board, an insurer or a major client.
                </li>
                <li>
                  Businesses in regulated or sensitive sectors where getting
                  technology wrong has consequences beyond downtime.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark font-outfit mb-6">
                Who this is not for
              </h2>
              <ul className="space-y-3 text-light leading-relaxed">
                <li>
                  Anyone looking for a managed service provider. I do not run
                  helpdesks or resell hardware.
                </li>
                <li>
                  Organisations wanting a rubber stamp on a decision already
                  made.
                </li>
                <li>
                  Large enterprises needing a full delivery team — you want a
                  firm, not an individual.
                </li>
              </ul>
              <p className="mt-6 text-sm text-light/80 italic">
                I am a full-time serving CIO. Advisory work is deliberately
                capped so that it stays genuinely useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <span className="text-2xl font-bold text-primary font-outfit">01</span>
            <div className="flex-1 h-px bg-light/30 mx-4"></div>
            <span className="text-light font-medium">Engagements</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engagements.map((e) => (
              <div
                key={e.n}
                className="bg-white p-8 rounded-2xl shadow-sm border border-light/20 flex flex-col"
              >
                <span className="text-sm font-bold text-primary font-outfit mb-2">
                  {e.n}
                </span>
                <h3 className="text-2xl font-bold text-dark font-outfit mb-2">
                  {e.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">{e.price}</p>
                <p className="text-light leading-relaxed mb-6">{e.summary}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {e.includes.map((i) => (
                    <li key={i} className="text-light text-sm flex gap-3">
                      <span className="text-primary mt-1">—</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-dark font-medium border-t border-light/20 pt-4">
                  {e.outcome}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-light max-w-3xl">
            Pricing is discussed openly on a first call once scope is clear. I
            would rather tell you an engagement is not worth running than sell
            you one that is not.
          </p>
        </div>
      </section>

      {/* How it starts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark font-outfit mb-12">
            How it starts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '1',
                t: 'A conversation',
                d: 'Thirty minutes, no charge, no pitch. You describe the problem; I tell you honestly whether I am the right person for it.',
              },
              {
                n: '2',
                t: 'A written proposal',
                d: 'Scope, deliverables, timeframe and fixed price in writing before anything begins. No open-ended day rates.',
              },
              {
                n: '3',
                t: 'The work',
                d: 'Delivered by me, to the agreed date, ending in a written report and a live session with your executive team.',
              },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-4xl font-bold text-primary font-outfit mb-4">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-dark font-outfit mb-3">
                  {s.t}
                </h3>
                <p className="text-light leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-outfit mb-6">
            Tell me what you are dealing with
          </h2>
          <p className="text-light mb-8 max-w-2xl mx-auto">
            If it is not something I can help with, I will say so and point you
            somewhere better.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:-translate-y-1"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}
