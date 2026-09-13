"""Render the KP2 companion GitBook (gitbook/kp2/) from the signed KP2 build scripts.

Same three page templates as render.py (home, module, subtopic) so the two Knowledge Products read
as one site; the KP2 differences are the ones structure draft §7 names — a build-pack page group,
a workbook whose artefacts are the framework's *configuration*, and a Play 0 supplement.

Sources, in the order the site trusts them:
  KP2-GIF/build_kp2_moduleN_v0X.js   ITU-signed: message, anchor, script beats, the AI tip, metadata
  KP2-GIF/gitbook/play-map.json      site-owned: kind, artefact, consumes, est, skill (feeds derived)
  kp2_home.py                        site-owned: the former Module 6 framing (catalogue, role-paths, storyboard)
  KP2-GIF/KP2-build-pack/*.md        the pack's own docs, copied with a header line, never rewritten
  KP2-GIF/gitbook/plays/<id>.md      worked examples, once run (same sidecar shape as KP1; absent is legal)

No page under gitbook/kp2 is edited by hand. Run:  python3 render_kp2.py && python3 gitbook_qa.py
"""
import glob, json, os, re, urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
import sys
sys.path.insert(0, os.path.join(HERE, "..", "..", "kp-build-render", "scripts"))
sys.path.insert(0, HERE)
from bundle_to_md import balanced, top_groups, all_strings, unesc  # noqa: E402
import kp2_home as H  # noqa: E402

KP_ROOT = os.environ.get("KP_ROOT", os.path.abspath(os.path.join(HERE, "..", "..", "..", "..")))
KP2 = os.path.join(KP_ROOT, "KP2-GIF")
PACK = os.path.join(KP2, "KP2-build-pack")
ROOT = os.path.join(KP_ROOT, "gitbook")
OUT = os.path.join(ROOT, "kp2")
PLAY_MAP = json.load(open(os.path.join(KP2, "gitbook", "play-map.json")))
SIDECARS = os.path.join(KP2, "gitbook", "plays")
PUBLISHED = {int(x) for x in os.environ.get("KP2_PUBLISHED", "1,2,3,4,5").split(",")}
READ_ONCE = "about fifteen minutes"

# ---------------------------------------------------------------------------------------------
# Module metadata the build scripts do not carry as fields (title, blurb). Persona and runtime
# are read from the scripts.
MODULES = {
    1: dict(title="Why interoperability and the four layers",
            blurb="Seven videos for the Strategist making the case: why interoperability is built rather than bought, the four layers it fails at, the once-only promise it exists for, and the three foundation artefacts — the Strategic Foundation Document, the Use-Case Catalogue and the stakeholder map — every later module reads."),
    2: dict(title="Legal framework — the Decree Drafting Kit",
            blurb="Six videos on the legal layer: why the bus needs a mandate, the five components of an interoperability decree, the Explanatory Memorandum, the Draft Articles and the Cover Note generated against published models, and the decree read as the legal configuration that authorises exactly the exchanges in your catalogue."),
    3: dict(title="Governance model — three tiers with RACI",
            blurb="Six videos on the organisational layer: naming the owner before the first member joins — and keeping the body that sets the rules apart from the body that runs the bus — the three tiers of governance, the RACI, member obligations, the four standing Technical Working Groups, and change control, conformance and the semantic registry that keep the framework current instead of frozen at launch."),
    4: dict(title="Architecture and technical standards",
            blurb="Eight videos on the technical layer: the four functional layers and three trust zones, the standards portfolio adopted rather than written, the semantic map and the OpenAPI contract generated for a real exchange, Giga's school data taken bronze-to-gold onto the bus, the X-Road wiring, and the data-protection envelope that makes an exchange lawful."),
    5: dict(title="Implementation and onboarding",
            blurb="Ten videos on standing the framework up and running it: the four-phase plan on an honest calendar with the investment, procurement, workforce and risk plans beside it, Member Requirements and the SLA, registering a member, standing up the Linkup federation, the live once-only exchange that is the framework's acceptance check, what changes for production — and then watching the bus from its logs, keeping the decree, Governance Pack and standards portfolio from contradicting each other, and carrying the framework to the next sector."),
}
# Which module's videos close a persona's track (for the home-page audience table).
PERSONA_TAKEAWAY = {
    "Strategist": "The case and the foundation: why interoperability is built, the four layers, the once-only exchange to start with, the Strategic Foundation Document and the Use-Case Catalogue; the decree and the governance the framework needs; and, once it runs, the cross-check that keeps its documents honest and the portability map for the next sector.",
    "Architect": "The build: the functional layers and trust zones, the standards portfolio, the semantic map and service contracts generated for a real exchange, the federation stood up and proven with a live once-only call, the production gap, and the bus watched from its logs.",
}

# A0 sections: the seven from Play 0 plus the three KP2 needs (structure draft §7.1).
A0 = {"§1": "Digital-landscape brief", "§2": "Programme list", "§3": "Ministry operating context",
      "§4": "Institutional roles register", "§5": "Country characteristics",
      "§6": "Public bodies, systems and registries", "§7": "Legal and policy list",
      "§8": "Current exchange approach", "§9": "Integration map", "§10": "Data-protection law and DPA"}
SUPPLEMENT = [
    dict(n=8, title="Current exchange approach", feeds="1.1", skill="country-context-pack",
         prompt="I am preparing to assess [country X]'s readiness for a Government Interoperability Framework. Using public sources only, describe how cross-agency data exchange happens in [country X] today, under these headings: (1) whether an interoperability platform or data-exchange layer exists (name, technology, year, operator, number of connected bodies) or is planned; (2) how interoperability is currently required — procurement clauses, an interoperability framework document, a law, or nothing; (3) the two or three best-known point-to-point integrations between public bodies and who maintains them; (4) any published assessment of duplication or of citizens re-submitting the same data. Name institutions, systems and documents with the year of each; cite a public source URL for every substantive claim and state the data year; do not name office-holders. Return 3–4 paragraphs as text in this chat.",
         output="A dated, sourced description of how exchange works today — the input to the procured-vs-planned diagnostic (1.1)."),
    dict(n=9, title="Integration map", feeds="1.2, 1.3, 1.5", skill="country-context-pack",
         prompt="Using public sources only, build an integration map for [country X]'s [sector] sector. List the 6–10 exchanges of data between public bodies that the sector's services depend on or would benefit from — for each: the providing body and the registry it holds; the consuming body and the service that needs the data; what data is exchanged (the entity, e.g. 'person identity', 'enrolment'); how it happens today (live integration / file transfer / citizen carries a certificate / not at all); and whether a citizen is asked to re-supply the data. Mark each row as documented (with a source URL) or inferred from the services involved. Add three observations on where the same data is asked for more than once. Return the map as a table plus the observations, as text in this chat.",
         output="An integration map with today's mechanism and the citizen's burden per exchange — the input to the four-layer map (1.2), the once-only ranking (1.3) and the Use-Case Catalogue (1.5)."),
    dict(n=10, title="Data-protection law and DPA", feeds="2.1, 4.8", skill="ea-legal-context",
         prompt="Using public sources only, describe the legal basis for sharing personal data between public bodies in [country X]: (1) the data-protection law in force (title, year, the article or section that governs public-sector sharing, and whether a lawful basis for once-only sharing exists); (2) the data-protection authority or equivalent (name, year established, powers, whether it is operational); (3) any law, decree or regulation that already mandates or restricts exchange between named bodies — identity, civil registration, tax, the sector's own act; (4) the gaps a lawyer would name before an interoperability decree could be enacted. Cite the instrument and a public source URL for every claim; where a document cannot be found, say so — an honest gap is a finding. Return as text in this chat.",
         output="The instruments and the authority a decree must sit inside — the input to the legal-readiness assessment (2.1) and the data-protection envelope (4.8)."),
]

