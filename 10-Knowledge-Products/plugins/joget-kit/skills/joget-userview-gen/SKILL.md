---
name: joget-userview-gen
description: >
  Generate syntactically correct Joget DX 8.x userview JSON (the navigation
  layer: categories, menus, theme, permissions) from a compact YAML or
  natural-language spec. Use this skill whenever the user wants to: create
  a new userview, add a category or menu to an existing userview, expose
  forms or datalists in the navigation, configure CrudMenu / DataListMenu /
  ApiKeyMenu / HtmlPage, set up role-based permissions on menus, or theme a
  userview (Dx8TrimedaTheme, logo, favicon). Triggers on phrases like
  "create a userview", "add a menu for ...", "expose this form in the nav",
  "build the navigation for ...", "I need a portal page for ...", "lock this
  menu to admins", or asking for an "HtmlMenu" (no such plugin exists — the
  skill says what to use instead), or any request to author or modify a Joget
  userview JSON.
  Use this skill even when the user does not explicitly say "userview" — if
  they describe navigation, menu structure, or who can see what in a Joget
  app, this is the right skill.
---

# Joget DX Userview Generation Skill

Produce userview JSON (the `<userviewDefinition>` payload of a Joget JWA
export) that imports cleanly into Joget DX 8.x without manual fixing.

A userview is the navigation/portal layer that sits on top of forms and
datalists. Every menu in a userview is a thin pointer to existing forms
(via `formDefId`, `addFormId`, `editFormId`) or datalists (via
`datalistId`). The most common failure mode when generating userview JSON
is pointing a menu at a form or datalist that does not exist in the app —
the import succeeds but the menu is silently broken at runtime. Checking
every referenced id against the target app before the JSON is handed over
catches this before the user ever sees the error.

---

## 1. Input the user may give you

Accept any of these — extract the structure before generating:

**Compact YAML spec (preferred)**, in the shape shown here:

```yaml
userview:
  id: v
  name: "Learner Registry"
  theme: Dx8TrimedaTheme
  logo: "#appResource.plr_logo_120.png#"
  permission: LoggedInUserPermission

categories:
  - label: "Registration Forms"
    icon: "fa fa-tasks"
    menus:
      - type: crud
        label: "01 - Learner Registration"
        form: learnerRegistration
        datalist: list_learnerRegistration
      - type: crud
        label: "02 - Learner Transfer"
        form: learnerTransfer
        datalist: list_learnerTransfer

  - label: "Reports"
    icon: "fa fa-chart-bar"
    menus:
      - type: datalist
        label: "Overview"
        datalist: registrationsOverview
```

**Natural language**: "Add a new category called Transfers with one menu
for the learnerTransfer form and another for transferLetter. Lock the whole
category to the role `admin`." → Extract the same structure mentally and
confirm with the user only if something is genuinely ambiguous.

**Patch on existing userview**: the user gives you an exported `userview.json`
and a delta. Don't rewrite from scratch — load the JSON, mutate it
surgically, preserve every existing menu/category id and customId so
external bookmarks keep working.

---

## 2. Workflow

1. **Read the spec.** Identify: userview id, theme, top-level permission,
   list of categories, and per-category menus.
2. **Verify referenced ids exist.** For every `form`, `datalist`, and
   `editFormId/addFormId` mentioned, confirm it's an actual id in the
   target app. If you have access to the JWA or the app folder, check each
   id against `appDefinition.xml` after generation. If you don't, list the
   referenced ids in your reply so the user can spot a typo.
3. **Pick the menu type.** Use the decision table in section 4. When in
   doubt, pick `CrudMenu` for "let users add/edit a record" and
   `DataListMenu` for "show a read-only list".
4. **Generate JSON.** Follow the canonical shapes in section 4. Don't
   invent property names — every property in those shapes was extracted
   from a working JWA.
5. **Validate.** Check the JSON against section 10 if a JWA is reachable.
   Otherwise sanity-check by parsing the JSON and listing referenced ids.
