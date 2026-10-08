---
name: joget-datalist-gen
description: >
  Generate Joget DX 8.x datalist JSON (the listing/grid/report layer)
  from a compact YAML or natural-language spec. Use whenever the user
  wants to: create a new datalist, add a list view for a form, build a
  dashboard or report (JdbcDataListBinder), add or change
  columns/filters/formatters on an existing list, render a foreign-key
  column as a label (OptionsValueFormatter), format a date column
  (DateFormatter), apply a cascading dropdown
  (a project-local CascadingMdmSelectFilterType) or date-range filter, or bulk-generate
  `list_*` companion lists for master data forms. Triggers on phrases
  like "create a datalist for X", "list view of Y", "build a report that
  joins ...", "show this column as a label", "filter by district then
  school", "add a date range filter", "make a dashboard". Use this even
  when the user does not say "datalist" — if they describe a list,
  table, grid, dashboard, or report in a Joget app, this is the right
  skill.
---

# Joget DX Datalist Generation Skill

Produce datalist JSON (the `<datalistDefinition>` payload of a Joget JWA
export) that imports cleanly into Joget DX 8.x without manual fixing.

A datalist is the listing surface that shows records — either over a
single form's table (`AdvancedFormRowDataListBinder`) or over a custom
SQL query (`JdbcDataListBinder`). It pairs with a userview menu (often a
`CrudMenu` or `DataListMenu`) which decides where the list shows up in
navigation. The datalist itself defines the columns, filters, default
sort, and how foreign-key codes are rendered as human labels.

The most common failure modes are: pointing the binder at a `formDefId`
that doesn't exist, listing a column whose `name` doesn't match an
actual database column on the form's table, or building a custom filter
that targets a non-existent MDM table. Checking the generated JSON
against the shape rules in this document, and against the app's own
forms, catches these before the user ever runs Joget.

---

## 1. Input the user may give you

**Compact YAML spec (preferred)**, in the shape shown here:

```yaml
datalist:
  id: list_md05school
  name: "List: MD.05 - School"
  binder:
    type: form-row              # form-row | jdbc
    form: md05school
  columns:
    - { name: code,            label: "School Code" }
    - { name: name,            label: "School Name" }
    - { name: districtCode,    label: "District", format: { fk: md03district, idColumn: code, labelColumn: name } }
    - { name: schoolType,      label: "School Type" }
  filters:
    - { name: name, type: text }
```

**Natural language**: "Make a list of learners grouped by school with a
filter for district and a date range filter on registration date" →
extract structure, choose JDBC or form-row binder based on whether a
join is needed, confirm any non-obvious choices.

**Bulk spec for MD lookups**: "generate the `list_*` datalists for these
40 MD forms" → generate one `list_*` datalist per form from a single
template, varying only the form id, the list id and the column set.

---

## 2. Workflow

1. **Read the spec.** Identify: id, name, binder type and target,
   columns, filters, default sort.
2. **Pick the binder.** Decision rule in section 4. Default to
   `form-row` (`AdvancedFormRowDataListBinder`) unless the spec needs a
   join, an aggregation, or computed columns — those need `jdbc`.
3. **Build the columns.** For each column, pick the right shape (thin
   vs. full canonical) and the right formatter (none, FK→label, date).
4. **Build the filters.** Pick filter type per the table in section 6.
5. **Verify references.** Every `formDefId`, every FK-formatter
   `formDefId`, every cascading filter `tableName` must resolve to
   something the app has. Check each reference against the app's own
   forms whenever a JWA or app folder is reachable.
6. **Output.** A complete datalist JSON file written to the output
   folder. If the user asked for a pasteable JWA snippet, also produce
   the XML-encoded version.

---

## 3. Top-level shape

A datalist JSON looks like this:

```json
{
  "id": "<datalist id>",
  "name": "<human-readable name>",
  "binder": { "className": "...", "properties": {} },
  "columns": [ /* column objects */ ],
  "filters": [ /* filter objects */ ],
  "actions": [],
  "rowActions": [],
  "order": "",
  "orderBy": "",
  "useSession": "false",
  "showPageSizeSelector": "true",
  "pageSize": 0,
  "pageSizeSelectorOptions": "10,20,30,40,50,100",
  "buttonPosition": "bothLeft",
  "checkboxPosition": "left"
}
```

Two top-level "house style" choices worth following:

- `actions` and `rowActions` are always `[]`. CRUD is wired via the
  userview's `CrudMenu`, not the datalist. Do not invent bulk actions.
