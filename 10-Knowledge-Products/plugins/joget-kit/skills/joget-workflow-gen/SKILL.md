---
name: joget-workflow-gen
description: >
  Generate Joget DX 8.x workflow packages (XPDL 1.0 process + the three
  packageActivity*Map blocks inside appDefinition.xml) from a compact
  YAML spec. Use whenever the user wants to: create a workflow process,
  add an approval flow, wire forms to a workflow, build a sequential or
  parallel approval, fan out work to multiple reviewers, add a tool task
  that sends email or runs a BeanShell script or updates a form, attach
  a deadline with escalation, or generate common processes
  (registration approval, application review, appeal). Triggers
  on phrases like "build a workflow for X", "add an approval step",
  "send to the supervisor for review", "auto-evaluate then notify",
  "split the work into two reviewers", "escalate after 48 hours", "wire
  this form to a process". Use this even when the user does not say
  "workflow" — if they describe approvals, reviews, escalation,
  notifications, or any human-then-system orchestration in a Joget app,
  this is the right skill.
---

# Joget DX Workflow Generation Skill

Produce the artefacts that make a Joget DX 8.x workflow import cleanly:

1. **`package.xpdl`** — an XPDL 1.0 file at the JWA root, defining
   participants, applications, and the workflow process(es) themselves.
2. **Three map blocks** inside `appDefinition.xml`'s `<packageDefinition>`:
   - `<packageActivityFormMap>` — wires manual activities to forms
   - `<packageActivityPluginMap>` — wires tool activities to Java plugins
   - `<packageParticipantMap>` — resolves participant ids to real users/roles

If only the XPDL is generated and the maps are missing, Joget imports
the workflow but every form mapping and plugin invocation is empty —
the process runs through but nothing happens at each step. The
validator and helper scripts always emit both artefacts together.

A workflow ties a form (data entry surface) to a process (sequence of
human and system steps). It does NOT replace the form's data binder —
forms still use `WorkflowFormBinder` whether or not a process is
attached. The workflow's role is to control **who sees the form when**
and **what happens between human steps**.

---

## 1. Input the user may give you

**Compact YAML spec (preferred)**, in the shape shown here:

```yaml
package:
  id: registrationApproval
  name: "Learner Registration Approval"
  version: 1

participants:
  - { id: requester, name: "Requester", resolve: { type: requester } }
  - { id: officer,   name: "Registry Officer", resolve: { type: role, value: registry-officer } }
  - { id: supervisor, name: "Registry Supervisor", resolve: { type: role, value: registry-supervisor } }

variables:
  - status
  - rejection_reason

processes:
  - id: approveLearner
    name: "Approve Learner Registration"
    activities:
      - { id: runProcess,   type: manual, performer: requester,  form: learnerRegistration }
      - { id: review,       type: manual, performer: supervisor, form: learnerRegistration }
      - id: notify
        type: tool
        plugin: email
        config:
          toParticipantId: requester
          subject: "Your registration was reviewed"
          message: "Status: #variable.status#"
    transitions:
      - { from: runProcess, to: review }
      - { from: review,     to: notify }
```

**Natural language**: "When a school submits a learner's registration, send
it to the supervisor. If approved, send an email; if rejected, send
back to the requester for correction." → extract participants,
activities, transitions, conditions; confirm decisions only when
genuinely ambiguous.

---

## 2. Workflow

1. **Read the spec.** Identify: package id/name/version, participants,
   workflow variables, and one or more processes (each with activities
   + transitions + optional conditions/deadlines).
2. **Pick activity types.** Decision rule in section 4. Manual = user
   task with a form. Tool = system task with a plugin. Route = pure
   gateway (split/join with no work performed).
3. **Generate the XPDL.** Follow the canonical structure in sections 3
   to 5. Use exactly the namespace
   `http://www.wfmc.org/2002/XPDL1.0` — Joget's parser is strict about
   this.
4. **Generate the three maps.** Build the form map, plugin map, and
   participant map fragments to splice into `<packageDefinition>` in
   `appDefinition.xml`. Their shape is in section 3 and section 8.
