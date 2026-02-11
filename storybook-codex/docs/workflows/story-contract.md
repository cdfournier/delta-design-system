# Story Contract

This is the default story and docs contract for the Delta Design System Storybook.

## Component story contract (default)

Required stories (in this order):

1. `Default`
2. `Variants`
3. `States`
4. `Playground`

### Interactive components

For interactive components (`Tabs`, `Input`, `Header`, `Details`, etc.):

- `States` are visual snapshots.
- `Playground` is where real interaction is validated.
- Add optional `Interaction` only if behavior cannot be clearly validated in `Playground`.

## Foundation story contract (default)

Required stories (in this order):

1. `Scale`
2. `Reference`
3. `Modes`

Optional:

4. `Playground` (only when meaningful interaction exists)

## Optional stories (allowed only with justification)

Optional stories are allowed only when they fit one of these categories:

- `Responsive`: behavior materially changes by breakpoint and is not clear in base stories.
- `Composition`: molecule/organism assembly logic is core to component behavior.
- `Parity`: temporary Figma verification story.
- `Accessibility`: explicit keyboard/screen-reader behavior demo.

Rule: each optional story must include a one-line reason in `parameters.docs.description.story`.

## Docs mapping rules

- MDX docs must reference named stories only.
- Do not use ad hoc inline render blocks in MDX.
- Each docs section maps to one canonical story (`Variants`, `States`, etc.).

## Deprecation rules

- If a story is not referenced by docs and not part of the approved contract, remove it in the same PR.
- `Parity` stories may remain for one review cycle only.
- Review cycle duration: `1 pass`.
- No parked stories without explicit expiry/removal intent.

## Light/dark behavior

Light/dark behavior is required for both foundations and components, but it is validated through docs + controls by default (not as a required dedicated story in every component).
