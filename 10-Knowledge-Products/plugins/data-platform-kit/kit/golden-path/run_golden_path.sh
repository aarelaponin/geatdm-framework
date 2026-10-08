#!/usr/bin/env bash
# Golden path: run the whole skill chain on the bundled Progressa fixtures to build a worked platform repo.
# Pure Python; no DB needed (generation is offline / Track A).
# Simulated case: Progressa is a fictional country; every source, table and figure is invented.
#
# Writes to an output folder: the first argument, or out/ beside this script. The committed
# example (platform-repo/ and readiness.yml beside this script) is never written over; to refresh
# it, run into an empty folder and copy that folder's platform-repo/ and readiness.yml over it.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SK="$HERE/../../skills"
IN="$HERE/inputs"
OUT="${1:-$HERE/out}"
mkdir -p "$OUT"
OUT="$(cd "$OUT" && pwd)"
if [ "$OUT" = "$HERE" ]; then
  echo "refusing to write over the committed example in $HERE; name another folder" >&2; exit 2
fi
REPO="$OUT/platform-repo"
PB="${PB_MODULE:-$HERE/fixtures/school-census/census.pbl}"
INV="${PB_INVENTORY:-$HERE/fixtures/school-census/pemis_inventory.yaml}"

py() { python3 "$@"; }

echo "== 1. repo-scaffold =="
py "$SK/repo-scaffold/scripts/scaffold_repo.py" --path "$REPO" --name progressa-emis-data-platform >/dev/null

echo "== 2. onboard-source: Bronze DDL (Decimal(38,s) money-widening) =="
py "$SK/onboard-source/scripts/gen_bronze_ddl.py" --schema "$IN/schema_pemis.json" --out "$REPO/ingestion/pemis/" >/dev/null

echo "== 3. import-schema-to-catalogue: dbt sources + technical metadata + reference vocabulary =="
py "$SK/import-schema-to-catalogue/scripts/import_schema.py" --schema "$IN/schema_pemis.json" --repo "$REPO" >/dev/null
py "$SK/import-schema-to-catalogue/scripts/import_schema.py" --vocab --data "$IN/learner_status.csv" \
   --code-col code --label-col label --name learner_status --repo "$REPO" >/dev/null

echo "== 4. legacy-module-to-openmetadata: recover the School Census module's semantics (DRAFT) =="
if [ -f "$PB" ]; then
  py "$SK/legacy-module-to-openmetadata/scripts/extract_pb_tables.py" \
     --source "$PB" --inventory "$INV" --out "$REPO/catalogue/module-semantics/" --module-name School_Census >/dev/null
else
  echo "   (module source not found at \$PB — skipping; set PB_MODULE to enable)"
fi

echo "== 5. build-dbt-model: stg_ -> int_ (golden record, join contract) -> mart_ =="
for spec in model_stg_pemis_school model_stg_pemis_district model_stg_pemis_censusreturn model_int_school_master model_mart_school_enrolment_summary; do
  py "$SK/build-dbt-model/scripts/gen_dbt_model.py" --spec "$IN/$spec.yml" --out "$REPO/dbt/models" >/dev/null
done

echo "== 6. add-dq-checks: six-dimension DQ on the mart =="
py "$SK/add-dq-checks/scripts/gen_dq_checks.py" --spec "$IN/dq_mart_school_enrolment.yml" --repo "$REPO" >/dev/null

echo "== 7. build-superset-dashboard + expose-api: consumption surfaces =="
py "$SK/build-superset-dashboard/scripts/gen_superset.py" --spec "$IN/dashboard_enrolment.yml" --repo "$REPO" >/dev/null
py "$SK/expose-api/scripts/gen_api.py" --spec "$IN/api_enrolment.yml" --repo "$REPO" >/dev/null

echo "== 8. onboard-consumer: the examination authority's feed (gap analysis + plan) =="
py "$SK/onboard-consumer/scripts/gen_consumer_plan.py" --spec "$IN/consumer_pnea.yml" --inventory "$IN/mart_inventory.yml" --repo "$REPO" >/dev/null

echo "== 9. production-readiness-check: add CI + runbook, then gate =="
mkdir -p "$REPO/.github/workflows" "$REPO/ops/runbooks"
printf 'name: ci\njobs:\n  test:\n    steps: [dbt test]\n' > "$REPO/.github/workflows/ci.yml"
printf '# Deploy runbook\n## Rollback\nRevert the release tag and redeploy the previous build; verify DQ gates green.\n' > "$REPO/ops/runbooks/deploy.md"
py "$SK/production-readiness-check/scripts/prodcheck.py" --emit-manifest -o "$OUT/readiness.yml" >/dev/null
# fill attestations pass (a demo "ready" release); the repo is named relative to the manifest
python3 - "$OUT/readiness.yml" <<'PY'
import sys,yaml
m=yaml.safe_load(open(sys.argv[1])); m["repo"]="platform-repo"; m["release"]="enrolment-v1.0-golden-path"
for v in m["attestations"].values(): v.update(status="pass",evidence="golden-path demo",signed_by="example",date="2026-10-08")
yaml.safe_dump(m,open(sys.argv[1],"w"),sort_keys=False)
PY
py "$SK/production-readiness-check/scripts/prodcheck.py" --check --manifest "$OUT/readiness.yml" --report "$REPO/ops/readiness_report.md" || true

echo
echo "== DONE — worked platform repo at: $REPO =="
