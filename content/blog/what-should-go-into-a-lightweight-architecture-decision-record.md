---
title: "What should go into a lightweight architecture decision record"
date: "2026-09-18"
retrospectiveDate: "2026-06-17"
tags: ["Delivery", "Leadership"]
summary: "Keep architecture decisions short enough to read, but preserve the context, rejected options and triggers for reconsidering them."
published: true
---

An architecture diagram can show that a service uses a queue. It cannot explain why the team chose one, what delay the business accepted or what would make that choice unsuitable later.

A lightweight architecture decision record fills that gap. I would write one when a choice creates a meaningful dependency, changes an operating burden or would be costly to reverse. It should help a future colleague understand the judgement without reconstructing a series of chat messages.

## Record the decision people are likely to question

Not every implementation detail deserves a separate record. Focus on choices that constrain later work: a hosting model, data ownership boundary, identity approach or integration pattern. Routine changes can remain in ordinary delivery records unless their consequences warrant more explanation.

Begin with the problem and constraints. Describe what the organisation needs, the options available and the facts that were uncertain. A decision can be reasonable with incomplete information, but the record should not disguise an assumption as a verified condition.

Name the decision owner and the people consulted. Technical judgement may need input from operations, privacy, finance or the business process owner. The record should show who accepted the relevant consequence, not imply that an architect can accept every form of risk.

Keep options credible. A preferred approach compared with two deliberately weak alternatives produces a defence, not a useful decision record. Include doing less or retaining the current approach when those are plausible choices. Explain why each option was rejected in the context of this service.

The consequences should include disadvantages. If a queue makes the system more tolerant of a temporary outage but adds delayed processing and another component to operate, record both. The future team needs that trade-off more than it needs a list of the chosen technology's features.

## A short example with an explicit limitation

The following is a fictional record for an internal facilities-request service. It is an example of structure and judgement, not a claim about an implemented project.

> **Decision:** Send contractor instructions through a durable work queue rather than directly from the request form.
>
> **Status and owner:** Proposed; technical lead owns the design, with business approval required for delayed delivery.
>
> **Context:** Staff need to submit requests when the contractor interface is temporarily unavailable. Immediate contractor acknowledgement is not required for routine requests. Urgent work uses a separate confirmed contact process.
>
> **Options:** Send synchronously and reject failed submissions; keep failed requests for manual re-entry; or queue instructions for controlled delivery.
>
> **Choice:** Use a queue with visible pending and failed states. The business owner accepts that routine instructions may wait during an outage. The support team must be able to inspect the queue and identify work needing intervention.
>
> **Consequences:** The form is less dependent on immediate contractor availability. Operation becomes more complex. Retries require duplicate protection, and staff need a clear distinction between submitted and delivered.
>
> **Revisit when:** Urgent requests enter scope, the contractor changes its acknowledgement behaviour, or support cannot sustain the exception workload.

The record is deliberately incomplete as an implementation specification. It does not define message schemas, retry timing or monitoring configuration. Those belong in linked design and operating material. It does identify the conditions those details must satisfy.

Before accepting this record, I would ask for evidence about contractor acknowledgement and duplicate handling. If the interface cannot support the proposed behaviour, the design may need to change. The word "proposed" matters because the decision has not yet passed that check.

The example also makes a business boundary visible. The queue is not being presented as a solution for urgent work. Expanding the service to urgent requests would change the assumptions and trigger another decision, rather than merely adding a form category.

## Keep the record usable as the service changes

Store decision records where the people changing the service will find them. Link them from relevant design, delivery and operating material. Use a short descriptive title and a stable identifier so a code review or supplier discussion can point to the exact decision.

When a decision changes, preserve the old reasoning and record what supersedes it. Rewriting history to make the latest design look inevitable removes useful context. AWS's published ADR guidance uses this accepted-record and superseding-record approach; the practical benefit is a decision trail people can follow.

Review triggers are more useful than a ceremonial annual review of every record. A supplier deprecation, new data classification or changed business deadline can invalidate a specific assumption. Connect those triggers to the people who receive that information.

A decision about [building versus buying](/blog/a-build-versus-buy-decision-that-includes-the-next-three-years) may need a broader commercial paper, but a short architecture record can preserve its technical consequences. The documents should reference each other rather than repeat incompatible versions of the rationale.

Keep the format light. If writing the record takes longer than making a modest decision, reduce the format. If a major dependency is justified by a single sentence, add the missing context. The appropriate length follows the consequence of the choice.

I would expect a new team member to read the record and understand why the design exists, what it costs to operate and what evidence could justify changing it. They do not need to agree with the original choice. They need enough context to make the next one responsibly.
