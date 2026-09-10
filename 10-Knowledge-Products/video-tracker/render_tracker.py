#!/usr/bin/env python3
"""
KP video tracker — one page showing where every video is in the production flow.

    python3 video-tracker/render_tracker.py            # writes tracker.html + tracker.md
    python3 video-tracker/render_tracker.py --check    # prints the table, writes nothing

Everything that can be read off disk IS read off disk (scripts, decks, briefs, takes,
transcripts, cues, rendered MP4s — with their latest version numbers).  The only things
you maintain by hand, in tracker.yaml, are the judgement calls a folder listing cannot
show: a take being *accepted*, a video being *published*, a *blocker*, a *note*.

Stdlib + PyYAML only.  Python 3.10+.
"""
from __future__ import annotations

import argparse
import datetime as dt
import glob
import html
import os
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    sys.exit("PyYAML is needed: python3 -m pip install pyyaml")

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent  # 10-Knowledge-Products/

# --------------------------------------------------------------------------- stages
# Order matters: it is the flow.  `manual` stages come from tracker.yaml, the rest from disk.
PIPELINE_STAGES = [
    ("bundle", "Bundle", "module script bundle authored (.md)"),
    ("script", "Script", "per-topic narration script"),
    ("deck", "Deck", "per-topic .pptx split from the module deck"),
    ("brief", "Brief", "audio brief + prompt (or TTS interview script)"),
    ("audio", "Take", "narration take (.m4a)"),
    ("transcript", "SRT", "take transcribed"),
    ("accepted", "Accepted", "take accepted after audit — manual"),
    ("cues", "Cues", "slide cue file"),
    ("video", "MP4", "video rendered"),
    ("published", "Published", "on YouTube — manual"),
]
CAMERA_STAGES = [
    ("script", "Script", "on-camera script"),
    ("filmed", "Filmed", "raw footage recorded (.mov)"),
    ("mastered", "Mastered", "cut + normalised to series spec (.mp4)"),
    ("published", "Published", "on YouTube — manual"),
]
MANUAL = {"accepted", "published"}

VER_RE = re.compile(r"_v(\d+)\.(\d+)")


def ver_of(path: str) -> tuple[int, int]:
    m = VER_RE.search(Path(path).name)
    return (int(m.group(1)), int(m.group(2))) if m else (0, 0)


def latest(pattern: str) -> tuple[str | None, str | None]:
    """Newest-versioned file matching a glob → (version label, filename)."""
    files = [f for f in glob.glob(pattern) if Path(f).is_file()]
    if not files:
        return None, None
    best = max(files, key=ver_of)
    v = ver_of(best)
    return (f"v{v[0]}.{v[1]}" if v != (0, 0) else "✓"), Path(best).name


