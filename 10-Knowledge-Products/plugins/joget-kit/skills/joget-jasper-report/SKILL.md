---
name: joget-jasper-report
description: >
  Author typeset, declarative JasperReports (.jrxml) reports for Joget DX 8/9
  Enterprise and expose them through a JasperReportsMenu pushed as part of the
  userview (config-as-code) — no GUI designer, no plugin build.
  Use WHENEVER the user wants a real "report" (not a datalist grid): financial
  statements (Balance Sheet, P&L, Trial Balance), customer account statements,
  PDF/Excel exports, period or "as-at-date" parameterised reports, invoices,
  or any pixel-laid-out document driven by SQL against the Joget database.
  Triggers: "make a report", "financial statement", "balance sheet PDF",
  "jasper", "jrxml", "customer statement", "printable", "export to PDF",
  "as-at date report", "this grid is not a report". Joget Enterprise only
  (the JasperReportsMenu is part of jw-enterprise; not in Community).
---

# Joget JasperReports — declarative reporting

A JasperReport in Joget = **one `JasperReportsMenu`** userview menu whose
`jrxml` property holds the whole report design inline. The menu **compiles the
JRXML at runtime**, runs its SQL against a datasource, renders **HTML on screen**,
and offers **PDF + Excel** export. Because it is just a userview menu, the entire
report ships **config-as-code** through the same push that ships the userview — no
GUI report designer, no Java build, no shared-plugin changes.

This is the right tool when a datalist grid "is not a report". A datalist is a
sortable table; Jasper gives sections, subtotals, ruled totals, a header/date,
and true PDF.

## When this applies
- Joget **Enterprise** (class `org.joget.plugin.enterprise.JasperReportsMenu`
  must exist — it is bundled in `jw-enterprise` jars; confirm with
  `find <joget> -iname 'JasperReportsMenu.class'`).
- You can already express the report's data as **one SQL query** against the
  Joget DB (tables are `app_fd_<form>`, columns `c_<field>`).

## The five hard-won rules (read before writing any JRXML)
1. **`language="java"`, NOT `language="groovy"`.** Joget bundles Groovy 2.4,
   whose report compiler throws `ClassCastException: String cannot be cast to
   [Ljava.lang.Object;` (mentioning `module java.base of loader 'bootstrap'`)
   on Java 17/21 runtimes (DX9 / Tomcat 11). The JDT (`java`) compiler is also
   bundled and is Java-17-safe. Use it. All expressions must then be valid Java
   with **no checked exceptions** (e.g. do not call `SimpleDateFormat.parse`
   in an expression — it throws `ParseException` -> compile error).
2. **Grid-type menu properties must be JSON arrays, never strings.** The menu
   casts `parameters` to `Object[]`. Setting `"parameters": ""` (empty string)
   reproduces the exact `String cannot be cast to [Ljava.lang.Object;` error.
   Use `"parameters": []` when empty, or
   `"parameters": [{"name":"x","value":"..."}]`.
3. **`datasource": ""`** means "use the current Joget profile datasource"
   (the main DB, e.g. PostgreSQL `jwdb`). That is what you want — your
   `app_fd_*` tables live there. Only set a custom JDBC datasource to read a
   *different* database.
4. **`export` is a `;`-joined string**, e.g. `"pdf;xls"` (it is read with
   `getPropertyString().contains(...)`, so a string is correct here — this is
   the one multi-value property that is NOT an array).
5. **URL/request parameters are NOT auto-passed to the report.** You must map
   each one in the menu's `parameters` grid using the hash variable
   `#requestParam.<name>#`. And make the SQL tolerant of an empty value
   (`COALESCE(NULLIF($P{p},''), <default>)`) because a direct menu click sends
   no request param.

## Build steps
1. **Write the SQL** and verify it in the DB first (correct numbers, and for
   accounting reports that control totals balance). Keep it as a single
   statement; CTEs and `UNION ALL` are fine (this is how you build section
   subtotals + a bottom line as extra rows with a `sort` key — see the
   template).
2. **Write the `.jrxml`** as a version-controlled file under `app/reports/`.
   Start from `reference/feeStatement.jrxml` in this skill. Schema:
   classic `http://jasperreports.sourceforge.net/jasperreports` namespace
   (same as Joget's bundled `samples/jw_directory.jrxml`).
   - `<parameter>` blocks come **before** `<queryString>`.
   - Use `$P{name}` in the query for parameters (bound safely as `?`),
     `$F{field}` for fields, `$V{PAGE_NUMBER}` for built-ins.
   - Style totals with `<style>` + `<conditionalStyle>` keyed on a `line_type`
     field (bold + `<box><topPen/></box>` for subtotal/net rows).
   - Amounts: `<textField pattern="#,##0.00;(#,##0.00)">` for accounting-style
     negatives in parentheses; field class `java.math.BigDecimal`.
3. **Embed + expose**: put a `JasperReportsMenu` in the userview category, with
   the jrxml inline. Use `tooling/embed_report.py` (in this skill) to inject the
   `.jrxml` file into the menu in `v.json` so the file stays the source of truth.
   Menu property shape:
   ```json
   {
     "className": "org.joget.plugin.enterprise.JasperReportsMenu",
     "properties": {
       "id": "<32-hex>", "customId": "myReport", "label": "My Report",
       "datasource": "", "output": "html", "export": "pdf;xls",
       "parameters": [],
       "jrxml": "<...the whole .jrxml...>"
     }
   }
   ```
4. **Friendly parameters (no URLs).** To let users choose a value on screen,
   add a small HTML form to the menu's `customHeader` (a `method="get"` form
   whose input `name` matches the request param), AND map it into the report:
   `"parameters": [{"name":"asOfDate","value":"#requestParam.asOfDate#"}]`.
   See `reference/customHeader.html`. The form reloads the userview page with
   `?asOfDate=...`; the grid mapping feeds it to `$P{asOfDate}`.
