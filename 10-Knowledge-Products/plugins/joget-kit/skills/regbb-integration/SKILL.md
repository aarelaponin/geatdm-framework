---
name: regbb-integration
description: >
  Implement GovStack Registration Building Block (RegBB) integration on a spec-to-code Joget
  build (for example one made with sdd-kit) the PROVEN way: the channel contract
  ({serviceId}.yml / services.yml) is NEVER authored — it is emitted from the application
  model; the submission backbone (activator → submitter → receiver) is a set of catalog
  components; conformance docs are generated. Use WHENEVER work touches RegBB or GovStack on
  Joget: "implement RegBB", "wire the submission backbone", "author services.yml /
  learner_registration.yml", "map the form to GovStack", "send the application to the back
  office / peer instance", "Person resource mapping", "canonical mapping", "build the regbb
  emitter", "GovStack conformance", or when someone proposes a Layer-0 / composition-contract
  document — the known failure mode this skill prevents. Encodes the contract shape, the
  sender/receiver sync trap, and the open decisions to close first. Its example is set in
  Progressa: a learner's registration in a school.
---

# RegBB integration on a spec-to-code Joget build

## The one decision that governs everything

**Never author the RegBB channel contract. The application model is the only place
configuration lives; the contract is a build output.**

This is not a preference. Three reasons decide it:

- **A hand-written contract is a second description of the service.** Everything it needs —
  entities, attributes, types, master-data bindings, grids, identifiers — is already
  first-class in the application model. Writing it again by hand is where authoring stalls
  and where the two descriptions drift apart.
- **The sender and the receiver must load the same contract** from two separate bundles. A
  hand-synchronised duplicate is a drift defect waiting to happen. Generation from one source
  with provenance stamps removes the entire failure class.
- **Only a small semantic residue is genuinely authored**: the explicit GovStack paths for
  identifiers, name, contacts and address. That residue belongs in the model, as
  canonical-mapping data on the attributes — never in the YAML.

If anyone (including you) proposes an authored "composition contract", "Layer 0", or a
hand-written `{serviceId}.yml`, stop: that is the documented failure mode.

## The four-part organisation

| Part | What | Home |
|---|---|---|
| Runtime components | `regbb-submission` = the activator + submitter + receiver triad (below) | your platform's plugin catalogue, admitted via harvest → provenance scrub → config contract → catalog |
| Model data | GovStack paths, identifiers, channel config, conditional requirements | the application model only (see table below) |
| Direct emitter | `regbb` emitter: model → `{serviceId}.yml` + `validation-rules.yaml` | the generation layer, under the standard projector contract (pure, deterministic, provenance-stamped, refuses invalid input) |
| Conformance pack | the block's services mapped to the build, with a verdict scheme such as ✅ met / 🟡 partly met / ❌ not met / ★ beyond the specification | Generated (like a traceability table) — never maintained by hand |

The application model of this series is the one sdd-kit's skill `sdd-kit/application-model`
helps write. Its schema, `kit/application-model.schema.yaml` in sdd-kit,
already carries the two places this skill needs: a `govstack` mapping on an attribute (`path`,
`type_path`, `type_value`, `transform`) and the `interfaces.outbound` adapter entry (`component`,
`config`, with secrets only as `${env:NAME}`).

### What the model carries vs what the emitter defaults

| Information | Home |
|---|---|
| Explicit GovStack paths (identifiers, name, telecom, address) | attribute-level canonical mapping on entities — the semantic residue, the only genuinely authored part |
| Everything else → `extension.{attribute}` | emitter default, documented in the regbb emitter's MAPPING.md — never authored per field |
| Master-data flags, normalisation, transforms, grids, FKs | derived from attribute types, vocabularies, child entities |
| Service identity, GovStack version, endpoint, credentials | `interfaces.outbound` adapter entry; secrets as `${env:NAME}` |
| Conditional requirements ("if the learner transfers from another school, a transfer letter is required") | model validation rules → emitted into `validation-rules.yaml` |
| Trigger (which lifecycle transition fires submission) | transition effect → activator wiring (processes only invoke declared transitions) |

## Implementation workflow

1. **Close the open decisions first**, and record each as an ADR: the canonical-mapping shape
   (recommended: attribute-level); who owns the default path convention (recommended: the
   emitter, in its MAPPING.md); peer contract versioning (recommended: carry spec_version +
   content hash in the payload envelope, verify on receive); the conformance-pack format
   (recommended: the verdict scheme above). Check your ADR register before assuming they are
   still open.