# --------------------------------------------------------------------------- detection
def detect_pipeline(kp: dict, mod: dict, lang: str, code: str, manual: dict) -> dict:
    """Return {stage: {'done': bool, 'label': str, 'file': str|None}} for one content video."""
    n = kp["number"]
    m = mod["number"]
    base = ROOT / kp["root"] / mod["path"] / lang
    pre = f"KP{n}_M{m}_{code}"
    out = {}

    # The bundle is the language-independent source; a translated bundle (…_FR.md) is optional.
    v, f = latest(str(ROOT / kp["root"] / f"KP{n}_Module{m}_Script_Bundle_v*_{lang.upper()}.md")) if lang != "en" else (None, None)
    if v is None:
        v, f = latest(str(ROOT / kp["root"] / f"KP{n}_Module{m}_Script_Bundle_v*.md"))
    out["bundle"] = {"done": v is not None, "label": v or "", "file": f}

    v, f = latest(str(base / "scripts" / f"{pre}_Scripts_v*.md"))
    out["script"] = {"done": v is not None, "label": v or "", "file": f}

    v, f = latest(str(base / "decks" / f"{pre}_Deck_v*.pptx"))
    out["deck"] = {"done": v is not None, "label": v or "", "file": f}

    v1, f1 = latest(str(base / "notebooklm" / f"{pre}_AudioBrief_v*.md"))
    v2, f2 = latest(str(base / "tts" / f"{pre}_InterviewScript_v*.md"))
    if v2 and (not v1 or ver_of(f2) >= ver_of(f1)):
        out["brief"] = {"done": True, "label": f"{v2} tts", "file": f2}
    else:
        out["brief"] = {"done": v1 is not None, "label": v1 or "", "file": f1}

    av, af = latest(str(base / "audio" / f"{pre}_Audio_v*.m4a"))
    takes = len(glob.glob(str(base / "audio" / f"{pre}_Audio_v*.m4a")))
    out["audio"] = {"done": av is not None, "label": av or "", "file": af, "takes": takes}

    srt_done = bool(af) and (base / "audio" / af.replace(".m4a", ".srt")).exists()
    out["transcript"] = {"done": srt_done, "label": av if srt_done else "", "file": af.replace(".m4a", ".srt") if srt_done else None}

    acc = manual.get("accepted")
    out["accepted"] = {"done": bool(acc), "label": (acc if isinstance(acc, str) else (av or "")) if acc else "", "file": None}

    cv, cf = latest(str(base / "cues" / f"{pre}_Cues_v*.txt"))
    out["cues"] = {"done": cv is not None, "label": cv or "", "file": cf}

    vv, vf = latest(str(base / "video" / f"{pre}_Video_v*.mp4"))
    out["video"] = {"done": vv is not None, "label": vv or "", "file": vf}

    pub = manual.get("published")
    out["published"] = {"done": bool(pub), "label": "YouTube" if pub else "", "file": None, "url": pub if isinstance(pub, str) and pub.startswith("http") else None}

    # drift hints — the artefact chain follows the AUDIO version (videos/README.md)
    hints = []
    if av and vv and ver_of(vf) < ver_of(af):
        hints.append(f"MP4 is {vv} but newest take is {av} — re-cue/re-render or delete the stale take")
    if av and cv and ver_of(cf) < ver_of(af):
        hints.append(f"cues {cv} lag take {av}")
    if acc and av and isinstance(acc, str) and acc != av:
        hints.append(f"accepted {acc} but newest take on disk is {av}")
    out["_hints"] = hints
    return out


def detect_camera(kp: dict, mod: dict | None, lang: str, manual: dict) -> dict:
    n = kp["number"]
    if mod is None:  # KP-level intro
        base = ROOT / kp["root"] / kp.get("intro", {}).get("path", "videos/intro") / lang
        pre = f"KP{n}_0.0"
        script_glob = str(base / "scripts" / f"KP{n}_IntroScript_v*.md")
    else:
        m = mod["number"]
        base = ROOT / kp["root"] / mod["path"] / lang
        pre = f"KP{n}_M{m}_{m}.0"
        script_glob = str(base / "scripts" / f"{pre}_IntroScript_v*.md")
    out = {}
    v, f = latest(script_glob)
    out["script"] = {"done": v is not None, "label": v or "", "file": f}

    movs = [Path(p).name for p in glob.glob(str(base / "video" / "*.mov"))]
    filmed = manual.get("filmed")
    if filmed is None:
        filmed = bool(movs)
    out["filmed"] = {"done": bool(filmed), "label": (movs[0] if movs else ("✓" if filmed else "")), "file": movs[0] if movs else None}

    v, f = latest(str(base / "video" / f"{pre}_Video_v*.mp4"))
    mastered = manual.get("mastered")
    done = bool(mastered) if mastered is not None else v is not None
    out["mastered"] = {"done": done, "label": v or ("✓" if done else ""), "file": f}

    pub = manual.get("published")
    out["published"] = {"done": bool(pub), "label": "YouTube" if pub else "", "file": None, "url": pub if isinstance(pub, str) and pub.startswith("http") else None}
    out["_hints"] = []
    return out


