---
title: "Giving an AI agent the smallest useful set of permissions"
date: "2026-08-09"
updated: "2026-09-18"
summary: "Design narrow action tools and scoped identities so an agent can finish its job without inheriting the whole application’s authority."
tags: ["AI", "Governance"]
published: true
---

An AI agent should receive the permissions needed to finish a defined job, not every permission available in the integration package.

The distinction is easy to lose during a prototype. A broad connector makes the demonstration work, an administrator account avoids access errors, and an unused tool stays enabled because removing it might break something. Those conveniences become the agent's production authority unless somebody deliberately reduces them.

I would begin with the smallest useful action and work outward only when the task requires it. This is more specific than telling the agent to be careful. It changes what the surrounding software will allow, even when the model makes a bad decision.

## Design a business operation, not a general-purpose escape hatch

Suppose a hypothetical agent prepares draft follow-up tasks from approved meeting notes. It may need to create a draft task in one queue. It does not necessarily need to run arbitrary database queries, administer the task system or send messages to any address.

A narrow tool could accept a validated task title, an allowed owner identifier and a source reference. The application would choose the permitted destination and mark the record as a draft. A generic “execute request” tool could expose far more capability than this task needs.

OWASP's excessive-agency guidance recommends minimising extensions and their functionality, avoiding open-ended tools where possible and restricting downstream permissions. The design lesson is to constrain both the tool interface and the identity behind it.

A friendly function name is not enough. A tool called “create draft” that accepts an unrestricted API path or an arbitrary command may still permit unrelated changes. Inspect what the implementation can execute, not just the description presented to the model.

Keep secrets outside model context. The application can hold credentials and use them after validating the request; the model does not need to see a token to propose an operation.

## Separate reading, proposing and committing

Do not bundle read and write authority merely because the vendor connector does. If the first release only needs to search, use an identity and interface that cannot modify the source.

Where writing is necessary, distinguish preparation from commitment. A proposal store can hold draft changes without granting access to the production record. An execution service can then validate an approved proposal under tighter rules.

For the hypothetical task agent, creating a draft and publishing it to an operational queue might be different operations. Assigning a task to an external collaborator could require a further check. The business should decide those boundaries explicitly.

This separation helps contain unexpected output. If a document tells the model to delete the queue, the request should fail because no such operation exists in the allowed path. A prompt telling the model never to delete is weaker than an architecture without delete authority.

Do not infer that read-only means risk-free. Reading confidential records and returning them to an unauthorised person is still harmful. [Permissions in the retrieval layer](/blog/permissions-belong-in-the-retrieval-layer) govern which information can enter the workflow before any write is considered.

## Scope identity to the actual task

Choose deliberately between acting in the user's context and using a service identity. A user-context operation can preserve existing access checks, but only if the downstream integration genuinely carries that scope. A service identity needs its own narrow authority and clear accountability.

Avoid a shared administrator identity simply because the agent serves several users. Otherwise a junior user's request can inherit authority that the business never delegated to them.

Scope by resource as well as operation. Permission to create tasks in a designated draft queue is narrower than permission to create tasks throughout the organisation. Where supported, constrain allowable records, destinations and fields. Enforce the constraint in trusted code or the downstream system rather than asking the model to self-police.

Time matters too. Long-lived credentials and cached access can survive changes in employment, role or project membership. Establish expiry, revocation and access-review arrangements appropriate to the system. The agent should fail safely when it cannot establish current authority.

## Put limits around repetition and escalation

A small permission can have a large cumulative effect. Creating one draft may be acceptable while creating an uncontrolled number could disrupt operations or incur cost.

Set run-level limits alongside per-action permissions. Bound the batch, resource consumption and duration. If the agent reaches a limit, require a new decision rather than letting it split the work into smaller requests to bypass the restriction.

Prevent silent escalation. A failed narrow tool should not trigger a fallback to a more privileged generic connector. A user asking for “whatever is necessary” should not expand the system's authority beyond the approved task.

Check tool installation and configuration changes separately. Adding a new integration or changing its credential is an administrative act, not a normal agent step. Keep that capability away from a production workflow unless it has been specifically designed and authorised.

In tests, attempt operations outside the intended scope and verify the downstream denial. A polite model refusal is useful behaviour, but it does not demonstrate that the underlying permission is absent.

## Make every change attributable

For each attempted write, record the requesting identity, proposed operation, target, approval state and confirmed result. Protect that record according to the sensitivity of its contents. A support log should not become a second unrestricted copy of the business data.

The operator needs to distinguish denied, attempted, committed and uncertain actions. If an acknowledgement is lost, the system should reconcile with the downstream service before retrying. An audit entry saying only “agent completed” will not help repair a partial failure.

Review permissions when the workflow changes and remove tools left over from experiments. Ask whether each remaining capability is still necessary. That conversation should involve the business owner as well as the developer.

The smallest useful permission set is not necessarily the smallest imaginable set. It is the one that permits the approved job while preventing unrelated actions. If the job cannot be described that clearly, broad access is not the right way to resolve the ambiguity.
