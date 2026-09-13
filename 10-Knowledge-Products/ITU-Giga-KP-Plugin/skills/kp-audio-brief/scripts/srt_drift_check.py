#!/usr/bin/env python3
"""Audit a NotebookLM take (.srt) against the KP audio spec.

Usage:
    python3 srt_drift_check.py <audio.srt> [--target 240] [--tolerance 15]
                               [--deck deck.pptx]

Mechanical checks only — the things that are cheap to count and that were
wrong in every unbriefed NotebookLM take so far. Judgement calls (framing,
register, invented content) still need a read; this script tells you where
to look and gives you the runtime and filler numbers to argue with.

Exit code 1 if any FAIL fires, so it can gate a build.
"""

import argparse
import re
import sys
from collections import Counter

# --- the failure classes observed in unbriefed takes -------------------------

BANNED_PHRASES = [
    # podcast furniture
    "deep dive", "welcome to", "unpacking", "our sources", "the sources say",
    "here's where it gets", "here is where it gets", "buckle up",
    # the brief's own stage direction read aloud — KP2 1.3 v0.5: "let me ask you the substantive
    # question that a director general would ask"
    "substantive question", "director general would ask", "director-general would ask",
    "let's get into it", "stick around",
    # reflective-outro tic
    "raises a fascinating question", "for you to consider", "think about",
    "look around at", "keep that in mind",
    # consumer-outrage register
    "broken", "chaos", "held hostage", "hostage", "extortionate", "nightmare",
    "insane", "crazy",
    # added 8 Sep: the brief's §3 substitution table bans these in its "never this" column, and
    # the gate did not check them — 4.5 swapped "nightmare" for "a mess" and passed.
    "a mess", "a disaster", "hopeless",
    # the on-screen practice box, imported into the take (plan D5 — the box is never
    # narrated, and the "Your play" handoff it replaced is gone from the voice-over).
    # Deliberately NOT "your own sector" on its own: 4.1 uses it descriptively, and
    # "the video description" is the permitted sources line, so neither is banned here.
    "do this on your own sector", "companion material", "run the prompt",
    "in the description", "before the next video",
]

# Raised from 1.5 to 2.5 on 6 Sep 2026. Measured across ~12 Module 1 takes, filler landed at
# 1.1 / 1.8 / 1.8 / 2.1 / 2.3 / 2.6 per 100 words, and no brief revision moved it — it is a
# property of the two-host format, not of the source. At 1.5 roughly one take in three passed,
# so the threshold was buying re-rolls rather than quality. Some conversational filler is
# correct for this format; 2.5 still rejects the genuinely chatty takes.
FILLER_PER_100W = 2.5

FILLER = [
    "you know", "i mean", "like,", "basically", "totally", "sort of",
    "kind of", "right?", "wow", "oh absolutely", "man,", "gosh", "yeah,",
    "actually,", "literally",
]

# term -> (wrong forms, correct form)
TERMINOLOGY = [
    (r"\bPRA framework\b", "PAERA (not 'PRA')"),
    # "PERA" joined the list on 10 Sep: two of the five re-rolled takes dropped the A. Every
    # variant here is a form actually heard on air, not a guess at what might go wrong.
    (r"\bPara\b|\bPaira\b|\bPiera\b|\bPERA\b|\bPeira\b",
     "PAERA — spelled P-A-E-R-A, all five letters"),
    (r"EU[- ]European Interoperability", "'the European Interoperability Framework'"),
    (r"\bask[- ]once\b", "'the once-only principle'"),
    (r"\bregistr(y|ies)\b", "'register' / 'registers' (KP house term)"),
    # Invented PAERA expansions and name slips — heard on air in the 7-9 Sep batch. The audit
    # could not see them, so the re-roll loop passed takes carrying the exact defect it was
    # re-rolling for.
    (r"\bPan[- ]European Architecture\b|\bPay Your Anchored Standards\b",
     "the Public Administration Ecosystem Reference Architecture — the only expansion of PAERA"),
    (r"\bPAERA(?: framework)? or PR\b|\bthe PR framework\b",
     "PAERA — spelled P-A-E-R-A, never abbreviated further"),
    (r"\bLoCTI\b|\bLockty\b|\bLoctee\b|\bLoc[- ]Tee\b", "'localised principles'"),
    (r"\bProgressive (?:framework|architecture|phase|Phase)\b|\bphase \w+ of the progressive\b",
     "Progressa — pro-GRESS-a, the demonstration country"),
    # The country promoted to a framework. 4.7 v0.13 said "the progressive framework", was
    # re-rolled for it, and v0.15 said "a framework called Progressa" — the same error with the
    # name spelled right, which the row above could not see.
    (r"\bProgress[ae]s?[- ](?:framework|architecture|methodology|model)\b"
     r"|\b(?:framework|architecture|methodology|model) called Progress[ae]s?\b",
     "Progressa is the demonstration country, not a framework — the framework is PAERA"),
    # ponytail: no row for "Progresa" spelled with one s. It is a homophone of "Progressa", so
    # the spelling in an SRT is the transcriber's choice, not evidence about the audio — the
    # 10 Sep 4.4 batch failed all three tries on it while two of those takes were otherwise
    # clean. The pronunciation the brief asks for (pro-GRESS-a, not the Mexican PROGRESA) is
    # real but only checkable by ear; the brief and prompt steer it, no automated gate can.
]

