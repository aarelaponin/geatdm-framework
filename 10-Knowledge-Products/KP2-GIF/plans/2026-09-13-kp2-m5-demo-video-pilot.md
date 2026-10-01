# KP2 Module 5 — implementation plan: the theory + demo video format, piloted end to end on 5.6

Source: `10-Knowledge-Products/KP2-GIF/KP2_M5_Theory_Demo_Video_Plan_2026-09-13.md` (§1 approach, §2 beats, §3 artefact changes) and `KP2_M5_Script_vs_Pack_Review_2026-09-10.md` §2 (script corrections).
Pilot video: **5.6 "Run the once-only exchange, live"** — the one video whose demo block needs every evidence kind (text capture, frame, clip) and has no dependency on the Tuesday hosting decision.

---

## 1. Goal and non-goals

**Goal.** One command sequence — stand up the pack in Docker, capture the 5.6 beats, build the v0.2 deck from the takes, make the take, cue it, render the MP4 — produces `KP2_M5_5.6_Video_v0.1.mp4` in which the demo block is real evidence from the running federation, and every step is a script under source control that can be re-run after a pack change, a script edit or a new audio take. The pilot exists to answer three questions: (Q1) does the demo block survive the NotebookLM remix; (Q2) do the frames and the one clip read on a phone-sized YouTube player; (Q3) is the capture reproducible run to run (same beats, same observations, byte-stable text captures).

**Non-goals.** No changes to 5.1–5.5 or 5.7–5.10 (they are rebuilt from the same `_v02.py` later, unchanged apart from the §2 corrections that ride along in the .js). No French. No GitBook page. No un-parking of `kp-interview-tts` unless Q1 fails twice (§7). No production/droplet target — the capture runs against `docker-local` on the Mac. No KP2 tracker changes beyond the one field in WP7.

---

## 2. What the artefacts look like today — constraints that shape the work

**The pack is filmable as it stands.** `scripts/demo.sh` stands the federation up from zero in ~10 min (~11 GiB RAM, ~15 GB disk); `scripts/console.sh up` serves the console at `127.0.0.1:8090`; the guided `▶ Run the demonstration` walks tabs 1→2→3 with fixed 1.8 s beats; tab 1's **Break the proof** revokes PNEA's grant on `identity-api`, polls until the denial is live (`server_conf_cache_period: 5`), re-runs the exchange, and **Restore** reverses it; `console.sh reset` and the 120 s watchdog guarantee a clean state between takes; `acceptance.sh` refuses to run on a dirty journal. Every `/api/*` route requires the `X-KP2-Console: 1` header — Playwright driving the page gets it for free; a capture that calls the API directly (for text captures) must send it.

**Nothing in the pack records itself.** No Playwright, no screenshot path, no `--summary` on `acceptance.sh`; the console's context bar shows a wall-clock timestamp and the tally badge counts per session — both non-deterministic between takes.

**The deck is built from a script that already fails loudly.** `build_kp2_module5_deck_v01.py` (79 KB) writes the combined deck from `deck_lib` slide kinds; every VO string must equal the .js (`vo_diff.py`); the practice-box overlap check aborts the build. There is no image-bearing slide kind in `deck_lib` — `demo_slide`/`terminal_slide`/`artefact_slide` are new. `split_module_deck.py` cuts per-video decks by `split_spec.json` ranges (5.6 = slides 41–48 today).

**The narration is a remix and the cues are found afterwards.** `kp-notebooklm-audio` builds the take from an audio brief whose §2 quotes each slide's substance in slide order ("the audio follows the slide order in §2"); `draft_cues.py` locates each slide in the SRT by the slide's *distinctive vocabulary* (`coverage_check.slide_terms`) and snaps to pauses. Two consequences: the brief is where the demo block's order instruction goes, and **every demo slide must carry distinctive on-slide text** (a caption strip), or `draft_cues.py` cannot find it.

**The slidecast is stills over one audio track.** `slidecast.py deck.pptx take.m4a cues.txt out.mp4` renders the deck to PNGs and holds each for its cue window via the ffmpeg concat demuxer. Frames cost nothing; a clip needs the segment path in WP4.

**The module's video tree is two folders deep.** `videos/module_5/en/` has `decks/` and `scripts/` only; `notebooklm/`, `audio/`, `cues/`, `video/` and the new `demo/` do not exist yet.

