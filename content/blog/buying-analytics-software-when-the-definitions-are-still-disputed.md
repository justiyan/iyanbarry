---
title: "Buying analytics software when the definitions are still disputed"
date: "2026-09-18"
retrospectiveDate: "2026-04-20"
summary: "When teams disagree on a measure, software cannot decide its meaning for them. Use a narrow proof to separate governance gaps from genuine product requirements."
tags: ["Data", "Integration"]
published: true
---

A new analytics platform can make a disputed number easier to distribute. It cannot decide which definition the organisation should use.

That is an uncomfortable distinction in a buying process. The demonstration shows clean charts, shared metrics and quick answers. The organisation sees its own reporting frustration and hopes the product will remove it.

I would slow down long enough to separate the problems. Some are technical limitations worth paying to solve. Others need a business decision before any tool can produce a result people will accept.

## Diagnose the disagreement in plain language

Ask each team to explain what its measure counts, which period it covers and what decision it supports. Avoid beginning with the formula; people can agree on the arithmetic while disagreeing about the population.

A fictional service company might have competing definitions of an active customer. Sales includes anyone with an open opportunity. Operations includes customers receiving a service. Finance uses a definition tied to an agreed financial reporting purpose.

The right outcome may be several explicitly named measures rather than one universal definition. Where a shared measure is required, an accountable owner needs to approve its meaning and treatment of exceptions.

A semantic model can store and reuse that approved definition. It does not confer the authority to choose it. The work of [finding the metric owner](/blog/finding-the-owner-of-a-business-metric) should happen before the procurement team treats a shared metric layer as a complete answer.

Also check whether the disagreement is genuinely semantic. Different cutoffs, missing source segments and duplicated joins can create conflicting totals even when everyone agrees on the rule. Those defects need technical investigation rather than another policy workshop.

## Turn one disputed measure into a proof

Choose a narrow measure that matters and has representative awkward cases. Agree its purpose, owner and provisional definition. If disagreement remains, record the alternatives rather than hiding them in the demonstration dataset.

Use an appropriately protected or synthetic dataset that includes missing values, late corrections and changes in classification. A vendor's tidy sample may demonstrate the interface while telling you little about your difficult reporting conditions.

Ask the candidate solution to implement the definition and show how it is tested, changed and explained. Have a business reviewer inspect included and excluded cases. Have a technical reviewer trace the result to the source and transformation.

Test a definition change. Can the organisation identify affected reports, preserve historical interpretation and control who approves the update? The ability to edit a formula quickly is not enough if it changes a published measure without a visible record.

The proof should produce evidence of fit and a list of unresolved work. It should not be presented as a successful deployment simply because the chart renders.

## Buy against requirements the proof exposes

The exercise may reveal genuine product needs: controlled distribution, reusable calculations, better refresh monitoring or an access model the current tooling cannot support adequately.

Write those requirements in terms of observable behaviour. For example, an authorised reviewer must be able to trace a figure to its definition and data period. A user without permission must not retrieve restricted detail through an export or alternate query path.

Ask the supplier to demonstrate those behaviours in the proposed licence and configuration. Features in a product family are not necessarily available in the package being quoted.

Include operating effort and exit arrangements. Who maintains models, handles source changes and reviews access? Can the organisation retrieve its definitions and data in a usable form if it changes products? How much specialist support does ordinary maintenance require?

Where personal information is involved, assess the service and handling arrangements against the applicable requirements. Do not equate a hosting location or a security feature list with blanket compliance. The implementation, purpose and access decisions remain part of the organisation's work.

## Allow the purchase to become smaller

A useful proof can show that existing tools are adequate once the definition and ownership are fixed. That is not a failed procurement exercise. It has prevented a purchase from being used to avoid a decision the organisation still needed to make.

Alternatively, the proof may justify a limited first purchase for a known workflow. Expand when the organisation has evidence that the operating model works, rather than buying a broad rollout on the strength of a generic demonstration.

Set acceptance criteria before signing. Include the business review, technical reconciliation and support handover, not just delivery of licences or completion of training.

Keep unresolved definitions out of promised benefits. A proposal should distinguish what the software can enable from the business work required to make that useful. Otherwise the implementation team inherits an expectation it cannot meet through configuration.

Buy analytics software to solve demonstrated technical and operating needs. Ask business owners to settle the meaning of the numbers. Keeping those responsibilities separate makes both the purchase and the resulting reports easier to defend.
