---
title: "Designing an integration that can recover from a partial failure"
date: "2026-09-18"
retrospectiveDate: "2026-04-08"
summary: "A timeout does not tell you whether the destination acted. Design an order flow with durable state, idempotency and reconciliation before relying on retries."
tags: ["Data", "Integration"]
published: true
---

The difficult integration failure is the one that leaves you unsure what happened. A request times out, but the destination may already have processed it. Sending it again might fix the problem or create a duplicate.

I would design for that uncertainty before writing the happy path. Recovery needs durable evidence of progress, a way to recognise repeated work and rules for resolving partial outcomes.

A retry button on its own does not provide any of those things.

## Make the business operation identifiable

Consider a hypothetical order flow. An ordering service records a confirmed order, a fulfilment service reserves stock and a notification service sends a confirmation. These are separate actions, and they may not succeed together.

Give the business operation a stable identifier that survives retries. Individual attempts can have their own trace identifiers, but they should remain connected to the same intended order.

Where the receiving service supports an idempotency key, understand its scope and retention period. Reusing a key should represent the same logical request, not a different order that happens to arrive later. The service's actual contract matters; adding an arbitrary header does not create idempotency.

If implementing the receiver, the duplicate check and the business effect need coordination. A check followed by an unprotected write can race with another worker processing the same operation. Use an appropriate atomic transaction, uniqueness constraint or equivalent mechanism for the storage and action involved.

Keep a result that a repeated request can resolve against. The aim is to recognise work already accepted, not merely suppress a message and leave the caller unable to tell what happened.

## Record progress where it survives a restart

Store the meaningful workflow states durably: received, reservation confirmed, notification pending, or whatever states the business process requires. Avoid treating an in-memory flag as proof that a step has completed.

A checkpoint should reflect confirmed progress. If it advances before a destination action is durable, a restart may skip work. If it advances afterwards, the action may be repeated after a crash, which is why safe duplicate handling remains necessary.

Where a local database change must lead to a later message, consider a transactional outbox or another supported design that records the state change and pending message together. A separate database commit followed by an unprotected send leaves a gap in which the event can be lost.

## Be specific about the guarantee

The outbox does not make every downstream effect happen exactly once. Consumers still need to cope with repeated delivery, and external actions may have their own limits. Describe the guarantee for each boundary rather than promising a universal exactly-once flow.

Keep the payload and diagnostic detail only as long as justified under the applicable handling requirements. Recovery evidence should not become an indefinite store of sensitive messages.

## Distinguish retries from business decisions

A temporary connectivity failure may justify a bounded retry with a suitable delay. A validation error probably needs correction. A response indicating insufficient stock is a business outcome, not a reason to hammer the endpoint until it changes its mind.

Respect the service's throttling guidance and avoid stacked retry loops that multiply traffic. When retries are exhausted, expose the affected operation to an authorised operator with enough context to investigate.

For an uncertain reservation outcome, query the destination by the stable business identifier if supported. Reconcile before creating another reservation. If the system cannot determine the outcome safely, stop and escalate rather than inventing a successful state.

The operating responsibilities described in [integration ownership after go-live](/blog/an-integration-needs-an-owner-after-it-goes-live) should include who may replay, amend or cancel work. Those actions can change business records and should not be left to whoever happens to notice the alert.

## Plan compensation and test awkward boundaries

If stock was reserved but the order cannot proceed, a compensating action may release the reservation. That is a business-specific operation, not necessarily a restoration of the entire system to its earlier state.

Other work may have happened in the meantime. Some actions cannot be meaningfully undone; a sent notification cannot be unsent. Put irreversible steps after the necessary checks where practical and define how to correct an external consequence when reversal is impossible.

Compensation can fail too. Track its progress and make it safe to resume where the action permits. High-impact or ambiguous cases may need human approval rather than automatic reversal.

Test failures around each durable boundary using non-sensitive data. Interrupt processing after the destination acts but before acknowledgement, deliver the same operation concurrently and restart during recovery. Confirm the final state against both systems.

I would accept the integration only when an operator can explain an interrupted order and recover it without guessing. A successful demonstration of the normal flow proves that the connection works. A controlled partial-failure test provides evidence that the organisation can live with it.
