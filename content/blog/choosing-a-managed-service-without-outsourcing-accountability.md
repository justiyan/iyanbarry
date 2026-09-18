---
title: "Choosing a managed service without outsourcing accountability"
date: "2026-09-18"
retrospectiveDate: "2026-06-09"
tags: ["Delivery", "Leadership"]
summary: "Define what the provider operates, what the organisation decides and what evidence is needed when service boundaries fail."
published: true
---

A managed-service proposal can look comprehensive because it names every technology in the environment. That still leaves an important question unanswered: who acts when an operational problem crosses the boundary between the provider and the organisation?

I would evaluate the service through those boundary cases. The provider may be capable and responsive, but capability only helps when the agreement, access and decision authority allow the right work to happen.

## Draw the boundary around tasks

Avoid starting with a list of products. List the activities the organisation needs: monitoring, patching, access administration, recovery, incident coordination and routine changes. For each activity, identify who performs it, who approves it and what evidence is available.

A fictional managed hosting service might include operating-system updates but exclude application testing. If an update disrupts a business workflow, the provider may have completed its contracted task while the organisation still faces an outage. Someone needs to coordinate the combined response.

Cloud responsibility models make this distinction explicit in their own service contexts: customer responsibilities vary with the services selected. A managed-service agreement deserves the same specificity, rather than an assumption that the word "managed" transfers every obligation.

Check dependencies outside the provider's control. Internet connectivity, identity, business applications and upstream suppliers may sit under separate arrangements. Decide who convenes those parties during an incident and who keeps the business informed.

## Match monitoring to a response

Ask the provider to demonstrate a plausible failure and its handling. What triggers the alert? Who sees it? How is severity assigned? What happens if the normal contact does not respond?

The organisation should understand the difference between acknowledgement, investigation and restoration commitments. A fast response does not necessarily mean a fast resolution. Read the service boundary, exclusions and measurement rules before comparing headline targets.

Coverage also needs to match business use. An application used outside office hours may depend on an internal approver who is only available during the day. Buying round-the-clock monitoring will not resolve that decision gap.

Agree the evidence the organisation receives. It might include incident timelines, change records, failed backup notifications and unresolved problem reports. Avoid reports that describe activity without identifying exceptions. A long list of completed checks can still conceal a recurring issue nobody owns.

Provide internal capacity to review the evidence. If nobody reads or challenges the service report, reporting becomes a contract artefact rather than a management control.

## Keep approvals and emergency authority workable

A provider should know which routine actions it can take without asking and which require approval. Excessively narrow authority can delay useful work. Excessively broad authority can let a technical change create business consequences the provider is not positioned to judge.

Define a route for urgent changes. State who can approve them, what happens if that person is unavailable and what evidence must be recorded afterwards. The provider should not have to choose between leaving a service exposed and breaching an unclear approval rule.

Access deserves its own review. Identify privileged accounts, how access is granted and removed, and how the organisation can respond if the relationship ends unexpectedly. Keep secrets in the appropriate controlled systems rather than spreading them through handover documents.

The service owner must retain enough understanding to make informed decisions. That does not mean duplicating the provider's technical team. It means knowing the important dependencies, asking sensible questions and recognising when a proposed action needs business, privacy or security input.

## Test the relationship with a tabletop exercise

Before relying on the arrangement, walk through an incident involving more than one party. For example, the fictional hosted application is available, but users cannot sign in and the identity supplier reports no general outage.

Ask each party to describe its next action and the evidence it would need. Check contact paths, authority to share diagnostic material and responsibility for user communications. The exercise may reveal gaps that an ordinary onboarding checklist misses.

Do the same for a restore request and a significant business change. A service can handle routine tickets well while struggling with recovery or a new integration. Those capabilities deserve evidence appropriate to their consequences.

A good [support handover](/blog/handing-a-project-to-support-without-handing-over-a-mystery) should make these scenarios easier to rehearse. If the service can only be explained by the person who sold it, operational readiness remains uncertain.

## Keep exit evidence current

The organisation should be able to identify its assets, configurations, records and contractual rights without beginning a dispute. Agree how those materials will be provided, in what form and with what assistance during transition.

Review exit readiness periodically, not only at renewal. Staff change, environments grow and the original inventory becomes stale. A controlled export or handover rehearsal can reveal missing information while the relationship is still cooperative.

Check the contract with the appropriate commercial and legal advisers. Data return, deletion, transition support and liability depend on the actual terms and context. A service description is not a guarantee that every exit will be simple or cost-free.

I would judge a managed service by whether it gives the organisation dependable operation and clear decisions at the boundaries. The provider should carry the work it has agreed to perform. The organisation should remain able to explain what is happening to its service and who will act when that work is not enough.
