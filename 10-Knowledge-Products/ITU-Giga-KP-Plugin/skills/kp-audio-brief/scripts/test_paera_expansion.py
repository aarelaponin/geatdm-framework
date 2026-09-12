#!/usr/bin/env python3
"""Edit distance cannot see every mangling of PAERA; the expansion beside it can.

`paera_near_misses` flags anything two edits from PAERA, and two takes recorded as clean on
10 Sep shipped past it: 4.6 v0.14 said "the POA framework, that's the Public Administration
Ecosystem Reference Architecture" (three edits) and 4.7 v0.13 said "the P-EAR, uh, uh, the
Public Administration…" (hyphenated, so never a token at all). Run: python3
test_paera_expansion.py
"""
from srt_drift_check import framework_name_slips, paera_expansion_slips

EXP = "the Public Administration Ecosystem Reference Architecture"


def test_correct_acronym_passes():
    assert paera_expansion_slips(f"We are looking at PAERA, {EXP}, as our model.") == []


def test_acronym_three_edits_away_is_caught():
    assert paera_expansion_slips(f"Progressa and the POA framework, that's {EXP}.")


def test_hyphenated_mangle_is_caught():
    assert paera_expansion_slips(f"Maintaining the P-EAR, uh, uh, {EXP} is an ongoing practice.")


def test_expansion_with_no_acronym_at_all_is_caught():
    assert paera_expansion_slips(f"It is anchored to {EXP}, the reference architecture.")


def test_acronym_just_outside_the_window_is_caught():
    assert paera_expansion_slips("PAERA. " + "x" * 200 + EXP)


def test_bare_acronym_without_the_expansion_is_not_this_check_s_job():
    assert paera_expansion_slips("They use the POA framework to score capabilities.") == []


DECK = ("PAERA v1.0 Progressa Learner Registry PNIA PDGA PLR European Interoperability "
        "Framework GovStack")


def test_the_name_before_framework_must_be_paera():
    assert framework_name_slips("They use the PAERA framework here.", DECK) == []


def test_hyphenated_compound_with_the_right_name_passes():
    assert framework_name_slips("scored against PAERA-anchored standards.", DECK) == []


def test_name_split_across_two_words_is_caught():
    assert framework_name_slips("untangled these systems using the Kia RRA framework.", DECK)
    assert framework_name_slips("The core rule of the PR era framework is simple.", DECK)


def test_standards_counts_as_the_same_tell():
    assert framework_name_slips("scored against the PEURA standards.", DECK)


def test_deck_vocabulary_is_exempt():
    assert framework_name_slips("the European Interoperability Framework applies.", DECK) == []
    assert framework_name_slips("GovStack framework guidance.", DECK) == []


def test_a_capital_starting_a_sentence_is_not_a_name():
    assert framework_name_slips("It works. Even with an established framework, it fails.",
                                DECK) == []


def test_no_name_at_all_is_not_this_check_s_job():
    assert framework_name_slips("this framework, and the framework itself", DECK) == []


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print("ok  ", name)