---

## 3. Decisions (defaults shown; D1–D3 can be taken without the Tuesday call)

| # | Decision | Default | Why |
|---|---|---|---|
| D1 | Where the browser runs | **A compose service `capture` under profile `film`**, image `mcr.microsoft.com/playwright/python:<pinned>`, on the same network as `console`, mounting `out/demo-takes/` read-write and the pack read-only. Host-venv Playwright is the fallback. | Linux Chromium fonts and rendering are identical run to run and machine to machine — Q3 is unanswerable with a host browser. Costs one ~2 GB image pull. |
| D2 | Which NIN | **The one `acceptance.sh` picked** — read from `out/application-<nin>.json` after the acceptance run — so `C7` and the console frames show the same learner. Capture takes `--nin`. | One learner across the block; no chance the text capture and the frames disagree. |
| D3 | Clip playback when the cue window is longer than the clip | **Play once, freeze on the last frame** (`tpad=stop_mode=clone`); cut, never speed up, if shorter. | Survives the remix: an early clip holds its end state while the hosts catch up. |
| D4 | Frames as pixels under ITU §3.i | **Proceed; the pilot is the calibration material.** The bundle's slide spec declares each demo slide's kind. | Text captures are inside the rule; the five frames and one clip are what ITU has to see to decide. |
| D5 | 5.6 slide count and word budget | **12 slides, ≈350 VO words** (down from 8 / ≈560): the drawn `call_flow` stays as the "before" picture; the "Every layer" rows slide is replaced by frame C4; the "proving slice" block slide is cut; the dual go-live panels slide stays as the synthesis after the block. | Screen-led shape from the 10 Sep review; the block needs the time. |
| D6 | Deterministic UI | **`?filming=1`** hides the context-bar timestamp and the session tally, disables the hover states on header buttons, and exposes `window.kp2film.step()` so the counter's reveal animation is stepped by the capture, not by `STAGGER_MS` timers. | Q3: two runs must produce the same frame. |

---

## 4. Work packages and order

| WP | Delivers | Touches | Size |
|---|---|---|---|
| WP1 Pack: filmable surface | `?filming=1`, `acceptance.sh --summary`, `manifest.yaml` video_ref | `apps/console/static/app.js`, `index.html`, `scripts/acceptance.sh`, `manifest.yaml` | ~2 h |
| WP2 Pack: capture run | `capture` compose service, `apps/console/capture/{capture.py,beats.yaml}`, `scripts/demo-capture.sh`, `out/demo-takes/` + `takes.json` | `docker-compose.yml`, new files, `requirements-dev.txt`, `preflight.sh` | ~4 h |
| WP3 Kit: deck builder | `demo_slide`, `terminal_slide`, `artefact_slide` in `deck_lib.py`; `qa_deck.sh` checks | `kp-deck-builder/scripts/deck_lib.py`, `qa_deck.sh` | ~3 h |
| WP4 Kit: slidecast clips | `clips.txt` input; per-segment render; verify frame at cue + clip end | `kp-slidecast/scripts/slidecast.py`, `SKILL.md` | ~2 h |
| WP5 Script + deck for 5.6 | `build_kp2_module5_v04.js` (5.6 only rewritten; §2 corrections elsewhere), `build_kp2_module5_deck_v02.py`, v0.2 decks, `split_spec.json` | `KP2-GIF/` | ~3 h |
| WP6 Audio + cues + render | brief with the demo-block instruction, the take, SRT, cues, `KP2_M5_5.6_Video_v0.1.mp4` | `videos/module_5/en/{notebooklm,audio,cues,video}/`, `kp-audio-brief` (order check) | ~2 h + take time |
| WP7 Review and decide | the Q1–Q3 answers, tracker field, go/no-go for 5.4/5.5 | `video-tracker/tracker.yaml`, a short review note | ~1 h |

Order: WP1 → WP2 (needs the stack up) in one Docker session; WP3 and WP4 in parallel with WP2 (kit-only, no Docker); WP5 once takes exist; WP6; WP7.

---

## 5. Work package detail

### WP1 — Pack: the filmable surface

