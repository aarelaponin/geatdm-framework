# GEATDM DPI Roadmap Development Method

**Document:** GEATDM-DPI-Method-v1.0
**Part of:** DPI Module (09)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-DPI-Method |
| Title | DPI Roadmap Development Method |
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
- Section 3: Step 1 — DPI Ecosystem Mapping
- Section 4: Step 2 — Five-Pillar Assessment
- Section 5: Step 3 — Gap Analysis and Priority Identification
- Section 6: Step 4 — Wave-Based Roadmap Development
- Section 7: Step 5 — Investment Prioritisation
- Section 8: Step 6 — Governance Structure Design
- Section 9: Step 7 — Validation and Finalisation
- Section 10: Cross-References

---

# Section 1: Introduction

## 1.1 Purpose

This document is the GEATDM method for developing a national Digital Public Infrastructure (DPI) roadmap. It describes the seven steps that take a country from a baseline assessment of its current DPI state to a costed, sequenced, validated roadmap with explicit investment plan and governance structure for implementation.

The method is consistent with the architectural framework set out in PAERA §5.3 (DPI Assessment) and §5.7 (Recommended Roadmap — Inception Phase / High-priority Use Case Implementation / Initial Transformation / Mass-scale Transformation). It operationalises that framework with concrete activities, decision points, and outputs.

## 1.2 Scope

The method covers the development of a national DPI roadmap. It addresses:

- Baseline assessment of the country's current DPI state across the five domains (Access, Data, Interoperability, Identity, Governance).
- Gap analysis between current and target state.
- Priority identification for Wave-1 investment.
- Wave-based roadmap development over a 5–10 year horizon.
- Investment plan with multi-year budget profile.
- Governance structure for the roadmap's execution.
- Validation through stakeholder workshops.

The method does **not** cover:

- The implementation of the roadmap (a separate, multi-year programme covered by sectoral and foundational architectures).
- The detailed design of any single building block (covered by GovStack BB specifications and by the Interoperability Module 08 for the Information Mediator BB).

## 1.3 Relationship to the GEATDM 5-phase method

The seven steps of the DPI Method map to the five GEATDM phases (T58) as follows:

| GEATDM phase | DPI steps |
|--------------|-----------|
| DISCOVER | Step 1 (Ecosystem Mapping) |
| ASSESS | Step 2 (Five-Pillar Assessment) |
| ADAPT | Step 3 (Gap Analysis); Step 6 (Governance Structure Design) |
| PLAN | Step 4 (Wave-Based Roadmap); Step 5 (Investment Prioritisation); Step 7 (Validation) |
| EXECUTE & GOVERN | (Roadmap implementation — outside method scope) |

A practitioner running a national DPI roadmap programme runs the GEATDM 5-phase method as the overall process and consumes the seven DPI steps within that frame. The method is a specialisation, not a replacement.

## 1.4 Practitioner audience

The method addresses three personas (consistent with the Stakeholder Engagement Method Guide T59):

- **Strategist** — runs all seven steps as the lead. The DPI Method is strategist-heavy because the work is policy, assessment, prioritisation, and investment planning.
- **Architect** — supports Steps 1, 2, 3, 4 with the technical depth on each pillar. Often a contracted specialist consumed for the technical assessment work.
- **Developer / Operator** — minimally involved; supports Step 2 (Five-Pillar Assessment) for technical-evidence collection.

---

# Section 2: Method Overview

## 2.1 The seven steps

| # | Step | Primary persona | Indicative duration (team-effort) |
|---|------|-----------------|-----------------------------------|
| 1 | DPI Ecosystem Mapping | Strategist | 4–6 weeks |
| 2 | Five-Pillar Assessment | Strategist + Architect | 8–12 weeks |
| 3 | Gap Analysis and Priority Identification | Strategist | 4–6 weeks |
| 4 | Wave-Based Roadmap Development | Strategist | 6–10 weeks |
| 5 | Investment Prioritisation | Strategist | 4–6 weeks |
| 6 | Governance Structure Design | Strategist | 4–6 weeks |
| 7 | Validation and Finalisation | Strategist | 4–6 weeks |

