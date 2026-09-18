---
title: "Permissions belong in the retrieval layer"
date: "2026-07-25"
updated: "2026-09-18"
summary: "Apply access rules before restricted passages reach the model, and test what happens when source permissions change after indexing."
tags: ["AI", "Governance"]
published: true
---

A document assistant should not reveal material that the person asking cannot access. That sounds obvious until the source system, search index and model request use different identities.

The source may enforce permissions correctly while an indexing service copies everything into a shared search store. The application may authenticate the user but search that store with a powerful service account. At that point, a successful sign-in proves who asked the question. It does not prove that the retrieved passages are appropriate for them.

Permissions belong in the retrieval path because the information must be authorised before the model receives it. Hiding a source link or asking the model to omit sensitive details afterwards is too late to establish that boundary.

## Trace whose authority each step uses

Start with a simple diagram: user, application, identity service, source repository, search index and model endpoint. Label the identity used at each connection. Do not assume the user's authority follows the request automatically.

An indexing identity may legitimately need broad read access to build an index. That does not mean the answering service should use that broad access to serve every user. Separate the authority needed to ingest content from the authority needed to disclose it.

For each request, the application needs trustworthy information about the caller and the scope they may access. The model should not choose the user's group membership, and the browser should not be able to submit an arbitrary privileged group as a search parameter.

Microsoft's documentation for the Azure AI Search security-filter pattern makes a useful distinction: a principal identifier in a filter is a string, not authentication. The pattern depends on supplying the correct identifiers and applying the filter. Built-in access-control capabilities may suit some designs, but their actual coverage and prerequisites still need checking.

## Carry access rules with the content

If a document becomes searchable chunks, every chunk needs the relevant access metadata. A paragraph separated from its parent file must not lose the restrictions that applied to the file.

Decide how inheritance works. A folder-level permission, an individual exception and a shared link can produce different effective access. Where the source system has complex rules, copying a simplified group list may not reproduce them faithfully. Prefer supported permission-aware integration where it meets the requirement, or restrict the initial corpus to access rules the team can correctly implement.

Apply those rules before content crosses into model context, including reranking or other external processing where relevant. The goal is not merely to remove restricted documents from the final list. It is to prevent unauthorised information entering a component that is not entitled to process it for that request.

Also protect the index itself. Application administrators, search operators and support tools may have access outside the normal answer route. A secure user interface does not compensate for a broadly readable index or diagnostic export.

## Rehearse a permission change

Consider a hypothetical project library. An employee can initially read a planning document, and the index records that access. The employee then moves to another team and loses source access. The next morning, the assistant still returns a paragraph because its indexed permissions have not caught up.

The source repository did its job. The assistant disclosed an outdated copy under an outdated access decision.

I would test that sequence deliberately. Ask with an authorised account, remove access, and repeat the request through a fresh session, an existing conversation and a cached result. Check snippets and exported answers as well as the visible source link.

Agree an acceptable propagation window with the information owner. If that window is too risky, the architecture may need a live permission check or a conservative denial while access state is uncertain. A scheduled reindex is not an answer unless its delay meets the requirement.

Source deletion deserves the same attention. Define how withdrawn documents, derived chunks and cached responses stop being available. Restoring an old index from backup must not silently restore access that the business has revoked.

## Close the alternate paths

A retrieval filter can be correct while a neighbouring feature bypasses it. Search suggestions, document previews, conversation sharing and downloadable reports all deserve inspection. Even a title or filename may reveal sensitive information.

Cache design is particularly easy to miss. Two people asking identical questions are not necessarily entitled to identical answers. Cache keys and validation need to account for the access context, and cached material needs an invalidation strategy when that context changes.

A conversation can also carry information forward from an earlier authorised turn. Decide what happens when access changes during the conversation. That may require rechecking source authority before reusing stored context, or preventing further use of material the person can no longer access. The correct policy depends on the information and records requirements; it should not be accidental.

If the identity provider or permission service is unavailable, avoid treating the missing answer as permission to search everything. A clear access-verification failure is more honest than an apparently useful response produced outside the agreed boundary.

## Give the control an owner and evidence

Access tests should use genuinely different identities, not a prompt saying “pretend I am a restricted user”. Include allowed and denied accounts, changed membership, withdrawn sources and requests without valid access context.

Record the decision and policy version without creating another sensitive content archive. An operator should be able to explain why a passage was eligible and which identity made the request. They do not always need a full copy of the passage in routine logs.

Assign responsibility for source permissions, index synchronisation and the application checks. These may be different people, but someone must own the complete disclosure path. Otherwise each team can report that its component is healthy while the end-to-end control is broken.

[Retrieval-augmented generation](/blog/what-retrieval-augmented-generation-can-and-cannot-fix) improves access to evidence. It does not decide who is entitled to that evidence. I would treat proof of that entitlement as a release condition, not a refinement to add after the assistant becomes popular.