# citizen-at-the-counter framing — the inversion that matters most
CITIZEN_FRAMING = [
    r"\byou (?:have )?(?:ever )?stood at\b",
    r"\byou(?:'re| are) (?:standing|queuing|waiting) (?:at|in)\b",
    r"\byour name, your address\b",
    r"\bfilling out your\b",
    r"\bthe next time you\b",
    r"\bwe(?:'ve| have) all been there\b",
    r"\bas a citizen,? you\b",          # KP2 1.1 v0.1: "as a citizen, you hand over your ID"
]

# The take must END on the sources line. A take that simply stops, or stops on a question,
# is unusable: the Sources slide has nothing to sit under. Matched loosely because the hosts
# reword it ("sources are in the description", "you'll find the sources in the video
# description"), and only in the last two cues, where it is the only thing allowed.
SOURCES_LINE = re.compile(r"sources?\b.{0,40}\bdescription", re.I)

# Second-person closers the fixed banned-phrase list keeps missing. NotebookLM rephrases the
# reflective outro every time — "a critical thought for you, the listener", "which impossible
# initiative could you bring to life" — so match the SHAPE (a question aimed at the listener in
# the final cues) rather than another literal string.
REFLECTIVE_CLOSE = [
    r"\bfor you,? the listener\b", r"\bleaves? you with\b", r"\bworth (?:asking|considering)\b",
    r"\bask yourself\b", r"\bwhat (?:would|could) (?:you|your)\b",
    r"\bwhich .{0,40}\bcould you\b", r"\bhow many .{0,40}\byou (?:have|know)\b",
    r"\bimagine (?:if|what)\b",
    # caught late: the closer is not always second-person. "leaves US with a final thought for
    # you to mull over" passed a gate built around "leaves YOU with" and "for you to consider".
    # Match the announcement of a closing thought, whoever it is addressed to.
    r"\bfinal thought\b", r"\bmull over\b", r"\bleaves? (?:us|you) with\b",
    r"\bthought (?:for you|to (?:leave|take))\b", r"\bone (?:last|final) (?:thought|question)\b",
    r"\bbrings? up a\b.{0,20}\b(?:thought|question)\b",
    # 4.7 v0.16: "And consider this implication for your own government structures." — an
    # announced closing thought with none of the words above in it.
    r"\bconsider\b.{0,40}\b(?:your own|for you)\b",
]

REQUIRED_SIGNPOSTS = [
    (r"\bsign one\b", "sign one"),
    (r"\bsign two\b", "sign two"),
    (r"\bsign three\b", "sign three"),
    (r"\bsign four\b", "sign four"),
]


def parse_srt(path):
    text = open(path, encoding="utf-8-sig").read()
    blocks = re.split(r"\n\s*\n", text.strip())
    cues = []
    for b in blocks:
        lines = [l for l in b.splitlines() if l.strip()]
        if len(lines) < 2:
            continue
        m = re.search(r"(\d+):(\d+):(\d+)[,.](\d+)\s*-->\s*(\d+):(\d+):(\d+)[,.](\d+)",
                      "\n".join(lines[:2]))
        if not m:
            continue
        g = [int(x) for x in m.groups()]
        start = g[0] * 3600 + g[1] * 60 + g[2] + g[3] / 1000
        end = g[4] * 3600 + g[5] * 60 + g[6] + g[7] / 1000
        body = " ".join(lines[2:]) if not lines[1].strip().isdigit() else " ".join(lines[2:])
        cues.append({"start": start, "end": end, "text": body.strip()})
    return cues


