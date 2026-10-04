#!/usr/bin/env python3
"""spec_figures.py - draws the KP3 specification figures F6 to F12.

Seven figures of KP3, the Education DPI Roadmap, drawn with PlantUML (an automatic-layout
engine) in the shared style of spec_style.puml, into PNG files beside this program:

  F6   the first proof: four blocks on the data exchange layer      (subtopics 1.10 and 5.1)
  F7   the workflow of the registration service                     (2.5)
  F8   the data model of the learner register                       (3.3)
  F9   the five tiers of the load, as Giga publishes them           (3.2)
  F10  the sign-in between the service, the learner and the identity block (4.3)
  F11  the path of a payment                                        (4.4 and 4.5)
  F12  the once-only registration as a sequence of calls            (5.2 and 5.3)

F6, F7, F8, F10, F11 and F12 are drawn from the published GovStack specifications before
anything is built, and each carries the mark "From the specification" on the picture. F9 is
drawn from UNICEF Giga's published data flow and carries that source instead.

PlantUML stores each figure's source in its PNG file. The style is included by its bare name
and PlantUML runs in this folder, so that source names no folder of the machine that drew it,
and drawing the figures in any folder gives the same files byte for byte. The text is sized so
that, with the figure placed 6.5 inches wide, no text is smaller than 7 points (smallest font
size x 6.5 / the figure's width in inches); the long lines are broken, never reworded.

Every name of a block, a call or a field that a figure shows is written through n(), which
records it with the source it must be found in:
  spec     the specification analysis of KP3's build modules
  outline  the KP3 outline (names of Progressa's bodies and of the data exchange layer)
  giga     Giga's docs/dataflow.md at the commit the outline cites

Usage:
  python3 spec_figures.py
      deletes the seven PNG files and draws them again from clean
  python3 spec_figures.py --check --analysis PATH --outline PATH [--giga PATH]
      finds every recorded name in its source and lists any call-like token a figure shows
      that was not recorded; exits 1 if anything is missing. Without --giga, Giga's file is
      read from GitHub at the pinned commit.
  python3 spec_figures.py --check ... --selftest
      the same check with one invented call added to F12, which must make it fail
"""

import argparse
import hashlib
import os
import re
import shutil
import subprocess
import sys
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
# The style is included by its bare name and PlantUML is run in this folder (render()), so the
# source PlantUML stores inside each PNG names no folder of the machine that drew it, and the
# same figure drawn in any folder gives the same file.
STYLE = "spec_style.puml"

GIGA_COMMIT = "46b72af67066363a29d3d933dcdc619489bd0be5"
GIGA_URL = ("https://raw.githubusercontent.com/unicef/giga-dagster/"
            + GIGA_COMMIT + "/docs/dataflow.md")

# The marks are drawn on two or three lines (\\n), so that no caption sets a figure's width.
SPEC_MARK = ("From the specification: drawn from the published GovStack specifications "
             "before anything is built,\\nand corrected when the configuration is built. "
             "Progressa is a fictional country.")
GIGA_MARK = ("Source: UNICEF Giga, repository giga-dagster, docs/dataflow.md, at commit "
             "46b72af.\\nDrawn as Giga publishes it, for school data; the DPI Roadmap applies the pattern "
             "to learners\\nas its own adaptation. Not drawn from a GovStack specification.")


class Figure:
    def __init__(self, key, filename, title):
        self.key = key
        self.filename = filename
        self.title = title
        self.names = []          # (kind, name)

    def n(self, name, kind="spec"):
        """Record a block, call or field name and return it unchanged for the picture."""
        self.names.append((kind, name))
        return name


def head(fig, caption):
    return ["@startuml", "!include " + STYLE, "title " + fig.title,
            "caption " + caption]