1. **`?filming=1`** in `app.js`: read the query flag at init; when set — hide `#context-bar` timestamps and `#tally-badge`; add class `filming` on `<body>` (CSS: no hover transitions); replace the counter's timed reveal with a manual stepper (`window.kp2film = { step(), done() }`) so the capture takes the *before* frame (rows blank, "Without the bus, this is ten questions."), then steps to *after*. Nothing else changes; a normal visitor never sees the flag.
2. **`scripts/acceptance.sh --summary`**: after the existing run, print one line per check in the form `2.6.4  PASS  unauthorised caller (PLR:ENROLMENT via ss-plr) denied by the provider-side ACL` — the id, the verdict, the sentence the acceptance doc already uses. No colour codes. This is what `C8` renders; keep it stable (a golden test in `tests/` compares the format, not the timings).
3. `manifest.yaml`: `join-member: video_ref: "5.4"` (from the 10 Sep review). Not needed by the pilot; done here because it is the last `"?"` in the file.

Acceptance: `scripts/verify.sh --fast` green; `console.sh up` then `curl -H 'X-KP2-Console: 1' localhost:8090/api/health` unchanged; the page with `?filming=1` renders without the timestamp.

### WP2 — Pack: the capture run

1. **`docker-compose.yml`** — service `capture`, `profiles: ["film"]`, image pinned by digest, `network_mode` on the console's network, mounts: pack root read-only at `/pack`, `out/demo-takes` read-write, `apps/console/capture` read-only. Entry `python3 /pack/apps/console/capture/capture.py --beats /pack/apps/console/capture/beats.yaml --console http://console:8090 --nin "$KP2_FILM_NIN" --out /out`.
2. **`beats.yaml`** — the 5.6 block, one entry per beat: `id`, `kind` (`text` | `frame` | `clip`), `tab`, `actions` (click/step/wait), `assert` (the expected observation, verbatim from `exercises.md`/`acceptance/once-only-exchange.md`), `caption` (the on-slide caption strip — the distinctive vocabulary `draft_cues.py` needs).

   | id | kind | actions | assert |
   |---|---|---|---|
   | `C1-before` | frame | open `?filming=1`, click learner chip for `--nin`, hold before `step()` | progress line reads "Without the bus, this is ten questions."; every provider row blank |
   | `C2-after` | frame | `step()` to completion | `asked 1 · pre-filled 9 / 10`; both provider sections status filled |
   | `C3-receipts` | text | `GET /api/exchange/{nin}` (header set) → render the two `curl` lines and JSON bodies | two calls, both `status_code 200`, `served by ss-pnia` / `ss-plr` |
   | `C4-layers` | frame | switch to tab 2 | four panes present; legal pane contains "PNIA holds but withholds:" with a non-empty list |
   | `C5-allowed-denied` | frame | tab 3, click both Ask buttons, wait for both results | PNEA result `200`; PLR result contains `Server.ServerProxy.AccessDenied` |
   | `C6-break-restore` | clip | tab 1, start recording, click **Break the proof**, wait until PNIA rows show denied and PLR rows still filled, hold 2 s, click **Restore**, wait until refilled, stop | PNIA section denied while PLR section filled (the one-revocation-one-source observation); journal banner visible then cleared |
   | `C7-application` | text | copy `out/application-{nin}.json` (host side, via `demo-capture.sh`) | file exists; `nin` is the only field with `source: citizen` |
   | `C8-acceptance` | text | `scripts/acceptance.sh --summary` (host side) | lines `2.6.1`–`2.6.6` all `PASS` |

   A failed assert aborts the run with the beat id and the observed state; nothing is written for a beat whose assertion failed. The run ends with `POST /api/reset` and a `GET /api/acl` check that live equals configured.
3. **`capture.py`** — Playwright sync API, viewport 1920×1080, `device_scale_factor 1`, `--hide-scrollbars`, colour scheme light; a browser context with `record_video_dir` only for clip beats; per-beat timestamps logged so the clip is trimmed (`ffmpeg -ss/-to`) to the beat's own markers; screenshots as PNG (`full_page: false`). Writes `takes.json`: beat id → file, sha256, kind, caption, `pack_commit` (`git rev-parse` done host-side and passed in), `xroad_version` (from `deployment.yaml`), `captured_at`.
4. **`scripts/demo-capture.sh`** — host wrapper: refuses unless the stack is up and the journal clean; runs `console.sh reset`; reads the NIN from `out/application-*.json` (or `--nin`); `docker compose --profile film run --rm capture`; runs the host-side text beats (`C7`, `C8`); writes `takes.json`; `console.sh reset` again; prints the take list. Secrets guard: greps every `.txt` in the output for the values of `KP2_JOIN_OPERATOR_TOKEN`, `KP2_JOIN_APPLICANT_TOKEN`, the token PIN and the admin password from `.env`, and fails if any appears.
5. `requirements-dev.txt`: `playwright` (host fallback only); `preflight.sh`: report the `film` profile image as optional.