def mmss(sec):
    return f"{int(sec) // 60}:{int(sec) % 60:02d}"


def _lev(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]


def paera_near_misses(text, deck_text):
    """Any near-miss of PAERA the deck does not itself use.

    A list of known wrong forms cannot keep up: "PRA" and "Paira" were on it, then 10 Sep
    produced "PERA" on two takes and "PEURA" on the next one. Each time the gate passed a take
    carrying the defect it was re-rolling for. So this fails closed — flag anything two edits
    from PAERA — and uses the deck as the exemption list, because the real acronyms around it
    (PNEA, PNIA, PDGA, PLR) are all named in the deck and PAERA's manglings are not.
    """
    deck_words = set(re.findall(r"\b[A-Za-z]{2,8}\b", deck_text.upper()))
    bad = set()
    for tok in set(re.findall(r"\b[A-Z][A-Za-z]{2,6}\b", text)):
        up = tok.upper()
        if up == "PAERA" or up in deck_words:
            continue
        if _lev(up, "PAERA") <= 2:
            bad.add(tok)
    return sorted(bad)


EXPANSION = re.compile(
    r"public administration ecosystem reference architecture", re.I)


def paera_expansion_slips(text):
    """The acronym said next to the expansion must be PAERA.

    `paera_near_misses` measures edit distance, and 4.6 v0.14 shipped "the POA framework, that's
    the Public Administration Ecosystem Reference Architecture" — three edits from PAERA, so it
    passed, and the take was recorded as clean. Distance cannot be widened to three without
    flagging most three-letter acronyms on air.

    The expansion is the better anchor: a take only expands the name where it introduces it, and
    whatever acronym it puts beside it is the one the hosts are pronouncing. So wherever the
    expansion appears, PAERA must appear within 100 characters of it.
    """
    bad = []
    for m in EXPANSION.finditer(text):
        window = text[max(0, m.start() - 100):m.end() + 100]
        if not re.search(r"\bPAERA\b", window, re.I):
            bad.append(text[max(0, m.start() - 60):m.start()].strip()[-60:])
    return bad


FRAMEWORK = re.compile(r"\b(?:framework|standards)\b", re.I)
# Words that can sit capitalised in front of "framework" without naming one.
NOT_A_NAME = {"THE", "A", "AN", "THIS", "THAT", "ITS", "OUR", "AND", "OR", "BUT", "SO", "WELL",
              "YEAH", "RIGHT", "OKAY", "OK", "UM", "UH", "IT", "IS", "IN", "OF", "TO", "USING",
              "CALLED", "NAMED", "ANOTHER", "SAME", "WHOLE", "GOVERNANCE", "REFERENCE",
              "ARCHITECTURE", "ESTABLISHED", "THEY", "WE", "YOU", "I", "HE", "SHE", "THERE",
              "THEN", "NOW", "WHAT", "WHICH", "WHEN", "WHERE", "HOW", "WHY", "BECAUSE",
              "FIRST", "SECOND", "THIRD", "EVEN", "EXACTLY", "PRECISELY", "LIKE", "JUST",
              # interjections start a clause mid-caption, so the sentence-start test misses them
              # ("…and the Oh framework" on a 5.5 roll)
              "OH", "AH", "MM", "UM", "UH", "YES", "NO", "SURE", "WOW", "HMM", "YEAH",
              # common technical acronyms, not a broken name — "the shared digital bus and API
              # standards" failed KP2 1.1's first roll, whose deck says "open interfaces"
              "API", "APIS", "ISO", "EU", "ICT", "ID"}


def framework_name_slips(text, deck_text):
    """Whatever is named right before "framework" has to be PAERA.

    Edit distance and the expansion anchor both work on single tokens, and 4.8 v0.8 got past
    both with "the Kia RRA framework" and "the PR era framework" — the name broken across two
    words, so no token was ever close to PAERA. "framework" (and "standards") is the reliable
    tell: in these takes the name only ever appears attached to one of them.

    Capitalised words in the three before the noun are treated as the name. Deck vocabulary is
    exempt, so "the European Interoperability Framework" and "GovStack" pass.
    """
    deck_words = set(re.findall(r"\b[A-Za-z]{2,20}\b", deck_text.upper()))
    bad = []
    for m in FRAMEWORK.finditer(text):
        before = text[max(0, m.start() - 40):m.start()]
        # A capital after a full stop is a sentence start, not a name ("Even with an
        # established framework" flagged "Even" before this).
        names = [w.group(0) for w in re.finditer(r"\b[A-Z][A-Za-z.\-]{0,14}\b", before)
                 if not re.search(r"[.?!]\s+$", before[:w.start()])][-3:]
        # "PAERA-anchored standards" is one token to the regex and it is correct, so test for
        # the name inside the token rather than for equality.
        if any("PAERA" in w.upper() for w in names):
            continue
        names = [w for w in names
                 if w.upper() not in NOT_A_NAME and w.upper() not in deck_words]
        if names:
            bad.append(" ".join(names) + " " + m.group(0))
    return sorted(set(bad))