- `pageSize: 0` means "use the default" (typically 10). Set
  `pageSize: 30` only for dashboards (matches `cardCollapsible: true`
  cards behavior).

Datalists exported from Joget's UI grow extra cosmetic keys
(`template`, `responsiveMode`, `cardCollapsible`, `description`,
`considerFilterWhenGetTotal`, `disableResponsive`,
`cardCollapseByDefault`, `draggabletable`, `hidePageSize`,
`rowActionsMode`, `showhidecolumns`, `showDataWhenFilterSet`). They all
default to empty strings when not set. **You can omit them in
hand-generated JSON** — Joget round-trips by filling defaults on
import. The names listed just above are the full set, so setting every
one of them explicitly is what matching the UI's export exactly takes.

---

## 4. Binders — pick one

| Need | Binder | className | Edition |
|---|---|---|---|
| List records of a single form | form-row | `org.joget.plugin.enterprise.AdvancedFormRowDataListBinder` | EE |
| Custom SQL (joins, aggregates, computed columns) | jdbc | `org.joget.plugin.enterprise.JdbcDataListBinder` | EE |
| Static option list (rare, mostly internal) | options | `org.joget.apps.form.lib.FormOptionsBinder` | CE |

**On a Community instance the top two are unavailable.** The CE equivalents, verified present in
`wflow-core/.../apps/datalist/lib/` at tags `9.0.7` and `9.1.0.1`, are:

| CE fallback | className | Note |
|---|---|---|
| List records of a single form | `org.joget.apps.datalist.lib.FormRowDataListBinder` | the plain binder `AdvancedFormRowDataListBinder` extends |
| Arbitrary data via script | `org.joget.apps.datalist.lib.BeanShellDatalistBinder` | the CE answer to a JDBC join — no native SQL binder in CE |
| JSON API source | `org.joget.apps.datalist.lib.JsonApiDatalistBinder` | |

The complete CE datalist library is: `AppIconTemplate`, `BeanShellColumn`,
`BeanShellDatalistBinder`, `DefaultFormatter`, `FormRowDataListBinder`,
`FormRowDeleteDataListAction`, `HyperlinkDataListAction`, `ImageFormatter`,
`JsonApiDatalistBinder`, `RowNumberColumn`, `SimpleCardTemplate`, `StaleCacheDataListBinder`,
`TextFieldDataListFilterType`. Anything else this skill names is Enterprise or bespoke.

Note `HyperlinkDataListAction` (used in the addendum below) is fully qualified
`org.joget.apps.datalist.lib.HyperlinkDataListAction` — it is CE, not Enterprise.

### form-row binder

```json
{
  "className": "org.joget.plugin.enterprise.AdvancedFormRowDataListBinder",
  "properties": {
    "formDefId": "<formId>",
    "extraCondition": ""
  }
}
```

`extraCondition` accepts SQL fragments with hash-variable substitution.
Examples:

- `"e.c_district = '#requestParam.district#'"` — filter by query string
- `"e.c_officer = '#currentUser.username#'"` — current user's records
- `"e.c_status = 'active' AND e.c_archived != 'true'"` — static filter

The alias `e` refers to the form's main table. Column names get the
`c_` prefix Joget adds in the database (form id `learnerRegistration` → table
`app_fd_learnerRegistration`, field `gender` → column `c_gender`).

### jdbc binder

```json
{
  "className": "org.joget.plugin.enterprise.JdbcDataListBinder",
  "properties": {
    "jdbcDatasource": "default",
    "sql": "SELECT col_a, col_b FROM app_fd_xyz WHERE ...",
    "primaryKey": "col_a",
    "optimisePaging": "",
    "cacheRowCount": ""
  }
}
```

Use this when:

- The list joins multiple form tables (e.g. learner + school + district)
- You need aggregations (`COUNT`, `SUM`, `GROUP BY`)
- You need computed/derived columns (`CASE`, `ROUND`, `EXTRACT`)
- The query needs CTEs (`WITH ... AS`) or subqueries

`primaryKey` is the column whose value gets used as the row id (for
edit links, custom row actions, and dedup). Pick a column the SQL is
guaranteed to return uniquely.

`jdbcDatasource: "default"` uses the Joget app's main datasource. Don't
override unless you've explicitly set up a secondary datasource.

**SQL conventions:**
- Reference tables as `app_fd_<formId>` (form id → table name, with
  `c_` prefix on field columns).
