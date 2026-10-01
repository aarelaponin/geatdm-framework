# KP2 Module 5 — implementation plan: the demo videos after the pilot — 5.4 (join) and 5.5 (stand-up), plus the reveals

Source: `KP2-GIF/KP2_M5_5.6_Pilot_Review_2026-09-13.md` (go for 5.4 and 5.5 on the format; no audio take accepted yet), `KP2_M5_Theory_Demo_Video_Plan_2026-09-13.md` §2 (beats J0–J4, T1–T3, the reveals), and the pilot plan `2026-09-13-kp2-m5-demo-video-pilot.md` whose WP1–WP7 are on main.
Pack state assumed: main after the pilot (`?filming=1`, `acceptance.sh --summary --only`, `scripts/demo-capture.sh`, `apps/console/capture/`, the three slide kinds, `slidecast.py` clips, `make_brief.py` demo block, `coverage_check.py` order report, shape-aware `qa_bundle.py`; deck v0.2 with corrected `MEMBERS` and a single-host `HOSTING` line).

---

## 1. Goal and non-goals

**Goal.** 5.4 and 5.5 rendered in the theory + demo format from the same capture-as-code chain the pilot proved, with every lesson from the pilot applied *before* the first take rather than after: cropped frames, captions that carry the cue vocabulary, numbering inside the quoted substance, the opener rule, the banned-word check on the VO, and clips that do not hide the slide. The same capture run also produces the cheap artefact reveals for 5.2, 5.3 and 5.7 so those three theory videos gain their one evidence slide at no extra session.

**Non-goals.** No new audio for 5.6 in this plan (its re-roll is WP0's precondition, not this plan's work). No 5.8 (blocked on an operational-data export the pack does not have — §7). No GitBook pages; the un-join and drift beats are captured for GitBook only if they fall out of the run for free, never as video slides. No own-server join on camera (the hosted join is the demonstration; `--full`-tier only). No French.

---

## 2. What the pilot changed about how these two videos are made

- **Order holds, form does not.** Both takes kept the demo slides in deck order, so the block design stands and the TTS fallback stays parked. What failed was the hosts' *manner* (second-person openers, no numbering, invented analogies) — all brief and VO problems, fixed once in WP0 and inherited here.
- **Frames must be cropped to the card.** At phone width only structure reads. Every frame beat below names its crop selector; full-viewport frames are for GitBook, not for slides.
- **A clip replaces the whole slide** for its playing time, so the caption and provenance vanish. WP1 composites the clip *inside* the slide's demo area instead. Until that lands, no clip longer than ~15 s.
- **`draft_cues.py` cannot separate neighbouring demo slides**; hand cues are the expectation. Captions therefore carry one distinctive noun each (`refused`, `diff`, `minute`, `steps`, `admission`, `hosted`), never a term from the theory slides around them.
- **The provenance line names the pack commit**, so the capture runs on a committed tree — and the join writes files into that tree (WP2 handles the restore).
- **Versions follow the audio** (`Cues_v0.N`, `Video_v0.N`); the demo dir follows the capture (`KP2_M5_Demo_v0.N`), one dir for the whole module with per-video subfolders.

---

## 3. Decisions (defaults shown)

| # | Decision | Default | Why |
|---|---|---|---|
| D1 | 5.4's title | **"Admit a member to the bus"** (10 Sep review §1); YouTube title and single message updated in the bundle; the number stays 5.4. | The video now shows admission → validation → automated join; "Register" describes one step of it. Carried as a calibration line, not a blocker. |
| D2 | The refusal example (J0) | **A member code with a space** (`"PT SB"`): rejected by the identifier check, message names the permitted character set. | It is the "wrong member code" lesson the deck already carries, made mechanical; a collision example would need a second existing member on screen. |
| D3 | The join clip (J3) | **Step-cut, not real time**: `capture.py` gains `record_steps` — one shot per join-step transition at a fixed 1.5 s spacing — so the ~95 s hosted join becomes a ~20 s clip whose frames are the step list ticking. | Real time is longer than any cue window and the waits are propagation, not lesson. Fixed spacing also makes the clip byte-stable (Q3 extends to clips). |
| D4 | Join store for filming | **A throwaway SQLite store**: `demo-capture.sh` starts `join-api` with `KP2_JOIN_DB_URL` pointing at `out/join-store-film/` and removes it afterwards. | Tab 4 lists every request the store holds; without this, every previous run's rejected and retired PTSB cards are on screen. |
| D5 | The repository after a join | **Un-join in the run, then restore the exact paths the job wrote** (`configs/member-ptsb/`, `manifest.yaml`, `onboarding/ptsb/`, `hurl/`), asserted by `git status --porcelain` being empty at the end. | Approval refuses on a dirty checkout, the un-join leaves `onboarding/ptsb/99-retirement.md` by design, and the provenance commit must be the one that ran. |
| D6 | 5.5's evidence | **Text captures only** (`demo.sh` stages + measured timings, `docker compose ps`, `member.sh list`, `acceptance.sh --summary --only 2.1` and `2.x`). No admin-UI frames. | Inside §3.i as written; the Central Server UI would add a login and a NIIS product's pixels to the calibration item for no extra lesson. |
| D7 | 5.5 and the hosting decision | **Proceed with the neutral line already in deck v0.2** ("a single host — a laptop or one VM"). Only an ITU decision to *claim* ITU hosting reopens it. | The line is true of docker-local today and of an ITU VM later; nothing captured contradicts it. |
| D8 | Timings on a slide | **Exact measured seconds from `out/deploy-timings.txt`, with the caption saying "measured on this run".** | Rounded figures would be the one number on a slide that is not a capture. Q3's byte-identity is waived for this capture the way it is for clip MP4s. |

