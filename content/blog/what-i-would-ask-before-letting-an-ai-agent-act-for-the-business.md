---
title: "What I would ask before letting an AI agent act for the business"
date: "2026-09-18"
updated: "2026-09-18"
summary: "A consequence-led deployment decision for business agents: define the commitment, prove the limits, rehearse recovery and give someone authority to stop."
tags: ["AI", "Governance"]
published: true
---

Before letting an AI agent act for a business, I would ask for a description of the commitment being delegated. “Automate the workflow” is too broad. I want to know what the organisation could owe, disclose, change or lose if the agent completes the wrong action.

That discussion should involve the business owner, not just the team building the integration. A technical permission can allow an operation without establishing that the business intended to delegate the decision behind it.

The approval I would look for is conditional and specific: this agent may perform these operations, using this evidence, within these limits, while these people remain accountable. The following questions are how I would test whether that statement is ready to sign.

## What consequence are we authorising?

Describe the action in business terms. Updating an internal draft, notifying a customer and changing a contractual record are different commitments even if each is a simple API call.

Use a hypothetical supplier-follow-up agent as an example. It might identify missing information, draft a request and send it to an approved contact. The decision should distinguish those steps. Permission to identify a missing field does not automatically include permission to make promises about delivery dates in the outgoing message.

List who could be affected and what they would reasonably infer from the action. An external recipient may treat a message as the business speaking, not as experimental software producing text. A disclaimer may not undo that expectation.

I would also ask which decisions remain explicitly human. If the team cannot name them, the scope is likely to expand whenever the agent encounters an awkward case.

## Why is action better than a reviewed proposal?

Ask what the organisation gains by allowing the agent to commit the change rather than prepare it. The answer should refer to a real workflow constraint, not simply a desire for more autonomy.

Perhaps the task is frequent, narrowly defined and readily reversible. Perhaps requiring individual review would remove most of the benefit. Those are plausible reasons to test a controlled action path, but they remain hypotheses until the organisation measures completed work and error handling.

Compare the proposed autonomy with a simpler alternative. A draft queue, a conventional rule or a better form may capture much of the benefit with less uncertainty. The agent should earn its additional authority through the task, not through the sophistication of its demonstration.

I would keep forecast benefits separate from observed results in the approval paper. A promised reduction in effort is not evidence that the control design can be relaxed.

## What independently prevents an unacceptable action?

Ask the team to show the controls that still work when the model produces a bad instruction. Which downstream permissions, target restrictions and validation rules prevent the operation?

OWASP's excessive-agency guidance recommends minimising functionality, permissions and autonomy, and enforcing authorisation outside the model. That is the standard I would use to question a design that relies mainly on a prompt telling the agent to behave.

The detailed implementation belongs in [the smallest useful set of agent permissions](/blog/giving-an-ai-agent-the-smallest-useful-set-of-permissions). At the approval meeting, I would want evidence that attempts outside the permitted scope were actually denied by the application or downstream system.

Include cumulative limits. An individually acceptable action can become unacceptable when repeated, applied to the wrong population or combined with information from another source. The authority statement needs boundaries around the run, not only around each call.

Check the processing boundary too. An internally hosted agent can still send business information to remote model services and tools. Delegating action does not remove the need to approve that data journey.

## What happens when completion is uncertain?

Rehearse a failure after the action is submitted but before the acknowledgement arrives. The agent should not guess whether it succeeded or retry a consequential operation blindly.

Ask how the system identifies committed actions, reconciles uncertain results and prevents duplicates. The answer should refer to actual downstream capabilities and tested behaviour. A conversational assurance that the agent “checks its work” is insufficient.

Then rehearse partial completion. If some recipients received a message and others did not, the operator needs to know which ones. If some records changed, a generic failed status is not enough to repair them safely.

Be precise about reversibility. A field update may be correctable; information already disclosed cannot reliably be recalled. Recovery may involve notification and remediation rather than an undo button. That difference should influence the initial scope.

I would want to see the manual fallback used in a rehearsal. A procedure that exists only in a document has not yet shown that the business can continue without the agent.

## Who can stop it, and on what evidence?

Name an accountable business owner and the people who can intervene operationally. Give them authority to pause the workflow without waiting for the original developer to become available.

Define what would trigger that pause. An unauthorised disclosure, an unexplained change pattern or an inability to reconcile transactions may justify stopping action while investigation proceeds. The rule should match the consequence rather than a generic error-rate target.

Provide evidence those people can use: request identifiers, source and configuration versions, approval references where relevant, and confirmed action outcomes. Protect the records so the monitoring system does not become another disclosure path.

NIST's AI Risk Management Framework offers voluntary lifecycle guidance for this ownership and risk discussion. It is not a certificate of safety. The organisation still has to make and maintain its own deployment decision.

## What exactly does the approval expire with?

An approval should state the tested scope and the changes that require reconsideration. New tools, broader data access, a different processor, a larger action population or unattended operation may alter the original decision materially.

Review the evidence after a bounded operating period. Compare actual outcomes, correction effort and incidents with the proposal. Preserve the option to reduce authority if the benefit or control performance falls short.

I would sign a narrow, evidenced delegation with a usable stop mechanism before signing a broad promise of autonomous capability. The business needs to know what it has authorised, what remains its own decision and how it will take control when the agent cannot finish safely.
