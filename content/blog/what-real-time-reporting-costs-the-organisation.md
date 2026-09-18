---
title: "What real-time reporting costs the organisation"
date: "2026-09-18"
retrospectiveDate: "2026-04-04"
summary: "Faster refreshes create costs beyond the data platform. Match latency to the action, then account for provisional data, recovery and support."
tags: ["Data", "Integration"]
published: true
---

"Real time" is often requested before anyone has agreed how quickly a person or system can act. If a team makes a decision once each morning, updating its dashboard every few seconds may add cost without improving that decision.

There are good reasons to need low latency. There are also good reasons to prefer a stable daily view. I would make that choice from the consequences of delay, rather than treating the fastest available refresh as the default.

## Name the delay that matters

Break information age into its parts. An event occurs, someone or something records it, a source makes it available, the integration moves it and the report presents it. Refreshing the final page faster only addresses one part of that chain.

A source updated through end-of-shift entry cannot provide a complete live picture simply because a connector polls it frequently. The page can be freshly refreshed and still describe incomplete activity.

Specify the business need as a maximum acceptable delay from a defined event. Include what happens when that target is missed. A stock availability check during booking has different requirements from a monthly performance review.

I would also ask who responds to a changed value. If nobody is rostered to act outside office hours, a continuously updated dashboard may produce information without an operating response. That may still have value, but it should not be sold as a fully supported live service.

## Price the work around the stream

Lower latency can require more frequent processing, monitoring and support. It may also increase load on source systems and expose rate limits that a periodic batch rarely reaches.

The engineering work includes handling duplicate, delayed and out-of-order events. The latest message received is not always the latest business event. A report needs rules for corrections and for deciding when a period is complete enough to publish.

Failures become more visible when users expect continuous updates. The organisation needs to distinguish a quiet period from a stopped feed and show when the information is stale. An apparently live chart that has frozen can be more misleading than a clearly dated daily report.

Include those operating tasks in the cost comparison. A platform estimate that covers event ingestion but ignores on-call support, investigation and recovery is incomplete.

The [owner of the integration](/blog/an-integration-needs-an-owner-after-it-goes-live) should understand the service expectation. Calling a feed real time creates an implicit promise unless the actual latency and support limits are made clear.

## Compare two views of the same process

Take a hypothetical repair business. A dispatcher may need prompt updates when a technician becomes available. The leadership team may need a stable weekly view of completed work and outstanding demand.

Those audiences do not necessarily need the same pipeline or presentation. The dispatcher can use an operational status view with explicit freshness and exception handling. The weekly report can use validated data after late entries and corrections have been considered.

Trying to make one dashboard serve both purposes can create confusion. A changing operational count may look like an error to someone comparing it with last week's published report. A stable reporting snapshot may be too old for dispatch.

I would label the views by their purpose and time basis. Explain when values are provisional and when a published period can be revised. Preserve the connection between them so differences can be reconciled rather than dismissed as "timing" without evidence.

This split can also reduce cost. Not every measure needs to travel through the lowest-latency path. Reserve that effort for the information that changes an immediate action.

## Test slower options before committing

Ask users to compare realistic update intervals against their work. A short trial can reveal whether a periodic refresh is sufficient or whether delay causes a specific operational problem.

Use representative workloads and include failure recovery. Measure the time from source event to usable, accepted information, not just the time spent transferring a message. Test a backlog after an outage and confirm the report does not present replayed old events as current activity.

For an ordinary management report, a reliable daily refresh with clear coverage may outperform a fragile live view in practical usefulness. It gives users a stable basis for discussion and leaves time for validation.

If lower latency proves necessary, define a service objective, a stale-data indicator and a fallback. Agree what the user should do when the feed is delayed instead of relying on them to infer it from a motionless chart.

Review the choice when the workflow changes. A daily planning process can become interactive, and a former operational dashboard can become a historical reference. Neither should retain an expensive refresh pattern simply because it was built that way.

Real-time reporting deserves funding where the delay changes the action enough to justify the full operating cost. Elsewhere, the effort is better spent on trustworthy definitions, visible completeness and a refresh schedule people can depend on.
