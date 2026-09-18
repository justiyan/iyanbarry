---
title: "Local models do not automatically solve data governance"
date: "2026-08-31"
updated: "2026-09-18"
summary: "Local inference changes one data boundary; storage, tools, backups, access and operational ownership still determine whether the system is well governed."
tags: ["AI", "Governance"]
published: true
---

Running a model on organisational hardware can reduce reliance on a remote inference service. That is a meaningful architectural choice. It is not, by itself, a data-governance policy.

The local application may still call external tools, synchronise files, send telemetry or retain conversations in places nobody reviewed. Other people may be able to reach its endpoint. Backups may preserve uploads long after the user deletes them.

I would evaluate a local model by tracing the complete system rather than accepting “the data stays here” as a conclusion. Local describes where one component runs. The organisation still needs to decide what information enters it, who can access it and what happens afterwards.

## Draw the boundary you actually have

List the components involved in a request: browser or desktop client, application server, model runtime, document processing, search, storage, logging and tools. Mark every connection that can leave the approved environment.

A hypothetical local document assistant might run inference on an office workstation while using a cloud service for optical character recognition. In that design, the model is local but the uploaded document still crosses a remote processing boundary.

Another implementation might use local inference and local extraction but allow a web-search tool to include private terms in an outbound query. The exposure sits in the tool, not in the model weights.

Check the actual configuration and observe permitted network behaviour during testing. Do not assume a feature is offline because the primary endpoint uses a local address. Updates, extensions and auxiliary services need separate consideration.

Avoid promising absolute isolation unless the deployment genuinely enforces it and the operating process maintains it. A documented set of approved connections is more useful than a broad assurance nobody has tested.

## Treat the endpoint as a service

A model server listening on a machine can be accessible beyond the person who started it. Decide who may connect, how they authenticate and which applications may submit requests.

Use the same care with administrative access. An operator who can read model-server files or inspect application logs may be able to see sensitive inputs. Separate routine user access from configuration and support privileges where practical.

If several teams share the service, determine whether their data and conversations remain separated. A shared cache, history database or retrieval index can defeat separation even if each team has a different interface.

Do not let the model decide these permissions. [Retrieval authorisation](/blog/permissions-belong-in-the-retrieval-layer) and downstream action controls remain application responsibilities whether inference happens across the internet or in the next room.

The service also needs an owner for patching, configuration, monitoring and incident response. A powerful workstation under a desk is still infrastructure when other people depend on it. Its physical location does not provide a support model.

## Follow every retained copy

An upload can become extracted text, chunks, embeddings, temporary files, conversation history and diagnostic output. Identify which of those representations the application creates and why it keeps them.

Set retention rules that match the purpose. A temporary analysis should not silently become a permanent searchable collection. Conversely, a required business record should not depend on an ephemeral chat history that disappears without an agreed process.

Include backups and synchronisation. Deleting the visible upload may leave copies in snapshots, desktop backup services or another user's export. Define how deletion interacts with those systems and what limits apply to historical copies.

Local storage still needs access protection. File permissions, encryption choices, device management and recovery arrangements are part of the design. None becomes unnecessary because the processor is owned by the organisation.

Logging deserves particular restraint. Troubleshooting a local runtime can tempt operators to enable full request dumps. If detailed capture is necessary, make it temporary and controlled. [What to log when an AI answer is wrong](/blog/what-to-log-when-an-ai-system-gives-the-wrong-answer) applies just as much to a local service.

## Own the software and model supply chain

A local deployment accepts responsibility for obtaining and maintaining the runtime and model artifacts. Check the source, applicable licence and permitted use. Do not assume that downloadable weights carry unrestricted commercial rights or identical terms across distributions.

Keep an inventory of versions and provenance. Review dependencies and extensions rather than treating the model file as the only component that matters. A convenient installer can introduce capabilities unrelated to the intended workflow.

Plan updates and rollback. A new runtime, quantisation or model version can alter output quality and operational behaviour. Re-evaluate the actual deployed combination, not just the model family named in the proposal.

Capacity is an operating issue too. Test the expected workload, concurrency and recovery from failure. If staff turn to unapproved cloud tools whenever the local service is slow, the intended data boundary may fail through the workflow rather than the network design.

Provide a permitted fallback. It might be manual processing, a queue for later work or a separately approved remote service. The fallback should not silently send sensitive information elsewhere because local hardware is unavailable.

## Decide what locality is buying

Local inference may be attractive because of processing control, offline requirements or a particular workload. Those are reasons to investigate, not proof that the design is cheaper, safer or more accurate.

Compare the complete operating arrangement with approved alternatives. Include hardware support, electricity, maintenance effort, quality, latency and the people needed to run it. Use actual measurements and verified terms rather than an assumed saving from avoiding a remote API invoice.

For higher-consequence use, apply a structured risk-management process. NIST's AI Risk Management Framework is voluntary guidance for considering trustworthiness through design, development, use and evaluation. It does not certify a deployment merely because the organisation runs it locally.

I would approve a local model when the deployment demonstrably meets a requirement and someone owns the whole system around it. The useful claim is specific: these inputs are processed by these components under these controls. That claim can be checked and maintained.
