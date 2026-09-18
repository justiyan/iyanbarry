---
title: "Why a successful data load can still produce a bad report"
date: "2026-09-18"
retrospectiveDate: "2026-02-25"
summary: "A green pipeline status only says the job finished. Check whether the loaded information is complete, meaningful and fit for the report people rely on."
tags: ["Data", "Integration"]
published: true
---

A pipeline can finish successfully, copy every row it received and still leave a report unusable. The transport worked. The information did not meet the needs of the decision.

That distinction deserves a place in the design, not an apology after someone spots a strange chart. I would separate technical completion from data acceptance and from permission to publish. Each answers a different question, and each can fail while the others pass.

## The source can send an empty shell

Imagine a fictional facilities system that creates a job record before anyone enters its location, priority or assigned team. An overnight extract faithfully copies those records. The destination now has valid identifiers and very little information with which to allocate work.

A row count will not catch that problem. Neither will a successful HTTP response or a completed import. The checks need to examine the fields required for the intended use, including combinations of fields that only make sense together.

Some blanks are legitimate. A future job may not yet have an assigned technician. A completed job without a completion date is a different issue. Rules should depend on the record's lifecycle and the decision being made, rather than demanding that every field be filled everywhere.

Check for quiet substitutions as well. A connector might turn an invalid date into a blank, map an unfamiliar status to a default or truncate a value that exceeds the destination field. The load can appear orderly while discarding information the report needs.

## Build an acceptance ladder

I would review the load in stages. First establish that the expected delivery arrived, from the right source, for the right period. Then establish that it can be parsed using the agreed structure.

Next test identities and relationships. Are the expected keys present and unique at the intended grain? Do required references resolve? Has a changed lookup table caused records to fall out of a join?

After that, test meaning. A closed record should satisfy the agreed closure conditions. A quantity may need a unit. A status transition may require a date. These checks need input from someone who understands the workflow, not just its storage format.

Finally, compare the accepted result with source control information where available. Counts by category, ranges of dates and relevant totals can reveal gaps that a single overall count misses. A source with no reliable control totals requires a different assurance method; it does not justify inventing certainty.

This ladder need not become a heavyweight framework. For a small feed, a readable acceptance summary and a few targeted tests may be enough. The point is to make the stages explicit so a green transport status does not stand in for all of them.

## Decide what happens to doubtful records

A quality rule is incomplete until the team knows what to do when it fails. Stopping every report for any minor defect is rarely useful. Publishing everything and hoping users notice is worse.

For a critical measure, a missing source segment may justify withholding the new publication and showing the last accepted result with its age clearly marked. A harmless formatting issue might permit publication with a tracked correction. A record that could lead to an unsafe or inappropriate action may need to be quarantined from that workflow.

Define those responses before an incident. Identify who can approve an exception and what evidence they need. An override should record the affected scope and expiry, rather than permanently disabling a check because it interrupted a busy morning.

Avoid exposing sensitive record contents in an alert. The notification can state the rule, impact and location of the restricted investigation detail. Debugging is not a reason to distribute a copy of the source to a wider audience.

## Verify the report, not just the table

Data can pass ingestion checks and still be misrepresented later. A model relationship can duplicate measures, a filter can exclude unknown categories or a visual can display missing values as zero. Validation needs to reach the actual output people use.

Take a small set of known cases through the full path and compare their treatment with the agreed definitions. Include incomplete and corrected records. The work described in [designing a useful data-quality check](/blog/designing-a-useful-data-quality-check) starts with the consequence, so the tests remain connected to the decision.

Put coverage and freshness near the result. Users should not need access to an engineering console to discover that part of a report is delayed. Explain whether the view is complete, provisional or based on an earlier accepted load.

I would close a load incident only after the corrected data has reached the report and the owner has checked the affected decision. Restarting a job may be part of the repair, but it is not evidence that the information is now right. The acceptance record should show what changed, what was retested and whether any published result needs correction.
