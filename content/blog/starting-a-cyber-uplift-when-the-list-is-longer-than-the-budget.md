---
title: "Starting a cyber uplift when the list is longer than the budget"
date: "2026-09-18"
retrospectiveDate: "2025-12-02"
tags: ["Cybersecurity", "Governance"]
summary: "A defensible cyber budget starts with credible exposure, recovery dependencies and explicit deferrals, rather than a race to improve a framework score."
published: true
---

The assessment has arrived. It contains more recommendations than the IT team could complete in a year, and the available budget will cover only part of them. Sorting the spreadsheet by severity feels productive, but it does not answer the question the executive team needs answered: what should we fund first, and what are we choosing to leave exposed?

I would resist turning that conversation into a contest between security products. Before buying anything, establish which services matter, how they could be interrupted or misused, and what evidence exists that the organisation could recover. The first useful deliverable is a set of choices, not a shopping list.

## Start with a small number of credible situations

Use situations that colleagues can recognise. An unauthorised person gains access to payroll. A compromised administrator can alter backups. A public-facing service remains vulnerable because nobody owns its maintenance. These descriptions connect technology weaknesses to a business consequence without pretending to predict precisely when an incident will happen.

For each situation, separate what is known from what is assumed. An inventory showing an unsupported system is evidence. A statement that an attacker could reach every connected application may still need validation. A restore procedure is evidence of preparation; it is not evidence that restoration works within the business's tolerance.

This distinction prevents confident speculation from consuming the budget. It also identifies cheap, bounded discovery work that can change a large investment decision. Pay for a focused restore exercise or access review where uncertainty is material, rather than commissioning another broad assessment that repeats the same unknowns.

## Balance prevention with the ability to recover

The Essential Eight provides a useful structure for preventative controls, including backups. ASD's guidance also says it will not mitigate every cyber threat and that organisations should choose a target maturity suitable for their environment. A target therefore needs a rationale. It should not appear in a board paper as though every organisation has the same obligation.

Look across the controls as a connected set. Stronger authentication is worth considering, but its benefit is constrained if recovery staff cannot regain trusted administrative access. Reliable backups are useful, but a copy of business data alone does not restore an application with missing configuration and credentials.

NIST's Cybersecurity Framework similarly gives recovery and governance a place alongside protection. That is a helpful corrective when the proposed programme consists almost entirely of new detection licences. Buying detection without the capacity to investigate and act creates another queue for an already stretched team.

## Work through an actual trade-off

Consider a hypothetical regional wholesaler. It can fund either a broad monitoring expansion or a smaller package covering exposed-system maintenance, named administrator access and a restore rehearsal for order processing. Both proposals have merit. The second may be the better first step if the exposed systems have known maintenance gaps and nobody has demonstrated that orders can be recovered.

The decision paper should explain why. Identify the affected service, the weakness being addressed, the implementation dependencies and the evidence that will count as completion. For the restore work, completion might require a business user to retrieve orders and reconcile the backlog in an isolated environment. A screenshot of a successful backup job would not meet that test.

Record what the smaller package leaves unresolved. Perhaps suspicious activity will still depend on a supplier's existing monitoring coverage. Ask the supplier to confirm that coverage and the escalation arrangement. Do not describe the choice as eliminating ransomware risk or claim a percentage reduction without a defensible model and inputs.

## Fund operating effort, not just installation

A control can be technically available and operationally neglected. Someone needs to review access, manage exceptions, investigate alerts and test whether changes have broken recovery. Include that work in the proposal before the licence order is signed.

Use the team's actual capacity. If the only engineer who can implement a security change is also responsible for a migration, the plan has a dependency, not two parallel workstreams. Protect time or change the sequence. The approach in [leading an IT team out of firefighting](/blog/leading-it-teams-in-the-real-world) is relevant here: an unfunded claim on people's attention is still a cost.

Small organisations may sensibly buy specialist help. Specify the outcome and the handover. A supplier should leave evidence the team can use, clear ongoing responsibilities and a route for support when the control behaves unexpectedly.

## Keep the deferrals visible

Give each material deferral an owner, a reason and a review trigger. A contract renewal, a change in exposure or a failed recovery test may justify revisiting the choice before the next budget cycle. An expiry date is useful only if someone must act when it arrives.

Report progress as changes in capability and unresolved exposure. Say which service has been tested, which accounts remain outside the control and which dependency has slipped. Keep the framework assessment, but explain its scope through the distinction in [Essential Eight maturity is not a security score](/blog/essential-eight-maturity-is-not-a-security-score).

The budget conversation should end with authorised work and acknowledged limits. That is more useful than a promise to become secure, and considerably easier to hold management accountable for.
