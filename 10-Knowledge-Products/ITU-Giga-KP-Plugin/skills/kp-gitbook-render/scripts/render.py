"""Render the KP1 demo GitBook pages to ./out/*.md and a pages.json manifest for publishing.
Demo-only renderer — the production equivalent is bundle_to_md.py in the itu-giga-kp kit."""
import json, os, re, urllib.parse, yaml
from module1 import MODULE, SUBTOPICS
import bundles

MODS = {1: (dict(MODULE, blurb=MODULE['blurb'], persona=MODULE['persona'],
                 runtime=MODULE['runtime'], title=MODULE['title']), SUBTOPICS)}
for _n in (2, 3, 4, 5):
    _subs, _playlist = bundles.load_module(_n)
    _meta = dict(bundles.MODULES[_n], playlist=_playlist, intro_url=None)
    MODS[_n] = (_meta, _subs)
ALL = {s["id"]: (n, s) for n, (_m, subs) in MODS.items() for s in subs}
# Which modules are live on GitBook. Defaults to all (the repo renders the whole site); set
# KP1_PUBLISHED to render a home page and video index that match a partial publish.
PUBLISHED = {int(x) for x in os.environ.get("KP1_PUBLISHED", "1,2,3,4,5").split(",")}

# How far a module has got. The ladder is prompts < examples < videos, and each rung is derived
# from the data rather than declared, so a status can never be stale (review A3, B5).
STATUS_LABEL = {"prompts": "Prompts live", "examples": "Worked examples live", "videos": "Videos live"}


def status_of(n):
    subs = MODS[n][1]
    if all(s.get("yt") for s in subs):
        return "videos"
    if all(s["play"].get("example_input") for s in subs):
        return "examples"
    return "prompts"


STATUS = {n: status_of(n) for n in MODS}


def kp_status_line():
    """One sentence for the Start-here card, from STATUS rather than a hard-coded module number."""
    by = {}
    for n, st in sorted(STATUS.items()):
        by.setdefault(st, []).append(n)
    parts = []
    for st in ("videos", "examples", "prompts"):
        if st in by:
            ns = by[st]
            span = f"Module {ns[0]}" if len(ns) == 1 else f"Modules {ns[0]}\u2013{ns[-1]}"
            parts.append(f"{span} {STATUS_LABEL[st].lower()}")
    return "; ".join(parts)

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__),
                                    "..", "..", "..", "..", "gitbook"))
SOURCES = yaml.safe_load(open(os.path.join(ROOT, "_shared", "sources.yaml")))
SRC = {s["key"]: s for s in SOURCES["sources"]}
pages = []  # ordered manifest: dict(ref, title, parent_ref, file)

def cite(key, text=None):
    """Inline link to a row of the shared reading list — the chapter never asserts, it points."""
    s = SRC[key]
    return f'[{text or s["title"]}]({s["url"]}) ({s["publisher"]} · {s["date"]})'

def reading_list(keys):
    rows = "\n".join(
        f'| [{SRC[k]["title"]}]({SRC[k]["url"]}) | {SRC[k]["publisher"]} · {SRC[k]["date"]} | {SRC[k]["used_for"]} | {SRC[k]["tier"]} |'
        for k in keys)
    return f'''| Source | Publisher · date | Used for | Tier |
| --- | --- | --- | --- |
{rows}

*Links re-checked {SOURCES["verified"]} with `cite-or-discard`. "Living" pages are cited by title, not by a quoted passage — the wording changes.*'''

READ_ONCE = "about fifteen minutes"

KIND_BADGE = {
    "diagnostic": ("🔍", "Diagnostic", "You paste a description of your situation; the play assesses it."),
    "drafting":   ("✍️", "Drafting", "You give a few facts; the play produces a first draft of a document you will edit."),
    "translation":("🔁", "Translation", "You give a question in one group's language; the play restates it for another."),
}
ARTEFACTS = [(s["play"]["artefact"], s["id"], s["play"]["title"]) for s in SUBTOPICS]

def desc(text, limit=180):
    """GitBook truncates long descriptions mid-word; cut at a sentence boundary first."""
    t = text.replace('"', "'")
    if len(t) <= limit:
        return t
    cut = t[:limit]
    for sep in (". ", "; ", " — ", ", "):
        i = cut.rfind(sep)
        if i > limit // 2:
            out = cut[:i + (1 if sep == ". " else 0)].rstrip()
            return out if out.endswith(".") else out + "."
    return cut.rsplit(" ", 1)[0].rstrip() + "."

def by_id(i):
    return ALL[i][1]

def page_path(i, from_mod):
    """Relative link to subtopic `i` from a page inside module `from_mod`."""
    n, s = ALL[i]
    leaf = s["id"].replace(".", "-") + ".md"
    return f"./{leaf}" if n == from_mod else f"../module-{n}/{leaf}"

def claude_link(prompt):
    return "https://claude.ai/new?q=" + urllib.parse.quote(prompt, safe="")

SKILL_ADDS = {}          # skill -> what it adds; filled from KIT_SKILLS below


def skill_adds(name):
    """What this specific skill adds. KeyError if a play names a skill the kit page omits."""
    return SKILL_ADDS[name]


def kit_line(p):
    """The optional 'with the kit' line — which ea-plays skill improves this play."""
    if not p.get("skill"):
        return "This play runs bare in any assistant."
    also = p.get("skill_also", [])
    tail = (" It also calls " + ", ".join(f"`{x}`" for x in also) + ".") if also else ""
    return (f'Runs bare in any assistant. With the [ea-plays kit](https://github.com/alaponin/ea-plays-kit) '
            f'loaded, `{p["skill"]}` — {skill_adds(p["skill"])}.'
            f'{tail} Consumes **{p.get("input_ref","A0")}**.')

def video_block(s, title=None, runtime=None, up="../../"):
    """§3.4 — one placeholder block everywhere; swapped for the embed when `yt` is set."""
    if s and s.get("yt"):
        return f'''{{% embed url="{s["yt"]}" %}}
{s["yt_title"]} ({s["runtime"]})
{{% endembed %}}

**Watch first ({s["runtime"]}).** Then come back for the play. The video's recap slide carries an on-screen practice box — it is not narrated — and this page is where that box points.'''
    t = title or s["yt_title"]
    r = runtime or s["runtime"]
    return f'''{{% hint style="info" %}}
🎬 **Video in production:** *{t}* ({r}).
The play below does not depend on the video: the concept section carries what the video will say. Come back for the embed, or follow the [video index]({up}start-here/video-index.md).
{{% endhint %}}'''


CONCEPT_FIXES = [
    ("needs the business side — the minister, the director-general, the head of policy — "
     "and the IT side — you and your engineers — to decide together.",
     "needs the business side (the minister, the director-general, the head of policy) "
     "and the IT side (you and your engineers) to decide together."),
]


def concept_note(s):
    """A note where the page must say something the signed narration does not (review A5)."""
    n = s.get("concept_note")
    return f'\n{{% hint style="info" %}}\n{n}\n{{% endhint %}}\n' if n else ""


def concept_of(s):
    c = s["concept"]
    for a, b in CONCEPT_FIXES:
        c = c.replace(a, b)
    return c


def a0_sections():
    from play0 import SECTIONS
    return {f'§{x["n"]}': x["title"] for x in SECTIONS}


def expand_a0(ref):
    """`A0 §6, A5, A12` -> `A0 §6 Public bodies, systems and registries, A5, A12`.
    Module 1's input_refs already spell the section out, so skip a ref that names it already."""
    names = a0_sections()

    def sub(m):
        title = names[m.group(2)]
        if ref[m.end():].lstrip().startswith(title):
            return m.group(0)
        return f'{m.group(1)}{m.group(2)} {title}'

    return re.sub(r"(A0 )(§\d)(?![\w])", sub, ref)


def source_of(p):
    """Where the input comes from: Play 0 builds A0, everything else is an earlier artefact."""
    ref = p.get("input_ref", "A0")
    if "A0" in ref:
        return "see [Play 0](../../start-here/play-0.md)"
    return "see [Your country workbook](../your-country-workbook.md)"


