# GEATDM TOOLKIT SUPPLEMENT — SOURCING STRATEGY

**Document:** GEATDM-Toolkit-Supplement-SourcingStrategy-v1.0
**Part of:** Toolkit (supplement)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

This supplement provides templates TK-32, TK-37, TK-38, and TK-39 referenced in T60 Sourcing Strategy (PLAN phase extension) and in T15 Public Sector Reality and T16 Architectural Traps. On the next consolidated Toolkit release these templates will be merged into GEATDM-WP6-T61-Toolkit; until then this file is the canonical source.

---

## TABLE OF CONTENTS

- TK-32: Legal Touch Points Note
- TK-37: Budget Application Business Case
- TK-38: Procurement Specification Template
- TK-39: Sourcing Decision Matrix (with Bespoke Footprint Calculation)

---

# TK-32: LEGAL TOUCH POINTS NOTE

## Purpose

For each architectural capability or change, identify the legal instruments that must be in force for the capability to operate lawfully. Sequence the legal work alongside the technical work in the implementation roadmap.

## When to use

- During PLAN phase Activity 13.5a (Legal Sequencing).
- Before issuing any procurement that depends on legal authority not yet in place.
- When tabling an architectural change to the EA Board where the change touches a regulated function (data exchange, identity verification, payment, credential issuance).

## Inputs

- Capability description (one-page brief or excerpt from the TO-BE Architecture).
- Existing legal corpus (national constitution, sector-specific Acts, regulations, ministerial decrees, administrative circulars).
- Country legal-drafting calendar (where parliamentary sessions and legal-instrument cycles are documented).
- Legal advisor or in-house counsel (recommended).

## Note template

```
LEGAL TOUCH POINTS NOTE

Capability or change: ________________________________________________
TO-BE Architecture reference: _______________________________________
Date: _______________________________________________________________
Author: _____________________________________________________________
Legal review by: ____________________________________________________

1. CAPABILITY DESCRIPTION (3–5 sentences)

___________________________________________________________________
___________________________________________________________________

2. LEGAL TOUCH POINTS

Tier 1 — Primary legislation (Acts of Parliament)
  Instrument: ________________________________________________________
  Currently in force? Yes / No
  If No, drafting status: ____________________________________________
  Estimated timeline to enactment: ___________________________________
  Sponsoring ministry: _______________________________________________
  Relevant clauses: __________________________________________________

  (Repeat for each primary instrument)

Tier 2 — Secondary legislation (regulations, statutory instruments,
                                ministerial decrees)
  Instrument: ________________________________________________________
  Currently in force? Yes / No
  If No, drafting status: ____________________________________________
  Estimated timeline: ________________________________________________
  Issuing authority: _________________________________________________
  Relevant clauses: __________________________________________________

  (Repeat for each secondary instrument)

Tier 3 — Administrative legislation (circulars, directives,
                                     standard operating procedures)
  Instrument: ________________________________________________________
  Currently in force? Yes / No
  If No, drafting status: ____________________________________________
  Estimated timeline: ________________________________________________
  Issuing authority: _________________________________________________

3. NO-LEGAL-CHANGE PATH

Can the capability be operated without amending the legal framework
(e.g., within the existing mandate of an authority, within an existing
data-sharing agreement, within an existing service charter)?

  Yes [ ]   Describe the basis: _______________________________________
  No  [ ]   Proceed to Section 4.

4. LEGAL EFFORT ESTIMATE

  Primary legislation work:    _____ weeks of legal drafting effort
  Secondary legislation work:  _____ weeks
  Administrative work:         _____ weeks
  Total:                       _____ weeks

  Critical path: _____________________________________________________

5. SEQUENCING IMPLICATIONS

  Earliest plausible Wave that this capability can be delivered in:
  Wave _____ (subject to legal work completing on the timeline above).

  If legal work slips, fallback Wave: _________________________________

6. RISKS

  ___________________________________________________________________
  ___________________________________________________________________

7. SIGN-OFF

  Architect:       _____________________  Date: _________
  Legal advisor:   _____________________  Date: _________
  EA Board chair:  _____________________  Date: _________
```

## Worked example — Once-Only data exchange between Learner Registry and National ID

