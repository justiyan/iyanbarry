---
title: "Handing a project to support without handing over a mystery"
date: "2026-06-18"
updated: "2026-09-18"
tags: ["Delivery", "Leadership"]
summary: "A support handover needs usable operating notes, a rehearsal and explicit acceptance of limitations and ongoing workload."
published: true
---

A folder of project documents can contain almost everything except the answer a support analyst needs. The architecture is described, the meeting minutes are complete and the delivery milestones are signed off. Nobody can explain what to do when a scheduled job stops halfway through.

I would treat handover as acceptance into service, with an operator demonstrating that the material is usable. Sending documents is one step in that process. It is not the acceptance decision.

## Write for the first person called

Start with the questions support will face. What does the service do? Who uses it? How does a failure affect their work? Which symptoms can support investigate, and which need immediate escalation?

For a fictional overnight reporting service, the runbook should explain when outputs are expected, where the operator checks job state and how to distinguish a late source file from a failed transformation. It should identify the business contact who can decide whether a partial report is usable.

Put the common actions near the front. Link to deeper technical material rather than forcing a responder to read the whole design before checking a fault. Use the names and interfaces the operator will see, and show where those names may differ between environments.

A minimal runbook should cover service ownership, dependencies, common symptoms, diagnostic steps, permitted recovery actions and escalation. It also needs routine tasks, such as certificate or credential renewal, with an owner and schedule. Where automation handles those tasks, explain how a failure becomes visible.

Do not put passwords or private keys in the runbook. Reference the approved access process and test that the intended operator can use it. An emergency procedure that depends on asking the absent developer for a secret is not ready.

## Rehearse without the author driving

Give a support representative a plausible scenario and let them use the material. The delivery specialist can observe, but should avoid narrating the answer. Every missing step or ambiguous instruction is useful feedback.

The reporting-service exercise might begin with a missing output. The operator should locate the failed stage, identify whether retrying is safe and know when to involve the source-system owner. If a retry can duplicate records, the runbook must say how that risk is checked.

Use a safe environment or a controlled simulation. A handover rehearsal should not create an avoidable production incident. Record which parts were demonstrated and which were only discussed, so the acceptance decision reflects the strength of the evidence.

Test access during the exercise. Check the monitoring view, ticket route, supplier portal and any controlled diagnostic tools. A screenshot of an administrator's dashboard does not establish that support has the permissions needed to investigate.

Include the person covering for the primary operator where practical. A service that only one person can support has a capacity and continuity dependency. That dependency may be acceptable temporarily, but it should not be hidden in the handover signature.

## Expose limitations and the work they create

Known limitations need more than a list of defects. Describe the affected task, the trigger, the workaround and the effort required. State who owns the permanent correction and when the workaround will be reviewed.

If the reporting service requires manual reconciliation after a particular source failure, the support owner needs to know how often that might occur and what expertise it needs. Where frequency is unknown, say so and arrange an observation period. Do not turn uncertainty into a small fixed allowance merely to make the support estimate fit.

Separate product defects from unresolved business decisions. Support should not be asked to decide which conflicting source record is authoritative unless that authority has been explicitly assigned. Escalation should reach someone able to make the decision.

This is also a chance to remove unnecessary support demand. A clearer error message or a safe retry mechanism may be cheaper than a permanent manual workaround. The delivery team should consider those changes before handing responsibility to another queue.

The broader [launch-readiness review](/blog/the-operational-work-hidden-inside-a-launch-date) should include the same limitations. A risk should not be accepted in one meeting and omitted from the team expected to manage it.

## Transfer responsibility with conditions

Agree when the support team becomes responsible and what the delivery team will continue to provide. A defined stabilisation period can help, particularly when the service has not yet encountered ordinary production demand. Describe its duration, coverage and exit conditions.

The support owner should be able to accept, accept with conditions or decline the handover. Conditions might include a missing escalation agreement, a required access change or further rehearsal of a recovery action. Assign dates and owners rather than accepting a general promise to finish documentation later.

Do not use the signature to transfer every unresolved project issue. Commercial disputes, design decisions and missing business ownership may need to remain with the project sponsor. Support acceptance is a judgement about operability and capacity, not a substitute for project closure.

After real incidents occur, update the runbook with what operators learned. Give the document a current owner and make it part of the change process. When a release alters recovery or monitoring, the instructions should change with it.

A successful handover leaves an operator able to explain the service, investigate a likely fault and reach the right decision-maker. That is a more useful test than the number of documents stored in the project folder.
