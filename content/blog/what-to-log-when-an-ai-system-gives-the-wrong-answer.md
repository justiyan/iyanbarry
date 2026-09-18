---
title: "What to log when an AI system gives the wrong answer"
date: "2026-09-18"
retrospectiveDate: "2026-08-22"
summary: "Keep a diagnostic trail of versions, authorised sources and action outcomes without turning routine AI logs into a sensitive conversation archive."
tags: ["AI", "Governance"]
published: true
---

When an AI answer is wrong, a screenshot rarely explains why. The model may have received an obsolete source, missed a relevant passage, interpreted evidence incorrectly or been shown information the user should not have accessed.

The log needs to help an operator distinguish those failures. It should not default to recording every prompt, document and response indefinitely. That can create a new collection of sensitive information with broader access than the original sources.

I would design diagnostic logging around questions an investigator needs to answer, then collect the least information that can answer them reliably. Detailed content capture should be a controlled choice rather than a hidden side effect of switching on observability.

## Reconstruct the request without copying everything

Start with a request identifier and timestamps that connect the application, retrieval service, model call and any tool operations. Record the outcome of each step, including timeouts and denied requests.

Capture the application release, prompt-template version, model deployment identifier and relevant configuration. If a provider does not expose a stable model version, record that limitation along with the identifier it does provide. Do not imply exact reproducibility when the service cannot support it.

Include the workflow and access context needed for diagnosis. Use identifiers that authorised investigators can resolve rather than placing unnecessary personal details in every log event. Protect those identifiers too; pseudonymous does not mean harmless.

A hypothetical support case might report that an assistant gave the wrong renewal date. An operator should be able to identify the request and its source set without asking the employee to paste the entire confidential agreement into an ordinary helpdesk ticket.

Provide a user-facing report mechanism that captures the request identifier and lets the person describe the problem. Explain whether submitting feedback includes conversation content. The person should not have to guess what information the report sends.

## Preserve retrieval provenance

For a document-supported answer, record which source identifiers and versions were eligible, which were returned and which passages entered model context, subject to the approved logging design.

This makes a useful distinction possible. If the amendment never entered the retrieved set, the error may sit in ingestion or search. If it arrived and the answer ignored it, the investigation moves towards generation or task design.

Passage identifiers and content hashes can help detect change without routinely duplicating the passage itself. They do not guarantee that an investigator can later recover the old content. If exact historical reconstruction is required, design a separately controlled version archive with its own access and retention rules.

Record permission-decision metadata where needed to investigate disclosure. The operator should be able to establish which policy and identity context made a source eligible. Avoid logging a full group membership list by default when a narrower decision record would suffice.

Do not let the diagnostic route bypass source permissions. A support dashboard showing every retrieved passage may expose more information than the assistant itself. Treat support access as a separate privileged capability.

## Distinguish generated intentions from actual actions

For an agent, the model's plan is not evidence that a transaction occurred. Log the proposed operation, validation result, approval reference and downstream outcome as separate events.

Keep material action parameters where necessary, but redact secrets and minimise sensitive payloads. Record targets in a form that allows authorised reconciliation. A generic “tool succeeded” event is not enough if the wrong record changed.

Handle uncertainty explicitly. A timeout after submission may leave the application unsure whether the operation committed. The log should preserve that uncertain state and the later reconciliation, rather than recording a failure that triggers an unsafe retry.

Approval records should identify what the person approved and which proposal version executed. This helps detect a mismatch between consent and action. It also avoids relying on a conversational statement that approval supposedly existed.

For routine answer-only systems, do not collect agent traces simply because the monitoring product offers them. Match the evidence to the capabilities the application actually has.

## Give detailed content capture a separate policy

There are cases where metadata is insufficient. A parsing defect or disputed interpretation may require the exact input and output. Make that an approved diagnostic mode with a purpose, restricted access and a retention limit.

Microsoft's documentation illustrates why logging decisions cannot stop at the application. Its Copilot material describes stored interaction history, while its Azure model documentation distinguishes stateless model inference from optional stateful features and other service processing. Review the actual configuration and contractual commitments rather than assuming no-training means no stored content.

Include temporary files, tracing platforms, error reports and exports in the inventory. Redaction in the main log does not help if an exception handler sends the original payload elsewhere.

Do not ask the model for private internal reasoning as a substitute for operational evidence. Source passages, externally visible outputs and confirmed tool results are more useful for establishing what the system actually did.

[Local models](/blog/local-models-do-not-automatically-solve-data-governance) need the same discipline. Moving inference onto organisational hardware does not decide who can read the logs or what a backup retains.

## Turn the incident into a test, carefully

Assign an owner to retention and access review. Define who can approve extended preservation for an incident and how that exception ends. Otherwise temporary diagnostic collections tend to become permanent.

When the cause is understood, create a regression case using the minimum necessary information. Sanitise or replace sensitive details where possible and verify that the revised case still reproduces the failure. A production incident should not be copied wholesale into a broadly shared development dataset.

Record the cause at the right level: source quality, retrieval, access, model behaviour, interface or action execution. That classification helps direct the fix and avoids blaming the model for every defect in the application.

Good logs let the operator explain a wrong answer without building an uncontrolled archive of everyone's work. I would treat both parts as requirements. Diagnostic usefulness and restraint should be designed together.
