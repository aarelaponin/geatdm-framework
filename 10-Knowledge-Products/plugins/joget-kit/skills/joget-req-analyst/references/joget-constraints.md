# Joget DX 8.x / 9.x Implementation Constraints

Validate generated specs against these before finalising. Each constraint
that fails will cause silent errors or runtime failures in Joget.

> **Scope note.** These rules were written against DX 8.x, but the parent skill's evidence base
> (and the QA-hardening addendum in `joget-req-analyst/SKILL.md`) is DX **9.0.7**. Every constraint below
> that names an `org.joget.apps.*` class or a storage convention has been re-checked against the
> Community v9 source and holds at both the `9.0.7` and `9.1.0.1` tags.

## 0. Verifying any of this against the Joget source

The Joget **Community Edition v9** source is public: clone the GPLv3 repository
`https://github.com/jogetworkflow/jw-community` (below, `/path/to/jw-community`). This file states ~30 hard `**Rule:**` claims with no citations; when one of them is
load-bearing for a spec, verify it rather than trusting the prose. The source wins.

```bash
SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
grep -n "FORM_PREFIX_TABLE_NAME = \|FORM_PREFIX_COLUMN = " \
  $SRC/wflow-core/src/main/java/org/joget/apps/form/dao/FormDataDaoImpl.java   # app_fd_ / c_
ls $SRC/wflow-core/src/main/java/org/joget/apps/form/lib/                      # elements + binders
grep -rn "class <SomeBinder>" $SRC --include=*.java                            # existence checks
```

Everything named in this file is `org.joget.apps.*` core, i.e. **fully verifiable** from the
checkout — with the exception of `FormGrid`, `MultiPagedForm`, `CalculationField` and
`MultirowFormBinder`, which are `org.joget.plugin.enterprise.*` and will not be found there.
For those four, absence from the checkout is expected and proves nothing.

---

## 1. Form and Table Naming

### tableName length
- MySQL column names are prefixed with `c_` by Joget → tableName itself has no enforced
  limit, but the resulting `app_fd_<tableName>` must fit MySQL's 64-char table name limit.
- **Rule:** `tableName` must be ≤ 57 characters (64 − 7 for `app_fd_`)
- **Check:** `len("app_fd_" + tableName) <= 64`
- *(Corrected: earlier revisions said "≤ 55 (64 − 9)". `app_fd_` is 7 characters — confirmed as
  `FormDataDaoImpl.FORM_PREFIX_TABLE_NAME = "app_fd_"`. The practical cap is usually tighter
  anyway: `joget-userview-gen` and `joget-workflow-gen` both note Joget truncates **form ids** to
  24 chars, which is the constraint that actually bites.)*

### tableName characters
- Must be alphanumeric + underscores only. No hyphens, spaces, dots.
- Joget lowercases the tableName in MySQL: `app_fd_learnerRegistration` → MySQL sees it as lowercase depending on OS.
- **Rule:** Use camelCase consistently; avoid mixing conventions.

