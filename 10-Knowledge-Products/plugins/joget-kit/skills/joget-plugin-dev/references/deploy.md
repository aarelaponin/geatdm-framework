# Build, Deploy, and Verification Reference

---

## Build Command

```bash
# From the plugin module directory (where pom.xml lives)
mvn clean package

# Skip tests (faster rebuild)
mvn clean package -DskipTests

# Run tests only
mvn test
```

Output JAR location: `target/<artifactId>-<version>.jar`

Example: `target/my-plugin-8.1.0-SNAPSHOT.jar`

The JAR is a valid OSGi bundle — you can verify by running:
```bash
unzip -p target/my-plugin.jar META-INF/MANIFEST.MF
# Should contain Bundle-Activator, Bundle-SymbolicName, Import-Package, etc.
```

---

## Joget Instances on a Machine

**A development machine often carries several Joget installations side by side**, for
example one folder per version:

```
<install_root>/joget-enterprise-linux-8.1.6/
<install_root>/joget-enterprise-linux-9.0.3/
<install_root>/joget-enterprise-linux-9.0.5/
```

Below, `<joget_home>` is the installation you deploy to. If you keep an instance
register (see `joget-instance-setup`), its `installation_path` for the instance is
`<joget_home>`.

**ALWAYS confirm which instance to deploy to before running the copy command.**

Ask or check which instance is currently running:
```bash
# Find running Joget/Tomcat processes
ps aux | grep catalina | grep -v grep

# Check which port is in use: 8080 is Joget's own default; add each port your
# instances are set to
lsof -i :8080
lsof -i :<port>
```

**Record in each plugin project's own notes which instance (and which Joget version)
it targets**, so that the next build goes to the same place.

---

## Deploy Path

```bash
# Pattern
<joget_home>/wflow/app_plugins/<plugin-name>.jar

# Example
<joget_home>/wflow/app_plugins/my-plugin-8.1.0-SNAPSHOT.jar
```

Deploy command:
```bash
cp target/my-plugin-8.1.0-SNAPSHOT.jar \
   <joget_home>/wflow/app_plugins/
```

---

## Hot-Reload Behavior

Joget's OSGi container watches `wflow/app_plugins/` and picks up new/replaced JARs automatically. **No server restart needed** for most changes.

**Restart IS needed when:**
- `Activator.java` changes (bundle lifecycle changed)
- Structural OSGi manifest changes (changed `Bundle-SymbolicName`, `Bundle-Version`)
- JVM-level changes (changed Java version target, new JVM options)

Restart command (adjust script name to your instance):
```bash
<joget_home>/joget.sh restart
# OR for Linux service:
# systemctl restart joget
```

---

## Verification After Deploy

**1. Watch logs immediately after copy:**
```bash
tail -f <joget_home>/wflow/logs/catalina.out | grep -i "MyPlugin\|ERROR\|WARN"
```

You should see something like:
```
INFO  Activator - Registered plugin: com.example.myplugin.MyPlugin
```

**2. If the plugin registered, check it appears in Joget:**
- Settings → Manage Plugins → look for your plugin by name

**3. Verify via SQL (if plugin creates DB records):**
```sql
-- Check if form definition exists
SELECT id, name, tableName FROM app_form WHERE appId = 'myApp' ORDER BY dateCreated DESC LIMIT 5;

-- Check if API Builder entry exists
SELECT id, name, type FROM app_builder WHERE appId = 'myApp' AND type = 'api' ORDER BY dateCreated DESC LIMIT 5;
```

**4. Common post-deploy errors and causes:**

| Log message | Cause | Fix |
|-------------|-------|-----|
| `NoClassDefFoundError: com/google/gson/...` | Gson not embedded | `compile` scope + `Embed-Dependency` in pom.xml |
| `ClassCastException: Cannot cast org.joget.*` | Joget class embedded (`compile` scope) | Change to `provided` scope |
| Bundle starts but plugin missing from UI | `getTag()` returning non-plain string, or Activator not calling `registerPlugin()` | Fix `getTag()` and/or Activator |
| `Unresolved constraint in bundle` | Missing `Import-Package` entry | Add the package to pom.xml `Import-Package` |
| Nothing in logs at all | `Bundle-Activator` path wrong | Fix FQCN in pom.xml |

