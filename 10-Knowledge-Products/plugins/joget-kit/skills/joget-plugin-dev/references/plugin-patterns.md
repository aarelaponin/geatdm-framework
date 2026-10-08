# Plugin Patterns Reference

Covers base class selection, Activator.java, required method overrides, property JSON,
Spring bean access, and specialized patterns found in production plugin codebases.

---

## Plugin Base Class Selection

| Use case | Base class | Notes |
|----------|-----------|-------|
| General-purpose process runner, workflow step | `DefaultApplicationPlugin` or `ApplicationPlugin` | Most common; `execute(Map)` is the entry point |
| API endpoint plugin (API Builder) | `ApiPluginAbstract` | Use `@Operation` for methods |
| Load data into a form | `FormLoadBinder` | Returns `FormRowSet` |
| Save form data with custom logic | `FormStoreBinder` | Returns `FormRowSet` |
| Datalist row action button | `DataListAction` | Adds action to datalist rows |
| Custom navigation menu item in userview | `UserviewMenu` | Returns HTML for rendering |
| Form element (custom field type) | `Element` + `FormBuilderPaletteElement` | Needs FTL template + optional `PluginWebSupport` |
| Static resource server for JS/CSS | `ExtDefaultPlugin` + `PluginWebSupport` | Serves classpath files via endpoint |

All plugin base classes are in `org.joget.plugin.base.*` and `org.joget.apps.*.model.*`.

---

## Standard Activator.java Pattern

`Activator.java` is the OSGi entry point. It must call `PluginManager.registerPlugin()` for every plugin class in the bundle. All registration must happen in `start()`.

```java
package com.example.myplugin;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.joget.plugin.base.PluginManager;

public class Activator implements BundleActivator {

    @Override
    public void start(BundleContext context) throws Exception {
        // Register each plugin class by fully-qualified name
        PluginManager.registerPlugin(MyMainPlugin.class.getName());
        PluginManager.registerPlugin(MyWebService.class.getName());
        PluginManager.registerPlugin(MyResources.class.getName());
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        // Usually empty — Joget handles cleanup
        // Add custom cleanup here only if needed (e.g., closing thread pools)
    }
}
```

**The `Bundle-Activator` in `pom.xml` must exactly match the package + class:**
```xml
<Bundle-Activator>com.example.myplugin.Activator</Bundle-Activator>
```

---

## Required Method Overrides

### For ApplicationPlugin / DefaultApplicationPlugin

```java
public class MyPlugin extends DefaultApplicationPlugin {

    private static final String CLASS_NAME = MyPlugin.class.getName();

    @Override
    public String getName() {
        return "My Plugin";           // Display name in Joget UI
    }

    @Override
    public String getVersion() {
        return "1.0.0";
    }

    @Override
    public String getDescription() {
        return "Does something useful";
    }

    @Override
    public String getLabel() {
        return "MyPlugin";            // Short label
    }

    @Override
    public String getClassName() {
        return this.getClass().getName();  // Always this pattern
    }

    @Override
    public String getPropertyOptions() {
        // Return the content of your property JSON file
        // or null if no configuration needed
        return AppUtil.readPluginResource(
            getClassName(),
            "/properties/myPlugin.json",
            null, true, null
        );
    }

    @Override
    public Object execute(Map properties) {
        // Plugin logic here
        // 'properties' contains configured values from the property form
        String configValue = (String) properties.get("my_config_field");
        LogUtil.info(CLASS_NAME, "Executing with config: " + configValue);
        return null;
    }
}
```

### getTag() Rule — CRITICAL

```java
@Override
public String getTag() {
    // MUST return a plain static string.
    // No {variable} placeholders. No expressions. No format strings.
    // A non-plain return value causes API Builder (and some other Joget
    // framework components) to silently skip the plugin at startup.
    return "my-plugin";   // CORRECT
    // return "{myPlugin}";  // WRONG — kills plugin silently
}
```

### For ApiPluginAbstract (API Builder plugin)

```java
import org.joget.api.model.ApiPluginAbstract;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

public class MyApiPlugin extends ApiPluginAbstract {

    @Override
    public String getName() { return "My API Plugin"; }

    @Override
    public String getVersion() { return "1.0.0"; }

    @Override
    public String getDescription() { return "REST API plugin"; }

    @Override
    public String getLabel() { return "MyApiPlugin"; }

    @Override
    public String getClassName() { return this.getClass().getName(); }

    @Override
    public String getPropertyOptions() { return null; }

    @Override
    public String getTag() {
        // MUST be a plain string — no {variables}
        return "my-api-plugin";
    }

    // API endpoint method
    @Operation(summary = "List records")
    public Object records(
        @Parameter(description = "Filter status") @Param("status") String status
    ) {
        // Implementation
        return responseMap;
    }
}
```

**API Builder Routing Limitations (from a production API plugin):**