---

## 4. Work packages and order

| WP | Delivers | Touches | Size |
|---|---|---|---|
| WP0 Preconditions | fixes 1–3 of the pilot review in the brief and 5.6's VO; one accepted 5.6 take; `KP2_M5_Demo_v0.2` with cropped 5.6 frames; commits pushed | `kp-audio-brief` (opener rule, numbering in substance), `build_kp2_module5_v04.js` (5.6 "cut off"), `beats.yaml` crops | ~2 h + take |
| WP1 Kit | clip composited in the demo area; `record_steps`; `qa_deck.sh` crop/caption checks; `demo-capture.sh --video` | `kp-slidecast/scripts/slidecast.py`, `apps/console/capture/capture.py`, `qa_deck.sh` | ~3 h |
| WP2 Pack: 5.4 beats | `beats-5.4.yaml` J0–J6 + host beats; filming join store; join → un-join → restore | `apps/console/capture/`, `scripts/demo-capture.sh`, `docker-compose.yml` (env only) | ~4 h |
| WP3 Pack: 5.5 beats | `beats-5.5.yaml` T0–T3 (host beats) | `scripts/demo-capture.sh` | ~1.5 h |
| WP4 Pack: reveals | `beats-reveals.yaml`: REQ-1/2, SLA-1/2, P1/P2 | `scripts/demo-capture.sh`, `apps/console/capture/` | ~2 h |
| WP5 Script v0.5 + deck v0.3 | 5.4 and 5.5 rewritten to the slide tables below; 5.2/5.3/5.7 gain one evidence slide each; bundle slide specs declare evidence kinds | `build_kp2_module5_v05.js`, `build_kp2_module5_deck_v03.py`, `split_spec.json` | ~4 h |
| WP6 Audio, cues, render | briefs from `make_brief.py` with WP0's rules; takes; hand cues; two MP4s | `videos/module_5/en/{notebooklm,audio,cues,video}/` | ~3 h + takes |
| WP7 Review | the same three questions per video; tracker; go for the GitBook walk-through | `video-tracker/tracker.yaml`, a review note | ~1 h |

Order: WP0 → WP1 ‖ WP2 → WP3 → WP4 (one Docker session for WP2–WP4) → WP5 → WP6 → WP7.

---

## 5. Work package detail

### WP0 — Preconditions (the pilot review's "fixes before the next roll")

1. `kp-audio-brief/make_brief.py`: (a) the demonstration block quotes each demo slide's substance **beginning with the ordinal** ("First, …", "Second, …") so the numbering is in the words the hosts are given, not in an instruction; (b) a fixed §1 line: *"The opening line names the video and its single message. It does not address the listener, and it does not begin with a citizen."*; (c) the banned-word list is run over the `.js` VO by `qa_bundle.py` as a hard check, so "broken" is caught at script time, not at audit time.
2. `build_kp2_module5_v04.js`: 5.6's "one source broken" → "one source cut off"; regenerate scripts and bundle; `vo_diff.py` clean.
3. Re-capture 5.6 with the crops (`C1/C2/C6 → #counter-form-card`, `C4 → .layer-pane >> nth=0`, `C5 → .permissions-columns`) as `KP2_M5_Demo_v0.2/5.6/`; rebuild deck v0.2 → v0.2.1 (same .js); one more take; accept or re-roll once.
4. Push the seven pilot commits plus these.