# --------------------------------------------------------------------------- model
def build(cfg: dict) -> dict:
    langs = cfg.get("languages", ["en"])
    model = {"kps": [], "generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"), "langs": langs,
             "data_version": cfg.get("version", "?")}
    for kp in cfg["kps"]:
        K = {"id": kp["id"], "number": kp["number"], "title": kp["title"], "root": kp["root"], "modules": [],
             "note": kp.get("note", "")}
        # KP-level intro (camera)
        intro = kp.get("intro") or {}
        K["intro"] = {"code": f"{kp['id']}.0", "title": intro.get("title", f"{kp['id']} introduction"),
                      "kind": "camera", "langs": {}}
        for lang in langs:
            man = (intro.get(lang) or {})
            K["intro"]["langs"][lang] = {"stages": detect_camera(kp, None, lang, man), "manual": man}
        for mod in kp["modules"]:
            M = {"number": mod["number"], "title": mod["title"], "persona": mod.get("persona", ""),
                 "path": mod["path"], "rows": []}
            # module intro (camera)
            mi = mod.get("intro") or {}
            row = {"code": f"{mod['number']}.0", "title": mi.get("title", f"Module {mod['number']} introduction"),
                   "kind": "camera", "retired": None, "langs": {}}
            for lang in langs:
                man = mi.get(lang) or {}
                row["langs"][lang] = {"stages": detect_camera(kp, mod, lang, man), "manual": man}
            M["rows"].append(row)
            for t in mod["topics"]:
                row = {"code": str(t["code"]), "title": t["title"], "kind": "pipeline",
                       "retired": t.get("retired"), "mins": t.get("mins", ""), "langs": {}}
                for lang in langs:
                    man = t.get(lang) or {}
                    row["langs"][lang] = {"stages": detect_pipeline(kp, mod, lang, str(t["code"]), man), "manual": man}
                M["rows"].append(row)
            K["modules"].append(M)
        model["kps"].append(K)
    return model


def stages_for(kind: str):
    return CAMERA_STAGES if kind == "camera" else PIPELINE_STAGES


def progress(row_lang: dict, kind: str) -> tuple[int, int, str]:
    """(done count, total, name of the NEXT stage or 'done')."""
    st = stages_for(kind)
    done = 0
    nxt = "done"
    for key, label, _ in st:
        if row_lang["stages"][key]["done"]:
            done += 1
        elif nxt == "done":
            nxt = label
    return done, len(st), nxt


# --------------------------------------------------------------------------- markdown
def render_md(model: dict) -> str:
    L = [f"# KP video tracker — generated {model['generated']} (data v{model['data_version']})", ""]
    L.append("Auto-detected from `videos/` on disk; *Accepted* and *Published* come from `tracker.yaml`. "
             "Regenerate with `python3 video-tracker/render_tracker.py`.")
    L.append("")
    for K in model["kps"]:
        L.append(f"## {K['id']} — {K['title']}")
        L.append("")
        for lang in model["langs"]:
            rl = K["intro"]["langs"][lang]
            if lang != "en" and not any(rl["stages"][k]["done"] for k, _, _ in CAMERA_STAGES) and not rl["manual"]:
                continue
            d, t, nxt = progress(rl, "camera")
            bar = "".join("●" if rl["stages"][k]["done"] else "○" for k, _, _ in CAMERA_STAGES)
            L.append(f"- **{K['id']}.0 {K['intro']['title']}** [{lang}] {bar} {d}/{t} — next: {nxt}")
        L.append("")
        for M in K["modules"]:
            L.append(f"### Module {M['number']} — {M['title']}" + (f" ({M['persona']})" if M["persona"] else ""))
            L.append("")
            L.append("| # | Topic | Lang | Flow | Done | Next | Latest | Notes |")
            L.append("|---|---|---|---|---|---|---|---|")
            for row in M["rows"]:
                st = stages_for(row["kind"])
                for lang in model["langs"]:
                    rl = row["langs"][lang]
                    if lang != "en" and not any(rl["stages"][k]["done"] for k, _, _ in st if k != "bundle") and not rl["manual"]:
                        continue  # untouched language: keep the md short
                    d, t, nxt = progress(rl, row["kind"])
                    bar = "".join("●" if rl["stages"][k]["done"] else "○" for k, _, _ in st)
                    if row["retired"]:
                        bar, nxt = "retired", "—"
                    lat = ", ".join(f"{lab} {rl['stages'][k]['label']}" for k, lab, _ in st
                                    if rl["stages"][k]["done"] and rl["stages"][k]["label"] and k not in ("bundle",))
                    notes = "; ".join(filter(None, [rl["manual"].get("blocker") and f"BLOCKER: {rl['manual']['blocker']}",
                                                    rl["manual"].get("note"), *rl["stages"]["_hints"], row["retired"]]))
                    L.append(f"| {row['code']} | {row['title']} | {lang} | `{bar}` | {d}/{t} | {nxt} | {lat} | {notes} |")
            L.append("")
    return "\n".join(L) + "\n"


