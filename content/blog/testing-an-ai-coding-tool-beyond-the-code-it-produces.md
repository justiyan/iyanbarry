---
title: "Testing an AI coding tool beyond the code it produces"
date: "2026-09-03"
updated: "2026-09-18"
summary: "Judge an AI coding tool by verified behaviour, dependencies, security and maintainability, not the volume of code it can generate."
tags: ["AI", "Governance"]
published: true
---

An AI coding tool can produce a convincing patch faster than a team can understand its consequences. That makes verification more important, not less.

The output to assess is the changed software. A plausible explanation, a clean diff or a successful demonstration is evidence of only part of the job. The team still needs to know whether the change meets the requirement, preserves existing behaviour and can be operated safely.

I would evaluate a coding tool through a bounded delivery exercise with independent acceptance criteria. The exercise should include the work around the code: understanding the repository, testing, reviewing dependencies and explaining what remains unverified.

## Give the tool a real boundary

Choose a representative change with observable behaviour. A hypothetical exercise could add an export option to an existing internal application. The requirement would specify authorised users, permitted fields, output format and expected behaviour when the export is too large.

Define what must remain unchanged. Existing access controls, audit records and unrelated screens should not become collateral damage. Require the tool to stay within the requested scope rather than accepting a broad refactor as a sign of initiative.

Use a safe development environment with appropriate repository access. Do not hand an evaluation tool production credentials or live administrative permissions simply to make the exercise convenient. If it can execute commands or invoke integrations, assess that action authority separately from its code suggestions.

Record the starting state and acceptance criteria before the tool begins. Otherwise a persuasive implementation can subtly rewrite what the team thinks it requested.

## Test behaviour independently of the implementation

A tool may write tests that confirm its own misunderstanding. Generated tests are useful candidates, but their existence does not establish that the requirement was met.

Have a reviewer define important acceptance cases from the brief. For the hypothetical export, these would include an authorised export, an unauthorised request, a field the user must not receive and a large result. Test through the relevant application boundary rather than only calling the helper function directly.

Run the tests and retain actual results. Distinguish tests that passed, tests that failed and tests that were not run because an environment or service was unavailable. A description of expected output should never be presented as execution evidence.

Inspect existing tests as well. A patch that makes its new test pass by changing or deleting older assertions may hide a regression. Review changes to fixtures, configuration and test commands, not just the implementation files.

For behaviour that requires a browser or another service, exercise that path in an appropriate test environment. A successful unit test does not prove that the deployed interface can authenticate, download the export or recover from a timeout.

## Review the risk-bearing parts of the diff

Read access-control changes closely. A generated implementation may check permissions in the interface while leaving the underlying endpoint exposed. Confirm that trusted server-side controls enforce the requirement.

Inspect data handling, error paths and logging. An export feature can disclose sensitive fields through a filename, diagnostic message or temporary file even when the downloaded content looks correct.

Review new dependencies before accepting them. Verify that the package exists, comes from the intended source and has appropriate maintenance and licensing characteristics for the project. Pinning and update practices should follow the team's normal standards; a generated import is not a reason to bypass them.

Look for unnecessary scope. A small feature that introduces a new framework, broad network access or a major data-model change deserves an explanation. Simpler code is easier to review, but line count alone is not a measure of quality.

NIST's Secure Software Development Framework includes protecting software, producing well-secured software and responding to vulnerabilities. Those lifecycle practices remain relevant to the delivered system regardless of whether a person or a model typed the first draft.

## Evaluate the handover, not just the patch

Ask another developer to explain the change and modify one related requirement. This can reveal whether the implementation follows existing conventions or depends on obscure generated structure.

Require a concise handover: files changed, behaviour added, tests executed, dependencies introduced and remaining limitations. Unsupported assurances such as “production-ready” should not replace that evidence.

Check installation and deployment assumptions. Does the change need a migration, environment variable, background task or permission update? Rehearse those steps safely. A feature that works in a developer session but cannot be installed consistently is unfinished.

Include rollback where the change affects persistent data or operational workflows. Reverting code may not undo a migration or remove information already exported. Recovery needs to match the actual side effect.

The tool's willingness to report uncertainty is part of its usefulness. A system that clearly identifies an untested integration helps the team make a decision. One that confidently claims completion without evidence creates additional review work.

## Measure delivery, not generated volume

Track the effort to reach an accepted change, including review, correction and investigation. Count defects found after handover within an agreed observation window. Do not treat lines generated or suggestions accepted as delivered value.

Compare with the team's existing process on similar work. A simple feature and a difficult legacy defect are not interchangeable units. Record differences in repository familiarity, requirements quality and reviewer involvement.

A tool may be useful for scaffolding and less useful for architectural changes. Make the adoption decision by task rather than declaring it universally productive or unproductive. [Measuring AI value after the demonstration](/blog/measuring-ai-value-after-the-impressive-demonstration) helps separate observed improvement from an appealing forecast.

I would accept a coding tool when it helps the team deliver verifiable changes without weakening ownership of the result. The team remains responsible for what ships. The evidence should make that responsibility easier to discharge, not easier to overlook.
