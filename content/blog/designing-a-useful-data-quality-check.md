---
title: "Designing a useful data-quality check"
date: "2026-09-18"
retrospectiveDate: "2026-03-08"
summary: "Tie each quality rule to a decision and an action. A useful check has a tolerance, an owner and a clear response when it fails."
tags: ["Data", "Integration"]
published: true
---

A data-quality rule should earn its place by catching something that matters. It is easy to create a large list of checks and much harder to keep people interested in their results.

I would begin with the harm a defect could cause. A missing postcode might be irrelevant to an internal workload total and important to a delivery. The same field can justify different treatment in different processes.

The aim is to stop avoidable mistakes without turning every unusual record into an emergency.

## Write the consequence before the condition

Choose a decision or action supported by the dataset. Describe what could go wrong if a particular value is absent, incorrect or late. Then design the condition that gives a useful warning of that problem.

For a hypothetical equipment hire service, a return date before a collection date may indicate a recording error. An unrecognised equipment identifier could prevent the organisation from knowing which item is available. Those defects have different consequences and may require different responses.

Some rules concern individual records. Others concern the delivery as a whole: a missing location, an unexpected period gap or a source segment that has stopped arriving. A perfectly valid set of records can still be incomplete.

Keep the wording understandable to the business owner. "Closed jobs require a recorded closure date" can be reviewed without reading a programming expression. Attach the technical implementation to that rule rather than expecting a manager to approve opaque code.

## Choose the response with the tolerance

A threshold without an action is only a coloured indicator. Decide whether a failure should block a particular workflow, quarantine affected records, publish a warning or create a correction task.

I would be strict about defects that could produce an inappropriate external action, while allowing a proportionate response to minor reporting issues. The distinction should be agreed in advance, not negotiated during every failed run.

Tolerances need context. A small number of missing records may be harmless in a broad trend and unacceptable in a payment instruction. A percentage can conceal the importance of the affected subset. Inspect critical categories separately rather than relying entirely on an overall pass rate.

Explain why the tolerance exists and who may change it. Avoid setting it simply above the current defect level so the dashboard becomes green. If the source routinely fails a necessary rule, record the accepted risk and the improvement work rather than redefining the problem away.

Put a time boundary on exceptions. An approved temporary waiver should expire or trigger review. Otherwise an emergency workaround can quietly become the permanent quality standard.

## Test whether the check catches the right thing

Use representative safe test records that should pass and fail. Include boundary cases and legitimate exceptions. A rule that rejects valid activity creates correction work and encourages people to bypass the controls.

Test missing values deliberately. An unknown value may not behave like a zero or an empty string in the query language. A comparison can produce an unknown result and fail to select the record you intended to catch. The [difference between missing data and zero](/blog/the-difference-between-missing-data-and-zero) needs to be reflected in the test, not just explained in a footnote.

Also test the rule against changes in the business process. If equipment can now be extended into a later booking period, an old duration threshold may produce false alarms. The check has become stale even though its code still runs.

Where a rule detects an anomaly rather than a definite error, label it that way. An unusual volume deserves investigation; it does not prove the source is wrong. Automatic rejection on that basis could discard genuine activity during a busy period.

## Give correction work an owner

The alert should identify the affected decision, the rule and where an authorised person can investigate. Keep sensitive row details out of broadly distributed notifications. Access to diagnostics should follow the information's handling requirements.

Assign the correction to the place where the defect can be fixed. A reporting team can repair a transformation bug. A source-process owner needs to address an omitted entry or a misunderstood status. Routing everything to the data team often creates a queue of issues they cannot resolve.

Track whether the correction reached downstream reports and whether a previous publication needs to be replaced. Closing the source ticket is not enough if the report still contains the old value.

Review the check itself after repeated alerts. Useful questions include whether people acted, whether the action prevented a bad decision and whether the same underlying cause keeps returning. A noisy rule may need refinement; a reliable rule that detects a recurring defect may justify changing the source workflow.

I would keep a small quality register with the rule, rationale, tolerance, response and owner. Add evidence of the last test and a trigger for review. That makes each check an operating control somebody can explain, rather than another line in a long validation script nobody wants to touch.
