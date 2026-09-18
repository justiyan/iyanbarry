---
title: "Testing backups by restoring the service"
date: "2025-12-27"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "A restore test should prove that a business service can operate, including its identity, configuration, integrations and acceptance checks."
published: true
---

A backup job can succeed while the organisation remains unable to recover the service it protects. The copy may be sound. The missing piece may be an application setting, an external dependency or the only person who knows how to make the restored system useful.

That is why I would ask for a service restoration test rather than another screenshot of successful jobs. Job monitoring still matters, but it answers a narrower question. The test needs to follow the service far enough that a business owner can recognise whether it works.

## Define the service before selecting the backup

Choose a bounded service with a clear owner. Payroll preparation, customer order entry or a document approval process is easier to test meaningfully than a vaguely defined recovery of the entire environment.

Describe what the user must be able to do. For payroll, opening the application is insufficient if the restored system cannot apply the approved configuration or produce a file that finance can validate. Use a safe test environment and appropriate test data or tightly controlled restored data. Do not let an exercise send real payments or customer messages.

Write the acceptance conditions with the business owner before the technical team begins. Include data consistency and a check of the next operational step. If the test deliberately excludes a dependency, say what conclusion can and cannot be drawn from that exclusion.

## Capture what the service depends on

ASD's Essential Eight guidance covers backups of data, applications and settings, and restoration to a common point in time. That is a broader proposition than copying a database. NIST's framework also treats tested backups and verification of restoration assets as part of recovery.

Map identity, software versions, configuration, certificates, network requirements and integrations. Record where the team obtains each item if the production environment is unavailable. A password manager that relies on the same failed identity provider is a dependency worth examining, not an automatic answer.

Some external services cannot be recreated in a local test. Agree a supplier test route or a safe substitute, then mark the limitation. A substitute proves only the behaviour it reproduces. It does not prove that a supplier will meet its restoration commitments during a real incident.

Keep the map short enough to use. A diagram with the required order and named owners is often more helpful than a large inventory with no recovery sequence.

## Run a deliberately constrained rehearsal

Consider a hypothetical membership organisation restoring its billing service. The database backup is available, but the application configuration references an integration credential held in the production vault. The test should discover that dependency before anyone declares the exercise successful.

The team arranges an approved recovery path for the credential, restores the matching configuration and checks a sample account with finance. It then verifies that the test cannot trigger live billing. A further check identifies transactions entered after the chosen recovery point and documents how the business would reconcile them.

This example has no assumed recovery duration. Measure the actual exercise rather than fitting it to a target. Record when the team began, when data was restored, when dependencies became available and when the business accepted the service. Waiting for a supplier or approval belongs in the elapsed time.

An exercise can be useful even if it fails. A failed test with a specific defect is better evidence than an untested promise, provided the defect becomes work and the team repeats the affected step.

## Test protection and restoration separately

A restore test does not by itself establish that backups would survive a compromised administrator. Review access and deletion protections separately. ASD's model distinguishes backup controls across maturity levels, so avoid claiming a level from one successful restoration.

Similarly, an isolated recovery does not prove that it is safe to reconnect to production after a cyber incident. Incident specialists may need to determine whether the restored assets and surrounding environment can be trusted. A routine disaster recovery exercise should state that limit.

Check who can change retention, delete copies or alter backup settings. The objective is to understand whether an incident affecting the live environment could also affect the recovery assets. Where a supplier manages the service, request evidence about the relevant configuration and responsibilities rather than relying on a product description.

## Leave behind a usable operating record

The report should identify the backup used, the service version, dependencies, acceptance checks and unresolved defects. Keep sensitive details in a restricted runbook and give management a summary of the demonstrated capability.

Assign remediation to the people who can perform it. A missing integration configuration belongs with the application owner; an unavailable emergency approval route may belong with management. Do not send every defect back to the backup administrator simply because the test began with a backup.

Repeat the test after material changes and on an agreed schedule appropriate to the service. Rotate participation so recovery does not depend entirely on the person who wrote the runbook. [What a board should know about ransomware recovery](/blog/what-a-board-should-know-about-ransomware-recovery) explains how to report that capability without overstating it.

The most useful final sentence in a test report is specific: this service was restored under these conditions, these checks passed, and these dependencies remain unproven. It gives the organisation something it can improve and something it can responsibly rely on.
