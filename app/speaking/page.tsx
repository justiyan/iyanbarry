import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import speakerKit from '@/lib/speaker-kit.json'
import { Shell, Section, SectionHead, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Iyan Barry speaks about technology leadership, practical AI, cybersecurity and building IT teams. Topics, formats and bios for event organisers.',
  alternates: { canonical: 'https://iyanbarry.com/speaking' },
}

const { topics, formats, bios, downloads } = speakerKit

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
                {speakerKit.intro}
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
              <p className="mt-s3 border-t border-hairline pt-s3 text-[14.5px] leading-[1.62] text-ink-2">
                <span className="font-medium text-ink">Audience takeaway: </span>{t.takeaway}
              </p>
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
            <div className="mt-s5 border-t border-hairline pt-s4">
              <h3 className="mb-s3 text-[17px] font-semibold">For event organisers</h3>
              <p className="mb-s4 text-[14.5px] leading-[1.62] text-ink-2">
                Topics, formats and ready-to-use bios. Short bio and full bio text are also available below.
              </p>
              <ul className="space-y-s3">
                {downloads.map((asset) => (
                  <li key={asset.href}>
                    <a href={asset.href} download className="text-[14.5px] font-medium text-accent hover:underline">
                      Download {asset.label.toLowerCase()} ↓
                    </a>
                    <span className="mt-s1 block text-[12px] text-ink-3">{asset.detail}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-s4 inline-block text-[14.5px] font-medium text-accent hover:underline">
                Discuss your event →
              </Link>
            </div>
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
