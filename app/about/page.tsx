import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Iyan Barry is Chief Information Officer at Safe Places for Children, leading technology, data and cybersecurity across Australian and UK operations.',
}

const timeline = [
  { y: '1996', t: 'Started in IT', d: 'The beginning of three decades across APAC, ANZ and UK organisations.' },
  { y: '2021', t: 'Took on the IT leadership role', d: 'Began transforming an overwhelmed, reactive IT function into a strategic capability.' },
  { y: '2022', t: 'Cybersecurity uplift programme', d: 'Secure Score uplift, ISO 27001 / ISO 27032 alignment, SMB1001 and Essential Eight implementation.' },
  { y: '2023', t: 'Practical AI and automation', d: 'Deploying AI tooling into day-to-day operations, with the governance to support it.' },
  { y: '2024', t: 'Restructured the team into three delivery streams', d: 'Service delivery, technical delivery and project delivery — same people, clearer focus.' },
  { y: '2026', t: 'Appointed Chief Information Officer', d: 'Leading technology, data, cyber and digital enablement across AU and a UK arm regulated by Ofsted.' },
]

const values = [
  { t: 'Psychological safety', d: 'People do their best work when they feel secure enough to say what they actually think.' },
  { t: 'Clarity of purpose', d: 'Everyone should understand why their work matters and how it connects to the whole.' },
  { t: 'Practical delivery', d: 'Perfect is the enemy of good. Ship something that works, then improve it.' },
  { t: 'Think big, start small, scale fast', d: 'Ambitious vision, pragmatic execution.' },
]

export default function About() {
  return (
    <Layout>
      <div className="border-b border-hairline">
        <Shell className="pb-[120px] pt-s7 max-md:pb-s6 max-md:pt-s6">
          <div className="grid grid-cols-[1fr_300px] items-start gap-s6 max-lg:grid-cols-1 max-lg:gap-s5">
            <div className="max-lg:order-2">
              <h1 className="mb-s5 max-w-[16ch] text-[clamp(34px,4.2vw,52px)] font-semibold">About</h1>
              <div className="max-w-prose space-y-s4 text-[17.5px] leading-[1.72] text-ink-2">
                <p>
                  I’m based in Brisbane, where I serve as Chief Information Officer at Safe Places
                  for Children — a not-for-profit providing intensive therapeutic care to young
                  people at risk. I lead technology, information, data, cybersecurity and digital
                  enablement across our Australian operations and our UK arm, which is regulated by
                  Ofsted.
                </p>
                <p>
                  Three decades in, the work is less about the technology and more about judgement
                  under constraint — deciding what matters, what can wait, and what you are willing
                  to defend to a board. That experience spans APAC, ANZ and the UK, across markedly
                  different regulatory expectations.
                </p>
                <p>
                  When I took on this role I inherited an IT team that was reactive and
                  under-resourced, constantly firefighting with little time for strategic thinking.
                  Turning that around was not about implementing trendy frameworks. It was about
                  building trust, establishing clear priorities, and creating systems that actually
                  work — including recognising, eventually, that I had become the bottleneck.
                </p>
                <p>
                  A significant part of my work has focused on cybersecurity uplift: improving our
                  Microsoft Secure Score, aligning controls to ISO 27001, ISO 27032, SMB1001 and the
                  ACSC Essential Eight, and
                  implementing governance and risk frameworks that protect the organisation without
                  creating bureaucratic overhead. The key has been making security practical and
                  sustainable, not merely compliant.
                </p>
                <p>
                  Where our sector differs from most is the stakes. Data protection here is a
                  child-safety matter, not a compliance exercise. That shapes how I think about AI:
                  useful, but only with governance you can articulate and defend.
                </p>
              </div>
            </div>
            <img src="/images/iyan-barry-cio.jpg" alt="Iyan Barry, Chief Information Officer" width={600} height={670}
              className="h-[375px] w-[300px] rounded-xl border border-hairline bg-surface-2 object-cover object-[50%_28%] max-lg:order-1 max-lg:h-[260px] max-lg:w-[210px]" />
          </div>
        </Shell>
      </div>

      <Section>
        <SectionHead num="01" title="Timeline" />
        <div className="max-w-[70ch]">
          {timeline.map((i) => (
            <div key={i.y} className="grid grid-cols-[90px_1fr] gap-s5 border-b border-hairline py-s4 first:border-t max-md:grid-cols-1 max-md:gap-s1">
              <span className="font-mono text-[12.5px] text-accent">{i.y}</span>
              <div>
                <h3 className="mb-[3px] text-[16px] font-[550]">{i.t}</h3>
                <p className="text-[14.5px] text-ink-3">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="02" title="How I work" />
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {values.map((v) => (
            <div key={v.t} className="rounded-card border border-hairline p-s5">
              <h3 className="mb-s2 text-[16px] font-semibold">{v.t}</h3>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!border-b-0">
        <div className="max-w-[62ch]">
          <h2 className="mb-s3 text-[30px] font-semibold">Work with me</h2>
          <p className="mb-s5 text-[17px] text-ink-2">
            I advise a small number of Australian mid-market executive teams alongside the day job.
          </p>
          <Link href="/work-with-me" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
            See engagements
          </Link>
        </div>
      </Section>
    </Layout>
  )
}
