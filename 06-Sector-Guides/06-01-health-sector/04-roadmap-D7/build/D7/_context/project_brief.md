# Project Brief: D7 — EA Implementation Roadmap for Ministry of Health

## Project Context
This is Deliverable D7 of the Progressa Enterprise Architecture Initiative under World Bank contract [contract reference]. D7 produces the **EA Implementation Roadmap** for the Ministry of Health (MoH), bridging the gap between the current state (D5 AS-IS) and the future state (D6 TO-BE).

## End Goal
A comprehensive, actionable, multi-year (2025-2033) implementation roadmap document (~70-90 pages) that:
- Analyzes gaps between current and target states (generic/cross-sectoral + sector-specific)
- Identifies solutions and opportunities
- Defines a phased 3-wave implementation plan with Wave 1 detailed
- Estimates investment requirements with funding source mapping
- Specifies organizational structure and governance (AS-IS → TO-BE)
- Includes capacity building, risk management, M&E framework
- Provides visual roadmap, dependency maps, and transition architecture diagrams

## Inputs Available

### Primary Sources (in project folder)
1. **D6 Output** (`03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.md`) — Complete target state architecture
2. **D6 Section Files** (`03-target-architecture-D6/build/D6/02_*/ through 08_*/`) — Detailed section outputs
3. **AS-IS Findings** (`_as-is/ea-findings-BDAT-v3.docx`) — Current state assessment
4. **Cloud Strategy** (`_cloud/cloud-plan.docx`) — Cloud phasing and timeline

### Research Files (`_ext-research/`)
5. `research-on-patterns.md` — Timeline/cost benchmarks (18-30 months minimal HIE, 3-5 years multi-system)
6. `ehr-practices.md` — EHR rollout patterns (3-5 years for 30-50 facilities)
7. `EHSSP...md` — EHSSP funding program details (closing Aug 2025)
8. `MoH-current.md` — Governance models, sustainability financing, staffing models
9. `MoH-sectors.md` — SPT→EIR transition, LIS phasing, IDSR modernization patterns

### Reference Architecture (`01-reference-and-research/e-health-reference-architecture/markdown/`)
10. `e-health-ref-arch-ch7.md` — Implementation Maturity Model (Level 1→4 progression)

### Project Knowledge (PK)
11. **PAERA Framework** — Organization classification and reference models
12. **PDGA EA Framework** — Phase 4: Gap Analysis & Roadmap methodology
13. **Contract** (contract-agreement) — Deliverable specifications
14. **GEATDM Toolkit** — TK-16 through TK-20 (Roadmap, Business Case, Phase Definition, Risk Register, Resource Estimation templates)

## Output Location
All outputs to: `04-roadmap-D7/build/D7/`

## File Naming
- Task outputs: `D7-S{task_nn}-{description}.md`
- Final consolidated: `D7-MoH-EA-Implementation-Roadmap-v1.0.md`
- Final DOCX: `D7-MoH-EA-Implementation-Roadmap-v1.0.docx`

## Key Constraints
- Conservative phasing (limited capacity, infrastructure constraints, uncertain funding)
- Every initiative must map to a realistic funding source
- Cross-sectoral dependencies (RDIP, MoDE, Immigration) must be explicit with fallbacks
- Build on existing investments (SPT, DHIS2, EHSSP connectivity, eCRVS)
- Governance front-loaded — everything depends on decision-making capacity
- Sustainability woven throughout (not an afterthought)

## Three Implementation Waves
- **Wave 1 (2025-2026)**: Foundation — Govern, Connect, Register
- **Wave 2 (2027-2029)**: Integration — Exchange, Digitize, Scale
- **Wave 3 (2030-2033)**: Optimization — Analyze, Optimize, Sustain
