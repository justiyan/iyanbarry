---
title: "Data loss prevention needs a workflow, not just a policy"
date: "2026-09-18"
retrospectiveDate: "2026-01-21"
tags: ["Cybersecurity", "Governance"]
summary: "DLP controls work better when staff have an approved way to share information, a useful response to blocks and a review process for mistakes."
published: true
---

A finance officer tries to send an approved document to an external adviser. The message is blocked, the notification says contact IT, and the adviser is waiting. The organisation has successfully interrupted a transfer. It has not yet demonstrated that it has protected information while allowing legitimate work.

Data loss prevention needs an operating workflow around the technology. Classification, permissions and detection rules matter, but so do the next steps available to a person whose work has stopped. If those steps are slow or obscure, the control will be under constant pressure for exceptions.

## Choose a flow, not every possible data type

Start with a defined movement of information. Payroll information sent to an approved adviser, customer records exported from a service system or confidential project files shared with contractors are different flows with different owners.

Ask what information is needed, by whom and through which approved channel. The business owner must help distinguish legitimate transfer from inappropriate disclosure. A technical rule cannot reliably infer a business purpose that nobody has defined.

For personal information, OAIC guidance addresses reasonable security measures and the information lifecycle. It also notes that technical and organisational measures are relevant to securing personal information. A DLP product is therefore one part of the response, not a substitute for deciding what to collect, who needs access and how long information should remain available.

Get qualified privacy or legal advice where the proposed flow or retention arrangement raises obligations. This is particularly important when an apparently ordinary export includes information about people that the recipient does not need.

## Make the approved route easier to explain

Consider a hypothetical regional consultancy sending employee reimbursement details to its accounting provider. The existing habit is to email a spreadsheet. The new policy prefers a restricted portal, but only the finance manager has portal access and staff do not know how to request it.

Blocking the email before fixing the portal access process will create a predictable support problem. The team should establish the approved users, recipient verification, access duration and an urgent route before enforcement. Test the arrangement with the accounting provider, including how an incorrect upload is handled.

The DLP notification can then give a useful instruction: use the approved portal, with a link to internal guidance and a support reference. It should avoid exposing sensitive content in the notification itself. Staff need enough information to act without distributing the very material the rule is intended to protect.

This is a workflow change with a technical control behind it. Training should demonstrate the actual task, including what to do when the approved recipient cannot access the file. A policy acknowledgement alone will not reveal those practical defects.

## Learn from false positives before broad enforcement

Detection rules can flag legitimate material and miss information they were intended to identify. Treat the initial configuration as something to evaluate, not a guarantee. Use representative, appropriately controlled test material and a staged deployment where the platform supports it.

Review the results with people who understand the business process. A matching pattern in an invoice reference may not be the kind of information the rule is intended to protect. Conversely, a harmless-looking document title does not establish harmless content. Adjust rules based on evidence and record what remains outside reliable detection.

Be explicit about channels covered. Email monitoring does not automatically establish coverage of browser uploads, local copies or every SaaS integration. Product capabilities and configuration differ. The report should identify the tested channels and known limits rather than claiming that data cannot leave the organisation.

Assign someone to handle alerts and appeals. A queue of unreviewed blocks tells little about whether genuine disclosure risk has been addressed. Measure the quality and timeliness of decisions, with attention to unnecessary disruption and repeated attempts to find another route.

## Keep exceptions specific and reviewable

Sometimes a legitimate transfer cannot use the default route. Provide an authorised exception process that checks the information, recipient and business need. Limit the exception to the relevant transfer or user group instead of disabling the rule across the organisation.

Record who approved the action and why. The amount of information collected in the exception record should be proportionate; copying the entire sensitive document into a general ticket is a poor way to document its handling. Restrict the record and refer to the controlled source where possible.

Repeated exceptions are useful evidence. They may reveal a genuine workflow the policy missed or a business practice that needs redesign. [Handling security exceptions with an expiry date](/blog/handling-security-exceptions-with-an-expiry-date) explains how to make those cases lead to a decision instead of indefinite bypasses.

## Judge the process by what happens after a block

Ask a staff member to demonstrate a normal approved transfer and a blocked one. Can they understand the message, obtain help and finish the legitimate task without resorting to a personal account? Can the reviewer distinguish a mistaken rule from an unsafe request?

Use those observations to improve both the controls and the instructions. [Making security awareness useful to busy staff](/blog/making-security-awareness-useful-to-busy-staff) is a useful companion because much of the learning belongs inside the task itself.

A credible DLP programme can describe the flows it covers, the limits of its detection and the decisions made when the control intervenes. It should not need to promise that a policy or product prevents every possible disclosure.