def tooltip(s, mod=1):
    """§4 — the AI tooltip: what the play needs, what it gives, which skill helps. Six lines,
    fixed order. Every field already exists in the play data, so the box cannot drift."""
    p = s["play"]; emoji, kind, _ = KIND_BADGE[p["kind"]]
    art = p["artefact"].split(" — ")
    if p.get("skill"):
        also = p.get("skill_also", [])
        tail = (" It also runs " + ", ".join(f"`{x}`" for x in also) + ".") if also else ""
        kit = f'`{p["skill"]}` — {skill_adds(p["skill"])}.{tail} Optional: the prompt runs bare.'
    else:
        kit = "no skill yet, so the prompt runs bare in any assistant."
    return f'''{{% hint style="success" %}}
**{emoji} {kind} play · produces {art[0]} {art[1]}**

**Bring:** {p["inputs"]} From **{expand_a0(p.get("input_ref", "A0"))}** ({source_of(p)}).
**Get:** {p["outputs"]} As text in the chat, not a file or a chart.
**Time:** {p["est"]} · **Assistant:** any; the plays are tool-neutral.
**With the kit:** {kit}
**Watch for:** {p["safeguard"].split(". ")[0].rstrip(".")}.
{{% endhint %}}'''

def feeds_text(p, mod=1):
    out = []
    for f in p["feeds"]:
        if f.startswith("M"):
            out.append(f"Module {f[1:]}")
        elif f in ALL:
            t = ALL[f][1]
            out.append(f'[{f} {t["play"]["title"]}]({page_path(f, mod)})')
        elif f in bundles.PLAY_MAP:                      # the 5.3b companion play
            out.append(f'{f} {bundles.PLAY_MAP[f]["play"]}')
    return ", ".join(out) or "nothing further in KP1; this artefact is where the chain ends"


def when_line(p):
    return f'\n**When to run it.** {p["when"]}\n' if p.get("when") else ""


def derived_what_next(p):
    """No sidecar yet, so the next step is the one thing the chain already knows: validate
    the output, then carry the artefact on."""
    art = p["artefact"].split(" — ")
    return (f'File the output as **{art[0]}** in your country workbook once you have worked it the way '
            f'**Watch for** asks. A fuller what-next is added with the worked example.')


def example_warning(p):
    """Say plainly how this example was produced — a sidecar run, or a demo-era draft."""
    st, when = p.get("example_status", "demo"), p.get("example_run", "")
    if st == "run":
        return ('{% hint style="info" %}\n'
                f'**Worked example, run {when}.** A bare run of the prompt above on Progressa — no kit '
                'skills loaded — read with the annotations in the *Reading the output* tab.\n'
                '{% endhint %}')
    if st == "draft":
        return ('{% hint style="warning" %}\n'
                f'**Draft worked example, {when}.** A bare run on Progressa, annotated, but not yet '
                "checked against the kit's expected output. Read it with the annotations, not on its "
                'own.\n{% endhint %}')
    return ('{% hint style="warning" %}\n**Draft worked example.** Progressa is the fictional '
            'demonstration country used across all four Knowledge Products. This input and the output '
            'in the next tab are drafts: generated for the demo site and not yet re-run under the '
            'worked-example procedure.\n{% endhint %}')


def context_line(p):
    """A2 — a run made with earlier artefacts in the session is not a bare run; say so."""
    c = p.get("example_context")
    return (f'\nAlso in the session: {c} A bare run with only the input below will differ where the '
            f'annotations say so.\n') if c else ""


def example_tabs(p):
    """§10.4 — a play with no worked example ships with the prompt only, and says so."""
    if not p.get("example_input"):
        return """{% tab title="Example on Progressa — coming" %}
{% hint style="warning" %}
**Worked example pending.** The prompt above is final and runs today. The Progressa worked
example, the annotated reading and the what-next notes are added when this module's examples
are run (Module 1 shows the shape).
{% endhint %}

Run the play on [Progressa](../../start-here/progressa.md) yourself in the meantime: paste the
sections named in **Bring** above, and read the result against **Watch for**.
{% endtab %}
"""
    ann = "\n\n".join(f'<details>\n\n<summary>{i+1}. {t}</summary>\n\n{b}\n\n</details>'
                      for i, (t, b) in enumerate(p["annotations"]))
    return f'''{{% tab title="Example input" %}}
{example_warning(p)}

The bracketed context in the prompt was replaced with the following:
{context_line(p)}
{p["example_input"]}
{{% endtab %}}

{{% tab title="Example output" %}}
{{% hint style="warning" %}}
**Draft: model output, unverified.** Read it with the annotations in the next tab, not on its own.
{{% endhint %}}

{p["example_output"]}
{{% endtab %}}

{{% tab title="Reading the output" %}}
This is the teaching part of the play. Work through the output the way a chief architect would — what is earned, what is invented, what is missing.

{ann}

{{% hint style="danger" %}}
**Safeguard for this play.** {p["safeguard"]}
{{% endhint %}}
{{% endtab %}}
'''


def companion_section(s, mod):
    """5.3b: a play that exists on the site but has no video. Same anatomy as the main play,
    under its own heading, so the chain stays complete without inventing a video slot."""
    c = s.get("companion")
    if not c:
        return ""
    emoji, kind, kind_help = KIND_BADGE[c["kind"]]
    return f'''

***

## Also on this page — {c["title"]}

{{% hint style="info" %}}
**GitBook only — no video.** This play has no video of its own: it was folded into {s["id"]} when the module was tightened to six videos. The play is unchanged and still produces its artefact, so it lives here rather than being dropped.
{{% endhint %}}

{tooltip(dict(s, play=c), mod)}

{emoji} **{kind} play.** {kind_help}

**What it does.** {c["does"]}

{{% tabs %}}
{{% tab title="Prompt" %}}
Copy the prompt, replace the bracketed parts with your own context, and run it in the AI assistant of your choice.

```text
{c["prompt"]}
```

[Open in Claude](<{claude_link(c["prompt"])}>) *(experimental deep link: pre-fills the prompt in a new claude.ai chat; check the bracketed parts before sending)*

*Input, output and the kit skill are in the box above.*
{{% endtab %}}

{example_tabs(c)}

{{% tab title="What next" %}}
{derived_what_next(c)}

**This artefact feeds:** {feeds_text(c, mod)}

See the full chain in [Your country workbook](../your-country-workbook.md).
{{% endtab %}}
{{% endtabs %}}
'''


def render_subtopic(s, mod=1):
    p = s["play"]; emoji, kind, kind_help = KIND_BADGE[p["kind"]]
    srcs = "\n".join(f"- {x}" for x in s["sources"])
    return f'''---
description: "{desc(s["message"])}"
---

# {s["id"]} {s["title"]}

{video_block(s)}

> **Single message.** {s["message"]}

| | |
| --- | --- |
| **Persona** | {MODS[mod][0]["persona"]} |
| **PAERA anchor** | {s["paera"]} |
| **Your play** | {emoji} {p["title"]} · *{kind}* · produces workbook artefact **{p["artefact"].split(" — ")[0]}** |

## The concept
{concept_note(s)}
{concept_of(s)}

## Do this on your own sector — {p["title"]}

{tooltip(s, mod)}

{emoji} **{kind} play.** {kind_help}

**What it does.** {p["does"]}
{when_line(p)}
{{% tabs %}}
{{% tab title="Prompt" %}}
Copy the prompt, replace the bracketed parts with your own context, and run it in the AI assistant of your choice. Never paste personal data or unpublished documents — see [How to use the plays](../../start-here/how-to-use-the-plays.md).

```text
{p["prompt"]}
```

[Open in Claude](<{claude_link(p["prompt"])}>) *(experimental deep link: pre-fills the prompt in a new claude.ai chat; check the bracketed parts before sending)*

*Input, output and the kit skill are in the box above.*
{{% endtab %}}

{example_tabs(p)}
{{% tab title="What next" %}}
{p.get("what_next") or derived_what_next(p)}

**This artefact feeds:** {feeds_text(p, mod)}

See the full chain in [Your country workbook](../your-country-workbook.md).
{{% endtab %}}
{{% endtabs %}}

## Sources

{srcs}
{companion_section(s, mod)}'''

