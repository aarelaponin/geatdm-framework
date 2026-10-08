---
name: joget-instance-setup
description: >
  Register and configure new Joget DX instances in an instance register (one
  YAML file, <your-instance-register>) with automatic port allocation and
  Tomcat/datasource configuration. Supports both
  MySQL and PostgreSQL databases. Use this skill whenever the user wants to: add a
  new Joget instance, register a new Joget environment, set up ports for a new
  Joget, allocate ports for Joget, configure a new Joget instance, onboard a new
  instance, change database type for Joget, switch Joget from MySQL to
  PostgreSQL, or any request involving editing the instance register, Joget port
  management, or Joget instance lifecycle setup. Also triggers on mentions of
  "instances.yaml", the instance register, or "new Joget instance".
---

# Joget Instance Setup

This skill automates the registration and configuration of new Joget DX instances
in a multi-instance development environment. It reads the current state of
the instance register, `<your-instance-register>` (for example an
`instances.yaml` you keep in a folder of your choice), allocates non-conflicting ports, and writes the
configuration for a new instance — supporting both MySQL and PostgreSQL databases.

## When to Use

- User wants to add/register a new Joget instance
- User wants to configure ports for a Joget instance
- User wants to switch or add PostgreSQL support alongside MySQL
- User mentions `instances.yaml`, the instance register, or port allocation

## Prerequisites

The register is the **single source of truth** for every instance: the tools that
set an instance up and the tools that deploy to it both read it. This kit ships
no such tool. If you keep one — an instance manager that configures Tomcat,
Glowroot, the database, the datasource and the schema, or a deployment toolkit
that deploys forms, apps and data — point it at the register. sdd-kit's deploy,
`kit/tools/deploy_dx9.py`, reads a register of this shape through its
`--instances <path>` option.

## Workflow

### Step 1: Read Current State

Read `<your-instance-register>` to understand:
- Which instance names are taken (e.g., joget1–joget3)
- Which ports are allocated (HTTP, shutdown, AJP, HTTPS, Glowroot)
- Which MySQL instances exist and their ports
- Whether any PostgreSQL instances already exist

Present a summary to the user showing the current allocation table.

### Step 2: Gather Instance Details

Ask the user for the following (suggest sensible defaults based on patterns):

| Field | Example | How to Default |
|-------|---------|----------------|
| Instance name | `joget4` | Next sequential `jogetN` |
| Joget version | `9.0.3` | Same as most recent instance |
| Environment | `pheqa_test` | Ask user |
| Description | `"PHEQA test instance"` | Ask user |
| Owner | `"Dev Team"` | Same as most recent instance |
| Installation path | `/opt/joget/joget-enterprise-linux-9.0.3` (`<installation_path>`) | Pattern from existing |
| Database engine | `mysql` or `postgresql` | Ask user |
| Database name | `jwdb` or `jwdb_dev4` | `jwdb` for isolated DB instances, `jwdb_devN` for shared |

### Step 3: Allocate Ports

Read `references/port-allocation.md` for the allocation rules and algorithm.

Key principle: scan ALL existing instances to find every port in use, then allocate
the next available ports that don't collide with anything.

Present the proposed allocation to the user for confirmation before writing.

### Step 4: Generate YAML Snippets

Read `references/yaml-templates.md` for the exact YAML structures for both MySQL
and PostgreSQL instances.

Generate **separate, clearly labelled snippets** — each one targets a different
section of `instances.yaml`. This separation matters because the snippets go into
different locations in the file, and combining them into a single block produces
invalid YAML.

