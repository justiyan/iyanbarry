---
title: "Why patch compliance can hide the systems that matter"
date: "2026-09-18"
retrospectiveDate: "2026-01-05"
tags: ["Cybersecurity", "Governance"]
summary: "Patch reporting needs an honest asset population and a view of exposed, unsupported and excluded systems, not just a favourable fleet percentage."
published: true
---

A patch dashboard can improve while an important system becomes less secure. The dashboard may be accurate about the devices it manages and silent about a public-facing appliance, an acquired business or a server whose agent stopped reporting.

Before celebrating the percentage, ask what is in the denominator. A coverage problem disguised as a patching success is particularly unhelpful to a CIO because it directs attention towards already visible work and away from systems with no dependable owner.

## Reconcile the population before interpreting compliance

Start with several views of the environment. The device management platform, vulnerability scanner, cloud inventory and service register may each see different assets. Supplier-managed systems may need a separate evidence request. Reconcile the differences rather than assuming one tool is authoritative for every category.

Give missing assets a status. Unknown, unmanaged and not recently observed should not silently become compliant or disappear from the report. Explain whether an asset has been retired, is temporarily offline or requires investigation. The person reviewing the dashboard should be able to distinguish those cases.

ASD's Essential Eight model includes asset discovery and vulnerability scanning within its patching requirements. That relationship is useful: patch management depends on knowing the assets and identifying missing updates, rather than counting installation jobs alone.

Define freshness as well. A successful result from a device that has not reported since a major change says less about its current condition. Set reporting expectations appropriate to the asset and label stale evidence clearly. This is especially important for laptops that spend long periods away from managed networks.

## Put exposed services in their own view

An aggregate rate treats many assets as interchangeable. For prioritisation, they are not. A missing update on an internet-facing service can warrant a different response from a routine workstation update, depending on the vulnerability and circumstances.

ASD's model distinguishes categories of systems and urgency based on factors including criticality and the existence of working exploits. Use the applicable model requirements and current vendor advice when setting response targets. Do not replace them with one convenient monthly deadline for everything.

The executive report does not need exploit details. It needs to identify the service, the relevant exposure, the response owner and the next decision. Where the patch cannot yet be applied, state the temporary mitigation and its limitations. A control that narrows access may reduce exposure without fixing the underlying vulnerability.

Keep unsupported systems visible as a separate issue. They may not receive a patch that resolves the problem. A replacement, removal or changed architecture decision can therefore be necessary. Reporting no outstanding updates from the management tool can be misleading if the vendor has stopped supporting the product altogether.

## Follow one awkward system through the process

Consider a hypothetical food distributor. Most corporate laptops report successfully through its management platform. A warehouse application runs on a supplier-managed server outside that platform, and an external support connection is available when the vendor needs it.

The first useful action is to establish ownership and verified facts. Ask the vendor for the system version, support status, patch arrangements and a description of the support access. Validate what can be checked through authorised discovery and review. Do not assume the server is either safe or compromised because it is absent from the dashboard.

Suppose an update is available but the application requires a compatibility check. Operations must help choose a test window and an acceptable temporary arrangement. The vendor needs a delivery commitment. IT must define rollback and validation. This is coordinated service work, not a reason to exclude the server indefinitely from the patch measure.

The report should show the dependency and decision: application testing is pending, the operational owner has agreed a window, and the temporary access restriction has been verified. If the window slips, that change deserves attention. A large batch of successful laptop updates should not obscure it.

[Handling security exceptions with an expiry date](/blog/handling-security-exceptions-with-an-expiry-date) provides a practical structure for this kind of delay without pretending the vulnerability has disappeared.

## Measure closure, including the systems that resist it

A patch deployment event is not always the final evidence. Confirm the update is installed and effective through supported checks, including any required restart or vendor validation. Where a mitigation is used instead, describe the claim narrowly and retain the outstanding remediation work.

Show outstanding items by exposure and age, and identify those waiting for a business or supplier decision. Include assets with unknown patch status. It is better to report an uncomfortable coverage gap than present a precision the evidence does not support.

Review recurring failures separately from urgent vulnerabilities. Repeated installation failures may need engineering work; repeated postponements may need leadership intervention. The response should match the cause. Sending another reminder to the same queue will not resolve an application dependency or an unavailable maintenance window.

A useful dashboard allows a leader to ask what changed for an important service. [A security dashboard that shows the uncomfortable gaps](/blog/a-security-dashboard-that-shows-the-uncomfortable-gaps) extends that discipline across other controls. Patch compliance then becomes evidence about maintained systems and visible exceptions, rather than a reassuring percentage with an unknown boundary.
