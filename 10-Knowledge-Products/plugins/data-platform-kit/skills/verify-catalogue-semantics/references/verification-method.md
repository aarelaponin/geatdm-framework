# Verification method — evidence, ledger, and the gate

## Why this gate exists (the wrong-box lesson)

Picture the failure the gate prevents. A catalogue stub describes a box of the school census return as
"learners enrolled" when it is the **places available** box. An overcrowding indicator is built on that
stub — and flags the wrong schools in every district. The description was never verified against the
form. (The example is set in Progressa and invented; the failure itself is a common one.) That is the whole
reason DRAFT meaning may not drive a mart or a handover: **a wrong description becomes a wrong
number**, and the further downstream it's caught, the more expensive it is.

## Evidence hierarchy (what makes a description VERIFIED)

Use in this order; record which one in the ledger `evidence` field.

1. **Authoritative document or code.** The official form + filling instructions, the system/spec
   document, or the application source that defines the field. For legacy modules, the PowerBuilder
   source (the `legacy-module-to-openmetadata` input) is strong evidence of *use*; the form/spec is
   evidence of *meaning*. Quote the specific field/section.
2. **Data arithmetic.** A stated identity tested on real rows — a total equals the sum of its parts,
   a flag is mutually exclusive, a code is always within a reference set. Use `--check-identity`.
   ≥99% hold → VERIFIED; 90–99% → WEAK (investigate the exceptions before trusting it); <90% → the
   stated meaning is wrong, fix it.
3. **Onboarding profile.** Fill rate, constancy, value range (from `onboard-source`). Empirical, not
   semantic — it tells you a column is e.g. always null or constant (which itself can disprove a
   stated meaning), but it doesn't by itself confirm meaning.

A description with none of these is `to_confirm`, not `verified`. Never invent meaning to clear a row.

## The ledger format

`--emit-ledger` scaffolds one item per table and column:

```yaml
source_yaml: School_Census_OpenMetadata.yaml
items:
  - ref: censusreturn             # table
    kind: table
    status: verified              # verified | to_confirm | draft
    evidence: "school census return form, section A; Data-Owner sign-off"
    verified_by: statistics-unit steward
    date: 2026-11-18
  - ref: censusreturn.crt_total   # <table>.<column>
    kind: column
    status: verified
    evidence: "census return form, box 'Total learners'; data arithmetic: total=boys+girls holds 99.9%"
    verified_by: statistics-unit steward
    date: 2026-11-18
  - ref: learner.lea_sex
    kind: column
    status: to_confirm
    evidence: "meaning unclear — query the Data Owner"
    verified_by: ""
    date: ""
```

`--apply` merges this onto the enrichment, writing a `status` and a `verification` block onto each
entity and stamping `_meta.verification` (coverage %, gate PASS/OPEN).

## Worked example — data arithmetic

The census return form states that the total of learners is the sum of boys and girls. Test it on a
Bronze sample:

```bash
python3 scripts/verify_semantics.py --check-identity --data census_returns_sample.csv \
  --identity "crt_total = crt_boys + crt_girls" --tol 0.01
```

- ~100% hold → the box map is VERIFIED; record "data arithmetic: total=boys+girls holds 99.9% (n=…)".
- A few percent fail → look at the failing rows before trusting it (a late correction? a
  special school? a typing error?). Don't mark VERIFIED on a WEAK result.
- Many fail → the stated identity (hence the description) is wrong; fix the meaning, not the data.

The expression is evaluated per row with column names as variables; only arithmetic
(`+ - * / ( )`) is allowed, so it's safe to run on arbitrary specs.

## Wiring the gate

`--gate` exits non-zero if anything is not VERIFIED. Wire it into:

- **the handover build** — the hand-over package build runs `--gate` on each module's verified enrichment;
  a non-VERIFIED entity blocks the package (DQC-S5-02).
- **the catalogue publish** — publish only the verified YAML; the gate is the pre-publish check.
- **CI** — optionally gate on PRs that touch an enrichment, so DRAFT meaning can't merge into the
  catalogue source.

Default is strict (only `verified` passes). `--allow-to-confirm` is an explicit, logged relaxation
for a partial handover agreed with the steward — use it deliberately, not as the default.

## Relationship to the other catalogue skills

- `legacy-module-to-openmetadata` **produces** the DRAFT enrichment (tables/columns/descriptions).
- `import-schema-to-catalogue` brings the **technical** metadata + reference vocabularies from DDL.
- **this skill** turns DRAFT business meaning into VERIFIED and gates it.
- All three land their output in the repo and commit via the `repo-scaffold` git workflow; the
  catalogue (OpenMetadata) is the published system of record.
