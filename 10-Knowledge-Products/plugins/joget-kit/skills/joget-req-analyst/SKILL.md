---
name: joget-req-analyst
description: >
  Analyse business requirements for completeness and transform them into
  implementation specs for Joget DX 8.x development. Use this skill whenever
  the user provides requirements documents, entity definitions, screen specs,
  user stories, or any business analysis artefact and wants to build it in
  Joget. Triggers on: "analyse requirements", "is this spec complete",
  "transform requirements to Joget spec", "what forms do I need", "convert
  entity model to Joget", "generate form spec from requirements",
  "what plugins do I need for this", "produce the FIS", "feature implementation
  spec", "build the traceability table", "write the acceptance tests for this
  feature", or any request to go from business requirements to a Joget
  implementation plan or a generation-ready feature spec (Stage 2 of the Joget
  Delivery Workflow).
---

# Joget Requirements Analyst Skill

Analyse business requirements for completeness, flag gaps, ask targeted
clarifying questions, then produce structured implementation specs that feed
directly into the generation skills (`joget-form-gen`, `joget-datalist-gen`,
`joget-userview-gen`, `joget-workflow-gen`, `joget-plugin-dev`,
`joget-jasper-report`) — including, when working inside the Joget Delivery
Workflow, the FIS head document (Output F) and acceptance tests (Output G).

---

## Input Formats Accepted

- **YAML entity model** (`03-entities.yml` style — attributes, enums, relationships)
- **YAML screen spec** (`05-screens.yml` style — ui_screens with data_attributes)
- **Natural language** user stories or business rules
- **Mixed** — any combination of the above
- **Existing Joget app** — analyse a JWA export against requirements

Accept any or all of these. Extract as much as possible before asking questions.

---

## Protocol

### Step 1 — Parse and Inventory

Read all provided requirements. Build an internal inventory:

**Entities identified:**
- Name, attributes, attribute types, enums, relationships

**Screens identified:**
- Screen name, purpose, users, fields shown/captured

**Relationships identified:**
- Source → Target, cardinality (one-to-many, etc.), FK field

**Joget mapping candidates:**
- Which entities/screens become Joget **forms**
- Which become **master data (MD) lookup forms**
- Which require **custom plugins**
- Which require **workflow**

### Step 2 — Completeness Analysis

Run every check in `references/completeness-checks.md`. Flag every gap.

Do NOT ask all questions at once. Group gaps into:
1. **Blockers** — must be resolved before any spec can be generated
2. **Important** — needed for a complete spec, but can default if not answered
3. **Decisions** — implementation choices that affect the spec

Present blockers first. Use defaults for important gaps where reasonable
(document the default used). Offer options for decisions.

### Step 3 — Clarification Round

Ask only the blocker questions in a single message. Wait for answers.
Then proceed with defaults + documented assumptions for the rest.

### Step 4 — Generate Implementation Specs

Produce the full set of output documents described in Section 3 below.
Write each as a separate artifact or file. When the input is an FR slice from
a requirements module (FR tables with MoSCoW, acceptance criteria, business
rules, [Configurable] markers), additionally produce Output F (FIS head) and
Output G (acceptance tests) — these two are what make the spec gateable at G2
of the delivery workflow.

### Step 5 — Validate Against Joget Constraints

Before finalising, run the Joget-specific constraint checks in
`references/joget-constraints.md` to catch implementation problems early.

---

## Section 2 — Joget Mapping Rules

### Entity → Form or Lookup

| Pattern | Joget artefact |
|---------|---------------|
| Entity with 2-4 fields (code + name + optional description) | MD.xx lookup form |
| Entity with 5+ fields, complex attributes | Main entity form |
| Entity that is a child of another (FK + own fields) | Child form (used in FormGrid) |
| Entity with one-to-many children | Parent form + FormGrid pointing to child form |
| Junction table (many-to-many) | Intermediate form with two FK HiddenFields |
| Enum with ≤10 static values | Static SelectBox options (no lookup form) |
| Enum with >10 values or that may grow | MD.xx lookup form |
| Enum with hierarchical values (category → subcategory) | Two MD.xx forms with cascade |

### Field Type Mapping

