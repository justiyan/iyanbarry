---
title: "Making a migration reconcile before calling it complete"
date: "2026-09-18"
retrospectiveDate: "2026-03-24"
summary: "A migration is complete when the destination can be explained against the source. Plan reconciliation, exceptions and cutover evidence before moving the data."
tags: ["Data", "Integration"]
published: true
---

"The import finished" is a technical status, not a migration acceptance decision. The destination may contain records, but the organisation still needs to know whether the right records arrived with the right relationships and meaning.

I would design the reconciliation before the first migration run. That forces the team to define what is being moved, what will intentionally change and what evidence the owner needs before relying on the new system.

It also makes awkward exceptions visible while there is still time to resolve them.

## Define the population and the cutoff

Start with the source population. Include the relevant statuses, periods and record types, along with explicit exclusions. Record the extraction point or cutoff so later changes do not make the comparison ambiguous.

If the source remains active during migration, decide how changes after the initial extract will be captured. A staged load followed by a final delta requires a reliable way to identify updates and deletions. Do not assume a last-modified field covers every kind of change without testing it.

Document transformations that alter the destination representation. A source record may split into several destination records, or several source values may map to one approved category. Equal row counts are not always expected, but the relationship should be explainable.

Where identifiers change, retain a controlled mapping between source and destination keys. That mapping helps investigations and avoids relying on names or descriptions as if they were stable identities.

## Use more than a total count

Counts are a useful starting point. Compare them by meaningful segments as well as overall. A missing group can be concealed by duplicates elsewhere, leaving an apparently correct grand total.

Test key uniqueness at the intended grain, required references and the presence of mandatory information. Check date ranges and category distributions for signs of unexpected conversion. Where relevant, reconcile amounts or quantities using an agreed basis and rounding treatment.

A fictional membership migration illustrates the problem. Active and inactive memberships might arrive in the expected overall volume, while renewal dates are lost for a subset. A count-only check would pass even though the renewal workflow could fail after cutover.

Select examples covering ordinary and awkward cases: merged records, historical changes, cancelled activity and missing optional information. Trace them from source through transformation to the user-facing destination. Sampling supports broader controls; it should not substitute for full checks that can reasonably be automated.

The work in [starting with the grain](/blog/when-two-reports-disagree-start-with-the-grain) is useful here. A migration comparison needs to know what a row represents before deciding that the populations match.

## Keep exceptions out of the balancing figure

Create an exception register with the affected scope, cause, owner and proposed resolution. Distinguish a source defect from a transformation defect and an approved business change.

Do not force reconciliation by adding a miscellaneous adjustment that nobody can explain. If a residual difference remains, show it. The business owner can then judge whether it is acceptable for the intended use, with appropriate specialist input where required.

Some exceptions may be accepted temporarily. Give them an expiry or a follow-up condition and make their impact visible to the receiving team. A signed acceptance should not turn unresolved defects into forgotten history.

Protect the evidence. Migration extracts and comparison files may contain personal or commercially sensitive information. Restrict access, record their purpose and apply the appropriate retention and disposal arrangements. More detailed evidence does not mean everyone needs a raw copy.

I would keep each trial's results rather than overwriting them with the latest green summary. The record should show which mapping version and source snapshot produced the accepted outcome.

## Make cutover a controlled business event

Run at least a representative rehearsal before relying on the destination. Include the final change capture, validation, user checks and the time required to resolve foreseeable exceptions. A technically fast load can still leave insufficient time for acceptance.

Name the person authorised to proceed and the conditions that require a pause. Agree a rollback or forward-recovery approach that reflects what can actually be reversed. Once users begin creating new transactions in the destination, simply switching back may lose or duplicate work.

After cutover, reconcile the first live activity and check the workflows that depend on migrated history. A record visible on a screen may still be unavailable to a scheduled process or report because of a relationship or permission issue.

Keep the old source available in an appropriate controlled state for the agreed period, where obligations and operating needs justify it. Prevent it from becoming an unofficial second production system.

The acceptance note should identify the population, control results, approved exceptions and owner. I would call the migration complete when that evidence supports using the destination for its intended work, not when the progress bar reaches the end.
