# YAML Templates for Instance Registration

## Table of Contents

1. [Instance Block — MySQL](#instance-block--mysql)
2. [Instance Block — PostgreSQL](#instance-block--postgresql)
3. [MySQL Infrastructure Block](#mysql-infrastructure-block)
4. [PostgreSQL Infrastructure Block](#postgresql-infrastructure-block)
5. [PostgreSQL Database Defaults](#postgresql-database-defaults)
6. [Environment Variables (.env)](#environment-variables-env)
7. [Datasource Properties — MySQL](#datasource-properties--mysql)
8. [Datasource Properties — PostgreSQL](#datasource-properties--postgresql)
9. [PostgreSQL Setup SQL](#postgresql-setup-sql)
10. [Tomcat JVM Flags](#tomcat-jvm-flags)

## CRITICAL: Separate Snippets Rule

The templates below are **separate YAML snippets** that go into **different locations**
within `<your-instance-register>`. They must NEVER be combined into a single YAML
block or a single output file without clear section headers explaining where each
part goes.

The file structure of the register (`instances.yaml`) is:

```
instances:              ← Instance blocks go here (Snippet 1)
  joget1: ...
  joget2: ...
  jogetN: ...          ← NEW instance inserted here

mysql_instances:        ← Existing MySQL infrastructure
  mysql1: ...

postgresql_instances:   ← NEW: PostgreSQL infrastructure (Snippet 2)
  pg1: ...

database_defaults:      ← Existing MySQL defaults
  ...

postgresql_database_defaults:  ← NEW: PG defaults (Snippet 3)
  ...
```

When generating output for the user, always produce clearly separated snippets:
- **Snippet 1** (instance block) is indented 2 spaces — it's a child of `instances:`
- **Snippet 2** (infrastructure) is a top-level key — no indentation
- **Snippet 3** (defaults) is a top-level key — no indentation
- **Snippet 4** (.env entries) is a separate file entirely

---

## Instance Block — MySQL

```yaml
  joget{N}:
    # Basic Information
    name: joget{N}
    enabled: true
    version: "{joget_version}"
    environment: {environment}
    description: "{description}"
    owner: "{owner}"

    # Installation Path
    installation_path: {installation_path}

    # Tomcat Configuration
    tomcat:
      http_port: {http_port}
      https_port: 8443
      shutdown_port: {shutdown_port}
      ajp_port: {ajp_port}
      url: http://localhost:{http_port}
      server_xml_pattern: apache-tomcat-*/conf/server.xml

    # Database Configuration
    database:
      type: mysql
      name: {db_name}
      mysql_instance: {mysql_instance_name}
      user: {db_user}
      password_env: {DB_PASSWORD_ENV_VAR}

    # Glowroot APM Configuration
    glowroot:
      enabled: true
      port: {glowroot_port}
      admin_json_pattern: wflow/glowroot/agent-*/admin.json

    # Admin Credentials
    credentials:
      username: admin
      password_env: JOGET{N}_PASSWORD
```

Note: the `database.type` field is new — existing MySQL instances don't have it.
It's optional for MySQL (MySQL is the default), but include it for clarity.

---

## Instance Block — PostgreSQL

```yaml
  joget{N}:
    # Basic Information
    name: joget{N}
    enabled: true
    version: "{joget_version}"
    environment: {environment}
    description: "{description}"
    owner: "{owner}"

    # Installation Path
    installation_path: {installation_path}

    # Tomcat Configuration
    tomcat:
      http_port: {http_port}
      https_port: 8443
      shutdown_port: {shutdown_port}
      ajp_port: {ajp_port}
      url: http://localhost:{http_port}
      server_xml_pattern: apache-tomcat-*/conf/server.xml

    # Database Configuration
    database:
      type: postgresql
      name: {db_name}
      postgresql_instance: {pg_instance_name}
      user: {db_user}
      password_env: {DB_PASSWORD_ENV_VAR}

    # Glowroot APM Configuration
    glowroot:
      enabled: true
      port: {glowroot_port}
      admin_json_pattern: wflow/glowroot/agent-*/admin.json

    # Admin Credentials
    credentials:
      username: admin
      password_env: JOGET{N}_PASSWORD
```

Key differences from MySQL:
- `database.type: postgresql` (required for PostgreSQL)
- `database.postgresql_instance` instead of `database.mysql_instance`
- No `database.mysql_instance` field

### Complete PostgreSQL Example — Correct Multi-Snippet Output

When presenting to the user or saving to a file, format like this:

```
=== SNIPPET 1: Instance Block ===
(Insert under the `instances:` key, after the last existing instance)

  joget8:
    name: joget8
    enabled: true
    version: "9.0.3"
    environment: pheqa_test
    ...
    database:
      type: postgresql
      name: jwdb_pheqa_test
      postgresql_instance: pg1
      user: joget_pheqa_test
      password_env: JOGET_PHEQA_TEST_PASSWORD
    ...

=== SNIPPET 2: PostgreSQL Infrastructure ===
(Add as a new top-level section after `mysql_instances:`)

postgresql_instances:
  pg1:
    host: localhost
    port: 5432
    ...

=== SNIPPET 3: PostgreSQL Database Defaults ===
(Add as a new top-level section after `database_defaults:`)

postgresql_database_defaults:
  driver: org.postgresql.Driver
  ...

=== SNIPPET 4: Environment Variables ===
(Add to the .env file your tooling reads)

JOGET_PHEQA_TEST_PASSWORD=<db-password>
JOGET8_PASSWORD=<admin-password>
PG1_ROOT_PASSWORD=<pg-root-password>
```

---

## MySQL Infrastructure Block

```yaml
mysql_instances:
  mysql{N}:
    path: /usr/local/mysql{N}
    port: {mysql_port}
    socket: /tmp/mysql{N}.sock
    host: localhost
    root_password_env: MYSQL{N}_ROOT_PASSWORD
```

Number MySQL servers from port 3306 upward (mysql1 on 3306, mysql2 on 3307, …).

---

## PostgreSQL Infrastructure Block

This section is new and must be added to instances.yaml if it doesn't exist yet.

```yaml
# ============================================================================
# POSTGRESQL INFRASTRUCTURE
# ============================================================================
postgresql_instances:
  pg1:
    host: localhost
    port: 5432
    data_dir: /opt/homebrew/var/postgresql@16
    root_user: {macos_username}
    root_password_env: PG1_ROOT_PASSWORD
```

Notes:
- For Homebrew PostgreSQL, the default superuser is the macOS username (not `postgres`)
- If the user created a `postgres` role, `root_user` can be `postgres`
- `data_dir` helps locate the installation for management tasks
- Multiple PostgreSQL servers can use pg1, pg2, etc. with different ports (5432, 5433, ...)

---

## PostgreSQL Database Defaults

Add this section alongside the existing `database_defaults` if PostgreSQL is used:

```yaml
postgresql_database_defaults:
  driver: org.postgresql.Driver
  jdbc_parameters:
    currentSchema: public
  default_schema: public
```

---

## Environment Variables (.env)

For each new instance, the user needs to add these to the `.env` file
their tooling reads:

**For MySQL:**
```bash
# Database user password (for Joget app connection)
{DB_PASSWORD_ENV_VAR}=<db-password>

# Web admin password (for REST API access)
JOGET{N}_PASSWORD=<admin-password>
```

**For PostgreSQL:**
```bash
# PostgreSQL root password (if password auth is enabled)
PG1_ROOT_PASSWORD=<pg-root-password>

# Database user password (for Joget app connection)
{DB_PASSWORD_ENV_VAR}=<db-password>

# Web admin password (for REST API access)
JOGET{N}_PASSWORD=<admin-password>
```

---

## Datasource Properties — MySQL

File: `{installation_path}/wflow/app_datasource-default.properties`

```properties
workflowUser={db_user}
workflowPassword={db_password_value}
workflowDriver=com.mysql.jdbc.Driver
workflowUrl=jdbc\:mysql\://localhost\:{mysql_port}/{db_name}?characterEncoding\=UTF-8&useSSL\=false&allowPublicKeyRetrieval\=true
profileName=
```

---

## Datasource Properties — PostgreSQL

File: `{installation_path}/wflow/app_datasource-default.properties`

```properties
workflowUser={db_user}
workflowPassword={db_password_value}
workflowDriver=org.postgresql.Driver
workflowUrl=jdbc\:postgresql\://localhost\:{pg_port}/{db_name}?currentSchema\=public
profileName=
```

Important: The PostgreSQL JDBC driver JAR must be placed in:
`{installation_path}/apache-tomcat-*/lib/`

Download from: https://jdbc.postgresql.org/download/
Recommended: postgresql-42.7.x.jar (latest 42.x for Java 8+ compatibility)

---

## PostgreSQL Setup SQL

Run these commands in `psql` to create the database and user:

```sql
-- Connect as superuser
psql -d postgres

-- Create database
CREATE DATABASE {db_name}
  ENCODING 'UTF8'
  LC_COLLATE 'en_US.UTF-8'
  LC_CTYPE 'en_US.UTF-8'
  TEMPLATE template0;

-- Create user with password
CREATE ROLE {db_user} WITH LOGIN PASSWORD '{db_password}';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE {db_name} TO {db_user};

-- Connect to the new database and grant schema privileges
\c {db_name}
GRANT ALL ON SCHEMA public TO {db_user};
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO {db_user};
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO {db_user};
```

---

## Tomcat JVM Flags

For Joget 9.x on Java 17+, `tomcat.sh` must contain these flags:

```bash
export JAVA_OPTS="-Xmx768M -Dwflow.ignite=true -Dwflow.asyncRequestTimeout=5000 --add-opens=java.base/java.nio=ALL-UNNAMED -Dfile.encoding=UTF-8 -Dwflow.home=./wflow/ -javaagent:./wflow/wflow-cluster.jar -javaagent:./wflow/aspectjweaver-1.9.22.jar -javaagent:./wflow/glowroot/glowroot.jar"
```

Critical flags:
- `-Dwflow.ignite=true` — Enables Apache Ignite cache manager
- `--add-opens=java.base/java.nio=ALL-UNNAMED` — Required for Ignite on Java 17+
- `-Dwflow.asyncRequestTimeout=5000` — Async request timeout

Always remind the user to verify these flags, especially on fresh Joget downloads.

---

## Joget PostgreSQL Schema

Joget ships with a PostgreSQL schema file. Look for it at:
`{installation_path}/data/jwdb-empty-postgresql.sql` or
`{installation_path}/data/jwdb-postgresql-dx8.pgsql`

If the file doesn't exist in the installation, the user can either:
1. Let Joget's first-time setup wizard create the schema
2. Download it from Joget's documentation

When using the setup wizard, Joget will create all tables automatically after the
datasource is configured and the server starts for the first time.