- Hash variables: `'#requestParam.foo#'`, `'#currentUser.username#'`,
  `'#date.yyyy-MM-dd#'`, `'#dateformat.<param>.yyyy-MM-dd#'`. Quote
  every hash variable in SQL — they are textually substituted.
- Filter parameters from the datalist's filters bind into the SQL via
  `#requestParam.<filterName>#`. Wrap in
  `WHERE ('#requestParam.foo#' = '' OR ...)` to make filters optional.

A typical example is a `registrationsOverview` list — an aggregated
district/school breakdown with cascading MDM filters and a date range.

---

## 5. Columns

Two shapes are valid: thin and full canonical.

**Thin (minimal):**

```json
{ "name": "<column>", "id": "column_0", "label": "<header>" }
```

Use this for simple lists where every column is just a passthrough. The
`list_*` datalists for MD lookups typically use this shape. `id` is just
a stable identifier — `column_0`, `column_1`, etc. is the convention.

**Full canonical (UI-exported shape):**

```json
{
  "name": "<column>",
  "id": "column_0",
  "label": "<header>",
  "hidden": "false",
  "renderHtml": "",
  "format": { "className": "", "properties": {} },
  "sortable": "true",
  "datalist_type": "column",
  "exclude_export": "",
  "width": "",
  "headerAlignment": "",
  "alignment": "",
  "style": "",
  "action": { "className": "", "properties": {} }
}
```

Use the full shape when ANY of these is true:

- The column has a formatter (`format.className` non-empty)
- The column has a custom width / alignment / style
- The column should be filterable in JDBC dashboards (set `filterable: true`)
- `renderHtml: "true"` to render raw HTML returned by the SQL (useful
  for badge/pill displays computed in `CASE` statements)
- You want consistent diffs against a UI-edited datalist

`name` is the database column name as it comes back from the binder.
For form-row binder, this is the field id you see in the form (Joget
strips the `c_` prefix automatically). For JDBC, it's the column alias
in the SELECT.

### Column formatters

`format.className` controls how the cell value is transformed for
display. Only formatters that exist as installed plugins in this Joget
work. The two formatters used in production:

**Render an FK code as a human label** (`OptionsValueFormatter`):

```json
"format": {
  "className": "org.joget.plugin.enterprise.OptionsValueFormatter",
  "properties": {
    "optionsBinder": {
      "className": "org.joget.apps.form.lib.FormOptionsBinder",
      "properties": {
        "formDefId": "<MD form id>",
        "idColumn": "code",
        "labelColumn": "name",
        "addEmptyOption": "true",
        "groupingColumn": "",
        "useAjax": "",
        "extraCondition": "",
        "cacheInterval": "",
        "emptyLabel": ""
      }
    },
    "options": []
  }
}
```

This looks up the cell value (a code) against the target form's table
and renders the matching `labelColumn`. A common MD lookup convention
is `idColumn: "code"`, `labelColumn: "name"` (sometimes `idColumn:
"id"` for forms that don't have a dedicated `code` field — verify
against the actual MD form definition).

**Format a date** (`DateFormatter`):

```json
"format": {
  "className": "org.joget.plugin.enterprise.DateFormatter",
  "properties": {
    "dataFormat": "yyyy-MM-dd"
  }
}
```

For other format strings (e.g. `dd MMM yyyy`, `yyyy-MM-dd HH:mm`) just
change `dataFormat` — Joget passes it to Java's `SimpleDateFormat`.

---

## 6. Filters

Each filter is an entry in the top-level `filters` array:

```json
{
  "name": "<column to filter on>",
  "id": "filter_0",
  "label": "<filter label>",
  "type": { "className": "...", "properties": {} },
  "filterParamName": "d-XXXXXX-fn_<column>"
}
```

`name` must match the column the filter applies to. `filterParamName`
is the URL/form parameter name Joget uses to pass the filter value
through the request — Joget generates it on UI export
(`d-<digits>-fn_<column>`). When generating fresh, you can supply any
unique string; an easy convention is `flt_<column>` (the value is
opaque to Joget's runtime as long as it's stable per filter).

### Filter type table

| Filter intent | Type | className | Edition |
|---|---|---|---|
| Free text contains | text | `org.joget.apps.datalist.lib.TextFieldDataListFilterType` | CE |
| Static dropdown of options | selectbox | `org.joget.plugin.enterprise.SelectBoxDataListFilterType` | EE |
| Cascading MDM dropdown (district→school) | cascading | `<your.package>.CascadingMdmSelectFilterType` | bespoke |
| Date range (from/to) | daterange | `<your.package>.DateRangeFilterType` | bespoke |

