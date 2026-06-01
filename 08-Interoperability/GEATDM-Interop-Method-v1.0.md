# GEATDM Interoperability Method

**Document:** GEATDM-Interop-Method-v1.0
**Part of:** Interoperability Module (08)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Interop-Method |
| Title | Interoperability Framework Development Method |
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

## Table of Contents

- Section 1: Introduction
- Section 2: Method Overview
- Section 3: Step 1 — Strategic Foundation and Stakeholder Mapping
- Section 4: Step 2 — Business Function Analysis
- Section 5: Step 3 — Legal and Regulatory Framework
- Section 6: Step 4 — Governance Model Design
- Section 7: Step 5 — High-Level Architecture
- Section 8: Step 6 — Technical Standards
- Section 9: Step 7 — Implementation Planning
- Section 10: Step 8 — Member Onboarding and Operations
- Section 11: Cross-References

---

# Section 1: Introduction

## 1.1 Purpose

This document is the GEATDM method for developing a national Government Interoperability Framework (GIF). It describes the eight steps that take a country from a policy intent to a running interoperability platform with members onboarded, services running, and a sustainable governance and operating model in place.

The method is opinionated. It assumes the architectural shape described in the companion Reference Model document (GEATDM-Interop-Reference-Model-v1.0). The shape is the X-Road / Information Mediator BB pattern, with central server, member-side security servers, four functional layers (Service Access, Event Distribution, Trust and Security, Governance and Administration), three-tier governance (Strategic Council / Steering Committee / Technical Working Groups), and a four-layer interoperability concern set (technical, semantic, organisational, legal).

A country that wants a fundamentally different shape — say, a federated mesh without a central authority, or a single-vendor middleware product as the framework — should not use this method. The method assumes the architectural commitments are made.

## 1.2 Method scope

The method covers the development of a new GIF (greenfield) or the substantial revision of an existing one. It does **not** cover:

- Sectoral data-exchange implementations on top of an existing operational GIF (those are sector-guide work).
- The selection of an open-source X-Road versus an alternative platform (that is a Sourcing decision per T60; the method assumes the platform decision is made).
- The development of foundational digital identity (a separate workstream — see PAERA §3.4.4 and GovStack Identity BB specification).

## 1.3 Relationship to the GEATDM 5-phase method

The eight steps of the Interoperability Method map to the five GEATDM phases (T58) as follows:

| GEATDM phase | Interoperability steps |
|--------------|------------------------|
| DISCOVER | Step 1 (Strategic Foundation) |
| ASSESS | Step 1 (continued); Step 2 (Business Function Analysis) |
| ADAPT | Step 3 (Legal Framework); Step 4 (Governance Model); Step 5 (High-Level Architecture); Step 6 (Technical Standards) |
| PLAN | Step 7 (Implementation Planning) |
| EXECUTE & GOVERN | Step 8 (Member Onboarding and Operations) |

A practitioner working on a national GIF programme runs the GEATDM 5-phase method as the overall process and consumes the eight Interoperability steps within that frame. The method is a specialisation, not a replacement.

## 1.4 Practitioner audience

The method addresses three personas (consistent with the Stakeholder Engagement Method Guide T59):

- **Strategist** — runs Steps 1, 3, 4, 7 primarily; concerned with stakeholder alignment, legal framework, governance model, implementation planning and budget.
- **Architect** — runs Steps 2, 5, 6 primarily; concerned with the business-function map, the technical architecture, and the technical standards portfolio.
- **Developer / Operator** — runs Step 8 primarily; concerned with member onboarding, operations, monitoring.

Each step below is tagged with the primary persona.

---

# Section 2: Method Overview

## 2.1 The eight steps

| # | Step | Primary persona | Indicative duration (team-effort) |
|---|------|-----------------|-----------------------------------|
| 1 | Strategic Foundation and Stakeholder Mapping | Strategist | 6–12 weeks |
| 2 | Business Function Analysis | Architect | 8–12 weeks |
| 3 | Legal and Regulatory Framework | Strategist | 12–24 weeks (often runs concurrently with Steps 4–6) |
| 4 | Governance Model Design | Strategist | 8–12 weeks |
| 5 | High-Level Architecture | Architect | 10–14 weeks |
| 6 | Technical Standards | Architect | 12–16 weeks |
| 7 | Implementation Planning | Strategist | 8–12 weeks |
| 8 | Member Onboarding and Operations | Developer / Operator | 24+ months ongoing |

