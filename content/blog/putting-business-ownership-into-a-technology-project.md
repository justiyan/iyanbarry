---
title: "Putting business ownership into a technology project"
date: "2025-12-02"
updated: "2026-09-18"
summary: "Business ownership works when a named owner has authority over process choices, acceptance and adoption without being asked to replace engineering judgement."
tags: ["Leadership", "Strategy"]
published: true
---

Naming a business sponsor on the project cover page does not establish business ownership. The useful test comes when the team needs a process decision and nobody agrees who can make it.

A sponsor may support the investment but have little time for daily choices. A subject-matter expert may know the work well but lack authority to settle disagreements between departments. A project manager may keep the schedule moving without being entitled to choose how the business should operate.

I would make those distinctions explicit before development starts. The project needs a person who can make the relevant business choices, with a route to escalate the ones outside their remit.

## Give the owner decisions, not a ceremonial title

Describe the business owner's authority in terms of actual choices. They may decide which process variations the first release will support, which user groups participate and what evidence is needed for business acceptance.

Agree limits. A change that materially alters cost, policy or another department's work may require a different decision owner. The business owner should know where that boundary sits and how to obtain a timely decision beyond it.

Provide time as well as authority. Ownership added to a full workload can leave the project dependent on meetings that are repeatedly postponed. Ask what existing responsibilities will move and who will provide cover.

The owner need not attend every technical discussion. They need a dependable way to answer business questions and enough understanding to recognise when a proposed shortcut changes the outcome they are responsible for.

## Keep technical authority with the right people

Business ownership does not mean the sponsor selects the database design or approves an unsafe access arrangement. Engineers remain responsible for technical recommendations and for explaining constraints clearly.

The distinction matters in disagreement. A business owner can state that a workflow must support a particular approval rule. The technical team can explain feasible implementation options and their consequences. Neither side should quietly substitute its own decision for the other's.

Consider a fictional project replacing an internal approval process. The business owner decides whether requests can be approved by a delegate during leave. Engineers determine how delegation can be implemented and audited within the chosen platform. Security specialists advise on the access controls needed.

If the desired process cannot be supported safely within the current scope, the issue returns as a business choice: change the process, change the scope or reconsider the platform. Calling it a technical detail would hide a decision that belongs with the owner.

## Test the process with the people who use it

A business owner should bring representative users into the work, including people who handle exceptions. The most senior person in a department is not automatically the best source of detail about how a task is performed.

Use realistic, appropriately protected test cases. For the fictional approval process, include an absent approver, a rejected request and a request changed after submission. Agree the expected result before the demonstration so success is not defined by whatever the software happens to do.

Record unresolved differences. Two teams may use the same term for different rules. The business owner should settle those differences or escalate them rather than asking developers to infer policy from contradictory comments.

The Australian Government's Digital Service Standard includes understanding users and monitoring services. Those are useful design prompts beyond government, although its requirements should not be presented as automatically binding on a private business. For this project, the practical point is to obtain evidence from actual work rather than assume the owner's familiarity covers every user's needs.

## Define acceptance and adoption separately

Technical testing and business acceptance answer related but different questions. A release can pass its technical tests while still failing to support an essential process. Business approval does not, in turn, replace security or engineering checks.

Agree acceptance criteria early enough to influence delivery. Include the required process outcomes, known limitations and who has authority to accept an exception. Avoid reducing acceptance to a signature requested shortly before launch.

Adoption needs its own plan. Decide who communicates the change, provides training and resolves process questions. Specify what old method will be retired and when. If staff can indefinitely choose between old and new arrangements, records and responsibilities may become unclear.

Name the owner of benefits after launch. If the project intends to reduce duplicate entry, someone should inspect whether duplicate entry actually stopped and whether any exceptions remain. A launch announcement cannot establish that outcome.

## Keep ownership after the project closes

The business process will continue to change after the delivery team moves on. Confirm who owns its backlog, service expectations and future process decisions.

Connect that owner with the operating team through clear agreements. Explain how incidents differ from enhancement requests and where recurring problems are reviewed. This is part of [choosing a workable IT operating model](/blog/choosing-an-it-operating-model-for-the-organisation-you-have), not an administrative handover at the end.

A [steering committee](/blog/when-a-steering-committee-stops-steering) can help resolve material choices during delivery, but it should not become the only place ownership exists. The business owner needs to act between meetings and remain identifiable after the committee ends.

Before approving the next project, ask the proposed owner to name the decisions they will make, the time they can provide and the service they will own afterwards. If those answers are unclear, resolve them before treating the project as ready to proceed.
