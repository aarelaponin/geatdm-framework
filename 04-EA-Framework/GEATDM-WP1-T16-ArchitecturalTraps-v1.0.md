# GEATDM — ARCHITECTURAL TRAPS

**Document:** GEATDM-WP1-T16-ArchitecturalTraps-v1.0
**Part of:** EA Framework
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## DOCUMENT CONTROL

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP1-T16 |
| Title | Architectural Traps in Public-Sector Digital Transformation |
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
2. Trap #1 — The Bespoke Software Trap
3. Trap #2 — The Vendor-Driven Architecture Trap
4. Trap #3 — The Big-Bang Replacement Trap
5. The Strangler Fig pattern
6. Cross-trap interactions
7. How GEATDM phases address the traps
8. Cross-references
9. Glossary

---

# 1. INTRODUCTION

## 1.1 Purpose of this document

The Public Sector Reality framing (T15) describes the operating environment that bounds every public-sector EA engagement. Even within those constraints, public-sector organisations regularly fall into a small number of recurring failure modes that are not caused by the constraints themselves. This document names those failure modes — **traps** — and sets out the GEATDM response to each.

A trap, in this document's vocabulary, is a pattern of decision-making that is locally rational but produces a systemically poor outcome. Each trap is locally rational because, at the moment a single decision is taken, it appears to be the lower-risk or lower-cost option. The pattern only becomes visible when a sequence of such decisions is examined together, at which point the systemic damage is hard to reverse.

GEATDM identifies three traps that practitioners encounter often enough to warrant explicit treatment:

- **The Bespoke Software Trap** — accumulating custom code that becomes a long-term maintenance liability.
- **The Vendor-Driven Architecture Trap** — delegating architectural thinking to vendors and ending up with a patchwork that reflects vendor commercial interests rather than organisational strategy.
- **The Big-Bang Replacement Trap** — committing to multi-year monolithic replacement projects with poor track records in the public sector.

The Strangler Fig pattern is treated as a separate section (§5) because it is the standard GEATDM response to the Big-Bang trap and applies in many other situations.

## 1.2 Where this document sits in GEATDM

| Document | Relationship |
|----------|-------------|
| T15 Public Sector Reality | Establishes the operating environment. T16 names the failure modes within that environment. |
| T12 EA Principles | The 33 principles are the positive guidance. T16 is the corresponding negative guidance. |
| T13 EA Governance | The EA Board and the dispensation process operationalise the trap mitigations. |
| T58 Method Guide | Each phase chapter cross-references T16 where the trap most affects the phase activity. |
| T61 Toolkit | TK-22 (Architecture Compliance Assessment), TK-29 (EA Board Agenda), TK-30 (ADR) operationalise mitigation; TK-39 Sourcing Decision Matrix addresses the Bespoke Trap quantitatively. |

## 1.3 Source frameworks

The three traps are documented in the IMF Tax Administration Reference Architecture v0.1, which was authored against PAERA. The traps were observed in tax-administration practice but generalise to any public-sector domain, including the sectors covered by GEATDM (PDU, RA, SDA). This document generalises the material:

- Trap #1 generalises TA RA §3.3 The Bespoke Software Trap.
- Trap #2 generalises TA RA §3.4 The Vendor-Driven Architecture Trap.
- Trap #3 generalises TA RA §19.1 Why Big-Bang Fails.
- The Strangler Fig pattern (§5) generalises TA RA §19.2 Strangler Fig + EU Accession Dual Track.

Where the TA RA material relies on tax-domain specifics (ITAS replacement cycles, EU accession requirements, VAT-gap analytics), this document substitutes domain-neutral language and cites GEATDM examples (Reference Architectures, BBs, sector guides).

## 1.4 How to read this document

A practitioner who has not seen any of the three traps in real engagements should read all of §§2–6 before designing a roadmap. A practitioner who has seen one or two of the traps in practice should read the trap they have not encountered and the cross-trap interactions section (§6).

---

# 2. TRAP #1 — THE BESPOKE SOFTWARE TRAP

## 2.1 The pattern

