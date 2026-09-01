#!/usr/bin/env python3
"""The check on tts_script_lint.py. `python3 test_lint.py` prints "lint OK".

Every assertion here is a gate that costs money if it silently stops firing:
these are the checks that run *before* the API call.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from tts_script_lint import check, parse  # noqa: E402

CFG = {
    "target_seconds": 60,
    "speakers": [{"name": "Nadia", "role": "interviewer", "voice": "Aoede"},
                 {"name": "Daniel", "role": "expert", "voice": "Charon"}],
    "pronunciations": {"PAERA": "PAH-eh-rah"},
}


def script(body, tmp=Path("/tmp/_kp_lint_test.md")):
    tmp.write_text(body, encoding="utf-8")
    return tmp


def words(n, word="architecture"):
    return " ".join([word] * n)


def codes(fails):
    return {f.split(" —")[0].split(" (")[0] for f in fails}


# A clean script: 150 words = 60 s at 150 wpm, expert carries 85%.
CLEAN = f"""# KP9 M9 9.9 — Interview script v0.1

<!-- slide: 1 — Title | words: 150 -->
**Nadia:** {words(22)}?
**Daniel:** {words(128)}.

<!-- slide: 2 — Sources | words: 0 -->
"""

fails, warns, notes = check(script(CLEAN), CFG)
assert not fails, fails
assert not warns, warns

# The parser: slide blocks, budgets and wrapped continuation lines.
slides, problems = parse(script(CLEAN))
assert not problems, problems
assert [s["n"] for s in slides] == [1, 2]
assert slides[0]["budget"] == 150 and slides[1]["budget"] == 0
wrapped = parse(script("<!-- slide: 1 — T | words: 4 -->\n**Nadia:** one two\nthree four\n"))[0]
assert wrapped[0]["turns"] == [["Nadia", "one two three four"]], wrapped[0]["turns"]

# Structure. Prose outside a slide block would be read aloud by the API.
assert "outside any slide" in parse(script("stray line\n"))[1][0]
assert "heading inside" in parse(script("<!-- slide: 1 — T | words: 4 -->\n## Nope\n"))[1][0]
assert "no `<!-- slide" in check(script("# just a title\n"), CFG)[0][0]

# A third speaker is a hard stop: the API takes exactly two.
three = CLEAN.replace("**Nadia:** " + words(22), "**Nadia:** " + words(11) + "?\n**Guest:** " + words(11))
assert "SPEAKERS" in codes(check(script(three), CFG)[0]), check(script(three), CFG)[0]

# Budget: ±10% warns, ±20% fails, and both name the slide.
over15 = CLEAN.replace(words(128), words(150))          # 172/150 = +15%
assert any("BUDGET" in w for w in check(script(over15), CFG)[1])
over30 = CLEAN.replace(words(128), words(180))          # 202/150 = +35%
assert "BUDGET" in codes(check(script(over30), CFG)[0])

# Runtime rides on the same words, so a big overrun fails twice — deliberately.
assert "RUNTIME" in codes(check(script(over30), CFG)[0])

# Nothing is spoken over Sources.
sourced = CLEAN.replace("<!-- slide: 2 — Sources | words: 0 -->\n",
                        "<!-- slide: 2 — Sources | words: 0 -->\n**Daniel:** See the description.\n")
assert "SLIDE 2" in codes(check(script(sourced), CFG)[0])

# The shared lists from srt_drift_check.py actually reach this file.
for bad, code in [("Welcome to the deep dive.", "BANNED PHRASES"),
                  ("The PRA framework applies.", "TERMINOLOGY"),
                  ("The next time you renew a licence.", "FRAMING"),
                  ("You know, I mean, basically, sort of, kind of, right?", "FILLER")]:
    hit = CLEAN.replace(words(128), bad + " " + words(120))
    assert code in codes(check(script(hit), CFG)[0]), (code, check(script(hit), CFG)[0])

# A phonetic spelling in the dialogue means the hosts say it; it belongs in the preamble.
phon = CLEAN.replace(words(128), "The PAH-eh-rah framework. " + words(124))
assert "PRONUNCIATION" in codes(check(script(phon), CFG)[0])

# The expert carries the content (interview-format rule 1).
flat = CLEAN.replace("**Nadia:** " + words(22), "**Nadia:** " + words(75))
flat = flat.replace(words(128), words(75))
assert any("BALANCE" in w for w in check(script(flat), CFG)[1])

# Two turns in a row is a warn, not a fail — it is sometimes right.
runon = CLEAN.replace("**Daniel:** " + words(128), "**Daniel:** " + words(64) + ".\n**Daniel:** " + words(64))
f, w, _ = check(script(runon), CFG)
assert not f and any("ALTERNATION" in x for x in w), (f, w)

Path("/tmp/_kp_lint_test.md").unlink()
print("lint OK")
