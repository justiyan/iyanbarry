import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Iyan Barry about advisory engagements, speaking enquiries or IT leadership.',
}

const reasons = [
  { t: 'Advisory', d: 'Assessments, cyber maturity uplift, fractional CIO or AI governance work.' },
  { t: 'Speaking', d: 'Conferences, panels, executive briefings, workshops and podcasts.' },
  { t: 'Media', d: 'Comment or background on AI governance, cyber and technology leadership.' },
  { t: 'Comparing notes', d: 'Other IT leaders working on the same problems. Always happy to talk.' },
]

export default function Contact() {
  return (
    <Layout>
      <div className="border-b border-hairline">
        <Shell className="pb-[120px] pt-s7 max-md:pb-s6 max-md:pt-s6">
          <h1 className="mb-s4 max-w-[16ch] text-[clamp(34px,4.2vw,52px)] font-semibold">
            Get in touch
          </h1>
          <p className="mb-s5 max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            Tell me what you\u2019re dealing with. If it isn\u2019t something I can help with, I\u2019ll say so
            and point you somewhere better.
          </p>
          <div className="flex flex-wrap items-center gap-s3">
            <a href="mailto:ask@iyanbarry.com" className="rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
              ask@iyanbarry.com
            </a>
            <a href="https://au.linkedin.com/in/iyanbarry" target="_blank" rel="noopener noreferrer"
              className="rounded-btn border border-hairline px-s4 py-[11px] text-[14.5px] font-medium text-ink transition-colors hover:border-ink-3 hover:bg-surface-2">
              LinkedIn
            </a>
          </div>
          <p className="mt-s5 text-[14px] text-ink-3">
            Based in Brisbane, Australia (AEST). I usually reply within a couple of days.
          </p>
        </Shell>
      </div>

      <Section className="!border-b-0">
        <SectionHead num="01" title="What to reach out about" />
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-card border border-hairline p-s5">
              <h3 className="mb-s2 text-[16px] font-semibold">{r.t}</h3>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  )
}