`TextFieldDataListFilterType` is the **only** filter type in Community — there is no CE selectbox,
cascading or date-range filter. The two `<your.package>.*` filters are project-local plugins a
build writes for itself (see `joget-plugin-dev`), with no upstream provenance; confirm they are
deployed on the target instance before specifying them.

Both `<your.package>.*` filters are project-local, so their full property
shapes are not documented upstream: read them off a working datalist in
the target app, or off the deployed plugin, before specifying new ones.
The cascading filter's `tableName` is the form id, not the table name —
see the pitfall note in section 12.

### Verifying against the Joget source

The Joget **Community Edition v9** source is public: clone the GPLv3 repository
`https://github.com/jogetworkflow/jw-community` (below, `/path/to/jw-community`). The conventions in this skill were derived from an exported `.jwa`, not from the source —
when a binder, formatter, filter or column property is uncertain, grep the source; it outranks
this file.

```bash
SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
ls $SRC/wflow-core/src/main/java/org/joget/apps/datalist/lib/    # the complete CE library
grep -rn "class DataListColumn\|class DataList\b" $SRC/wflow-core/src/main/java/org/joget/apps/datalist/model/
grep -n "FORM_PREFIX_TABLE_NAME = \|FORM_PREFIX_COLUMN = " \
  $SRC/wflow-core/src/main/java/org/joget/apps/form/dao/FormDataDaoImpl.java
```

That last grep is the authority for the `app_fd_` / `c_` conventions this skill relies on when
writing JDBC SQL — they are declared as constants (`"app_fd_"`, `"c_"`), not derived.

**It is Community Edition, so absence proves nothing for Enterprise classes.** Every
`org.joget.plugin.enterprise.*` name above — `AdvancedFormRowDataListBinder`,
`JdbcDataListBinder`, `OptionsValueFormatter`, `DateFormatter`, `SelectBoxDataListFilterType` —
is genuinely absent from the checkout and that is expected, not a defect. Treat "not in the
source" as proof of absence **only** for `org.joget.apps.*` packages. (Useful corollary:
`org.joget.apps.datalist.lib.DateFormatter` really does not exist — confirmed in the source —
which is why the date formatter must be the Enterprise one.)

---

## 7. Sort

Default sort comes from two top-level keys:

```json
"orderBy": "<column name>",
"order": "ASC"
```

`order` accepts `"ASC"` or `"DESC"`. Both empty means "no default sort"
(Joget falls back to insertion order). For form-row binder, the
`orderBy` value is the field id (no `c_` prefix). For JDBC, it must be
a column alias the SELECT exposes.

---

## 8. House-style patterns

These are conventions verified across the 120 datalists of one
production application. Follow them unless the spec tells you
otherwise — they keep diffs sane and behavior consistent.

- **Naming:** `list_<formId>` for the auto-list, custom names like
  `registrationsOverview` or `dl_learner_listing_advanced` for dashboards/reports.
- **MD lookups all use:**
  - thin column shape
  - binder = form-row, `formDefId` only, no `extraCondition`
  - no filters
  - no sort
  - columns: `code` and `name` (occasionally with extra metadata fields)
- **Form-row default**: `pageSize: 0`, `useSession: "false"`,
  `showPageSizeSelector: "true"`, `pageSizeSelectorOptions:
  "10,20,30,40,50,100"`, `buttonPosition: "bothLeft"`,
  `checkboxPosition: "left"`.
- **JDBC dashboards** (`registrationsOverview`, `dl_learner_listing_advanced`,
  `listLearnersBySchool`): use `pageSize: 30`, `useSession: "true"`,
  `cardCollapsible: "true"`, full canonical column shape.
- **FK columns**: when displaying a code that lives in an MD lookup,
  add an `OptionsValueFormatter` so the user sees the human name.
  Don't show raw codes if a label is available.
- **Actions/rowActions arrays**: leave them as `[]`. CRUD wiring lives
  in the userview's `CrudMenu`, not the datalist.

---

## 9. Generating ids

Stable ids matter for diffs:

- **Datalist id** = the spec's id (no UUID).
- **Column id** = `column_<index>` (`column_0`, `column_1`, ...) — UI
  exports use this convention. Hand-pick stable suffixes (e.g.
  `column_district`) for dashboards where row order in the SELECT
  changes more than column meaning.
