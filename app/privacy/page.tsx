import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Shell } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How iyanbarry.com and Iyan Barry’s publishing tools handle personal information.',
  alternates: { canonical: 'https://iyanbarry.com/privacy' },
}

export default function Privacy() {
  return (
    <Layout>
      <div className="page-hero">
        <Shell>
          <h1 className="page-title mb-s4 max-w-[16ch]">Privacy</h1>
          <p className="max-w-[62ch] text-[19px] leading-[1.6] text-ink-2">
            I keep this simple: I collect as little as I can, only use it for the reason you gave it to me, and don’t sell or share it for marketing.
          </p>
          <p className="mt-s3 text-[14px] text-ink-3">Last updated 20 October 2026</p>
        </Shell>
      </div>

      <Shell>
        <div className="prose-article pb-16">
          <h2>Who this covers</h2>
          <p>
            This policy covers iyanbarry.com and the small tools I use to publish my own content, including my LinkedIn publishing app. It’s run by me, Iyan Barry, a sole trader based in Brisbane, Australia.
          </p>

          <h2>Browsing the site</h2>
          <p>
            Like any website, the hosting provider (Vercel) processes standard technical details such as your IP address and browser type to deliver pages and protect the service. I don’t use those details to identify you.
          </p>
          <p>
            To see which articles are useful and how people find them, I use Vercel Web Analytics. It records the page you visited, the site that referred you (for example LinkedIn or Google), your approximate location, and your device type, browser and operating system. It doesn’t use cookies or advertising trackers. Visits are grouped using a temporary code that’s discarded after 24 hours, and I only see totals, not information about individual visitors.
          </p>
          <p>
            I also use Google Search Console, which shows me aggregated information about how the site appears in Google search results, such as the search terms that led to a visit. It doesn’t add anything to this site or tell me who you are.
          </p>

          <h2>Contacting me</h2>
          <p>If you use the contact form, I receive what you enter (your name, email address and message) as an email in my mailbox. I use it to reply to you, and keep it as long as it’s useful for that conversation.</p>
          <p>
            To limit spam, the form records a scrambled, one-way code based on your IP address in a Microsoft Azure database hosted in Australia. That code changes daily and can’t be turned back into your address. These records don’t include your name, email address or message, and they stop being used after a day. Email is handled through Microsoft 365.
          </p>
          <p>You can also email me directly at <a href="mailto:ask@iyanbarry.com">ask@iyanbarry.com</a> if you’d rather not use the form.</p>

          <h2>My LinkedIn publishing app</h2>
          <p>
            “Iyan Barry Post Publisher” is a private app I use to publish posts to my own LinkedIn profile, only after I’ve approved each one. It isn’t offered to anyone else.
          </p>
          <p>
            When I connect it, LinkedIn gives the app permission to post on my behalf and shares my basic profile details (name, photo and account identifier) so it posts to the right profile. It stores the access key LinkedIn issues, kept securely on my own computer, and a record of what was approved and published. It doesn’t read, collect or store information about other LinkedIn members, connections or messages.
          </p>

          <h2>Sharing</h2>
          <p>
            I don’t sell personal information or share it for anyone else’s marketing. It’s only handled by the services that run the site and tools (Vercel, Microsoft and LinkedIn), or if I’m required to disclose it by law.
          </p>

          <h2>Access, correction and deletion</h2>
          <p>
            You can ask what I hold about you, ask me to correct it, or ask me to delete it by emailing <a href="mailto:ask@iyanbarry.com">ask@iyanbarry.com</a>. If you’re not happy with how I’ve handled a privacy concern, you can also contact the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>.
          </p>

          <h2>Changes</h2>
          <p>If anything here changes, I’ll update this page and the date at the top.</p>
        </div>
      </Shell>
    </Layout>
  )
}
