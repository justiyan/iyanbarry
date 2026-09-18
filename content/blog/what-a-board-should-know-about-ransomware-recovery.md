---
title: "What a board should know about ransomware recovery"
date: "2025-12-24"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "Ransomware recovery needs trusted access, workable service priorities and clear authority. Boards should ask for evidence of those decisions before an incident."
published: true
---

The board does not need to decide which backup to restore. It does need confidence that someone can make that decision safely, obtain trusted access and restart the services the organisation depends on. A recovery plan that assumes all those conditions will be available is a weak basis for reassurance.

Ransomware recovery is also broader than restoring encrypted files. Information may have been accessed or taken, systems may remain untrusted, and staff may need to operate without their usual communication tools. Technical recovery can proceed while legal, privacy and operational questions remain unresolved.

## Ask what a return to service means

A server running is a technical milestone. A service working is a business outcome. The distinction matters when the restored application depends on identity, integrations, external providers and data that may not share the same recovery point.

Ask management to define a minimum acceptable service for the most important operations. That might mean accepting new orders but holding automated dispatch, or processing payroll only after a reconciliation. Identify the people authorised to accept that restricted operation and the conditions that would stop it.

NIST's Cybersecurity Framework calls for verifying the integrity of restoration assets before use and confirming the integrity of restored systems and their operating status. It is a useful basis for board questions about evidence. Recovery should not be declared complete solely because the infrastructure team has finished its tasks.

## Treat identity as part of recovery

If the normal administrator accounts are unavailable or cannot be trusted, the recovery team needs an approved alternative. Ask how that alternative is protected, who can use it and whether it has been exercised. Avoid circulating secret credentials in board papers; the board needs assurance about the arrangement, not the secret itself.

The same question applies to backup administration, cloud management and supplier access. A separate backup platform may still depend on the affected identity service. A recovery guide stored only in the usual document system may be inaccessible precisely when it is needed.

Management should be able to explain these dependencies without exposing sensitive operational detail. The evidence might be a controlled exercise record showing that authorised responders obtained access through the recovery arrangement and restored a service in an isolated environment. The limitations of that exercise should be stated too.

## Make the restoration order a business decision

Consider a hypothetical distributor with order processing, payroll and a customer portal unavailable. Restoring the portal first could look reassuring externally but achieve little if orders cannot be fulfilled. Restoring the order database first might still leave warehouses unable to identify approved dispatches.

Before an incident, operations and IT should agree the dependencies and the minimum information required for each step. During an incident, those priorities need adjustment as facts emerge. A suspected integrity problem in stock records may justify keeping dispatch restricted even after the software runs.

Ask how manual work will be recorded and reconciled. Paper records or controlled offline files can support temporary operation, but someone must prevent duplicate transactions when systems return. The cost of recovery includes catching up and checking work, not just switching equipment back on.

A board exercise should test a disagreement between leaders over this sequence. If everyone agrees instantly, the scenario may not have exposed the difficult decision.

## Separate technical authority from legal advice

A response lead needs authority to contain the incident and coordinate recovery. Legal and privacy decisions need qualified advice based on the facts and applicable obligations. Insurance questions require the policy and an appropriate adviser. None of those responsibilities disappears because the organisation has an external IT provider.

Arrange the relationships before an incident. Know how to contact advisers without corporate email, which suppliers may be engaged and how emergency expenditure is approved. Have qualified advisers confirm notification and consent requirements that apply to the organisation rather than adopting a generic timeline from an internet checklist.

Questions about an extortion demand should go to appropriately qualified incident, legal and law enforcement specialists. A board should not assume payment guarantees recovery or confidentiality. The practical preparation is to avoid making any such decision without competent advice and reliable information.

[Preparing for a cyber incident before anyone is on call](/blog/preparing-for-a-cyber-incident-before-anyone-is-on-call) covers the authority and contact arrangements that make this possible.

## Request a rehearsal with uncomfortable assumptions

Ask for a recovery exercise in which normal identity access is unavailable and a critical supplier is slow to respond. Management can choose a safe scope without disrupting production. The purpose is to reveal dependencies, not stage a dramatic technical demonstration.

The resulting report should state what was recovered, who accepted it and what was not tested. Include elapsed time alongside waiting time and the reasons for delay. A partial exercise should not be extrapolated into a confident whole-business recovery estimate.

Require owners and dates for the defects found. A missing credential path, unclear restoration priority or unusable supplier contact is actionable work. Retest the relevant step after remediation, using the discipline in [testing backups by restoring the service](/blog/testing-backups-by-restoring-the-service).

The board's useful contribution is to demand a credible recovery claim and fund the dependencies behind it. It should be possible to explain that claim without saying merely that backups are green.
