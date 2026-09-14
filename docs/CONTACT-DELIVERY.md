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

The initial Exchange customisation inconsistency cleared on a later retry. The sender-only role is now assigned: `Application Mail.Send`, `RecipientAdministrativeUnitScope=6eb04a31-0f0b-4d12-9e8d-48f3043fa464`. Authorisation tests return InScope=True for website@iyanbarry.com and False for Iyan's personal mailbox. Direct sender tests are confirmed Delivered by Exchange message trace (latest direct test ID `a4bb9624-6fa7-4756-aaa9-08df122c8e37`). CONTACT_FORM_ENABLED is true for the next production deployment; final live browser submission and delivery are checked separately.

## Credentials

Application credential and table SAS expire September 2027. Exact secret metadata is in the private Northside configuration directory, not this repository. Rotate before expiry, update Vercel and redeploy; verify behaviour because sensitive variables cannot be read back.

## Verified checks so far

- Dedicated shared mailbox is present and interactive sign-in is disabled.
- Sender-only administrative unit contains exactly the website mailbox.
- Enterprise application's Graph app-role assignment list is empty (no unscoped grants).
- Graph message reads return 403 for both the website and personal mailbox.
- Direct send tests now return 202 and Exchange trace confirms Delivered to the mailbox behind ask@iyanbarry.com.
- Real Azure Table adapter passes insert, duplicate denial, read and concurrent ETag compare-and-swap verification.
- Production form is gated by `CONTACT_FORM_ENABLED=true`; email/copy fallback remains independent.
- The one-shot retry job completed; no support escalation or broader permissions were needed.

## Test requirements before launch

- Sender permission positive for website mailbox, negative for Iyan mailbox.
- Graph inbox reads return 403.
- Real form email accepted and Exchange message trace confirms Delivered to the correct mailbox.
- Invalid origin, invalid email, oversized body, replay, rate limits and unavailable dependencies fail closed.
- Desktop/mobile form, clipboard fallback, error retention, submit disabled during send, no unexpected browser errors.

## Disable without disrupting mail

Disable the contact UI/API through a reviewed deployment; retain visible email/copy fallback.
Revoke the specific website Exchange role assignment and app credential only with approval. Do not delete or change the personal mailbox, its aliases, domain records or tenant-wide security.