def module_chain(subs, mod):
    """Module-scoped subset of the workbook chain, derived from the play map's `consumes`
    so it cannot drift: an input from this module is an edge, one from elsewhere enters as
    a Module node, and A0 enters as the context pack."""
    art_of = {s["id"]: s["play"]["artefact"].split(" — ")[0] for s in subs}
    mod_of = {a: ALL[i][0] for i, a in
              [(k, v["artefact"].split(" — ")[0]) for k, v in bundles.PLAY_MAP.items() if k in ALL]}
    nodes, edges, extra = [], [], []
    for s in subs:
        p = s["play"]; a = p["artefact"].split(" — ")
        nodes.append(f'    {mermaid_id(a[0])}["{a[0]} {a[1]}\\n({s["id"]})"]')
        for c in [x.strip() for x in re.split(r",|;", p["input_ref"])]:
            if c.startswith("A0"):
                edges.append(f'    A0 --> {mermaid_id(a[0])}')
            elif c in art_of.values():
                edges.append(f'    {mermaid_id(c)} --> {mermaid_id(a[0])}')
            elif c in mod_of:
                n, cid = mod_of[c], f"M{mod_of[c]}_{mermaid_id(c)}"
                extra.append(f'    {cid}["Module {n}\\n{c}"]')
                edges.append(f'    {cid} --> {mermaid_id(a[0])}')
        for f in p["feeds"]:
            if f in ALL and ALL[f][0] == mod:
                edges.append(f'    {mermaid_id(a[0])} --> {mermaid_id(art_of[f])}')
            elif f in ALL:
                n = ALL[f][0]
                extra.append(f'    M{n}out["Module {n}"]')
                edges.append(f'    {mermaid_id(a[0])} --> M{n}out')
    head = ['    A0["A0 Country context pack\\n(Play 0)"]'] if any("A0 -->" in e for e in edges) else []
    body = head + nodes + list(dict.fromkeys(extra)) + list(dict.fromkeys(edges))
    return "```mermaid\nflowchart TD\n" + "\n".join(body) + "\n```"


def mermaid_id(artefact):
    """`A7 rev.2` and `A14 rev.2` are valid artefact ids but not valid mermaid node ids."""
    return artefact.replace(" ", "_").replace(".", "_")


def numbering_note(mod):
    """A6 — Module 2 opens at A9, which invites the question this answers."""
    if mod != 2:
        return ""
    return ('{% hint style="info" %}\n'
            "**On the artefact numbers.** They follow the curriculum order in which the plays were "
            "first written, so they are not always in module order: **A8** (comparator-country cards) "
            "is produced in Module 5, play 5.1.\n"
            "{% endhint %}\n\n")


def module_status_hint(mod):
    if STATUS[mod] == "prompts":
        return ('{% hint style="info" %}\n**Worked examples for this module are pending** \u2014 every prompt '
                'on these pages runs today.\n{% endhint %}\n')
    return ""


def render_module_page(mod):
    """§3.2 — the module template. Same shape for every module of every Knowledge Product."""
    M, subs = MODS[mod]
    rows = "\n".join(
        f'| [{s["id"]}](./{s["id"].replace(".", "-")}.md) | {s["title"]} | {s["message"]} | '
        f'{KIND_BADGE[s["play"]["kind"]][0]} {s["play"]["artefact"].split(" — ")[0]} | `{s["play"]["skill"]}` |'
        for s in subs)
    leaves = ", ".join(s["play"]["artefact"].split(" — ")[0] for s in subs)
    intro_title = f'KP1 Module {mod} — {M["title"]}'
    return f'''---
description: "{desc(M["blurb"])}"
icon: flag-checkered
---

# Module {mod} — {M["title"]}

{video_block(None, title=intro_title, runtime="~2 min")}

{module_status_hint(mod)}
**Persona:** {M["persona"]}.

**You leave with:** {leaves}, filed in your country workbook. Runtime {M["runtime"]}.

{M["blurb"]}

{numbering_note(mod)}## Subtopics

| # | Subtopic | Single message | Your play | Kit skill |
| --- | --- | --- | --- | --- |
{rows}

## How the plays chain in this module

{module_chain(subs, mod)}

The full chain, including where these artefacts come from and go next, is on [Your country workbook](../your-country-workbook.md).

{{% hint style="info" %}}
**Before you start.** Every play asks you to paste country context. Build it once with [Play 0](../../start-here/play-0.md) — that is **A0**, and it feeds the whole chain. No country to hand? Run them on [Progressa](../../start-here/progressa.md), the fictional demonstration country.
{{% endhint %}}

{{% hint style="info" %}}
New to the plays? Read [How to use the plays](../../start-here/how-to-use-the-plays.md) and [Working with AI](../../start-here/working-with-ai.md) first — part of the {READ_ONCE} of Start here, and they apply to every module of every Knowledge Product.
{{% endhint %}}
'''

def play_count(n):
    """Module 5 carries one play more than it has videos (the 5.3b companion)."""
    c = sum(1 + bool(s.get("companion")) for s in MODS[n][1])
    return f"{c} plays"


# ---- KP factsheet (ITU review: every KP root page carries one) ----
PERSONA_TAKEAWAY = {
    "Strategist": "A cabinet-ready case for commissioning a national EA: the fragmentation diagnostic, the re-use business case, the four asks to put to your minister, and the cross-country evidence that the method works.",
    "Architect": "The working method: reading a government in four layers, the shared metamodel, PAERA's principles adopted rather than drafted, a repository and an EA Board that can say no, and a full five-phase run on one sector.",
}


def _minutes(s):
    m = re.search(r"(\d+)\s*minutes", s)
    return int(m.group(1)) if m else 0


# Counts cover everything listed under "All videos": the KP intro, one intro per module, and
# every subtopic video. Keep them derived so the strip can never disagree with the list.
TOTAL_MIN = sum(_minutes(MODS[n][0]["runtime"]) for n in MODS) + 2 * len(MODS) + 3
TOTAL_VIDEOS = sum(len(MODS[n][1]) for n in MODS) + len(MODS) + 1
TOTAL_PLAYS = sum(int(play_count(n).split()[0]) for n in MODS)


def mod_link(n, text=None):
    """Link a module only once it is on the site; before that, name it in plain text."""
    label = text or f"Module {n}"
    return f"[{label}](module-{n}/README.md)" if n in PUBLISHED else label


def audience_rows():
    """One row per persona, derived from the module data so it cannot drift from the modules."""
    by = {}
    for n in sorted(MODS):
        by.setdefault(MODS[n][0]["persona"], []).append(n)
    rows = []
    for persona, ns in by.items():
        name = persona.split(" (")[0]
        who = persona.split(" (", 1)[1].rstrip(")")
        who = who[0].upper() + who[1:]
        mods = ", ".join(mod_link(n, str(n)) for n in ns)
        rows.append(f"| **{name}** | {who} | {mods} | {PERSONA_TAKEAWAY[name]} |")
    return "\n".join(rows)


def video_rows(n):
    """Every video in module `n`, plus the module's own two-minute intro."""
    M, subs = MODS[n]
    def row(num, title, runtime, yt, href=None):
        cell = f"[{num}]({href})" if href else num
        return f'| {cell} | {title} | {runtime} | {"[watch](%s)" % yt if yt else "*in production*"} |'
    out = [row(f"M{n}", f"Module {n} intro", "~2 min", None,
               f"module-{n}/README.md" if n in PUBLISHED else None)]
    for s in subs:
        href = f'module-{n}/{s["id"].replace(".", "-")}.md' if n in PUBLISHED else None
        out.append(row(s["id"], s["title"], s["runtime"], s.get("yt"), href))
    return "\n".join(out)


def video_list():
    blocks = []
    for n in sorted(MODS):
        M = MODS[n][0]
        blocks.append(f"""<details>

<summary><strong>Module {n} — {M["title"]}</strong> · {M["runtime"]}</summary>

| # | Video | Runtime | Status |
| --- | --- | --- | --- |
{video_rows(n)}

</details>""")
    return "\n\n".join(blocks)


def showcase():
    """The most finished play on the site — derived, so it moves as modules mature."""
    for n in sorted(MODS):
        if n in PUBLISHED and STATUS[n] in ("examples", "videos"):
            s = MODS[n][1][0]
            return n, s
    n = min(PUBLISHED)
    return n, MODS[n][1][0]


