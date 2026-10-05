"""F8 — One goal as a story, with its failures and their endings (subtopics 3.1 and 3.2).

    python3 F8_story-and-failures.py   draws F8_story-and-failures.png beside this file,
                                       from clean

Drawn from subtopics 3.1 and 3.2 of the plan: the main steps of "apply for a provisional
licence" at PHEQA, from signing in through PNIA to the confirmation that the application was
received, and the five failures the plan names, each with its own ending. An ending is drawn,
not written: an arrow back into the step the story returns to, or the ring-and-dot mark where
the story ends. Which step each failure leaves and how it ends is read from examples E3.1 and
E3.2. Every label is taken word for word from the KP4 plan, version 0.2, or the fact sheet;
check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F8_story-and-failures"

STEPS = (
    "signing in through PNIA",
    "apply for a provisional licence",
    "PHEQA's standards for new institutions · the kinds of institution",
    "the proposed name typed by the applicant and checked against the register",
    "the application fee paid through the Payments block",
    "the confirmation that the application was received",
)
# failure, the step it leaves, its height (centre), back to that step?, does it end there?
FAILURES = (
    ("PNIA does not answer at sign-in", 0, 6.62, False, True),
    ("the applicant abandons the form and returns two days later", None, 5.6, False, True),
    ("the applicant leaves a required document out", 3, 4.3, True, False),
    ("the proposed name is already held by a registered institution", 3, 3.3, True, False),
    ("the fee is not recorded", 4, 2.3, True, True),
)
XS, WS, HS = 0.25, 3.9, 0.66          # the main steps
XF, WF, HF = 5.15, 3.55, 0.66         # the failures
XE = 9.4                              # the endings


def draw():
    fig, ax = s.new_figure(NAME, height=8.4)
    s.title(ax, "One goal as a story, with its failures and their endings")
    s.text(ax, XS, 7.5, "the main steps", size=s.BODY, bold=True, color=s.SPINE)
    s.text(ax, XF, 7.5, "every way it can go wrong", size=s.BODY, bold=True,
           color=s.GREY_TEXT)
    s.text(ax, XS, 7.15, "apply for a provisional licence", size=s.SMALL, color=s.GREY_TEXT)

    centres = []
    for k, step in enumerate(STEPS):
        yc = 6.62 - k * 0.96
        centres.append(yc)
        s.box(ax, XS, yc - HS / 2, WS, HS, body=s.wrap(step, WS - 0.3, s.SMALL),
              body_size=s.SMALL, role="build", align="left")
        if k:
            s.arrow(ax, (XS + 0.5, centres[k - 1] - HS / 2), (XS + 0.5, yc + HS / 2),
                    color=s.SPINE, lw=1.6)
    # the story ends on the confirmation
    s.arrow(ax, (XS + 0.5, centres[-1] - HS / 2), (XS + 0.5, centres[-1] - HS / 2 - 0.3),
            color=s.SPINE, lw=1.6)
    s.end_node(ax, XS + 0.5, centres[-1] - HS / 2 - 0.43, color=s.SPINE)

    # the steps before the fee, any of which the applicant may abandon
    xb = XS + WS + 0.42
    s.line(ax, [xb, xb], [centres[0] - 0.22, centres[3] - 0.22], color=s.GREY_TEXT,
           dashed=True)
    for yc in centres[:4]:
        s.line(ax, [XS + WS, xb], [yc - 0.22, yc - 0.22], color=s.GREY_TEXT, dashed=True)

    for text_, step, yc, back, ends in FAILURES:
        s.box(ax, XF, yc - HF / 2, WF, HF, body=s.wrap(text_, WF - 0.3, s.SMALL),
              body_size=s.SMALL, role="neutral", fill=s.WHITE, dashed=True, align="left")
        if step is None:
            s.arrow(ax, (xb, yc), (XF - 0.02, yc), color=s.GREY_TEXT, lw=1.4)
        else:
            s.arrow(ax, (XS + WS + 0.02, centres[step] + 0.12), (XF - 0.02, yc + 0.1),
                    color=s.GREY_TEXT, lw=1.4)
        if back:
            s.arrow(ax, (XF - 0.02, yc - 0.18), (XS + WS + 0.04, centres[step] - 0.16),
                    color=s.RAIL, lw=1.6, rad=-0.25)
        if ends:
            s.arrow(ax, (XF + WF + 0.02, yc), (XE - 0.15, yc), color=s.NAVY, lw=1.4)
            s.end_node(ax, XE, yc)

    s.text(ax, 0.25, 0.62, "A story is finished only when every failure has its own ending.",
           size=s.SMALL, color=s.NAVY, bold=True)
    s.text(ax, 0.25, 0.28, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")
