---
name: expose-api
description: >-
  Expose a Gold mart as a read API for a consumer — generate the OpenAPI 3.0 contract and the
  parameterized SQL from one spec, with bearer (an OpenID Connect issuer such as Keycloak) auth and RBAC. Use this WHENEVER the work
  is to publish, design, or change an API over platform data: "expose this mart as an API", "build
  the endpoint the registration workflow calls", "give me the API contract for school enrolment", "add
  a filter parameter to the enrolment API", "OpenAPI for this mart", "how does the workflow read this data".
  Trigger even when the user just says "the workflow needs to read this" — a generated contract +
  parameterized SQL that stay in lock-step IS the method, and hand-written endpoints whose docs drift
  from the served fields are what this prevents. Read-only over Gold; consumers read, they don't
  write. Cross-platform, pure Python.
---

# Expose a Gold mart as a read API

A workflow application (for example a registration service on a low-code platform) and other
consumers read platform data over an API, not by querying the warehouse directly. This skill generates, from one spec, the two artefacts that must agree:

1. an **OpenAPI 3.0 contract** (`<name>_openapi.yaml`) — the paths, query parameters, the 200 response
   schema built from the mart's fields, and bearer (Keycloak) security; the contract consumers code
   against, and
2. **parameterized SQL** (`<name>_queries.sql`) — one bound-parameter SELECT per endpoint; the
   implementation the API layer runs.

Generating both from one spec means the documented fields and the served fields can't drift, and the
SQL is parameterized by construction — never string-built (no injection surface).

## Workflow

### 1 — Write the API spec

```yaml
api:
  name: enrolment
  base_path: /api/enrolment
  auth: keycloak
  gold_schema: gold
  server: https://api.example.org
endpoints:
  - path: /schools
    mart: mart_school__enrolment_summary
    method: get
    description: Enrolment and staffing for one school, or for schools above a size.
    fields:
      - school_code
      - school_name
      - {name: learners_enrolled, type: integer}
      - ptr_band
    filters:
      - {name: school_code, type: string, column: school_code, op: "="}
      - {name: min_learners, type: integer, column: learners_enrolled, op: ">="}
rbac: [emis_reader, district_officer]
```
`fields` accept a bare name (defaults to string) or `{name, type}` (`string|number|integer|boolean|
date|datetime`). Each `filter` becomes an optional query parameter and an optional `WHERE` clause
(`{{param}} IS NULL OR column op {{param}}`), so absent params widen rather than break. A `limit`
parameter (default 100, max 1000) is always added.

### 2 — Generate

```bash
python3 scripts/gen_api.py --spec api.yml --repo <repo-root>   # writes the contract + SQL
python3 scripts/gen_api.py --spec api.yml --print              # review first
```
Writes `consumption/api/<name>_openapi.yaml` and `consumption/api/<name>_queries.sql`. Pure standard
library.

### 3 — Implement against the contract, secure it, test it

Wire the parameterized SQL into the API layer (the platform's service), enforce the `bearerAuth`
(Keycloak JWT) and the `x-rbac-roles` so only the consumer's roles can call it, and validate the
contract (`openapi-spec-validator`, or import into the API gateway / Swagger). The fields the workflow
reads come straight from the mart, so a mart change that drops a field is a contract change — regenerate.

### 4 — Commit

Commit on the workstation (`repo-scaffold` git workflow): `consumption: expose enrolment API (schools)`.

## Rules baked in

- **Read-only over Gold.** Consumers read marts; they don't write back through this API. (Examination
  results etc. are written to Gold by their producer, not by a consumer endpoint.)
- **Contract and SQL from one spec.** Don't hand-edit one without the other — regenerate so docs and
  served fields stay identical.
- **Always parameterized.** Filters are bound parameters; never interpolate user input into SQL.
- **Auth + RBAC are part of the deliverable.** An endpoint without its bearer security and roles isn't
  done — Restricted-by-default applies to the API surface.
- **One semantic surface.** The API reads the same Gold mart (and ideally the same metric definitions)
  the dashboard uses — a number from the API equals the number on the dashboard.

## Scripts & references

- `scripts/gen_api.py` — spec → OpenAPI 3.0 contract + parameterized SQL.
- `references/api-patterns.md` — the spec reference, auth/RBAC wiring, pagination/limits, and how the
  API, the dashboard, and the feed consumers share one Gold surface.
