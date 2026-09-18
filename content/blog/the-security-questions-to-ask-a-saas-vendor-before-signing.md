---
title: "The security questions to ask a SaaS vendor before signing"
date: "2026-01-07"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "SaaS security due diligence should test the access, evidence and exit arrangements your organisation will depend on, before commercial leverage disappears."
published: true
---

The security questionnaire is complete, but the contract is still ambiguous about obtaining audit records during an incident. That is a poor trade. The organisation has collected a large amount of assurance language while leaving one of its likely operational needs unresolved.

For a SaaS purchase, I would start with a few situations the service must handle well. Who can see our data? How will we investigate suspicious activity? What happens when a worker leaves? Can we recover or leave? The answers should shape the contract and configuration, not sit in a procurement folder after signing.

## Match the review to the proposed use

A public appointment booking tool and a repository of sensitive employee records warrant different scrutiny. Describe the information, the users and the business process before asking the vendor to explain security. Include integrations and any proposed use by external parties.

NIST's framework calls for supplier due diligence before entering formal relationships and for supplier risks to be managed over time. That supports a proportionate review rather than the same questionnaire for every product. Proportionate does not mean superficial; it means spending effort on the consequences that apply.

For personal information, bring privacy expertise into the decision. OAIC guidance makes clear that outsourcing storage does not necessarily mean an entity stops holding the information. The applicable privacy and contractual obligations need qualified review. Australian hosting alone does not answer every question about access, disclosure or control.

## Follow one record through the service

Ask the vendor to demonstrate how an administrator restricts access to a record, how a support worker may access it and what happens when it is exported. Clarify which controls are included in the quoted edition. A feature available in an enterprise brochure may not be in the subscription you are buying.

Have the business owner explain who genuinely needs access. Role design is partly your responsibility. A vendor can supply detailed permissions while the customer assigns everyone a broad role for convenience. The review should identify the decisions your own team must make before launch.

Ask about staff and subcontractor support access, approval arrangements and records of that access. Where the vendor cannot provide customer-visible logs, clarify what evidence it can produce, through which channel and under what commercial terms. A verbal promise from a sales engineer is worth converting into something procurement can rely on.

## Rehearse an incident request before the incident

Consider a hypothetical consultancy buying a client document portal. Its concern is that an external collaborator might download a folder they should not have seen. The useful demonstration is not a general tour of the security dashboard. It is whether an authorised customer administrator can find relevant access and download activity for the intended plan.

If the vendor must perform the investigation, ask how the request is authenticated, who receives it outside business hours and what records are retained. Confirm any limits on the evidence. An absence of a particular event in a dashboard does not establish that the event could not occur.

The contract should address incident communication in terms meaningful to your organisation. Ask counsel to review the notice provisions and their relationship to your obligations. Do not assume a supplier's notification promise is identical to the time available for your own assessment or reporting.

Your response team also needs to know who can preserve relevant information. That arrangement belongs alongside the contact details described in [preparing for a cyber incident before anyone is on call](/blog/preparing-for-a-cyber-incident-before-anyone-is-on-call).

## Test departure and exit as different events

Employee departure asks whether one person's access can be removed, including sessions and local accounts. Supplier exit asks whether the organisation can move its information and continue the process elsewhere. Both deserve a demonstration.

For offboarding, verify what the identity integration does and what remains a manual task. Some functionality may vary by configuration or subscription. Request a supported procedure and test it with a controlled account rather than treating a single sign-on logo as proof of complete lifecycle management.

For exit, request a sample export in the proposed format. Have the people who would use it inspect relationships, attachments and metadata. A collection of files may be technically exportable yet insufficient to reconstruct the workflow. Confirm costs, access after termination and the treatment of retained copies through appropriate contractual and privacy review.

## Turn unresolved answers into a buying decision

A supplier does not need to answer every question with yes. The organisation needs to know which gaps it can accept, which it can mitigate and which make the service unsuitable. Put material gaps beside the business benefit and the available alternatives.

Record customer responsibilities explicitly. Someone must configure access, review collaborators, maintain integrations and test the exit procedure. These jobs should have owners before the service enters production. A supplier assurance report does not perform them on your behalf.

[Handling security exceptions with an expiry date](/blog/handling-security-exceptions-with-an-expiry-date) provides a way to manage accepted limitations, but do not use an exception to hide a fundamental requirement the service cannot meet. The best time to resolve that mismatch is while you can still choose another product.
