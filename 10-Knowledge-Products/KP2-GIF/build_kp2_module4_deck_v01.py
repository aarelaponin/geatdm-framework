#!/usr/bin/env python3
# Build the KP2 Module 4 video deck on the ITU template — v0.1.
# Content follows KP2_Module4_Script_Bundle_v0.2 (build_kp2_module4_v02.js): eight videos,
# 4.1 – 4.8, Architect-facing. Every VO paragraph in the notes is a verbatim
# scriptBeats[].text from the .js (vo_diff.py proves it); the recap slide of every video
# carries the un-narrated practice box (plan D5) — task = the AI tip's title, artefact = the
# Output half of the tip's io.
# Content only — every generic helper, branding constant and layout index comes from
# ITU-Giga-KP-Plugin/skills/kp-deck-builder/scripts/deck_lib.py (which also ships the
# template). Conventions and design rules: that skill's SKILL.md.
# Generated .pptx is NEVER hand-edited — fix here, re-render, re-run the split
# (kp-deck-builder/scripts/split_module_deck.py + the split spec next to the decks).
# Override paths with TEMPLATE= and OUT_PATH= env vars.
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                '..', 'ITU-Giga-KP-Plugin', 'skills', 'kp-deck-builder', 'scripts'))
from deck_lib import (
    TITLE_CARD_NOTE, hook_slide,
    INK, ITU_BLUE, ITU_BLUE_DARK, LIGHT, PANEL_GREY, WHITE,
    LAYOUT_THANKS, LAYOUT_WHITE,
    add_slide, big_slide, block_slide, box, delete_template_slides, edit_agenda,
    edit_cover, footer, notes, open_template, rows_block, section_slide, set_text,
    sources_slide, title, two_panel)
from deck_diagrams import arrow, label, node

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = 'Chief or senior architect · integration lead · agency technical lead'

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap and the '
                 'Sources slide.')


# Two-sentence leads and short comparisons, as in Modules 1-3.
def block(prs, *a, **k):
    k.setdefault('punch_y', 4.35)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', 3.2)
    return two_panel(prs, *a, **k)


# Opener (hook) slide copy per video — headline + two to four supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'4.1': ('Do not draw a new platform. Adopt a reference architecture.',
                 ['Other countries have already settled the shape of an interoperability platform.',
                  'Every component you build or buy fits one of four functional layers.']),
         '4.2': ('Security on the bus is not one wall around everything.',
                 ['It is zones — a call needs the security of the boundaries it crosses.',
                  'Know the zones, and you can state precisely what protects any exchange.']),
         '4.3': ('Let each agency pick its own standards, and interoperability breaks.',
                 ['The framework\'s answer is one published menu every member uses.',
                  'Your job: select from it, record the versions, hold every member to them.']),
         '4.4': ('A working wire that carries misread data looks like success.',
                 ['Meaning is the hardest layer, and the one most projects skip.',
                  'A semantic map makes it tractable — and AI drafts the first version.']),
         '4.5': ('To put a service on the bus, you need a contract.',
                 ['Its operations, inputs, outputs and errors, described precisely.',
                  'Generate it from a short brief and the semantic map — then turn it into what the '
                  'bus routes.']),
         '4.6': ('Enough method. Here is a real source to copy.',
                 ['Giga — the ITU and UNICEF initiative that maps the world\'s schools and their '
                  'connectivity — publishes open APIs and real data.',
                  'Every step of this module, on one dataset.']),
         '4.7': ('Meaning, contract, data — now make them callable.',
                 ['Wiring registers the service so a consumer in another agency can discover it and '
                  'call it.',
                  'The pattern has a name: Information Mediation.']),
         '4.8': ('Perfectly wired, perfectly secured — and still not allowed to go live.',
                 ['Technical capability is not lawful authority.',
                  'The last check is the data-protection envelope.'])}


