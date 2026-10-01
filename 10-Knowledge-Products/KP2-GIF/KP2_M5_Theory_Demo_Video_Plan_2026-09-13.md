# KP2 Module 5 — combining theory and the live demonstration in the videos

**Date:** 13 September 2026
**Inputs:** the ten v0.1 decks (`videos/module_5/en/decks/`, split from `KP2_M5_Deck_v0.1.pptx` by `split_spec.json`), the v0.3 narration (`build_kp2_module5_v03.js` → `videos/module_5/en/scripts/`), `build_kp2_module5_deck_v01.py` and `kp-deck-builder/scripts/deck_lib.py`, the slidecast pipeline (`kp-slidecast/scripts/slidecast.py`, `draft_cues.py`) and `KP2-build-pack/` (console, exercises, acceptance, onboarding records).
**Builds on:** `KP2_M5_Script_vs_Pack_Review_2026-09-10.md` (§2 corrections, §3 three video shapes) and the console-coverage answer of the same day. Does not repeat them.

---

## 0. What the artefacts say today, and the four constraints

**The decks are pure theory.** All ten follow the KP1 pattern — title card, `WHERE WE START` hook, three to five content slides (rows, panels, a punch block, one diagram), `IN ONE SENTENCE` with the practice box, Sources. 5.6's centrepiece is a drawn `call_flow` (learner → PNEA → PNIA/PLR); 5.5's is a drawn `federation`; 5.4's is a five-step `flow` (Requirements → Approval → Registration → Conformance → First service). Nothing on any slide comes from the running pack. The narration for 5.4/5.5/5.6 still describes the June mechanism and topology (`MEMBERS` still lists MoEYS/PEMIS; `HOSTING` still says "ITU cloud"; 5.4 still says "generate with Claude, then confirm against the registry") — the build script's own comment says these are pending the Tuesday decisions.

Four constraints shape any combination of theory and demo:

1. **The narration is a remix, not a read.** The default Step 4 is `kp-notebooklm-audio`; the hosts stretch and reorder, and cues are authored *afterwards* from the SRT. So no demo footage can be synchronised to words. Whatever we put on screen has to survive being 20 s early or late against the narration. (The scripted-TTS path that would give word-level control is parked.)
2. **The video is stills held for cue windows.** `slidecast.py` renders the deck to PNGs and holds each for its interval over one audio track. It has no notion of a moving clip. A slide is already an image, so a *frame* costs the pipeline nothing; a *clip* costs one feature.
3. **ITU rules.** No individuals on screen (a screen capture with voice-over is explicitly allowed, §4.3); slides are text-only (§3.i). A terminal or a markdown table is text; a browser capture is pixels. Treat the second as a calibration item and design so that most demo evidence is literally text.
4. **The pack is deterministic and was built to be filmed.** The console has a guided `▶ Run the demonstration` with fixed 1.8 s beats ("the mode used for filming"); `server_conf_cache_period: 5` exists so the ACL change is visible in seconds; `exercises.md` already lists the expected observation for every beat; `console.sh reset` and the watchdog make every take repeatable. That is the asset: **the demo can be captured by a script, from the pack, the same way the deck is built by a script from the .js.**

---

## 1. The approach — capture as code, three kinds of evidence, one new slidecast feature

The principle: **the demo enters the video the same way everything else does — as generated artefacts under source control, rebuilt on demand, never hand-recorded.** Concretely:

### 1.1 Three kinds of demo evidence, by cost and ITU fit

| Kind | What it is | Produced by | ITU fit | Pipeline cost |
|---|---|---|---|---|
| **Text capture** | Real output rendered as an ITU text slide: `acceptance.sh` check lines, `demo.sh` step names + timings, `member.sh list`, `application-<nin>.json`, the receipts (curl + JSON), `onboarding/<key>/02-requirements.md` / `03-sla/*.md` / `01-admission.md` tables, the `posture: production` refusal | capture run writes `.txt`/`.md`; deck builder renders with new `terminal_slide()` / `artefact_slide()` | text-only — inside §3.i as written | none (it is a slide) |
| **Frame** | One still of the console at a beat (pre-filled form, layer panes, side-by-side allowed/denied, the join card at `ACTIVE, verified: true`) | Playwright screenshot at 1920×1080, browser chrome hidden | calibration item | none (it is a slide) |
| **Clip** | Motion where motion *is* the lesson: revoke → ~5 s → the PNIA half of the form fails while PLR still fills; the join steps ticking to ACTIVE | Playwright video recording, trimmed to the beat | calibration item | one slidecast feature (§3.4) |

Aim for the smallest kind that carries the lesson. Across ten videos that comes to roughly **fourteen text captures, eight frames, two clips.** Only 5.6 and 5.4 need clips at all.

### 1.2 The capture run