6. **Output.** A single JSON blob the user can paste into a JWA's
   `<userviewDefinition><json>...</json></userviewDefinition>` element, OR
   a complete `userview.json` file written to the output folder. Default
   to a file unless the user asked for a snippet.

---

## 3. Top-level shape

A userview JSON looks like this at the top:

```json
{
  "className": "org.joget.apps.userview.model.Userview",
  "categories": [ /* UserviewCategory objects, see §4 */ ],
  "properties": {
    "logoutText": "Logout",
    "welcomeMessage": "#date.EEE, d MMM yyyy#",
    "name": "<userview name>",
    "description": "",
    "footerMessage": "Powered by Joget",
    "id": "<userview id, short>"
  },
  "setting": {
    "properties": {
      "tempDisablePermissionChecking": "",
      "userviewDescription": "",
      "userviewId": "<same as id>",
      "hideThisUserviewInAppCenter": "",
      "userview_thumbnail": "<#appResource.xyz.png# or empty>",
      "userview_category": "",
      "theme": { /* see section 6 */ },
      "permission": { /* see section 5 */ },
      "userviewName": "<userview name>"
    }
  }
}
```

Two things to keep consistent: `properties.id` and
`setting.properties.userviewId` must match. `properties.name` and
`setting.properties.userviewName` should also match.

---

## 4. Categories and menus

Every category looks like this:

```json
{
  "className": "org.joget.apps.userview.model.UserviewCategory",
  "menus": [ /* menu objects */ ],
  "properties": {
    "hide": "",
    "permission": { "className": "", "properties": {} },
    "comment": "",
    "id": "category-<uuid>",
    "label": "<i class=\"fa fa-tasks\"></i> <Category Title>",
    "iconIncluded": true
  }
}
```

The `<i class="fa ...">` tag inside the label is how Joget renders the
icon next to the category title in the sidebar. If the user gives you
`icon: "fa fa-tasks"` in the spec, fold it into the label like this — do
NOT put it in a separate `icon` property (that property exists on menus
but is generally ignored on categories).

### Menu type decision table

| User intent | Menu type | className | Edition |
|---|---|---|---|
| Let user list / add / edit / delete records of a form | CRUD | `org.joget.plugin.enterprise.CrudMenu` | EE |
| Show a read-only or custom datalist (dashboards, reports) | DataListMenu | `org.joget.apps.userview.lib.DataListMenu` | CE |
| Manage API keys for the app | ApiKeyMenu | `org.joget.api.lib.ApiKeyMenu` | EE |
| Show static HTML | HtmlPage | `org.joget.apps.userview.lib.HtmlPage` | CE |
| Link to an external URL | Link | `org.joget.apps.userview.lib.Link` | CE |
| Inbox / pending tasks for assigned workflows | InboxMenu | `org.joget.apps.userview.lib.InboxMenu` | CE |
| Launch a workflow process | RunProcess | `org.joget.apps.userview.lib.RunProcess` | CE |
| Show a single form (no list) | FormMenu | `org.joget.apps.userview.lib.FormMenu` | CE |

> **⚠ There is no `HtmlMenu`.** Earlier revisions of this table listed
> `org.joget.apps.userview.lib.HtmlMenu` — that class does not exist. Verified absent from the
> Community source at both the `9.0.7` and `9.1.0.1` tags; the static-HTML menu is **`HtmlPage`**
> (property `content`), and `Link` is the separate external-URL menu. Note `HtmlPage` strips
> `<script>`; for scripted HTML use `FormMenu` + a `CustomHTML` form element (see
> `joget-dashboard-gen`).