Total: approximately 5 months team-effort time. Calendar time is typically 5–7 months given workshop scheduling, customer feedback cycles, and validation cycles.

A national DPI roadmap is therefore a **5-month engagement** in calendar terms — substantially shorter than developing a national EA (9 months) or a national interoperability framework (24 months team-effort). The reason is scope: a DPI roadmap is the strategic frame for subsequent multi-year programmes, not the design of those programmes.

## 2.2 Concurrency

The seven steps are largely sequential. Step 2 cannot start until Step 1 establishes the ecosystem. Step 3 needs Step 2's scores. Steps 4, 5, 6 can run concurrently once Step 3 is delivered. Step 7 is the validation cycle and runs after Steps 4–6 produce drafts.

## 2.3 Outputs at each step

| Step | Principal output |
|------|------------------|
| 1 | DPI Ecosystem Map; stakeholder map; data-collection plan |
| 2 | Five-Pillar Assessment report — pillar-by-pillar scores with evidence |
| 3 | Gap Analysis report; priority-identification matrix |
| 4 | Wave-Based Roadmap document |
| 5 | Investment Plan (multi-year budget profile) |
| 6 | Governance Structure Document |
| 7 | Validated Final Roadmap; stakeholder consultation report |

---

# Section 3: Step 1 — DPI Ecosystem Mapping

**Persona:** Strategist
**Indicative duration:** 4–6 weeks team-effort

## 3.1 Purpose

Map the country's DPI ecosystem: what exists, who operates it, what initiatives are under way, what funding is committed, what foundational dependencies are in place. The output is the picture of the country at the start of the assessment.

## 3.2 Activities

**3.2.1 Document review.** Collect and review: the national digital strategy; sectoral digital strategies; ICT-authority plans; DPI commitments under international frameworks (50-in-5, AU DTS, etc.); donor-funded programme documents; previous assessment reports (e.g., World Bank, ITU, GIZ).

**3.2.2 Initiative inventory.** List the DPI-relevant initiatives currently in operation or in committed pipeline: National ID modernisation; payment-system upgrades; interoperability platform deployment; data-platform initiatives; digital-government portal builds; etc. For each: status, funding source, sponsor, target completion.

