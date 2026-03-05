# Documentation Precedence

This file defines which standard wins when guidance conflicts.

## Goal

Alignment, parity, consistency, and accuracy across Figma, HTML docs, and Storybook.

## Source Order (highest to lowest)

1. Figma node content and variables (latest approved state)
2. `delta-standards.md` (project documentation contract)
3. HTML page templates (`component_template.html`, `foundation_template.html`)
4. Repo workflow docs (`docs/workflows/*`, `docs/templates/*`)
5. Session helper prompts (`session-prompts.md`)
6. Terminology guide (advisory only if conflict exists)

## Working Rules

- Never invent section names or prose not present in the approved source.
- When Figma and HTML disagree, treat Figma as final.
- Keep docs lean: include only sections that exist in the approved page outline.
- Use token values only from verified Figma contexts.

## Conflict Policy

If two sources disagree:

1. Prefer the higher source in this file.
2. Record the conflict in the PR/commit notes.
3. Apply only the minimum change needed for parity.