Exit: an accepted 5.6 take exists and its brief is the template WP6 uses.

### WP1 — Kit changes the pilot asked for

1. **`slidecast.py` — clip inside the slide.** For a clip slide, render the slide PNG as before and overlay the clip into the slide's demo area (`deck_lib.DEMO_AREA`, exported as pixel coordinates in the notes line `CLIP: <file> @x,y,w,h`), scaled to fit, then freeze on the last frame — `overlay` after `scale`, `tpad` as today. The caption strip and provenance stay on screen for the whole window. The old whole-frame path remains behind `--clip-fullframe` for the pilot's video.
2. **`capture.py` — `record_steps <selector> [spacing_ms]`**: polls the join card's `.join-step-list`, takes one shot whenever the set of `done`/`current`/`failed` classes changes, spaces the shots at the fixed interval in the concat list, and stops when the card's state badge reads `ACTIVE` (or `FAILED`, which aborts the beat). Also `crop <selector>` as a per-beat field applied to every frame and clip shot (the pilot's crop, promoted from a per-action hack to a field), and `type <selector> <text>` for the decision reference.
3. **`qa_deck.sh`**: every `demo_slide` caption contains at least one word absent from all theory slides of the same video (the cue-vocabulary rule, checked instead of remembered); every frame's aspect ratio is card-shaped (width/height between 1.2 and 3.5) so a full-viewport frame fails the build.
4. **`scripts/demo-capture.sh --video 5.4|5.5|5.6|reveals`**: selects the beats file and the host-beat section; `--all` runs them in the order reveals → 5.5 → 5.6 → 5.4 (the join last, because it dirties and restores the tree). Output `out/demo-takes/<video>/` and one `takes.json` per video.

Exit: the pilot's 5.6 v0.2 deck re-renders with the clip composited and the caption visible throughout (visual check of the frame at cue+10 s).

### WP2 — 5.4 beats: an agency arrives

Preconditions inside the run: stack up and green; `scripts/join.sh up` with the filming store (D4); `git status --porcelain` empty (D5); `console.sh reset`.

| id | kind | crop | actions | assert | caption |
|---|---|---|---|---|---|
| `J0-refused` | frame | `.join-request:first-child` | host: `POST /requests` with the exercise-2 payload but `code: "PT SB"`; browser: `goto /?filming=1`, `tab join`, `wait .join-rejection` | `.join-state` reads `REJECTED`; `.join-rejection` contains `is not a valid X-Road identifier` | "A member code with a space: refused before anything reaches the bus." |
| `J1-submitted` | frame | `.join-request:first-child` | host: `POST /requests` with the exercise-2 PTSB payload (hosted on `ss-plr`); browser: `wait .join-diff` | `.join-state` reads `SUBMITTED`; `.join-diff` contains `configs/member-ptsb/ptsb.yaml` and `manifest.yaml`; no `configs/member-ptsb/` on disk (host check) | "The request and the exact diff it would write — nothing written yet." |
| `J2-no-minute` | frame | `.join-request:first-child` | `click .join-approve-btn` with the reference field empty; `wait .join-decision-error` | error text contains `Decision reference is required: admission is a Steering Committee decision`; state still `SUBMITTED` | "Approve without a minute reference: refused. Admission is a committee decision." |
| `J3-join` | clip | `.join-request:first-child` | `type .join-decision-reference RIHA-2026-001`; `click .join-approve-btn`; `record_steps .join-step-list 1500`; `record_for 2500` | `.join-state` reads `ACTIVE`; `.join-verified.ok` present with `verified: true — a real r1 call reached the backend`; every `.join-step` has class `done`; `onboarding/ptsb/01-admission.md` exists on disk | "Minute RIHA-2026-001 recorded: the steps run themselves, then a real call proves the backend answers." |
| `J4-admission` | text (host) | — | `cat onboarding/ptsb/01-admission.md` | contains `RIHA-2026-001` and the request id | "The admission record: which decision admitted PTSB, and when." |
| `J5-hosted` | text (host) | — | `scripts/member.sh list` | a `ptsb` row with `joined` and `ss-plr`; the three canonical rows read `canonical` | "PTSB on the bus, hosted on PLR's server — origin: joined, never canonical." |
| `J6-proved` | text (host) | — | `scripts/acceptance.sh --summary --only 2.7` | `2.7.r1(PTSB.awards-api)`, `2.7.deny(…)`, `2.7.fields(…)`, `2.7.catalogue(…)` all `PASS` | "Reachable by PNEA, refused to everyone else, exactly the contract's fields, listed on the bus." |
| `J7-unjoin` | text (host; GitBook only) | — | `DELETE /members/ptsb`; poll to `RETIRED`; `acceptance.sh --summary --only 2.7.unjoin` | `2.7.unjoin(PTSB)` and `2.7.unjoin.catalogue(PTSB)` `PASS`; `onboarding/ptsb/99-retirement.md` exists | not a video slide |

Teardown inside the run: `git checkout -- manifest.yaml hurl/ && git clean -fd configs/member-ptsb onboarding/ptsb && python3 hurl/generate.py`; assert `git status --porcelain` empty and `hurl/topology.json` equals the golden; `scripts/join.sh down`; delete the filming store; `console.sh reset`; `acceptance.sh --summary --only 2.6` green (the federation is as it was).

Exit: two consecutive `demo-capture.sh --video 5.4` runs give byte-identical frames J0–J2, the clip's still and texts J4–J6 (J3's MP4 and `takes.json` excepted); the tree is clean after each.