**3.2.3 Stakeholder mapping (per T59).** Map the stakeholders who will be engaged in Step 2 (assessment) and Step 7 (validation): Tier 1 ministries (typically Ministry of ICT / Digital Authority, Ministry of Finance, supervising minister/Cabinet Office, the largest SDA from each pillar's domain); Tier 2 (sectoral ministries, regulators, audit office); Tier 3 (academia, civil society, private sector, international partners).

**3.2.4 Data-collection plan.** For each of the five pillars, plan the evidence base for Step 2: which government statistics to collect; which interview targets; which document reviews; which workshops to run. Time-bound the data-collection schedule.

**3.2.5 Country DPI Taxonomy adaptation.** The Reference Model's five-domain taxonomy is the starting point. Adapt it to the country's terminology and existing classification (e.g., where the country's national ICT strategy uses different domain names, map them to the five-domain model). The Toolkit provides the Country DPI Taxonomy template.

**3.2.6 Programme inception.** Brief the Tier 1 ministries on the assessment scope and timeline. Sign Stakeholder Commitment Letters per T59 §5.1 / TK-36. Schedule the workshops and interviews for Step 2.

## 3.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| National digital strategy | Government strategy document |
| International commitments (50-in-5, AU DTS) | Country signatories' documents |
| Existing assessments (World Bank, ITU, GIZ, EU) | Donor or international-body archives |
| PAERA v1.0 | paera.govstack.global |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Country-specific taxonomy adaptation | Steering Committee (newly formed) |
| Stakeholder list for Step 2 | Programme Manager, with Tier 1 sponsor input |
| Data-collection plan | Programme Manager |

## 3.4 Common pitfalls

- **Over-scoping.** Mapping every digital initiative in the country produces a list that takes weeks to interpret and adds little to the assessment. Limit the inventory to DPI-relevant initiatives.
- **Stakeholder under-engagement.** Skipping Tier 1 inception briefings produces a Step 2 that the Tier 1 ministries do not own. Step 7 then becomes substantially harder.

---

# Section 4: Step 2 — Five-Pillar Assessment

**Persona:** Strategist + Architect
**Indicative duration:** 8–12 weeks team-effort

## 4.1 Purpose

Score the country's current DPI state across the five domains (Access, Data, Interoperability, Identity, Governance) on the five-level maturity scale (Reference Model §8). The output is the assessment report, with each score grounded in specific evidence.

## 4.2 Activities

**4.2.1 Per-pillar evidence collection.** For each pillar, run the five-pillar questionnaires (Toolkit TK-DPI-04; one set per pillar, each in facilitator and respondent variants). Fielding includes:

- Document review (statistics, regulatory texts, programme reports).
- Interviews with Tier 1 and Tier 2 stakeholders.
- Workshops where cross-cutting evidence is needed.

**4.2.2 Per-pillar analysis.** For each pillar, produce the analysis using the AI play `dpi-evidence-score` (WP7-AI §5) where the practitioner chooses to. The analysis: scores each sub-component on the 1–5 scale; documents the evidence per score; flags uncertainty where evidence is partial.

**4.2.3 Per-pillar workshop validation.** A focused validation workshop with the relevant Tier 1 and Tier 2 stakeholders for each pillar. Workshops surface evidence the desk research missed, correct misclassifications, and build stakeholder ownership of the eventual scores.

**4.2.4 Cross-pillar synthesis.** Aggregate the per-pillar scores into the country's overall DPI maturity profile. Identify the binding constraint (the pillar where the country's overall progress will be limited by the weakest score).

**4.2.5 Assessment report.** Produce the Five-Pillar Assessment Report per Toolkit TK-DPI-05. The report covers: methodology; per-pillar findings; per-sub-component scores; evidence base; binding constraint; international peer comparison (where data permits).

## 4.3 The five questionnaires

The Toolkit provides five questionnaires, one per pillar:

| Pillar | Questionnaire | Toolkit reference |
|--------|---------------|-------------------|
| Digital Access | TK-DPI-04-A — Access Questionnaire | Toolkit |
| Digital Data Infrastructure | TK-DPI-04-B — Data Questionnaire | Toolkit |
| Interoperability | TK-DPI-04-C — Interoperability Questionnaire | Toolkit |
| Digital Identity | TK-DPI-04-D — Identity Questionnaire | Toolkit |
| Governance | TK-DPI-04-E — Governance Questionnaire | Toolkit |

Each questionnaire has a facilitator version (with discussion prompts and scoring guidance) and a respondent version (for interviewees to complete or for workshop discussion).

## 4.4 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Ecosystem Map (Step 1) | Step 1 |
| Stakeholder list (Step 1) | Step 1 |
| Country statistics, regulatory texts, programme reports | Government and international sources |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Provisional pillar scores | Programme Manager, with Architect support |
| Final scores (after validation workshops) | Steering Committee |

## 4.5 Common pitfalls

- **Optimism bias.** In the absence of negative evidence, the model (and the practitioner) may over-score. Specifically test for negative evidence (failed previous attempts, withdrawn statistics, regulatory non-compliance).
- **Confusing aspiration with reality.** A national strategy document expressing ambition is not evidence of operational maturity.
- **Skipping validation workshops.** Workshops are the principal mechanism for stakeholder ownership of the scores. Without them, Step 7 (Validation) becomes the first time the stakeholders see the scores — and they often disagree.

---

# Section 5: Step 3 — Gap Analysis and Priority Identification

**Persona:** Strategist
**Indicative duration:** 4–6 weeks team-effort

## 5.1 Purpose

Identify the gap between the current state (Step 2 scores) and the target state. Prioritise the closure of gaps using a structured matrix (impact × feasibility × dependency). The output is the prioritisation matrix that drives Step 4 (Roadmap).

## 5.2 Activities

**5.2.1 Target-state definition.** Per pillar, define the target maturity level the country aims for over the roadmap horizon (typically 5–10 years). Level 3 across all five pillars is the realistic target for most countries; Level 4 in selected pillars is achievable for committed countries with strong starting positions.

**5.2.2 Gap statement.** Per pillar, document the gap: from Level X to Level Y; in which sub-components; with what evidence base for the gap.

**5.2.3 Gap-to-PAERA-principle mapping.** Cross-check the gap against PAERA §5.2 (Ten Principles). Where a gap relates to a principle (e.g., a Once-Only gap in the Data Pillar relating to Principle #5), document the principle linkage.

**5.2.4 Priority matrix.** Score each gap on three dimensions:

- **Impact.** How significantly does closing the gap improve outcomes (citizen, business, government)?
- **Feasibility.** How feasible is closure within the roadmap horizon, given country capacity and external constraints?
- **Dependency.** Does the gap closure unblock other gaps, or does it depend on other gaps being closed first?

The matrix produces a ranked list of priorities.

**5.2.5 Beacon-project identification.** Identify candidate beacon projects — concrete, visible, high-impact initiatives that demonstrate the framework in operation. Typically one beacon project per Wave that touches multiple pillars (e.g., enhanced digital business registration touches Identity, Data, Interoperability, and Governance pillars). Beacon projects build political support and stakeholder confidence.

**5.2.6 Use the AI play `dpi-gap-analyse`** (WP7-AI §5) where the practitioner chooses to.

## 5.3 Activities and Decision Points

| Input | Source |
|-------|--------|
| Five-Pillar Assessment Report (Step 2) | Step 2 |
| PAERA principles | PAERA §5.2 |
| National strategy targets | Government documents |
| International peer benchmarks | UNDP / ITU / World Bank / OECD |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Target maturity level per pillar | Steering Committee |
| Priority ranking | Steering Committee |
| Beacon project selection | Steering Committee, with Cabinet Office cover |

## 5.4 Common pitfalls

- **Targeting Level 5 across all pillars.** Politically attractive, operationally unrealistic. Level 3 is a stretching target for most countries.
- **No dependency awareness.** Prioritising standalone gaps without recognising that some gaps depend on other gaps. Identity and Data must mature before Interoperability is meaningful; Governance must be in place before any of the others.
- **No beacon project.** Without a concrete, visible deliverable, the roadmap is an abstraction that ministers find hard to support.

---

# Section 6: Step 4 — Wave-Based Roadmap Development

**Persona:** Strategist
**Indicative duration:** 6–10 weeks team-effort

## 6.1 Purpose

Sequence the prioritised gap closures into Waves consistent with PAERA §5.7's four-stage shape (Inception → High-priority Use Case → Initial Transformation → Mass-scale). Produce the wave-based roadmap document.

## 6.2 The standard four-wave shape

| Wave | Months | PAERA stage | Focus |
|------|--------|-------------|-------|
| **Wave 1 — Foundation Launch** | 1–24 | Inception + High-priority UC | Critical foundations across all five pillars; one or two beacon projects; Tier 1 stakeholder engagement at peak |
| **Wave 2 — Scale and Integration** | 25–48 | Initial Transformation | Wave 1 capabilities scaled across more sectors; cross-pillar integration deepens; Tier 2 sectoral ministries onboarded |
| **Wave 3 — National Coverage** | 49–84 | Initial Transformation continued | National coverage; sectoral applications consume DPI; Tier 3 observers begin to onboard |
| **Wave 4 — Maturity and Optimisation** | 85+ | Mass-scale Transformation | Continuous improvement; advanced capabilities; cross-border integration where applicable |

The wave structure aligns with PAERA §5.7 and is consistent with the implementation patterns used by countries that have run national DPI programmes successfully.

## 6.3 Three horizons (longer view)

Beyond the four waves, the practitioner produces a three-horizon strategic view aligned with country-specific time scales:

| Horizon | Years | Focus |
|---------|-------|-------|
| Horizon 1 — Foundation and Quick Wins | 1–2 | Critical foundations; beacon projects; visible quick wins |
| Horizon 2 — Scale and Integration | 3–5 | National coverage; cross-pillar integration |
| Horizon 3 — Maturity and Optimisation | 6–10 | Continuous improvement; advanced capabilities; international integration |

The three-horizon view is the political-narrative frame; the four-wave structure is the implementation frame. Both appear in the roadmap document.

## 6.4 Activities

**6.4.1 Per-wave deliverables.** For each Wave, document the deliverables across the five pillars: what foundational capability is built; what services are launched; what sectors are onboarded; what governance is established; what beacon projects are completed.

**6.4.2 Cross-track structure.** Within each Wave, organise the deliverables into tracks:

- **Governance Track** (cross-cutting; enables all domains).
- **Identity Domain Track.**
- **Interoperability Domain Track.**
- **Access Domain Track.**
- **Data Domain Track.**
- **Beacon Project(s).**

The cross-track structure is consistent across Waves; specific deliverables differ.

**6.4.3 Dependency map.** Document inter-Wave dependencies: what Wave 2 capabilities depend on Wave 1 delivery; etc. Use the AI play `dpi-roadmap-synth` (WP7-AI §5) where the practitioner chooses to.

**6.4.4 Risk register per Wave.** Document the principal risks for each Wave: legal-cycle delay; political-sponsor change; donor-cycle alignment; capacity shortfall; vendor-performance.

**6.4.5 Per-Wave success metrics.** Document the outcomes that each Wave delivers, in measurable terms.

**6.4.6 Roadmap document.** Produce the Wave-Based Roadmap document per Toolkit TK-DPI-08. The document is typically 60–120 pages; it is the principal strategic document that the country's leadership uses to commit funding and political support.

## 6.5 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Gap Analysis report (Step 3) | Step 3 |
| PAERA §5.7 four-stage roadmap shape | PAERA |
| Country budget cycle and ministerial calendar | Government documents |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Wave 1 scope (specifically) | Steering Committee + Council |
| Beacon-project selection per Wave | Steering Committee, with Cabinet Office |
| Cross-track dependencies | Steering Committee, with TWG input |

## 6.6 Common pitfalls

- **Wave 1 too ambitious.** Wave 1 must close the foundations across all five pillars while delivering at least one beacon project; ministerial expectations often push for more. Resist; an over-loaded Wave 1 fails.
- **No beacon project in Wave 1.** Without a concrete, visible deliverable in the first 12–18 months, political support erodes.
- **No governance track.** Treating governance as a Wave-4 concern. Governance is Wave 1.

---

# Section 7: Step 5 — Investment Prioritisation

**Persona:** Strategist
**Indicative duration:** 4–6 weeks team-effort

## 7.1 Purpose

Develop the multi-year investment plan that funds the roadmap. The plan addresses: total investment envelope; year-by-year profile; CapEx versus OpEx split; funding sources (state budget, donor funding, technical-assistance lines); cost-sharing across ministries; sustainability commitment for donor-funded portions.

## 7.2 Activities

**7.2.1 Per-Wave costing.** For each Wave, develop the cost estimate by track (Governance, Identity, Interoperability, Access, Data, Beacon Projects). Sources: international peer benchmarks (World Bank ID4D cost models; ITU DPI Safeguards investment guidance); supplier quotations where available; country-specific cost factors.

**7.2.2 Multi-year profile.** Produce the year-by-year investment profile. Distinguish CapEx (hardware, software licences, integration services) from OpEx (operating-authority staffing, infrastructure operations, maintenance). Use the AI play `dpi-invest-model` (WP7-AI §5) where the practitioner chooses to.

**7.2.3 Funding sources.** Map per-Wave investments to funding sources: state budget; donor commitments; technical-assistance lines; potential PPP arrangements. Verify funding sources with the Ministry of Finance and the donor coordination unit.

**7.2.4 Sustainability commitment.** Per PAERA §4.5 (Budget): every donor-funded element of the roadmap must include explicit state-budget commitment for long-term sustainability and maintenance. Document the commitment per element and per Wave.

**7.2.5 Sensitivity analysis.** Stress-test the investment plan against typical scenarios: cabinet reshuffle delaying state-budget approval; donor exit between Waves; cost overrun in foundational platforms. Produce a minimum-viable Wave-1 scope under reduced funding.

**7.2.6 Procurement implications.** Per T60 §6.3 and TK-IO-04 (Procurement Specification template adapted to DPI context): document the procurement strategy. Each Wave should be decomposed into single-domain procurements; framework contracts where appropriate; SME-friendly lot structure.

**7.2.7 Investment Plan document.** Produce the Investment Plan per Toolkit TK-DPI-09. The document is typically 30–60 pages; it accompanies the Roadmap document as a stand-alone deliverable that the Ministry of Finance consumes.

## 7.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Wave-Based Roadmap (Step 4) | Step 4 |
| Country budget cycle and PFM rules | Government documents |
| Donor commitments and pipelines | Donor coordination unit |
| International benchmarks | World Bank ID4D / ITU |
| AI play dpi-invest-model | WP7-AI §5 |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Investment envelope and multi-year profile | Council, with Finance Ministry sign-off |
| Funding-source allocation | Steering Committee, with Finance Ministry |
| Sustainability commitment per Wave | Council, with explicit Cabinet Office sign-off |

## 7.4 Common pitfalls

- **Single-year framing.** A single-year request that depends on continued funding next year is fragile. Multi-year framing is essential per PAERA §4.5.
- **Donor-funded without sustainability.** A roadmap that assumes donor funding for run-state operations is not a roadmap; it is a plan to abandon the system after the donor exits.
- **No sensitivity analysis.** A plan that only works under perfect conditions does not survive contact with public-sector reality (T15 §3.3).

---

# Section 8: Step 6 — Governance Structure Design

**Persona:** Strategist
**Indicative duration:** 4–6 weeks team-effort

## 8.1 Purpose

Design the institutional structure for the roadmap's execution: the strategic council; the technical authority; the agency CIO coordination mechanism; the decision logs; the escalation pathway; the sustainability commitment.

The DPI governance structure is parallel to but distinct from the Interoperability Framework's governance (see Interoperability Module §5). Where the country runs a national DPI roadmap and a national Interoperability Framework concurrently (the typical case), the two governance structures coordinate.

## 8.2 The standard structure

| Tier | Body | Composition | Cadence |
|------|------|-------------|---------|
| **Strategic** | National DPI Council | Chair: Prime Minister or Minister responsible for digital government. Members: principal secretaries of major ministries (Finance, Interior, ICT, Health, Justice, Education); supervising minister of the central digital authority. | Quarterly |
| **Technical** | DPI Technical Authority | Director-General of the central digital authority; delegated technical staff; representatives of operating authorities for each domain (Identity, Interoperability, etc.). | Monthly |
| **Sectoral** | Agency CIO Coordination | CIOs of the major sectoral ministries; cross-government technical leads. | Bi-monthly |

## 8.3 Activities

**8.3.1 Council design.** Settle the membership, chair, and decision rights of the National DPI Council. The Council is the political-sponsorship layer; its decisions are binding on member ministries.

**8.3.2 Technical Authority design.** Settle the composition and mandate of the DPI Technical Authority. The Authority is the operational layer; it makes the cross-cutting technical decisions and manages the roadmap execution.

**8.3.3 Agency CIO Coordination.** Settle the operational coordination mechanism with sectoral ministries. CIOs are the sectoral decision-makers; coordination ensures that sectoral plans align with the DPI roadmap.

**8.3.4 Decision logs.** Establish the discipline that every cross-government decision (architecture, sourcing, procurement, sanctions) is recorded in a public decision log. The log is the institutional memory and the basis for accountability.

**8.3.5 Escalation pathway.** Define the escalation pathway from Agency CIO Coordination → Technical Authority → Council. Most decisions are taken at the Technical Authority level; only decisions exceeding the Authority's mandate (typically: significant policy changes, large investment decisions, sanctions against ministries) go to the Council.

**8.3.6 Sustainability commitment.** Document the institutional sustainability: budget multi-year envelope; staffing commitments; succession planning for the Technical Authority leadership; review cycle.

**8.3.7 Governance Structure Document.** Produce the document per Toolkit TK-DPI-10.

## 8.4 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Wave-Based Roadmap (Step 4) | Step 4 |
| Investment Plan (Step 5) | Step 5 |
| Existing government governance bodies | Government documents |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Council composition and chair | Cabinet Office, with Council ratification |
| Technical Authority's mandate | Council |
| Agency CIO Coordination cadence | Technical Authority |

---

# Section 9: Step 7 — Validation and Finalisation

**Persona:** Strategist
**Indicative duration:** 4–6 weeks team-effort

## 9.1 Purpose

Validate the roadmap with the full stakeholder community, integrate feedback, and finalise for adoption.

## 9.2 Activities

**9.2.1 Validation workshop preparation.** Schedule a multi-stakeholder validation workshop, typically 1–2 days, with all Tier 1 ministries, key Tier 2 representatives, donor partners, and (where appropriate) civil society and private-sector observers. Workshop preparation includes: distribution of the draft Roadmap, Investment Plan, and Governance Structure documents one week in advance; presentation deck; structured discussion sessions per Wave; explicit voting or consensus mechanism on key decisions.

**9.2.2 Validation workshop facilitation.** Run the workshop. Present the assessment findings, the gap analysis, the Wave structure, the investment plan, and the governance design. Surface objections; capture feedback; identify decisions that require post-workshop resolution.

**9.2.3 Feedback integration.** Integrate workshop feedback into the documents. Some feedback is straightforward (factual corrections, clarifications); some requires re-running steps (particularly Step 5 if investment-envelope assumptions change materially).

**9.2.4 Quality assurance.** Run the QA checklist (Toolkit TK-DPI-13) over the final documents. Verify: per-pillar scores match the evidence; investment numbers are internally consistent; cross-references are correct; governance structure is implementable.

**9.2.5 Final documentation pack.** Produce the final pack: Five-Pillar Assessment Report (final); Wave-Based Roadmap (final); Investment Plan (final); Governance Structure Document (final); Stakeholder Consultation Report (documenting the validation process and feedback resolution).

**9.2.6 Adoption.** Submit the pack to the Council for formal adoption. Where required, the Council escalates to Cabinet for ratification.

**9.2.7 Public communication.** Where the country's transparency policy requires, publish a public-facing summary of the roadmap. The DPI Summit deck (Toolkit TK-DPI-14) is the standard format for the public-facing version.

## 9.3 Inputs and Decision Points

| Input | Source |
|-------|--------|
| Draft Roadmap (Step 4) | Step 4 |
| Draft Investment Plan (Step 5) | Step 5 |
| Draft Governance Structure (Step 6) | Step 6 |
| Stakeholder feedback | Validation workshop |

| Decision Point | Decision Authority |
|----------------|-------------------|
| Feedback resolution | Steering Committee |
| Final adoption | Council |
| Public-communication scope | Cabinet Office |

## 9.4 Common pitfalls

- **No real validation.** Treating validation as a formality. The workshop must surface real disagreement; consensus achieved without disagreement is fragile.
- **Late material change.** Significant changes during Step 7 push the programme back to Step 5 or Step 4. Validation should resolve disagreements about emphasis and timing, not fundamental architecture.
- **No public communication plan.** The roadmap is a public commitment of the country. Without a communication plan, citizens, businesses, and civil society do not engage, and political sponsorship erodes.

---

# Section 10: Cross-References

| Topic | Reference |
|-------|-----------|
| Reference Model (5-domain framework, maturity scale) | GEATDM-DPI-Reference-Model (this module) |
| Toolkit (questionnaires and templates referenced from each step) | GEATDM-DPI-Toolkit (this module) |
| PAERA Foundational Pillars | PAERA §3.4 |
| PAERA DPI Assessment | PAERA §5.3 |
| PAERA Recommended Roadmap | PAERA §5.7 |
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| Architectural traps | T16 |
| Stakeholder engagement | T59 |
| Sourcing strategy | T60 |
| AI plays for DPI | GEATDM-WP7-AI-Plays-Catalogue §5 (dpi-evidence-score, dpi-gap-analyse, dpi-roadmap-synth, dpi-invest-model) |
| Interoperability Module (depth treatment of Domain 3) | 08-Interoperability |
| Sector guides — consumers of DPI | 06-Sector-Guides |
| UNDP Universal DPI Safeguards | undp.org |
| ITU DPI Safeguards | itu.int |
| World Bank ID4D | id4d.worldbank.org |
| 50-in-5 country commitments | 50in5.org |

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
