---
name: kp-gitbook-render
description: Render the KP1 and KP2 companion GitBook spaces from the signed build scripts, the play maps and the site's own data, then QA the result. Use when a KP1 or KP2 GitBook page needs to change, when a video URL arrives, or when a worked example has been run.
---

# kp-gitbook-render

Renders `10-Knowledge-Products/gitbook/` — the KP1 companion site — from source. **No page under `gitbook/` is edited by hand.** Change a source, re-render, run the QA gate.

## One command

```bash
cd skills/kp-gitbook-render/scripts
python3 render.py && python3 render_kp2.py && python3 gitbook_qa.py
```

`render.py` writes `start-here/` and `kp1/` plus `pages.json`; `render_kp2.py` writes `kp2/` plus `pages-kp2.json` (it needs no kit checkout — the KP2 play map is in the repo); `gitbook_qa.py` exits non-zero on a broken link, an uncited source, a forbidden string, a **With the kit** line naming a skill the kit page does not list, or a KP2 page that names a live Module 6. `linkify.py --check [--http]` resolves every relative link for publishing — same space to `/pages/<id>`, another space to its published URL. All must pass before anything is published.

## Where the content comes from

| Source | Holds | Owned by |
| --- | --- | --- |
| `KP1-GEA/build_kp1_moduleN_v02.js` | Modules 2–5: single message, PAERA anchor, script beats, the AI tip, metadata | ITU sign-off — never edited here |
| `module1.py` | Module 1: concept prose, plays, worked examples, annotations | the site |
| `fixture.py` | Progressa, in the site's voice; facts aligned to the kit's `tests/progressa.md` | the site |
| `play0.py` | the seven A0 research prompts | the site |
| `ea-plays-kit` (`tests/play-map.json`, `shared/workbook-chain.md`) | play → skill, artefact, consumes, feeds | the kit — read, never copied |
| `gitbook/_shared/sources.yaml` | the Working-with-AI reading list | the site |

Set `EA_PLAYS_KIT` to point at a kit checkout (defaults to `~/Documents/Dev/ea-plays-kit`). `KP1_PUBLISHED` limits the home page and video index to the modules actually live on GitBook.

`bundles.py` reads the `.js` build scripts using `kp-build-render/scripts/bundle_to_md.py`'s balanced-brace primitives — there is deliberately no second `.js` parser.

## KP2 sources

| Source | Holds | Owned by |
| --- | --- | --- |
| `KP2-GIF/build_kp2_moduleN_v0X.js` (highest version wins) | Modules 1–5: single message, anchor, script beats, the AI tip, metadata, per-subtopic persona | ITU sign-off — never edited here |
| `KP2-GIF/gitbook/play-map.json` | play → kind, artefact (B-series), consumes, est, ea-plays skill; feeds is derived | the site |
| `kp2_home.py` | the former Module 6 framing — the AI-play catalogue, the four role-paths, the country storyboard and its play (B38) | the site |
| `KP2-GIF/KP2-build-pack/{README,runbook,exercises}.md`, `acceptance/once-only-exchange.md` | the four build-pack pages, copied with a header line | the pack |
| `KP2-GIF/gitbook/plays/<id>.md` | worked examples once run (same sidecar shape as KP1); absent is legal | the site |

Module 6 was retired on 12 Sep 2026: 6.2–6.4 are 5.8–5.10 in `build_kp2_module5_v02.js`; 6.1, 6.5 and 6.6 are `kp2_home.py`. The `URLS` table in `render_kp2.py` gives every bundle-cited source an openable URL — re-check it with `cite-or-discard` before the Giga publish.

## Publishing

The site is published to GitBook. Two lessons from the API route, which still hold:

- `{% expandable %}` is dropped by the markdown importer — use `<details><summary>`. Tabs, hints, stepper, mermaid and card tables import fine.
- Relative `.md` links resolve only inside a single `updateChangeRequestContent` batch; across batches use `/pages/<pageId>`.

`publish.py` is the API route made repeatable — it reads the bytes off disk, so nothing is
retyped:

```
export GITBOOK_TOKEN=...        # gitbook.com -> Developer -> API tokens
python3 publish.py --space <spaceId> --manifest pages-kp2.json --cr <id> \
                   --subject "KP2 first publish"
```

Two passes: insert every page parents-first and stamp the ids back into the manifest, then
update every page with `linkify` output. The second pass is not optional — a link whose
target did not exist yet is dropped, and in a card table the target cell is left empty. It
never merges; that stays a human's call.

Git Sync replaces all of that: bind the space to this repo and a push is a publish.
