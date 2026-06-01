# GEATDM AI PLAYS CATALOGUE

**Document:** GEATDM-WP7-AI-Plays-Catalogue-v1.0
**Part of:** AI Plays
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## DOCUMENT CONTROL

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP7-AI-Plays-Catalogue |
| Title | AI Plays Catalogue — Skills supporting the GEATDM method |
| Version | 1.0 |
| Date | May 2026 |
| Status | Released |
| Authors | FiscalAdmin OÜ |
| License | CC-BY 4.0 |

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial release. |

---

## TABLE OF CONTENTS

1. Introduction
2. Cross-cutting AI plays
3. KP1 — Government Enterprise Architecture AI plays
4. KP2 — Government Interoperability Framework AI plays
5. KP3 — DPI Roadmap AI plays
6. KP4 — Building-block service AI plays
7. Common patterns across plays
8. Integration with the GEATDM phases
9. Cross-references
10. Glossary

---

# 1. INTRODUCTION

## 1.1 Purpose

This catalogue describes the AI plays that support the GEATDM method. An AI play is a self-contained skill that takes a defined input, applies an AI model under a structured prompt, and returns a defined output that fits a specific step of the method. Each play is shipped as a prompt template, sample input, sample output, and a working notebook or shell script. Plays are not autonomous agents; they are tools that a practitioner runs at a specific point in the method, reviews the output, and then incorporates into a deliverable.

The catalogue contains 16 plays to commission as part of GEATDM v1.1, plus 7 existing Joget skills already in the rsr workspace. Plays are organised into five groups: cross-cutting (applicable across all four KPs), KP1 (Government Enterprise Architecture), KP2 (Government Interoperability Framework), KP3 (DPI Roadmap), and KP4 (Building-block service design and delivery).

## 1.2 The AI plays approach

GEATDM treats AI as a production multiplier, not as a substitute for human architectural judgment. Three operating principles:

**One step at a time.** A play addresses a single step of the method. A practitioner who runs a play receives a usable input to the next step, not a finished deliverable.

**Human-in-the-loop by default.** Every play has a review checkpoint. The output is read, validated, and edited by the responsible architect before it enters the deliverable. The play accelerates the work; it does not perform it autonomously.

**Reproducible and auditable.** Each play ships as prompt + sample I/O + working notebook or shell script. The output of a play can be regenerated against the same input. The decisions taken on the output are recorded as Architecture Decision Records (TK-30) where they are architectural decisions.

## 1.3 What is in scope, what is not

In scope: skills that automate or accelerate steps of the GEATDM method, where the input is a defined artefact (a brief, a corpus, a schema, a registry record), where the output is a defined artefact (a classification, a draft, a mapping, a model), and where the practitioner reviews and validates before use.

Out of scope: autonomous agents that act on the architecture without review; AI systems that implement business logic in production (those are domain-specific systems built by sectoral teams); decision-support tools used by end users (those are part of the sectoral application architecture).

## 1.4 Catalogue at a glance

| Group | Skills | Skill names |
|-------|--------|-------------|
| Cross-cutting | 3 | legal-impact-assess; budget-justify; procurement-spec |
| KP1 — GEA | 5 | ea-classify-org; ea-bdat-extract; ea-pattern-recommend; ea-consistency-audit; ea-roadmap-synth |
| KP2 — GIF | 3 | gif-decree-draft; gif-semantic-map; gif-openapi-gen |
| KP3 — DPI Roadmap | 4 | dpi-evidence-score; dpi-gap-analyse; dpi-roadmap-synth; dpi-invest-model |
| KP4 — Building Blocks (new) | 1 | bb-decompose |
| KP4 — Building Blocks (existing) | 7 | joget-instance-setup; joget-form-gen; joget-datalist-gen; joget-userview-gen; joget-workflow-gen; joget-plugin-dev; joget-req-analyst |

---

# 2. CROSS-CUTTING AI PLAYS

These plays apply across all four KPs. They address the legal, budget, and procurement dimensions of the public-sector reality (T15) and operationalise three of the seven activities in the PLAN phase (T60 §6).

## 2.1 legal-impact-assess

| Aspect | Description |
|--------|-------------|
| Purpose | Assess whether a proposed architectural change requires primary legislation, secondary regulation, or only an administrative decree, and produce a Legal Touch Points Note (TK-32). |
| Used in | DISCOVER (Activity 9.x), PLAN (Activity 13.5a Legal Sequencing). Cross-cutting across all four KPs. |
| Primary persona | Strategist |
| Inputs | (1) Capability description (one-page brief or excerpt from the TO-BE Architecture); (2) excerpts from the country's existing legal corpus — constitution, sector Acts, regulations, ministerial decrees, administrative circulars; (3) optional: country legal-drafting calendar. |
| Outputs | Legal Touch Points Note populated against TK-32 — three-tier classification (primary / secondary / administrative), drafting status per instrument, estimated timeline to enactment, sequencing implication for the Wave plan, top-three risks. |

**Prompt template.** A system prompt establishes the assistant as a legal-architecture analyst grounded in PAERA §3.2 (Legal Framework) and §5.2 Principle #1 (Rule of Law). The user prompt provides the capability description, the relevant excerpts of the existing legal corpus, and the country's drafting calendar where available. The model produces structured output following the TK-32 template — instruments classified by tier, drafting status, effort estimate in weeks, sequencing implication for the Wave plan, no-legal-change-path check, top three risks. Output is in the TK-32 format suitable for direct insertion into the PLAN-phase deliverables.

**Sample interaction.**

Input (excerpt): *"Capability: cross-system data exchange between the National Learner Registry and the National ID system, with pre-population of citizen identity attributes on learner enrolment. Existing law: Personal Data Protection Act (in force, permits cross-system exchange under specified statutory bases); Education Act (silent on the National Learner Registry); PNIA Data Access SOP (in force, education sector not listed)."*

Output (excerpt): *"Tier 1 — Primary: Education Act amendment authorising the National Learner Registry as a regulated registry. Drafting status: not started. Estimated timeline: 12 months. Sponsoring ministry: MoEYS. Tier 2 — Secondary: Data Sharing Regulation between MoEYS and PNIA. Drafting status: not started. Estimated timeline: 6 months from Education Act enactment. Tier 3 — Administrative: PNIA Data Access SOP revision adding the education sector. Estimated timeline: 3 months from regulation issuance. No-legal-change path: No (Education Act amendment is required). Total legal effort: ~30 weeks across the three tiers, on the critical path. Sequencing: Wave 2 deliverable. Wave 1 delivers the technical layer (API and data model) without live data exchange."*

