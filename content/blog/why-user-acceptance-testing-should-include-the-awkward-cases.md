---
title: "Why user acceptance testing should include the awkward cases"
date: "2026-09-18"
retrospectiveDate: "2026-05-17"
tags: ["Delivery", "Leadership"]
summary: "Test the situations users struggle to recover from: denied access, duplicate actions, missing information and interrupted work."
published: true
---

The most revealing acceptance test may be the one where a user is correctly told no. Can they understand the reason? Does their work remain intact? Can they reach someone authorised to resolve the problem without being given access they should not have?

Happy-path testing establishes that a process can work under favourable conditions. User acceptance testing should also establish whether people can finish, recover or stop safely when those conditions are absent.

## Build cases around work that goes wrong

Start with the business task and ask staff where it becomes awkward. A request arrives without a reference. An approver changes roles. Someone realises they selected the wrong organisation after submission. These are ordinary process conditions, not exotic attacks.

For a fictional training-booking tool, the test set might include a course becoming full while a person is completing the form, a cancelled session with existing attendees, and a booking made twice after a slow response. Each case should specify what the participant expects and what evidence would show the service handled it correctly.

Choose cases by consequence as well as frequency. An uncommon mistake that exposes information or sends an incorrect instruction may deserve more attention than a frequent cosmetic issue. The business owner should explain the consequences; technical staff can then help design safe tests.

Avoid turning the exercise into a competition to break the software. The aim is to learn whether the service supports real work within its agreed boundaries. Specialist security and performance testing still have their own place. Business UAT does not replace them.

## Use roles that resemble production

Testing everything with an administrator account removes the very boundaries that users will encounter. Prepare accounts for the relevant roles, including a person with no entitlement to the service. Confirm that the test environment represents the proposed permissions closely enough for the result to mean something.

Test changes in role too. A staff member may submit a request and later move teams. An approver may lose authority while work is waiting. Decide whether that pending work should transfer, pause or require a new approval, and test the chosen rule.

For denied actions, examine more than the message. Check that the prohibited action did not occur and that information was not revealed through a list, export or notification. The tester may need technical help to verify those effects. A polite error screen alone does not prove an access boundary held.

Use fictional or appropriately prepared data. Staff should not have to expose real confidential records to make a test believable. Restrict any diagnostic evidence that could contain sensitive information.

## Test interruption and uncertainty

Users do not always know whether an action succeeded. A page freezes after submission, a notification is delayed or a session expires during editing. The response people make next can create duplicate work.

Ask participants to resume after an interruption without coaching them. Can they find the saved request? Can they tell whether it is pending or failed? Do they submit it again because the service offers no clear state?

The expected result should include recovery. For example, a failed attachment upload might leave the remaining form available and explain the accepted file conditions. If preserving the form is not feasible, the product should state that limitation rather than silently discarding work.

Some failures cannot be safely reproduced in a shared environment. Use a controlled simulation or separate test environment and record the limitation. Do not create a real outage to make a business test more convincing.

These conditions belong in [acceptance criteria agreed before build](/blog/writing-acceptance-criteria-before-the-supplier-starts-building). Discovering them during UAT is still valuable, but early agreement reduces disputes about expected behaviour.

## Let the tester work before explaining

A developer who narrates every click can unintentionally hide usability problems. Give participants the task and enough context to act, then observe where they hesitate or ask for help. Record assistance as part of the result.

Include people who perform the work under different conditions, where those conditions matter: different devices, varying familiarity and relevant accessibility needs. A small test group cannot represent everyone. Document the coverage and schedule further assessment for material gaps.

After the task, ask what the participant thought had happened. Their interpretation may differ from the system's state. That difference can explain future support demand even when the underlying transaction is correct.

Keep a clear defect record: expected behaviour, actual behaviour, starting conditions, role, version and evidence. Separate defects from improvement ideas. Both matter, but they have different implications for whether the agreed delivery is acceptable.

## Make the acceptance decision explicit

Do not average every result into a single pass score. A collection of successful low-risk tests should not conceal one unresolved failure with serious consequences. Review material failures individually, with the relevant owner.

For each accepted exception, document the workaround, affected users, correction plan and expiry or review date. Confirm that support can carry the workaround. A project team cannot reasonably accept an ongoing manual reconciliation task on another team's behalf.

Retest corrected cases and the nearby behaviours the change could affect. Keep the evidence tied to the version intended for release. Finally, preserve the most useful awkward cases for future regression testing. They describe the conditions the organisation has already learned it cannot afford to ignore.
