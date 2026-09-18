---
title: "What retrieval-augmented generation can and cannot fix"
date: "2026-09-18"
retrospectiveDate: "2026-07-18"
summary: "Retrieval can supply relevant evidence, but source quality, reasoning, permissions and refusal behaviour remain separate design problems."
tags: ["AI", "Governance"]
published: true
---

Retrieval-augmented generation gives a model material to work from. It does not make the material true, give the model permission to see it, or guarantee that the answer follows it.

That distinction matters when a proposal describes RAG as the solution to hallucination. Retrieval can reduce reliance on what a model learned during training by supplying relevant information at the time of a request. The application still has to retrieve the right evidence and use it correctly.

I would explain RAG to an executive as a document-supported answering process. The organisation selects a body of information, a search step finds candidate passages, and a model uses those passages to prepare an answer. Each step can succeed or fail independently.

## What retrieval genuinely adds

Retrieval is useful when the answer depends on information that changes, belongs to the organisation or needs an inspectable source. An approved procedure is a better basis for a procedure answer than a model's general impression of how organisations usually work.

It also gives reviewers something concrete to examine. If the system preserves document identity, version and passage location, a person can compare the generated statement with the evidence. This is a substantial improvement over an unsupported answer, but the comparison still has to happen.

A hypothetical procurement assistant might retrieve an approved purchasing procedure and a current delegation schedule. Those sources could help it explain the required approval path. Without retrieval, the assistant might offer a plausible generic process that has no standing in the business.

The benefit depends on the task. If the requirement is an exact total from a transaction table, a validated database query and calculation may be more suitable than asking a language model to infer the total from retrieved text. Retrieval is one tool, not the universal interface to every kind of business data.

## The wrong evidence can look convincing

Search relevance is not the same as business authority. An old procedure may match the question more closely than its replacement. An informal note may contain the user's exact phrase while the approved policy uses different language.

Set source rules before tuning search. Decide which collections are eligible, how drafts are marked, how superseded versions are excluded and who can resolve contradictory documents. Adding more content can make an answer less reliable if it increases the chance of retrieving a persuasive but obsolete passage.

Document processing introduces another problem. A table can lose its column relationships during extraction. A heading may become separated from the exception it governs. If the retrieved chunk omits a qualification, the model cannot reliably reconstruct it.

Inspect the extracted representation rather than assuming the original file survived intact. For the hypothetical procurement task, test a delegation table, a footnote and an amendment. Check whether the evidence supplied to the model preserves the relationship between the amount, role and condition.

## Correct passages do not guarantee correct reasoning

A model can receive the right sources and still combine them badly. It may treat an example as a rule, omit an exception or infer that two similar terms mean the same thing. A citation attached to the sentence does not prove that the cited passage supports it.

Separate retrieval assessment from answer assessment. First ask whether the needed evidence arrived. Then ask whether the response accurately reflects it. If the evidence was missing, changing the writing prompt may only make the unsupported answer more polished.

I would require the assistant to distinguish statements directly supported by sources from unresolved interpretation. In the procurement example, it could identify the relevant procedure and explain that the documents do not settle a disputed exception. It should not invent an approval simply to complete the response.

OpenAI's evaluation guidance treats context retrieval and final response quality as separate concerns in document question answering. That is a useful architectural habit even when the system uses another provider.

## Access and hostile content remain separate problems

A relevant passage can still be restricted. Permissions must determine what information is eligible before it enters model context. Asking the model to hide confidential details afterwards gives the wrong component responsibility for preventing disclosure.

The [retrieval permissions design](/blog/permissions-belong-in-the-retrieval-layer) needs to cover source access, index copies, cached answers and what happens when permissions change. A search engine does not infer those business rules merely because it stores document embeddings.

Retrieved content is also input from another trust boundary. A document can contain instructions telling the assistant to ignore its rules, reveal information or invoke a tool. OWASP explicitly notes that RAG does not fully mitigate prompt injection.

Keep external content identifiable as evidence, constrain available tools and enforce action permissions outside the model. Filtering suspicious text can help, but the application should remain contained if a malicious passage is accepted. A read-only assistant and an assistant able to send messages have very different potential consequences from the same injected instruction.

## Diagnose the failure before buying a bigger model

When an answer is wrong, trace it backwards. Was the source current? Did extraction preserve the relevant section? Was the source eligible for this user? Did retrieval return it? Did the model use it accurately? Did the interface imply more certainty than the evidence allowed?

These questions lead to different fixes. A missing approved source needs content work. A permissions defect needs an access-control fix. A reasoning failure may justify a different prompt, model or narrower task. None should be hidden inside a single overall accuracy score.

For a production decision, ask for examples from each failure category and the proposed fallback. The assistant should be able to return a source, ask for context or decline to conclude without pretending those are equivalent outcomes.

RAG is worth using when it gives the workflow better evidence and makes errors easier to inspect. Its value is strongest when the organisation also accepts responsibility for the evidence supply. Connecting a folder is only the beginning of that responsibility.
