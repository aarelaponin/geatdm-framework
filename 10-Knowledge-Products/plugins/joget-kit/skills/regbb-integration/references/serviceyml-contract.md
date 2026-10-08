# The {serviceId}.yml channel contract — full shape

The contract the `regbb-submission` triad runs on, and the target the `regbb` emitter must
produce. The example values are Progressa's learner registration (PLR, the learner
registry); every name in them is invented.

## Section-by-section

```yaml
service:                      # identity — from the model's interfaces.outbound entry
  id: learner_registration    # lowercase_with_underscores; names the workflow ({id}_submission)
                              # and the receiver path (/services/{id}/applications)
  name: Learner Registration Service
  version: '1.0'
  govstackVersion: '1.0'      # spec compatibility — part of identity, carry in payload envelope

metadata:                     # derived — the emitter computes all of this from the model
  masterDataFields:           # = attributes bound to vocabularies / md_lookup entities
  - district
  - school
  - grade
  fieldNormalization:
    yesNo:                    # boolean attributes serialised yes/no
    - transfersFromAnotherSchool
    oneTwo:                   # enumerated 1/2 attributes (gender, sex, etc.)
    - gender

entities:                     # from the model's entity identifiers
  primary:
    type: Person              # GovStack resource type
    identifierTypes:
    - PniaServiceId           # the identifier PNIA gives this service; never the national number
    - Learner_registryNumber

serviceConfig:                # structural wiring — derived from entities + forms
  parentFormId: learnerRegistration
  defaults:
    gridParentField: learner_id     # child-grid FK conventions
    gridParentColumn: c_learner_id
  # sectionToFormMap, gridMappings: per child entity / tab subform

formMappings:                 # the heart — per form, field-by-field Joget id → GovStack path
  # explicit paths come from attribute-level canonical mapping in the model;
  # everything else gets the default convention extension.{fieldName}
```

## GovStack Person resource path conventions

The semantic residue — the only mappings that are genuinely authored (in the model's canonical
mapping, never in the YAML):

| Model attribute (typical) | GovStack path |
|---|---|
| primary identifier (the identifier the identity authority gives the service) | `identifiers[0].value` (type in `identifiers[0].type`) |
| registry number (the learner's register number) | `identifiers[1].value` |
| first name / middle name | `name.given[0]` / `name.given[1]` |
| surname | `name.family` |
| date of birth | `birthDate` |
| gender | `gender` |
| marital status | `maritalStatus` |
| email | `telecom[0].value` with `telecom[0].system = "email"` |
| mobile | `telecom[1].value` with `telecom[1].system = "phone"` |
| district | `address[0].district` |
| city / village | `address[0].city` (several attributes may map to one path) |
| street address | `address[0].line[0]` |
| everything else | `extension.{fieldName}` — the DEFAULT; never author these |

## validation-rules.yaml (emitted in the same pass)

From the model's validation rules:

```yaml
conditional_rules:
- trigger_field: transfersFromAnotherSchool
  trigger_value: "yes"
  requires_fields: [transferLetter, previousSchool]   # or requires_grid: <grid>, with min_entries
  message_template: "A transfer letter and the previous school are required when the answer to 'transfers from another school' is '{trigger_value}'"
```

A rule on a child grid takes `requires_grid: <grid id>` and `min_entries: <n>` in place of
`requires_fields`, and its message may use `{min_entries}`.

## The hint-file generator (what the emitter subsumes)

An earlier build generated its contract from three inputs, and the emitter replaces all three
with the model:

- a **form structure** extracted from the deployed forms — in a spec-to-code build, simply the
  application model;
- a **mapping-hints** file: service identity, explicit `field_mappings`,
  `default_mapping: "extension.{fieldName}"`, normalisation overrides;
- a **business-rules** file: the conditional requirements.

It auto-detected master-data fields (lookup bindings), yes/no vs 1/2 normalisation (option
counts), date/numeric transforms, multiselects, grid relationships and foreign keys, mapped
most fields automatically, and defaulted the rest to `extension.{fieldName}`. The anatomy of
the two hint files is a useful checklist of what the model must express.

## Runtime behaviour of the triad (what the component contract must configure)

- **The activator** — post-processor on the source form. Sets workflow variable `serviceId`,
  validates its format, starts process `{serviceId}_submission`. Single configuration point.
- **The submitter** — Tool activity inside that process. Loads `{serviceId}.yml` from bundle
  resources, extracts form data per formMappings, transforms per type rules (date, number,
  checkbox → multiselect, master-data lookup, yes/no normalisation), POSTs GovStack JSON to the
  receiver endpoint.
- **The receiver** — REST receiver `/services/{serviceId}/applications`. Loads the SAME
  YAML (contract identity is the invariant the emitter guarantees), validates inbound structure,
  maps back to form rows, persists via `FormDataDao.saveOrUpdate` (never raw SQL), optionally
  starts a receiving-side process.

The emitter must therefore produce ONE artefact consumed by BOTH bundles, and the deploy step
must place the same stamped file on both ends. Verify stamp equality post-deploy.
