# Component Intake and Docs Workflow

Use this workflow before implementing or refactoring any component.

## 1) Intake (before writing code)

- Capture Figma component node and documentation node.
- Identify atomic dependencies (icons, links, buttons, content, inputs, etc.).
- List required variants, states, and behaviors.
- Extract token usage (typography, spacing, radius, colors, mode changes).
- Note accessibility requirements (semantic element, keyboard, ARIA, target size).

Deliverable: a short implementation contract (API args + required stories).

## 2) Contract (define what we will build)

- Component API (`args`) with defaults.
- Required stories only:
  - `Default`
  - `Playground`
  - `Variants` (fixed composition)
  - `States` (fixed composition)
  - Optional `Parity` (only when needed)
- Docs sections mapped to explicit stories.

Rule: avoid duplicate showcase stories that communicate the same thing.

## 3) Implementation

- Build semantic HTML first.
- Apply token-based styles from `src/styles/tokens.css`.
- Use rem/px pattern consistently.
- Add transitions only where behavior requires feedback.

## 4) Docs

- Use template from `docs/templates`.
- Prefer fixed composition stories in Docs (`Variants`, `States`) over control-derived output.
- Keep docs lean: Anatomy, Variants, States, token tables, Accessibility, Controls.

## 5) Validation and pruning

- Run `npm run build-storybook`.
- Verify functionality in Docs and Canvas.
- Remove redundant stories immediately.
- Keep only stories with unique value.

## Definition of done

- Parity acceptable against Figma node.
- Docs render correct examples (not accidental/incorrect variants).
- Story set is minimal and intentional.
- Build passes.

## Contract reference

Follow `docs/workflows/story-contract.md` for required story structure, optional-story rules, docs mapping, and deprecation policy.
