---
title: "Finding the automated decisions your privacy policy will have to explain"
date: "2026-10-26"
summary: "From 10 December, privacy policies must describe computer programs that make or shape significant decisions about people. Finding them is the hard part. AI is only some of it."
tags: ["Governance", "AI", "Data"]
published: true
---

From 10 December 2026, organisations covered by the Privacy Act have something new to explain in their privacy policy. If a computer program uses someone's personal information to make a decision about them, or to do something substantially and directly related to making it, the policy may need to say so. The test is whether that decision could reasonably be expected to significantly affect the person's rights or interests.

It's tempting to treat this as a legal drafting job where someone updates a paragraph and legal signs it off. The drafting is the easy bit. The hard part is working out which decisions in your business are actually in scope. That's an operational question and the technology team is well placed to help answer it.

## Start somewhere other than the AI register

The obvious move is to pull out the AI inventory and work from that, but it will miss things.

The OAIC's guidance says "computer program" is meant broadly. It covers pre-programmed rules as well as AI and machine learning. One of the worked examples in its fact sheet is a spreadsheet. A health and aged care provider uses a formula to score and rank clients. Staff then use the ranking to decide who to contact for support. The OAIC treats that as in scope because the formula effectively decides who gets services.

A more useful question is where software decides something about a person, or pushes a staff member towards a decision about them. That takes in plenty of ordinary systems. A rule that automatically declines refunds. A case management system that escalates some complaints and not others. Both appear in the OAIC's examples. Credit checks inside a customer onboarding flow. A recruitment platform that sorts and ranks applicants, which the OAIC lists as generally in scope.

Several of these won't be on an AI register. Each one still has to meet the "significantly affect" test. Using software only to write up a decision a person already made, like typing it into a document, isn't captured. Even so, the list is usually longer than people expect.

## A person in the loop doesn't automatically take you out

A lot of teams will assume they're fine because a human makes the final call. The guidance is pretty direct on this. A decision can be in scope even when the program's output doesn't replace the whole decision or is subject to human review.

What matters is how much the program shapes the outcome. The OAIC lists factors like how heavily people rely on the output and whether they can override it, as well as how likely they are to actually do so. Its fact sheet adds that machine learning or generative AI outputs used in significant decisions would generally be in scope unless there's extensive human oversight and control.

That links back to something I've written about before. [Human approval only counts when the person can judge the action](/blog/human-approval-is-only-useful-when-the-human-can-judge-the-action). If the reviewer accepts the score nearly every time and couldn't explain how it was produced, the program is doing most of the deciding. The privacy policy should be honest about that.

The OAIC's own example shows the other side. In a pay review scenario it suggests that interrogating the output, checking the underlying evidence and documenting why the reviewer departed from the recommendation could indicate the output wasn't substantial to the decision. That is real oversight work and it takes time, so budget for it if you plan to rely on it.

## Using a vendor doesn't move the obligation

The OAIC generally expects the obligation to stay with the organisation using the personal information to make the decision, even when a vendor's software does the work. The guidelines say you should identify, assess and keep oversight of third party programs used in decisions, both during procurement and after it.

That's going to be awkward for a lot of mid-market organisations, where the scoring logic sits inside a SaaS platform nobody internally fully understands. The fact sheet says vendors should give customers clear, high level information about how their software can be used to make decisions. Ask for it now. If a supplier can't tell you which personal information feeds a recommendation, you want to know that before December and before your next renewal.

The guidelines also suggest contracts make clear which party keeps the final decision making call. That's a reasonable thing to raise at renewal. A few of the [security questions for SaaS vendors](/blog/the-security-questions-to-ask-a-saas-vendor-before-signing) you already ask can easily become decision questions too.

## A practical way to run the inventory

Here's how I'd approach it in a mid-sized organisation with about six weeks to go. Six weeks is enough for a solid first pass. It won't produce a perfect register, so aim for a defensible version by 10 December and keep improving it.

1. Start with the decisions. Ask each business area to list the decisions they make about individuals that really matter to those people, such as who gets approved, declined, prioritised, flagged, charged differently, offered a role or turned away. The guidance counts beneficial effects as well as adverse ones, so don't only look for bad news.
2. Trace the software behind each one. Ask which system produces a score, ranking, flag or recommendation and which personal information goes into it. Business owners know the decision and IT usually knows where the data flows, so get both in the same conversation.
3. For each decision a person reviews, find out how often they actually override the system. If nobody can tell you, that's useful information too.
4. Check the quieter systems. Think about spreadsheets with formulas, workflow and escalation rules, fraud and security tools that block access, plus pricing or advertising tools that change what people pay for significant goods or services. The OAIC's examples touch on each of these.
5. Lean towards disclosure when it's unclear. The fact sheet says organisations in doubt should take a cautious approach and include the information.

## What the policy actually needs to say

The required content is narrower than people fear. The policy has to describe the kinds of personal information used, the kinds of decisions made solely by programs and the kinds of decisions where a program does something substantially and directly related to the decision. You can group similar decisions, as long as the result is meaningful to a reasonable person. If you group them, make it clear where sensitive information such as health details or biometrics is used.

Genuinely commercial-in-confidence detail can stay out. The OAIC is clear that this doesn't cover something simply because disclosing it might be embarrassing or attract criticism.

## Who this applies to

These obligations sit inside the Australian Privacy Principles, so they apply to organisations already covered by them. Most small businesses with annual turnover of $3 million or less aren't covered, although some are regardless of turnover. That includes a business related to a larger business the Privacy Act covers, which can catch smaller entities in mid-market groups. If you're unsure, check with your privacy adviser. I'd also have them review the final wording. I'm writing this as a technology leader, not a lawyer.

## The list is worth keeping

I'd treat December as a deadline for the policy and a reason to build something more useful. A short register of the significant decisions software makes or shapes, the data each one uses, who owns it and how often people override it is valuable well beyond privacy. It tells you where a model change, a vendor update or a bad data feed could quietly start affecting real people.

It's also the list you'll want when someone asks why the system made a call about them. The privacy policy then becomes its public summary.

If you're working through this and want a second set of eyes on the inventory, [get in touch](/work-with-me).