5. **Verify references.** Every form referenced in the form map must
   exist in the target app. Every plugin name in the plugin map must
   be installed (or known to be installed as a custom plugin on the
   instance). Every participant id used as a `<Performer>` must
   appear in the participant map. Every transition `From`/`To` must
   point at an activity in the same process.
6. **Output.** Two files: `package.xpdl` and a
   `packageDefinition.fragment.xml` containing the three map blocks
   ready to splice into the JWA's `appDefinition.xml`. Default to
   writing both into `./_workflows/<packageId>/`.

---

## 3. Top-level wrapper — what goes in appDefinition.xml

A `<packageDefinition>` looks like:

```xml
<packageDefinition>
  <appId>learnerRegistry</appId>
  <id>registrationApproval</id>
  <version>1</version>
  <name>Learner Registration Approval</name>
  <dateCreated>2026-04-25 16:58:11.0 UTC</dateCreated>
  <dateModified>2026-04-25 16:58:11.0 UTC</dateModified>
  <packageActivityFormMap>...</packageActivityFormMap>
  <packageActivityPluginMap>...</packageActivityPluginMap>
  <packageParticipantMap>...</packageParticipantMap>
</packageDefinition>
```

The `<id>` matches the XPDL `<Package Id="...">` attribute and the
filename convention is `package.xpdl` (one per JWA — Joget
treats packages as singular per app). Multiple processes go inside
that one package as multiple `<WorkflowProcess>` entries.

The three map fragments that sit beside it are set out in section 8.

---

## 4. Activity types — pick one per activity

| Spec type | XPDL Implementation | Used for |
|---|---|---|
| `manual` | `<Implementation><No/></Implementation>` | User task — Joget renders the mapped form to the assigned performer |
| `tool` | `<Implementation><Tool Id="default_application"/></Implementation>` | System task — runs a plugin (Email, BeanShell, FormDataUpdate, custom) |
| `route` | `<Route/>` | Pure gateway — no work performed, controls flow via Split/Join in TransitionRestrictions |

Manual activities map to forms via `packageActivityFormMap`. Tool
activities map to plugins via `packageActivityPluginMap`. Route
activities map to nothing — they exist purely for Split/Join behavior.

Every activity needs a `<Performer>` (a participant id). Even tool and
route activities — Joget uses the performer to decide which swimlane
the activity renders in. For tool activities, the performer is
cosmetic (the plugin runs as the system). For route activities, set
the performer to whichever participant logically "owns" the decision.

---

## 5. Transitions — connecting activities

```xml
<Transition From="<srcId>" Id="<transId>" To="<dstId>">
  <Condition Type="..."> ... </Condition>   <!-- optional -->
</Transition>
```

**Condition types:**

| Type | Meaning |
|---|---|
| (no Condition) | Always taken |
| `CONDITION` | JS/XPath expression in the body. e.g. `parseFloat(counter) < parseFloat('4')` |
| `OTHERWISE` | The "else" branch — taken when no other CONDITION sibling matches |
| `EXCEPTION` | Triggered by a deadline's `<ExceptionName>` |

When you have multiple outgoing transitions from the same activity:

- All unconditional → fan-out (parallel). Use `<Split Type="AND">` in
  the source's `<TransitionRestrictions>`.
- Mix of `CONDITION` + `OTHERWISE` → branch (XOR gateway). Use
  `<Split Type="XOR">`.
- One has `EXCEPTION` → deadline branch. The source must have a
  `<Deadline>` with a matching `<ExceptionName>`.

When multiple transitions converge into the same activity:

- Synchronization (wait for all branches) → `<Join Type="AND"/>` in
  the destination's `<TransitionRestrictions>`.
- Merge (continue when any branch arrives) → `<Join Type="XOR"/>`.

Full Split/Join syntax is XPDL 1.0's own; read Joget's handling of it
from the Community Edition source named under "Verifying against the
Joget source" below.

---

## 6. Deadlines and escalation

