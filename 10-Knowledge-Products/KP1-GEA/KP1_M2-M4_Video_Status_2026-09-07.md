# Status: KP1 Modules 2–4 video track (English)

**Date:** 7 September 2026 · **Scope:** `videos/module_{2,3,4}/en/`, steps 1–5b of the video track.
**Method:** briefs generated from the v0.2 split decks, 155 takes generated via `kp-notebooklm-audio`,
transcribed via `kp-scribe-transcribe`, audited with `srt_drift_check` + `coverage_check`.

## Verdict

Step 4 is **complete: 22 of 22 accepted** as of 9 Sep — 10 before the §3 rewrite, 6 cleared by
it, 3 settled on runtime, 2 accepted by decision (3.1, 3.2), and 2.5 came back fully clean. Steps
6 and 7 (cues, assembly) are **complete for all 22** as of 10 Sep — Modules 2, 3 and 4 are 22
finished English videos. See the two sections at the end.

What is left across these three modules is publication: YouTube metadata, the module intros
(on camera, not started), and the French mirror.

Three takes of record are fully clean (3.5, 4.4, 2.5). Eight carry accepted show-open residue.
3.2 carries three outrage words by decision. 2.4, 3.3, 4.6 were settled on runtime at +45s, −47s
and +63s against a 5:00 target — inside the range Module 1 shipped (3:11–5:30).

Runtime is resolved as a class: the decks no longer print a length, and every brief targets a flat
5:00, matching Module 1.

## Where each subtopic stands

`residue` = the take says "deep dive" / "welcome to" on air. Accepted as non-blocking on 7 Sep
(see *Open decisions*); it is **not** removed from the audio.

| # | State | Take | Runtime | Takes | Blocker / residue |
|---|---|---|---|---|---|
| 2.1 | ship | `Audio_v0.15` | 5:07 | 19 | residue: deep dive |
| 2.2 | ship | `Audio_v0.19` | 5:04 | 19 | residue: deep dive, welcome to |
| 2.3 | ship | `Audio_v0.2` | 4:53 | 9 | residue: deep dive, welcome to |
| 2.4 | ship | `Audio_v0.10` | 5:45 | 14 | settled on runtime (+45s); residue |
| 2.5 | **ship** | `Audio_v0.11` | 4:22 | 11 | **fully clean**; weak close ("It does,") |
| 2.6 | ship | `Audio_v0.7` | 4:56 | 8 | residue: deep dive |
| 2.7 | ship | `Audio_v0.2` | 5:40 | 7 | residue: deep dive |
| 3.1 | ship | `Audio_v0.5` | 5:38 | 6 | accepted 9 Sep; residue + "registry" (see note) |
| 3.2 | ship | `Audio_v0.7` | 5:00 | 8 | accepted 9 Sep; **"nightmare", "a mess", "hostage" on air** |
| 3.3 | ship | `Audio_v0.6` | 4:13 | 10 | settled on runtime (−47s); residue |
| 3.4 | ship | `Audio_v0.6` | — | 6 | residue: deep dive, welcome to |
| 3.5 | **ship** | `Audio_v0.1` | 5:16 | 1 | **fully clean** |
| 3.6 | ship | `Audio_v0.2` | 5:19 | 4 | residue: deep dive, welcome to |
| 3.7 | ship | `Audio_v0.2` | 5:25 | 6 | residue: deep dive, welcome to |
| 4.1 | ship | `Audio_v0.5` | — | 5 | residue: deep dive, welcome to |
| 4.2 | ship | `Audio_v0.9` | — | 9 | residue: deep dive, welcome to, unpacking |
| 4.3 | ship | `Audio_v0.1` | 4:57 | 1 | residue: deep dive, welcome to, here's where it gets |
| 4.4 | **ship** | `Audio_v0.4` | 4:30 | 5 | **fully clean** |
| 4.5 | ship | `Audio_v0.12` | 5:20 | 12 | residue: deep dive, welcome to |
| 4.6 | ship | `Audio_v0.7` | 6:03 | 8 | settled on runtime (+63s); residue |
| 4.7 | ship | `Audio_v0.9` | — | 9 | residue: deep dive |
| 4.8 | ship | `Audio_v0.7` | — | 7 | residue: deep dive |

