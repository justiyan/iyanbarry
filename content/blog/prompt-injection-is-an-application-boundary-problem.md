---
title: "Prompt injection is an application boundary problem"
date: "2026-09-18"
retrospectiveDate: "2026-08-14"
summary: "Treat retrieved text as untrusted input and contain what a manipulated model can disclose or execute through application-level controls."
tags: ["AI", "Governance"]
published: true
---

A document can be relevant to a question and still contain instructions the assistant should never follow. That is the uncomfortable starting point for prompt injection.

An employee may ask for a summary of a webpage. The page may also tell the model to reveal private context, change its instructions or call a connected tool. The user authorised reading the page, not obeying its author.

OWASP describes this as indirect prompt injection when the influencing content arrives through an external source such as a file or website. The important application question is what happens if the model treats that content as authority. Better prompting can help, but the consequences depend heavily on the boundaries around the model.

## Separate evidence from instructions

The application should distinguish the user's request, its own operating rules and retrieved material. A passage found through search is evidence to analyse, not permission to change the task.

Keep that distinction in the message structure and in the way tools receive data. Label external content and avoid inserting it into instruction fields merely because doing so is convenient. A document title, search snippet or tool response can carry hostile text as readily as the body of a page.

The distinction is necessary but not a guarantee. Language models can still be influenced by untrusted material. OWASP explicitly notes that RAG and fine-tuning do not fully mitigate prompt injection, and that there is no clear fool-proof prevention method.

That means the security design should not depend on a perfect classifier of malicious prose. Assume some manipulative content will reach the model and ask what the rest of the application will permit it to do.

## Contain the consequence of a bad model decision

Consider a hypothetical research assistant allowed to read public supplier pages and draft an internal comparison. One page contains an instruction to send the conversation to an external address.

If the assistant has no send capability, the requested action cannot be completed through a legitimate send tool. If it has a generic network tool, the boundary is less clear: the model might attempt to place information into a URL or another outbound request.

Restrict tools and destinations to the task. A page-reading capability does not necessarily require arbitrary network access. Validate requested operations in trusted code, and avoid exposing credentials or unrelated private data in model context.

Protect output paths too. An answer containing an external image or link can cause information to leave through a browser if the application renders or follows it unsafely. Treat generated content as untrusted when rendering it or passing it to another system.

Least privilege limits impact even when the model behaves badly. It does not prove that the answer remained accurate. A research assistant can still produce a manipulated comparison without executing any tool, so output review remains necessary for consequential use.

## Keep authorisation outside the conversation

The model should not decide whether the requester is allowed to read a restricted source or change a business record. Those decisions belong to identity-aware application and downstream controls.

A malicious document may claim that a manager approved an action. That text is not an approval record. A tool should require the actual authorisation or consent object expected by the application, tied to the specific operation.

Similarly, a retrieved instruction should not be able to broaden a search scope, select a privileged identity or enable another tool. Administrative changes need a separate path that the normal agent cannot invoke casually.

Where human approval is required, show the actual destination and payload rather than the model's reassuring summary. An approver should see that the proposed action differs from the original research task. The interface must not let untrusted content dictate how its own action is described.

[Giving an agent narrow permissions](/blog/giving-an-ai-agent-the-smallest-useful-set-of-permissions) is therefore part of injection defence, not a separate clean-up exercise after the prompt has been hardened.

## Test the complete route an attacker could use

A test that pastes “ignore previous instructions” into the chat box covers only one route. Put adversarial content where the application actually reads: retrieved documents, page text, filenames, tool responses and supported visual inputs.

Use harmless test payloads and isolated destinations. The objective is to verify boundaries, not to send real sensitive information during a security exercise. Define the prohibited effect before running the test.

Inspect more than the final answer. Check tool requests, retrieved context, rendered output and logs. A refusal at the end does not undo an unauthorised request made earlier in the run.

Include mixed content that contains genuinely useful evidence as well as a malicious instruction. Rejecting every suspicious document may make the task unusable; blindly trusting relevant content is unsafe. The application needs an explicit behaviour for uncertainty, such as returning limited evidence without taking action.

Repeat the exercise when adding tools or changing content sources. The same injection attempt can have a different impact after a new capability is enabled.

## Plan for detection and response

Record enough to identify the affected request, source version and attempted action without collecting every conversation indefinitely. Protect incident evidence more tightly when detailed content is necessary.

Give operators a way to disable a tool, quarantine a source or pause the workflow. A model prompt update may be part of the response, but it should not be the only available control.

Review where the untrusted instruction crossed into authority. Did the application accept a destination from a document? Did a connector use excessive permissions? Did an approval screen hide the payload? Fixing that boundary is more durable than adding the exact attack phrase to a blacklist.

Prompt injection is a reason to design AI applications conservatively, not a reason to pretend useful systems are impossible. I would approve a bounded assistant whose failure consequences are understood before approving a more capable one on the promise that its prompt cannot be persuaded.
