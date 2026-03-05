# New Repo Kickoff Pack

Use this checklist to start the next Delta Design System Storybook repo cleanly.

## 1) Create repo and baseline

- Create new repo (recommended name: `delta-design-system-v2`).
- Initialize Storybook (`@storybook/html-vite`).
- Copy global scaffolding from current repo:
  - `src/styles/tokens.css`
  - `src/styles/global.css`
  - `.storybook/main.js`
  - `.storybook/preview.js`
- Keep toolbar globals from day one:
  - `colorMode`
  - `spaceMode`
  - `breakpoint`

## 2) Lock process before coding

- Adopt workflow docs as source of truth:
  - `docs/workflows/story-contract.md`
  - `docs/workflows/component-intake-and-docs-workflow.md`
- Adopt docs templates:
  - `docs/templates/component.docs.template.mdx`
  - `docs/templates/foundation.docs.template.mdx`

## 3) Define v2 acceptance criteria

- Story contract enforced:
  - Components: `Default`, `Variants`, `States`, `Playground` (+ justified optional only)
  - Foundations: `Scale`, `Reference`, `Modes` (+ optional `Playground`)
- Docs rule: MDX references named stories only (no ad hoc inline render blocks).
- Accessibility baseline: semantic HTML + keyboard support + ARIA where required.
- Token baseline: no hardcoded design values when a token exists.
- Build baseline: `npm run build-storybook` passes on every merge.

## 4) First sprint scope (recommended)

- Foundations:
  - Colors
  - Typography
  - Spacing
  - Grid
- Atoms (pilot set):
  - Button
  - Input
  - Tabs

Reason: this gives all core token and behavior patterns before migrating the rest.

## 5) Migration strategy

- Migrate by component batches, one PR per component family.
- Keep this repo as reference only; do not dual-maintain features in both repos.
- Port only finalized patterns (avoid copying known messy story surfaces).

## 6) Ready-to-start definition

You are ready to begin implementation when:

- baseline scaffold is copied
- workflow + story contract are present in v2
- first-sprint scope is accepted
- branch protection/test command is decided
