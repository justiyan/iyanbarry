---
title: "The difference between a risk register and risk ownership"
date: "2026-09-18"
retrospectiveDate: "2025-10-24"
summary: "Risk ownership requires authority to accept the remaining exposure, evidence to review that choice and a response when agreed actions expire."
tags: ["Leadership", "Strategy"]
published: true
---

A risk register can be up to date while the decisions behind it are not. Every row may have a name, a colour and an action, yet nobody can explain who agreed to live with the exposure while the action remains unfinished.

That gap is worth examining. The person maintaining the spreadsheet may not control the budget. The engineer implementing a control may not have authority to accept the business consequence if it fails.

I would separate those responsibilities explicitly. A register is a record that supports decisions. It cannot make or authorise them.

## Write a risk someone can take responsibility for

A useful risk statement connects a cause or condition to an event and a consequence. "Old server" is an asset description. It does not explain what might happen or why the organisation should care.

In a fictional example, an application depends on equipment that cannot be restored within the service's agreed tolerance. A failure could leave staff unable to process time-sensitive transactions before the business deadline. That is a problem a business owner can understand and discuss.

Check the evidence behind the statement. An untested restore time is not the same as a demonstrated failure to restore. Both may warrant action, but the uncertainty should be visible. The wording should not imply confidence the organisation does not have.

Describe existing controls and their limits. Perhaps a manual workaround covers a short interruption but cannot handle a sustained outage. Recording only "manual workaround available" hides the condition under which it stops being adequate.

## Separate control work from acceptance authority

The control owner is responsible for operating or improving a particular safeguard. The risk owner needs authority over the consequence and the response, within the organisation's delegations. An action owner completes a task. These can be different people.

For the fictional application, the infrastructure lead might own the recovery test. The application owner may coordinate the workaround. An authorised executive decides whether the remaining interruption exposure is tolerable while replacement work proceeds.

Name the escalation route if that executive lacks authority for the level of exposure. Do not assume that adding "accepted by management" to a row establishes a valid acceptance. Check the organisation's policy, delegations and any relevant obligations with the appropriate specialists.

Acceptance should explain what is being accepted, for how long and subject to which conditions. It does not excuse neglecting agreed controls. If the acceptance assumes a daily reconciliation, that reconciliation must continue and its failure should trigger review.

NIST's Cybersecurity Framework treats roles, authorities, risk strategy and oversight as governance concerns. I would use that distinction as a prompt to inspect actual decisions, rather than treating a populated register as evidence that governance is complete.

## Decide what evidence will change the position

A scheduled review can become a routine colour check unless the owner knows what information matters. Agree the evidence that would support continued acceptance or require a different response.

For the application example, a recovery exercise might establish whether the service can return within the required period. A test of the manual process might show whether staff can handle the expected work. A changed business deadline could alter the impact even if the technology has not changed.

State the thresholds in terms people can apply. "Escalate if the recovery test cannot complete the agreed transaction sample within the approved window" is more usable than "escalate if resilience deteriorates".

Do not demand false precision. Some likelihood estimates will remain uncertain. The owner can still make a reasoned decision using scenarios, control evidence and the seriousness of the consequence. Record the uncertainty rather than hiding it inside a numerical score.

Where several risks depend on the same person or supplier, review the combined exposure. Individually acceptable items may become harder to tolerate when one event could affect all of them. This is a useful connection to [succession planning for critical knowledge](/blog/a-succession-plan-for-the-person-everyone-depends-on).

## Make expired actions trigger a decision

An overdue treatment action changes the basis of the original acceptance. It should not be handled solely by replacing the due date.

Ask why the action slipped, what remains exposed and whether the temporary arrangements still work. The authorised owner should decide whether to extend the acceptance, add a control, change priorities or stop the affected activity. Record that decision separately from the revised task plan.

Treat expired exceptions the same way. An exception approved for a limited period should not become permanent because nobody scheduled a reminder. Give it a named reviewer and surface it before expiry while there is still time to act.

In the next [board technology report](/blog/writing-a-board-technology-report-that-earns-a-decision), report material changes in exposure and acceptance, not just the count of open risks. A smaller register can still contain a more serious unresolved decision.

A practical test is to choose one material row and ask its named owner to explain the current position without reading the status label. They should know the consequence, the controls being relied on and the event that would require another decision. If they cannot, improve that ownership conversation before spending more time on the register's formatting.