# ---------------------------------------------------------------------------------------
# F6  The first proof: four blocks on the data exchange layer
# ---------------------------------------------------------------------------------------
def f6():
    f = Figure("F6", "F6_first-proof.png",
               "The first proof: four blocks on the data exchange layer")
    n = f.n
    L = head(f, SPEC_MARK)
    L += [
        "left to right direction",
        "skinparam ranksep 30",
        'rectangle "%s: the %s\\n(the %s), %s %s" <<exchange>> as XL {' % (
            n("Linkup"), n("data exchange layer", "outline"), n("Information Mediator"),
            n("X-Road"), n("release 7.7.0", "outline")),
        '  rectangle "%s\\nowner of the federation\\n<size:10>member since GIF</size>" <<member>> as PDGA'
        % n("PDGA", "outline"),
        '  rectangle "%s\\n<size:10>member since GIF;\\nthe DPI Roadmap builds nothing on it</size>" <<outside>> as PNEA'
        % n("PNEA", "outline"),
        '  rectangle "%s\\n<size:10>the %s;\\nmember since GIF</size>" <<member>> as PNIA {' % (
            n("PNIA"), n("identity block")),
        '    component "%s" as IDS' % n("identity service"),
        "  }",
        '  rectangle "%s\\n<size:10>the learner register,\\non the %s block;\\nmember since GIF</size>" <<member>> as PLR {'
        % (n("PLR"), n("Digital Registries")),
        '    component "%s\\n<size:10>its %s\\noperation (%s)</size>" <<added>> as WS' % (
            n("write service"), n("create-or-update"), n("X2")),
        "  }",
        '  rectangle "%s\\n<size:10>added by the DPI Roadmap (%s)</size>" <<added>> as RM {' % (
            n("Registration member"), n("X1")),
        '    component "%s\\n<size:10>on the %s</size>" as RS' % (
            n("registration service"), n("Registration block")),
        "  }",
        '  rectangle "%s member\\n<size:10>added by the DPI Roadmap (%s)</size>" <<added>> as PM {' % (
            n("Payments block"), n("X7")),
        '    component "the %s\'s\\nown interface" as PBI' % n("Payments block"),
        "  }",
        "}",
        'rectangle "%s\\n<size:10>behind the %s (%s)</size>" as BANK' % (
            n("payer bank"), n("Payments block"), n("P6")),
        'rectangle "%s\\n<size:10>a %s;\\nnot a member of the exchange</size>" <<outside>> as PP' % (
            n("PayPro"), n("payment system in the market")),
        'RS ..> IDS : %s (%s)' % (n("access grant"), n("X3")),
        'RS ..> WS : %s (%s)' % (n("access grant"), n("X3")),
        "PBI --> BANK",
        "BANK --> PP",
        "PDGA -[hidden]- PNEA",
        'note bottom of XL',
        "  Each call goes through the caller's own %s (%s)." % (
            n("security server"), n("X5")),
        "  Thin blue border: in place before the DPI Roadmap.",
        "  Thick blue border on a light blue ground:",
        "  added by the DPI Roadmap, with what it holds.",
        "  Dashed grey border: in place, but not built on in the DPI Roadmap.",
        "  Slate border on a grey ground: the data exchange layer.",
        "end note",
        "@enduml",
    ]
    return f, "\n".join(L)