| Requirement type | Joget element |
|-----------------|---------------|
| string, text, name | TextField |
| long text, description, notes | TextArea |
| integer, decimal, amount | TextField with `storeNumeric: true` + `type: double/integer` validator |
| boolean, flag | CheckBox (single option, value `"true"`) |
| date | DatePicker |
| datetime | DatePicker (note: Joget stores as date string; time requires custom handling) |
| enum (static ≤10 values) | SelectBox with static options OR Radio (≤4 values) |
| enum (dynamic/lookup) | SelectBox with FormOptionsBinder |
| file, document, photo | FileUpload |
| UUID auto-generated PK | IdGeneratorField (format: `PREFIX-??????`) |
| UUID FK reference | HiddenField (stores ID) + optional LookupFieldElement (displays label) |
| GPS coordinates (point) | Two HiddenFields (lat + lon), or TextField |
| GPS polygon / boundary | GisPolygonCaptureElement (requires a GIS capture plugin; custom, not part of Joget) |
| computed/derived | CalculationField (numeric) or ConcatFieldElement (string) |
| json blob | TextArea (store as JSON string) — or flag for custom plugin |
| array / string[] | Comma-separated TextField, or child FormGrid |
| password | PasswordField |
| system audit (created_at, updated_by, etc.) | HiddenField or omit (Joget manages `dateCreated`, `createdBy` automatically) |
| uuid (system-managed PK) | Joget auto-generates `id` — IdGeneratorField for human-readable IDs |

### Relationship → Joget Implementation

| Relationship | Joget implementation |
|-------------|---------------------|
| One-to-one | Sub-form fields on same form OR separate form with FK HiddenField |
| One-to-many | Parent form + FormGrid → child form (FK HiddenField in child) |
| Many-to-many | Two FK HiddenFields in a junction child form, inside a FormGrid |
| Self-referencing | Same form with a parent FK SelectBox/HiddenField |
| Cascade dropdown (A → B) | SelectBox B with `extraCondition: "parent_id=#fieldA#"` |

### What Needs a Custom Plugin

Flag these for `joget-plugin-dev`:

- **Computed fields that span multiple forms** (CalculationField only handles same-form fields)
- **Cross-entity validation** (e.g., check FK uniqueness, date range conflicts)
- **Workflow-triggered actions** (e.g., auto-create child records on parent save)
- **External API calls** on form save/load
- **Complex eligibility rules** across many entities
- **Batch processing** (e.g., nightly enrichment jobs)
- **Custom ID generation** with complex formats or external sequences
- **File processing** (parse CSV, generate PDF, etc.)

---

## Section 3 — Output Documents

Produce all of the following. Use the exact formats shown so the downstream
skills (`joget-form-gen`, `joget-plugin-dev`) can consume them directly.

### Output A — Master Data Catalogue

List all MD.xx lookup forms needed.

```markdown
## Master Data Forms Required

| ID | Form ID | Name | Fields | Source |
|----|---------|------|--------|--------|
| MD.01 | mdLanguage | Language of Instruction | code, name | Entity: language enum |
| MD.02 | mdDistrict | District | code, name, region | Screen: district dropdown |
| MD.03 | mdSchool | School | code, name, district | Entity: Learner.school |
...

**Cascade relationships:**
- mdSchool.district → mdDistrict (district first)
- mdDistrict → mdSchool (school filtered by district)
```

### Output B — Form Inventory

List every Joget form with its role and dependencies.

```markdown
## Form Inventory

### Main Forms
| Form ID | Name | Table | Source entity | Parent form | Child grids |
|---------|------|-------|--------------|-------------|-------------|
| learnerRegistration | 01.01 - Learner Registration | learnerRegistration | Learner | - | guardianForm |
| guardianForm | 01.01-1 - Guardian | learner_guardians | Guardian | learnerRegistration | - |

### Build order (dependency sequence):
1. All MD.xx lookup forms first
2. Then independent entity forms
3. Then forms with FK dependencies
4. Then parent forms with grids last
```

### Output C — Form Specs (joget-form-gen input)

One YAML spec per form, ready to feed to `joget-form-gen`.

```yaml
# File: specs/F01.01-learnerRegistration.spec.md
form:
  id: learnerRegistration
  name: "01.01 - Learner Registration"
  table: learnerRegistration
  description: "Learner personal information and identification"

sections:
  - label: "Identification"
    columns: 2
    fields:
      - id: registerNumber
        type: id_generator
        label: "Register Number"
        format: "LR-??????"
        envVariable: "learnerCounter"
        required: false

      - id: givenNames
        type: textfield
        label: "Given Names"
        maxlength: "100"
        required: true

      - id: familyName
        type: textfield
        label: "Family Name"
        required: true

      - id: dateOfBirth
        type: date
        label: "Date of Birth"
        required: true

      - id: gender
        type: radio
        label: "Gender"
        static_options:
          - value: "male",   label: "Male"
          - value: "female", label: "Female"
          - value: "other",  label: "Other"
        required: true

      - id: school
        type: select
        label: "School"
        lookup:
          formDefId: "mdSchool"
          idColumn: "id"
          labelColumn: "name"
          addEmptyOption: true
        required: true

  - label: ""
    columns: 1
    fields:
      - id: parentId
        type: hidden
        label: "parentId"
        useDefaultWhenEmpty: true

# OPEN QUESTIONS:
# Q1: Is a transfer letter required for a learner entering grade 1?
# Q2: Should languages spoken at home be a multi-select lookup or free text?
# ASSUMPTIONS:
# A1: created_at/updated_at omitted — Joget manages dateCreated/dateModified automatically
# A2: user_id stored as HiddenField, set by workflow
```

