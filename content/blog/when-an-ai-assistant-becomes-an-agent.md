---
title: "When an AI assistant becomes an agent"
date: "2026-08-05"
updated: "2026-09-18"
summary: "Classify AI by what it can change, whose authority it uses and where transactions commit, rather than by the agent label."
tags: ["AI", "Governance"]
published: true
---

The word “agent” does not tell an executive enough about a system. It may describe a chatbot that searches documents, a workflow that follows a fixed sequence, or software that chooses tools and acts on business records.

For governance, I would start with what the system can do without another person intervening. An assistant that drafts an email and one that sends it may look almost identical. The second can create an external consequence.

That is the useful distinction: the point at which generated output becomes authority to do something. A supplier's taxonomy can help describe the architecture, but it should not determine the risk assessment.

## Describe behaviour instead of arguing about names

List the system's capabilities in plain language. Can it read a document, search another repository, write a draft, update a record, send a message or initiate a transaction? Can it choose the next step, or does conventional code determine the sequence?

OWASP describes agency in terms of calling functions or interfacing with other systems. Its excessive-agency guidance distinguishes excessive functionality, permissions and autonomy. Those dimensions are more actionable than deciding whether a product is “truly agentic”.

A fixed workflow can still be consequential. If it takes generated text and automatically publishes it, limited planning ability does not make publication harmless. Conversely, an agent that plans several read-only searches may have limited mutation risk while still raising confidentiality concerns.

Document the capabilities users can reach today, including optional tools and integrations. Do not assess only the behaviour shown in a demonstration. An unused delete operation is still a permission the system may exercise if it remains available.

## Find the point where a proposal becomes a transaction

Consider a hypothetical assistant handling meeting follow-up. It reads approved notes and proposes tasks. At this stage, a person can discard the suggestions without altering the business record.

Now add a tool that creates tasks in a shared system. The assistant must choose owners, due dates and destinations. It may notify people as a side effect. A suggestion has become a transaction, and the organisation needs rules for committing it.

Separate preparation from execution. The assistant can assemble a proposed change, but the action service should validate the target, required fields, user authority and any approval before applying it. The model's statement that an action is permitted is not the permission check.

Record the state the proposal was based on. If a task already exists or the destination has changed, execution may need to stop for review. Approval of an old proposal should not silently authorise a materially different action.

This separation also improves error reporting. Users should see whether the system prepared a task, submitted it, confirmed its creation or failed before completion. “Done” is inadequate when the underlying transaction state is unknown.

## Treat a sequence as more than its individual steps

An agent may perform a harmless-looking action several times or combine capabilities in an unexpected way. Reading a record and sending a message can become disclosure even when each tool is legitimate in isolation.

Review the allowed combinations. Which retrieved information may appear in an external message? Can a tool result introduce a new destination? Does a failure cause the agent to try a different system with broader access?

Retries deserve explicit rules. A timeout may mean the action failed, or that it succeeded and the acknowledgement was lost. Repeating a write blindly can create duplicates. The application needs transaction identifiers and checks appropriate to the downstream service, rather than relying on the model to infer what happened.

Set limits on the run as well as the tool. A narrow action repeated across a large batch can still create a large incident. Bound the scope, duration and accumulated effect, and make exceeding those limits a reason to stop.

These controls are ordinary operational engineering applied to a system that can choose its next step. The novelty of the interface does not remove the need to know which changes committed.

## Make authority visible to the person using it

A user should not need to infer capability from a conversational tone. Tell them when the assistant is drafting and when it can act. Show the destination and consequence before an action that requires approval.

Permission to ask a question is not necessarily permission to authorise a change. A shared assistant may serve people with different business authorities. Downstream checks should use the appropriate user context or a deliberately scoped service identity, not a broadly privileged account borrowed for convenience.

For meaningful confirmation, show the actual proposed operation. A vague “allow agent to continue” prompt gives little basis for judgment. [Human approval is only useful when the human can judge the action](/blog/human-approval-is-only-useful-when-the-human-can-judge-the-action) examines that interface problem.

Do not make refusal the end of the workflow. Let the user edit, defer or hand the task to an authorised person. Otherwise the system encourages people to approve simply to escape a blocked screen.

## Review the system again when capability changes

Adding a tool can change the risk more than changing the model. An assistant approved to search internal documents has not automatically been approved to send the answers to an external address.

Treat new write access, additional repositories and unattended operation as changes to the authority model. Revisit the failure scenarios, operational owner and recovery method. A previous successful pilot is evidence for its tested scope, not for every later extension.

I would keep a short capability register beside the service description. It should say what the system can read, propose and commit; under whose identity; with which limits; and who can pause it. Update that register as part of changing the application.

The practical answer to when an assistant becomes an agent is therefore less important than identifying when the business starts relying on its actions. That transition should be explicit, tested and authorised, even if the product never changes its name.
