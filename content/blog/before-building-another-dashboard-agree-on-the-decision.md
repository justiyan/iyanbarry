---
title: "Before building another dashboard, agree on the decision"
date: "2026-02-24"
updated: "2026-09-18"
summary: "A dashboard earns its place when someone can name the decision, the deadline and what they will do differently. Start there before choosing charts."
tags: ["Data", "Integration"]
published: true
---

A request for a dashboard can sound wonderfully specific. The team wants a page, a few charts and a refresh button. Everyone can picture the output. The trouble starts when you ask what anyone will do after looking at it.

I would rather spend the first conversation on that question than on the software. A dashboard that supports a clear decision can be quite plain. A dashboard without one can consume a surprising amount of attention while changing very little.

## Write the decision in a sentence

Ask the intended user to finish this sentence: when this information shows a particular condition, I will take a particular action before a particular deadline. If they cannot finish it, work through a recent example of the decision they are trying to improve.

That exercise separates several different requests. Someone monitoring daily work needs an exception view. Someone explaining a monthly result needs context and a stable comparison. Someone investigating an unfamiliar problem may need a dataset and room to explore, rather than a fixed dashboard at all.

Consider a hypothetical maintenance coordinator deciding where to send available technicians tomorrow. A useful view might show overdue work by location, required capability and whether access has been arranged. A colourful trend of all requests received this year would not answer the same question. It might be useful elsewhere, but it should not drive this design.

Record who can act as well. If the dashboard reader cannot change the roster, approve the expense or escalate the delay, the design needs a handover to someone who can. Otherwise the report becomes a daily reminder of a problem nobody in the room can resolve.

## Set the clock before the refresh rate

Freshness should follow the decision. Ask how old the information can be before the intended action becomes unreliable. Then examine how quickly the source itself changes and when people actually update it.

A page refreshed every minute is not current if staff enter the underlying work at the end of the day. Displaying a refresh timestamp without explaining the source coverage can create confidence the system has not earned.

For the maintenance example, a verified afternoon snapshot might support tomorrow's allocation better than a live stream of incomplete jobs. An urgent safety issue would need a separate operational escalation path, rather than waiting for someone to notice a chart.

I would specify the required availability time, the information period covered and the behaviour when a source is late. Keep those separate. A report can load successfully while containing yesterday's information. Users need to know whether they can proceed, use a fallback or wait for correction.

## Agree what the number means

Before arranging the tiles, define the measures that drive action. What counts as overdue? Does a job waiting on customer access remain in the same category? Are cancelled requests excluded? Which date starts the clock?

These are business choices expressed through data. A developer can implement them, but should not have to make them silently. The [owner of the metric](/blog/finding-the-owner-of-a-business-metric) needs to settle the policy and explain exceptions.

Check the unit represented by each row too. Jobs, visits and tasks are different things. A visit with several tasks should not accidentally inflate a job count simply because the report joined the tables. The definition should say what is counted and where the authoritative record comes from.

Use a handful of fictional or appropriately protected examples to test the definition with the intended user. Include an awkward case, such as a reopened job. Agreement on a tidy example tells you less than agreement on the boundary.

## Give a spreadsheet a fair hearing

A spreadsheet can be enough when the audience is small, the decision is occasional and one accountable person can maintain the process. That is a reasonable starting point, provided access, versioning and checking fit the information involved.

I would first build the smallest useful view with existing tools. Watch the user make the decision. Note which columns they ignore, what they ask for and what they calculate elsewhere. Those observations are better requirements than a long wish list of charts.

Move beyond the spreadsheet when the operating burden warrants it: repeated manual consolidation, conflicting copies, access needs that cannot be managed safely, or frequent decisions that depend on reliable refreshes. The case should include support and maintenance, not just the appeal of a cleaner screen.

Before funding a larger build, ask the owner to accept a short decision brief containing the action, audience, definitions, freshness requirement and fallback. Give the prototype a review date. If nobody uses it to make the intended decision, revise or stop it rather than adding more charts.

The useful output of that first meeting may be a smaller dashboard, a controlled spreadsheet or no new report. I would count any of those as progress if the organisation has become clearer about the decision it needs to make.
