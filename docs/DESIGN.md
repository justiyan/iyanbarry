# Approved teal editorial identity

The user approved the self-contained teal/parchment homepage preview, then authorised applying it across the site. The composition is editorial: portrait-led introduction, asymmetric text sections, open ruled service lists, generous typography and a dark closing contact section. Not a colour-only reskin of the former Swiss layout.

## Tokens
- Parchment: `#f4f2e9`
- Ink: `#203b39`
- Teal accent: `#24645c`
- Sage surface: `#e1e7db`
- Secondary text: `#53615b`
- Decorative rule: `#cdd4c7`
- Form boundaries: `#788b80` (3.23:1 against parchment)
- Dark-section text: `#d5dfd3`; emphasis: `#b8cfb5`

Fraunces is the display face; DM Sans is body/interface text. The three Latin variable WOFF2 files are self-hosted under `public/fonts` with upstream OFL licences. Browser requests do not depend on Google Fonts. Monospace is reserved for article code, not labels.

## Shared implementation
`app/globals.css` owns tokens and editorial components. Tailwind aliases reference those variables instead of duplicating colours. Shared Header/Footer/Layout/ui components carry the design across every route. Homepage follows the approved preview; inner pages preserve their original copy, timeline, URLs, schemas and dates with semantic content-fingerprint tests.

## Images and downloads
The user subsequently approved blending the on-page portrait background into the parchment. Home, About and Speaking use `iyan-barry-parchment.webp`, a lossless derivative created by `scripts/blend-portrait-background.py`. A U2-Net human mask protects light clothing; only the border-connected neutral backdrop is replaced, with a 2px inward feather. The subject is not generated, recoloured or retouched. `scripts/portrait-blend-audit.json` and the saved background mask record the process. The original JPEG and downloadable headshots remain unchanged. The model used for regeneration is cached outside the repository at the path in the script.

Speaker PDF and IB icons match the palette. `python scripts/build-speaker-kit.py --pdf-only` refreshes the PDF without rewriting bios or portrait downloads; existing icon-generation entry points are in that script. `python scripts/build-social-card.py` creates the matching social card from the approved portrait, without a generated likeness.

## Boundaries
No changes to contact backend, Azure/Exchange permissions, secrets, publication dates, article bodies, domain redirects or email routing. Existing form security, copy-email fallback, downloads and navigation remain functional. Old working production baseline is git commit `3fe9984`; a rollback should revert only this design change, not the form or tenant configuration.
