---
title: "Handling security exceptions with an expiry date"
date: "2026-01-22"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "Security exceptions should record a bounded decision, tested compensating controls and a credible exit, with reviews that can end rather than automatically renew them."
published: true
---

An exception with an expiry date can still last forever. It expires, someone receives a reminder, and the same approval is renewed because the business still needs the system. The date moves; the risk and dependency barely change.

The problem is not the existence of exceptions. Real environments contain incompatible applications, contractual constraints and urgent operational needs. The problem is treating an exception as a way to finish a security task when it is really a decision to operate under different conditions for a defined period.

## Describe the specific departure

Write what requirement is not being met and exactly where the departure applies. Name the service, relevant users or assets and the business need. Avoid broad phrases such as legacy environment exemption when only one application has a compatibility problem.

Include the consequences of refusing the exception. The operational owner should explain those consequences rather than leaving the security team to guess. An exception decision is more credible when management can compare the security exposure with the effect of stopping or changing the service.

ASD's Essential Eight guidance allows a risk-based approach to exceptions, with documentation, appropriate approval and regular review. It also recommends minimising their scope and considering compensating controls. That is not permission to relabel every incomplete control as acceptable.

## Make compensation a claim that can be tested

A compensating control should address the relevant exposure. If a system cannot meet the normal authentication requirement, narrowing who can reach it may help, but it does not automatically provide equivalent protection. State what the alternative does and what remains unresolved.

Avoid controls that exist only as instructions nobody can verify. Staff have been told to be careful is not the same kind of evidence as an enforced restriction with a documented configuration and review. Human procedures can matter, but their limits should be explicit.

Identify who checks that the compensating control remains in place. A temporary restriction can be removed during troubleshooting and never restored. Include a review after relevant changes rather than relying solely on the exception's calendar date.

## Give the decision to someone who owns the consequence

The technical team should explain the weakness and available controls. The operational owner should explain the service need. Approval should sit with the level of management authorised to accept the residual risk, with escalation where the consequence exceeds that authority.

Do not ask a service desk technician to accept a material business exposure because they happen to be handling the ticket. Equally, a senior signature should not eliminate the need for technical evidence. Management can authorise a risk decision; it cannot make a control work by approving a form.

Keep the record readable enough for a future reviewer to understand the original reasoning. Link to restricted technical evidence rather than distributing sensitive detail through a general project tracker.

## Work backwards from the exit

Consider a hypothetical regional services company whose scheduling application cannot support the organisation's chosen authentication method. The vendor has offered an upgrade, but migration requires operational testing and changes to an integration.

The exception should describe the temporary access restrictions, the accountable service owner and the upgrade dependency. Its exit plan needs a test slot, responsible people and a procurement decision if required. An expiry date without those ingredients is mostly an expression of hope.

At review, ask what has changed. If testing failed, record the defect and revised options. If the vendor's commitment slipped, decide whether to escalate commercially, narrow the service or investigate replacement. Do not renew using the original justification as though time has provided no new information.

[The security questions to ask a SaaS vendor before signing](/blog/the-security-questions-to-ask-a-saas-vendor-before-signing) can prevent some of these limitations entering the environment without an understood cost.

## Let events trigger an early review

Waiting for expiry is inappropriate when the service changes materially. Increased internet exposure, a new use of sensitive information, a relevant incident or failure of the compensating control should trigger reassessment. Record the triggers when the exception is approved.

A review can conclude that the exception should end, be narrowed or continue under revised conditions. It may also show that the original requirement was poorly chosen for the service. If so, improve the policy through the appropriate governance process rather than accumulating identical exceptions indefinitely.

Reporting should distinguish deliberate, approved departures from unauthorised gaps. Both require attention, but combining them hides whether the organisation's decision process is operating.

## Retire the workaround safely

When the permanent control is ready, test the service before closing the exception. Remove temporary permissions and restrictions in the planned order, update support instructions and check that no user or integration still relies on the old arrangement.

Closure evidence should demonstrate that the departure has ended, not merely that an implementation ticket was marked complete. A replacement application that leaves the old service reachable has not necessarily removed the original exposure.

Keep the history for future review and watch repeated exceptions in the same area. They may point to an underfunded platform or a procurement habit that creates avoidable security debt. [Starting a cyber uplift when the list is longer than the budget](/blog/starting-a-cyber-uplift-when-the-list-is-longer-than-the-budget) helps turn that pattern into an investment decision rather than another round of renewals.