**Safeguards.**
- Output is a starting hypothesis. Sign-off by qualified legal advisor is required before use in formal deliverables.
- Hallucination risk: the model may fabricate non-existent legal instruments. The practitioner cross-checks every cited instrument against the actual legal corpus.
- Jurisdiction-specific: the prompt must include accurate excerpts of the actual legal corpus, not generic legal text.
- Confidentiality: where draft legislation is provided, the practitioner uses an LLM provider with appropriate data-handling guarantees.

## 2.2 budget-justify

| Aspect | Description |
|--------|-------------|
| Purpose | Generate a Budget Application Business Case (TK-37) from a project brief and a TO-BE Architecture extract, aligned with multi-year and outcome-based budgeting practice (PAERA §4.5 Budget). |
| Used in | PLAN (Activity 13.7a Budget Application). Cross-cutting; most common use is for KP3 DPI investment cases and for Wave 2+ funding. |
| Primary persona | Strategist |
| Inputs | (1) Project brief or TO-BE Architecture extract describing the capability and Wave; (2) Resource Estimation Template (TK-20) outputs for the Wave; (3) country budget cycle documentation; (4) country public finance management law excerpts (multi-year authority, in-year transfer authority). |
| Outputs | Populated TK-37 Budget Application Business Case — outcome statement, alignment with national strategy, scope, sourcing decisions summary, multi-year funding profile (CapEx + OpEx by year), sustainability commitment, benefits realisation, top-three risks, critical assumptions. |

**Prompt template.** System prompt establishes the assistant as a public-finance business-case author grounded in PAERA §4.5 and the country's PFM framework. User prompt provides the project brief, the resource estimation, and the relevant excerpts of the country's PFM rules. The model produces a structured TK-37 output — outcome-based framing rather than input-based; multi-year funding profile with explicit Year 1–3 splits; sustainability commitment for donor-funded portions; cost-per-outcome-unit calculation where data permits; top-three risks and three critical assumptions.

**Sample interaction.**

Input: *"Wave 2 of the Progressa DPI roadmap. Standing up Identity Pillar foundational BBs (PNIA / e-KYC platform extensions; Information Mediator BB national rollout). Resource estimation: 24 person-months core team; 12 person-months external integration; USD 4.5M hardware and software."*

Output (excerpt): *"Outcome: 90% of adult population covered by digital ID with verifiable e-KYC attribute set, by end of Year 3. Beneficiaries: every public-sector service consuming Identity BB; private-sector services where federation is permitted. Year 1: USD 2.1M CapEx + USD 0.3M OpEx. Year 2: USD 1.5M CapEx + USD 0.5M OpEx. Year 3: USD 0.4M CapEx + USD 0.7M OpEx. Annual maintenance steady-state: USD 0.7M from Year 4. Sustainability commitment: state budget assumes maintenance from Year 4; donor funds (World Bank ID4D) cover Years 1–3. MoU with Ministry of Finance documented. Top risks: cabinet reshuffle; PNIA technical capacity. Critical assumptions: Personal Data Protection Act enacted by end Year 1."*

**Safeguards.**
- Multi-year framing is essential. A single-year request that depends on continued funding next year is fragile.
- Sustainability commitment for donor-funded portions is mandatory per PAERA §4.5.
- Cost numbers are estimates. Procurement officer review and Finance Ministry validation are required before submission.
- The model may underestimate operational complexity. The practitioner adjusts the OpEx side conservatively.

## 2.3 procurement-spec

| Aspect | Description |
|--------|-------------|
| Purpose | Draft a public-sector procurement specification (TK-38) from a service brief, with framework-contract decomposition, outcome-based requirements, and SME-friendly lot structure. |
| Used in | PLAN (Activity 13.8a Procurement Sequencing). Cross-cutting; applies to every Buy and contracted-Build capability in the Sourcing Decision Matrix (TK-39). |
| Primary persona | Strategist |
| Inputs | (1) Service brief or TO-BE Architecture extract; (2) Sourcing Decision Matrix (TK-39); (3) country procurement law excerpts; (4) any existing standing framework agreements; (5) OpenAPI 3.x specifications for the supplier interface. |
| Outputs | Populated TK-38 Procurement Specification — single-architectural-domain scope, outcome-based requirement statement, lot structure for framework contract, SME participation provisions, data portability clause, 50/30/20 evaluation weighting, mandatory documentation deliverables. |

**Prompt template.** System prompt establishes the assistant as a public-procurement architect grounded in PAERA §4.5 (Procurement) and T16 §3.5 (procurement-governance discipline). User prompt provides the service brief, the sourcing decisions, and the relevant procurement-law excerpts. The model produces a structured TK-38 output — outcome-based requirements; lot structure decomposing the procurement into manageable components; SME participation through at least one suitably-sized lot; data portability clauses; 50/30/20 evaluation weighting; non-negotiable documentation deliverables list.

**Sample interaction.**

Input: *"Procurement scope: KP4 Service 2 (Scholarship Management). Sourcing: Configure on Joget DX 8.x; Build sectoral business logic for eligibility rules; Configure Payment BB integration. Domain: SDA (single architectural domain). Estimated value: USD 600,000 over three years."*

Output (excerpt): *"Section 1 — Architectural domain: SDA, Service Delivery Authority. Section 2 — Outcomes: (a) Scholarship application processing time reduced from 30 days to 5 days; (b) Eligibility validation 100% rule-based with audit trail; (c) Payment disbursement within 3 working days of approval. Section 4 — Lot structure: Lot 1 — Joget DX 8.x configuration and form/workflow build; Lot 2 — Eligibility rules engine bespoke development; Lot 3 — Payment BB integration adapter. Section 5 — SME participation: Lot 3 sized for an SME with 4 technical staff. Section 7 — Architectural-fit evaluation criteria: 50% weight, including domain-boundary respect, API-first compliance, multi-vendor compatibility. Section 10 — Mandatory documentation deliverables: architecture documentation, runbooks, configuration documentation, source code under authority's source control, test data and test cases under authority's source control."*

**Safeguards.**
- The 50/30/20 weighting is the GEATDM default. Country procurement law may require different weightings; the EA Board agrees any change before issuance.
- Single-supplier-single-lot procurements require EA Board sign-off and a documented rationale.
- Documentation deliverables in Section 10 are non-negotiable. A supplier that resists is selecting itself out.
- Cost estimates from the model are indicative; the Procurement Officer validates against current market pricing.

---

# 3. KP1 — GOVERNMENT ENTERPRISE ARCHITECTURE AI PLAYS

These plays support the five GEATDM phases as applied to the GEA work — DISCOVER, ASSESS, ADAPT, PLAN, EXECUTE & GOVERN. They are described in KP1 chapters 4 (BDAT layers), 6 (Progressa demonstration), 7 (Implementation examples), and 9 (AI plays for EA).

## 3.1 ea-classify-org

