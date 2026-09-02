import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Iyan Barry speaks on AI governance in regulated environments, cyber maturity for resource-constrained organisations, and building IT teams that scale. Bio, headshots and topics for event organisers.',
}

const topics = [
  {
    title: 'Deploying AI when your users are vulnerable',
    audience: 'Care, health, education, government-adjacent',
    body:
      'What changes about AI adoption when the people in your data cannot consent in any meaningful way, and two different regulators are watching. Practical governance, not theory.',
  },
  {
    title: 'Essential Eight on a not-for-profit budget',
    audience: 'CIOs, IT managers, boards',
    body:
      'Lifting cyber maturity when there is no dedicated security team and no enterprise budget. What to do first, what to defer, and how to evidence it to a board.',
  },
  {
    title: 'Running IT across two regulators',
    audience: 'Executives operating internationally',
    body:
      'Data residency, cross-border access and jurisdictional complexity when the same organisation operates under Australian and UK regimes at once.',
  },
  {
    title: 'From firefighting to strategic: rebuilding an IT function',
    audience: 'IT leaders, executive teams',
    body:
      'Taking a reactive, under-resourced team and restructuring it into distinct delivery streams — including the part where you discover you are the bottleneck.',
  },
  {
    title: 'The CIO as an AI translator',
    audience: 'Boards and executive teams',
    body:
      'How to ask better questions about AI proposals, separate genuine capability from vendor narrative, and make decisions you can defend in twelve months.',
  },
]

const formats = [
  'Conference keynote (20–45 min)',
  'Panel discussion and moderation',
  'Executive or board briefing (45–90 min)',
  'Workshop (half or full day)',
  'Podcast and interview',
]

export default function Speaking() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-white"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-white"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl lg:text-6xl font-medium text-white font-outfit leading-tight mb-6">
                <span className="text-light-muted">Speaking &</span><br />
                media
              </h1>
              <p className="text-lg text-light leading-relaxed max-w-2xl mb-8">
                I speak about the parts of technology leadership that are hard to
                talk about honestly — governing AI in environments where mistakes
                harm people, lifting security without an enterprise budget, and
                what actually happens when you restructure a team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:-translate-y-1"
              >
                Enquire about an event
              </Link>
            </div>
            <div className="text-center">
              <img
                src="/images/iyan-barry-cio.jpg"
                alt="Iyan Barry, Chief Information Officer — speaker headshot"
                width={512}
                height={512}
                className="w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top bg-white mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <span className="text-2xl font-bold text-primary font-outfit">01</span>
            <div className="flex-1 h-px bg-light/30 mx-4"></div>
            <span className="text-light font-medium">Topics</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((t) => (
              <div
                key={t.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-light/20"
              >
                <h3 className="text-xl font-bold text-dark font-outfit mb-2">
                  {t.title}
                </h3>
                <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-4">
                  {t.audience}
                </p>
                <p className="text-light leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats + bios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-dark font-outfit mb-6">
                Formats
              </h2>
              <ul className="space-y-3">
                {formats.map((f) => (
                  <li key={f} className="text-light flex gap-3">
                    <span className="text-primary">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-dark font-outfit mt-10 mb-4">
                For organisers
              </h2>
              <p className="text-light leading-relaxed mb-4">
                Headshots are available on request in high resolution, square and
                transparent-background formats.
              </p>
              <Link
                href="/contact"
                className="text-primary font-semibold hover:underline"
              >
                Request the media kit →
              </Link>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark font-outfit mb-6">
                Biography
              </h2>

              <div className="mb-8">
                <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                  Short — one line
                </p>
                <p className="text-dark leading-relaxed bg-white p-4 rounded-lg border border-light/20">
                  Iyan Barry is a Brisbane-based Chief Information Officer
                  working at the intersection of AI, cybersecurity and
                  child-safeguarding technology.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                  Medium — 60 words
                </p>
                <p className="text-dark leading-relaxed bg-white p-4 rounded-lg border border-light/20">
                  Iyan Barry is Chief Information Officer at Safe Places for
                  Children, where he leads technology, data, cybersecurity and
                  digital strategy across Australian and UK operations. With
                  three decades in technology, he focuses on making AI and
                  security work in environments where the stakes are people
                  rather than uptime. He writes and speaks on practical AI
                  governance for regulated organisations.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                  Long — 120 words
                </p>
                <p className="text-dark leading-relaxed bg-white p-4 rounded-lg border border-light/20">
                  Iyan Barry is Chief Information Officer at Safe Places for
                  Children, a not-for-profit providing intensive therapeutic care
                  to young people at risk. He leads technology, information,
                  data, cybersecurity and digital enablement across Australian
                  operations and a UK arm regulated by Ofsted — an environment
                  where data protection is a child-safety matter, not a
                  compliance exercise.
                  <br />
                  <br />
                  His career in technology began at sixteen and spans three
                  decades across Australian organisations. He has rebuilt an IT
                  function from reactive to strategic, implemented the ACSC
                  Essential Eight and ISO 27001-aligned controls, and deployed AI
                  and automation into day-to-day operations. He advises
                  Australian mid-market executive teams and writes on IT
                  leadership at iyanbarry.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-outfit mb-6">
            Planning an event?
          </h2>
          <p className="text-light mb-8 max-w-2xl mx-auto">
            Tell me the audience, the date and what you want them to walk away
            with. I will tell you honestly whether I am the right speaker for it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:-translate-y-1"
          >
            Enquire about speaking
          </Link>
        </div>
      </section>
    </Layout>
  )
}