# Where an external reference in the bundles' metadata is openable. The build scripts cite by
# name (review D asked for a URL on every source); this map adds the URL without changing the
# reference. Re-check with cite-or-discard before the Giga GitBook publish.
URLS = [
    (r"European Interoperability Framework|EU EIF|EIF\b", "https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail"),
    (r"NIIS X-Road|X-Road \(niis\.org\)|niis\.org", "https://docs.x-road.global"),
    (r"PAERA", "https://paera.govstack.global"),
    (r"GovStack Information Mediation", "https://govstack.gitbook.io/bb-information-mediation"),
    (r"ITU DPI Safeguards", "https://www.dpi-safeguards.org"),
    (r"Once-Only Technical System|OOTS", "https://ec.europa.eu/digital-building-blocks/sites/display/OOTS"),
    (r"e-Estonia", "https://e-estonia.com"),
    (r"RIA \(ria\.ee\)|ria\.ee", "https://www.ria.ee/en"),
    (r"Information Society Services Act", "https://www.riigiteataja.ee/en/eli/ee/Riigikogu/act/504042014008/consolide"),
    (r"Single Digital Gateway", "https://eur-lex.europa.eu/eli/reg/2018/1724/oj"),
    (r"Once-Only Regulation", "https://eur-lex.europa.eu/eli/reg/2018/1724/oj"),
    (r"GDPR", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"),
    (r"OneRoster", "https://www.1edtech.org/standards/oneroster"),
    (r"CEDS", "https://ceds.ed.gov"),
    (r"Verifiable Credentials", "https://www.w3.org/TR/vc-data-model/"),
    (r"Europass", "https://europass.europa.eu"),
    (r"JSON-LD", "https://json-ld.org"),
    (r"ISO/IEC 11179", "https://www.iso.org/standard/78914.html"),
    (r"OpenAPI", "https://spec.openapis.org/oas/latest.html"),
    (r"OAuth", "https://oauth.net/2/"),
    (r"Giga open APIs|Giga School Master|Giga\b", "https://giga.global"),
    (r"GeoJSON", "https://geojson.org"),
    (r"ISO 3166", "https://www.iso.org/iso-3166-country-codes.html"),
    (r"Estonia X-Road build-out|Estonia — e-Estonia|Estonia governance model|Estonia model", "https://e-estonia.com/solutions/interoperability-services/x-road/"),
    (r"mTLS", "https://datatracker.ietf.org/doc/html/rfc8446"),
]
# References to things on this site or in the pack, cited by page rather than URL.
INTERNAL = [
    (r"Letters of Interest", "module-4/4-8.md"),
    (r"national legislative-process|national data-protection framework|personal-data-protection law", "play-0-supplement.md"),
    (r"Strategic Foundation Document", "module-1/1-4.md"), (r"Use-Case Catalogue", "module-1/1-5.md"),
    (r"the decree \((?:Topic|Module) 2\)|the Topic-2 decree|(?:Topic|Module) 2 decree", "module-2/README.md"),
    (r"member obligations \((?:Topic|Module) 3\)|the Governance Pack", "module-3/README.md"),
    (r"standards portfolio \((?:Topic|Module) 4\)", "module-4/4-3.md"),
    (r"the four-phase plan \((?:Topic|Module) 5\)", "module-5/5-1.md"),
    (r"kp-solution-verify|build-pack acceptance check", "build-pack/acceptance.md"),
    (r"Linkup federation", "build-pack/run.md"),
    (r"ToR §4\.\d", "README.md"),
    (r"KP2 deliverables|deliverables of this knowledge product|KP2 method end-to-end|KP2 AI plays", "README.md"),
    (r"Knowledge Products and Video Materials Guide", "README.md"),
]


def cite(entry, mod):
    e = entry.strip()
    if not e or "http" in e:
        return e
    for pat, url in URLS:
        if re.search(pat, e):
            return f"{e} — {url}"
    for pat, page in INTERNAL:
        if re.search(pat, e):
            return f"{e} — on this site: [{page.split('/')[-1].replace('.md','').replace('README','home')}](../{page})"
    return e


# ---------------------------------------------------------------------------------------------
# reading the build scripts (bundle_to_md's primitives; no second parser)
def _field(block, name):
    m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', block)
    return unesc(m.group(1)) if m else ""


def _rows(block, name):
    m = re.search(name + r":\s*\[", block)
    if not m:
        return []
    inner, _ = balanced(block, m.end() - 1)
    return [all_strings(r) for r in top_groups(inner, "[")]


def _tip(block, name):
    m = re.search(r"aiTip:\s*\{", block)
    if not m:
        return ""
    inner, _ = balanced(block, m.end() - 1)
    return _field(inner, name)


def _split_io(io):
    m = re.match(r"\s*Input:\s*(.*?)\s*Output:\s*(.*)", io, re.S)
    return (m.group(1).strip(), m.group(2).strip()) if m else (io, io)


def _sidecar(sid):
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
    out = {"example_status": meta.get("example_status", "run"), "example_run": meta.get("example_run"),
           "example_context": meta.get("example_context")}
    for k, v in (("example_input", "Example input"), ("example_output", "Example output"), ("what_next", "What next")):
        if v in parts:
            out[k] = parts[v].strip()
    if "Reading the output" in parts:
        out["annotations"] = [(t.strip(), b.strip()) for t, b in
                              re.findall(r"^### \d+\. (.+?)\n(.*?)(?=\n### |\Z)", parts["Reading the output"], re.S | re.M)]
    return {k: v for k, v in out.items() if v}


def script_of(n):
    files = sorted(glob.glob(os.path.join(KP2, f"build_kp2_module{n}_v*.js")))
    if not files:
        raise SystemExit(f"no build script for KP2 Module {n}")
    return files[-1]


def load_module(n):
    src = open(script_of(n)).read()
    consts = {k: unesc(v) for k, v in re.findall(r'const (PERSONA_[A-Z]) = "((?:[^"\\]|\\.)*)"', src)}
    fn = src[src.index("function renderSubtopic"):]
    fn = fn[:fn.index("\n}\n")]
    dm = re.search(r'\["Persona",\s*(PERSONA_[A-Z]|persona)\]', fn)
    default_persona = consts.get(dm.group(1)) if dm and dm.group(1) in consts else None
    if default_persona is None:  # v0.2 shape: `persona = PERSONA_A` default in the signature
        d = re.search(r"persona\s*=\s*(PERSONA_[A-Z])", fn)
        default_persona = consts[d.group(1)] if d else next(iter(consts.values()))
    body = src[src.index("const body = []"):]
    subs, i = [], 0
    token = re.compile(r"(?<![A-Za-z0-9_])renderSubtopic\s*\(")
    while True:
        m = token.search(body, i)
        if not m:
            break
        block, end = balanced(body, body.index("{", m.end() - 1))
        i = end + 1
        sid = _field(block, "num").split()[-1]
        meta = {k: v for k, v in _rows(block, "metadataRows")}
        pm = PLAY_MAP[sid]
        io_in, io_out = _split_io(_tip(block, "io"))
        pv = re.search(r"persona:\s*(PERSONA_[A-Z])", block)
        persona = consts[pv.group(1)] if pv else default_persona
        beats, recap_next = [], False
        bm = re.search(r"scriptBeats:\s*\[", block)
        if bm:
            inner, _ = balanced(block, bm.end() - 1)
            for obj in top_groups(inner, "{"):
                c = re.search(r'cue:\s*"((?:[^"\\]|\\.)*)"', obj)
                if c:
                    recap_next = "In one sentence" in unesc(c.group(1))
                    continue
                t = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', obj)
                if t:
                    if recap_next:
                        recap_next = False
                        continue
                    beats.append(unesc(t.group(1)))
        subs.append(dict(
            yt=None, id=sid, title=_field(block, "title"), persona=persona,
            yt_title=meta.get("YouTube-optimised title", _field(block, "title")),
            runtime=_field(block, "runtime"), paera=_field(block, "paeraAnchor"),
            message=_field(block, "singleMessage"), concept="\n\n".join(beats),
            tor=meta.get("ToR §4 coverage", ""),
            sources=[cite(s, n) for s in meta.get("External-link list", "").split(";") if s.strip()],
            play=dict(title=_tip(block, "title"), kind=pm["kind"], est=pm["est"],
                      does=_tip(block, "problem"), prompt=_tip(block, "prompt"),
                      inputs=io_in, outputs=io_out, safeguard=_tip(block, "safeguard"),
                      artefact=pm["artefact"], skill=pm["skill"], skill_also=pm["also"],
                      input_ref=pm["consumes"], feeds=[])))
        subs[-1]["play"].update(_sidecar(sid))
    playlist = subs and re.search(r'"Playlist \(YouTube\)",\s*"((?:[^"\\]|\\.)*)"', body)
    return subs, (unesc(playlist.group(1)) if playlist else "")


def persona_parts(persona):
    """'S (Strategist) — national interoperability authority, ...' -> ('Strategist', 'National interoperability authority, ...')"""
    m = re.match(r"^[A-Z] \((\w+)\) \u2014 (.*)$", persona)
    if m:
        who = m.group(2)
        return m.group(1), who[0].upper() + who[1:]
    return persona.split(" (")[0], persona



MODS = {}
for _n in sorted(MODULES):
    _subs, _pl = load_module(_n)
    _mins = sum(int(re.search(r"(\d+)", s["runtime"]).group(1)) for s in _subs)
    _personas = list(dict.fromkeys(s["persona"] for s in _subs))
    if len(_personas) == 1:
        _persona = _personas[0]
    else:
        _spans = []
        for _p in _personas:
            _ids = [s["id"] for s in _subs if s["persona"] == _p]
            _spans.append(f'{persona_parts(_p)[0]} for {_ids[0]}\u2013{_ids[-1]}')
        _persona = "; ".join(_spans)
    MODS[_n] = (dict(MODULES[_n], number=_n, playlist=_pl, personas=_personas, persona=_persona,
                     runtime=f"~{_mins} minutes across {len(_subs)} videos"), _subs)
ALL = {s["id"]: (n, s) for n, (_m, subs) in MODS.items() for s in subs}
ART = {s["play"]["artefact"].split(" — ")[0]: s["id"] for _n, (_m, subs) in MODS.items() for s in subs}
ART[PLAY_MAP["home"]["artefact"].split(" — ")[0]] = "home"


def _derive_feeds():
    """feeds is the inverse of consumes — one source, no drift."""
    for i, (_n, s) in ALL.items():
        s["play"]["feeds"] = []
    for i, (_n, s) in ALL.items():
        for c in re.split(r",\s*", s["play"]["input_ref"]):
            if c in ART and ART[c] in ALL:
                ALL[ART[c]][1]["play"]["feeds"].append(i)
    for c in re.split(r",\s*", PLAY_MAP["home"]["consumes"]):
        if c in ART and ART[c] in ALL:
            ALL[ART[c]][1]["play"]["feeds"].append("home")


_derive_feeds()


def status_of(n):
    subs = MODS[n][1]
    if all(s.get("yt") for s in subs):
        return "videos"
    if all(s["play"].get("example_input") for s in subs):
        return "examples"
    return "prompts"


STATUS = {n: status_of(n) for n in MODS}
STATUS_LABEL = {"prompts": "Prompts live", "examples": "Worked examples live", "videos": "Videos live"}
KIND_BADGE = {
    "diagnostic": ("🔍", "Diagnostic", "You paste a description of your situation; the play assesses it."),
    "drafting":   ("✍️", "Drafting", "You give a few facts; the play produces a first draft of a document you will edit."),
    "translation":("🔁", "Translation", "You give a question in one group's language; the play restates it for another."),
}
# What each ea-plays skill adds — the same wording as the kit page in start-here, so the
# "With the kit" line reads the same across KP1 and KP2. gitbook_qa checks the name is on that page.
SKILL_ADDS = {
    "country-context-pack": "the seven-section A0 pack every other play consumes",
    "cite-or-discard": "fetches each URL, grades the source by tier, and drops what does not survive",
    "ea-institution-mapper": "bodies, legal mandates, systems, posts, PAERA classification",
    "ea-legal-context": "the national legal register, so a ToR cites statutes that exist",
    "paera-reference-check": "checks against PAERA as published, not the video's simplification",
    "ea-governance-drafter": "ToR, RACI, repository policy, gate checklist, scorecard, risk register",
    "bb-landscape-check": "which shared building blocks are actually **live**, not planned",
    "ea-method-runner": "the five-phase lifecycle, reading and writing your workbook",
    "ea-comparator-evidence": "comparator cards with primary sources and one contested case",
    "gif-four-layer-map": "grades one exchange at the four EIF layers and names the binding constraint",
    "gif-foundation-drafter": "the two Strategist narratives: the foundation document and the country storyboard",
    "gif-decree-draft": "decree components drafted from published legal models, never from imagination",
    "gif-consistency-check": "contradictions between the framework's documents, raised as questions not rulings",
    "gif-semantic-map": "vocabulary alignment, code-list reconciliation and the linking identifier",
    "gif-openapi-gen": "the OpenAPI contract and the X-Road service description derived from it",
    "gif-federation-standup": "member registration, the federation run book, the acceptance script",
    "gif-bus-monitor": "bus health read from exchange metadata only, never citizen data",
}


# ---------------------------------------------------------------------------------------------
# page pieces (same shapes as render.py)
def desc(text, limit=180):
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


def page_path(i, from_mod):
    if i == "home":
        return "../README.md"
    n, s = ALL[i]
    leaf = s["id"].replace(".", "-") + ".md"
    return f"./{leaf}" if n == from_mod else f"../module-{n}/{leaf}"


def claude_link(prompt):
    return "https://claude.ai/new?q=" + urllib.parse.quote(prompt, safe="")


def expand_a0(ref):
    return re.sub(r"(A0 )(§\d+)", lambda m: f"{m.group(1)}{m.group(2)} {A0[m.group(2)]}", ref)


def source_of(p, up="../"):
    ref = p.get("input_ref", "")
    if "A0" in ref and any(x in ref for x in ("§8", "§9", "§10")):
        return f"see [Play 0](../{up}start-here/play-0.md) and the [KP2 supplement]({up}play-0-supplement.md)"
    if "A0" in ref:
        return f"see [Play 0](../{up}start-here/play-0.md)"
    return f"see [Your framework workbook]({up}your-framework-workbook.md)"


def video_block(s, title=None, runtime=None, up="../../"):
    if s and s.get("yt"):
        return f'''{{% embed url="{s["yt"]}" %}}
{s["yt_title"]} ({s["runtime"]})
{{% endembed %}}

**Watch first ({s["runtime"]}).** Then come back for the play.'''
    t = title or s["yt_title"]
    r = runtime or s["runtime"]
    return f'''{{% hint style="info" %}}
🎬 **Video in production:** *{t}* ({r}).
The play below does not depend on the video: the concept section carries what the video will say. Come back for the embed, or follow the [video index]({up}start-here/video-index.md).
{{% endhint %}}'''


def tooltip(p, up="../"):
    emoji, kind, _ = KIND_BADGE[p["kind"]]
    art = p["artefact"].split(" — ")
    if p.get("skill"):
        also = p.get("skill_also", [])
        tail = (" It also runs " + ", ".join(f"`{x}`" for x in also) + ".") if also else ""
        kit = f'`{p["skill"]}` — {SKILL_ADDS[p["skill"]]}.{tail} Optional: the prompt runs bare.'
    else:
        kit = "no skill yet, so the prompt runs bare in any assistant."  # every play maps today; kept for a new play
    return f'''{{% hint style="success" %}}
**{emoji} {kind} play · produces {art[0]} {art[1]}**

**Bring:** {p["inputs"]} From **{expand_a0(p["input_ref"])}** ({source_of(p, up)}).
**Get:** {p["outputs"]} As text in the chat, not a file or a chart.
**Time:** {p["est"]} · **Assistant:** any; the plays are tool-neutral.
**With the kit:** {kit}
**Watch for:** {p["safeguard"].split(". ")[0].rstrip(".")}.
{{% endhint %}}'''


def feeds_text(p, mod):
    out = []
    for f in p["feeds"]:
        if f == "home":
            out.append(f'[the country storyboard]({page_path(f, mod)})')
        else:
            out.append(f'[{f} {ALL[f][1]["play"]["title"]}]({page_path(f, mod)})')
    return ", ".join(out) or "nothing further in KP2; this artefact is where the chain ends"


def derived_what_next(p):
    art = p["artefact"].split(" — ")
    return (f'File the output as **{art[0]}** in your framework workbook once you have worked it the way '
            f'**Watch for** asks. A fuller what-next is added with the worked example.')


def example_warning(p):
    st, when = p.get("example_status", "demo"), p.get("example_run", "")
    if st == "run":
        return ('{% hint style="info" %}\n'
                f'**Worked example, run {when}.** A bare run of the prompt above on Progressa — no kit '
                'skills loaded — read with the annotations in the *Reading the output* tab.\n{% endhint %}')
    return ('{% hint style="warning" %}\n'
            f'**Draft worked example, {when}.** A bare run on Progressa, annotated, but not yet '
            "checked against the kit's expected output. Read it with the annotations, not on its own.\n{% endhint %}")


def example_tabs(p, pack_note=""):
    if not p.get("example_input"):
        return f"""{{% tab title="Example on Progressa — coming" %}}
{{% hint style="warning" %}}
**Worked example pending.** The prompt above is final and runs today. The Progressa worked
example, the annotated reading and the what-next notes are added when this module's examples
are run (KP1 Module 1 shows the shape).
{{% endhint %}}
{pack_note}
Run the play on [Progressa](../../start-here/progressa.md) yourself in the meantime: paste the
sections named in **Bring** above, and read the result against **Watch for**.
{{% endtab %}}
"""
    ann = "\n\n".join(f'<details>\n\n<summary>{i+1}. {t}</summary>\n\n{b}\n\n</details>'
                      for i, (t, b) in enumerate(p.get("annotations", [])))
    ctx = p.get("example_context")
    ctx = (f'\nAlso in the session: {ctx} A bare run with only the input below will differ where the annotations say so.\n') if ctx else ""
    return f'''{{% tab title="Example input" %}}
{example_warning(p)}

The bracketed context in the prompt was replaced with the following:
{ctx}
{p["example_input"]}
{{% endtab %}}

{{% tab title="Example output" %}}
{{% hint style="warning" %}}
**Draft: model output, unverified.** Read it with the annotations in the next tab, not on its own.
{{% endhint %}}
{pack_note}
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


# Modules 4–5 plays whose Progressa "example output" is a real file in the build pack (§7.1).
PACK_FILES = {
    "4.4": ["configs/semantic-map.yaml"], "4.5": ["configs/contracts/", "prompts/"],
    "4.7": ["configs/member-*/", "hurl/"], "4.8": ["onboarding/<member>/00-gates.md"],
    "5.2": ["onboarding/<member>/02-requirements.md"], "5.3": ["onboarding/<member>/03-sla/<service>.md"],
    "5.4": ["configs/member-<key>/<key>.yaml", "prompts/register-member.md", "apps/join-api"],
    "5.5": ["scripts/deploy.sh", "runbook.md", "deployment.yaml"],
    "5.6": ["acceptance/once-only-exchange.md", "scripts/acceptance.sh", "out/application-<nin>.json"],
    "5.7": ["docs/production-delta.md", "docs/path-conformance.md"],
    "5.8": ["runbook.md § Observability: structured logs and /metrics"],
    "5.9": ["onboarding/<member>/00-gates.md", "docs/path-conformance.md"],
}


def pack_note(sid):
    if sid not in PACK_FILES:
        return ""
    files = ", ".join(f"`{f}`" for f in PACK_FILES[sid])
    return (f'\n{{% hint style="info" %}}\n**In the build pack.** The Progressa version of this artefact is a real file, not a pasted draft: '
            f'{files} in `KP2-build-pack/` — see [What the build pack is](../build-pack/README.md).\n{{% endhint %}}\n')


def render_subtopic(s, mod):
    p = s["play"]; emoji, kind, kind_help = KIND_BADGE[p["kind"]]
    srcs = "\n".join(f"- {x}" for x in s["sources"])
    tor = f'\n| **ToR §4 coverage** | {s["tor"]} |' if s["tor"] else ""
    return f'''---
description: "{desc(s["message"])}"
---

# {s["id"]} {s["title"]}

{video_block(s)}

> **Single message.** {s["message"]}

| | |
| --- | --- |
| **Persona** | {s["persona"]} |
| **Anchor** | {s["paera"]} |
| **Your play** | {emoji} {p["title"]} · *{kind}* · produces workbook artefact **{p["artefact"].split(" — ")[0]}** |{tor}

## The concept

{s["concept"]}

## Your turn — {p["title"]}

{tooltip(p)}

{emoji} **{kind} play.** {kind_help}

**What it does.** {p["does"]}

{{% tabs %}}
{{% tab title="Prompt" %}}
Copy the prompt, replace the bracketed parts with your own context, and run it in the AI assistant of your choice. Never paste personal data or unpublished documents — see [How to use the plays](../../start-here/how-to-use-the-plays.md).

```text
{p["prompt"]}
```

[Open in Claude](<{claude_link(p["prompt"])}>) *(experimental deep link: pre-fills the prompt in a new claude.ai chat; check the bracketed parts before sending)*

*Input, output and the kit skill are in the box above.*
{{% endtab %}}

{example_tabs(p, pack_note(s["id"]))}
{{% tab title="What next" %}}
{p.get("what_next") or derived_what_next(p)}

**This artefact feeds:** {feeds_text(p, mod)}

See the full chain in [Your framework workbook](../your-framework-workbook.md).
{{% endtab %}}
{{% endtabs %}}

## Sources

{srcs}
'''


def mermaid_id(a):
    return a.replace(" ", "_").replace(".", "_")


def module_chain(subs, mod):
    art_of = {s["id"]: s["play"]["artefact"].split(" — ")[0] for s in subs}
    nodes, edges, extra = [], [], []
    for s in subs:
        p = s["play"]; a = p["artefact"].split(" — ")
        nodes.append(f'    {mermaid_id(a[0])}["{a[0]} {a[1]}\\n({s["id"]})"]')
        for c in re.split(r",\s*", p["input_ref"]):
            if c.startswith("A0"):
                edges.append(f'    A0 --> {mermaid_id(a[0])}')
            elif c in art_of.values():
                edges.append(f'    {mermaid_id(c)} --> {mermaid_id(a[0])}')
            elif c in ART:
                n = ALL[ART[c]][0]; cid = f"M{n}_{mermaid_id(c)}"
                extra.append(f'    {cid}["Module {n}\\n{c}"]')
                edges.append(f'    {cid} --> {mermaid_id(a[0])}')
        for f in p["feeds"]:
            if f in ALL and ALL[f][0] == mod:
                edges.append(f'    {mermaid_id(a[0])} --> {mermaid_id(art_of[f])}')
            elif f in ALL:
                n = ALL[f][0]
                extra.append(f'    M{n}out["Module {n}"]')
                edges.append(f'    {mermaid_id(a[0])} --> M{n}out')
            elif f == "home":
                extra.append('    HOME["The country storyboard\\n(KP2 home)"]')
                edges.append(f'    {mermaid_id(a[0])} --> HOME')
    head = ['    A0["A0 Country context pack\\n(Play 0 + KP2 supplement)"]'] if any("A0 -->" in e for e in edges) else []
    body = head + nodes + list(dict.fromkeys(extra)) + list(dict.fromkeys(edges))
    return "```mermaid\nflowchart TD\n" + "\n".join(body) + "\n```"


LAYER_OF = {1: "the foundation", 2: "the legal configuration — the decree", 3: "the organisational configuration — the Governance Pack",
            4: "the technical configuration", 5: "the runnable slice, then the framework in operation"}


def module_status_hint(mod):
    if STATUS[mod] == "prompts":
        return ('{% hint style="info" %}\n**Worked examples for this module are pending** — every prompt '
                'on these pages runs today.\n{% endhint %}\n')
    return ""


def m5_note(mod):
    if mod != 5:
        return ""
    return ('{% hint style="info" %}\n**Why ten videos.** 5.8–5.10 were Module 6 in the v0.1 bundles. Module 6 was retired on 12 September 2026 '
            '(as KP1 retired its AI-plays module on 3 September): its catalogue, role-paths and storyboard repeated the earlier modules and now live on the '
            '[KP2 home page](../README.md); its three genuinely new plays — watching the bus, cross-checking the framework\'s documents, carrying it to the next sector — '
            'are the last three videos here. 5.9 and 5.10 return to the Strategist; every video states its persona and stands alone.\n{% endhint %}\n')


def render_module_page(mod):
    M, subs = MODS[mod]
    rows = "\n".join(
        f'| [{s["id"]}](./{s["id"].replace(".", "-")}.md) | {s["title"]} | {s["message"]} | '
        f'{KIND_BADGE[s["play"]["kind"]][0]} {s["play"]["artefact"].split(" — ")[0]} | {("`%s`" % s["play"]["skill"]) if s["play"]["skill"] else "—"} |'
        for s in subs)
    leaves = ", ".join(s["play"]["artefact"].split(" — ")[0] for s in subs)
    return f'''---
description: "{desc(M["blurb"])}"
icon: flag-checkered
---

# Module {mod} — {M["title"]}

{video_block(None, title=f'KP2 Module {mod} — {M["title"]}', runtime="~2 min")}

{module_status_hint(mod)}{m5_note(mod)}
**Persona:** {M["persona"]}.

**You leave with:** {leaves}, filed in your framework workbook — {LAYER_OF[mod]}. Runtime {M["runtime"]}.

{M["blurb"]}

## Subtopics

| # | Subtopic | Single message | Your play | Kit skill |
| --- | --- | --- | --- | --- |
{rows}

## How the plays chain in this module

{module_chain(subs, mod)}

The full chain, including where these artefacts come from and go next, is on [Your framework workbook](../your-framework-workbook.md).

{{% hint style="info" %}}
**Before you start.** Every play asks you to paste country context. Build it once with [Play 0](../../start-here/play-0.md) — that is **A0** — and add the three KP2 sections from the [Play 0 supplement](../play-0-supplement.md). No country to hand? Run them on [Progressa](../../start-here/progressa.md), the fictional demonstration country; for Modules 4 and 5 the [build pack](../build-pack/README.md) is Progressa's finished output.
{{% endhint %}}

{{% hint style="info" %}}
New to the plays? Read [How to use the plays](../../start-here/how-to-use-the-plays.md) and [Working with AI](../../start-here/working-with-ai.md) first — part of the {READ_ONCE} of Start here, and they apply to every module of every Knowledge Product.
{{% endhint %}}
'''


# ---------------------------------------------------------------------------------------------
# home
def mod_link(n, text=None):
    label = text or f"Module {n}"
    return f"[{label}](module-{n}/README.md)" if n in PUBLISHED else label


def audience_rows():
    by = {}
    for n in sorted(MODS):
        for persona in MODS[n][0]["personas"]:
            by.setdefault(persona, []).append(n)
    rows = []
    for persona, ns in by.items():
        name, who = persona_parts(persona)
        mods = ", ".join(mod_link(n, str(n)) for n in dict.fromkeys(ns))
        rows.append(f"| **{name}** | {who} | {mods} | {PERSONA_TAKEAWAY[name]} |")
    return "\n".join(rows)


def video_rows(n):
    M, subs = MODS[n]
    def row(num, title, runtime, yt, href=None):
        cell = f"[{num}]({href})" if href else num
        return f'| {cell} | {title} | {runtime} | {"[watch](%s)" % yt if yt else "*in production*"} |'
    out = [row(f"M{n}", f"Module {n} intro", "~2 min", None, f"module-{n}/README.md" if n in PUBLISHED else None)]
    for s in subs:
        href = f'module-{n}/{s["id"].replace(".", "-")}.md' if n in PUBLISHED else None
        out.append(row(s["id"], s["title"], s["runtime"], s.get("yt"), href))
    return "\n".join(out)


def video_list():
    return "\n\n".join(f"""<details>

<summary><strong>Module {n} — {MODS[n][0]["title"]}</strong> · {MODS[n][0]["runtime"]}</summary>

| # | Video | Runtime | Status |
| --- | --- | --- | --- |
{video_rows(n)}

</details>""" for n in sorted(MODS))


def _minutes(s):
    m = re.search(r"~?(\d+)\s*minutes", s)
    return int(m.group(1)) if m else 0


TOTAL_MIN = sum(_minutes(MODS[n][0]["runtime"]) for n in MODS) + 2 * len(MODS) + 4
TOTAL_VIDEOS = sum(len(MODS[n][1]) for n in MODS) + len(MODS) + 1
TOTAL_PLAYS = sum(len(MODS[n][1]) for n in MODS) + 1   # + the storyboard play on this page


def catalogue_table():
    groups = [("The foundation (Module 1)", 1), ("Legal configuration — the decree (Module 2)", 2),
              ("Organisational configuration — the Governance Pack (Module 3)", 3),
              ("Technical configuration (Module 4)", 4), ("The runnable slice, then operations (Module 5)", 5)]
    out = []
    for label, n in groups:
        rows = "\n".join(
            f'| [{s["id"]}](module-{n}/{s["id"].replace(".", "-")}.md) | {KIND_BADGE[s["play"]["kind"]][0]} {s["play"]["title"]} | '
            f'{s["play"]["artefact"].split(" — ")[0]} {s["play"]["artefact"].split(" — ")[1]} | {s["play"]["safeguard"].split(". ")[0].rstrip(".")}. |'
            for s in MODS[n][1])
        out.append(f"<details>\n\n<summary><strong>{label}</strong> · {len(MODS[n][1])} plays</summary>\n\n"
                   f"| # | Play | Produces | Confirm against |\n| --- | --- | --- | --- |\n{rows}\n\n</details>")
    return "\n\n".join(out)


def role_path_rows():
    rows = []
    for role, who, ids, ends, outcome in H.ROLE_PATHS:
        links = ", ".join(f'[{i}](module-{i.split(".")[0]}/{i.replace(".", "-")}.md)' for i in ids)
        rows.append(f"| **{role}** | {who[0].upper() + who[1:]} | {links} | {ends} | {outcome} |")
    return "\n".join(rows)


def storyboard_section():
    p = dict(H.STORYBOARD_PLAY, **{k: v for k, v in PLAY_MAP["home"].items() if k != "artefact"},
             artefact=PLAY_MAP["home"]["artefact"], input_ref=PLAY_MAP["home"]["consumes"], skill_also=PLAY_MAP["home"]["also"])
    p["feeds"] = []
    steps = "\n".join(f"| [{m}](module-{m[-1]}/README.md) | {what} | {how} |" for m, what, how in H.STORYBOARD_STEPS)
    emoji, kind, kind_help = KIND_BADGE[p["kind"]]
    return f'''## From no framework to first service — the storyboard

> **Single message.** {H.STORYBOARD_MESSAGE}

{H.STORYBOARD_INTRO}

| Where | What happens | The country, step by step |
| --- | --- | --- |
{steps}

{H.STORYBOARD_TIMEFRAME}

{H.STORYBOARD_WHY}

{{% hint style="success" %}}
**In one sentence.** From no framework to a first live once-only service, phase by gated phase on an honest calendar, by following the five modules — interoperability is built, not bought, and then enforced through every tender.
{{% endhint %}}

{H.STORYBOARD_CLOSE}

### Your turn — {p["title"]}

{{% hint style="info" %}}
**A play with no video.** This was the closing video of the v0.1 bundles (6.6); the storyboard above is what it said, and the prompt is the one thing from it a Strategist still needs — a storyboard of their own country for a minister or a funder.
{{% endhint %}}

{tooltip(p, up="")}

{emoji} **{kind} play.** {kind_help}

**What it does.** {p["does"]}

{{% tabs %}}
{{% tab title="Prompt" %}}
Copy the prompt, replace the bracketed parts with your own context, and run it in the AI assistant of your choice. Never paste personal data or unpublished documents — see [How to use the plays](../start-here/how-to-use-the-plays.md).

```text
{p["prompt"]}
```

[Open in Claude](<{claude_link(p["prompt"])}>) *(experimental deep link: pre-fills the prompt in a new claude.ai chat; check the bracketed parts before sending)*
{{% endtab %}}

{{% tab title="What next" %}}
File the output as **B38** in [your framework workbook](your-framework-workbook.md). It is the narrative that wraps the Use-Case Catalogue (B5) and the four-phase plan (B28) for the people who fund them; it feeds nothing further — it is where the chain ends, in a minister's hands.

{{% hint style="danger" %}}
**Safeguard for this play.** {p["safeguard"]}
{{% endhint %}}
{{% endtab %}}
{{% endtabs %}}
'''


def render_home():
    modrows = "\n".join(
        f'| {mod_link(n, str(n))} | {MODS[n][0]["title"]} | {" / ".join(persona_parts(p)[0] for p in MODS[n][0]["personas"])} | '
        f'{len(MODS[n][1])} | {len(MODS[n][1])} plays | ' + (f'{STATUS_LABEL[STATUS[n]]} |' if n in PUBLISHED else 'In production |')
        for n in sorted(MODS))
    return f'''---
description: "Companion site to the ITU/Giga Knowledge Product 2 video series — the concepts, the AI plays, the worked example and the runnable build pack, in one place."
icon: house
---

# Building a Government Interoperability Framework (GIF)

**ITU/Giga Knowledge Product 2** · {TOTAL_VIDEOS} videos in five modules · about {TOTAL_MIN} minutes of video · {TOTAL_PLAYS} AI plays · a runnable build pack · self-paced · free and open

This is the companion to the **Knowledge Product 2** video series on building a Government Interoperability Framework — the legal, organisational and technical configuration that lets public bodies exchange data so that a citizen is asked once. Where [KP1](../kp1/README.md) taught how to *plan* an Enterprise Architecture, KP2 teaches how to *build* the interoperability layer over that plan. The videos give you the concept in four to five minutes each. This site is where you do the work: every subtopic ends with a **play** (a structured prompt you run against your own country's context), a worked example on the fictional country Progressa, and an annotated reading of the result.

KP2 ships two things. The videos and plays, which teach the build. And the [**build pack**](build-pack/README.md), which *is* the ready solution: a real once-only exchange running on an X-Road federation across Progressa's institutions — the decree, the Governance Pack, the semantic map and contracts, the member registrations, and the acceptance check that proves it. Run the plays and you leave with your own country's configuration; run the pack and you see the finished one.

{video_block(None, title="KP2 — Introduction to the knowledge product: the storyboard", runtime="~4 min", up="../")}

## Outline

| Module | Topic | Persona | Videos | Plays | Status |
| --- | --- | --- | --- | --- | --- |
{modrows}

*Prompts live — concept and play on every page, worked example pending. Worked examples live — Progressa run and annotated. Videos live — embeds on every page.*

{{% hint style="success" %}}
**How the course works.** **Watch** the video → **Play** it on your own country → **Read** the output the way an architect would → **Carry** the artefact into the next play. Each play produces a numbered artefact (**B1–B38**), and the artefacts feed each other; run a module and the outputs assemble into [your framework workbook](your-framework-workbook.md) — the configuration of your own framework, layer by layer.
{{% endhint %}}

## Audience — and the path for your role

| Persona | Who that is in practice | Modules | What you leave with |
| --- | --- | --- | --- |
{audience_rows()}

{H.ROLE_PATHS_INTRO}

| Role | Who | Follow these | Your path ends at | After it you can |
| --- | --- | --- | --- | --- |
{role_path_rows()}

{H.ROLE_PATHS_REACH} {H.ROLE_PATHS_MAP}

{{% hint style="warning" %}}
**Coordinate across lanes.** {H.ROLE_PATHS_SAFEGUARD}
{{% endhint %}}

Both tracks share the [Start here](../start-here/README.md) chapter and the same demonstration country. This is a course for the people who commission, draft, govern and build a framework; the build pack is where a developer starts.

## All videos

{video_list()}

{{% hint style="info" %}}
**Videos are in production.** Every page carries a placeholder where its embed will go; the plays below them work today. The [video index](../start-here/video-index.md) is the tracker, and it is the page to watch for links.
{{% endhint %}}

## The AI-play catalogue

{H.CATALOGUE_INTRO}

{H.CATALOGUE_PATTERN}

{{% hint style="danger" %}}
**One pattern, every play.** Generate from a published spec and a brief · confirm every output against the source — the statute, the registry, the provider · a qualified human owns the result. {H.CATALOGUE_SAFEGUARD}
{{% endhint %}}

{H.CATALOGUE_LEVERAGE}

{catalogue_table()}

{storyboard_section()}

## Prerequisites

**KP1 is the natural starting point but not a prerequisite.** Three KP1 artefacts hand off into KP2 — the Governance Board terms of reference (A7) into the Operating Authority (3.1), the sourcing matrix (A24) into the standards portfolio (4.3), and the country context pack (A0) into Module 1. If you have none of them, Module 1 and the [Play 0 supplement](play-0-supplement.md) build what KP2 needs on their own.

**What you do need:**

| | |
| --- | --- |
| **A real subject** | A sector, an exchange, or a pair of agencies you can describe in a few paragraphs. The plays act on your context, not on a case study. No subject to hand? Run everything on [Progressa](../start-here/progressa.md) instead. |
| **Enough access to describe it** | You should be able to name your country's main registers, the bodies that hold them, the exchanges that exist today and the law they sit under — or spend an afternoon on [Play 0](../start-here/play-0.md) and its [KP2 supplement](play-0-supplement.md) building that picture from public sources. |
| **An AI assistant** | Any general assistant — Claude, ChatGPT, Gemini. A free account is enough. Nothing to install; the [ea-plays kit](../start-here/ea-plays-kit.md) is optional and only sharpens some of the plays for Claude users. Eight of its skills are KP2's own, named `gif-*` in the **With the kit** line of each play; source at [github.com/alaponin/ea-plays-kit](https://github.com/alaponin/ea-plays-kit). |
| **A machine, for the build pack only** | Modules 1–3 write no code. The build pack needs Docker and about 11 GiB of RAM; the [Run it](build-pack/run.md) page says exactly what. You can complete every play without running it. |
| **{READ_ONCE.capitalize()}, once** | The first three pages of [Start here](../start-here/README.md) cover how the plays work and the ground rules for using an assistant on government material. Read them before your first play. |

Time: each subtopic is a four-to-five-minute video plus a ten-to-twenty-five-minute play. A module is an afternoon; Modules 4 and 5 are two. The whole Knowledge Product is roughly three working days spread over as long as you like.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><h3>🛡️</h3></td><td><strong>Working with AI</strong></td><td>What an assistant is good for, the four ways it misleads you, and the safeguards. Read once; applies to all four Knowledge Products.</td><td><a href="../start-here/working-with-ai.md">working-with-ai</a></td></tr>
<tr><td><h3>🏁</h3></td><td><strong>Module 1 — Why, the four layers, the foundation</strong></td><td>Seven videos and seven plays for the Strategist making the case and laying the foundation.</td><td><a href="module-1/README.md">module-1</a></td></tr>
<tr><td><h3>🧰</h3></td><td><strong>The build pack</strong></td><td>The ready solution: the Linkup federation, the member registrations and the once-only exchange, run from a run book and proven by an acceptance check.</td><td><a href="build-pack/README.md">build-pack</a></td></tr>
<tr><td><h3>📒</h3></td><td><strong>Your framework workbook</strong></td><td>The artefacts the plays produce, grouped by configuration layer — the retention mechanism of the course.</td><td><a href="your-framework-workbook.md">your-framework-workbook</a></td></tr>
</tbody></table>

## Where this sits

KP2 is the second of four ITU/Giga Knowledge Products. [KP1](../kp1/README.md) covers the Government Enterprise Architecture, KP3 the national DPI roadmap, KP4 building-block services. All four use [**Progressa**](../start-here/progressa.md) as the single worked example and share one set of [ground rules](../start-here/working-with-ai.md).

**What KP2 is the companion to.** Behind the videos sits a five-piece interoperability toolkit, each piece at a different altitude: a **Reference Model** (what a framework is — the four interoperability layers and the four functional layers), an eight-step **Method** (how to develop one; Modules 1–5 follow its steps), a **Toolkit** of fourteen templates (the artefacts the plays draft — the Strategic Foundation Document, the Use-Case Catalogue, the Decree Drafting Kit, the Governance Model, the standards catalogue, Member Requirements, the SLA, the onboarding workflow, the conformance test plan, the risk register, the success metrics), a **Reference Architecture** (the enforceable target design and its rules, on five layers — the four plus infrastructure — with governance and legal cross-cutting), and an **RA-to-RFP path** that turns the reference architecture plus a country's own enterprise architecture into an issuable tender. The videos teach the first three and point at the last two: a framework is planned first, and then procurement is how it is enforced. The four-layer interoperability model — Technical, Semantic, Organisational, Legal — is the EU European Interoperability Framework's and the NIIS X-Road documentation's; PAERA v1.0 ([paera.govstack.global](https://paera.govstack.global)) anchors the interoperability framing (§3.4.3), the Once-Only principle (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3).

{{% hint style="info" %}}
**Use this site from your AI assistant.** Every page is also published as plain Markdown, and the site exposes an `llms.txt` and an MCP endpoint at `/~gitbook/mcp`. Point Claude, ChatGPT or another assistant at the site and ask it to *run play 2.3 with the following context* — the site becomes the tool's reference, not just yours.
{{% endhint %}}
'''


# ---------------------------------------------------------------------------------------------
# workbook
def render_workbook():
    def rows(n):
        out = []
        for s in MODS[n][1]:
            p = s["play"]; a = p["artefact"].split(" — ")
            out.append(f'| **{a[0]}** | {a[1]} | [{s["id"]}](module-{n}/{s["id"].replace(".", "-")}.md) '
                       f'{KIND_BADGE[p["kind"]][0]} | {p["input_ref"]} | {", ".join(x if x != "home" else "storyboard" for x in p["feeds"]) or "—"} |')
        return "\n".join(out)
    tables = "\n\n".join(
        f'### Module {n} — {MODS[n][0]["title"]}\n\n*{LAYER_OF[n][0].upper() + LAYER_OF[n][1:]}.*\n\n'
        f'| Artefact | What it is | Produced by | Consumes | Feeds |\n| --- | --- | --- | --- | --- |\n{rows(n)}'
        for n in sorted(MODS))
    sb = PLAY_MAP["home"]
    return f'''---
description: "The artefacts the KP2 plays produce, grouped by configuration layer — run the five modules and you hold your own framework's legal, organisational and technical configuration."
icon: book-open
---

# Your framework workbook

Each play produces one artefact. Run them in order and the artefacts feed each other. KP2's artefacts are not briefing documents, as KP1's were; they are the **configuration of your framework** — the decree is the legal configuration, the Governance Pack the organisational, the semantic map and service contracts the technical — and Module 5 stands them up as one running solution. This page is the map. If you have no country to hand, use Progressa: the [build pack](build-pack/README.md) is Progressa's finished configuration, and the worked examples on each play page show what each artefact looks like.

{{% hint style="info" %}}
Keep the artefacts in one folder, named as below. The **Consumes** and **Feeds** columns are the chain: every play names what it reads and what reads it, so you can start anywhere and see what you need first.
{{% endhint %}}

## A0 — the pack everything starts from

| Artefact | What it is | Produced by | Feeds |
| --- | --- | --- | --- |
| **A0 §1–§7** | Country context pack — landscape brief, programme list, ministry context, roles register, characteristics, sector bodies, legal list | [Play 0](../start-here/play-0.md) 🔍 | the whole chain below |
| **A0 §8–§10** | The KP2 supplement — the current exchange approach, the integration map, the data-protection law and DPA | [Play 0 supplement](play-0-supplement.md) 🔍 | 1.1, 1.2, 1.3, 1.5, 2.1, 4.8 |

## Hand-offs from KP1

If you ran KP1, three of its artefacts enter the chain here; if not, the plays named build the equivalent.

| KP1 artefact | Enters KP2 at | If you do not have it |
| --- | --- | --- |
| **A0** country context pack | [1.1](module-1/1-1.md), [1.5](module-1/1-5.md), [1.6](module-1/1-6.md) | run [Play 0](../start-here/play-0.md) and the [supplement](play-0-supplement.md) |
| **A7** Governance Board terms of reference | [3.1](module-3/3-1.md) — the Operating Authority | 3.1 drafts the mandate from A0 §6 |
| **A24** sourcing matrix | [4.3](module-4/4-3.md) — the standards portfolio | 4.3 assembles it from the published menu and 1.7's shortlist |

## The three configuration layers, and where they run

```mermaid
flowchart LR
    F["Module 1\\nB1–B7 the foundation"] --> L["Module 2\\nB8–B13 the decree\\n(legal configuration)"]
    F --> O["Module 3\\nB14–B19 the Governance Pack\\n(organisational configuration)"]
    F --> T["Module 4\\nB20–B27 semantic map, contracts,\\nwiring (technical configuration)"]
    L --> R["Module 5\\nB28–B34 the runnable slice"]
    O --> R
    T --> R
    R --> OPS["Module 5\\nB35–B37 operate and extend"]
    R --> SB["B38 the storyboard\\n(KP2 home)"]
```

## Every artefact in KP2

{tables}

### The storyboard

| Artefact | What it is | Produced by | Consumes | Feeds |
| --- | --- | --- | --- | --- |
| **{sb["artefact"].split(" — ")[0]}** | {sb["artefact"].split(" — ")[1]} — a minister-ready narrative of your country's path to its first once-only service | [KP2 home](README.md#from-no-framework-to-first-service-the-storyboard) ✍️ | {sb["consumes"]} | — |

## What the pack contains when you are done

1. **The foundation:** B4 the Strategic Foundation Document and B5 the Use-Case Catalogue, with B6 telling you who to onboard first.
2. **The legal configuration:** the decree — B9 to B12 — checked by B13 against the catalogue it must authorise exactly.
3. **The organisational configuration:** the Governance Pack — B14 to B19 — with one Accountable per decision and a named standards-portfolio owner.
4. **The technical configuration:** B22 the standards portfolio, B23 the semantic map, B24 the contract, B26 the wiring and B27 the data-protection envelope, for the first exchange.
5. **The runnable slice:** B28 the phased plan, the member artefacts B29–B31, B32 the run book, and B33 the once-only acceptance script that proves all four layers in one call.
6. **The framework in operation:** B34 the production gap, B35 the bus watched from its logs, B36 the three documents kept honest, B37 the map to the next sector.

## Where the chain goes after KP2

KP3 (the national DPI roadmap) reads the framework this workbook describes as one of the shared platforms a country sequences; KP4 (building-block services) puts services on the bus KP2 stood up. Those pages are added as each Knowledge Product is published.
'''


# ---------------------------------------------------------------------------------------------
# Play 0 supplement
def render_supplement():
    blocks = []
    for x in SUPPLEMENT:
        blocks.append(f'''## §{x["n"]} {x["title"]}

**Feeds:** {x["feeds"]}. **Kit skill that helps:** `{x["skill"]}`.

```text
{x["prompt"]}
```

[Open in Claude](<{claude_link(x["prompt"])}>) *(experimental)*

**You get:** {x["output"]}''')
    return f'''---
description: "Three research prompts that extend the country context pack (A0) with what KP2 needs — how exchange works today, the integration map, and the data-protection law."
icon: magnifying-glass-plus
---

# Play 0 supplement for KP2

[Play 0](../start-here/play-0.md) builds the seven-section country context pack (**A0**) every play on this site asks you to paste. KP2 reads three things KP1's seven sections do not hold: how cross-agency exchange happens in your country today, the map of exchanges your sector depends on, and the data-protection law a decree must sit inside. These three prompts add sections **§8–§10** to A0. They extend it; they do not replace it. Same rules: public sources only, a URL and a data year on every claim, posts not names, and text in the chat rather than files.

{{% hint style="warning" %}}
**Verify before you build on it.** These briefs are model research, not your findings. Open the sources on anything you will carry into a decree or a governance document — the legal section above all.
{{% endhint %}}

{chr(10).join(blocks)}

## What the pack looks like when done

A0 with ten sections, dated. §8 is the input to the first play of Module 1; §9 feeds the four-layer map, the once-only ranking and the Use-Case Catalogue; §10 feeds the legal-readiness assessment and the data-protection envelope. For Progressa, the equivalents are in the [Progressa](../start-here/progressa.md) page and the [build pack](build-pack/README.md).
'''


# ---------------------------------------------------------------------------------------------
# build pack pages: the pack's own docs, copied with a header line
def pack_doc(rel, title, blurb, icon, note=""):
    src = open(os.path.join(PACK, rel)).read()
    src = re.sub(r"^# .*\n", "", src, count=1)               # the page supplies the H1
    src = re.sub(r"\[([^\]]+)\]\((?!https?://|#)([^)]+)\)", lambda m: f"{m.group(1)} (`{m.group(2)}`)", src)  # pack-relative links become paths
    return f'''---
description: "{desc(blurb)}"
icon: {icon}
---

# {title}

{{% hint style="info" %}}
**Copied from the build pack.** This page is `KP2-build-pack/{rel}` as it stands in the pack, with a header; the pack is the source and this page is regenerated from it. Paths in backticks are relative to `KP2-build-pack/`.{note}
{{% endhint %}}

{src}'''


BUILD_PACK_INDEX = '''---
description: "The runnable companion to the KP2 videos — the configuration the modules generate, the prompts that generate it, the scripts that deploy it, and the acceptance checks that prove it."
icon: toolbox
---

# The build pack

KP2 is an implementation Knowledge Product, and this is the half that runs. The build pack stands up a real once-only exchange on an X-Road federation across Progressa's institutions: the National Examination Authority (PNEA) issues a credential and pre-fills identity from the National ID Authority (PNIA) and enrolment from the Learner Registry (PLR) — a learner asked once, over a real cross-server call, with the unauthorised caller denied. It is the Progressa "example output" of Modules 4 and 5: where a play page's worked example would be a pasted draft, here it is a file in the pack.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧰 What the build pack is</strong></td><td>The manifest, the three configuration layers, the requirements, and what the pack proves.</td><td><a href="what-it-is.md">what-it-is</a></td></tr>
<tr><td><strong>▶️ Run it</strong></td><td>The run book — prerequisites, the steps, verifying a change, joining a member, teardown.</td><td><a href="run.md">run</a></td></tr>
<tr><td><strong>✅ Acceptance — the once-only proof</strong></td><td>The headline check: PNEA ← PNIA + PLR, four assertions mapped to the four layers.</td><td><a href="acceptance.md">acceptance</a></td></tr>
<tr><td><strong>🧪 Exercises</strong></td><td>Break and restore the proof, join a member, detect contract drift, un-join, and watch the reproducibility proof.</td><td><a href="exercises.md">exercises</a></td></tr>
</tbody></table>

{% hint style="info" %}
**Which plays it belongs to.** [4.4](../module-4/4-4.md) the semantic map · [4.5](../module-4/4-5.md) the contract · [4.7](../module-4/4-7.md) the wiring · [5.2](../module-5/5-2.md)–[5.4](../module-5/5-4.md) the member artefacts · [5.5](../module-5/5-5.md) the stand-up · [5.6](../module-5/5-6.md) the once-only exchange · [5.7](../module-5/5-7.md) the production gap · [5.8](../module-5/5-8.md) watching the bus · [5.9](../module-5/5-9.md) the gate register as the document cross-check made mechanical. Each of those pages says which pack file is its Progressa output.
{% endhint %}
'''


# ---------------------------------------------------------------------------------------------
pages = []


def add(ref, title, path, md, parent=None):
    fn = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(fn), exist_ok=True)
    open(fn, "w").write(md)
    pages.append(dict(ref=ref, title=title, parent=parent, path=path))  # no abs path: the manifest travels


add("kp2", "Building a Government Interoperability Framework (GIF)", "kp2/README.md", render_home())
for _n in sorted(MODS):
    _M, _subs = MODS[_n]
    add(f"kp2-module-{_n}", f'Module {_n} — {_M["title"]}', f"kp2/module-{_n}/README.md", render_module_page(_n), parent="kp2")
    for s in _subs:
        r = s["id"].replace(".", "-")
        add(f"kp2-{r}", f'{s["id"]} {s["title"]}', f"kp2/module-{_n}/{r}.md", render_subtopic(s, _n), parent=f"kp2-module-{_n}")
add("kp2-build-pack", "The build pack", "kp2/build-pack/README.md", BUILD_PACK_INDEX, parent="kp2")
add("kp2-build-pack-readme", "What the build pack is", "kp2/build-pack/what-it-is.md",
    pack_doc("README.md", "What the build pack is", "The manifest, the three configuration layers, the requirements and what the pack proves.", "box"), parent="kp2-build-pack")
add("kp2-build-pack-run", "Run it", "kp2/build-pack/run.md",
    pack_doc("runbook.md", "Run it — the run book", "Prerequisites, the steps, verifying a change, joining a member, teardown.", "play"), parent="kp2-build-pack")
add("kp2-build-pack-acceptance", "Acceptance — the once-only proof", "kp2/build-pack/acceptance.md",
    pack_doc("acceptance/once-only-exchange.md", "Acceptance — the once-only proof", "The pack's headline check: PNEA pre-fills identity from PNIA and enrolment from PLR; the learner is asked once; the unauthorised caller is denied.", "circle-check"), parent="kp2-build-pack")
add("kp2-build-pack-exercises", "Exercises", "kp2/build-pack/exercises.md",
    pack_doc("exercises.md", "Exercises", "Break and restore the proof, join a member, detect contract drift, un-join, and watch the reproducibility proof.", "flask"), parent="kp2-build-pack")
add("kp2-workbook", "Your framework workbook", "kp2/your-framework-workbook.md", render_workbook(), parent="kp2")
add("kp2-play-0-supplement", "Play 0 supplement for KP2", "kp2/play-0-supplement.md", render_supplement(), parent="kp2")

# A render must not cost the manifest its page ids: publishing stamps gitbook_id, and
# linkify needs it to resolve a same-space link. Carry it over by ref.
_mf = os.path.join(ROOT, "pages-kp2.json")
if os.path.exists(_mf):
    _old = {p["ref"]: p for p in json.load(open(_mf))}
    for _p in pages:
        if "gitbook_id" in _old.get(_p["ref"], {}):
            _p["gitbook_id"] = _old[_p["ref"]]["gitbook_id"]

# ensure_ascii=False: the manifest is read by people too, and an escaped em dash in a
# title makes every render a 50-line diff against the last one.
json.dump(pages, open(os.path.join(ROOT, "pages-kp2.json"), "w"), indent=1, ensure_ascii=False)
print(f"{len(pages)} pages written to {OUT}")