```
Capability: Once-Only data exchange — when a learner is registered
in the National Learner Registry, the registry pre-fills citizen
identity attributes from the National ID system rather than
re-collecting them.

Tier 1 — Primary legislation
  - Personal Data Protection Act: in force; permits cross-system
    exchange with consent or under specified statutory bases.
  - Education Act: requires amendment to authorise the National
    Learner Registry as a regulated registry. Drafting status:
    not started. Estimated timeline: 12 months.

Tier 2 — Secondary legislation
  - Data Sharing Regulation between MoEYS and PNIA: not in force.
    Estimated timeline: 6 months from Education Act enactment.

Tier 3 — Administrative legislation
  - PNIA Data Access Standard Operating Procedure: in force,
    revision needed to add education sector. Estimated timeline:
    3 months from regulation issuance.

No-legal-change path: No. The Education Act amendment is required.

Legal effort estimate: ~30 weeks of legal-drafting effort across
the three tiers, on the critical path.

Sequencing implication: This capability is a Wave 2 deliverable.
Wave 1 of the roadmap delivers the technical layer (the API and
the data model) without the live data exchange. The exchange
activates once the legal instruments are in force.
```

---

# TK-37: BUDGET APPLICATION BUSINESS CASE

## Purpose

A structured business case for funding a Wave or a procurement from the public-finance-management cycle. Distinct from the general Business Case Template (TK-17), which addresses the EA initiative as a whole; TK-37 is per-Wave or per-procurement and is tailored to multi-year, outcome-based budgeting practice (PAERA §4.5 Budget).

## When to use

- During PLAN phase Activity 13.7a (Budget Application).
- Where Wave 2 onwards funding is not yet secured.
- For donor-funded programmes that require state budget commitment for sustainability.

## Inputs

- TO-BE Architecture and Sourcing Decision Matrix (TK-39).
- Resource Estimation Template (TK-20) for the relevant Wave.
- Country budget cycle documentation (planning calendar, budget framework, fiscal rules).
- Public-finance management law (multi-year budget authority, in-year transfer authority, dedicated-fund mechanisms).

## Business case template

```
BUDGET APPLICATION BUSINESS CASE

Programme: __________________________________________________________
Wave / procurement: _________________________________________________
Fiscal year(s) requested: ___________________________________________
Sponsor: ____________________________________________________________
Author: _____________________________________________________________
Date: _______________________________________________________________

EXECUTIVE SUMMARY (one page)

  Outcome to be funded:
  ___________________________________________________________________

  Total funding requested (multi-year):    _______________
  Year 1 request:                          _______________
  Year 2 request:                          _______________
  Year 3 request:                          _______________

  Funding mechanism (state budget / donor / dedicated fund / mixed):
  ___________________________________________________________________

  Public-sector outcome metrics: _____________________________________
  ___________________________________________________________________

1. OUTCOME

Describe the public-sector outcome that the funding delivers. Use
outcome-based framing (PAERA §4.5 — outcome-based budgeting models).
Avoid input or output framing ("we will hire 10 staff" or "we will
deliver 5 reports").

  Outcome: __________________________________________________________
  ___________________________________________________________________

  Beneficiaries: ____________________________________________________
  Measurement of outcome: ___________________________________________
  Baseline: _________________________________________________________
  Target by year 3: _________________________________________________

2. ALIGNMENT WITH NATIONAL STRATEGY

  Country digital master plan reference: _____________________________
  Sectoral strategy reference: _______________________________________
  Public-financial-management framework reference: ___________________

3. SCOPE OF WORK

  Capabilities funded: ______________________________________________
  Excluded capabilities (and why): __________________________________

4. SOURCING DECISIONS (cross-reference TK-39)

  Build:      _____% of total cost
  Buy:        _____% of total cost
  Configure:  _____% of total cost
  Share:      _____% of total cost

  Bespoke Footprint impact (per T60 §5):
    Current footprint: _____%
    Footprint after this Wave: _____%
    Direction of travel: _____________

5. MULTI-YEAR FUNDING PROFILE

  Year 1 — capital expenditure:      _________
  Year 1 — operating expenditure:    _________
  Year 1 — total:                    _________

  Year 2 — capital expenditure:      _________
  Year 2 — operating expenditure:    _________
  Year 2 — total:                    _________

  Year 3 — capital expenditure:      _________
  Year 3 — operating expenditure:    _________
  Year 3 — total:                    _________

  Total:                             _________

  In-year transfer authority required between line items: Yes / No
  If yes: ___________________________________________________________

6. SUSTAINABILITY COMMITMENT

  Annual maintenance cost (steady state, year 4 onwards): __________
  Source of maintenance funding: _____________________________________

  For donor-funded programmes (per PAERA §4.5): explicit state
  budget commitment for long-term sustainability and maintenance.
  Donor funding ends in: _____________________________________________
  State budget assumes responsibility from: __________________________
  Memorandum of understanding on state-budget commitment: ____________

7. BENEFITS REALISATION

  Year 1 outcomes:    _______________________________________________
  Year 2 outcomes:    _______________________________________________
  Year 3 outcomes:    _______________________________________________
  Steady-state outcomes (year 4 onwards): ____________________________

  Cost per outcome unit (where comparable):
  ___________________________________________________________________

8. RISKS

  Top three risks (cross-reference TK-19):
  1. __________________________________________________________________
  2. __________________________________________________________________
  3. __________________________________________________________________

9. ASSUMPTIONS

  Critical assumptions (in order):
  1. __________________________________________________________________
  2. __________________________________________________________________
  3. __________________________________________________________________

10. APPROVAL

  Sponsor:                  _____________________  Date: _________
  Permanent secretary:      _____________________  Date: _________
  Finance ministry / DG of public finance:
                            _____________________  Date: _________
```