Steps 1–7 take roughly 12–18 months of team-effort time. Step 8 is open-ended and runs as long as the framework does. Calendar time is longer than team-effort time per T15 §4.2 — public-sector legislative cycles, budget cycles, and procurement add lag that does not appear in the team-effort estimate.

The first delivery milestone — **the framework's central infrastructure operational and the first three to five member services exchanging data** — is typically reached at month 12–18 of Step 8 (i.e., 24–36 months calendar from programme start, assuming mobilisation is complete). Full national coverage is typically a 4–6 year programme.

## 2.2 Concurrency

The eight steps are not strictly sequential. The recommended concurrency pattern:

- Step 1 begins the programme; Step 2 begins as soon as Tier 1 stakeholder engagement is established (typically month 2 of the programme).
- Steps 3, 4, 5, 6 are largely concurrent. The legal-framework drafting cycle typically runs ahead of the other three because legislative cycles are slow; the governance, architecture and standards work proceeds in parallel and feeds the legal drafting where new legal authority is required for technical decisions.
- Step 7 begins as Steps 5 and 6 stabilise (typically month 9–12 of the programme).
- Step 8 begins as soon as the central infrastructure is operationally ready, typically month 12–18.

Practitioners should resist the temptation to run the method as a strict waterfall. The interoperability framework is too coupled across layers for waterfall to work; the legal layer needs technical input, the technical layer needs legal authority, and both need governance to function.

## 2.3 Outputs at each step

| Step | Principal output |
|------|-------------------|
| 1 | Stakeholder Engagement Plan; Strategic Foundation Document; Stakeholder Commitment Letters from Tier 1 |
| 2 | Business Function Analysis Document; Use-Case Catalogue; Priority Use-Case List |
| 3 | Legal Brief on Existing Decree (if any); Decree Drafting Kit (Explanatory Memorandum, Preamble, Articles Package, Cover Note, Two-Track Regulatory Memo); Submission to legislative process |
| 4 | Governance Model Document; RACI matrix; Operating Authority constitution |
| 5 | High-Level Architecture Document |
| 6 | Technical Standards Catalogue and binding-standards roadmap |
| 7 | 24-Month Implementation Plan; Investment Plan; Procurement Plan |
| 8 | Member Onboarding Workflow operational; first member services live; ongoing monitoring and reporting |

---

# Section 3: Step 1 — Strategic Foundation and Stakeholder Mapping

**Persona:** Strategist
**Indicative duration:** 6–12 weeks team-effort

## 3.1 Purpose

Establish the strategic foundation of the programme: the policy intent, the target benefits, the country's digital-government strategy alignment, the priority sectors, and the stakeholder map across executive ministries, regulatory bodies, and supervising authorities. Lock political sponsorship.

## 3.2 Activities

**3.2.1 Confirm policy intent.** Document the strategic basis for the programme — typically a national digital strategy, a presidential or ministerial directive, or a cabinet decision. Verify that the directive identifies the operating authority and the supervising minister. Where the directive is silent, the first deliverable of the programme is to draft the directive for adoption.

**3.2.2 Map sectoral demand.** Identify the sectors that will be the early users of the framework. Common Wave-1 sectors: Tax (high-volume; cross-government data needs), Civil Registration (foundational reference data), Business Register (foundational reference data), Health (high cross-system traffic). Wave-2 sectors typically: Education, Justice, Social Protection, Customs.

