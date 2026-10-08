---
name: joget-form-gen
description: >
  Generate syntactically correct Joget DX 8.x form definition JSON from logical
  form specifications. Use this skill whenever the user wants to: create a new
  Joget form, add fields to an existing Joget form, convert a field spec or
  table design into a form JSON, describe a Joget form in plain language and
  get valid JSON output, or understand the structure of a Joget form definition.
  Also triggers for requests like "generate a Joget form for...", "write the
  form JSON for...", "create a registration form in Joget", or any request
  involving Joget DX forms, form elements, validators, binders, or grids.
---

# Joget DX Form Generation Skill

Generate syntactically correct Joget DX 8.x form definition JSON from a logical
specification. Always produce output that can be imported directly into Joget
without manual correction.

---

## 1. Input Specification Format

Accept specs in any of these forms — extract all relevant info before generating:

**Structured YAML spec (preferred):**
```yaml
form:
  id: learnerRegistration
  name: "01.01 - Learner Registration"
  table: learnerRegistration
  description: "Optional description"
  sections:
    - label: "Identification"
      columns: 2
      fields:
        - id: registerNumber,   type: id_generator, format: "LR-??????", label: "Register Number"
        - id: schoolCode,       type: select,        lookup: md05school,  label: "School",  required: true
        - id: registrationDate, type: date,           label: "Registration Date", required: true
    - label: "Notes"
      columns: 1
      fields:
        - id: notes, type: textarea, label: "Notes", rows: 4
```

**Natural language:** "A learner registration form with given names, family name, date of birth, gender (radio), school (dropdown from md05school), and an upload for the transfer letter."

**Table/column list:** A table name plus a list of column names and types.

**Existing form extension:** "Add a 'previousSchool' field to learnerRegistration after transfersFromAnotherSchool."

---

## 2. Generation Protocol

### Step 1 — Resolve ambiguities
Before generating, confirm or infer:
- `tableName` (snake_case; often matches `id`)
- Column layout (1 col = 100%, 2 col = 50%/50%, 3 col = 33%/33%/33%)
- For every SelectBox: what is the lookup form ID and which columns are id/label?
- For every FormGrid: what is the sub-form ID and foreign key column?
- Mandatory vs optional for each field

If unresolvable from context, use sensible defaults and add a `// TODO` comment
in the field's `label` so the user can spot it (e.g., `"label": "Status // TODO: confirm lookup form ID"`).

### Step 2 — Build the JSON skeleton

Use the canonical structure:
```
Form → [ Section → [ Column → [ Element, ... ], ... ], ... ]
```

Follow the **class hierarchy exactly** — see Section 3.

### Step 3 — Apply field templates
Read `references/element-schemas.md` for the exact JSON template of each
element type. **Never invent property names.** Every property key must come
from the schema reference.

### Step 4 — Validate before outputting
Run this mental checklist:
- [ ] `className` uses fully-qualified Java class name (see schemas)
- [ ] Every Section has at least one Column child
- [ ] Every Column has a `width` property (e.g., `"50%"`)
- [ ] Every form has `id`, `name`, `tableName` in `properties`
- [ ] `loadBinder` and `storeBinder` are present (use WorkflowFormBinder defaults)
- [ ] Mandatory fields have `DefaultValidator` with `"mandatory":"true"`
- [ ] SelectBox with lookup data uses `FormOptionsBinder` (not empty `options: []`)
- [ ] FormGrid has `storeBinder` with `MultirowFormBinder` and `foreignKey`
- [ ] No trailing commas; valid JSON throughout

### Step 5 — Output
Emit the complete JSON inside a fenced code block:
```json
{ "className": "org.joget.apps.form.model.Form", ... }
```

Then provide a **summary table** listing each field, its type, and any
validation or binding notes.

---

## 3. Form Structure

### Top-level Form object
```json
{
  "className": "org.joget.apps.form.model.Form",
  "properties": {
    "id": "<formId>",
    "name": "<Human Readable Name>",
    "tableName": "<db_table_name>",
    "description": "",
    "loadBinder": {
      "className": "org.joget.apps.form.lib.WorkflowFormBinder",
      "properties": {}
    },
    "storeBinder": {
      "className": "org.joget.apps.form.lib.WorkflowFormBinder",
      "properties": {}
    },
    "permission": { "className": "", "properties": {} },
    "noPermissionMessage": "",
    "postProcessor": { "className": "", "properties": {} },
    "postProcessorRunOn": "create"
  },
  "elements": [ /* Sections here */ ]
}
```

