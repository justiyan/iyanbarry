---
title: "Finding the owner of a business metric"
date: "2026-09-18"
retrospectiveDate: "2026-02-17"
summary: "A metric needs someone who can decide what it means, not just someone who can maintain the calculation. Here is a practical way to separate those roles."
tags: ["Data", "Integration"]
published: true
---

The person who wrote the query often becomes the unofficial owner of the number. Questions arrive in their inbox, disputed totals become their problem and every change request starts with their name.

That arrangement works until the disagreement is about policy rather than code. An analyst can explain how a completion rate is calculated. They should not be left to decide whether a cancelled activity counts as completed because two managers disagree.

Metric ownership needs enough authority to settle meaning, alongside enough technical knowledge to make the calculation dependable.

## Separate the decisions hiding inside ownership

I would distinguish the person accountable for the business definition from the person maintaining its implementation. In a small organisation they might be the same person, but the responsibilities are still different.

The business owner decides the purpose of the measure, the population it covers and the treatment of exceptions. They approve changes that affect interpretation. The technical custodian maintains the transformation, tests and documentation, and explains limitations in the available data.

Source owners matter too. They control the process that records the underlying information. A report developer cannot resolve late entry by editing a formula. Someone responsible for the source workflow needs to address why the entry is late and whether the published measure can still be used.

Do not make ownership a ceremonial label. Ask whether the proposed owner can approve a disputed definition and convene the people affected by it. If they cannot, give them an escalation route rather than accountability without authority.

## Try a disputed case, not a committee chart

Imagine a fictional training provider reporting course completion. Delivery staff regard someone as complete when they attend the final session. Administration waits for the required assessment to be recorded. Both teams are describing legitimate milestones, but the shared label conceals the difference.

I would ask what decision the metric supports. Planning classroom capacity may need attendance completion. Confirming an outcome may need assessed completion. There may be no reason to force these into a single number.

The decision could be to publish separate measures with explicit names and one agreed relationship between them. That is better than choosing whichever definition gives the more comfortable result. A common vocabulary can accommodate different questions without pretending the answers should match.

Where a single organisation-wide measure is necessary, take the disputed cases to the accountable business leader. Present the alternatives, the consequences and the unresolved assumptions. Record the decision and its effective date. The analyst should not have to win the policy argument through a cleverly written query.

## Keep a definition record people can read

A useful definition record can fit on a page. Begin with the question the metric answers, its owner and the audience permitted to use it. Follow with the unit being counted, the source, the calculation and the reporting period.

Include exclusions and the treatment of missing information. A blank assessment date is not necessarily a failed assessment; it may mean the result has not arrived. If the measure relies on that distinction, document it beside the calculation rather than leaving it in a developer's comment.

Add examples of included and excluded records, the acceptable freshness and a link to the implementation. A business reader should understand the rule without reading code. A technical reader should be able to find the code without guessing which workbook is current.

This record is a good first entry in a [small data catalogue](/blog/building-a-small-data-catalogue-people-will-maintain). You do not need an enterprise catalogue programme to document a consequential number. Start with the measures people argue about or use to commit resources.

## Make changes visible in the report

A definition can change for sensible reasons. The organisation may introduce a new service, change its process or discover that an old rule was misleading. The risk is changing the calculation while leaving readers to assume the historical series is comparable.

Agree whether to restate prior periods, show a break in the series or retain both definitions for a transition. That is a business decision informed by technical feasibility. Save the approved version so a later reviewer can understand what a published figure meant at the time.

I would also distinguish a correction from a policy change. Fixing a join that duplicated records is different from deciding to include a previously excluded category. Both may alter the total, but they deserve different explanations.

Set a lightweight review trigger: an upstream process change, a new use of the measure or a recurring dispute. A calendar review can help, but it should not be the only way an obsolete definition gets noticed.

The final test of ownership is practical. When someone challenges the number, can the team identify who explains the calculation, who fixes the source and who decides the meaning? If those answers are clear, the metric has an operating arrangement. If every question still lands with the query author, the title in the catalogue has not changed much.
