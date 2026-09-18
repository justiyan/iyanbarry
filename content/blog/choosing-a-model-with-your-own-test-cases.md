---
title: "Choosing a model with your own test cases"
date: "2026-09-18"
retrospectiveDate: "2026-08-18"
summary: "Select models against a fixed business task, data terms and total completion cost, using your own cases rather than an unsupported league table."
tags: ["AI", "Governance"]
published: true
---

The best model for an organisation is not necessarily the one at the top of a public benchmark. It is the model that meets the task, data-handling and operating requirements in the application people will actually use.

I would not begin with a league table. I would begin with the outputs the business needs, the mistakes it cannot accept and the conditions under which the service must operate. That creates a shortlist worth testing.

Model selection is also a service decision. The same model family offered through different providers or deployment types may come with different processing arrangements, features and operational constraints. The name alone does not describe the purchase.

## Eliminate unsuitable options before comparing prose

Set the non-negotiable requirements first. These may include approved processing locations, retention arrangements, permitted data categories, tool support, availability needs and commercial terms.

Verify them for the actual endpoint and configuration. Hosting the application locally or in an organisational cloud environment does not determine where a remote model processes requests. Microsoft's documentation for models sold by Azure, for example, distinguishes Global and DataZone inference locations from stored-data geography.

Keep training use, storage and abuse monitoring as separate questions. An assurance that prompts are not used to train a foundation model does not answer every retention or access concern.

Remove options that cannot meet the required boundary, or explicitly change the task to use less sensitive inputs. Do not let an excellent sample answer become a reason to ignore a disqualifying service condition.

Check practical constraints as well. A model that meets quality requirements but cannot handle the permitted document format or the necessary request volume may need a different architecture. That additional work belongs in the comparison.

## Compare candidates on the same job

Use a fixed set of representative cases with an agreed rubric. Include the surrounding application: prompt, retrieval, tool definitions and response formatting. Testing a model in an isolated playground can miss the behaviour introduced by the production workflow.

A hypothetical selection exercise might compare models for extracting obligations from approved documents. Each candidate should receive equivalent evidence and face the same requirements for identifying the responsible party, condition and source passage. Unsupported inferences should count against it even if the writing is elegant.

Start with a common baseline configuration. Then allow a documented, comparable amount of tuning if the decision is about the best practical implementation rather than performance under an identical prompt. Otherwise one candidate may benefit from extensive tailoring while another is judged on defaults.

Hide model labels from reviewers where practical. Brand familiarity and expectations can influence judgments. Preserve disagreement instead of forcing every response into an unexplained winner column.

[An evaluation set that reflects the work](/blog/an-ai-evaluation-set-that-reflects-the-work) provides the foundation. Without it, model selection becomes a succession of anecdotes about the last impressive answer.

## Measure the experience around quality

Quality is the first requirement, but it is not the only one. Measure time to an accepted result, not just the first generated token. A fast response that needs repeated correction can produce a slower workflow.

Test under the expected concurrency and input sizes. Quiet demonstrations may conceal queueing, rate limits or slow handling of long documents. Record failures and retries instead of dropping unsuccessful requests from the report.

Distinguish interactive and background work. A user waiting at a screen may value predictable response time more than maximum detail. A scheduled analysis job may tolerate delay if it produces better evidence and can resume safely after interruption.

Assess output consistency in terms of the task. Different wording may be harmless; different extracted dates or tool arguments may not be. Repeat important cases enough to expose variability, while acknowledging that a finite test cannot prove a failure impossible.

Review usability with the people who will accept the work. A model that produces a detailed explanation can be less useful than one that returns a concise result beside its supporting passage.

## Calculate cost per accepted outcome

Compare current, verified service prices against the measured workload rather than quoting an assumed token rate. Account for input and output volume, retrieval, tool use, retries and any additional processing required by the candidate.

Then include human review. A cheaper model call can be more expensive overall if it regularly needs expert correction. Conversely, an expensive model may add little value on a simple classification task that a smaller approved model handles adequately.

Keep estimates and measurements distinct. If production volume is unknown, present a scenario rather than a claimed annual saving. State what happens to the estimate if documents grow, usage expands or difficult cases become more common.

Model routing can be useful, but it adds its own decision and testing burden. The rule choosing a cheaper or more capable model must not misroute sensitive data or send difficult work to an unsuitable endpoint. Do not add routing merely to make a price comparison look sophisticated.

## Select an operating arrangement, not a permanent champion

Record the selected endpoint, available version identifier, configuration and tested scope. Keep the evidence for rejected candidates so future comparisons do not start from memory.

Choose a fallback deliberately. If the primary endpoint is unavailable, a second provider may not satisfy the same data terms. A manual route or a temporary refusal can be preferable to silently sending information elsewhere.

Maintain the test cases outside any single provider's evaluation interface. The organisation should be able to rerun them when services change, models retire or the workflow expands. OpenAI's evaluation guidance recommends continuous evaluation; the principle remains useful regardless of the tool used to implement it.

The selection record should explain why this model is suitable for this task now, and what would trigger reconsideration. That is a defensible decision. Claiming to have found the universally best model is a much harder promise to keep.
