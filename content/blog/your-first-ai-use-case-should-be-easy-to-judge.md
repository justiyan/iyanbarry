---
title: "Your first AI use case should be easy to judge"
date: "2026-09-18"
retrospectiveDate: "2026-07-10"
summary: "Choose a first AI task with an observable finish, a credible reviewer and mistakes you can contain before funding a broad assistant."
tags: ["AI", "Governance"]
published: true
---

A first AI project should teach the organisation how to recognise good work. That is a more useful ambition than proving that a model can produce an impressive answer.

I would start with a task whose result someone can judge without another research project. Extracting specified fields from an approved document, finding the current procedure for a known situation, or preparing a draft against a supplied brief are plausible candidates. None is automatically safe or worthwhile. They do, however, let the team describe what completion means.

A broad company chatbot asks the team to solve many different problems at once. Some questions require search, others arithmetic, interpretation, access decisions or information that the organisation has never recorded. A fluent response can conceal which problem was attempted.

## Choose the finish before the interface

Write the task as a small contract. Identify the input, the permitted information, the expected output and who accepts it. Include an explicit boundary around what the system does next.

For a hypothetical document assistant, the contract might be: given an approved agreement, extract the renewal date and notice period, show the supporting passages, and flag ambiguity for review. The assistant does not decide whether to renew, notify the supplier or update the contract register. Those remain separate actions.

That contract makes disagreement visible. If the agreement has an amendment, the extraction must account for it or decline to settle the date. A polished summary that ignores the amendment fails, even if every sentence sounds professional.

Before buying software, ask a knowledgeable employee to complete several examples manually. If they cannot agree on the answer, the pilot may first need clearer records or business rules. AI should not quietly settle an unresolved policy disagreement.

The same exercise can reveal that a form, search improvement or ordinary rule would do the job. I would welcome that outcome. The objective is better work, not a compulsory model call.

## Make the reviewer part of the design

An easy task to describe can still be expensive to check. A summary of a long report takes seconds to generate but may require someone to reread the report to verify omitted qualifications. That review effort belongs in the use-case decision.

Prefer outputs that expose their evidence. A field beside its source passage is easier to inspect than a confident paragraph with a link to an entire document. Preserve the relevant version and location so that the reviewer is not hunting through a file that has changed.

Ask reviewers what would make them reject the output. A missing date, a substituted entity, or a statement unsupported by the supplied material should produce different feedback from a stylistic preference. Otherwise the pilot accumulates comments without learning which defects matter.

Give the reviewer time and authority to reject. If the business expects instant approval of every result, it has not funded a review process. It has added a ceremonial click.

## Include the cases that make a demo uncomfortable

OpenAI's evaluation guidance recommends task-specific tests, representative inputs and human calibration of automated scoring. Those principles are useful regardless of which provider supplies the model. They do not require adopting a particular evaluation service.

For the hypothetical agreement task, I would include a clean document, an amendment, a poor scan, a missing page and a document with no renewal clause. The correct behaviour differs across them. An accurate refusal on the missing-page case is more useful than an invented date.

Keep a record of the expected behaviour before testing. Do not rewrite the standard after seeing what the model produced. Where reasonable reviewers disagree, record that ambiguity rather than forcing a false ground truth.

A small initial set is useful for finding obvious failures, but it cannot establish that rare problems are absent. Expand it with actual permitted work as the pilot progresses, separating development examples from cases reserved for an independent check. The detailed mechanics belong in [building an evaluation set that reflects the work](/blog/an-ai-evaluation-set-that-reflects-the-work).

## Contain the cost of being wrong

Choose a first task with a reversible output and an existing fallback. A draft someone can discard is usually easier to contain than an automated external instruction. Read-only access also reduces what a faulty workflow can change, although it does not remove the risk of disclosing information.

Define what the assistant may see. The fact that a document is useful for evaluation does not give a project team permission to upload it anywhere. Check the application host, model processor, logging and retention arrangements before using sensitive examples.

Set a stop condition that an operator can recognise. For instance, any disclosure across an access boundary might pause the pilot immediately, while a formatting defect might enter the normal improvement queue. Those are proposed operating rules, not universal thresholds.

Maintain the manual route throughout the experiment. If the pilot depends on removing it to demonstrate adoption, the organisation cannot distinguish genuine usefulness from lack of choice.

## Decide what the pilot has earned

At the end, review completed work rather than enthusiastic screenshots. Compare the effort to prepare inputs, inspect outputs, correct mistakes and finish the task. Ask whether the result helped the person who owns the work, not merely the team demonstrating the tool.

A useful decision can be to expand, narrow, redesign or stop. Expansion should name the additional task or population and the evidence still needed. It should not turn a bounded extraction pilot into permission to answer every business question.

I would write the next funding request around the uncertainty removed: we now understand the review burden, the difficult document types and the conditions under which the assistant must hand work back. That is a firmer basis for investment than counting how many prompts people sent.