### WP3 — 5.5 beats: the federation, stood up

All host beats; no browser.

| id | kind | source | assert | caption |
|---|---|---|---|---|
| `T0-containers` | text | `docker compose ps --format 'table {{.Name}}\t{{.Status}}'` filtered to `cs`, `testca`, `ss-*`, `app-*` | four `ss-*` rows and `cs`, `testca` all `healthy` | "One Central Server, one Test CA, four Security Servers — all healthy." |
| `T1-stood-up` | text | the `stage` lines of `demo.sh` (steps 0–4, static) followed by `out/deploy-timings.txt` rendered as `containers healthy 100 s · Hurl run 290 s · total 390 s` | every phase key present and total = sum | "From zero to a running federation on this run: measured, not estimated." |
| `T2-members` | text | `scripts/member.sh list` | rows `pnea`, `plr`, `pnia` `canonical`, each on its own `ss-*`; no `ptsb` | "Three members and the owner, each behind its own Security Server." |
| `T3-registered` | text | `scripts/acceptance.sh --summary --only 2.1` then `--only 2.x` | `2.1.*` PASS (paths live); `2.x(PNEA:EXAMS)`, `2.x(PLR:ENROLMENT)`, `2.x(PNIA:IDENTITY)` REGISTERED; `2.x.acl(*)` exact; `2.x.addons(*)` RUNNING | "Registered on the Central Server, grants exact, monitoring add-ons running — the federation is real." |

`T1` is the one capture that is not byte-stable (D8); `takes.json` marks it `measured: true`. If the stack was not deployed in this session, `demo-capture.sh --video 5.5` refuses unless `--allow-stale-timings` is given, so the timings on the slide come from the deploy that produced the other captures.

### WP4 — Reveals for 5.2, 5.3 and 5.7 (same session, no new mechanics)

| id | video | kind | source | caption |
|---|---|---|---|---|
| `REQ-1` | 5.2 | artefact | `onboarding/pnea/02-requirements.md` | "Six items, stated by the applicant, rendered into its record." |
| `REQ-2` | 5.2 | text | the `member_requirements` block of the exercise-2 payload | "The same six travel in the join request — the front of onboarding." |
| `SLA-1` | 5.3 | artefact | `onboarding/plr/03-sla/enrolment-api.md` | "Five terms and a signatory, one record per published service." |
| `SLA-2` | 5.3 | frame, crop `.catalogue-card:has-text('enrolment-api')` | tab 5 | "Reachable from the service, not only from the member." |
| `P1` | 5.7 | text | start `join-api` once with a temp `deployment.yaml` copy at `posture: production` and no acknowledgement; capture the startup refusal from `docker logs`; restore | "Production posture, permissive key, no acknowledgement: the API refuses to start." |
| `P2` | 5.7 | text | the Summary table of `docs/path-conformance.md` | "What this demonstration is honest about: 41 implemented, 6 simulated, 24 named absences, 4 out of scope." |

Each becomes exactly one slide in its video, placed before *In one sentence*; the theory slide count is otherwise unchanged. `P1` is the only reveal that touches configuration; it runs last and asserts the original `deployment.yaml` is byte-identical afterwards.

### WP5 — Script v0.5 and deck v0.3