```xml
<Activity Id="reviewByOfficer" Name="Review by Officer">
  <Implementation><No/></Implementation>
  <Performer>officer</Performer>
  <Deadline Execution="SYNCHR">
    <DeadlineCondition>
      var m = new java.util.Date();
      m.setTime(ACTIVITY_ACTIVATED_TIME.getTime() + (deadlineHours * 3600000));
      m;
    </DeadlineCondition>
    <ExceptionName>Escalate</ExceptionName>
  </Deadline>
</Activity>
```

Then add a transition with `Condition Type="EXCEPTION"` whose body
matches the `ExceptionName`:

```xml
<Transition From="reviewByOfficer" To="escalateToSupervisor" Id="t_escalate">
  <Condition Type="EXCEPTION">Escalate</Condition>
</Transition>
```

`Execution`:
- `SYNCHR` — the deadline blocks: the activity is interrupted and the
  exception transition fires.
- `ASYNCHR` — the deadline runs in parallel: the original activity
  continues, AND the exception transition fires (typically used for
  reminder emails).

`DeadlineCondition` is a Java expression that evaluates to a `Date`.
The example above adds N hours to the activation time, where
`deadlineHours` is a workflow variable. `<ProcessHeader
DurationUnit="h"/>` sets the default unit.

---

## 7. Tool plugins — two invocation patterns

Plugins are wired in `packageActivityPluginMap` entries. There are
**two different shapes** for the entry depending on whether you're
invoking a built-in plugin or a custom Java plugin (one built with
`joget-plugin-dev`).

### Pattern A — `MultiTools` wrapper (use for custom Java plugins)

This is the **production pattern**, verified in two production
deployments. The `pluginName` is always
`org.joget.apps.app.lib.MultiTools`, and the actual custom plugin sits
inside the `tools` array.

```xml
<entry>
  <string>processId::activityId</string>
  <packageActivityPlugin>
    <processDefId>processId</processDefId>
    <activityDefId>activityId</activityDefId>
    <pluginName>org.joget.apps.app.lib.MultiTools</pluginName>
    <pluginProperties>{"runInMultiThread":"","comment":"","tools":[{"className":"<your.package>.feeimport.lib.FeeBatchImporter","properties":{"recordId":"#variable.id#","batch_type":"#variable.batch_type#"}}]}</pluginProperties>
  </packageActivityPlugin>
</entry>
```

**Why MultiTools is the default for custom plugins:**

- Joget's process designer UI emits this shape when you pick a
  custom plugin from the palette — round-trips cleanly.
- The `tools` array lets you chain multiple plugins in one activity
  (e.g. "import the payment batch THEN reconcile the fees" in a single tool
  activity).
- Properties on each inner plugin are isolated, so chaining doesn't
  confuse property names.

**Property scaffolding:**

```json
{
  "runInMultiThread": "",
  "comment": "",
  "tools": [
    {
      "className": "<your.plugin.FullyQualifiedName>",
      "properties": {
        "<plugin-specific config>": "<value or #variable.foo#>"
      }
    }
  ]
}
```

`runInMultiThread: "true"` runs each tool in the array in parallel;
default empty = sequential. `comment` is ignored at runtime, useful
for self-documenting activity intent.

### Pattern B — Direct plugin invocation (built-in plugins)

For Joget's built-in tool plugins (Email, BeanShell, FormDataUpdate,
Counter), `pluginName` is the plugin className directly:

```xml
<entry>
  <string>processId::activityId</string>
  <packageActivityPlugin>
    <processDefId>processId</processDefId>
    <activityDefId>activityId</activityDefId>
    <pluginName>org.joget.apps.app.lib.EmailTool</pluginName>
    <pluginProperties>{"toParticipantId":"officer","subject":"...","message":"..."}</pluginProperties>
  </packageActivityPlugin>
</entry>
```

The built-in plugins this skill knows about:

| Spec name | className | Edition | Purpose |
|---|---|---|---|
| `email` | `org.joget.apps.app.lib.EmailTool` | CE | Send email |
| `formDataUpdate` | `org.joget.plugin.enterprise.FormDataUpdateTool` | EE | Set fields on a form record |
| `beanshell` | `org.joget.apps.app.lib.BeanShellTool` | CE | Run a BeanShell script |
| `counter` | `org.joget.plugin.enterprise.CounterIncrementTool` | EE | Increment a workflow variable |
| `dbUpdate` | `org.joget.apps.app.lib.DatabaseUpdateTool` | CE | Run SQL against a datasource |
| `json` | `org.joget.apps.app.lib.JsonTool` | CE | Call a JSON/REST endpoint |
| `push` | `org.joget.apps.app.lib.PushNotificationTool` | CE | Send a push notification |
| *(decision)* | `org.joget.apps.app.lib.BeanShellDecisionPlugin` | CE | Script a route decision |
| *(decision)* | `org.joget.apps.app.lib.RulesDecisionPlugin` | CE | Rule-table route decision |

The last five were previously missing. They matter on a **Community** instance, where
`FormDataUpdateTool` and `CounterIncrementTool` are unavailable: `DatabaseUpdateTool` or a
`BeanShellTool` is the CE way to set a field or bump a counter. `MultiTools` — the wrapper this
skill defaults to — is itself CE (`org.joget.apps.app.lib.MultiTools`).

### Decision rule

| Plugin lives in | Use pattern |
|---|---|
| `org.joget.apps.app.lib.*` (built-in) | B — direct |
| `org.joget.plugin.enterprise.*` (enterprise built-in) | B — direct |
| Anything else (a custom JAR, `<your.package>.*`, etc.) | A — MultiTools |

When in doubt, use MultiTools — it accepts built-ins inside `tools`
too, so a plugin map written entirely in MultiTools shape is always
valid. The only reason to prefer pattern B is matching the tutorial
docs and Joget UI exports for built-ins.

### Verifying against the Joget source

The Joget **Community Edition v9** source is public: clone the GPLv3 repository
`https://github.com/jogetworkflow/jw-community` (below, `/path/to/jw-community`). Every XPDL and map claim in this skill is checkable there — it outranks this file.

```bash
SRC=/path/to/jw-community   # your clone of github.com/jogetworkflow/jw-community
ls   $SRC/wflow-core/src/main/java/org/joget/apps/app/lib/           # process tools + hash variables
cat  $SRC/wflow-core/src/main/java/org/joget/apps/app/model/PackageParticipant.java
grep -rn "XPDL1.0" $SRC --include=*.java --include=*.xsd | head
ls   $SRC/wflow-shark $SRC/wflow-wfengine                            # the workflow engine itself
```

`PackageParticipant.java` is the authority for the participant table below; the XPDL namespace
and parser strictness live in `wflow-shark` / `wflow-wfengine`.

**It is Community Edition, so absence proves nothing for Enterprise classes.**
`org.joget.plugin.enterprise.*` and custom packages (`<your.package>.*`) will not be found there and that is
expected. Treat "not in the source" as proof of absence only for `org.joget.apps.*`.

### Variable substitution in plugin properties

Both patterns support hash-variable substitution in property values:

- `#variable.<name>#` — workflow variable
- `#requestParam.<name>#` — process start parameter
- `#currentUser.username#` — user who triggered the activity
- `#form.<formId>.<fieldId>#` — value from a form bound to the
  process

Substitution is textual. Quote any value that lands inside JSON, and
escape backslashes/quotes if user content might contain them.

The full property surface for each plugin is read off the plugin's own
configuration in a working JWA, or from the Community Edition source
named under "Verifying against the Joget source" above.

---

## 8. Participants — resolving roles to users

A participant is a logical role in the XPDL. The participant map
resolves it to actual users at runtime:

```xml
<entry>
  <string>processId::officer</string>
  <packageParticipant>
    <processDefId>processId</processDefId>
    <participantId>officer</participantId>
    <type>role</type>
    <value>registry-officer</value>
  </packageParticipant>
</entry>
```

**Resolution types:**

| Type | `value` semantics | Use case |
|---|---|---|
| `requester` | Activity id (`runProcess` typically) | The user who started the process |
| `role` | **Only `adminUser` or `loggedInUser`** | See warning below |
| `group` | Directory group id (`dir_group` row) | Anyone in this org group |
| `user` | Username | Specific user |
| `workflowVariable` | `<varName>,user` or `<varName>,group` | User stored in a workflow variable |