### Section
```json
{
  "className": "org.joget.apps.form.model.Section",
  "properties": { "id": "<sectionId>", "label": "<Section Label>" },
  "elements": [ /* Columns here */ ]
}
```

### Column
```json
{
  "className": "org.joget.apps.form.model.Column",
  "properties": { "width": "50%" },
  "elements": [ /* Fields here */ ]
}
```

**Column width conventions:**
- 2-column layout: `"50%"` / `"50%"`
- 3-column layout: `"33%"` / `"33%"` / `"33%"`
- Full-width section: single column `"100%"`
- Mixed: `"30%"` / `"70%"` etc.

---

## 4. Validator Pattern

All field-level validation uses a single validator block:

**Mandatory field:**
```json
"validator": {
  "className": "org.joget.apps.form.lib.DefaultValidator",
  "properties": { "mandatory": "true", "type": "", "message": "" }
}
```

**Mandatory + numeric:**
```json
"validator": {
  "className": "org.joget.apps.form.lib.DefaultValidator",
  "properties": { "mandatory": "true", "type": "double", "message": "Must be a positive number" }
}
```

**Optional (no validation):**
```json
"validator": { "className": "", "properties": {} }
```

Valid `type` values: `""` (any), `"double"`, `"integer"`, `"email"`, `"url"`.

---

## 5. OptionsBinder Pattern (for SelectBox and Radio)

When options come from another form/table:
```json
"optionsBinder": {
  "className": "org.joget.apps.form.lib.FormOptionsBinder",
  "properties": {
    "formDefId": "<lookupFormId>",
    "idColumn": "id",
    "labelColumn": "name",
    "groupingColumn": "",
    "extraCondition": "",
    "addEmptyOption": "true",
    "emptyLabel": "",
    "useAjax": "",
    "cacheInterval": ""
  }
}
```

**Common lookup column patterns from these apps:**
- Most MD.xx lookup forms: `idColumn: "id"`, `labelColumn: "name"`
- Forms using a `code` column as key: `idColumn: "code"`, `labelColumn: "name"`
- Cascading (parent-child): add `extraCondition` with a `#field_id#` reference

When options are hardcoded inline:
```json
"options": [
  { "value": "male",   "label": "Male",   "grouping": "" },
  { "value": "female", "label": "Female", "grouping": "" }
],
"optionsBinder": { "className": "", "properties": {} }
```

---

## 6. Element Type Quick Reference

See `references/element-schemas.md` for full property lists.

Rows marked **CE** are verified present in the Community source (tags `9.0.7` and `9.1.0.1`) at
`wflow-core/src/main/java/org/joget/apps/form/lib/`. Rows marked **EE** / **custom** are not in
that tree and can only be confirmed against the running instance.

| Type | className (short) | Edition | Use for |
|------|-------------------|---------|---------|
| TextField | `form.lib.TextField` | CE | Single-line text, numbers (as text) |
| TextArea | `form.lib.TextArea` | CE | Multi-line text, descriptions |
| SelectBox | `form.lib.SelectBox` | CE | Dropdown, multi-select |
| Radio | `form.lib.Radio` | CE | Radio buttons (gender, yes/no) |
| CheckBox | `form.lib.CheckBox` | CE | Boolean or multi-select flags |
| DatePicker | `form.lib.DatePicker` | CE | Date fields |
| HiddenField | `form.lib.HiddenField` | CE | FK storage, system fields |
| IdGeneratorField | `form.lib.IdGeneratorField` | CE | Auto-generated IDs |
| FileUpload | `form.lib.FileUpload` | CE | Document/image attachments |
| CustomHTML | `form.lib.CustomHTML` | CE | Section dividers, raw HTML |
| PasswordField | `form.lib.PasswordField` | CE | Password input |
| SubForm | `form.lib.SubForm` | CE | Embed one child record (static `formDefId`) |
| Grid | `form.lib.Grid` | CE | Simple repeating rows (no child form) |
| FormGrid | `plugin.enterprise.FormGrid` | EE | Inline sub-form grid (one-to-many) |
| MultiPagedForm | `plugin.enterprise.MultiPagedForm` | EE | Multi-step wizard |
| CalculationField | `plugin.enterprise.CalculationField` | EE | Computed numeric fields |
| LookupFieldElement | `<your.package>.lookupfield.element.LookupFieldElement` | custom | Display value from related record |
| ConcatFieldElement | `<your.package>.concatfield.element.ConcatFieldElement` | custom | Merge/derive field from others |
| EmbeddedDatalist | `marketplace.EmbeddedDatalist` | marketplace | Embedded list view in form |
| GisPolygonCaptureElement | `<your.package>.gisui.element.GisPolygonCaptureElement` | custom | GPS polygon capture |
| SmartSearchElement | *(package unknown — resolve before use)* | custom | Typeahead / smart search |