**Coverage is not a problem anywhere.** Across all 155 takes, `coverage_check` reports essentially
no missed slides — the briefs steer the hosts through every slide in order. Every blocker above is
vocabulary, runtime or the closing turn.

## What changed in the kit

| Change | Where | Why |
|---|---|---|
| `make_brief.py` (new) | `kp-audio-brief/scripts/` | Renders brief + prompt from a deck: VO notes → approved substance, slide copy → bullets, remaining notes → staging, weighted budget, terminology rows filtered to terms §2 uses. 22 briefs by hand is how the brief and deck drift apart. |
| `take_until_pass.py` (new) | `kp-notebooklm-audio/scripts/` | take → transcribe → trim → audit, re-rolling up to N times. Gates on real defects only. |
| `test_trim_outro.py` (new) | `kp-slidecast/scripts/` | 8 checks over both ends of the cut, both directions. |
| `trim_outro.py` — `--deck` | `kp-slidecast/scripts/` | **Bug fix.** The head cut was silently eating real content on 9 takes, including 4.1's "Meet Progressa — it is a demonstration country…" and 2.5's "module two, video 2.5", which is the cold open the brief requires. Deck vocabulary now separates furniture from content. Without `--deck`, behaviour is unchanged. |
| `trim_outro.py` — `outro_start` | `kp-slidecast/scripts/` | **Bug fix.** It scanned forward and took the first reflective cue in a 75 s window — usually a mid-content question (4.4: "the third sign off, right?" at 224 s) — then its reset rule discarded it, leaving the real outro uncut. Now works backwards from the end. Unblocked 2.1, 2.2, 2.6, 4.4 with no new takes. |
| Length label dropped | `videos/module_{2,3,4}/en/decks/` | Re-split with the current `split_module_deck.py`, which already dropped it during the Module 1 work. M2–M4 had been split before that landed. |
| Flat 5:00 brief target | all 22 briefs | Module 1 targeted 5:00 in every brief whatever the nominal length. `make_brief.py` now defaults to it. |

## Findings

### 1. The drift check is advisory, not the shipping gate
Module 1's shipped videos run **3:11 to 5:30 against a single 5:00 target** — 1.3 and 1.4 shipped
with runtime FAILs. Automating "re-roll until `srt_drift_check` exits 0" burned ~60 generations for
nothing before this was checked. A person accepted those takes; the script never did.

### 2. The show-open is a property of the generator
`deep dive` appears in 108 of 129 takes measured (83%), `welcome to` in 42 (32%), despite §3 of the
brief and an explicit line in every prompt. Module 1 shipped clean only because its show-openings
landed in the first ≤4 cues, where `trim_outro` reaches them. Modules 2–4 open with a ~30 s teaser
*first* and announce themselves after — past the cap — and the teaser uses subject vocabulary, so
the deck-anchored cut will not touch it either.

### 3. The remaining 12 blockers are two things
- **Consumer-outrage vocabulary** (2.4, 3.2, 3.4, 4.5, 4.6, 4.7): "nightmare" 24 takes, "broken" 25,
  "chaos" 21, "our sources" 21, "hostage" 4. §3 bans all of them by name and it is not landing.
- **Runtime** (2.5, 3.1, 4.1 UNDER; 3.2, 3.3, 4.2, 4.8 OVER).

Six subtopics have now exhausted three re-rolls on the same vocabulary failure. That is the kit's
own trigger for a **brief-template** fix rather than a per-video one — and since `make_brief.py`
regenerates from `references/audio-brief-template.md`, a §3 rewrite reaches all 22 in one command.

## Decisions — 8 September 2026

1. **Show-open residue is accepted, permanently.** "Welcome to today's deep dive" ships where
   `trim_outro.py` cannot reach it. Five brief revisions never moved the rate below 83%; it is a
   property of the generator, not of the brief. The ban is **removed from §3** rather than left
   standing and ignored — a rule with a 17% compliance rate costs the rules beside it their
   authority. ITU's no-in-video-**branding** rule is unaffected and still enforced (no programme
   name, no channel name, no production credit).
