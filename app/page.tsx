import Link from 'next/link'
import Layout from '@/components/Layout'
import { Shell } from '@/components/ui'
import { getSortedPostsData } from '@/lib/blog'
import { capabilities } from '@/lib/capabilities'
import PostDate from '@/components/PostDate'

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3)
  return (
    <Layout>
      <Shell>
        <section className="home-hero">
          <div>
            <div className="eyebrow">CIO · Advisor · Builder / Brisbane, Australia</div>
            <h1 aria-label="Technology leadership, with the ability to build.">Technology<br />leadership, with<br />the ability <em>to build.</em></h1>
            <p className="home-intro">I’m Iyan Barry, a Brisbane-based CIO with three decades in technology across APAC, ANZ and the UK. I help organisations make better technology decisions, strengthen security and put AI, data and automation to work.</p>
            <div className="home-actions"><Link href="/contact" data-hero-cta className="btn-primary">Let’s talk <span aria-hidden="true">↗</span></Link><Link href="#capabilities" className="text-link">How I can help <span aria-hidden="true">↓</span></Link></div>
          </div>
          <figure>
            <img src="/images/iyan-barry-parchment.webp" alt="Iyan Barry, Chief Information Officer, Brisbane" width={680} height={760} fetchPriority="high" className="editorial-portrait" />
            <figcaption className="portrait-caption"><span>IYAN BARRY</span><span>Leadership + hands-on delivery</span></figcaption>
          </figure>
        </section>
        <div className="home-context"><span>Experience that connects the dots.</span><span>Technology leadership across APAC, ANZ &amp; the UK</span><Link href="/about" className="inline-flex min-h-[44px] items-center">My background ↗</Link></div>
        <section className="home-block home-split" id="capabilities">
          <div className="home-section-intro"><div className="eyebrow">How I can help</div><h2 className="home-heading">A fresh perspective.<br /><em>A practical pair<br />of hands.</em></h2><p className="text-ink-2">Sometimes you need a fresh view on a decision. Sometimes you need someone to help build the thing and get it working. I’m comfortable doing both.</p><Link className="text-link" href="/work-with-me">Ways we can work together ↗</Link></div>
          <div>{capabilities.map((capability, index) => <div className="home-service" key={capability.title}><span className="home-number" aria-hidden="true">0{index + 1}</span><div><h3>{capability.title}</h3><p>{capability.summary}</p></div></div>)}</div>
        </section>
      </Shell>
      <section className="home-focus home-block" id="internal-ai-platforms">
        <Shell className="home-split">
          <div><div className="eyebrow">A particular focus / Custom internal AI platforms</div><h2 className="home-heading">A useful platform.<br />Built around<br /><em>your business.</em></h2></div>
          <div><p>This is one area I’m especially interested in: bringing leading AI models and company knowledge together in a platform built for your people. Useful tools, with clear rules about who can access information and how it’s handled.</p><h3 className="mt-s4 mb-s2 font-medium">Work out the boundaries before the build.</h3><p>We start with the work you want to improve, the information involved and the decisions people need to stay responsible for. Then we choose the models and tools.</p><Link className="text-link mt-s4" href="/work-with-me#internal-ai-platforms">More about internal AI platforms ↗</Link><p className="home-note">Hosting the app in your cloud doesn’t mean every model runs there. We check where each service processes information, what it keeps and what its terms allow.</p></div>
        </Shell>
      </section>
      <Shell>
        <section className="home-block" id="writing">
          <div className="home-writing-top"><div><div className="eyebrow">Writing</div><h2 className="home-heading !mb-0">From the work.<br /><em>Not the sidelines.</em></h2></div><Link className="text-link" href="/blog">All writing ↗</Link></div>
          <div>{posts.map(post => <Link href={`/blog/${post.slug}`} className="home-article" key={post.slug}><div className="post-date pt-[7px]"><PostDate date={post.date} /></div><div><h3>{post.title}</h3><p>{post.summary}</p><p className="mt-s2 text-[12px]">{post.readingMinutes} min read</p></div><span className="text-[24px] text-accent" aria-hidden="true">↗</span></Link>)}</div>
        </section>
        <section className="home-speaking" id="background">
          <div className="home-split"><div><div className="eyebrow">Speaking &amp; conversations</div><h2 className="home-heading">Useful ideas.<br /><em>Room for discussion.</em></h2></div><div><p className="text-ink-2">Practical conversations about technology, people and trade-offs—without the sales pitch. For conferences, panels, executive briefings and podcasts.</p><p className="mt-s3 text-[14px] text-ink-2">Panellist at iTnews State of Data &amp; AI, Sydney.</p><Link href="/speaking" className="text-link mt-s4">Topics, speaker kit &amp; booking ↗</Link><p className="home-background">30+ years in technology. Experience with Essential Eight and ISO 27001-aligned controls; also familiar with SMB1001 and ISO 27032.</p></div></div>
        </section>
      </Shell>
    </Layout>
  )
}
