# Completeness Checks for Joget Requirements Analysis

Run all checks below. Mark each as PASS / GAP / ASSUMPTION.

---

## 1. Entity Completeness

For each entity:

### 1.1 Primary Key
- [ ] Is there a clear PK field?
- [ ] Is it UUID auto-generated, or human-readable (sequential ID)?
- [ ] If human-readable: what is the prefix/format? (e.g. LR-000001)
- **GAP trigger:** Entity has no `id` or `uuid` field → ask for ID strategy

### 1.2 Field Types
- [ ] Every field has a type (string, decimal, boolean, date, enum, file, etc.)
- [ ] Decimal/numeric fields: how many decimal places? Currency or count?
- [ ] Date fields: date only, or datetime? What format?
- [ ] String fields: max length constraint?
- **GAP trigger:** Field type is `json`, `object`, or `any` → ask what structure

### 1.3 Enums
- [ ] All enum values are listed
- [ ] No "etc." or "..." in the enum value list
- [ ] It's clear if the list is exhaustive (closed) or extensible (open → lookup form)
- **GAP trigger:** Enum has fewer than 3 values → confirm this is intentional

### 1.4 Required vs Optional
- [ ] It's clear which fields are mandatory
- [ ] FK fields are either always required or conditionally required
- **GAP trigger:** Entity has no mandatory fields at all → unusual, confirm

### 1.5 Relationships
- [ ] Every FK field has a named target entity
- [ ] Every one-to-many relationship has the FK field named in the child entity
- [ ] Many-to-many relationships have a junction entity defined
- **GAP trigger:** FK field like `learner_id` with no target entity → ask which entity

### 1.6 System Fields
- [ ] `created_at`, `updated_at`, `created_by`, `modified_by` are present or explicitly excluded
- **DEFAULT:** These are omitted — Joget manages `dateCreated`, `dateModified`, `createdBy` automatically

---

## 2. Screen / UI Completeness

For each screen:

### 2.1 Purpose and Users
- [ ] Screen has a clear purpose statement
- [ ] Primary users are identified (determines permissions and UI context)
- **GAP trigger:** No users identified → default to "All authenticated users" and flag

### 2.2 All Screen Fields Are in Entity Model
- [ ] Every field shown on screen exists in at least one entity
- [ ] Computed/derived fields on screen have a source formula or entity path
- **GAP trigger:** Screen has `duplicate_score` but no entity field → flag as missing entity attribute

### 2.3 Read vs Write Fields
- [ ] It's clear which fields are editable vs display-only
- [ ] Display-only fields have a source (which entity/calculation)
- **GAP trigger:** Screen shows `school_name` but no FK to school entity → ask how it's loaded

### 2.4 Actions / Buttons
- [ ] CRUD actions are clear (create new, edit existing, delete, view)
- [ ] Non-CRUD actions are identified (submit, approve, reject, generate, calculate)
- [ ] Non-CRUD actions have a description of what they trigger
- **GAP trigger:** Screen has "Submit" button but no description of what happens → ask

### 2.5 Validation Rules
- [ ] Required fields per screen are identified
- [ ] Any cross-field validation is described (e.g. end_date > start_date)
- [ ] Any cross-entity validation is described (e.g. no duplicate national ID)
- **GAP trigger:** Amount field with no range validation → flag as assumption (no min/max)

### 2.6 Grid / List Screens
- [ ] For list screens: which columns are displayed?
- [ ] Filtering, sorting, pagination requirements?
- [ ] Row click action (open form, popup, navigate)?
- **DEFAULT:** Standard Joget datalist with all main fields, row click opens form

---

## 3. Relationship Completeness

### 3.1 Every Relationship Has Both Ends Named
- [ ] Source entity and target entity are both identified
- [ ] Cardinality is clear (one-to-one, one-to-many, many-to-many)

### 3.2 FK Fields Exist in the Correct Entity
- [ ] In a one-to-many: the FK lives in the "many" side (child)
- [ ] In a many-to-many: a junction entity exists with two FKs

