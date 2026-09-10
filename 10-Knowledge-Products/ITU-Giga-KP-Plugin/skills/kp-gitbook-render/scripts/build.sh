#!/usr/bin/env bash
# Render the KP1 GitBook and run every gate. Any failure stops the build.
set -euo pipefail
cd "$(dirname "$0")"
python3 render.py
python3 gitbook_qa.py                # links, forbidden strings, sources, status vocabulary
python3 progressa_facts_check.py     # the site's Progressa vs the kit's, on facts
python3 paera_anchor_check.py        # advisory: anchors not in the map
echo "build ok"
