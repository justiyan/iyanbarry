---
title: "Building an internal AI platform: the decisions that matter"
date: "2026-09-12"
summary: "The chat window is the easy part. A practical guide to access, company knowledge, model choice and the work of running an internal AI platform."
tags: ["AI", "Governance", "Delivery"]
published: true
---

Building an internal AI platform changed how I think about AI adoption. The visible part is familiar: a place to ask questions, upload a document and get help with a task. Most of the important decisions sit behind that interface.

Who can read the documents used in an answer? Where does an upload go? What happens when someone leaves the organisation? Which service processes the request? Who notices if the platform starts giving worse answers after a change?

A good demo can leave every one of those questions unanswered. That’s why I see an internal AI platform as an operating responsibility, not just a development project.

The details of the system I worked on are private. These are the design questions and lessons I can share, and the approach I’d take to another build.

## Start with a task people already understand

“Give everyone AI” is too broad to design or evaluate. Start with work that has a recognisable beginning and end.

For example, consider an assistant that helps staff find an approved procedure. That’s a more useful starting point than a promise to answer any question about the organisation. You can identify the source documents, decide who should have access and ask someone who knows the procedure to check the answers.

Write down what a useful answer looks like. It might name the procedure, link to the right version, explain the relevant steps and admit when the documents do not answer the question. Also write down what it must not do, such as invent an approval or treat an old draft as current policy.

This gives the team something concrete to build and a way to decide whether it is good enough to use.

## Separate the application from the model service

An application hosted in your cloud environment can still send information to a model running elsewhere. “It’s in our tenant” doesn’t describe the whole journey.

I’d map that journey before approving sensitive data: browser, application, file storage, document processing, search, model endpoint and any logging services. For each step, identify what information is passed through, where it is processed and what is retained.

Microsoft’s documentation gives a useful example of why deployment details matter. For models sold by Azure, it distinguishes the location of stored data from the location of inference processing. Global deployments may process prompts and responses in any geography where the relevant model is deployed; DataZone deployments use the specified zone.[1]

That doesn’t make those deployments inherently unsuitable. It means the decision needs to match the organisation’s requirements. A regional-looking resource name is not enough evidence.

The same care applies to “not used for training”. That’s a different question from whether information is stored, reviewed for abuse monitoring or retained by a feature. Microsoft’s documentation addresses these separately.[1] Check the actual service, deployment and terms rather than carrying a promise from one product into another.

## Treat company knowledge as an access problem

Connecting documents to a model is often described as a search problem. It’s also a permissions problem.

If a member of staff cannot open a document in its original system, an assistant should not reveal its contents in an answer. Hiding the source link afterwards doesn’t undo a disclosure. The permissions need to be applied before restricted material is handed to the model.

This deserves explicit testing. Use accounts with different access and ask the same questions. Include a document one account is allowed to see and the other is not. Test the answer, the source references and any downloadable output.

Document quality matters too. A search index containing current policies, old versions and unfinished drafts may retrieve all three. Decide which sources are approved, who maintains them and how changes reach the index. When a source is withdrawn, its old content needs an agreed removal path as well.

A citation is useful, but it is not proof that an answer is correct. The cited passage still needs to support what the assistant said.

## Decide what happens to an upload

The upload button looks simple to a user. Behind it, a file may become extracted text, searchable chunks, embeddings, temporary files and conversation context.

Those copies need a lifecycle. Decide what is saved, why it is needed, who can access it and when it is removed. Include backups and operational logs in that conversation. Deleting the visible file doesn’t necessarily address every copy created during processing.

I’d rather collect less by default than keep everything because it might be useful. Logs should help someone diagnose problems without becoming an accidental archive of sensitive conversations. Where detailed content is needed for evaluation or investigation, make that a deliberate, controlled choice.

These decisions should be understandable to the people using the platform. A short explanation beside an upload is more useful than a vague assurance that the system is secure.

## Choose models against the work and the boundaries

Access to frontier models is valuable, but offering every model is not the same as offering a better service.

Start with the models that meet the task, data-handling and operating requirements. Compare them on representative questions, including difficult and incomplete inputs. Look at answer quality, delay, cost and how well people can check the result.

Keep the decision specific. A model that is useful for drafting general communications may not be approved for sensitive document analysis. The platform needs to make those boundaries practical, rather than relying on everyone remembering which model they are allowed to use for which information.

Model and service changes also need review. Record which endpoint and configuration were evaluated, so “we tested this” refers to something identifiable.

## Test the awkward cases before widening access

A pilot should do more than collect positive comments. I’d include:

- A question that the approved documents do not answer.
- Two sources that appear to contradict each other.
- An outdated document that should no longer be used.
- An account that should not be able to access a particular source.
- An uploaded document containing instructions that conflict with the assistant’s rules.
- A request made while a model endpoint or search service is unavailable.

For each case, decide what acceptable behaviour is before running the test. Sometimes the correct response is a refusal, a clear limitation or a request for human help.

Keep a small set of these tests and repeat them after meaningful changes. A model update, a new document source or a permissions change can affect behaviour without changing the chat interface at all.

## Give the platform an owner after launch

Someone needs to look after access, source quality, costs, incidents and model changes. Those responsibilities do not disappear because the build was small.

Agree a support route for staff. Make failures visible to an operator, give users a clear error message and decide how the service can be limited or paused if needed. A working fallback might simply be a link to the original document system and a contact for help.

Before choosing a custom build, check what existing enterprise products and licences already cover. Custom work is worth considering when there is a specific gap in workflow, knowledge access or control. It should not be the automatic answer to every AI request.

My starting brief would fit on a page: the task, permitted users, approved information, model services, checks for success and the person responsible after launch. If those points are still unclear, a more impressive interface will not settle them.

## Sources

[1] https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy — Microsoft: Data, privacy and security for models sold by Azure