# --------------------------------------------------------------------------- html
CSS = """
:root{--bg:#f7f7f5;--card:#fff;--ink:#1b1b1f;--mute:#6b6b74;--line:#e3e3df;--done:#2f8a5b;--done-bg:#e3f3ea;
--next:#c77b12;--next-bg:#fdf1de;--todo:#c9c9c4;--todo-bg:#f1f1ee;--manual:#5b6ccf;--blk:#c0392b;--blk-bg:#fbe7e4;
--cam:#7b4fa8;--cam-bg:#efe7f8;--ret:#9a9a9a;--acc:#1f5fb3}
:root:not([data-theme="light"]){color-scheme:light dark}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#141417;--card:#1d1d22;--ink:#ecece8;--mute:#9b9ba4;--line:#2d2d34;
--done:#5fc48f;--done-bg:#193626;--next:#f0a93b;--next-bg:#3d2c10;--todo:#4a4a52;--todo-bg:#25252b;--blk:#ef7c6e;--blk-bg:#3f1e1a;
--cam:#b58fe0;--cam-bg:#2c2140;--ret:#6a6a70;--acc:#7fb1f5}}
:root[data-theme="dark"]{--bg:#141417;--card:#1d1d22;--ink:#ecece8;--mute:#9b9ba4;--line:#2d2d34;
--done:#5fc48f;--done-bg:#193626;--next:#f0a93b;--next-bg:#3d2c10;--todo:#4a4a52;--todo-bg:#25252b;--blk:#ef7c6e;--blk-bg:#3f1e1a;
--cam:#b58fe0;--cam-bg:#2c2140;--ret:#6a6a70;--acc:#7fb1f5}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,sans-serif}
.wrap{max-width:1280px;margin:0 auto;padding:24px 16px 64px}
h1{font-size:22px;margin:0 0 4px}h2{font-size:18px;margin:36px 0 8px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
h3{font-size:15px;margin:22px 0 8px;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.sub{color:var(--mute);font-size:13px}.meta{color:var(--mute);font-size:12px;margin-bottom:18px}
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:16px 0 8px}
.tile{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 14px}
.tile .big{font-size:26px;font-weight:600;line-height:1.1}.tile .lbl{color:var(--mute);font-size:12px;margin-top:2px}
.bar{height:6px;background:var(--todo-bg);border-radius:3px;overflow:hidden;margin-top:8px}.bar i{display:block;height:100%;background:var(--done)}
.legend{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:var(--mute);margin:10px 0 4px}
.legend span{display:inline-flex;align-items:center;gap:5px}.dot{width:12px;height:12px;border-radius:3px;display:inline-block}
.tbl{overflow-x:auto;background:var(--card);border:1px solid var(--line);border-radius:10px}
table{border-collapse:collapse;width:100%;min-width:760px}th,td{padding:7px 8px;border-bottom:1px solid var(--line);text-align:left;vertical-align:middle}
th{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:var(--mute);font-weight:600;white-space:nowrap;position:sticky;top:0;background:var(--card);z-index:1}
tr:last-child td{border-bottom:0}td.code{font-variant-numeric:tabular-nums;white-space:nowrap;font-weight:600;width:52px}
td.title{min-width:220px}td.lang{width:34px;color:var(--mute);font-size:11px;text-transform:uppercase}
td.st{width:72px;padding:5px 3px;text-align:center}.cell{display:block;border-radius:6px;padding:4px 4px;font-size:11px;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cell.done{background:var(--done-bg);color:var(--done)}.cell.next{background:var(--next-bg);color:var(--next);outline:1.5px solid var(--next)}
.cell.todo{background:var(--todo-bg);color:var(--todo)}.cell.na{background:transparent;color:var(--todo)}
.cell.manual.next{border-style:dashed}.cell a{color:inherit;text-decoration:underline dotted}
tr.camera td.title::before{content:"on camera";display:inline-block;font-size:10px;font-weight:600;background:var(--cam-bg);color:var(--cam);border-radius:4px;padding:1px 6px;margin-right:6px;vertical-align:1px}
tr.retired td{color:var(--ret)}tr.retired .cell{opacity:.45}tr.fr td.title,tr.fr td.code{color:var(--mute);font-weight:400}
tr.blocked td.code{border-left:3px solid var(--blk)}
.note{font-size:12px;color:var(--mute);margin-top:3px;white-space:normal}.note b{color:var(--blk)}.note .hint{color:var(--next)}
.next-up{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 16px;margin-top:14px}
.next-up ul{margin:6px 0 0;padding-left:18px}.next-up li{margin:3px 0}
.pill{display:inline-block;font-size:11px;border-radius:999px;padding:1px 8px;background:var(--todo-bg);color:var(--mute)}
.pill.ok{background:var(--done-bg);color:var(--done)}
.ctrl{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 4px;font-size:12px}.ctrl label{display:inline-flex;gap:5px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:999px;padding:3px 10px;cursor:pointer}
body.hide-fr tr.fr.untouched{display:none}body.hide-done tr.alldone{display:none}
@media (max-width:640px){.wrap{padding:16px 16px 48px}h1{font-size:19px}}
"""


