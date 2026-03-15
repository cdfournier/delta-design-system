# AGENTS.md — The Delta Design System / Storybook

## What this repository is

This is the Storybook implementation of The Delta Design System — the developer-facing counterpart to the Figma design documentation. The goal is a living documentation system where every Storybook story page mirrors its corresponding Figma component page exactly: same content, same structure, same component samples, same token values.

**The pipeline is: Figma → Storybook.**

HTML documentation files in `../docs/` are a verified intermediate reference. Where HTML and Figma diverge, Figma wins.

---

## Directory structure and scope

```
delta-design-system/
  docs/                         ← HTML reference files — READ ONLY, never modify
  storybook/                    ← Your entire working scope
    AGENTS.md                   ← This file
    storybook-brief.md          ← Full build brief — read this thoroughly
    delta-standards.md          ← Authoritative standards reference
    .storybook/
      main.js
      preview.js
    src/
      styles/
        tokens.css
        docs.css
        reset.css
      components/
        [name]/
      foundations/
        [name]/
      welcome/
    package.json
```

**Write access: `storybook/` only.** Never create, modify, or delete anything outside this directory. `../docs/` is read-only reference material.

---

## Before starting any task

1. Read `storybook-brief.md` in full — it contains all architectural decisions, CSS strategy, token system, build sequence, and per-story workflow
2. Read `delta-standards.md` — it is the authoritative reference for naming, table formats, section structure, and terminology
3. Read `component_template.html` and `foundation_template.html` — these are the authoritative structural templates for all story pages
4. For story content, read the corresponding HTML file from `../docs/` as the verified proxy for what Figma specifies — this is what Storybook must match

---

## Content fidelity — the most important rule

**Figma is the source of truth. Storybook must match Figma.**

The HTML reference files in `../docs/` are verified snapshots of the Figma documentation — they exist as a practical convenience because Codex can read them directly. They are a proxy for Figma, not a source of truth in their own right. The goal is parity between Figma and Storybook. The HTML files are the means to that end.

This has two implications:

**Do not add anything not in Figma.** No additional sections, labels, metadata, UI elements, annotations, table columns, or any other content regardless of whether it seems helpful or informative. If it is not in Figma, it does not exist in Storybook.

**Do not trust the HTML files blindly.** If something in an HTML file seems inconsistent or wrong, flag it rather than building from it. The HTML files have been carefully audited against Figma but they are not infallible. When in doubt, Figma wins.

---

## Visual specimens

When building live rendered samples — color swatches, type specimens, spacing examples, component renders — match what Figma shows exactly. No additional metadata, no extra labels, no embellishments, no UI patterns that aren't in the Figma documentation.

A color swatch is what Figma shows it to be. A component sample renders the component as Figma specifies it. Nothing more.

---



## Non-negotiable rules

### Semantic HTML
- Never use heading tags (`h1`–`h4`) for non-heading content — labels, token names, card titles, and UI text are not headings
- Use `p` with bold styling for emphasized labels and names within specimens and samples
- The heading hierarchy of every page must match the HTML reference file exactly — do not introduce additional headings or change existing ones

### CSS isolation
- All documentation page styles are scoped under `.delta-docs` — no bare element selectors anywhere in `docs.css`
- Component styles are scoped to their own class names — no global element selectors
- Never style `body`, `html`, or any element globally in story CSS

### docs.css — styles must match the HTML reference files
- All styles in `docs.css` must be built around the actual elements and classes used in the HTML reference files — never invent wrapper classes or helper classes that the reference files don't use
- Element-level spacing (`h1`–`h4`, `p`, `ul`, `ol`, `table`, `pre`, `hr`) must be declared directly on those elements under `.delta-docs` — do not zero out element margins and rely on wrapper classes to restore spacing
- The Do/Don't grid uses `.do-dont-grid`, `.do-section`, and `.dont-section` — never rename or replace these with alternative class names
- When adding new styles for specimens or samples, check that existing spacing and layout rules are not overridden or removed

### Token system
- Every color, spacing, typography, and border-radius value must reference a CSS custom property — no hardcoded values anywhere
- `tokens.css` is the single source for all custom properties
- Mobile values are declared at `:root` level; widescreen overrides are inside `@media (min-width: 80rem)`
- Dark mode overrides use `[data-color-mode="dark"]` attribute selector — never `@media (prefers-color-scheme: dark)`

### Decorator and iframe context
- The `preview.js` decorator must target the story wrapper element — not `document.body` or `document.documentElement`, which refer to the manager frame, not the story iframe
- `data-color-mode` and `data-breakpoint` attributes must be set on the story wrapper element so CSS custom property overrides cascade correctly

### Responsive defaults
- Default viewport is mobile (375px) — widescreen is never the default
- All breakpoint media queries use rem, never px: `@media (min-width: 80rem)`
- 1440px is a Figma frame size only — it is not a code breakpoint

### Hardcoded values
- Never hardcode a color, spacing, radius, or typography value in any component or documentation CSS
- If a token does not exist yet in `tokens.css`, add it there first, then reference it

### Section structure
- Every story page follows the fixed section framework from the brief — order and names are non-negotiable
- Sections may be omitted if they genuinely don't apply, but may never be renamed or reordered
- No section outside the framework should be added

---

## Version control

**Never commit or push on your own.** Commits are a human checkpoint that signals explicit approval of completed work. Codex builds and proposes — the human reviews, approves, and commits.

When a step or phase is complete and ready for review, say so clearly and stop. Do not run `git add`, `git commit`, or `git push` under any circumstances.

---

## Per-story build sequence

Every story is built in two steps. Do not combine them.

**Step 1 — Structure and copy**
Build the complete documentation page: all sections, all prose, all tables, all code reference blocks. Use clearly labeled placeholder containers where live component samples will go. Stop when Step 1 is complete and wait for review and approval.

**Step 2 — Figures and samples**
Replace placeholders with live rendered component examples. Verify each sample at mobile and widescreen viewports, and in light and dark modes. Stop when Step 2 is complete and wait for review and approval.

Do not proceed from Step 1 to Step 2 without explicit approval. Do not proceed to the next story without explicit approval of Step 2.

---

## Build phases

Work in this order. Do not start a new phase without completing and verifying the previous one.

- **Phase 1** — Infrastructure: `tokens.css`, `reset.css`, `docs.css`, `main.js`, `preview.js`
- **Phase 2** — Foundations: Colors, Typography, Spacing, Grid
- **Phase 3** — Atoms: Badge, Blockquote, Button, Chip, Icon, Input, Link, List
- **Phase 4** — Molecules: Card, Content, Details, Feedback, Fieldset, Message, Pagination, Table
- **Phase 5** — Organisms: Banner, Footer, Header, Tabs
- **Phase 6** — Playground controls (added last, after all stories are verified)

---

## Terminology — always use these terms

| Use this | Not this |
|----------|----------|
| Widescreen | Desktop, Large, Wide |
| Mobile | Phone, Small |
| Tablet | Medium |
| Active / Pressed | Active, Pressed (alone) |
| border-radius | corner radius |
| line-height | leading |
| Attribute | Element, Property (as table column header) |

American English throughout: color, behavior, not colour, behaviour.

---

## Reference files

| File | Purpose |
|------|---------|
| `storybook-brief.md` | Complete build brief — architecture, CSS strategy, token system, build sequence |
| `delta-standards.md` | Authoritative standards — naming, tables, sections, terminology |
| `component_template.html` | Authoritative structure template for all component story pages |
| `foundation_template.html` | Authoritative structure template for all foundation story pages |
| `../docs/[name]_documentation.html` | Verified proxy for Figma documentation — what Storybook must match |
