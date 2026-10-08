---
name: joget-plugin-dev
description: >
  Guide Claude Code when developing, building, and deploying Joget DX 8.1 OSGi
  plugins. Use this skill for: creating a new plugin, adding features or endpoints
  to existing plugins, writing FormDataDao queries, configuring pom.xml for OSGi,
  registering plugins in Activator.java, building with Maven, deploying JARs to
  Joget, and debugging plugin issues. Triggers on any task involving Joget plugin
  Java code, pom.xml with maven-bundle-plugin, FormDataDao, AppUtil, OSGi bundles,
  or any Joget backend Java development.
---

# Joget DX 8.1 Plugin Development Skill

This skill guides Claude Code through developing, building, and deploying Joget DX 8.1 OSGi plugins correctly — based on hard-won lessons from several production plugin codebases.

---

## Step 0 — Read the Right Reference First

Before writing any code, open the reference file that matches your task:

| Task | Read first |
|------|-----------|
| Writing FormDataDao queries (`find`, `count`, `load`, `saveOrUpdate`) | `references/formdatadao.md` |
| Creating or modifying `pom.xml`, fixing OSGi errors, adding `Embed-Dependency` | `references/osgi-pom-template.md` |
| Creating a new plugin class, choosing base class, writing `Activator.java`, property JSON | `references/plugin-patterns.md` |
| Building the JAR, deploying to Joget, verifying deployment, API Builder config | `references/deploy.md` |
| Any task touching `FormDataDao` AND building AND deploying | Read all three: `formdatadao.md` → `plugin-patterns.md` → `deploy.md` |

**Never skip Step 0.** The reference files contain the actual API signatures and the critical bug patterns.

---

## Four Task Protocols

### Protocol A — Creating a New Plugin

1. **Read** `references/plugin-patterns.md` — select base class, copy Activator pattern.
2. **Read** `references/osgi-pom-template.md` — set up `pom.xml` with correct scopes and `Import-Package`.
3. **Form-first rule**: If the plugin persists data, ask the developer to add Joget form fields first — before writing any `setPropertySafe()` calls.
4. Implement the plugin class with all required method overrides (see plugin-patterns.md for mandatory methods).
5. Register the plugin class in `Activator.start()`.
6. Write property definition JSON in `src/main/resources/properties/<pluginId>.json`.
7. **Read** `references/deploy.md` — build and deploy.
8. Check logs: `tail -f <joget_home>/wflow/logs/catalina.out | grep <PluginClassName>`

### Protocol B — Adding a Feature to an Existing Plugin

1. **Identify** whether the feature adds a new `@Operation` method to an API Builder plugin.
   - If yes → read `references/deploy.md` section "API Builder Special Case" before touching any code. A redeploy alone will NOT expose new `@Operation` methods.
2. **Form-first rule**: If the feature writes a new field, confirm the form field exists in Joget before adding `setPropertySafe()`.
3. Add new `Import-Package` entries to `pom.xml` if new Joget packages are used (see osgi-pom-template.md).
4. Implement the feature.
5. Build and deploy per `references/deploy.md`.
6. If new `@Operation`: delete and re-create the API Builder configuration in Joget UI.

### Protocol C — Writing a FormDataDao Query

1. **Read** `references/formdatadao.md` — select the correct method overload.
2. Obtain the bean: `FormDataDao dao = (FormDataDao) AppUtil.getApplicationContext().getBean("formDataDao");`
3. Use `formDefId` + `tableName` (string) overloads — avoid `Form` object overloads unless you already have the `Form` in scope.
4. Apply all critical rules (no `c_` prefix, HQL condition syntax, `""` not `null` for empty conditions, `new Object[0]` not `null` for empty params).
5. Wrap in appropriate transaction handling (see `REQUIRES_NEW` pattern in formdatadao.md for batch saves).

### Protocol D — Build and Deploy

1. `mvn clean package` from the plugin module root.
2. Confirm the target instance (a machine may carry several instances — see `references/deploy.md`).
3. Copy JAR to `<joget_home>/wflow/app_plugins/`.
4. Verify in logs within ~10 seconds.
5. If an API Builder plugin: check whether new `@Operation` methods were added — if so, delete+recreate the API Builder config.

