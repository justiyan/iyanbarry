---
title: "Managing a vendor change that arrives halfway through delivery"
date: "2026-06-25"
updated: "2026-09-18"
tags: ["Delivery", "Leadership"]
summary: "Assess a mid-delivery supplier change across dependencies, terms and service obligations before accepting a quiet concession."
published: true
---

A supplier announces that an interface is changing halfway through delivery. The project team can probably adapt, and everyone wants to protect the date. The danger is agreeing to the technical workaround before understanding the commercial and operational consequences.

I would pause the affected commitment long enough to establish what changed, which assumptions it invalidates and who is authorised to accept the resulting trade-off. That does not mean stopping every part of the project.

## Establish the change from the source

Obtain the supplier's written notice, effective date and migration guidance. Distinguish an announced change from a support representative's suggestion or a roadmap possibility. Record the version and service tier affected, including whether existing customers receive different treatment.

A fictional case might involve a booking platform replacing an integration endpoint before the organisation's planned launch. The replacement requires a different authentication method and removes one field used for reconciliation. The project needs more than a new connection string.

Ask what remains supported during transition and what evidence the supplier can provide. Is there a test environment? Are there known limitations? Can the organisation delay adoption, and under what conditions? Avoid building a plan around an informal promise that the old interface will probably remain available.

Preserve the original assumptions and the new information together. This makes it easier to explain why a previous estimate is no longer reliable without turning the discussion into a dispute about who remembers the first meeting correctly.

## Trace the effect beyond the connector

Map the affected data, tests, access controls and operating procedures. In the fictional booking example, losing a reconciliation field may affect reporting and support even if the connection itself succeeds. A changed authentication model may require a different approval or credential-management process.

Ask each dependency owner to assess the effect on their work. The application team may estimate development, while the business team needs to change reconciliation and the support team needs new diagnostics. Those are part of the change cost.

Review the acceptance criteria. If the new interface cannot meet an agreed outcome, describe the gap explicitly. Do not revise the test to match the new limitation and then report an unchanged pass. The sponsor needs to decide whether the reduced capability is acceptable.

Update the schedule with decision and testing time, not just coding time. A technically small change can wait on commercial clarification or access approval. State the uncertainty and the point at which it threatens another commitment.

Continue unaffected work where it remains useful. A targeted pause can preserve momentum without committing the organisation to a workaround that later proves unsuitable.

## Check the agreement before trading concessions

Bring the contract, statement of work and change provisions to the commercial discussion. Identify what was promised, what the supplier is proposing and what rights or obligations require specialist advice. The project team should not assume that technical necessity determines who pays.

Possible responses include migration assistance, an extended transition period, revised scope, a credit or a different delivery date. Each has consequences. Accepting free development help may still leave the organisation with a higher operating cost or a new dependency.

Keep a record of concessions on both sides. If the organisation agrees to a reduced feature set to retain the launch date, name the reduction and the owner accepting it. If the supplier offers temporary support, record when that support ends and what happens next.

Be careful with urgency. A deadline can create pressure to approve terms informally. Where work must begin before the full position is resolved, agree a bounded interim authorisation with commercial advice. State what it permits and what remains undecided.

This is the sort of event a [project kickoff should prepare for](/blog/a-project-kickoff-should-settle-what-happens-when-things-change). Decision rights and change boundaries are easier to use when they were agreed before a supplier deadline arrived.

## Choose an option that can be operated

Present the sponsor with credible alternatives. Adapting immediately may preserve the supplier relationship but add risk to the launch. Deferring might require a temporary manual process. Replacing the component could reduce one dependency while creating another migration task.

For each option, describe the business effect, remaining uncertainty and next irreversible commitment. Avoid a recommendation that hides all disadvantages in the alternatives. The chosen route needs a realistic operating owner and a way to verify that it works.

Retest the affected behaviours and nearby failure cases. A successful connection test does not establish that reconciliation, permission denial and retries remain correct. Update the runbook, monitoring and support training where the change affects them.

Record the decision and the assumptions that would reopen it. If an interim workaround depends on a supplier delivering another feature, give that dependency a review date and fallback. Otherwise a temporary concession can become a permanent design by neglect.

Close the commercial and technical records together. The project should not have one version of scope in the contract folder and another in the delivery backlog. The final record needs to say what the organisation is now buying, what it has accepted and what remains the supplier's responsibility.