The CE column is exact: `wflow-core/.../apps/userview/lib/` contains precisely `DataListMenu`,
`FormMenu`, `HtmlPage`, `InboxMenu`, `Link`, `RunProcess`, plus the themes
(`AjaxUniversalTheme`, `DefaultTheme`, `DefaultV5EmptyTheme`, `Dx8TrimedaTheme`) and the
permissions (`BeanShellPermission`, `DepartmentPermission`, `GroupPermission`,
`LoggedInUserPermission`, `OrganizationPermission`, `UserPermission`). Everything else a spec
names is Enterprise, marketplace or custom — see "Verifying against the Joget source" below.

The canonical JSON for the two most used menu classes, extracted from
a working JWA, is in the CrudMenu and DataListMenu subsections below. For
any other menu class, read the shape off a working JWA export rather than
inventing property names.

### Verifying against the Joget source

The Joget **Community Edition v9** source is public: clone the GPLv3 repository
`https://github.com/jogetworkflow/jw-community` (below, `/path/to/jw-community`). When a menu className, theme, permission class or property key is uncertain, grep it there
rather than guessing — the source outranks this skill.

```bash
SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
ls $SRC/wflow-core/src/main/java/org/joget/apps/userview/lib/     # menus, themes, permissions
grep -rn "getPropertyString(\"" $SRC/wflow-core/src/main/java/org/joget/apps/userview/lib/FormMenu.java
```

**It is Community Edition, so absence proves nothing about Enterprise classes.** Anything under
`org.joget.plugin.enterprise.*` (`CrudMenu`, `SqlChartMenu`, `DashboardMenu`,
`JasperReportsMenu`), `org.joget.api.lib.*`, `org.joget.marketplace.*` or a custom `<your.package>.*`
will not be found there and that says nothing about your Enterprise instance. Treat "not in the
source" as proof of absence **only** for `org.joget.apps.*` core packages — which is exactly how
the `HtmlMenu` error above was caught.

### CrudMenu — the most common case

A CrudMenu binds one form (used for both add and edit by default) and one
datalist (used for the listing page). Minimum required properties:

```json
{
  "className": "org.joget.plugin.enterprise.CrudMenu",
  "properties": {
    "id": "<uuid>",
    "label": "01 - Learner Registration",
    "addFormId": "learnerRegistration",
    "editFormId": "learnerRegistration",
    "datalistId": "list_learnerRegistration",
    "customId": "learnerRegistration_crud",
    "add-afterSaved": "list",
    "edit-afterSaved": "list",
    "list-showDeleteButton": "yes",
    "rowCount": "true",
    "buttonPosition": "bothLeft",
    "checkboxPosition": "left",
    "selectionType": "multiple",
    "iconIncluded": false
  }
}
```

The full property surface runs to 50+ keys, mostly empty strings that
round-trip through Joget's UI; read it off a UI export. When generating,
you can either emit only the meaningful keys (Joget fills the rest with
defaults on import) OR emit the full canonical shape with empty strings
(matches what a UI export looks like). Default to the full shape unless
the spec says otherwise — it's what the user gets when they re-export
from Joget so it makes diffs cleaner.

### DataListMenu — for read-only views and dashboards

```json
{
  "className": "org.joget.apps.userview.lib.DataListMenu",
  "properties": {
    "id": "<uuid>",
    "label": "Overview",
    "datalistId": "registrationsOverview",
    "rowCount": "",
    "buttonPosition": "bothLeft",
    "checkboxPosition": "left",
    "selectionType": "multiple",
    "iconIncluded": false
  }
}
```

---

## 5. Permissions

Permissions can be applied at three levels: the whole userview, a
category, or an individual menu. The shape is always the same — a
`permission` object on the parent. The verified mechanics, including the
permission plugins commonly used and how to apply role-based gates, are in
the §5 addendum at the end of this document.

The most common pattern: gate the whole userview to
authenticated users (`LoggedInUserPermission`) and leave category/menu
permissions empty (the default `{"className":"","properties":{}}`).

---

## 6. Theme

A common standard theme is `Dx8TrimedaTheme`. Its full property list,
and the specific values an app sets (logo, favicon and the rest), are
read off an existing userview export of the app. When generating for an
existing app, carry those values over unless the spec
overrides them.

