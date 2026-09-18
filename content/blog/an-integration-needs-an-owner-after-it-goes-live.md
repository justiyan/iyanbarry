---
title: "An integration needs an owner after it goes live"
date: "2026-03-14"
updated: "2026-09-18"
summary: "Go-live is the beginning of an integration\u2019s operating life. Name the people who manage failures, credentials and safe recovery before handing it over."
tags: ["Data", "Integration"]
published: true
---

An integration can be quietly important. Nobody opens it each morning or asks whether it enjoyed the weekend. They notice it when an expected record fails to appear, an invoice gets repeated or a downstream team starts working from stale information.

That is why I would not accept "the project team built it" as an ownership arrangement. Once the project closes, someone still needs to understand the business consequence of failure and have a safe way to respond.

## Start with the service people depend on

Describe the integration in business terms before listing its components. State what it moves, which process depends on it and when the result is needed. A name such as nightly connector tells support very little about the impact of a missed run.

Separate the business owner from the technical operator. The business owner decides whether delayed or incomplete information can be used. The operator investigates the fault and restores the service within agreed boundaries. A supplier may perform some of that work, but the organisation still needs someone accountable for the outcome.

Agree service hours honestly. If the integration supports a weekday reporting process, round-the-clock support may be unnecessary. If a failure interrupts a time-sensitive operation outside office hours, a shared mailbox checked the next morning is not an adequate response plan.

Include upstream and downstream contacts. A source can change without the integration code changing, and a destination can reject an otherwise valid message. Ownership should cover those dependencies rather than ending at the edge of the script.

## Make the alert useful to its recipient

Imagine a fictional wholesaler sending confirmed orders to a dispatch system. A failed transfer should tell the operator which stage failed, the affected time window and whether dispatch is using an earlier accepted set. It should not merely say that a job exited unsuccessfully.

Use correlation identifiers and restricted diagnostic detail to help trace the operation. Avoid putting full customer records or credentials in alert messages. The recipient needs enough context to investigate, not a new uncontrolled copy of the payload.

Monitor absence as well as errors. A scheduled task that never starts may produce no failure message. An integration that reports success while receiving no expected input may require a completeness warning.

Route alerts to a maintained team destination with an escalation path. Test the route with the people who will receive it. A notification rule pointing at a departed project contractor can remain technically configured and operationally useless.

Temporary retry failures do not always warrant waking someone. Bounded retries may handle transient faults, but exhausted retries or an approaching business deadline should produce a clear escalation. The alert policy should reflect impact rather than every line in the error log.

## Treat credentials as operating assets

Record the identity used by the integration, the permissions it needs and who maintains that arrangement. Prefer a suitable workload identity where the systems support it, rather than tying production processing to an individual's ordinary account.

Where secrets are necessary, store and rotate them through the approved mechanism. The handover should identify the process without copying secret values into documentation. Include certificate expiry, consent or access review requirements where applicable.

Test credential changes before the old credential becomes unusable. Verify both connectivity and the permitted scope of action. An integration can authenticate successfully while losing access to a particular dataset, or it can gain broader access than intended during a rushed repair.

A change in personnel should not require somebody to search an old laptop for the only working password. Equally, continuity does not justify an unrestricted account that nobody reviews. Permissions need to match the operation and the sensitivity of the information involved.

## Define who may replay work

Restarting an integration is not always harmless. A destination may have accepted an operation before the response was lost. Repeating the entire run can create duplicate records or repeat an external action.

The runbook should explain how to identify completed work, which failures can be retried automatically and which require business approval. Where outcomes are uncertain, reconcile with the destination before replaying. The design for [recovering from partial failure](/blog/designing-an-integration-that-can-recover-from-a-partial-failure) belongs in the operating handover too.

Give operators a bounded recovery procedure and a way to stop safely. Record who authorised a replay, its scope and the resulting reconciliation. Avoid asking a support person to improvise a database edit under pressure.

Before go-live, have someone other than the builder walk through a failed-run exercise using non-sensitive test data. They should find the alert, identify the impact and follow the recovery instructions. Any step that requires "ask the developer what they meant" is unfinished handover work.

An integration owner does not need to memorise every technical detail. They need a maintained operating arrangement that survives staff changes and explains what happens when the expected information does not arrive.