| Aspect | Description |
|--------|-------------|
| Purpose | Classify a public-sector organisation into the PAERA Annex A1.2 taxonomy (Policy Development Unit / Regulatory Agency / Service Delivery Authority / State Registry / Horizontal System / Natural Digital Environment / Public Ecosystem) from mandate documents, with confidence scores. |
| Used in | DISCOVER (TK-01 Classification Questionnaire support). |
| Primary persona | Architect |
| Inputs | (1) Organisation mandate documents (legal instruments establishing the organisation; annual reports; strategic plans); (2) optional: organisation-chart documents; (3) optional: service catalogue. |
| Outputs | PAERA classification with confidence score per taxonomy type, a 3–5-sentence rationale citing specific evidence from the input documents, and a recommended Reference Architecture (PDU / RA / SDA per T25 / T35 / T47). |

**Prompt template.** System prompt establishes the assistant as a public-sector EA classification analyst grounded in PAERA §4 (Organisation Level) and Annex A1.2 (Taxonomy). User prompt provides the mandate documents and any supporting evidence. The model produces a structured output — primary taxonomy type with confidence (0–100%), secondary type if hybrid, key evidence citations from the input, recommended Reference Architecture, and any flags (hybrid case, special case, missing evidence).

**Sample interaction.**

Input (excerpt): *"Organisation: Gambia Revenue Authority. Mandate: collection of tax and customs revenues; assessment of taxes; enforcement of the tax laws. Annual report: 4 million taxpayer transactions per year; integrates with banks, customs, MoFEA; operates as authoritative data source for the business register."*

Output (excerpt): *"Primary type: Service Delivery Authority (SDA). Confidence: 92%. Evidence: high transaction volume (4M/year — characteristic of SDA per A1.2.4); operational delivery rather than policy formulation; integration-hub role for cross-government data; authoritative registry. Secondary type: Regulatory Agency (10% — tax-law enforcement aspect). Recommended Reference Architecture: T47 SDA Reference Architecture, with the customs activity addressed under GEATDM-Sector-Customs and the tax activity under GEATDM-Sector-Tax."*

**Safeguards.**
- Output is a starting hypothesis. The Tier 1 stakeholder workshop validates the classification with the organisation's leadership.
- Hybrid cases are common. The prompt explicitly invites the model to flag hybrid types rather than forcing a single classification.
- The model's evidence citations are checked against the actual input documents — hallucination risk on organisation specifics.

## 3.2 ea-bdat-extract

| Aspect | Description |
|--------|-------------|
| Purpose | Populate the BDAT (Business / Data / Application / Technology) AS-IS templates for an organisation from interview transcripts and questionnaire responses. |
| Used in | ASSESS (Activities 11.4 through 11.7). |
| Primary persona | Architect |
| Inputs | (1) Interview transcripts (typically Tier 1 stakeholder workshops); (2) GEATDM EA Questionnaire responses (TK-05 Organisation Profile Worksheet plus TK-06 to TK-09); (3) organisational documents referenced in the interviews. |
| Outputs | BDAT AS-IS document organised by domain (Business / Data / Application / Technology), per TK-11 ASSESS Summary Template, with each item traceable to a specific source in the inputs. |

**Prompt template.** System prompt establishes the assistant as a BDAT analyst working under the GEATDM ASSESS-phase Method Guide. User prompt provides the interview transcripts and questionnaire responses. The model produces a structured BDAT extraction — Business Architecture (capabilities, services, processes); Data Architecture (data domains, entities, integration points); Application Architecture (systems, modules, integrations); Technology Architecture (infrastructure, platforms, vendors). Every item is annotated with the source quote.

**Sample interaction.**

Input (excerpt): *"From the Tier 1 workshop with Ministry of Health: 'Our HMIS is a custom build from 2015. We have separate systems for primary care (district level) and tertiary care (the four referral hospitals). They don't share data; we reconcile manually for monthly reporting.'"*

Output (excerpt): *"APPLICATION ARCHITECTURE — AS-IS. Application 1: Primary Care HMIS (district level). Type: bespoke. Vintage: 2015. Source: 'Our HMIS is a custom build from 2015' (Tier 1 workshop). Application 2: Tertiary Care system (4 referral hospitals). Type: separate from primary HMIS; details TBD. Integration AS-IS: NONE between primary and tertiary; manual reconciliation for monthly reporting (the latter being a Business-Architecture pain point captured separately). Gap to TO-BE: integration via Information Mediator BB; monthly reconciliation eliminated."*

**Safeguards.**
- Manual review of every extracted item against the source. Hallucination risk on specific names, dates, vendor identities.
- The output is the input to a stakeholder validation session (TK-11) — no item is treated as definitive until the organisation's leadership confirms.
- Sensitive information in transcripts is handled per the country's information-security regime.

## 3.3 ea-pattern-recommend

| Aspect | Description |
|--------|-------------|
| Purpose | Recommend reference patterns from the EA repository (Reference Architectures and Sector Guides) based on the organisation type and the identified AS-IS gaps. |
| Used in | ADAPT (Activity 12.5 Tailor Capabilities, 12.6 Tailor Applications). |
| Primary persona | Architect |
| Inputs | (1) Organisation classification (output of ea-classify-org); (2) AS-IS BDAT (output of ea-bdat-extract); (3) gap analysis results (TK-10); (4) the relevant Reference Architecture (T25 / T35 / T47) and Sector Guide. |
| Outputs | Recommended patterns from the Reference Architecture / Sector Guide, ranked by gap-closure potential and feasibility, each with a citation to the specific RA / SG section. |

**Prompt template.** System prompt establishes the assistant as a pattern-recommendation analyst grounded in the GEATDM Reference Architectures and Sector Guides. User prompt provides the classification, AS-IS, and gaps. The model produces a ranked list of patterns — top 5 — each with: pattern name, RA / SG section, what it addresses (which gap), feasibility against the organisation's capacity (T15 §3.5), Wave allocation, expected Bespoke Footprint impact (T60 §5).

**Sample interaction.**

Input (excerpt): *"Organisation: Ministry of Health (PDU). AS-IS gap: no national patient identifier; manual reconciliation across primary and tertiary HMIS; no data platform for analytics."*

Output (excerpt): *"Pattern 1: National Patient Index (GEATDM-Sector-Health §4.3). Closes gap: patient identifier. Feasibility: high — Option B (NPI references National ID) suits the country's PNIA coverage of 78%. Wave: 1. Bespoke Footprint impact: ~5%. Pattern 2: Health data platform with FHIR Server (GEATDM-Sector-Health §6.1.2). Closes gap: cross-system reconciliation; analytics. Feasibility: medium — requires capacity build for ETL. Wave: 1–2. Bespoke Footprint impact: ~5% (configuration of HAPI FHIR; bespoke for sector business rules)."*

**Safeguards.**
- Recommendations are conditional on the country's digital-public-infrastructure maturity (per the DPI Readiness Checklist, TK-03). The model checks consistency with the DPI assessment.
- Pattern feasibility against capacity is a judgement call. The architect adjusts based on actual workforce-shape evidence (T15 §3.5).
- Bespoke Footprint impact estimates are indicative; actuals are calculated in TK-39.

