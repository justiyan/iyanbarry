---
title: "Turning penetration-test findings into accountable work"
date: "2026-02-06"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "A penetration-test report creates work only when findings have owners, scoped fixes and independent closure evidence. Severity alone is not a delivery plan."
published: true
---

The penetration test is finished. The report contains serious findings, management has acknowledged it, and a ticket has been created for each item. That looks like progress until the tickets begin circulating between infrastructure, applications and the supplier.

A finding describes a weakness. It rarely arrives with all the decisions needed to remove that weakness safely. The CIO's job is to turn the report into accountable work without losing the technical meaning, understating urgent exposure or claiming that a ticket closure proves remediation.

## Clarify the finding before allocating the fix

Arrange a readout with the testers and relevant service owners. Confirm the affected assets, the observed conditions and the scope of the test. Distinguish what was demonstrated from what the report identifies as a possible consequence. Keep sensitive evidence in a restricted location.

NIST's framework calls for vulnerabilities to be identified, validated and recorded, and for risk responses to be prioritised and tracked. That supports a short validation step before delivery planning. It does not justify delaying an urgent protective action while everyone seeks perfect certainty.

Ask the testers to clarify ambiguous recommendations. Upgrade the system may be insufficient when the cause includes permissions, deployment configuration or a supplier dependency. The organisation needs to understand what condition must change and how the result will be checked.

Also record what the test did not cover. A time-bounded assessment of one environment is not assurance about every system or every future change. Preserve those limits in the executive summary, particularly if the report will support a customer assurance response.

## Give each item a service owner and a delivery owner

The service owner is accountable for the business decision, including downtime and residual exposure. The delivery owner coordinates the change. They may be different people. A supplier can perform the work, but the organisation still needs someone responsible for obtaining and accepting the result.

Group findings where a common cause requires one coherent fix. Several permission issues may reflect a poorly designed role model. Closing each ticket independently could produce inconsistent permissions and repeated rework. Keep the individual evidence traceable while planning the shared remediation.

Do not let severity become the only scheduling rule. Consider current exposure, affected information, available mitigations and the consequences of waiting. Use qualified technical advice for urgent findings. An actively relevant, exposed weakness may require immediate containment while a permanent repair is prepared.

[Starting a cyber uplift when the list is longer than the budget](/blog/starting-a-cyber-uplift-when-the-list-is-longer-than-the-budget) describes how to make those trade-offs explicit without inventing precise loss estimates.

## Work a finding through to a decision

Consider a hypothetical membership service with a finding that one role can access records beyond its intended business purpose. The application supplier proposes a configuration change. The business owner worries that the change could stop staff handling legitimate enquiries.

The remediation task needs more than install the supplier fix. Define the intended role boundaries with the business owner, test representative permitted actions and ask the supplier to demonstrate the restricted cases safely. Use authorised test accounts and data. Production testing requires an agreed scope and safeguards; a report is not permission for uncontrolled experimentation.

If a safe temporary restriction is available, document it while the permanent change is prepared. Explain the remaining risk and the operational consequences. If the restriction cannot be implemented without material disruption, escalate the decision to the appropriate authority rather than allowing the ticket to age silently.

A deadline should reflect the exposure and the work required. Where a committed date is missed, report the changed position and the next decision. A revised date without a reason or mitigation is not an adequate response to a serious finding.

## Define the evidence that closes the finding

Agree the retest approach with the tester or another suitably qualified reviewer. The closure check should address the original condition and relevant paths, not merely confirm that a vendor patch number has changed. Keep testing defensive, authorised and bounded.

Business acceptance matters alongside security validation. The system should still support the intended legitimate tasks. If a fix works only by disabling an essential service permanently, management needs to understand that as an operating decision rather than a successful invisible repair.

Record the result and any residual limitation. A partially fixed issue should remain visible under an accurate status. Where management accepts a remaining exception, use an appropriate approval and review process, such as the approach in [handling security exceptions with an expiry date](/blog/handling-security-exceptions-with-an-expiry-date).

## Use recurrence to improve the way systems change

After immediate work is under control, look for patterns. Repeated permission findings may justify better role design and access review. Repeated configuration weaknesses may point to deployment practices or unclear supplier responsibilities. The follow-up should improve the process that produces the system, not just remove this report's examples.

Report findings with their current exposure, owner, planned action and validation status. Separate awaiting implementation from awaiting retest. Both are unfinished, but they need different intervention.

The final management claim should be modest and precise: these findings were remediated and checked within this scope; these remain under action or authorised exception. That is useful assurance. A statement that the organisation passed a penetration test usually hides more than it explains.
