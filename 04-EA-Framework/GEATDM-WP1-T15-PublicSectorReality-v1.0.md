# GEATDM — PUBLIC SECTOR REALITY

**Document:** GEATDM-WP1-T15-PublicSectorReality-v1.0
**Part of:** EA Framework
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## DOCUMENT CONTROL

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP1-T15 |
| Title | Public Sector Reality — Framing for GEATDM |
| Version | 1.0 |
| Date | May 2026 |
| Status | Released |
| Authors | FiscalAdmin OÜ |
| Reviewers | TBD |
| License | CC-BY 4.0 |

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial release. |

---

## TABLE OF CONTENTS

1. Introduction
2. The fundamental difference between public and private sectors
3. The five operating constraints
4. Calendar time versus team-effort time
5. Architectural traps (preview)
6. How GEATDM phases respect these constraints
7. Cross-references
8. Glossary

---

# 1. INTRODUCTION

## 1.1 Purpose of this document

This document states the operating environment of the public sector in the form a GEATDM practitioner needs in order to plan and execute Enterprise Architecture work. It is a framing document, not a methodology in itself. It establishes the constraints that every chapter of the Method Guide, every Reference Architecture, and every toolkit template assumes.

The document exists because earlier versions of GEATDM treated public-sector specifics as implicit context. Practitioners using GEATDM in countries with weak political sponsorship, fragmented budget cycles, or low in-house architectural capacity reported that the method's timelines and assumptions did not match their working reality. This document makes those constraints explicit so the practitioner can plan against them rather than around them.

## 1.2 Where it sits in GEATDM

This document is part of the EA Framework module (WP1). It complements the EA Metamodel (T11), EA Principles (T12), EA Governance (T13), and EA Services (T14) by stating the institutional and political context in which all four operate.

It is intended to be read once, early in any GEATDM engagement, and consulted again at each phase boundary. It does not replace the Method Guide; it conditions it.

## 1.3 Source frameworks

The framing draws on three sources, each of which is a normative reference for GEATDM:

- **PAERA — Public Administration Ecosystem Reference Architecture v1.0** (paera.govstack.global). PAERA is the GovStack reference framework on which GEATDM is built. Sections referenced in this document include §3.1 (Governance & Policy), §3.2 (Legal Framework), §4.1 (Public versus Private), §4.5 (Digital Co-creation — Budget, Procurement, IT Project, Maintenance), and §5.2 Principle #1 (Rule of Law).
- **IMF Tax Administration Reference Architecture v0.1** (TA RA). A sectoral reference architecture authored against PAERA. Sections referenced include §3.3 (The Bespoke Software Trap), §3.4 (The Vendor-Driven Architecture Trap), §17 (Sourcing Strategy), and §19 (Implementation Roadmap — Big-Bang Fails, Strangler Fig).
- **Field experience** from public-sector EA programmes across multiple national contexts.

## 1.4 How to read this document

The document is short. Sections 2 and 3 state the constraints. Section 4 explains the timing model the practitioner must use. Section 5 introduces the architectural traps in summary form (the full treatment is in T16 Architectural Traps). Section 6 maps the constraints onto each GEATDM phase so the practitioner knows where in the method each constraint bites hardest.

A practitioner who is new to public-sector EA work should read the entire document in order before opening the Method Guide. A practitioner already familiar with PAERA and the public-sector context can read Section 6 alone as a summary.

---

# 2. THE FUNDAMENTAL DIFFERENCE BETWEEN PUBLIC AND PRIVATE SECTORS

## 2.1 What private-sector projects can assume (and public-sector projects cannot)

A private-sector digital transformation project, once funded, can broadly assume:

- The organisation can do anything not prohibited by law.
- Decisions on scope, technology, and vendor selection rest with management within the organisation.
- Funds can be moved between cost centres and across years within reason.
- Procurement uses commercial contracts that can be renegotiated, and selection criteria reflect business judgement.
- The organisation can recruit at the salary required to fill a critical role.

In the public sector, none of these assumptions hold without qualification. Each one is constrained by law, by political accountability, by budget law, by public procurement law, and by public-sector pay structure. PAERA §4.1.1 is direct on this point:

> "Public sector operations differ from the private sector in terms of organizational needs and the requirement to strictly adhere to business rules that arise from legislation and administrative regulations. […] In the public sector, implementing similar transformations may require approval at different levels of the organizational hierarchy. Legislative changes may be difficult to pass, budget allocation may be uncertain and take a lot of time due to rigid annual budgeting procedures."

A practitioner who carries private-sector assumptions into a public-sector EA engagement will produce timelines, sourcing strategies, and capacity plans that the organisation cannot execute. This document exists to prevent that.

## 2.2 The Rule of Law constraint (PAERA §5.2 Principle #1)

The single most important difference between public and private sector is the legal posture, which PAERA captures in Principle #1:

> "While individuals in the private sector may engage in any activity that is not prohibited by the law, public sector organisations can only perform activities that are strictly and directly prescribed by the law."

This is not a theoretical statement. It has direct, daily implications for EA work. Every meaningful change in a digital-government initiative — a new service, a new data exchange, a new authority responsible for a new function, even a new field on a registry record — touches the legal framework. The relevant question is not whether a change has a legal component. It is which legislation, regulation, or administrative decree must be amended for the change to be lawful.

This is the reason GEATDM treats legal-framework analysis as a parallel workstream throughout the method, not as a procedural step at the end.

## 2.3 Implications for EA practice

The Rule of Law constraint, applied to EA practice, produces three working rules:

1. **Every architectural decision is also a legal-framework decision.** The TO-BE Architecture must be tested for legal feasibility as well as technical feasibility. A capability that requires legislative amendment is not "technically possible but legally pending"; it is unavailable until the law is in place.
2. **The architecture roadmap is a sequencing of legal, political, and technical work in parallel.** A Wave 1 deliverable that depends on a regulatory amendment cannot be planned for completion before the regulatory amendment is realistic. The roadmap must reflect the slower of the two clocks.
3. **The architect's role includes briefing the legislator.** GEATDM expects the EA team to prepare materials that legal-drafting offices, ministerial cabinets, and parliamentary committees can use. The PAERA §3.2 Legal Framework chapter and the Stakeholder Engagement Method Guide (T59) provide the templates.

---

# 3. THE FIVE OPERATING CONSTRAINTS

The Rule of Law constraint expresses itself in five operating constraints that bind every public-sector EA engagement. The practitioner must understand each one before designing a roadmap.

## 3.1 Legal framework — every change crosses a legal threshold

Every meaningful change in a digital-government initiative — a new service, a new data exchange, a new authority, a new data field — touches the legal framework. The legal threshold may be primary legislation (an Act of Parliament), secondary legislation (a regulation, decree, or statutory instrument), or administrative legislation (a ministerial circular or directive). The EA team must classify each change against these three thresholds in the ASSESS phase and, in the PLAN phase, sequence the legal work alongside the technical work.

PAERA §3.2 Legal Framework provides the canonical structure for this work: Principles → Process → Roadmap. GEATDM-WP5-T58 Method Guide §13.7 includes a Legal Impact Assessment activity that produces the legal touch-points note for each architectural change.

The skill `legal-impact-assess` (in the AI Plays catalogue, WP7) automates the first cut of this analysis from a one-page change description.

## 3.2 Political sponsorship — nothing moves without it

PAERA §3.1.1 makes the position bluntly:

> "There is the need for political leadership. Substantial changes in national and organisational levels need political support expressed through words and budget allocations."

In the absence of an identified political sponsor in the executive (a minister, a permanent secretary, or a head of agency with explicit transformation mandate) and a champion in the legislature (a parliamentary committee chair, a ranking member, or a recognised opposition voice on digital matters), even a well-designed initiative will not move. The EA practitioner who proceeds without identified sponsorship is producing artefacts for an archive, not for execution.

Political sponsorship is not a one-time event. It is sustained by regular communication, visible quick wins, and consistent framing. The Stakeholder Engagement Method Guide (T59) sets out a three-tier engagement model with differentiated communication cadence, briefing cycle, and formal commitment letters. The skill `political-sponsor-brief` (WP7) generates briefing notes for each tier.

A practitioner who arrives at the ASSESS phase without political sponsorship has skipped a phase. Return to DISCOVER and complete the stakeholder engagement work before proceeding.

## 3.3 Budget cycles — you don't 'have' money, you apply for it

Public-sector funding works on a cycle, not on a balance sheet. PAERA §4.5 Budget describes the cycle:

> "Acquiring resources for a significant initiative usually involves obtaining funds from the annual state budget, which has a planning phase 9-10 months before the beginning of the next financial year. […] This process can take 2-3 years before funds are received for the idea you got today."

Three implications for EA practice:

1. **The PLAN phase produces a multi-year funding envelope, not an annual budget.** PAERA recommends multi-year budgeting with in-year transfer authority, dedicated budgets for enterprise-wide platforms, and outcome-based budgeting models. Where the country's public finance management law does not yet support these, the architect's roadmap cannot pretend it does.
2. **Wave 1 of the roadmap is sized to fit within the funding the country has already secured (donor-funded programmes, in-year reallocation authority, or technical-assistance lines).** Wave 2 onwards requires a successful budget application and is conditional on it.
3. **Donor-funded projects must include a state budget commitment for long-term sustainability and maintenance** (PAERA §4.5). A roadmap that assumes donor funding for run-state operations is not a roadmap; it is a plan to abandon the system after the donor exits.

The skill `budget-justify` (WP7) generates a budget-application business case from a project brief, aligned with multi-year and outcome-based budgeting practice.

## 3.4 Procurement — its own engineering discipline

Even with budget secured, public procurement adds a further constraint. PAERA §4.5 Procurement notes that "the public procurement process often hinders the selection of optimal technology vendors and solutions for digital systems," and identifies two recurring failure modes: **lack of capacity to identify innovation areas and design feasible projects**, and **overly prescriptive contracts and low-risk vendor choices that lead to a lack of innovation**.

PAERA's recommended responses are:

- Flexible procurement methods such as pre-commercial procurement and competitive dialogue.
- Outcome-based requirement definitions rather than prescriptive technical specifications.
- Engagement of innovative local SMEs and start-ups.
- Joint procurement across agencies where the same capability is needed by multiple ministries.
- Project decomposition into smaller logical components delivered through a framework contract with multiple vendors.

GEATDM treats procurement as part of the PLAN phase, not as an external administrative step. The roadmap distinguishes procurement-ready components (outcome specifications, framework-contract decomposition, vendor-neutral interfaces) from procurement-blocked components (those still requiring technical specification work or legal clearance). The skill `procurement-spec` (WP7) drafts a procurement specification with framework-contract decomposition and outcome-based requirements from a service brief.

## 3.5 Capacity — the elders-and-youngsters workforce shape

Public-sector salaries cannot match those of the private sector. The workforce that the EA practitioner has to work with skews to two ends of the career arc.

At one end, **experienced senior officials** with deep institutional knowledge — twenty or thirty years of service, multiple administrative reforms behind them, full understanding of the legal framework, the inter-ministerial protocol, and the political sensitivities. They are typically less digitally fluent and have weaker working knowledge of the underlying tooling. They are the strategist persona in this document and in the Method Guide.

At the other end, **graduate-entry junior staff** — strong technical training, fluency in modern tooling, often current with international standards and open-source platforms, willing to work hard. They typically have limited institutional memory, weak understanding of the legal framework, and no experience with inter-ministerial dynamics. They are the developer persona.

The productive mid-career layer is largely missing. Civil servants who reach mid-career with strong digital skills typically leave for the private sector, for international organisations, or for consulting. The few who stay are extraordinary and cannot be planned for.

Three implications for EA practice:

1. **Architect roles cannot be filled from internal promotion alone.** The architect persona is typically a contracted consultant, a senior official seconded to the digital agency for a fixed term, or a recently retired private-sector architect engaged on a fixed-term contract. GEATDM's PLAN phase Section 13.6 includes resource estimation that distinguishes core staff (PDU/RA/SDA budget) from external augmentation (technical assistance budget).
2. **Training and dissemination materials must be tiered.** A senior official needs to use the materials without absorbing the underlying tooling; a junior developer needs to use them without having to relearn the institutional context. The Method Guide and Toolkit templates are written so both ends of the workforce can use them.
3. **Capacity-building is a parallel workstream from DISCOVER through EXECUTE.** The PLAN phase budget includes an explicit capacity-building line item. PAERA §3.1.2 (Transforming Governance) describes this as the cultivation of "digital culture" and notes that "a basic level of technology adoption" is a precondition for more sophisticated capabilities.