2. **Extend the model.** Add canonical mapping to the entity attributes that map to GovStack
   Person resource paths; declare identifiers; add the `interfaces.outbound` adapter entry
   (component `regbb-submission`, service id/name/version, govstackVersion, receiver endpoint
   as `${env:NAME}`); put the submission trigger on the lifecycle transition; express
   conditional requirements as model rules. Read `references/serviceyml-contract.md` for the
   exact path conventions.
3. **Build the emitter as a direct emitter.** Pure function, validates input first, stamps
   output with spec_version + sha256. **Prove it by oracle round-trip**: take as the oracle a
   contract that already runs for one registration — or, failing one, a contract for one
   registration written once by hand and reviewed line by line — model that registration,
   emit, and semantically diff against the oracle. Classify every discrepancy P-BUG / M-GAP /
   H-TUNE (a fault of the emitter, a gap in the model, a hint to tune) and log
   promote/passthrough/reject decisions. Emit `validation-rules.yaml` in the same pass.
4. **Build or harvest the triad.** If you take the three components from an earlier build,
   scrub provenance before admission: grep package names, strings, defaults and sample data
   for the earlier customer's names and systems. The component's config contract IS the
   `{serviceId}.yml` schema — one JSON Schema, versioned with the component, fixture pair
   included.
5. **Deploy one contract to both ends.** The emitter output is deployed to sender and receiver
   from the same build; verify the stamps match on both ends (with a drift check in your kit,
   or by comparing the stamps by hand until you have one).
6. **Generate the conformance pack** when a distribution audience needs it — an emitter
   walking the model + catalog producing the mapping of the block's services to the build,
   with evidence. Never write it by hand; a conformance document that is a build output
   cannot rot.

## The worked example — Progressa's learner registration

PLR, the Progressa Learner Registry, keeps the register of learners. A school-facing Joget
instance takes the registration; PLR's back-office instance receives it.

- **Service:** `learner_registration`, "Learner Registration Service", one registration whose
  entity in charge is PLR.
- **Identifiers:** the identifier PNIA, the identity authority, gives this service at sign-in
  (the service never keeps the national number), and the learner's register number.
- **Determinant:** a learner who transfers from another school must add a transfer letter —
  a model validation rule, emitted into `validation-rules.yaml`.
- **Trigger:** the transition from `submitted` to `sent` of the registration's lifecycle starts
  `learner_registration_submission`; the submitter POSTs to PLR's receiver at
  `/services/learner_registration/applications`.
- **Fee:** none; the payment screen is switched off.

`references/serviceyml-contract.md` shows the contract this model emits.

## Gotchas (each learned the expensive way)

- **"Documents" means structured payloads** in GovStack RegBB spec language, not files. Don't
  build a file-transfer feature where a JSON channel is required.
- **The workflow process is convention-named** `{serviceId}_submission`; the activator sets the
  `serviceId` workflow variable and starts it. Receiver endpoint is
  `/services/{serviceId}/applications`.
- **The receiver persists via `FormDataDao.saveOrUpdate` — never raw SQL.** Joget DX keeps
  form definitions in two independent JVM caches; raw writes cause silent data loss. This is a
  hard rule (see `joget-plugin-dev`).
- **Auth is api_id/api_key, not basic auth**, on Joget API Builder surfaces.
- **Normalisation is detectable, not authorable**: yes/no vs 1/2 fields were auto-detected from
  option counts in an earlier build; in the model they follow from attribute type +
  vocabulary. Only override through config passthrough, logged.
- **Two lanes, don't conflate**: a runtime engine that interprets a metamodel of the
  registration (service, registration, determinant, action, screen and field rows) *at
  runtime* is one lane; generation from the application model *at build time* is this one.
  Both are valid — a model can emit the metamodel's rows as seed data — but the runtime engine
  never generates artefacts (it never generates XPDL; processes are written or generated
  separately).
- **The 24-char Joget form-id cap** applies to everything the contract references.
- **GovStack version compatibility** is part of the service identity — carry it in the model
  and the payload envelope, not in code.

## References — read when

- `references/serviceyml-contract.md` — authoring the emitter or the component config
  contract: full `{serviceId}.yml` section-by-section shape, GovStack Person path conventions,
  mapping-hints and business-rules anatomy, validation-rules output, the triad's runtime
  behaviour.
- The application model: the skill `sdd-kit/application-model`, and in sdd-kit the schema
  `kit/application-model.schema.yaml` (the attribute's `govstack` mapping, and
  `interfaces.outbound`).
