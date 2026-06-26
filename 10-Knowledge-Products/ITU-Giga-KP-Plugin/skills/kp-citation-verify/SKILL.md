---
name: kp-citation-verify
description: >-
  PAERA-fidelity gate for an ITU/Giga KP module: drive every citation and paraphrased entity / principle /
  taxonomy term from DRAFT to VERIFIED against the real PAERA document before the module is shared. Use WHENEVER
  a KP bundle references PAERA, GovStack, EIF, NIIS, UNDP or World Bank, or paraphrases a published list (the
  ten architectural principles, the metamodel entities, the organisational taxonomy types): "verify the
  citations", "check the PAERA references", "is this section number right", "are the ten principles correct",
  "confirm the metamodel entities", "DRAFT to VERIFIED", "fidelity check before the call". A description is
  DRAFT until checked against the source or explicitly marked TO-CONFIRM; only VERIFIED ships to ITU. Wrong
  section numbers and silently paraphrased lists are the highest-yield credibility defect a reviewer catches —
  this prevents the Module-2 calibration-5.1 situation. Run after kp-build-render, alongside kp-bundle-qa,
  before any module is sent.
compatibility: Python (python-docx) for extracting PAERA sections from the .docx; otherwise the headings can be read manually. The diff-and-classify step is Claude reasoning, not a script.
---

# KP citation verify — the PAERA-fidelity gate

## Why this exists

Every operational citation in a KP bundle must be against a public reference the ITU reviewer can verify, and every paraphrase of a published list must match the source's wording. The contract's own anchor map warns: *"do not invent PAERA section numbers — reviewers will check. A wrong PAERA citation damages the entire bundle's credibility."*

The failure mode is concrete. KP1 Module 2 named the metamodel entities, the ten architectural principles and the three taxonomy types from memory and the anchor map — not from the PAERA document itself — and had to ship a calibration item (5.1) asking ITU to wait while the wording was confirmed. That is a self-inflicted credibility wobble. This gate closes it: nothing referencing PAERA leaves as "final" until it has been checked against PAERA.

**A citation is DRAFT until verified. Only VERIFIED ships.** (This mirrors the `verify-catalogue-semantics` DRAFT → VERIFIED discipline used on the data-platform side.)

## The authoritative sources, in priority order

1. **The PAERA document** — `itu-knowledge/_inputs/PAERA_document_v.1.0.docx`. This is the ground truth for any `PAERA v1.0 §X` or `Annex N` reference and for the canonical wording of the principles, entities and taxonomy. Open it; do not rely on memory.
2. **The anchor map** — `skills/itu-giga-kp-bundle/references/paera-anchor-map.md`. A concept→section crosswalk. Use it to find *where* a concept should live, then confirm against the document. The map is a finding aid, not the source.
3. **The published spec** for non-PAERA anchors — GovStack BB specs (govstack.global), EU EIF, NIIS X-Road (niis.org), UNDP DPI Maturity Model, World Bank ID4D, ITU DPI Safeguards. Each four-layer-interoperability / DPI-maturity / identity-benchmark claim is cited here, **not** to PAERA (see the anchor map's "What PAERA does NOT cover").

## The method

### 1. Extract every claim that needs a source

From the module's **build script** (never the docx — the script is the source of truth), pull:

- every `paeraAnchor` value;
- every `"PAERA v1.0 §…"` / `"Annex …"` string in script beats, slide specs, sources slides, metadata `PAERA citations` and `External-link list`, and the Section-6 aggregate annex;
- every **paraphrased published list** — the ten principles (2.3), the metamodel entities and relationships (2.2), the taxonomy types and supporting elements (2.4), the once-only principle number, the lifecycle phase names;
- every non-PAERA anchor (GovStack / EIF / NIIS / UNDP / ID4D).

`scripts/extract_paera_sections.py` dumps the PAERA document's heading tree and the key lists so you have the source side to diff against.

### 2. Classify each claim

For each, assign one status:

- **VERIFIED** — the section number exists in PAERA and its content matches the concept cited; or the paraphrased list matches PAERA's wording/count; or the non-PAERA anchor's published spec supports the claim.
- **TO-CONFIRM** — plausible but not yet checked against the source (e.g. PAERA doc not to hand, or a number the anchor map suggests but the document hasn't been opened to confirm). Must be resolved or carried as an explicit calibration item — never silently shipped as fact.
- **WRONG** — the section number does not exist, points at different content, or the paraphrase diverges from PAERA's wording or count. Emit the correction.

### 3. The list checks (highest yield)

These are where Module 2 was exposed. Check each against the PAERA document explicitly:

- **The ten architectural principles (§5.2)** — confirm the count is ten, the names, and whether any have been split/merged. The script's paraphrase must be reconciled to PAERA's canonical wording, or the script must say "paraphrased" where it cannot.
- **The metamodel entities and relationships (Annex 2)** — confirm the entity set (Capability, Service, Application, Data Domain, Technology Component, Organisation — or whatever PAERA actually names) and the relationship verbs. No invented entity.
- **The organisational taxonomy (§4.6 / Annex A1.2)** — confirm the type names (policy unit / regulatory agency / service-delivery authority) and the supporting elements (registries, shared platforms).
- **Once-only** — confirm it is §5.2 Principle #5 (as the anchor map claims) and not a different number.

### 4. Emit the verdict and the fixes

Output two artefacts:

1. A **citation table**: `claim` · `cited as` · `PAERA actual (section + wording)` · `status (VERIFIED / TO-CONFIRM / WRONG)` · `correction`.
2. A **fix list** for the build script — exact `old → new` edits to apply upstream. **Never edit the docx**; fix the build script and re-render via `kp-build-render`.

If anything remains TO-CONFIRM at ship time, it goes into the bundle's Section 5 calibration items as an explicit, owned line — not buried.

## Anti-patterns

- **Do not invent a section number.** If a concept has no clear PAERA anchor, cite it descriptively without a section reference, or switch to a verifiable alternative (GovStack, EIF, NIIS, UNDP). PAERA does not have to carry every claim.
- **Do not cite GEATDM, TK-IO-XX, TK-DPI-XX, or the IMF TA RA** as if public. They are internal; ITU does not have them. (`kp-bundle-qa` greps for these — but catch them here too.)
- **Do not mark VERIFIED from memory.** Verified means the document was opened and the wording matched. Memory and the anchor map produce TO-CONFIRM at best.
- **Do not let a paraphrase masquerade as a quote.** If the script states "PAERA's ten principles are A, B, C…" the list must match PAERA. If you cannot confirm, soften to "principles such as…" and carry a calibration item.

## What good looks like

A module passes the gate when: every PAERA section number is confirmed to exist and match its concept; every paraphrased list matches PAERA's wording and count (or is honestly marked as paraphrased); every non-PAERA claim cites the right published anchor; and the only remaining items are explicit, owned TO-CONFIRM calibration lines. Then the citations are safe to put in front of ITU.
