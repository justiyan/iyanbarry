---
title: "The operational work hidden inside a launch date"
date: "2026-05-16"
updated: "2026-09-18"
tags: ["Delivery", "Leadership"]
summary: "A readiness review should test access, failure detection, recovery and support ownership, not just whether the release is finished."
published: true
---

The launch date on a project plan is usually a single milestone. The work inside it is spread across people who may never attend the project meeting: service desk staff, identity administrators, business managers and the supplier's support team.

A release can be technically complete while that work remains unfinished. I would make operational readiness a separate conversation, with evidence of what happens after users arrive and the delivery team moves on.

## Follow one transaction through the service

Begin with an ordinary task and trace it beyond the screen. In a fictional maintenance request service, a staff member submits a problem, a coordinator assigns it and an external contractor receives an instruction. A successful page response proves little if the contractor never receives the job.

Identify the dependencies along that route. Include identity, data exchange, notifications and the systems people use to reconcile the work. For each dependency, ask who detects a failure and who can act. An integration owned by everyone will be difficult to restore under pressure.

Check the real access model. Test ordinary accounts, administrators and people who should be denied access. Confirm how access is granted, reviewed and removed. A launch supported by a developer's personal account has an unresolved dependency even if every demonstration works.

The review should also cover the staff who cannot use the new route. A temporary alternative may be necessary, but give it an owner and reconcile its records with the main service. Otherwise the organisation launches two competing versions of the same process.

## Make failure visible to somebody available

Monitoring needs to reflect the task. A server responding does not establish that a request reached the contractor. Choose signals that show where work is delayed or lost, and set thresholds appropriate to the service's operating hours.

For each alert, establish the recipient, expected response and escalation if nobody acknowledges it. Test that route. Sending a message to a group address is not evidence that someone has accepted responsibility for it.

Not every problem deserves an overnight call. A non-urgent reporting delay might wait until business hours. A time-sensitive operational failure may need a different arrangement. The service owner should approve that distinction and fund the coverage it requires.

Support staff also need enough context to separate a service fault from an individual request. Give them a way to check known issues and transaction state without broad access to sensitive content. Logging everything can create its own exposure; choose the diagnostic detail the task needs and control access to it.

## Rehearse recovery rather than naming a backup

A backup entry in a checklist is only the start of the conversation. Ask which information is covered, how it can be restored and what would remain missing after recovery. Include configuration and the credentials or keys required to use restored data, while keeping secrets out of general operating notes.

Rehearse an appropriate restore in a safe environment. Record the version, starting conditions and result. The business owner needs to understand the likely interruption and any reconciliation work, not simply hear that a backup job ran successfully.

Recovery can also involve an external service the team cannot restore itself. In that case, establish the supplier route, available workaround and the limits of the supplier's commitment. Do not promise a recovery time solely because an internal team has a target.

For launches that replace an existing process, [cutover reversibility](/blog/planning-a-cutover-people-can-reverse) deserves explicit attention. Once new transactions exist, switching software back may leave the organisation with unresolved records in two places.

## Give support a service they can accept

I would ask the support owner to review readiness before the final week. They need the common failure modes, escalation contacts, routine maintenance tasks and known limitations. They also need permission to challenge a support model that exceeds their capacity.

A practical readiness discussion should leave clear answers to these questions:

- Who owns the business outcome and who owns technical operation?
- Which faults can support resolve, and which require the supplier?
- What can be paused safely if the service behaves unexpectedly?
- Which recurring tasks need scheduled capacity?
- Where are unresolved risks recorded, and who has accepted them?

A large document is optional. Answers available to the people responding are not. Test the handover by asking an intended operator to work through a plausible failure without the developer narrating every step.

## Make the launch decision reflect the gaps

Some open items can reasonably follow launch. Others should change its scope or date. A missing cosmetic improvement is different from having no owner for failed transactions. Evaluate the consequence, workaround and duration of each exception.

A smaller release can be a sensible choice. The fictional maintenance service might begin with one request category while the team verifies contractor notifications. That decision needs a boundary and an observation plan, rather than a vague promise to monitor closely.

Record who authorises launch and what conditions they are accepting. Book a short review after real use begins, when the team can compare assumptions with support demand. Keep the delivery specialists available for a defined stabilisation period, without pretending they are permanent support.

The operational work should remain visible in the project budget and schedule. If it only appears after the launch date, the organisation has still paid for it; it has simply transferred the cost to people who did not get to plan their time.