## 3.4 ea-consistency-audit

| Aspect | Description |
|--------|-------------|
| Purpose | Cross-reference AS-IS BDAT documents across multiple sectors to flag inconsistencies, duplications, and missing dependencies. |
| Used in | ASSESS (Activity 11.10 Document ASSESS Results), and subsequently as a quarterly EA Board input (T13 §14.4 Compliance Monitoring). |
| Primary persona | Architect |
| Inputs | The complete set of AS-IS BDAT documents from all in-scope sectors (typically 4–8 sectors at the start of a national EA programme). |
| Outputs | Consistency Audit Report — list of inconsistencies (same capability described differently across sectors), duplications (same system identified in multiple sectors), missing dependencies (a sector references a system not described in any BDAT), unclear ownership (a system claimed by multiple sectors). |

**Prompt template.** System prompt establishes the assistant as a cross-sector consistency auditor under the GEATDM EA Governance discipline (T13). User prompt provides the BDAT corpus across sectors. The model produces a structured audit report — categorised findings, severity (critical / high / medium / low), evidence citations, recommended remediation actions.

**Sample interaction.**

Input: BDAT documents for MoFEA (Finance), MoCDE (Digital Economy), MoH (Health), GRA (Revenue), Customs, MoE (Education).

Output (excerpt): *"DUPLICATION (severity: high). Three systems described as 'national taxpayer registry': (a) MoFEA AS-IS lists 'TIN database' as MoFEA-owned; (b) GRA AS-IS lists 'National Taxpayer Registry' as GRA-owned (the authoritative source per the Revenue Authority Act); (c) Customs AS-IS lists 'Trader Registry' which is the GRA TIN with a customs flag. Recommendation: confirm GRA as the authoritative owner; align MoFEA and Customs to consume rather than duplicate. INCONSISTENCY (severity: medium). The same Information Mediator BB is described as 'Government Service Bus' in MoCDE, 'X-Road instance' in MoFEA, and 'integration platform' in MoH. Recommendation: standardise terminology in the cross-sector glossary."*

**Safeguards.**
- The auditor flags issues; resolution is by EA Board decision, not by the play.
- The model can miss subtle inconsistencies if vocabulary differences are wide. The architect performs a manual review of high-severity findings.
- The output is published transparently; sector teams have an opportunity to dispute findings before remediation actions are agreed.

## 3.5 ea-roadmap-synth

| Aspect | Description |
|--------|-------------|
| Purpose | Synthesise sector-level EA roadmaps into a consolidated national roadmap with dependency awareness, identifying conflicts and quick-win opportunities. |
| Used in | PLAN (Activities 13.4 Sequence Initiatives, 13.5 Define Phases and Milestones, 13.9 Create Implementation Roadmap). |
| Primary persona | Strategist |
| Inputs | (1) Per-sector EA roadmaps (from ADAPT-phase deliverables); (2) Sourcing Decision Matrices per sector (TK-39); (3) Legal Touch Points Notes per sector (TK-32); (4) Budget Application Business Cases (TK-37). |
| Outputs | Consolidated national EA roadmap — Wave-by-Wave with cross-sector dependencies; quick-win identification (cross-sector capabilities deliverable in Wave 1 with high impact); conflict identification (capabilities scheduled for the same Wave that depend on each other but in the wrong order); resource-allocation summary. |

**Prompt template.** System prompt establishes the assistant as a national-roadmap synthesiser under the GEATDM PLAN-phase Method Guide and PAERA §5.7 (Recommended Roadmap). User prompt provides the per-sector roadmaps and supporting documents. The model produces a structured consolidated roadmap — Wave 1 quick wins, dependency graph, conflict list with proposed resolutions, capacity-allocation summary by Wave.

**Sample interaction.**

Input: 6 sector roadmaps for The Gambia (MoFEA, MoCDE, MoH, GRA, Customs, MoE), each with Wave 1–4 deliverables.

Output (excerpt): *"Wave 1 quick wins: (1) National Identity BB integration enabling all six sectors — current PNIA coverage 78% sufficient; (2) Information Mediator BB rollout enabling cross-sector data exchange — required by GRA, Customs, MoH; (3) Foundation Data Platform supporting cross-sector analytics. Conflict: MoH plans full HMIS modernisation in Wave 1 but depends on the Health Facility Registry which is scheduled in Wave 2 by MoCDE. Resolution: descope MoH Wave 1 to non-facility-dependent capabilities; align Health Facility Registry to Wave 1. Capacity: Wave 1 requires ~280 person-months across the architecture team and seconded resources; budgeted capacity is 240 person-months. Recommend: descope by 40 person-months by deferring Wave-2 features that have no Wave-1 quick-win dependency."*

**Safeguards.**
- Cross-sector dependency analysis is the core value. The play surfaces hidden dependencies that single-sector roadmap authors miss.
- Resource estimates are aggregated from the input roadmaps; the play does not generate resource estimates itself.
- The output is the input to the EA Board roadmap-approval session, not a final deliverable.

---

# 4. KP2 — GOVERNMENT INTEROPERABILITY FRAMEWORK AI PLAYS

These plays support the eight-step GIF method described in T59 §2 (analogue to KP2 chapter outlines).

## 4.1 gif-decree-draft

| Aspect | Description |
|--------|-------------|
| Purpose | Adapt the PAERA §3.2 legal-framework template plus publicly available decree articles (Estonia Information Society Services Act, EU Once-Only Regulation) to a target jurisdiction with a diff and rationale. |
| Used in | KP2 GIF — Legal framework (chapter 3 of KP2). |
| Primary persona | Strategist |
| Inputs | (1) PAERA §3.2 template; (2) reference instruments (Estonia ISSA, EU Once-Only Regulation, country examples); (3) target-country legal context (constitution, sector Acts, drafting conventions); (4) the country's interoperability scope and use cases. |
| Outputs | Draft articles for the target jurisdiction's interoperability decree, with a side-by-side diff against the reference instruments, a rationale for each adaptation, and a flag for any clauses that require dedicated legal review. |

**Prompt template.** System prompt establishes the assistant as a legal-architecture drafter grounded in PAERA §3.2 and the EU EIF legal layer. User prompt provides the reference instruments and the target-country context. The model produces draft articles in the target jurisdiction's drafting style, with an explicit diff and rationale for adaptations. Output preserves a clear record of which clauses are inherited from the reference instrument and which are country-specific.

**Sample interaction.**

Input (excerpt): *"Country: Mozambique. Drafting style: Portuguese, Romano-Germanic civil law tradition. Scope: cross-government interoperability covering 17 ministries, with priority on tax–customs–social-security data exchange. Reference: EU Once-Only Regulation Articles 3, 9, 14."*

