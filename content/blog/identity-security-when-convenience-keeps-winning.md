---
title: "Identity security when convenience keeps winning"
date: "2025-12-31"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "Identity controls have to survive lost phones, shift work and urgent requests. Build strong authentication with a recovery process people can actually use."
published: true
---

The request sounds reasonable: a senior employee has lost their phone, needs access before a meeting and wants the authentication requirement temporarily removed. The service desk wants to help. The manager wants the meeting to happen. Nobody wants to be the person who says no.

That moment is part of the identity security design. If the only usable recovery process is an informal exception from a sympathetic technician, the organisation has made convenience the deciding control. Writing a tougher policy will not fix it.

## Separate authentication from permission

Authentication establishes confidence about an identity. Authorisation determines what that identity may do. Strong authentication does not justify giving a person access to every application, and carefully limited permissions do not compensate for a weak way of establishing who is signing in.

Start with the roles and resources that matter. Administrative access, sensitive records and payment approvals deserve explicit attention. Identify ordinary employee access too, including accounts created outside the main directory. A central authentication policy cannot protect an application that does not use it.

NIST's framework treats users, services and hardware as subjects of authentication, and calls for permissions to be managed and reviewed using least privilege and separation of duties. For a mid-market team, the practical task is to translate those ideas into named responsibilities and supported access patterns, rather than assuming the identity platform will make the decisions.

## Be precise about the kind of MFA

Multi-factor authentication is not a single uniform control. ASD recommends phishing-resistant MFA and distinguishes it from weaker implementations such as SMS or voice-based methods. A report that says only MFA is enabled can conceal important differences in protection and coverage.

Ask the technical team to identify the methods allowed, the accounts covered and the fallback paths. A strong preferred method does not establish strong protection if a weaker alternative remains available without appropriate controls. Product names alone will not answer this; inspect the actual configuration and supported authentication flows.

A staged rollout can be sensible. Prioritise high-impact access, test the supported methods with real working conditions and plan the remaining coverage. Be honest about transitional arrangements. Do not describe ordinary one-time-code MFA as phishing-resistant merely because it uses an authenticator application.

The help desk needs an equally precise explanation. Staff should know which recovery requests they can handle and which require another approval, without improvising a new interpretation of the policy every time.

## Design for the person who cannot use the default

Consider a hypothetical field services business. Some staff use managed laptops, some work at shared workstations and others cannot reliably receive mobile coverage at a depot. Mandating one phone-based method for everyone may create predictable failure points.

The team trials supported security keys for a defined group and arranges a controlled spare process. It checks how a worker enrols, how a lost key is reported and how access is recovered when the usual supervisor is unavailable. The trial measures whether the workflow is usable; it does not claim a security outcome from adoption alone.

Accessibility and employment arrangements also matter. Do not assume every worker can or should supply a personal device. Provide an approved alternative and make the responsibility for purchasing and replacing it explicit. If an approach creates friction on every shift, management should hear about it before staff build their own workaround.

Bring support into the pilot. A technically sound method that the service desk cannot troubleshoot will be under pressure to accumulate exceptions.

## Make recovery harder to abuse than a phone call

An urgent request should trigger an established identity verification process, not waive it. Define which evidence the organisation accepts, how staff avoid relying solely on information supplied in the request and how another authorised person can approve a high-impact recovery.

Recovery records should capture who authorised the action, which access changed and what must happen afterwards. Temporary access needs a defined scope and endpoint. Once the person regains access, check the authentication methods and relevant sessions rather than assuming the temporary state has disappeared.

Emergency administrator access is a separate case. Keep it under a controlled process, test it and monitor its use. Do not casually exempt an executive's daily account and call it emergency access. [Privileged access without shared administrator accounts](/blog/privileged-access-without-shared-administrator-accounts) covers that separation in more detail.

## Report the inconvenient remainder

Measure coverage against an understood account population. Include service identities, external collaborators and applications that still have local sign-in. Distinguish a configured policy from evidence that the intended users and flows are subject to it.

Report the remaining exceptions with owners and reasons. A vendor limitation may require a different control or a replacement decision. A staff usability problem may require a better supported method. Those are different management decisions and should not share one vague label.

For each exception, specify what would end it. The discipline in [handling security exceptions with an expiry date](/blog/handling-security-exceptions-with-an-expiry-date) helps keep temporary compromises from becoming the default design. Identity security becomes more credible when the organisation can explain how the awkward cases work, not just how a standard employee signs in on a good day.
