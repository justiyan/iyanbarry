---
title: "Who can see the data after you join it"
date: "2026-09-18"
retrospectiveDate: "2026-03-28"
summary: "Joining datasets can reveal information neither source exposed alone. Review the purpose, audience and access controls for the combined result."
tags: ["Data", "Integration"]
published: true
---

Permission to read two datasets does not automatically settle permission to combine them for a new purpose or distribute the result. The join can reveal something neither source made obvious on its own.

A location, a date and an activity category may appear ordinary in separate reports. Together they can make a person identifiable or expose information about their circumstances. Removing a name does not necessarily remove that possibility.

I would review the combined result as a new information product, including how people can filter and export it.

## Assess what the result reveals

Consider a hypothetical organisation combining building access activity with a directory of work locations. The joined report may reveal individual attendance patterns, even if the original purpose was to understand space use.

The design question is whether that individual detail is necessary for the approved decision. A broader summary might meet the need, although aggregation itself is not a guarantee of anonymity. Small groups and unusual patterns can still allow inference.

Review likely combinations with information already available to the audience. A reader may know who works at a particular location or who attended an unusual event. De-identification depends on the data and the context of access, not merely the absence of direct identifiers.

I would ask a reviewer to try to infer something the intended audience should not learn. Include drill-through, cross-filtering and repeated queries. Restricting one visual is not enough if another route exposes the underlying records.

## Separate authority from technical access

The source system may permit an integration identity to read a broad dataset for an approved processing task. That does not mean every report reader should inherit the identity's reach.

Map the purpose and audience explicitly. Identify who needs summary information, who needs record detail and who can administer the pipeline. The people operating the platform may require diagnostic access, but that access should be justified and controlled rather than assumed.

For organisations subject to the Australian Privacy Principles, use or disclosure of personal information needs an applicable basis under those principles. A secondary purpose is not authorised simply because the organisation already holds the data. Other obligations may also apply depending on the entity, information and context.

Get the relevant privacy or legal advice where the use is uncertain. A technical access review cannot resolve every question about whether the organisation should perform the analysis at all.

Document the approved use in terms people can understand. "Analytics" is too broad to tell a future team whether a proposed new join falls within the intended boundary.

## Enforce the boundary in the actual delivery path

Use access controls suited to the platform and test them with representative roles. A report filter chosen by the user is not an authorisation control. A hidden column is not a reliable security boundary if it remains available through export or another query path.

Where row or object restrictions are used, verify their behaviour for the actual role types and consumption routes. Administrative and editing roles can have different capabilities from ordinary viewers. Avoid assuming the test account represents everybody.

Inspect caches, extracts and scheduled distributions. A secure source does not protect a spreadsheet attachment after it has been delivered to a broader group. A search index or reporting store also needs its own access and lifecycle controls.

Apply the minimum information needed for the decision. Omitting unnecessary detail reduces exposure and can simplify the access model. It does not remove the need to assess the remaining result.

The same reasoning applies when [preparing data for AI](/blog/getting-your-data-ready-for-ai-without-cleaning-everything). Retrieval and generated summaries can reveal linked information even when the interface looks different from a conventional report.

## Review changes that alter the audience or meaning

A join that was acceptable for a small authorised team can become inappropriate when the report is shared more widely. A new source or finer location detail can also change what readers can infer.

Build a review trigger into those changes. The owner should know when someone adds a field, enables export or changes group membership. Do not treat approval of the first version as approval of every later use.

Test revocation. When access is removed, confirm what happens to the live report and acknowledge the limits for copies already exported. Those copies need handling rules and, where feasible, controlled distribution rather than a promise that revocation reaches everywhere automatically.

Keep evidence of the purpose decision, role tests and known limitations. Where the result contains personal information, security measures should reflect the sensitivity and possible consequences, with the applicable obligations assessed in context.

I would approve the combined product only after someone can explain what it reveals, why that is needed and who may receive it. The fact that the join is technically easy should not make those questions disappear.