---

# 4. CALENDAR TIME VERSUS TEAM-EFFORT TIME

## 4.1 Mobilisation phase

Before a GEATDM engagement can produce its first deliverable, the public-sector organisation must have:

- An identified political sponsor in the executive.
- A champion in the legislature where the relevant committee oversight applies.
- An approved budget for the engagement (whether from state budget, donor funding, or technical assistance).
- A procurement vehicle in place (a contract, a framework agreement, or an in-house staffing decision).
- Legal mandate for the EA function, where this is not yet established (typically a ministerial directive or a statutory instrument creating the architecture function).
- Initial capacity-building of the core team.

This is the **mobilisation phase**. Per PAERA §4.5, the mobilisation phase typically takes one to three years from the moment the idea is raised to the moment the engagement begins. In donor-funded programmes the mobilisation phase is shorter (six to twelve months) but the post-engagement sustainability question reappears.

## 4.2 Delivery phase

Once mobilisation is complete, the GEATDM engagement begins. The phase durations stated in the User's Guide and the Method Guide refer to **team-effort time during the delivery phase**. They assume:

- The political sponsor remains in post and engaged.
- The budget remains intact.
- The procurement vehicle remains valid.
- The team remains assigned (no rotation, no dilution onto unrelated tasks).

The User's Guide's table of typical timelines (PDU 3–6 months through PLAN, 12–18 months full implementation; RA 4–8 months through PLAN, 18–24 months full implementation; SDA 6–12 months through PLAN, 24–36 months full implementation) is a delivery-phase table.

## 4.3 Implications for the GEATDM phases

A roadmap stated in calendar months will mislead a sponsor unless the mobilisation phase is stated separately. GEATDM recommends the following discipline in the PLAN phase:

- **State the team-effort time for each Wave** of the roadmap (in person-weeks or person-months, not in calendar months).
- **State the calendar time for each Wave**, assuming the mobilisation work needed for that Wave is complete.
- **State the mobilisation pre-conditions for each Wave** explicitly: which legislation must be in force, which budget cycle must have approved the funding, which procurement vehicle must be operational.
- **Update the calendar timeline at the start of each Wave** as mobilisation pre-conditions are met or slip.

The roadmap is then a living document, not a fixed plan. PAERA §3.1.2 (Transforming Governance) describes this as treating digital transformation as a continuous process rather than a one-time project.

---

# 5. ARCHITECTURAL TRAPS (PREVIEW)

The five operating constraints above describe the environment. They explain why public-sector EA work is harder than private-sector EA work. They do not, however, describe the failure modes that public-sector organisations fall into despite respecting the constraints. Three failure modes are common enough to warrant explicit treatment in GEATDM.

## 5.1 The Bespoke Software Trap

Stated by TA RA §3.3 as: every line of custom code written for a public-sector system is a long-term maintenance liability for the organisation that owns it. Custom code must be maintained, debugged, tested, and updated by the organisation itself. As staff change, knowledge of the custom code is lost. As priorities shift, the custom code becomes harder to justify maintaining.

The GEATDM response is to default to configuring open-source or commercial low-code platforms (Joget DX 8.x as the reference low-code platform in the GovStack ecosystem; X-Road 7.x as the reference information-mediation BB) rather than building custom. Bespoke code is reserved for capabilities that are genuinely unique to the country or sector. The Build vs Buy vs Configure decision framework (Method Guide §13.4 — extension in the v1.1 release) operationalises this discipline.

## 5.2 The Vendor-Driven Architecture Trap

Stated by TA RA §3.4 as: where in-house architectural capacity is thin, architectural thinking is delegated, procurement cycle by procurement cycle, to successive vendors. Each vendor expands the footprint of its own product. The result is a patchwork that reflects the commercial interests of vendors rather than the strategic interests of the organisation: overlapping systems, duplicated functions, escalating licence costs, and integration that becomes nearly impossible to clean up.

The GEATDM response is to treat clear domain boundaries and vendor neutrality as governance tools. The PDU/RA/SDA Reference Architectures define what each architectural zone is responsible for and, equally important, what it is not. When a vendor proposes a solution, the architecture provides an objective basis for evaluating whether the vendor is staying within its zone or expanding into adjacent zones. EA Governance (T13) and the EA Board operating guide (Toolkit Appendix B) make this enforceable.