### 3.3 Cascade Behaviour
- [ ] What happens to children when parent is deleted? (cascade delete, or block)
- [ ] What happens to FK when parent changes PK? (should not happen in Joget — UUIDs)
- **DEFAULT:** No cascade delete — Joget does not auto-cascade

### 3.4 Lookup Chains (Cascade Dropdowns)
- [ ] If Screen has `district → school`, is this a cascade (school filtered by district)?
- [ ] Is there a lookup form for each level?
- **GAP trigger:** Two dropdowns sharing no obvious relationship → ask if cascade is needed

---

## 4. Joget-Specific Gaps

These gaps are not visible from a pure requirements perspective but matter for Joget:

### 4.1 IdGenerator Format
- [ ] Every form that creates new records needs an IdGeneratorField or uses Joget's UUID
- [ ] Human-readable ID formats are specified (PREFIX-NNNNNN)
- **GAP trigger:** No ID format specified → ask or default to `ENTITY_PREFIX-??????`

### 4.2 Workflow Integration
- [ ] Is there an approval/rejection workflow? (needs `storeBinder: WorkflowFormBinder`)
- [ ] Are status transitions defined? (e.g. SUBMITTED → APPROVED → REGISTERED)
- [ ] Which transitions are manual (user clicks) vs automatic (plugin)?
- **GAP trigger:** `status` field with multiple values but no transition logic → ask

### 4.3 Parent-Child Linking
- [ ] Every child form in a FormGrid has a HiddenField for the parent FK
- [ ] The HiddenField name matches the FK field in the storeBinder
- **GAP trigger:** Child entity has no FK field → it cannot be used in a FormGrid

### 4.4 GPS / GIS Fields
- [ ] GPS point fields (lat + lon) — are they captured manually or via device GPS?
- [ ] GPS polygon/boundary — is GisPolygonCaptureElement needed?
- [ ] If GIS: is a GIS capture plugin (custom; not part of Joget) installed in the target instance?
- **GAP trigger:** `gps_coordinates` field with no capture method specified → ask

### 4.5 File Upload Specifications
- [ ] Max file size per field?
- [ ] Allowed file types?
- [ ] Single or multiple file upload?
- **DEFAULT:** 10MB limit, all types, single file — flag if multiple files expected

### 4.6 Read-only / Computed Display Fields
- [ ] Derived/computed display fields: is the formula known?
- [ ] Cross-form lookups (display label from FK): is `LookupFieldElement` plugin available?
- **GAP trigger:** Screen shows `school_name` next to a `school_id` selectbox → needs LookupFieldElement or readonly TextField

### 4.7 Master Data Seeding
- [ ] Lookup forms (MD.xx) — is initial data provided?
- [ ] Will master data be managed via Joget UI, or loaded from external source?
- **DEFAULT:** Managed via Joget UI — flag if external source integration needed

### 4.8 Multi-page / Wizard Forms
- [ ] Is any registration flow a multi-step wizard?
- [ ] If yes: which steps are separate sub-forms, and what is the wizard FK linking them?
- **GAP trigger:** Registration flow with 5+ sections → ask if wizard pattern is preferred

---

## 5. Plugin Trigger Patterns

These patterns in requirements automatically flag a need for custom plugin development:

| Pattern | Plugin type needed |
|---------|-------------------|
| Automatic calculation involving multiple entities | ApplicationPlugin (post-processor) |
| "On save, automatically create child records" | ApplicationPlugin or workflow process |
| "Validate against external system" | ApplicationPlugin with HTTP client |
| "Send notification (SMS/email)" | ApplicationPlugin |
| "Generate a document/report/PDF" | ApplicationPlugin |
| "Import data from CSV/Excel" | ApplicationPlugin or custom process |
| "Eligibility score based on rules across entities" | ApplicationPlugin + rule engine |
| "Sync with external system" | ApplicationPlugin |
| "Batch process all records nightly" | ApplicationPlugin (scheduled) |
| "Display data from another system" | FormLoadBinder |
| "Lookup field from non-Joget source" | Custom LookupFieldElement variant |
