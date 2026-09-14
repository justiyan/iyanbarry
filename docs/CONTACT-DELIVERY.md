# Website enquiry delivery

## Isolation and approved scope

Personal Northside tenant only: `e4ffc9c1-acd9-4e27-84ee-cc53ff1997aa`.
CLI uses `C:/Users/RPizzy2/.azure-northside`. Never use the default corporate CLI context.
Existing recipient `ask@iyanbarry.com` remains an alias of Iyan's existing mailbox.
Sender is new shared mailbox `website@iyanbarry.com`, interactive sign-in disabled.
No MX, alias, MFA or Security Defaults changes.

## Resources provisioned

- Entra app `iyanbarry-website-mail`: `d3c6f936-52e3-4b05-8f2d-ac08338e2589`.
- Enterprise service principal: `2b34633f-bd62-4064-b1c5-681594ef37d8`.
- Sender mailbox object: `de0718d4-32c6-4637-9363-95ca1baf137a`.
- Sender-only administrative unit: `6eb04a31-0f0b-4d12-9e8d-48f3043fa464`.
- Azure resource group `iyanbarry-website`, Australia East.
- Storage account `iyanbarrycontact`, Standard LRS, HTTPS-only, TLS 1.2 minimum, public blob access disabled.
- Table `ContactLimits`; website SAS limited to read/add/update on this table. Account key is not in Vercel.
- Production Vercel variables are write-only sensitive values. No secrets belong in git.

## Permission design

Only `Application Mail.Send`, restricted to the sender administrative unit through Exchange Application RBAC.
No tenant-wide Graph application permissions. No mailbox-reading permissions.
The server fixes the destination to `ask@iyanbarry.com`; visitor email is Reply-To only.
Exchange RBAC scopes the SENDER, not destinations; the fixed recipient is enforced by the application.

## Current deployment gate

Provisioning encountered an Exchange inconsistency: `IsDehydrated=False` and `Enable-OrganizationCustomization` says already enabled, yet restricted role assignment creation requests that command again. Do not grant unscoped permission as a workaround. Until scoped authorisation succeeds and an actual message is traced to delivery, the form must not be presented as operational.

## Credentials

Application credential and table SAS expire September 2027. Exact secret metadata is in the private Northside configuration directory, not this repository. Rotate before expiry, update Vercel and redeploy; verify behaviour because sensitive variables cannot be read back.

## Verified checks so far

- Dedicated shared mailbox is present and interactive sign-in is disabled.
- Sender-only administrative unit contains exactly the website mailbox.
- Enterprise application's Graph app-role assignment list is empty (no unscoped grants).
- Graph message reads return 403 for both the website and personal mailbox.
- Direct send test currently returns 403; this is a BLOCKER, not a passing delivery test.
- Real Azure Table adapter passes insert, duplicate denial, read and concurrent ETag compare-and-swap verification.
- Production form is gated by `CONTACT_FORM_ENABLED=true`; leave unset until delivery is verified. Email/copy fallback is independent.
- A single retry job is scheduled for the Exchange role creation; failures require Microsoft support rather than broader access. Support draft: `C:/Users/RPizzy2/hermes-media/northside-exchange-support.md`.

## Test requirements before launch

- Sender permission positive for website mailbox, negative for Iyan mailbox.
- Graph inbox reads return 403.
- Real form email accepted and Exchange message trace confirms Delivered to the correct mailbox.
- Invalid origin, invalid email, oversized body, replay, rate limits and unavailable dependencies fail closed.
- Desktop/mobile form, clipboard fallback, error retention, submit disabled during send, no unexpected browser errors.

## Disable without disrupting mail

Disable the contact UI/API through a reviewed deployment; retain visible email/copy fallback.
Revoke the specific website Exchange role assignment and app credential only with approval. Do not delete or change the personal mailbox, its aliases, domain records or tenant-wide security.
