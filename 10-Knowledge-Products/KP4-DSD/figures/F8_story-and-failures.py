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
# where each failure sits against the step it leaves, as a fraction of the step pitch below
# that step's centre (the abandoned form is drawn beside step 2, the step before the fee)
DROP = (0.0, 0.06, 0.42, 0.46, 0.5)
BESIDE = (0, 1, 2, 3, 4)


def _draw(width, height, xs, ws, xf, wf, xe, top, pitch, caption_y):
    fig, ax = s.new_figure(NAME, height=height, width=width)
    s.title(ax, "One goal as a story, with its failures and their endings")
    s.text(ax, xs, top + 0.88, "the main steps", size=s.BODY, bold=True, color=s.SPINE)
    s.text(ax, xf, top + 0.88, "every way it can go wrong", size=s.BODY, bold=True,
           color=s.GREY_TEXT)
    s.text(ax, xs, top + 0.53, "apply for a provisional licence", size=s.SMALL, color=s.GREY_TEXT)

    centres = []
    for k, step in enumerate(STEPS):
        yc = top - k * pitch
        centres.append(yc)
        s.box(ax, xs, yc - HS / 2, ws, HS, body=s.wrap(step, ws - 0.3, s.SMALL),
              body_size=s.SMALL, role="build", align="left")
        if k:
            s.arrow(ax, (xs + 0.5, centres[k - 1] - HS / 2), (xs + 0.5, yc + HS / 2),
                    color=s.SPINE, lw=1.6)
    # the story ends on the confirmation
    s.arrow(ax, (xs + 0.5, centres[-1] - HS / 2), (xs + 0.5, centres[-1] - HS / 2 - 0.3),
            color=s.SPINE, lw=1.6)
    s.end_node(ax, xs + 0.5, centres[-1] - HS / 2 - 0.43, color=s.SPINE)

    # the steps before the fee, any of which the applicant may abandon
    xb = xs + ws + 0.42
    s.line(ax, [xb, xb], [centres[0] - 0.22, centres[3] - 0.22], color=s.GREY_TEXT,
           dashed=True)
    for yc in centres[:4]:
        s.line(ax, [xs + ws, xb], [yc - 0.22, yc - 0.22], color=s.GREY_TEXT, dashed=True)

    for (text_, step, _, back, ends), beside, drop in zip(FAILURES, BESIDE, DROP):
        yc = centres[beside] - drop * pitch
        s.box(ax, xf, yc - HF / 2, wf, HF, body=s.wrap(text_, wf - 0.3, s.SMALL),
              body_size=s.SMALL, role="neutral", fill=s.WHITE, dashed=True, align="left")
        if step is None:
            s.arrow(ax, (xb, yc), (xf - 0.02, yc), color=s.GREY_TEXT, lw=1.4)
        else:
            s.arrow(ax, (xs + ws + 0.02, centres[step] + 0.12), (xf - 0.02, yc + 0.1),
                    color=s.GREY_TEXT, lw=1.4)
        if back:
            s.arrow(ax, (xf - 0.02, yc - 0.18), (xs + ws + 0.04, centres[step] - 0.16),
                    color=s.RAIL, lw=1.6, rad=-0.25)
        if ends:
            s.arrow(ax, (xf + wf + 0.02, yc), (xe - 0.15, yc), color=s.NAVY, lw=1.4)
            s.end_node(ax, xe, yc)

    if caption_y is not None:   # on the slide, the slide's own footer line says it
        s.text(ax, 0.25, caption_y,
               "A story is finished only when every failure has its own ending.",
               size=s.SMALL, color=s.NAVY, bold=True)
        s.text(ax, 0.25, caption_y - 0.34, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


def draw():
    return _draw(s.CANVAS_W, 8.4, XS, WS, XF, WF, XE, top=6.62, pitch=0.96, caption_y=0.62)


def draw_slide():
    """The same drawing on the slide's canvas (drawn by draw_all.py --slides, KP4_SLIDE=1):
    wider boxes, the steps spaced for six rows in 6.2 inches."""
    return _draw(s.SLIDE_W, s.SLIDE_H, 0.25, 5.0, 6.35, 4.95, 12.2, top=5.15, pitch=0.82,
                 caption_y=None)


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")
