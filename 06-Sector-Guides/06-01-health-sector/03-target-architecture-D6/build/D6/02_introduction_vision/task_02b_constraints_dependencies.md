# Task 02b — Write Sections 2.5 and 2.6

## EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- DO NOT ask for confirmation - execute immediately
- DO NOT ask clarifying questions - proceed with best judgment
- ALL outputs MUST be Markdown (.md) format

## Context

The file `D6-S02-introduction-vision.md` exists with Sections 1.1–1.5 and 2.1–2.4 (partially complete).
Task 02a produced `D6-S02-patch-design-decisions.md` with the completed design decisions table.

This task writes the final two subsections of Section 2: Architecture Vision.

## Prerequisites
Read these files:
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md`
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-patch-design-decisions.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_data_key_numbers.md`
- `03-target-architecture-D6/build/D6/_context/project_brief.md`

## Actions

Create `D6-S02-patch-constraints-dependencies.md` containing:

### Section 2.5: Constraints and Assumptions (~3-4 pages)

Organize into a structured narrative with a summary table. Cover these categories:

**Infrastructure Constraints:**
- ~60% national electricity access — implications for offline-first design, UPS/solar requirements
- Single submarine cable (halfway through operational lifespan) — no international connectivity redundancy
- Limited rural broadband/internet coverage — RDIP expanding but timeline uncertain
- Satellite connectivity (operational at some health facilities via EHSSP) — bandwidth and cost limitations

**Human Capacity Constraints:**
- Limited ICT staff at MoH (document actual numbers from D5 findings)
- No dedicated health informatics or EA capacity
- DHIS2 expertise concentrated in few individuals
- Training absorption capacity — cannot deploy multiple new systems simultaneously

**Financial Constraints:**
- Near-total donor dependence for digital health funding
- No dedicated digital health budget line in MoH recurrent budget
- EHSSP (about USD 100–150 million) and RDIP (USD 50M) are time-bound
- Sustainability gap after project funding ends

**Legal and Regulatory Constraints:**
- No data protection law yet (CRVS Bill pending)
- No eHealth legislation or digital health governance framework
- Health data sharing policies undefined
- Cross-border data exchange requirements (REC, RHO) not formally addressed

**Timeline Constraints:**
- RDIP infrastructure delivery timeline (G-Cloud target 2027) creates dependency
- EHSSP closing date and AF3 timeline
- EA architecture validity 2025–2033 but key investments needed in first 3 years

**Assumptions (present as a numbered list with clear labels):**
- Infrastructure assumptions: RDIP delivers G-Cloud by 2027, broadband expansion reaches regional health centers by 2028
- Funding assumptions: EHSSP AF3 extends digital health funding, WHO/GAVI continue technical assistance
- Policy assumptions: Data protection legislation enacted by 2027, digital health governance structure established
- Capacity assumptions: MoH can recruit/retain 3-5 additional ICT staff, training programs sustained
- Technology assumptions: DHIS2, OpenMRS, eCRVS continue active development and community support

### Section 2.6: Dependencies on National/Cross-Sectoral Infrastructure (~2-3 pages)

Structure as a dependency table followed by narrative explanation for each:

| Dependency | Provider | Expected Timeline | Impact if Delayed | MoH Interim Strategy |
|-----------|----------|-------------------|-------------------|---------------------|

**Dependencies to cover:**

1. **RDIP Sovereign Cloud (G-Cloud)** — National data center and cloud platform
   - MoH needs: Hosting for EHR, MPI, HIE, eCRVS health data
   - Expected: 2027
   - Interim: MoH-managed hosting at PDGA or existing infrastructure
   
2. **National Digital Identity Platform** — Unified identity system
   - MoH needs: Patient identity verification, NIN lookup
   - Expected: 2026-2027
   - Interim: eCRVS NIN as primary health identifier with MPI reconciliation

3. **National Broadband Backbone** — RDIP connectivity infrastructure
   - MoH needs: Reliable connectivity to regional health facilities
   - Expected: 2026-2028 progressive rollout
   - Interim: Offline-first design, satellite connectivity (EHSSP), mobile data

4. **Government Service Bus / Interoperability Platform** — National API gateway
   - MoH needs: Cross-ministry data exchange (IFMIS, HRMIS, ProgressaPay)
   - Expected: 2027-2028
   - Interim: Point-to-point integrations, MoH-managed OpenHIM for health sector

5. **ProgressaPay / National Payment Platform** — Digital payment processing
   - MoH needs: Health insurance premium collection, provider payments
   - Expected: Already operational but limited adoption
   - Interim: e-NHIS direct banking integration, mobile money partnerships

6. **National Data Protection Framework** — Legal basis for data sharing
   - MoH needs: Legal authority for health data exchange, patient consent framework
   - Expected: 2027 (legislation timeline uncertain)
   - Interim: Ministerial data sharing protocols, MoH-internal data governance framework

Conclude with a paragraph explaining the **dual-mode architecture** concept: the target state that leverages all RDIP platforms, and the interim state that operates independently while RDIP components are delivered.

## Deliverables
- [ ] `02_introduction_vision/D6-S02-patch-constraints-dependencies.md`

## Completion Criteria
- Section 2.5 covers all five constraint categories with specific Progressa numbers
- At least 10 clearly labeled assumptions
- Section 2.6 dependency table has 6 entries with all columns filled
- Each dependency has narrative explanation of impact and interim strategy
- Dual-mode architecture concept clearly explained
- ~5-7 pages total for both sections

## Writing Guidelines
- Be specific — use actual numbers, dates, system names from Progressa context
- Constraints should be stated matter-of-factly, not as excuses
- Assumptions should be realistic and testable
- Dependencies should show that the architecture is designed to work regardless of RDIP timing
- Professional tone for World Bank/government audience
