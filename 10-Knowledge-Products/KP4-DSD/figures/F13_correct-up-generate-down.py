"""F13 — Correct up, generate down (subtopics 5.2 and 6.2).

    python3 F13_correct-up-generate-down.py   draws F13_correct-up-generate-down.png beside
                                              this file, from clean

Drawn from subtopics 5.2 and 6.2 of the plan and its table of the twelve documents: the twelve
in their order, a change carried up to the document that owns the fact and everything below it
produced again, with 6.2's worked example (a change of an institution's name) beside it; and
5.2's hand edit on the platform, which a program shows up. The document marked as the owner of
the rule is the entity model, because the plan's table places the business rules there (a
reading taken when the figures were drawn; the plan's example says only "the document that owns it"). Every label
is taken word for word from the KP4 plan, version 0.2; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F13_correct-up-generate-down"

DOCS = ("The customer's own documents", "The register of requirements", "The entity model",
        "The use case model", "The software architecture", "The rest of the shared groundwork",
        "One use case, written out in full, for each goal", "The screens of that use case",
        "The walk-through", "The interaction design", "The application model",
        "The working application")
PRODUCED = {8, 11}          # the walk-through is produced; the working application generated
OWNER = 2                   # the entity model, with its business rules

CHANGE = (
    "An institution asks to change its name.",
    "the rule that a change of name needs the minister's approval is corrected in the "
    "document that owns it",
    "the list of documents and generated files the change makes stale is produced",
    "everything below is produced again",
)
HAND = (
    "A label on one of MoEYS's forms changed by hand on the platform",
    "a program shows any hand edit",
    "the read-back shows every file in step",
)


def stack(ax):
    """The twelve documents, top to bottom; returns the middle height of each."""
    top, h, gap = 7.75, 0.42, 0.075
    mids = []
    y = top
    for k, name in enumerate(DOCS):
        hk = 0.66 if k == OWNER else h
        y -= hk
        mids.append(y + hk / 2)
        if k == OWNER:
            s.box(ax, 0.25, y, 3.7, hk, role="method", solid=True, lw=1.0)
            for dy, words, bold in ((0.45, "The entity model", True),
                                    (0.2, "the document that owns the fact", False)):
                s.text(ax, 0.39, y + dy, words, size=s.SMALL, bold=bold, color=s.WHITE,
                       container=(0.25, y, 3.7, hk))
        else:
            s.box(ax, 0.25, y, 3.7, hk, body=name, body_size=s.SMALL, align="left", lw=1.0,
                  role="build" if k in PRODUCED else "method")
        y -= gap
    return mids


def steps(ax, x, w, y, items, roles, numbered):
    """A column of boxes from height y downwards; returns [(bottom, height)] of each."""
    out = []
    for k, (words, role) in enumerate(zip(items, roles)):
        inset = 0.4 if numbered else 0.0
        body = s.wrap(words, w - inset - 0.35, s.SMALL)
        bh = (body.count("\n") + 1) * s.line_height(s.SMALL) + 0.24
        y -= bh
        dashed = role == "neutral"
        s.box(ax, x + inset, y, w - inset, bh, body=body, body_size=s.SMALL, role=role,
              align="left", lw=1.1, fill=s.WHITE if dashed else None, dashed=dashed)
        if numbered:
            s.text(ax, x + 0.12, y + bh / 2, str(k + 1), size=s.SMALL, bold=True,
                   color=s.RAIL)
        out.append((y, bh))
        y -= 0.11
    return out


def draw():
    fig, ax = s.new_figure(NAME, height=8.6)
    s.title(ax, "Correct up, generate down")
    mids = stack(ax)

    # correct up, generate down
    s.arrow(ax, (4.25, mids[-1]), (4.25, mids[OWNER] - 0.05), color=s.RAIL, lw=2.4)
    s.text(ax, 4.12, (mids[-1] + mids[OWNER]) / 2, "correct up", size=s.SMALL, bold=True,
           color=s.RAIL, ha="right", rotation=90)
    s.arrow(ax, (4.7, mids[OWNER]), (4.7, mids[-1] + 0.05), color=s.SPINE, lw=2.4)
    s.text(ax, 4.85, (mids[-1] + mids[OWNER]) / 2, "generate down", size=s.SMALL, bold=True,
           color=s.SPINE, ha="left", rotation=90)
    s.line(ax, [3.97, 4.7], [mids[OWNER], mids[OWNER]], color=s.RAIL, lw=1.6)

    # the change of an institution's name, step by step
    xr, wr = 5.3, 4.45
    steps(ax, xr, wr, 7.75, CHANGE, ("method",) * 4, numbered=True)

    # nothing generated is edited by hand
    s.text(ax, xr, 3.35, "Nothing generated is edited by hand", size=s.SMALL, bold=True,
           color=s.SPINE)
    (y0, h0), _, _ = steps(ax, xr, wr, 3.1, HAND, ("neutral", "build", "build"),
                           numbered=False)
    # the hand edit reaches the working application, and is crossed out
    s.line(ax, [xr, 5.1, 5.1, 3.97], [y0 + h0 / 2, y0 + h0 / 2, mids[-1], mids[-1]],
           color=s.GREY_TEXT, dashed=True)
    xm, ym = 5.1, (y0 + h0 / 2 + mids[-1]) / 2
    s.line(ax, [xm - 0.12, xm + 0.12], [ym - 0.12, ym + 0.12], color=s.NAVY, lw=2.4, z=4)
    s.line(ax, [xm - 0.12, xm + 0.12], [ym + 0.12, ym - 0.12], color=s.NAVY, lw=2.4, z=4)

    s.text(ax, 0.25, 0.62, "A change goes up to its source and everything below is produced "
                           "again.", size=s.SMALL, bold=True, color=s.NAVY)
    s.text(ax, 0.25, 0.28, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")