# ---------------------------------------------------------------------------------------
# F7  The workflow of the registration service
# ---------------------------------------------------------------------------------------
def f7():
    f = Figure("F7", "F7_registration-workflow.png",
               "The workflow of the registration service")
    n = f.n
    L = head(f, SPEC_MARK)
    def small(*lines):
        # PlantUML ends a <size> tag at a line break, so each line is tagged on its own
        return "\n".join("<size:10>%s</size>" % ln for ln in lines)

    L += [
        "skinparam ActivityFontSize 10",
        # The lanes are declared first, in this order, so that the line back to the applicant
        # (the repeat loop, drawn to the right of the registrar's decision) has no lane to its
        # right and runs through no other participant's column.
        "|%s (%s)|" % (n("Learner register"), n("PLR")),
        "|%s (learner or parent)|" % n("Applicant"),
        "|%s|" % n("Registration block"),
        "|%s|" % n("Registrar"),
        "|%s (learner or parent)|" % n("Applicant"),
        "start",
        "repeat",
        ":Fills in the applicant's screens\nand sends the application\n%s;" % small(
            *(n("POST /services/{serviceId}/applications").replace("}/", "}/\n", 1)
              + " (%s)" % n("R4")).split("\n")),
        "|%s|" % n("Registration block"),
        ":Three checks before\nthe officer decides\n"
        "- %s (%s)\n- the learner's %s and\n  identifier against the\n  identity authority's\n  record (%s)\n"
        "- %s on\n  submission (%s);" % (
            n("rules on each field"), n("R5"), n("name"), n("R6"),
            n("completeness"), n("R5")),
        "if (all three\nchecks pass?) then (no)",
        "  :Application refused\n  with a readable message;",
        "  stop",
        "else (yes)",
        "endif",
        ":Task for the %s,\nwhich validates against\nexternal sources\n%s;" % (
            n("automated role"), small("%s (%s)" % (n("GET /tasks"), n("R7")))),
        "|%s|" % n("Registrar"),
        ":The human %s decides\n%s;" % (
            n("registrar"), small(n("POST /tasks/{taskId}/complete"), "(%s)" % n("R7"))),
        "repeat while (sent back to the applicant?) is (yes) not (no)",
        "if (decision) then (rejected)",
        "  :File closed;",
        "  stop",
        "else (approved)",
        "endif",
        "|%s|" % n("Registration block"),
        ":On approval, an action\nof an %s\nsends the record\nto the register through\nthe %s (%s);" % (
            n("automated role"), n("Information Mediator"), n("R8")),
        "note right",
        "  The order of approval",
        "  and write is the team's",
        "  joining of two",
        "  published contracts:",
        "  the Registration",
        "  specification gives",
        "  no sequence for the",
        "  write (REG §9.2.2).",
        "end note",
        "|%s (%s)|" % (n("Learner register"), n("PLR")),
        ":The register's\n%s operation\n%s;" % (
            n("create-or-update"), small(n("POST …/updateOrCreate"))),
        ":The learner now exists\n%s;" % small(
            *(n("POST /data/{registryName}/{versionNumber}/exists").replace("}/", "}/\n", 1)
              + "\nreturns true").split("\n")),
        "|%s|" % n("Registration block"),
        ":The applicant receives\nthe %s of registration;" % n("proof"),
        "stop",
        "@enduml",
    ]
    return f, "\n".join(L)


# ---------------------------------------------------------------------------------------
# F8  The data model of the learner register
# ---------------------------------------------------------------------------------------
def f8():
    f = Figure("F8", "F8_learner-register-model.png",
               "The data model of the learner register")
    n = f.n
    L = head(f, SPEC_MARK)
    L += [
        "top to bottom direction",
        'class "%s (%s)" as REG <<the register, %s>> {' % (
            n("Learner register"), n("PLR"), n("RG1")),
        "  %s" % n("name"),
        "  %s" % n("short code"),
        "  %s" % n("domain"),
        "  %s" % n("owner department"),
        "  %s" % n("retention policy"),
        "  %s: Open, Restricted or Confidential" % n("classification"),
        "  %s: Draft → Published → Archived" % n("lifecycle state"),
        "}",
        'class "Learner record" as LR <<schema, %s>> {' % n("RG2"),
        "  %s [required, unique]" % n("identifier the register keys on", "outline"),
        "  %s: the pairwise identifier the identity block gives to this service [%s]" % (
            n("sub"), n("I6")),
        "  %s" % n("name"),
        "  %s" % n("date of birth"),
        "  %s: link to the learner's school [%s]" % (n("school"), n("RG3")),
        "}",
        'class "School" as SC <<a linked registry>> {',
        "}",
        "hide empty members",
        'REG "1" *-- "many" LR : holds',
        'LR "many" --> "1" SC : %s to a school' % n("link"),
        "note right of LR",
        "  No national number: the %s" % n("Unique Identity Number"),
        "  stays inside the identity block (ID 6.1-r11).",
        "  The %s mark on sub, and the" % n("PersonalDataID"),
        "  personal-data marks, are optional in the",
        "  edition; no check depends on them.",
        "end note",
        "note bottom of SC",
        "  A learner record that names a school that does not",
        "  exist is refused, or kept as an %s, as the rule" % n("orphan"),
        "  configured says (%s)." % n("RG3"),
        "end note",
        "note top of REG",
        "  Set up from one schema file in %s (%s)," % (n("JSON or YAML"), n("RG12")),
        "  published in versions (%s); each published version answers" % n("RG4"),
        "  %s." % n("GET /data/{registryName}/{versionNumber}"),
        "  The registration service may create and update; other",
        "  services may only read (%s). Deletion keeps the" % n("RG5"),
        "  %s (%s)." % (n("logical record"), n("RG13")),
        "end note",
        "@enduml",
    ]
    return f, "\n".join(L)