def section(code, name, message, note):
    # No runtime on the title card: the narration is generated per take and its length moves
    # with every re-roll.
    s = section_slide(prs, 'KP2 · MODULE 4 · VIDEO %s' % code, code, name, message,
                      'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def closing_line(s, text, y):
    tb = box(s, 0.72, y, 11.9, 0.6)
    set_text(tb.text_frame, [[(text, 15.5, True, ITU_BLUE_DARK, False)]])


def trust_zones(prs, head, closing, tag, note):
    """The three trust zones: two member-internal zones either side of the public zone, the
    Trust-Anchor spanning all three."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    node(s, 0.72, 1.65, 11.9, 0.95, 'TRUST-ANCHOR',
         ['The certification authority everyone in the federation trusts to vouch for who is who.'],
         fill=ITU_BLUE_DARK, ink=WHITE, head_ink=WHITE, head_size=15, size=15)
    w, gap, y, h = 3.7, 0.4, 2.95, 2.85
    zones = [('MEMBER-INTERNAL', ['The calling agency\'s own network.', 'Trusted by that agency.'], LIGHT),
             ('PUBLIC', ['The open internet.', 'Nothing trusted by default.'], PANEL_GREY),
             ('MEMBER-INTERNAL', ['The providing agency\'s own network.', 'Trusted by that agency.'], LIGHT)]
    for i in range(2):   # connectors first, in the gaps between the zones
        x = 0.72 + (i + 1) * w + i * gap
        arrow(s, x + 0.04, y + h / 2, x + gap - 0.04, y + h / 2)
    for i, (name, lines, fill) in enumerate(zones):
        node(s, 0.72 + i * (w + gap), y, w, h, name, lines, fill=fill, head_size=17, size=16)
    closing_line(s, closing, 6.1)
    footer(s, tag)
    notes(s, note)
    return s


def pipeline(prs, head, stages, closing, tag, note):
    """The module's centrepiece: bronze, silver, gold, contract, bus — with the video that built
    each step underneath."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    w, gap, y, h = 2.1, 0.35, 1.75, 2.75
    for i in range(len(stages) - 1):
        x = 0.72 + (i + 1) * w + i * gap
        arrow(s, x + 0.03, y + h / 2, x + gap - 0.03, y + h / 2)
    for i, (name, lines, built) in enumerate(stages):
        last = i == len(stages) - 1
        x = 0.72 + i * (w + gap)
        node(s, x, y, w, h, name, lines, fill=ITU_BLUE_DARK if last else LIGHT,
             ink=WHITE if last else INK, head_ink=WHITE if last else ITU_BLUE_DARK,
             head_size=17, size=15)
        label(s, x, y + h + 0.12, w, 0.45, 'built in ' + built, size=14, bold=True,
              color=ITU_BLUE_DARK)
    closing_line(s, closing, 5.3)
    footer(s, tag)
    notes(s, note)
    return s


def two_forms(prs, head, left, right, closing, tag, note):
    """One contract, two forms: the OpenAPI document and the X-Road service description."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    w, gap, y, h = 5.2, 1.5, 1.9, 3.0
    arrow(s, 0.72 + w + 0.15, y + h / 2, 0.72 + w + gap - 0.15, y + h / 2, weight_pt=2.5)
    label(s, 0.72 + w + 0.1, y + h / 2 - 0.55, gap - 0.2, 0.4, 'derive', size=13, bold=True,
          color=ITU_BLUE_DARK)
    node(s, 0.72, y, w, h, left[0], left[1], head_size=20, size=19)
    node(s, 0.72 + w + gap, y, w, h, right[0], right[1], fill=ITU_BLUE_DARK, ink=WHITE,
         head_ink=WHITE, head_size=20, size=19)
    closing_line(s, closing, 5.25)
    footer(s, tag)
    notes(s, note)
    return s


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='Build the technical layer —\nfrom architecture to a lawful call',
    kicker='Government Interoperability Framework · Module 4',
    blurb='Eight standalone videos for the architect who builds on the bus: the four functional '
          'layers, the three trust zones, the standards portfolio, the semantic map and the service '
          'contract drafted with AI, the Giga worked case, wiring a service onto the bus — and the '
          'data-protection envelope that makes the exchange lawful.',
    length='~40 mins across 8 videos (4.1 – 4.8)',
    audience=AUDIENCE,
    panel_heading='THE TECHNICAL LAYER',
    panel_items=['Every component in its layer',
                 'Every call secured by zone',
                 'One shared standards menu',
                 'Meaning and contract, generated',
                 'Wired, tested — and lawful'],
    panel_footer='4 layers · 3 trust zones · 1 test call that resolves',
    note_text='Cover for the combined Module 4 deck. Each section that follows is one standalone '
              '~5 minute video, for the Architect who builds the technical layer: the chief or '
              'senior architect, the integration lead, the agency technical lead. Together the '
              'eight videos produce the technical-layer configuration — the semantic map, the '
              'service contracts and the X-Road service descriptions.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 4 — eight videos',
    items=[
        ('4.1  Place every component — the four functional layers', '~5 min'),
        ('4.2  Secure every call — the three trust zones', '~5 min'),
        ('4.3  Adopt the standards portfolio', '~5 min'),
        ('4.4  Generate the semantic map', '~5 min'),
        ('4.5  Generate a service contract', '~5 min'),
        ('4.6  Put a real data source on the bus — the Giga case', '~5 min'),
        ('4.7  Wire a service onto the bus', '~5 min'),
        ('4.8  Make the exchange lawful — the envelope', '~5 min'),
    ],
    message_paras=[
        'Adopt the architecture and the standards — do not invent them.',
        'Generate the meaning and the contract with AI, confirm every field, wire the service, and '
        'check it is lawful before it goes live.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '4.1 to 4.3 are the settled structure — layers, zones, standards. 4.4 and 4.5 generate '
              'the meaning and the contract. 4.6 is the worked case on real data. 4.7 wires the '
              'service; 4.8 makes it lawful.')

delete_template_slides(prs, keep=2)


# ================================================================ 4.1
T = '4.1 · Place every component — the four functional layers'
section('4.1', 'Place every component — the four functional layers',
        'Four functional layers — Service Access, Event Distribution, Trust and Security, '
        'Governance and Administration — give every component of the platform a place.',
        "VO: As an architect, your first move is not to draw a new platform. It is to adopt a "
        "reference architecture, so you spend your scarce time on what is specific to your country "
        "instead of re-deriving the shape of an interoperability platform that other countries have "
        "already settled. The European framework and the X-Road experience give you a reference with "
        "four functional layers. Every component you will build or buy fits one of the four.")

rows_block(prs, 'Four functional layers — every component has a home',
           [('Service Access', 'How a member system reaches the bus and calls a service.'),
            ('Event Distribution', 'How messages and events move across the federation.'),
            ('Trust and Security Infrastructure', 'Certificates, identities, encryption.'),
            ('Governance and Administration', 'Registries of members and services, and monitoring.')],
           None,
           T,
           "VO: The four layers, by what they do. Service Access — how a member system reaches the bus "
           "and calls a service. Event Distribution — how messages and events actually move across "
           "the federation. Trust and Security Infrastructure — the certificates, the identities and "
           "the encryption that make a call trustworthy. And Governance and Administration — the "
           "registries of who is a member, what services exist, and the monitoring that watches it "
           "all run.\n\n"
           "Retrieval prompt — ask before playing on: where does the service catalogue live? Where "
           "does mutual encryption sit? Answer on the next slide.",
           bottom=6.7)

rows_block(prs, 'The layers are a filing system for decisions',
           [('Where does the service catalogue live?', 'Governance and Administration.'),
            ('Where does mutual encryption sit?', 'Trust and Security Infrastructure.'),
            ('Two architects disagree where something belongs?',
             'The reference architecture settles it — not the louder voice.')],
           'Every component, every standard, every piece of configuration has a home.',
           T,
           "VO: The value of the layers is that they are a filing system for decisions. When you ask "
           "'where does the service catalogue live?', the answer is Governance and Administration. "
           "'Where does mutual encryption sit?' — Trust and Security. Every component, every standard, "
           "every piece of configuration has a home. And when two architects disagree about where "
           "something belongs, the reference architecture settles it rather than the louder voice.\n\n"
           "Production cue: this slide answers the retrieval prompt set on the previous slide.",
           numbered=False)

block(prs, 'A shared reference architecture is re-use, seen from the architect\'s chair',
      ['Built once, and reused by every country and every sector that adopts it.',
       'Your agencies — and the next sector after education — plug into the same four-layer shape '
       'instead of each inventing their own.'],
      'Re-use a settled structure instead of paying, again, to discover it.',
      T,
      "VO: There is a deeper payoff, and it is the re-use argument seen from the architect's chair. "
      "The reference architecture is shared — built once and reused by every country and every "
      "sector that adopts it — so your agencies, and the next sector after education, plug into the "
      "same four-layer shape instead of each inventing their own. That is whole-of-government "
      "planning made concrete at the technical level: you re-use a settled structure rather than "
      "paying, again, to discover it.")

panels(prs, 'Event distribution — defer it on purpose, never skip it',
       ('REQUEST AND RESPONSE ASKS',
        ['A system asks a question and gets an answer.',
         'A first bus can run on this alone — the demonstration does.']),
       ('EVENTS TELL',
        ['A birth registered, a learner enrolled — published once by the source.',
         'Delivered to every subscriber; replayable if one was down.']),
       'Once-only at scale. Give it a place in the plan — not a surprise in year three.',
       T,
       "VO: One of the four deserves a word, because it is the one countries drop by accident. Request "
       "and response is a system asking a question and getting an answer. Event distribution is a "
       "system telling everyone who cares: a birth was registered, a learner was enrolled — published "
       "once by the authoritative source, delivered to every subscriber, replayable if a subscriber "
       "was down. That is what keeps every consumer current without anyone re-asking the citizen; it "
       "is once-only at scale. A first bus can run request and response only, and this knowledge "
       "product's demonstration does. But defer the event layer deliberately, with a place in the "
       "plan — do not discover in year three that nobody designed it.",
       right_fill=LIGHT)

block(prs, 'Place every component, and the sparse layers show what is missing',
      ['The security server, the central registry, the monitoring tool, the identity adapter — each '
       'goes in its layer.',
       'Used this way, the reference architecture is a checklist as much as a diagram.'],
      'The layers that come out sparse are what you have not yet planned for.',
      T,
      "VO: The practical exercise is simple. Take every component you plan to build or buy — the "
      "security server, the central registry, the monitoring tool, the identity adapter — and place "
      "each one in its layer. The layers that come out sparse show you exactly what you have not yet "
      "planned for. Used this way, the reference architecture is a checklist as much as a diagram: it "
      "tells you not only where things go, but what is still missing.\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'Adopt the four-layer reference architecture, place every component in its layer, and the '
          'gaps show you what you still have to build.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the architecture work starts not with a blank page but with a borrowed, proven "
          "structure. Four functional layers — Service Access, Event Distribution, Trust and Security, "
          "Governance and Administration. Place every component. Read off the gaps. You have re-used "
          "the world's experience of what an interoperability platform looks like, and kept your "
          "effort for what only your country can decide.",
          practice=('Map your platform components to the four functional layers',
                    'a component-to-layer mapping plus a per-layer list of gaps'))

sources_slide(prs, T, [
    'EU European Interoperability Framework (EIF)',
    'NIIS X-Road reference architecture — the four functional layers (niis.org)',
    'PAERA v1.0 — §3.4.3 (Interoperability framing)',
])


# ================================================================ 4.2
T = '4.2 · Secure every call — the three trust zones'
section('4.2', 'Secure every call — the three trust zones',
        'Public, Member-Internal, Trust-Anchor — knowing which zone a call crosses tells you exactly '
        'what security it needs.',
        "VO: Security on an interoperability bus is not one wall around everything. It is zones, and "
        "the security a call needs depends on which zone boundaries it crosses. The X-Road trust model "
        "uses three zones. Once you know them, you can look at any exchange and state, precisely, what "
        "protects it — which is exactly the conversation a security reviewer or a data-protection "
        "officer will want to have with you.\n\n"
        "Retrieval prompt — ask before playing on: a call from the examination authority to the "
        "identity authority — which zones does it cross, and what protects each crossing? Answer on "
        "the trace slide.")

trust_zones(prs, 'Three trust zones — and every message crosses them',
            'The message starts in one internal zone, crosses the public zone, and arrives in another.',
            T,
            "VO: The three zones. Public — the open internet, where nothing is trusted by default. "
            "Member-Internal — inside an agency's own network, where that agency trusts its own "
            "systems. And the Trust-Anchor — the certification authority that everyone in the "
            "federation trusts to vouch for who is who. A message from one agency to another starts in "
            "one member's internal zone, crosses the public zone, and arrives in another member's "
            "internal zone — with the Trust-Anchor underwriting the identities at both ends.\n\n"
            "Production cue: the structural picture of this video. Reveal the three zones left to "
            "right; the Trust-Anchor band is already there.")

rows_block(prs, 'The security falls out of the zones',
           [('Between security servers: mutual TLS', 'Both sides present a certificate and prove who they are.'),
            ('The message is signed and logged', 'The X-Road message protocol — it cannot be forged or denied.'),
            ('The Trust-Anchor issues and revokes certificates', 'How a misbehaving member gets cut off from the bus.'),
            ('The log is timestamped and itself signed', 'The evidence a court, an auditor or a data-protection '
             'authority reads.')],
           'The decree can make an electronic exchange binding only because this log exists.',
           T,
           "VO: Now the security falls out of the zones. When a message crosses the public zone between "
           "two security servers, it is protected by mutual TLS — meaning both sides present a "
           "certificate and prove who they are, not just one side as on an ordinary website. The "
           "message itself is signed and logged using the X-Road message protocol, so it cannot be "
           "forged, and neither side can later deny sending or receiving it. And the Trust-Anchor — "
           "the certification authority — issues those certificates and can revoke a compromised one, "
           "which is precisely how a misbehaving member gets cut off from the bus. And one more thing "
           "the security server does that is easy to overlook: every call is logged with its "
           "correlation identifier, sender, recipient, service and signature, and the log itself is "
           "timestamped and signed at intervals so it cannot be quietly altered. That tamper-evident "
           "log is not an operations nicety. It is the evidence base of the legal layer — the record a "
           "court, an auditor or a data-protection authority reads when an exchange is challenged. The "
           "decree can make an electronic exchange legally binding only because this log exists.",
           numbered=False)

block(prs, 'The security server carries the trust burden at each member\'s edge',
      ['It holds the certificates, does the mutual TLS, and signs and logs the messages.',
       'The member\'s own systems stay in their internal zone and never face the public zone directly.'],
      'That separation is often what decides whether a cautious agency joins at all.',
      T,
      "VO: One device makes this practical: the security server, which sits at each member's edge and "
      "carries the trust burden. It is the member's gateway into the federation — it holds the "
      "certificates, does the mutual TLS, signs and logs the messages. The member's own systems stay "
      "safely in their internal zone and never face the public zone directly. That separation is "
      "exactly what lets a cautious agency join the bus without exposing its internal systems to the "
      "open internet — which is often the deciding factor in whether an agency will join at all.")

block(prs, 'Trace the zones a call crosses, and its security is specified',
      ['Examination authority to identity authority: one internal zone, the public zone, another '
       'internal zone.',
       'So: mutual TLS between the two security servers, a signed and logged message, and valid '
       'Trust-Anchor certificates at both ends.'],
      'Say exactly that, and any reviewer will accept the specification.',
      T,
      "VO: The skill to take away is tracing any planned exchange across the zones and reading off "
      "its requirements. A call from the examination authority to the identity authority crosses "
      "from one internal zone, through the public zone, to another internal zone — so it needs mutual "
      "TLS between the two security servers, a signed and logged message, and valid certificates from "
      "the Trust-Anchor at both ends. Say exactly that, and you have specified the security of the "
      "exchange in terms any reviewer will accept.\n\n"
      "Production cue: the pivotal slide of this video, and it answers the retrieval prompt set on "
      "the opener. Hold it a beat longer.")

big_slide(prs,
          'Name the zones a call crosses — public, member-internal, trust-anchor — and its security '
          'requirements are specified, not guessed.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So security on the bus is zoned, not uniform. Three zones — public, member-internal, "
          "trust-anchor. The security server carries the trust burden at each member's edge. And the "
          "discipline is to trace each exchange across the zones, because that is what turns 'is it "
          "secure?' from a worried question into a specified answer.",
          practice=('Trace an exchange across the trust zones and name its security',
                    'a zone-by-zone security specification plus failure modes'))

sources_slide(prs, T, [
    'EU European Interoperability Framework (EIF)',
    'NIIS X-Road trust model and message protocol (niis.org)',
    'Mutual TLS (mTLS)',
    'RFC 3161 — time-stamping',
])


# ================================================================ 4.3
T = '4.3 · Adopt the standards portfolio'
section('4.3', 'Adopt the standards portfolio',
        'Adopt the published standards — REST/OpenAPI, OAuth/OIDC, mTLS, X-Road — instead of writing '
        'your own; the portfolio is the menu every member shares.',
        "VO: The fastest way to break interoperability is to let each agency choose its own technical "
        "standards. The framework's answer is a standards portfolio — a single, published menu of the "
        "standards every member uses. As an architect, your job here is not to invent these. It is to "
        "select from the published menu, record your choices and their versions, and hold every member "
        "to them.")

rows_block(prs, 'Four needs, four published technical standards',
           [('Describing services', 'REST with OpenAPI 3.x.'),
            ('Proving identity and permissions', 'OAuth 2.x / OpenID Connect.'),
            ('Securing the connection', 'Mutual TLS — both ends prove their identity.'),
            ('The bus itself', 'The X-Road message protocol.')],
           'None invented for your country — each comes with tools, documentation and people who know it.',
           T,
           "VO: The technical standards, in plain terms. For how a service describes and offers itself — "
           "REST with OpenAPI 3.x, the common way to define a web service. For proving who a user or "
           "system is and what they are allowed to do — OAuth 2.x and OpenID Connect. For securing the "
           "connection — mutual TLS, where both ends prove their identity. And for the bus itself — the "
           "X-Road message protocol. None of these is invented for your country; each is a widely used "
           "published standard, with tools, documentation and people who already know it.",
           numbered=False)

rows_block(prs, 'The semantic standards are the published vocabularies for meaning',
           [('Describing data elements', 'ISO/IEC 11179.'),
            ('Linking data so meaning travels', 'JSON-LD.'),
            ('Credentials a holder carries', 'W3C Verifiable Credentials — trusted without phoning the issuer.')],
           'Reuse them rather than invent them.',
           T,
           "VO: Alongside the technical standards sit the semantic ones — the standards for meaning. "
           "ISO/IEC 11179 for describing data elements consistently. JSON-LD for linking data so its "
           "meaning travels with it. And W3C Verifiable Credentials for credentials a holder can carry "
           "and a verifier can trust without phoning the issuer. These are the published vocabularies "
           "you reuse rather than invent.",
           numbered=False)

block(prs, 'A standard chosen once is reused by every member and every sector',
      ['The second agency does not re-decide how a service is described.',
       'The education work you do now is reused when health comes onto the bus.'],
      'Only whole-of-government planning can impose that discipline. A procurement clause cannot.',
      T,
      "VO: The whole point of a portfolio is re-use across the whole of government. A standard chosen "
      "once, for the framework, is reused by every member and by every new sector that joins — so the "
      "second agency does not re-decide how a service is described, and the education work you do now "
      "is reused when health comes onto the bus. Interoperability is, at bottom, the discipline of "
      "everyone choosing the same published standards instead of each building their own — and only "
      "whole-of-government planning can impose that discipline. A procurement clause cannot.")

rows_block(prs, 'Your deliverable is the portfolio document',
           [('For each need: the standard, its version, its profile',
             'The profile is your small local refinements — keep it thin.'),
            ('When it binds, and how long legacy systems have',
             'Twelve to twenty-four months for a major version is usual.'),
            ('How a member proves conformance',
             'A self-assessment, a third-party check, or a test suite the operator runs.'),
            ('Who keeps it', 'The APIs Working Group maintains it; every member conforms to it.')],
           'A standard with no binding date and no test is advice, not a standard.',
           T,
           "VO: Your actual deliverable is the portfolio itself — a short document that names, for each "
           "need, the chosen standard, its version, and any profile, meaning the small local refinements "
           "you add on top. Each entry also says when the standard becomes binding, how long legacy "
           "systems have to comply — twelve to twenty-four months for a major version is usual — and how "
           "a member proves conformance: a self-assessment, a third-party check, or a test suite the "
           "operator runs. A standard with no binding date and no test is advice, not a standard. It "
           "becomes the thing the APIs Working Group maintains and every member conforms to. Two "
           "cautions. Name the version, because a standard adopted at the wrong version is a quiet "
           "incompatibility that surfaces only when two members fail to connect. And keep the profile "
           "thin — every local refinement you add is something the next sector must also adopt, so "
           "refine only where you must.\n\n"
           "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'Select from the published menu, record the standard and its version, and hold every member '
          'to the same portfolio.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the standards portfolio is the agreed menu, not a free choice. Select the technical "
          "and semantic standards from the published options, write them down with versions and any "
          "thin profile, and hold every member to the same list. That shared, reused portfolio is what "
          "lets twenty agencies behave as one framework instead of twenty incompatible projects.",
          practice=('Assemble your standards portfolio from the published menu',
                    'a standards-portfolio table plus the decisions that need deliberation'))

sources_slide(prs, T, [
    'Technical — REST / OpenAPI 3.x; OAuth 2.x / OpenID Connect; mTLS; NIIS X-Road',
    'Semantic — ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 4.4
T = '4.4 · Generate the semantic map'
section('4.4', 'Generate the semantic map',
        'Generate a semantic map so two agencies mean the same \'learner\' before they exchange one — '
        'the hardest layer, made tractable.',
        "VO: Of the four interoperability layers, the semantic one — meaning — is the hardest, and the "
        "one most projects skip, because it is slow, unglamorous and a little political. It is also "
        "where exchanges silently fail: a working wire that carries data the receiver misreads is still "
        "a failure, and a worse one, because it looks like success. The good news for the architect is "
        "that meaning can be made tractable by building a semantic map — and you can generate a first "
        "draft of one with Claude.")

rows_block(prs, 'A semantic map sets out five things for one exchange',
           [('The entities', 'A learner, a school.'),
            ('Their fields', 'Name, date of birth, enrolment status.'),
            ('The code lists', 'The allowed values — one agency\'s "active" may be another\'s "enrolled".'),
            ('The identifier', 'Which key links the same learner across two agencies.'),
            ('The mapping', 'Each agency\'s terms reconciled to one shared definition.')],
           None,
           T,
           "VO: A semantic map, for a single exchange, sets out five things. The entities involved — a "
           "learner, a school. Their fields — name, date of birth, enrolment status. The code lists — "
           "the allowed values for, say, enrolment status, because one agency's 'active' may be "
           "another's 'enrolled'. The identifier — which key reliably links the same learner across two "
           "agencies. And the mapping itself — each agency's own terms reconciled to one shared "
           "definition, so that the examination authority's 'learner' and the registry's 'learner' are "
           "confirmed to mean the same person, identified the same way.",
           bottom=6.7)

rows_block(prs, 'For education, much of the meaning is already published',
           [('OneRoster', 'Rostering and enrolment data.'),
            ('CEDS', 'A common vocabulary of education data elements.'),
            ('ISO/IEC 11179 and W3C Verifiable Credentials',
             'Describing each data element precisely; the credential case.')],
           'Map your agencies\' fields onto these — do not start from a blank page.',
           T,
           "VO: You do not invent these definitions from scratch. For education, much of the meaning is "
           "already published. OneRoster gives you rostering and enrolment data. CEDS gives you a common "
           "vocabulary of education data elements. ISO/IEC 11179 gives you the discipline of describing "
           "each data element precisely, and W3C Verifiable Credentials covers the credential case. The "
           "semantic map's job is to adopt these published vocabularies and map your agencies' actual "
           "fields onto them — not to start from a blank page.",
           numbered=False)

block(prs, 'Meaning is a business decision, written precisely enough for systems',
      ['Whether "enrolment" means the same to the examination authority and the learner registry is '
       'decided by the data owners.',
       'The semantic map is that shared language — agreed once, reused by every exchange.'],
      'Where the people who own the data and the architects who move it agree, once.',
      T,
      "VO: This is the layer where business and IT must meet, and the semantic map is their shared "
      "language. Deciding that 'enrolment' means the same thing to the examination authority and to the "
      "learner registry is not a technical choice — it is a decision the business data owners make. But "
      "it has to be written down precisely enough for the systems to use. The semantic map is exactly "
      "that shared object: it lets the people who own the data and the architects who move it agree, "
      "once, what the data means — and then every exchange that touches a learner reuses that one "
      "agreement instead of re-arguing it.")

panels(prs, 'Generate fast, confirm against the registries carefully',
       ('THE AI PROMPT — NINETY PER CENT',
        ['Give Claude the published vocabulary and both field lists.',
         'It drafts the mapping, the code-list translations and the identifier.']),
       ('YOU — THE ESSENTIAL TEN',
        ['Every identifier and code value is a [confirm].',
         'Check each against the real registries.']),
       'Wrong here means a learner\'s records silently merged with someone else\'s.',
       T,
       "VO: The AI prompt for this video does the drafting. Give Claude the published vocabulary and "
       "the two agencies' field lists, and it drafts the mapping — which field maps to which, where the "
       "code lists differ and need translating, which identifier to use as the link. That is the fast "
       "ninety per cent. The essential ten per cent is yours: every identifier and every code value is a "
       "[confirm] until you check it against the real registries. An invented mapping reads "
       "convincingly and is wrong — and in the semantic layer, wrong means a learner's records silently "
       "merged with someone else's. Generate fast; confirm against the registries carefully.\n\n"
       "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'A semantic map is the shared meaning of an exchange — drafted by AI from the published '
          'vocabularies, confirmed against the real registries.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So you make the hardest layer tractable by building it, one exchange at a time, as a "
          "semantic map: the entities, fields, code lists, identifier and the mapping onto published "
          "vocabularies. It is the shared language between the data owners and the architects, "
          "generated with the AI prompt and confirmed against the registries. Get the semantic map right "
          "and the exchange carries meaning, not just bytes — which is the whole difference between "
          "interoperability that works and interoperability that only appears to.",
          practice=('Generate a semantic map for an exchange',
                    'a semantic map with [confirm] placeholders for identifiers and code values'))

sources_slide(prs, T, [
    'ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials',
    'OneRoster (1EdTech); CEDS',
    'EU European Interoperability Framework — semantic layer',
])


# ================================================================ 4.5
T = '4.5 · Generate a service contract'
section('4.5', 'Generate a service contract',
        'Turn a service brief into an OpenAPI contract, then an X-Road service description — the '
        'configuration that puts a service on the bus.',
        "VO: To put a service on the bus, you need a contract — a precise description of what the "
        "service offers: the operations, the inputs, the outputs, the errors. That contract is an "
        "OpenAPI document, and it is the configuration that makes the service callable. As an architect, "
        "you generate it from a short service brief and the semantic map, and then turn it into the "
        "X-Road service description the bus actually uses to route a call.")

rows_block(prs, 'An OpenAPI contract says exactly how to call a service',
           [('The operations', 'For example: get a learner\'s record.'),
            ('The inputs', 'The identifier and parameters.'),
            ('The outputs', 'The fields — taken straight from the semantic map.'),
            ('The errors', 'What it can return when something goes wrong.'),
            ('The security', 'OAuth 2.x / OpenID Connect.')],
           'A consumer reads it and can call the service without a single meeting.',
           T,
           "VO: An OpenAPI 3.x contract specifies, for one service, the operations it offers — say, 'get "
           "a learner's record' — the inputs each operation takes, the outputs it returns, the errors it "
           "can raise, and the security it requires. The outputs come straight from the semantic map you "
           "built: the contract is where the agreed meaning becomes a concrete, callable interface. A "
           "consumer reads the contract and knows exactly how to call the service — the field names, the "
           "types, the errors — without a single meeting.",
           bottom=6.1)

panels(prs, 'Generate the contract, then confirm every field',
       ('THE AI PROMPT DRAFTS',
        ['From the service brief and the semantic map:',
         'the paths, the request and response shapes, the errors, the security scheme.']),
       ('YOU CONFIRM',
        ['Every endpoint, field name and type —',
         'against what the provider system actually exposes.']),
       'A contract naming a field the provider does not return fails at the first real call.',
       T,
       "VO: The AI prompt for this video does the drafting. Give Claude the service brief — what the "
       "service does — and the semantic map for the data it returns, and it drafts the OpenAPI document: "
       "the paths, the request and response shapes, the error responses, the security scheme. As with "
       "the semantic map, every endpoint, field name and type is a [confirm] until you check it against "
       "what the provider system actually exposes. An OpenAPI document that looks right but names a "
       "field the provider does not return is a contract that fails at the first real call — and looks "
       "fine until then.")

two_forms(prs, 'One contract, two forms — generate the first, derive the second',
          ('OPENAPI CONTRACT', ['For humans and tools to read.', 'You generate this.']),
          ('X-ROAD SERVICE DESCRIPTION', ['For the bus to register the service and route a call.',
                                          'You derive this.']),
          'The core move of this knowledge product: configuration that puts a real service on the bus.',
          T,
          "VO: The OpenAPI contract then becomes the X-Road service description — the form the bus uses "
          "to register the service and route a call to it. They are the same contract in two forms: "
          "OpenAPI for humans and tools to read, the X-Road service description for the bus to route. "
          "Generating the first and deriving the second is the core move of this whole knowledge "
          "product — using Claude to produce the configuration that puts a real service on the bus.\n\n"
          "Production cue: the pivotal slide of this video. Hold it a beat longer.")

block(prs, 'The contract is executable configuration, not a diagram',
      ['It is what the consumer\'s code calls and what the bus routes.',
       'Semantic map plus service contract: the agreed meaning and the callable interface for one '
       'exchange.'],
      'Real output in the build pack — not a picture of output.',
      T,
      "VO: And this is why the contract is a build-pack artefact, not a diagram. It is executable "
      "configuration — it is what the consumer's code calls and what the bus routes. When you have done "
      "the semantic map and the service contract for one exchange, you hold, for that exchange, the "
      "agreed meaning and the callable interface: the technical-layer configuration the live "
      "demonstration runs on. That is real output, not a picture of output.")

big_slide(prs,
          'The OpenAPI contract is the service made callable — generated from the brief and the '
          'semantic map, confirmed, and turned into an X-Road service description.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the service contract is where meaning becomes a callable interface. Generate the "
          "OpenAPI document with the AI prompt from the brief and the semantic map, confirm every field "
          "against the provider, and derive the X-Road service description. That is the configuration "
          "that puts a service on the bus — executable, in the build pack, ready for a real call.",
          practice=('Generate an OpenAPI service contract',
                    'an OpenAPI 3.x contract with [confirm] placeholders, plus X-Road service-description '
                    'notes'))

sources_slide(prs, T, [
    'OpenAPI 3.x specification',
    'OAuth 2.x / OpenID Connect',
    'NIIS X-Road service description (niis.org)',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 4.6
T = '4.6 · Put a real data source on the bus — the Giga case'
section('4.6', 'Put a real data source on the bus — the Giga case',
        'Take Giga\'s real school data through a bronze/silver/gold pipeline onto the bus — a worked '
        'exchange you can copy for your sector.',
        "VO: Everything so far has been the method. Now a real worked case, so you have a template to "
        "copy rather than a theory to apply. Giga — the ITU and UNICEF initiative that maps the world's "
        "schools and their connectivity — publishes open APIs and real school data. Putting Giga's data "
        "onto the bus is a complete, concrete example of every step at once: the standards, the "
        "semantics, the contract, and the data pipeline that feeds them.")

rows_block(prs, 'Giga gives you real, published material to practise on',
           [('Open APIs', 'You can actually call them.'),
            ('A school-master schema and a qos schema', 'Each school — and the quality of its internet service.'),
            ('GeoJSON', 'Where each school sits.'),
            ('ISO 3166-1 alpha-3', 'Three-letter country codes, for indexing.')],
           'The published schemas the portfolio and the semantic map told you to reuse — in one dataset.',
           T,
           "VO: Giga gives you real, published material to work from. Open APIs you can actually call. A "
           "school-master schema describing each school, and a qos schema describing its connectivity — "
           "the quality of its internet service. GeoJSON, the standard way to express a location, for "
           "where each school sits. And ISO 3166-1 alpha-3, the three-letter country codes, for indexing. "
           "These are exactly the kind of published standards and schemas the standards portfolio and the "
           "semantic map told you to reuse — and here they are, in one real dataset, ready to practise on.",
           numbered=False)

rows_block(prs, 'Real data reaches the bus in three stages',
           [('Bronze', 'The raw data exactly as received — kept untouched for audit.'),
            ('Silver', 'Cleaned, validated, conformed to the schema and the semantic map; bad or duplicate '
             'records flagged.'),
            ('Gold', 'The published, authoritative version other services consume.')],
           'How a messy real source becomes a registry other agencies can trust.',
           T,
           "VO: Real source data is never clean enough to publish straight onto the bus, so it moves "
           "through a pipeline in three stages. Bronze — the raw data exactly as received from the "
           "source, kept untouched for audit. Silver — the cleaned and validated version, conformed to "
           "the schema and the semantic map, with bad or duplicate records flagged. Gold — the published, "
           "authoritative version that other services on the bus actually consume. This bronze, silver, "
           "gold pattern is how a messy real source becomes a registry other agencies can trust, and every "
           "data source you put on the bus follows it.")

# The module's centrepiece.
pipeline(prs, 'One real source carries every step of this module',
         [('BRONZE', ['Raw, as received.', 'Kept for audit.'], '4.6'),
          ('SILVER', ['Conformed to the schema and the semantic map.'], '4.4 · 4.6'),
          ('GOLD', ['Published, authoritative.'], '4.6'),
          ('CONTRACT', ['OpenAPI, then the X-Road service description.'], '4.3 · 4.5 · 4.7'),
          ('THE BUS', ['Secured across the trust zones.', 'Inside the envelope.'], '4.2 · 4.8')],
         'The same template for schools, health facilities or a farmer registry.',
         T,
         "VO: Now watch the whole module tie together on one source. The school-master data lands as "
         "bronze. It is cleaned and conformed to the schema and the semantic map as silver. It is "
         "published as gold. The gold-layer service is described by an OpenAPI contract, registered as "
         "an X-Road service description, secured across the three trust zones, and made lawful by the "
         "data-protection envelope. Every piece of this module appears, in order, on one real dataset. "
         "That is the template — and it is the same template whether the source is schools, health "
         "facilities, or a farmer registry.\n\n"
         "Production cue: the centrepiece of the module. Reveal the five stages left to right; the "
         "video numbers beneath show where each step was built. Hold it a beat longer.")

block(prs, 'Practise on Giga before you touch a live national registry',
      ['Giga is public, real and already standards-aligned — so a mistake here has no consequences.',
       'Run it once, then apply the identical pattern to your own school data, and to the next sector.'],
      'Bronze, silver, gold, contract, bus — learned where the data is forgiving.',
      T,
      "VO: The reason to learn it on Giga rather than your own data is that Giga is public, real and "
      "already standards-aligned, so you can practise the full pipeline before you touch a live national "
      "registry where a mistake has consequences. Once you have run it once on Giga, you apply the "
      "identical pattern — bronze, silver, gold, contract, bus — to your country's own school data, and "
      "then to the next sector.")

big_slide(prs,
          'Bronze, silver, gold, contract, bus — the Giga case is the full method on one real source, '
          'ready to copy for your own sector.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the Giga case is the method made concrete. A real source, real schemas, the "
          "bronze-silver-gold pipeline, a service contract, and the bus — every step of this module on "
          "one dataset you can actually run. Learn it here, where the data is public and forgiving, and "
          "you have a template to copy onto your own national registries with confidence.",
          practice=('Map a real sector data source through bronze/silver/gold onto the bus',
                    'a bronze/silver/gold pipeline plan plus a path-onto-the-bus checklist'))

sources_slide(prs, T, [
    'Giga (giga.global) — open APIs; school-master and qos schemas',
    'GeoJSON',
    'ISO 3166-1 alpha-3',
    'Bronze / silver / gold — Giga School Master Data architecture',
])


# ================================================================ 4.7
T = '4.7 · Wire a service onto the bus'
section('4.7', 'Wire a service onto the bus',
        'The OpenAPI contract becomes an X-Road service description and the call resolves — the '
        'GovStack Information Mediation pattern.',
        "VO: You have the meaning — the semantic map. The contract — the OpenAPI document. And the data "
        "— the gold dataset. Wiring is the step that makes them callable on the bus: registering the "
        "service so that a consumer in another agency can discover it and call it. The pattern has a "
        "name in the GovStack world — Information Mediation, the building block whose whole job is to "
        "mediate exchanges between systems.")

rows_block(prs, '"Wired" means three concrete things',
           [('The service description is registered', 'On the provider agency\'s security server.'),
            ('A consumer in another agency can discover it', ''),
            ('A call routes there and back',
             'Consumer\'s security server → across the bus → provider\'s security server → data returned.')],
           'When that round trip works, the service is on the bus — not just designed for it.',
           T,
           "VO: 'Wired' means three concrete things. The service's description is registered on the "
           "provider agency's security server. A consumer in another agency can discover that the service "
           "exists. And when the consumer calls it, the request routes through the consumer's security "
           "server, across the bus, to the provider's security server, which runs the service and returns "
           "the data — all secured across the trust zones you mapped earlier. When that round trip works, "
           "the service is genuinely on the bus, not just designed for it.")

rows_block(prs, 'Three configuration artefacts make wiring real',
           [('The subsystem', 'The member\'s registered identity on the bus.'),
            ('The service description', 'Derived directly from your OpenAPI contract.'),
            ('The access-control list', 'Which other members are allowed to call this service.')],
           'Being on the bus does not mean everyone may call everything.',
           T,
           "VO: Three configuration artefacts make wiring real, and you have largely produced them "
           "already. The subsystem — the member's registered identity on the bus. The service description "
           "— derived directly from your OpenAPI contract. And the access-control list — which other "
           "members are allowed to call this service, because being on the bus does not mean everyone may "
           "call everything. Registering the member as a subsystem and setting its access-control list is "
           "member-onboarding work; here you supply the service description that goes with it.",
           numbered=False)

block(prs, 'Align to the published Information Mediation pattern',
      ['GovStack\'s Information Mediation building block is the reusable specification for the component '
       'that routes and mediates exchanges.',
       'A vendor\'s compliant implementation can drop into the role, instead of a bespoke build.'],
      'Re-use, reaching all the way down to the routing component.',
      T,
      "VO: The GovStack Information Mediation building block is the published pattern for all of this — "
      "the reusable specification for the component that routes and mediates exchanges between agencies. "
      "Cross-linking your framework to it keeps you aligned with the wider GovStack ecosystem, which "
      "matters practically: a vendor's compliant Information Mediator implementation can drop into the "
      "role, rather than your country building the mediation component bespoke. That is the re-use "
      "principle reaching all the way down to the routing component itself.")

block(prs, 'The acceptance is one test call that resolves',
      ['A consumer\'s security server calls the service and gets the expected data back — once, over '
       'the bus.',
       'Meaning agreed, contract honoured, security enforced, data returned.'],
      'The moment the configuration stops being documents and becomes a working exchange.',
      T,
      "VO: And the acceptance here is concrete and runnable — a test call. A consumer's security server "
      "calls the service and gets the expected data back, once, over the bus. That single resolving call "
      "is the proof that the technical layer works for this exchange: meaning agreed, contract honoured, "
      "security enforced, data returned. It is exactly the check the live demonstration runs, and it is "
      "the moment the technical-layer configuration stops being a set of documents and becomes a working "
      "exchange.\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'Register the service description, set who may call it, and a test call that resolves proves '
          'the service is on the bus.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So wiring is where the pieces become a working service. Register the service description "
          "on the security server, set the access-control list for who may call it, align to the GovStack "
          "Information Mediation pattern, and prove it with a test call that resolves. That resolving call "
          "is the technical layer's acceptance — and the technical configuration the framework actually "
          "runs on.",
          practice=('Generate the X-Road service description and wiring checklist',
                    'X-Road service-description notes, access-control entries, and a test-call plan'))

sources_slide(prs, T, [
    'NIIS X-Road service description / Information Mediator (niis.org)',
    'GovStack Information Mediation Building Block (govstack.global)',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 4.8
T = '4.8 · Make the exchange lawful — the data-protection envelope'
section('4.8', 'Make the exchange lawful — the data-protection envelope',
        'Letters of Interest plus a data-protection envelope make a real exchange lawful as well as '
        'technically possible.',
        "VO: A service can be perfectly wired and perfectly secured and still must not be switched on, "
        "because technical capability is not lawful authority. The last thing the architect checks for "
        "an exchange is its data-protection envelope — the agreements and safeguards that make moving "
        "this data lawful, not merely possible. This is where the technical work you have done meets the "
        "legal and organisational layers built earlier in this knowledge product.")

rows_block(prs, 'Three things make an exchange lawful, not merely possible',
           [('A lawful basis', 'From the decree — the exchange must be one the decree authorises.'),
            ('A bilateral Letter of Interest', 'The two agencies agree to this specific exchange, on these terms.'),
            ('Data-protection safeguards', 'Minimisation, purpose, consent where needed, retention.')],
           'Technical capability, plus these three.',
           T,
           "VO: The envelope has three parts. A lawful basis, which comes from the decree you drafted in "
           "the legal module — the exchange must be one the decree actually authorises. A bilateral "
           "agreement — a Letter of Interest between the two agencies, the practical record that they "
           "agree to this specific exchange, on these terms. And the data-protection safeguards — that the "
           "exchange uses only the data it needs, for the stated purpose, with consent where required, and "
           "a clear retention rule. Technical capability plus these three is what makes an exchange "
           "lawful.")

rows_block(prs, 'Data protection by design lives in the configuration',
           [('Minimisation is in the contract', 'The service returns only the fields the purpose needs.'),
            ('Purpose matches the access-control list', 'Only agencies with a lawful purpose can call.'),
            ('Retention and logging are configured', 'Not merely promised in a policy.')],
           'Part of what the demonstration runs — not a document filed somewhere else.',
           T,
           "VO: The architect's specific job is data protection by design — building the safeguards into "
           "the configuration rather than bolting them on after. Minimisation lives in the OpenAPI "
           "contract: the service returns only the fields the purpose needs, not the whole record. The "
           "purpose and the access-control list match: only the agencies with a lawful purpose can call "
           "the service. And retention and logging are configured, not merely promised in a policy. Built "
           "this way, the safeguards are part of the configuration the demonstration runs, not a document "
           "filed somewhere separate from the system.",
           numbered=False)

# The module's one full-colour punch block.
block(prs, 'An exchange is ready only when all three layers line up',
      ['Legal: the decree authorises it. Organisational: the member agreement and access-control list '
       'record who may do it. Technical: the contract, security and minimisation carry it out.',
       'The data-protection officer signs off — not the architect alone.'],
      'Joining the bus never, by itself, grants access to any data.',
      T,
      "VO: This is where the three layers meet on a single exchange. The decree, the legal layer, "
      "authorises it. The member agreement and the access-control list, the organisational layer, record "
      "who may do it. The contract, the security and the minimisation, the technical layer, carry it out "
      "within the envelope. An exchange is ready only when all three line up — and that is the "
      "architect's final check before a service goes live. It is also why the data-protection officer "
      "signs off, not the architect alone: the envelope is a shared responsibility, by design. This is "
      "also where the framework's most important quiet rule lives: joining the bus never, by itself, "
      "grants access to anything. Membership buys the secure channel and the trust. The right to read a "
      "specific dataset stays with the provider, who grants it per service — the Letter of Interest is "
      "that grant, and the access-control list is its technical shadow. An agency with valid "
      "certificates and a working connection still has access to nothing until a data owner says so.\n\n"
      "Production cue: the pivotal slide of this video and the module's one full-colour block. Hold it "
      "a beat longer.",
      punch_fill=ITU_BLUE, punch_ink=WHITE, punch_y=4.85)

big_slide(prs,
          'A lawful basis, a Letter of Interest, and data protection by design — the envelope that makes '
          'a wired exchange a lawful one. Membership is never access.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the data-protection envelope is the final layer on a real exchange. A lawful basis from "
          "the decree, a Letter of Interest between the agencies, and data protection built into the "
          "configuration by design. With the technical work inside that envelope, an exchange is not just "
          "possible — it is lawful, and ready to go live. That completes the architecture module: meaning, "
          "contract, security, wiring, and the envelope that makes it all lawful.",
          practice=('Draft the data-protection envelope for an exchange',
                    'a lawful-basis finding, a draft Letter of Interest, and a data-protection-by-design '
                    'checklist'))

sources_slide(prs, T, [
    'ITU DPI Safeguards — data-protection guidance',
    'Bilateral Letters of Interest',
    'The interoperability decree — Module 2 (the lawful basis)',
    'EU European Interoperability Framework — legal layer',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 67, 'slide count changed — re-run the split with --infer-ranges'
assert all(sl.has_notes_slide and sl.notes_slide.notes_text_frame.text.strip() for sl in prs.slides), \
    'every slide carries its voice-over in the notes'

# The practice box is the last thing on its slide; anything overlapping it clips on render.
for sl in prs.slides:
    for pb in [sh for sh in sl.shapes if sh.has_text_frame
               and sh.text_frame.text.startswith('Do this on your own sector')]:
        for sh in sl.shapes:
            if sh.shape_id == pb.shape_id or not sh.has_text_frame or not sh.text_frame.text.strip():
                continue
            assert sh.top + sh.height <= pb.top or sh.top >= pb.top + pb.height, \
                'shape overlaps the practice box: %r' % sh.text_frame.text[:60]

OUT = os.environ.get('OUT_PATH') or os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'videos', 'module_4', 'en', 'decks', 'KP2_M4_Deck_v0.1.pptx')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)
