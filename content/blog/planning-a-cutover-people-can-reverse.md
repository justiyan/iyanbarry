---
title: "Planning a cutover people can reverse"
date: "2026-05-20"
updated: "2026-09-18"
tags: ["Delivery", "Leadership"]
summary: "Rollback becomes difficult when records and external actions diverge. Plan the last safe reversal point before changing production."
published: true
---

"We can roll back" is an incomplete cutover plan. It may mean the old application can be restarted. It may not mean the old application can understand new records, reverse messages already sent or reconstruct transactions accepted during the change.

I would ask a more specific question: what can we reverse, until when, and what work remains afterwards? The answer should shape the cutover sequence and the authority to stop it.

## Separate the software switch from the data change

Some changes are easy to reverse because the old and new versions can use the same data safely. Others alter the meaning or structure of records. A new required field, changed identifier or merged customer record may make a software rollback unsafe without additional work.

Map those constraints before choosing a window. List what will change in configuration, data and external systems. Identify irreversible actions such as notifications or instructions that another organisation may act upon. Reverting an internal flag does not recall an email someone has already read.

In a fictional stock-ordering migration, the new application might accept orders while the old one remains available. Switching users back would not be enough. The team would need to account for every order created during that interval and prevent duplicate fulfilment.

That is a business reconciliation problem as well as a technical recovery problem. The cutover plan needs someone who understands the transaction, not just someone who can redeploy the application.

## Design the point of commitment

A cutover should show when reversal becomes harder. Before enabling writes, the team may be able to return to the old system with little reconciliation. After live activity begins, it may need to pause intake, capture changed records and decide whether reversal or forward repair is safer.

Write that point into the runbook. Include the conditions that must be satisfied before crossing it and the person who authorises the move. Do not bury it halfway through a technical command sequence.

The plan should distinguish a pause from a rollback. Pausing new work can preserve options while the team investigates. It may also create an operational backlog, so the business needs a safe holding process. A pause with no place for incoming work can simply move the failure outside the application.

Compatibility changes can sometimes reduce risk. For example, introducing a field before requiring it may allow old and new versions to coexist temporarily. That approach adds complexity and must be tested; it is not a universal solution for every migration.

## Rehearse with realistic state

A rehearsal using an empty database will not reveal much about record reconciliation. Use approved representative data and test the state transitions that matter: pending work, completed work, failed transfers and changes occurring near the switch.

Time the actual sequence, including validation and decision pauses. Separate active execution from waiting for external systems or people. The maintenance window must accommodate both. Keep enough room to take the fallback route rather than using the entire window on the forward plan.

I would test the following as explicit scenarios:

- The new service fails before any new transactions are accepted.
- A fault appears after transactions have been accepted but before external processing.
- A fault appears after an external party has acted.
- A critical approver or supplier contact is unavailable.
- The fallback works technically but leaves a reconciliation queue.

Record what happened, which assumptions failed and what changed in the plan. A rehearsal that exposes a problem has done useful work. Repeating the unchanged sequence until it looks smooth is less useful than testing the uncertain branch.

## Decide while there is still time to act

Agree stop conditions in advance. They might concern missing records, a failed access check or inability to confirm downstream delivery. Use measures that operators can inspect during the window. "Significant issues" leaves too much interpretation when time is running out.

Give one person authority to coordinate the decision, with the relevant business and technical advice available. Avoid requiring a large committee to assemble during an incident. The authority should be clear about which risks it can accept and which require a higher decision.

Update stakeholders at planned checkpoints. A message should state the current service state, the next decision and the expected next update. Reassurance without operational detail makes it harder for business teams to manage their own work.

This is one reason [launch readiness](/blog/the-operational-work-hidden-inside-a-launch-date) cannot be reduced to code completion. Monitoring, support and decision coverage are part of executing the cutover safely.

## Close the reconciliation, not just the window

After the switch, compare the expected records with what the service processed. Assign discrepancies to an owner and preserve enough evidence to investigate them. Technical availability does not mean the business process is caught up.

Keep the old environment only as long as the agreed recovery and retention needs require. Read-only access may be useful, but it still needs access control, maintenance and a retirement date. Leaving an abandoned production system running indefinitely creates another operating obligation.

A cutover report should say what was changed, which path was taken, what remains unresolved and who owns the next action. If rollback is no longer practical, say so explicitly. The organisation needs an honest picture of its remaining options, not a reassuring phrase carried forward from the first project meeting.