# ---------------------------------------------------------------------------------------
# F9  The five tiers of the load, as Giga publishes them
# ---------------------------------------------------------------------------------------
def f9():
    f = Figure("F9", "F9_five-tiers.png", "The five tiers of the load")
    n = f.n
    g = "giga"
    L = head(f, GIGA_MARK)
    L += [
        # PlantUML leaves a wider margin on the right of the picture than on the left; a left
        # margin two units wider puts at least as much space left of the caption as right of it.
        "<style>",
        "document {",
        "  Margin 10 10 10 12",
        "}",
        "</style>",
        "top to bottom direction",
        'rectangle "<b>%s</b>\\nAll new data from the %s starts here.\\n'
        'It may have wrong data types, column names that do not\\n'
        'match gold, missing nullable columns and extra columns." as RAW' % (
            n("raw", g), n("Ingestion Portal", g)),
        'rectangle "<b>%s</b>\\n%s applied; missing nullable columns added;\\n'
        'extra columns dropped; %s performed.\\n'
        'Output split into %s and %s rows.\\n'
        'The %s is emailed to the uploader." as BRONZE' % (
            n("bronze", g), n("Column mapping", g), n("data quality checks", g),
            n("passed", g), n("failed", g), n("data quality report", g)),
        'rectangle "%s rows" <<outside>> as FAILED' % n("failed", g),
        'rectangle "<b>%s</b>\\nA %s review in %s:\\n'
        'users with the appropriate permissions approve\\n'
        'or deny each row. Output split into %s and %s rows." as STAGING' % (
            n("staging", g), n("human-in-the-loop", g), n("Giga Sync", g),
            n("approved", g), n("rejected", g)),
        'rectangle "%s rows" <<outside>> as REJECTED' % n("rejected", g),
        'rectangle "<b>%s</b>\\n%s rows are merged into silver." as SILVER' % (
            n("silver", g), n("approved", g)),
        'rectangle "<b>%s</b>\\nsilver is merged into gold, which is then split\\n'
        'into %s and %s tables." as GOLD' % (
            n("gold", g), n("master", g), n("reference", g)),
        "RAW --> BRONZE",
        'BRONZE --> STAGING : %s rows' % n("passed", g),
        "BRONZE -right-> FAILED",
        'STAGING --> SILVER : %s rows' % n("approved", g),
        "STAGING -right-> REJECTED",
        "SILVER --> GOLD",
        "@enduml",
    ]
    return f, "\n".join(L)


# ---------------------------------------------------------------------------------------
# F10  The sign-in between the service, the learner and the identity block
# ---------------------------------------------------------------------------------------
def f10():
    f = Figure("F10", "F10_sign-in.png",
               "The sign-in between the service, the learner and the identity block")
    n = f.n
    L = head(f, SPEC_MARK)
    L += [
        'actor "Learner\\n<size:10>in a web browser</size>" as LRN',
        'participant "%s\\n<size:10>a registered client of the identity block</size>" as SVC'
        % n("Registration service"),
        'participant "%s\\n<size:10>%s</size>" as IDB' % (n("Identity block"), n("PNIA")),
        "note over SVC, IDB",
        "  Before any sign-in: the service is registered as a client",
        "  (%s, %s), the block publishes its configuration at" % (
            n("POST /client-mgmt/oidc-client"), n("I1")),
        "  %s and its keys at" % n("/.well-known/openid-configuration"),
        "  %s (%s), and every check signs in" % (n("/.well-known/jwks.json"), n("I2")),
        "  as an enrolled test person (%s)." % n("I7"),
        "end note",
        "LRN -> SVC : opens the registration service",
        "SVC -> LRN : sends the browser to the identity block's own screens",
        "LRN -> IDB : signs in, and approves the claims to be released",
        "IDB -> SVC : the browser returns to the service",
        "== Only these calls pass from server to server ==",
        "SVC -> IDB : %s" % n("POST /oauth/token"),
        "IDB --> SVC : signed %s with %s, %s, %s and %s" % (
            n("ID Token"), n("iss"), n("aud"), n("exp"), n("sub")),
        "SVC -> SVC : verifies the signature against the keys at\\n%s (%s)" % (
            n("/.well-known/jwks.json"), n("I3")),
        "SVC -> SVC : accepts only an %s on its list (%s)" % (
            n("authentication context value"), n("I5")),
        "opt the %s (%s); the %s, with scope %s, stops above" % (
            n("flow with claims"), n("I3"), n("lean flow"), n("openid")),
        "  SVC -> IDB : %s" % n("GET /oidc/userinfo"),
        "  IDB --> SVC : the %s of the requested scopes and no others,\\nsuch as %s (%s)" % (
            n("claims"), n("name"), n("I4")),
        "end",
        "note right of SVC",
        "  The service keeps %s, the identifier the" % n("sub"),
        "  block gives to this one service (%s)." % n("I6"),
        "  The %s never leaves" % n("Unique Identity Number"),
        "  the identity block.",
        "end note",
        "@enduml",
    ]
    return f, "\n".join(L)