2. **§3 rewritten, not lengthened.** `## 3. Hard prohibitions` → `## 3. Register and word
   choice`. Three changes, in order of expected effect:
   - The outrage vocabulary moves from bullet 7 of 11 into a **paired substitution table at the
     top of the section** — the "Say this | Not this" form §4 uses, which is the only part of the
     brief the generator reliably obeys. Every banned word now sits beside the word to use
     instead, in the same row.
   - A positive rule fills the vacuum that produced the outrage words in the first place: **the
     hosts reach for "nightmare" because they are trying to convey severity and the brief gives
     them no sanctioned way to do it.** So: *severity is carried by the consequence, not by an
     adjective* — "the same citizen record is captured four times, in four systems, and none of
     them agree" instead of "it's a nightmare".
   - Two dead bullets removed, one live one split out: the sources-attribution ban ("our
     sources", "the sources say") was buried in the same bullet as the show-open and is a real,
     current blocker on 3.4, 4.6 and 4.7 — it now stands alone.
   All 22 briefs and prompts regenerated from the new template.
3. **Runtime stalemates settle on the closest take.** A subtopic that re-rolls to the try limit
   and only ever misses the clock has a script-length problem, not a take problem, and the next
   roll is a coin flip. `take_until_pass.py` now picks the take nearest the target and reports it
   — **but only when runtime is the sole remaining defect.** Any other failure still escalates to
   a person: a shorter wrong take is not better than a long one.

## Next

1. Rewrite `audio-brief-template.md` §3 against the frequency data above; regenerate all 22 briefs.
2. Re-roll the 12 blocked subtopics against the new briefs.
3. Steps 6–7 for the 10 accepted takes — `draft_cues.py` then `slidecast.py`. Needs no NotebookLM
   and is not blocked by anything above.
4. Decide the residue question (1) before delivery.

## Accepted by decision — 9 September 2026

**3.1 → `Audio_v0.5`** (5:38, best of 6). Runtime in tolerance, no outro defect. Its two
reported failures are both arguable:
- `TERMINOLOGY — say 'register' / 'registers'` fires on "the learner registry" — but the brief
  itself names the system **"Learner Registry"** four times, so the hosts are using the deck's own
  proper noun. The check is `\bregistr(y|ies)\b` with no proper-noun exemption. This is a
  **false positive**, and it accounts for a large share of the 8-of-32 terminology failures in the
  8 Sep batch. It never blocked a take on its own, so it has cost nothing yet — but it will
  mislead the next person who reads a report.
- `think about` fires on "That is wild to think about, just a spreadsheet" — mid-content, not the
  closing turn the ban is aimed at.

**3.2 → `Audio_v0.7`** (5:00 exactly, best of 8, and the only one of the eight with a single
failure). It ships **three outrage words on air**, which is the defect the §3 rewrite was written
to remove:
- "Which is the **nightmare** scenario."
- "Their changes collide, they lock each other out, and it's just **a mess**."
- "How do we ensure that vendor doesn't hold our architecture **hostage**?"

3.2 resisted the rewrite completely — all three of its 8 Sep takes carried `hostage` and
`nightmare`. Accepting it is a deliberate trade, reversible by a hand-edit of three lines or by
re-rolling this subtopic alone later.

## Known and deliberately not fixed

1. **`registry` false positive.** `srt_drift_check`'s house-term row is `\bregistr(y|ies)\b` with
   no proper-noun exemption, so it fires on "the learner registry" even though the brief names the
   system **"Learner Registry"**. It never blocked a take on its own — every take that failed it
   failed something else too — but it inflated the terminology numbers in the 8 Sep batch (8 of 32)
   and will mislead the next reader of a report.
2. **Trailing backchannel survives the trim.** 2.5's accepted take ends on "It does," — a two-word
   host confirmation sitting between the content and the outro the trim removed. The cut is correct;
   the dangling turn is not a good close. §3 bans backchannel outright, so extending the cut back
   over trailing single-word confirmations would fix it once for every take.
3. **Filler threshold.** 3 of 32 takes failed at 2.6-2.7 per 100 words against a 2.5 ceiling. At
   that margin the threshold is the more likely problem than the takes.

## Spend

155 takes; 12,576 ElevenLabs credits used this period (110,862 remaining, resets 25 Sep).
NotebookLM has no API cost but throttles: roughly 40% of generations timed out at 900 s during the
heaviest batch, and recovered after a pause.

## Module 2 assembly — 10 September 2026

Steps 6 and 7 for all seven English subtopics, against the rebuilt post-hook v0.2 decks and the
takes of record. `rendered N slides, N cues` with no count warning on every one; MP4 duration
equals the m4a; a frame extracted at each cue and inspected shows the slide the cue promised, in
order, Sources last.

| Video | Take | Slides | Duration | Size | Sources tail |
|---|---|---|---|---|---|
| 2.1 | v0.15 | 8 | 5:08 | 10 MB | 5.3 s |
| 2.2 | v0.19 | 9 | 5:04 | 10 MB | 5.5 s |
| 2.3 | v0.2 | 8 | 4:53 | 10 MB | 5.6 s |
| 2.4 | v0.10 | 8 | 5:45 | 12 MB | 5.5 s |
| 2.5 | v0.11 | 8 | 4:22 | 9 MB | 10.7 s |
| 2.6 | v0.7 | 9 | 4:56 | 10 MB | 5.1 s |
| 2.7 | v0.2 | 8 | 5:40 | 12 MB | 5.3 s |

**`draft_cues.py` was a starting point, not the answer.** On six of the seven it collapsed runs of
slides into one-second gaps and flagged them itself (`slides [3, 4, 6, 7, 8] are under 5 s apart`).
Only 2.7 came back usable. Every cue file here was authored by reading the take's SRT against the
deck, as `kp-slidecast` Step 1 requires; the drafts were used only to confirm slide counts.

**Title-card holds are now 4–21 s** (2.5 · 0:04, 2.6 · 0:06, 2.1 · 0:11, 2.2 · 0:12, 2.7 · 0:16,
2.3 · 0:18, 2.4 · 0:21) against the 35–70 s the opener review measured on the two-title-card decks.
The hook slide did the work it was added for.

### Two takes cover the deck out of order — cued, not re-rolled

- **2.2** covers "adopt it, don't design it" (slide 7) at 2:21–2:45, inside the entity discussion,
  and never returns to it. Cues must be strictly increasing, so slide 7 is placed over the closing
  turn (4:43–4:55), where the hosts name the adopted entities — "one capability exposed via one
  service governed by one data domain". The cost is that slide 6 loses its own punchline line at
  4:48. Reversible by a cue edit if the subtopic is ever re-rolled.
- **2.4** walks the expected profile (2:28–3:12) before the supporting elements (3:16), the reverse
  of the deck. Slide 3 holds across both type blocks; slide 5 is cued at 4:52, over the
  misclassification passage — which is the expected profile failing, so it reads as intended.
- **2.3** states slide 3's definition inside the opener ("settle design arguments before they
  start", 0:18) and then tells the forty-drafts story. Slide 3 is cued over that story rather than
  left unshown.

Each is recorded in a note at the top of the cue file it affects.

### Also true, not fixed here

- **2.5's Sources tail is 10.7 s**, because the take's last words are the weak close ("It does,")
  at 4:22 and the cue sits at the preceding sentence start. In range — 1.6 shipped 10.7 s — but it
  is the same trailing-backchannel defect noted under *Known and deliberately not fixed*.
- The per-video title cards still print a length label (`~5 minutes · standalone video`). The
  7 Sep note recorded the label as dropped from the decks; it is dropped from the *section* slides,
  not from the title card. Cosmetic, and identical in Module 1.

### Next

Modules 3 and 4, same two steps, 15 subtopics — nothing blocks them.

## Modules 3 and 4 assembly — 10 September 2026

The same two steps for the remaining fifteen English subtopics, against the post-hook v0.2 decks
and the takes of record. `rendered N slides, N cues` with no count warning on any of them; every
MP4 duration equals its m4a; a frame extracted at each cue and inspected shows the slide the cue
promised, in order, Sources last.

| Video | Take | Slides | Duration | Size | Sources tail |
|---|---|---|---|---|---|
| 3.1 | v0.5 | 9 | 5:38 | 12 MB | 7.4 s |
| 3.2 | v0.7 | 8 | 5:01 | 10 MB | 8.9 s |
| 3.3 | v0.6 | 9 | 4:14 | 8 MB | 5.6 s |
| 3.4 | v0.6 | 9 | 5:43 | 11 MB | 7.5 s |
| 3.5 | v0.1 | 8 | 5:17 | 12 MB | 5.9 s |
| 3.6 | v0.2 | 8 | 5:20 | 11 MB | 6.0 s |
| 3.7 | v0.2 | 9 | 5:26 | 11 MB | 5.8 s |
| 4.1 | v0.5 | 8 | 5:33 | 12 MB | 7.2 s |
| 4.2 | v0.9 | 8 | 4:31 | 9 MB | 6.2 s |
| 4.3 | v0.1 | 8 | 4:58 | 11 MB | 5.7 s |
| 4.4 | v0.4 | 8 | 4:31 | 9 MB | 6.0 s |
| 4.5 | v0.12 | 8 | 5:21 | 12 MB | 6.7 s |
| 4.6 | v0.7 | 8 | 6:03 | 12 MB | 6.0 s |
| 4.7 | v0.9 | 7 | 4:40 | 10 MB | 6.1 s |
| 4.8 | v0.7 | 8 | 5:23 | 11 MB | 10.8 s |

**Title-card holds across all 22 are 4–24 s** (M3: 3.6 at 0:07, 3.1 at 0:20, 3.5 at 0:19, 3.3 at
0:21, 3.7 at 0:18, 3.4 at 0:16, 3.2 at 0:16; M4: 4.2 at 0:15, the rest 0:18–0:24), against the
35–80 s the opener review measured on the two-title-card decks. Nothing needed a re-roll.

### Takes that cover their deck out of order

Same pattern as Module 2, same treatment — cued and noted in the cue file, not re-rolled. Cue
times must strictly increase, so where a take states a slide's point early and never returns, the
slide is placed at the nearest later moment that still reads:

- **3.1** enumerates the three things a repository holds (slide 3's body) at 2:11, *after* the
  second-copy warning at 1:00. Slide 5 ("what it holds, concretely") opens at 1:50 and covers the
  whole block; its Progressa owners land inside it at 2:58.
- **3.3** interleaves the light gate (2:49), the Board as the cheapest moment (3:06) and the three
  checks (3:23). Slide 6 holds across all three; slide 7 opens where the hosts state its point.
- **4.1** makes slide 5's point (fictional on purpose) at 0:40, inside the opener. Slide 5 is cued
  at 3:24, where the hosts turn from the problem to the method — 8 s, the last place it reads as a
  set-up rather than a contradiction.
- **4.5** states slide 4's rule (you do not invent the target) at 0:59 and then walks the four
  target layers, which are slide 3's body. Slide 4 holds across the walk: the walk *is* that rule
  being applied, and once-only forcing the three learner lists into one lands inside it.
- **4.8** reaches slide 5's material (the method travels) before slide 4's (swap the contents), but
  only by ~35 s, so both land on their own beat.

### The §4 name slips ship as accepted

The opener review's five factual slips are in these renders, since no take was re-rolled: 3.4's
"Pan-European Architecture" (0:56), 4.3's "Pay Your Anchored Standards" (0:55), 4.4's "LoCTI
principles" and Mexican-programme "PROGRESA", 4.6's "Progressive Phase Four" and "PAERA or PR",
4.7's "the progressive framework". Each is noted at the top of the affected cue file so the next
person does not read it as a cue error. Fixing them means re-rolling those five takes and
re-cueing; the phonetic row for Progressa (§5 of the opener review) is still not in the template.

### Next

Publication: YouTube metadata for M2–M4 (M1 has `KP1_M1_YouTube_Upload_Metadata_v0.1.md` as the
pattern), the on-camera module intros, and the French mirror.

## Name-slip re-rolls — 10 September 2026

The opener review's §4 factual slips, fixed at the brief and re-rolled. **Four of five landed;
4.3 does not converge and needs a decision.** No video has been re-cued or re-assembled yet — the
four new takes are accepted but the cue files and MP4s on disk still belong to the old takes.

| Video | Was | Now | Runtime | State |
|---|---|---|---|---|
| 3.4 | v0.6 "Pan-European Architecture" | **v0.10** | 4:44 | clean; says "PAERA framework", no expansion |
| 4.4 | v0.4 "LoCTI principles" | **v0.10** | 4:15 | clean; plain "localized", PAERA correct |
| 4.6 | v0.7 "Progressive Phase Four", "PAERA or PR" | **v0.14** | 4:48 | clean |
| 4.7 | v0.9 "the progressive framework" | **v0.13** | 4:31 | clean |
| 4.3 | v0.1 "Pay Your Anchored Standards" | — | — | **blocked, see below** |

37 takes generated: 3.4 ×4, 4.3 ×16, 4.4 ×6, 4.6 ×7, 4.7 ×4. Only the four takes of record are
committed, as before.

### 4.3 mangles PAERA in all ten of its takes

`PERA` ×4 takes, `PEERA` ×2, `PAERO` ×2, `PEURA` ×2. Every roll produced a different wrong form,
so this is not a coin flip that another try wins — it is what this subtopic's notebook does with
the name. It is now the kit's own trigger for a **brief-level fix rather than another re-roll**.
Options, cheapest first:

1. **Drop the acronym from 4.3's §2.** The video is Phase 2 Assess; it needs "the reference
   architecture", not the initialism. If §2 never says PAERA, the hosts have nothing to mangle —
   and the unconditional §4 row still catches them if they reach for it anyway.
2. **Accept one wrong form**, as the show-open residue was accepted on 7 Sep. Weaker here: the
   others are all correct now, so 4.3 would be the only video misnaming the framework.
3. Keep re-rolling. Ten takes say this does not pay.

### The check was passing the defect it was re-rolling for — three times

Each fix below was found only because a take that had "passed" was read by hand.

| Problem | Why it passed | Fix |
|---|---|---|
| `registry` fired on the decks' own copy ("Learner Registry", "duplicate registries" — 20 of 22 decks) | house-term row had no notion of deck vocabulary | `srt_drift_check --deck`, wired through `take_until_pass`; a row whose wrong form is in the deck is skipped. Same fix `trim_outro.py` took on 9 Sep |
| "Progresa" (one s) failed all three 4.4 tries while two takes were otherwise clean | it is a **homophone** of Progressa — the spelling in an SRT is the transcriber's choice, not evidence about the audio | row removed. The pronunciation the brief asks for (pro-GRESS-a, not the Mexican PROGRESA) is real but **checkable only by ear** |
| `PERA`, then `PEURA`, shipped through a list containing `PRA`/`Para`/`Paira`/`Piera` | a whitelist of known wrong forms cannot anticipate the next one | fails closed now: any capitalised token within **two edits of PAERA** that the deck does not itself use. The deck supplies the exemptions (PNEA, PNIA, PDGA, PLR) |

### The same slip is in videos already accepted, including a shipped one

The fail-closed rule was swept over every take on disk:

- **1.1 v0.13 says "PERA"** — Module 1, re-rendered 9 Sep, published.
- **1.5 v0.4 says "PAERO"**; its earlier v0.2 said "PEERA".
- **4.8 v0.7 says "PAER"** — the accepted take of record.

None was caught before because the checker could not see it. Not acted on: it is the same
decision as 4.3 above, and it now reaches Module 1.

### What changed in the kit

| Change | Where |
|---|---|
| Progressa phonetic row (pro-GRESS-a, double s, not the Mexican programme) | `audio-brief-template.md` §4 + `make_brief.py` `TERM_ROWS` |
| `localised principles` row (not "LoCTI") | same |
| EA-vs-PAERA row — they are two different things (3.3 conflated them) | same |
| **PAERA row is unconditional.** The §2 filter was stripping it from 16 of 22 briefs; the name reaches the hosts through every deck's Sources card, which renders as silence and so never triggered the filter. Three of the takes with no row invented an expansion | same |
| **Expansion is no longer requested** — "say the name and carry on; expand it only where §2 does". Across KP1 only 1.5's §2 introduces PAERA; every later video is talking to an audience that already knows the term | same |
| Prompt terminology line: pins the expansion, and adds the Progressa pronunciation **only where the brief uses it** | `make_brief.py` `PROMPT` |
| `--deck`, homophone row removed, PAERA near-miss rule | `srt_drift_check.py` |
| passes `--deck` to the audit | `take_until_pass.py` |

All 35 briefs and prompts regenerated; `brief_deck_check` clean on all five modules;
`test_resolve` OK.

### Next

1. Decide 4.3 (option 1 above is the cheap one), and whether 1.1, 1.5 and 4.8 follow.
2. Re-cue and re-assemble 3.4, 4.4, 4.6, 4.7 from their new takes — cue files and MP4s still
   belong to the superseded ones.
3. Then publication, as before.