Every line of custom code written for a public-sector system is a long-term maintenance liability for the organisation that owns it. Custom code must be maintained, debugged, tested, and updated by the organisation itself or by its contracted suppliers. As the organisation's staff change, knowledge of the custom code is lost. As organisational priorities shift, the custom code becomes harder to justify maintaining. As the underlying platform evolves, the custom code drifts from the platform and accumulates compatibility risk.

The trap is that a single decision to build a piece of custom code, taken in isolation, almost always looks justified: the requirement is unique, the commercial alternative is expensive, the in-house team can do it faster, and the politics of the moment require visible delivery. Aggregated over a decade of such decisions, the same organisation finds that 60% or 80% of its production code is bespoke, none of it is being actively improved, and a substantial fraction of its IT budget is consumed by the maintenance of code that no current member of staff fully understands.

## 2.2 Why the trap is specific to the public sector

Three features of public-sector context make the Bespoke Software Trap easier to fall into than in the private sector:

1. **Civil-service tenure** sustains the illusion that custom code can be maintained in-house indefinitely. In the private sector, staff turnover forces a shorter view of maintenance cost. In the public sector, the assumption that "the team will still be here in ten years" is more durable, and so is the assumption that "the team will still understand the code in ten years". Neither assumption is reliable in practice (T15 §3.5 — the elders-and-youngsters workforce shape).
2. **Procurement law** discourages the use of commercial off-the-shelf software where it would make the procurement decision look like a sole-source choice. Building custom is procurement-friendlier even when it is more expensive over a decade.
3. **The "uniqueness" claim** is more persuasive in the public sector because every country's legal framework, organisational structure, and policy emphasis is, in some degree, unique. The temptation to conclude that no off-the-shelf product can fit is constant. The discipline to challenge this temptation has to come from architecture governance.

## 2.3 Symptoms

The Bespoke Software Trap produces recognisable symptoms. A practitioner running an ASSESS phase should look for:

- A high ratio of custom code to configured code in production. The Bespoke Footprint KPI (§2.5 below) measures this.
- Multiple internal teams maintaining functionally similar bespoke components (three taxpayer registries, two case-management systems, four reporting pipelines).
- Heavy reliance on a small number of long-tenure staff to maintain code that is otherwise undocumented.
- Vendor invoices dominated by maintenance and support of bespoke contracted code, not by configuration of standard products.
- A capability that, in the private sector, would be solved with a standard product (workflow, document management, identity, payments) but in the public-sector organisation is implemented as bespoke code.
- Procurement records showing repeated sole-source justifications for code maintenance over many years.

## 2.4 Mitigations

The GEATDM response is to apply five mitigations consistently across all four phases.

**Mitigation 1 — Default to configuration over custom.** The Reference Architectures (PDU, RA, SDA) prefer configuration of open-source or commercial standard products over bespoke development. Joget DX 8.x is the named reference low-code platform in the GovStack ecosystem; X-Road 7.x is the named reference information-mediation BB. Bespoke development is reserved for capabilities that are genuinely unique to the country or the sector — not capabilities that the organisation has historically built itself.

**Mitigation 2 — Build vs Buy vs Configure decision framework.** The PLAN phase (Method Guide §13) applies the decision framework set out in TA RA §17.1 and adapted in the forthcoming GEATDM v1.1 release of T58. For each capability in the TO-BE Architecture, the framework selects between Build (genuine bespoke development), Buy (commercial off-the-shelf), and Configure (low-code or open-source platform configuration), with a recorded rationale.

**Mitigation 3 — Bespoke Footprint KPI.** The organisation tracks the ratio of bespoke code to total production code as a quarterly KPI. Target: less than 20% bespoke across the platform. The KPI is measured automatically using source code analysis tools and reported to the EA Board. When the KPI drifts above 25%, the EA Board commissions a review of recent build decisions.

**Mitigation 4 — Vendor lock-in prevention discipline.** Where bespoke development is genuinely required, the architecture insists on API contracts as the supplier interface, OpenAPI specifications as the deliverable, data portability clauses in every contract, and documentation that allows another supplier to take over the code. The architecture treats every bespoke component as a candidate for handover, not as a permanent organisational asset.

