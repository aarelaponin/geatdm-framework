---
name: kp-gitbook-render
description: Render the KP1 companion GitBook from the signed build scripts, the ea-plays kit and the site's own data, then QA the result. Use when a KP1 GitBook page needs to change, when a video URL arrives, or when a worked example has been run.
---

# kp-gitbook-render

Renders `10-Knowledge-Products/gitbook/` — the KP1 companion site — from source. **No page under `gitbook/` is edited by hand.** Change a source, re-render, run the QA gate.

## One command

```bash
cd skills/kp-gitbook-render/scripts
python3 render.py && python3 gitbook_qa.py
```

`render.py` exits after writing every page plus `pages.json`; `gitbook_qa.py` exits non-zero on a broken link or a forbidden string. Both must pass before anything is published.

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

## Publishing

The site is published to GitBook. Two lessons from the API route, which still hold:

- `{% expandable %}` is dropped by the markdown importer — use `<details><summary>`. Tabs, hints, stepper, mermaid and card tables import fine.
- Relative `.md` links resolve only inside a single `updateChangeRequestContent` batch; across batches use `/pages/<pageId>`.

Git Sync replaces all of that: bind the space to this repo and a push is a publish.