### Form ID and tableName relationship
- `formDefId` (form's `id` property) is used in code and datalists.
- `tableName` is the DB table (without `app_fd_` prefix).
- They do not have to match but keeping them identical avoids confusion.
- **Rule:** Keep `id === tableName` unless there is a specific reason not to.

### Field ID constraints
- Field IDs become DB column names with `c_` prefix: `registerNumber` → `c_registerNumber`
- Must be ≤ 62 characters (64 − 2 for the `c_` prefix + MySQL limit)
  *(Corrected from "≤ 55 (64 − 9)": `c_` is 2 characters — confirmed as
  `FormDataDaoImpl.FORM_PREFIX_COLUMN = "c_"`.)*
- Must be unique within a form
- Cannot be reserved Joget system columns: `id`, `dateCreated`, `dateModified`,
  `createdBy`, `createdByName`, `modifiedBy`, `modifiedByName`
- **Rule:** Never use those 7 names as custom field IDs.

---

## 2. IdGeneratorField Constraints

### envVariable uniqueness
- The `envVariable` property is a Joget environment variable that stores the counter.
- **Rule:** Each form must use a unique `envVariable` name.
- Two forms sharing the same `envVariable` will share the counter and produce
  duplicate IDs across forms.
- **Check:** All IdGeneratorField `envVariable` values in the spec are globally unique.

### Format pattern
- `?` = one sequential digit. `"LR-??????"` → `LR-000001`
- The counter resets if you change the `envVariable` name.
- The counter is stored in the Joget `app_environment` table.
- **Rule:** Do not change `envVariable` after data has been created.

---

## 3. SelectBox / Lookup Constraints

### formDefId must exist
- `FormOptionsBinder.formDefId` must match an existing form in the same app.
- If the lookup form doesn't exist yet, Joget silently shows an empty dropdown.
- **Rule:** MD.xx lookup forms must be created and published before the forms
  that reference them are imported.
- **Build order:** MD forms → independent entity forms → forms with FK SelectBoxes → grids

### extraCondition syntax
- Cascade dropdown filter: `extraCondition: "parent_field_id=#sourceFieldId#"`
- The `#sourceFieldId#` must match the exact `id` of another field on the SAME form.
- **Rule:** You cannot cascade from a field on a different form in the same page.

### idColumn and labelColumn
- Must match actual field IDs (column names without `c_`) in the lookup form.
- Common mistake: using the DB column name (`c_name`) instead of the field ID (`name`).
- **Rule:** Always use field IDs (no `c_` prefix) in `idColumn` and `labelColumn`.

---

## 4. FormGrid Constraints

### foreignKey must exist in child form
- `storeBinder.foreignKey` must match a HiddenField `id` in the child form.
- If it doesn't exist, the grid creates rows but the FK is not saved → orphaned records.
- **Rule:** Every child form used in a FormGrid must have a HiddenField whose
  `id` exactly matches the `foreignKey` value.

### options[].value must be exact child form field IDs
- Grid column display depends on correct field IDs from the child form.
- A wrong `value` silently displays a blank column at runtime.
- **Rule:** Verify each `options[].value` against actual child form field IDs.

### Nested grids not supported
- A FormGrid inside a FormGrid is not supported in standard Joget DX.
- **Rule:** If requirements show a three-level hierarchy (A → B → C), implement
  B as a popup sub-form and C as a grid within that popup, not as nested grids
  on the same page.

---

## 5. HiddenField Constraints

### useDefaultWhenEmpty
- Without `useDefaultWhenEmpty: "true"`, saving a form without touching a
  HiddenField will overwrite the DB value with empty string.
- **Rule:** FK HiddenFields that are set programmatically (not by user) should
  have `useDefaultWhenEmpty: "true"` to preserve values across edits.

### Parent FK pattern
- Every child form in a wizard (MultiPagedForm) must have a HiddenField named
  `parent_id` (or whatever `subFormParentId` specifies).
- **Rule:** Wizard sub-forms missing the parent HiddenField cannot be linked back.

---

## 6. Binder Constraints

### WorkflowFormBinder
- Default binder — works for all forms whether or not a workflow process is attached.
- When a workflow is attached, the binder auto-populates workflow variables.
- **Rule:** Always use `WorkflowFormBinder` as the default. Only override if
  there is a specific custom load/store requirement.

### FormDataDaoBinder does not exist
- There is no `FormDataDaoBinder` in Joget DX 8.x **or 9.x**. Source-confirmed: zero occurrences
  of the string anywhere in the Community tree at tags `9.0.7` and `9.1.0.1`.
- **Rule:** Never generate this className. Use `WorkflowFormBinder` for standard
  forms and `FormLoadBinder` subclasses only for custom plugin binders.
- The real CE binders, for reference, are `WorkflowFormBinder`, `DefaultFormBinder`,
  `FormOptionsBinder`, `BeanShellFormBinder` and the three `JsonApi*` binders — all in
  `org.joget.apps.form.lib`.

### MultirowFormBinder
- Used only in FormGrid `storeBinder`. Not valid as a form-level binder.
- **Rule:** `MultirowFormBinder` appears only inside `FormGrid.storeBinder`.

---

## 7. Plugin Constraints

### setPropertySafe rule
- A plugin that writes a field via `setPropertySafe()` or `FormRow.setProperty()`
  will fail silently if the field does not exist in the Joget form definition.
- **Rule:** Any field a plugin writes must exist as a form element in the target
  form before the plugin is deployed.
- **Implementation order:** Create form field first → then deploy plugin that writes it.

### Dual storage rule
- Joget builder definitions (APIs, datalists) are stored in the database AND filesystem.
- Plugins that create these programmatically must write to the DB first.
- **Rule:** Never write only to filesystem for Joget builder artefacts.

### API Builder new @Operation
- Adding a new `@Operation` method to an existing API Builder plugin requires
  deleting and re-creating the API Builder configuration in Joget UI.
- **Rule:** Flag this in plugin spec whenever new endpoints are added to existing plugins.

---

## 8. Data Volume and Performance

### FormGrid page size
- Default page size of 50 is reasonable for most grids.
- For child grids with potentially hundreds of rows (e.g. audit log): set
  `pageSize: "20"` and `showPagination: true`.
- **Rule:** Flag any one-to-many relationship expected to produce >100 child rows.

### EmbeddedDatalist
- `datalistId` must reference an existing datalist in the same app.
- Loading a datalist that doesn't exist returns a 404 error (not a silent blank).
- **Rule:** Always verify datalist IDs against the app's actual datalist definitions.

### Cascading SelectBox with useAjax
- `useAjax: "true"` loads options on demand — recommended when the lookup form
  has >100 records.
- For small lookup forms (<50 records): `useAjax: ""` (disabled) is fine.
- **Rule:** Set `useAjax: "true"` for any lookup form expected to have >50 records.

---

## 9. Spec Validity Checklist

Before finalising any spec, confirm:

- [ ] All `formDefId` references point to forms that exist or are defined in this spec
- [ ] All `IdGeneratorField.envVariable` values are globally unique across all forms in spec
- [ ] All FK `HiddenField` IDs match their corresponding `FormGrid.foreignKey` values
- [ ] All `FormGrid.options[].value` match actual field IDs in the child form
- [ ] No field ID uses a Joget reserved name (`id`, `dateCreated`, `dateModified`, etc.)
- [ ] All `tableName` values produce `app_fd_<tableName>` ≤ 64 characters
- [ ] No `FormDataDaoBinder` className used anywhere
- [ ] MD.xx lookup forms are listed in build order before forms that reference them
- [ ] Any field a plugin writes exists as a form element in the target form spec
- [ ] Enum types are consistently either static options or lookup forms (not mixed)
