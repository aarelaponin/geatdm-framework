# Joget DX Form Patterns Reference

Annotated patterns from production apps, with every example set in Progressa, the
fictional country of the courses. Use these as structural blueprints when generating
new forms.

---

## Pattern 1: Simple Lookup (MD) Form

Used for master data tables with code + name (e.g., md03district, md06grade).
Minimal fields, single section, two columns.

```json
{
  "className": "org.joget.apps.form.model.Form",
  "properties": {
    "id": "mdXXsomeName",
    "name": "MD.XX - Some Name",
    "tableName": "mdXXsomeName",
    "description": "",
    "loadBinder": { "className": "org.joget.apps.form.lib.WorkflowFormBinder", "properties": {} },
    "storeBinder": { "className": "org.joget.apps.form.lib.WorkflowFormBinder", "properties": {} },
    "permission": { "className": "", "properties": {} },
    "noPermissionMessage": "",
    "postProcessor": { "className": "", "properties": {} },
    "postProcessorRunOn": "create"
  },
  "elements": [
    {
      "className": "org.joget.apps.form.model.Section",
      "properties": { "id": "mainSection", "label": "" },
      "elements": [
        {
          "className": "org.joget.apps.form.model.Column",
          "properties": { "width": "50%" },
          "elements": [
            {
              "className": "org.joget.apps.form.lib.TextField",
              "properties": {
                "id": "code",
                "label": "Code",
                "value": "", "placeholder": "", "maxlength": "20",
                "readonly": "", "readonlyLabel": "", "style": "",
                "encryption": "", "storeNumeric": "", "requiredSanitize": "",
                "workflowVariable": "",
                "validator": {
                  "className": "org.joget.apps.form.lib.DefaultValidator",
                  "properties": { "mandatory": "true", "type": "", "message": "" }
                }
              }
            }
          ]
        },
        {
          "className": "org.joget.apps.form.model.Column",
          "properties": { "width": "50%" },
          "elements": [
            {
              "className": "org.joget.apps.form.lib.TextField",
              "properties": {
                "id": "name",
                "label": "Name",
                "value": "", "placeholder": "", "maxlength": "100",
                "readonly": "", "readonlyLabel": "", "style": "",
                "encryption": "", "storeNumeric": "", "requiredSanitize": "",
                "workflowVariable": "",
                "validator": {
                  "className": "org.joget.apps.form.lib.DefaultValidator",
                  "properties": { "mandatory": "true", "type": "", "message": "" }
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
```

---

## Pattern 2: Entity Master Form (2-column, multi-section)

Used for main entity forms (School, Institution, Guardian). Each logical group
gets its own Section.

**Structure:**
```
Form
  Section "Identification"
    Column 50% → [IdGeneratorField, SelectBox(type)]
    Column 50% → [TextField(name), DatePicker(date)]
  Section "Contact Details"
    Column 33% → [TextField(phone)]
    Column 33% → [TextField(email)]
    Column 33% → [SelectBox(district)]
  Section "Notes"
    Column 100% → [TextArea(description)]
```

**Key patterns:**
- First field in first column is always IdGeneratorField (auto ID)
- Required fields use DefaultValidator with mandatory:true
- SelectBox fields referencing lookup forms use FormOptionsBinder
- HiddenFields for FK references placed at bottom of relevant column

---

## Pattern 3: Transaction Form with Grid

Used for header+line forms (Fee payment batch → Payments, Application → Documents).

**Structure:**
```
Form (header)
  Section "Header"
    Column 50% → [IdGeneratorField, SelectBox(institution)]
    Column 50% → [DatePicker(date), TextField(amount)]
  Section "Line Items" (full width)
    Column 100% → [FormGrid → child form]
```

**FormGrid storeBinder pattern:**
- Parent form table: `fee_payment_batch`
- Child form: `feePayment`
- Child FK field: `batch_id` (HiddenField in child form)
- FormGrid storeBinder foreignKey: `"batch_id"`

---

## Pattern 4: Learner Registration Form (multi-section, mixed field types)

Used for an entity registration with personal details, location and documents —
here, Progressa's learner registration, kept by PLR, the Progressa Learner Registry.