A new script in the build pack — `scripts/demo-capture.sh` driving `apps/console/capture/capture.py` (Playwright, chromium; the kit already assumes a Python venv) — reads a beats manifest and writes `out/demo-takes/<beat>.{txt,png,mp4}` plus `takes.json` (beat id, file, sha, pack commit, X-Road version, timestamp). Each beat **asserts the expected observation from `exercises.md` before saving** — the capture is also a test, so a frame cannot show a state the pack does not claim. Console beats run on a warm stack after `console.sh reset`; the terminal beats run the real commands and keep stdout. The join beats submit PTSB with the exact payload from exercise 2 and un-join afterwards, so the run leaves the pack green.

The takes are copied to `videos/module_5/en/demo/` (versioned like decks: `KP2_M5_Demo_v0.1/`), and the deck builder reads from there — **the deck build fails loudly if a referenced take is missing**, the way it already fails on a practice-box overlap. `takes.json` is what lets a later French deck, or a rebuild after an X-Road bump, reuse or refresh the same beats.

### 1.3 How theory and demo interleave inside one video

Keep the KP1 skeleton and drop demo evidence at two fixed points, never scattered:

```
title card → hook → [theory slides] → DEMO BLOCK (2–4 demo slides, back to back) → [one synthesis slide] → IN ONE SENTENCE + practice box → Sources
```

Why one block rather than interleaving: the remix constraint (§0.1). A contiguous block gives the narration one stretch to "watch the demonstration" in; cue authoring then needs only the block's start and its internal beats, which the hosts describe in order because the audio brief tells them to (§3.5). Interleaved frames would each need their own precise cue against a conversation that does not follow the script's order.

Three shapes (from the 10 Sep review), now with slide counts:

| Shape | Videos | Demo block | Slides | VO words |
|---|---|---|---|---|
| Theory + artefact reveal | 5.1, 5.2, 5.3, 5.7, 5.8, 5.9, 5.10 | 0–1 text capture | 7–8 | ~500–560 (unchanged) |
| Hybrid | 5.4, 5.5 | 3–4 slides, one clip max | 9–10 | ~450 |
| Screen-led | 5.6 | 5–6 slides incl. one clip; the drawn `call_flow` stays as the *before* picture | 10 | ~350 |

---

## 2. Per-video plan — what each demo block shows and where it comes from

Beat ids are the capture manifest's; "expected" is the assertion the capture makes (all from `exercises.md` / `acceptance/`).

| Video | Shape | Demo block (in order) | Kind | Expected observation |
|---|---|---|---|---|
| **5.1** | theory | — | — | — |
| **5.2** | theory + reveal | `REQ-1` `onboarding/pnea/02-requirements.md` as a table; `REQ-2` the `member_requirements:` block of the PTSB join payload | text | six rows; the same six keys in the payload |
| **5.3** | theory + reveal | `SLA-1` `onboarding/plr/03-sla/enrolment-api.md`; `SLA-2` the catalogue card for `enrolment-api` showing the SLA linked *from the service* | text, frame | five terms + signatory; card row `SLA → ../03-sla/…` |
| **5.4** | hybrid | `J0` a submitted request **rejected** at validation (illegal member code) — the "wrong member code" lesson, caught by the validator not by luck; `J1` the PTSB card in state SUBMITTED with its computed config diff; `J2` Approve without a reference → "Decision reference is required: admission is a Steering Committee decision"; `J3` **clip**: approve with `RIHA-2026-001`, steps tick by actor to `ACTIVE, verified: true`; `J4` `onboarding/ptsb/01-admission.md` | text, frame, frame, clip, text | `rejected (identifier)`; diff before any write; the error text; `ACTIVE`, `verified: true` in < 2 min (~95 s — the clip is played at speed then held, see §3.4); the admission record carries the reference |
| **5.5** | hybrid | `T1` `demo.sh` step names with `deploy-timings.txt` (≈156 s + ≈395 s); `T2` `member.sh list` / topology: PDGA + PNEA, PLR, PNIA with hosting; `T3` `acceptance.sh` federation-core lines green | text ×3 | four Security Servers, three members + owner; 2.x checks PASS |
| **5.6** | screen-led | `C1` tab 1 before: blank form, "Without the bus, this is ten questions"; `C2` after: pre-filled, `asked 1 · pre-filled 9/10`; `C3` receipts — the two curl calls and the JSON bodies; `C4` tab 2 the four layer panes, legal pane showing *sends / holds but withholds*; `C5` tab 3 side by side: PNEA 200, PLR `Server.ServerProxy.AccessDenied`; `C6` **clip**: Break the proof → PNIA half fails, PLR still fills → Restore; `C7` `out/application-<nin>.json` with per-field provenance; `C8` `acceptance.sh` 2.6.1–2.6.6 green | frame, frame, text, frame, frame, clip, text, text | as `exercises.md` §1 and `acceptance/once-only-exchange.md` |
| **5.7** | theory + reveal | `P1` `deployment.yaml` `posture: production` startup refusal (the fail-closed switch); `P2` `path-conformance.md` summary counts (41 implemented / 6 simulated / 24 named absence / 4 out of scope) | text ×2 | refusal names the unacknowledged key; counts match the generated file |
| **5.8** | theory + reveal | `M1` an operational-data export, metadata only (see §4.1 — does not exist yet) | text | no NIN, no name in the export |
| **5.9** | theory | — (document play; the artefact is the cross-check report the learner produces) | — | — |
| **5.10** | theory | — | — | — |

