# Task 02a — Complete Design Decisions Table (DD-05 through DD-12)

## EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- DO NOT ask for confirmation - execute immediately
- DO NOT ask clarifying questions - proceed with best judgment
- ALL outputs MUST be Markdown (.md) format

## Context

The file `D6-S02-introduction-vision.md` already exists with ~43KB of content covering:
- ✅ Front Matter (Document Control, Executive Summary, Abbreviations)
- ✅ Section 1: Introduction (1.1–1.5 complete)
- ✅ Section 2.1: Strategic Context and Drivers (complete)
- ✅ Section 2.2: Architecture Principles (HP-01 through HP-10, complete)
- ✅ Section 2.3: Target State Vision Statement (complete)
- ⚠️ Section 2.4: Key Design Decisions — **INCOMPLETE** (DD-01 through DD-04 complete, DD-05 cut off mid-sentence)
- ❌ Section 2.5: Constraints and Assumptions — **MISSING**
- ❌ Section 2.6: Dependencies on National/Cross-Sectoral Infrastructure — **MISSING**

## Prerequisites
Read these files:
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md` (read the FULL file, especially the last 200 lines to see where it was cut off)
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_data_key_numbers.md`
- `03-target-architecture-D6/build/D6/_context/project_brief.md`

## Actions

1. Read the existing `D6-S02-introduction-vision.md` file, focusing on where DD-05 is cut off
2. Create a **continuation file** called `D6-S02-patch-design-decisions.md` containing:

### Content to Generate

**Complete DD-05** (Electronic Immunisation Registry) — pick up exactly where the text was cut off. The decision is "Phased transition from SPT to DHIS2 Tracker EIR over 3–5 years." Complete the rationale column.

**Write DD-06 through DD-12** as rows in the same table format. Required decisions:

| ID | Decision Area | Guidance |
|----|--------------|----------|
| DD-06 | Disease Surveillance Platform | DHIS2 Tracker for case-based IDSR, moving from ~90% paper-based to electronic. Reference Rwanda/Tanzania examples. |
| DD-07 | Health Insurance Scaling Strategy | e-NHIS modernization from 15,000–20,000 to 60,000+ beneficiaries, mobile enrollment, offline claims. Reference Ghana CLAIM-it. |
| DD-08 | Laboratory Information System | A-LIS strengthening vs replacement, DHIS2 integration, LOINC adoption. |
| DD-09 | Health Supply Chain (eLMIS) | OpenLMIS or DHIS2 Logistics module for drug supply chain management, replacing SMS for Health. |
| DD-10 | Health Data Standards | ICD-11, LOINC, SNOMED CT (subset), ATC — which standards for which use cases. |
| DD-11 | Infrastructure Hosting Model | Sovereign cloud (G-Cloud) for identifiable data, hybrid for analytics. Interim vs target hosting. |
| DD-12 | Integration Standard | FHIR R4 as target, ADX for aggregate DHIS2 flows, FHIR Façade pattern for legacy systems. |

Each row must follow the exact same format as DD-01 through DD-04:
- **Options Considered**: List 2-4 realistic options with (a), (b), (c) labels
- **Decision**: Bold the chosen option
- **Rationale**: 3-5 sentences with specific Progressa numbers and African country evidence

## Deliverables
- [ ] `02_introduction_vision/D6-S02-patch-design-decisions.md`

## Completion Criteria
- All 8 remaining design decisions (DD-05 completion + DD-06 through DD-12) are written
- Each has options considered, a clear decision, and substantive rationale with evidence
- Progressa-specific numbers are used (not generic placeholders)
- Total: at least 12 design decisions when combined with existing DD-01 through DD-04

## Writing Guidelines
- Match the tone and depth of DD-01 through DD-04 already in the document
- Reference specific systems, numbers, and constraints from Progressa context
- Cite comparable African implementations where relevant
- Professional tone for World Bank/government audience
