import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ContactForm, { EmailOptions } from '@/components/ContactForm'
import { Shell, Section, SectionHead } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Iyan Barry about technology advice, AI and automation, cybersecurity, data projects or speaking.',
  alternates: { canonical: 'https://iyanbarry.com/contact' },
}

const reasons = [
  { t: 'Advice or a project', d: 'Technology decisions, security, AI platforms, automation, data or connecting systems. Tell me what you need help with.' },
  { t: 'Speaking', d: 'Conferences, panels, executive briefings, workshops and podcasts.' },
  { t: 'Media', d: 'Comment or background on AI governance, cyber and technology leadership.' },
  { t: 'Comparing notes', d: 'Other IT leaders working on the same problems. Always happy to talk.' },
]

export default function Contact() {
  return (
    <Layout>
      <div className="page-hero">
        <Shell>
          <h1 className="page-title mb-s4 max-w-[16ch]">
            Get in touch
          </h1>
          <p className="mb-s5 max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            Tell me what you’re working on, or where you’re stuck. If I’m not the right
            person to help, I’ll say so.
          </p>
          {process.env.CONTACT_FORM_ENABLED === 'true' ? <ContactForm /> : <EmailOptions />}
          <div className="mt-s4 flex flex-wrap items-center gap-s3">
            <a href="https://au.linkedin.com/in/iyanbarry" target="_blank" rel="noopener noreferrer"
              className="text-link">
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
        <div className="grid grid-cols-2 gap-x-16 gap-y-5 max-md:grid-cols-1">
          {reasons.map((r) => (
            <div key={r.t} className="border-t border-hairline py-7">
              <h3 className="mb-s3 font-display text-[28px] font-normal leading-tight">{r.t}</h3>
              <p className="text-[16px] leading-[1.75] text-ink-2">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  )
}