```
Form (learnerRegistration)
  Section "Learner"
    Column 50% → [IdGeneratorField(registerNumber), TextField(givenNames), TextField(familyName)]
    Column 50% → [DatePicker(dateOfBirth), Radio(gender), SelectBox(grade)]
  Section "Guardian Contact"
    Column 50% → [TextField(phone), TextField(email)]
    Column 50% → [SelectBox(district), SelectBox(school)]
  Section "Transfer and Documents"
    Column 50% → [Radio(transfersFromAnotherSchool), SelectBox(previousSchool)]
    Column 50% → [FileUpload(transferLetter)]
  Section "System Fields" (no label)
    Column 100% → [HiddenField(pniaServiceIdentifier), HiddenField(status)]
```

`pniaServiceIdentifier` holds the identifier PNIA, the identity authority, gives this
service at sign-in; the service never keeps the national number.

**Radio pattern for gender:**
```json
{
  "className": "org.joget.apps.form.lib.Radio",
  "properties": {
    "id": "gender",
    "label": "Gender",
    "fullWidth": "",
    "options": [
      { "label": "Male",   "value": "male",   "grouping": "" },
      { "label": "Female", "value": "female", "grouping": "" },
      { "label": "Other",  "value": "other",  "grouping": "" }
    ],
    "optionsBinder": { "className": "", "properties": {} },
    "validator": {
      "className": "org.joget.apps.form.lib.DefaultValidator",
      "properties": { "mandatory": "true", "type": "", "message": "" }
    }
  }
}
```

---

## Pattern 5: GIS Site Form

Used when capturing geographic boundaries via GPS or map drawing — here, the site of a
school. Requires a custom GIS capture element (a plugin, not part of Joget) and companion
HiddenFields for computed geometry attributes.

**Structure:**
```
Form (schoolSite)
  Section "Administrative Location"
    Column 50% → [SelectBox(district), SelectBox(town)]
    Column 50% → [HiddenField(auto_center_lat), HiddenField(auto_center_lon)]
  Section "Site Boundary" (full width)
    Column 100% → [GisPolygonCaptureElement(geometry)]
  Section "Computed Attributes" (no label — system populated)
    Column 50% → [HiddenField(area_hectares), HiddenField(perimeter_meters)]
    Column 50% → [HiddenField(centroid_lat), HiddenField(vertex_count)]
```

**District/Town cascade pattern:**
```json
{
  "className": "org.joget.apps.form.lib.SelectBox",
  "properties": {
    "id": "town",
    "label": "Town",
    "optionsBinder": {
      "className": "org.joget.apps.form.lib.FormOptionsBinder",
      "properties": {
        "formDefId": "md_town",
        "idColumn": "id",
        "labelColumn": "name",
        "extraCondition": "district=#district#",
        "addEmptyOption": "true"
      }
    },
    "validator": { "className": "", "properties": {} }
  }
}
```

---

## Pattern 6: Configuration Multi-Tab Form

Used for complex configuration forms (e.g. a school year's settings, an enrolment
campaign). Implements browser tabs via CustomHTML wrapper + MultiPagedForm or tab nav.

**Tab wrapper structure (pure CustomHTML approach):**
```
Form
  Section "Tab Navigation" (no label)
    Column 100% → [CustomHTML: <ul class="nav nav-tabs">...]
  Section "Tab: Identity" (no label)
    Column 100% → [CustomHTML: <div class="tab-pane active" id="identityTab">]
    Column 50% → [fields...]
    Column 50% → [fields...]
    Column 100% → [CustomHTML: </div>]
  Section "Tab: Timeline" (no label)
    Column 100% → [CustomHTML: <div class="tab-pane" id="timelineTab">]
    Column 100% → [FormGrid or sub-form fields]
    Column 100% → [CustomHTML: </div>]
```

