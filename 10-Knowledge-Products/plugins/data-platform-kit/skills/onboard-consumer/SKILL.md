---
name: onboard-consumer
description: >-
  Serve a new consumer from the platform the repeatable way — diff its data needs against the current
  Gold marts, then emit a tailored onboarding plan (which gaps to build, which surface to expose, what
  to gate) and the consumer's Definition-of-Done checklist. Use this WHENEVER a new consumer or module
  needs platform data: "onboard the examination authority", "serve the inspectorate", "what does this consumer
  need that we don't have yet", "expose data for this new module", "plan onboarding for a new
  consumer", "can the platform already serve X". Trigger even when the user just names a team/module
  and the data they want — the gap-analysis-then-plan path IS the method, and the rule it enforces is
  that consumers pull from Gold (no bespoke side-pipelines); a missing need becomes a shared mart, not
  a private copy. In the worked example the enrolment dashboard was the first consumer and the
  examination authority's feed is the second. Cross-platform, pure Python.
---

# Onboard a new consumer (one repeatable path)

The platform is comprehensive and serves consumers in sequence — in the worked example, the enrolment
dashboard first, the examination authority (PNEA) second, then the inspectorate, school grants, school
transport and the learner register's feeds. Each is onboarded the **same** way,
and this skill makes that repeatable so the tenth consumer is as smooth as the second:

1. **capture** the consumer's data needs;
2. **diff** them against what Gold already serves (gap analysis);
3. **plan** the build for the gaps and the surface to expose, referencing the other skills;
4. **gate** with the consumer Definition-of-Done.

The rule it encodes: **consumers pull from Gold; nobody gets a side-pipeline.** A need that isn't
served becomes a mart or `int_` model in the shared platform, reused by whoever needs it next — so the
platform gets richer with each consumer instead of sprouting parallel copies.

## Workflow

### 1 — Capture the consumer needs spec

```yaml
consumer:
  name: pnea-exams
  description: PNEA, the examination authority, planning examination centres — the platform's second consumer.
  surface: feed                 # dashboard | api | feed
  freshness: warm               # tier the consumer needs
  writes_back:                  # feed consumers may write outputs back to Gold
    - {mart: mart_exam__results, fields: [school_code, exam_session, pass_rate]}
needs:
  - entity: school
    fields: [school_code, school_name, district]
    metrics: [total_enrolled]
  - entity: staffing
    fields: [school_code, teachers_in_post]
rbac: [pnea_analyst, exam_planner]
```

### 2 — Provide the mart inventory

A YAML of what Gold currently exposes (generate it from the repo's `dbt/models/marts` + `intermediate`,
or maintain it as the platform's served-surface index):

```yaml
marts:
  mart_school__enrolment_summary: [school_code, school_name, learners_enrolled, ptr_band, total_enrolled]
  int_school__master: [school_code, school_name, district, capacity]
  mart_staff__posting: [school_code, teachers_in_post, qualified_share]
```

### 3 — Generate the plan + checklist

```bash
python3 scripts/gen_consumer_plan.py --spec consumer.yml --inventory marts.yml --repo <repo-root>
python3 scripts/gen_consumer_plan.py --spec consumer.yml --inventory marts.yml --print   # review first
```
Writes `consumption/consumers/<name>/onboarding_plan.md` (coverage table + ordered plan + DoD checklist)
and `gap.json` (machine-readable served/missing). Pure standard library.

### 4 — Execute the plan, gate, sign off

Work the plan: close each gap with the named skills (**onboard-source** → **build-dbt-model** →
**add-dq-checks** → **import-schema-to-catalogue** + **verify-catalogue-semantics**), expose the surface
(**build-superset-dashboard** / **expose-api** / a Gold feed), set RBAC, run **production-readiness-check**,
and get sign-off. Commit on the workstation (`repo-scaffold` git workflow):
`consumption: onboard <consumer> (N served, M built)`.

## The three surfaces

- **dashboard** — Superset dashboard over the serving marts (`build-superset-dashboard`).
- **api** — OpenAPI + parameterized SQL for a workflow/app (`expose-api`).
- **feed** — the consumer reads the Gold marts directly (no copy); a **feed** consumer may also
  **write back** (e.g. PNEA writes `mart_exam__results`), which is modelled, DQ'd and verified like any
  other Gold mart, then read by downstream consumers normally.

## Rules baked in

- **Pull from Gold, never a side-pipeline.** A missing need is built into the shared platform, reused
  next time — not copied into the consumer's own store.
- **A new field belongs in the mart/`int_`, not the endpoint.** Don't transform privately in a
  dashboard or API; push it up so the meaning is shared.
- **Write-back is Gold too.** A consumer's outputs (examination results) are a Gold mart with DQ + verified
  catalogue — so the next consumer can trust and reuse them.
- **Same gates as the first consumer.** DQ green, catalogue VERIFIED, RBAC set, readiness PASS — the
  consumer DoD doesn't get relaxed because it's the second (or tenth) consumer.

## Scripts & references

- `scripts/gen_consumer_plan.py` — needs + inventory → gap analysis, plan, DoD checklist, `gap.json`.
- `references/consumer-pattern.md` — the served-surface index, the examination-authority worked example
  (feed + write-back), and how the pattern scales from the first consumer to every later one.