Two notes on 5.6: keep the drawn `call_flow` slide *before* the block as the "what you are about to see" picture — the frames then map onto boxes the viewer has just seen; and the existing "Every layer" rows slide is *replaced* by frame `C4`, since the console's layer panes say the same thing with live values. 5.4's five-step `flow` slide stays and gains a sixth cell — **Admission** — between Approval and Registration, which is the thing the demo block then shows.

---

## 3. Artefact changes

### 3.1 Build pack (`KP2-GIF/KP2-build-pack/`)

- **`scripts/demo-capture.sh` + `apps/console/capture/capture.py` + `capture/beats.yaml`** — the deterministic capture run of §1.2. Playwright, 1920×1080, `--hide-scrollbars`, console at `localhost:8090`, join API at `:8091`; runs `console.sh reset` before and after; asserts each beat; writes `out/demo-takes/`. Add `playwright` to `requirements-dev.txt`; `preflight.sh` reports it as optional.
- **`scripts/acceptance.sh --summary`** — a stable one-line-per-check form (`2.6.4  PASS  unauthorised caller denied by the provider-side ACL`) for text captures; today's output is fine for a terminal, too noisy for a slide.
- **Console**: a `?filming=1` query flag that hides the header buttons' hover states and the context bar's timestamps (non-deterministic pixels between takes); per-tab "Module 5.x · exercise n" tags (from the 10 Sep console answer, item 5) so the frames themselves carry the crosswalk.
- **`manifest.yaml`**: `join-member: video_ref: "5.4"`.
- **5.8's artefact gap** — see §4.1.

### 3.2 Kit — deck builder (`kp-deck-builder`)

- `deck_lib.py` gains three slide kinds, all keeping the ITU chrome (title, footer tag, notes with VO):
  - `terminal_slide(prs, head, take_txt, caption, tag, note)` — monospaced block on the ITU light panel, max ~18 lines, with a provenance line ("captured from the demonstration federation · X-Road 7.7.0 · pack `<sha>` · `<date>`") read from `takes.json`;
  - `artefact_slide(prs, head, take_md, caption, tag, note)` — a markdown table rendered as a text table (for the onboarding records);
  - `demo_slide(prs, head, take_png, caption, tag, note, clip=None)` — the frame, letterboxed inside the content area with a caption strip; when `clip=` is given the notes carry `CLIP: <file>` so the cue tooling and the slidecast know this slide moves.
- `build_kp2_module5_deck_v01.py` → `_v02.py`: `DEMO_DIR` pointing at `videos/module_5/en/demo/`; the blocks of §2; corrected `MEMBERS`/`HOSTING`; the six-cell 5.4 flow. Keep the rule that every VO string is identical to the .js (`vo_diff.py`).
- `qa_deck.sh`: three checks — every demo slide has a provenance line; no take contains a bearer token, PIN or password (grep the `.txt` sources; the frames come from a `?filming=1` console that never renders them); every `CLIP:` reference exists.
- `split_module_deck.py` / `split_spec.json`: unchanged — ranges just grow.

### 3.3 Script (`build_kp2_module5_v03.js` → `_v04.js`)

- The §2 corrections from the 10 Sep review (topology, mechanism, acceptance naming, field conformance, per-service SLA, Requirements in the payload).
- **Demo-beat VO written as observations, one per beat, in the block's order**, each sentence naming what is on screen before saying what it means ("The form has one field typed and nine filled in — nine questions the learner was not asked."). This is what makes the remix survivable: hosts paraphrase sentences, they rarely reorder a numbered sequence they were told to keep.
- Slide-spec tables in the bundle get a new element type, **"Demo evidence (text capture / screen frame / clip)"**, so the ITU deliverable declares what is on screen — this is the calibration item's paper trail.
- Practice boxes on 5.4/5.5/5.6 point at the exercise number as well as the prompt ("Exercise 2 in the build pack does this against your own stack").

### 3.4 Kit — slidecast (`kp-slidecast`)