---

## API Builder Special Case

When a plugin extends `ApiPluginAbstract`, adding a new `@Operation`-annotated method to the Java class and redeploying the JAR is **not sufficient** to expose the new endpoint. The API Builder scans `@Operation` methods only when the configuration is first created, not on subsequent JAR updates.

**Procedure for adding a new `@Operation` method:**

1. Write and build the Java code with the new `@Operation` method.
2. Deploy the new JAR to `wflow/app_plugins/`.
3. In the Joget UI: navigate to **App → API Builder**.
4. **Delete** the existing API Builder configuration for this plugin.
5. **Re-create** the API Builder configuration — this triggers a fresh scan of `@Operation` methods.
6. In the configuration, enable the new endpoint path(s) under ENABLED_PATHS.
7. Test via curl or the API documentation page.

**Workaround to avoid this (from a production API plugin):** Instead of adding a new `@Operation` method, add a new `@Param` dispatch key to an existing registered endpoint. The dispatcher routes to sub-handlers based on JSON structure:

```java
@Operation(summary = "Records endpoint — also handles inline dispatch")
public Object records(
    @Param("status") String status,
    @Param("newFeature") String newFeatureJson   // Add new dispatch param here
) {
    if (newFeatureJson != null && !newFeatureJson.isEmpty()) {
        return handleNewFeature(newFeatureJson);
    }
    return listRecords(status);
}
```

This approach works because the existing `records()` method is already registered — adding parameters to it does not require deleting and re-creating the API Builder config.

---

## Enabling Endpoint Paths After Config Creation

After creating or re-creating the API Builder configuration, newly added endpoint paths may be disabled by default:

1. Open the API Builder configuration in Joget UI.
2. Click **Edit**.
3. Find **ENABLED_PATHS** or the endpoint list.
4. Enable the path(s) for your new endpoint.
5. Save.

---

## Testing Endpoints with curl

```bash
# Health check
curl -X GET 'http://localhost:8080/jw/api/plugin/com.example.MyApiPlugin/service/health' \
  -H 'api_id: API-your-uuid-here' \
  -H 'api_key: YOUR_API_KEY'

# List records
curl -X GET 'http://localhost:8080/jw/api/plugin/com.example.MyApiPlugin/service/records?status=pending' \
  -H 'api_id: API-your-uuid-here' \
  -H 'api_key: YOUR_API_KEY'

# Dispatch operation via query param
curl -X GET 'http://localhost:8080/jw/api/plugin/com.example.MyApiPlugin/service/records' \
  --data-urlencode 'save={"id":"rec123","status":"approved"}' \
  -H 'api_id: API-your-uuid-here' \
  -H 'api_key: YOUR_API_KEY'
```

Find the API key:
```sql
SELECT * FROM app_api_key WHERE appId = 'myApp';
```

---

## Log Locations

```bash
# Primary log
<joget_home>/wflow/logs/catalina.out

# Real-time monitoring — filter for your plugin
tail -f <joget_home>/wflow/logs/catalina.out \
  | grep "MyApiPlugin\|ERROR"

# Search historical log for plugin errors
grep -i "error" <joget_home>/wflow/logs/catalina.out \
  | grep "MyPlugin" | tail -50
```

---

## Quick Troubleshooting Checklist

1. **JAR in right directory?**
   ```bash
   ls -la <joget_home>/wflow/app_plugins/ | grep myplugin
   ```

2. **Is MANIFEST.MF correct?**
   ```bash
   unzip -p target/myplugin.jar META-INF/MANIFEST.MF | grep -E "Bundle-Activator|Bundle-SymbolicName"
   ```

3. **Did OSGi pick it up?** (check logs for bundle start message)

4. **Did Activator register the plugin?** (check logs for `Registered plugin:`)

5. **Does the plugin appear in Joget UI?** (Settings → Manage Plugins)

6. **For API Builder plugins: is the path enabled?** (App → API Builder → Edit → ENABLED_PATHS)