Output (excerpt): *"Article 3 — Definitions. [Adapted from EU OOR Art. 3, definitions adjusted for Portuguese legal vocabulary.] 'autoridade pública' replaces 'public authority'; 'dados de origem' replaces 'evidence' to align with Mozambican administrative-law usage. Article 9 — Once-Only Principle. [Adapted from EU OOR Art. 9.] Subsection 1 inherited substantively; subsection 2 modified to reference INTIC (the Mozambican ICT authority) as the technical authority; subsection 3 added: 'Sectorial regulators retain authority over data formats specific to their sector', a Mozambican-specific clause. Article 14 — Authentic Sources. [New article without EU OOR equivalent.] Required by Mozambican administrative-law tradition: 'Each public authority maintains an authentic source for the categories of data it is competent to process.' RATIONALE: civil-law jurisdictions require explicit authentic-source designation that EU OOR leaves implicit."*

**Safeguards.**
- Output is a starting draft. Qualified legal counsel finalises before submission to the legislative process.
- Legal-tradition mismatch (common-law versus civil-law) is a frequent source of error. The prompt is explicit about the tradition.
- Hallucination risk on specific clause numbering. The practitioner verifies against the actual reference instruments.

## 4.2 gif-semantic-map

| Aspect | Description |
|--------|-------------|
| Purpose | Suggest cross-system semantic mappings between two registry schemas (e.g., National ID schema ↔ Learner Registry schema) with confidence scores and provenance. |
| Used in | KP2 GIF — Technical standards (chapter 6 of KP2). Also applicable in any cross-sector data integration. |
| Primary persona | Architect |
| Inputs | (1) Source schema (data dictionary or DDL or FHIR profile); (2) target schema (same formats); (3) optional: existing mapping documentation. |
| Outputs | Cross-schema mapping proposal — field-by-field, with mapping type (direct / lookup / transformation / unmapped), confidence score, provenance for the suggestion, and flags for fields requiring human review (typically those involving privacy-classified attributes or transformations of legal significance). |