# ---------------------------------------------------------------------------------------
# F11  The path of a payment
# ---------------------------------------------------------------------------------------
def f11():
    f = Figure("F11", "F11_payment-path.png",
               "The path of a payment: programme account, Payments block, payer bank, "
               "payment system")
    n = f.n
    L = head(f, SPEC_MARK)
    L += [
        'rectangle "Calling block, an %s (%s)\\n<size:10>the %s or the %s</size>" as SRC' % (
            n("accepted source"), n("P1"), n("registration service"), n("learner register")),
        'rectangle "%s (%s)\\n<size:10>in the %s,\\nat the %s;\\nwith its currency</size>" as ACC'
        % (n("programme account"), n("P2"), n("government account systems"),
           n("Ministry of Finance or Central Bank")),
        "rectangle PB <<added>> [",
        "<b>%s</b>" % n("Payments block"),
        "<size:10>a member of the exchange;</size>",
        "<size:10>its own interface is published through</size>",
        "<size:10>the %s (%s, %s)</size>" % (n("Information Mediator"), n("P7"), n("X7")),
        "<size:10> </size>",
        "----",
        "%s (%s)" % (n("account mapper"), n("P3")),
        "<size:10>%s</size>" % n("POST /identityAccountMapper/beneficiary"),
        "<size:10>%s, %s,</size>" % (n("functional identifier"), n("payment modality")),
        "<size:10>%s</size>" % n("financial address"),
        "----",
        "%s (%s)" % (n("bulk payment"), n("P4")),
        "<size:10>%s</size>" % n("POST /batchtransactions"),
        "----",
        "status of a payment (%s)" % n("P5"),
        "<size:10>%s at %s;</size>" % (n("Payment_Status_Check"), n("POST /api/v1/batch")),
        "<size:10>status pushed to the %s</size>" % n("callback address"),
        "]",
        'rectangle "%s (%s)\\n<size:10>executes the batch</size>" as BANK' % (
            n("payer bank"), n("P6")),
        'rectangle "%s\\n<size:10>a %s</size>" as PP' % (
            n("PayPro"), n("payment system in the market").replace(" in the", "\\nin the")),
        "ACC -right-> PB : pays from",
        "PB -right-> BANK",
        "BANK -right-> PP",
        "SRC -down-> PB : submits a batch",
        "PB .up.> SRC : status",
        "note bottom of PP",
        "  The calling service calls",
        "  no PayPro operation directly",
        "  (check %s). %s stays outside" % (n("P6"), n("Settlement")),
        "  the Payments block (PAY §5.1.12).",
        "end note",
        "@enduml",
    ]
    return f, "\n".join(L)


