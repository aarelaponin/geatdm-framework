# OSGi pom.xml Template and Dependency Scope Rules

For Joget DX 8.1 plugins using `maven-bundle-plugin` (Apache Felix).

---

## Complete pom.xml Template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>my-joget-plugin</artifactId>
    <version>8.1.0-SNAPSHOT</version>

    <!--
        CRITICAL: packaging must be 'bundle', not 'jar'.
        'bundle' tells maven-bundle-plugin to post-process the JAR
        and inject the MANIFEST.MF with OSGi headers.
        Without this, Joget's OSGi container cannot load the plugin.
    -->
    <packaging>bundle</packaging>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <joget.version>8.1-SNAPSHOT</joget.version>
    </properties>

    <repositories>
        <repository>
            <id>joget-repo</id>
            <url>https://dev.joget.org/community/download/attachments/...</url>
        </repository>
    </repositories>

    <dependencies>

        <!-- ===== JOGET DEPENDENCIES — ALWAYS 'provided' scope ===== -->
        <!--
            'provided' means: available at runtime from Joget's classloader.
            Do NOT embed these. If you embed Joget classes, the OSGi classloader
            will see two versions of the same class (one from Joget, one from your
            plugin JAR) and throw ClassCastException at runtime.
        -->
        <dependency>
            <groupId>org.joget</groupId>
            <artifactId>wflow-core</artifactId>
            <version>${joget.version}</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.joget</groupId>
            <artifactId>wflow-commons</artifactId>
            <version>${joget.version}</version>
            <scope>provided</scope>
        </dependency>

        <!-- Servlet API — always provided, comes from Tomcat -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
            <scope>provided</scope>
        </dependency>

        <!-- OSGi framework — provided by the container -->
        <dependency>
            <groupId>org.osgi</groupId>
            <artifactId>osgi.core</artifactId>
            <version>7.0.0</version>
            <scope>provided</scope>
        </dependency>

        <!-- ===== EXTERNAL LIBRARIES — 'compile' scope if not in Joget ===== -->
        <!--
            Libraries that Joget does NOT bundle must be embedded in the plugin JAR.
            Use 'compile' scope AND list them in <Embed-Dependency> below.
            Common examples: gson, jackson, apache-commons (non-standard).
        -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.11.0</version>
            <scope>compile</scope>
        </dependency>

        <!-- ===== TEST ONLY — never embedded ===== -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-core</artifactId>
            <version>4.11.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>

            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.13.0</version>
                <configuration>
                    <source>11</source>
                    <target>11</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>

            <!--
                maven-bundle-plugin — creates OSGi bundle MANIFEST.MF.
                <extensions>true</extensions> is required so that
                <packaging>bundle</packaging> is recognized.
            -->
            <plugin>
                <groupId>org.apache.felix</groupId>
                <artifactId>maven-bundle-plugin</artifactId>
                <version>5.1.9</version>
                <extensions>true</extensions>
                <configuration>
                    <instructions>

                        <!--
                            Bundle-Activator: fully-qualified class name of your Activator.
                            MUST exactly match the actual class name and package.
                            If this is wrong, OSGi cannot start the bundle and the plugin
                            never registers with Joget — no error, just silence.
                        -->
                        <Bundle-Activator>
                            com.example.myplugin.Activator
                        </Bundle-Activator>

                        <Bundle-Name>My Joget Plugin</Bundle-Name>
                        <Bundle-SymbolicName>${project.artifactId}</Bundle-SymbolicName>
                        <Bundle-Version>${project.version}</Bundle-Version>
                        <Bundle-Description>Description of what this plugin does</Bundle-Description>

                        <!--
                            Export-Package: packages your plugin exposes to other bundles.
                            For most plugins this is empty — use negation pattern.
                        -->
                        <Export-Package>!com.example.myplugin.*</Export-Package>

                        <!--
                            Import-Package: Joget packages your plugin needs at runtime.
                            Add a line for every Joget package you import in Java code.
                            To find the correct package name: grep the Joget source for
                            the class, read its 'package' declaration.

                            '*;resolution:=optional' at the end is a safety net — it
                            auto-imports any package not listed and marks missing ones
                            as optional so the bundle still starts.

                            WARNING: Do NOT add 'resolution:=optional' to packages you
                            actually require — that would hide missing-dependency errors.
                        -->
                        <Import-Package>
                            org.osgi.framework;version="[1.7,2)",
                            org.joget.apps.app.service,
                            org.joget.apps.app.model,
                            org.joget.apps.form.service,
                            org.joget.apps.form.model,
                            org.joget.apps.form.dao,
                            org.joget.plugin.base,
                            org.joget.commons.util,
                            *;resolution:=optional
                        </Import-Package>

                        <!--
                            Embed-Dependency: list compile-scope libraries to embed.
                            Pattern: artifactId;scope=compile|runtime
                            Each embedded JAR is placed in the directory named by
                            Embed-Directory (default: lib).
                        -->
                        <Embed-Dependency>
                            gson;scope=compile|runtime
                        </Embed-Dependency>

                        <!-- Directory inside the bundle JAR where embedded libs go -->
                        <Embed-Directory>lib</Embed-Directory>

                        <!--
                            Bundle-ClassPath: adds embedded libs to the bundle classpath.
                            '.' = the bundle JAR root itself.
                            '{maven-dependencies}' = placeholder expanded to all embedded JARs.
                            Without this, embedded classes cannot be found.
                        -->
                        <Bundle-ClassPath>.,{maven-dependencies}</Bundle-ClassPath>

                    </instructions>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.2.5</version>
            </plugin>

        </plugins>
    </build>
