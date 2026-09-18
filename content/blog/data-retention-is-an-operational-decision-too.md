---
title: "Data retention is an operational decision too"
date: "2026-04-20"
updated: "2026-09-18"
summary: "A retention schedule needs an operating path through applications, backups and derived copies. Assign the decisions and verify what deletion actually does."
tags: ["Data", "Integration"]
published: true
---

Deleting a record from an application is not necessarily the end of its life. Copies may remain in exports, backups, search indexes or a reporting store. A retention policy that stops at the main database can leave the organisation holding information it thought it had removed.

I would treat retention as an operating design problem as well as a policy question. Someone needs to decide what should be kept, someone needs to implement that decision and someone needs to check what happened.

## Establish the rule before the automation

There is no universal retention period that fits every dataset. Requirements depend on the organisation, record type, purpose and applicable legal or contractual context. A legal hold or a specific records obligation can change what would otherwise be an ordinary disposal decision.

For an entity subject to the Australian Privacy Principles, APP 11 includes reasonable steps to destroy or de-identify personal information no longer needed for a permitted purpose, subject to exceptions. Those exceptions include Commonwealth records and information required to be retained by Australian law or a court or tribunal order.

That is not a licence to pick a convenient expiry date for everything. Get the relevant records, privacy and legal input to establish the applicable rule and its authority. A business preference to keep information "just in case" should be examined, not automatically treated as an obligation.

Specify what starts the retention clock. It could depend on an event in the record's lifecycle rather than its creation date. Also define how corrections, reopened matters or holds affect the decision.

## Follow the information into its copies

Build a practical map of where the information goes. Include integrations, scheduled extracts, attachments, temporary processing areas and search or AI retrieval stores. The map can be narrow at first, focused on one record class with a clear owner.

In a hypothetical booking service, deleting an expired booking from the main application might leave its details in a reporting extract and a search index. If the next import rebuilds from an old export, the information could reappear.

Decide how each derived copy receives deletion or de-identification instructions. A process that only adds and updates records will not automatically remove information that has disappeared upstream. Test that behaviour rather than inferring it from the connector's name.

Include supplier-held copies within the scope of the organisation's responsibility and contractual arrangements. Outsourcing storage does not by itself remove the need to understand what is retained or verify a destruction instruction.

The [small data catalogue](/blog/building-a-small-data-catalogue-people-will-maintain) can record these dependencies and owners without becoming a second copy of the retention schedule. Link to the approved rule instead of maintaining competing versions.

## Be precise about backups and holds

Backup systems may not support selective deletion in the same way as an application. That is an engineering constraint to address, not an automatic exemption from applicable obligations.

Work out the retention cycle, access restrictions and process for restoring information that has since been deleted from active use. A restore should not quietly return expired information to ordinary processing. Depending on the design, deletion instructions may need to be reapplied before the restored environment becomes available.

If immediate irretrievable destruction is not possible, assess what measures are required in the circumstances. Do not label information "beyond use" simply because it is inconvenient to retrieve. That concept has substantive conditions and needs an appropriate handling arrangement.

Holds need clear scope and authority. Record what is preserved, why ordinary disposal is paused and who can release the hold. Make sure automated jobs respect it without freezing unrelated information indefinitely.

Test these paths with safe representative records. Demonstrate an expiry, a held record, a released hold and a restore. The test should show both what disappears and what remains under a justified restriction.

## Keep evidence without keeping the payload

A disposal log should record enough to demonstrate the action and investigate failures. It does not need to reproduce the personal information being removed. Choose identifiers and detail proportionate to the purpose, with their own access and retention rules.

Check the result in the places users can retrieve it. An application response saying deletion succeeded does not prove that a cached search result, export or downstream store has been handled.

Track failures and partial completion. If a supplier deletion request remains pending, the record should say so rather than presenting the entire operation as finished. Assign a person to resolve the outstanding step and confirm the outcome.

Review the arrangement when a new integration, archive or AI feature creates another copy. Retention is easier to implement when the destination is designed to receive lifecycle instructions from the start.

I would ask an owner to demonstrate the lifecycle of one record class before declaring the policy operational. The useful evidence is a justified rule, a known set of copies and a tested disposal path, including an honest account of any remaining restrictions or limitations.