**3.2.3 Identify Tier 1 Champions.** Per T59 §2.2, Tier 1 typically includes: Ministry of Finance (budget authority and a major user); Ministry of ICT / Digital Authority (the framework's home or a key partner); a high-volume SDA (typically Tax or Customs); the Cabinet Office (political-sponsorship coordination).

**3.2.4 Tier 1 Inception Workshop.** Per T59 §5.1 and TK-35, run a one-day hybrid workshop with the Tier 1 ministries. Outputs: signed Stakeholder Commitment Letters (TK-36); designated focal points; communication matrix; identified quick wins.

**3.2.5 Strategic Foundation Document.** Consolidate the policy intent, sectoral demand, Tier 1 commitments, target benefits, programme objectives, and political-sponsorship picture into a single Strategic Foundation Document. This is the document that the Programme Director takes to the Council of Ministers (or equivalent) for the formal programme launch.

**3.2.6 Stakeholder Engagement Plan.** Produce the full multi-tier engagement plan per T59 §5.

## 3.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| National digital-government strategy | Government strategy document |
| Existing interoperability decree (if any) | Legal corpus |
| Sectoral digital strategies | Sectoral ministries |
| TADAT / DPI / EA assessment results (where exists) | Earlier programmes |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Who is the supervising minister and the operating authority? | Cabinet Office / Council of Ministers |
| Which sectors are Wave 1? | Steering Committee (newly formed) |
| What is the political-sponsorship picture? | Programme Director, validated with Cabinet Office |

## 3.4 Common pitfalls

- **Skipping Tier 1 sponsorship**: proceeding without signed commitment letters from Tier 1 ministries. The programme then stalls when the first cross-ministry decision arises.
- **Over-broad scope**: trying to onboard 20 ministries in Wave 1. Wave 1 is 3–5 ministries; ambition expands once the platform is operational.
- **Underestimating the legal lead time**: assuming the decree work in Step 3 is short. It is typically the longest single sub-task of the programme.

## 3.5 Output template

The Strategic Foundation Document follows the Toolkit template TK-IO-01-A. The Stakeholder Engagement Plan follows T59 §5 and TK-IO-02.

---

# Section 4: Step 2 — Business Function Analysis

**Persona:** Architect
**Indicative duration:** 8–12 weeks team-effort

## 4.1 Purpose

Analyse the business functions that the framework will support. The output is the use-case catalogue — the inventory of cross-government data exchanges that the framework will enable, prioritised, and described in enough detail to drive the technical and legal work in Steps 3–6.

## 4.2 Activities

**4.2.1 Inventory the cross-government data exchanges already in operation.** Through a combination of document review and Tier 1 / Tier 2 stakeholder workshops (per T59 §5.1, §5.2), build the inventory of existing cross-system exchanges, however informal — paper-based requests, ad-hoc API calls, scheduled file drops, manual data entry by citizens to provide data already held by the state. The inventory is the baseline.

**4.2.2 Identify priority use cases.** From the inventory and from sectoral demand (Step 1.2.2), select the priority use cases for Wave 1. Common Wave 1 priorities: civil-registration lookup; business-register lookup; tax-payment-status lookup; healthcare-eligibility lookup. Each priority use case should: (a) be high-volume (the citizen or business benefit is real); (b) cross at least two ministries (the framework adds value); (c) be technically feasible at the early framework maturity level (the providing ministry has the data in a digitally accessible form).

**4.2.3 Use-Case Catalogue.** Document each priority use case with: actors (calling ministry, providing ministry, end user); business need; data fields exchanged; volume and frequency; legal basis (existing or required); technical readiness of the providing ministry; expected benefit. The catalogue feeds Steps 3 (legal), 5 (architecture), 6 (technical standards), and 7 (implementation planning).

**4.2.4 Pain-point identification.** Document the operational pain points that the framework will address — typically: citizen having to provide the same data multiple times; duplicate registries across ministries; manual reconciliation; data quality problems caused by independent capture.

**4.2.5 Once-Only Principle map.** Per PAERA §5.2 #5, identify the data items that the citizen currently provides multiple times to the state. Each such item is a candidate for Once-Only treatment through the framework — typically by exposing the authoritative source as a service that other ministries consume rather than re-collecting.

## 4.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Strategic Foundation Document (Step 1) | Step 1 |
| Sectoral digital strategies | Sectoral ministries |
| Existing data-exchange MoUs | Sectoral ministries |
| Tier 1 / Tier 2 stakeholder interviews | Workshops |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Wave 1 priority use cases (typically 5–8) | Steering Committee |
| Once-Only principle scope for Wave 1 | Steering Committee, with Cabinet Office cover |

## 4.4 Common pitfalls

- **Designing in the abstract**: writing a use-case catalogue without grounding it in actual data flows that exist or are demanded. The catalogue then becomes a wish list and the priority is not defensible.
- **Underestimating data quality**: assuming that the providing ministry's data is fit for purpose. Often the data is not — and the framework cannot fix that. Step 6 (Technical Standards) addresses data-quality minimums.

---

# Section 5: Step 3 — Legal and Regulatory Framework

**Persona:** Strategist (with legal counsel)
**Indicative duration:** 12–24 weeks team-effort; calendar typically 12–24 months for full enactment

## 5.1 Purpose

Produce the legal instrument that grounds the framework — the decree, statutory instrument, or act, depending on the country's legal tradition. Operationalise the principles, define member obligations, confer enforcement powers on the operating authority, and align with personal-data-protection legislation.

## 5.2 Legal-instrument shape — five components

A complete drafting package for a national interoperability decree typically comprises five documents:

1. **Explanatory Memorandum** — the policy rationale, the legal basis, the relationship to existing legislation, the changes from any prior decree, the alignment with international frameworks. Addressed to the Council of Ministers and (in some jurisdictions) to the parliamentary committee.
2. **Preamble** — the formal recital that the decree adopts. Cites the constitutional and statutory authority for the decree. Typically two pages.
3. **Articles Package** — the substantive articles of the decree. Each article addresses a specific obligation, principle, or institutional arrangement.
4. **Cover Note** — the transmittal letter to the legislative drafting office or the supervising authority.
5. **Two-Track Regulatory Memo** — a memo addressing the relationship between the interoperability decree and the country's developing personal-data-protection law (where the latter is concurrent or anticipated). The two-track memo proposes how the two instruments coordinate without duplicating.

The Toolkit (companion document) provides templates for all five.

## 5.3 Activities

**5.3.1 Legal-corpus review.** Identify the existing legal landscape: any prior interoperability decree; the personal-data-protection law (in force or in development); the electronic-transactions law; the digital-signature law; the constitution's provisions on data sovereignty and on inter-ministerial coordination. Produce a Legal Brief that maps the existing instruments and identifies the gaps that the new decree will fill.

**5.3.2 Decree principles.** Settle the principles that the decree will codify. The standard portfolio (drawing on EU EIF and PAERA) is approximately ten principles: openness, transparency, reusability, technological neutrality, security by design, multilingualism (where applicable), administrative simplification, preservation of information, assessment of effectiveness, once-only. Country variation is expected; the principles set is the substantive policy commitment.

**5.3.3 Member obligations.** Translate the principles into enforceable member obligations. Common obligations: operate a Security Server compliant with binding technical standards; expose authoritative data as services upon request; collect citizen data only once where the data is already available through the framework; cooperate with audit and monitoring; designate a Data Protection Officer; pay any cost-sharing contribution.

**5.3.4 Operating-authority mandate.** Define the operating authority's powers: setting binding technical standards (within the limits set by the decree); issuing subordinate regulations; auditing member compliance; applying sanctions; reporting to the supervising minister.

**5.3.5 Sanctions regime.** Define a progressive sanctions regime — typically: warning, administrative fine, restriction of access to framework services, suspension, escalation to the Council of Ministers. Sanctions must be proportionate; the legal Brief should include comparative analysis to ensure alignment with constitutional proportionality requirements.

**5.3.6 Personal-data-protection co-ordination.** Where the country has a personal-data-protection law in force, cross-reference it. Where the law is in development, the Two-Track Regulatory Memo addresses how the interoperability decree anticipates the data-protection law without duplicating it.

**5.3.7 Drafting cycle with INTIC / national legal drafting office.** Submit the package; receive feedback; revise; iterate. Two iterations of feedback are typical; three iterations indicate either that the policy intent is unclear or that the legal counsel has substantive concerns that need executive resolution.

**5.3.8 Submission to legislative process.** Submit the agreed package to the Council of Ministers (or the legislative authority appropriate to the country's tradition) for formal adoption.

## 5.4 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Existing interoperability decree (if any) | Legal corpus |
| Personal-data-protection law (in force or draft) | Legal corpus |
| Electronic-transactions law | Legal corpus |
| EU EIF (where applicable) and OECD interoperability guidance | International frameworks |
| Use-Case Catalogue (Step 2) | Step 2 |
| Governance Model design (Step 4) | Step 4 |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Final principles set | Council |
| Sanctions regime severity | Steering Committee, validated with legal counsel |
| Two-track approach to personal-data-protection law | Steering Committee, in coordination with the data-protection authority |
| Timing of submission to the Council of Ministers | Programme Director, with political-sponsorship clearance |

## 5.5 Common pitfalls

- **Drafting in the abstract**: producing a decree that is technically elegant but does not address real obligations the framework needs to enforce. The Articles Package must be grounded in the Use-Case Catalogue (Step 2) and the Governance Model (Step 4).
- **Sanctions proportionality**: defining sanctions that are constitutionally vulnerable. Have legal counsel review the proportionality; comparative analysis to peer jurisdictions helps.
- **Personal-data-protection collision**: drafting the interoperability decree in isolation from the data-protection law. The Two-Track Regulatory Memo addresses this; skipping it produces a decree that the data-protection authority will challenge.
- **Skipping the Explanatory Memorandum**: submitting only the Articles Package. The legal-drafting office will reject the submission; the Council of Ministers will not have the policy context.

---

# Section 6: Step 4 — Governance Model Design

**Persona:** Strategist
**Indicative duration:** 8–12 weeks team-effort

## 6.1 Purpose

Design the institutional governance of the framework: the three-tier structure (Strategic Council / Steering Committee / Technical Working Groups per the Reference Model §5.1), the operating authority's organisational form, the membership of each body, the decision rights, and the cadence.

## 6.2 Activities

**6.2.1 Three-tier governance design.** Settle the membership and chair of each tier. The Reference Model §5.1 archetype is the starting point; country variation reflects ministerial structure and political tradition.

**6.2.2 Operating-authority constitution.** Decide whether the operating authority is a department of an existing ministry, a dedicated agency under a ministry, or an independent statutory body. Each model has implications for budget autonomy, recruitment, and political insulation. The Reference Model §5.2 describes the trade-offs.

**6.2.3 RACI matrix.** Produce the RACI matrix for the framework's main decisions per Reference Model §5.3. The matrix is reviewed by the Steering Committee and ratified by the Council.

**6.2.4 Member-organisation governance.** Define the obligations on member organisations beyond the legal layer — typically: designate a Technical Focal Point and a Data Protection Officer; participate in the Steering Committee; cooperate in Technical Working Groups; pay agreed cost-sharing.

**6.2.5 Operating-authority staffing plan.** Produce the staffing plan: roles, headcount by function, timeline for build-up. The Reference Model §5.2 indicates 30–80 staff at scale; the staffing plan defines the trajectory from initial team (typically 8–15 staff) to full scale.

## 6.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Strategic Foundation Document (Step 1) | Step 1 |
| Use-Case Catalogue (Step 2) | Step 2 |
| Decree Articles Package (Step 3) — interleaved | Step 3 |
| Country ministerial structure | Constitutional documents |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Operating authority's organisational form | Council |
| Membership of each governance tier | Council (ratification); Steering Committee (proposal) |
| Cost-sharing model | Council |

---

# Section 7: Step 5 — High-Level Architecture

**Persona:** Architect
**Indicative duration:** 10–14 weeks team-effort

## 7.1 Purpose

Produce the High-Level Architecture (HLA) — the technology-agnostic description of the framework's structure consistent with the Reference Model. The HLA is the architectural commitment that the technical-standards work (Step 6) and the implementation planning (Step 7) consume.

## 7.2 Activities

**7.2.1 Functional architecture.** Define the four functional layers per Reference Model §3 — Service Access Layer; Event Distribution Layer; Trust and Security Infrastructure; Governance and Administration. Country-specific variation: which functional layers are operated by the central authority versus delegated to member-side components; whether the event-distribution layer is in scope from Day 1 or deferred.

**7.2.2 Technical architecture.** Define the deployment topology per Reference Model §4 — central server (active-active multi-site); member-side security servers; time-stamp authority. The HLA documents the standards binding the technical architecture (TLS 1.3 minimum; PKI; etc.).

**7.2.3 Three security zones.** Document the trust model per Reference Model §4.3.

**7.2.4 Key design decisions.** Record the architectural decisions per the EA Decision Record (TK-30) format. Typical decisions at this stage: (a) X-Road versus alternative platform; (b) commercial vendor of choice for HSM; (c) qualified TSA arrangement; (d) PKI hierarchy structure; (e) high-availability target (RTO/RPO); (f) multi-language support architecture (if applicable).

**7.2.5 Operational considerations.** Document the operational concerns: monitoring approach; maintenance windows; support model; international standards alignment; regulatory compliance.

**7.2.6 Conformance to Information Mediator BB.** Verify that the HLA is conformant with the GovStack Information Mediator BB specification. Where the country requires departures, document them and seek EA Board sign-off.

## 7.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Reference Model | This module's Reference Model document |
| Use-Case Catalogue (Step 2) | Step 2 |
| Governance Model (Step 4) — interleaved | Step 4 |
| GovStack Information Mediator BB specification | specs.govstack.global |
| X-Road technical reference (where adopted) | x-road.global |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Platform choice (X-Road vs alternative) | Steering Committee |
| Trust model parameters (CA hierarchy, TSA, HSM requirements) | Steering Committee, with TWG-Security input |
| Event distribution scope (Day 1 vs Wave 2) | Steering Committee |

---

# Section 8: Step 6 — Technical Standards

**Persona:** Architect
**Indicative duration:** 12–16 weeks team-effort

## 8.1 Purpose

Define the technical standards portfolio that the framework will publish and enforce. The standards cover the technical layer (Reference Model §6.1), the semantic layer (§6.2), and the organisational layer (§6.3). The legal layer is covered in Step 3.

## 8.2 Activities

**8.2.1 Standards selection.** For each standards family in Reference Model §6.1, select the specific standard or version that the framework will adopt. The selection criteria are (in order): international maturity; conformance with Information Mediator BB or X-Road if applicable; regulatory alignment (eIDAS in EU; equivalent national authority elsewhere); commercial-vendor support; member-organisation feasibility (existing investments).

**8.2.2 Standards Catalogue.** Produce the binding-standards Catalogue — a structured document for each standard with: scope of application; binding date; transition period for legacy systems; reference text; conformance test approach; version history.

**8.2.3 Standards-publication procedure.** Define the procedure by which the operating authority publishes new standards or revises existing ones — typically: TWG draft; Steering Committee approval; publication; member transition period; conformance testing; sanctions for late conformance. Documented as a subordinate regulation under the decree.

**8.2.4 Conformance testing.** Define how conformance is tested. Common patterns: a Conformance Test Suite operated by the operating authority; voluntary self-assessment by members; mandatory third-party assessment for high-risk services. The choice depends on member capacity and on regulatory requirements.

**8.2.5 Semantic registry.** Establish the ISO/IEC 11179-aligned semantic registry. The registry holds the country's data dictionary, the cross-walks between sectoral standards, and the controlled vocabularies. The operating authority is the steward; sector ministries are the data owners.

**8.2.6 Backward compatibility and deprecation.** Document the rules for backward compatibility (typically: minor versions are backward-compatible; major versions trigger a transition period of 12–24 months) and for deprecation (typically: 24 months of overlap before a deprecated standard is removed).

## 8.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Reference Model §6 | This module's Reference Model document |
| GovStack Information Mediator BB specification | specs.govstack.global |
| HLA (Step 5) — interleaved | Step 5 |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Specific standard versions to adopt | TWG; ratified by Steering Committee |
| Transition period for legacy systems | Steering Committee |
| Conformance-testing approach | Steering Committee, with TWG input |

---

# Section 9: Step 7 — Implementation Planning

**Persona:** Strategist (with Programme Manager)
**Indicative duration:** 8–12 weeks team-effort

## 9.1 Purpose

Produce the multi-year Implementation Plan — the schedule, the budget, the procurement plan, the workforce plan, the risk register, and the success metrics. The plan is the operational document that Step 8 (Member Onboarding and Operations) executes.

## 9.2 Standard four-phase implementation pattern

The standard pattern for an X-Road-class framework deployment over 24 months team-effort time:

| Phase | Months | Focus | Indicative deliverables |
|-------|--------|-------|-------------------------|
| Phase 1 — Foundation | 0–6 | Central infrastructure stand-up; PKI; first member Security Servers | Central Server live; PKI live; 2 pilot members onboarded; first authentication-only services |
| Phase 2 — Pilot and Validation | 7–12 | Wave 1 services live; first cross-ministry data exchange | 5 priority use cases live; first 5 members onboarded; conformance testing operational |
| Phase 3 — Expansion | 13–18 | National coverage of Wave 1 sectors; Wave 2 services | 15 members onboarded; 20+ services registered; cross-sector data exchange operational |
| Phase 4 — Optimisation | 19–24 | Performance tuning; advanced services; banking integration | 200+ integrated services; advanced analytics; performance optimisation; banking and financial-sector services live |

The phases are indicative; country variation reflects the maturity of the technical environment, the legal-cycle timing, and the political timeline.

## 9.3 Activities

**9.3.1 Detailed Phase 1 plan.** Activity-by-activity plan for the Foundation phase: central infrastructure procurement; central infrastructure deployment; PKI build-out; pilot-member Security Server deployment; first conformance test; first authentication-only service. Resource-loaded.

**9.3.2 Investment plan.** Multi-year investment profile covering capital expenditure (hardware, software licences, integration services) and operating expenditure (operating-authority staffing, infrastructure operations, member-onboarding support). Aligned with PAERA §4.5 — multi-year budgeting; sustainability commitment for any donor-funded portion.

**9.3.3 Procurement plan.** Schedule of procurements — central infrastructure, member-onboarding services, conformance-testing services, training. Each procurement decomposed per T60 §6.3 into single-domain lots; framework-contract structure where appropriate; SME-friendly lot sizing where the country's procurement law permits.

**9.3.4 Workforce plan.** Operating-authority staffing trajectory; member-organisation Technical Focal Point and DPO requirements; training plan for both groups.

**9.3.5 Risk register.** Standard risks for an interoperability programme: legal-cycle delay; political-sponsor change; vendor performance; member-capacity shortfall; conformance failure. Each risk with mitigation; reviewed by Steering Committee.

**9.3.6 Success metrics.** Per-phase metrics aligned with the framework's strategic objectives. Standard metrics: members onboarded; services registered; transactions per quarter; uptime; member satisfaction; sanctioned breaches.

## 9.4 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Use-Case Catalogue (Step 2) | Step 2 |
| Decree (Step 3) — for the legal authority to operate | Step 3 |
| Governance Model (Step 4) | Step 4 |
| HLA (Step 5) | Step 5 |
| Technical Standards Catalogue (Step 6) | Step 6 |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Investment envelope and multi-year profile | Council, with Finance Ministry sign-off |
| Procurement strategy | Procurement Officer; ratified by Steering Committee |
| Phase 1 deliverables and timeline | Steering Committee |

## 9.5 Common pitfalls

- **Single big-bang procurement**: bundling all phases into one contract. The result is the Vendor-Driven Architecture Trap (T16 §3) and the Big-Bang Replacement Trap (T16 §4).
- **Underfunded operating authority**: budgeting Phase 1 deployment without budgeting steady-state operations. The framework goes live and then loses operational support.
- **No sustainability commitment for donor-funded portions**: per PAERA §4.5, donor-funded programmes must have explicit state-budget commitment for long-term sustainability and maintenance.

---

# Section 10: Step 8 — Member Onboarding and Operations

**Persona:** Developer / Operator
**Indicative duration:** 24+ months ongoing

## 10.1 Purpose

Operate the framework. Onboard members. Maintain the central infrastructure. Govern standards. Monitor compliance. Apply sanctions where necessary. Support the framework's ongoing evolution through TWG and Steering Committee processes.

## 10.2 Member onboarding workflow

A standard six-step onboarding workflow, executed for each new member organisation:

| # | Step | Owner | Indicative duration |
|---|------|-------|---------------------|
| 1 | Member application and signed obligation acceptance | Member; Operating authority's onboarding team | 2–4 weeks |
| 2 | Member-grade certificate issuance through the PKI | Operating authority's PKI team | 1–2 weeks |
| 3 | Security Server deployment at member's site | Member; with operating-authority technical support | 4–8 weeks |
| 4 | Conformance test against framework's standards | Operating authority's conformance team | 2–4 weeks |
| 5 | First service registration (or first service consumption) | Member; with operating-authority technical support | 2–4 weeks |
| 6 | Production go-live | Member; coordinated with operating authority | 1–2 weeks |

The full onboarding cycle is typically 12–24 weeks per member at the early framework maturity; reduces to 6–10 weeks once the operating authority's procedures and tooling are mature.

## 10.3 Operations activities

**10.3.1 Central infrastructure operations.** 24/7 operations of the central server cluster; PKI; monitoring; incident response. Reference SLA for the central infrastructure: 99.9% uptime; 5-minute RTO for active-active failover.

**10.3.2 Standards lifecycle management.** Continuous TWG work on technical and semantic standards; periodic Steering Committee review of standards portfolio; controlled deprecation cycle.

**10.3.3 Compliance monitoring.** Quarterly review of member compliance with binding standards; conformance-test results; breach detection and response.

**10.3.4 Performance reporting.** Quarterly report to the Steering Committee; annual report to the Council; six-monthly publication to citizens (where the country's transparency policy requires).

**10.3.5 Member support.** Helpdesk for technical focal points; training; documentation; community of practice for inter-member collaboration.

**10.3.6 Continuous improvement.** Annual planning cycle to update the Use-Case Catalogue, the Standards Catalogue, the Implementation Plan; aligned with the country's annual budget cycle.

## 10.4 Common operational risks

- **Central-infrastructure outage** during a high-volume period (e.g., a tax filing deadline that depends on framework services). Mitigated by capacity planning, multi-site deployment, and pre-event readiness review.
- **PKI compromise.** Mitigated by HSM protection, key rotation discipline, incident-response plan with crypto-rollover capability.
- **Member non-compliance becoming systemic.** Mitigated by progressive sanctions, transparent reporting to the Steering Committee, and political-sponsor escalation when necessary.
- **Operating-authority budget cut.** Mitigated by the Council's strategic ownership; recovery typically requires Cabinet-level intervention.

---

# Section 11: Cross-References

| Topic | Reference |
|-------|-----------|
| Reference Model — architectural shape | GEATDM-Interop-Reference-Model (this module) |
| Toolkit — templates referenced from each step | GEATDM-Interop-Toolkit (this module) |
| Public-sector reality | T15 |
| Architectural traps | T16 |
| Stakeholder engagement (Tier 1 / Tier 2 / Tier 3) | T59 |
| Sourcing strategy | T60 |
| AI plays for GIF | GEATDM-WP7-AI-Plays-Catalogue §4 (gif-decree-draft, gif-semantic-map, gif-openapi-gen) |
| DPI module | 09-DPI |
| Sector guides — consumers of the framework | 06-Sector-Guides |
| GovStack Information Mediator BB | specs.govstack.global |
| EU EIF | ec.europa.eu/isa2/eif |
| Estonia X-Road | x-road.global |
| EU eIDAS 2.0 | EUR-Lex Regulation 2024/1183 |
| EU Once-Only Technical System (OOTS) | europa.eu |

---

# DOCUMENT CONTROL

## Approval Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | FiscalAdmin OÜ | May 2026 | — |
| Reviewer | TBD | — | — |
| Approver | TBD | — | — |

---

*GEATDM — Making Digital Transformation Practical*
