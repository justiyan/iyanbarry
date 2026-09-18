---
title: "A security dashboard that shows the uncomfortable gaps"
date: "2026-09-18"
retrospectiveDate: "2026-02-09"
tags: ["Cybersecurity", "Governance"]
summary: "Report security coverage, stale evidence and unresolved service risks in a way that tells management where it must decide or intervene."
published: true
---

A dashboard covered in green can leave a director with almost no useful information. Controls may be green because the tool sees only managed devices, because exceptions are excluded or because the measure records configuration rather than operation.

I would rather present a smaller dashboard that makes uncertainty visible. It should tell management what has been demonstrated, what remains unknown and which decisions need attention. That requires disciplined definitions more than sophisticated visualisation.

## Show the population behind the measure

Every coverage claim needs a denominator and a scope. MFA coverage of employee accounts is not the same as coverage of all interactive accounts. Patch status for managed laptops is not patch status for every system supporting the business.

State how the population was assembled and when it was reconciled. Include supplier-managed assets and separately administered applications where relevant. If the organisation cannot yet establish the population, label the measure incomplete rather than displaying a precise percentage with a footnote nobody will read.

Separate missing evidence from known failure. An offline device with stale reporting is not necessarily non-compliant, but it is not currently verified either. Those distinctions lead to different actions: reconnect and assess, repair a confirmed problem or investigate an unknown asset.

ASD's Essential Eight model links asset discovery and vulnerability scanning with patching. NIST's framework also includes managing inventories and evaluating cybersecurity performance. These are useful foundations for reporting that shows how well the organisation understands its own coverage.

## Use a service as the unit of explanation

Consider a hypothetical multi-site retailer whose board report shows strong device patching and a successful backup schedule. Its point-of-sale integration is supplier-managed, and restoration of the central stock service has not been demonstrated. The favourable measures do not answer whether the retailer could recover a coherent trading operation.

A more useful dashboard gives that service a short entry. It identifies the business owner, relevant control coverage, recovery evidence and unresolved supplier dependency. It states the next action and whether management needs to approve spending or a maintenance window.

Do not manufacture an overall score by combining unrelated indicators. A mature authentication control cannot mathematically cancel an untested recovery dependency. The measures can sit together without pretending they describe one common unit of risk.

The distinction in [Essential Eight maturity is not a security score](/blog/essential-eight-maturity-is-not-a-security-score) is important here. Framework assessment can inform the report, but its scope and meaning should remain intact.

## Distinguish availability, operation and evidence

A security feature can be licensed, configured and still not operating across its intended scope. Use separate language for those stages. Available is a procurement fact; configured is an implementation claim; verified across the agreed population is a stronger, bounded assurance claim.

For backups, show the service restoration evidence and its limitations, not just job completion. For privileged access, show whether relevant access has been reviewed and exceptions remain. For incidents, report whether the response route has been exercised and what failed. Each measure should refer to something someone can inspect.

Include evidence age. A recovery test before a major application change may remain useful historical information, but it does not fully describe the changed service. Identify changes that invalidate or limit previous assurance, and schedule the necessary verification.

Avoid presenting every control as a daily trend. Some evidence is event-based or periodic. A dashboard should not imply continuous verification where the organisation performs a quarterly review or a scoped annual assessment.

## Make overdue decisions visible without creating blame theatre

List material exceptions with their owner, approval status and next review. Distinguish an approved temporary arrangement from an unapproved gap. Show what is preventing closure: technical work, vendor action, funding or an unresolved business decision.

An overdue item deserves explanation, but age alone does not describe exposure. A newly discovered weakness on an exposed service may need attention before an older low-impact housekeeping item. Use age alongside context and technical advice.

Report repeated deferrals as a pattern. If an application owner repeatedly postpones maintenance because the business cannot tolerate downtime, leadership needs to choose a different operating arrangement or fund a technical improvement. Sending more reminders is not a strategy.

[Why patch compliance can hide the systems that matter](/blog/why-patch-compliance-can-hide-the-systems-that-matter) provides a detailed example of reporting that connects technical work with those decisions.

## End the report with an action the reader can take

For each material issue, state whether the report seeks approval, escalation or acknowledgement of a defined residual risk. Give the alternatives and the consequence of waiting. If no decision is required, say what management is monitoring and when it will return.

Keep a traceable route from the dashboard to restricted supporting evidence. Directors do not need raw logs or sensitive account lists, but the team should be able to substantiate the headline without launching a new investigation every month.

Review whether the measures are useful. A metric that stays green while significant exceptions accumulate needs redesign. A metric that moves only because the denominator changed needs an explanation. Neither should be treated as a simple improvement or deterioration in security.

A good dashboard will sometimes look less reassuring after its definitions improve. That can be progress in the quality of management information, not evidence that the systems suddenly became worse. Explain the change and give the reader a clear decision to make with the better information.
