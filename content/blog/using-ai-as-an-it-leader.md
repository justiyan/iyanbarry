---
title: "Using AI as an IT leader without outsourcing your judgement"
date: "2023-11-08"
updated: "2026-09-12"
summary: "Where AI helps with decisions, documents and everyday leadership work, and how to keep checking the parts that matter."
tags: ["AI", "Leadership"]
published: true
---

The AI work I find most useful is often quite ordinary. Getting a rough idea into a shape someone else can understand. Exploring an option I’ve not considered. Looking for a missing assumption before I put a proposal in front of people.

That’s different from asking AI to make the decision. As a leader, I still need to know which facts are reliable, what the organisation is trying to achieve and who will live with the consequences.

I think the useful skill is learning where to put AI in the work, and where to stop and check it. A polished answer can make that boundary harder to see.

## Start with an output you can check

A useful first task has a clear output and a person who can judge it. Reworking a draft, comparing supplied options or turning agreed notes into a proposed action list can fit that description.

An open request to “tell us what our strategy should be” is much harder to evaluate. It invites the model to fill in missing context and gives the reader a large, confident document to untangle.

For a strategy discussion, I’d instead provide a bounded brief: the decision being considered, known constraints, the options already on the table and the points that remain uncertain. Use only information permitted in the chosen service.

Ask for a comparison against explicit criteria. Then review the criteria as well as the answer. A neat comparison can still be misleading if it leaves out the factor that matters most.

## Use it to challenge a proposal, not just improve its wording

A model can make a weak proposal sound convincing. That’s not always helpful.

Before polishing the language, ask it to examine the argument. Which assumptions need evidence? What would make the recommendation wrong? What ongoing work does the proposal create? What is missing from the cost or ownership discussion?

A prompt I’d use is:

> Review this proposal as a critical colleague. Separate facts supplied in the brief from assumptions. Identify missing evidence, dependencies and operating responsibilities. Do not invent figures or organisational details. Where the brief doesn’t answer a question, list it as a question.

The resulting questions still need review. Some will be irrelevant; others may point to something worth checking. The benefit is another pass over the thinking, not an independent expert sign-off.

I’d be especially careful when the model agrees too easily. Ask it to make the best case for a different option, using the same constraints. The aim is to improve the decision before getting attached to the wording.

## Give drafting tasks a clear factual boundary

Drafting is useful when you have something to say but need help organising it. The risk is that the tool quietly adds details that make the story flow better.

For a status report, distinguish confirmed progress from planned work. For a policy draft, distinguish an existing obligation from a proposed rule. For meeting notes, distinguish a decision from a suggestion someone made during discussion.

Try a brief like this:

> Turn these notes into a short update for the executive team. Use only the facts provided. Keep completed work, work in progress and decisions needed separate. Do not add dates, benefits, owners or percentages that are not in the notes. Flag anything that needs confirmation.

Then compare the draft with the source. Check names, dates, commitments and whether the strength of the language changed. “We are testing” should not become “we have delivered”. “This may help” should not become a promised saving.

Those shifts can be small enough to miss when you read for tone rather than accuracy.

## Treat technical output as something to test

AI can help explain an unfamiliar error, draft a script or suggest an integration approach. That makes it easier to explore, but it doesn’t remove the need to understand the result.

Before running generated code, ask what it reads, what it changes and which credentials it uses. Look for destructive actions and assumptions about the environment. A script written for a test directory can be dangerous when pointed at a real document library.

Use a contained test with representative, non-sensitive inputs. Check the result, the failure path and the behaviour when the task is run twice. If a process sends messages, changes permissions or deletes data, put a deliberate approval boundary around that action.

The same principle applies to advice. If an answer depends on a product feature, regulation or provider commitment, open the original source. Ask whether it applies to your actual configuration, not merely to a similarly named product.

## Keep data decisions visible

People should not need to guess which information is appropriate for which tool. Make the approved services and boundaries clear enough to use in a busy working day.

A summary task may still involve sensitive information. Removing a name may not remove the details that identify a person or an organisation. Uploading a whole document because only one paragraph is relevant also sends more information than the task needs.

I prefer to start with the smallest amount of permitted information that will do the job. If the task genuinely needs sensitive context, use the approved environment and confirm the relevant access and handling requirements first.

An internal platform can make those choices easier to apply consistently, but it doesn’t make them unnecessary. I’ve written more about the [decisions behind an internal AI platform](/blog/building-an-internal-ai-platform), including model processing, access and document handling.

## Measure the whole task, including review

I’m cautious about broad claims that AI saves a fixed number of hours every week. A quick first draft is not the same as a finished piece of work.

For a useful comparison, look at the time and effort from starting the task to accepting the result. Include checking, corrections, missing information and any work created for someone else. Also check whether quality changed.

A drafting assistant that makes the first pass faster but increases the reviewer’s workload may still be worthwhile, but that is a different result from a simple productivity win. Record what happened rather than applying a headline percentage.

For repeated work, keep a few examples that represent the task well. Revisit them when you change the model, prompt or process. Familiarity with the tool should not become a reason to stop checking it.

## Make room for people to compare notes

The most useful team conversations are specific: what was the task, what did you provide, where did the output help and what did you have to fix?

Share the failures as well as the good examples. It’s much easier to learn from a confident but wrong answer when nobody feels they have to defend using the tool in the first place.

I want AI to help people prepare, explore and produce useful work. I still want someone to own the conclusion. If I put a recommendation in front of a board or ask a team to act on it, I need to be able to explain it without pointing back to a chat window.
