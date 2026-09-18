---
title: "The difference between missing data and zero"
date: "2026-03-22"
updated: "2026-09-18"
summary: "Zero is a result; missing information is a state of knowledge. Reports need to show the difference before readers draw the wrong conclusion."
tags: ["Data", "Integration"]
published: true
---

A blank space in a report can be uncomfortable. It interrupts the chart and invites questions. Replacing it with zero makes the page look finished, but it may also change the meaning of the information.

Zero says there was none of the thing being measured. Missing says the report does not have a value. Those are different statements, and decisions can go wrong when the presentation treats them as interchangeable.

I would rather show an honest gap than a tidy result the source cannot support.

## Describe what is missing

Missing information has several possible causes. The activity may not have occurred. The source may not have submitted its return. A field may not apply to that type of record. A value may have been withheld because the audience is not authorised to see it.

Those states should not automatically share the same display. Where the distinction affects the decision, model it explicitly with an appropriate status or coverage field. A single blank value cannot explain its own cause.

In SQL, NULL is distinct from zero and an empty value. Comparisons involving NULL can return unknown rather than true or false. That matters when writing filters: asking whether a value differs from a target does not necessarily capture missing values as well.

The technical behaviour varies across tools and expressions, so test the actual report path. A database, spreadsheet formula and charting component may each handle an absent value differently. A correct source representation can still become a misleading visual default.

## Walk through a missing return

Imagine a fictional network of repair workshops submitting a daily count of completed repairs. One workshop has submitted a confirmed zero. Another has not submitted anything. A third is closed that day and is outside the expected reporting population.

The first result can reasonably appear as zero. The second needs a missing-submission status. The third may be shown as not applicable or excluded according to the agreed reporting rule. Combining all of them as zero would conceal the reporting gap.

If management compares performance, the consequences become obvious. The workshop that did not submit could look unproductive when the report has no evidence of its output. Alternatively, excluding it from a rate without explanation could make the overall result look better than the incomplete coverage justifies.

I would display the coverage alongside the measure and state whether the total is provisional. Where a decision requires a complete submission, wait or use a clearly labelled fallback. The right response depends on the decision, not the desire to fill every cell.

This is one reason to [agree on the decision before building a dashboard](/blog/before-building-another-dashboard-agree-on-the-decision). A missing value in an exploratory trend and a missing value used to release a payment do not warrant the same treatment.

Averages and rates need special care because missing records can change the population behind the result. Decide whether the denominator represents expected submissions, received submissions, eligible activity or something else.

Do not switch between those populations silently. A rate calculated from available records may be useful, provided the reader knows what is absent and why the result is limited. It is not the same as a rate for the full expected population.

Similarly, a total of known values should not imply that unknown values are known to be zero. Label it as the recorded total where that distinction matters. Show the outstanding coverage in a way the audience can understand without inspecting the calculation.

Historical comparisons need a consistent basis too. Comparing a complete prior period with a partly submitted current period can produce an apparent decline that disappears when the remaining information arrives. Either compare equivalent coverage or make the difference prominent enough to affect interpretation.

## Design the correction path as well as the symbol

Choose display terms with users. A dash can mean zero, unavailable or not applicable to different readers. Plain labels and a short explanation are often safer than a symbol whose meaning lives only in a hidden legend.

Preserve the distinction in downloads. A chart might correctly show an unavailable status while its exported spreadsheet inserts zero. Test the output people use for follow-up analysis, not just the main page.

Assign someone to resolve missing submissions and record when the source becomes complete. Decide whether the report will update automatically, publish a revised version or notify recipients of a material correction. A provisional label should have an operating process behind it.

There are situations where a default zero is justified. A model may explicitly define absence of a matching transaction as no recorded activity within a complete population. Document and test those assumptions rather than applying the default everywhere.

I would ask a reviewer to inspect a confirmed zero, an unknown value and a not-applicable case before releasing the report. If they cannot tell the difference, the design needs more work. The report should help people understand what is known, including when the available information is not enough to conclude anything yet.
