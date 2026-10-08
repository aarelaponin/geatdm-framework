---
name: joget-deploy
description: >-
  Deploy generated Joget DX artefacts (forms, datalists, userviews, workflow packages, plugin JARs, Jasper reports, MD seed data) to a registered Joget instance in the correct dependency order, after a pre-flight cross-artefact validation. Use WHENEVER the user wants to: deploy, import or push a feature or building block, get artefacts onto a Joget instance, load seed or master data, run the pre-flight check, re-deploy a regenerated artefact, promote a slice from DEV to INT, or asks why an import failed or a menu is broken after import. Triggers on "deploy", "import", "push", "install the feature", "load the MD data", "promote", "preflight" — and also whenever a generation batch (Stage 3 of the Joget Delivery Workflow) has just finished and the natural next step is getting it onto an instance. This skill owns the rule that generated artefacts are NEVER hand-edited: fixes go to the spec or the generator skill, then regenerate and re-deploy.
---

# Joget Deploy

Take a feature's `generated/` artefacts onto a running Joget instance: validate
cross-references first, then import in dependency order, seed master data, and
hand off to verification. This is Stage 4 (steps 1–2) of the Joget Delivery
Workflow; acceptance verification afterwards belongs to `joget-db-inspect`.

## Inputs

- A FIS folder (or building-block `generated/` directory) containing any of:
  `forms/*.json`, `datalists/*.json`, `userviews/*.json`, `workflow/*` (XPDL +
  appDefinition map blocks), `plugins/*/target/*.jar`, `reports/*.jrxml`,
  `seed/*.csv`.
- A target instance name, `<your-instance>`, from your instance register
  `<your-instance-register>` (single source of truth for URL, ports, DB —
  written by `joget-instance-setup`; read by the deployment tooling you use,
  for example sdd-kit's `kit/tools/deploy_dx9.py` through its
  `--instances <path>` option).
- The app id + version to deploy into.

## Step 0 — Pre-flight (always, before anything touches the instance)

Run `scripts/preflight_validate.py <generated-dir> [--deployed-forms list.txt]`:

- Collects every **defined** id: form ids + tableNames, datalist ids, userview
  ids, plugin ids.
- Recursively finds every **referenced** id in all JSON artefacts: any
  `formDefId`, `addFormId`, `editFormId`, `datalistId`, `formdefid` key.
- Reports unresolved references. References satisfied by *already-deployed*
  artefacts are allowed via `--deployed-forms` (one id per line; produce it
  from the instance with the SQL in joget-db-inspect §4, or from TRACE.md).
- Flags duplicate ids and form-id/tableName collisions within the batch.

A failed pre-flight stops the deployment. Fix in the **spec**, regenerate, and
re-run — never patch the generated JSON. Workflow-map and plugin-property
references are not yet machine-checked: verify manually against the FIS §4
parameter table and the three `packageActivity*Map` blocks before import.

## Step 1 — Import order (hard rule)

1. **MD lookup forms** (no FK dependencies)
2. **MD seed data** (`seed/*.csv`, one per MD form) — via your deployment
   tooling's loader or a form-data API; verify row counts after load
3. **Independent entity forms**, then **FK-dependent forms**, then **parents
   with FormGrids** (grid references must already exist)
4. **Datalists**
5. **Userviews** (menus must point at now-existing forms/datalists)
6. **Workflow package** (XPDL + activity map blocks; forms it maps must exist)
7. **Plugin JARs** (upload to the instance's plugin directory or Manage
   Plugins; OSGi per joget-plugin-dev; restart only if the platform requires)
8. **Jasper reports** (JRXML + JasperReportsMenu) — push config-as-code as
   part of the userview that carries them (the push step of
   `joget-jasper-report`)

If the FIS declares its own §5 generation order, follow it — it encodes the
same dependency logic with feature-specific knowledge.

## Step 2 — Post-import confirmation (cheap, before real testing)

- Definitions present at the published appVersion (joget-db-inspect §4 query).
- Each userview menu opens without "form/datalist not found".
- MD seed counts match the seed files.
- Plugin appears in Manage Plugins with the expected version.
- Record the deployment in TRACE.md (artefact → instance → date), flip FIS
  status to **Deployed**, then hand to acceptance verification
  (`tests/acceptance.md` via joget-db-inspect).

## Re-deployment and regeneration discipline

- Generated artefacts are immutable outputs. A defect found post-deploy goes:
  FIS spec (or generator skill) → regenerate → pre-flight → re-import. Joget
  import replaces definitions by id, so re-import is the normal path.
- **Schema caution:** changing a field id or tableName on a form with existing
  data orphans the old column/table — flag any such change as a migration, not
  a re-deploy, and plan data movement explicitly.
- Promotions (DEV → INT) re-run the same pipeline against the other instance;
  never copy definitions between instances by DB manipulation.

## DX9 deltas hook

Until each generator skill is validated for DX9, consult your project's
living file of DX9 deltas (for example `DX9-DELTAS.md` at the root of the
project's repository) before import; apply its mechanical post-processing
steps as part of Step 0, and record any new incompatibility discovered during
import there — then fix it in the generator skill, not in the output.


---

## QA-hardening addendum — lessons from an earlier build (2026-06-14)

_Folded in from an earlier build and three rounds of UX review. Supplements the sections named below; where a point sharpens an existing rule, the addendum wins._

Anchored to "Step 1 — Import order (hard rule)", "Step 2 — Post-import confirmation",
"Re-deployment and regeneration discipline".

---

## Step 1 — Import order — ADD: the restart is part of the cycle

> The full DEV cycle is **delete → import → publish → RESTART Tomcat → seed/verify**. Reimported
> **userview AND API definitions are cached** — the running app keeps serving the OLD ones until a
> restart, so both seeding (API data path) and **userview rendering** are stale until then. `tomcat.sh
> restart` is unreliable here: `pkill -f org.apache.catalina.startup.Bootstrap; sleep 8; ./tomcat.sh
> start`, then poll `…/web/json/workflow/currentUsername` for 400/200 before testing.

## Step 2 — Post-import confirmation — ADD: render-verify the right URL
> When confirming a list/menu rendered, use the **menu's real URL**: a form-companion datalist is at
> `/_/<crud customId>` (NOT `/_/<listId>` — that returns a blank 200). A `SqlChartMenu` page loads its
> data via AJAX, so "rendered" = HTTP 200 + ECharts present + zero error; assert the **bound datalist**
> for data, not the chart page.

## Re-deployment and regeneration discipline — ADD: clean-JVM regression
> For a trustworthy regression sweep, **cold-start Tomcat first** (clean JVM). A warm JVM masked a real
> ClickHouse-client poisoning in an earlier build (an engine that passed once then 500'd on the second run
> in the same JVM). Keep a regression runner in your project (for example
> `<project>/scripts/run_regression.sh` with `RESTART=1`) that cold-starts, loads the credentials of the
> external services the app calls from the environment, and runs the full suite; two consecutive green
> cold-start sweeps is the order-independence bar.