def render_home():
    """§3.1 — the KP home page, which doubles as the KP factsheet."""
    modrows = "\n".join(
        f'| {mod_link(n, str(n))} | {MODS[n][0]["title"]} | {MODS[n][0]["persona"].split(" (")[0]} | '
        f'{len(MODS[n][1])} | {play_count(n)} | ' + (f'{STATUS_LABEL[STATUS[n]]} |' if n in PUBLISHED else 'In production |')
        for n in sorted(MODS))
    sn, ss = showcase()
    ssref = f'module-{sn}/{ss["id"].replace(".", "-")}.md'
    return f'''---
description: "Companion site to the ITU/Giga Knowledge Product 1 video series — the concepts, the AI plays, and the worked example, in one place."
icon: house
---

# Developing a Gov Enterprise Architecture (GEA)

**ITU/Giga Knowledge Product 1** · {TOTAL_VIDEOS} videos in five modules · about {TOTAL_MIN} minutes of video · {TOTAL_PLAYS} AI plays · self-paced · free and open

This is the companion to the **Knowledge Product 1** video series on building a national Enterprise Architecture anchored on PAERA, the Public Administration Ecosystem Reference Architecture published under GovStack. The videos give you the concept in four to five minutes each. This site is where you do the work: every subtopic ends with a **play** (a structured prompt you run against your own country's context), a worked example on the fictional country Progressa, and an annotated reading of the result.

You do not leave with a certificate. You leave with a briefing pack about your own country.

{video_block(None, title="KP1 — Introduction to the knowledge product", runtime="~3 min", up="../")}

## Outline

| Module | Topic | Persona | Videos | Plays | Status |
| --- | --- | --- | --- | --- | --- |
{modrows}

*Prompts live — concept and play on every page, worked example pending. Worked examples live — Progressa run and annotated. Videos live — embeds on every page.*

{{% hint style="success" %}}
**How the course works.** **Watch** the video → **Play** it on your own country → **Read** the output the way an architect would → **Carry** the artefact into the next play. Each play produces a numbered artefact, and the artefacts feed each other; run a module and the outputs assemble into [your country workbook](your-country-workbook.md).
{{% endhint %}}

## Audience

| Persona | Who that is in practice | Modules | What you leave with |
| --- | --- | --- | --- |
{audience_rows()}

Both tracks share the [Start here](../start-here/README.md) chapter and the same demonstration country. A Strategist who watches only Modules 1 and 5 gets a complete argument; an Architect who watches only 2 to 4 gets a complete method. Most teams send one of each.

This is not a course for developers. It covers what to commission, how to judge it and how to govern it — not how to build a registry or configure an exchange layer.

## All videos

{video_list()}

{{% hint style="info" %}}
**Videos are in production.** Every page carries a placeholder where its embed will go; the plays below them work today. The [video index](../start-here/video-index.md) is the tracker, and it is the page to watch for links.
{{% endhint %}}

## Something to see

Before you commit an afternoon, open one page and look at what a play actually produces.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>▶️ A finished play, end to end</strong></td><td>{ss["id"]} carries the prompt, the Progressa input, the raw model output and a four-point annotated reading of it — what is earned, what is invented, what is missing.</td><td><a href="{ssref}">{ss["id"].replace(".", "-")}</a></td></tr>
<tr><td><strong>🚩 The demonstration country</strong></td><td>Progressa: bodies, systems, symptoms and a stalled flagship. Paste it into any play on the site and follow along without using your own country's data.</td><td><a href="../start-here/progressa.md">progressa</a></td></tr>
<tr><td><strong>📒 What you walk away with</strong></td><td>The artefact chain in dependency order — the pack of documents about your own country that the plays assemble.</td><td><a href="your-country-workbook.md">your-country-workbook</a></td></tr>
</tbody></table>

## Prerequisites

**No enterprise-architecture background is assumed.** You do not need TOGAF, ArchiMate or any certification; the vocabulary is built up from Module 2 onwards. If you already practise EA in a private-sector setting, Modules 1 and 4 are where the public-sector difference shows.

**What you do need:**

| | |
| --- | --- |
| **A real subject** | A ministry, sector or national programme you can describe in a few paragraphs. The plays act on your context, not on a case study. No subject to hand? Run everything on [Progressa](../start-here/progressa.md) instead. |
| **Enough access to describe it** | You should be able to name your country's main registers, digital programmes and institutions, or spend an afternoon on [Play 0](../start-here/play-0.md) building that picture from public sources. |
| **An AI assistant** | Any general assistant — Claude, ChatGPT, Gemini. A free account is enough. Nothing to install; the [ea-plays kit](../start-here/ea-plays-kit.md) is optional and only sharpens the plays for Claude users. |
| **Reading comfort** | You should be at ease with a policy document and a simple system diagram. No code is written anywhere in this Knowledge Product. |
| **{READ_ONCE.capitalize()}, once** | The first three pages of [Start here](../start-here/README.md) cover how the plays work and the ground rules for using an assistant on government material. Read them before your first play. |

Time: each subtopic is a four-minute video plus a ten-to-fifteen-minute play. A module is an afternoon. The whole Knowledge Product is roughly two working days spread over as long as you like.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><h3>🛡️</h3></td><td><strong>Working with AI</strong></td><td>What an assistant is good for, the four ways it misleads you, and the safeguards. Read once; applies to all four Knowledge Products.</td><td><a href="../start-here/working-with-ai.md">working-with-ai</a></td></tr>
<tr><td><h3>🏁</h3></td><td><strong>Module 1 — Why a PAERA-anchored EA</strong></td><td>Seven videos and seven plays for the Strategist making the case: symptoms, definition, business case, lifecycle, the four asks.</td><td><a href="module-1/README.md">module-1</a></td></tr>
<tr><td><h3>🔍</h3></td><td><strong>Play 0 — Build your country context</strong></td><td>Seven research prompts that produce the context pack every play asks you to paste. Run once, reuse everywhere.</td><td><a href="../start-here/play-0.md">play-0</a></td></tr>
<tr><td><h3>📒</h3></td><td><strong>Your country workbook</strong></td><td>The artefacts the plays produce, in dependency order — the retention mechanism of the course.</td><td><a href="your-country-workbook.md">your-country-workbook</a></td></tr>
</tbody></table>

## Where this sits

KP1 is the first of four ITU/Giga Knowledge Products. KP2 covers the Government Interoperability Framework, KP3 the national DPI roadmap, KP4 building-block services. All four use [**Progressa**](../start-here/progressa.md) as the single worked example and share one set of [ground rules](../start-here/working-with-ai.md). The underlying method is GEATDM, the Generic EA Target Architecture Development Method; PAERA v1.0 is at [paera.govstack.global](https://paera.govstack.global).

{{% hint style="info" %}}
**Use this site from your AI assistant.** Every page is also published as plain Markdown, and the site exposes an `llms.txt` and an MCP endpoint at `/~gitbook/mcp`. Point Claude, ChatGPT or another assistant at the site and ask it to *run play 1.1 with the following context* — the site becomes the tool's reference, not just yours.
{{% endhint %}}
'''


P_REWRITE = "Below is a prompt I am using for EA work, and the output is too vague or unreliable: [paste your draft prompt]. Rewrite it into the four-part shape: (1) a clear statement of the input I will paste; (2) the task broken into named outputs; (3) an explicit output format (e.g. a table with named columns plus a short summary); (4) a safeguard line that names the specific way THIS prompt could mislead me — not generic 'AI can make mistakes'. Point out where my original was vague and what you changed. Output: the rewritten prompt, then a 3-bullet note on what was weak in the original."

P_DEIDENTIFY = "Below is a prompt I am about to send to a public AI assistant for EA work [paste your intended prompt, including the context you would paste in]. Rewrite it so that any personal data, real citizen records, security configuration, unpublished or confidential government material is replaced with neutral placeholders (e.g. 'a learner', 'a powerful programme', 'country X', 'the sector registry'), while keeping enough structure for the task to still work. Then list everything you replaced and why it was sensitive. Output: the de-identified prompt, then a table of (removed item / category / placeholder used)."

def drop_self(cards, ref):
    return "\n".join(l for l in cards.split("\n") if f'href="{ref}.md"' not in l)

FOOTER_CARDS = """<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧭 How to use the plays</strong></td><td>What a play is, the badges, the two-step rhythm.</td><td><a href="how-to-use-the-plays.md">how-to-use-the-plays</a></td></tr>
<tr><td><strong>🔌 The ea-plays kit</strong></td><td>The optional Claude layer: fourteen skills, one per artefact family.</td><td><a href="ea-plays-kit.md">ea-plays-kit</a></td></tr>
<tr><td><strong>🔍 Play 0</strong></td><td>Build the country context pack every play consumes.</td><td><a href="play-0.md">play-0</a></td></tr>
</tbody></table>"""

