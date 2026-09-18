---
title: "Moving reporting off a shared spreadsheet without breaking the process"
date: "2026-03-11"
updated: "2026-09-18"
summary: "A shared workbook often contains an undocumented operating process. Preserve the useful rules and handovers before replacing its technology."
tags: ["Data", "Integration"]
published: true
---

The awkward part of replacing a shared spreadsheet is rarely moving the cells. It is discovering what people do between opening the file and sending the finished report.

A colour might mean an exception has been checked. A hidden tab might contain the only current mapping of categories. Someone may fix a source error each week without telling anybody because it is quicker than raising a ticket.

I would treat the workbook as evidence of a process before treating it as a technology problem. Some of that process deserves to survive the migration. Some deserves a proper conversation.

## Watch a complete reporting cycle

Ask the person who prepares the report to show the work from the first input to the final distribution. Include downloads, copied values, manual adjustments and the questions they send to colleagues. A tour of the finished spreadsheet will miss most of this.

Record the purpose of each step. Separate a business rule from a workaround. Changing a category because the source uses an obsolete label is different from changing it because management has approved an exception for this period.

Inspect formulas, named ranges, macros and external links, but do not assume the rules are all encoded. Comments and formatting can carry meaning that a database import will discard. Ask about cells that are deliberately left blank and sheets that nobody is supposed to touch.

The permission arrangements need the same attention. A shared location may expose more information than intended, while a local copy may contain changes nobody else can see. Reproduce neither by default. Decide which people need to read, edit, approve and distribute each part of the replacement.

## Give hidden rules somewhere explicit to live

Consider a hypothetical community workshop reporting equipment use. The coordinator manually excludes cancelled bookings and annotates sessions moved to another room. The workbook's totals depend on those choices, but the booking export does not contain the explanation.

A replacement that imports the export and sums it will look more automated while answering a different question. I would document the cancellation rule and provide a controlled way to record a relocation, including who made the change and why.

Some adjustments should move upstream into the booking process. Others may belong in a reporting adjustment register because the source cannot represent them. Keep the original value available for traceability and distinguish corrections from approved overrides.

Give the metric owner the unresolved cases. The developer should not infer policy from cell colours. The approach in [finding the owner of a business metric](/blog/finding-the-owner-of-a-business-metric) helps separate the calculation from the authority to decide its meaning.

Do not preserve every habit just because it exists. Ask whether a manual step still serves a decision or merely repairs a limitation that the new process removes. Retiring unnecessary work is part of the migration, provided the affected people agree.

## Replace one dependency at a time

I would choose a narrow output for the first transition rather than rebuilding the entire workbook at once. Pick a report with a known audience, manageable inputs and an owner who can compare the results.

Run the old and new process over the same reporting window. Reconcile the underlying records and adjustments, not just the final total. Equal totals can conceal different errors, and different totals can reflect an intentional correction.

Ask the preparer to complete the ordinary awkward tasks in the replacement. Can they investigate a missing input? Can an authorised person explain an exception? Can someone else finish the cycle when the usual owner is away?

Measure the whole process, including review and correction. A faster import does not prove the new workflow saves effort if everyone spends longer resolving discrepancies. Record what becomes easier, what becomes harder and what still needs a manual step.

For personal information, keep the transition copies controlled and plan their disposal or retention under the applicable obligations. Parallel running creates extra copies; it should not become an excuse to keep working data indefinitely.

## Set a cutover that people can recognise

The migration needs a point at which one version becomes authoritative. Agree the final reporting period for the workbook, the first period for the replacement and who can approve that change.

Tell recipients where to find the new output and how the definitions differ, if they do. Preserve a readable explanation of any break in historical comparisons. Do not quietly replace an old report while leaving the same title and expecting users to discover changed rules themselves.

Keep an appropriate historical copy where required, but make its status obvious and restrict editing. Redirect people who open the old workbook to the current process. Otherwise the retired file may continue producing plausible reports long after its inputs stop being maintained.

I would consider the move complete when the new owner can operate the reporting cycle, explain the result and recover from a routine failure without relying on the original spreadsheet author. Moving the cells is only one part of getting there.