1. **Path variable routing is broken.** `GET /records/{id}` causes the framework to return HTTP 400 for all `/records/*` paths. Use query parameters instead: `GET /records?id=...`

2. **Method type (`@Operation(type = MethodType.GET)`) is documentation-only.** The framework is method-agnostic — a GET-declared endpoint also responds to POST.

3. **New `@Operation` methods are NOT detected after JAR redeployment.** Only methods registered when the API Builder was first configured are routed. To add a new endpoint: deploy JAR → delete API Builder config in Joget UI → re-create it → re-enable paths. See `deploy.md` for the full procedure.

4. **Workaround for adding new functionality without recreating config:** Add a dispatch parameter to an existing endpoint:
   ```java
   @Operation(summary = "Records — also handles dispatch operations")
   public Object records(
       @Param("status") String status,
       @Param("save") String saveJson      // Dispatch param: ?save={...}
   ) {
       if (saveJson != null && !saveJson.isEmpty()) {
           return handleDispatch(saveJson);  // Route to sub-handlers
       }
       return listRecords(status);
   }
   ```

### For Form Element (custom field type)

Based on a production lookup-field element plugin:

```java
// Extend Element and implement FormBuilderPaletteElement
public class MyFormElement extends Element implements FormBuilderPaletteElement {

    @Override
    public String renderTemplate(FormData formData, Map dataModel) {
        // Build a config object for the FTL template
        String template = "myElement.ftl";
        Map model = new HashMap();

        // Pass current value
        String value = FormUtil.getElementPropertyValue(this, formData);
        model.put("value", value);

        // Pass plugin configuration from property form
        model.put("sourceFieldId", getPropertyString("sourceFieldId"));
        model.put("lookupFormId", getPropertyString("lookupFormId"));

        // Return rendered FTL
        return FormUtil.generateElementHtml(this, formData, template, model);
    }

    @Override
    public FormRowSet formatData(FormData formData) {
        // Server-side fallback: resolve value without JavaScript
        // Use FormDataDao here if needed to look up related records
        FormRowSet rowSet = new FormRowSet();
        FormRow row = new FormRow();
        row.put(FormUtil.getElementParameterName(this), resolvedValue);
        rowSet.add(row);
        return rowSet;
    }

    @Override
    public String getPropertyOptions() {
        return AppUtil.readPluginResource(getClassName(),
            "/properties/myElement.json", null, true, null);
    }

    // FormBuilderPaletteElement interface
    @Override
    public String getPaletteLabel() { return "My Element"; }

    @Override
    public String getIcon() { return "/plugin/com.example.MyFormElement/images/icon.png"; }

    @Override
    public String getFormBuilderCategory() { return "Custom Fields"; }

    @Override
    public int getFormBuilderPosition() { return 100; }

    @Override
    public String getFormBuilderTemplate() {
        return "<label class='label'>" + getLabel() + "</label><span class='form-floating-label'>"
            + getLabel() + "</span>";
    }
}
```

The FTL template goes in `src/main/resources/templates/myElement.ftl`. It has access to jQuery (`$`) from Joget runtime. AJAX calls use the `LookupFieldWebService`-style pattern: an `ExtDefaultPlugin + PluginWebSupport` class serving JSON at `/jw/web/json/plugin/<className>/service`.

---

## Property Definition JSON Structure

Location: `src/main/resources/properties/<pluginId>.json`

```json
[
    {
        "title": "My Plugin",
        "properties": [
            {
                "name": "my_text_field",
                "label": "Text Input Label",
                "type": "textfield",
                "required": "True"
            },
            {
                "name": "my_select_field",
                "label": "Select Option",
                "type": "selectbox",
                "options": [
                    { "value": "option1", "label": "Option One" },
                    { "value": "option2", "label": "Option Two" }
                ]
            },
            {
                "name": "my_textarea",
                "label": "Description",
                "type": "textarea",
                "required": "False"
            },
            {
                "name": "my_checkbox",
                "label": "Enable Feature",
                "type": "checkbox",
                "options": [
                    { "value": "true", "label": "Yes" }
                ]
            }
        ]
    }
]
```

Load in `getPropertyOptions()`:
```java
return AppUtil.readPluginResource(getClassName(),
    "/properties/myPlugin.json", null, true, null);
```

---

## Spring Bean Access Quick Reference

```java
// Standard pattern — always check for null
SomeBeanType bean = (SomeBeanType) AppUtil.getApplicationContext().getBean("beanName");
if (bean == null) {
    LogUtil.error(CLASS_NAME, null, "beanName not available");
    return;
}
```

