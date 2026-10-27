# Dependency Graph

| Task | Depends On | Description |
|------|------------|-------------|
| 01 | - | Context loading — reads all inputs, produces synthesis |
| 02 | 01 | Introduction & Architecture Vision (Sections 1-2) |
| 03 | 01, 02 | Business Architecture (Section 3) |
| 04 | 01, 02 | Data Architecture (Section 4) |
| 05 | 01, 02 | Application Architecture (Section 5) |
| 06 | 01, 04, 05 | Integration Architecture (Section 6) — needs data + app context |
| 07 | 01, 02 | Technology Architecture (Section 7) |
| 08 | 02-07 | Diagrams, Decision Records, Appendices (Sections 8-9 + Appendices) |
| 09 | 02-08 | Consolidation — merge all sections into single document |
| 10 | 09 | DOCX generation — convert consolidated markdown to Word |

## Parallel Execution Opportunities
- Tasks 03, 04, 05, 07 can run in parallel after 01+02 are complete
- Task 06 requires 04 and 05 (integration depends on data and application architectures)
- Tasks 08-10 are strictly sequential

## Critical Path
01 → 02 → [04, 05] → 06 → 08 → 09 → 10