# ---------------------------------------------------------------------------------------
# F12  The once-only registration as a sequence of calls
# ---------------------------------------------------------------------------------------
def f12(selftest=False):
    f = Figure("F12", "F12_once-only-sequence.png",
               "The once-only registration as a sequence of calls")
    n = f.n
    L = head(f, SPEC_MARK)
    L += [
        # Every message and note is broken onto short lines, so that the seven columns fit a
        # page's width at a readable size; the words are those of the specification analysis.
        'actor "Learner" as LRN',
        'participant "%s\\n<size:10>holds the sequence\\nas its actions (%s)</size>" as SVC' % (
            n("Registration service"), n("X4")),
        'participant "%s\\n<size:10>%s</size>" as IDB' % (n("Identity block"), n("PNIA")),
        'actor "%s" as REGR' % n("Registrar"),
        'box "%s: the %s" #F2F2F2' % (n("Linkup"), n("data exchange layer", "outline")),
        'participant "%s\\n<size:10>of the\\n%s</size>" as SS1' % (
            n("security server"), n("Registration member")),
        'participant "%s\\n<size:10>of %s</size>" as SS2' % (n("security server"), n("PLR")),
        "end box",
        'participant "%s\\n<size:10>%s</size>" as REG' % (n("Learner register"), n("PLR")),
        "group Sign-in, as in the figure of the sign-in",
        "  LRN -> IDB : signs in, and approves\\nthe claims to be released",
        "  SVC -> IDB : %s,\\nthen %s" % (n("POST /oauth/token"), n("GET /oidc/userinfo")),
        "  IDB --> SVC : the released %s" % n("claims"),
        "end",
        "SVC -> SVC : an action fills %s\\nand %s\\nfrom the released claims" % (
            n("name"), n("date of birth")),
        "LRN -> SVC : checks the filled-in\\nfacts, types the rest\\nand submits once",
        "REGR -> SVC : approves\\n<size:10>%s</size>" % n("POST /tasks/{taskId}/complete"),
        "SVC -> SS1 : the write action:\\n%s\\n<size:10>to the caller's own security server,\\non the %s path (%s)</size>" % (
            n("POST …/updateOrCreate"), n("/r1/"), n("X5")),
        "SS1 -> SS2 : the message,\\n%s\\nand logged" % n("signed, time-stamped"),
        "note over SS2",
        "  access granted to the",
        "  Registration member (%s)" % n("X3"),
        "end note",
        "SS2 -> REG : %s" % n("create-or-update"),
        "REG --> SS2 : the record\\nis written",
        "SS2 --> SS1",
        "SS1 --> SVC",
    ]
    if selftest:
        L += ["SVC -> REG : %s" % "POST /learners/validate"]
    L += [
        "note over SS1, SS2",
        "  The exchange carries each call and",
        "  enforces who may make it. It does not",
        "  put the steps in order and does not",
        "  fill in the form (IM §4, out-of-scope",
        "  requirements). Both security servers",
        "  keep a %s of each request" % n("message log"),
        "  and response (%s)." % n("X6"),
        "end note",
        "note over REG",
        "  Check %s passes when" % n("X4"),
        "  %s" % n("POST /data/{registryName}/{versionNumber}/exists").replace("}/", "}/\n  ", 1),
        "  returns true for the learner,",
        "  and no identity field was",
        "  typed twice.",
        "end note",
        "@enduml",
    ]
    return f, "\n".join(L)


FIGURES = [f6, f7, f8, f9, f10, f11, f12]


# ---------------------------------------------------------------------------------------
# Drawing
# ---------------------------------------------------------------------------------------
def fix_size(puml):
    """PlantUML ends a <size> tag at a line break; close and reopen it on every line."""
    def one(m):
        segs = m.group(2).split("\\n")
        return "\\n".join("<size:%s>%s</size>" % (m.group(1), s) for s in segs)
    return re.sub(r"<size:(\d+)>(.*?)</size>", one, puml)


def render(puml, out_path):
    puml = fix_size(puml)
    exe = shutil.which("plantuml")
    if not exe:
        sys.exit("plantuml is not installed: install it (on macOS: brew install plantuml) "
                 "and run again. No figure was drawn.")
    env = dict(os.environ)
    env["PLANTUML_LIMIT_SIZE"] = "16384"
    p = subprocess.run([exe, "-tpng", "-pipe", "-charset", "UTF-8"],
                       input=puml.encode("utf-8"), capture_output=True, env=env, cwd=HERE)
    data = p.stdout
    if p.returncode != 0 or not data.startswith(b"\x89PNG"):
        sys.stderr.write(p.stderr.decode("utf-8", "replace"))
        sys.exit("PlantUML failed on %s (exit %d)" % (os.path.basename(out_path), p.returncode))
    with open(out_path, "wb") as fh:
        fh.write(data)


def draw_all():
    figs = [fn() for fn in FIGURES]
    for f, _ in figs:
        path = os.path.join(HERE, f.filename)
        if os.path.exists(path):
            os.remove(path)
    for f, puml in figs:
        path = os.path.join(HERE, f.filename)
        render(puml, path)
        with open(path, "rb") as fh:
            data = fh.read()
        w, h = int.from_bytes(data[16:20], "big"), int.from_bytes(data[20:24], "big")
        print("%-4s %-32s %9d bytes  %5d x %-5d px  sha256 %s" % (
            f.key, f.filename, len(data), w, h, hashlib.sha256(data).hexdigest()))