Acceptance: two consecutive `scripts/demo-capture.sh` runs produce identical `.txt` captures (byte-equal) and PNGs whose perceptual hash distance is 0 (Q3); `scripts/acceptance.sh` green afterwards; `takes.json` validates against a small schema in `tests/`.

### WP3 — Kit: three slide kinds and the QA checks

1. `deck_lib.py`:
   - `terminal_slide(prs, head, take_txt, caption, tag, note, max_lines=18)` — title; a `PANEL_GREY`/`LIGHT` panel with a monospaced text frame (Courier New or Menlo 14 pt, no wrapping; lines beyond `max_lines` dropped with a trailing `…` line); the caption strip as the closing line; a provenance footer line in 9 pt grey: `captured from the demonstration federation · X-Road <ver> · pack <sha7> · <date>` read from `takes.json`.
   - `artefact_slide(prs, head, take_md, caption, tag, note)` — a markdown pipe table rendered as a two-column text table with the existing `rows_slide` styling. (Not needed by 5.6; built now so 5.2/5.3 follow without a kit change.)
   - `demo_slide(prs, head, take_png, caption, tag, note, clip=None)` — title; the PNG letterboxed into the content area (12.3" × ~4.6", aspect preserved, thin `SEPARATOR` border); the caption strip below it; the same provenance footer; when `clip` is given, the notes start with `CLIP: <basename>` before the VO.
   - All three call `notes(slide, note)` so `scripts_from_deck.py` and `vo_diff.py` keep working unchanged.
2. `qa_deck.sh` — three new checks over the built deck: every slide whose notes start with `CLIP:` names a file that exists under the demo dir; every demo/terminal slide has the provenance line; the deck's text contains none of the `.env` secret values (same guard as WP2.4, applied to the deck).
3. `deck_diagrams.py` untouched.

Acceptance: a unit test builds a three-slide deck from fixture takes and asserts the notes, the provenance line and the letterbox geometry.

### WP4 — Kit: clips in the slidecast

1. `slidecast.py` takes an optional fifth argument `clips.txt` (`<slide-number> <clip.mp4>` per line). When present, the concat-of-images path is replaced by **per-segment rendering**: for each slide, produce `seg-NN.mp4` of exactly its cue window — a still via `-loop 1 -i slide.png -t <dur>`; a clip via `-i clip.mp4 -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:-1:-1,tpad=stop_mode=clone:stop_duration=<dur-len>" -t <dur> -an`; all segments encoded with the same `libx264 -r 30 -pix_fmt yuv420p` parameters; then concat the segments and mux the narration with the existing `-t <total>`. Without `clips.txt` the current path runs unchanged.
2. Verification step (SKILL.md): in addition to a frame at every cue, extract a frame at `cue + clip_length − 0.5 s` for each clip slide and inspect it — it must show the clip's end state, not a black frame or the first frame.
3. `draft_cues.py`: no code change; document that demo slides are found by their caption-strip vocabulary, so captions must not reuse the theory slides' key terms.

Acceptance: a fixture render with one still, one clip shorter than its window and one longer produces the expected durations (ffprobe) and the expected frames.

### WP5 — Script and deck for 5.6