> **⚠ `type: role` does not mean "an organisation role".** `PackageParticipant` in the CE source
> declares exactly two role constants — `VALUE_ROLE_ADMIN = "adminUser"` and
> `VALUE_ROLE_LOGGED_IN_USER = "loggedInUser"` (verified at tags `9.0.7` and `9.1.0.1`). Putting
> an org role id there yields an **empty whitelist and no error**: process start silently returns
> an empty processId. Organisation roles are directory **groups** — use `type: group` with a real
> `dir_group` id. It is source-confirmed.

The `processStartWhiteList` participant id is special: it controls who
can **initiate** the process. Always set it (typically to a role or
`adminUser`) so the start permission isn't accidentally open.

The rare participant types (`loggedInUser`, `hod`, `dept`) are seldom
used; read their map entries off a working JWA before using one.

---

## 9. Variables

Workflow variables are typed strings stored on the process instance.
Declared in XPDL:

```xml
<DataFields>
  <DataField Id="status" IsArray="FALSE">
    <DataType><BasicType Type="STRING"/></DataType>
  </DataField>
</DataFields>
```

Read in:

- **Tool plugin properties**: `#variable.status#`
- **Email subject/body**: `#variable.status#`
- **Form fields**: a form field with the same id auto-binds via
  `WorkflowFormBinder`
- **BeanShell**: `workflowAssignment.getProcessVariable("status")`

Set by:

- A user filling in a form field with the matching id
- `FormDataUpdateTool` writing into the form field
- `BeanShellTool` calling `WorkflowManager.activityVariable(...)` or
  `processVariable(...)`
- A tool plugin's return values (when the plugin emits variables)

In specs, list variables once at the package or process level — the
generator declares the `<DataField>` and ensures the field id matches
between XPDL and the form-side binding.

---

## 10. The four process patterns covered first

Each pattern is set out below, and the three worked examples in section
11 follow the same shapes.

**1. Sequential approval** (the bread-and-butter):

```
runProcess (manual, requester)
  → review (manual, supervisor)
  → notify (tool, email)
```

**2. Parallel review then merge:**

```
runProcess (manual, requester)
  → reviewA (manual, reviewer1)  ─┐
  → reviewB (manual, reviewer2)  ─┴→ decision (manual, supervisor) → notify
```

The fan-out uses `<Split Type="AND">` on `runProcess`. The merge uses
`<Join Type="AND">` on `decision` so it waits for both reviewers.

**3. System tool then manual:**

```
runProcess (manual, requester)
  → autoEvaluate (tool, beanshell)
  → reviewResult (manual, supervisor)  → ...
```

The tool runs the rules engine (or any custom plugin), writes results
into workflow variables, and the supervisor sees the results
pre-populated when the form opens.

**4. Simple workflow attached to a single form:**

```
runProcess (manual, requester)  → end
```

One activity, one form, one transition to nowhere. The point isn't
the flow — it's giving the form a workflow context so
`WorkflowFormBinder` has variables to bind to (status, audit fields,
etc.). Useful for forms that need an audit trail without real
multi-step orchestration.

---

## 11. Three processes of the same shape, set in Progressa

Three processes, set in Progressa (the fictional country of the courses),
described here so that a new one can be generated to the same pattern.
They are described, not shipped as files: write each as a YAML spec in
the shape of section 1, from which the `package.xpdl` and the
`packageDefinition.fragment.xml` are generated as section 12 sets out.

- **`learner_registration_approval.yml`** — the school's officer
  submits → the registrar of PLR, the learner registry, reviews →
  approve/reject → notification email. 24h deadline at the registrar
  step with escalation to the senior registrar.
- **`licence_application_review.yml`** — an institution applies to
  PHEQA for a provisional licence (`lcApplication`) → tool task checks
  that the application is complete and the fee confirmed → if
  complete, the registration officer reviews and PHEQA recommends →
  the licence record is updated via FormDataUpdateTool →
  notification. If incomplete, automatic return email.