# ---------------------------------------------------------------------------------------
# The check: every recorded name in its source; no call-like token left unrecorded
# ---------------------------------------------------------------------------------------
def normalise(text):
    text = text.replace("`", "").replace("\\_", "_")
    return re.sub(r"\s+", " ", text).lower()


CALL_LIKE = [
    r"\b(?:GET|POST|PUT|DELETE|PATCH)\s+\S+",      # an operation with its path
    r"(?<![\w<])/[\w.{}\-…/]+",                     # a path
    r"\b[A-Za-z]+_[A-Za-z_]+\b",                    # an identifier with an underscore
    r"\b(?:R|RG|I|P|X)\d{1,2}\b",                   # a configuration of the build
]


def visible_text(puml):
    keep = []
    for line in puml.splitlines():
        s = line.strip()
        if s.startswith("!include") or s.startswith("'"):
            continue
        line = line.replace("\\n", " ")
        keep.append(re.sub(r"</?size(:\d+)?>|</?b>", "", line))
    return "\n".join(keep)


def check(args):
    with open(args.analysis, encoding="utf-8") as fh:
        spec = normalise(fh.read())
    with open(args.outline, encoding="utf-8") as fh:
        outline = normalise(fh.read())
    if args.giga:
        with open(args.giga, encoding="utf-8") as fh:
            giga = normalise(fh.read())
        giga_from = args.giga
    else:
        try:
            with urllib.request.urlopen(GIGA_URL, timeout=30) as r:
                raw = r.read().decode("utf-8")
        except Exception:
            # some Python installations have no certificate store; curl uses the system's
            raw = subprocess.run(["curl", "-sSf", GIGA_URL], capture_output=True,
                                 check=True).stdout.decode("utf-8")
        giga = normalise(raw)
        giga_from = GIGA_URL
    sources = {"spec": spec, "outline": outline, "giga": giga}
    print("sources: spec=%s\n         outline=%s\n         giga=%s" % (
        args.analysis, args.outline, giga_from))
    missing, unrecorded, total = [], [], 0
    for fn in FIGURES:
        f, puml = fn(selftest=True) if (args.selftest and fn is f12) else fn()
        seen = {}
        for kind, name in f.names:
            seen.setdefault((kind, name), 0)
            seen[(kind, name)] += 1
        for (kind, name) in sorted(seen, key=lambda k: (k[0], k[1].lower())):
            cnt = sources[kind].count(normalise(name))
            total += 1
            flag = "ok" if cnt else "MISSING"
            print("%-4s %-7s %-48s %4d  %s" % (f.key, kind, name, cnt, flag))
            if not cnt:
                missing.append((f.key, kind, name))
        want = GIGA_MARK if f.key == "F9" else SPEC_MARK
        other = SPEC_MARK if f.key == "F9" else GIGA_MARK
        mark_ok = ("caption " + want) in puml and other not in puml
        print("%-4s mark    %-48s       %s" % (
            f.key, "Giga's flow" if f.key == "F9" else "From the specification",
            "ok" if mark_ok else "WRONG MARK"))
        if not mark_ok:
            missing.append((f.key, "mark", want[:40]))
        recorded = [normalise(nm) for _, nm in f.names]
        text = visible_text(puml)
        for pat in CALL_LIKE:
            for m in re.finditer(pat, text):
                tok = normalise(m.group(0).rstrip(".,;:)"))
                if not any(tok in r for r in recorded):
                    unrecorded.append((f.key, m.group(0)))
    print("\nnames checked: %d   missing from their source: %d   call-like tokens not recorded: %d"
          % (total, len(missing), len(unrecorded)))
    for item in missing:
        print("MISSING     %s %s %r" % item)
    for item in unrecorded:
        print("UNRECORDED  %s %r" % item)
    sys.exit(1 if (missing or unrecorded) else 0)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--analysis")
    ap.add_argument("--outline")
    ap.add_argument("--giga")
    ap.add_argument("--selftest", action="store_true")
    args = ap.parse_args()
    if args.check:
        if not (args.analysis and args.outline):
            ap.error("--check needs --analysis and --outline")
        check(args)
    else:
        draw_all()


if __name__ == "__main__":
    main()
