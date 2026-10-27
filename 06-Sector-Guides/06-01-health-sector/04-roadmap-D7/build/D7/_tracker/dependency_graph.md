# Dependency Graph

| Task | Depends On | Notes |
|------|------------|-------|
| 01 context_loading | — | Reads source materials, creates synthesis docs |
| 02 intro_gap_generic | 01 | Uses AS-IS baseline + D6 target summary |
| 03 gap_sector_specific | 01, 02 | Uses same baselines, consistency with generic gaps |
| 04 opportunities_solutions | 02, 03 | Maps solutions to all identified gaps |
| 05 wave1_plan | 03, 04 | Sequences solutions into Wave 1 initiatives |
| 06 waves23_dependencies | 05 | Builds on Wave 1 to define Waves 2-3 |
| 07 investment | 05, 06 | Consolidates costs from all waves |
| 08 governance_org | 01, 05 | Uses D6 governance targets + Wave 1 governance initiatives |
| 09 capacity_risk | 05, 06, 08 | Risks from all waves + staffing plan from governance |
| 10 me_transition | 01, 05, 06 | KPIs from baselines + wave targets |
| 11 frontmatter_appendices | 02-10 | Synthesizes all sections for exec summary + appendices |
| 12 consolidation | 02-11 | Merges all sections, cross-reference check |
| 13 docx_generation | 12 | Formats final document |

## Critical Path
01 → 02 → 03 → 04 → 05 → 06 → 07 → 11 → 12 → 13

## Parallel Opportunities
- Tasks 07 and 08 can run in parallel (both depend on 05+06 but not on each other)
- Task 09 depends on 08, so it follows
- Task 10 can run in parallel with 07-09 (depends on 01+05+06)
