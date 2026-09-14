"""Read KP1 Modules 2-5 out of the .js build scripts.

The build script is the ITU-signed source (structure draft §10.1): script, tip, metadata.
This module extracts the structural half; it reuses bundle_to_md.py's balanced-brace
primitives rather than writing a second .js parser, per §10.4.

Play kind / artefact / skill / consumes come from the ea-plays kit's play-map.json, read
from a checkout rather than copied (§10.1: "it is the public contract").
"""
import json, os, re, sys

KIT = os.environ.get("EA_PLAYS_KIT", "/Users/arnelaponin/Documents/Dev/ea-plays-kit")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "..", "..", "kp-build-render", "scripts"))
from bundle_to_md import balanced, top_groups, all_strings, unesc  # noqa: E402

DROPPED = []            # subtopic ids whose recap beat was dropped

PLAY_MAP = json.load(open(os.path.join(KIT, "tests", "play-map.json")))
KP1 = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "..", "..", "..", "KP1-GEA")

# The one field the build scripts and the play map both lack. Assigned from each tip's
# stated Input and task: diagnostic = assess a described situation; drafting = produce a
# document from facts; translation = restate one group's question for another.
KIND = {
    "2.1": "drafting",   "2.2": "diagnostic", "2.3": "drafting",   "2.4": "diagnostic",
    "2.5": "drafting",   "2.6": "diagnostic", "2.7": "diagnostic",
    "3.1": "drafting",   "3.2": "diagnostic", "3.3": "drafting",   "3.4": "drafting",
    "3.5": "drafting",   "3.6": "drafting",   "3.7": "drafting",
    "4.1": "drafting",   "4.2": "drafting",   "4.3": "diagnostic", "4.4": "diagnostic",
    "4.5": "drafting",   "4.6": "drafting",   "4.7": "drafting",   "4.8": "translation",
    "5.1": "diagnostic", "5.2": "drafting",   "5.3": "drafting",
    "5.4": "translation", "5.5": "drafting",  "5.6": "translation",
}
# Minutes to run the play and read the result. Not in any upstream source; scaled to the
# output's size (a template ~10 min, a full ToR or business case ~20-25).
EST = {"2.1": "~10 min", "2.2": "~15 min", "2.3": "~15 min", "2.4": "~10 min",
       "2.5": "~20 min", "2.6": "~20 min", "2.7": "~15 min",
       "3.1": "~15 min", "3.2": "~25 min", "3.3": "~15 min", "3.4": "~20 min",
       "3.5": "~15 min", "3.6": "~15 min", "3.7": "~15 min",
       "4.1": "~10 min", "4.2": "~20 min", "4.3": "~20 min", "4.4": "~20 min",
       "4.5": "~25 min", "4.6": "~20 min", "4.7": "~25 min", "4.8": "~15 min",
       "5.1": "~20 min", "5.2": "~15 min", "5.3": "~20 min",
       "5.4": "~25 min", "5.5": "~15 min", "5.6": "~20 min"}


PAERA_URL = "https://paera.govstack.global"


def _cite(entry, prev_paera=None):
    """Every source a learner sees must be openable (review D). The build scripts' metadata
    cites PAERA by section and comparators by bare domain; add the URL without changing the
    reference itself."""
    e = entry.strip()
    if "http" in e:
        return e
    m = re.search(r"\(([a-z0-9.-]+\.[a-z]{2,})\)\s*$", e)      # "... (irembo.gov.rw)"
    if m:
        return f"{e[:m.start()].strip()} \u2014 https://{m.group(1)}"
    if e.startswith("PAERA"):
        return f"{e} \u2014 {PAERA_URL}"
    if e.startswith("\u00a7"):                                    # a bare "§2.1" continues the PAERA cite
        return f"PAERA v1.0 {e} \u2014 {PAERA_URL}"
    return e


SIDECARS = os.path.join(KP1, "gitbook", "plays")


