---
title: "Building a small data catalogue people will maintain"
date: "2026-09-18"
retrospectiveDate: "2026-03-16"
summary: "Start a catalogue with the datasets people depend on and the questions they keep asking. Make updates part of real work rather than a separate documentation campaign."
tags: ["Data", "Integration"]
published: true
---

An exhaustive data catalogue is an appealing idea until somebody has to keep it current. A list of everything can become a list of things nobody trusts, especially when the people maintaining it cannot see how it helps their work.

I would start smaller. Document the datasets behind consequential decisions, the extracts that travel between teams and the measures that repeatedly cause confusion. Make those entries useful enough that people return to them.

The first catalogue can be a controlled table or a set of pages. The difficult choice is what deserves an entry and who will maintain it, not which product has the most metadata fields.

## Follow the questions people already ask

Listen for recurring questions: which report is authoritative, who approves access, how current is this extract, and why does this number differ from the one in the meeting pack?

Each question points to information the catalogue should contain. Begin with the dataset's purpose and a plain description of what a row represents. Include its source, accountable owner, refresh arrangement and important limitations.

A useful entry also names the approved access route. It should not contain passwords, connection secrets or an unrestricted sample of sensitive records. Documenting that a dataset exists does not require exposing its contents to everyone who can browse the catalogue.

Prioritise by consequence and reuse. A dataset supporting recurring resource decisions deserves attention before an abandoned experiment nobody consumes. A feed used by several teams may warrant more documentation than a local analysis with a short life.

I would ask each candidate owner to identify an actual consumer. If nobody can name one, check whether the dataset should be retained or retired instead of polishing its catalogue entry.

## Make one entry genuinely useful

For a fictional room-booking dataset, an entry might explain that each row represents a reservation, not an attendee or a room-day. It would identify whether cancelled reservations remain present and whether the date refers to booking creation or intended use.

Those details prevent common mistakes before they become reports. A long technical column list without the grain or cancellation rule would do less for the next analyst.

Include the measures people commonly derive and link to their approved definitions. Record known gaps, such as historical periods imported under a different booking process. The catalogue should disclose limitations rather than read like a promotional description of the data platform.

Show where users can report a problem and who approves changes. A named team contact is often more durable than relying on one individual's availability, but there still needs to be an accountable owner behind the team name.

Link to the source documentation, implementation and related reports where useful. Avoid copying the same definition into several pages. The [metric definition record](/blog/finding-the-owner-of-a-business-metric) should have a clear authoritative home so corrections do not create another reconciliation problem.

## Attach maintenance to existing work

A catalogue stays current when a change in the dataset triggers a change in its entry. Add that check to the release or change process for the systems that produce it.

If a field changes meaning, a refresh moves or an owner leaves, update the catalogue as part of that work. Do not rely solely on an annual reminder to discover changes that affected users months earlier.

Keep a reviewed date and distinguish verified information from entries awaiting confirmation. That date should reflect an actual check, not an automated timestamp updated whenever the page is viewed.

Use a short review conversation. Ask whether the source and purpose remain correct, whether the access route works and whether known limitations have changed. The owner should be able to complete it without reading a manual for the catalogue itself.

Avoid collecting metadata that nobody uses and nobody can verify. A smaller set of reliable fields is more helpful than a mandatory form people fill with guesses to get past the submission screen.

## Buy tooling when the work justifies it

Specialist catalogue tools can help with discovery, lineage and stewardship as the estate grows. Automated scanning can reveal structures and dependencies that would be expensive to track by hand.

It cannot reliably decide why the organisation counts a measure in a particular way or whether a dataset is suitable for a new purpose. Those explanations still need business input. Treat discovered metadata as evidence to review, not automatic endorsement of fitness or permission.

Before purchasing, test a real maintenance task. Can an owner correct an entry easily? Can a consumer find the approved dataset without seeing information they should not access? Can a source change be traced to affected reports?

Measure whether the catalogue reduces the recurring questions that justified it. Look for fewer ambiguous handovers and quicker identification of the right owner, while recording the actual result rather than promising a generic productivity gain.

Expand after the first entries are used and maintained. A small catalogue that helps someone avoid the wrong dataset is already doing useful work. Its next feature should respond to an observed need, not the urge to document the entire organisation before anyone can begin.
