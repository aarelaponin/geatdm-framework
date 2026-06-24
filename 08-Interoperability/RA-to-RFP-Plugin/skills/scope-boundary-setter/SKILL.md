---
name: scope-boundary-setter
description: >-
  Apply the build-vs-integrate test to a government platform tender and write the explicit
  in-scope / out-of-scope statement: the exchange backbone and its intrinsic components are BUILT;
  separate national systems that already exist or belong to other programmes (payment rails,
  national identity/IAM, citizen portals, notification services, standalone terminology/open-data
  platforms) are INTEGRATED WITH through standard interfaces under reuse-first, not rebuilt. Use
  WHENEVER deciding or stating what a platform tender builds versus integrates: "what's in scope",
  "is payment / identity / the portal in scope", "build vs integrate", "are we rebuilding X", "write
  the scope boundary", "the requirement seems to contradict reuse-first". Prevents both gold-plating
  and the contradiction of a build requirement that violates the reuse-first principle, and keeps
  the scope inside the funding window. Pairs with framework-to-sor, national-baseline-extractor and
  is-rfp-builder.
---

# Scope Boundary Setter

## Why this exists

The single most expensive ambiguity in a platform tender is *what it builds versus what it merely connects to*. Left vague, a vendor either gold-plates (rebuilding national systems that already exist) or a requirement quietly contradicts the tender's own reuse-first principle. A short, explicit **in-scope / out-of-scope** statement settles it — and keeps the scope (and therefore the schedule and price) inside the funding window.

## The test

For each capability, ask: **is it the exchange backbone, or a component intrinsic to it?**

- **Build** — the data-exchange backbone and the components that *are* the platform: the information mediator / security server / API gateway, the service/API/data **catalogues and registry**, **trust services & PKI** (CA, OCSP, time-stamping), the **event layer**, the **security baseline**, and **exchange-layer access-logging & consent**. Also the legal/governance/semantic/capacity foundations the platform needs to operate.
- **Integrate, don't build** — capabilities that are *separate national systems*, that already exist or belong to another programme, that the platform merely exchanges data with or calls through a standard interface: the **national payment rail**, the **national identity / IAM**, the **citizen service portal**, the **notification service**, and standalone **terminology** and **open-data** platforms.

The governing rule of thumb: **what is not the platform itself, the tender does not build — it integrates with it under reuse-first.** When in doubt, a capability that has its own national owner, its own roadmap, or an existing production instance is an integration target, not a build item.

## What to produce

- An **explicit in-scope / out-of-scope statement** for the RFP scope section: a one-paragraph "this contract builds the platform backbone + foundations" and a clear list of the separate national systems that are **out of scope — integrated with, not built**.
- For each out-of-scope system, a one-line **integration note**: the platform connects to it through standard interfaces, reuse-first, where and when the pilot requires; any gap is recorded as a recommendation, not a build item.
- A check that **no requirement contradicts the boundary** (e.g. a "deliver the payment component" obligation when payment is integrate-only) — this is the reuse-first coherence check.

## Doctrine to preserve

- **Reuse-first before build.** Check the national catalogue/landscape first; integrate what exists.
- **The backbone is intrinsic; the rest is separate.** Catalogues, trust/PKI, event layer, access-logging are part of the platform; payment/identity/portal/notification/terminology/open-data are not.
- **State it, don't imply it.** An explicit boundary in the document prevents the contradiction and the gold-plating.
- **Scope discipline is schedule discipline.** Narrowing to "build the backbone, integrate the rest" is often what makes the timeline fit a funding window.

## Pairs with

`national-baseline-extractor` (which inventory systems already exist) · `framework-to-sor` (so no requirement violates the boundary) · `is-rfp-builder` (the scope section and the out-of-scope statement) · `procurement-qa` (scope-coherence check).
