---
title: "Writing acceptance criteria before the supplier starts building"
date: "2026-05-09"
updated: "2026-09-18"
tags: ["Delivery", "Leadership"]
summary: "Turn supplier expectations into observable tests, including failed inputs, access boundaries and the work needed to run the service."
published: true
---

A supplier can demonstrate every screen in a proposal and still deliver something the organisation cannot use. A form submits, a dashboard looks right and an email arrives. The gaps appear when the approver is absent, a record is duplicated or support needs to explain what happened.

Acceptance criteria should expose those gaps before the supplier starts building. They are a shared description of the result the organisation is buying, including the conditions under which that result has to work.

## Describe an outcome someone can observe

"The system must be user friendly" gives a supplier very little to implement and an acceptance team very little to test. Describe the task, the role doing it, the relevant starting conditions and the evidence of completion.

For a fictional expense workflow, a useful criterion might say that an authorised approver can return a submitted claim with a reason, the claimant can see that reason, and the original submission remains available in the record. The test can then examine each part without needing to guess what "flexible approval" means.

Avoid specifying every interface detail unless that detail matters. A supplier should have room to propose a simpler interaction. Acceptance criteria can constrain the outcome without turning the buyer into the designer of every button. Where accessibility, compatibility or timing matters, make the required environment and assessment method explicit.

I would also separate must-have conditions from preferences. A preference should not become a surprise rejection at the end. Equally, a mandatory control should not disappear into a weighted score where attractive features compensate for its absence.

## Write the awkward cases beside the ordinary ones

For each important task, ask what happens when it cannot complete. A rejected claim, unavailable integration and expired session are different situations. Each needs an understandable state and an agreed next action.

A small acceptance set for that expense workflow could include:

- A person outside the approval group cannot approve a claim through the interface or a direct request.
- A repeated submission does not silently create a second payment instruction.
- An attachment the service cannot accept produces a useful message and preserves the other entered information where appropriate.
- A failed downstream transfer is visible to the responsible operator and can be investigated without guessing.
- A changed approver does not leave existing claims permanently assigned to an inactive account.

The expected behaviour belongs in the criteria, not just the test script. Otherwise a discovered failure becomes an argument about whether anyone requested its handling. [Awkward user acceptance cases](/blog/why-user-acceptance-testing-should-include-the-awkward-cases) deserve planning time of their own.

Use safe test data. A realistic scenario does not require copying confidential records into an environment whose access and retention arrangements have not been reviewed.

## Include the service around the software

The contract may focus on software delivery while the organisation expects a working service. Make the boundary explicit. Who creates accounts, monitors failures and restores information? What does the supplier hand over, and what remains the buyer's responsibility?

Acceptance might require an operating guide, an agreed support escalation path, configuration records and a rehearsal of a common recovery action. These are deliverables that can be checked. "Full documentation provided" is less useful than naming the questions that documentation must answer.

Be careful with performance conditions. "Fast" is not a test. Specify the relevant task, test environment, representative workload and the measurement method. Agree acceptable results with the business rather than borrowing an impressive number from another service. A batch process required before an afternoon meeting has different needs from an interactive screen.

The same applies to availability and recovery. Commitments need a defined service boundary and evidence appropriate to the risk. A one-off demonstration cannot prove months of reliable operation. Some acceptance may therefore be provisional, with a clearly bounded observation period and responsibilities during it.

## Agree evidence and exceptions before delivery

Decide who runs each test and who accepts the result. Supplier test evidence can be useful, but business acceptance needs someone who understands the task. Technical specialists should assess controls outside the business tester's expertise.

Maintain a traceable connection between the criterion, the tested version and the result. A screenshot without starting conditions or a build reference is weak evidence when the product changes. Capture enough to repeat the test without producing a paperwork exercise larger than the delivery itself.

Defects need a decision rule. A cosmetic issue might be accepted with a correction date. An unresolved access failure may prevent launch. Record who can accept residual risk, what workaround is permitted and when the exception expires. Commercial acceptance, payment and permission to operate are not automatically the same decision; check how the agreement treats each.

I would review a draft of these criteria with the supplier early enough to change the scope or price honestly. If the supplier cannot meet a condition, finding that out before build is useful. It allows a different solution or a smaller commitment.

The final acceptance meeting should not be the first time either side learns what success means. It should review evidence against a description both sides have already used to guide the work.