- **`appeal_handling.yml`** — an institution files `lcAppeal` against
  a decision of PHEQA → PHEQA's appeal panel reviews → decision →
  notification.

Use these as starting points: write the spec to the same shape, adjust
participants and form ids, regenerate.

---

## 12. Output format

Default: write two files to `./_workflows/<packageId>/`:
- `package.xpdl` — XPDL 1.0 file
- `packageDefinition.fragment.xml` — `<packageDefinition>` block to
  splice into `appDefinition.xml`'s `<packageDefinitionList>`

If the user wants a complete mini-JWA they can import standalone, wrap
both files into a ZIP with a stub `appDefinition.xml` whose
`<packageDefinitionList>` holds the fragment.

---

## 13. Validation

Check the generated XPDL and fragment against the shape rules in this
document, and against the app itself when a JWA or app folder is
available. The check:

1. Parses both XML files (catches malformed output).
2. XPDL well-formedness: namespace correct, every transition's
   `From`/`To` references an `Activity Id`, every `Performer`
   references a `Participant Id`.
3. Form map: each `formId` resolves to a real form in the target app.
4. Plugin map: each `pluginName` is one of the known plugins (warning
   if it looks like a custom plugin not in the standard set).
5. Participant map: every participant id used as `<Performer>` in
   XPDL has an entry; resolution `type` is one of the allowed values.
6. Cross-checks: every activity in XPDL whose Implementation is
   `<No/>` has a form-map entry; every activity with `<Tool/>` has a
   plugin-map entry. Activities with `<Route/>` have neither.

If any check fails, fix the spec or the artefacts before showing the
result to the user — broken workflow refs cause silent failures at
runtime that are very hard to debug after deployment.

---

## 14. Common pitfalls

- **Wrong XPDL namespace.** Joget's parser only accepts
  `http://www.wfmc.org/2002/XPDL1.0`. Other namespaces (XPDL 2.x,
  BPMN) silently fail.
- **Manual activity without form-map entry.** The activity renders
  but shows a blank form. Always pair `<Implementation><No/>` with a
  `<packageActivityForm>` entry.
- **Tool activity without plugin-map entry.** The activity completes
  instantly without doing anything. Same pairing rule.
- **Participant id in XPDL but not in participant map.** The
  performer can't be resolved → the activity is assigned to no one →
  it sits in the inbox forever. Common cause: typo, or forgetting the
  `processStartWhiteList` entry.
- **Hash variable not quoted in plugin properties.** Plugin
  properties are JSON-as-string; hash variables like
  `#variable.status#` are textually substituted. If the substituted
  value contains a quote or backslash, the JSON breaks. The
  `EmailTool` is forgiving (it handles HTML); custom plugins that
  parse JSON strictly are not — escape any user-controlled value.
- **`processStartWhiteList` left open.** If you don't define this
  participant, anyone can start the process. Always set it explicitly
  (to a role like `adminUser` or a list of roles).
- **Form id truncation.** Joget caps form ids at 24 chars. When the
  form map references a form with a long label, use the truncated id
  (e.g. `md04specialNeedsCate` not `md04specialNeedsCategory`). The `joget-form-gen` and validator both
  enforce this — your workflow needs to match.
- **Layout extended attributes are optional.** The
  `JaWE_GRAPH_*` extended attributes are only used by Joget's visual
  designer for positioning. Workflows import and run fine without
  them — the designer just shows everything stacked. Generate them
  only if asked.

---

## 15. When this skill is the wrong tool

- If the user wants a **form** (data entry surface), use
  `joget-form-gen`.
- If the user wants a **datalist** (listing/grid/report), use
  `joget-datalist-gen`.
- If the user wants a **userview** (navigation/menus), use
  `joget-userview-gen`.
- If the user wants a **custom Java plugin** (not just configuring an
  existing one), use `joget-plugin-dev`.
- If the user is figuring out **what processes they need** from
  business requirements (rather than implementing one they already
  defined), start with `joget-req-analyst`, then come back here.