---

## Critical Rules (Non-Negotiable)

These rules are the most common sources of silent failures. Violating them produces bugs that are difficult to diagnose.

### Schema / Form Rules
- **Never DDL on `app_fd_*` tables.** No `ALTER TABLE`, `CREATE TABLE`, `DROP TABLE` on Joget-managed tables. Use Joget Form Builder.
- **Form-first, code-second.** Any new `setPropertySafe(row, "field_name", value)` call requires the corresponding field to exist in the Joget form definition first. If the field is missing AND the value is non-null, `saveOrUpdate()` fails silently.
- **No direct SQL on `app_fd_*` tables** for data fixes. Use `FormDataDao` API only.

### FormDataDao Rules
- **No `c_` prefix in Java code.** Use the form element ID directly (`transaction_date`, not `c_transaction_date`). The `c_` prefix is the DB column name added automatically by Hibernate.
- **HQL condition syntax:** `e.customProperties.fieldId` (not the column name, not the DB name).
- **`count()` null bug:** The `condition` parameter to `count()` is concatenated directly into the HQL string without a null check. Passing `null` produces invalid HQL `"...e null"`. Always pass `""` for no condition.
- **`find()` params must be `new Object[0]`** (not `null`) when there are no filter parameters.

### OSGi / Build Rules
- **Joget dependencies: `provided` scope.** Never `compile` scope for `wflow-core`, `wflow-commons`, or `servlet-api`. Using `compile` scope embeds Joget classes inside the plugin JAR and causes `ClassCastException` at runtime.
- **External libraries: `compile` scope + `Embed-Dependency`.** Libraries not in Joget (gson, jackson, etc.) must be `compile` scope and listed under `<Embed-Dependency>`.
- **`<packaging>bundle</packaging>`** is mandatory — `jar` packaging will not produce a valid OSGi bundle.

### API Builder Plugin Rules
- **`getTag()` must return a plain string.** No `{variable}` placeholders, no expressions. A non-plain return value causes the API Builder framework to silently skip the plugin at startup.
- **New `@Operation` = delete+recreate config.** Redeploying the JAR does not cause the API Builder to discover new `@Operation` methods. You must delete the API Builder configuration in the Joget UI and re-create it.
- **Path variable routing is broken.** `GET /records/{id}` will conflict with `/records/anything`. Use query parameters (`?id=...`) or piggyback on existing endpoints via dispatch keys.

### Dual Storage Rule
- **Always write DB first, then filesystem.** Joget UI reads from database (`app_builder`, `app_form`). Writing only to the filesystem produces no visible result in the UI. If the filesystem write fails, continue — the DB entry is sufficient.

---

## When to Grep the Source

The Joget **Community Edition v9** source is public: `$SRC` below is your clone of the GPLv3
repository `https://github.com/jogetworkflow/jw-community` (branch `9.1-RELEASE`; tags `9.0.x`
and `9.1.x`). It is the authority. When a method signature, package name, or class name is uncertain, verify there rather
than guessing.

```bash
SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
git -C $SRC describe --tags       # know which version you are reading before you trust it
```

| What to verify | Where to look |
|----------------|--------------|
| `FormDataDao` method signatures | `$SRC/wflow-core/src/main/java/org/joget/apps/form/dao/FormDataDao.java` |
| `FormDataDaoImpl` internal behavior, `app_fd_` / `c_` prefixes | `.../FormDataDaoImpl.java` (same dir) |
| Built-in form element class names | `$SRC/wflow-core/src/main/java/org/joget/apps/form/lib/` |
| Built-in datalist binders / formatters / filters | `$SRC/wflow-core/src/main/java/org/joget/apps/datalist/lib/` |
| Built-in userview menus, themes, permissions | `$SRC/wflow-core/src/main/java/org/joget/apps/userview/lib/` |
| Built-in process tools + hash variables | `$SRC/wflow-core/src/main/java/org/joget/apps/app/lib/` |
| Plugin base classes and interfaces | `$SRC/wflow-plugin-base/src/main/java/org/joget/plugin/base/` |
| Element rendering (FreeMarker) | `$SRC/wflow-core/src/main/resources/templates/*.ftl` |
| API Builder `@Operation`, `ApiPluginAbstract` | the API Builder plugin's own source, if you hold a copy (`<api-builder-source>`); it is a Joget marketplace plugin, not part of `$SRC` |
| Package names for `Import-Package` | Grep `package org.joget.*` in the relevant source file |

