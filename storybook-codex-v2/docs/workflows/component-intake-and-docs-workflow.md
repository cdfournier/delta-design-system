# Component Intake and Docs Workflow

Use this workflow before implementing or refactoring any component.

## Source precedence (documentation work)

When documentation sources disagree, use this order:

1. `delta-standards.md`
2. Figma documentation page outline (headings, section order, figure placement)
3. Figma variables and modes (`get_variable_defs`)
4. Figma component/document nodes (`get_design_context`, `get_screenshot`)
5. HTML exports (supporting copy/reference only; may be stale)

## 1) Intake (before writing code)

- Capture Figma component node and documentation node.
- Parse the Figma documentation page outline first (section order, headings, tables, figures, lists).
- Confirm section naming and ordering against documentation standards (fixed names, Accessibility before Usage, Foundation vs Component Best-practices placement).
- Identify atomic dependencies (icons, links, buttons, content, inputs, etc.).
- List required variants, states, and behaviors.
- Extract token usage (typography, spacing, radius, colors, mode changes).
- Note accessibility requirements (semantic element, keyboard, ARIA, target size).

Deliverables:
- A short implementation contract (API args + required stories)
- A docs outline map copied from Figma documentation structure (reader-facing source of truth)

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
Rule: story names are internal implementation labels, not documentation headings.

## 3) Implementation

- Build semantic HTML first.
- Apply token-based styles from `src/styles/tokens.css`.
- Use rem/px pattern consistently.
- Add transitions only where behavior requires feedback.

## 4) Docs

- Use template from `docs/templates`.
- Build the MDX skeleton to match the Figma documentation outline before writing figure/story content.
- Figma documentation outline is the source of truth for Docs page section order and headings.
- Apply documentation standards while writing the MDX skeleton:
  - fixed section names (no synonyms)
  - `Widescreen` terminology (never `Desktop`)
  - no `h4` inside Do/Don't grids
  - rem / px table value format for numeric specs
- Prefer fixed composition stories in Docs (`Variants`, `States`) over control-derived output.
- Use stories as embedded figures only where the Figma docs page actually needs a figure/table/demo.
- Do not expose internal story-contract labels (for example `Scale`, `Reference`, `Modes`) as reader-facing headings unless the Figma page uses those labels.
- Keep docs lean, but never by collapsing or renaming the Figma documentation structure.

Recommended sequence:
1. Parse Figma/HTML outline
2. Write MDX section skeleton (headings + copy placeholders)
3. Implement only the stories those sections need
4. Fill copy and tables from Figma/HTML source
5. Validate and prune

## 5) Validation and pruning

- Run `npm run build-storybook`.
- Verify functionality in Docs and Canvas.
- Run a terminology/structure check before parity review:
  - `Desktop` → `Widescreen`
  - `Usage guidelines` → `Best practices` (where applicable)
  - `Related` section absent
  - Colors/Typography/Spacing/Border-radius tables use the correct columns
- Remove redundant stories immediately.
- Keep only stories with unique value.

## Definition of done

- Parity acceptable against Figma node.
- Docs page outline matches Figma documentation page outline.
- Docs render correct examples (not accidental/incorrect variants).
- Story set is minimal and intentional.
- Build passes.

## Contract reference

Follow `docs/workflows/story-contract.md` for required story structure, optional-story rules, docs mapping, and deprecation policy.
