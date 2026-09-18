---
title: "Knowing when an AI system should decline to answer"
date: "2026-09-14"
updated: "2026-09-18"
summary: "Design useful abstention around missing evidence, ambiguous requests and access limits, with clear next steps instead of invented certainty."
tags: ["AI", "Governance"]
published: true
---

A useful AI system needs a way to stop short of an answer. If every request must end in a confident conclusion, incomplete evidence becomes an invitation to invent one.

Declining should not mean abandoning the user with a generic apology. The system can explain what is missing, return the evidence it is allowed to show or direct the request to someone who can decide. Those are legitimate outcomes when the alternative is an unsupported answer.

I would define these outcomes as part of the task contract. The assistant should know when it may answer, when it should ask for clarification and when the application must block the request regardless of what the model wants to say.

## Distinguish the reasons for not answering

Missing evidence, ambiguous context and lack of permission are different conditions. Treating them all as “I don't know” makes the system less useful and harder to investigate.

If the approved sources do not contain the requested fact, say that the available material does not establish it. Do not imply that the fact does not exist anywhere. An unsuccessful search is a statement about the evidence available to this workflow.

If the request is ambiguous, ask for the smallest clarification that would change the answer. A hypothetical agreement assistant might need to know which agreement or amendment the user means. It should not request an entire additional document collection when an identifier would resolve the ambiguity.

If access is not authorised, the application should enforce that boundary before restricted material reaches the model. The response must not reveal the existence, title or contents of a confidential source merely to explain the refusal. Use an approved access-request route where one exists.

A service outage is another condition again. Tell the user when the system could not check the evidence because a dependency was unavailable. Otherwise they may interpret a technical failure as confirmation that no relevant record exists.

These distinctions improve operations as well as usability. Repeated missing-evidence outcomes suggest a content gap; repeated access failures may indicate configuration or onboarding problems. Neither is necessarily a reason to change the model.

## Set evidence requirements that fit the consequence

A brainstorming draft can tolerate a different standard from a statement about a binding obligation. Define what support the task requires before deciding whether the assistant should answer.

For the hypothetical agreement workflow, an acceptable answer about a notice date might require the current agreement, relevant amendments and an unambiguous clause. If the documents conflict, the assistant could identify the conflict and ask for authorised review instead of selecting whichever date appears most plausible.

Do not use a model's self-reported confidence as proof. A percentage generated in prose is not automatically a calibrated estimate of correctness. Retrieval similarity is also different from evidence sufficiency: a closely matching passage may be obsolete or omit the decisive exception.

Use observable requirements where possible. The source is approved; the version is identifiable; the relevant passage is present; the answer does not extend beyond it. These checks will not resolve every interpretation problem, but they provide a more defensible basis than tone or a confidence label.

For difficult judgments, involve a domain reviewer in defining examples of answer, clarify and escalate. OpenAI's evaluation guidance emphasises task-specific criteria and human calibration. That applies to abstention as much as to successful answers.

Avoid a universal numerical threshold copied from another application. The acceptable trade-off depends on the consequence of an incorrect answer and the cost of handing the task back.

## Make the handback genuinely useful

A refusal should tell the user what can happen next without pretending that the missing fact has been established. Offer a relevant source link when authorised, specify the missing input or identify the responsible review route.

For example, the hypothetical assistant could say that the available agreement refers to an amendment that was not supplied, and that the notice date cannot be confirmed without it. That response preserves useful progress: the user knows which dependency blocks completion.

Keep the explanation proportionate. A long disclaimer can bury the actionable point and make users skim past important limits. Use language specific to the request rather than repeating a general warning about AI accuracy.

Be careful with partial answers. If an omitted qualification could make the partial response misleading, do not provide it as though it were a complete conclusion. Label the boundary clearly and avoid downstream formats that strip away the limitation.

A structured application may need a separate status field for unresolved work. If the assistant returns an empty date but the downstream system treats it as “no deadline”, the handback has failed even though the prose was cautious.

Design escalation capacity before launch. An assistant that appropriately hands back difficult work can still overwhelm a review queue. Narrow the scope, improve sources or resource the queue rather than pressuring the model to answer cases it cannot support.

## Measure both unsafe answers and unnecessary refusals

A system that refuses everything can look safe on a narrow metric while being useless. A system that always answers can look productive while concealing unsupported decisions. Evaluate both failure directions.

Include cases where sufficient evidence exists and the assistant should answer, along with cases that genuinely require clarification or escalation. Review whether the stated reason matches the actual condition. A correct refusal for the wrong reason may still mislead the user.

Track recurring refusal patterns without unnecessarily storing sensitive conversations. They can identify missing source coverage, confusing requests or overly restrictive configuration. Use those findings to improve the service rather than treating refusal rate as a target to minimise at any cost.

[What retrieval can and cannot fix](/blog/what-retrieval-augmented-generation-can-and-cannot-fix) matters here: supplying more passages is not always the answer. The missing ingredient may be authority, current information or a human interpretation the system was never approved to make.

I would judge abstention by whether it prevents an unsupported conclusion while preserving a clear route to completion. Knowing when not to answer is part of doing the task well, provided the application makes that decision understandable and operationally useful.
