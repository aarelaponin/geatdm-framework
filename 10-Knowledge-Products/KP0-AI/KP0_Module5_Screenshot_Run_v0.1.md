# KP0 Module 5 — the screenshot run: kickstart sheet v0.1

*31 October 2026. Everything needed to run the mini registry once, end to end, with the orchestrator plugin, and take the eleven screenshots of Module 5. Internal: not learner-facing. Checked on this Mac the same day: Node 22.23, npm 10.9, git 2.50 with a name and email, `gh` logged in as `alaponin`, SSH to GitHub working, Desktop Commander installed in Claude Desktop; the bare `python3` is 3.7.9, the pyenv Python is 3.11.14.*

---

## 0. Before the run (about 15 minutes)

1. **Rebuild the plugin.** Claude Desktop holds `fa-project-ops-local` **0.1.0**, older than `orchestrator-local` at `7526127` (28 October: the setup procedure, `ledger.py`, the templates). Build 0.2.0:
   ```
   cd ~/Documents/Dev/orchestrator-local
   PYTHON=~/.pyenv/versions/3.11.14/bin/python3 tools/package.sh fa-project-ops 0.2.0
   ```
   Upload `~/Documents/Dev/_plugin-builds/fa-project-ops-local-0.2.0.plugin` under **Customize → Plugins → upload**, replacing 0.1.0. In a new session, check the skill list shows `fa-project-ops-local:orchestrator`, `:project-inception` and `:repo-hygiene`.
2. **Make the demo's own home**, apart from PLR, so that no screenshot shows another project or its ledger:
   ```
   mkdir -p ~/Documents/Dev/wai-demo/brief ~/Documents/Dev/wai-demo/kinds
   cp ~/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/toolkit/orchestrate-starter/MINI-REGISTRY-BRIEF.md ~/Documents/Dev/wai-demo/brief/
   cp ~/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/toolkit/orchestrate-starter/kinds/{analysis,drafting,checking,building}.md ~/Documents/Dev/wai-demo/kinds/
   ```
   The project folder itself, `~/Documents/Dev/wai-demo/mini-registry`, must **not** exist yet: setup treats an empty or missing folder as a new project, and anything already in it as a project under way.
3. **Screen hygiene.** Use a desktop with nothing else open. The ledger's entries carry your account address and the paths carry your user name; crop them, or keep them out of frame. The skill names on screen (`fa-project-ops-local`) will differ from the released plugin's: crop them where they show.

---

## 1. Setup (screenshots 1 and 2)

**New session.** First message:

> Start a new project: the mini registry, in `~/Documents/Dev/wai-demo/mini-registry`. It is the toy prototype of Module 5 of Working with AI in Government. Its brief is `~/Documents/Dev/wai-demo/brief/MINI-REGISTRY-BRIEF.md`.

Setup proves Desktop Commander, checks git, `gh` and SSH, runs its self-test, looks at the folder, and asks its questions. **Answers** (choose or type these; none carries a date, which the constants would refuse):

| Question | Answer |
|---|---|
| What the project is for | A toy prototype of the Progressa Learner Registry: a school clerk enrols a child, and the registry does not register the same child twice. It is for agreement, built to teach the orchestrated method in practice. |
| What it delivers | Nothing to anyone outside it. |
| What governs it | The mini registry brief, `~/Documents/Dev/wai-demo/brief/MINI-REGISTRY-BRIEF.md`; then the orchestrator procedure. |
| Who receives its results | The owner himself. |
| Constraints | Invented data only; every screen carries the banner "Invented data, Progressa is fictional". Nothing connects outside this computer; other bodies are simulated. No session opens a window. Every program run under a round's record runs with `~/.pyenv/versions/3.11.14/bin/python3`. |
| Kinds of thing it produces | Requirements, design documents (groundwork, the goal in full), checks, the prototype's code, one note for a senior reader. |
| Kinds of work | analysis, drafting, checking, building, with their pages at `_kinds/analysis.md`, `_kinds/drafting.md`, `_kinds/checking.md`, `_kinds/building.md`. |
| Where the history is kept | On this computer, backed up to a private GitHub repository: `git@github.com:alaponin/mini-registry.git`. |
| The code | `MR` (setup proposes it) |
| The coordination | A new folder, `~/Documents/Dev/wai-demo/_coordination` (the folder above the project). |
| Your name | Arne Laponin |

> **Screenshot 1** — the first question form, with the recommended answers marked.

Setup then proposes the map of folders.

> **Screenshot 2** — the map as proposed, waiting for your ruling. Then accept it.

After setup ends, copy the pages of faults in: `cp ~/Documents/Dev/wai-demo/kinds/*.md ~/Documents/Dev/wai-demo/mini-registry/_kinds/` (make `_kinds/` first if the map did not).

