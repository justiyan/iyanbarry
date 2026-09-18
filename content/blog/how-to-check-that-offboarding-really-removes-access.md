---
title: "How to check that offboarding really removes access"
date: "2026-09-18"
retrospectiveDate: "2026-01-17"
tags: ["Cybersecurity", "Governance"]
summary: "Offboarding is complete only when the relevant access paths have been checked, including application sessions, delegated permissions and integrations."
published: true
---

The directory account is disabled and the departure ticket is closed. Those are useful events, but neither proves that every relevant access path has ended. A separately managed SaaS account, delegated mailbox access or an integration created by the departing worker may require its own action.

An offboarding process should produce a defensible answer about access, not simply a list of administrative tasks performed. That answer needs an understood scope, coordinated timing and checks that reflect how the organisation's systems actually work.

## Establish what departure changes and what it must preserve

Agree the effective time with the authorised HR and management roles. A planned departure, an immediate access suspension and a role change have different operational requirements. IT should receive an authoritative instruction without needing unnecessary personal details about the employment decision.

Clarify which records and business processes must continue. Customer relationships, shared documents and scheduled work may need a new owner. Follow the organisation's retention and legal hold requirements before deleting anything. Removing access and deleting data are separate decisions.

NIST's framework calls for access permissions and entitlements to be managed, enforced and reviewed. ASD also recommends revalidating privileged access when people change duties or leave. The operational implication is to treat departure as an access review across the relevant services, not merely a directory event.

## Trace the access paths, including local accounts

Use the person's role and application records to identify access. Include supplier portals, separately administered applications and collaboration with external organisations. A central sign-in service can simplify this work, but only for the systems and lifecycle functions actually connected to it.

Ask application owners to confirm whether disabling the central identity affects existing sessions, refresh tokens and locally managed credentials. Behaviour varies by service and configuration. Use supported revocation procedures and test important cases rather than assuming all sessions end immediately.

Review delegated access and group ownership. A person may have permissions through a team, an administrative role or a delegation that does not appear in a basic list of applications. Check registered authentication and recovery methods where relevant, and remove or transfer them through supported processes.

Integration credentials need separate attention. A token used by a legitimate automation may remain necessary, but it should not remain under an uncontrolled personal identity. Establish an accountable service owner, migrate to an appropriate service identity and rotate or revoke exposed credentials as justified by the circumstances.

## Rehearse a departure without using a real former employee

Consider a hypothetical architecture practice with a document platform, finance SaaS and a supplier tender portal. The main identity service covers the first two, while the tender portal uses a local account. A project export also runs under a credential created by a staff member.

Create an authorised test identity with representative access and record its permissions. Follow the offboarding procedure at an agreed time. Check whether access is denied through the supported routes, whether relevant existing sessions have been addressed and whether the tender portal requires a separate administrator action.

The integration should be tested independently. If disabling the test user's equivalent process would stop a legitimate export, the procedure needs an ownership transfer step before departure. That is not a reason to keep the worker's interactive access indefinitely.

Record the test's limits. It proves the tested configuration and paths, not every possible application in the organisation. Use findings to update the service register and repeat the relevant checks when a platform changes. [The security questions to ask a SaaS vendor before signing](/blog/the-security-questions-to-ask-a-saas-vendor-before-signing) helps establish these capabilities before purchase.

## Include devices and information outside the application

Coordinate return or approved handling of company devices. Confirm device ownership before attempting any remote action. A personal device requires a different, authorised process from a company laptop, and privacy or employment considerations may need specialist advice.

Review whether corporate information remains in an approved local storage location or managed container, and use supported controls appropriate to the arrangement. Do not claim that remote account disablement removes every previously downloaded copy. The access control and information handling questions are related but distinct.

Physical credentials also need an owner. Building access cards, physical keys and any recovery equipment should be included through the relevant facilities process. IT does not need to own all of those tasks, but the departure coordinator needs confirmation that each responsible team has acted.

## Close on evidence, not on a single tick

The closure record should state which services were checked, which actions were taken and any unresolved access path. Restrict access to the record because it may contain sensitive employment and security information. Keep the evidence proportionate; do not collect unnecessary personal activity to prove an administrative task.

Where a supplier must act, keep the item open until there is appropriate confirmation. An email requesting removal is evidence of a request, not evidence that removal occurred. Escalate delays according to the risk and agreed contract.

Review failures by cause. Missing application ownership needs a service inventory repair. An integration dependent on a personal credential needs design work. A late HR notification needs a coordination change. [Privileged access without shared administrator accounts](/blog/privileged-access-without-shared-administrator-accounts) helps remove one class of access that is especially difficult to attribute during departure.

A good process can explain what ended, what transferred and what remains under controlled follow-up. That is a stronger result than a fast ticket closure that leaves those questions unanswered.
