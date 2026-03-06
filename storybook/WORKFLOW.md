# Delta Storybook Delivery Workflow

This file is the operating contract for this project/thread.

## 1) Source of truth

1. Figma is authoritative.
2. For implementation, use exact instance/component nodes provided for the task.
3. HTML exports are supporting references only.
4. When any source conflicts with Figma, follow Figma.

## 2) Non-negotiable quality rules

1. No inferred UI structure when parity matters.
2. No variant batching. Finish one variant to parity before moving to the next.
3. Storybook chrome/style leakage must be neutralized on every component.
4. No "close enough" transitions between variants or audit phases.
5. Approval triggers immediate commit.

## 3) Required task inputs

Before implementation starts for a component/variant:

1. Figma documentation node link
2. Figma component/instance node link(s)
3. Reference HTML file path (if available)
4. Explicit scope for this pass (example: "widescreen anatomy only")

If any required input is missing, pause and request it.

## 4) Execution loop (strict)

For each scoped variant:

1. Pull Figma `get_design_context` + `get_screenshot` for that exact node.
2. Implement only that node's geometry, typography, assets, and behavior.
3. Validate against checklist in section 5.
4. Report exact deltas (what changed and why).
5. Get approval.
6. Commit immediately.

Do not start next variant before step 6 is complete.

## 5) Parity checklist (must pass)

1. Layout: width, height, padding, gap, radius, alignment.
2. Typography: family, size, line-height, weight, decoration.
3. Color: light and dark tokens/states for all visible elements.
4. Assets/icons: exact node exports or deterministic fallback if export is broken.
5. Storybook isolation: no inherited docs/chrome margins, list spacing, link underlines, etc.
6. Variant placement in docs/stories matches Figma documentation structure.

## 6) Broken asset policy

If Figma export is broken (for example empty SVG groups or unresolved variable strokes):

1. Document the breakage in implementation notes.
2. Use deterministic fallback rendering (inline SVG/CSS) that matches node geometry and color.
3. Keep fallback scoped to the exact affected element.

## 7) Audit phases (remaining backlog)

Execute in this order:

1. Light/dark mode audit
2. Mobile/widescreen audit
3. Storybook Playground audit
4. Code reference refresh and refactor

Each phase is component-by-component with commit-per-approved-slice.

## 8) Git discipline

1. Branch naming: `codex/<milestone-name>`.
2. One milestone scope per branch.
3. Commit only approved files.
4. Push at requested points or milestone end.
5. No unrelated file changes in scoped commits.
6. No amend/rebase/reset unless explicitly requested.

## 9) Communication contract

1. Be direct about blockers and required inputs.
2. State assumptions explicitly.
3. When uncertain, stop and ask before implementing.
4. Recommendations are welcome; hidden assumptions are not.

## 10) Definition of done (per component)

1. All variants match Figma nodes in scope.
2. All four audits pass for that component.
3. Docs/stories structure matches Figma documentation page.
4. Build passes.
5. Approved changes are committed and pushed per workflow.
