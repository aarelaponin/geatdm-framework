---
name: joget-component-architect
description: >-
  Design the component architecture for a Joget DX building block from a requirements module slice: produce or extend the Component Architecture Document (CAD) — entity inventory mapped to a reference data model, state machines for case-bearing entities, the configuration-vs-runtime split, the plugin budget, interface contracts, and the feature decomposition that feeds feature specification. Use this skill WHENEVER work sits between a requirements specification and feature specs: "create the CAD", "architect this module or building block", "what entities or components do we need", "decompose this FR slice into features", "design the data model for this capability on Joget", "map these entities to the reference model", "draw the state machine", or when a scope card exists but no CAD covers its FRs. This is Stage 1 of the Joget Delivery Workflow — run it BEFORE joget-req-analyst produces form and plugin specs for a new building block, and re-run it in amend mode when a new slice extends an existing block.
---

# Joget Component Architect

Produce the Component Architecture Document (CAD) — the layer between a
requirements module (FR catalogue) and feature specs. One CAD per building
block; created once, **amended** per slice, never rewritten. The CAD's job is
to make the data model canonical, the state machines explicit, and the plugin
list a budget — so that Stage 2/3 (specification and generation) are
mechanical.

## Inputs

- A Scope Card (module + FR slice + archetype target + country profile).
- The module specification (FR tables, §2.3.3 boundaries, BRs, NFRs, personas).
- The sector's canonical reference data model, as files you can read (the
  canonical entity source: for example the data models a GovStack building
  block specification publishes, or a ministry's own reference model).
- Existing CAD for the building block, if any (amend mode).

## Protocol

### Step 1 — Charter and boundaries
Write/confirm the one-paragraph charter: what the component owns, what it
explicitly does not (lift the boundary statements from the module's §2.3.3
verbatim where possible), and its position in the module dependency graph.

### Step 2 — Entity design against the reference model (the anchor step)
For every noun the FR slice manipulates:

1. **Find its source in the reference model.** Record the mapping and
   every divergence with a reason. New entities with no source in the reference
   model are flagged — they are either (a) Joget-operational (worklist, log) and
   exempt, or (b) a candidate extension to feed back into the reference model.
2. **Apply the reference model's discipline:**
   - **Subject, service and period on every transaction:** every transactional entity carries FKs
     to its subject, the service it belongs to and the period it covers, or
     the CAD documents why not. (In Progressa's learner registration: the
     learner's register number, the school and the school year.)
   - **Extension pattern:** service-specific extensions of a core entity use a
     one-to-one FK (NOT NULL + UNIQUE + CASCADE semantics at the logical
     level), never duplicated core fields.
   - **Country handling:** NULL country_code = universal; ISO 3166-1 alpha-3 =
     country-specific; single-country deployments may omit the country FK
     (record the choice).
3. **Classify per the joget-req-analyst mapping rules** into: main form /
   child (grid) / junction / MD-lookup / config-catalogue / log-event. Assign
   Joget table names (mind length limits and the `app_fd_` + `c_` conventions
   from joget-db-inspect).
4. Produce the **entity inventory table** (entity, table, kind, PK strategy,
   parent, reference-model source, divergences).

### Step 3 — State machines
One per case-bearing entity, **before** any workflow thinking: states,
transitions, transition guards, actors, terminal states. Guards later become
workflow route conditions or plugin validations — name which, per guard.
Workflow XPDL is generated *from* the state machine at Stage 3; if a workflow
need appears that the state machine can't express, fix the state machine here.

### Step 4 — Configuration vs runtime split + plugin budget
Default everything to configuration (forms/datalists/userviews/workflows).
Promote to a plugin ONLY on a trigger from joget-req-analyst §"What Needs a
Custom Plugin" (cross-form computation, cross-entity validation,
workflow-triggered actions, external APIs, batch, complex rules, custom IDs,
file processing). Each plugin entry: id, type (ApplicationPlugin /
FormLoadBinder / FormStoreBinder / Validator / …), the **FR that forces it**,
FormDataDao reads/writes, complexity rating. The list is a budget: growth
during Stage 2 returns the feature here for re-architecture.

### Step 5 — Interface contracts
Table of every cross-module and external interface: direction, mechanism
(plugin→FormDataDao, API, shared table, file), and the contract (payload /
posting record schema / status codes). Boundary notes from the module become
contract lines, not prose.

### Step 6 — Userview & persona map, NFR notes
Personas (module §3.2) → userview categories → menus, with permissions. NFR
section lists only NFRs this block must actively design for, one line each on
how (volumes → table/partition choices; deadline NFRs → SLA engine; audit
depth → log-event entities).

### Step 7 — Feature decomposition (the contract with Stage 2)
Slice the FR range into features: vertical (entity + UI + process + rules for
one FR cluster), 1–5 build-days each, dependency-ordered (MD → independent →
FK-dependent → grids → workflow → plugins → reports). Output the table:
Feature ID (`<BB>-Fnn-<slug>`), name, FR coverage, entities, depends-on.
**Mechanical completeness check:** the union of feature FR ranges equals the
scope card's FR slice — list any FR not covered and why.

## Gate G1 — Architecture Done (report it explicitly)

- [ ] Entity inventory complete; every entity mapped to the reference model or exempt-flagged
- [ ] State machine exists for every case-bearing entity
- [ ] Plugin budget: every plugin FR-justified and typed
- [ ] Interface contracts cover every §2.3.3 boundary the slice touches
- [ ] Feature decomposition covers 100% of the slice FRs
- [ ] Every [Configurable] in the slice has a future carrier *category*
      (MD form / env / plugin property) noted for Stage 2 to concretise

## Output

Write/extend `CAD-<BB>.md` using `references/cad-template.md`. In amend mode,
change only the sections the slice touches and append to §7; never renumber
existing features. End by listing the Stage-2 hand-off: the feature rows ready
for FIS production.
