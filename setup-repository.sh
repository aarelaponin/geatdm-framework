#!/bin/bash
# GEATDM Method Repository Setup Script
# Run this script from the GEATDM-Method-Repository directory

OUTPUTS="../outputs"

echo "Setting up GEATDM Method Repository..."

# 00-START-HERE
echo "Copying core documents..."
cp "$OUTPUTS/GEATDM-UsersGuide-v1.0.md" "00-START-HERE/"
cp "$OUTPUTS/GEATDM-WP6-T62-MainDocument-v1.0.md" "00-START-HERE/"

# 01-Toolkit
echo "Copying toolkit..."
cp "$OUTPUTS/GEATDM-WP6-T61-Toolkit-v1.0.md" "01-Toolkit/"

# 02-Reference-Architectures
echo "Copying Reference Architectures..."
cp "$OUTPUTS/GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md" "02-Reference-Architectures/"
cp "$OUTPUTS/GEATDM-WP3-T35-RA-RA-Complete-v1.0.md" "02-Reference-Architectures/"
cp "$OUTPUTS/GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md" "02-Reference-Architectures/"

# 03-Method-Guide
echo "Copying method guide..."
cp "$OUTPUTS/GEATDM-WP5-T58-MethodGuide-Complete-v1.0.md" "03-Method-Guide/"

# 04-EA-Framework
echo "Copying EA framework documents..."
cp "$OUTPUTS/GEATDM-WP1-T11-Metamodel-v1.0.md" "04-EA-Framework/"
cp "$OUTPUTS/GEATDM-WP1-T12-EAPrinciples-v1.0.md" "04-EA-Framework/"
cp "$OUTPUTS/GEATDM-WP1-T13-Governance-v1.0.md" "04-EA-Framework/"
cp "$OUTPUTS/GEATDM-WP1-T14-EAServices-v1.0.md" "04-EA-Framework/"

# 05-Quick-Reference
echo "Copying quick reference guides..."
cp "$OUTPUTS/GEATDM-WP5-T51-ClassificationGuide-v1.0.md" "05-Quick-Reference/"
cp "$OUTPUTS/GEATDM-WP5-T52-DPIChecklist-v1.0.md" "05-Quick-Reference/"

echo ""
echo "✓ Setup complete! 13 files copied to repository structure."
echo ""
echo "Repository structure:"
find . -type f -name "*.md" | sort