def esc(s) -> str:
    return html.escape(str(s if s is not None else ""))


def cell_html(stage_key: str, st: dict, is_next: bool, manual_stage: bool) -> str:
    cls = "done" if st["done"] else ("next" if is_next else "todo")
    if manual_stage:
        cls += " manual"
    label = st["label"] if st["done"] else ("◀ next" if is_next else "")
    title = st.get("file") or ""
    if stage_key == "audio" and st.get("takes"):
        title = f"{st['takes']} take(s) on disk · newest {st.get('file')}"
        if st["takes"] > 1:
            label = f"{st['label']} ·{st['takes']}"
    inner = esc(label)
    if st.get("url"):
        inner = f'<a href="{esc(st["url"])}" target="_blank" rel="noopener">YouTube ↗</a>'
    return f'<span class="cell {cls}" title="{esc(title)}">{inner}&nbsp;</span>'


def render_html(model: dict) -> str:
    langs = model["langs"]
    P = []
    P.append(f'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KP Video Tracker</title><style>{CSS}</style></head><body>')
    P.append('<div class="wrap">')
    P.append("<h1>Knowledge Product video tracker</h1>")
    P.append(f'<div class="meta">Generated {esc(model["generated"])} · data v{esc(model["data_version"])} · '
             "stages read from <code>videos/</code> on disk; <em>Accepted</em> and <em>Published</em> from <code>tracker.yaml</code>. "
             "Hover a cell for the file behind it.</div>")

    # ---- summary tiles (EN only — the delivery language today)
    tiles = []
    next_up = []
    for K in model["kps"]:
        total = rendered = published = blocked = 0
        cam_total = cam_done = 0
        for M in K["modules"]:
            for row in M["rows"]:
                if row["retired"]:
                    continue
                rl = row["langs"]["en"]
                if row["kind"] == "camera":
                    cam_total += 1
                    if rl["stages"]["mastered"]["done"]:
                        cam_done += 1
                else:
                    total += 1
                    rendered += rl["stages"]["video"]["done"]
                    published += rl["stages"]["published"]["done"]
                blocked += bool(rl["manual"].get("blocker"))
        cam_total += 1
        cam_done += K["intro"]["langs"]["en"]["stages"]["mastered"]["done"]
        pct = int(100 * rendered / total) if total else 0
        tiles.append(f'<div class="tile"><div class="big">{rendered}<span class="sub"> / {total}</span></div>'
                     f'<div class="lbl">{esc(K["id"])} content videos rendered (EN)</div><div class="bar"><i style="width:{pct}%"></i></div>'
                     f'<div class="lbl" style="margin-top:6px">{published} published · {cam_done}/{cam_total} on-camera intros mastered'
                     + (f' · <b style="color:var(--blk)">{blocked} blocked</b>' if blocked else "") + "</div></div>")
    P.append('<div class="summary">' + "".join(tiles) + "</div>")

    # ---- legend
    P.append('<div class="legend">'
             '<span><i class="dot" style="background:var(--done-bg);outline:1px solid var(--done)"></i>done (shows version)</span>'
             '<span><i class="dot" style="background:var(--next-bg);outline:1.5px solid var(--next)"></i>next step</span>'
             '<span><i class="dot" style="background:var(--todo-bg)"></i>not yet</span>'
             '<span><i class="dot" style="background:var(--next-bg);outline:1.5px dashed var(--next)"></i>next step is a manual entry in tracker.yaml</span>'
             '<span><i class="dot" style="background:var(--cam-bg);outline:1px solid var(--cam)"></i>on-camera video (filmed, not pipeline)</span>'
             "</div>")
    P.append('<div class="ctrl"><label><input type="checkbox" id="cb-fr" checked> hide languages not started</label>'
             '<label><input type="checkbox" id="cb-done"> hide finished rows</label></div>')

    # ---- per KP
    for K in model["kps"]:
        P.append(f'<h2>{esc(K["id"])} — {esc(K["title"])}<span class="sub">{esc(K["root"])}/</span></h2>')
        if K.get("note"):
            P.append(f'<div class="sub" style="margin-bottom:8px">{esc(K["note"])}</div>')

        # KP intro table (camera)
        P.append(table_html([{"code": K["intro"]["code"], "title": K["intro"]["title"], "kind": "camera", "retired": None,
                              "langs": K["intro"]["langs"]}], langs, CAMERA_STAGES, next_up, K["id"], "KP intro"))

        for M in K["modules"]:
            P.append(f'<h3>Module {M["number"]} — {esc(M["title"])}'
                     + (f'<span class="pill">{esc(M["persona"])}</span>' if M["persona"] else "")
                     + f'<span class="sub">{esc(M["path"])}/</span></h3>')
            cam_rows = [r for r in M["rows"] if r["kind"] == "camera"]
            pipe_rows = [r for r in M["rows"] if r["kind"] == "pipeline"]
            P.append(table_html(cam_rows, langs, CAMERA_STAGES, next_up, K["id"], f"Module {M['number']}"))
            P.append(table_html(pipe_rows, langs, PIPELINE_STAGES, next_up, K["id"], f"Module {M['number']}"))

    # ---- next up
    P.append('<div class="next-up"><b>Next actions (EN)</b> — the first undone stage per video, grouped by what to run next.')
    groups: dict[str, list[str]] = {}
    for kp, where, code, nxt, blocker in next_up:
        key = f"{kp} · {nxt}" if not blocker else f"{kp} · BLOCKED"
        groups.setdefault(key, []).append(f"{code}" + (f" ({blocker})" if blocker else ""))
    P.append("<ul>")
    for key in sorted(groups):
        P.append(f"<li><b>{esc(key)}</b>: {esc(', '.join(groups[key]))}</li>")
    P.append("</ul></div>")

    P.append("</div>")
    P.append("""<script>
(function(){var b=document.body;function sync(){b.classList.toggle('hide-fr',document.getElementById('cb-fr').checked);
b.classList.toggle('hide-done',document.getElementById('cb-done').checked);}
['cb-fr','cb-done'].forEach(function(id){document.getElementById(id).addEventListener('change',sync)});sync();})();
</script></body></html>""")
    return "\n".join(P)


