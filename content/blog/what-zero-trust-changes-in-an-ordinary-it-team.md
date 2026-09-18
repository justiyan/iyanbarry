---
title: "What zero trust changes in an ordinary IT team"
date: "2026-01-26"
updated: "2026-09-18"
tags: ["Cybersecurity", "Governance"]
summary: "Zero trust changes how access is justified for a resource. Start with a useful service boundary and reliable identity and device evidence before buying a new platform."
published: true
---

If a zero trust proposal begins with a product diagram, I would ask to see an access decision instead. Pick a person, a device and a resource. Explain why access is allowed, what limits it and what happens when the evidence changes.

That is a more useful starting point for an ordinary IT team than a promise to replace the network. It exposes the policies and operating work behind the label, including tasks that may be achievable with existing tools.

## Stop using location as the whole explanation

NIST describes zero trust as a move away from static network-based perimeters towards users, assets and resources. Its architecture guidance says there is no implicit trust based solely on network or physical location, or on whether an asset is owned by the enterprise.

The word solely matters. Network controls still have a role. The mistake is treating presence on a corporate network, or connection through a VPN, as sufficient justification for broad access. A device being company-owned is also not a complete description of its current condition or its user's permissions.

For a mid-market team, translate the principle into an ordinary question: what must be true before this resource is available? That may involve an authorised role, a supported authentication method and an acceptable device state. The requirements should fit the resource and the consequences of misuse.

Write the decision in language the service owner can review. Technical signals are inputs to the policy; they do not decide the business's access needs by themselves. The owner needs to know who will be refused access and what legitimate alternative exists.

## Choose one boundary worth improving

A first project should have a meaningful scope. A finance application used by employees and an external adviser is a better candidate than a vague programme to make the whole organisation zero trust. It has identifiable users, information and business consequences.

Consider a hypothetical manufacturer with that arrangement. Employees use managed devices, while the adviser uses an externally managed laptop. Historically, both groups have received broad remote network access because it was the easiest support pattern.

The team investigates whether the finance resource can be made available through a narrower supported route. It defines the adviser's role and duration of access, the authentication requirement and the limits on export. If the service cannot enforce a desired restriction, that becomes an explicit design constraint rather than a hidden assumption.

The trial should demonstrate allowed and denied cases. Test an authorised employee, the adviser within their approved role and a controlled account that lacks the role. Also test what the user sees when device evidence is unavailable. An unexplained error message will generate support requests and pressure for a bypass.

This is a limited application of zero trust principles, not a declaration that the organisation has completed zero trust. The language should reflect the scope.

## Treat signals and exceptions as operating responsibilities

Identity and device information can become stale or incomplete. Ask who maintains role assignments, who investigates a device that stops reporting and who can approve an exception. A policy relying on unreliable inputs can deny legitimate work or allow access the organisation did not intend.

Authentication alone is insufficient. Review entitlements and the application permissions behind them. [Privileged access without shared administrator accounts](/blog/privileged-access-without-shared-administrator-accounts) addresses one important case where attribution and scope deserve separate attention.

Decide how access changes during a role transition or departure. Confirm the platform's supported behaviour for sessions and tokens rather than assuming a directory change instantly reaches every application. Test the relevant lifecycle with a controlled account and document any manual steps.

Prepare for dependency failure too. If the policy service or identity provider is unavailable, management needs an agreed response. A blanket fail-open arrangement may expose sensitive resources; a blanket fail-closed arrangement may stop essential work. Evaluate supported options by service, with a protected emergency route where justified.

Log enough information to explain access decisions and investigate problems, while controlling access to those records. A denial that nobody can diagnose is an operational defect worth fixing, not proof that the policy is strong.

## Buy against an evidenced gap

After the pilot, identify what existing systems cannot do adequately. Perhaps the organisation lacks a supported application access route, reliable device evidence or usable policy administration. Those are concrete requirements against which products can be assessed.

Ask vendors to demonstrate the difficult cases discovered in the trial, including exceptions and dependency failure. Compare implementation and operating effort as well as licence cost. A small team may prefer a narrower, supportable design over an elaborate architecture that requires constant specialist attention.

Avoid measuring progress only by the number of applications connected to a new platform. Measure whether resource access is appropriately constrained, whether legitimate users can work and whether the team can explain and review decisions. Keep exclusions visible.

[Secure remote access for small distributed teams](/blog/secure-remote-access-for-small-distributed-teams) applies the same reasoning to everyday distributed work. Zero trust becomes useful when it changes a concrete access decision and the organisation can operate that change. A new product name in the architecture diagram is not enough.