1. **`build_kp2_module5_v04.js`**: apply the 10 Sep §2 corrections module-wide (topology, mechanism, acceptance naming, per-service SLA, Requirements in the payload — the narration text only; 5.4/5.5 decks are not rebuilt as demo videos in this pilot). Rewrite 5.6's beats to the 12-slide plan:

   | # | Slide | Kind | VO (words) |
   |---|---|---|---|
   | 1 | Title card | section | cold open |
   | 2 | Hook — "The moment the whole framework exists for." | hook | ~45 |
   | 3 | One call — identity from PNIA, enrolment from PLR | `call_flow` (kept: the before picture) | ~70 |
   | 4 | The form before the bus — one field asked | `demo_slide` C1 | ~25 |
   | 5 | The form after — nine fields the learner was not asked | `demo_slide` C2 | ~30 |
   | 6 | Four layers, live — what PNIA sends and what it withholds | `demo_slide` C4 | ~45 |
   | 7 | Same request, two callers — on the bus is not granted | `demo_slide` C5 | ~35 |
   | 8 | Take one permission away — one source fails, the other still fills | `demo_slide` C6 `clip=` | ~40 |
   | 9 | The application, with the provenance of every field | `terminal_slide` C7 | ~25 |
   | 10 | The acceptance check, 2.6.1–2.6.6 — the technical half of going live | `terminal_slide` C8 + the dual go-live line as caption | ~40 |
   | 11 | In one sentence + practice box | `big_slide` | ~35 |
   | 12 | Sources | `sources_slide` | — |

   Demo-beat VO rule: one observation per slide, the visible thing named before its meaning, numbered in the brief ("First… Second…"). C3 (receipts) is dropped from the video and kept for GitBook. The "proving slice" paragraph is folded into the recap sentence.
2. **`build_kp2_module5_deck_v02.py`**: `DEMO_DIR = videos/module_5/en/demo/KP2_M5_Demo_v0.1/`; load `takes.json`; 5.6 section rewritten to the table above; corrected `MEMBERS`/`HOSTING` (text only — 5.5 keeps its drawn slides in this pilot); the build aborts if a referenced take is missing. `split_spec.json` ranges updated by the existing split run.
3. Bundle: the 5.6 slide-spec table gains the element type "Demo evidence (screen frame / text capture / clip)" per slide, and §5 calibration gets the D4 item with the list of exactly five frames and one clip.
4. Gates: `qa_bundle.py` (word cap soft check for the screen-led shape, ≈350), `vo_diff.py`, `qa_deck.sh` with WP3's checks.

Acceptance: `python3 build_kp2_module5_deck_v02.py && bash qa_deck.sh … && python3 vo_diff.py …` clean; the per-video 5.6 deck opens and each demo slide shows the take.

### WP6 — Audio, cues, render

