# YouTube — one playlist per module

**Stage 8 of the video track: publication.** Everything upstream produces standalone videos on
purpose (§3.i) — a viewer arrives at 1.5 from a Google search having watched nothing else. The
playlist is *navigation for the viewer who wants the whole module*, not the structure the videos
depend on. Per §2 of the bundle: *"the playlist provides navigation but is not required to
comprehend any single video."*

So: one playlist per module, per language. Not one per knowledge product — a 50-video KP1 playlist
is not navigation, it is a wall.

---

## The playlist set

Titles come from the module topics in `../README.md`. Number first so they sort correctly in a
channel's playlist grid, persona last so a viewer self-selects before clicking.

| # | Playlist title | Persona | Videos |
|---|---|---|---|
| 1 | KP1 Module 1 — Why a national EA, and the lifecycle in one page (Strategist) | Strategist | 1.0 + 1.1–1.8 |
| 2 | KP1 Module 2 — EA principles, the metamodel and the BDAT layers (Architect) | Architect | 2.0 + 2.1–… |
| 3 | KP1 Module 3 — EA repository, tooling and governance (Architect) | Architect | 3.0 + … |
| 4 | KP1 Module 4 — Progressa: applying the method end-to-end (Architect) | Architect | 4.0 + … |
| 5 | KP1 Module 5 — Cross-country evidence and dissemination (Strategist) | Strategist | 5.0 + … |

When `fr/` ships, it gets its own five — `KP1 Module 1 — Pourquoi une AE nationale …` — never mixed
into the English playlists. Two languages in one playlist means autoplay hands a viewer a video
they cannot understand.

**Decide once, before the first playlist exists:** whether these live on ITU/Giga's channel or
FiscalAdmin's. It determines who can edit them for the next five years, and moving a playlist
between channels is not a thing you can do — you rebuild it and lose the URL.

## Playlist description template

Each playlist description does the work the videos deliberately don't: it says what the module
covers, who it is for, and where the written companion is.

```text
Module 1 of Knowledge Product 1 — Government Enterprise Architecture.

Nine short videos for chief digital officers, director-generals and ministerial
advisers: why your country needs a national Enterprise Architecture, what one
actually is, the lifecycle on one page, and what to ask your minister for.

Each video stands alone — start anywhere. Each ends with a play you can run on
your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp1/module-1

PAERA v1.0: https://paera.govstack.global
Produced by FiscalAdmin OÜ for ITU/Giga.
```

Keep the first two lines strong — YouTube truncates playlist descriptions in most surfaces.

## Per-video descriptions

Per §4.5 the videos never read URLs aloud; they say *"find the link in the description,"* which
makes the description a deliverable, not an afterthought. Every video's description carries the
sources listed for that subtopic in the bundle's §6 annex. The pattern:

```text
[Single message, one or two sentences — straight from the bundle.]

KP1 · Module 1 · 1.3 — Why projects can't do this themselves

Sources
· PAERA v1.0 §1.3 (GovStack Vision) — https://paera.govstack.global
· PAERA v1.0 §3.3 (Digital Infrastructure principles) — …

The play from this video, with a worked example: https://<gitbook-url>/…
Full module: [playlist link]

Produced by FiscalAdmin OÜ for ITU/Giga.
```

Write these before uploading. Retro-fitting nine descriptions in the Studio UI is an hour you
won't want to spend twice.

---

## Doing it

*YouTube Studio's layout shifts every few months — the labels below are current but may sit
somewhere slightly different by the time you read this.*

### Create the playlist first, upload into it

Cheaper than adding nine videos one at a time afterwards.

1. **studio.youtube.com → Content → Playlists → New playlist.**
2. Title from the table above. Visibility: **Unlisted** while you build it — a half-populated
   playlist that a viewer finds is worse than no playlist. Switch to Public when all nine are in
   and ordered.
3. Save, then open it and paste the description.

### Upload the videos

Upload **in order, 1.0 first, 1.8 last.** Ordering is then automatic and you skip the drag step.

For each: **Create → Upload videos**, then on the *Details* page —
- **Title** — from the subtopic's metadata block in the bundle.
- **Description** — the block you wrote above.
- **Playlist** — pick the module playlist here. This is the field people miss.
- **Audience** — "No, it's not made for kids."
- **Show more → Language** — English (or French). This is what makes the SRT attach correctly.
- **Subtitles** — upload `KP1_M1_«x.y»_Audio_v0.«v».srt`. Do not rely on auto-captions; they will
  mangle "PAERA" every time.
- **Visibility** — Unlisted until the whole module is up, then Public.

### Fix the order

If uploads landed out of sequence: open the playlist, **Sort → Manual**, then drag. Manual is the
only sort that survives — "date added" reshuffles the moment you replace a video.

### Then

- **Channel homepage.** Add each playlist as a section, in module order, so the channel front page
  reads as a curriculum rather than a pile.
- **End screens.** On each video, an end screen pointing at the next subtopic *and* at the playlist.
  This is the one place autoplay-style continuity is worth building, because it costs the
  standalone videos nothing.
- **Link the playlists to each other** from the descriptions — Module 1 → Module 2, and so on.
  That, not a mega-playlist, is how someone works through KP1 end to end.

## Replacing a video later

YouTube cannot swap the file behind a published URL. A re-render means a new upload, a new URL, and:

1. Add the new video to the playlist, drag it into position.
2. Remove the old one from the playlist.
3. Set the old video to **Unlisted**, not Private and not deleted — anything that already links to
   it keeps working, and Giga's own materials may.
4. Add a line to the old video's description pointing at the new one.

Which is the argument for holding all nine at Unlisted until the module is genuinely final.
