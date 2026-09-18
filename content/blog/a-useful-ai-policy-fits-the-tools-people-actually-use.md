---
title: "A useful AI policy fits the tools people actually use"
date: "2026-09-07"
updated: "2026-09-18"
summary: "Turn AI policy into task-specific instructions, clear data boundaries and a workable exception route rather than a list of approved brand names."
tags: ["AI", "Governance"]
published: true
---

An AI policy is useful when a person can apply it before uploading a document or allowing a tool to act. If they need to interpret broad principles every time, the policy has left too much design work to the user.

I would keep the principles, but put practical instructions beside the tools and tasks. Staff need to know which account to use, which information is permitted, what review is required and where to ask when the task falls outside the approved route.

A list of approved product names is not enough. The same brand may cover different account types, model processors, extensions and data-handling arrangements. Approval needs to describe a configuration and a use, not merely a logo.

## Write rules around recognisable work

Start with the tasks people actually perform. Drafting public communications, summarising internal material and changing business records create different obligations. A single instruction to “use AI responsibly” cannot distinguish them.

For each approved task, describe the permitted inputs, expected output and review requirement. A hypothetical policy entry might allow drafting a public announcement from an already approved brief in a named organisational tool. It would still require the responsible person to check factual claims and approve publication.

Another entry might permit summarising a restricted document only through a specifically approved workflow with the necessary access and processing controls. That is not a contradiction. The data and service boundary are different.

Use examples of permitted and prohibited behaviour, but avoid an endless list that staff cannot maintain. Give them a decision rule they can apply: identify the information, choose the approved route for that information and stop if the tool's configuration does not match.

Distinguish drafting from acting. Permission to prepare a message does not automatically include permission to send it, publish it or make a commitment for the business. State when a human decision is required and who has authority to make it.

## Make data boundaries visible in the product

A policy should not rely entirely on people remembering which account they signed into. Use organisational deployment and configuration controls where available, and make the approved route easy to recognise.

Explain what may be uploaded in ordinary language. Staff should understand whether the workflow accepts public material, internal working documents or particular restricted categories. Avoid broad reassurance that “enterprise AI is secure” without explaining the approved scope.

Microsoft's Copilot privacy documentation illustrates the distinctions a policy needs. It describes no foundation-model training on prompts, responses and Graph data while also describing stored interaction history. It directs organisations to additional information for agents, web search and model subprocessors. A policy should not collapse all of those questions into “data stays in our tenant”.

For custom applications, identify the application host separately from the model processor and other services. For local applications, include external tools, backups and logs. The location of the chat window does not determine the complete data journey.

Put short guidance where the decision occurs: beside upload, model selection and action approval. Link to the fuller policy for people who need it. If a feature cannot meet the approved boundary, disable or restrict it rather than asking every user to compensate manually.

## Provide a route for uncertainty and exceptions

Staff will encounter tasks the policy did not anticipate. Give them a named contact or queue, specify the information needed for a decision and set a realistic response expectation.

An exception request should explain the task, information involved, proposed tool configuration and business need. Ask about the alternatives already available. This helps distinguish a genuine gap from a request for an unreviewed product because it is fashionable.

Exceptions should have an owner, scope and review date. Approval for one limited experiment should not become indefinite permission for everyone to upload similar material. Record the conditions in a place the requesting team can find.

Make incident reporting equally clear. If someone uploads the wrong information or an assistant reveals something unexpected, they need a route that encourages prompt reporting. Explain what to preserve and avoid asking them to reproduce sensitive content in an ordinary support channel.

Do not treat every mistake as misconduct. Investigate whether the tool, training or policy made the boundary hard to understand. Deliberate misuse and a confusing interface need different responses, even though both may require containment.

The exception process also supplies evidence for policy updates. Repeated legitimate requests for the same task may justify a supported workflow. Repeated confusion may show that an approved entry is too vague.

## Maintain the policy as part of operating the tools

Assign ownership of the approved-tool register and review it when capabilities or terms change. A new connector, model processor or write action can invalidate assumptions behind an earlier approval.

Give task owners responsibility for output review standards. A communications draft and a document extraction need different checks. “A human must review” is insufficient unless that person knows what they are expected to verify and has access to the evidence.

Train through realistic decisions rather than only explaining AI terminology. Ask staff to choose the correct route for a hypothetical task, identify information that should not be uploaded and recognise when a proposed action exceeds their authority. Check whether the policy supports the answer without specialist interpretation.

Use governance frameworks proportionately. NIST's AI Risk Management Framework is voluntary guidance for managing risks through the AI lifecycle, not a certification that makes a particular use compliant. It can structure ownership and review without replacing the organisation's legal, contractual or operational requirements.

[Human approval design](/blog/human-approval-is-only-useful-when-the-human-can-judge-the-action) should be reflected in policy too. If the application cannot show what will change, the policy should not pretend the approval button provides meaningful oversight.

I would judge the policy by whether people can follow it during ordinary work. A shorter rule that matches the actual tool is more useful than an ambitious document whose assumptions no longer match the screen.
