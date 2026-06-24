# GEATDM Interoperability — Reference Architecture & RA-to-RFP Plugin Guide

**Document:** GEATDM-Interop-RA-to-RFP-Guide-v1.0
**Part of:** Interoperability Module (08)
**Version:** 1.0
**Date:** June 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Interop-RA-to-RFP-Guide |
| Title | Interoperability Reference Architecture & RA-to-RFP Plugin — Why and How to Use |
| Version | 1.0 |
| Date | June 2026 |
| Status | Released |
| Authors | FiscalAdmin OÜ |
| License | CC-BY 4.0 |

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2026 | Initial release. Adds the Interoperability Reference Architecture (v1.0) and the `interop-ra-to-rfp` plugin (10 skills) to Module 08, with the rationale and operating instructions. |

### Companion artefacts (this folder)

| Artefact | File | Role |
|---|---|---|
| Interoperability Reference Architecture | `GEATDM-Interop-Reference-Architecture-v1.0.docx` | The full RA — the layered rulebook (legal, organisational, semantic, technical, infrastructure + governance) the requirements are drawn from. |
| RA-to-RFP plugin (packaged) | `RA-to-RFP-Plugin/interop-ra-to-rfp.plugin` | One-click installable bundle of the 10 skills. |
| RA-to-RFP plugin (source) | `RA-to-RFP-Plugin/skills/*`, `RA-to-RFP-Plugin/.claude-plugin/plugin.json` | Version-controlled source of every skill. |
| Existing Module-08 baseline | `GEATDM-Interop-Reference-Model-v1.0.md`, `-Method-v1.0.md`, `-Toolkit-v1.0.md` | The conceptual model, the 8-step method, and the template toolkit this guide builds on. |

---

## 1. What this adds to Module 08

Module 08 already provides the **Reference Model** (the concepts), the **Method** (the 8 steps to develop a national interoperability framework), and the **Toolkit** (the templates). This release adds the two pieces that take a country from *framework* to *funded delivery*:

1. **The Interoperability Reference Architecture (RA)** — a complete, layered rulebook for digital-government interoperability: the legal, organisational, semantic, technical and infrastructure layers, with governance and legal cross-cutting; the regulator/operator split; the GovStack Information Mediator building block; the security baseline; cross-functional requirements; the onboarding lifecycle; and an implementation roadmap. It is the *“should”* — the design any national interoperability platform ought to follow.