**5.4 — "Admit a member to the bus"** (hybrid; 13 slides; ≈420 words)

| # | Slide | Kind | VO |
|---|---|---|---|
| 1 | Title card | section | cold open |
| 2 | Hook — "Everything so far was preparation. This step admits an agency." | hook | ~45 |
| 3 | Two configuration artefacts — the subsystem, the access-control list | panels (kept) | ~55 |
| 4 | One pattern, wrapped in a repeatable process — Requirements → Approval → **Admission** → Registration → Conformance → First service | flow (six cells) | ~50 |
| 5 | First: a member code with a space is refused | demo J0 | ~30 |
| 6 | Second: the request, and the diff it would write | demo J1 | ~30 |
| 7 | Third: approve without a minute — refused | demo J2 | ~30 |
| 8 | Fourth: the join runs itself, then proves the backend answers | demo J3 (clip) | ~40 |
| 9 | Fifth: the admission record | terminal J4 | ~20 |
| 10 | Sixth: on the bus, hosted, and proved | terminal J5 + J6 (two captures on one slide, `terminal_slide` accepts a list) | ~35 |
| 11 | Conformance is the gate between registration and going live | rows (kept, trimmed to three rows) | ~45 |
| 12 | In one sentence + practice box (prompt + "Exercise 2 in the build pack does this on your own stack") | big | ~35 |
| 13 | Sources | sources | — |

Dropped: "Admit, validate — then the join runs itself" and "Registering a member is configuration, not paperwork" (both are now *shown*, slides 5–10). The AI tip stays the bb-config-gen registration prompt; its safeguard gains one line: on a bus you operate, the validator refuses a bad identifier — the `[confirm]` is for a bus you are joining.

**5.5 — "Stand up the federation"** (hybrid; 10 slides; ≈400 words)

| # | Slide | Kind | VO |
|---|---|---|---|
| 1 | Title card | section | cold open |
| 2 | Hook — "Now the live platform the members connect to." | hook | ~45 |
| 3 | One registry, one gateway per member, one trust anchor | federation diagram (kept; the before picture) | ~70 |
| 4 | Bring it up from the run book, in order — Central Server · Test CA with OCSP and TSA · members on the registry · the anchor · each Security Server, its certificate, its registration **approved on the Central Server** · services · grants | rows (rewritten) | ~70 |
| 5 | First: six containers, all healthy | terminal T0 | ~25 |
| 6 | Second: from zero to running, measured | terminal T1 | ~30 |
| 7 | Third: three members and the owner, each behind its own server | terminal T2 | ~30 |
| 8 | Fourth: registered, grants exact, monitoring running | terminal T3 | ~35 |
| 9 | In one sentence + practice box (run book prompt + "Exercise 5 rebuilds it from zero") | big | ~35 |
| 10 | Sources | sources | — |

Dropped: "Standing up the federation is where the abstract becomes real" (slides 5–8 are that). `HOSTING` stays the single-host line (D7).

**Deck builder `_v03.py`**: `DEMO_DIR` now has per-video subfolders and per-video `takes.json`; the 5.2/5.3/5.7 sections each add one reveal slide; the six-cell `ONBOARDING` flow; `terminal_slide` list form. **Bundle**: slide-spec tables declare the evidence kind per slide for 5.2–5.7; §5 calibration gets the count (5.4: three frames, one clip, three text; 5.5: four text; reveals: one frame, five text) and D1's retitle. Gates: `qa_bundle.py` (hybrid cap ≈450 plus the banned-word check), `vo_diff.py`, `qa_deck.sh` with WP1's checks, `split_module_deck.py`.

### WP6 — Audio, cues, render