**Mitigation 5 — Standards approval discipline.** Every new technology choice that introduces a dependency or a licensing commitment goes through the EA Board (Toolkit TK-31 Standards Approval Form). The Board enforces the principle that organisational scope creep ("we already have it, let's extend it") is not a reason to build bespoke; it is a reason to ask whether the existing bespoke component is correctly scoped.

## 2.5 The Bespoke Footprint KPI

The KPI is defined precisely so that it is auditable.

**Definition.** Bespoke Footprint = (lines of bespoke code in production) ÷ (total lines of code in production), expressed as a percentage. "Bespoke code" means code that the organisation owns and maintains itself or through contracted suppliers, rather than code that comes from a maintained third-party product (commercial, open-source, or low-code platform).

**Measurement.** Quarterly, automatically, using source code analysis tools. The Toolkit's forthcoming TK-39 Sourcing Decision Matrix template includes the calculation worksheet.

**Targets by domain.** A reasonable target depends on the architectural domain:

| Domain | Target Bespoke Footprint |
|--------|--------------------------|
| Identity, Payments, Information Mediator (DPI BBs the country consumes) | < 5% |
| Case management, document management, workflow | < 10% |
| Sectoral business logic genuinely unique to the country | up to 60% |
| Cross-cutting concerns (audit, logging, monitoring, security) | < 5% |
| **Overall, weighted across all domains** | **< 20%** |

**Governance.** When the overall Bespoke Footprint exceeds 25% in any quarter, the EA Board commissions a review. The review asks: which build decisions in the last four quarters increased the footprint? Were the alternatives properly considered? Is the architecture losing the discipline to prefer configuration over custom?

The KPI is described more fully in Supplement 5 (Sourcing Strategy + Bespoke Footprint, forthcoming GEATDM v1.1).

---

# 3. TRAP #2 — THE VENDOR-DRIVEN ARCHITECTURE TRAP

## 3.1 The pattern

Public-sector organisations operate under chronic pressure to deliver more with less. Requirements are complex, deadlines are political, and internal IT capacity is structurally thin (T15 §3.5). In that environment, a natural coping mechanism emerges: architectural thinking is delegated to vendors. The organisation describes a business problem, a vendor proposes a solution using its product, and the organisation accepts the proposal because it lacks the time or expertise to challenge it. Over years and decades, the same pattern repeats across many procurement cycles.

The result is not architecture in any meaningful sense. It is a patchwork that reflects the commercial interests of successive vendors, not the strategic interests of the organisation. Each vendor, acting rationally in its own commercial interest, expands the footprint of its own product. An ERP vendor argues that its platform should handle case management. A case management vendor argues that its platform should handle data analytics. A data warehouse vendor argues that its platform should handle risk scoring. Each expansion is sold at the moment as low-risk and high-leverage; aggregated over years, the result is functional overlap, escalating licence costs, and integration that becomes nearly impossible to clean up.

## 3.2 Why the trap is specific to the public sector

The Vendor-Driven Architecture Trap is more durable in the public sector than in the private sector because:

1. **Public-sector organisations rarely have the in-house architectural seniority to push back at the moment a vendor's expansion proposal is tabled.** The mid-career architectural layer is largely missing (T15 §3.5). The senior officials present at the procurement decision are typically not the architects, and the in-house architects, where they exist, are not at the table.
2. **Procurement law and politics make incremental vendor expansion the path of least resistance.** Adding a module to an existing contract is administratively faster than running a new procurement. The procurement process rewards continuity even when continuity is the wrong architectural choice.
3. **Vendor relationships outlive political cycles.** A vendor that has been delivering for ten years has more institutional memory of the organisation's customisations than the organisation's own staff. This creates a leverage that is hard to reverse without a deliberate effort.

## 3.3 Symptoms

The trap produces recognisable symptoms. A practitioner running an ASSESS phase should look for:

- Three or four major vendors whose products each cover capabilities that, in a clean architecture, would belong to different domains.
- Functional overlap between systems supplied by different vendors (two systems calculating the same metric, three systems holding the same reference data, four systems generating overlapping reports).
- Annual licence costs that compound year over year without the corresponding capability growth.
- Integration architecture that consists of point-to-point connectors between vendor products rather than a shared bus or a defined integration domain.
- Inability to replace any single vendor without a multi-year transition because the vendor's product has tentacles into adjacent domains.
- Procurement specifications that read like vendor product brochures (specifications written around the features of a known product rather than around the organisation's outcome requirements).
- New initiatives that are scoped around what the existing vendor's product can do, rather than around what the organisation needs.

## 3.4 Mitigations

The GEATDM response uses the Reference Architectures themselves as procurement-governance tools, supplemented by EA Board enforcement.

**Mitigation 1 — Reference Architectures as procurement-governance tools.** Each Reference Architecture (PDU, RA, SDA) defines clear domain boundaries: what each architectural zone is responsible for and, equally important, what it is not responsible for. When a vendor proposes a solution, the architecture provides an objective basis for evaluating whether the vendor is staying within its zone or expanding into adjacent zones. Capability mapping (Toolkit TK-26) classifies every line item in a vendor proposal against the capability map; any capability that crosses domain boundaries triggers an architectural review.

**Mitigation 2 — Vendor neutrality as an architectural principle.** EA Principle APP-03 (Integration Through National DPI) and APP-05 (API-First Design) operationalise this. The architecture insists that integration happens through the national DPI components (Information Mediator BB) and standard APIs (OpenAPI), not through vendor-proprietary integration mechanisms. A vendor's product that requires its own integration layer fails the principle; the EA Board may grant a dispensation, but only with sunset terms.

**Mitigation 3 — Multi-vendor strategy by default.** Wherever a domain capability has multiple credible suppliers (case management, identity, payments, document management), the architecture's default position is to use at least two. This protects against vendor leverage and creates a fallback path.

**Mitigation 4 — API contracts and data portability as vendor boundary.** Every vendor contract includes API contracts as the supplier interface (OpenAPI specifications), data portability clauses (the organisation can export all data in standard formats within 30 days), and documentation requirements that allow another supplier to take over operations. The vendor is paid to deliver functionality, not to create lock-in.

**Mitigation 5 — EA Board enforcement of domain boundaries.** The EA Governance Framework (T13) gives the EA Board explicit authority to enforce domain boundaries. When a vendor proposes scope expansion across a domain boundary, the proposal is referred to the Board. The Board can approve the expansion only with a documented dispensation (Toolkit TK-23) that includes sunset terms (when the dispensation expires) and a remediation plan (how the boundary is restored at expiry).

## 3.5 The procurement-governance discipline

The discipline that prevents the Vendor-Driven Architecture Trap is procurement governance. Three rules:

1. **Specifications are written in outcome terms, not in vendor product terms.** "The system shall provide case management workflow with configurable approval routing" rather than "the system shall use [Vendor X] case management module v8". Outcome-based specifications open the field to multiple credible suppliers and prevent the specification itself from being a vendor lock-in.

2. **Every procurement decomposes the requirement into the GEATDM capability map.** A single procurement should not span more than one architectural domain. Where a single procurement is administratively necessary across domains (for example, a national identity system that includes registration, authentication, and credential issuance), the procurement is structured as a framework contract with separate lots per domain.

3. **The architecture is published and binding.** The architecture cannot govern procurement if procurement officers do not know about it. The Reference Architecture, the capability map, and the domain boundaries are published, briefed to procurement officers at the start of each engagement, and referenced in the procurement evaluation criteria.

---

# 4. TRAP #3 — THE BIG-BANG REPLACEMENT TRAP

## 4.1 The pattern

A monolithic legacy system has accumulated complexity over 10 to 20 years. It works, but barely; every change is risky; performance has degraded; the supplier base for the underlying technology is shrinking. The organisation decides to replace the system with a new one. The replacement project is scoped to deliver a complete equivalent of the legacy system in three years. Three years later, the project has consumed twice the budget, delivered half the scope, and is being maintained alongside the legacy system at compounded operational cost.

This pattern has repeated across many countries and many sectors. It is the most expensive failure mode in public-sector digital transformation, and the most damaging to political sponsorship of future EA work.

## 4.2 Why monolithic replacements fail in the public sector

The reasons are well-documented. The condensed list:

1. **Underestimated complexity.** Legacy systems carry 10 to 20 years of legislative changes, special provisions, edge cases, and undocumented workarounds. A replacement is required to handle all of them on day one. Typically, only a fraction of these are visible at scoping time.
2. **Inability to test all edge cases.** The legacy system is the only place where the edge cases are documented (in code). Reproducing the edge cases for testing is itself a multi-year discovery exercise.
3. **Lack of iterative validation with users.** Big-bang replacement projects test in isolation and deliver in a single cutover. Users discover the gaps only at cutover, by which time the project has burned its remediation budget.
4. **Revenue or service-delivery disruption risk.** If the new system has a critical bug at cutover, the consequence is that revenue collection halts, services to citizens are interrupted, and political accountability becomes immediate. Rebuilding sponsor confidence after such a disruption takes years.
5. **Regulatory change during the transition.** A multi-year replacement project must implement every regulatory change in both the legacy and the replacement systems. This consumes resources that were planned for new functionality and lengthens the transition.
6. **Dual-system maintenance during transition.** During the years between the replacement project starting and the legacy retiring, both systems must be maintained. Operational cost roughly doubles.

## 4.3 Symptoms

Symptoms that an organisation is heading into the Big-Bang Replacement Trap:

- The procurement is scoped for full functional equivalence of the legacy system on day one.
- The contract milestones are organised around system delivery, not around capability handover.
- The roadmap shows a single cutover date.
- The plan does not include a documented period of dual-system maintenance.
- The political timeline for delivery is shorter than three years.
- The replacement project's success criteria are stated as features, not as outcomes.
- There is no API layer in front of the legacy system to accept new functionality during the transition.

## 4.4 Mitigations

The GEATDM response is to default to the Strangler Fig pattern (§5) and to design the implementation roadmap around capability handover rather than system replacement. This is the largest single architectural decision in any modernisation programme; it deserves a chapter of its own, and §5 provides it.

Where a big-bang replacement is genuinely the right answer (greenfield deployment, system being replaced has no legacy data, regulatory mandate forces complete reset), the GEATDM response is to apply the following discipline:

1. **Time-bound the project under three years.** Beyond three years, the replacement is structurally at risk regardless of approach.
2. **Phase the cutover by capability, not by date.** Even a "big-bang" project can phase by capability inside the larger envelope, reducing the cutover risk.
3. **Maintain the legacy system to a documented end-of-life date.** The replacement project owns the legacy system's continued operation as a programme deliverable.
4. **Establish independent validation of progress at quarterly stage gates** (Method Guide §13.12 Decision Gates Framework).

---

# 5. THE STRANGLER FIG PATTERN

## 5.1 The pattern in plain terms

The Strangler Fig pattern is named after a tropical plant that grows around a host tree, gradually replaces the host tree's structural function, and outlives the host. Applied to legacy modernisation, the pattern says: do not replace the legacy system. Wrap it with modern interfaces, deflect new functionality to modern components alongside the legacy, and progressively replace components of the legacy only where the legacy genuinely blocks progress. The legacy is "strangled" gradually, not in a single cutover.

The pattern is consistent with PAERA §5.7's wave-based roadmap (Inception → High-priority Use Case → Initial Transformation → Mass-scale Transformation) and with the iterative principle in EA Principle APP-07 (Modularity and Incremental Delivery).

## 5.2 The three tracks

A typical Strangler Fig roadmap runs three parallel tracks. The example below is generalised from TA RA §19.2, where the parallel tracks were Data Platform, EU Accession, and Core Systems Modernisation. The same shape works for any sector.

**Track 1 — Foundation (months 0 to 12).** Stand up the modern foundation that does not require touching the legacy core. Typical Track 1 deliverables:

- An API layer (gateway) wrapping the legacy core, exposing modern REST/OpenAPI interfaces while the legacy continues to run unchanged underneath.
- A modern data platform that ingests from the legacy via change-data-capture or scheduled extracts, providing analytical capability without altering legacy operations.
- The architecture governance function (EA Board, Reference Architecture, capability map).
- A skills assessment and capacity-building programme for the modern technology stack.

Track 1 delivers visible value (analytics, modern APIs for new initiatives) without exposing the legacy core to change risk.

**Track 2 — Time-bound priority work (months 0 to 24, or aligned to a political deadline).** Some categories of work cannot wait for the full transformation: a regulatory deadline, an external compliance requirement (EU accession, international reporting), a politically-committed quick win. Track 2 runs in parallel with Track 1 from day one and uses the modern components produced by Track 1.

**Track 3 — Selective replacement (months 12 to 48).** Once Track 1 has delivered the foundation, the organisation begins to deflect new functionality to modern components built alongside the legacy. Selective replacement of legacy components follows when, and only when, the legacy genuinely blocks new capability. The replacement is component-by-component, not system-by-system.

## 5.3 Phase shape

A typical Strangler Fig roadmap covers four phases over 36 to 48 months:

| Phase | Duration | Focus | Indicative deliverables |
|-------|----------|-------|-------------------------|
| Phase 1 | 0–12 months | Foundation | API gateway over legacy; data platform Bronze/Silver layers; architecture governance live; capacity-building cohort 1. |
| Phase 2 | 12–24 months | Wrap and extend | Gold data products; first modern services running alongside legacy; event bus in operation; new initiatives delivered on the modern side. |
| Phase 3 | 24–36 months | Selective replacement | Highest-value legacy components replaced; legacy front-ends rebuilt; legacy core systems begin to retire on a per-component basis. |
| Phase 4 | 36–48 months | Domain independence | Each architectural domain independently deployable; legacy components retired except where business case justifies retention; organisation operates a modern, modular platform. |

The phase shape is indicative. A particular country, sector, or organisation will adjust the durations against political timelines, budget cycles, and capacity. Phase 1 is rarely shorter than 9 months in practice; Phase 4 is rarely shorter than 12 months.

## 5.4 Decision criteria for selective replacement

Within Phase 3, the organisation must decide which legacy components to replace and in what order. The decision criteria, drawn from TA RA §19.2 and generalised:

| Criterion | Weight |
|-----------|--------|
| Does the legacy component block new capability that the organisation needs? | High (mandatory for replacement) |
| Is the legacy component's underlying technology losing supplier support, or is the support cost rising sharply? | Medium |
| Is the legacy component's failure rate or maintenance cost above defined thresholds? | Medium |
| Does replacement deliver an independent business benefit (cost reduction, performance improvement, user experience improvement)? | Medium |
| Is the replacement effort small enough to fit within a single budget cycle? | Medium |
| Is replacement a precondition for retiring the legacy core? | Low (only relevant in Phase 4) |

A component that scores High on the first criterion is replaced first. A component that scores only Low is left in place; the legacy continues to run for that capability.

## 5.5 What the Strangler Fig does not solve

The Strangler Fig pattern manages the modernisation risk; it does not eliminate the underlying complexity of the legacy. Two cautions:

1. **The API gateway over the legacy is itself a piece of architecture that must be designed and maintained.** A poorly designed gateway becomes the next legacy. The API contracts published through the gateway are the architectural commitment, not the legacy code behind them.
2. **The data model exposed by the modern data platform is not the data model of the legacy.** The data platform's Silver layer normalises the legacy structure into the modern model, and the Gold layer publishes the modern model to consumers. Consumers should not see the legacy structure.

These cautions mean the Strangler Fig pattern is not a way to avoid architectural work; it is a way to do architectural work without high-risk cutovers.

---

# 6. CROSS-TRAP INTERACTIONS

The three traps are independently damaging. They are also mutually reinforcing.

## 6.1 The Bespoke + Vendor-Driven feedback loop

Where in-house architectural capacity is thin (a precondition for both Bespoke and Vendor-Driven traps), the two traps feed each other:

- The Bespoke Trap consumes maintenance capacity that would otherwise be available for governance.
- The Vendor-Driven Trap consumes governance capacity that would otherwise constrain bespoke decisions.

The combined failure mode is an organisation where 70% of code is bespoke (extensive Bespoke Footprint), the bespoke code is largely written by external suppliers under cost-plus contracts (Vendor-Driven Architecture in disguise), and the in-house team operates as procurement administrators rather than as architects.

## 6.2 The Vendor-Driven + Big-Bang trap interaction

A Vendor-Driven Architecture is structurally vulnerable to Big-Bang Replacement once a major vendor reaches end-of-life or end-of-contract. The organisation finds that no single component can be replaced because the vendor's footprint extends across domains. The only available decision is to replace everything.

This is the second-most-common path into the Big-Bang Replacement Trap, after underestimated legacy complexity. The mitigation is the Vendor-Driven mitigation set in §3.4 — by maintaining domain boundaries and multi-vendor strategy from the start, the organisation preserves the option of selective replacement throughout the lifecycle.

## 6.3 The combined failure mode

An organisation that has fallen into all three traps over 15 to 20 years exhibits:

- 60–80% Bespoke Footprint, much of it undocumented.
- A small number of dominant vendors with overlapping product footprints across architectural domains.
- A monolithic legacy core that cannot be selectively replaced.
- A modernisation programme scoped as a multi-year monolithic replacement.
- Political timelines that are too short for the replacement to succeed.

The GEATDM response in this situation is to refuse the framing of the modernisation as a replacement project. The Strangler Fig pattern is applied; the Bespoke Footprint and vendor-neutrality discipline are restored; the EA Board reasserts the domain boundaries. This is slow work; it is slower than the failed replacement projects that motivated it; but it has a track record of producing modern platforms over 4 to 6 years where the failed replacements produced nothing over 5 to 10 years.

---

# 7. HOW GEATDM PHASES ADDRESS THE TRAPS

## 7.1 DISCOVER phase

The DISCOVER phase looks for trap symptoms during organisation classification. The Toolkit TK-04 DISCOVER Summary Template includes three diagnostic items:

- Bespoke Footprint estimate (rough, based on documentation review).
- Vendor concentration and footprint scan (which vendors dominate which capabilities).
- Modernisation history scan (have previous big-bang replacements been attempted; what was the outcome).

Where the DISCOVER findings indicate that one or more traps are active, the practitioner notes this explicitly in the DISCOVER Summary and adjusts the engagement plan to address the trap before substantive ADAPT work begins.

## 7.2 ASSESS phase

The ASSESS phase makes the trap diagnosis precise. Specific ASSESS activities:

- Quantify the Bespoke Footprint using source code analysis (where source is available) or by sampling.
- Map vendor products against the GEATDM capability map (TK-10 Gap Analysis Worksheet) and flag vendor footprint that crosses domain boundaries.
- Document the legacy core's structural complexity and identify the components that block new capability (preparing the inputs for the Strangler Fig roadmap).

The ASSESS phase outputs include a Trap Diagnosis section in the ASSESS Summary Template.

## 7.3 ADAPT phase

The ADAPT phase tailors the Reference Architecture to address the diagnosed traps:

- Where Bespoke Footprint is high, the TO-BE Architecture explicitly substitutes configuration of standard products for as much bespoke code as possible. The Bespoke Footprint reduction target is documented as a TO-BE design parameter.
- Where Vendor-Driven Architecture is the diagnosis, the TO-BE Architecture restores domain boundaries; vendor-product footprints that cross domains are redrawn within domains; multi-vendor strategy is selected where the market supports it.
- Where Big-Bang Replacement was the previous approach, the TO-BE is reframed around the Strangler Fig pattern. The legacy core is treated as a transitional asset, not as the replacement target.

## 7.4 PLAN phase

The PLAN phase sequences the trap mitigations across the roadmap. Specific PLAN activities:

- Track 1 (Foundation) deliverables include the Bespoke Footprint baseline measurement and the EA Board operating cadence.
- Track 2 (priority work) is sized so that no single procurement crosses domain boundaries.
- Track 3 (selective replacement) is sized so that no replacement effort exceeds 12 to 18 months of dedicated team work.
- The roadmap's investment profile (§13.7 Business Case) explicitly costs the trap mitigations: source code analysis tooling, EA Board capacity, multi-vendor procurement administration, capacity-building.

## 7.5 EXECUTE & GOVERN phase

The EXECUTE & GOVERN phase enforces the trap mitigations through governance:

- Bespoke Footprint is reported to the EA Board quarterly. Drift above 25% triggers a review.
- Vendor scope-expansion proposals are referred to the EA Board. Approvals are documented as time-bound dispensations (TK-23).
- Selective-replacement decisions are taken at the EA Board against the criteria in §5.4.
- The EA Compliance Assessment (TK-22) for new projects includes explicit checks against the three traps.

---

# 8. CROSS-REFERENCES

## 8.1 Internal GEATDM cross-references

| Topic | Document |
|-------|----------|
| Public-sector operating constraints | T15 Public Sector Reality |
| EA principles operationalising vendor neutrality | T12 EA Principles (APP-03, APP-05, APP-07) |
| EA Board operating model | T13 EA Governance |
| Bespoke Footprint KPI definition and calculation | Forthcoming Supplement 5 (Sourcing Strategy) |
| Strangler Fig roadmap shape | T58 Method Guide §13 PLAN; PAERA §5.7 |
| Vendor scope-expansion dispensation | TK-23 Dispensation Request |
| Architecture compliance assessment | TK-22 |
| Standards approval | TK-31 |
| ADR template for trap-diagnosed decisions | TK-30 |
| Cross-cutting modules where the architectural traps recur strongly | 08-Interoperability (vendor-driven and big-bang traps in interoperability platforms); 09-DPI (vendor-driven and bespoke traps in foundational pillars) |

## 8.2 External references

- IMF Tax Administration Reference Architecture v0.1 — §3.3 (Bespoke Software Trap), §3.4 (Vendor-Driven Architecture Trap), §17 (Sourcing Strategy), §19 (Implementation Roadmap — Big-Bang Fails, Strangler Fig + EU Accession Dual Track).
- PAERA v1.0 — §5.7 Recommended Roadmap (Inception → High-priority Use Case → Initial Transformation → Mass-scale Transformation), which provides the four-stage shape consistent with the Strangler Fig phasing.
- Martin Fowler, Strangler Fig Application (martinfowler.com/bliki/StranglerFigApplication.html). The original software-engineering description of the pattern, which TA RA §19.2 generalises to public-sector modernisation.

---

# 9. GLOSSARY

| Term | Definition |
|------|------------|
| **Bespoke code** | Code that the organisation owns and maintains itself or through contracted suppliers, rather than code that comes from a maintained third-party product. |
| **Bespoke Footprint** | The ratio of bespoke code to total production code, expressed as a percentage. KPI tracked quarterly; target less than 20% across the platform. |
| **Bespoke Software Trap** | The pattern where every locally-rational decision to build custom code aggregates into an unsustainable maintenance liability. |
| **Big-Bang Replacement Trap** | The pattern where multi-year monolithic replacement projects fail because of underestimated complexity, inability to test edge cases, and dual-system maintenance cost. |
| **Capability map** | The catalogue of organisational capabilities used to classify vendor products, specifications, and architectural decisions. |
| **Domain boundary** | The line between two architectural domains (for example, between Case Management and Data Platform). Defined by the Reference Architecture. |
| **Dispensation** | A time-bound, documented exception to the Reference Architecture, granted by the EA Board. |
| **Selective replacement** | Replacing legacy components one at a time, on a defined criteria, rather than replacing the entire legacy system in a single cutover. |
| **Strangler Fig pattern** | The modernisation pattern in which the legacy is wrapped, deflected, and progressively replaced rather than replaced in one cutover. |
| **Vendor-Driven Architecture Trap** | The pattern where architectural thinking is delegated to vendors, producing a patchwork that reflects vendor commercial interests rather than organisational strategy. |
| **Vendor lock-in** | The condition in which an organisation cannot change a vendor without disproportionate cost or risk, typically because the vendor's product has expanded beyond its core function. |

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