## 5.3 The Big-Bang Replacement Trap

Stated by TA RA §19.1 as: multi-year monolithic replacement projects in the public sector have a documented track record of cost overruns and abandonment. Failures cost billions, disrupt services, and result in extended dual-system maintenance.

The GEATDM response is to default to the **Strangler Fig pattern** (TA RA §19.2): wrap existing systems with modern APIs, stand up the bus and the data platform alongside, and progressively replace components only where legacy genuinely blocks progress. This is consistent with PAERA §5.7's wave-based roadmap shape (Inception → High-priority Use Case → Initial Transformation → Mass-scale Transformation).

## 5.4 Where these traps are addressed in GEATDM

The full treatment of the architectural traps and the GEATDM responses is in T16 Architectural Traps (forthcoming as part of the v1.1 release). This document provides only the framing.

---

# 6. HOW GEATDM PHASES RESPECT THESE CONSTRAINTS

## 6.1 Public-sector reality in DISCOVER phase

The DISCOVER phase classifies the organisation (PDU/RA/SDA) and assesses national DPI readiness. Public-sector reality bites in DISCOVER through:

- **Legal framework basis check.** Identify the legislation, regulation, or administrative decree under which the EA function operates. If none exists, the first PLAN-phase deliverable will be the drafting of that instrument. The skill `legal-impact-assess` runs against the existing legal corpus.
- **Political sponsorship confirmation.** Secure written commitment from the sponsor before proceeding. The Stakeholder Engagement Method Guide (T59) provides the Tier 1 Inception Workshop and Stakeholder Commitment Letter templates.
- **Budget vehicle confirmation.** Verify that an approved budget envelope or technical-assistance line is in place for the engagement. If not, DISCOVER produces a budget application as its first deliverable.

## 6.2 Public-sector reality in ASSESS phase

The ASSESS phase documents AS-IS architecture and identifies gaps. Public-sector reality bites in ASSESS through:

- **Legal AS-IS.** The AS-IS documentation includes the legal instruments authorising each capability. Where a capability operates without explicit legal authority, this is a gap.
- **Political AS-IS.** The AS-IS documentation includes the political sponsorship picture: who currently champions the function in the executive and the legislature.
- **Capacity AS-IS.** The AS-IS documentation includes the workforce shape (senior, mid-career, junior; permanent, contracted, seconded). Mid-career gaps are flagged.

## 6.3 Public-sector reality in ADAPT phase

The ADAPT phase tailors the Reference Architecture to the country context. Public-sector reality bites in ADAPT through:

- **Tailoring within the legal envelope.** Tailoring decisions are tested against the legal framework. A tailoring that requires legislative amendment is documented as a Wave 2 (or later) item, not as a Wave 1 baseline.
- **Tailoring within capacity.** Tailoring decisions are tested against the workforce shape. A tailoring that assumes a mid-career architecture team in-house is replaced with a tailoring that uses contracted augmentation.

## 6.4 Public-sector reality in PLAN phase

The PLAN phase produces the implementation roadmap and business case. Public-sector reality is the dominant constraint in PLAN. The Method Guide §13 includes:

- **Activity 13.7 Legal Sequencing** — every Wave includes the legal instruments that must be in force before the Wave can begin.
- **Activity 13.5 Align with Budget Cycles** — Waves are sized to fit within budget cycles, with explicit budget application timelines for funding not yet secured.
- **Activity 13.8 Procurement Sequencing** — Waves are tested against the procurement law of the country and the realistic procurement timelines.
- **Activity 13.6 Resource Estimation** — explicit distinction between core team, contracted augmentation, donor-funded technical assistance, and capacity-building investment.

## 6.5 Public-sector reality in EXECUTE & GOVERN phase

The EXECUTE & GOVERN phase implements the roadmap and operates the architecture function. Public-sector reality bites in EXECUTE & GOVERN through:

- **Continuous political engagement.** The EA Board and Governance cadence (T13) maintains political sponsorship through quarterly briefings and visible quick wins.
- **Continuous capacity-building.** The capacity-building line in the budget is sustained, not eliminated after Wave 1.
- **Sustainability planning.** Donor-funded engagements include explicit transition to state-budget operations, per PAERA §4.5.

---

# 7. CROSS-REFERENCES

