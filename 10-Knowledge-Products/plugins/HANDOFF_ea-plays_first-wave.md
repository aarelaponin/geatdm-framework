# HANDOFF — the first wave of learner skills for the `ea-plays` kit

For the maintainer of the `ea-plays` kit.

## What this folder holds

Three changes to the kit, for the four courses: enterprise architecture, interoperability,
DPI roadmap and service design. They were built and checked against the kit at commit
`695df64`, version 0.3.1. The line numbers below hold for that commit only.

1. **`paera-reference-check`, with a PAERA look-up merged into it.** The skill still
   checks a learner's work against PAERA as published. It now also answers a question
   about PAERA: it finds the section, reads the public page, and cites the section, the
   address and the date. It carries no PAERA text. New references: `paera-index.md` (the
   map of sections and their public addresses), `paera-tests.md` (the principles and the
   capability ladder as tests, in the kit's words) and `paera-glossary.md`. `SKILL.md` is
   changed. The other references are the kit's own, unchanged.
2. **`reading-estonian-law.md`, a new reference of `gif-decree-draft`.** It is not a skill
   of its own. It says how to read an Estonian model act on Riigi Teataja: the three
   traps, the steps, how to cite the text in force, and what to write when the text
   cannot be read. It needs the six lines of item 2 below.
3. **`decision-cards`, a new skill.** It turns any list of open questions into a page of
   cards that the person who decides can click through, with a numbered list in the chat
   as the fallback. It is the one skill of the kit that makes a file.

The layout is the kit's own. `ea-plays/` goes over `plugins/ea-plays/`, and `tests/` goes
over `tests/`.

| Path here | In the kit |
| --- | --- |
| `ea-plays/skills/decision-cards/` (8 files) | new |
| `ea-plays/skills/gif-decree-draft/references/reading-estonian-law.md` | new |
| `ea-plays/skills/paera-reference-check/SKILL.md` | replaces the kit's file |
| `ea-plays/skills/paera-reference-check/references/paera-index.md`, `paera-tests.md`, `paera-glossary.md` | new |
| `ea-plays/skills/paera-reference-check/references/` (8 other files) | the same as the kit's |
| `tests/plays/1.5`, `1.7`, `2.2`, `2.3` and `tests/gif/plays/2.2` to `2.5` | replace the kit's files; each keeps the kit's fixture and adds a section. In 1.7 two lines also change: the skill line names `decision-cards`, and the text-only line names its one exception |
| `tests/dpi-roadmap/plays/6.7`, `tests/service-design/plays/3.6` and `4.5` | new |

The copies of `shared/*.md` inside `decision-cards/references/` are the kit's files as
they stand at `695df64`.

## What to do in the kit

The numbers are the items of the review that accepted this wave. Do them in the kit's
repository, where the decree skill, the manifests, `shared/`, the READMEs and the check
program are.

### Item 2 — add six lines to `gif-decree-draft/SKILL.md`

Without them the check program fails: its check 2c refuses a file in `references/` that
`SKILL.md` never names.

**First place.** In *Procedure*, step 1 ends at line 72 with "memory alone without saying
so." Add these three lines after line 72, inside step 1:

```text
   For an Estonian model, read `references/reading-estonian-law.md` first. The portal
   needs a browser tool, the English text can be an older text, and a superscript section
   number breaks in extracted text.
```

**Second place.** In *References*, the item for `references/published-models.md` ends at
line 150 with "transfer across legal systems." Add this item after line 150:

```text
- `references/reading-estonian-law.md` — how to read an Estonian model on Riigi Teataja:
  the three traps, the steps, how to cite the text in force, and what to write when the
  text cannot be read.
```

Leave line 16, `allowed-tools: WebSearch, WebFetch, Read`, as it is. A browser tool has a
different name in each assistant, so it cannot be named there. When the skill uses one,
the assistant asks the learner for permission.

`references/published-models.md` could point to the new file at its line 13. That is your
choice. Two facts for it, read on Riigi Teataja on 6 October 2026: the title of Chapter 5¹
of the Public Information Act is *Andmekogud* (*Databases*), not *Data exchange layer of
information systems*; and the Government regulation on the data exchange layer is titled
*Infosüsteemide andmevahetuskiht*, not *Andmevahetuskiht X-tee*. Line 13 has both of the
older titles.

### Item 4 — name `decision-cards` where the kit and the courses name a skill

- `tests/play-map.json`, entry 1.7: add `decision-cards` as a skill that also serves it.
- The plugin README: the row of play 1.7, and the table *What you get*.
- The counts: "twenty-two skills" becomes "twenty-three skills" in both READMEs (the kit's
  `README.md`, line 52, and the plugin's `README.md`, line 5). "The other fourteen
  skills" in the plugin README, line 139, needs the same recount.
- The row of `paera-reference-check` in *What you get* says that it checks. It now also
  looks up PAERA. Say both.
- The course pages: EA 1.7, DPI roadmap 6.7, and service design 3.6 and 4.5. The last
  three have no line *With the kit* today.

### Item 5 — say the exception where the kit says the rule

`decision-cards` makes one file, and the kit's rule says no skill does. Say the exception
in two places:

- `shared/output-contract.md`, rule 1: "This is why each skill declares
  `disallowed-tools: Write`." `decision-cards` already points to this rule and to "the
  one exception that this skill makes" to it. Change it in `shared/` and run
  `sync-shared.sh`, which copies it into every skill.
- The plugin README, line 231: "**Text in, text out.** No file, no chart, no image."

### Item 6 — take a minor version

A new skill and a changed output contract each ask for a minor version: 0.3.1 becomes
0.4.0.

- `plugins/ea-plays/.claude-plugin/plugin.json`, line 3, and
  `.claude-plugin/marketplace.json`, line 13.
- `CHANGELOG.md`: a new entry above `[0.3.1]`.
- `shared/provenance-header.md`, line 8: the example names `v0.3.1`. The check program
  compares it with the manifest.

The output contract of `paera-reference-check` changed as well as the new skill's. It
gained the sections *Look-up* and *Findings* and a column of public addresses in the
foundation map. Its principle card now quotes the title of the principle and one sentence
of it, where the kit's quoted the principle as worded. Say this in the CHANGELOG entry.

### Item 7 — decide on the two new fixture trees

`tests/dpi-roadmap/` and `tests/service-design/` are outside what `check_fixtures.py`
reads, so nothing checks them yet. The program needs a block for each course, as it has
for `tests/gif/`.

Such a block must allow for one thing. The program looks in every `expected.md` for the
words "no file, no chart" (lines 87 and 255). The new files of `decision-cards` say "no
other file, no chart", because this skill makes a file.

### Item 8 — decide on the second canonical page for Progressa

The marker of `decision-cards/references/worked-example.md` names two sources:
`tests/progressa.md` and the course page of service design 3.6. `tests/progressa.md` has
no PHEQA. `tests/README.md` says that the authority for a fact about Progressa "is always
`progressa.md`". Either add PHEQA and its Registrar to `tests/progressa.md`, or say in
`tests/README.md` that a course page can be a second authority.

### Item 9 — run the kit's checks where the files land

```text
bash plugins/ea-plays/scripts/sync-shared.sh --check
python3 tests/check_fixtures.py
claude plugin validate plugins/ea-plays --strict
claude plugin validate . --strict
```

With the files of this folder in place and the six lines of item 2 added, at `695df64`,
all four exit 0. Items 4 to 8 change files the checks read, so run them again after.

## Smaller points

None of these is a gap. Each is your judgement.

1. **`state-registries.md` is not Annex 3 as published.** The file is the kit's own, and
   its title is "Key State Registries — PAERA Annex 3". It lists ten registries, among
   them a Tax Registry, a Court / Legal Registry and a Social Benefits Registry. Annex 3
   as published names twelve, with Official Publications, a Securities Register and a
   Procurement Register, and no Tax Registry. The new `paera-glossary.md` gives the twelve
   as published, so the folder now holds both lists. For a skill whose rule is "PAERA as
   published", bring the older file into line or rename it.
2. **`decision-cards`, three points.**
   - The worked example gives the line numbers of the three grey items in its own words
     ("(line 1)"). Step 5 of the skill and the fixture of 3.6 keep line numbers to the
     `Touches` line.
   - The fixture of 3.6 says that the record is pasted "without a change". Lines 1 and 3
     each drop a phrase of the course's wording.
   - One trigger phrase, "what must my minister decide", stands close to one of
     `ea-governance-drafter`, the primary skill of play 1.7: "what do I ask my minister
     for". No phrase is shared word for word. The kit's rule is that two skills never
     compete for one trigger; judge whether these two do.
3. **`reading-estonian-law.md`, two points.**
   - Step 2 says "These address forms open the text in force". The English form opens
     the latest translation, which can be of an older text, as the file's second trap
     says.
   - The table gives the English title of § 43⁹ as "Support systems to the state
     information system". The translation reads "Support systems to state information
     system".
