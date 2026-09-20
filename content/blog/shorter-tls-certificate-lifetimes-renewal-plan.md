---
title: "Shorter TLS certificate lifetimes need a better renewal plan"
date: "2026-09-21"
summary: "Publicly trusted TLS server certificates issued since 15 March 2026 have a 200-day lifetime cap. Check renewal before the next reduction in March 2027."
tags: ["Cybersecurity", "Governance"]
published: true
---

A certificate renewal looks like a small maintenance task until it stops customers signing in or prevents two systems talking to each other. If the process still depends on a calendar reminder and one person who knows which file goes where, it deserves attention before the next expiry.

Publicly trusted TLS server certificates, often called SSL certificates, now have a maximum validity of 200 days when issued from 15 March 2026. The CA/Browser Forum schedule reduces that limit to 100 days from 15 March 2027, then 47 days from 15 March 2029.

For an executive, the useful question is whether the business can replace these certificates reliably without turning every renewal into a small project. I would want that answered before approving another certificate management product.

## Be precise about what is changing

These are maximum lifetimes for newly issued certificates, not dates on which every existing certificate suddenly expires. Certificates issued before the March 2026 change fall under the earlier limit. Check the actual expiry of the certificate a service is presenting rather than assuming every service has moved to the same timetable.

The scope matters too. This schedule concerns publicly trusted TLS server certificates. It is not a blanket rule for every certificate used inside a business: the requirements exclude an enterprise's internal-only PKI where its root certificate is not distributed by an application software supplier. Ask the team to identify the trust chain rather than classifying a certificate by whether staff call the system "internal".

There is a separate clock for validation. The maximum reuse period for domain and IP address validation is currently 200 days, becomes 100 days on 15 March 2027 and falls to 10 days on 15 March 2029. That last limit concerns the age of validation evidence at issuance; it does not mean replacing certificates every 10 days. A renewal plan needs to include proving control of the domain again when required, not just installing a replacement file.

## Find the renewal paths that still depend on a person

Start with services whose failure would interrupt important work. For each one, have the team trace where TLS connections end and who manages the certificate at each point. Include supplier-managed services and connections between systems, not only the public website.

Keep the record short enough to maintain. It should identify the service, certificate locations, expiry, renewal mechanism and responsible team. Record who controls domain validation and what proves that a replacement reached the service. Do not put private keys or credentials in the register.

Then distinguish between a provider-managed renewal, an automated process your team operates and a manual procedure. Those arrangements need different work. Moving a well-managed hosted service onto a home-grown renewal script would be a strange response to a problem it does not have.

For provider-managed certificates, ask what configuration your organisation must preserve and how a failed renewal reaches support. For manual ones, find out why they are manual. An old appliance with no supported deployment interface needs a different decision from a modern service nobody has configured properly.

## Test what the service presents, not just what the issuer delivered

Imagine a business with a customer portal behind a load balancer. Its renewal job obtains a new certificate successfully, but the deployment step fails. The load balancer continues presenting the old certificate. The job's first stage looks healthy while customers are approaching an outage.

I would test issuance, installation and the client connection separately.

Ask the team to rehearse renewal on a representative test service. Confirm that the replacement is deployed everywhere it is needed, that the running service presents it and that a normal client can connect. Where a service needs a reload or restart, include it in the rehearsal and measure the interruption rather than assuming there will be none.

Then test a failure in that safe environment. Remove a test permission or interrupt a deployment step. Does the alert name the affected service? Can the operator tell whether the old certificate is still serving traffic? Is there enough time to repair the process before expiry? Keep monitoring the certificate the service actually presents, independently of the renewal job, so a missed deployment can be caught after the rehearsal too.

This is the same operating discipline behind [giving an integration an owner after go-live](/blog/an-integration-needs-an-owner-after-it-goes-live). The certificate is part of a service people depend on, so a successful background job is not enough evidence on its own.

## Automation needs sensible permissions

Automating domain validation can introduce access that deserves its own review. Let's Encrypt warns that placing full DNS API credentials on a web server increases the impact if that server is compromised. Its guidance recommends narrowly scoped credentials or performing DNS validation on a separate server.

Ask what the chosen renewal method can change and where its credentials live. A script should not inherit control over the whole domain simply because that was the easiest credential to obtain. If the DNS provider cannot offer a sufficiently narrow permission, the team should assess an alternative validation arrangement rather than quietly accepting the broader access.

Start with supported capabilities in the hosting platform, certificate provider and existing tooling. A central management product may be worthwhile where many different systems need discovery and deployment support. It still needs to prove renewal on older appliances and supplier-managed systems in your environment, not just display their certificates in a dashboard.

## Give the exceptions a funded answer

Some manual renewals will remain while systems are replaced or suppliers catch up. Treat them as named operating commitments. Agree who does the work, who covers absence and how early it must start to allow for validation, a maintenance window and a failed attempt.

An alert threshold should leave time for that recovery path. Copying one expiry warning across every service ignores the difference between a managed website and an appliance requiring a supplier visit.

For the next technology review, I would ask for a short exception list: important services with unproven renewal, their next expiry, the last successful rehearsal and the decision needed. [A security dashboard that shows the uncomfortable gaps](/blog/a-security-dashboard-that-shows-the-uncomfortable-gaps) is more useful here than a count of certificates discovered.

Use the period before March 2027 to prove renewal on the services that matter, and to budget for the ones that cannot yet support it. The outcome to look for is a replacement certificate working at the client connection, with someone able to recover when the normal path fails.