### Output D — Plugin Requirements

For each identified custom plugin need:

```markdown
## Plugin Requirements

### Plugin 1: Duplicate Learner Check
**Type:** ApplicationPlugin (workflow process tool)
**Trigger:** On learnerRegistration form save (status = SUBMITTED)
**Logic:**
- Load learners with the same PNIA service identifier, or the same names and date of birth
- Score each match against the registry's matching rules (configurable)
- Write the result to learnerRegistration.duplicateFlag and duplicateNotes for the registrar of PLR

**FormDataDao reads:**
- `learnerRegistration` WHERE pniaServiceIdentifier = registration.pniaServiceIdentifier
- `learnerRegistration` WHERE familyName, givenNames, dateOfBirth match
- `mdSchool` WHERE id = registration.school

**FormDataDao writes:**
- `learnerRegistration`: duplicateFlag, duplicateNotes, matchedRegisterNumber

**Complexity:** Medium — fuzzy matching on names
**Plugin ID:** DuplicateLearnerCheck

---

### Plugin 2: ID Generator with External Sequence
**Type:** FormLoadBinder
**Trigger:** On learnerRegistration form load (new record)
**Logic:** Call external registry API to get next sequence number
**Complexity:** Medium
```

### Output E — Open Questions

Structured list of all gaps requiring human input before full spec is final.

```markdown
## Open Questions

### BLOCKERS (must answer before proceeding)
1. **Transfer letter**: Is a transfer letter required for every learner who
   transfers, or only for a transfer during the school year? (Affects whether
   the documents screen asks for it under a determinant or always)

2. **Offline support**: Will school staff register learners offline on tablets?
   (Affects whether forms need Joget's offline capabilities or a separate
   mobile app — changes entire architecture)

### IMPORTANT (will use defaults if not answered)
3. **Register number format**: What format for the auto-generated register number?
   Default: `LR-??????` (e.g. LR-000001)

4. **Enum size for schools**: ~300 schools expected, or thousands?
   Default: Using MD.xx lookup form (dynamic) — change to static if <10 values

### DECISIONS (your preference)
5. **Guardians grid**: Show all fields inline in the parent learner form,
   or open a popup sub-form on row click?
   Default: Popup sub-form (FormGrid standard behavior)

6. **Duplicate check**: Manual check by the registrar of PLR,
   or automated matching?
   Default: Flagged for custom plugin — confirm before plugin spec is written
```

### Output F — FIS Head (feature traceability and decisions)

Produce `FIS.md` for the feature folder, in this exact structure:

```markdown
# FIS — <BB>-Fnn — <Feature name>
Status: Draft | Specified | Generated | Deployed | Accepted
CAD ref: CAD-<BB> §7 row Fnn

## 1. Traceability (two-way, complete)
| FR | AC (verbatim from the module FR table) | Realised by | Test |
|---|---|---|---|
| XXX-FR-010 | "<acceptance criterion copied verbatim>" | F-<form>, PL-<plugin>, WF-<flow> | T-nn.1 |
Rules: every FR in the feature's range appears; every artefact file in the
feature folder is named by at least one row; no orphans either way.

## 2. Business rules in scope
| BR | Enforcement point |
|---|---|
| BR-XXX-004 | Validator on <form>.<field> / Plugin <id> / Workflow guard <route> / DB constraint |
A BR with enforcement point "officer practice" or "training" is a spec
failure — escalate as a blocker.

## 3. Design decisions & assumptions
Numbered Q/A/Assumption items (same triage as Output E): blockers stop the
gate; documented defaults proceed.

## 4. Configuration parameters introduced
| Parameter | Carrier | Default | Source FR |
|---|---|---|---|
| transfer_letter_window_days | MD form md_registration_setting | 30 | XXX-FR-011 |
Every [Configurable] marker in the FR slice MUST land here with a concrete
carrier: an MD form, an environment variable, or a plugin property. A marker
without a carrier is an open question, not an implicit TODO.

## 5. Generation order
Numbered artefact sequence honouring the build-order rule (MD → independent
forms → FK-dependent → grids → datalists → workflow → plugins → userview
delta → reports).
```