Useful grep pattern:
```bash
grep -r "public.*methodName" $SRC/wflow-core/src/
```

### Two things to know before you trust a null result

**1. It is Community Edition.** `org.joget.plugin.enterprise.*` (FormGrid, MultiPagedForm,
CalculationField, CrudMenu, SqlChartMenu, DashboardMenu, JasperReportsMenu, the Advanced/JDBC
datalist binders, FormDataUpdateTool, CounterIncrementTool …), `org.joget.marketplace.*`
and custom packages (`<your.package>.*`) are **not** in this tree. Their absence says nothing
about the target instance. "Not in the source" is proof of absence **only** for `org.joget.apps.*`
and `org.joget.plugin.base.*`.

**2. It is v9, and the plugin build targets 8.1.** This skill's `pom.xml` guidance compiles
against the 8.1 API while the runtime is DX 9.x. That gap is not theoretical — the servlet
namespace moved:

> **`PluginWebSupport` is `jakarta.servlet` in v9.** Verified at
> `$SRC/wflow-plugin-base/src/main/java/org/joget/plugin/base/PluginWebSupport.java` — it imports
> `jakarta.servlet.ServletException` and `jakarta.servlet.http.HttpServletRequest/Response` at
> both the `9.0.7` and `9.1.0.1` tags. A `webService()` written against the 8.1 `javax` signature
> therefore implements **a different method**, is never invoked, and raises **no error at all**.
> This is the single highest-cost trap in the 8.1-against-9.x build; when scheduled or callback
> work is needed, prefer a cron-POSTed trigger-row form over `PluginWebSupport`.

When any doubt exists about a javax/jakarta signature, read the interface in `$SRC` first — do not
infer it from the 8.1 jar you compile against.


---

## QA-hardening addendum — lessons from an earlier build (2026-06-14)

_Folded in from an earlier build and three rounds of UX review. Supplements the sections named below; where a point sharpens an existing rule, the addendum wins._

Anchored to "Critical Rules (Non-Negotiable)".

---

## Critical Rules — ADD a subsection: External JDBC drivers in the OSGi bundle (ClickHouse)

> ### Embedded JDBC drivers — pin the transport, watch the shaded deps
> The `clickhouse-jdbc-0.6.x-all` (shaded) driver embedded in the bundle ships its own relocated Apache
> HttpClient5. Its INSERT/failover path engages `PoolingHttpClientConnectionManager`, whose `<clinit>`
> references `org.slf4j.LoggerFactory`. This bundle imports packages as `Import-Package: !*,<explicit
> list>` + `DynamicImport-Package: *`, and the dynamic import does **not** resolve `org.slf4j` at
> class-init → `ExceptionInInitializerError: NoClassDefFoundError: org/slf4j/LoggerFactory`. That error
> marks the JTA tx rollback-only (API HTTP 500) **and permanently poisons the shaded HTTP-client class
> for the whole JVM** — so the first ClickHouse call that touches the Apache pool makes every later
> ClickHouse call in that JVM fail (it passed once on a fresh JVM, failed on every repeat).
>
> **Rule:** build every ClickHouse `Connection` with the lightweight transport pinned, on BOTH read and
> write gateways:
> ```java
> Properties p = new Properties();
> if (user != null) p.setProperty("user", user);
> if (pass != null) p.setProperty("password", pass);
> p.setProperty("http_connection_provider", "HTTP_URL_CONNECTION");   // never the Apache pool
> try (Connection c = DriverManager.getConnection(url, p)) { ... }
> ```
> Alternatives (embed `slf4j-api`, or static `Import-Package: org.slf4j`) risk binding conflicts /
> bundle-resolution failure; the provider pin is the low-risk fix. A symptom that this bit you: an engine
> that works once after a restart and 500s on the second run in the same JVM.
>
> **General rule:** a shaded "-all" driver may carry transitive deps the OSGi layer can't see; prefer a
> connection mode that avoids the heavy path, and test the engine **twice in one JVM**, not once.
