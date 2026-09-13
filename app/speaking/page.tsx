import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Iyan Barry speaks about technology leadership, practical AI, cybersecurity and building IT teams. Topics, formats and bios for event organisers.',
  alternates: { canonical: 'https://iyanbarry.com/speaking' },
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

const formats = [
  'Conference keynote (20–45 min)',
  'Panel discussion and moderation',
  'Executive or board briefing (45–90 min)',
  'Workshop (half or full day)',
  'Podcast and interview',
]

const bios = [
  { len: 'One line', text: 'Iyan Barry is a Brisbane-based CIO who works across technology leadership, cybersecurity, data, AI and automation.' },
  { len: 'Short bio', text: 'Iyan Barry is Chief Information Officer at Safe Places for Children, leading technology, data and cybersecurity across Australian and UK operations. His career spans three decades across APAC, ANZ and the UK. He combines technology leadership with hands-on work in AI and automation, and speaks about what it takes to make technology useful in practice. He was a panellist at iTnews State of Data & AI in Sydney.' },
  { len: 'Full bio', text: 'Iyan Barry is Chief Information Officer at Safe Places for Children, where he leads technology, data, cybersecurity and digital strategy across Australian and UK operations. He has spent three decades in technology, with experience across APAC, ANZ and the UK. His work includes developing IT teams, improving security, connecting systems and putting AI and automation to use. He has worked with the ACSC Essential Eight and ISO 27001-aligned controls, and is familiar with SMB1001 and ISO 27032. Alongside his executive role, he helps organisations with technology decisions and hands-on projects. He spoke on the “Scaling AI” panel alongside Workato and Tyro Payments at iTnews State of Data & AI in Sydney, and writes about technology leadership at iyanbarry.com.' },
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
        <SectionHead num="01" title="Topics" />
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
        <SectionHead num="02" title="Formats &amp; media kit" />
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
