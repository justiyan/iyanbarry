---
title: "Post-quantum planning when your vendors hold the cryptography"
date: "2026-11-02"
summary: "ASD recommends organisations have a refined post-quantum transition plan by the end of 2026. For most mid-sized businesses that plan is mostly about suppliers, renewals and old hardware."
tags: ["Cybersecurity", "Governance"]
published: true
---

Post-quantum cryptography has a way of landing on an executive agenda as either science fiction or a panic item. Neither is helpful. What's actually useful is that the Australian Signals Directorate has put dates on it.

ASD recommends that organisations stop using traditional asymmetric cryptography, things like RSA and elliptic curve algorithms, by the end of 2030. It has also set milestones on the way there. By the end of 2028 organisations should have started the transition with their critical systems and data. By the end of 2030 they should be done. The first milestone is much closer. By the end of 2026, which is about eight weeks away, ASD says organisations should have a refined plan for the transition.

Since September 2025 the ISM has also included a matching control, which says a post-quantum cryptography transition plan is developed, implemented and maintained. If your organisation reports against the ISM, that's a gap someone will eventually ask about. If you don't, the timeline is still a good signal of where your suppliers are heading.

## Why bother before the computer exists

ASD is upfront that a cryptographically relevant quantum computer doesn't currently exist. It also says nobody can reliably predict when one will arrive. The argument for planning now is mostly about lead times. Replacing cryptography takes longer than people expect. Data captured today could be decrypted later if it's still worth something by then. ASD calls this "harvest now, decrypt later".

That second point is the one I'd use to decide how much urgency your organisation actually has. Some data loses value quickly. Other data stays sensitive for decades. Health records, legal files, identity documents and long-term contracts fall in the second group. If you hold a lot of long-lived sensitive data, the 2028 milestone matters more to you than it does to a business whose most sensitive asset is next quarter's price list.

## Most of your cryptography belongs to someone else

Here's the bit that makes this different from a typical security uplift. In a mid-sized organisation very little of the cryptography is yours to change. It sits inside SaaS platforms, the identity provider, the backup service, the firewall, the VPN and a long tail of devices nobody thinks about.

ASD's newer guidance on vendor questions makes this point directly. It lists building management systems and physical access and security systems alongside the obvious IT categories. It also notes that firmware signing is long-lived and hard to change, which makes it a key constraint on the transition. Door controllers and the box in the plant room rarely make it onto a cyber roadmap, but they might be the reason your plan slips.

So the useful executive question is which of our suppliers can get us there by 2030 and which ones can't.

## What a plan this year can realistically look like

ASD's LATICE framework for the transition has five phases: locate, assess, triage, implement, then communicate and educate. For a mid-sized business I'd translate the 2026 plan into a few concrete pieces of work.

1. Start with a short list. A discovery scan can come later. ASD describes a cryptographic bill of materials, an inventory of where cryptography is used. It says an early version can simply be a list of the critical security functions you rely on cryptography to perform. Begin with your top twenty or so services. Note what each protects, who supplies it and whether the cryptography sits with you or the vendor.
2. Mark the data that needs to stay secret for a long time. This is your harvest-now-decrypt-later exposure. It's also how you'll order the work later.
3. Find the hardware that can't be patched. Ask which devices would need replacing to change how they sign or encrypt. Those are long-lead items, so get them into the capital plan now and avoid a surprise in 2029.
4. Write to your top vendors. ASD's vendor guide gives you the questions and says you don't need to ask every question of every vendor. Pick the five or six that matter for each supplier.
5. Put the gaps in front of someone who owns them. Without an owner and a budget line the plan won't change anything. I've written before about [the difference between a risk register and risk ownership](/blog/the-difference-between-a-risk-register-and-risk-ownership). The same thing applies here.

That's a plan you can refine through 2027. It won't be complete and it doesn't need to be by Christmas.

## The vendor questions I'd start with

ASD's list is long. Of the questions it suggests, these are the ones I'd use with a mid-market supplier base:

- Which components need hardware replacement or re-architecture?
- Which products will be PQC-ready early enough for us to roll out before the end of 2030?
- How do you notify customers about cryptographic changes?
- Is PQC included in base licensing?

That last one deserves attention at renewal time. ASD lists treating post-quantum support as an optional or premium function as one of the common concerns in vendor responses. Relying on general assurances is another. If a supplier's answer is a marketing paragraph, ask a more specific question. ASD's own view is that a vendor's willingness to engage openly and show progress says something about its maturity.

These fit easily alongside the [security questions you'd ask a SaaS vendor before signing](/blog/the-security-questions-to-ask-a-saas-vendor-before-signing). The best time to ask is when you still have leverage, before a five-year contract is signed with no roadmap commitment in it.

## Tradeoffs worth being honest about

Don't build anything clever. ASD says organisations should not rush ahead of standardised and verified implementations. For most mid-sized businesses the right move is to adopt post-quantum support as it arrives in mainstream platforms. Microsoft, for example, made post-quantum algorithms generally available in Windows Server 2025, Windows 11 and .NET 10 in late 2025. Platform support existing doesn't mean your applications use it, but it shows where the mainstream path will come from.

Bigger keys aren't a fix. Stronger traditional settings can buy marginal short-term risk reduction. ASD is clear they don't mitigate a quantum attack and aren't a substitute for the transition.

Hybrid modes are a stepping stone. Some vendors will offer schemes that combine traditional and post-quantum algorithms. ASD doesn't recommend them but doesn't prohibit them either. Treat them as a stage and ask what the plan is to move off them.

Expect operational side effects. Post-quantum algorithms can increase key and certificate sizes, which affects processes and performance. If your [certificate renewal process](/blog/shorter-tls-certificate-lifetimes-renewal-plan) is already fragile, it's worth fixing that first. You'll be leaning on it more.

## What I'd take to the next executive meeting

I'd skip the quantum briefing and take a one-page note. It would show the critical services we've listed and who controls their cryptography. It would name the data we need to keep secret longest, the suppliers we've asked and what they told us, plus the hardware that might need replacing before 2030. Then it would name an owner.

That's achievable before the end of the year with existing staff. It also turns a vague future threat into a procurement and asset lifecycle question, which most executive teams already know how to manage.
