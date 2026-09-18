---
title: "A tabletop exercise that tests decisions rather than memory"
date: "2026-09-18"
retrospectiveDate: "2026-01-02"
tags: ["Cybersecurity", "Governance"]
summary: "A useful cyber tabletop gives leaders incomplete information and tests their authority, trade-offs and follow-through, rather than their recall of the plan."
published: true
---

Nobody should need to memorise an incident plan to pass an exercise. During a real event, people should use the plan, contact advisers and ask for information. A tabletop that rewards instant answers can therefore test the wrong behaviour.

I would design the exercise around decisions that are difficult even when the document is open. Whether to stop an important service. Who can approve emergency spending. What to tell staff when the investigation is incomplete. Those decisions reveal whether the organisation can coordinate a response, rather than whether its leaders remember the right terminology.

## Set a decision objective and protect the exercise

Choose a small number of decisions to test. A first exercise might focus on containment authority and communication when corporate email is unavailable. Save a full technical recovery rehearsal for a separately planned activity. Too many objectives make it difficult to identify what the exercise demonstrated.

Use a facilitator who can keep discussion moving without supplying the answers. Assign a recorder and agree what evidence to capture: who decided, what information they used, what they needed and what remained unresolved. Invite the people who hold the relevant authority, including an operational leader and appropriate supplier representatives.

State the safety boundaries. This is a discussion exercise with hypothetical information, not permission to disable systems, contact customers or run intrusive tests. Mark exercise material clearly and keep sensitive architecture or personal information out of broadly circulated packs. Agree a stop process if an actual incident occurs during the session.

NIST's framework treats improvement from tests and exercises as part of cybersecurity management. That is the point of the session. It should generate specific changes to capability, not merely evidence that an annual meeting took place.

## Introduce uncertainty in manageable stages

Consider this hypothetical scenario. A service provider reports suspicious administrative activity affecting a document system. Some staff cannot access files. There is no confirmed explanation yet, and the provider recommends temporarily restricting access while it investigates.

Ask participants to make the containment decision. They may ask for more information, but the facilitator should record which information is necessary and who could obtain it. If nobody knows whether the provider already has authority to act, that is an exercise finding. Do not rescue the group by inventing an approval that the plan does not contain.

A second inject says the main executive approver cannot be reached and a business team needs documents for an imminent customer obligation. Now the group must use its delegation arrangement and consider a safe alternative. The exercise should explore the consequences of continuing and stopping, without pretending there is always one obvious answer.

A later inject reports that a supplier is investigating possible unauthorised data access. Ask who engages privacy and legal advisers, how facts will be preserved and who approves internal communication. Avoid turning the discussion into an amateur legal quiz. The correct operational behaviour may be to seek qualified advice while maintaining a record of the known facts.

The facilitator should keep known facts, assumptions and new information distinct. Otherwise participants can unconsciously rewrite the scenario until their preferred decision looks correct.

## Observe the process rather than award points

Listen for phrases such as someone would call the insurer or IT would restore it. Ask which person, using which contact route and under what authority. General statements are not necessarily wrong, but they often conceal an untested dependency.

Record delays and disagreements without using them to embarrass people. A disagreement between operations and security may be evidence that a genuine trade-off has finally become visible. The question is whether the organisation can resolve it through an authorised process with enough information.

Do not treat confidence as competence. A participant who pauses to confirm the policy may be making a better decision than someone who confidently states an incorrect rule. Allow use of runbooks and advisers, then observe whether those resources are accessible and useful.

Capture proposed communications as short drafts. Ask whether they distinguish confirmed facts from uncertainty, give staff a usable action and avoid unsupported assurances. A message saying that everything is secure may sound calming while contradicting the scenario. Have the appropriate communications and legal roles discuss how that draft would be reviewed.

[Preparing for a cyber incident before anyone is on call](/blog/preparing-for-a-cyber-incident-before-anyone-is-on-call) covers many of the arrangements this exercise is likely to test. Finding a gap in them is a useful result.

## Close with a repair plan and a limited claim

Hold a short review while the decisions are fresh. Separate unclear documents from missing authority, inadequate resources and technical dependencies. Rewriting the plan will not fix an executive who has no deputy or a supplier contract that provides no after-hours response.

Give each finding an owner, an action and evidence of completion. A missing contact route closes when the route has been confirmed and exercised, not when a number is typed into a document. A recovery uncertainty may require a technical test, using the approach in [testing backups by restoring the service](/blog/testing-backups-by-restoring-the-service).

Schedule a focused repeat of the failed decisions after the changes. The report should say what the tabletop tested and what it did not. Discussion of restoration is not evidence of restoration, and a successful communication exercise is not proof that every legal obligation will be met. Those boundaries make the exercise report more credible, not less useful.
