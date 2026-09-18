---
title: "What happens when the model behind your application changes"
date: "2026-09-11"
updated: "2026-09-18"
summary: "Treat model changes as application releases: preserve the tested configuration, check regressions, limit exposure and plan a fallback that remains available."
tags: ["AI", "Governance"]
published: true
---

An AI application can change behaviour without a visible change to its interface. The model behind an endpoint may be updated, a deployment may move to another version, or a provider may retire an option the application depends on.

That creates an awkward operational problem. Users think they are using the same service, while the team may be relying on evidence collected against a different configuration.

I would treat a model change as an application release. The depth of review should match the consequence of the workflow, but there should be an identifiable decision rather than an assumption that newer means compatible.

## Know what was actually tested

Record the provider, endpoint, deployment type, available model version and configuration used in evaluation. Include the prompt, retrieval settings, tool definitions and relevant source state. The model name alone is not a complete release record.

Some services expose stable version identifiers; others manage updates behind a product experience. Document the control you actually have. Do not promise permanent behavioural stability merely because an interface displays a familiar name.

Microsoft's Copilot documentation states that the models powering the service are regularly updated. A managed product may therefore require a different assurance approach from a custom application where the team controls version selection more directly.

Keep the service owner subscribed to the provider's relevant notices and assign someone to assess them. An unread retirement email is not a change-management process.

## Identify the behaviours that must survive

A replacement can improve general reasoning while changing a behaviour your workflow depends on. It may produce a different format, interpret an instruction differently, refuse a previously accepted task or choose different tool arguments.

Use a regression set tied to the application contract. For a hypothetical document extraction service, the stable requirements might include preserving source references, not inventing missing dates and returning a machine-readable result the downstream system accepts.

Do not insist on identical wording unless wording itself is the requirement. Focus on meaningful behaviour and consequences. A more concise answer may be an improvement; a changed identifier may be a defect.

Include known difficult cases and critical boundaries. OpenAI's evaluation guidance recommends continuous evaluation as applications change. The principle is to maintain evidence of suitability, not to assume a past score transfers automatically to a new release.

## Compare before exposing everyone

Run the candidate against the approved cases and compare with the current implementation. Preserve failures and reviewer disagreements, not only an aggregate result. Investigate whether differences come from the model or another changed component.

Where appropriate and permitted, a shadow evaluation can process copies of approved inputs without showing candidate outputs to users or committing actions. It still processes data, so it needs the same review of provider, retention and access boundaries as other evaluation activity.

Never let a shadow agent execute production writes merely because the results are supposedly being ignored. Separate the observation path from action capability.

If testing supports a limited rollout, choose a bounded population or low-consequence task first. Define the stop criteria and ensure support can identify which configuration handled each request. A gradual rollout is only useful if the organisation can notice and contain a regression.

## Check the operating contract again

A model change can affect more than answer quality. Review latency, request limits, supported features and current commercial terms. Measure relevant workload behaviour rather than relying on a vendor's general performance claim.

Revisit data processing if the provider, deployment type or enabled feature changes. A fallback endpoint in another location may not meet the original requirements. An application hosted in the same environment can still send data through a different processor.

Stateful features, logging and abuse-monitoring arrangements deserve attention when changing services. A no-training statement does not settle those questions. Microsoft's Azure model privacy documentation treats processing locations and storage features separately, which is the right distinction to preserve in the change record.

Review downstream assumptions too. Longer answers can exceed field limits; different formatting can break parsers; altered tool selection can expose code paths that were rarely exercised. Test the complete workflow, not just the text returned by the model.

## Make rollback a real option

A rollback plan must identify an available target. The old model may have been retired, capacity may be unavailable or the previous configuration may no longer be permitted. “Switch back” is not a plan until those dependencies are checked.

Keep a fallback that matches the task. It may be the previous approved model, a reduced-capability mode or a manual process. Avoid silently moving sensitive work to an unapproved provider to preserve the appearance of availability.

Test the switching mechanism in a safe environment. Verify that prompts, retrieval and tool settings move together where required. Reverting only the model can leave a mixed configuration that nobody evaluated.

For systems that write records, rollback of software does not reverse completed actions. Reconcile affected transactions and use the appropriate correction process. This is one reason to limit action scope during a rollout.

## Tell users what changed and watch the result

Explain meaningful changes in terms of the work. Users may need to know that an output format changed, an unsupported task now requires escalation or a source reference appears in a different place. Avoid a generic announcement that the AI is smarter.

Give support staff the release record and known limitations. They should be able to connect a reported problem to the configuration involved without asking users to diagnose model behaviour.

Continue observing after release. Real inputs may differ from the evaluation set, and early users may uncover failure modes the team did not anticipate. Add confirmed cases through a privacy-controlled process rather than capturing every conversation by default.

[Choosing a model against your own cases](/blog/choosing-a-model-with-your-own-test-cases) starts the evidence trail. Change management keeps it relevant. I would call the release complete only when the organisation knows what changed, what was checked and what it will do if the new behaviour proves unsuitable.
