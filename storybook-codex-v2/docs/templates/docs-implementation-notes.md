# Docs Implementation Notes (Lean Pattern)

## 1) Always drive Docs sections from explicit stories

For each docs section (`Variants`, `States`, `Sizes`, etc.), define a dedicated story export in `*.stories.js` with its own `render` function.

Example:

```js
export const Variants = {
  render: () => `...all variant markup for docs...`,
};
```

Then reference it in MDX:

```mdx
<Canvas>
  <Story of={ComponentStories.Variants} />
</Canvas>
```

This is the most reliable pattern for parity docs.

## 2) Keep `Default` and `Playground` separate from docs showcases

- `Default`: single canonical state
- `Playground`: control-driven sandbox
- docs showcases (`Variants`, `States`, etc.): fixed composition stories

Avoid using one highly-arg-driven story for all docs sections.

## 3) Prefer composition stories over ArgsTable-heavy docs

When parity matters, explicit HTML composition in each story is more stable than deriving everything from controls.

## 4) Optional: lock controls per story when needed

If a docs story should not be mutated by controls, add:

```js
parameters: { controls: { disable: true } }
```

Use this on strict parity showcase stories.

## 5) Keep docs lean

Minimum structure:

1. Anatomy
2. Variants
3. States
4. Token tables (Typography, Spacing, Colors)
5. Accessibility
6. Controls (Playground or Default)

Add extra sections only when they add implementation value.

## Workflow reference

See `docs/workflows/component-intake-and-docs-workflow.md` for the pre-build intake and story-pruning pattern.

## Story contract

See `docs/workflows/story-contract.md` for the canonical story structure and pruning rules.
