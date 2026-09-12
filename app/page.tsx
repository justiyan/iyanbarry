import Link from 'next/link'
import Layout from '@/components/Layout'
import { Shell, Section, SectionHead, Card, Tag } from '@/components/ui'
import { getSortedPostsData } from '@/lib/blog'
import { capabilities } from '@/lib/capabilities'
import PostDate from '@/components/PostDate'

const facts = [
  { n: '30+', l: 'Years in technology' },
  { n: 'APAC · ANZ · UK', l: 'Where I’ve worked' },
  { n: 'iTnews 2026', l: 'Panellist, State of Data & AI, Sydney' },
  { n: 'E8 · ISO 27001', l: 'Also familiar with SMB1001 and ISO 27032' },
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
                CIO · Advisor · Builder
              </div>

              <h1 className="mb-s4 max-w-[16ch] text-[clamp(36px,4.6vw,58px)] font-semibold">
                Technology leadership, with the ability to build.
              </h1>

              <p className="mb-s5 max-w-[52ch] text-[19px] leading-[1.6] text-ink-2">
                I’m Iyan Barry, a Brisbane-based CIO with three decades in technology across
                APAC, ANZ and the UK. I help organisations make better technology decisions,
                strengthen security and put AI, data and automation to work.
              </p>

              <div className="flex flex-wrap items-center gap-s3">
                <Link
                  href="/contact"
                  data-hero-cta
                  className="rounded-btn bg-ink px-s4 py-[11px] text-[14.5px] font-medium text-white transition-colors hover:bg-accent"
                >
                  Let’s talk
                </Link>
                <Link
                  href="/work-with-me"
                  className="rounded-btn border border-hairline px-s4 py-[11px] text-[14.5px] font-medium text-ink transition-colors hover:border-ink-3 hover:bg-surface-2"
                >
                  How I can help
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

      <Section id="capabilities">
        <SectionHead num="01" title="How I can help" />
        <p className="mb-s5 max-w-[65ch] text-[17px] leading-[1.65] text-ink-2">
          Sometimes you need a fresh view on a decision. Sometimes you need someone to help
          build the thing and get it working. I’m comfortable doing both.
        </p>
        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          {capabilities.map((c) => (
            <Card key={c.title}>
              <h3 className="mb-s2 text-[19px] font-semibold">{c.title}</h3>
              <p className="text-[15px] leading-[1.65] text-ink-2">{c.summary}</p>
            </Card>
          ))}
        </div>
        <Link href="/work-with-me" className="mt-s5 inline-block text-[14.5px] font-medium text-accent hover:underline">
          Ways we can work together →
        </Link>
      </Section>

      <Section id="internal-ai-platforms">
        <SectionHead num="02" title="Custom internal AI platforms" />
        <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1 max-md:gap-s5">
          <div>
            <Tag>A particular focus</Tag>
            <h3 className="mb-s3 text-[25px] font-semibold">A useful platform, built around your business.</h3>
            <p className="mb-s4 text-[17px] leading-[1.65] text-ink-2">
              This is one area I’m especially interested in: bringing leading AI models and
              company knowledge together in a platform built for your people. Useful tools,
              with clear rules about who can access information and how it’s handled.
            </p>
            <Link href="/work-with-me#internal-ai-platforms" className="text-[14.5px] font-medium text-accent hover:underline">
              More about internal AI platforms →
            </Link>
          </div>
          <div className="rounded-card border border-hairline bg-surface-2 p-s5">
            <h3 className="mb-s3 text-[17px] font-semibold">Work out the boundaries before the build.</h3>
            <p className="mb-s3 text-[15px] leading-[1.65] text-ink-2">
              We start with the work you want to improve, the information involved and the
              decisions people need to stay responsible for. Then we choose the models and tools.
            </p>
            <p className="text-[14px] leading-[1.65] text-ink-2">
              Hosting the app in your cloud doesn’t mean every model runs there. We check where
              each service processes information, what it keeps and what its terms allow.
            </p>
          </div>
        </div>
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
              <PostDate date={p.date} updated={p.updated} />
              <div>
                <h3 className="mb-[4px] text-[17px] font-[550] transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="text-[14.5px] text-ink-3">{p.summary}</p>
                <p className="mt-s2 font-mono text-[11px] text-ink-3">{p.readingMinutes} min read</p>
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
            What are you working on?
          </h2>
          <p className="mb-s5 text-[17px] text-ink-2">
            Tell me what you’re trying to improve, or where you’re stuck. We can start with
            a short conversation. If I’m not the right person, I’ll say so.
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
