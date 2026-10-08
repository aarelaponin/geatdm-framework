# The consumer pattern — reference

The examples are set in Progressa, the fictional country of the courses (simulated case: every body,
system and figure is invented).

## Why one repeatable path

The platform's value compounds only if each consumer is served from the **shared Gold layer**, not
from a private pipeline. If every consumer copied its own data, you'd have N drifting versions of "the
school" and N places to fix a bug. The onboarding pattern enforces the opposite: capture needs →
diff against Gold → build any gap into Gold (reused next time) → expose a surface → gate. The enrolment
dashboard was the first run of this; the examination authority's feed is the second; the pattern is
identical.

## The served-surface index (the inventory)

The `--inventory` YAML is the platform's catalogue of what Gold currently serves:

```yaml
marts:
  mart_school__enrolment_summary: [school_code, school_name, learners_enrolled, ptr_band, total_enrolled]
  int_school__master: [school_code, school_name, district, capacity]
  mart_staff__posting: [school_code, teachers_in_post, qualified_share]
```

Keep it current — generate it from `dbt/models/marts` + `dbt/models/intermediate` (column lists from
the model YAMLs), or maintain it as a small index file. It's what lets the gap analysis say "already
served" vs "must build". Intermediate (`int_`) models are included because a golden record like
`int_school__master` is a legitimate serving surface for identity attributes.

## Gap analysis

For each need (field or metric), the tool checks whether any inventory mart exposes a column of that
name:
- **served** → it lists which mart(s) provide it (reuse — do not rebuild).
- **missing** → it becomes a build step, grouped by entity, with the skill chain to close it.

Naming matters: a metric is "served" when a mart exposes it under the same name. This is why metrics
are defined once (on the mart / the dataset) — so "total_enrolled" means the same thing to every
consumer and the gap analysis can match it.

## Worked example — the examination authority (feed + write-back), the second consumer

- **Surface: feed.** PNEA, the examination authority, reads the Gold marts directly to plan
  examination centres (no copy) — it is a consumer of the platform, not a second platform.
- **Needs** (school identity + enrolment + staffing) are mostly already served by the enrolment
  marts and `int_school__master` — so onboarding PNEA is largely *reuse*, which is the point.
- **Write-back:** PNEA's outputs (`mart_exam__results`: school_code, exam_session, pass_rate) are
  modelled as a **Gold mart** with DQ checks and a verified catalogue — so the dashboard and the API
  can read results like any other Gold data, and the pass rate the dashboard shows is the one PNEA
  wrote.
- **Gates:** same as the first consumer — DQ green, catalogue VERIFIED, RBAC (`pnea_analyst`,
  `exam_planner`), production-readiness PASS.

## How it scales

Consumer 3+ (the inspectorate, school grants, school transport…) follows the same spec → gap → plan
→ gate. Each one:
- reuses whatever Gold already serves (the index grows, so later consumers reuse more),
- contributes any gap it needs back into the shared Gold (so it's there for the next consumer),
- gets the same DoD gate.

Bringing the whole estate into Bronze and the catalogue gives the platform its breadth; this pattern
serves each consumer from the shared Gold on top of it. The first consumer is
the hardest; every subsequent one is mostly reuse — which is exactly what a comprehensive platform
should make true.

## Definition of Done (the consumer gate)

`needs-captured · gaps-resolved · surface-exposed · writeback-wired (if any) · rbac-set · dq-green ·
catalogue-verified · readiness PASS · sign-off`. The tool seeds the statuses (needs-captured and
gaps-resolved are computed; the rest start pending). Don't relax it for a "small" consumer — a small
consumer with wrong or ungated data still produces wrong decisions.
