---
title: "Where a workflow still needs a person"
date: "2026-09-18"
retrospectiveDate: "2026-06-29"
tags: ["Delivery", "Leadership"]
summary: "Place human judgement where consequences and ambiguity justify it, then give reviewers the evidence, time and authority to act."
published: true
---

Adding a human approval step can look like a sensible safeguard. It can also produce a queue of people clicking approve because they lack the information, time or authority to do anything else.

I would begin with the decision that needs judgement and design the handoff around it. The presence of a person is not enough. Their role has to be meaningful in the actual workflow.

## Distinguish preparation from authority

A system can gather information, check required fields and prepare a recommendation without being authorised to make the final decision. Keeping that distinction clear allows useful automation while preserving a deliberate decision boundary.

In a fictional supplier-payment workflow, software might match invoice details and identify a possible bank-account change. A person with the appropriate authority should assess that change through the organisation's approved verification process before payment proceeds. A high match score should not silently become permission to alter payment details.

The same principle applies outside finance. Access decisions, sensitive communications and changes affecting people's services may require judgement about context and consequence. The appropriate control depends on the organisation's obligations and risk assessment; there is no universal list that makes every workflow safe.

Describe which actions are permitted automatically and which must stop for review. Make the boundary enforceable in the workflow rather than relying on a note that users may overlook.

## Route ambiguity to someone who can resolve it

Ambiguous input is not always a technical error. Two records may disagree because the business has not defined which source is authoritative. A request may fall outside policy because the policy never considered that situation.

The reviewer needs access to the relevant context and the authority to decide or escalate. Sending every uncertain case to the service desk is unlikely to help if the service desk cannot interpret the policy.

Provide a concise review package: the requested action, supporting evidence, the reason for referral and any missing information. Show the original material where the decision depends on it. A summary, especially one produced by an AI system, should not be the only evidence available for a consequential decision.

Allow the reviewer to request more information, reject the proposal or route it elsewhere. A workflow with only an approve button has already constrained the person's judgement, even if the design calls the step human review.

## Give the reviewer a manageable queue

Review work needs capacity and priority rules. If every routine item requires a detailed check, reviewers may have little attention left for unusual cases. Conversely, routing only obviously broken items can leave confident but incorrect outputs unchecked.

Choose the review model according to consequence and evidence. Some processes need every consequential action approved. Others may allow automatic handling within a narrow rule set, with exception review and independent sampling. Document why the chosen approach is appropriate and what would trigger tighter controls.

Measure the queue as work. Track waiting, repeated referrals and the reasons items cannot be resolved. A growing backlog may indicate insufficient capacity, poor inputs or an overly broad referral rule. Changing the rule simply to reduce the queue can transfer risk without anyone approving it.

Set a safe state for unanswered reviews. Depending on the task, that may mean holding the action, returning the request or using an approved alternative. A timeout should not quietly convert missing approval into consent unless that behaviour has been explicitly justified and authorised.

## Make overrides visible and useful

Record the decision, the relevant evidence and the reason for an override at a level proportionate to the action. Do not collect unnecessary personal commentary. The record should help someone understand what happened and support later review.

Repeated overrides can reveal a rule that no longer fits the work. They can also reveal weak training or pressure to bypass a control. Investigate the pattern before choosing the response. The number alone does not explain the cause.

Give staff a way to challenge the system without being treated as an obstacle to adoption. If people believe disagreement will be counted against them, the review step can become ceremonial. Managers need to support appropriate pauses and escalation.

For AI-assisted workflows, consider whether reviewers can recognise likely mistakes. A fluent recommendation can be difficult to assess when the source evidence is unavailable or the reviewer lacks domain knowledge. Training should use realistic misleading or incomplete cases, not only examples where the system is obviously correct.

## Test the handoff as part of the service

Rehearse a case that the system must stop, a case that the reviewer should reject and a case requiring further authority. Check that the action really remains blocked while the decision is pending and that the eventual result is recorded correctly.

Test absence too. If the only authorised reviewer is away, the workflow needs a deputy or an accepted pause. The design should not depend on someone sharing an account or approving from an informal message.

This handoff belongs in [the business case for automation](/blog/a-realistic-business-case-for-workflow-automation). Review time and exception handling are operating costs, not temporary defects that can be omitted from the estimate.

After launch, examine whether reviewers are making substantive decisions and whether the workload remains manageable. If the role has become a routine click with no evidence or authority behind it, redesign it. The organisation needs a working decision process, not a human name attached to an automated outcome.