`SubForm` and `Grid` were previously missing from this table. Both are Community elements and are
often the right answer on a CE instance where `FormGrid` is unavailable — note `SubForm.formDefId`
is **static** (it cannot switch child form at runtime).

Other CE elements in the same package worth knowing: `DefaultFormBinder`, `WorkflowFormBinder`,
`FormOptionsBinder`, `DefaultValidator`, `DuplicateValueValidator`, `BeanShellValidator`,
`BeanShellFormBinder`, `BeanShellMultiRowValidator`, `SubmitButton`, `SaveAsDraftButton`,
`LinkButton`, `Columns`, `ColumnContainer`, and the `JsonApi*` binders.

**Full package prefixes:**
- Standard: `org.joget.apps.form.lib.*` and `org.joget.apps.form.model.*`
- Enterprise: `org.joget.plugin.enterprise.*`
- Marketplace: `org.joget.marketplace.*`
- Custom plugins: your own package, `<your.package>.*` (a **custom** row above is a plugin a
  build writes or installs for itself; it is not part of Joget, and its class name is whatever
  that plugin declares)

### Verifying against the Joget source

The Joget **Community Edition v9** source is public: clone the GPLv3 repository
`https://github.com/jogetworkflow/jw-community` (below, `/path/to/jw-community`). `references/element-schemas.md` was derived from exported production apps, not from the
source — so when a property name or className is uncertain, the source settles it and outranks
both this table and that file.

```bash
SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
ls $SRC/wflow-core/src/main/java/org/joget/apps/form/lib/          # every CE element
grep -n "getPropertyString(\"" $SRC/wflow-core/src/main/java/org/joget/apps/form/lib/DatePicker.java
ls $SRC/wflow-core/src/main/resources/templates/                   # the .ftl that renders each one
```

Reading the element's `.ftl` template alongside its `.java` is the fastest way to settle "what is
this property actually called and how is it rendered" — e.g. `customHTML.ftl` is where the raw
`${value!}` output (and hence the `requiredSanitize` interaction) is visible.

**It is Community Edition, so absence proves nothing for Enterprise or custom classes.** The
`plugin.enterprise.*`, `marketplace.*` and custom (`<your.package>.*`) rows above will not be found there; that
says nothing about whether they exist on the target instance. Treat "not in the source" as proof
of absence **only** for `org.joget.apps.*` packages.

---

## 7. ID Naming Conventions

- Form `id`: camelCase, matches table name where possible (`learnerRegistration`)
- Field `id`: camelCase (`registrationDate`, `schoolCode`)
- Section `id`: camelCase + "Section" (`registrationHeaderSection`)
- Table name: snake_case (`learner_registration`) OR camelCase — be consistent within an app
- Form name: numbered prefix common in enterprise apps (`"01.01 - Learner Registration"`)

---

## 8. Common Patterns

### Lookup chain (SelectBox → display value via LookupField)
1. SelectBox stores FK id into field `schoolId`
2. LookupFieldElement with `sourceFieldId: "schoolId"`, `lookupFormId: "md05school"`, `lookupColumn: "name"` displays label

### One-to-many child grid
- FormGrid element in parent form
- `formDefId` points to child form
- `storeBinder.properties.foreignKey` = column in child form that holds parent PK

### Wizard / multi-step
- Use MultiPagedForm element
- Each page references a sub-form by `page{N}_formDefId`
- Set `partiallyStore: "true"` to save on each page

### Auto-center + GPS
- GisPolygonCaptureElement
- Set `autoCenterDistrictFieldId`, `autoCenterVillageFieldId` to existing field IDs on the form
- Set `areaFieldId`, `perimeterFieldId`, `centroidFieldId` to HiddenField IDs for auto-population

---

## 9. Reference Files

Load these when needed:

- **`references/element-schemas.md`** — Full JSON templates for every element type with all properties. **Always read before generating** if you are unsure of any property name.
- **`references/form-patterns.md`** — Complete form examples, set in Progressa (the fictional country of the courses), annotated with design notes.
