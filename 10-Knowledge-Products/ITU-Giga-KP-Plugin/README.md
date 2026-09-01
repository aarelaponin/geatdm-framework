# ITU-Giga-KP Plugin

**Production kit for the FiscalAdmin OÜ — ITU/Giga Knowledge Products contract** (RFQ-S-GIGA-2026-022, Purchase Order #334304).

The contract produces four Knowledge Products on Education Digital Transformation. Each KP is decomposed into modules; each module into subtopics (1.1, 1.2, …); each subtopic ships as one ~5-minute standalone video plus written GitBook content plus an embedded AI usage prompt. This kit encodes the discipline that makes each module land close to deliverable quality on the first draft instead of after three revision cycles.

It is modelled on the `interop-ra-to-rfp` kit in `08-Interoperability/RA-to-RFP-Plugin/`: one **author** skill plus dedicated **gate** and **mechanic** skills that the author skill hands off to.

## The two families

KP1 taught how to **plan** — its deliverable is a video bundle. KP2–4 teach how to **build** that plan along PAERA's three implementation tracks (Interoperability, DPI, Service delivery) — their deliverable is a video bundle **plus a runnable build pack** that stands a Progressa solution up on the Linkup (X-Road) + Joget stack. The KP1 skills apply to every module; three more skills add the build-pack side for KP2–4.

## The skills

| Skill | Role | Use when |
|---|---|---|
| `itu-giga-kp-bundle` | **Author** | Produce or revise a KP module script bundle — the full subtopic structure, scripts, slide specs, AI prompts, metadata. Owns the audience lock, the eight ITU compliance rules, the two structural arguments, and (Step 10) the implementation-KP authoring mode. |
| `kp-build-render` | **Mechanic** | Build the Node.js docx and verify it — docx install, `NODE_PATH`, `node build`, `soffice` → PDF → page images. Removes the per-module setup friction. |
| `kp-deck-builder` | **Mechanic** | Build the module's .pptx decks on the ITU template (shipped with the skill as `scripts/ITU_ppt_template.pptx`) — one combined deck with the voice-over in speaker notes, split per-video decks with title cards, and the scripts-only companion .md. Owns the template's layout indices, the module-scoped numbering rule, the deck grammar and the educational design rules. Feeds `kp-audio-brief` and `kp-slidecast`. |
| `kp-audio-brief` | **Mechanic** | The NotebookLM fallback path, and the Step 6 audit that runs on both paths. Steer the subtopic's narration to the deck — write the audio brief (the notebook's sole source) plus the customization prompt, then audit the take on runtime, framing, terminology and filler. Owns the framing lock and the per-slide time budget. Consumes the deck from `kp-deck-builder` and the SRT from `kp-scribe-transcribe` (or `kp-whisper-transcribe` offline); feeds `kp-slidecast`. |
| `kp-notebooklm-audio` | **Mechanic** | Step 4 in one command: create or reuse the subtopic's notebook, **reset its sources so the current brief is the only one**, apply the prompt file's customization block verbatim, generate Deep Dive at Shorter length, download to the next free `…_Audio_v0.«v».m4a`. No API key — your own Google web session via `notebooklm-py`, pinned. Automates the clicking, never the judgement; the manual browser flow stays the fallback. |
| `kp-scribe-transcribe` | **Mechanic** | Transcribe a narration take (`.m4a`) to the `.srt` that `kp-audio-brief` Step 6 audits, using the ElevenLabs Scribe v2 API — one command, key in the macOS Keychain, diarization turned into cue boundaries, and a local credits ledger that warns before a batch runs dry. Run whenever a fresh take lands in a module's `audio/` folder with no matching `.srt`. |
| `kp-whisper-transcribe` | **Mechanic** *(fallback)* | The same job with local `openai-whisper` — no upload, no API key. Use offline, when the key is unavailable, or when the take must not leave the machine. Covers this Mac's install and certificate failure modes. |
| `kp-slidecast` | **Mechanic** | Author the slide cue file by matching the narration SRT to the slides, then assemble the per-video deck + audio into the .mp4. Owns the cue/video folder conventions, the rule that every new audio version gets a new cue file, and ffprobe + extracted-frame verification. |
| `kp-citation-verify` | **Gate** | Drive every PAERA citation and paraphrased term from DRAFT → VERIFIED against the real PAERA document (and, for KP2–4, every config's spec citation), before a module is shared. |
| `kp-bundle-qa` | **Gate** | Run the ITU compliance QA gate after any build or edit — forbidden strings, seven-element completeness, numbering, no in-video intros/outros, both structural arguments, metadata and word-count checks, plus a fresh-eyes render review. Greps the build pack too. |
| `kp-build-pack` | **Mechanic** *(KP2–4)* | Scaffold and assemble the runnable build pack (configs / prompts / scripts / acceptance / runbook / manifest) that ships alongside the video bundle. |
| `bb-config-gen` | **Generator** *(KP2–4)* | Turn a Building-Block spec + a Progressa service brief into the configuration that wires the block, routing to the right engine (X-Road / mtca / joget-*). The IR's "bb-decompose". |
| `kp-solution-verify` | **Gate** *(KP2–4)* | Confirm the build pack is complete and actually runs — static manifest completeness, then the live acceptance suite on the stack. A pack is UNVERIFIED until it runs. |
| `kp-curriculum-qa` | **Gate** *(cross-KP)* | The level above the per-module gates: does a whole KP cohere as a curriculum, and do several KPs cohere as a programme? Competency-coverage matrix (the gap finder), terminology + PAERA-citation consistency across modules and KPs, plus a fresh-eyes subagent pass. |

## The workflow

```
                 ┌─────────────────────────────────────────────┐
   lock structure│  itu-giga-kp-bundle  (author the module)     │
        ───────► │  references/: paera-anchor-map,              │
                 │  register-transposition, ai-prompt-patterns  │
                 └───────────────┬─────────────────────────────┘
                                 │ build script ready
                                 ▼
                 ┌─────────────────────────────────────────────┐
                 │  kp-build-render   (node build → docx → PDF) │
                 └───────────────┬─────────────────────────────┘
                                 ▼
        ┌────────────────────────┴────────────────────────┐
        ▼                                                  ▼
 ┌──────────────────────┐                      ┌──────────────────────────┐
 │ kp-citation-verify   │                      │ kp-bundle-qa             │
 │ (PAERA fidelity)     │                      │ (ITU compliance gate)    │
 └──────────┬───────────┘                      └────────────┬─────────────┘
            └───────────────► fixes go to the build script ◄┘
                              (never edit the docx), then re-build & re-gate
```

Alongside the docx track runs the video track: the same script bundle becomes the decks, the decks
steer the generated narration, and the narration's transcript times the slides.

```
 script bundle ──► kp-deck-builder ──► module deck + per-video decks (.pptx)
                                                │
                                                ▼
                                        kp-audio-brief
                                                │  audio brief + NotebookLM prompt
                                                ▼
                                      NotebookLM (browser)
                                                │  take (.m4a)
                                                ▼
                                     kp-scribe-transcribe
                                                │  .srt  (offline: kp-whisper-transcribe)
                                                ▼
                              kp-audio-brief Step 6  (srt_drift_check:
                                                │     runtime, framing, terminology)
                                                │ passes
                                                ▼
                                          kp-slidecast
                                    cue file ──► slidecast.py ──► .mp4
```

Same cardinal rule, one layer over: **fixes go to the audio brief, never to the audio.** Editing
the waveform or the SRT is reverted by the next re-roll.

The cardinal rule, inherited from the contract's build-script convention: **fixes go to the build script and the spec, never to the docx.** Every gate emits a list of edits to apply upstream, then you re-render.

## Relationship to the contract memory

The authoritative project memory lives in the contract tree at `itu-knowledge/CLAUDE.md` (audience lock, the eight ITU compliance rules, the two structural arguments, scope boundary, visual vocabulary, anti-patterns). These skills operationalise it. If a skill and the CLAUDE.md ever conflict, the CLAUDE.md wins and the skill is updated.

## Installing

This folder is the version-controlled **source of truth** for the kit. To use the skills live in Claude, install the plugin via the app's plugin/marketplace mechanism (Settings → Capabilities), or package the folder as a `.plugin` archive. Editing the files here does not change an already-installed copy — re-install or re-sync after changes.

---

For KP2–4 the flow extends: after authoring, `kp-build-pack` scaffolds the runnable pack, `bb-config-gen` fills its configs from public specs, and `kp-solution-verify` proves it runs — in addition to `kp-citation-verify` and `kp-bundle-qa` on the video. See `itu-giga-kp-bundle` Step 10 and `references/implementation-kp-pattern.md`.

---

*FiscalAdmin OÜ. Kit v0.8.0, 29 August 2026 — video-track Step 4 stops being a browser session. `kp-notebooklm-audio` drives consumer NotebookLM through `notebooklm-py` on the operator's own Google session: notebook find-or-create per subtopic, **sources reset before every generation** so a stale brief cannot steer a take, the prompt file's Step 3 block applied verbatim, Deep Dive at Shorter length, atomic download to the next free version, and a take log. Nothing about the generated take changes — the brief still steers it and Step 6 still gates it; what is automated is clicking, waiting and renaming, which is what made the audit's re-roll loop expensive. The manual flow stays documented as the fallback. `kp-interview-tts` (scripted Gemini multi-speaker TTS, v0.7.0) is **parked**: its pilot decayed 24 dB across a 4-minute take and the fix could not be validated on a free-tier key. v0.7.0, 29 August 2026 — video-track Step 4 forks. `kp-interview-tts` is the new default: Claude authors the subtopic as a two-speaker expert-interview script, a stdlib linter checks it against `srt_drift_check.py`'s own word lists (imported, not copied) before anything is paid for, and one command synthesizes the whole take with the Gemini multi-speaker TTS API (~$0.10 a take, ~$1.10 an EN module). Runtime, terminology and framing become properties of a text file we diff and re-roll rather than of a generation we audit afterwards; Step 4b (Descript voice swap) does not run at all, since the voices are chosen at synthesis time. NotebookLM briefing stays documented as the fallback and its Step 6 SRT audit is the verifier on both paths. Awaiting the KP1 M1 1.1 EN pilot A/B before rollout. v0.6.0, 29 August 2026 — video-track Step 5 moved to `kp-scribe-transcribe` (ElevenLabs Scribe v2 over the API, key in the macOS Keychain, speaker turns become cue boundaries, local credits ledger); `kp-whisper-transcribe` stays as the offline fallback. The move also fixed a silent defect: Whisper's cue end times are not where speech stops, so the pause list `srt_drift_check.py` offers the cue author as slide-cut points was wrong — 0 reported against 15 real silences on KP1 M1 1.2. Scribe's word-level timings make that number true. v0.5.1, 20 August 2026 — the ITU .pptx template now ships inside `kp-deck-builder` instead of being assumed present in the repo root, so the deck skill works on any installed copy. v0.5.0 added the video track end to end: `kp-deck-builder` (ITU-template decks, voice-over in speaker notes, per-video splits), `kp-audio-brief` (audio brief + NotebookLM prompt + take audit) after the first unbriefed take on KP1 M1 1.1 came back 5:31 against a 4:00 spec with the audience framing inverted, `kp-whisper-transcribe` (local take → SRT, no upload) and `kp-slidecast` (cue file + deck/audio → mp4). v0.3.0, 27 June 2026 — KP1 + KP2 complete; added the cross-KP curriculum-QA gate (kp-curriculum-qa) and fixed the Markdown-generator persona bug it surfaced. v0.2.0 added the implementation-KP extension (kp-build-pack, bb-config-gen, kp-solution-verify) for KP2–4. Created v0.1.0 on 2 June 2026.*
