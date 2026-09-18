---
title: "When two reports disagree, start with the grain"
date: "2026-09-18"
retrospectiveDate: "2026-02-21"
summary: "Conflicting totals are often counting different things. Trace the row grain, joins and reporting window before deciding which report is wrong."
tags: ["Data", "Integration"]
published: true
---

Two reports can use the same source and still disagree without either query failing. One counts customers. Another counts orders. A third counts rows after orders have been joined to their line items, but still labels the result as customers.

I would start a reconciliation by asking what one row represents at each stage. That is the grain of the data. Until it is clear, comparing totals can become an argument about numbers that were never meant to be equal.

## Put a noun beside each row

Use plain language: one row per order, one row per product on an order, one row per customer at the end of a month. The last part matters. A snapshot and a transaction table can describe the same business while answering different questions.

Ask the report author to identify the key that should make each row unique. Then test it. A column called identifier is not proof that it is unique in the extracted dataset. It may be unique only within a branch, a source system or a particular version.

Keep the intended grain beside the actual result. If the business wants customers served during a period, the underlying activity table will need a deliberate rule for counting customers. Counting activity rows is a different measure, even if the values happen to be close in a quiet month.

This is also where apparently harmless labels need attention. Active, completed and current may describe a status at extraction time or a status during the reporting period. Those meanings cannot be exchanged without affecting the answer.

## Follow a fictional order through the join

Consider an entirely fictional retailer. A customer places an order containing several products. The order table stores the delivery fee once. The line table stores each product separately.

Join the order to its lines and the delivery fee appears on every resulting line. Summing that repeated fee overstates the delivery fees charged. Nothing has gone wrong with the database engine. It has returned the rows the query requested.

The fix depends on the question. For order-level charges, aggregate at order level before combining the result with a product analysis, or keep the measures in a model that respects their different grains. Do not apply a blanket distinct operation and hope it removes the right repetition.

A similar problem appears when a descriptive table contains multiple historical versions of a customer. Joining on customer identifier alone may match several versions. Decide whether the report needs the current description or the description applicable when the order occurred, then implement that rule explicitly.

I would trace one fictional order through every stage with the report authors in the room. Seeing the same delivery fee repeat is usually more useful than debating a large final total.

## Freeze the comparison window

Once the grain is understood, hold the other conditions still. Compare extracts from the same effective point in time, with the same inclusion rules and date boundaries.

Created date, completed date and posted date are not substitutes. Neither are local business dates and timestamps interpreted in a different time zone. An event around midnight can land in a different reporting day if the conversion is inconsistent.

Write the period as an explicit boundary, including how the end is treated. Then inspect late entries and corrections. A report rerun today may legitimately differ from the version produced at month end if the source allows backdated changes.

For reproducible reporting, decide whether the business needs a frozen published result or a current restatement. Preserve the distinction in the report label. A screenshot of an old total and a live query are weak reconciliation partners unless their time basis is known.

## Reconcile differences as sets

I would compare the underlying keys before arguing over the aggregate. Identify records present only in the first report, only in the second, and in both with different values. Split those groups by cause rather than treating the entire gap as one defect.

Possible causes include a filter difference, an unmatched reference, a repeated join or a later correction. Keep a residual category for unexplained differences. It is better to admit a remainder than to hide it inside a balancing adjustment.

Check whether unmatched records were dropped by an inner join. A missing category mapping should not silently remove valid activity. Depending on the decision, the record may belong in an explicit unknown group or a controlled exception queue.

The distinction between [missing data and zero](/blog/the-difference-between-missing-data-and-zero) matters here too. Replacing a missing value can make the reports appear closer while concealing an incomplete source.

Finish with a short reconciliation note: the agreed grain, period, definition and explanation for each difference. If both reports serve different decisions, retain them with clearer names. If one is wrong, correct the logic and add a test that recreates the defect. Matching totals on a single run is useful evidence, but a repeatable explanation is what makes the reconciliation worth keeping.
