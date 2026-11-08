---
title: "Before the AI notetaker joins every meeting"
date: "2026-11-09"
summary: "AI meeting notes are easy to switch on and hard to govern later. A few decisions about which meetings, who is told, where the recording lives and who can share it will save a lot of cleanup."
tags: ["AI", "Governance"]
published: true
---

AI notetakers tend to arrive without much of a decision being made. Someone turns on transcription in Teams or Zoom and a vendor's bot turns up in a sales call. A few months later there can be a lot of transcripts and summaries sitting in individual OneDrive folders with nobody quite sure who agreed to it.

I like these tools. A decent summary with actions is better than the notes most of us take while trying to run a meeting. But meeting notes are a different kind of AI output. They capture what people said, often about other people, in conversations where nobody was thinking about a record. That deserves a bit of design before it becomes the default for every meeting.

## The privacy regulator has already used this as an example

The OAIC's guidance on commercially available AI products uses AI meeting minutes as a worked example. It notes that common meeting platforms can record meetings and use AI to generate transcripts or written minutes. Under APP 3 it says you need to think about what's discussed and make sure the personal information collected is reasonably necessary for your organisation's functions or activities. If the system captures something that isn't, such as a personal conversation or confidential client information, the guidance says you'll need to destroy or de-identify it.

On consent it's practical. The OAIC says you'll need participants' consent if the system collects sensitive information. Because you can't know what will come up in a meeting, it treats seeking consent as best practice anyway. It accepts that telling attendees at the start and giving them a chance to object can work in some circumstances. That only holds where the notice is clear and prominent enough that all attendees are likely to have seen it. The consequences of failing to opt out also need to be minor. A line buried in a calendar invite probably doesn't meet that bar. A spoken check at the start of a meeting with a customer or job candidate is a much better habit.

The guidance also reminds organisations that state and territory surveillance device laws sit alongside the Privacy Act. Those laws differ across Australia, so this is one to check with your own lawyer for the states you operate in. Queensland is a useful illustration of why. Under section 43 of the Invasion of Privacy Act it isn't an offence for a party to a private conversation to record it with a listening device. Section 45 then makes it an offence for that party to later pass on a record of the conversation, or a statement prepared from that record, to someone else. There are exceptions. They include passing it to another party or doing so with the express or implied consent of all the other parties. Another covers communication that is no more than reasonably necessary to protect the person's lawful interests. I'm not going to pretend I know exactly how a court would treat an AI summary forwarded to a manager who wasn't in the call. The point is that "we were in the meeting so it's fine" doesn't settle the question of who the notes can go to afterwards.

## Decide which meetings get a notetaker

The simplest control is a short list of meeting types, each with a default. As a hypothetical starting point, internal stand-ups and vendor status calls might be fine with a clear notice at the start. Customer calls, external advisers and board or committee meetings would need someone to ask first, every time. Performance and disciplinary conversations, grievances, candidate interviews and anything involving health information or legal advice would be off by default.

That last group is where a full transcript creates the biggest problem and adds the least. It's also where the OAIC's opt-out test is hardest to meet, because the consequences of not objecting can be serious for the person in the room. The OAIC also says consent can't be implied just because someone was notified. The tradeoff is real. Turning the tool off means someone has to take proper notes again and there's no verbatim record if the conversation is disputed later. For these meetings I'd still take that over a transcript sitting in a manager's OneDrive.

## Find out where the recording lives

In Microsoft Teams, meeting recordings are uploaded to the organiser's OneDrive for private meetings or to SharePoint for channel meetings. People invited to the meeting can view the recording. Microsoft says Purview, OneDrive storage and access permissions apply to these files the same way they do to any other file. Users with full edit rights can change the permissions and share the recording later. So the default record of a sensitive meeting is governed like an ordinary document, by whoever owns it.

Teams gives administrators some useful levers. The first thing to check is the Copilot meeting policy. Microsoft lists "On with saved transcript required" as the default value, which sets Copilot to run during and after the meeting and stops organisers changing it. Admins can instead make "Only during the meeting" the default, which relies on speech-to-text data that isn't saved after the meeting ends. That's a reasonable middle ground for people who want help catching up mid-meeting, with one catch. If another participant turns on transcription, Copilot becomes available during and after the meeting for the transcribed part. Depending on your Purview retention policies, Copilot prompts and responses might also be retained for compliance even with recording and transcription off. Admins can also set the Copilot default to off and let organisers turn it on per meeting. There's a separate policy setting that requires participants to explicitly agree before they're recorded or transcribed.

Third party notetaker bots are a separate question. If staff can connect their calendar to a service that joins meetings on their behalf, that service is generally holding your meeting content under its own terms. I'd treat that like any other SaaS approval, with the same [questions about data handling and access](/blog/the-security-questions-to-ask-a-saas-vendor-before-signing) and with personal sign-ups blocked where you can manage it.

## Treat the summary as a draft

AI summaries can be confidently wrong. A comment gets attributed to the wrong person or a "we should look at" turns into an agreed action. The OAIC's guidance says AI outputs shouldn't be recorded or treated as fact. It says records should show they're probabilistic and identify the data and AI system that produced them.

The meeting owner should review the summary before it goes anywhere. Actions and decisions get confirmed by a person. Anything that becomes an official record, like board minutes, is written or approved by the person responsible for that record and not pasted straight from the tool. If the AI summary is the only record of a decision, someone will eventually rely on a line nobody agreed to.

## Set a retention period now

Transcripts are easy to create and almost nobody deletes them. They're also the kind of material that can surface in a complaint or a legal dispute years later. I've written before that [data retention is an operational decision](/blog/data-retention-is-an-operational-decision-too) and meeting transcripts are a good example. Decide how long raw transcripts are kept separately from the approved summary or minutes and configure that in the platform. Don't rely on people cleaning up their own OneDrive.

## What I'd ask for

For an executive meeting I'd ask for five things, with one named owner for the list and IT responsible for the settings:

1. A list of meeting types and the default for each.
2. A standard spoken or written notice for meetings with external people.
3. Platform settings that match the list, including which third party bots are allowed.
4. A rule that summaries are reviewed before they're shared or treated as a record.
5. A retention period for raw transcripts, applied in the platform.

None of this needs a big project. It does need a decision made on purpose, because the platform defaults are already making one. It also fits naturally into an [AI policy built around the tools people actually use](/blog/a-useful-ai-policy-fits-the-tools-people-actually-use), which is where most staff will look when they're not sure whether to press record.
