---
title: "An AI evaluation set that reflects the work"
date: "2026-09-18"
retrospectiveDate: "2026-07-26"
summary: "Build evaluation cases around actual decisions, difficult inputs and agreed behaviour, with holdouts and human adjudication that resist demo bias."
tags: ["AI", "Governance"]
published: true
---

An AI evaluation set is a record of what the organisation expects the system to do. If it contains only the questions used in demonstrations, it mostly records what the team has already learned to make look good.

I would build the set from the work before choosing a favourite model. Start with the tasks people are meant to complete, the evidence available to them and the mistakes that would matter. Then turn those into cases another person could run and judge.

The result need not be elaborate. A well-maintained collection of inputs, expected behaviours and reviewer decisions is more useful than a dashboard full of unexplained scores.

## Describe a case completely enough to judge it

A question alone is rarely a complete test. The expected answer may depend on the user's permissions, the source version, a previous conversation or the current state of a business record.

For each case, capture the task, permitted input, relevant context and expected behaviour. Record which information the system may use and which actions it may take. Add the reason the case exists: ordinary work, a known failure, an ambiguity or an access boundary.

A hypothetical policy case might ask which procedure applies when an exception is requested. The expected behaviour could be to identify the current procedure, point to the exception process and avoid claiming that approval has already been granted. That is more precise than a reference paragraph that merely sounds reasonable.

Some properties are exact: a required identifier, an allowed category or a prohibited action. Others need judgment: whether a summary preserves a qualification or distinguishes evidence from interpretation. Use different checks for those properties rather than squeezing them into one similarity score.

## Sample ordinary work and difficult work separately

Production-like cases tell you how the system may behave on its expected workload. Deliberately difficult cases tell you whether important boundaries hold. Both matter, but they should not be mixed without explanation.

If half the test set consists of adversarial attacks, its overall pass rate is not an estimate of everyday user success. If the set contains only common questions, a high score says little about rare but consequential errors. Report the groups separately.

Gather examples through approved channels. Ask task owners for typical requests, incomplete inputs and cases that require escalation. Remove unnecessary personal information and confirm that evaluation storage and model processing are permitted. A testing programme does not create an exemption from data handling rules.

Synthetic cases can fill gaps, especially when a rare failure would be difficult or inappropriate to obtain from real records. Label them as synthetic and have a domain reviewer inspect them. A model-generated test can carry the same misunderstanding as the model being tested.

OpenAI's evaluation guidance recommends typical, edge and adversarial cases, along with expert human labelling. The practical point is diversity with a purpose, not collecting a large pile of prompts.

## Agree the rubric before examining the candidates

Reviewers need a shared definition of success. “Good answer” is too elastic. One reviewer may reward completeness while another penalises every unnecessary sentence.

For the hypothetical policy task, the rubric could distinguish source correctness, faithful interpretation and appropriate escalation. A critical permission disclosure should remain visible even if the answer scores well for readability. Decide which defects block release and which can be accepted with a documented limitation.

Have reviewers independently judge a small common group of cases. Discuss disagreement and update the rubric. If they cannot agree whether a source supports an answer, the problem may be ambiguous source material rather than poor reviewing.

Automated graders can reduce work, but they need calibration against those human decisions. A model judging another model can prefer verbosity, overlook a subtle exception or share the same misconception. Blind candidate labels and vary comparison order where practical. Keep the reason for a judgment so a surprising score can be investigated.

Avoid rewarding an answer simply for matching the wording of a reference. A correct concise response may use different language. Conversely, a response can resemble the reference while substituting the wrong entity or date.

## Protect a genuine holdout

Keep development cases separate from the cases used for an independent release check. Once the team repeatedly tunes a prompt against an example, that example is no longer a fresh test of generalisation.

The split needs to account for related material. Different questions about the same source paragraph may be near duplicates. Putting one in development and the other in the holdout gives more confidence than the separation deserves.

Restrict casual access to the holdout and record when it is used. If a failed holdout case becomes part of development, replace its independent testing role with a new case. Do not keep describing the same familiar questions as unseen.

Record the application version, model endpoint, prompt, retrieval configuration and source state for each run. Generative outputs can vary, so consequential cases may need repeated trials. A single successful response is not evidence of stable behaviour.

## Make the result useful for a decision

An evaluation report should show where the system succeeds, where it fails and what remains unknown. Include representative defects, not just an aggregate percentage. Separate retrieval failures from unsupported reasoning and operational failures.

Preserve the evaluation set as an organisational asset. It should remain usable if the team changes providers or stops using a particular evaluation platform. The criteria belong to the business, not to the dashboard vendor.

Feed confirmed production incidents back into development tests through a privacy-controlled process. Add cases when the workflow or user population changes, rather than assuming the original set remains representative indefinitely.

The set should help answer a specific decision: whether to release, narrow the scope, change the model or keep investigating. [Choosing a model with your own test cases](/blog/choosing-a-model-with-your-own-test-cases) uses that evidence for selection. Without agreed cases, the discussion tends to return to whichever answer impressed someone most recently.