### Output G — Acceptance Tests

Produce `tests/acceptance.md`, translating each FR acceptance criterion into
executable checks. Two check classes per test where applicable:

```markdown
## T-nn.1 — <FR id>: <short name>
**Covers:** XXX-FR-010 (AC verbatim: "...")
**Setup:** records/state to create via the UI or API (named MD values, amounts).
**UI check:** the observable behaviour, stated as a single assertion.
**SQL check (app_fd_* — see joget-db-inspect conventions):**
```sql
-- assert stored state, casting text columns; expected values literal
SELECT c_status, NULLIF(c_amount,'')::numeric FROM app_fd_fee_payment WHERE id='<code>';
-- expected: ('CONFIRMED', 1200.00)
```
**Teardown/notes:** anything the next test must not inherit.
```

Rules: amounts and statuses are asserted as literals (no "should look right");
financial state is always SQL-verified, never screen-only; each test names the
FR it covers so TRACE.md can be updated mechanically.

---

## Section 4 — Assumptions and Defaults

When requirements are ambiguous, use these defaults and document them:

| Ambiguity | Default assumption |
|-----------|-------------------|
| No PK strategy specified | IdGeneratorField with `PREFIX-??????` |
| No required/optional specified | Optional (no validator) unless it's a PK or FK |
| Enum with ≤6 values | Radio buttons (static options) |
| Enum with 7–20 values | SelectBox (static options) |
| Enum with >20 values or may grow | MD.xx lookup form |
| created_at, updated_at, created_by, modified_by | Omit — Joget manages these automatically |
| uuid type with no FK target | HiddenField + TODO comment |
| json blob type | TextArea (store as string) + flag for plugin if complex |
| `string[]` or array types | Comma-separated TextField OR FormGrid — ask if unclear |
| Screen field not in entity model | Add to form spec + flag as possible entity gap |

---

## Section 5 — Reference Files

Load when needed:

- **`references/completeness-checks.md`** — Full checklist of what makes a
  requirement complete for Joget implementation. Run before asking any questions.

- **`references/joget-constraints.md`** — Joget-specific constraints and
  gotchas to validate against before generating specs (e.g. tableName length
  limits, field ID restrictions, circular FK risks).


---

## QA-hardening addendum — lessons from an earlier build (2026-06-14)

_Folded in from an earlier build and three rounds of UX review. Supplements the sections named below; where a point sharpens an existing rule, the addendum wins._

Anchored to Step 4 (Generate Implementation Specs) and Output G (Acceptance Tests).

---

## Step 4 / Output G — STRENGTHEN: acceptance criteria must be functional & testable

> **Write every acceptance criterion as a behaviour a script can exercise and check — never as
> artefact existence.** This is the source-side fix for an over-claim defect in an earlier build (lists
> specified as "filterable and sortable / drill-down to the detail list" generated none of it, and
> acceptance only confirmed the artefact deployed). Two rules:
>
> 1. **Each `T-nn.x` states the action AND the observable result**, e.g.
>    - ❌ "The learners list is filterable and sortable." (untestable claim)
>    - ✅ "GET `…/_/list_learnersList?fschool=SCH-0042` returns only that school's rows; `?fschool=ZZ`
>      returns an empty list; every column carries `sortable:true` in the deployed datalist json."
>    - ✅ "The Registrations-by-school cell links (HyperlinkDataListAction) to
>      `…/_/list_learnersList?fschool=<cell>` and the target shows that school's learners."
> 2. **Do not assert a capability the generator does not emit.** If the FR wants sort/filter/drill, the
>    spec's §1 traceability must name the datalist column/filter/action that backs it, so the generated
>    test and the artefact agree. A claim with no emitting artefact is an OPEN QUESTION, not a pass.
>
> **For list-bearing FRs**, the FIS should additionally record: which columns are shown (`listColumns`
> if the form is wide), which are filterable (and the single `#requestParam#` each drill/filter uses —
> only one applies per URL), and the drill target. **For dashboard/KPI FRs**, route
> to `joget-dashboard-gen` (native SqlChartMenu/DashboardMenu) and record the visualisation choice as an
> ADR rather than specifying bespoke HTML.
