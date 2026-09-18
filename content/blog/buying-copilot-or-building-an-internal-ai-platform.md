---
title: "Buying Copilot or building an internal AI platform"
date: "2026-09-18"
retrospectiveDate: "2026-07-14"
summary: "Compare the actual Copilot experience and existing entitlements with the workflow gap a custom platform would have to justify."
tags: ["AI", "Governance"]
published: true
---

The choice between Copilot and a custom AI platform is often framed as buying convenience versus buying control. I would be careful with both halves of that description.

A purchased service still needs configuration, access management and an operating owner. A custom interface does not automatically give the organisation control over the model processor, its deployment geography or its retention features. Both options need an answer to the same question: which work will improve, under which constraints?

Start with the workflow rather than a feature comparison. If staff need help inside the applications where they already work, an existing enterprise product deserves a serious trial. If the requirement depends on a specialised process or a carefully bounded integration, there may be a genuine custom gap.

## Name the product being compared

“Copilot” is too broad for a procurement decision. Record the exact experience, account type, licence or entitlement, enabled agents and data connections. Distinguish chat, assistance within productivity applications, developer tools and custom agent functionality rather than treating the name as a single package.

For this publication-date comparison in September 2026, Copilot Chat outside Outlook is primarily web grounded, but can also use supplied files, supported app context and enabled agents. Eligible Copilot Chat users in Outlook can access a bounded set of organisational content, including supported email, calendar, meeting, chat and related file content, even without the full Microsoft 365 Copilot add-on. The licensed Microsoft Copilot experience provides broader organisational grounding across Microsoft 365 through Graph API, Work IQ and semantic indexing. “Chat cannot use work data” would therefore be the wrong distinction.

Check the exact account, entitlement, client, mailbox requirements and configuration before assuming either behaviour. Microsoft's changing product names make the service description and contract more reliable decision inputs than a familiar logo. I would ask the licensing owner to verify what the organisation already owns and what the proposed users can actually access.

Do not put an unverified per-user price or presumed inclusion into the business case. Obtain the applicable commercial terms, including any usage-based components, and date the comparison. A sales demonstration may use capabilities that are not enabled in the proposed environment.

Use the same discipline for the custom option. “Azure application” is not a specification. List the application hosting, model endpoint, search service, document processing, identity integration and any external tools. These are different services with different responsibilities.

## Test the work in its natural setting

Consider a hypothetical team preparing recurring internal briefs from approved material. The first comparison should ask whether the existing product can find the right sources, preserve qualifications and produce an editable result within the team's usual workflow.

Then identify the remaining gap precisely. Perhaps the output must enter a structured review queue, enforce a specific source register, or expose evidence in a format the reviewer needs. Those are testable requirements. “We want our own AI” is not.

Avoid comparing a mature enterprise product against a custom prototype with no support costs. Also avoid comparing a carefully tailored prototype against an enterprise product nobody configured properly. Give each option a fair implementation of the same bounded task.

Observe the surrounding work: switching applications, supplying context, checking results and asking for help. A technically capable tool can still create an awkward handover. Where both options meet the quality threshold, simpler adoption and maintenance may decide the outcome.

## Follow the information, not the tenancy label

For the licensed Microsoft Copilot experience used through organisational Microsoft 365 accounts, Microsoft's product privacy documentation states that prompts, responses and Microsoft Graph data are not used to train foundation models. It also describes stored interaction history. These are compatible statements: a no-training commitment is not a no-storage commitment. This is the organisational product scope under review, not a blanket promise about consumer or developer products carrying the Copilot name.

The documentation says Copilot surfaces organisational data that users have permission to view. That makes existing sharing practices important. A product respecting an overbroad permission can still expose information to someone the business did not intend to see it.

Review enabled agents, web search and model subprocessors separately. Microsoft's documentation points to additional handling details for those features. Do not transfer a promise about one product configuration to every extension carrying the same brand.

A custom platform needs an equally specific review. Hosting the application in your cloud environment does not establish where inference occurs. Microsoft's documentation for models sold by Azure distinguishes ordinary geography handling from Global and DataZone processing. The selected deployment matters, along with stateful features and abuse-monitoring arrangements.

I would require a short data-flow record for either option before approving sensitive work. It should identify what leaves each component, what is retained and who can administer it. [Building an internal AI platform](/blog/building-an-internal-ai-platform) covers those design questions in more detail.

## Price the responsibility you are accepting

Custom development buys the ability to change some parts of the workflow. It also creates an obligation to maintain them. Source connectors break, permissions change, model services evolve and staff need help with incorrect results.

Include the people who will own these tasks in the comparison. A development estimate that excludes evaluation, monitoring, incident response and future migrations understates the commitment. Equally, a purchased product may require information cleanup, training and ongoing administration that its subscription invoice does not show.

Ask what happens when the person who understands the implementation is unavailable. The answer should include a support route and documentation, not confidence that the prototype is small. A modest application can carry sensitive information and consequential decisions.

There is also an exit cost. Determine whether prompts, approved source mappings, evaluation cases and business records can move to another implementation. Keep those organisational assets outside a vendor-specific interface where practical.

## Allow a mixed decision

The organisation does not need one answer for every task. An enterprise assistant may serve general drafting while a custom service handles a narrow workflow with additional controls. That arrangement needs clear boundaries so users know which information and actions belong in each place.

I would approve a custom build only when the unmet requirement is specific enough to test and important enough to justify its operating cost. If existing tools meet the need, using them is a sensible engineering decision.

The final recommendation should name the chosen task, the product configuration, the evidence from the trial, the unresolved risks and the accountable owner. Revisit it when the requirement or service changes. A buy-or-build decision is a decision about today's supported work, not a permanent declaration of allegiance to a platform.