## Notes for use

- The multi-year framing is essential. PAERA §4.5 specifically recommends multi-year budgeting, dedicated platform funds, and outcome-based budgeting; a single-year request that depends on continued funding next year is fragile.
- The sustainability commitment for donor-funded programmes is specifically called out in PAERA §4.5: "Donor-based funded projects should have state budget commitment for long-term sustainability and maintenance." Without this, the architecture is being designed for abandonment.
- Outcomes should be tested for measurability. If an outcome cannot be measured at a reasonable cost, restate it.
- The cost-per-outcome-unit calculation is useful for cross-programme comparison and for benchmarking against PAERA §5.6 sourcing-strategy guidance.

---

# TK-38: PROCUREMENT SPECIFICATION TEMPLATE

## Purpose

A template for public procurement specifications that operationalises the procurement-governance discipline (T16 §3.5) and the vendor lock-in prevention measures (T60 §4). Reduces the surface area for the Vendor-Driven Architecture Trap (T16 §3).

## When to use

- During PLAN phase Activity 13.8a (Procurement Sequencing).
- For every Buy and contracted-Build capability in the Sourcing Decision Matrix (TK-39).

## Inputs

- Sourcing Decision Matrix (TK-39).
- TO-BE Architecture and capability map.
- Country procurement law and standing framework agreements.
- OpenAPI 3.x specifications for the supplier interface.

## Specification template

