---
title: "Getting your data ready for AI without cleaning everything"
date: "2026-09-18"
retrospectiveDate: "2026-04-16"
summary: "Prepare the smallest trustworthy information set for one AI workflow. Focus on authority, access and evaluation rather than promising to clean the whole estate first."
tags: ["Data", "Integration"]
published: true
---

An organisation can spend a long time preparing its data for AI without agreeing what it wants AI to do. The preparation programme grows, every historical inconsistency becomes a blocker and a useful small experiment never starts.

I would choose a bounded workflow first. Then establish the minimum trustworthy information and controls needed for that workflow. That is a smaller claim than being AI-ready, and a much easier one to test.

It also leaves room to discover that some information should not be used at all.

## Define a task with a checkable answer

Consider a hypothetical assistant that helps employees locate the current equipment-request procedure. The task is narrow: identify the applicable approved procedure, explain the relevant steps and point the user to the authoritative material.

It does not require every document the organisation has ever produced. It needs the current approved procedure, enough metadata to distinguish versions and an access arrangement appropriate to the audience.

Compare that with asking an assistant to answer any question about the business. The broader request has no clear information boundary and makes it much harder to know whether a confident answer is complete.

Write down acceptable behaviour for missing or conflicting information. The assistant should be able to say it cannot establish the answer and direct the user to an owner. A system that must always produce a complete answer will be tempted to fill gaps the source does not resolve.

The advice in [using AI without outsourcing judgement](/blog/using-ai-as-an-it-leader) applies here: start with an output a person can check and retain responsibility for accepting it.

## Clean the defects that affect that task

Review the selected information for authority, currency and completeness. Remove superseded versions from the active retrieval set where appropriate, while preserving records separately when required. Identify documents whose status is unclear and send them to an owner for resolution.

For the procedure example, missing approval or effective-date information matters. An inconsistent font probably does not. A broken heading structure may matter if it causes the retrieval process to separate an instruction from its qualification.

Test extraction as well as the original file. Tables, scanned pages and attachments can lose meaning when converted into text. A clean-looking PDF is not proof that the assistant received the right content.

If structured data is involved, define the grain and the meaning of missing values. An assistant cannot reliably explain a measure whose own definition is disputed. A small trusted subset should still have clear identities and business rules.

Keep a record of what was excluded and why. That helps users understand the boundary and prevents a later expansion from quietly reintroducing the same unresolved material.

## Make access part of the dataset

Only use information permitted in the chosen service and for the intended purpose. An internal interface does not by itself establish where processing happens, what is retained or who can access the underlying content.

Review the full path: ingestion, storage, retrieval, model processing and logs. Source permissions do not automatically transfer to a new index. The serving application needs an appropriate way to enforce the user's access before restricted information reaches an answer.

Test representative roles, including a person who should not receive the answer. Search snippets, document titles and generated summaries can disclose information even when the full file is not shown.

Linked information can become more revealing than its separate sources. The discussion of [who can see joined data](/blog/who-can-see-the-data-after-you-join-it) is relevant to retrieval systems too. Removing names or hosting a component locally does not establish a blanket privacy or security guarantee.

Agree how updates, revocations and deletions reach the retrieval set. A trusted dataset stops being trusted if it continues serving a withdrawn procedure or content the user can no longer access.

## Evaluate the smallest useful service

Build a set of realistic questions from the approved workflow. Include ordinary requests, ambiguous wording, out-of-scope questions and cases where the source contains no answer. Use safe test material and authorised reviewers.

Assess whether the answer is supported by the correct material, whether important qualifications survive and whether access boundaries hold. A fluent response is not sufficient evidence of quality.

Review the effort needed to check and correct the output. A task that becomes faster for the requester but much harder for the approving team may not deliver the expected benefit.

When a failure appears, identify whether it comes from the source, extraction, retrieval or generation. Cleaning more unrelated documents will not fix a permission defect or a prompt that encourages unsupported answers.

## Expand from evidence

Expand only after the bounded workflow performs acceptably under the agreed tests. Add another information set because it supports a specific task, with its own owner and evaluation cases.

I would rather have a modest assistant that reliably uses a clearly maintained set of information than a broad one backed by an unfinished promise to clean everything. The narrow start gives the organisation evidence about what to improve next.