1. **Brief** (`kp-audio-brief` → `notebooklm/KP2_M5_5.6_AudioBrief_v0.1.md`): §2 quotes slides 1–12 as today; slides 4–10 are wrapped in a **Demonstration block** instruction: "Slides 4 to 10 are a recorded demonstration. Describe them as seven numbered observations, in this order, one after the other. Do not skip, merge or reorder them, and describe nothing on screen that is not quoted here." `kp-audio-brief`'s coverage check gains a soft check that the seven captions' key terms occur in the SRT in ascending order (Q1's measurement).
2. **Take**: `kp-notebooklm-audio` → `audio/KP2_M5_5.6_Audio_v0.1.m4a`; transcript via `kp-scribe-transcribe` (or Whisper) → `.srt`; Step 6 audit plus the order check.
3. **Cues**: `draft_cues.py deck take.srt -o cues/KP2_M5_5.6_Cues_v0.1.txt`; check against the audio per `kp-slidecast` Step 1; `clips.txt` beside it (`8 KP2_M5_Demo_v0.1/C6-break-restore.mp4`).
4. **Render**: `slidecast.py KP2_M5_5.6_Deck_v0.2.pptx KP2_M5_5.6_Audio_v0.1.m4a cues.txt video/KP2_M5_5.6_Video_v0.1.mp4 clips.txt`; verification frames at each cue and at the clip end; ffprobe duration equals the audio.

Acceptance: MP4 plays; the demo block's slides change on the hosts' beats within ±10 s; the clip's end state is visible while the hosts are still describing it (D3 doing its job).

### WP7 — Review and go/no-go

1. Watch it at 1080p and at ~400 px wide (Q2): are the form rows, the layer panes and the denied/allowed results legible? If not, the fix is in `beats.yaml` (zoom the page to 125 % for the frame beats) or in the console (`?filming=1` enlarging type), never in post.
2. Record Q1 from the order check and the cue review; Q3 from WP2's double run.
3. `video-tracker/tracker.yaml`: add `demo_takes: v0.1` to 5.6; regenerate.
4. File `KP2-GIF/KP2_M5_5.6_Pilot_Review_<date>.md` (half a page): the three answers, what changed in the plan, and the decision to proceed to 5.4 (join beats J0–J4) and 5.5 (T1–T3) or to stop.

---

## 6. Commands, end to end (the sequence the pilot must reduce to)

```
# pack (Docker), once
cd 10-Knowledge-Products/KP2-GIF/KP2-build-pack
scripts/demo.sh                          # preflight, .env, deploy, seed, acceptance, console  ~10 min
scripts/acceptance.sh --summary          # WP1 — proves the stack and yields the NIN
scripts/demo-capture.sh                  # WP2 — out/demo-takes/ + takes.json  ~3 min
cp -r out/demo-takes ../videos/module_5/en/demo/KP2_M5_Demo_v0.1

# deck
cd ..
python3 build_kp2_module5_deck_v02.py    # WP3/WP5 — combined v0.2 deck from .js + takes
bash  $KIT/kp-deck-builder/scripts/qa_deck.sh videos/module_5/en/decks/KP2_M5_Deck_v0.2.pptx
python3 $KIT/kp-deck-builder/scripts/vo_diff.py build_kp2_module5_v04.js videos/module_5/en/decks/KP2_M5_Deck_v0.2.pptx
python3 $KIT/kp-deck-builder/scripts/split_module_deck.py videos/module_5/en/decks/KP2_M5_Deck_v0.2.pptx videos/module_5/en/decks/split_spec.json

# audio → cues → video (WP6)
# kp-audio-brief → kp-notebooklm-audio → kp-scribe-transcribe, then:
python3 $KIT/kp-slidecast/scripts/draft_cues.py videos/module_5/en/decks/KP2_M5_5.6_Deck_v0.2.pptx videos/module_5/en/audio/KP2_M5_5.6_Audio_v0.1.srt -o videos/module_5/en/cues/KP2_M5_5.6_Cues_v0.1.txt
python3 $KIT/kp-slidecast/scripts/slidecast.py videos/module_5/en/decks/KP2_M5_5.6_Deck_v0.2.pptx videos/module_5/en/audio/KP2_M5_5.6_Audio_v0.1.m4a videos/module_5/en/cues/KP2_M5_5.6_Cues_v0.1.txt videos/module_5/en/video/KP2_M5_5.6_Video_v0.1.mp4 videos/module_5/en/cues/KP2_M5_5.6_Clips_v0.1.txt
```

---

## 7. Risks and the fallback for each

| Risk | Signal | Fallback |
|---|---|---|
| The remix reorders or skips demo beats (Q1) | order check fails, or cues need > ±15 s fudge | Re-roll once with the block instruction tightened to "read the seven captions aloud, in order, then discuss". If it fails again, un-park `kp-interview-tts` for this take only, recorded as two takes (slides 1–3, slides 4–12) joined in ffmpeg. |
| The `filming` stepper changes the counter's look | visual diff against a non-filming run | Keep the flag to hiding non-deterministic elements only; take C1 by screenshotting within the first `STAGGER_MS` of the reveal (less deterministic, acceptable for the pilot). |
| The clip is too long for any plausible cue window | > 45 s from Break to Restore | Trim the Restore half; the lesson is the failure of one source while the other fills. |
| Frames illegible at phone width (Q2) | WP7 check | Page zoom 125 % in `beats.yaml` for frame beats; or crop the frame to the relevant card in `capture.py` (crop is still the real page, not a re-drawing). |
| The `capture` image cannot reach `console` | compose network mismatch | `network_mode: "service:console"` or the host-venv fallback (`playwright install chromium`, `--console http://127.0.0.1:8090`). |
| Docker host too small | `preflight.sh` | The pilot needs the standard 4-server topology; no reduced profile exists. Run on the 16 GB Mac, nothing else heavy open. |

---

## 8. Done when

- `scripts/demo-capture.sh` run twice yields byte-identical text captures and identical frames (Q3).
- The 5.6 deck is built from `.js` + takes with all gates green, and the per-video deck opens with real evidence on slides 4–10.
- `KP2_M5_5.6_Video_v0.1.mp4` renders with the clip freezing on its end state, and the demo block lands within ±10 s of the hosts' beats.
- The bundle's 5.6 slide spec declares the six demo slides' kinds, ready for the ITU calibration item.
- The half-page pilot review is filed with Q1–Q3 answered and a go/no-go for 5.4 and 5.5.
