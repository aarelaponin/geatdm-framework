# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **documentation-only repository** containing the GEATDM (Generic EA Target Architecture Development Method) framework - an enterprise architecture methodology for public sector digital transformation. There is no source code, build system, or tests.

## Repository Structure

- `00-START-HERE/` - Core documents: User's Guide and Main Document
- `01-Toolkit/` - All 31 templates and tools
- `02-Reference-Architectures/` - Three Reference Architectures (PDU, RA, SDA)
- `03-Method-Guide/` - Detailed phase-by-phase method guide
- `04-EA-Framework/` - Metamodel, Principles, Governance, Services
- `05-Quick-Reference/` - Classification Guide and DPI Checklist

## Key Domain Concepts

**Three Organization Types (inheritance relationship: SDA ⊃ RA ⊃ PDU):**
- **PDU** (Policy Development Unit): Ministries, chancelleries
- **RA** (Regulatory Agency): Data protection, business registry
- **SDA** (Service Delivery Authority): Tax, customs, social security

**Five Phases:** DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE

**DPI Integration:** Organizations integrate with national Digital Public Infrastructure building blocks (Identity BB, Payments BB, Information Mediator BB) rather than building them.

## Setup

Run `./setup-repository.sh` to copy documents from a parent `../outputs/` directory into the repository structure.

## Working with this Repository

When editing documentation:
- Maintain consistent markdown formatting
- Preserve the document versioning scheme (e.g., `v1.0`)
- Keep the hierarchical folder structure intact
- Reference Architecture documents follow naming: `GEATDM-WP{N}-T{NN}-{Name}-v{Version}.md`
