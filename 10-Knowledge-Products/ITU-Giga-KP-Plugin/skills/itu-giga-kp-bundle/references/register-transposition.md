# Register transposition — moving a module to a new persona

KP1 has six modules across two personas. Module 1 is **Strategist**-facing (the person who commissions an EA); Modules 2–5 are **Architect**-facing (the person who does the work); Module 6 returns to **Strategist**. The audience lock never changes — African public-sector middle management, eighth-grade English, lead with the outcome. What changes is the *register*. This note captures how to shift it without losing the lock or the structural spine, distilled from the Module 1 → Module 2 transposition.

## What stays fixed (do not touch)

- **Audience.** African public-sector middle management. The Architect is still middle management — a chief or senior architect in a national digital agency, not an academic.
- **Reading level.** Eighth-grade English, short sentences, plain nouns, active verbs, 200–300 WPM. Hold this even though the Architect audience is more technical.
- **Lead with the outcome.** Every subtopic headline is the thing the listener can now *do*, not a concept noun.
- **African imagery, the four signposts, Progressa as the Education demonstration canvas, public anchors only.**
- **Both structural arguments must surface** somewhere in the module (see below).

## What shifts, Strategist → Architect

| Dimension | Strategist register (Module 1) | Architect register (Module 2+) |
|---|---|---|
| The listener's job | Make the case **upward** to the minister; survive a vendor pitch; brief cabinet | **Do** the architecture — model a ministry, run an assessment, flag the traps |
| Headline pattern | "Why your country needs…", "What you'll need from your minister" | "Read any government in four layers", "Classify any body before you model it", "Run a Phase 2 Assess" — a capability the listener gains |
| Vocabulary | Technocratic terms (metamodel, taxonomy, BDAT) **deferred** to the body or to later modules | Those terms **introduced and defined in plain words on first use** — the Architect needs them to work |
| Artefact the AI tip produces | Cabinet slide, commitment memo, Governance Board ToR, comparator card | Capture template, metamodel conformance check, principle card, classification profile, BDAT skeleton, scored gap analysis, two-trap screen |
| Examples | The minister's flagship programme, the donor briefing, the cabinet conversation | The duplicate registry found, the orphan system, the product that became the architecture |
| Honesty register | Leverage decision, not silver bullet | Practitioner-honest about the politics of assessment (the duplicate registry owned by a powerful ministry) |

## Carrying the two structural arguments across the register

The two arguments from `CLAUDE.md §3` are recurring threads, not Module-1-only content. They must re-surface in every module, re-expressed for the persona:

- **Planning enables re-use.**
  - *Strategist (M1):* only whole-of-government planning makes re-use rational; reference architectures bring sustainability + complexity-reduction. Carried by 1.3.
  - *Architect (M2):* the **metamodel** is the *mechanical precondition* for re-use — two ministries can only share a building block if they describe it the same way (2.2). The **bespoke trap** is the same argument seen at Assess — locally rational, nationally ruinous (2.7).
- **EA as the lingua franca between business and IT.**
  - *Strategist (M1):* operating-model change needs business and IT to decide together; EA gives them the shared object, vocabulary and rhythm. Carried by 1.4.
  - *Architect (M2):* the metamodel **is** that shared language — it translates a policy goal ("register every learner once") into an architecture both sides can hold (2.2).

When you draft a new module, name up front which subtopics will carry each argument, then check it with `kp-bundle-qa` (check 6).

## The mechanical change in the build script

`renderSubtopic` hard-coded the Strategist persona string in Module 1. From Module 2 it takes a `persona` parameter (default `PERSONA_A`). When transposing, set the persona constant once and pass it; update the cover's "Topic persona" row and the Section 1 framing paragraph to name the new persona and the register shift explicitly (Module 2's Section 1.2 names the deliberate vocabulary change). Everything else in the pattern is persona-agnostic.

## Anti-pattern to avoid

Do **not** let "more technical audience" become an excuse to drop to a lower reading level or to lead headlines with concept nouns. The Architect audience earns more vocabulary in the *body*, not a harder *headline* or denser prose. "The organisational taxonomy" is a concept-led title; "Classify any public body before you model it" is the same content, capability-led — use the second.