def render_start_here():
    return f"""---
description: "The shared chapter for all four ITU/Giga Knowledge Products — how the plays work, how to work with an AI assistant, and the demonstration country."
icon: signs-post
---

# Start here

Four Knowledge Products, one method. Each one is a series of short videos, and each video hands you a **play**: a structured prompt you run against your *own* country's context, with a worked example and an annotated reading of the result.

{{% hint style="success" %}}
**Watch → Play → Read → Carry.** Watch the video for the concept. Run the play on your own ministry. Read the output the way an architect would — what is earned, what is invented, what is missing. Carry the artefact into the next play. Run a whole module and you leave with a pack of documents about your own country, not a certificate.
{{% endhint %}}

This chapter holds everything that is true across all four Knowledge Products. Read the first three pages once — {READ_ONCE} — and you never need them again.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><h3>🧭</h3></td><td><strong>How to use the plays</strong></td><td>The mechanics: what a play is, the three kinds, the two-step rhythm, and the five habits from the test runs.</td><td><a href="how-to-use-the-plays.md">how-to-use-the-plays</a></td></tr>
<tr><td><h3>🛡️</h3></td><td><strong>Working with AI — the ground rules</strong></td><td>A drafting partner, not an oracle. Why it invents, why it agrees with you, what that costs, and the four safeguards.</td><td><a href="working-with-ai.md">working-with-ai</a></td></tr>
<tr><td><h3>🪄</h3></td><td><strong>Prompting techniques</strong></td><td>The four-part prompt that every play on this site uses, and how the vendor guides say the same thing.</td><td><a href="prompting-techniques.md">prompting-techniques</a></td></tr>
<tr><td><h3>🔌</h3></td><td><strong>The ea-plays kit</strong></td><td>The optional Claude layer. Two lines to install; the plays run bare without it.</td><td><a href="ea-plays-kit.md">ea-plays-kit</a></td></tr>
<tr><td><h3>🔍</h3></td><td><strong>Play 0 — Build your country context</strong></td><td>Seven research prompts that produce A0, the pack every other play asks you to paste.</td><td><a href="play-0.md">play-0</a></td></tr>
<tr><td><h3>🚩</h3></td><td><strong>Progressa</strong></td><td>The fictional demonstration country used in every worked example, in every Knowledge Product.</td><td><a href="progressa.md">progressa</a></td></tr>
<tr><td><h3>🎬</h3></td><td><strong>Video index</strong></td><td>Every video, its status and its link. The tracker while the series is in production.</td><td><a href="video-index.md">video-index</a></td></tr>
<tr><td><h3>🏛️</h3></td><td><strong>KP1 — Government Enterprise Architecture</strong></td><td>Five modules on commissioning a national EA anchored on PAERA. {kp_status_line()}.</td><td><a href="../kp1/README.md">kp1</a></td></tr>
</tbody></table>

## The four Knowledge Products

| | Knowledge Product | For | Status |
| --- | --- | --- | --- |
| **KP1** | [Government Enterprise Architecture](../kp1/README.md) | Strategist and Architect — commissioning and running a national EA | {kp_status_line()} |
| **KP2** | Government Interoperability Framework | Strategist and Architect — the legal, organisational and technical configuration of exchange | In production |
| **KP3** | National DPI roadmap | Strategist | Planned |
| **KP4** | Building-block services | Architect | Planned |

All four use [**Progressa**](progressa.md) as the single worked example, and all four point back to this chapter for the ground rules.
"""

def render_howto():
    return f"""---
description: "The mechanics of a play — what it is, what input it needs, and the rhythm of running one. Read once, apply in all four Knowledge Products."
icon: compass
---

# How to use the plays

Every subtopic in every Knowledge Product ends with a **play**: a prompt you run in an AI assistant against your own country's context, a worked example on Progressa, and an annotated reading of the result. This page is the mechanics. The trust rules are next door on [Working with AI](working-with-ai.md); the prompt shape is on [Prompting techniques](prompting-techniques.md).

## What a play is — and is not

A play is not content to be shown. It is something you *do*. The video gives you the concept and the motivation; the play is where your own situation enters, and the learning happens in the back-and-forth with the assistant and in judging what it produced. Watching someone else paste a prompt teaches nothing; reading an output the way an architect would teaches a lot. That is why every *completed* play page has a **Reading the output** tab, and why it is the longest one.

## The three kinds

Each play carries a kind badge so you know what to bring:

| Badge | Kind | You bring | You get |
| --- | --- | --- | --- |
| 🔍 | **Diagnostic** | 1–3 paragraphs describing your situation | An assessment with evidence and gaps |
| ✍️ | **Drafting** | A few facts — posts, institutions, programmes | A first draft of a document you will edit |
| 🔁 | **Translation** | A question in one group's language | The same question restated for another group |

## What the box at the top of each play tells you

Every play opens with the same six-line box. It is the whole contract:

| Line | Means |
| --- | --- |
| **Kind · artefact** | which badge, and which numbered artefact the play adds to your workbook |
| **Bring** | the input, and which section of A0 it comes from |
| **Get** | the output shape — always text, so it can feed the next play |
| **Time** | how long the run takes, including reading the result |
| **With the kit** | the optional [ea-plays](ea-plays-kit.md) skill for this play; ignore it if you are not using Claude |
| **Watch for** | the one specific way *this* play can mislead you |

## The rhythm: build the input, then run the play

Every play asks you to paste context — a landscape brief, a programme list, a roles register. You will not have it to hand. In practice each play is two steps: first a research prompt that builds the input from public sources, then the play itself. The research prompts are collected on one page, [Play 0 — Build your country context](play-0.md); run it once and the **country context pack (A0)** feeds every play in every module.

## Five habits from the test runs

**Text in, text out.** Ask for the output as text in the chat — not a file, a screenshot or a chart. A table trapped in an image cannot be pasted into the next play; a .docx cannot be read by the assistant that runs 1.7 after 1.6.

**Expect clarifying questions.** Some plays (tool selection, cost cases) will ask you two or three questions before answering — repository size, budget posture. Answer them and record the answers with the input; they are part of the artefact.

**Strip the assistant's reasoning before you paste.** "The search confirms… let me produce the table" is the model talking to itself. Cut it before the output becomes the next input.

**Posts, not names.** Context prompts pull real office-holders' names from the web. The plays need posts; remove names before an artefact goes into a briefing or onto a shared page.

**Shorten the brackets.** The bracketed placeholders are suggestions. "For an Education minister in [country X]" works as well as the full list — a leaner prompt with your real context beats a complete template with none.

## How the plays chain

The plays are not a prompt library. In each module the outputs feed each other — the fragmentation diagnostic feeds the business case, the RACI feeds the Board terms of reference — and a learner who runs a whole module leaves with a set of artefacts about their own country. The chain is written out in each Knowledge Product's workbook: for KP1 it is [Your country workbook](../kp1/your-country-workbook.md). If you have no country to hand (a student, a donor analyst), run the plays on [**Progressa**](progressa.md), the fictional demonstration country used in every Knowledge Product; the worked examples show you what to expect.

{drop_self(FOOTER_CARDS, 'how-to-use-the-plays')}
"""

