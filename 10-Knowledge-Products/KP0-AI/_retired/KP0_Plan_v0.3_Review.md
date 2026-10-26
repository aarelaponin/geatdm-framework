# Review of KP0_Plan_v0.3.md

*21 October 2026. Reviewed against the files the plan names: the latest Orchestrator Manual (chapter list extracted from the .docx), `fa-project-ops/skills/orchestrator`, the GitBook tree, `kp-bundle-qa`, `kp-gitbook-render` and the layers note.*

## Verdict

The plan is coherent and ready to act on once three things are settled. The structure (6 modules, 26 subtopics, 7 videos, 29 min) adds up; the manual-to-KP0 mapping in section 5 accounts for every one of the manual's 75 headings; the KP4 pages it links to (1.5, 4.5, 5.2, 5.7, 6.1, 6.3, 6.4) all exist. The weak point is the learner edition of the Orchestrator: its scope is understated, and the course's promise of "no command line, no version control" currently depends on it. Fix that first; the rest is corrections.

## A. Settle before step 1 of the order of work

**A1. The learner edition is a port, not a trim.** Section 9a frames it as the `orchestrator` skill with the multi-account machinery left out. The skill as it stands:
- is 19,000 words of `SKILL.md`, written for one owner;
- runs its programs as `python3 $HOME/IdeaProjects/rsr/claude-marketplace/.../scripts/ledger.py --constants $HOME/IdeaProjects/rsr/_a-projects-registry/CONSTANTS.md` — absolute paths on the team's machines, a registry folder a learner does not have, and a Python runtime KP0 never asks for;
- keeps its record in a git-backed ledger where every entry is committed and pushed to a remote (2.5.3, `_ledger/`, `entries-not-pushed`);
- loads desktop-commander tools for commands on the computer.

Set against section 1 ("no programming, no command line and no version control") and decision 3 (the installation guide does not exist yet), the learner edition needs at least: relative paths from a learner folder; a ledger that works with no remote (or no git at all); a Windows path; and a decision on whether Python is a prerequisite or the scripts are dropped. That is real design work, and the pages' **In the tool** halves are written against it (step 4), so it sits on the critical path.

*Recommendation.* Make the **by hand** route the tested baseline of KP0 v0.1 — three chats, three documents, a log the learner keeps — and the plugin the optional second route. Then KP0 can go to ITU whether or not the plugin ships, and decision 1 gets a scope and an effort estimate instead of a name.

**A2. "Only seven of them have a video" is not what the video table says.** Section 4 says seven subtopics have a video; the table in section 7 maps the seven videos over 24 of the 26 pages (every page except 5.4 and 5.5). Pick one description — seven videos, each spanning a run of pages — and use it in sections 4, 7 and the KP0 profile for `kp-bundle-qa`, whose gate is per subtopic and needs to know which pages each video stands for.

**A3. The moved pages live in a renderer, not in the repository.** `kp-gitbook-render`'s `render.py` writes `start-here/` and `kp1/`; section 8 lists `pages.json` but not `render.py`. A stub left in `start-here/working-with-ai.md` by hand is overwritten at the next render, so the stubs, the removal from `pages.json`, the README card and the repointed links all belong in `render.py`. Two related corrections: there is no `render_kp1.py` (KP1 goes through `render.py`), and the prompt-tab line "Never paste personal data … see How to use the plays" is in 155 files (KP1 35, KP2 38, KP3 45, KP4 37), not 154.

## B. Corrections inside the document

| Where | Issue | Fix |
|---|---|---|
| §10 folder | `KP0_Plan_v0.2.md   this plan` | v0.3 |
| §1 table, §4 | "Judgement: the closing subtopic of every module"; "each module ends with a self-check" | Module 0 has one subtopic and no Judgement page. Say "Modules 1–5" |
| §9a | Section numbered "9a" | Renumber to 10 and shift 10–12 |
| §7 departures | Two departures listed. `kp-bundle-qa` check 4 also forbids *on-camera cues* in scripts, so people on camera breaks a third gate | Add check 4 to the KP0 profile's relaxations |
| §7 pipeline | "`build_kp0_moduleN_v01.js` as the single source" but §12 step 3 writes "scripts and pages" from the manual | Say the pages are generated from the scripts, as in §10, so there is one source |
| §4 Module 5 | 5.1 (typing *check*, the record) needs the ledger, which needs version control; 5.2 is where version control is first taught | Either teach commit/push in 5.1's tool half or say 5.1's by-hand route is a log the learner keeps |
| §3 | The by-hand route is defined for Layer 3 as "three chats and three documents" | Module 5 (status, handover, daily routine) has no stated by-hand equivalent. Add one line per subtopic or mark 5.1–5.4 as Orchestrator-only |
| §1, §2 | Tool half "with one line on where the same thing sits in other assistants" | For Layer 2 (projects, skills, connectors) the differences do not fit a line. One comparison table on a reference page is cheaper to keep true than 26 lines |

## C. Gaps

1. **No dates, no owners, no definition of delivered.** Section 12 orders the work but gives no schedule, effort, or ITU milestone, and the plan says KP0 falls under the existing agreement without saying what that agreement expects (bundles? GitBook space? videos?) and by when. KP1–KP4 had release dates; KP0 needs the same line.
2. **The videos depend on stories nobody has confirmed.** Decision 4 asks whether "each of you has the story"; V1, V3, V4 and V5 each need a specific real case with a date. If one speaker cannot supply one, that video becomes a page. Decide the cut only after each speaker has named their case.
3. **Who runs step 9.** "One non-developer runs the Strategist way through" is the right test; name the person and when, or it will not happen.
4. **Licence and provenance of the learner plugin.** It derives from `fa-project-ops` (the team's own) and would be published through `ea-plays-kit` (CC BY 4.0 / MIT). Confirm that is intended, and that nothing in `SKILL.md` or the references names the team's projects, accounts or machines.
5. **Manual 4.9 → "KP4 5.x".** The only mapping without an exact page. Name it or mark it open.

## D. What holds up

- Section 5 is complete: every manual heading (1.1 through Glossary) has a destination or a stated omission; the chapter numbers match the 21 October manual.
- The four worked examples keep their teaching point and change setting — the right split, and 8.2 doing double duty as the 5.5 walk-through is efficient.
- The video rule ("only where experience adds what the page cannot") is a better rule than one-per-subtopic for this material, and 29 minutes is inside the cap.
- The two-persona, two-ways-through design matches KP1–KP4 and gives KP4's prerequisites a precise target.
- Section 8's link inventory, counts aside, is the right list.

## Suggested next edits, in order

1. Rewrite §9a as a scoped piece of work (A1), with the by-hand route as baseline; move the Python/git/paths questions into decision 1.
2. Fix A2 and A3 and the table in B.
3. Add a schedule line and an owner for step 9 (C1, C3).
4. Ask Aare and yourself for the four real cases before deciding the video cut (C2).