---

## 7. Generating ids

Joget generates UUIDs and customIds itself when you build a userview in
the UI, but the IDs round-trip through export/import. To keep diffs
stable across regenerations:

- **Category id**: `category-<uuid v4>` — generate fresh on first
  creation, but if patching an existing userview, **always preserve the
  existing category id**.
- **Menu id**: 32-char hex (Joget uses uppercase hex without dashes for
  some menus, lowercase UUIDs for others — both work; pick lowercase UUID
  v4 for consistency).
- **Menu customId**: a stable, human-readable slug like
  `learnerRegistration_crud`. Pattern: `<formId>_crud` for CrudMenu,
  empty for DataListMenu (Joget falls back to the menu id).

When patching an existing userview, **never regenerate ids** for menus
or categories the user did not ask you to change — bookmarks and direct
URLs reference these.

---

## 8. Bulk MD lookup pattern

An app may have 50+ master-data lookup forms (`md01language`,
`md02district`, ...) that all need a CrudMenu. When the user says "add
all the new MD forms to the Master Data category", you can generate
menus in bulk by iterating a list. The convention is:

- label: `MD.NN - Human Title` (e.g. `MD.03 - District`)
- form id: as exists in the app (note: many MD form ids are truncated
  to 24 chars to keep table names ≤32 — never reconstruct from the label,
  use the actual id)
- datalist id: `list_<formId>`
- customId: `<formId>_crud`

For a bulk run, take the list of `(formId, label)` pairs and emit one
CrudMenu object per pair from the shape above, varying only those two
values and the ids derived from them.

---

## 9. Output format

Default output: write a complete `userview.json` to the output folder
the user specified (or `./_userviews/<userviewId>.json` if there's no
explicit folder). Pretty-print with 2-space indent — Joget accepts any
JSON formatting on import, but pretty output is reviewable in git.

If the user explicitly asked for a JWA-pasteable snippet, also produce
the XML-encoded version (`<json>` element wraps the JSON with HTML
entities for `<`, `>`, `&`, `"`).

---

## 10. Validation

Always check the generated JSON against the shape rules in this document,
and against the app itself when a JWA or app folder is available. The
check:

1. Parses the JSON (catches malformed output)
2. Walks every menu and collects `formDefId`, `addFormId`, `editFormId`,
   `datalistId` references
3. Loads the JWA's `appDefinition.xml` and lists every form id and
   datalist id
4. Reports any reference that does not resolve

If a reference doesn't resolve, fix the spec or the JSON before showing
the result to the user — broken refs in a userview produce
silently-empty menus, which are very confusing to debug after the fact.

---

## 11. Common pitfalls

- **Truncated form ids.** Joget caps form ids at 24 chars (so the
  `app_fd_<id>` table stays ≤32 chars). The label can be longer. When
  the user says "add a menu for the Special Needs Category form", the
  actual form id might be `md04specialNeedsCate` — verify against the
  app inventory, never reconstruct from the label.
- **Missing `customId`.** CrudMenus without a `customId` get a
  UUID-based URL like `/web/userview/v/v/_/<uuid>` which is unstable
  across regenerations. Always set a stable `customId`.
- **Icons in the wrong place.** Category icons go inside the label as
  an `<i>` tag. Menu icons also go in the label. The `iconIncluded`
  boolean only signals to Joget's UI whether the label contains an
  embedded icon — it doesn't render anything itself.
- **Reusing a single permission object.** If you put the same JS object
  reference in multiple menus and then mutate one, you'll mutate them
  all. When generating from a template, deep-copy the permission shape
  per menu.
- **Forgetting `setting.properties.userviewId`.** Joget needs both
  `properties.id` and `setting.properties.userviewId`. They must match.
  An import with a mismatch silently uses one and ignores the other,
  causing routing oddness.

---

## 12. When this skill is the wrong tool

- If the user wants a **form** (the data-entry surface), use
  `joget-form-gen`.