- **Filter id** = `filter_<index>`.
- **filterParamName**: the UI uses `d-<6digits>-fn_<column>`. For
  hand-generated lists, `flt_<column>` is fine.

---

## 10. Output format

Default: write a complete datalist JSON to `./_datalists/<id>.json`,
pretty-printed with 2-space indent. If the spec generates many lists at
once (e.g. bulk MD lookups), write one file per datalist using its id
as the filename.

If the user explicitly asked for a JWA-pasteable snippet, also produce
the XML-encoded version (`<json>` element wraps the JSON with HTML
entities).

---

## 11. Validation

Check the generated JSON against the shape rules in this document, and
against the app itself whenever a JWA or app folder is available. The
check:

1. Parses the JSON (catches malformed output).
2. Confirms the binder className is one of the plugins your project
   allows (keep that list in the project's own notes).
3. For form-row binder: verifies the `formDefId` exists in the target
   app, and checks each column `name` against the actual fields
   declared on that form. Warns on column names that don't match a known
   field.
4. For JDBC binder: parses the SQL well enough to extract referenced
   `app_fd_*` table names and warns on any that don't correspond to
   known forms. Also warns when the `primaryKey` isn't in the SELECT
   alias list (heuristic — false positives are possible for complex SQL).
5. For each `OptionsValueFormatter` column, verifies the embedded
   FK `formDefId` exists.
6. For each `CascadingMdmSelectFilterType` filter, verifies the
   `tableName` corresponds to a real form (the filter reads from
   `app_fd_<tableName>` directly).

If any check fails, fix the spec or the JSON before showing the result
to the user — broken refs in a datalist produce silently-empty pages,
which are very confusing to debug after the fact.

---

## 12. Common pitfalls

- **Wrong column `name`.** The column's `name` is the *field id* on
  the form (no `c_` prefix in the JSON, but `c_<name>` is what's in the
  database). If the form's field is `national_id` then the column name
  is `national_id`. If you put `c_national_id`, Joget renders an empty
  cell.
- **OptionsValueFormatter idColumn vs labelColumn mismatch.** If the
  source form stores its codes in a field called `code`, set
  `idColumn: "code"`. If it uses Joget's default `id`, set `idColumn:
  "id"`. Get this wrong and every row renders empty. The MD lookups in
  a typical app use `idColumn: "code"`, `labelColumn: "name"`.
- **Hash variable not quoted in SQL.** A Joget hash variable like
  `#requestParam.school_id#` is textually substituted — if you write
  `WHERE id = #requestParam.school_id#` and the parameter is empty, the
  SQL becomes `WHERE id = ` and breaks. Always quote: `WHERE id =
  '#requestParam.school_id#'` and guard with `('#requestParam.school_id#'
  = '' OR id = '#requestParam.school_id#')`.
- **Cascading filter targeting a non-existent table.** The cascading
  filter reads directly from `app_fd_<tableName>` — the `tableName`
  property is the form id, not the underlying table name. If the form
  id is truncated to 24 chars (Joget's table name limit), use the
  truncated id (e.g. `md04specialNeedsCate`, not the full
  `md04specialNeedsCategory`).
- **`primaryKey` missing from the SELECT.** The JDBC binder uses
  `primaryKey` as the row id — if the SQL doesn't return that column,
  the list renders but row actions and edit links break.
- **Filtering with extraCondition vs filters.** `extraCondition` on
  the binder is unconditional — every load applies it. The `filters`
  array is user-controlled (form filters in the UI). Use
  `extraCondition` for tenant/user scoping, `filters` for user choice.

---

## 13. When this skill is the wrong tool

- If the user wants a **form** (the data-entry surface), use
  `joget-form-gen`.
- If the user wants a **userview** (navigation, menus, theme), use
  `joget-userview-gen`.
- If the user wants a **workflow process**, use `joget-workflow-gen`
  (when available).


---

## QA-hardening addendum — lessons from an earlier build (2026-06-14)

_Folded in from an earlier build and three rounds of UX review. Supplements the sections named below; where a point sharpens an existing rule, the addendum wins._

Anchored to the current sections (§5 Columns, §6 Filters, §7 Sort, §8 house style, §12 pitfalls,
§13 wrong tool). All additive.

---

## §5 Columns — ADD: every column sortable + cleaned labels + `listColumns` curation

> **Sortable is not optional.** Emit `"sortable":"true"` on **every** column, not just lookup/date
> columns. A list the spec calls "sortable" must back it on all columns. (In one review round 0 of 9
> columns were sortable while the FIS claimed "sortable".)
>
> **Clean column labels** — form-field labels carry authoring annotations that are noise as a grid
> header. Strip `[...]` always, and strip **every** `(...)` parenthetical EXCEPT a small units/codes
> allowlist. Keep a currency code, `(%)`, `(G1-G13)`, `(days)`, `(months)`; drop FK refs `(mdSchool)`,
> provenance `(set by engine)`, glosses `(learner being transferred)`, enum hints `(APPROVED/RETURNED/REJECTED)`.
> ```python
> _KEEP_PAREN = re.compile(r"^(USD|EUR|%|G\d+(\s*[-–]\s*G\d+)?|days|months|years)$", re.I)
> def clean_label(label):
>     s = re.sub(r"\s*\[[^\]]*\]", "", label or "")
>     s = re.sub(r"\s*\(([^)]*)\)",
>                lambda m: m.group(0) if _KEEP_PAREN.match(m.group(1).strip()) else "", s)
>     return re.sub(r"\s{2,}", " ", s).strip().rstrip(";,").strip()
> ```
>
> **Curate wide companion lists with a `listColumns` form hint.** A form with N fields becomes an
> N-column wall (one earlier build had an 18-column list). Accept an ordered `listColumns: [id, ...]` subset on the
> form spec and emit exactly those columns, key column first (`registerNumber` / `applicationRef` / `code`). Absent the
> hint, behaviour is unchanged. Target ≤ ~8 columns for a companion list.

## §6 Filters — ADD: typed filters + the one-`requestParam`-per-URL law

> **Emit typed filters, not free text.** Use `SelectBoxDataListFilterType` for enumerable columns
> (status, school, grade) and the native `TextFieldDataListFilterType` for free text (register number).
> Form-companion lists should auto-filter on the obvious keys (register number/status/school/grade/type/officer).
>
> **JDBC filter + drill ride `#requestParam.X#` SQL guards**, written optional so an absent param shows
> all: `('#requestParam.fschool#' = '' OR col = '#requestParam.fschool#')`. A summary→detail drill is a
> `HyperlinkDataListAction` passing `?fschool=<cell value>` to the same param.
>
> **⚠ One requestParam per URL.** A JdbcDataListBinder reliably substitutes only ONE `#requestParam#`
> per request — combining two filters/drills in one URL leaves the second resolving to `''` (its guard
> no-ops). **Design single-param drills**; do not promise AND-ed multi-filter on a JDBC list.

## §7 Sort — ADD (one line)
> Default-sortable is set per-column in §5 (every column). This section governs the default sort order
> only.

## §8 House-style patterns — ADD: drill-down is part of the contract

> **Drill-downs are emitted, not described.** A summary list drills to its detail list via a
> `HyperlinkDataListAction` (`href` = `#request.contextPath#/web/userview/<app>/<uv>/_/<menuId>`,
> `hrefColumn`/`hrefParam`); a detail list drills to the record (`Open registration → <registrationForm>_crud?id=`).
> If the FIS says "drill-down", the generated list MUST carry the action — verify in the acceptance test.

## §12 Common pitfalls — ADD three

> - **A form-companion datalist has NO standalone `/_/<listId>` URL.** It is reached only through the
>   CrudMenu that owns it, at `/_/<crud customId>` (e.g. `/_/learnerTransfer_crud`). Fetching `/_/list_learnerTransfer`
>   returns a **blank 200 body** (no error, no rows). Only a `DataListMenu` gives a list its own
>   `/_/<listId>` URL. An acceptance test that render-checks a companion list MUST resolve its menu from
>   the deployed `app_userview` json (`menus[].datalistId == listId → customId`), not guess the URL.
> - **Don't over-claim in the spec.** If a column isn't sortable, a filter isn't wired, or no
>   `HyperlinkDataListAction` is emitted, the FIS/TRACE may not say "sortable / filterable / drill-down".
>   The generator and the spec text must agree.
> - **Charting a list ≠ scraping a list.** If a chart needs this list's data, bind a native
>   `SqlChartMenu` to the datalist (`datasource:datalist`) — never fetch the rendered list HTML and parse
>   the table client-side (it couples to column order/labels/markup). See `joget-dashboard-gen`.