```
PROCUREMENT SPECIFICATION

Procurement reference: ______________________________________________
Issuing authority:    _______________________________________________
Date issued:          _______________________________________________
Date for submissions: _______________________________________________

1. PROCUREMENT SCOPE — ARCHITECTURAL DOMAIN

This procurement is scoped to a single architectural domain:
  [ ] PDU — policy and policy-instrumentation systems
  [ ] RA — regulatory functions
  [ ] SDA — service delivery operations
  [ ] Cross-cutting (audit, logging, monitoring, security)

Domain description: _________________________________________________

The procurement does NOT include capabilities outside this domain.
Vendors proposing solutions that extend outside this domain will be
evaluated against the architectural-fit criteria in Section 7.

2. OUTCOME-BASED REQUIREMENT STATEMENT

Required outcomes (not features):

  Outcome 1: _________________________________________________________
  Measurement: _______________________________________________________

  Outcome 2: _________________________________________________________
  Measurement: _______________________________________________________

  Outcome 3: _________________________________________________________
  Measurement: _______________________________________________________

3. INTERFACE SPECIFICATION

The supplier's product implements interfaces defined by the
authority's OpenAPI 3.x specifications (attached as Annex A). The
authority owns the OpenAPI specifications. The supplier may change
the implementation behind the API as long as the contract is
honoured. The authority may switch suppliers as long as the new
supplier honours the contract.

OpenAPI specifications attached:
  - _________________________________________________________________
  - _________________________________________________________________

4. LOT STRUCTURE (FRAMEWORK CONTRACT)

This procurement is structured as a framework contract with the
following lots. A supplier may bid for one or more lots.

  Lot 1: ____________________________________________________________
  Lot 2: ____________________________________________________________
  Lot 3: ____________________________________________________________

The authority reserves the right to award lots to different
suppliers. The OpenAPI specifications in Section 3 define the
interfaces between lots.

5. SME PARTICIPATION

Small and medium enterprises and innovative local start-ups are
explicitly invited to bid for one or more lots. Lot 3 has been
sized so that an SME with [N] technical staff can deliver it
without prime-contractor partnership.

6. DATA PORTABILITY CLAUSE

The authority's data remains the authority's property at all
times. On termination of the contract for any reason, the supplier
delivers all of the authority's data in non-proprietary formats
(CSV, JSON, Parquet, or domain-specific open standards) within
30 calendar days. The supplier delivers the database schema and
sufficient documentation for the authority to load the data into
a successor system. The supplier deletes all copies of the
authority's data after delivery, with documented confirmation.

7. ARCHITECTURAL-FIT CRITERIA (50% of evaluation weight)

Vendors are evaluated against:

  7.1 Domain-boundary respect: does the vendor's product stay
      within the architectural domain (Section 1) or attempt to
      expand into adjacent domains?
  7.2 API-first compliance: does the vendor's product expose its
      capabilities through the OpenAPI specifications (Section 3)
      without proprietary integration mechanisms?
  7.3 Multi-vendor compatibility: can the vendor's product be
      operated alongside products from other vendors in adjacent
      domains?
  7.4 Reference architecture alignment: does the vendor's product
      align with the country's published Reference Architecture?
  7.5 Open-standards compliance: does the vendor's product use
      published open standards rather than proprietary alternatives
      where standards exist?

8. OUTCOME EVALUATION CRITERIA (30% of evaluation weight)

Vendors are evaluated against the outcome-measurement statements
in Section 2.

9. COMMERCIAL EVALUATION CRITERIA (20% of evaluation weight)

Total cost of ownership over five years (initial implementation
plus four years of maintenance and licensing). Vendors that
present only year 1 cost are scored conservatively for years 2 to 5.

10. DOCUMENTATION DELIVERABLES

The supplier delivers, as contractual deliverables:

  10.1 Architecture documentation (system context, deployment,
       integration points) at the level of detail in T58 §11
       ASSESS phase outputs.
  10.2 Operational runbooks for routine operations and incident
       response.
  10.3 Configuration documentation: every configurable parameter
       with its purpose and acceptable range.
  10.4 Source code (for contracted bespoke development) under the
       authority's source control, not the supplier's.
  10.5 Test data and test cases under the authority's source control.

A supplier who declines any of these documentation deliverables is
disqualified from this procurement.

11. STANDING SUPPLIER COMMITMENTS

The supplier commits to:
  - Honour the data portability clause (Section 6).
  - Maintain the OpenAPI specifications throughout the contract.
  - Notify the authority of any change in beneficial ownership of
    the supplier within 30 days.
  - Make the supplier's product roadmap available to the authority
    on a confidential basis annually.

12. ADMINISTRATIVE CONDITIONS

  Submission deadline: ______________________________________________
  Evaluation period:   ______________________________________________
  Award date:          ______________________________________________
  Performance period:  ______________________________________________
  Contract value cap:  ______________________________________________
```

## Notes for use

- The 50/30/20 weighting (architectural fit / outcome / commercial) is the GEATDM default. Country procurement law may require different weightings; the EA Board must agree any change before issuance.
- The framework-contract-with-lots structure is the GEATDM default. A single-supplier-single-lot procurement is permitted only with EA Board sign-off and a documented rationale showing why decomposition was not feasible.
- The documentation deliverables in Section 10 are non-negotiable. A supplier that resists is selecting itself out of the procurement.

---

# TK-39: SOURCING DECISION MATRIX

## Purpose

A single matrix that records the Build / Buy / Configure / Share decision for every capability in the TO-BE Architecture, together with the Bespoke Footprint impact and the rationale. The deliverable of PLAN phase Activity 13.4a (T60 §6.1).

## When to use

- During PLAN phase Activity 13.4a, for every capability in the TO-BE Architecture.
- Refresh quarterly through the EA Board cadence.
- Refresh on any major change to the TO-BE Architecture or to the country's DPI maturity.

## Matrix template

| # | Capability | Domain | Default sourcing (per T60 §3) | Decision | Rationale | Build evidence (if Build) | Vendor risk | Bespoke lines (estimate) | Configured lines (estimate) | Platform lines (estimate) |
|---|-----------|--------|-------------------------------|----------|-----------|---------------------------|-------------|--------------------------|------------------------------|-----------------------------|
| | | | | | | | | | | |
| | | | | | | | | | | |

(Columns are populated per capability. Use one row per capability in
the TO-BE Architecture.)

### Column definitions

- **Capability** — name from the TO-BE Architecture's capability map.
- **Domain** — PDU / RA / SDA / cross-cutting / DPI BB.
- **Default sourcing** — the per-domain default from T60 §3.1.
- **Decision** — the actual sourcing decision (Build / Buy / Configure / Share, possibly combined: "Configure base + Build extension").
- **Rationale** — 2–3 sentences explaining why the default was kept or overridden.
- **Build evidence** — if Build was selected: alternatives rejected, ownership plan, exit option (T60 §2.4). Required for EA Board approval.
- **Vendor risk** — for Buy and contracted Build: lock-in risk, supplier concentration, mitigation status. None for Configure (open-source) or Share.
- **Bespoke lines** — estimated lines of bespoke code to be written or extended for this capability.
- **Configured lines** — estimated lines of declarative configuration (forms, workflows, schemas, rules) on top of a maintained platform.
- **Platform lines** — estimated lines of code from the maintained third-party product (commercial product code, open-source library code, low-code platform code).

