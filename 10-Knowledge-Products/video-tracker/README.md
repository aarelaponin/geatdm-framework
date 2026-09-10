# Video tracker — where every KP video is in the flow

One page, every topic of every tracked Knowledge Product, one cell per production stage.

```
video-tracker/
├── tracker.yaml         the manifest + the manual state (edit this)
├── render_tracker.py    reads tracker.yaml + scans videos/ on disk → tracker.html, tracker.md
├── tracker.html         the visual tracker (open in a browser) — generated
└── tracker.md           the same as a diffable table — generated
```

## Regenerate

```bash
cd 10-Knowledge-Products
python3 video-tracker/render_tracker.py          # rewrites tracker.html + tracker.md
python3 video-tracker/render_tracker.py --check  # prints the table, writes nothing
open video-tracker/tracker.html
```

Commit all three files together. `tracker.md` is there so a regeneration shows up as a readable
diff in git — that *is* the version history; there is nothing else to keep.

## What is detected vs. what you type

The pipeline for a content video follows `KP1-GEA/videos/README.md` and is read straight off disk,
newest version per stage:

| Stage | Detected from |
|---|---|
| Bundle | `KP«n»_Module«m»_Script_Bundle_v*.md` in the KP folder |
| Script | `«lang»/scripts/KP«n»_M«m»_«x.y»_Scripts_v*.md` |
| Deck | `«lang»/decks/…_Deck_v*.pptx` |
| Brief | `«lang»/notebooklm/…_AudioBrief_v*.md` or `«lang»/tts/…_InterviewScript_v*.md` |
| Take | `«lang»/audio/…_Audio_v*.m4a` (cell shows the take count when > 1) |
| SRT | the `.srt` beside the newest take |
| **Accepted** | **`tracker.yaml`** — `accepted: v0.13` (or `true`) |
| Cues | `«lang»/cues/…_Cues_v*.txt` |
| MP4 | `«lang»/video/…_Video_v*.mp4` (the top-level file, not `_pre_hook/`) |
| **Published** | **`tracker.yaml`** — `published: https://youtu.be/…` (or `true`) |

On-camera videos (each KP's intro, each module's `m.0`) do not go through the pipeline, so they get
their own four stages: Script (`…_IntroScript_v*.md`) → Filmed (any `.mov` in `video/`) → Mastered
(`…_«m».0_Video_v*.mp4`, i.e. cut and normalised to the series spec per `camera-intro.md`) →
Published (manual). `filmed:` / `mastered:` in the YAML override the detection when the file is
somewhere else.

The tracker also warns when the chain drifts — an MP4 or cue file whose version is older than the
newest take, or an `accepted:` pin that no longer matches the newest take on disk.

## Editing tracker.yaml

- Tick a take as accepted: add `en: {accepted: v0.7}` to the topic.
- Publish: `en: {accepted: v0.7, published: https://youtu.be/xxxx}`.
- Flag a problem: `blocker: "waiting on ITU §4.3 decision"` — the row goes red and lands under
  BLOCKED in the next-actions list.
- Add a KP: copy the commented KP3 stub at the bottom. Add a module: `number`, `title`, `path`,
  `intro`, `topics`. Topic titles are display-only; the file matching uses the `code`.
- Retire a topic without losing it from view: `retired: "why"`.
- French (or any language) rows appear automatically once a file exists under `fr/`; until then
  they are hidden behind the "hide languages not started" toggle.
