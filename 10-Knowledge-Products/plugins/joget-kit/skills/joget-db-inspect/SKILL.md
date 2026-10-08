---
name: joget-db-inspect
description: >-
  Inspect any Joget DX application's database (MySQL or PostgreSQL) to assess and verify system state — read-only. Use WHENEVER a question is about what a Joget app's data actually looks like: record counts and state distributions, whether a posting or case reached the expected state, FK integrity between form tables, what a form / datalist / userview / API definition contains, executing acceptance-test SQL checks, or diagnosing "the screen says X — is that what's stored?". Trigger even when the user doesn't say "database" — "did it post", "is it balanced", "how many are in status Y", "verify the records", "run the acceptance checks" all apply. Joget stores everything in its app_fd_ convention with non-obvious column mangling and code-as-key joins; querying it correctly requires the conventions in this skill, not guessed names. Use it for any Joget app, and as the base method when writing an app map for one.
---

# Inspecting a Joget DX application database

Joget DX (8.x/9.x) stores all form data, definitions, and workflow state in its
own relational schema. This skill is the database-agnostic map for reading it
reliably — for state assessment, diagnosis, and **acceptance-test verification**
(the FIS `tests/acceptance.md` SQL checks in the Joget Delivery Workflow).

## How to query

- Prefer a configured **read-only MCP/connection** for the target instance; the
  connection details per instance live in your instance register,
  `<your-instance-register>` (see `joget-instance-setup`; instance name → DB
  engine, `<host>`, port, database).
- **Read-only, always.** Joget owns its schema — never `INSERT/UPDATE/DELETE/ALTER`
  on `app_fd_*` or metadata tables. State changes go through the app, plugins,
  or the deployment tooling, never raw SQL. Treat this as a hard rule when
  proposing actions, too.
- Identify the engine first (MySQL vs PostgreSQL) — it changes identifier
  casing and SQL functions (see below).

## Joget storage conventions (read this first — column names are not obvious)

> **These conventions are source-verified, not folklore.** The Joget Community v9 source is
> public (clone `https://github.com/jogetworkflow/jw-community`; below, `/path/to/jw-community`),
> and the two prefixes below are declared as constants in
> `wflow-core/src/main/java/org/joget/apps/form/dao/FormDataDaoImpl.java`:
> `FORM_PREFIX_TABLE_NAME = "app_fd_"` and `FORM_PREFIX_COLUMN = "c_"` (identical at tags `9.0.7`
> and `9.1.0.1`). The storage layer is entirely Community code, so **everything in this skill is
> checkable against that checkout** — no Enterprise blind spot here, unlike the generator skills.
> When a mapping surprises you, read `FormDataDaoImpl` and the form element's `.java` before
> assuming the database is wrong.
>
> ```bash
> SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
> grep -n "FORM_PREFIX" $SRC/wflow-core/src/main/java/org/joget/apps/form/dao/FormDataDaoImpl.java
> ```

- **Form data tables are `app_fd_<tableName>`** where `<tableName>` is the
  form's `tableName` property (NOT the form id). Form `learnerRegistrationForm` with
  `tableName: learner_registration` → table `app_fd_learner_registration`.
- **Each form field becomes a column `c_<fieldId>`.** Engine difference:
  - **PostgreSQL** lowercases unquoted identifiers → field `registerNumber` becomes
    column `c_registernumber`. When you read camelCase field ids from a form's JSON,
    lowercase + prefix to get the column.
  - **MySQL** preserves the case as created → typically `c_registerNumber`. Verify
    with `SHOW COLUMNS FROM app_fd_<t>` / information_schema before assuming.
- **System columns** on every `app_fd_*` table: `id` (record id, varchar),
  `dateCreated`, `dateModified`, `createdBy`, `createdByName`, `modifiedBy`,
  `modifiedByName`.
- **Everything is stored as text.** Amounts, dates, flags — all varchar/longtext.
  Cast before arithmetic and guard empties:
  - PostgreSQL: `NULLIF(c_amount,'')::numeric`, `COALESCE(...,0)`
  - MySQL: `CAST(NULLIF(c_amount,'') AS DECIMAL(18,2))`
- **The record `id` is often a business code, not a UUID** (code-as-key
  convention, e.g. `LR-000123` from an IdGeneratorField used as PK). FK columns
  in child tables then store the parent's **code**. Check the app map / form
  JSON before joining — never assume UUID.
- **FormGrid children** live in their own `app_fd_*` table with an FK column
  (commonly `c_parentId` or a named FK) back to the parent's `id`.

## Metadata tables (definitions live here, not just data)

| Table | Holds | Key columns |
|-------|-------|-------------|
| `app_form` | form definitions | `formId, name, tableName, json, appId, appVersion` |
| `app_datalist` | datalist definitions | `id, name, json, appId, appVersion` |
| `app_userview` | userview definitions | `id, name, json, appId, appVersion` |
| `app_builder` | API Builder + other builder defs | `id, name, type, json` |
| `api_credential` | API keys | `apiKey, apiId, authType, apiName, ipWhitelist, domainWhitelist` |
| `app_app` | apps + published version | `appId, appVersion, name, published` |
| `app_package` / `wf_process` / `SHARK*` tables | workflow package + runtime state | engine-dependent; see references |

Read a definition by selecting its `json` column (one long string) filtered by
`appId` and the published `appVersion` from `app_app`. This is how you verify
that a deployed artefact matches the generated one.

## Standard assessment moves

Copy-adapt from `references/assessment-queries.md`:

1. **State snapshot** — per-table record counts + status distributions for the
   tables of one building block.
2. **FK integrity** — children whose FK value has no parent row (orphans), and
   parents with zero children where children are mandatory.
3. **Acceptance check pattern** — the FIS test convention: set up via UI/API,
   then assert stored state with SQL (counts, exact values after casting,
   status transitions, audit columns populated).
4. **Definition diff** — compare `app_form.json` (deployed) against the
   generated JSON file (expected) to detect drift / hand edits.
5. **Freshness** — `MAX(dateModified)` per table to see what the app actually
   touched during a test run.

## Writing an app map (per-application companion)

Generic conventions get you 80%; the last 20% is app knowledge. For each
application, maintain a short **app map** using
`references/app-map-template.md`: the pipeline/domain narrative, the table
catalogue (table → role → key columns → join keys), and the **traps** —
stale aggregates, broken columns, code-vs-UUID joins, columns whose meaning
isn't what the name says. When a new building block deploys (Stage 4 of the delivery workflow),
extend its app map in the same commit as TRACE.md.

## Traps that recur across Joget apps

- **Stored aggregates go stale.** Any "summary" table maintained by plugin
  logic can lag or break — compute live from the detail tables when verifying.
- **Numeric/text comparison silently fails.** `c_amount > 100` on a text column
  compares lexicographically on some engines — always cast.
- **`appVersion` matters.** Definitions exist per version; querying the wrong
  version makes a deployed artefact look missing.
- **Deleted forms leave tables behind.** A table existing doesn't mean the form
  is live; cross-check `app_form`.
- **Grid row order is not insertion order** unless the form maintains a sort
  field — never assert "first row" semantics in acceptance SQL.
