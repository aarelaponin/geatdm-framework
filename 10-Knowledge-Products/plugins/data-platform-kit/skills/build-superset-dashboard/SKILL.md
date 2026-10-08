---
name: build-superset-dashboard
description: >-
  Build the Superset consumption surface over a Gold mart — a dataset (the SQL the dashboard reads,
  with calculated columns and reusable metrics defined ONCE) plus a dashboard manifest (charts, RBAC
  roles, threshold alerts). Use this WHENEVER the work is to build, change, or wire a dashboard,
  chart, KPI tile, or metric for a consumer: "build the school enrolment dashboard", "add a chart of
  enrolment by district", "define the pupil-teacher ratio", "make a KPI tile", "show the most crowded
  schools", "set up an alert when enrolment drops", "dashboard over this mart". Trigger even
  when the user just describes a view they want over Gold data — the dataset-with-metrics pattern
  (one definition reused by every chart) IS the method, and per-chart raw SQL is the drift this
  prevents. The enrolment dashboard is the first; the pattern is reused by every later consumer.
  Cross-platform, pure Python.
---

# Build a Superset dashboard (the consumption surface)

This is the last mile: turning a gated Gold mart into the dashboard the ministry's planners and the
district education offices actually use. It generates two things from one spec:

1. a **Superset dataset** — the virtual dataset (SQL over the mart) plus **calculated columns** and
   **metrics** defined *once* on the dataset, and
2. a **dashboard manifest** — the charts, the RBAC roles, and the threshold alerts.

The reason metrics live on the dataset (not in each chart's SQL): `total_enrolled`,
`pupil_teacher_ratio`, the ratio bands — defined once, every chart uses the same definition, and so
do the API and every feed. A metric that's redefined per chart drifts; one semantic definition is the
platform's rule ("one semantic definition, reused everywhere", principle P6).

## Workflow

### 1 — Write the dashboard spec

```yaml
dashboard: School Enrolment
dataset:
  name: school_enrolment
  mart: mart_school__enrolment_summary    # the Gold mart (schema defaults to gold)
  columns: [school_code, school_name, district, learners_enrolled, teachers_in_post, ptr_band]
  calculated:                              # row-level expressions
    - {name: pupil_teacher_ratio, expression: "learners_enrolled / nullif(teachers_in_post, 0)", description: "Learners per teacher in post"}
  metrics:                                 # aggregate metrics, reused by every chart
    - {name: total_enrolled, expression: "sum(learners_enrolled)", description: "Total learners enrolled"}
    - {name: school_count, expression: "count(distinct school_code)"}
charts:
  - {name: Enrolment by district, type: bar, dataset: school_enrolment, metric: total_enrolled, dimension: district}
  - {name: Most crowded schools, type: table, dataset: school_enrolment, columns: [school_name, learners_enrolled, ptr_band]}
  - {name: Learners enrolled, type: big_number, dataset: school_enrolment, metric: total_enrolled}
rbac:
  roles: [district_officer, emis_manager]
alerts:
  - {name: enrolment drop, dataset: school_enrolment, metric: total_enrolled, condition: "<", threshold: 250000, note: "alert if enrolment falls between terms"}
```
Multiple datasets are allowed (`dataset:` may be a list). Chart `type` ∈ `bar | line | table |
big_number | pie | area`.

### 2 — Generate

```bash
python3 scripts/gen_superset.py --spec dashboard.yml --repo <repo-root>   # writes the assets
python3 scripts/gen_superset.py --spec dashboard.yml --print              # review first
```
Writes `consumption/dashboards/<slug>/dataset_<name>.yaml` (Superset import shape — the dataset, with
calculated columns + metrics) and `dashboard.yaml` (the chart/RBAC/alert manifest). Pure standard
library.

### 3 — Import, lay out, secure, alert

Import the dataset YAML into Superset (set the real `database_uuid` on import — it's a placeholder).
Build each chart in Superset from the manifest's definitions (chart layouts are positional and are
best assembled in the UI; the manifest gives you every chart's dataset, metric, dimension and
columns). Apply the `rbac_roles` as Superset roles / row-level security, and wire each alert as a
Superset Alert on its dataset+metric+threshold.

### 4 — Commit

Commit on the workstation (`repo-scaffold` git workflow): `consumption: add School Enrolment dashboard`.

## Rules baked in

- **Metrics live on the dataset, once.** Don't hand-write the same aggregate in three charts — define
  it as a dataset metric and reference it. Same definition feeds the API and every feed.
- **Charts read the dataset, never raw mart SQL.** The dataset is the single semantic surface over the
  mart; charts compose from it.
- **RBAC is part of the deliverable.** A dashboard without its roles/row-level-security isn't done —
  Restricted-by-default applies to the consumption surface too.
- **Alerts are declared, not remembered.** The "enrolment fell between terms" watch is an alert on
  the manifest, not a person checking daily.

## Scripts & references

- `scripts/gen_superset.py` — spec → Superset dataset(s) + dashboard manifest.
- `references/dashboard-patterns.md` — the enrolment dashboard panels, the standard enrolment metrics,
  RBAC and alert wiring, and how the same dataset feeds `expose-api` and the feed consumers.
