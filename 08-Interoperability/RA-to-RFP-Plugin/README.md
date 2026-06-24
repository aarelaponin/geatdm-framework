# Interoperability Tender Kit

A **buyer-side** skill bundle for turning a country's interoperability architecture into an issuable, funder-compliant government tender (e.g. for a national interoperability / data-exchange platform). It is the mirror image of a bidder-side proposal kit: this kit *authors* the RFP.

Distilled from a real engagement (The Gambia GIP, WARDIP / World Bank). Each skill is installable as a `.skill` file.

## The pipeline

```
procurement-vehicle-selector ─┐
national-baseline-extractor ──┤
                              ├─> framework-to-sor ─> scope-boundary-setter ─┐
                              │                                              │
local-participation-designer ─┘                                             │
                                                                            v
                            is-rfp-builder ─> annex-pack-builder ─> traceability-matrix-builder
                                                                            │
                                                                            v
                                                   procurement-qa ─> transmit-package
```

## The ten skills

| Skill | Role |
|---|---|
| `procurement-vehicle-selector` | Match the vehicle to the obligation (result vs means); set method + contract machinery; ADR. |
| `national-baseline-extractor` | Mine the National EA for the integration map, standards, classification, identity keys, inventory. |
| `framework-to-sor` | **Core.** Internalise the reference architecture into a self-contained, numbered Statement of Requirements ("the Supplier shall…"), citing only published standards. |
| `scope-boundary-setter` | Build the backbone; integrate (not rebuild) separate national systems. |
| `local-participation-designer` | Funder-compliant local/SME inclusion; protect the critical capability; score KT on substance. |
| `is-rfp-builder` | Assemble the Supply & Installation IS RFP (bundles a proven docx generator). |
| `annex-pack-builder` | Bid Data Sheet + Annexes C–G (bundles a proven docx generator). |
| `traceability-matrix-builder` | The RTM xlsx: REQ→clause→test, REQ-ID trace, IV&V log (bundles a proven xlsx generator). |
| `procurement-qa` | Cross-document consistency & compliance gate; run before issuance. |
| `transmit-package` | Transmittal memo + cover email; records the vehicle decision. |

## The doctrine (encoded across the skills)

1. Match the vehicle to the obligation (result → supply contract, not consulting ToR).
2. Never cite an unpublished source; internalise it; cite only published standards.
3. Requirements are obligations of a named actor ("the Supplier shall…"), country/platform-specific and verifiable.
4. Keep the rationale (an *Intent* per requirement area).
5. Separate rule-making from building — retain independent IV&V; the buyer owns acceptance.
6. Build the platform; integrate the rest (reuse-first).
7. Put teeth on the result — acceptance/Operational Acceptance, performance security, warranty, liquidated damages.
8. Enable local capability without breaking delivery (prime-capability protection; KT scored on substance).
9. Mind the funding cliff — compress to the window; recurrent cost to the national budget after.
10. Consistency is a gate, not a hope — QA every cross-reference before issuance.

## Reusability notes

- **Funder-parametrised.** The vehicle, evaluation method and contract machinery differ by funder (World Bank / AfDB / EU PRAG / national). Take the funder as input and swap the template/method.
- **Two inputs per country:** the reference architecture (the "should") and the National EA (the "is"). Everything else is template.
- **The generator skills bundle proven scripts** as example assets — adapt the content, keep the structure/styling/machinery.

## Status

Solid first drafts, packaged and installable; **not yet eval-tested**. The recommended next step is the skill-creator description-triggering optimisation (does each skill fire on real phrasings) and a hardening pass to parametrise the bundled generators to read all country content from one input spec.
