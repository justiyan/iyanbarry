---
title: "Choosing between an API integration and a scheduled file"
date: "2026-09-18"
retrospectiveDate: "2026-03-20"
summary: "An API is not automatically a better integration than a file. Compare the source contract, recovery path and latency the business actually needs."
tags: ["Data", "Integration"]
published: true
---

A scheduled file can sound old-fashioned next to an API. That is not a useful basis for an integration decision. A well-controlled file exchange may fit a daily process better than an unreliable endpoint, while an API may be the only sensible option for an interactive workflow.

I would compare the supported behaviour of the source and destination, then the operating requirements. The label on the transport tells you much less than the way it handles missing, repeated or late information.

## Establish the delivery contract

For either approach, agree what a delivery means. Is it a complete snapshot, a set of changes or a command that causes the destination to do something? How are records identified? How are corrections and deletions represented?

A file containing only changed records needs different handling from a full replacement. An API response that returns a page of records is not necessarily a complete extract. Pagination, filtering and continuation behaviour need to be understood and tested.

Ask the supplier what is officially supported. Confirm versioning, change notice, limits and access arrangements. A technically reachable endpoint or downloadable report is not enough if its format can change without a supported contract.

Define the source's time basis too. A snapshot taken at a known cutoff can be easier to reconcile than records fetched while they are changing. An API may support consistent change tracking, but that capability must exist in the actual product and configuration.

## Compare the fit for a real workflow

Imagine a fictional distributor that allocates next-day delivery capacity each afternoon. If the source provides a reliable daily export before the planning deadline, a scheduled file could be adequate. Faster transfer would not help if the planning inputs are not final until that time.

The same organisation might need an API when a customer checks an available delivery slot during booking. A daily file would not represent current capacity well enough for that interaction unless another mechanism controls reservations.

I would write down the maximum acceptable information age and the consequence of missing the delivery. Then compare volume, expected change rate and the support available for each option.

Include the consumer's behaviour. A downstream system that processes batches only overnight will not become real time because the upstream connection uses an API. Conversely, a file can arrive frequently, although that may create an operating burden without solving consistency problems.

The cost discussion should include testing, monitoring and supplier support. A lower initial build price can be outweighed by regular manual intervention or fragile assumptions about an undocumented export.

## Design recovery before choosing the winner

For a file exchange, define naming, delivery completeness and acknowledgement. Avoid reading a file while it is still being uploaded. An agreed finalisation mechanism, such as a completion marker or supported atomic handover, helps distinguish a complete delivery from a partial one.

Retain the delivery identifier and the outcome of processing. Detect repeated deliveries, missing expected files and files for the wrong period. Quarantine a malformed batch rather than silently treating it as an empty valid one.

For an API, handle timeouts, rate limits and transient failures with a bounded policy suited to the service. Retrying a read and retrying an operation that creates something are different risks. A lost response does not prove the destination failed to apply the request.

Both approaches need reconciliation and a safe replay path. I would ask each design to demonstrate [recovery from partial failure](/blog/designing-an-integration-that-can-recover-from-a-partial-failure), including uncertainty about what the destination accepted.

Security is part of that comparison. Use appropriate authenticated transport, restrict the integration identity and control stored copies. A file is not inherently insecure, and an API is not inherently safe. The actual permissions, encryption, logging and handling arrangements matter.

## Run a small failure-focused trial

Test the expected volume with representative non-sensitive data. Measure completion against the business deadline, including validation and downstream processing rather than transfer speed alone.

Then interrupt the flow. Send a duplicate delivery, omit a required field, delay the source and change a reference value. Confirm that the operator can identify the impact and recover without guessing which records to resend.

Ask a support person who did not build the trial to follow the operating instructions. The integration needs to be maintainable by the organisation that will own it, not just by the person demonstrating it.

Document the choice and the conditions that would justify revisiting it. A daily file may be appropriate now and inadequate if the decision becomes interactive. An API may be worth its operating cost when timeliness or selective access genuinely changes the process.

I would choose the approach with a supported contract, a credible recovery path and a fit to the required decision. Modern-looking plumbing is a weak substitute for those things.
