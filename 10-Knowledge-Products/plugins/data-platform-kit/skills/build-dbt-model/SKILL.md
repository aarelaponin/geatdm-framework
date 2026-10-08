---
name: build-dbt-model
description: >-
  Generate dbt models for the data platform's five-layer medallion from a compact spec — staging (`stg_`),
  the intermediate join / golden-record layer (`int_`), and consumer marts (`mart_`) — each with a
  schema YAML carrying tests, including the join CONTRACT (not-null keys + relationships) on `int_`
  models. Use this WHENEVER the work is to build, add, or change a dbt model: "create a staging
  model for this source table", "build the School-360 / the single school record", "join these
  sources", "build the school enrolment summary mart", "add tests to this model", "scaffold stg_/int_/mart_",
  "model this in dbt". Trigger even when the user just describes a transformation or a join they
  need — the five-layer placement and the contract tests ARE the method, and free-hand SQL that
  re-joins raw sources in a mart is the anti-pattern this prevents. Cross-platform, pure Python.
---

# Build a dbt model (the five-layer medallion)

This skill generates dbt models that obey the platform's modelling rules so the team doesn't have
to hold them all in their head. The rules (from `../repo-scaffold/references/repo-conventions.md`):

- **Bronze → `stg_` → `int_` → `mart_` → Published.**
- **`stg_<source>__<entity>`** — one model per source table; types/cleaning only, **no joins**.
- **`int_<domain>__<concept>`** — the **explicit join layer and golden-record hub**. Every
  cross-source join lives here as a named model, and its join keys are **contract-tested**
  (not-null + `relationships`). In the worked example, the **School-360 is the canonical
  `int_` golden record** (`int_school__master`).
- **`mart_<domain>__<desc>`** — consumer-facing; **composes from `int_`, never re-joins raw
  sources** (that hides the join logic and duplicates it across marts).

Why the `int_` contract matters: when joins are named models with not-null/relationships tests, a
broken or fan-out join fails `dbt test` at build time — not silently in a dashboard a week later.

## Workflow

### 1 — Write the model spec

A small YAML file describes one model. `kind` selects the layer.

**Staging** (`kind: staging`):
```yaml
kind: staging
source: pemis          # bronze source name -> reads {{ source('bronze','pemis__school') }}
table: school
key: school_code
description: One row per school from the PEMIS school table.
columns:
  - {src: sch_code,     as: school_code}
  - {src: sch_name,     as: school_name}
  - {src: sch_capacity, as: capacity,         cast: Int32}
  - {src: sch_grant,    as: capitation_grant, cast: "Decimal(38,2)"}
```

**Intermediate** (`kind: intermediate`) — joins + the golden record + the join contract:
```yaml
kind: intermediate
domain: school
concept: master         # -> int_school__master
key: school_code
description: School-360 golden record joining the PEMIS school, its district and its census return.
base: stg_pemis__school
joins:
  - {model: stg_pemis__district, type: left, "on": "stg_pemis__school.district_id = stg_pemis__district.district_id"}
  - {model: stg_pemis__censusreturn, type: left, "on": "stg_pemis__school.school_id = stg_pemis__censusreturn.school_id"}
select:
  - stg_pemis__school.school_code
  - stg_pemis__school.school_name
  - stg_pemis__school.district_id
  - stg_pemis__district.district
  - stg_pemis__censusreturn.learners_enrolled
relationships:          # the join CONTRACT — generates not_null + relationships tests
  - {column: school_code, to: "ref('stg_pemis__school')", field: school_code}
  - {column: district_id, to: "ref('stg_pemis__district')", field: district_id}
```
Quote the `"on":` key — bare `on` is parsed as a boolean in YAML (the generator tolerates both, but
quoting is clearer).

**Mart** (`kind: mart`) — composes from `int_`:
```yaml
kind: mart
domain: school
desc: enrolment_summary   # -> mart_school__enrolment_summary
key: school_code
description: Enrolment per school for the enrolment dashboard.
from: int_school__master
select: [school_code, school_name, learners_enrolled]
```

### 2 — Generate the model

```bash
# macOS / Linux
python3 scripts/gen_dbt_model.py --spec model.yml --out <repo>/dbt/models
```
```powershell
# Windows
py -3 scripts\gen_dbt_model.py --spec model.yml --out <repo>\dbt\models
```

It writes `<layer>/<name>.sql` and `<layer>/<name>.yml` (the schema file with tests) into the right
medallion directory. Omit `--out` to print to stdout for review first. Pure standard library
(PyYAML used if present).

### 3 — Review, then build and test

Read the generated SQL and YAML. Fill any `TODO` descriptions, confirm the grain and the join keys.
Then:
```bash
python tasks.py dbt-build && python tasks.py dbt-test     # from repo-scaffold's task runner
```
The `int_` relationships/not-null tests enforce the join contract; a fan-out or orphaned key fails
here. Marts should turn green only once their upstream `int_` models do.

### 4 — Commit

Commit on the workstation (the `repo-scaffold` git workflow): `dbt: add int_school__master with
join contract`. **Never hand-edit a generated model** — change the spec and regenerate, or the next
generation silently overwrites your edit.

## Rules baked in (don't fight them)

- **Staging never joins.** If you need a join, it belongs in an `int_` model.
- **Marts compose from `int_`.** A mart that selects from raw/staging and joins is the anti-pattern.
- **Every cross-source join is a contract.** Give it `relationships` so a break fails a test.
- **One golden record per entity.** `int_school__master` is the single School-360; don't
  re-derive school joins in five different marts.

## Scripts & references

- `scripts/gen_dbt_model.py` — the generator (staging / intermediate / mart → SQL + tested schema YAML).
- `references/modelling-patterns.md` — the spec reference, the materialisation/incremental guidance,
  and worked patterns (golden record, enrolment marts, fan-out avoidance).
