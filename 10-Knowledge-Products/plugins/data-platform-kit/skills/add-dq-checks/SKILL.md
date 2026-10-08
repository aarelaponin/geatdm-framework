---
name: add-dq-checks
description: >-
  Generate the six-dimension data-quality checks for a dbt model per the Data Quality
  Framework — dimension-tagged dbt schema tests (uniqueness, completeness, validity, consistency),
  singular tests (timeliness freshness vs tier SLA, completeness row-budget/zero-row, accuracy
  reconciliation), and the per-dimension threshold config the reconciler scores into the 0–100
  quality badge. Use this WHENEVER the work is to add data-quality tests, gates, or monitoring to a
  model: "add DQ checks to this mart", "test the enrolment marts", "set up quality gates", "add freshness
  / completeness / validity tests", "make the quality badge work", "tag tests by dimension", "apply
  the DQF to this table". Trigger even when the user just says "make sure this data is trustworthy"
  or "gate this before production" — the six-dimension, DQF-tagged test set IS the method here, and
  untagged ad-hoc tests that don't roll up to a badge are the gap this fills. Cross-platform, pure Python.
---

# Add six-dimension DQ checks (DQF-applied)

This skill operationalises the **Data Quality Framework** (`../../references/data-quality-framework/`
from this skill's folder) on a single model. It generates tests that are **tagged by dimension** so the reconciler
can roll them up to the 0–100 quality badge written back to OpenMetadata — the headline Data Quality
Score the programme tracks (its target is set by the data governance board, DQF §3).

The two-tier model from the DQF: **dbt tests are build-time contracts (gates that fail the build);**
OpenMetadata profiling is fitness monitoring (incidents). This skill generates the dbt tier plus the
threshold config the reconciler and OM badge read.

## The six dimensions → what gets generated (and the DQF control)

| Dimension | Generated check | DQC |
|---|---|---|
| **Uniqueness** | `unique` on the grain | DQC-S4-01 |
| **Completeness** | `not_null` on grain + mandatory fields; a zero-row / row-budget singular test | DQC-S4-02, S3-02 |
| **Validity** | `accepted_values` on enums; range test on bounded numerics | DQC-S4-02 |
| **Consistency** | `relationships` on contracted join keys | DQC-S4-03 |
| **Timeliness** | a freshness singular test: newest `_extracted_at` vs the **tier SLA** (Hot 5 min, Warm 1 h, Cold 24 h, Archive 7 d) | DQC-S4-04 |
| **Accuracy** | a cross-source reconciliation singular test (a **stub** to implement — declared vs authoritative aggregate within tolerance) | DQC-S6-01 |

Every test carries `tags: [dq:<dimension>]` and `meta: {dq_dimension, control}` so results are
attributable to a dimension and a DQF control.

## Workflow

### 1 — Write the DQ spec

```yaml
model: mart_school__enrolment_summary
tier: cold                     # census data changes once a year (hot|warm|cold|archive)
description: DQ checks for the school enrolment summary mart, refreshed after each census.
grain: [school_code]           # uniqueness + not_null
mandatory: [school_code, district, learners_enrolled, teachers_in_post]   # completeness (not_null)
ranges:                        # validity (range; needs the dbt_expectations package)
  capacity: {min: 1}
  teachers_in_post: {min: 0, max: 500}
relationships:                 # consistency (referential), one line per parent
  - {column: school_code, to: "ref('int_school__master')", field: school_code}
  - {column: district, to: "ref('stg_pemis__district')", field: district}
freshness: {column: _extracted_at}   # timeliness column (default _extracted_at)
row_budget: {min_rows: 1000}   # completeness: fewer schools than this means a partial load
accuracy:                      # accuracy checks — each generates a stub to implement
  - {name: grant_vs_rate, description: "Capitation grant equals learners enrolled times the year's per-learner rate, within tolerance (a rule across two fields)"}
  - {name: census_vs_register, description: "Learners on the census return vs active learners in the learner register, within tolerance"}
```

A code column takes one more key, `enums:` (`{column: [allowed values]}`, validity by
`accepted_values`); this mart has no code column, so the spec has none. A rule across two fields,
such as the grant against the learners, is written as an `accuracy` entry: the generator gives it
a stub, and the team writes the comparison.

### 2 — Generate

```bash
python3 scripts/gen_dq_checks.py --spec dq.yml --repo <repo-root>   # writes into the repo
python3 scripts/gen_dq_checks.py --spec dq.yml --print              # review on stdout first
```

It writes: `dbt/models/_dq/<model>.dq.yml` (the schema tests), `dbt/tests/<model>__*.sql` (the
freshness, row-budget, and accuracy singular tests), and `quality/thresholds/<model>.yml` (the
per-dimension PoC/Full targets from the DQF — **placeholders to confirm with the Data Owners & the data governance board**).
Pure standard library; uses PyYAML if present, otherwise emits JSON (valid YAML, so dbt still parses it).

### 3 — Wire dependencies, then build & test

The range test uses **`dbt_expectations`** — add it to `packages.yml` and `dbt deps` if you use range
checks (drop the `ranges:` block if you don't want the dependency). Then:
```bash
python tasks.py dbt-build && python tasks.py dbt-test
```
The gating tests fail the build on a breach. The accuracy stub **passes** until you implement it —
treat it as an **open control**, not a green check (it's flagged `not_implemented` in the threshold
config for exactly this reason).

### 4 — Implement accuracy, confirm thresholds, commit

Replace each accuracy stub with the real cross-source reconciliation (e.g. learners on the census
return vs active learners in the learner register, within an agreed tolerance). Confirm the threshold numbers with the Data
Owners. Then commit on the workstation (`repo-scaffold` git workflow):
`quality: add six-dimension DQ checks to mart_school__enrolment_summary`.

## Rules baked in

- **Every test is tagged by dimension.** An untagged test doesn't roll up to the badge — so it
  doesn't count toward the score the programme reports.
- **The accuracy stub is not a pass.** A reconciliation you haven't written is an open control; the
  threshold config records it as `not_implemented` so a green `dbt test` doesn't mislead.
- **Timeliness follows the tier.** Don't hand-set a freshness window that contradicts the table's
  tier — set the tier and let the SLA follow (Hot 5 min … Archive 7 d).
- **Gates vs monitors.** dbt tests here are gates (fail the build); the OpenMetadata profiler does the
  fitness monitoring/incidents — see the DQF for that tier.

## Scripts & references

- `scripts/gen_dq_checks.py` — the generator (schema tests + singular tests + threshold config).
- `references/dq-dimension-map.md` — the full dimension → control → mechanism map, the tier SLAs, and
  how the reconciler turns tagged results into the 0–100 badge.
