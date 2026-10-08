# Dashboard patterns — the school enrolment surface

The examples are set in Progressa, the fictional country of the courses (simulated case: every body,
school and figure is invented).

## The school enrolment dashboard (the first consumer)

Panels:
- **Enrolment by district** — `total_enrolled` by `district`. Bar.
- **Most crowded schools** — schools by learners enrolled, with the pupil-teacher ratio band. Table.
- **Enrolment over census years** — learners enrolled per census year, from `mart_school__enrolment_trend`. Line.
- **Staffing gaps** — schools whose pupil-teacher ratio band is `>60`. Table / big-number.
- **Learners enrolled KPI** — `total_enrolled` headline. Big number.

These reuse one dataset over `mart_school__enrolment_summary` (+ a second over the trend mart). Every
panel reads the dataset's metrics, so the number on the KPI tile and the number in the bar chart can't
disagree.

## Standard enrolment metrics (define once on the dataset)

| Metric / calc | Expression | Kind |
|---|---|---|
| `total_enrolled` | `sum(learners_enrolled)` | metric |
| `school_count` | `count(distinct school_code)` | metric |
| `pupil_teacher_ratio` | `learners_enrolled / nullif(teachers_in_post, 0)` | calculated column |
| `ptr_band` | bucket of the pupil-teacher ratio (<=40 / 41–60 / >60) | usually built in the mart |
| `avg_class_size` | `avg(class_size)` | metric |

Ratio bands belong in the mart (so every consumer sees the same buckets); the dashboard just groups
by the `ptr_band` column. Keep band boundaries in one place — the mart — not in chart filters.

## RBAC (Restricted-by-default)

- Map `rbac_roles` to Superset roles; school-level enrolment can identify small schools and their
  learners, so the dashboard is visible only to the planning roles, not "all users".
- Use row-level security if district officers should see only their own district.
- This mirrors the platform's classification: the consumption surface inherits the data's
  classification, it doesn't relax it.

## Alerts

Each alert in the manifest becomes a Superset Alert: it runs the metric on a schedule and notifies when
the condition/threshold is met (e.g. `total_enrolled` falls below a threshold between terms, or a
freshness/coverage check fails). Declared alerts beat a human remembering to look.

## One dataset, many consumers

The dataset + its metrics are the **single semantic surface** over the mart. The same definitions feed:
- the **Superset dashboard** (this skill),
- the **API** a workflow application calls (`expose-api` reads the same mart/fields),
- the **feeds** of later consumers (for example the examination authority reading the Gold mart).

So define a metric here and it means the same thing everywhere. If a new consumer needs a new metric,
add it to the dataset (or the mart), not to a private copy — that's the `onboard-consumer` pattern.

## Don't hand-roll a charting front-end

Charts read **server-side SQL via the dataset** — never a custom Chart.js/HTML page that scrapes
rendered data or embeds its own queries. The dataset is the contract; Superset renders it. (This is a
common anti-pattern; avoid it from the start.)