def render_working_with_ai():
    return f"""---
description: "A drafting partner, not an oracle — why an assistant invents, why it agrees with you, what that costs, and the four safeguards every play depends on."
icon: shield
---

# Working with AI — the ground rules

These plays put an AI assistant in the middle of public-sector architecture work. That is a deliberate choice and it comes with conditions. This page is the conditions. Every claim on it about how assistants behave links to a source you can open — the course's own *cite or discard* rule, applied to the course.

## Drafting partner, not oracle

AI produces a strong first draft in minutes — a gap analysis, a terms of reference, a business case. It does not produce a finding you can trust without checking. It states a wrong section number, a plausible invented figure, a confident claim with no basis, in exactly the same tone as a correct one. **The draft is where your work starts, not where it ends.** Treat every output as a hypothesis to verify, never a fact to forward.

## Why it makes things up

This is not a bug that a better model will remove. Language models are trained and scored in ways that reward a confident guess over an admission of ignorance — a system that never says "I don't know" scores better on the benchmarks the field uses. {cite("oai-hallucinate")} sets this out from inside a vendor. The learner's takeaway is one sentence: **fluency is not evidence.** A smooth paragraph and a correct paragraph look identical from the outside.

## What that costs when nobody checks

If you want the concrete version rather than the theory, read a few entries from {cite("charlotin", "the AI Hallucination Cases database")} — well over a thousand court decisions worldwide (the database is updated daily) in which a fabricated citation or an invented quotation reached a judge. These are professionals under a duty of care, filing documents they did not check. The pattern is exactly the risk in an architecture programme: a comparator country that did not do what you say it did, a standard clause that does not exist, a figure with no source.

This is why plays 1.1 and 1.5 both say *open the source*, and why the workbook is worth nothing until each row is validated.

## It agrees with you

An assistant tends to accept the framing in your question. Ask "why is our fragmentation severe?" and you will get reasons; ask "why is it fine?" and you will get reasons for that too. {cite("oai-sycophancy")} is a vendor's own account of shipping a model that flattered its users' framing and having to withdraw it.

This is why every diagnostic play in this course carries a line like *claim Severe only if the evidence is in the input* — the safeguard exists to stop the assistant agreeing with the severity you already believe.

## What a government expects of its staff

You are not the first public servant to use one of these tools on official work, and the expectations are written down. {cite("uk-playbook")} sets ten principles for civil servants — know the limitations, keep a human accountable, protect data, buy responsibly. It is the reference point behind two of the four safeguards below. For the regional policy frame, {cite("au-strategy")} covers responsible and equitable use across the African Union; for the wider picture of what governments are actually doing with these tools, {cite("oecd-governing")} surveys some two hundred cases.

## The four safeguards

Every play on this site depends on these. They are not advice; they are the conditions under which the plays are safe to run.

**1. Verify against a named source.** Every fact the assistant states is a hypothesis until you check it against a document, a system or a named person. A wrong reference in a deliverable or a made-up statistic in a cabinet briefing damages your credibility more than a gap in the work would. *(UK Playbook principle: know the limitations.)*

**2. Cite or discard.** Any claim about the outside world — what a country did, what a standard requires — needs a real, checkable source. Assistants fabricate citations as fluently as they write prose. Open the source. If it does not say what the assistant claims, discard the claim, not just the citation.

**3. Never paste confidential or personal data.** No citizen records, security configurations, unpublished cabinet papers, or anything your data-protection act covers. The plays never need it: run every one with placeholders — *a learner*, *a powerful programme*, *country X*. Treat the prompt box as a public place, because it is. *(UK Playbook principle: use these tools lawfully, ethically and responsibly.)*

**4. Keep the decision human.** The assistant prepares; you decide. The Board rules on the gate paper, the architect defends the ranking, counsel approves the ToR, the minister owns the roadmap. When something the assistant drafted turns out wrong, the answer is never "the AI said so" — it is your name on the decision. *(UK Playbook principle: you know who is responsible.)*

## Two meta-plays

Two plays are about the plays themselves. Neither belongs to a module; both belong here.

{{% hint style="warning" %}}
**De-identify before you send.** If your context contains anything sensitive, strip it first with this play — and run *this step only* on a local or on-device model, never a public one, or the stripping defeats itself. No local model? Do it by hand: the table the play asks for — removed item / category / placeholder — is a ten-minute checklist a person can apply before pasting.

```text
{P_DEIDENTIFY}
```
{{% endhint %}}

{{% hint style="info" %}}
**Your own prompt is vague?** The four-part rewrite lives on [Prompting techniques](prompting-techniques.md) — paste your draft prompt in and get the shape the plays use back.
{{% endhint %}}

## Which assistant?

The plays are tool-neutral. They work in Claude, ChatGPT, Gemini or a locally hosted model; the four-part prompt and the safeguards matter more than the vendor. Each prompt block has an **Open in Claude** link that pre-fills a new chat — treat it as a convenience, not a recommendation, and check the bracketed parts before sending. Two exceptions of substance: for comparator and evidence plays use an assistant that can browse and cite, and for the de-identification play above use one that runs locally.

## With the kit

The optional [ea-plays kit](ea-plays-kit.md) automates the safeguard that is easiest to skip. Its `cite-or-discard` skill fetches every URL a draft rests on, grades the source by tier, and drops what does not survive — then puts the count of unverified lines in a header at the top of the output. It does not remove your judgement; it makes the gap visible.

## Reading list

Everything asserted above, with dates. Open the source rather than trusting this page.

{reading_list(["uk-playbook", "au-strategy", "oecd-governing", "oai-hallucinate", "oai-sycophancy", "charlotin"])}

{drop_self(FOOTER_CARDS, "working-with-ai")}
"""

def render_prompting():
    return f"""---
description: "The four-part prompt every play on this site uses, how the vendor guides say the same thing, and where to go deeper."
icon: wand-magic-sparkles
---

# Prompting techniques

Every play in every Knowledge Product has the same shape. This page is that shape, plus the public guides that arrive at it independently — so you can write your own plays when the course runs out.

## The four-part prompt

{{% stepper %}}
{{% step %}}
### Name the input you are pasting
"Below is my Discovery brief." "Below are five of my country's programmes." The assistant should know what kind of thing it is looking at.
{{% endstep %}}
{{% step %}}
### Break the task into named outputs
"Score the capabilities, list the gaps, rank them." Not "help me with my architecture".
{{% endstep %}}
{{% step %}}
### State the exact output format
"A four-row table with these columns, plus three bullets." Formats you can paste into a document.
{{% endstep %}}
{{% step %}}
### Add a safeguard line for this prompt's specific risk
Not "AI can make mistakes" — that helps no one. Name the way *this* prompt can mislead you: "claim Severe only if the evidence is in the input"; "discard any country example whose source does not say what you claim".
{{% endstep %}}
{{% endstepper %}}

Play 1.1 is the worked example: it names the input (*a description of country X's digital landscape*), names the outputs (*a 4-row table, then 3 bullets*), fixes the format (*symptom, severity, evidence, cost direction*) and closes with the safeguard (*be conservative — claim Severe only if the evidence is in the input*). Read [1.1](../kp1/module-1/1-1.md) with the four parts in mind and you can write the fifth play yourself.

{{% hint style="info" %}}
**Your prompt is vague? Run this meta-play.** Paste your draft in and get the four-part version back.

```text
{P_REWRITE}
```
{{% endhint %}}

## How the vendors say the same thing

Three vendors publish prompting guidance. None of them talks to public servants, and they use different words, but the structure is the same one.

| Guide | Their structure | Maps to |
| --- | --- | --- |
| {cite("google-prompting")} | Persona · Task · Context · Format | Persona ≈ the play's persona line · Task ≈ the named outputs · Context ≈ "Below is …" · Format ≈ the output contract |
| {cite("oai-prompting")} | be specific, iterate, set the tone | Named outputs; the "re-run it with the correction" habit |
| {cite("anthropic-prompting")} | clarity and examples, structure, roles, thinking, prompt chaining | Chaining is the workbook: A1 feeds A3 feeds A7 |

**What none of the three has: the safeguard line.** That is this course's addition, and it is the part that matters in government. A vendor guide optimises the answer; the safeguard names how the answer can fool you.

## Where the plays use each technique

| Technique | Named by | Where you see it |
| --- | --- | --- |
| Give context, don't assume | Google, OpenAI, Anthropic | "Below is …" — every play, fed by A0 |
| Set a role | Google (Persona), Anthropic (roles) | the persona line on each module page |
| Name the outputs | all three | "Output a 4-row table plus 3 bullets" |
| Fix the format | Google (Format), Anthropic (structure) | the output contract in every prompt |
| Give an example | OpenAI, Anthropic | the *Example input* tab is the example |
| Iterate | OpenAI | the *What next* tab — re-run with what you learned |
| Chain prompts | Anthropic | the workbook: each artefact is the next play's input |
| Name the specific failure | *nobody* | the safeguard line — the course's own addition |

## Going deeper

For the vocabulary — few-shot, chain-of-thought, retrieval-augmented generation, and a section on reducing hallucination — {cite("dair")} is the community reference and stays current.

For working with an assistant rather than only prompting one, {cite("ai-fluency")} is a free short course built on four Ds: Delegation, Description, Discernment, Diligence. Two of them are this course in other words — Discernment is the *Reading the output* tab, Diligence is the four safeguards.

## Skills — what they are

A *skill* is a prompt with its procedure, its references and its output contract packaged so an assistant loads it on demand instead of you pasting it. The plays on this site run bare as prompts; the [ea-plays kit](ea-plays-kit.md) is the same fourteen procedures as skills, for Claude.

## Reading list

{reading_list(["google-prompting", "oai-prompting", "anthropic-prompting", "dair", "ai-fluency"])}

{drop_self(FOOTER_CARDS, "prompting-techniques")}
"""