- If the user wants a **datalist** (the listing/grid), use
  `joget-datalist-gen` (when available) or hand-author against the
  patterns in `registrationsOverview` / `dl_learner_listing_advanced`.
- If the user wants a **workflow process**, use `joget-workflow-gen`
  (when available).
- If the user is asking about Joget infra (instance setup, ports), use
  `joget-instance-setup`.


---

## QA-hardening addendum — lessons from an earlier build (2026-06-14)

_Folded in from an earlier build and three rounds of UX review. Supplements the sections named below; where a point sharpens an existing rule, the addendum wins._

Anchored to current sections (§4 Categories/menus + decision table, §5 Permissions, §11 pitfalls,
§12 wrong tool).

---

## §4 Menu type decision table — ADD rows

> | The user wants… | Use | Notes |
> |---|---|---|
> | a printable/tabular report | `JasperReportsMenu` | inline jrxml, `language="java"` |
> | an interactive chart | `SqlChartMenu` (enterprise) | server-side SQL→ECharts; bind to a datalist or raw query — see `joget-dashboard-gen` |
> | a multi-chart dashboard page | `DashboardMenu` (enterprise) | portlet grid composing chart menus |
> | a custom HTML/JS widget page | `FormMenu` over a form with a `CustomHTML` element | **NOT** `HtmlPage` (strips scripts) and there is **no** `HtmlMenu` plugin in DX9 |

## §4 — ADD: menu organisation house style

> **Separate day-to-day from batch/admin.** Officer categories hold the records an officer works;
> cron/admin **batch-run / sweep / check trigger** menus belong in ONE admin category (e.g. "Operations
> — batch runs"), not scattered across officer categories. **Retire single-trigger categories** (a
> category whose only menu is one batch trigger) — fold the trigger into Operations. (Learned in a UX review round.)

## §5 Permissions — REPLACE the section's guidance with the verified mechanics

> **Category gating uses `org.joget.apps.userview.lib.GroupPermission`** with `groupId = <directory
> group id>` (absent/blank = open). Joget renders only the categories the user may see and **lands them
> on the first such category** → category ORDER + gating gives **per-role landing pages**.
>
> **⚠ Two hard prerequisites or gating silently hides everything:**
> 1. **Create the groups + memberships via the Joget directory API, not raw `dir_user_group` INSERTs.**
>    In an earlier build, seeded admin membership via raw SQL + a restart was **not recognised** by GroupPermission,
>    so every gated category vanished for admin.
> 2. **The test/demo super-user (`admin`) must be a member of every gated group**, or admin-based render
>    acceptance tests see empty pages and fail. Give per-role acceptance tests **role-user logins** to
>    verify gating actually restricts.
>
> Until both hold, emit OPEN permissions (keep the GroupPermission shape commented for when they do).

## §11 Common pitfalls — ADD

> - **There is no `HtmlMenu` in DX9.** The custom-HTML menu is `HtmlPage` (property `content`), but it
>   is a Quill rich-text page and **does not render `<script>`/`<canvas>`** at runtime — a Chart.js page
>   in HtmlPage shows nothing. For scripted content use `FormMenu` + a `CustomHTML` form element
>   (`value` rendered raw via `${value!}`; leave `requiredSanitize` OFF). For charts, prefer native
>   `SqlChartMenu` (no custom code at all).
> - **A reimported userview is cached until a Tomcat restart** — after delete→import→publish the running
>   app serves the OLD userview until restart. Verify renders only after restarting.
> - **`DataListMenu` customId = the datalist id** gives a list a clean `/_/<listId>` URL; a CrudMenu's
>   list is reached at `/_/<crud customId>`. Keep this in mind when wiring drill `href`s.

## §12 When this skill is the wrong tool — ADD
> For dashboards / KPI tiles / charts, hand off to **`joget-dashboard-gen`** (native SqlChartMenu /
> DashboardMenu). Do not hand-roll Chart.js in a userview menu.