- `slidecast.py` accepts an optional fourth input, `clips.txt` (`<slide-number> <clip.mp4>`). For those slides it pre-renders a segment of exactly the cue window: the clip plays once at natural speed, then **freezes on its last frame** (`tpad=stop_mode=clone`) for the rest of the window; if the window is shorter than the clip, the clip is cut, never sped up. Still slides are pre-rendered as before; the segments are concatenated and the narration laid over. Result: no sync dependency — a clip that starts 15 s "early" against the hosts simply holds its end state while they catch up, which is also what a human presenter does.
- `draft_cues.py`: treat the demo block as one beat with sub-beats; seed the sub-beat cues from the block's VO sentences found in the SRT.
- `verify`: extract a frame at each demo cue and at cue+clip length, inspect both (the existing frames-at-cue-times check extended by one frame per clip).

### 3.5 Kit — audio (`kp-notebooklm-audio`, Step 6 audit)

- The audio brief gains a **"demonstration block"** instruction: the hosts describe the numbered beats in order, do not skip one, and do not narrate anything visual that is not in the beat list. The Step 6 audit adds a soft check: the beat phrases appear in the SRT in the listed order.
- **Option for 5.6 only:** if the remix keeps breaking the block's order after two re-rolls, un-park `kp-interview-tts` for this one take — 5.6 is where sync buys the most, and a single 4-minute take is at the length the decay problem started, so record it as two takes (theory / demo block) and join them. Decide after the first NotebookLM attempt, not before.

### 3.6 Tracker and QA gates

- `video-tracker/tracker.yaml`: a `demo_takes: <version>` field per video, so a stale take shows as a blocker the way a stale deck does.
- `kp-bundle-qa` soft caps per shape (hybrid ≈450 words, screen-led ≈350), the way KP1's tiers were added.

### 3.7 GitBook companion

The same capture run produces the material for the "Run" pages with no extra work: each exercise page embeds the beat frames/text with the expected observations, and the **continuous walk-through** (10 Sep review §3) is simply the whole beats manifest recorded as one Playwright session with captions and no narration, published on the module's Run page. It is not a YouTube subtopic, so ITU's five-minute convention is untouched.

---

## 4. Gaps the plan exposes

### 4.1 5.8 has no artefact to point Claude at
The narration says "point Claude at the real bus logs". The pack has structured JSON logs and a `/metrics` endpoint for join-api and console (a surface, not monitoring — runbook "Observability"), and the X-Road operational-monitoring add-ons on every Security Server — but **no collector and no export**; `getSecurityServerOperationalData` was spiked and works (`docs/decisions/xroad-metrics-notes.md`). Add `scripts/opmon-export.sh` that calls it per server and writes `out/opmon-<date>.json`, **metadata only**, with a test asserting no `nin`/name field is present — which is 5.8's "monitor the traffic, never the cargo" safeguard made mechanical — and commit one sample so the GitBook play has an input. Without this, 5.8's play cannot be run by a learner.

### 4.2 5.4's "wrong member code" punch block
The pack does not do "confirm against the live registry"; it validates (allowlist, collision, key derivation) and refuses. Beat `J0` keeps the lesson and grounds it: the punch line becomes *"A wrong member code throws no error on the bus — so the validator refuses it before it gets there."* The `[confirm]` discipline stays in the AI tip, where it belongs (a country joining an existing bus).

### 4.3 The hosting line
`HOSTING` and the 5.5 narration say "one VM on the ITU cloud". `deployment.yaml` supports `docker-local` only; the droplet infra exposes the console, it does not run the federation there. Either the Tuesday call confirms an ITU-hosted target (and `deployment-targets.md`'s contract gets written against it) or the line becomes "a single host — a laptop or one VM — in sandboxed containers". Do not film 5.5 with the line unresolved; it is the one slide whose text and capture could contradict each other.

### 4.4 Calibration item for ITU
"Demo evidence" as an element type: text captures are inside §3.i as written; frames and clips are screen-only voice-over per §4.3 but not text-only per §3.i. Raise it with the on-camera-intro item, with the §2 table as the list of exactly which frames and clips are proposed (eight and two).

---

## 5. Order of work

1. Tuesday: hosting line (§4.3), demo-evidence calibration (§4.4), and confirm 5.4's retitle to "Admit a member to the bus".
2. Build pack: `capture.py` + `beats.yaml` for 5.6's eight beats only; `acceptance.sh --summary`; `?filming=1`. Run it; inspect the takes.
3. Kit: `demo_slide`/`terminal_slide`/`artefact_slide`; `slidecast.py` clips; the QA checks.
4. Rebuild 5.6 as the proof of the format (v0.4 .js, v0.2 deck, NotebookLM take with the block instruction, cues, mp4). Review it before touching 5.4 and 5.5.
5. Extend the manifest to the 5.4 and 5.5 beats and the reveals for 5.2/5.3/5.7; rebuild the module; regenerate the tracker.
6. `opmon-export.sh` for 5.8, then its reveal.
7. The continuous walk-through for GitBook from the full manifest.
