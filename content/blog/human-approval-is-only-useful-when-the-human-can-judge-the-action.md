---
title: "Human approval is only useful when the human can judge the action"
date: "2026-08-12"
updated: "2026-09-18"
summary: "A meaningful approval shows the exact change, evidence and consequences, then binds consent to that operation rather than a vague request to continue."
tags: ["AI", "Governance"]
published: true
---

A human approval step can be a strong control. It can also be a button that people learn to press without understanding what happens next.

The difference is not whether a person appears somewhere in the workflow. It is whether that person has enough context, authority and time to judge the proposed action. An approval screen that conceals the destination or compresses a large change into a reassuring sentence does not provide that opportunity.

I would design approval as a small decision in its own right. The agent proposes an operation; the interface presents the relevant facts; the person can accept, reject or change it; and execution remains bound to what they actually approved.

## Show the change, not the agent's confidence

Consider a hypothetical assistant updating supplier contact records. A prompt saying “I found several outdated contacts. Shall I fix them?” gives the reviewer almost nothing to inspect.

The approval should show the affected records, existing values, proposed values and evidence for each change. Distinguish a supplied fact from an inference. If an email signature is the only basis for changing a registered contact, the reviewer should be able to see that limitation.

Show the destination in terms the person recognises. A database identifier alone may be precise but unhelpful. Pair it with the record name and environment so nobody approves a production change while thinking it is a rehearsal.

Explain consequential side effects. Updating a field may trigger notifications or downstream processing. A reviewer approving a contact correction should not unknowingly approve a message to the supplier as well.

The model's confidence is not a substitute for this evidence. A confident explanation can be wrong, and an anxious-sounding one can be right. The interface should support inspection rather than persuade the person to agree.

## Match the reviewer to the decision

The person who requested work is not always authorised to approve it. Business delegations, segregation of duties and access rules still apply when the proposal comes from an agent.

Assign approval to someone who understands the consequence. A technical operator may confirm that an API request is valid without being able to judge whether a business record should change. A business reviewer may approve the substance without being authorised to expand the agent's system permissions.

Give reviewers an escalation route. If the evidence is contradictory or the action falls outside their authority, they should be able to send it to the appropriate owner without pretending to approve it first.

Also fund the time. Requiring careful inspection while measuring staff only on throughput creates a predictable conflict. If the approval workload is unsustainable, narrow the automation or improve the evidence presentation rather than quietly accepting superficial review.

OWASP recommends human approval for high-impact agent actions. That recommendation is only useful when the organisation designs an approval people can perform, not merely an approval field in a database.

## Treat batches as a different problem

Approving a batch requires more than displaying a total. Show the range of changes, group them by consequence and expose exceptions. A reviewer should be able to inspect individual records and remove a questionable item without rejecting everything.

Sampling can help assess low-consequence repetitive work, but it is not proof that every item is correct. If an unsampled action could cause unacceptable harm, a sampled approval is the wrong control for that action.

Separate homogeneous routine changes from unusual ones. In the hypothetical contact update, exact replacements confirmed by an approved directory could follow one route; inferred changes from free text could require individual review. That classification itself needs a reliable rule, not just the agent declaring its own work routine.

Avoid designing a screen that becomes less informative as the batch grows. A long scroll of near-identical rows encourages people to miss the one important difference. Smaller batches and explicit exception queues may cost more clicks but produce a decision the reviewer can defend.

## Bind approval to a specific operation

Consent should identify the proposed action and its material parameters. It should not be a reusable licence for the agent to improvise additional work.

Record the proposal version, target and relevant preconditions. If the record changes between review and execution, the application should detect that and decide whether fresh approval is required. The same applies if the agent revises recipients, values or scope after consent.

Approval should expire where stale context matters. A decision made before a supplier changed its details may no longer be appropriate. Define that rule in the application rather than expecting the model to remember how old permission should feel.

Validate authority again at execution. The approving person may have lost access or the target may have moved outside the permitted scope. Business approval and technical authorisation are related but separate checks.

[The smallest useful agent permissions](/blog/giving-an-ai-agent-the-smallest-useful-set-of-permissions) help here. Even a mistaken approval should not let the agent execute operations outside its allowed capabilities.

## Make rejection and recovery ordinary paths

Offer clear choices: approve the displayed operation, edit it, reject it, defer it or ask for more evidence. Do not make approval the only convenient way to proceed.

After execution, show what actually happened. Distinguish full success, partial completion, failure and an uncertain result that needs reconciliation. If only some records changed, list those records rather than reporting the batch as finished.

Provide an appropriate correction route. Some changes can be reversed; an external message or disclosure cannot reliably be undone. The approval design should make that difference clear before execution, when the person can still prevent the consequence.

Review approval behaviour after launch. Frequent instant approvals, repeated rejections for the same missing evidence or users avoiding the screen are signals to investigate. Do not automatically treat a high approval rate as evidence that the agent is accurate.

I would rather have fewer, well-judged approvals than a large number of confirmations that nobody could meaningfully assess. The control exists to support a decision, and its design should make the decision easier to understand than the button is to click.
