# Joget DX 8.x Element Schemas Reference

Full JSON templates for every element type, derived from real production forms.
Use exact property names from these templates.

---

## TextField
```json
{
  "className": "org.joget.apps.form.lib.TextField",
  "properties": {
    "id": "fieldId",
    "label": "Field Label",
    "value": "",
    "placeholder": "",
    "maxlength": "",
    "size": "",
    "encryption": "",
    "storeNumeric": "",
    "readonly": "",
    "readonlyLabel": "",
    "style": "",
    "requiredSanitize": "",
    "workflowVariable": "",
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `storeNumeric: "true"` to store as a number in DB
- `encryption: "true"` to encrypt at rest
- `readonly: "true"` makes field display-only
- `readonlyLabel: "true"` renders as plain text (no input box) when readonly

---

## TextArea
```json
{
  "className": "org.joget.apps.form.lib.TextArea",
  "properties": {
    "id": "fieldId",
    "label": "Field Label",
    "value": "",
    "placeholder": "",
    "rows": "4",
    "cols": "80",
    "readonly": "",
    "readonlyLabel": "",
    "requiredSanitize": "",
    "workflowVariable": "",
    "validator": { "className": "", "properties": {} }
  }
}
```

---

## SelectBox
```json
{
  "className": "org.joget.apps.form.lib.SelectBox",
  "properties": {
    "id": "fieldId",
    "label": "Field Label",
    "value": "",
    "multiple": "",
    "size": "",
    "controlField": "",
    "controlValue": "",
    "readonly": "",
    "readonlyLabel": "",
    "workflowVariable": "",
    "options": [],
    "optionsBinder": {
      "className": "org.joget.apps.form.lib.FormOptionsBinder",
      "properties": {
        "formDefId": "lookupFormId",
        "idColumn": "id",
        "labelColumn": "name",
        "groupingColumn": "",
        "extraCondition": "",
        "addEmptyOption": "true",
        "emptyLabel": "",
        "useAjax": "",
        "cacheInterval": ""
      }
    },
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `multiple: "true"` for multi-select
- `controlField` + `controlValue` for conditional show/hide
- For cascading dropdown: `extraCondition: "parentId=#parentFieldId#"`
- For static options: set `options` array, leave `optionsBinder.className` empty

---

## Radio
```json
{
  "className": "org.joget.apps.form.lib.Radio",
  "properties": {
    "id": "fieldId",
    "label": "Field Label",
    "value": "",
    "fullWidth": "",
    "readonly": "",
    "controlField": "",
    "options": [
      { "label": "Option A", "value": "a", "grouping": "" },
      { "label": "Option B", "value": "b", "grouping": "" }
    ],
    "optionsBinder": { "className": "", "properties": {} },
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- Can use `optionsBinder` exactly like SelectBox for dynamic options
- `fullWidth: "true"` to stack options vertically

---

## CheckBox
```json
{
  "className": "org.joget.apps.form.lib.CheckBox",
  "properties": {
    "id": "fieldId",
    "label": "Field Label",
    "value": "",
    "workflowVariable": "",
    "options": [
      { "value": "true", "label": "", "grouping": "" }
    ],
    "optionsBinder": { "className": "", "properties": {} },
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- For single boolean: one option with `value: "true"`
- For multi-select flags: multiple options, store as comma-separated

---

## DatePicker
```json
{
  "className": "org.joget.apps.form.lib.DatePicker",
  "properties": {
    "id": "fieldId",
    "label": "Field Label",
    "value": "",
    "dataFormat": "yyyy-MM-dd",
    "datePickerType": "",
    "currentDateAs": "today",
    "yearRange": "c-5:c+10",
    "disableWeekends": "",
    "allowManual": "",
    "startDateFieldId": "",
    "endDateFieldId": "",
    "readonly": "",
    "readonlyLabel": "",
    "workflowVariable": "",
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `dataFormat`: `"yyyy-MM-dd"` (default), `"dd/MM/yyyy"`, `"MM/dd/yyyy"`
- `currentDateAs: "today"` sets default to today; `""` = no default
- `yearRange: "c-5:c+10"` = 5 years back, 10 years forward from current
- `startDateFieldId` / `endDateFieldId` for range validation between two date fields

---

## HiddenField
```json
{
  "className": "org.joget.apps.form.lib.HiddenField",
  "properties": {
    "id": "fieldId",
    "label": "fieldId",
    "value": "",
    "workflowVariable": "",
    "useDefaultWhenEmpty": "",
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `label` is not displayed but is required; convention is to repeat `id`
- `useDefaultWhenEmpty: "true"` preserves existing DB value when form submitted without touching this field

---

## IdGeneratorField
```json
{
  "className": "org.joget.apps.form.lib.IdGeneratorField",
  "properties": {
    "id": "fieldId",
    "label": "Record ID",
    "format": "PREFIX-??????",
    "envVariable": "counter",
    "isDistributedGeneration": "",
    "hidden": "",
    "workflowVariable": "fieldId"
  }
}
```
**Notes:**
- `format`: `?` = sequential digit, e.g., `"LR-??????"` → `LR-000001`
- `envVariable`: environment variable name for the counter (unique per form)
- `hidden: "true"` hides the field but still generates and stores the value
- `workflowVariable`: exposes value to workflow process

---

## FileUpload
```json
{
  "className": "org.joget.apps.form.lib.FileUpload",
  "properties": {
    "id": "fieldId",
    "label": "Upload Document",
    "maxSize": "10",
    "maxSizeMsg": "File size limit exceeded",
    "multiple": "",
    "attachment": "true",
    "readonly": "",
    "removeFile": "",
    "permissionType": "",
    "size": "",
    "fileTypes": "",
    "resizeMethod": "",
    "resizeWidth": "",
    "resizeQuality": "0.8",
    "padding": "",
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `maxSize`: MB limit (default `"10"`)
- `attachment: "true"` stores in app uploads folder
- `fileTypes`: comma-separated extensions, e.g., `"pdf,jpg,png"`
- `multiple: "true"` allows multiple file upload

---

## PasswordField
```json
{
  "className": "org.joget.apps.form.lib.PasswordField",
  "properties": {
    "id": "fieldId",
    "label": "Password",
    "value": "",
    "readonly": "",
    "validator": { "className": "", "properties": {} }
  }
}
```

---

## CustomHTML
```json
{
  "className": "org.joget.apps.form.lib.CustomHTML",
  "properties": {
    "id": "dividerHtml",
    "label": "",
    "value": "<h4>Section Heading</h4>"
  }
}
```
**Notes:**
- Used for section headings, tab panel wrappers, decorative dividers
- `value` is raw HTML rendered inline in the form
- Tab panel pattern: `<div role="tabpanel" class="tab-pane active" id="tabName">`

---

## CalculationField
```json
{
  "className": "org.joget.plugin.enterprise.CalculationField",
  "properties": {
    "id": "fieldId",
    "label": "Computed Value",
    "equation": "varA + varB",
    "variables": [
      { "variableName": "varA", "fieldId": "sourceFieldA", "operation": "sum" },
      { "variableName": "varB", "fieldId": "sourceFieldB", "operation": "sum" }
    ],
    "numOfDecimal": "2",
    "style": "us",
    "storeNumeric": "",
    "prefix": "",
    "postfix": "",
    "useThousandSeparator": "",
    "hidden": "",
    "readonlyLabel": "",
    "workflowVariable": "",
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `equation`: mathematical expression using variable names defined in `variables`
- `operation`: `"sum"` (scalar field), `"count"`, `"average"`, `"min"`, `"max"` (for grid aggregates)
- `style`: `"us"` = US number format (comma thousands, dot decimal); `"eu"` = European

---

## LookupFieldElement (custom plugin)
```json
{
  "className": "<your.package>.lookupfield.element.LookupFieldElement",
  "properties": {
    "id": "fieldId",
    "label": "Displayed Label",
    "sourceFieldId": "foreignKeyFieldId",
    "lookupFormId": "targetFormId",
    "lookupColumn": "columnToDisplay",
    "lookupKeyColumn": "",
    "displayType": "readonly",
    "updateOn": "change",
    "value": "",
    "workflowVariable": "",
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- Watches `sourceFieldId` for changes; fetches `lookupColumn` from `lookupFormId` where PK = source value
- `displayType: "readonly"` — displays value as text; `"hidden"` — stores silently
- `lookupKeyColumn`: override the lookup key (leave empty to use form PK)

---

## ConcatFieldElement (custom plugin)
```json
{
  "className": "<your.package>.concatfield.element.ConcatFieldElement",
  "properties": {
    "id": "fieldId",
    "label": "Derived Value",
    "sourceFields": [
      { "fieldId": "sourceField1", "transform": "" },
      { "fieldId": "sourceField2", "transform": "" }
    ],
    "separator": " ",
    "formatPattern": "",
    "prefix": "",
    "suffix": "",
    "skipEmpty": "true",
    "displayType": "readonly",
    "updateOn": "change",
    "required": "",
    "requiredMessage": ""
  }
}
```
**Notes:**
- Concatenates values of listed source fields
- `transform`: optional per-field transform (e.g., `"upper"`, `"lower"`)
- `skipEmpty: "true"` omits empty source fields from result
- `required: "true"` + `requiredMessage` adds client-side validation

---

## FormGrid (enterprise plugin)
```json
{
  "className": "org.joget.plugin.enterprise.FormGrid",
  "properties": {
    "id": "gridFieldId",
    "label": "Grid Label",
    "formDefId": "childFormId",
    "pageSize": "50",
    "enableSorting": "true",
    "readonly": "",
    "deleteGridData": "",
    "validateMaxRow": "",
    "requestParams": [],
    "options": [
      {
        "label": "Column Header",
        "value": "dbColumnName",
        "width": "150px",
        "format": "",
        "formatType": ""
      }
    ],
    "storeBinder": {
      "className": "org.joget.plugin.enterprise.MultirowFormBinder",
      "properties": {
        "formDefId": "childFormId",
        "foreignKey": "parentIdColumnInChildForm"
      }
    },
    "validator": { "className": "", "properties": {} }
  }
}
```
**Notes:**
- `formDefId` must match an existing form ID
- `storeBinder.properties.foreignKey` = the HiddenField in the child form that stores parent record PK
- `options` array defines which child form columns appear as grid columns
- `deleteGridData: "true"` deletes child records when parent is deleted

---

## EmbeddedDatalist
```json
{
  "className": "org.joget.marketplace.EmbeddedDatalist",
  "properties": {
    "id": "fieldId",
    "label": "",
    "datalistId": "dataListDefinitionId",
    "height": "400px",
    "pageSize": "10",
    "showPagination": "true",
    "showFilter": "",
    "showExport": "",
    "refreshOnChange": "",
    "rowClickAction": "",
    "emptyMessage": "No records found.",
    "filterParams": [],
    "customCss": ""
  }
}
```
**Notes:**
- Embeds a DataList view inside the form
- `filterParams`: list of `{ "name": "paramName", "value": "#fieldId#" }` to pass form field values as filters
- `refreshOnChange`: field ID to watch; refreshes list when that field changes

---

## MultiPagedForm (enterprise plugin)
```json
{
  "className": "org.joget.plugin.enterprise.MultiPagedForm",
  "properties": {
    "id": "wizardId",
    "nextButtonlabel": "Next",
    "prevButtonlabel": "Previous",
    "partiallyStore": "true",
    "storeMainFormOnPartiallyStore": "true",
    "onlyAllowSubmitOnLastPage": "",
    "css": "",
    "numberOfPage": {
      "className": "3",
      "properties": {
        "page1_formDefId": "firstSubFormId",
        "page1_label": "Step 1 Label",
        "page1_readonly": "",
        "page1_readonlyLabel": "",
        "page1_subFormParentId": "parent_id",
        "page2_formDefId": "secondSubFormId",
        "page2_label": "Step 2 Label",
        "page2_readonly": "",
        "page2_readonlyLabel": "",
        "page2_subFormParentId": "parent_id",
        "page3_formDefId": "thirdSubFormId",
        "page3_label": "Step 3 Label",
        "page3_readonly": "",
        "page3_readonlyLabel": "",
        "page3_subFormParentId": "parent_id"
      }
    }
  }
}
```
**Notes:**
- `numberOfPage.className` = number of pages as a string
- Each page references a sub-form; the wizard saves to each sub-form's table
- `subFormParentId`: HiddenField in the sub-form that links back to the main record

---

## GisPolygonCaptureElement (custom plugin)
```json
{
  "className": "<your.package>.gisui.element.GisPolygonCaptureElement",
  "properties": {
    "id": "geometry",
    "label": "",
    "apiEndpoint": "/jw/api/gis/gis",
    "apiId": "API-<uuid>",
    "apiKey": "%%%%<encrypted-key>%%%%",
    "captureMode": "BOTH",
    "defaultMode": "AUTO",
    "defaultLatitude": "<latitude>",
    "defaultLongitude": "<longitude>",
    "defaultZoom": "14",
    "tileProvider": "SATELLITE_ESRI",
    "showSatelliteOption": "true",
    "mapHeight": "500",
    "enableAutoCenter": "true",
    "autoCenterDistrictFieldId": "district",
    "autoCenterVillageFieldId": "town",
    "autoCenterLatFieldId": "auto_center_lat",
    "autoCenterLonFieldId": "auto_center_lon",
    "autoCenterZoom": "14",
    "autoCenterCountrySuffix": "Progressa",
    "autoCenterRetryOnFieldChange": "true",
    "gpsHighAccuracy": "true",
    "gpsMinAccuracy": "10",
    "autoCloseDistance": "15",
    "minVertices": "3",
    "maxVertices": "200",
    "minAreaHectares": "0.01",
    "maxAreaHectares": "1000",
    "areaFieldId": "area_hectares",
    "perimeterFieldId": "perimeter_meters",
    "centroidFieldId": "centroid_lat",
    "vertexCountFieldId": "vertex_count",
    "strokeColor": "#3388ff",
    "strokeWidth": "3",
    "fillColor": "#3388ff",
    "fillOpacity": "0.2",
    "enableOverlapCheck": "true",
    "overlapFormId": "schoolSite",
    "overlapGeometryField": "geometry",
    "overlapDisplayFields": "area_hectares",
    "overlapFilterCondition": "",
    "showNearbyParcels": "ON_DEMAND",
    "nearbyParcelsFormId": "schoolSite",
    "nearbyParcelsGeometryField": "geometry",
    "nearbyParcelsDisplayFields": "area_hectares",
    "nearbyParcelsMaxResults": "",
    "nearbyParcelsFilterCondition": "",
    "nearbyParcelsFillColor": "",
    "nearbyParcelsFillOpacity": "",
    "nearbyParcelsStrokeColor": "",
    "allowSelfIntersection": "",
    "enableSimplification": "",
    "simplificationTolerance": "",
    "required": "",
    "requiredMessage": "Please capture the school site boundary"
  }
}
```
**Notes:**
- Requires a GIS capture plugin (custom; not part of Joget) installed — the property names are those of one such plugin
- `apiKey` value must be encrypted with Joget's `%%%%...%%%%` wrapper
- Companion HiddenFields typically needed: `area_hectares`, `perimeter_meters`, `centroid_lat`, `vertex_count`, `auto_center_lat`, `auto_center_lon`
- `captureMode`: `"GPS"` (GPS only), `"DRAW"` (map draw only), `"BOTH"` (user chooses)