## 7.1 Toolkit templates that operationalise these constraints

| Constraint | Toolkit template(s) |
|------------|---------------------|
| Legal framework | TK-32 Legal Touch Points Note |
| Political sponsorship | TK-33 Stakeholder Tier Classification; TK-34 PIC Matrix Worksheet; TK-35 Tier 1 Inception Workshop Concept Note; TK-36 Stakeholder Commitment Letter |
| Budget cycles | TK-17 Business Case Template; TK-37 Budget Application Worksheet |
| Procurement | TK-38 Procurement Specification Template |
| Capacity | TK-20 Resource Estimation Template; capacity-building items in TK-16 Implementation Roadmap |

## 7.2 Method Guide sections

| Constraint | Method Guide section |
|------------|---------------------|
| Legal framework | §6.3 Organizational Readiness Indicators; §13.7 Legal Sequencing (v1.1 extension) |
| Political sponsorship | §3.2 Stakeholder Mapping (DISCOVER); §6.1 Critical Success Factors (Executive Sponsorship); T59 Stakeholder Engagement (full chapter) |
| Budget cycles | §13.5 Align with Budget Cycles |
| Procurement | §13.8 Procurement Sequencing (v1.1 extension) |
| Capacity | §3.2 Assembling Your Team; §13.6 Resource Estimation |

## 7.3 External references

- PAERA v1.0 — paera.govstack.global
- PAERA §3.1 (Governance & Policy), §3.2 (Legal Framework), §4.1.1 (Public versus Private), §4.5 (Budget, Procurement, IT Project, Maintenance), §5.2 Principle #1 (Rule of Law)
- IMF Tax Administration Reference Architecture v0.1 — §3.3 (Bespoke Software Trap), §3.4 (Vendor-Driven Architecture Trap), §17 (Sourcing Strategy), §19 (Implementation Roadmap)
- GEATDM-WP1-T12 EA Principles
- GEATDM-WP1-T13 EA Governance
- GEATDM-WP5-T58 Method Guide
- GEATDM-WP5-T59 Stakeholder Engagement (companion document)
- GEATDM-WP1-T16 Architectural Traps
- 08-Interoperability — Reference Model, Method, Toolkit (cross-cutting national capability)
- 09-DPI — Reference Model, Method, Toolkit (Digital Public Infrastructure roadmap development)
- GEATDM-WP6-T61 Toolkit

---

# 8. GLOSSARY

| Term | Definition |
|------|------------|
| **Calendar time** | The number of weeks or months that elapse on a wall calendar between the start and the completion of a piece of work. |
| **Team-effort time** | The number of person-weeks or person-months consumed by a piece of work. Distinct from calendar time when the team is part-time, when there are dependencies on external actors, or when the work is paused for sponsorship/budget/procurement reasons. |
| **Mobilisation phase** | The phase before a GEATDM engagement begins, during which political sponsorship, budget, procurement, and core team are secured. Typically 1–3 years per PAERA §4.5. |
| **Delivery phase** | The phase during which the GEATDM engagement runs. Phase durations stated in the User's Guide refer to team-effort time during the delivery phase. |
| **Champion** | In the Stakeholder Engagement model (T59), a Tier 1 ministry with decision-making authority over budget and IT investment. |
| **Early Adopter** | In the Stakeholder Engagement model, a Tier 2 ministry ready for active transformation, requiring hands-on support. |
| **Observer** | In the Stakeholder Engagement model, a Tier 3 ministry preparing for future implementation through gradual learning. |
| **Bespoke Software Trap** | TA RA §3.3 — every line of custom code is a maintenance liability; the organisation pays for it indefinitely. |
| **Vendor-Driven Architecture Trap** | TA RA §3.4 — when architectural thinking is delegated to vendors, the system becomes a patchwork reflecting vendor commercial interests. |
| **Big-Bang Replacement Trap** | TA RA §19.1 — multi-year monolithic replacement projects fail in the public sector. |
| **Strangler Fig pattern** | TA RA §19.2 — wrap existing systems with modern APIs, progressively replace components. |
| **PIC Matrix** | Power-Interest-Culture matrix for stakeholder analysis, used in T59. |
| **Tier 1 / Tier 2 / Tier 3** | Champion / Early Adopter / Observer ministry classification, used in T59. |

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