### Bespoke Footprint calculation

The matrix is the input to the Bespoke Footprint baseline (T60 §5.2). At the bottom of the matrix, sum the three line-count columns and produce the Bespoke Footprint:

```
TOTAL BESPOKE LINES (Σ Bespoke lines):       _____________
TOTAL CONFIGURED LINES (Σ Configured lines): _____________
TOTAL PLATFORM LINES (Σ Platform lines):     _____________
TOTAL ALL LINES:                             _____________

BESPOKE FOOTPRINT = Bespoke / Total = _____ %
TARGET (T60 §5.3 — overall): < 20 %
DELTA TO TARGET: ____________
```

For each Wave of the implementation roadmap, the matrix produces:
- The Bespoke Footprint baseline at the start of the Wave.
- The Bespoke Footprint commitment at the end of the Wave.
- The capabilities that change footprint during the Wave.

## Worked example — partial matrix for Lesotho ASMS

| # | Capability | Domain | Default | Decision | Rationale | Bespoke lines | Configured lines | Platform lines |
|---|-----------|--------|---------|----------|-----------|---------------|-------------------|-----------------|
| 1 | Farmer identity verification | DPI BB | Configure existing Identity BB | Configure | National ID system operational; integration via standard adapters. | 0 | 200 | 50,000 (Identity BB platform) |
| 2 | Subsidy disbursement payment | DPI BB | Configure existing Payment BB | Configure | Mobile-money + central-bank fast payment system available. | 0 | 150 | 80,000 (Payment BB platform) |
| 3 | Farmer registration form | Generic | Configure low-code | Configure on Joget DX 8.x | Generic form/workflow; sector fields configured. | 50 (validation extensions) | 1,200 (form + workflow JSON) | 600,000 (Joget DX) |
| 4 | Eligibility rules engine | Sectoral | Build sector-specific rules | Build | Eligibility logic is policy-defined and country-specific. Evidence: Joget rule engine cannot express the full predicate set; ownership: MAFS IT division; exit: rules expressible in DRL. | 3,500 | 0 | 50,000 (Drools) |
| 5 | Reporting dashboard | Generic | Configure | Configure on the low-code platform | Generic dashboards; sector data sources. | 0 | 300 (dashboard JSON) | 600,000 (Joget DX, shared) |
| 6 | Information mediation to Land Registry, MoF | DPI BB | Configure Information Mediator BB | Configure | Cross-government data exchange. | 0 | 80 (service descriptions) | 100,000 (X-Road) |

Total bespoke = 3,550 lines. Total configured = 1,930 lines. Total platform = 1,480,000 lines.

Bespoke Footprint = 3,550 / 1,485,480 = 0.24% — well below the 20% target.

(This is illustrative. A full matrix for the Lesotho ASMS would have 30+ capabilities; the Bespoke Footprint at the deployed system level is approximately 8% per T60 §3.3.)

## Notes for use

- The line-count estimates are estimates. The point is the discipline of having to estimate, not absolute precision.
- The matrix is a living document. As the implementation proceeds, actual line counts replace estimates.
- Where a Build decision was taken without the §2.4 evidence, the EA Board does not approve the matrix. Return the row for evidence.

---

# TEMPLATE INTEGRATION

When the main Toolkit (GEATDM-WP6-T61) is updated to its v1.1 release, the templates above are intended to be inserted as follows:

| Template | Insert after |
|----------|-------------|
| TK-32 Legal Touch Points Note | TK-04 DISCOVER Summary Template (or reorganise into a new "Cross-cutting" tools section) |
| TK-37 Budget Application Business Case | TK-17 Business Case Template |
| TK-38 Procurement Specification Template | TK-37 |
| TK-39 Sourcing Decision Matrix | TK-12 TO-BE Architecture Template (PLAN-phase tools) |

The Toolkit's Tool Index by Phase will list TK-32 under DISCOVER and PLAN, and TK-37, TK-38, TK-39 under PLAN. The Tool Index by Function will list them under Sourcing Strategy (a new function alongside Stakeholder Engagement from the v1.1 supplement).

---

*GEATDM — Making Digital Transformation Practical*