**Prompt template.** System prompt establishes the assistant as a semantic-interoperability analyst grounded in the published standards (ISO/IEC 11179, FHIR, OneRoster, the country's national data-standards if applicable). User prompt provides the source and target schemas with available documentation. The model produces a structured mapping proposal with embedding-based similarity for ambiguous fields and an explicit "needs human review" flag for high-stakes mappings.

**Sample interaction.**

Input (excerpt): *"Source: PNIA citizen schema (national_id, first_name, last_name, dob, sex, residential_address, photo, biometric_template). Target: Progressa Learner Registry (learner_id, given_name, family_name, date_of_birth, sex, household_address, parent_guardian_id)."*

Output (excerpt): *"national_id → learner_id: TRANSFORMATION (1:1 cross-reference with optional Option-B independent learner_id). Confidence: 95%. first_name → given_name: DIRECT. Confidence: 99%. last_name → family_name: DIRECT. Confidence: 99%. dob → date_of_birth: DIRECT. Confidence: 99%. sex → sex: DIRECT (assumes same code system; verify). Confidence: 90%. residential_address → household_address: TRANSFORMATION (1:1, but semantic difference — residential is current, household is the family unit). Confidence: 70%. NEEDS HUMAN REVIEW. photo → (none): UNMAPPED. biometric_template → (none): UNMAPPED — privacy-sensitive; do not map without explicit legal authorisation. parent_guardian_id ← (PNIA — derived): cross-reference required for minors; PNIA does not directly carry parent_guardian relationships."*

**Safeguards.**
- Privacy-classified fields are flagged for human review. The play does not silently propose mapping of biometric or other sensitive fields.
- "Direct" mappings are not always direct. The practitioner verifies code-system equivalence (e.g., country-specific sex coding versus ISO 5218).
- Transformation mappings require business-owner confirmation. The play surfaces them for review rather than treating them as final.

## 4.3 gif-openapi-gen

| Aspect | Description |
|--------|-------------|
| Purpose | Generate OpenAPI 3.x specifications from a one-page service description plus a PAERA principle checklist. |
| Used in | KP2 GIF — Technical standards (chapter 6); KP4 BBs — API mapping with services.yml (chapter 4). |
| Primary persona | Architect / Developer |
| Inputs | (1) Service description (one-page brief — intent, actors, key data attributes, security posture); (2) PAERA principle checklist for APIs (consistency with Once-Only, Cross-border by Default, Intrinsic Security & Privacy); (3) optional: existing OpenAPI specifications for adjacent services. |
| Outputs | OpenAPI 3.x specification — paths, operations, request/response schemas, security schemes, error model. Plus a validator log showing OpenAPI 3.x compliance. |

**Prompt template.** System prompt establishes the assistant as an API-design analyst grounded in OpenAPI 3.x, PAERA principles for APIs, and country-specific conventions. User prompt provides the service description and checklist. The model produces a complete OpenAPI 3.x specification — every path, operation, parameter, schema; OAuth 2.0 / OpenID Connect security scheme; standard error model.

**Sample interaction.**

Input (excerpt): *"Service: Learner Verification API. Intent: a third party (HEI or employer) verifies that a presented credential belongs to an actual learner registered in the National Learner Registry. Actors: NLR (issuer), Verifying Party. Operations: verify by credential ID; revocation check. Security: OAuth 2.0 client_credentials; rate-limited."*

Output (excerpt — OpenAPI snippet): *"paths: /credentials/{credential_id}/verify: get: summary: Verify a learner credential. parameters: -- name: credential_id, in: path, required: true, schema: type: string. responses: '200': description: Verification result. content: application/json: schema: $ref: '#/components/schemas/VerificationResult'. '404': description: Credential not found. '423': description: Credential revoked. components: schemas: VerificationResult: type: object, properties: valid: {type: boolean}, learner_id: {type: string}, issued_at: {type: string, format: date-time}, issuer: {type: string}. securitySchemes: oauth2: type: oauth2, flows: clientCredentials: ..."*

**Safeguards.**
- OpenAPI specification is validated automatically (the notebook runs the spec through an OpenAPI validator).
- The model may default to overly verbose responses. The architect simplifies and aligns to country conventions.
- Security schemes are reviewed against the country's identity-platform conventions; the model's defaults may not match.

---

# 5. KP3 — DPI ROADMAP AI PLAYS

These plays support the seven-step DPI roadmap method (KP3 chapter outline). Each step has a dedicated play.

## 5.1 dpi-evidence-score

| Aspect | Description |
|--------|-------------|
| Purpose | Auto-score evidence (statistical, document, interview) against the five-pillar DPI assessment rubric (Access / Data / Interoperability / Identity / Governance), with traceable rationale per score. |
| Used in | KP3 — Five-pillar assessment methodology (chapter 2); Wave 1 of any DPI assessment programme. |
| Primary persona | Strategist |
| Inputs | (1) The five-pillar rubric with maturity bands (PAERA §3.4 and §3.1); (2) evidence corpus — country statistics, government documents, interview transcripts; (3) optional: previous-cycle scores for trend continuity. |
| Outputs | Five-pillar score sheet — pillar-by-pillar maturity score (1–5 scale per PAERA §5.3 — Initial / Managed / Defined / Optimised / Innovating), evidence citation per score, gap to next maturity band, top-three corroborating evidence pieces per score. |

**Prompt template.** System prompt establishes the assistant as a DPI assessor grounded in PAERA §3.4, §3.1, and §5.3. User prompt provides the rubric and the evidence corpus. The model produces structured scores with explicit evidence citations and confidence indicators.

**Sample interaction.**

Input (excerpt): *"Pillar: Identity. Country: Progressa. Evidence: National ID rollout since 2018; 78% adult coverage; e-KYC platform PNIA launched 2024; foundational digital ID with verifiable attribute set."*

Output (excerpt): *"Identity pillar — Score: 3 (Defined). Rationale: PNIA operational with adult coverage 78% and e-KYC platform live; below 90% coverage threshold for Score 4. Top corroborating evidence: (a) PNIA launch 2024, attribute set published; (b) 78% adult coverage statistic; (c) e-KYC platform integration with banks. Gap to Score 4 (Optimised): close coverage gap to 90%; expand attribute set to include biometric verification for high-assurance use cases. Confidence: high — evidence base is current and quantitative."*

**Safeguards.**
- Maturity bands are subject to interpretation. The practitioner reviews high-impact scores (3 → 4 boundary, especially) with country team.
- The model may over-rate in the absence of negative evidence. The practitioner specifically tests for negative evidence (failed previous attempts, withdrawn statistics).
- The Wave 1 country team validates scores in workshop format before publication.

## 5.2 dpi-gap-analyse

| Aspect | Description |
|--------|-------------|
| Purpose | Detect gaps between the country's current state and PAERA principle coverage, and produce a prioritisation matrix (impact × feasibility × dependency). |
| Used in | KP3 — Gap analysis and prioritisation (chapter 4). |
| Primary persona | Strategist |
| Inputs | (1) Five-pillar score sheet (output of dpi-evidence-score); (2) PAERA principles (§5.2, ten principles); (3) the country's national digital strategy. |
| Outputs | Prioritisation matrix — gap × impact × feasibility × dependency, with each gap scored, a ranked top-10 list, and a Wave-allocation suggestion per gap. |

**Prompt template.** System prompt establishes the assistant as a DPI gap-analyst grounded in PAERA §5.2 and §5.3. User prompt provides the score sheet, principles, and strategy. The model produces a structured prioritisation matrix — gap descriptions, impact (high / medium / low), feasibility (high / medium / low), dependency on other gaps, Wave allocation, top-three risks per gap.

**Sample interaction.**

Input (excerpt): *"Pillar scores: Access 2, Data 3, Interoperability 2, Identity 3, Governance 3. National strategy emphasises social protection, education, and tax modernisation."*

Output (excerpt): *"Top gap: Interoperability Pillar (Score 2). Impact: high — blocks all cross-government services. Feasibility: medium — Information Mediator BB requires 18 months team-effort. Dependency: foundational — feeds into all sectors. Wave: 1. Top risks: PKI infrastructure capacity; legal framework for cross-sector data exchange. Gap 2: Access Pillar (Score 2). Impact: medium — affects citizen channel for service consumption. Feasibility: high — depends on connectivity which is already a National Digital Strategy priority. Wave: 1. ..."*

**Safeguards.**
- Prioritisation is sensitive to political weighting; the play surfaces the analytical case but the country team adjusts based on political realities.
- Feasibility estimates are model-based and indicative; the architect adjusts based on actual capacity.

## 5.3 dpi-roadmap-synth

| Aspect | Description |
|--------|-------------|
| Purpose | Sequence interventions across four Waves with dependency awareness and resource constraints, producing a wave-based DPI roadmap (PAERA §5.7). |
| Used in | KP3 — Wave-based roadmap (chapter 5). |
| Primary persona | Strategist |
| Inputs | (1) Prioritisation matrix (output of dpi-gap-analyse); (2) resource constraints (typical multi-year envelope, capacity estimate per Wave); (3) the country's existing investment commitments and donor funding. |
| Outputs | Four-wave roadmap (Inception → High-priority Use Case → Initial Transformation → Mass-scale, per PAERA §5.7) — Wave-by-Wave deliverables; dependency graph; investment profile; risk register per Wave. |

**Prompt template.** System prompt establishes the assistant as a roadmap synthesiser under PAERA §5.7. User prompt provides the prioritisation matrix and constraints. The model produces a structured roadmap — Mermaid diagram of dependencies; Wave-by-Wave delivery list; investment profile aligned with the multi-year budget envelope.

**Sample interaction.**

Input: prioritisation matrix from §5.2 above plus capacity estimate of 240 person-months across the architecture team.

Output (excerpt): *"Wave 1 (months 0–18, ~80 person-months): Information Mediator BB national rollout; Identity BB extension to 90% coverage; Foundation Data Platform; Governance EA Board operational. Wave 2 (months 18–36, ~70 person-months): Access Pillar — connectivity-aware service catalogue; Data Pillar — bronze/silver/gold for 5 priority sectors; Interoperability Pillar — 5 cross-government services. Wave 3 (months 36–60, ~60 person-months): Mass-scale rollout to all sectors; Cross-border integration; AI-assisted service-level optimisation. Wave 4 (months 60+, ongoing): Continuous improvement and policy-as-code adoption."*

**Safeguards.**
- The play is sensitive to capacity constraints; if the country's actual capacity is below the input estimate, the architect manually rebalances Waves.
- Dependency graphs may miss subtle cross-cutting concerns; the practitioner reviews against the EA Consistency Audit (§3.4) findings.

## 5.4 dpi-invest-model

| Aspect | Description |
|--------|-------------|
| Purpose | Simulate funding scenarios for the DPI roadmap and stress-test against political feasibility (cabinet reshuffles, donor exits, budget cycles). |
| Used in | KP3 — Investment prioritisation and sourcing (chapter 6). |
| Primary persona | Strategist |
| Inputs | (1) Roadmap (output of dpi-roadmap-synth); (2) funding sources — state budget, donor commitments, technical assistance lines; (3) country PFM rules (multi-year authority, in-year transfer authority); (4) scenario parameters (donor exit timing, cabinet reshuffle effect). |
| Outputs | Investment model output — funding profile by Wave under nominal scenario; sensitivity analysis under stressors; minimum-viable Wave-1 scope under reduced funding; risk-adjusted recommendation. |

**Prompt template.** System prompt establishes the assistant as a public-investment modeller grounded in PAERA §4.5 and §5.6. User prompt provides the roadmap and funding sources. The model produces a structured investment model — primary scenario; three stress scenarios; minimum-viable scope; risk-adjusted recommendation with documented assumptions.

**Sample interaction.** Output (excerpt): *"Primary scenario: full Wave 1 funded by state budget (USD 10M) plus World Bank ID4D programme (USD 8M) + UNICEF DPI programme (USD 3M). Stress scenario A — World Bank exits at Wave 2: Wave-2 scope reduced by 40%; minimum-viable Wave-2 covers Access and Data Pillars only. Stress scenario B — cabinet reshuffle delays state budget: Wave 1 start delayed 6 months calendar time; team-effort time intact; donor co-financing brought forward where permissible. Stress scenario C — combined: Wave 2 deferred to month 24 calendar; Wave 1 reduced to minimum viable. Recommendation: design Wave 1 as the minimum-viable scope so all stress scenarios remain workable; expand only on confirmed funding."*

**Safeguards.**
- Investment estimates are indicative; the Finance Ministry validates against current pricing and procurement reality.
- Scenario parameters reflect typical patterns; country-specific events may diverge.

---

# 6. KP4 — BUILDING-BLOCK SERVICE AI PLAYS

KP4 has one new AI play (`bb-decompose`) plus the seven existing Joget skills already in the rsr workspace.

## 6.1 bb-decompose

| Aspect | Description |
|--------|-------------|
| Purpose | Take a one-page service brief and propose a building-block composition with rationale, dependencies, and risks. |
| Used in | KP4 — Service decomposition (chapter 2 of KP4). Also applicable wherever a sectoral service is designed against the GovStack BB catalogue. |
| Primary persona | Architect |
| Inputs | (1) Service brief (one-page — purpose, actors, business rules, security posture); (2) GovStack BB catalogue (PAERA Annex A1.3 + GovStack BB specifications); (3) country DPI maturity status. |
| Outputs | Building-block composition proposal — list of BBs to compose, role of each in the service, integration points, country DPI compatibility check, top-three risks, alternative compositions where relevant. |

**Prompt template.** System prompt establishes the assistant as a service-architecture analyst grounded in PAERA Annex A1.3 and the GovStack BB specifications. User prompt provides the service brief and DPI status. The model produces a structured composition proposal with rationale.

**Sample interaction.**

Input: *"Service brief: Progressa Learner Registration. Purpose: register a learner in the National Learner Registry on first enrolment in a school. Actors: parent/guardian; school administrator; PLR. Business rules: National ID required for parent (Progressa is at NLR Option B); learner inherits parental address until age 14; multi-school enrolment captured. Security: OAuth 2.0 + parent identity verification."*

Output (excerpt): *"BB composition: (1) Identity BB — verify parent against PNIA; verify school administrator against the country's official directory. (2) Registration BB — initial learner record creation. (3) Information Mediator BB — link to PNIA for parent verification; link to civil registration for birth confirmation; link to School Facility Registry. (4) Workflow BB — multi-school enrolment workflow with parental consent step. (5) Messaging BB — confirmation to parent and school administrator. Country DPI compatibility: Progressa PNIA at 78% adult coverage; sufficient for parent verification with fallback path for the 22% gap. Top risks: parent identity verification failure rate; minor-data privacy regime compliance. Alternative: skip Information Mediator BB if Progressa Linkup is not yet live for cross-government use."*

**Safeguards.**
- BB composition is the architectural starting point; the actual design is finalised by the architect with the sector team.
- Country DPI compatibility check is a key safeguard against over-reach; the play will not propose use of BBs that are not yet operational in the country.
- Privacy and security analysis is partial; full review is by the privacy officer.

## 6.2 Existing Joget skills (already in rsr workspace)

These seven skills are already operational in the rsr workspace and are referenced from the GEATDM v1.1 Skill Catalogue. They are summarised below for completeness; full documentation lives in the skill bundles themselves.

### 6.2.1 joget-instance-setup

Register and configure new Joget DX 8.x instances with port allocation, Tomcat configuration, and database setup. Used in EXECUTE & GOVERN — establishing a Joget environment for a sector. Inputs: instance name, database type. Outputs: configured `instances.yaml` entry plus the live Joget environment.

### 6.2.2 joget-form-gen

Generate Joget DX 8.x form definition JSON from a logical field specification or YAML. Used in KP4 chapter 5 (low-code implementation pattern), and across KP4 chapters 6–8 for Progressa's three education services. Inputs: YAML field spec. Outputs: Joget form JSON ready for deployment.

### 6.2.3 joget-datalist-gen

Generate Joget DX 8.x datalist JSON (listing / grid / report) from a YAML specification. Used wherever a sector application needs a list view, dashboard, or operational report. Inputs: YAML datalist spec. Outputs: Joget datalist JSON.

### 6.2.4 joget-userview-gen

Generate Joget userview JSON (navigation / categories / menus / theme / permissions) from a YAML specification. Used to expose forms and datalists in the application navigation. Inputs: YAML userview spec. Outputs: Joget userview JSON.

### 6.2.5 joget-workflow-gen

Generate Joget DX 8.x workflow XPDL plus the `packageActivity*Map` blocks from a YAML approval specification. Used to wire forms to processes and to encode approval workflows. Inputs: YAML workflow spec. Outputs: XPDL + activity-map blocks.

### 6.2.6 joget-plugin-dev

Guide the development, build, and deployment of Joget DX 8.1 OSGi plugins. Used where a sectoral function exceeds Joget's native capability (custom form elements, custom datalist columns, custom workflow tools). Inputs: plugin requirements and the existing plugin structure. Outputs: plugin source code and Maven build configuration.

### 6.2.7 joget-req-analyst

Analyse business requirements for completeness and transform them into implementation specifications for Joget development. Used at the start of any sectoral service-design engagement. Inputs: requirements documents, entity definitions, screen specifications, user stories. Outputs: implementation spec aligned with the GEATDM service-decomposition method.

---

# 7. COMMON PATTERNS ACROSS PLAYS

## 7.1 Prompt template structure

Each play uses a consistent prompt template structure:

- **System prompt.** Establishes the assistant's role and grounding (PAERA section, GEATDM document, sector-specific standard). Includes the discipline expected of the output (structured format, evidence citation, explicit confidence).
- **User prompt.** Provides the inputs in the order the structured output expects. Each input has a clear delimiter (XML tags or markdown headings) so the model is not confused by document boundaries.
- **Output format.** Each play specifies an output schema — typically markdown with explicit headings, or JSON for plays whose output feeds another tool. The notebook validates output against the schema before passing it to the practitioner.

## 7.2 Input artefact format

Inputs are structured markdown or YAML rather than free text where possible:

- Briefs are produced from templates (TK series) so the model receives consistent input.
- Corpus inputs (interview transcripts, legal text, schemas) are provided with explicit delimiters and a brief metadata block (source, date, language, any redaction).
- Multi-source inputs are combined with deterministic ordering so re-runs of the play produce stable results.

## 7.3 Output validation

Validation steps the notebook performs automatically:

- Schema compliance (output matches the documented format).
- Internal consistency (referenced sources exist in the input; cited section numbers exist in the referenced documents).
- Confidence thresholds (high-confidence outputs are surfaced clean; low-confidence outputs are flagged for human review).
- Hallucination check (named entities, dates, monetary figures cross-checked against the input corpus where feasible).

## 7.4 Human-in-the-loop checkpoints

Every play has at least one human-in-the-loop checkpoint:

- Output review by the responsible architect or strategist before incorporation into a deliverable.
- Domain-expert validation for outputs touching specialist concerns (legal counsel for legal plays; privacy officer for privacy-classified data; finance ministry for budget plays).
- EA Board review for outputs that result in architectural decisions (TK-30 ADR).

## 7.5 Reproduction notes

Each play ships with a reproduction note that documents:

- The model and version used in the original run.
- The deterministic / stochastic configuration (temperature, seed where applicable).
- The output produced in the canonical run (used as a regression check).
- Known limitations of the play.
- Conditions under which the play should not be used.

## 7.6 Safeguards summary

A summary of the safeguards applied across all plays:

- **Hallucination risk.** Every play is sensitive to hallucinated entities (organisations, instruments, statistics). The practitioner cross-checks named entities against the input.
- **Confidentiality.** Plays operating on draft legislation, taxpayer records, learner records, or other sensitive data use LLM providers with appropriate data-handling guarantees (no model training, encryption in transit, audit logging).
- **Jurisdiction sensitivity.** Plays that touch the legal or institutional context are jurisdiction-specific; the prompt explicitly states the country and legal tradition.
- **Capacity assumptions.** Plays that estimate effort are sensitive to the country's actual capacity (T15 §3.5); the practitioner adjusts model defaults conservatively.
- **Bias monitoring.** Plays that score, classify, or rank are reviewed periodically for systematic bias against particular organisation types, sectors, or country sizes.

---

# 8. INTEGRATION WITH THE GEATDM PHASES

The plays are organised below by the GEATDM phase in which they are most commonly used. A play may be used in multiple phases.

## 8.1 DISCOVER phase plays

| Play | Activity |
|------|----------|
| ea-classify-org | Activity 9.2 Organization Classification |
| legal-impact-assess (initial pass) | Activity 9.x baseline legal touch points |

## 8.2 ASSESS phase plays

| Play | Activity |
|------|----------|
| ea-bdat-extract | Activities 11.4 through 11.7 — AS-IS Business / Data / Application / Technology |
| dpi-evidence-score | Activity 11.8 — AS-IS comparison to PAERA principles |
| ea-consistency-audit | Activity 11.10 — Document ASSESS Results |

## 8.3 ADAPT phase plays

| Play | Activity |
|------|----------|
| ea-pattern-recommend | Activities 12.5–12.8 — Tailor capabilities, applications, data, technology |
| dpi-gap-analyse | Activity 11.10 (continuation) and Activity 12.5 |
| gif-semantic-map | Activity 12.7 — Tailor data architecture; cross-system mapping |

## 8.4 PLAN phase plays

| Play | Activity |
|------|----------|
| ea-roadmap-synth | Activities 13.4 (sequence initiatives) and 13.9 (create implementation roadmap) |
| dpi-roadmap-synth | Wave-based roadmap synthesis |
| dpi-invest-model | Activity 13.7 (business case) and 13.7a (budget application) |
| budget-justify | Activity 13.7a |
| procurement-spec | Activity 13.8a |
| legal-impact-assess (full pass) | Activity 13.5a |
| gif-decree-draft | Companion to 13.5a where new legislation is required |
| gif-openapi-gen | Activity 13.6 (resource estimation includes API design) |

## 8.5 EXECUTE & GOVERN phase plays

| Play | Activity |
|------|----------|
| ea-consistency-audit | Recurring quarterly EA Board input |
| bb-decompose | New service design within an established sector EA |
| All Joget skills | Implementation of low-code services in production |

---

# 9. CROSS-REFERENCES

| Topic | Reference |
|-------|-----------|
| Public-sector reality | T15 |
| Architectural traps | T16 |
| Stakeholder engagement | T59 |
| Sourcing strategy | T60 |
| Method Guide phases | T58 |
| Reference Architectures | T25 (PDU), T35 (RA), T47 (SDA) |
| Sector Guides | 06-Sector-Guides — Customs, Health, Education, Tax |
| Toolkit (existing 31 templates) | T61 |
| Toolkit supplements (TK-32 through TK-39) | 01-Toolkit/Supplement files |
| GovStack BB specifications | specs.govstack.global |
| OpenAPI 3.x | spec.openapis.org |
| Existing Joget skill bundles | rsr workspace skills directory |
| Interoperability module (where the GIF AI plays live in the method) | 08-Interoperability (gif-decree-draft → Method §5; gif-semantic-map and gif-openapi-gen → Method §8) |
| DPI module (where the DPI AI plays live in the method) | 09-DPI (dpi-evidence-score → Method §4; dpi-gap-analyse → Method §5; dpi-roadmap-synth → Method §6; dpi-invest-model → Method §7) |

---

# 10. GLOSSARY

| Term | Definition |
|------|------------|
| **AI play** | A self-contained skill that takes a defined input, applies an AI model under a structured prompt, and returns a defined output that fits a specific step of the GEATDM method. |
| **Prompt template** | The structured instruction provided to the model; includes the system role, the output schema, and the input slots. |
| **Sample interaction** | A canonical input–output pair shipped with the play to illustrate use and serve as a regression check. |
| **Reproduction note** | The documentation accompanying a play describing model version, configuration, and known limitations. |
| **Human-in-the-loop checkpoint** | The review step where the responsible architect or strategist validates the play's output before incorporation into a deliverable. |
| **Hallucination** | A model output that fabricates non-existent entities (organisations, legal instruments, statistics, dates). |
| **Confidence score** | A model-supplied indicator of how confident the model is in its output; not a probability but a useful signal for triage. |
| **Notebook** | A self-contained Jupyter or shell script that runs a play end-to-end, including input loading, prompt construction, model call, output validation, and result presentation. |

---

# DOCUMENT CONTROL

## Approval Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | FiscalAdmin OÜ | May 2026 | — |
| Reviewer | TBD | — | — |
| Approver | TBD | — | — |

## Distribution

| Recipient | Format | Date |
|-----------|--------|------|
| GEATDM Method Repository | Markdown | May 2026 |
| ITU / Giga | DOCX + PDF | TBD |

---

*GEATDM — Making Digital Transformation Practical*