KIT_SKILLS = [
 ("country-context-pack", "Play 0, 1.1", "the seven-section A0 pack every other play consumes"),
 ("cite-or-discard", "runs inside most of the others", "fetches each URL, grades the source by tier, and drops what does not survive"),
 ("ea-institution-mapper", "1.2, 2.4, 2.5, 4.1, 4.8, 5.3b", "bodies, legal mandates, systems, posts, PAERA classification"),
 ("ea-cost-case", "1.3, 5.4", "the re-use case — assumptions first, benchmarks named, tables not charts"),
 ("ea-legal-context", "1.4, 1.7, 2.3", "the national legal register, so a ToR cites statutes that exist"),
 ("paera-reference-check", "1.5, 2.2, 2.3", "checks against PAERA as published, not the video's simplification"),
 ("ea-governance-drafter", "1.6, 1.7, 3.1, 3.3–3.7, 5.2", "ToR, RACI, repository policy, gate checklist, scorecard, risk register"),
 ("bdat-assessor", "2.1, 2.5, 2.6", "the four-layer read and the metamodel conformance check"),
 ("bb-landscape-check", "2.7, 4.4, 4.5, 4.7, 5.3", "which shared building blocks are actually **live**, not planned"),
 ("bb-sourcing-researcher", "2.7, 4.4", "which products could supply a block the country lacks"),
 ("ea-tool-evaluator", "3.2", "tool scoring on verifiable facts, plus a real export test"),
 ("ea-method-runner", "4.2–4.8, 5.3, 5.3b", "the five-phase lifecycle, reading and writing your workbook"),
 ("ea-comparator-evidence", "5.1, 5.4, 5.6", "comparator cards with primary sources and one contested case"),
 ("ea-open-learning-catalogue", "5.5", "a capability plan whose links were checked today"),
]

SKILL_ADDS.update({n: w for n, _p, w in KIT_SKILLS})


def render_kit():
    rows = "\n".join(f'| `{n}` | {p} | {w} |' for n, p, w in KIT_SKILLS)
    return f"""---
description: "The optional Claude layer for the plays — fourteen skills, one per artefact family. Two lines to install; the plays run bare without it."
icon: plug
---

# The ea-plays kit

**The plays run bare in any assistant.** They are the product; this kit is optional. What it adds is the step a learner skips: it brings the named source in *before* it writes the draft, and checks the draft *after*.

## Install

```
/plugin marketplace add alaponin/ea-plays-kit
/plugin install ea-plays@ea-plays-kit
```

Choose the **user** scope so the kit follows you into every folder. Later, `/plugin marketplace update ea-plays-kit` picks up a new version.

Not using Claude Code? Two other routes from the same source tree:

- **Cowork** — download `ea-plays-v<version>.plugin` from the GitHub release, then install it at Settings → Capabilities.
- **The Claude app, one skill at a time** — download the repository (**Code → Download ZIP**) and upload one folder from `plugins/ea-plays/skills/` at Settings → Capabilities → Skills. Each skill folder is self-contained.

Source and licence: [github.com/alaponin/ea-plays-kit](https://github.com/alaponin/ea-plays-kit) — content CC BY 4.0, scripts MIT.

## The provenance header

Every skill's output opens with the same header: the country, the date it was built, the count of sources by tier, and the count of unverified lines. That header is what makes the chain work — the next play can read the artefact and see what it rests on, and so can you. It is also the honest version of the *cite or discard* safeguard: instead of a claim that everything was checked, a number saying how much was not.

## Play → skill

Each play has exactly one primary skill. `cite-or-discard` runs *inside* most of the others; you do not call it directly.

| Skill | Plays it leads | What it adds |
| --- | --- | --- |
{rows}

Each play page carries a **With the kit** line naming the skill for that play. If you are not using Claude, ignore it — the prompt is the play.

## The rules every skill follows

- **Text in, text out.** No file, no chart, no image. The next play has to be able to read the output.
- **Posts, not names.** Never the name of a real office-holder, even a public one.
- **Cite or discard.** Each claim carries a URL, a tier and a date. A claim without one is marked ⚠ or dropped. A fetch the server refuses gives *unverified* — never *unsupported*.
- **The safeguard comes back to you.** Every output ends with what stays your judgement.

{drop_self(FOOTER_CARDS, "ea-plays-kit")}
"""

def render_workbook():
    """The artefact map for the whole of KP1. Rows are derived from the play map, so the
    workbook cannot disagree with the module pages or the kit."""
    def rows(n):
        out = []
        for s in MODS[n][1]:
            for p in [s["play"]] + ([s["companion"]] if s.get("companion") else []):
                a = p["artefact"].split(" — ")
                pid = p.get("id", s["id"])
                feeds = ", ".join(p["feeds"]) or "—"
                out.append(f'| **{a[0]}** | {a[1]} | [{pid}](module-{n}/{s["id"].replace(".", "-")}.md) '
                           f'{KIND_BADGE[p["kind"]][0]} | {p["input_ref"]} | {feeds} |')
        return "\n".join(out)

    tables = "\n\n".join(
        f'### Module {n} — {MODS[n][0]["title"]}\n\n'
        f'| Artefact | What it is | Produced by | Consumes | Feeds |\n'
        f'| --- | --- | --- | --- | --- |\n{rows(n)}'
        for n in sorted(MODS))

    return f'''---
description: "The artefacts the plays produce, in dependency order — run a module, leave with a briefing pack about your own country."
icon: book-open
---

# Your country workbook

Each play produces one artefact. Run them in order and the artefacts feed each other; run all seven plays of Module 1 and you hold a **draft cabinet-briefing pack** for your country. Run all five modules and you hold the architecture itself. This page is the map. If you have no country to hand, use Progressa — the worked examples on each play page show what each artefact looks like for it.

{{% hint style="info" %}}
Keep the artefacts in one folder, named as below. The **Consumes** and **Feeds** columns are the chain: every play names what it reads and what reads it, so you can start anywhere and see what you need first.
{{% endhint %}}

## A0 — the pack everything starts from

| Artefact | What it is | Produced by | Feeds |
| --- | --- | --- | --- |
| **A0** | Country context pack — landscape brief, programme list, ministry context, roles register, characteristics, sector bodies, legal list | [Play 0](../start-here/play-0.md) 🔍 | the whole chain below |

## Module 1 — the cabinet-briefing pack

```mermaid
flowchart TD
    A0["A0 Country context pack\\n(Play 0)"] --> A1["A1 Fragmentation diagnostic\\n(1.1)"]
    A0 --> A2
    A0 --> A6
    A1 --> A3["A3 Re-use business case\\n(1.3)"]
    A1 --> A5["A5 PAERA foundation map\\n(1.5)"]
    A2["A2 Ministerial explainer\\n(1.2)"] --> A4["A4 Joint business–IT agenda\\n(1.4)"]
    A4 --> A6["A6 Phase RACI + role gaps\\n(1.6)"]
    A5 --> A6
    A3 --> A7["A7 Governance Board ToR\\n(1.7)"]
    A6 --> A7
    A7 --> PACK["Cabinet-briefing pack\\n→ Module 3"]
```

## Every artefact in KP1

*The numbers follow the curriculum order in which the plays were first written, not module order: **A8** (comparator-country cards) is produced in Module 5, play 5.1.*

{tables}

## What the Module 1 pack contains when you are done

1. **The problem:** A1, validated against named sources.
2. **The words:** A2, checked by a sector CIO.
3. **The money:** A3, directional, with a costing exercise commissioned.
4. **The first decisions:** A4, the agenda for a Board that does not yet exist.
5. **What we keep and what we build:** A5, corrected against the actual documents.
6. **Who does what, and who is missing:** A6, the role-gap list above the matrix.
7. **The Board:** A7, after legal counsel.

Bring items 1–7 as a single pack and make the four asks from [1.7](module-1/1-7.md) together, not in pieces.

## Where the chain goes after KP1

Module 5 closes KP1 with the case for sustained commitment (A29 rev.2). In KP2 the chain continues into the build pack, where the play outputs become the inputs to the interoperability proving slice. Those pages are added as KP2 is published.
'''


def render_play0():
    from play0 import SECTIONS
    blocks=[]
    for x in SECTIONS:
        blocks.append(f'''## §{x["n"]} {x["title"]}

**Feeds:** {x["feeds"]}. **Kit skill that helps:** `{x["skill"]}`.

```text
{x["prompt"]}
```

[Open in Claude](<{claude_link(x["prompt"])}>) *(experimental)*

**You get:** {x["output"]}''')
    return '''---
description: "Build the country context pack (A0) once — the input every play asks you to paste."
icon: magnifying-glass
---

# Play 0 — Build your country context

Every play on this site begins "Below is a description of [country X]'s…". This page is where that description comes from. Run these research prompts once, with an assistant that can browse and cite, and keep the results together as your **country context pack — artefact A0** in [Your country workbook](../kp1/your-country-workbook.md). Each later play names the section it consumes.

{% hint style="info" %}
**Rules for the pack.** Public sources only; a source URL and data year on every claim; posts, not names; date-stamp the pack; ask for text in the chat, not files. Where a document or body cannot be found, record that — an honest gap is itself a finding. If you have no country to hand, the same sections are already written for [Progressa](progressa.md).
{% endhint %}

{% hint style="warning" %}
**Verify before you build on it.** These briefs are model research, not your findings. Open the sources on anything you will carry into a briefing. The context prompts here were tested on The Gambia in August 2026 and are written in the four-part shape from [How to use the plays](how-to-use-the-plays.md).
{% endhint %}

''' + "\n\n".join(blocks) + '''

## What the pack looks like when done

Seven short sections, each dated and sourced, in one document you can paste from. Sections 1–5 are enough for Module 1; sections 6–7 are consumed by Modules 2 and 4. Expect to add to it as Discovery (Module 4) replaces desk research with interviews and system inventories — the pack is the first draft of your Discovery brief.
'''

