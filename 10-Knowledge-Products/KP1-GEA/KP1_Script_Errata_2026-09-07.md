# KP1 script errata — for the next tightening transmittal

Raised while implementing the 7 Sep GitBook review fixes. **None of these is patched in the
renderer**: they are defects in the signed `.js` build scripts, which the decks and the
voice-overs are cut from, so they travel on a transmittal rather than being silently corrected
on the site. Where the GitBook could not wait, the page carries a note and that is said below.

## 1. Module 2, subtopic 2.5 — the Progressa Learner Registry is described as operating

**Script says** (2.5 `scriptBeats`, the Data-layer beat): *"The Learner Registry is a state
registry — the authoritative single source for who is a learner."*

**Canonical fixture says** (`ea-plays-kit/tests/progressa.md` §6): the PLR is *"Intended single
list of learners — none, not started — planned"*. The kit's 5 Sep fixture-separation plan
reverted a skill that modelled the PLR as an operating body, on the grounds that **the absence
of the PLR is the sector problem** Module 4 works on.

**Impact.** 2.5's walkthrough draws the PLR as the current owner of the Learner domain. That
weakens Module 4, whose whole arc is that no such registry exists.

**Interim.** The 2.5 page carries an info note above the concept saying the PLR is drawn as the
**target** owner and is planned, not started (renderer `CONCEPT_NOTES`). The video will keep
saying it until the next re-narration.

**Ask.** Re-word the Data-layer beat to name the PLR as the target owner, e.g. *"The Learner
Registry is the state registry the sector plan calls for — the single source it does not yet
have."*

## 2. Two PAERA anchors not in the anchor map

`paera_anchor_check.py` cross-checks every anchor the site cites against
`itu-giga-kp-bundle/references/paera-anchor-map.md`. Two are not listed there:

| Anchor | Cited by | Field |
| --- | --- | --- |
| §2.5 | 5.6 (`paeraAnchor`) | `build_kp1_module5_v02.js` |
| §5.1 | 4.3 (`paeraAnchor`) | `build_kp1_module4_v02.js` |

The map is a concept lookup for the sections the KPs use, **not** PAERA's full table of
contents, so this is "unverified", not "wrong". Both need one check against the PAERA v1.0 PDF:
if the anchors are right, add them to the map; if not, correct the scripts.

The other 18 anchors the site cites all resolve against the map.