**Snippet 1 — Instance block** (goes under the existing `instances:` key):
- Contains the `<your-instance>:` block with tomcat, database, glowroot, credentials
- Must be indented with 2 spaces (it's a child of `instances:`)
- For PostgreSQL: uses `database.type: postgresql` and `database.postgresql_instance`
- For MySQL: uses `database.type: mysql` and `database.mysql_instance`

**Snippet 2 — Infrastructure block** (PostgreSQL only, top-level key):
- Only needed if `postgresql_instances:` doesn't already exist in the file
- A new top-level section, same level as `mysql_instances:`
- Place it after the `mysql_instances:` section in the file

**Snippet 3 — Database defaults** (PostgreSQL only, top-level key):
- Only needed if `postgresql_database_defaults:` doesn't already exist
- A new top-level section, same level as `database_defaults:`
- Place it after the existing `database_defaults:` section

**Snippet 4 — .env entries** (not YAML — goes into the `.env` file):
- Password environment variables the user must add to their `.env` file

When saving to a file, write each snippet into its own clearly headed section so
the user knows exactly where to paste each one. When editing `instances.yaml`
directly, use the Edit tool to insert each snippet into the correct location.

### Step 5: Write Configuration

After user confirms:
1. **Insert** the instance block (Snippet 1) under the `instances:` key in
   `<your-instance-register>` — add it after the last existing instance, before
   any top-level section that follows
2. If PostgreSQL and `postgresql_instances:` doesn't exist yet, **append** the
   infrastructure block (Snippet 2) after the `mysql_instances:` section
3. If PostgreSQL and `postgresql_database_defaults:` doesn't exist yet, **append**
   the defaults block (Snippet 3) after the `database_defaults:` section
4. After writing, **validate** the file by parsing it as YAML (use Python's
   `yaml.safe_load()` or equivalent) to catch any syntax errors
5. Show the user the `.env` entries (Snippet 4) they need to add manually

### Step 6: Generate Setup Commands

Provide the user with the commands to complete the setup:

**For MySQL:**
If you keep an instance manager that reads the register, run its setup for
`<your-instance>`. Otherwise follow the manual steps below, with the MySQL
datasource template and MySQL's own commands to create the database and user.

**For PostgreSQL** (and for MySQL without an instance manager), generate the manual steps:
1. SQL commands to create database and user in PostgreSQL
2. JDBC driver download reminder (PostgreSQL JDBC driver → Tomcat lib/)
3. Datasource properties content for `app_datasource-default.properties`
4. Tomcat `server.xml` port changes (or remind to run `--configure-tomcat`)
5. Glowroot `admin.json` configuration
6. `tomcat.sh` JVM flags check (critical for Joget 9.x)

### Step 7: Install the plugins a kit-built application needs

An application built by the delivery kit — in this series, the kit of sdd-kit — binds plugins
that a new server does not have. The kit has one deploy (sdd-kit's `kit/DEPLOY.md`, section 2),
and its plugin check (sdd-kit's `kit/tools/deploy_dx9.py`) refuses the archive before it imports
anything while one of them is missing. Install both kinds when the server is made:

1. **The platform library's plugins.** Take the jars the plugin library has built
   (`<joget-platform-plugins>/plugins/<plugin>/target/`) at the registry version the kit pins —
   `generators.registry_version` in the project's `.kit.yaml`, the same pin its build checks
   (sdd-kit's `kit/DEPLOY.md`, section 1) — and copy each plugin the application binds into
   `<installation_path>/wflow/app_plugins/`, with the libraries it imports (the transition
   guard imports the event chain and the status manager). This kit does not ship that library;
   sdd-kit's `kit/DEPLOY.md`, section 2, lists the plugins and the class each one carries. When
   one is missing, the deploy's plugin check names its class. Restart the server and read its
   log for each bundle starting.
2. **Joget's API Builder**, the marketplace plugin `apibuilder_plugins`. Every archive the kit
   builds carries a data interface, `API-<appId>-data`, which the API Builder serves; without it
   every call to the interface answers 500 and the kit's acceptance runner cannot run. It is not
   in the platform plugin library: install it through the Joget console's plugin upload, from
   Joget's marketplace or a copy held on a server that has it, and then bind the interface's
   key: create an API key and grant it to the interface, in the console or through the app's
   API key menu (`ApiKeyMenu`, see `joget-userview-gen`).

### Step 8: Verify

After setup is complete, suggest verification steps:
- Check `instances.yaml` is valid YAML
- Confirm no port conflicts (`lsof -i :<port>`)
- For PostgreSQL: test connection with `psql`
- Remind that deploying forms through an API needs the plugin that serves that API on the instance

## Important Rules

1. **Never overwrite the register** — always append or edit specific sections
2. **Never hardcode passwords** — use `password_env: VAR_NAME` pattern
3. **Always check for port collisions** before proposing an allocation
4. **HTTPS port 8443 is shared** across instances (only one can use it at a time)
5. **Preserve existing formatting** and comments in the register
6. **Validate YAML syntax** after editing (parse it to check)

## Reference Files

- `references/port-allocation.md` — Port allocation rules, conflict detection, algorithm
- `references/yaml-templates.md` — YAML templates for MySQL and PostgreSQL instances,
  database infrastructure blocks, datasource properties, and environment variables