def render_progressa():
    from fixture import (PROGRESSA_LANDSCAPE, PROGRESSA_PROGRAMMES, PROGRESSA_ROLES,
                         PROGRESSA_INITIATIVES, PROGRESSA_OPMODEL, PROGRESSA_CHARACTERISTICS,
                         PROGRESSA_LEGAL)
    return f'''---
description: "The fictional demonstration country used in every Knowledge Product — its bodies, systems, symptoms and stalled flagship, ready to paste into any play."
icon: flag
---

# Progressa — the demonstration country

Progressa is fictional, on purpose. It is the single worked example across all four Knowledge Products: KP1's Module 4 runs the whole lifecycle on its education sector, the KP2 build pack proves an exchange between its bodies, and every play on this site has a Progressa worked example. If you have no country of your own to hand — a student, a donor analyst, a trainer — run the plays on Progressa with the sections below as your context pack. An assistant reading this site over its MCP endpoint can pull this page directly.

## The sector in one paragraph

Progressa's education sector has five bodies that matter. The Ministry of Education, Youth and Skills (MoEYS) sets policy and funds schools. The Progressa National Examinations Authority (PNEA) runs examinations and certifies results. The Progressa Learner Registry (PLR) is the single list of learners the Education Sector Plan calls for — planned, not started; today three bodies keep their own. The Progressa National ID Authority (PNIA) owns the person identity every sector reuses. And the Progressa Digital Government Authority (PDGA) runs the shared data-exchange backbone (Linkup) and coordinates payments (PayPro). A policy unit, a service authority, two registries and a shared-platform provider.

The problem the minister feels: a learner is registered three times — in the school census, by the Examinations Authority, and by a social grant programme — and none of the lists agree. A parent proves the child's identity on paper at every counter. The minister has promised a **single learner record** that follows the child from primary school to university, and it cannot be delivered because the systems do not fit together. That is the stalled flagship.

## Baseline (2026)

Population 16.8 million, median age 18.7; 8,200 schools, ~47,000 teachers; primary enrolment 92%, completion 73%; mobile penetration 87%, internet 38%, school connectivity uneven. National ID since 2018 (78% adult coverage), e-KYC since 2024. Linkup (X-Road 7.x) in pilot since 2025. EMIS district-level only; no National Learner Registry; paper learner records in primary schools. GovStack member since 2024; 50-in-5 DPI pilot country; Digital Transformation Roadmap 2024–2030 in cabinet approval.

## Context pack sections — paste as needed

{{% tabs %}}
{{% tab title="§1 Digital landscape" %}}
{PROGRESSA_LANDSCAPE}
{{% endtab %}}
{{% tab title="§2 Programmes" %}}
{PROGRESSA_PROGRAMMES}
{{% endtab %}}
{{% tab title="§3 Operating-model question" %}}
{PROGRESSA_OPMODEL}
{{% endtab %}}
{{% tab title="§4 Roles register" %}}
{PROGRESSA_ROLES}
{{% endtab %}}
{{% tab title="§5 Characteristics" %}}
{PROGRESSA_CHARACTERISTICS}
{{% endtab %}}
{{% tab title="§6 Initiatives" %}}
{PROGRESSA_INITIATIVES}
{{% endtab %}}
{{% tab title="§7 Legal and policy" %}}
{PROGRESSA_LEGAL}
{{% endtab %}}
{{% endtabs %}}

## Where Progressa appears

Module 1: worked example on every play page. Module 4: the five-phase lifecycle run end to end on this sector. GEATDM Education Sector Guide §5.2 (the learner journey) and §7 (the implementation path in four waves). KP2: the Linkup federation and the once-only exchange PNEA ← PNIA + PLR in the build pack.
'''

def render_videos():
    def row(n, title, runtime, page, yt):
        link = f"[watch]({yt})" if yt else "*in production*"
        return f'| {n} | {title} | {runtime} | {page} | {link} |'
    blocks = []
    for n in sorted(PUBLISHED):
        M, subs = MODS[n]
        rows = "\n".join(
            row(s["id"], s["yt_title"], s["runtime"],
                f'[{s["id"]} {s["title"]}](../kp1/module-{n}/{s["id"].replace(".", "-")}.md)', s.get("yt"))
            for s in subs)
        blocks.append(
            f'**Module {n} — {M["title"]}** · {M["runtime"]}\n\n'
            f'| # | Title | Runtime | Page | Status |\n| --- | --- | --- | --- | --- |\n'
            + row(f"M{n}", f'Module {n} — {M["title"]}', "~2 min",
                  f'[Module {n}](../kp1/module-{n}/README.md)', None) + "\n" + rows
            + (f'\n\nPlaylist: *{M["playlist"]}* (pending).' if M.get("playlist") else ""))
    modblocks = "\n\n".join(blocks)
    return f"""---
description: "Every video, its status and its link — the tracker while the series is in production."
icon: video
---

# Video index

Each subtopic page carries its video at the top. While a video is still in production the page shows a placeholder box and the play below it works anyway — the concept section carries what the video will say. This page is the index and the tracker.

{{% hint style="info" %}}
**The handoff convention.** Every video's recap slide carries an on-screen practice box, un-narrated: *Do this on your own sector. Run the prompt in the description on your own ministry — it gives you [the artefact]. Before the next video.* The YouTube description links the **play page**, never the raw prompt, so a prompt can be improved without touching the video. A pinned comment repeats the link as a backup.
{{% endhint %}}

## KP1 — Government Enterprise Architecture

| | Title | Runtime | Page | Status |
| --- | --- | --- | --- | --- |
{row("Intro", "KP1 — Introduction to the knowledge product", "~3 min", "[KP1 home](../kp1/README.md)", MODULE["intro_url"])}

{modblocks}

KP2 is in production; its rows are added as each module's pages are published.

## When a video lands

Set the URL in the module data and re-render: the placeholder block on the subtopic page becomes the embed, the **Watch first** line appears, and the row above flips to *watch*.
"""

# ---- write files and manifest ----
def add(ref, title, path, md, parent=None):
    fn = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(fn), exist_ok=True)
    open(fn, "w").write(md)
    pages.append(dict(ref=ref, title=title, parent=parent, file=fn, path=path))

# The GEA space's existing page is the KP1 home; everything else hangs off it.
add("README", "Developing a Gov Enterprise Architecture (GEA)", "kp1/README.md", render_home())

add("start-here", "Start here", "start-here/README.md", render_start_here(), parent="README")
for ref, title, fn in [
    ("how-to-use-the-plays", "How to use the plays", render_howto),
    ("working-with-ai", "Working with AI — the ground rules", render_working_with_ai),
    ("prompting-techniques", "Prompting techniques", render_prompting),
    ("ea-plays-kit", "The ea-plays kit", render_kit),
    ("play-0", "Play 0 — Build your country context", render_play0),
    ("progressa", "Progressa — the demonstration country", render_progressa),
    ("video-index", "Video index", render_videos),
]:
    add(ref, title, f"start-here/{ref}.md", fn(), parent="start-here")

for _n in sorted(MODS):
    _M, _subs = MODS[_n]
    add(f"module-{_n}", f'Module {_n} — {_M["title"]}', f"kp1/module-{_n}/README.md",
        render_module_page(_n), parent="README")
    for s in _subs:
        r = s["id"].replace(".", "-")
        add(r, f'{s["id"]} {s["title"]}', f"kp1/module-{_n}/{r}.md",
            render_subtopic(s, _n), parent=f"module-{_n}")

add("your-country-workbook", "Your country workbook", "kp1/your-country-workbook.md", render_workbook(), parent="README")

json.dump(pages, open(os.path.join(ROOT, "pages.json"), "w"), indent=1)
print(f"{len(pages)} pages written to {ROOT}")