5. **Push** (no build): send `app/userviews/v.json` to the instance with your
   project's push step — a re-import of the app, or a program of your project
   that writes the userview through an API the instance serves:
   ```
   <your push step> app/userviews/v.json
   ```
   Open the menu; use the PDF/Excel links to export.

## Verify
- Page renders the typeset report (not the ClassCastException page).
- For accounting reports, the control identity holds (e.g. debits = credits;
  the subtotals add up to the grand total). Re-run the SQL in the DB and compare.
- Toggle the parameter (pick an earlier date) and confirm the figures change
  and the header date updates.

## JRXML element order (the schema is strict — wrong order = won't compile)
Top-level children MUST appear in this order:
`property*`, `style*`, `parameter*`, `queryString`, `field*`, `sortField*`,
`variable*`, `group*`, then the bands in exactly this sequence:
`background`, `title`, `pageHeader`, `columnHeader`, `detail`, `columnFooter`,
`pageFooter`, `summary`, `noData`.
Inside a **`<subDataset>`** (used for charts) the order is `queryString` THEN
`field*` — same as the main report. Putting `<field>` before `<queryString>`
throws the same `cvc-complex-type.2.4.a` error. Charts/JFreeChart ARE available
(jfreechart + jcommon are bundled): a `<pieChart>`/`<barChart>` with a
`<datasetRun subDataset="..."><connectionExpression>$P{REPORT_CONNECTION}</connectionExpression></datasetRun>`
renders fine — the Joget Jasper menu fills with a live connection.
Common trap: **`<summary>` comes AFTER `<pageFooter>`, not before.** Putting
summary before pageFooter throws
`cvc-complex-type.2.4.a: Invalid content ... pageFooter ... One of ... noData is
expected`. Groups are declared (with their group bands) BEFORE `title`.

## Common errors -> cause
- `Invalid content ... {pageFooter}. One of ...{noData} is expected` -> bands
  out of order; put `pageFooter` before `summary` (see element order above).
- `Invalid Jasper Report Definition (JRXML)` + `String cannot be cast to
  [Ljava.lang.Object;` -> a grid property is a string (`parameters`), OR you are
  on `language="groovy"`. Fix per rules 1 & 2.
- Report ignores the URL parameter -> you did not map `#requestParam.x#` in the
  `parameters` grid (rule 5).
- Empty / no rows when opened directly -> SQL not tolerant of empty parameter;
  wrap with `COALESCE(NULLIF($P{x},''), <default>)`.
- Compile error on a date/parse expression -> checked exception in a Java
  expression; avoid `parse(...)`, format `new java.util.Date()` instead or pass
  the value pre-formatted.
- **Summary figures in a group/page header (the "as-at box" above the detail).**
  In this Joget/Jasper build, several separately-positioned value cells in a
  group header render BLANK — and this is NOT fixed by any of: using a numeric
  textField, `evaluationTime="Report"`, or switching each cell to a
  `java.text.DecimalFormat` String. (A single field like the institution name still
  renders, which is misleading.) The pattern that DOES work reliably: render the
  whole summary as **ONE full-width String textField** with
  `isStretchWithOverflow="true"`, concatenating labels + formatted values in one
  expression, each value **null-guarded**, e.g.
  `"Fees due: " + ($F{fees_due}==null?"n/a":new java.text.DecimalFormat("#,##0.00").format($F{fees_due})) + "    Fees paid: " + (...)`.
  Detail-band numeric cells are fine — this only bites multi-cell header layouts.
  (Root cause not fully pinned down; this is the empirically reliable recipe.)
  Tip: keep the null-guard `?"n/a":` in place — if you ever see `n/a` it means the
  field really is null (a query/binding problem), not a rendering one.
- A cell prints the literal text `null` -> the textField returns null and
  `isBlankWhenNull` defaults to false. Add `isBlankWhenNull="true"` to any
  `<textField>` that can evaluate to null (e.g. opening-balance rows, optional
  amounts).

## Files in this skill
- `reference/feeStatement.jrxml` — full worked example, set in Progressa: the
  application fees PHEQA, the quality authority, has received, by kind of
  institution (sections, subtotals, a grand total, conditional bold totals,
  asOfDate parameter).
- `reference/customHeader.html` — the date-picker header form.
- `tooling/embed_report.py` — inject a `.jrxml` file into a JasperReportsMenu in
  a userview JSON (keeps the `.jrxml` as the source of truth).
