# Project Brief: D6 — MoH Future State "To-Be" Architecture

## Project Context
- **Contract**: [contract reference] (ITU-PDGA)
- **Deliverable**: D6 — Documented Future State "To-Be" Architecture for Ministry of Health
- **Organization**: Ministry of Health, Progressa
- **Classification**: PDU (Policy Development Unit) with sector-specific service delivery oversight
- **Architecture Validity**: 2025-2033 (aligned with Digital Master Plan)

## Objective
Produce a comprehensive target architecture document covering all five BDAT+I domains (Business, Data, Application, Technology, Integration), following GEATDM ADAPT phase methodology. The document guides MoH's digital transformation from current fragmented state to an integrated, interoperable health information ecosystem.

## Key Design Principles
1. Build on what works (DHIS2, SPT, eCRVS)
2. OpenHIE-aligned interoperability
3. Realistic and conservative (low-resource, donor-dependent)
4. Two-tier: generic cross-sectoral + health-sector-specific
5. Cloud-first (sovereign for identifiable data)
6. Offline-first for facility-level systems
7. Open-source preference

## Input Materials

### Primary Inputs (project folder)
| File | Location | Content |
|------|----------|---------|
| ea-findings-BDAT-v3.docx | _as-is/ | Comprehensive AS-IS assessment (D5 baseline) |
| e-health-ref-arch-ch1-7.md | _ehealth/ | eHealth Reference Architecture (7 chapters) |
| cloud-plan.docx | _cloud/ | GovStack sovereign cloud strategy |
| research-on-patterns.md | _ext-research/ | OpenHIE, DHIS2, FHIR, cloud patterns |
| ehr-practices.md | _ext-research/ | EHR platforms, MPI, NHIS scaling |
| EHSSP...md | _ext-research/ | Funding landscape |
| MoH-current.md | _ext-research/ | Governance, sustainability, capacity |
| MoH-sectors.md | _ext-research/ | Immunization, LIS, surveillance |

### Framework References (GEATDM-Method-Repository/)
| File | Content |
|------|---------|
| PDU-RA-Complete-v1.0.md | PDU Reference Architecture (base model) |
| Toolkit-v1.0.md | TK-12 through TK-15 templates |

### Project Knowledge (PK)
| File | Content |
|------|---------|
| paera-framework.docx | PAERA reference models |
| PDGA_EA_Framework.md | National EA framework |
| Contract PDF | Deliverable specifications |

## Output Location
`03-target-architecture-D6/build/D6/`

## File Naming
- Task outputs: `D6-S{task_nn}-{description}.md`
- Final consolidated: `D6-MoH-Future-State-Architecture-v1.0.md`
- Final DOCX: `D6-MoH-Future-State-Architecture-v1.0.docx`

## Document Structure (10 major sections)
1. Introduction
2. Architecture Vision
3. Business Architecture
4. Data Architecture
5. Application Architecture
6. Integration Architecture
7. Technology Architecture
8. Enterprise Architecture Core Diagrams
9. Architecture Decision Records
+ Front Matter, Appendices A-E

## Estimated Size: ~60-80 pages