def deck_terms(path):
    """House-term rows the deck's own copy uses, so they cannot count as drift.

    Twenty of the twenty-two KP1 decks write "Learner Registry" or "duplicate registries" in
    approved slide copy, and the house-term row failed every take that quoted them. That cost
    4.3 a whole re-roll on 10 Sep, and inflated the terminology numbers in the 8 Sep batch.
    Same fix trim_outro.py took: let the deck say what its own vocabulary is.
    """
    from pptx import Presentation                                    # only needed with --deck
    blob = []
    for slide in Presentation(path).slides:
        for sh in slide.shapes:
            if sh.has_text_frame:
                blob.append(sh.text_frame.text)
        if slide.has_notes_slide:
            blob.append(slide.notes_slide.notes_text_frame.text)
    text = " ".join(blob)
    return {pat for pat, _ in TERMINOLOGY if re.search(pat, text, re.I)}, text


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("srt")
    ap.add_argument("--target", type=int, default=240, help="target runtime, seconds")
    ap.add_argument("--tolerance", type=int, default=15, help="± seconds allowed")
    ap.add_argument("--deck", help="the video's .pptx — house-term rows whose wrong form appears "
                                   "in the deck's own copy are skipped, because the hosts are "
                                   "then quoting approved substance, not drifting from it")
    args = ap.parse_args()
    deck_vocab, deck_text = deck_terms(args.deck) if args.deck else (set(), "")

    cues = parse_srt(args.srt)
    if not cues:
        sys.exit(f"no cues parsed from {args.srt}")
    full = " ".join(c["text"] for c in cues)
    low = full.lower()
    runtime = cues[-1]["end"]
    words = len(full.split())

    fails, warns, notes = [], [], []

    # 1. runtime
    lo, hi = args.target - args.tolerance, args.target + args.tolerance
    line = (f"runtime {mmss(runtime)} vs target {mmss(args.target)} "
            f"(±{args.tolerance}s)")
    if runtime > hi:
        fails.append(f"OVER — {line}; cut {int(runtime - args.target)}s")
    elif runtime < lo:
        fails.append(f"UNDER — {line}; add {int(args.target - runtime)}s")
    else:
        notes.append("runtime OK — " + line)
    notes.append(f"{words} words · {words / (runtime / 60):.0f} wpm "
                 f"(brief a slower 130–150 wpm for ESL audiences)")

    # 2. tail — the reflective outro usually lives in the last 45s
    tail = " ".join(c["text"] for c in cues if c["start"] > runtime - 45).lower()
    tail_hits = [p for p in BANNED_PHRASES if p in tail]
    if tail_hits:
        fails.append("REFLECTIVE OUTRO in the final 45s — "
                     + ", ".join(repr(h) for h in tail_hits)
                     + "; the take must end on the recap slide's single message + one sources line")

    # 2b. the take must end on the sources line, and nothing may follow it
    last_two = " ".join(c["text"] for c in cues[-2:])
    if not SOURCES_LINE.search(last_two):
        # Decided 6 Sep 2026: the Sources slide is held silent. The two-host format has never
        # once produced this line in ~20 takes, and the deck only requires that no URLs are
        # read aloud. The take ends on the last content slide's message; the Sources slide is
        # a silent 5-second bookend. Still reported, because a take that trails off mid-thought
        # looks the same to the checker as one that ended deliberately.
        notes.append(f"Sources slide is silent (convention) — take ends "
                     f"{cues[-1]['text'][:60]!r}")
    if cues[-1]["text"].rstrip().endswith("?"):
        fails.append(f"ENDS ON A QUESTION — {cues[-1]['text'][:70]!r}")
    tail_q = [p for p in REFLECTIVE_CLOSE if re.search(p, tail)]
    if tail_q:
        fails.append(f"REFLECTIVE CLOSE — {len(tail_q)} second-person closer(s) in the final 45s; "
                     "the audio ends on the recap message plus the sources line")

    # 3. banned phrases anywhere
    hits = Counter()
    for p in BANNED_PHRASES:
        n = low.count(p)
        if n:
            hits[p] = n
    if hits:
        fails.append("BANNED PHRASES — "
                     + ", ".join(f"{k}×{v}" for k, v in hits.most_common()))

    # 4. filler density
    fcount = sum(low.count(f) for f in FILLER)
    per100 = fcount / max(words, 1) * 100
    if per100 > FILLER_PER_100W:
        fails.append(f"FILLER — {fcount} markers, {per100:.1f} per 100 words "
                     f"(over {FILLER_PER_100W})")
    else:
        notes.append(f"filler OK — {fcount} markers, {per100:.1f}/100w")

    # 5. terminology
    for pat, fix in TERMINOLOGY:
        if pat in deck_vocab:
            continue        # the deck says it too — see --deck
        if re.search(pat, full, re.I):
            fails.append(f"TERMINOLOGY — say {fix}")

    if deck_text:
        near = paera_near_misses(full, deck_text)
        if near:
            fails.append("TERMINOLOGY — " + ", ".join(near)
                         + " is not PAERA; say P-A-E-R-A, all five letters")

    if deck_text:
        for slip in framework_name_slips(full, deck_text):
            fails.append(f"TERMINOLOGY — \"{slip}\" is not PAERA; the framework has one name")

    for ctx in paera_expansion_slips(full):
        fails.append("TERMINOLOGY — the expansion is given but the acronym beside it is not "
                     f"PAERA: \u2026{ctx}\u2026")

    # 6. framing inversion
    fr = [p for p in CITIZEN_FRAMING if re.search(p, low)]
    if fr:
        fails.append(f"FRAMING — {len(fr)} citizen-at-the-counter construction(s); "
                     "the listener is the official who runs these systems")

    # 7. numbered signposts (cue-ability)
    # Only 1.1 has a four-signs slide. The check used to fire on every take, which trained
    # the reader to ignore a warning that is real on the one video it applies to.
    if re.search(r"\bfour signs?\b", low):
        missing = [label for pat, label in REQUIRED_SIGNPOSTS if not re.search(pat, low)]
        if missing:
            warns.append("SIGNPOSTS — the take announces four signs but does not number them "
                         "aloud: " + ", ".join(missing))

    # A warn, not a fail: the brief now asks the hosts not to spell the name out, but the old
    # row asked them to and six accepted takes (1.1, 1.5, 1.6, 3.3, 3.5, 4.2) do it once. It
    # reads fine once and badly twice — which is a judgement, so it goes to a person.
    spelled = len(re.findall(r"\bP[-. ]A[-. ]E[-. ]R[-. ]A\b", full))
    if spelled:
        warns.append(f"SPELLED OUT — the take says 'P-A-E-R-A' aloud {spelled}\u00d7; the brief "
                     "spells it as a pronunciation hint, not a line to read")

    # 8. silence gaps — where the slide cuts can land.
    # 0.6 is shared with kp-scribe-transcribe (SILENCE_GAP_S in transcribe.py and
    # PAUSE_GAP_S in compare_srt.py): its segmenter breaks a cue on exactly this gap,
    # so a smaller number here would offer cut points at breaks made for punctuation.
    gaps = []
    for a, b in zip(cues, cues[1:]):
        g = b["start"] - a["end"]
        if g >= 0.6:
            gaps.append((a["end"], g))
    notes.append(f"{len(gaps)} pause(s) ≥0.6s available as slide-cut points: "
                 + ", ".join(f"{mmss(t)}({g:.1f}s)" for t, g in gaps[:12])
                 + (" …" if len(gaps) > 12 else ""))

    # --- report
    print(f"=== audio drift check — {args.srt} ===\n")
    for f in fails:
        print("  FAIL  " + f)
    for w in warns:
        print("  WARN  " + w)
    for n in notes:
        print("  ok    " + n)
    print(f"\n{len(fails)} fail, {len(warns)} warn")
    if fails:
        print("\nTwo or more FAILs: regenerate rather than patch. NotebookLM output "
              "is cheaper to re-roll than to edit, and re-rolls converge once the "
              "notebook holds only the audio brief.")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
