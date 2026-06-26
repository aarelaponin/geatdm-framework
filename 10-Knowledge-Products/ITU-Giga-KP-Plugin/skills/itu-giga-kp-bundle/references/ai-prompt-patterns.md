# AI-usage-prompt patterns

Every subtopic ships one AI usage tip: a copy-paste Claude prompt that produces a real artefact the listener can take to a Monday-morning meeting. The prompt always has the same **four parts** (this is an ITU compliance item and a `kp-bundle-qa` check):

1. **What the prompt does** — the problem it solves, in one or two sentences.
2. **The prompt template** — copy-paste ready, in monospace. Opens with a clear "Below is…/My country is…" naming the input the listener pastes; decomposes the task into named outputs; ends with an explicit output format.
3. **Inputs and outputs** — what the listener pastes in, what they get back.
4. **Safeguard** — one caveat addressing the *specific* failure mode of *this* prompt. Never boilerplate.

## The pattern catalogue (proven across Modules 1–2)

Pick the shape that matches what the subtopic teaches. The listener's persona (Strategist or Architect) decides the grade of the artefact.

| Pattern | Produces | Used in | Use when the subtopic teaches… |
|---|---|---|---|
| **Diagnostic table** | A table assessing whether the listener's country shows the problem the subtopic names, with severity + evidence | 1.1 (fragmentation symptoms) | a problem the listener should test their own country against |
| **Ministerial / cabinet slide** | A one-slide explainer in non-technical language | 1.2 (what is EA) | something the Strategist must brief upward |
| **Whole-of-government business case** | A per-programme cost table making a country-level calculation visible | 1.3 (re-use math) | an argument that only holds at portfolio scale |
| **Joint-agenda decomposition** | A business / IT / joint 3-column table plus a meeting agenda | 1.4 (lingua franca) | a decision that needs business and IT in the same room |
| **Coverage map** | A map of the listener's existing initiatives against the framework | 1.5 (PAERA foundations) | "what do we already have vs need to build" |
| **RACI matrix** | A per-phase responsible/accountable/consulted/informed table + role gaps | 1.6 (lifecycle) | who plays which role across a process |
| **Governance artefact (ToR)** | A Terms of Reference, charter, or similar institutional document | 1.7 (EA Board) | standing up a body or a governance instrument |
| **Comparator-country card** | 3–5 country cards tuned to the listener's context, each with a cited source | 1.8 (signposts) | drawing transferable lessons from peers |
| **Capture template** | A structured interview/capture template with the right questions per section | 2.1 (BDAT layers) | a discovery or data-gathering step the architect runs |
| **Conformance check** | A mapping of a draft model to a standard, flagging non-conforming elements | 2.2 (metamodel) | checking an artefact against a published model |
| **Principle / rule card** | A statement / rationale / implication card a governance body can apply | 2.3 (principles) | turning a published rule into a usable decision tool |
| **Classification + expected profile** | A type assignment plus the profile (capabilities/data/governance/risks) to confirm | 2.4 (taxonomy) | classifying an entity before deeper work |
| **First-pass skeleton** | A structured first draft (e.g. a BDAT skeleton) with conflicts flagged | 2.5 (Progressa) | producing a starting model from known facts |
| **Scored analysis** | A scored, ordered table (e.g. gap analysis with severity/effort/priority) | 2.6 (Assess) | turning raw notes into a prioritised assessment |
| **Risk screen** | A screen flagging specific risks in a proposal + questions + recommendation | 2.7 (traps) | catching a known failure mode in something under review |

## Design rules

- **One artefact, one meeting.** The output must be usable at a real meeting — a table, a slide, a ToR, a screen — not an essay.
- **Name the outputs.** The prompt should say "Output: a 4-row table plus a 3-bullet summary," not "analyse this."
- **Tune to the country.** Bracketed inputs `[country X]`, `[the ministry]`, `[the laws]` force the listener to localise; generic prompts produce generic outputs that ministers and boards see through.
- **The safeguard is specific.** It names *this* prompt's failure mode: "a clean metamodel mapping can still be wrong about the real world — confirm with the owning body"; "severity judgments touching a powerful body must be validated with the decision-maker, not softened by the model." Boilerplate ("AI can make mistakes") fails the test.
- **Grade to the persona.** Strategist artefacts are cabinet-facing (slides, memos, ToRs); Architect artefacts are working deliverables (templates, conformance checks, scored analyses).

## Anti-patterns

- A prompt that produces prose instead of a named artefact.
- A safeguard that would fit any prompt (boilerplate).
- A prompt with no country-specific inputs.
- A prompt whose output the listener could not actually take to the meeting the subtopic describes.
