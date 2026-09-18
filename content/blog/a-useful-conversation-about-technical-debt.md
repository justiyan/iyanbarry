---
title: "A useful conversation about technical debt"
date: "2026-09-18"
retrospectiveDate: "2025-10-12"
summary: "Technical debt becomes a business decision when a specific dependency is connected to maintenance effort, service exposure and credible alternatives."
tags: ["Leadership", "Strategy"]
published: true
---

"We need to address technical debt" is a difficult request to approve. It can describe anything from a genuinely fragile service to code an engineer would prefer to tidy. The label does not tell a budget owner what the organisation is buying.

I would begin with one dependency and explain what it prevents, what it costs to maintain and what could happen if it fails. That makes the conversation specific enough to challenge.

It also gives the technical team a fairer hearing. They should not have to turn every maintenance concern into an imminent disaster to get attention.

## Describe the dependency in service terms

Consider a fictional business using a custom connector to move approved orders between two systems. The connector runs on an older library. Updating either system requires extra compatibility work, and only one engineer understands the exception handling.

Those details describe several different concerns. The library may constrain future changes. The connector may create maintenance effort. The knowledge concentration may make recovery difficult. Treating them as a single red item called technical debt obscures the options.

Explain which service depends on the connector and how a problem would be noticed. Would orders stop, arrive late or arrive incorrectly? Is there a reconciliation that detects errors? Can staff use a manual process, and for how long?

Do not claim the service is about to fail merely because the implementation is old. Age can justify investigation, but a useful case needs evidence about support, defects, maintainability or exposure. Keep unsupported assumptions visible until someone checks them.

## Measure the burden without pretending to know everything

Look for existing evidence: change records, incident notes, supplier correspondence and time spent on repeat checks. Ask the people maintaining the service which tasks are necessary and which are workarounds for the dependency.

Separate observed effort from estimated effort. A record of recent compatibility tests is evidence of work performed. An engineer's estimate of the next upgrade is a forecast. Both are useful, but they should not be added together as though they have equal certainty.

Include the work outside IT. If operations staff reconcile missing orders each morning, that effort belongs in the comparison. Verify whether a replacement would remove the whole check or only part of it. Some controls may remain necessary regardless of the technology.

Avoid converting every hour into a cash saving. Time released may improve service or allow other work, but it does not automatically reduce the payroll. Explain the proposed use of that capacity and who will confirm it became available.

## Price a smaller alternative as well as replacement

A complete rebuild may be sensible. It should not be the only option the business sees.

For the fictional connector, possible responses include documenting recovery and training a second person, isolating the old library behind a stable interface, replacing the connector with a supported integration, or retiring the process that requires it. These options solve different portions of the problem.

A priced comparison should include implementation effort, licences or support, testing, migration and continued operation during transition. Use actual quotes and estimates from the people who would do the work. Where a figure is not yet available, mark it as unknown and explain how it will be obtained.

I would show a cost range with the assumptions beside it, rather than publish an invented precise total. A short assessment may be worth funding if it materially narrows the range before the larger commitment.

Describe what remains unresolved under each option. Training another engineer reduces the knowledge dependency but does not make an unsupported library supported. Replacing the library may improve maintainability while leaving a weak reconciliation process untouched.

## Make the cost of waiting explicit

Deferral can be reasonable when the service is stable, controls are working and a replacement depends on another decision. It still needs an owner.

State what the organisation will keep paying for and what event would change the recommendation. A supplier support deadline, a planned system upgrade or failure of a recovery test might trigger earlier action. "Monitor the risk" is incomplete unless someone knows what to monitor and what response follows.

The business consequence should sit with an authorised owner, while technical staff retain responsibility for the accuracy of their assessment. [A risk register and risk ownership](/blog/the-difference-between-a-risk-register-and-risk-ownership) are different things; recording a dependency does not settle whether continuing with it is acceptable.

Give the owner a review date that reflects the exposure. Avoid repeatedly moving an overdue action without revisiting the original decision to wait.

## Agree what would count as improvement

Before approving work, define the evidence that would show the investment helped. For the connector, that might be another engineer completing a recovery exercise, an upgrade passing agreed compatibility checks or a demonstrated reduction in manual exception handling.

Completion of development is not enough. Check whether the old component was removed, the operating notes changed and any temporary access closed. Otherwise the organisation may end up maintaining both implementations.

Keep the measurement modest and relevant. You do not need a universal technical-debt score to decide whether a particular dependency is becoming easier to manage. You need evidence linked to the original problem.

The result should feed into the [next budget discussion](/blog/making-the-technology-budget-easier-to-challenge). A specific comparison of burden, exposure and alternatives is easier to fund than a general plea to modernise, and easier to stop when the proposed change no longer makes sense.
