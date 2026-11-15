---
title: "Finding what still depends on Exchange Web Services before April 2027"
date: "2026-11-16"
summary: "Microsoft is switching off Exchange Web Services in Exchange Online and says there will be no exceptions past April 2027. The useful work now is finding the add-ins, Mac mail clients, backup tools and old integrations that still rely on it."
tags: ["Data", "Integration", "Delivery"]
published: true
---

If something that reads or writes mailboxes has started misbehaving in the last few weeks, it may be related to a change Microsoft has been signalling for years. Exchange Web Services, the older API that a lot of software uses to talk to Exchange Online mailboxes and calendars, is being switched off.

Microsoft said back in 2018 that EWS would get no more functionality updates and in 2023 it announced EWS would be disabled in Exchange Online in October 2026. The switch-off was scheduled to start on or soon after 1 October 2026 and to roll out tenant by tenant. Microsoft says it's now in progress. From 1 April 2027 EWS will be fully and permanently disabled. Microsoft says there will be no exceptions past April 2027.

This only applies to Microsoft 365 and Exchange Online. EWS on an Exchange Server you run yourself isn't changing.

## What this looks like from the service desk

It won't necessarily show up as a ticket that says "EWS is off". Microsoft's own troubleshooting post says affected applications can do anything from repeatedly asking for a username or password to giving a clear error that the protocol isn't available.

Microsoft's list is broader than old integrations. It includes Apple Mail and Calendar on macOS, classic Outlook on macOS, various Outlook desktop add-ins, outdated versions of Outlook desktop on Windows and third-party applications such as backup products. So the first sign in a mid-sized business could be a few Mac users who can't get their mail, an Outlook add-in that stops loading or a backup product reporting failed mailbox jobs.

## The setting only buys time

If your tenant was left on the default setting, Microsoft changes it to disabled as the rollout reaches you. Its troubleshooting post says to search the Message Centre for a notice that EWS will be disabled in your tenant in 7 days or one saying it has been disabled.

A tenant administrator can turn EWS back on. Microsoft says its support staff can't do it for you. The change usually takes effect in under an hour, although it can take up to four hours in rare cases. Re-enabling stops working in April 2027.

If you re-enable it the way Microsoft's troubleshooting post describes, EWS only works for applications on an allow list. If you turn it on without a list, Microsoft's description is that it effectively becomes a block-all configuration. Microsoft pre-populates that list for tenants that haven't built their own, based on the previous 60 days of usage. It warns the list may miss applications that run infrequently and may include apps you no longer want to have access. Changes to the list can take up to 24 hours to take effect, so it's worth editing before someone is waiting on it.

The 60-day window is easy to overlook. A hypothetical example is a year-end archive job or a quarterly export that last ran in July. A list built from 60 days of usage could easily miss it. It would then fail the next time someone needs it and that person may not connect it to a change made months earlier.

There is also a PowerShell route that re-enables EWS without restrictions until the final shutdown. I'd only use it if the allow list can't be made to work.

So re-enabling is a reasonable thing to do this week if something important is down. I'd treat it the same way as any other [security exception with an expiry date](/blog/handling-security-exceptions-with-an-expiry-date), except that Microsoft has already set the expiry.

## Build the list from evidence

The Microsoft 365 admin centre has an EWS usage report. It shows each application calling EWS in your organisation, the specific actions it uses and the call volume. You can look back 7, 30 or 90 days. Microsoft describes the volume as successful calls, so an application that has been blocked for a while may not show up. The data is aggregated weekly and can take up to 10 days to show, so it's no use for confirming a fix you made yesterday.

Export it and add four columns the report can't give you:

- What business process this application supports
- Who owns that process
- Whether we built it or a vendor did
- What the plan is and by when

The report gives you application IDs, so someone will need to match those to real names. Microsoft points to its list of first-party application IDs and to Enterprise Applications in Entra ID for that. The second column is likely to be the hard one. It's the same gap I wrote about in [an integration needs an owner after it goes live](/blog/an-integration-needs-an-owner-after-it-goes-live).

Then ask around for the things a 90-day report can't see, such as annual jobs or tools used only during audits or migrations.

## Sort each one into a path

Most items should fit one of four groups.

**Update it.** Microsoft's guidance for its own client applications is to keep them up to date, because it periodically updates them to remove EWS dependencies. An old Outlook build may only need the upgrade you've been putting off.

**Chase the vendor.** For bought software Microsoft says you must contact the vendor to get a version that doesn't use EWS. Ask for the version number and the date in writing. "It's on our roadmap" is not an answer you can plan a cutover around.

**Rebuild it.** For anything written in-house, the code has to move off EWS and Microsoft Graph is where Microsoft points people. Microsoft says most apps use only a handful of EWS actions and that with modern tooling many can be converted more easily than expected. That's Microsoft's view. I'd still look at the usage report's list of actions for each app before agreeing to an estimate.

**Retire or redesign it.** Some things don't have a direct replacement. Microsoft publishes a table of remaining gaps with target dates and says those dates might change. It also lists capabilities that won't be added to Graph at all, including generic create, read, update and delete operations on public folders. Its advice is that if a capability isn't on the roadmap, you shouldn't plan on an equivalent being available before EWS is fully disabled. If a process depends on one of those, the conversation is about changing the process and that needs a business owner in the room.

Organisations running a hybrid setup have one more item. Microsoft says only Exchange SE will support Graph for calls to Exchange Online, so hybrid customers will have to use Exchange SE to host on-premises mailboxes.

## What the executive team needs to see

For an executive team a short table is enough. It lists every application still using EWS, its owner, its path and a date. Next to it I'd list anything that has no replacement and the decision that's needed.

I'd also set an internal deadline well before 1 April. February is a sensible target because it leaves a month to find out which vendor promise didn't hold. Once the work is done, turn EWS off yourself and watch for a week. That's a much better test than waiting to see what breaks on the day Microsoft does it.

This change was first announced in 2018 and it can still catch an organisation out. The [shorter TLS certificate lifetimes](/blog/shorter-tls-certificate-lifetimes-renewal-plan) I wrote about in September follow the same pattern of someone outside the organisation setting a date that turns a tidy-up job into a deadline. Someone should be reading the Message Centre every week with the authority to turn a notice into owned work. If that's nobody's job at the moment, I'd start there.
