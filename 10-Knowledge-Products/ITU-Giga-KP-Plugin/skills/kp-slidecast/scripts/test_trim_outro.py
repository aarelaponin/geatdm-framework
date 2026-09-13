#!/usr/bin/env python3
"""The head cut has to tell the show's furniture from the video's own opening.

Both directions have burned us: a four-cue cap gave up on Modules 2-4, whose takes open with a
30 s teaser before the self-introduction, and anchoring on the marker alone ate 4.1's "Meet
Progressa" and 2.5's required "module two, video 2.5". Run: python3 test_trim_outro.py
"""
from trim_outro import open_end, outro_start

TERMS = {"progressa", "demonstration", "learner", "registry", "ministry", "architecture"}


def cues(*texts):
    return [{"text": t, "start": i * 5.0, "end": i * 5.0 + 4.0} for i, t in enumerate(texts)]


def test_furniture_before_the_marker_is_cut():
    c = cues("Have you ever wondered about big projects?",
             "It is a classic trap, honestly.",
             "So let us cut through the noise.",
             "Welcome to today's deep dive. I'm your host.",
             "The Learner Registry is meant to be the one list.")
    assert open_end(c, TERMS) == 4, open_end(c, TERMS)


def test_a_show_open_sentence_running_into_the_next_cue_is_cut_whole():
    # KP2 1.1 v0.1: the cut after the marker cue opened the video on "uh, IT architecture …"
    c = cues("Welcome to this deep dive. Today we are looking at white papers,",
             "uh, guidelines, and some research to solve a mystery.",
             "The ministry runs three registries.")
    assert open_end(c, TERMS) == 2, open_end(c, TERMS)


def test_the_videos_own_opening_survives():
    # 4.1: content in the first cue, a marker after it. Cutting to the marker would eat it.
    c = cues("Meet Progressa. It is a demonstration country.",
             "So today we are looking at what that means.",
             "The ministry runs three registries.")
    assert open_end(c, TERMS) is None, open_end(c, TERMS)


def test_no_deck_keeps_the_four_cue_cap():
    c = cues("Teaser one.", "Teaser two.", "Teaser three.", "Teaser four.",
             "Welcome to today's deep dive.", "Real content about the ministry.")
    assert open_end(c, None) is None          # 5 cues of furniture — over the cap, so hands back
    assert open_end(c[4:], None) == 1         # marker first: one cue, inside the cap


def test_an_announced_close_is_cut_from_the_announcement():
    # 4.6: the walk back stopped one cue in, because the middle of the outro is thick with deck
    # vocabulary. The announcement is the boundary, not the deck words that follow it.
    c = cues("The ministry runs three registries and none of them agree.",
             "Before we wrap up, I want to leave you with a thought to mull over.",
             "Could you use this to align the registry architecture of another ministry",
             "before they even sit down to design a shared service?")
    assert outro_start(c, TERMS) == 1, outro_start(c, TERMS)


def test_the_outro_behind_the_sources_line_is_found():
    # 2.4: closing turn, THEN the required sources line. A strict walk back from the end stops
    # on the sources line and reports the take as clean.
    c = cues("So the big takeaway: before you model, classify the ministry.",
             "Are you treating your shared platforms as foundations or as private property?",
             "That is a really great question to leave on.",
             "Absolutely. Sources are in the video description.")
    assert outro_start(c, TERMS) == 1, outro_start(c, TERMS)


def test_a_sources_line_after_clean_content_is_not_an_outro():
    c = cues("The ministry runs three registries and none of them agree.",
             "That is the whole message of this video, and it is the one to keep.",
             "Sources are in the video description.")
    assert outro_start(c, TERMS) is None, outro_start(c, TERMS)


def test_a_clean_open_is_left_alone():
    assert open_end(cues("The ministry runs three registries.", "Yes, and none agree."),
                    TERMS) is None


def test_the_closing_turn_is_cut_from_the_end():
    # The first question in the window is mid-content ("the third sign off, right?"); the real
    # outro is 30 s later. Scanning forward found the former and discarded it.
    c = cues("And this leads to the third sign off, right?",
             "Yes. The board signs off on the localised principle set.",
             "It locks in the shape of the whole ministry roadmap.",
             "Right. So for you listening, think about it.")
    assert outro_start(c, TERMS) == 3, outro_start(c, TERMS)


def test_a_closing_question_split_across_cues_is_cut_whole():
    """4.7 v0.16: only the second half ends in "?", so the walk stopped mid-sentence."""
    c = cues("The Board issues binding decisions from the repository.",
             "And finally, both sides make joint decisions quarterly forever.",
             "Exactly. And consider this implication for your own government structures.",
             "If a unified Board can stop fragmented building blocks today, how might this model",
             "change the way your minister evaluates future roadmaps?")
    assert outro_start(c, TERMS) == 2, outro_start(c, TERMS)


def test_an_announced_close_starting_mid_sentence_is_cut_whole():
    """5.5 v0.1: the marker ("mull over") is in the second half of the sentence."""
    c = cues("They learn the method, they build the system, and they stay.",
             "It is about owning the Registry capability, not just renting the talent,",
             "which leaves you a fascinating thought to mull over as we wrap up.",
             "What other closed industries are about to be disrupted?")
    assert outro_start(c, TERMS) == 1, outro_start(c, TERMS)


def test_never_trims_the_whole_take():
    # Every cue furniture by this deck's vocabulary: not an outro, and cutting at 0 would delete
    # the recording.
    c = cues("Some talk with no deck words.", "More of the same.", "So think about your own work.")
    assert outro_start(c, TERMS) is None


def test_a_recap_landing_is_not_an_outro():
    # No deck vocabulary in the last cue, but it does not turn to the listener either.
    c = cues("The registry keeps one list.", "That is the whole point.")
    assert outro_start(c, TERMS) is None


def test_no_deck_keeps_the_original_outro_rule():
    c = cues("The ministry runs three registries.", "So what could you do with this?")
    assert outro_start(c, None) == 1


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all ok")