| Bean name | Type | Purpose |
|-----------|------|---------|
| `formDataDao` | `FormDataDao` | Form record CRUD |
| `appService` | `AppService` | App definition management |
| `formService` | `FormService` | Form operations |
| `formDefinitionDao` | `FormDefinitionDao` | Form definition CRUD |
| `builderDefinitionDao` | `BuilderDefinitionDao` | API/datalist/userview CRUD |
| `datalistDefinitionDao` | `DatalistDefinitionDao` | Datalist definitions |
| `userviewDefinitionDao` | `UserviewDefinitionDao` | Userview definitions |
| `dataSource` | `DataSource` | JDBC connections |
| `entityManagerFactory` | `EntityManagerFactory` | JPA/Hibernate |
| `workflowManager` | `WorkflowManager` | Workflow process control |
| `pluginManager` | `PluginManager` | Plugin registration/lookup |
| `setupDataSource` | `DataSource` | Internal Joget data source (for FormDataDaoImpl) |

---

## Pipeline Pattern (from production batch plugins)

For complex data processing, use the `AbstractDataStep` / `DataPipeline` / `DataContext` framework:

```java
// DataContext — passes data between steps
public class DataContext {
    private Map<String, Object> data = new HashMap<>();
    private List<String> errors = new ArrayList<>();

    public void set(String key, Object value) { data.put(key, value); }
    public Object get(String key) { return data.get(key); }
    public void addError(String error) { errors.add(error); }
    public boolean hasErrors() { return !errors.isEmpty(); }
}

// Abstract step
public abstract class AbstractDataStep {
    protected static final String CLASS_NAME = AbstractDataStep.class.getName();

    public abstract String getStepName();
    public abstract StepResult performStep(DataContext context);

    // Helper: access FormDataDao
    protected FormDataDao getFormDataDao() {
        return (FormDataDao) AppUtil.getApplicationContext().getBean("formDataDao");
    }
}

// Pipeline orchestrator
public class DataPipeline {
    private List<AbstractDataStep> steps = new ArrayList<>();

    public DataPipeline addStep(AbstractDataStep step) {
        steps.add(step);
        return this;
    }

    public PipelineResult execute(DataContext context) {
        PipelineResult result = new PipelineResult();
        for (AbstractDataStep step : steps) {
            LogUtil.info("DataPipeline", "Running step: " + step.getStepName());
            StepResult stepResult = step.performStep(context);
            result.addStepResult(step.getStepName(), stepResult);
            if (stepResult.isBlocking() && stepResult.isFailed()) {
                LogUtil.warn("DataPipeline", "Blocking step failed: " + step.getStepName());
                break;
            }
        }
        return result;
    }
}

// Usage in plugin execute():
DataContext ctx = new DataContext();
ctx.set("batchId", batchId);              // a batch of fee payments to reconcile

new DataPipeline()
    .addStep(new PaymentValidationStep())       // blocking
    .addStep(new InstitutionResolutionStep())   // blocking
    .addStep(new FeeScheduleHintStep())         // non-blocking
    .addStep(new ReconciliationPersistStep())   // blocking
    .execute(ctx);
```

Add new steps by:
1. Creating a class extending `AbstractDataStep` in the `steps/` package
2. Implementing `performStep()` and `getStepName()`
3. Adding `.addStep(new YourStep())` in the pipeline builder
4. If the step persists new fields: **create the Joget form field FIRST**

---

## Result Pattern for Error Handling

Prefer explicit Result objects over void returns + swallowed exceptions:

```java
public class OperationResult {
    private final boolean success;
    private final String entityId;       // Generated ID on success
    private final String errorMessage;
    private final String errorType;

    private OperationResult(boolean success, String entityId,
                            String errorMessage, String errorType) {
        this.success = success;
        this.entityId = entityId;
        this.errorMessage = errorMessage;
        this.errorType = errorType;
    }

    public static OperationResult success(String entityId) {
        return new OperationResult(true, entityId, null, null);
    }

    public static OperationResult error(String errorType, String errorMessage) {
        return new OperationResult(false, null, errorMessage, errorType);
    }

    public boolean isSuccess() { return success; }
    public String getEntityId() { return entityId; }
    public String getErrorMessage() { return errorMessage; }
    public String getErrorType() { return errorType; }
}
```

---

## Dual Storage Rule

When creating Joget builder definitions (APIs, datalists, userviews) programmatically:

1. **Write to database first** — Joget UI reads from `app_builder`/`app_form` tables.
2. **Write to filesystem second** — filesystem is backup/migration only.
3. If filesystem write fails, log a warning and continue — the DB entry is sufficient.
4. Never write only to filesystem — the entity will not appear in the Joget UI.

```java
// 1. Database (CRITICAL)
BuilderDefinition def = new BuilderDefinition();
def.setAppId(appDef.getAppId());
def.setAppVersion(appDef.getVersion());  // Long, not String!
def.setId(apiId);
def.setType("api");
def.setJson(apiJson);
builderDefinitionDao.add(def);

// 2. Filesystem (best-effort)
try {
    writeToFile(filePath, apiJson);
} catch (Exception e) {
    LogUtil.warn(CLASS_NAME, "Filesystem write failed, continuing: " + e.getMessage());
}
```