def _sidecar(sid):
    """A worked example, once it has been run. Structure draft §10.2 shape: YAML front matter
    then `## Example input`, `## Example output`, `## Reading the output`, `## What next`.
    Absent is legal — the page then renders the prompt and says the example is pending, which
    is how Modules 2–5 ship until each play is run."""
    path = os.path.join(SIDECARS, f"{sid}.md")
    if not os.path.exists(path):
        return {}
    text = open(path).read()
    meta = {}
    m = re.match(r"---\n(.*?)\n---\n(.*)", text, re.S)
    if m:
        for line in m.group(1).split("\n"):
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip()] = v.strip().strip('"')
        text = m.group(2)
    parts = dict(re.findall(r"^## (.+?)\n(.*?)(?=\n## |\Z)", text, re.S | re.M))
    out = {"example_status": meta.get("example_status", "run"),
           "example_run": meta.get("example_run"),
           "example_context": meta.get("example_context")}
    if "Example input" in parts:
        out["example_input"] = parts["Example input"].strip()
    if "Example output" in parts:
        out["example_output"] = parts["Example output"].strip()
    if "What next" in parts:
        out["what_next"] = parts["What next"].strip()
    if "Reading the output" in parts:
        out["annotations"] = [(t.strip(), b.strip()) for t, b in
                              re.findall(r"^### \d+\. (.+?)\n(.*?)(?=\n### |\Z)",
                                         parts["Reading the output"], re.S | re.M)]
    return {k: v for k, v in out.items() if v}


def _field(block, name):
    m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', block)
    return unesc(m.group(1)) if m else ""


def _rows(block, name):
    m = re.search(name + r":\s*\[", block)
    if not m:
        return []
    inner, _ = balanced(block, m.end() - 1)
    return [all_strings(r) for r in top_groups(inner, "[")]


def _split_io(io):
    """The tip states input and output in one sentence; the page shows them separately."""
    m = re.match(r"\s*Input:\s*(.*?)\s*Output:\s*(.*)", io, re.S)
    return (m.group(1).strip(), m.group(2).strip()) if m else (io, io)


def load_module(n):
    src = open(f"{KP1}/build_kp1_module{n}_v02.js").read()
    body = src[src.index("const body = []"):]
    subs, i = [], 0
    token = re.compile(r"(?<![A-Za-z0-9_])renderSubtopic\s*\(")
    while True:
        m = token.search(body, i)
        if not m:
            break
        block, end = balanced(body, body.index("{", m.end() - 1))
        i = end + 1

        sid = _field(block, "num").split()[-1]          # "3.1 Subtopic 2.1" -> "2.1"
        meta = {k: v for k, v in _rows(block, "metadataRows")}
        pm = PLAY_MAP[sid]
        art = pm["artefact"].split(" — ")
        io_in, io_out = _split_io(_field(block, "io") or _tip(block, "io"))

        # concept prose = the voice-over beats with the production cues dropped (§10.1)
        bm = re.search(r"scriptBeats:\s*\[", block)
        beats = []
        if bm:
            inner, _ = balanced(block, bm.end() - 1)
            recap_next = False
            for obj in top_groups(inner, "{"):
                c = re.search(r'cue:\s*"((?:[^"\\]|\\.)*)"', obj)
                if c:
                    # the closing recap slide; its text repeats the single message, which the page
                    # already quotes above the concept (review E)
                    recap_next = "In one sentence" in unesc(c.group(1))
                    continue
                t = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', obj)
                if t:
                    if recap_next:
                        DROPPED.append(sid)
                        recap_next = False
                        continue
                    beats.append(unesc(t.group(1)))

        subs.append(dict(
            yt=None, id=sid, title=_field(block, "title"),
            yt_title=meta.get("YouTube-optimised title", _field(block, "title")),
            runtime=_field(block, "runtime"),
            paera=_field(block, "paeraAnchor"),
            message=_field(block, "singleMessage"),
            concept="\n\n".join(beats), concept_note=CONCEPT_NOTES.get(sid),
            sources=[_cite(s) for s in meta.get("External-link list", "").split(";") if s.strip()],
            play=dict(
                title=_tip(block, "title"), kind=KIND[sid], est=EST[sid],
                does=_tip(block, "problem"), prompt=_tip(block, "prompt"),
                inputs=io_in, outputs=io_out, safeguard=_tip(block, "safeguard"),
                artefact=pm["artefact"], skill=pm["skill"], skill_also=pm["also"],
                input_ref=pm["consumes"], feeds=[],
                practice=_field(block, "practice"),
            )))
        subs[-1]["play"].update(_sidecar(sid))
    _link_feeds(subs)
    if n == 5:
        _attach_companion(subs)
    return subs, meta.get("Playlist (YouTube)", "")


