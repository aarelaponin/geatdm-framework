---
name: national-baseline-extractor
description: >-
  Mine a country's existing Enterprise Architecture / National EA deliverables for the binding
  procurement baseline that grounds an interoperability-platform tender: the integration map
  (the cross-agency exchange points with priority and target mechanism), the technical/API and
  security standards already adopted, the data-classification framework, the identity master keys /
  base registries, and the systems-and-data inventory. Use WHENEVER you need the country-specific
  "is" baseline behind a tender: "extract the integration map", "what standards has the country
  adopted", "build the systems inventory", "pull the national baseline / NEA into the RFP", "what
  are the identity registries / data classification". Produces structured tables/JSON that feed the
  Statement of Requirements, the integration-map annex, and the inventory annex. Unlike a personal
  reference architecture, the National EA is an official, citable deliverable — bind to it. Pairs
  with framework-to-sor, is-rfp-builder and annex-pack-builder.
---

# National Baseline Extractor

## Why this exists

A tender needs two inputs: the **"should"** (a reference architecture — generic, often unpublished) and the **"is"** (the country's own Enterprise Architecture / National EA — concrete and, crucially, an **official, citable** government deliverable). This skill extracts the second. It is what turns generic requirements into requirements that name the real systems, the adopted standards and the actual integration needs — and because the National EA is published and owned by the government, the tender *can* cite it (unlike a personal reference architecture, which must be internalised).

## What to extract (the five baseline artefacts)

1. **Integration map** — the cross-agency exchange points. For each: an ID, the source↔target systems, a priority (critical/important/future), the target mechanism (platform-mediated / direct API / batch / event), and the phase. This becomes the integration-map annex and tells the pilot which flows to prove.
2. **Technical & API standards** — what the country has already adopted (e.g. OpenAPI version, REST/JSON, the mediator/IM-BB choice, event envelope, domain standards like HL7 FHIR / ISO 20022). The Statement of Requirements binds to these.
3. **Security & trust baseline** — authentication (OAuth/OIDC), transport (mTLS), PKI expectations, monitoring (SOC) arrangements.
4. **Data architecture** — the data-classification framework (the tiers and their handling rules), the authoritative-source / base-registry decisions, and the **identity master keys** (the few identifiers that let records match across agencies — national ID, taxpayer ID, patient index, organisation codes), including which already exist and which don't yet.
5. **Systems & data inventory** — every system the platform will connect to or be aware of: owner, domain, role (source/consumer/infrastructure), current interface/technology, indicative classification, and pilot relevance. This becomes the inventory annex.

## Method

Read the National EA deliverables (often several large `.docx`/`.md` files: a target architecture, an implementation roadmap, data/integration analyses). Walk them in order and pull the five artefacts into structured form (tables or a JSON the downstream builders read). Where the EA gives a numbered integration register or a classification table, capture it faithfully — those are the highest-value, most citable pieces. Flag what is **target-state** (e.g. a master patient index that doesn't yet exist) versus operational, because that drives what the pilot can realistically include.

Always end with a **"to validate in inception"** note: system owners, current interface versions, data-quality status, and test-environment availability are confirmed by the supplier with the agencies at project start — the extractor produces the best current picture, not a frozen truth.

## Doctrine to preserve

- **Bind to the official baseline.** The National EA is citable; cite it. Keep its integration map, standards and classification as the authoritative country baseline.
- **Name target-state honestly.** Don't let a not-yet-existing registry (e.g. an MPI) silently become a pilot dependency.
- **Identity master keys are the spine.** Cross-agency matching depends on them; surface their status early.
- **The inventory is indicative until inception.** Mark it so.

## Pairs with

`framework-to-sor` (the baseline grounds and makes the requirements specific) · `is-rfp-builder` (integration-map annex, scope) · `annex-pack-builder` (systems-and-data inventory annex) · `scope-boundary-setter` (which inventory systems are build vs integrate).