**MultiPagedForm approach (wizard):**
```json
{
  "className": "org.joget.plugin.enterprise.MultiPagedForm",
  "properties": {
    "id": "registrationWizard",
    "nextButtonlabel": "Next",
    "prevButtonlabel": "Previous",
    "partiallyStore": "true",
    "storeMainFormOnPartiallyStore": "true",
    "numberOfPage": {
      "className": "3",
      "properties": {
        "page1_formDefId": "step1FormId",
        "page1_label": "Learner",
        "page1_subFormParentId": "parent_id",
        "page2_formDefId": "step2FormId",
        "page2_label": "School and Grade",
        "page2_subFormParentId": "parent_id",
        "page3_formDefId": "step3FormId",
        "page3_label": "Declaration",
        "page3_subFormParentId": "parent_id"
      }
    }
  }
}
```

---

## Pattern 7: Derived/Computed Fields

Used in forms where fields are calculated or looked up from others.

**LookupField → display label from FK:**
```json
{
  "className": "<your.package>.lookupfield.element.LookupFieldElement",
  "properties": {
    "id": "schoolName",
    "label": "School Name",
    "sourceFieldId": "schoolId",
    "lookupFormId": "md05school",
    "lookupColumn": "name",
    "displayType": "readonly",
    "updateOn": "change",
    "value": ""
  }
}
```

**ConcatField → merge two optional FK fields:**
```json
{
  "className": "<your.package>.concatfield.element.ConcatFieldElement",
  "properties": {
    "id": "resolvedGuardianId",
    "label": "Guardian",
    "sourceFields": [
      { "fieldId": "parentGuardianId",      "transform": "" },
      { "fieldId": "institutionGuardianId", "transform": "" }
    ],
    "separator": "",
    "skipEmpty": "true",
    "displayType": "readonly",
    "updateOn": "change",
    "required": "true",
    "requiredMessage": "Please select a guardian."
  }
}
```

**CalculationField → compute a balance:**
```json
{
  "className": "org.joget.plugin.enterprise.CalculationField",
  "properties": {
    "id": "feeBalance",
    "label": "Fee Balance",
    "equation": "due - paid",
    "variables": [
      { "variableName": "due",  "fieldId": "feeDueAmount",  "operation": "sum" },
      { "variableName": "paid", "fieldId": "feePaidAmount", "operation": "sum" }
    ],
    "numOfDecimal": "2",
    "style": "us",
    "storeNumeric": ""
  }
}
```

The LookupField and ConcatField elements are custom plugins (`<your.package>` is the
package of the plugin you install); CalculationField is Enterprise.

---

## Naming Conventions Summary

| Item | Convention | Example |
|------|-----------|---------|
| Form ID | camelCase | `learnerRegistration`, `schoolSite` |
| Form name | Numbered prefix | `"01.01 - Learner Registration"` |
| Table name | camelCase or snake_case (be consistent) | `learnerRegistration`, `learner_registration` |
| Field ID | camelCase | `registrationDate`, `gradeCode` |
| Section ID | camelCase + Section | `registrationHeaderSection`, `guardianSection` |
| MD form IDs | mdNN + name | `md03district`, `md06grade` |
| Transaction forms | 01.xx prefix | `01.01 - Learner Registration` |
| Master forms | 02.xx prefix | `02.01 - School` |
| Records of state | 03.xx prefix | `03.01 - Learner Enrolment Status` |
| Config/reference | 10.xx prefix | `10.01 - School Year Settings` |
| Module forms | short prefix per module | `lrApplication`, `lrTransfer` |

---

## Common Mistakes to Avoid

1. **Empty `elements` array** — Every Section must have at least one Column; every Column must have at least one field.
2. **Missing `width` on Column** — Always set `"width": "50%"` (or other %).
3. **SelectBox with no binder and empty options** — Either set `optionsBinder` OR set `options` array. Never leave both empty.
4. **FormGrid without storeBinder** — Always include `storeBinder` with `MultirowFormBinder` and `foreignKey`.
5. **Wrong package prefix** — Enterprise plugins use `org.joget.plugin.enterprise.*`, not `org.joget.apps.form.lib.*`.
6. **Missing loadBinder/storeBinder on Form** — Always include both, defaulting to `WorkflowFormBinder`.
7. **Inventing property names** — Only use property names from the schemas in element-schemas.md.
8. **IdGeneratorField without unique envVariable** — Each form must use a unique counter name to avoid ID collisions.