1. Briefs via `make_brief.py` (WP0's rules; demo blocks for slides 5–10 of 5.4 and 5–8 of 5.5, ordinals in the substance); `kp-notebooklm-audio`; transcript; Step 6 audit with the order report. Accept on: order kept, no second-person opener, no invented analogy, runtime 4:00–5:30.
2. Cues by hand from the SRT (`draft_cues.py` as a first pass only); `Clips_v0.N.txt` for 5.4 slide 8 (`@` geometry from the notes).
3. Render both; frames at every cue, at the clip's end, and one mid-clip to confirm the caption is on screen (WP1).

### WP7 — Review, tracker, next

1. Per video: order kept? frames legible at ~400 px with the crops? capture byte-stable? Same half-page format as the 5.6 review.
2. `tracker.yaml`: `demo_takes: v0.2` on 5.2–5.7 (reveals included), regenerate.
3. Decide the GitBook walk-through: the `--all` run already produces every beat including `J7-unjoin`; the walk-through is a `record_steps`-style continuous session over the same manifests, planned separately.

---

## 6. Commands, end to end

```
# WP0 — 5.6 re-roll (once)
python3 $KIT/kp-audio-brief/scripts/make_brief.py … 5.6   # ordinals in substance, opener rule
# … take, audit, accept

# capture session (one warm stack, clean tree)
cd 10-Knowledge-Products/KP2-GIF/KP2-build-pack
scripts/acceptance.sh --summary                    # green, yields the NIN
scripts/demo-capture.sh --all                      # reveals → 5.5 → 5.6 → 5.4; ~6 min; tree clean after
cp -r out/demo-takes ../videos/module_5/en/demo/KP2_M5_Demo_v0.2

# deck + gates
cd ..
python3 build_kp2_module5_deck_v03.py
bash    $KIT/kp-deck-builder/scripts/qa_deck.sh   videos/module_5/en/decks/KP2_M5_Deck_v0.3.pptx
python3 $KIT/kp-deck-builder/scripts/vo_diff.py   build_kp2_module5_v05.js videos/module_5/en/decks/KP2_M5_Deck_v0.3.pptx
python3 $KIT/kp-bundle-qa/scripts/qa_bundle.py     build_kp2_module5_v05.js
python3 $KIT/kp-deck-builder/scripts/split_module_deck.py videos/module_5/en/decks/KP2_M5_Deck_v0.3.pptx videos/module_5/en/decks/split_spec.json

# per video (5.4 shown): brief → take → srt → cues → mp4
python3 $KIT/kp-slidecast/scripts/slidecast.py videos/module_5/en/decks/KP2_M5_5.4_Deck_v0.3.pptx \
        videos/module_5/en/audio/KP2_M5_5.4_Audio_v0.1.m4a videos/module_5/en/cues/KP2_M5_5.4_Cues_v0.1.txt \
        videos/module_5/en/video/KP2_M5_5.4_Video_v0.1.mp4 videos/module_5/en/cues/KP2_M5_5.4_Clips_v0.1.txt
```

---

## 7. Risks and fallbacks

| Risk | Signal | Fallback |
|---|---|---|
| The join leaves the tree dirty or `topology.json` off the golden | WP2 teardown assertion | Run the join beats in a `git worktree` of the same commit mounted into `join-api`; the provenance commit is unchanged. Second choice only — the worktree doubles the mounts. |
| Approval refused on a dirty checkout mid-run | `DirtyCheckoutError` in J3 | The run's own precondition; abort and report, never `--force`. |
| `record_steps` misses a fast step transition | fewer shots than steps | Poll at 250 ms; the clip is assembled from the step *set*, so a missed intermediate only shortens the clip. |
| A hosted join flakes on `2.x(PNEA:EXAMS) REGISTERED` propagation | known flake, `production-delta.md` | `acceptance.sh` retries; the beat's assertion waits on `.join-verified.ok`, not on a timer. |
| Composited clip too small to read at phone width | WP7 check | The crop already isolates the card; if still unreadable, the clip slide gets the wider `DEMO_AREA_CLIP` geometry with a shorter caption. |
| Hosts number the observations but reorder two | order report | Accept if only adjacent text captures swap (J5/J6 share a slide for this reason); re-roll otherwise. |
| ITU objects to the frames (calibration) | Tuesday | 5.5 is unaffected (text only); 5.4 falls back to text captures of the join record (`GET /requests/{id}` rendered) with the clip dropped — the lesson survives, the motion does not. |
| 5.8 | — | Out of scope until `scripts/opmon-export.sh` exists (metadata-only export of `getSecurityServerOperationalData` with a no-NIN/no-name test); planned separately. |

---

## 8. Done when

- `scripts/demo-capture.sh --all` runs twice on a clean tree, leaves it clean, and produces byte-identical frames and texts apart from the two documented exceptions (clip MP4s, `T1` timings).
- Deck v0.3 builds from `.js` v0.5 + `KP2_M5_Demo_v0.2` with all gates green; 5.4 has seven evidence slides, 5.5 four, 5.2/5.3/5.7 one each.
- 5.4 and 5.5 render with the clip composited inside the slide and every demo slide within ±10 s of the hosts' beat; one accepted take each.
- The bundle declares every evidence slide's kind and carries D1's retitle as a calibration line.
- Two half-page reviews filed; tracker regenerated.
