import Link from 'next/link'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card, Tag } from '@/components/ui'
import { getSortedPostsData } from '@/lib/blog'

const engagements = [
  {
    tag: 'Fixed fee · 2–3 weeks',
    title: 'IT & AI Readiness Assessment',
    body: 'Where your technology, security and data actually stand — and what to do in the next twelve months. Ends in a decision-ready plan, not a vendor pitch.',
  },
  {
    tag: 'Scoped per engagement',
    title: 'Cyber Maturity Uplift',
    body: 'From “we think we’re probably fine” to a defensible position you can evidence to a client, insurer or regulator.',
  },
  {
    tag: 'Monthly retainer',
    title: 'Fractional / Interim CIO',
    body: 'Executive technology leadership for organisations that need a CIO’s judgement without another executive headcount.',
  },
  {
    tag: 'Workshop or advisory',
    title: 'AI Governance',
    body: 'A position on AI you can defend to your board, your regulator and your clients.',
  },
]

const facts = [
  { n: '30+', l: 'Years in technology' },
  { n: 'APAC · ANZ · UK', l: 'Experience across three regions' },
  { n: 'iTnews 2026', l: 'Panellist, State of Data & AI, Sydney' },
  { n: 'E8 · ISO 27001', l: 'Also SMB1001 and ISO 27032' },
]

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3)

  return (
    <Layout>
      {/* Hero */}
      <div className="border-b border-hairline">
        <Shell className="pb-[132px] pt-[132px] max-md:pb-s6 max-md:pt-s6">
          <div className="grid grid-cols-[1fr_336px] items-center gap-s7 max-lg:grid-cols-1 max-lg:gap-s5">
            <div className="max-lg:order-2">
              <div className="mb-s5 inline-flex items-center gap-s2 rounded-full border border-hairline bg-surface-2 px-[11px] py-[5px] text-[12px] font-medium text-ink-2">
                <span className="h-[6px] w-[6px] rounded-full bg-live" />
                Internal AI platforms & advisory · {new Date().getFullYear()}
              </div>

              <h1 className="mb-s4 max-w-[16ch] text-[clamp(36px,4.6vw,58px)] font-semibold">
                Give your people powerful AI. Keep control of how it’s used.
              </h1>

              <p className="mb-s5 max-w-[52ch] text-[19px] leading-[1.6] text-ink-2">
                I’m Iyan Barry, a sitting CIO. I design and build custom internal AI platforms
                that connect your people to leading models and organisational knowledge,
                with access and data handling designed around your business.
              </p>

              <div className="flex flex-wrap items-center gap-s3">
                <Link
                  href="/contact"
                  data-hero-cta
                  className="rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent"
                >
                  Discuss your AI platform
                </Link>
                <Link
                  href="/work-with-me#internal-ai-platforms"
                  className="rounded-btn border border-hairline px-s4 py-[11px] text-[14.5px] font-medium text-ink transition-colors hover:border-ink-3 hover:bg-surface-2"
                >
                  How it works
                </Link>
              </div>
            </div>

            <img
              src="/images/iyan-barry-cio.jpg"
              alt="Iyan Barry, Chief Information Officer, Brisbane"
              width={680}
              height={760}
              className="h-[420px] w-[336px] aspect-[4/5] rounded-xl border border-hairline bg-surface-2 object-cover object-[50%_28%] shadow-[0_1px_2px_rgba(11,13,15,0.04)] max-lg:order-1 max-lg:h-[260px] max-lg:w-[210px]"
            />
          </div>
        </Shell>
      </div>

      <Section id="internal-ai-platforms">
        <SectionHead num="01" title="Custom internal AI platforms" />
        <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1 max-md:gap-s5">
          <div>
            <Tag>Design · build · pilot · handover</Tag>
            <h3 className="mb-s3 text-[25px] font-semibold">A useful platform, built around your business.</h3>
            <p className="mb-s4 text-[17px] leading-[1.65] text-ink-2">
              Give staff a practical way to use frontier AI models for everyday work,
              with corporate sign-in, approved knowledge sources and clearly defined access.
              Each engagement starts with your use cases and information requirements.
            </p>
            <Link href="/work-with-me#internal-ai-platforms" className="text-[14.5px] font-medium text-accent hover:underline">
              Explore the offering →
            </Link>
          </div>
          <div className="rounded-card border border-hairline bg-surface-2 p-s5">
            <h3 className="mb-s3 text-[17px] font-semibold">Governance is part of the design.</h3>
            <p className="mb-s3 text-[15px] leading-[1.65] text-ink-2">
              Agree which information the platform can use, who can access it, where it is
              processed and where human review is required. Model selection follows those decisions.
            </p>
            <p className="text-[14px] leading-[1.65] text-ink-2">
              Hosting the application in your cloud does not automatically keep model processing
              there. Provider terms, retention and processing locations need checking for each service.
            </p>
          </div>
        </div>
      </Section>

      {/* Supporting advisory services */}
      <Section id="advisory">
        <SectionHead num="02" title="Supporting advisory" />
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {engagements.map((e) => (
            <Card key={e.title}>
              <Tag>{e.tag}</Tag>
              <h3 className="mb-s2 text-[17px] font-semibold">{e.title}</h3>
              <p className="text-[14.5px] leading-[1.62] text-ink-2">{e.body}</p>
            </Card>
          ))}
        </div>
        <Link
          href="/work-with-me"
          className="mt-s5 inline-block text-[14.5px] font-medium text-accent hover:underline"
        >
          How engagements work →
        </Link>
      </Section>

      {/* Writing */}
      <Section id="writing">
        <SectionHead num="03" title="Writing" />
        <div>
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid grid-cols-[120px_1fr] items-baseline gap-s5 border-b border-hairline py-s4 first:border-t max-md:grid-cols-1 max-md:gap-s1"
            >
              <span className="font-mono text-[12.5px] text-ink-3">
                {new Date(p.date).toLocaleDateString('en-AU', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
              <div>
                <h3 className="mb-[4px] text-[17px] font-[550] transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="text-[14.5px] text-ink-3">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-s5 inline-block text-[14.5px] font-medium text-accent hover:underline"
        >
          All writing →
        </Link>
      </Section>

      {/* Background */}
      <Section id="background">
        <SectionHead num="04" title="Background" />
        <div className="grid grid-cols-4 gap-[26px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {facts.map((f) => (
            <div key={f.n} className="rounded-card border border-hairline p-s5">
              <div className="mb-s2 text-[30px] font-semibold tracking-[-0.028em]">{f.n}</div>
              <div className="text-[13.5px] text-ink-3">{f.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!border-b-0">
        <div className="max-w-[62ch]">
          <h2 className="mb-s3 text-[30px] font-semibold">
            Tell me what you’re dealing with
          </h2>
          <p className="mb-s5 text-[17px] text-ink-2">
            Thirty minutes, no charge, no pitch. If it isn’t something I can help with, I’ll
            say so and point you somewhere better.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent"
          >
            Start a conversation
          </Link>
        </div>
      </Section>
    </Layout>
  )
}
