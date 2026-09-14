import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead } from '@/components/ui'
import { capabilities } from '@/lib/capabilities'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Iyan Barry, a Brisbane-based CIO with three decades in technology across APAC, ANZ and the UK. Strategy, teams, cybersecurity, data, AI and hands-on delivery.',
  alternates: { canonical: 'https://iyanbarry.com/about' },
}

const timeline = [
  { y: '1996', t: 'Started in IT', d: 'The beginning of a career combining hands-on technology with business and people leadership.' },
  { y: '2002–2009', t: 'Commercial and customer-facing roles', d: 'International Business Manager at Intertranz Container Lines, followed by roles across account management, consulting, telecommunications and regional management. This part of my career gave me a grounding in customers and how businesses work.' },
  { y: '2010–2012', t: 'Technology support at Suncorp', d: 'Moved from Business Technology Service Desk Analyst to Group Executive Support Analyst, working closer to the technology needs of senior leaders.' },
  { y: '2012–Aug 2018', t: 'Delivery Manager at Suncorp Group', d: 'Led Group Executive & Premium Support: technology delivery for the CEO, board and executive team, alongside service improvement, vendor management and a distributed support team.' },
  { y: 'Feb 2019–Jul 2021', t: 'ANZ Infrastructure Engineering Lead at Domino’s', d: 'Led infrastructure strategy and engineering across ANZ, including service modernisation, cloud collaboration, operational resilience and team development.' },
  { y: 'Jul 2021', t: 'General Manager – Information Technology', d: 'Joined Safe Places for Children to lead technology strategy and operations. The role grew across cybersecurity, data, enterprise systems and Australian and UK technology services, working with the CEO and board.' },
  { y: 'Sep 2023–Nov 2024', t: 'Board member, Magical Getaway Foundation', d: 'Contributed to the charity’s strategic direction, governance and financial oversight. A chance to bring a technology and business perspective to decisions beyond the IT function.' },
  { y: '2026', t: 'Appointed Chief Information Officer', d: 'Leading technology, data, cybersecurity and digital enablement across Australian and UK operations.' },
  { y: '2026', t: 'Internal AI platforms', d: 'Hands-on work bringing AI models, organisational knowledge and access controls into a usable platform. Sharing the build lessons without disclosing confidential project details.' },
]

const values = [
  { t: 'Psychological safety', d: 'People do their best work when they feel secure enough to say what they actually think.' },
  { t: 'Make the priorities clear', d: 'People need to know what matters, why it matters and what can wait.' },
  { t: 'Stay close to the work', d: 'I like understanding how things work, building where it helps and learning from the people using them.' },
  { t: 'Start with something useful', d: 'Test the idea on a manageable problem, learn what happens and build from there.' },
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
                  I’ve spent three decades in technology, with experience across APAC, ANZ and
                  the UK. I enjoy the mix of working through a big decision with a leadership
                  team and getting into the detail of how something will work.
                </p>
                <p>
                  A lot of my work has been about helping teams move beyond firefighting.
                  That means clearer priorities, trust between people and enough structure to
                  get work finished. It has also meant recognising when I was the bottleneck
                  and changing how I led the team.
                </p>
                <p>
                  Cybersecurity is another big part of my work, including Microsoft Secure Score,
                  ISO 27001-aligned controls and the ACSC Essential Eight. I’m also familiar with SMB1001 and ISO 27032.
                  I want people to understand what the controls are for and be able to use them
                  in the day-to-day work.
                </p>
                <p>
                  I’m hands-on with AI, automation, data and integration too. Sometimes the right
                  answer is a custom tool; sometimes it’s making better use of what’s already
                  there. I care about whether it helps the people doing the work and whether
                  we understand how it handles their information.
                </p>
              </div>
            </div>
            <img src="/images/iyan-barry-cio.jpg" alt="Iyan Barry, Chief Information Officer" width={600} height={670}
              className="h-[375px] w-[300px] rounded-xl border border-hairline bg-surface-2 object-cover object-[50%_28%] max-lg:order-1 max-lg:h-[260px] max-lg:w-[210px]" />
          </div>
        </Shell>
      </div>

      <Section id="capabilities">
        <SectionHead num="01" title="What I bring to the work" />
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {capabilities.map((c) => (
            <div key={c.title} className="rounded-card border border-hairline p-s5">
              <h3 className="mb-s2 text-[19px] font-semibold">{c.title}</h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">{c.examples}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="02" title="Timeline" />
        <div className="max-w-[70ch]">
          {timeline.map((i) => (
            <div key={i.t} className="grid grid-cols-[150px_1fr] gap-s5 border-b border-hairline py-s4 first:border-t max-md:grid-cols-1 max-md:gap-s1">
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
        <SectionHead num="03" title="How I work" />
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
            Alongside my CIO role, I work with a small number of organisations on advice and
            hands-on projects. If you think I could help, tell me what you’re working on.
          </p>
          <Link href="/work-with-me" className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent">
            Ways we can work together
          </Link>
        </div>
      </Section>
    </Layout>
  )
}