2. **The `interop-ra-to-rfp` plugin** — ten composable skills that turn that RA (plus a country's own National EA) into an **issuable, funder-compliant tender** to actually procure the platform. It is the *“how you buy it.”*

Together they close the gap that repeatedly stalls real programmes: a government has a good architecture but no clean path from architecture to a defensible Request for Proposals.

---

## 2. Why this exists (the rationale)

Producing the Gambia Government Interoperability Platform (GIP) tender under the World Bank–financed WARDIP programme exposed a set of mistakes that are easy to make and expensive to discover late. The plugin encodes the fixes as reusable doctrine:

1. **Match the procurement vehicle to the obligation.** A working, accepted platform is an *obligation of result* and must be bought with a **supply / Supply-and-Installation-of-Information-Systems contract**, not a consulting Terms of Reference (an obligation of *means*). The wrong vehicle lacks acceptance testing, performance security, warranty and liquidated damages — and attracts the wrong bidders.
2. **Never cite an unpublished architecture as authoritative.** A reference architecture written as a personal or internal synthesis cannot be cited in a funded tender. Its substance must be **internalised** into the tender as a self-contained Statement of Requirements, citing only *published* standards (GovStack, OpenAPI, OAuth/OIDC, CloudEvents, EIF/TOGAF, ISO/HL7 where relevant).
3. **Requirements are obligations of a named actor.** “Countries should…” guidance becomes “**the Supplier shall…**”, country- and platform-specific, and verifiable (each with an acceptance test).
4. **Keep the rationale.** Each requirement area carries an *Intent* — what the capability is and why — so the vendor knows what to build and the buyer knows what to expect.
5. **Separate rule-making from building.** Retain an **independent IV&V** outside the build contract; the buyer owns acceptance. (Resolves the “self-marking” conflict of interest.)
6. **Build the platform; integrate the rest.** The exchange backbone and its intrinsic components are built; separate national systems (payment, identity/IAM, citizen portal, notification, terminology/open-data platforms) are *integrated with*, reuse-first — not rebuilt.
7. **Put teeth on the result.** Operational Acceptance, performance security, warranty/defects-liability, and liquidated damages (delay + SLA) make the obligation enforceable.
8. **Enable local capability without breaking delivery.** Encourage JVs/subcontracting and score knowledge transfer on substance — but require the critical platform-delivery capability to sit with a jointly-and-severally-liable prime/JV member.
9. **Mind the funding cliff.** Compress delivery to the financing window; move recurrent operation to the national budget afterward.
10. **Consistency is a gate, not a hope.** QA every cross-document reference (names, standards, weights, scope) before issuance — a single naming drift discredits the set.

---

## 3. The RA-to-RFP pipeline

The ten skills form one buyer-side pipeline. Two inputs per country: the **Reference Architecture** (the “should”, in this folder) and the country's **National EA** (the “is”).

```
procurement-vehicle-selector ─┐
national-baseline-extractor ──┤
                              ├─> framework-to-sor ─> scope-boundary-setter ─┐
local-participation-designer ─┘                                             │
                                                                            v
                            is-rfp-builder ─> annex-pack-builder ─> traceability-matrix-builder
                                                                            │
                                                                            v
                                                   procurement-qa ─> transmit-package
```

| # | Skill | What it does |
|---|---|---|
| 1 | `procurement-vehicle-selector` | Pick the fit-for-purpose vehicle (result vs means); set evaluation method + contract machinery; record an ADR. |
| 2 | `national-baseline-extractor` | Mine the National EA for the integration map, adopted standards, data-classification, identity master keys, and systems inventory. |
| 3 | `framework-to-sor` | **Core.** Internalise the RA into a self-contained, numbered Statement of Requirements (“the Supplier shall…”), citing only published standards. |
| 4 | `scope-boundary-setter` | Apply the build-vs-integrate test; write the explicit in/out-of-scope statement. |
| 5 | `local-participation-designer` | Funder-compliant local/SME inclusion; protect the critical capability; score knowledge transfer on substance. |
| 6 | `is-rfp-builder` | Assemble the Supply-and-Installation RFP (.docx) with the result-obligation machinery and rated-criteria evaluation. |
| 7 | `annex-pack-builder` | Bid Data Sheet + Annexes C–G (CFR baseline, inventory, acceptance criteria, SLA, agreement templates). |
| 8 | `traceability-matrix-builder` | The requirements-traceability matrix (.xlsx): REQ-ID → clause → acceptance test, plus the IV&V verification log. |
| 9 | `procurement-qa` | Cross-document consistency & compliance gate; run before issuance. |
| 10 | `transmit-package` | Transmittal memo + cover email; records the vehicle decision. |

---

## 4. How to use it

### 4.1 Install
Install `RA-to-RFP-Plugin/interop-ra-to-rfp.plugin` once (the “Save/Install plugin” action). All ten skills become available; they trigger automatically on the right requests (e.g. “turn this architecture into requirements”, “which procurement vehicle?”, “build the RFP”, “QA the package”).

### 4.2 Run a country, end to end
1. **Decide the vehicle** — confirm it is an obligation of result → supply RFP with rated criteria (`procurement-vehicle-selector`).
2. **Extract the baseline** — pull the integration map, standards, classification, identity keys and inventory from the country's National EA (`national-baseline-extractor`).
3. **Author the requirements** — internalise this RA into the Statement of Requirements (`framework-to-sor`), grounded in the baseline.
4. **Set the scope boundary** — build the backbone; integrate the rest (`scope-boundary-setter`).
5. **Design local participation** — JV rules + substance-based KT scoring (`local-participation-designer`).
6. **Build the documents** — the RFP (`is-rfp-builder`), the Data Sheet + Annexes C–G (`annex-pack-builder`), the traceability matrix (`traceability-matrix-builder`).
7. **QA** — run the consistency/compliance gate (`procurement-qa`); fix and re-run until clean.
8. **Transmit** — the cover memo + email to the authority, with the open `[confirm]` decisions (`transmit-package`).

### 4.3 What to prepare
- This **Reference Architecture** (already here).
- The country's **National EA** deliverables (target architecture, integration analysis, data architecture, systems inventory).
- The **funder** (World Bank / AfDB / EU PRAG / national) and the financing window — these parametrise the vehicle, evaluation method and contract machinery.
- The **buyer's decisions** that close the `[confirm]` placeholders (weighting, thresholds, securities, dates, hosting, IV&V appointment).

### 4.4 Worked reference
The first end-to-end application was the **Gambia GIP** under WARDIP: a Supply-and-Installation RFP, Bid Data Sheet + Annexes C–G, a 5-sheet traceability matrix, and a transmittal memo — produced from this RA plus the Gambia National EA. Use it as the canonical example of the output shape.

---

## 5. Relationship to the rest of GEATDM

- **Module 08 (this module):** the Reference Model and Method define *what* a national interoperability framework is and *how to develop it*; this RA gives the concrete target design, and the plugin turns it into *procurement*.
- **Module 09 (DPI):** the platform is a DPI building block (the Information Mediator). The scope-boundary rule — *build the exchange backbone, integrate the other DPI pillars (identity, payments)* — is the operational expression of the DPI “integrate, don't rebuild” principle.
- **02-Reference-Architectures (PDU/RA/SDA):** sectoral organisations consume the interoperability platform; their cross-government exchange requirements feed the National EA baseline this plugin reads.
- **01-Toolkit / 03-Method-Guide:** the sourcing-strategy and procurement templates align with the vehicle decision the plugin records.

---

## 6. Status, maintenance and provenance

- **RA status.** Version 1.0, owned by FiscalAdmin OÜ. By placing it under version control here it becomes a **controlled GEATDM artefact**; even so, the plugin's discipline is to *internalise* its content into each tender rather than cite it — so a tender never depends on the RA being externally published.
- **Plugin versioning.** `interop-ra-to-rfp` v0.1.0. The three builder skills bundle proven document generators as example assets; a future hardening step is to parametrise them to read all country-specific content from a single input spec. Skill descriptions were tuned for triggering; the formal triggering-optimisation harness ships with the kit for later runs.
- **Updating.** Re-package the plugin after editing any skill (zip the plugin folder to `interop-ra-to-rfp.plugin`); bump the plugin version in `.claude-plugin/plugin.json`; and record changes in this guide's Version History.