def _attach_companion(subs):
    """5.3b is a play with no video (structure draft §6). Its prompt is the tip that sat on
    the pre-tightening 5.3, so it is read from the v01 script and hung on the v02 5.3 page."""
    src = open(f"{KP1}/_retired/build_kp1_module5_v01.js").read()
    body = src[src.index("const body = []"):]
    i = 0
    token = re.compile(r"(?<![A-Za-z0-9_])renderSubtopic\s*\(")
    while True:
        m = token.search(body, i)
        if not m:
            break
        block, end = balanced(body, body.index("{", m.end() - 1))
        i = end + 1
        if _field(block, "num").split()[-1] != "5.3":
            continue
        pm = PLAY_MAP["5.3b"]
        io_in, io_out = _split_io(_tip(block, "io"))
        host = next(s for s in subs if s["id"] == "5.3")
        host["companion"] = dict(
            id="5.3b", title=_tip(block, "title"), kind="translation", est="~20 min",
            does=_tip(block, "problem"), prompt=_tip(block, "prompt"),
            inputs=io_in, outputs=io_out, safeguard=_tip(block, "safeguard"),
            artefact=pm["artefact"], skill=pm["skill"], skill_also=pm["also"],
            input_ref=pm["consumes"], feeds=[])
        return


def _tip(block, name):
    m = re.search(r"aiTip:\s*\{", block)
    if not m:
        return ""
    inner, _ = balanced(block, m.end() - 1)
    return _field(inner, name)


CHAIN_ROW = re.compile(
    r"^\|\s*\*\*(A[\w. ]+?)\*\*[^|]*\|\s*(?:Play\s*)?([\d.b]+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$", re.M)


def _chain():
    """The kit's workbook-chain.md is the checked source for the chain; play-map.json is the
    checked source for what a play consumes. Read feeds from the chain (kit 0.2.3 made the two
    agree) so the pages show every real edge \u2014 2.2 feeds 2.5, 2.7 feeds 4.4 and 4.7."""
    path = os.path.join(KIT, "plugins", "ea-plays", "shared", "workbook-chain.md")
    return {m.group(2): m.group(4) for m in CHAIN_ROW.finditer(open(path).read())}


CHAIN_FEEDS = _chain()


def _link_feeds(subs):
    for s in subs:
        cell = CHAIN_FEEDS.get(s["id"], "")
        s["play"]["feeds"] = re.findall(r"\b\d+\.\d+b?\b", cell)


MODULES = {
    2: dict(number=2, title="Principles, the metamodel and the BDAT layers",
            persona="Architect (chief or senior architect in a national digital agency or sector ICT unit)",
            runtime="~32 minutes across seven videos",
            blurb="Seven videos on the architect's core toolkit: reading any government in four layers, the shared vocabulary that makes re-use possible, adopting PAERA's principles rather than drafting your own, and running a Phase 2 Assess that survives contact with a real ministry."),
    3: dict(number=3, title="EA repository, tooling and governance",
            persona="Architect (chief or senior architect in a national digital agency or sector ICT unit)",
            runtime="~29 minutes across seven videos",
            blurb="Seven videos on making the architecture a practice rather than a document: where it lives, how it is kept true, how tooling is chosen without lock-in, and how an EA Board reviews projects, proves its worth and survives past year two."),
    4: dict(number=4, title="Progressa end-to-end \u2014 the method on one sector",
            persona="Architect (chief or senior architect in a national digital agency or sector ICT unit)",
            runtime="~28 minutes across eight videos",
            blurb="Eight videos running the full five-phase lifecycle on Progressa's education sector, from a stalled flagship to a gate decision and a transfer plan for the next sector. Every deliverable and every sign-off is visible in detail."),
    5: dict(number=5, title="Evidence, rollout and the case",
            persona="Strategist (CDO, Director-General, sector minister or ministerial-equivalent sponsor)",
            runtime="~23 minutes across six videos",
            blurb="Six videos on proving the method and carrying it: what the cross-country evidence says works and what quietly kills these programmes, how the practice rolls out across sectors, and the business case that wins sustained commitment."),
}

# The GitBook-only companion play (structure draft \u00a76): a second play section on the 5.3
# page, badged "no video" \u2014 it exists in the kit's play map but has no video slot.
CONCEPT_NOTES = {
    "2.5": ("The bodies in this walkthrough are Progressa's: Ministry = MoEYS, Examination Authority = "
            "PNEA, Identity Authority = PNIA, Digital Government Authority = PDGA. The Learner Registry "
            "(PLR) is drawn as the **target** owner of the Learner domain \u2014 in the Progressa baseline "
            "it is planned, not started, and its absence is the sector problem Module 4 works on."),
}

COMPANION = {"5.3": "5.3b"}