</project>
```

---

## Dependency Scope Decision Table

| Dependency type | Scope | Embed? | Reason |
|----------------|-------|--------|--------|
| `wflow-core`, `wflow-commons` | `provided` | No | Joget runtime provides them; embedding causes ClassCastException |
| `javax.servlet-api` | `provided` | No | Tomcat provides it |
| `osgi.core` | `provided` | No | OSGi container provides it |
| Google Gson | `compile` | Yes | Not bundled by Joget |
| Jackson | `compile` | Yes | Not bundled by Joget |
| Apache Commons (IO, Lang) | `compile` | Yes | Joget may bundle some versions — check first |
| JUnit, Mockito | `test` | No | Test-only, never in the final JAR |

**How to check if a library is already in Joget:**
```bash
ls <joget_home>/wflow/tomcat/webapps/jw/WEB-INF/lib/ | grep gson
```
If the file is there, it's provided — use `provided` scope. If not, use `compile` + embed.

---

## Adding a New Joget Package Import

When you add code that uses a Joget class from a package not yet in `Import-Package`:

1. Find the class source file:
   ```bash
   grep -r "class BuilderDefinitionDao" /path/to/jw-community/   # your clone of github.com/jogetworkflow/jw-community
   ```

2. Read its `package` declaration:
   ```
   package org.joget.apps.app.dao;
   ```

3. Add that package to `<Import-Package>` in `pom.xml`:
   ```xml
   <Import-Package>
       ...
       org.joget.apps.app.dao,
       ...
   </Import-Package>
   ```

4. Rebuild: `mvn clean package`

---

## Common OSGi Errors and Fixes

### `java.lang.NoClassDefFoundError: com/google/gson/JsonParser`

**Cause:** Gson is `provided` scope or missing from `<Embed-Dependency>`.

**Fix:**
1. Set Gson dependency to `<scope>compile</scope>`
2. Add to `<Embed-Dependency>`: `gson;scope=compile|runtime`
3. Verify `<Bundle-ClassPath>.,{maven-dependencies}</Bundle-ClassPath>` is present

---

### `java.lang.ClassCastException: Cannot cast org.joget.apps.form.service.FormService`

**Cause:** `wflow-core` (or another Joget artifact) is `compile` scope, so Joget classes are embedded in the plugin JAR. The OSGi container sees two class versions: one from Joget's classloader and one from the plugin's classloader — they are different `Class` objects.

**Fix:** Change to `<scope>provided</scope>` for ALL `org.joget.*` dependencies.

---

### Plugin does not appear in Joget UI (no error in logs)

**Cause A:** `<Bundle-Activator>` path is wrong — mismatched package or class name.
**Fix:** Double-check the Activator fully-qualified class name matches exactly.

**Cause B:** Activator does not call `PluginManager.registerPlugin()`.
**Fix:** See `references/plugin-patterns.md` for correct Activator pattern.

**Cause C:** `getTag()` returns a string with `{variable}` placeholders.
**Fix:** Return a plain static string.

---

### `Unresolved constraint: Import-Package: org.joget.apps.app.dao`

**Cause:** A package in `<Import-Package>` is not exported by Joget's bundles.

**Fix Option 1:** Add `;resolution:=optional` to that specific import to make it non-fatal:
```xml
org.joget.apps.app.dao;resolution:=optional,
```

**Fix Option 2:** Verify the correct package name by grepping the source — the package name in your `Import-Package` might be wrong.

---

### `<packaging>bundle</packaging>` produces a plain JAR

**Cause:** `<extensions>true</extensions>` is missing from the `maven-bundle-plugin` configuration.

**Fix:** Add `<extensions>true</extensions>` to the plugin config block.
