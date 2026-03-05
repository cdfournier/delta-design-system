# Suggested V2 Repo Structure

```text
.storybook/
  main.js
  preview.js

src/
  styles/
    tokens.css
    global.css

  foundations/
    colors/
      colors.css
      colors.js
      colors.stories.js
      colors.docs.mdx
    typography/
    spacing/
    grid/

  components/
    button/
      button.css
      button.js
      button.stories.js
      button.docs.mdx
    input/
    tab/
    ...

  welcome/
    welcome.css
    welcome.js
    welcome.stories.js

docs/
  templates/
    component.docs.template.mdx
    foundation.docs.template.mdx
    docs-implementation-notes.md
  workflows/
    story-contract.md
    component-intake-and-docs-workflow.md
  migration/
    component-migration-order.md
    new-repo-kickoff.md
```

## Branching convention

- Use `codex/*` branch names for implementation work.
- Keep one component/family per branch where possible.

## Commit cadence

- One commit per component migration.
- One separate commit for cross-cutting docs/workflow updates.
