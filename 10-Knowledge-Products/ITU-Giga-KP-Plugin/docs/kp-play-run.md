# kp-play-run — the worked-example procedure

Every play page on the KP1 GitBook promises a Progressa worked example, an annotated reading
and a what-next. Module 1 has them; Modules 2–5 say the example is pending. This is the
procedure that turns "pending" into a page, one play at a time.

It is a written procedure rather than a skill on purpose: it runs twice before anyone decides
whether it is worth automating.

## What the kit already gives you

The harness exists in `ea-plays-kit`:

- `tests/plays/<id>/input.md` — the play's prompt, naming the fixture section to paste in.
- `tests/plays/<id>/expected.md` — the *shape* the output must have: provenance header,
  artefact, safeguard, contract checks. `check_fixtures.py` and a kit run are judged against it.
- `tests/progressa.md` — the canonical fixture. Facts here win over any other Progressa text.

What the procedure adds: the **bare** run, the annotations, and the sidecar the renderer reads.

## The procedure

**1. Assemble the input.** Take `tests/plays/<id>/input.md`. Paste the fixture section it
names from `tests/progressa.md`. Note which chain artefacts you also have in the session for
this module's earlier plays — that list becomes `example_context`.

**2. Run it bare.** One assistant, **no kit skills loaded**. The site tells the learner the
prompt runs bare in any assistant, so the example on the page must be the bare result. Ask for
text in the chat. Keep the raw output; do not tidy it.

> A run with earlier artefacts in the session is not a bare run of the prompt alone. Record it
> in `example_context` and the page says so — that is finding A2 from the 7 Sep review.

**3. Run it again with the kit.** Load the play's primary skill and run the same input. Judge
that output against `expected.md`. This one never becomes the page's example; it produces a
single line for the "With the kit" note (what the provenance header showed, what
`cite-or-discard` dropped).

**4. Annotate.** Four notes, in the Module 1 pattern, and in this order:

| # | The note answers |
| --- | --- |
| 1 | What is **earned** — a claim the input actually supports |
| 2 | What is **invented** — a number, citation or confidence the input does not support |
| 3 | What is **missing** — the strongest signal in the input the output ignored |
| 4 | What the **safeguard** fired on, or should have |

Note 1 is not praise. If the output's headline disagrees with its own table, that is note 1 —
see 1.3, where the model compared a build cost with a total cost of ownership.

**5. Write the sidecar** to `KP1-GEA/gitbook/plays/<id>.md`:

```markdown
---
example_status: run
example_run: 2026-09-07
example_context: A1 and A9 were in the session above the prompt.
---
## Example input
…the text pasted into the bracketed part…

## Example output
…the raw bare-run output…

## Reading the output
### 1. <title>
<body>
### 2. <title>
<body>

## What next
…what to validate, which play consumes this artefact, the workbook id…
```

Front matter and all four sections are optional; the renderer merges whatever is present over
the play. `example_status: draft` renders the draft warning, `run` renders it as verified.

**6. Re-render and check.**

```bash
cd ITU-Giga-KP-Plugin/skills/kp-gitbook-render/scripts
python3 render.py && python3 gitbook_qa.py && python3 progressa_facts_check.py
```

The module's status on the home page moves from *Prompts live* to *Worked examples live* on
its own once every play in the module has an example — the status is derived, never declared.

## Rules

- **Facts come from `tests/progressa.md`.** If a run needs a Progressa fact the fixture does
  not have, add it to the fixture in the kit first, not to the example.
- **Never edit the output to make it look better.** A wrong headline is teaching material; the
  annotation is where you say so.
- **Posts, not names**, in the output as everywhere else.
- **Record the kit tag** the run used in the sidecar if the with-kit run informed the note.
