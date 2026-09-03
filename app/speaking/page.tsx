import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Iyan Barry speaks on AI governance in regulated environments, cyber maturity for resource-constrained organisations, and building IT teams that scale. Bio, headshots and topics for event organisers.',
}

const topics = [
  { title: 'Deploying AI when your users are vulnerable', audience: 'Care, health, education, government-adjacent',
    body: 'What changes about AI adoption when the people in your data cannot consent in any meaningful way, and two different regulators are watching. Practical governance, not theory.' },
  { title: 'Essential Eight on a not-for-profit budget', audience: 'CIOs, IT managers, boards',
    body: 'Lifting cyber maturity when there is no dedicated security team and no enterprise budget. What to do first, what to defer, and how to evidence it to a board.' },
  { title: 'Running IT across multiple jurisdictions', audience: 'Executives operating internationally',
    body: 'Data residency, cross-border access and jurisdictional complexity across APAC, ANZ and UK regimes — where the same control means different things to different regulators.' },
  { title: 'From firefighting to strategic', audience: 'IT leaders, executive teams',
    body: 'Taking a reactive, under-resourced team and restructuring it into distinct delivery streams — including the part where you discover you are the bottleneck.' },
  { title: 'The CIO as an AI translator', audience: 'Boards and executive teams',
    body: 'How to ask better questions about AI proposals, separate genuine capability from vendor narrative, and make decisions you can defend in twelve months.' },
]

const appearances = [
  {
    date: '22 July 2026',
    event: 'iTnews State of Data & AI',
    role: 'Panellist — “Scaling AI”',
    detail:
      'Executive breakfast for CIOs, CISOs and senior technology leaders at NEXTDC’s S3 data centre, Sydney. Panel alongside Tristan Cox (Workato) and Rolee Satyam (Tyro Payments), on moving AI beyond experimentation into governed, measurable business outcomes.',
    href: 'https://www.itnews.com.au/gallery/in-pictures-itnews-state-of-data-ai-launch-sydney-627604',
    linkLabel: 'Event coverage',
  },
]

const formats = [
  'Conference keynote (20–45 min)',
  'Panel discussion and moderation',
  'Executive or board briefing (45–90 min)',
  'Workshop (half or full day)',
  'Podcast and interview',
]

const bios = [
  { len: 'Short — one line', text: 'Iyan Barry is a Brisbane-based Chief Information Officer working at the intersection of AI, cybersecurity and child-safeguarding technology.' },
  { len: 'Medium — 60 words', text: 'Iyan Barry is Chief Information Officer at Safe Places for Children, where he leads technology, data, cybersecurity and digital strategy across Australian and UK operations. With three decades across APAC, ANZ and the UK, he focuses on making AI and security work in environments where the stakes are people rather than uptime. He writes and speaks on practical AI governance for regulated organisations, most recently on the “Scaling AI” panel at iTnews State of Data & AI in Sydney.' },
  { len: 'Long — 120 words', text: 'Iyan Barry is Chief Information Officer at Safe Places for Children, a not-for-profit providing intensive therapeutic care to young people at risk. He leads technology, information, data, cybersecurity and digital enablement across Australian operations and a UK arm regulated by Ofsted — an environment where data protection is a child-safety matter, not a compliance exercise. His career spans three decades across APAC, ANZ and UK organisations. He has rebuilt an IT function from reactive to strategic, implemented the ACSC Essential Eight, ISO 27001, ISO 27032 and SMB1001-aligned controls, and deployed AI and automation into day-to-day operations. He has spoken on enterprise AI alongside Workato and Tyro Payments at iTnews State of Data & AI. He advises Australian mid-market executive teams and writes on IT leadership at iyanbarry.com.' },
]

export default function Speaking() {
  return (
    <Layout>
      <div className="border-b border-hairline">
        <Shell className="pb-[120px] pt-s7 max-md:pb-s6 max-md:pt-s6">
          <div className="grid grid-cols-[1fr_300px] items-center gap-s6 max-lg:grid-cols-1 max-lg:gap-s5">
            <div className="max-lg:order-2">
              <h1 className="mb-s4 max-w-[16ch] text-[clamp(34px,4.2vw,52px)] font-semibold">
                Speaking &amp; media
              </h1>
              <p className="mb-s5 max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
                I speak about the parts of technology leadership that are hard to talk about
                honestly — governing AI where mistakes harm people, lifting security without an
                enterprise budget, and what actually happens when you restructure a team.
                Most recently on the “Scaling AI” panel at iTnews State of Data &amp; AI, Sydney.
              </p>
              <Link href="/contact" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
                Enquire about an event
              </Link>
            </div>
            <img src="/images/iyan-barry-cio.jpg" alt="Iyan Barry — speaker headshot" width={600} height={670}
              className="h-[375px] w-[300px] rounded-xl border border-hairline bg-surface-2 object-cover object-[50%_28%] max-lg:order-1 max-lg:h-[260px] max-lg:w-[210px]" />
          </div>
        </Shell>
      </div>

      <Section>
        <SectionHead num="01" title="Recent appearances" />
        <div>
          {appearances.map((a) => (
            <div
              key={a.event}
              className="grid grid-cols-[130px_1fr] items-baseline gap-s5 border-b border-hairline py-s4 first:border-t max-md:grid-cols-1 max-md:gap-s1"
            >
              <span className="font-mono text-[12.5px] text-ink-3">{a.date}</span>
              <div>
                <h3 className="mb-[3px] text-[17px] font-[550]">{a.event}</h3>
                <p className="mb-s2 font-mono text-[11px] uppercase tracking-[0.03em] text-accent">
                  {a.role}
                </p>
                <p className="mb-s2 max-w-[68ch] text-[14.5px] leading-[1.62] text-ink-2">
                  {a.detail}
                </p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium text-accent hover:underline"
                >
                  {a.linkLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="02" title="Topics" />
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {topics.map((t) => (
            <Card key={t.title}>
              <h3 className="mb-s2 text-[17px] font-semibold">{t.title}</h3>
              <p className="mb-s3 font-mono text-[11px] uppercase tracking-[0.03em] text-accent">{t.audience}</p>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{t.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="03" title="Formats &amp; media kit" />
        <div className="grid grid-cols-[300px_1fr] gap-s6 max-lg:grid-cols-1">
          <div>
            <ul className="space-y-s2">
              {formats.map((f) => (
                <li key={f} className="flex gap-s3 text-[15px] text-ink-2">
                  <span className="text-accent">—</span><span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-s5 text-[14.5px] leading-[1.62] text-ink-2">
              Headshots available on request in high resolution, square and transparent-background formats.
            </p>
            <Link href="/contact" className="mt-s3 inline-block text-[14.5px] font-medium text-accent hover:underline">
              Request the media kit →
            </Link>
          </div>
          <div className="space-y-s4">
            {bios.map((b) => (
              <div key={b.len}>
                <p className="mb-s2 font-mono text-[11px] uppercase tracking-[0.03em] text-accent">{b.len}</p>
                <p className="rounded-card border border-hairline bg-surface-2 p-s4 text-[15px] leading-[1.65] text-ink-2">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!border-b-0">
        <div className="max-w-[62ch]">
          <h2 className="mb-s3 text-[30px] font-semibold">Planning an event?</h2>
          <p className="mb-s5 text-[17px] text-ink-2">
            Tell me the audience, the date and what you want them to walk away with. I will tell
            you honestly whether I am the right speaker for it.
          </p>
          <Link href="/contact" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
            Enquire about speaking
          </Link>
        </div>
      </Section>
    </Layout>
  )
}