**The coordination needs a remote** before the orchestrator can hand its record over to the ledger (procedure 9.1, step 0). If setup made `_coordination` as a plain folder:
```
cd ~/Documents/Dev/wai-demo/_coordination
git init -b main && git add -A && git commit -m "The coordination of the Working with AI demo"
gh repo create alaponin/wai-demo-coordination --private --source . --push
```

---

## 2. The orchestrator takes the role (screenshot 3)

**New session**, named `MR · orchestrator · the mini registry`. First message:

> Take up the orchestrator's role for the mini registry. Its constants are `~/Documents/Dev/wai-demo/mini-registry/CONSTANTS.md`.

> **Screenshot 3** — its answer: that it holds the role, and what it read.

It then hands the record over to the ledger. Let it finish before round 1.

---

## 3. The eight rounds

Ask for one round at a time, in the orchestrator's session; start the next only when the last one's ruling is in the log. **Never press Run now on a round that is also set to start on a timer.** For each round: read the instruction before it is issued, let the work session run (it starts its own review), read the review, and give your ruling.

| # | Ask the orchestrator | Kind | What the result must show | Screenshot |
|---|---|---|---|---|
| 1 | "Round 1 of the brief: the register of requirements, every sentence of the brief that says what the registry must do, numbered, each with a test." | drafting | A numbered register; the review counts the brief against it both ways | **4** — the log after round 1, from *instruction issued* to your ruling |
| 2 | "Round 2: the groundwork — the three lists, the settings of the made-up data and the search rule, as tables the build will read." | drafting | Settings exactly 60 children, 3 schools, 8 on more than one list, 4 spelt differently, ages 6 to 12 | **5** — the settings table beside the brief's table |
| 3 | "Round 3: the goal 'Enrol a learner' written in full, every step and every way it can go wrong." | drafting | A step for one found, none found, and more than one found | — |
| 4 | "Round 4: count every requirement against the goal, both ways, after planting one mistake of each kind." | checking | Two totals, every requirement carried by no goal listed with its reason, both planted mistakes named | **6** — the report's first paragraph and the planted-mistakes line |
| 5 | "Round 5: the scaffold and the made-up data, generated from the groundwork's settings, the same every time." | building | Each count of the data equal to its setting: 60, 3, 8, 4 | **7** — the report's first paragraph with each count |
| 6 | "Round 6: build the goal 'Enrol a learner'. Its review runs the checks and goes through the goal as a school clerk, once for a child already registered and once for a new child." | building | The checks pass; the review's own run of both cases | **8** — the enrolment screen for a child already registered, with the banner (from the review's run, or open the build yourself; no session opens a window) |
| 7 | "Round 7: the duplicates count — how many of the 8 children on more than one list the search catches from every entry. The review counts again from the three lists alone." | checking | 8 on more than one list; **4 caught**; the other **4** each missed on the one list where the family name is spelt differently; none wrong; a planted fault moved the count | **9** — the report's first paragraph with 8, 4 and 4 |
| 8 | "Round 8: the note to the Permanent Secretary, one page: what the prototype shows and what it does not. List every limit the record names before writing." | drafting | Every limit in the note or listed with its reason; a limit of the search stated as a limit of the search | **10** — the note's section "What it does not show", as accepted |

A round that is not accepted gets version 2 from the orchestrator; take the screenshot from the accepted version.

**If round 7 does not give 4 and 4**, stop before the screenshot: either the data does not hold the brief's numbers (round 5) or the search is not the brief's rule (round 6). That is a finding, not a picture.

---

## 4. The end (screenshot 11)

In the orchestrator's session:

> Where does the mini registry stand?

> **Screenshot 11** — its answer, with the eight rounds and their rulings.

Then ask it to hand over and stop, and end with the commit check ("is everything committed and pushed?").

---

## 5. Afterwards

*Status, 31 October 2026: the first run's 24 screenshots (setup to round 1, the added round and its version 2) are in `figures/` as `M5-01` to `M5-24` and used in 5.1 and 5.2 as `IMAGE:` lines. The run took code `MR` (its orchestrator session was named `MINI · …` in the screenshots; the text uses `MR`), and kept the history on this computer only. The log after round 1 and the groundwork's settings are now tables from the run's record (frozen in `examples/mini-registry/`). Still marked `SCREENSHOT:`: rounds 4, 5, 6, 7, 8 and the end. A further screenshot is added to `figures/` and to the script as an `IMAGE: file.png | caption` line.*

- Name each image by its number, `M5-01-setup-questions.png` to `M5-11-where-it-stands.png`, and send them in; each replaces its `SCREENSHOT:` mark in `build_kp0_module5_v01.js`, and the bundle and GitBook pages are regenerated.
- Keep `~/Documents/Dev/wai-demo/` and its two private repositories: the run's record is the evidence behind the screenshots, and Module 5's answer keys can be checked against it.
