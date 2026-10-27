# Task 05: Output Files

## Primary Output
- `D6-S05-application-architecture.md` — Section 5: Application Architecture (To-Be)

## Content Summary
| Section | Topic | Key Deliverables |
|---------|-------|-----------------|
| 5.1 | Target Application Portfolio Overview | 4-layer organisation, text-based landscape diagram |
| 5.2 | National Health Platform Layer | DHIS2 strengthening, HIE (OpenHIM + components), MPI (OpenCR) with identifier federation |
| 5.3 | Clinical Systems Layer | EHR (OpenMRS) phased rollout, EIR (SPT→DHIS2 Tracker transition), LIS (A-LIS/OpenELIS) |
| 5.4 | Health Administration Layer | e-NHIS scaling + mobile enrollment + CLAIM-it, eCRVS integration flows, eLMIS rollout |
| 5.5 | Surveillance Layer | IDSR+ (DHIS2 Tracker case-based), EBS, CBS |
| 5.6 | Application Modernisation Strategy | 8-system decision table (Retain/Invest/Migrate/Replace/Retire) |
| 5.7 | Application Portfolio Summary Table | 18-row comprehensive reference (system, layer, status, target, platform, integrations, phase) |

## Downstream Dependencies
- Section 6 (Integration Architecture): Uses application portfolio and integration requirements defined here
- Section 7 (Technology Architecture): Uses hosting, infrastructure, and offline requirements defined here
- Section 8 (Diagrams and Decisions): Application landscape diagram formalised here
- Section 9 (Consolidation): Incorporated into final D6 document
- Section 10 (DOCX Generation): Formatted into final Word deliverable

## Quality Checks
- [x] All 8 current systems have modernisation decisions with rationale
- [x] Each application has specific, measurable targets (not vague "improve")
- [x] OpenHIE components clearly described (OpenHIM, MPI/OpenCR, Facility Registry, Terminology Service, SHR)
- [x] EHR rollout is phased and realistic (15–20 facilities first, not all ~90)
- [x] Country examples cited (Kenya, Rwanda, Maldives, Lao PDR, Ghana, Tanzania)
- [x] SPT→EIR transition is gradual with evidence-based milestones
- [x] MPI identifier federation covers 6 identifier types with trust hierarchy
- [x] Offline-first requirement specified for all clinical systems
- [x] FHIR compliance required for all new systems
- [x] 3-phase deployment for all major systems