def table_html(rows, langs, stages, next_up, kp_id, where) -> str:
    if not rows:
        return ""
    H = ['<div class="tbl"><table><thead><tr><th>#</th><th>Topic</th><th>Lang</th>']
    for key, label, desc in stages:
        H.append(f'<th title="{esc(desc)}">{esc(label)}</th>')
    H.append("</tr></thead><tbody>")
    for row in rows:
        for lang in langs:
            rl = row["langs"][lang]
            st = rl["stages"]
            touched = any(st[k]["done"] for k, _, _ in stages if k != "bundle") or bool(rl["manual"])
            d, t, nxt = progress(rl, row["kind"])
            cls = [row["kind"], lang]
            if row["retired"]:
                cls.append("retired")
            if rl["manual"].get("blocker"):
                cls.append("blocked")
            if d == t:
                cls.append("alldone")
            if lang != "en" and not touched:
                cls.append("untouched")
            if lang == "en" and not row["retired"] and d < t:
                next_up.append((kp_id, where, row["code"], nxt, rl["manual"].get("blocker")))
            H.append(f'<tr class="{" ".join(cls)}"><td class="code">{esc(row["code"])}</td>')
            notes = []
            if rl["manual"].get("blocker"):
                notes.append(f"<b>Blocked:</b> {esc(rl['manual']['blocker'])}")
            if rl["manual"].get("note"):
                notes.append(esc(rl["manual"]["note"]))
            for h in st.get("_hints", []):
                notes.append(f'<span class="hint">⚠ {esc(h)}</span>')
            if row["retired"]:
                notes.append(f"Retired — {esc(row['retired'])}")
            note_html = f'<div class="note">{" · ".join(notes)}</div>' if notes else ""
            H.append(f'<td class="title">{esc(row["title"])}{note_html}</td><td class="lang">{esc(lang)}</td>')
            seen_next = False
            for key, label, _ in stages:
                is_next = (not st[key]["done"]) and not seen_next and not row["retired"]
                if is_next:
                    seen_next = True
                H.append(f'<td class="st">{cell_html(key, st[key], is_next, key in MANUAL)}</td>')
            H.append("</tr>")
    H.append("</tbody></table></div>")
    return "".join(H)


# --------------------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default=str(HERE / "tracker.yaml"))
    ap.add_argument("--out", default=str(HERE), help="folder for tracker.html / tracker.md")
    ap.add_argument("--check", action="store_true", help="print the markdown view, write nothing")
    a = ap.parse_args()
    cfg = yaml.safe_load(Path(a.config).read_text(encoding="utf-8"))
    model = build(cfg)
    md = render_md(model)
    if a.check:
        print(md)
        return
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    (out / "tracker.md").write_text(md, encoding="utf-8")
    (out / "tracker.html").write_text(render_html(model), encoding="utf-8")
    n = sum(len(M["rows"]) for K in model["kps"] for M in K["modules"])
    print(f"wrote {out / 'tracker.html'} and tracker.md — {n} rows across {len(model['kps'])} KPs")


if __name__ == "__main__":
    main()
