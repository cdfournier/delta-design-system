# The Delta Design System — Storybook Build Brief

## Purpose and philosophy

Figma is the system and tool for the designer. Storybook is the system and tool for the developer. They are two sides of the same coin — two views of the same design system — and they must stay in sync.

**The pipeline is: Figma → Storybook.**

The HTML documentation files are a verified intermediate reference, but Figma is the ultimate source of truth. Where the HTML and Figma diverge, Figma wins. Where Storybook and Figma diverge, Figma wins.

The goal of this Storybook build is not a component library with controls. It is a **living documentation system** — one where every story page mirrors the corresponding Figma component page: same content, same structure, same component samples, same token values, rendered correctly at every breakpoint and in both color modes.

A designer should be able to point to any component page in Figma and a developer should find the exact equivalent in Storybook — same sections, same specs, same rendered examples — with no translation required.

---

## What exists already

The previous Storybook build (`storybook-codex-v2`) established a reasonable foundation:

- `@storybook/html-vite` framework
- `src/components/` organized by component name
- `src/foundations/` for Colors, Typography, Spacing, Grid
- `src/styles/tokens.css` and `src/styles/global.css`
- `preview.js` with toolbar globals for color mode, space mode, and breakpoint
- `@storybook/addon-docs` and `@storybook/addon-a11y`

**Do not carry forward the previous build's story files, CSS files, or token files.** The token values and component specs have been updated and aligned against Figma since that build was created. Start fresh from the structure — not the content.

---

## Critical problems to solve from the start

These are the issues that caused the previous build to fail. They must be addressed architecturally before writing any story content.

### 1. CSS isolation — Storybook chrome vs. story content

Storybook injects global styles into the preview iframe. These styles clash with component and documentation styles. The previous build suffered from constant style bleed in both directions.

**Required solution:**
- Wrap all story documentation content in a scoped container: `.delta-docs`
- All documentation CSS (typography, layout, tables, Do/Don't grids, etc.) must be scoped under `.delta-docs` — never global
- Component styles must also be scoped to their own class names — never rely on element selectors globally
- Strip Storybook's default body/html styling in `preview.js` by explicitly resetting it after injection
- Do not rely on `document.body` or `document.documentElement` for applying Delta styles — use the story wrapper

### 2. Decorator context — iframe vs. manager

The previous `preview.js` decorator set `data-*` attributes on `document.documentElement` and `document.body`. In Storybook, these refer to the **manager frame**, not the **story iframe**. Token-driven CSS applied to the wrong document has no effect on the rendered story.

**Required solution:**
- All `data-*` attribute setting must target the story iframe's document, accessed via the story's own DOM context
- The story wrapper element (not body or html) should carry the `data-color-mode`, `data-space-mode`, and `data-breakpoint` attributes
- CSS custom property overrides for dark mode and widescreen mode must cascade from that wrapper element

### 3. Responsive token values — mobile default, not widescreen

The previous build rendered everything at widescreen token values because the browser viewport defaulted to a wide size. Nearly every component and token in this system is mobile-first, with widescreen values applied via media query.

**Required solution:**
- Default story viewport: **375px (Mobile)**
- Named viewport presets in Storybook toolbar: Mobile (375px), Tablet (768px), Widescreen (1280px)
- All responsive CSS uses `@media (min-width: 80rem)` (rem, never px) for the widescreen breakpoint
- Token CSS custom properties are declared at mobile values in `:root`, with widescreen overrides inside the media query
- Stories must be reviewed at each viewport to verify correct token resolution

### 4. Token delivery — no hardcoded values

No component or documentation CSS may contain hardcoded color, spacing, typography, or border-radius values. Every value must be a CSS custom property reference driven by the token system.

**Required solution:**
- `tokens.css` defines all CSS custom properties at `:root` level for mobile, with `@media (min-width: 80rem)` overrides for widescreen
- Dark mode tokens are applied via `[data-color-mode="dark"]` attribute selector on the story wrapper — never via `@media (prefers-color-scheme: dark)`
- Token names in CSS use hyphens (e.g. `--text-default`, `--spacing-md`) — slashes are used only in prose/table labels (e.g. `text/default`, `spacing/md`)

---

## Token system

### Responsive scaling

Tokens scale between two breakpoints:

| Breakpoint | Trigger |
|------------|---------|
| Mobile/Tablet | Default (no media query) |
| Widescreen | `@media (min-width: 80rem)` |

**1440px is a Figma frame size only — it is not a code breakpoint.**

### Spacing token scale

| Token | Mobile/Tablet | Widescreen |
|-------|--------------|------------|
| xs | 0.125rem / 2px | 0.25rem / 4px |
| sm | 0.25rem / 4px | 0.5rem / 8px |
| md | 0.5rem / 8px | 1rem / 16px |
| lg | 0.75rem / 12px | 1.5rem / 24px |
| xl | 1rem / 16px | 2rem / 32px |
| xxl | 1.25rem / 20px | 2.5rem / 40px |
| xxxl | 1.5rem / 24px | 3rem / 48px |
| xxxxxl | 2rem / 32px | 4rem / 64px |

### Border-radius token scale

| Token | Mobile/Tablet | Widescreen |
|-------|--------------|------------|
| border-radius/sm | 0.25rem / 4px | 0.5rem / 8px |
| border-radius/md | 0.5rem / 8px | 1rem / 16px |
| border-radius/round | 6.25rem / 100px | 6.25rem / 100px (fixed) |
| button/border-radius | 2rem / 32px | 2rem / 32px (fixed) |

### Known color token behaviors

| Token | Light mode | Dark mode |
|-------|-----------|-----------|
| text/default | #000000 (global/black) | #FFFFFF (global/white) |
| text/inverse | #FFFFFF (global/white) | #000000 (global/black) |
| text/link | #FF5247 (brand/primary) | #FFFFFF (global/white) |
| brand/primary | #FF5247 | #FF5247 (mode-invariant) |
| brand/secondary | #003442 | #003442 (mode-invariant) |
| global/white | #FFFFFF | #FFFFFF (mode-invariant) |
| global/black | #000000 | #000000 (mode-invariant) |
| page/background | #FFFFFF (global/white) | #01232D (brand/secondary-dark) |
| section/background | #EEEEEE | #003442 (brand/secondary) |

---

## Document and story structure

### Component hierarchy

```
Foundations: Colors, Typography, Spacing, Grid
Atoms:       Badge, Blockquote, Button, Chip, Icon, Input, Link, List
Molecules:   Card, Content, Details, Feedback, Fieldset, Message, Pagination, Table
Organisms:   Banner, Footer, Header, Tabs
```

### Story page structure

Each story page is a full documentation page — not just a component render. The structure mirrors the HTML documentation exactly:

```
h1: Component name
p:  Brief description

Anatomy
Variants        (with live rendered examples)
States          (with live rendered examples)
Typography      (table: Attribute | Token | Mobile/Tablet | Widescreen)
Spacing         (table: Attribute | Token | Mobile/Tablet | Widescreen)
Border-radius   (table: Attribute | Token | Mobile/Tablet | Widescreen)
Colors          (table: Attribute | Token | Light mode | Dark mode)
Accessibility
Usage
  When to use
  When not to use
  Content guidelines
  Placement
  Best practices (Do/Don't grid)
Code reference
  HTML
  CSS
  JavaScript (only if required)
  Design tokens reference
Resources
```

Foundation story pages follow the same principle — full documentation page, not just a specimen.

### Live component samples

Within Anatomy, Variants, and States sections, items may include a live rendered example of the component — not a screenshot, not a placeholder. The component renders using actual CSS custom properties from the token system, so switching viewport or color mode in the toolbar updates the rendered example in real time.

Anatomy samples are optional — include them when they genuinely aid understanding of the component's structure. Omit them when the element list is self-explanatory.

### Section framework — fixed structure, flexible presence

The section order and section names are non-negotiable. What is flexible is whether a section appears at all.

**A section may be omitted when:**
- The component genuinely has no content for it (e.g. a purely decorative component with no interactive states omits States)
- Typography is fully delegated to another component (e.g. Cards delegate body text to the Content component — omit Typography, add a cross-reference)
- The component has no border-radius (omit Border-radius entirely)

**Embedded component specs may be replaced with a cross-reference:**
> "Checkbox styles follow the Input component — see Inputs."

Document only what is unique to the container. Do not duplicate specs that belong to an embedded component.

**What never varies:**
- The order of sections
- The names of sections — see the Section naming table above
- The presence of Anatomy, Usage, Accessibility, Code reference, and Resources in every story

No section outside this framework should be added. No section name should be varied from the fixed list.

### Section naming — fixed, do not vary

| Section | Correct name |
|---------|-------------|
| Component specs | Anatomy |
| Visual/structural options | Variants |
| Interactive states | States |
| Type specs | Typography |
| Spacing specs | Spacing |
| Corner radius specs | Border-radius |
| Color specs | Colors |
| A11y guidance | Accessibility |
| How to use | Usage |
| Do/Don't heading | Best practices |
| Implementation | Code reference |
| Token listing | Design tokens reference |
| Further reading | Resources |

---

## Storybook configuration

### Framework

`@storybook/html-vite` — plain HTML stories with MDX for documentation pages.

### Addons

- `@storybook/addon-docs` — MDX documentation support
- `@storybook/addon-a11y` — accessibility audit panel
- `@storybook/addon-viewport` — viewport presets (configured, not default)

### Viewport presets

The default viewport is set to 375px (Mobile). This affects how stories render in the Storybook preview panel when first opened — it ensures mobile token values are active by default, matching how Figma documents components. This has no effect on end users of the design system; it is purely a reviewer experience setting so the first thing seen in Storybook matches the first thing seen in Figma. Reviewers switch the viewport up intentionally to verify widescreen behavior.

```js
viewports: {
  mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
  tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
  widescreen: { name: 'Widescreen', styles: { width: '1280px', height: '900px' } },
}
defaultViewport: 'mobile'
```

### Toolbar globals

Three toolbar controls, matching the previous build's intent but implemented correctly:

1. **Color mode** — `light` (default) / `dark`
2. **Breakpoint** — `mobile` (default) / `tablet` / `widescreen`

The breakpoint toolbar control switches the story wrapper's `data-breakpoint` attribute, which drives which token values are active. This is separate from the viewport preset — both should be switched together when reviewing at a specific breakpoint.

### Story sort order

```
Welcome
Foundations: Colors → Typography → Spacing → Grid
Atoms: (alphabetical)
Molecules: (alphabetical)
Organisms: (alphabetical)
```

Within each story, the Documentation page sorts before any named stories.

---

## CSS architecture

### File structure

```
src/
  styles/
    tokens.css        — all CSS custom properties, mobile-first with widescreen overrides
    docs.css          — documentation page layout, scoped to .delta-docs
    reset.css         — minimal reset, scoped to story wrapper only
  components/
    [name]/
      [name].css      — component styles, scoped to component class
      [name].stories.js (or .mdx)
  foundations/
    [name]/
      [name].stories.js (or .mdx)
```

### tokens.css structure

```css
:root {
  /* Mobile/Tablet values — all tokens */
  --spacing-xs: 0.125rem;
  --spacing-sm: 0.25rem;
  /* ... all tokens at mobile scale ... */
}

@media (min-width: 80rem) {
  :root {
    /* Widescreen overrides — only tokens that scale */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    /* ... */
  }
}

[data-color-mode="dark"] {
  /* Dark mode color overrides */
  --text-default: #FFFFFF;
  --page-background: #01232D;
  /* ... */
}
```

### docs.css — documentation page styles

All documentation page styles must be scoped under `.delta-docs`. This is the single most important rule for preventing style clash with Storybook chrome.

```css
.delta-docs {
  font-family: 'Montserrat', sans-serif;
  /* ... */
}

.delta-docs h1 { /* ... */ }
.delta-docs h2 { /* ... */ }
.delta-docs table { /* ... */ }
.delta-docs .do-dont-grid { /* ... */ }
/* etc. */
```

The `.delta-docs` wrapper is the outermost element of every story documentation page. Nothing in `docs.css` uses a bare element selector.

---

## Typography reference

The documentation pages use two typefaces:

- **Body:** Montserrat (Google Fonts) — weights 400 and 700
- **Headings:** Ovo (Google Fonts) — weight 400

Both are loaded via Google Fonts in the Storybook preview head. Do not use system fonts for documentation headings.

### Heading scale (documentation pages only)

| Level | Size | Use |
|-------|------|-----|
| h1 | 48px / 3rem | Page title |
| h2 | 32px / 2rem | Major sections |
| h3 | 24px / 1.5rem | Subsections |
| h4 | 18px / 1.125rem | Sub-subsections — use sparingly |

These are documentation page sizes, not component token values.

---

## Terminology — use these terms exactly

| Use this | Not this |
|----------|----------|
| Widescreen | Desktop, Large, Wide |
| Mobile | Phone, Small |
| Tablet | Medium |
| Active / Pressed | Active, Pressed (alone) |
| Default | Normal, Base |
| Hover | Mouseover |
| Focus | Focused |
| Disabled | Inactive |
| Invalid | Error |
| border-radius | corner radius |
| line-height | leading |
| letter-spacing | tracking |

**American English throughout:** color (not colour), behavior (not behaviour).

---

## Build sequence

Build in this order. Complete each phase before moving to the next. Within each story, follow the per-story sequence below — do not skip steps.

### Phase 1 — Infrastructure
1. `tokens.css` — complete token system, mobile-first, widescreen overrides, dark mode
2. `reset.css` — minimal scoped reset
3. `docs.css` — full documentation page styles, scoped to `.delta-docs`
4. `preview.js` — toolbar globals, viewport presets, decorator (correctly targeting story iframe)
5. `main.js` — framework, addons, story glob

Verify that color mode toggling, viewport switching, and CSS isolation are all working correctly before writing any story content. Do not proceed to Phase 2 until Phase 1 is confirmed.

### Phase 2 — Foundations
Colors, Typography, Spacing, Grid

### Phase 3 — Atoms
Badge, Blockquote, Button, Chip, Icon, Input, Link, List

### Phase 4 — Molecules
Card, Content, Details, Feedback, Fieldset, Message, Pagination, Table

### Phase 5 — Organisms
Banner, Footer, Header, Tabs

### Phase 6 — Playground controls
Storybook args, controls, and interactive knobs are added only after all stories are complete and verified. This is a separate phase — do not add controls during the initial story build. Getting the documentation right comes first.

---

## Per-story build sequence

Every story — foundation or component — is built in two steps. Do not combine them.

### Step 1 — Structure and copy
Build the complete documentation page with:
- All sections in correct order, matching the HTML documentation structure
- All prose content: descriptions, anatomy, variants, states, usage guidance, accessibility notes, best practices
- All tables with correct token names and values (Typography, Spacing, Border-radius, Colors)
- Code reference blocks (HTML, CSS, Design tokens reference)
- Resources section
- **Placeholder containers** where live component samples will go — clearly marked, visually distinct (e.g. a labeled grey box), but no rendered components yet

**Stop here. Review and approve Step 1 before proceeding.**

The goal is to confirm that all content is correct, complete, and properly structured before any rendering complexity is introduced. A broken component sample should never obscure whether the surrounding documentation is right.

### Step 2 — Figures and samples
Replace placeholder containers with live rendered component examples:
- Each variant shown as a live render using actual CSS custom properties
- Each state shown as a live render
- Verify every sample at Mobile viewport (default) and Widescreen viewport
- Verify every sample in Light mode (default) and Dark mode
- Confirm token values are resolving correctly — not hardcoded, not stuck at widescreen defaults

**Stop here. Review and approve Step 2 before moving to the next story.**

---

## What success looks like

- A designer opens Figma to the Buttons component page and a developer opens Storybook to Atoms/Buttons. The content, structure, sections, and token values are identical.
- Switching the Storybook toolbar to Dark mode changes the story to dark mode. Switching to Mobile shows mobile token values. Switching to Widescreen shows widescreen token values.
- No Storybook chrome styles bleed into the story content. No story styles bleed into the Storybook chrome.
- Every CSS value in every story traces back to a token. No hardcoded colors, spacing, or typography values anywhere.
- The viewport defaults to 375px (Mobile). Reviewers switch up intentionally — widescreen is not the default.

---

## Reference files

### delta-standards.md
The authoritative standards reference for naming conventions, table formats, section structure, and terminology. Read it at the start of every session. When in doubt, it wins.

### Per-story HTML files
For each story, the corresponding HTML documentation file is provided as a session input — it is not a standing repo resource. It is the verified content reference for that story: section structure, prose, table values, token names, and code examples.

Where any value in the HTML file conflicts with what Figma specifies, Figma wins. The HTML files have been carefully audited against Figma and should be reliable, but they are a reference, not the source of truth.

Do not assume HTML files exist for stories not yet in progress. Work only from the file provided for the current story.

---

## Appendix A — Component template (corrected)

The following is the authoritative component documentation template. Use it as the structural reference for every component story page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Component Name] - The Delta Design System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Ovo&display=swap" rel="stylesheet">
    <style>
        :root {
            --color-primary: #FF5247;
            --color-primary-dark: #B22E28;
            --color-secondary: #003442;
            --color-secondary-dark: #01232D;
            --color-black: #000000;
            --color-white: #FFFFFF;
            --color-gray-dark: #919191;
            --color-gray-medium: #CCCCCC;
            --color-gray-light: #EEEEEE;

            --font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --font-family-heading: 'Ovo', Georgia, serif;
            --max-width: 800px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: var(--font-family);
            line-height: 1.6;
            color: var(--color-black);
            background-color: var(--color-white);
            padding: 32px 24px;
        }

        .container { max-width: var(--max-width); margin: 0 auto; }

        h1 { font-family: var(--font-family-heading); font-size: 48px; font-weight: 400; line-height: 1.2; margin-bottom: 16px; color: var(--color-black); }
        h2 { font-family: var(--font-family-heading); font-size: 32px; font-weight: 400; line-height: 1.3; margin-top: 48px; margin-bottom: 16px; color: var(--color-black); }
        h3 { font-family: var(--font-family-heading); font-size: 24px; font-weight: 400; line-height: 1.4; margin-top: 32px; margin-bottom: 12px; color: var(--color-black); }
        h4 { font-family: var(--font-family-heading); font-size: 18px; font-weight: 400; line-height: 1.4; margin-top: 24px; margin-bottom: 8px; color: var(--color-black); }

        p { font-size: 16px; line-height: 1.75; margin-bottom: 16px; }
        strong { font-weight: 700; }
        a { color: var(--color-primary); text-decoration: underline; }
        a:hover { color: var(--color-secondary); }
        ul, ol { margin-left: 24px; margin-bottom: 16px; }
        li { margin-bottom: 8px; line-height: 1.75; }

        code { font-family: 'Monaco', 'Courier New', monospace; font-size: 14px; background-color: var(--color-gray-light); padding: 2px 6px; border-radius: 3px; }
        pre { background-color: var(--color-gray-light); padding: 16px; border-radius: 4px; overflow-x: auto; margin-bottom: 24px; }
        pre code { background-color: transparent; padding: 0; }

        table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        th, td { text-align: left; padding: 12px; border-bottom: 1px solid var(--color-gray-medium); }
        th { font-weight: 700; background-color: var(--color-gray-light); }

        hr { border: none; border-top: 1px solid var(--color-gray-medium); margin: 48px 0; }

        .component-demo { background-color: var(--color-gray-light); padding: 32px; border-radius: 4px; margin: 24px 0; }

        .do-dont-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
        @media (max-width: 48rem) { .do-dont-grid { grid-template-columns: 1fr; } }
        .do-section { border-left: 4px solid #007000; padding-left: 16px; }
        .dont-section { border-left: 4px solid #C00C00; padding-left: 16px; }
        .do-section h3, .dont-section h3 { margin-top: 0; margin-bottom: 16px; }
        .do-section p strong, .dont-section p strong { display: block; margin-bottom: 4px; }
    </style>
</head>
<body>
    <div class="container">

        <h1>[Component Name]</h1>
        <p>[Brief 1–2 sentence description of what this component is and its primary purpose.]</p>

        <hr>

        <h2>Anatomy</h2>
        <!-- Anatomy lists the named elements of the component with strong labels.
             A live rendered sample may be included when it genuinely aids understanding.
             Omit the sample when it would just be an empty grey box. -->
        <p>[Component name] consists of:</p>
        <ul>
            <li><strong>[Element name]:</strong> [Description]</li>
            <li><strong>[Element name]:</strong> [Description]</li>
            <li><strong>[Element name] (optional):</strong> [Description]</li>
        </ul>

        <hr>

        <!-- VARIANTS
             Simple (2–4 variants, minimal differences): use an unordered list.
             Complex (variants with meaningful structural or visual differences): use h3 subsections.
             A component-demo div may be included when a visual example genuinely adds value.
             Omit component-demo divs when they would just be empty grey boxes. -->

        <h2>Variants</h2>
        <p>[Brief description of what varies in this component.]</p>
        <ul>
            <li><strong>[Variant name] (default):</strong> [Description and when to use.]</li>
            <li><strong>[Variant name]:</strong> [Description and when to use.]</li>
        </ul>

        <hr>

        <!-- STATES
             Only include states that actually apply to this component.
             Omit states that don't apply — do not include them as empty placeholders.
             Common states: Default, Hover, Active / Pressed, Focus, Disabled, Invalid, Valid, Loading. -->

        <h2>States</h2>
        <p>[Optional intro about how states work for this component.]</p>

        <h3>Default</h3>
        <p>[Description of the default/initial state.]</p>

        <h3>Hover</h3>
        <p>[Description of hover state and what changes visually.]</p>

        <h3>Active / Pressed</h3>
        <p>[Description of active/pressed state.]</p>

        <h3>Focus</h3>
        <p>[Description of focus state.]</p>

        <h3>Disabled</h3>
        <p>[Description of disabled state — visual treatment and behavior.]</p>

        <hr>

        <!-- TYPOGRAPHY
             Table columns: Attribute | Token | Mobile/Tablet | Widescreen
             Row labels: CSS property name format — font-size, line-height (lowercase, hyphenated)
             Omit font-weight and font-family — never documented.
             Omit this section entirely if the component delegates typography to another component. -->

        <h2>Typography</h2>
        <table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Token</th>
                    <th>Mobile/Tablet</th>
                    <th>Widescreen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[e.g. font-size]</td>
                    <td><code>[token/name]</code></td>
                    <td>[X]rem / [X]px</td>
                    <td>[X]rem / [X]px</td>
                </tr>
                <tr>
                    <td>[e.g. line-height]</td>
                    <td><code>[token/name]</code></td>
                    <td>[X]rem / [X]px</td>
                    <td>[X]rem / [X]px</td>
                </tr>
            </tbody>
        </table>

        <hr>

        <!-- SPACING
             Table columns: Attribute | Token | Mobile/Tablet | Widescreen
             Row labels: CSS property name format — padding, gap (lowercase, hyphenated)
             Multiple sides: padding-top, padding-bottom (commas, not slashes)
             Do NOT include width, height, min/max dimensions, or border-radius. -->

        <h2>Spacing</h2>
        <table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Token</th>
                    <th>Mobile/Tablet</th>
                    <th>Widescreen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[e.g. padding, padding-top, padding-bottom, gap]</td>
                    <td><code>[token/name]</code></td>
                    <td>[X]rem / [X]px</td>
                    <td>[X]rem / [X]px</td>
                </tr>
            </tbody>
        </table>

        <hr>

        <!-- BORDER-RADIUS
             Table columns: Attribute | Token | Mobile/Tablet | Widescreen
             Use (fixed) annotation for values that do not scale.
             Prepend element name when disambiguation needed: Container border-radius
             Omit this section entirely if the component has no border-radius. -->

        <h2>Border-radius</h2>
        <table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Token</th>
                    <th>Mobile/Tablet</th>
                    <th>Widescreen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[border-radius, or e.g. Container border-radius]</td>
                    <td><code>[token/name]</code></td>
                    <td>[X]rem / [X]px</td>
                    <td>[X]rem / [X]px</td>
                </tr>
            </tbody>
        </table>

        <hr>

        <!-- COLORS
             Table columns: Attribute | Token | Light mode | Dark mode
             Format: #HEXVAL (alias name) — include alias only when it differs from the token name.
             Show same-value colors in both columns — do not use "mode-invariant" language.
             Note any accessibility implications of dark mode color changes. -->

        <h2>Colors</h2>
        <table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Token</th>
                    <th>Light mode</th>
                    <th>Dark mode</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[e.g. background-color, color, border-color]</td>
                    <td><code>[token/name]</code></td>
                    <td>#HEXVAL (alias name)</td>
                    <td>#HEXVAL (alias name)</td>
                </tr>
            </tbody>
        </table>

        <p><strong>Light/Dark mode:</strong> [Explain how colors change between modes.]</p>

        <hr>

        <!-- ACCESSIBILITY
             Include only subsections that apply.
             Standard subsections: Keyboard navigation, Screen readers, ARIA attributes, Focus management, Color contrast. -->

        <h2>Accessibility</h2>

        <h3>Keyboard navigation</h3>
        <ul>
            <li><strong>Tab:</strong> [Action]</li>
            <li><strong>Shift + Tab:</strong> [Action]</li>
            <li><strong>Enter:</strong> [Action]</li>
            <li><strong>Space:</strong> [Action]</li>
        </ul>

        <h3>Screen readers</h3>
        <p>[Guidance on semantic HTML requirements and screen reader behavior.]</p>

        <h3>ARIA attributes</h3>
        <ul>
            <li><strong>aria-label:</strong> [When and how to use]</li>
            <li><strong>[Other attribute]:</strong> [When and how to use]</li>
        </ul>

        <h3>Focus management</h3>
        <p>[Guidance on focus indicators and focus order.]</p>

        <h3>Color contrast</h3>
        <p>[Color contrast requirements in light and dark modes.]</p>

        <hr>

        <h2>Usage</h2>

        <h3>When to use</h3>
        <ul>
            <li>[Use case]</li>
        </ul>

        <h3>When not to use</h3>
        <ul>
            <li>[Avoid case — explain what to use instead]</li>
        </ul>

        <h3>Content guidelines</h3>
        <ul>
            <li><strong>[Guideline]:</strong> [Explanation]</li>
        </ul>

        <h3>Placement</h3>
        <p>[Guidance on where and how to position this component.]</p>

        <h3>Best practices</h3>
        <div class="do-dont-grid">
            <div class="do-section">
                <h3>Do</h3>
                <p><strong>[Practice headline]</strong></p>
                <p>[Explanation.]</p>
                <p><strong>[Practice headline]</strong></p>
                <p>[Explanation.]</p>
            </div>
            <div class="dont-section">
                <h3>Don't</h3>
                <p><strong>[Anti-pattern headline]</strong></p>
                <p>[Explanation.]</p>
                <p><strong>[Anti-pattern headline]</strong></p>
                <p>[Explanation.]</p>
            </div>
        </div>

        <hr>

        <h2>Code reference</h2>

        <h3>HTML</h3>
        <pre><code>&lt;!-- Basic example --&gt;
[HTML code example]

&lt;!-- [Variant or state] --&gt;
[HTML code example]</code></pre>

        <h3>CSS</h3>
        <pre><code>/* Base styles */
.[component-class] {
  [property]: var(--[token]);
}

/* [Variant or modifier] */
.[component-class].[modifier] {
  [property]: var(--[token]);
}

/* Widescreen */
@media (min-width: 80rem) {
  .[component-class] {
    [property]: var(--[token]);
  }
}</code></pre>

        <!-- Include JavaScript only if the component requires JS for functionality. -->

        <h3>Design tokens reference</h3>
        <pre><code>/* Typography */
--token-name    Mobile: Xrem / Xpx   →   Widescreen: Xrem / Xpx

/* Spacing */
--token-name    Mobile: Xrem / Xpx   →   Widescreen: Xrem / Xpx

/* Border-radius */
--token-name    Mobile: Xrem / Xpx   →   Widescreen: Xrem / Xpx

/* Colors */
--token-name    Light: #HEXVAL   Dark: #HEXVAL</code></pre>

        <hr>

        <h2>Resources</h2>
        <ul>
            <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
            <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
            <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
            <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        </ul>

    </div>
</body>
</html>
```

---

## Appendix B — Foundation template (corrected)

The following is the authoritative foundation documentation template. Use it as the structural reference for every foundation story page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Foundation Name] - The Delta Design System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Ovo&display=swap" rel="stylesheet">
    <style>
        :root {
            --color-primary: #FF5247;
            --color-primary-dark: #B22E28;
            --color-secondary: #003442;
            --color-secondary-dark: #01232D;
            --color-black: #000000;
            --color-white: #FFFFFF;
            --color-gray-dark: #919191;
            --color-gray-medium: #CCCCCC;
            --color-gray-light: #EEEEEE;

            --font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --font-family-heading: 'Ovo', Georgia, serif;
            --max-width: 800px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: var(--font-family);
            line-height: 1.6;
            color: var(--color-black);
            background-color: var(--color-white);
            padding: 32px 24px;
        }

        .container { max-width: var(--max-width); margin: 0 auto; }

        h1 { font-family: var(--font-family-heading); font-size: 48px; font-weight: 400; line-height: 1.2; margin-bottom: 16px; color: var(--color-black); }
        h2 { font-family: var(--font-family-heading); font-size: 32px; font-weight: 400; line-height: 1.3; margin-top: 48px; margin-bottom: 16px; color: var(--color-black); }
        h3 { font-family: var(--font-family-heading); font-size: 24px; font-weight: 400; line-height: 1.4; margin-top: 32px; margin-bottom: 12px; color: var(--color-black); }
        h4 { font-family: var(--font-family-heading); font-size: 18px; font-weight: 400; line-height: 1.4; margin-top: 24px; margin-bottom: 8px; color: var(--color-black); }

        p { font-size: 16px; line-height: 1.75; margin-bottom: 16px; }
        strong { font-weight: 700; }
        a { color: var(--color-primary); text-decoration: underline; }
        a:hover { color: var(--color-secondary); }
        ul, ol { margin-left: 24px; margin-bottom: 16px; }
        li { margin-bottom: 8px; line-height: 1.75; }

        code { font-family: 'Monaco', 'Courier New', monospace; font-size: 14px; background-color: var(--color-gray-light); padding: 2px 6px; border-radius: 3px; }
        pre { background-color: var(--color-gray-light); padding: 16px; border-radius: 4px; overflow-x: auto; margin-bottom: 24px; }
        pre code { background-color: transparent; padding: 0; }

        table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        th, td { text-align: left; padding: 12px; border-bottom: 1px solid var(--color-gray-medium); }
        th { font-weight: 700; background-color: var(--color-gray-light); }

        hr { border: none; border-top: 1px solid var(--color-gray-medium); margin: 48px 0; }

        .component-demo { background-color: var(--color-gray-light); padding: 32px; border-radius: 4px; margin: 24px 0; }

        .do-dont-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
        @media (max-width: 48rem) { .do-dont-grid { grid-template-columns: 1fr; } }
        .do-section { border-left: 4px solid #007000; padding-left: 16px; }
        .dont-section { border-left: 4px solid #C00C00; padding-left: 16px; }
        .do-section h3, .dont-section h3 { margin-top: 0; margin-bottom: 16px; }
        .do-section p strong, .dont-section p strong { display: block; margin-bottom: 4px; }
    </style>
</head>
<body>
    <div class="container">

        <h1>[Foundation Name]</h1>
        <p>[Brief 1–2 sentence description of this foundation and its role in the design system.]</p>

        <hr>

        <!-- Section name varies by document: e.g. "Philosophy", "Type system", "Spacing system", "Grid system" -->
        <h2>[Overview / Philosophy section]</h2>
        <p>[Explain the principles and thinking behind this foundation.]</p>

        <!-- Add h3 subsections as needed. Use component-demo when a visual example adds real value. -->
        <h3>[Subsection]</h3>
        <p>[Content.]</p>

        <div class="component-demo">
            [Visual example or specimen — use only when it genuinely adds value]
        </div>

        <hr>

        <!-- Section name varies: e.g. "Color palette", "Type scale", "Spacing scale", "Grid structure"
             Tables in foundation documents show: token name, value(s), and notes or usage context.
             Use the rem / px (token) format for all numeric values.
             Column structure varies by foundation — define what makes sense for each. -->
        <h2>[System / Palette / Scale section]</h2>
        <p>[Introduce the system — what it contains, how it is organized, and how to use it.]</p>

        <table>
            <thead>
                <tr>
                    <th>[Token / Name]</th>
                    <th>[Value / Mobile]</th>
                    <th>[Widescreen]</th>
                    <th>[Notes / Usage]</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>[token/name]</code></td>
                    <td>[Xrem / Xpx]</td>
                    <td>[Xrem / Xpx]</td>
                    <td>[Notes]</td>
                </tr>
            </tbody>
        </table>

        <h3>[Subsection — e.g. Global tokens, Semantic tokens, Component tokens]</h3>
        <p>[Content.]</p>

        <hr>

        <h2>Accessibility</h2>
        <p>[Accessibility implications of this foundation — contrast ratios, legibility, motion, etc.]</p>

        <!-- Include only subsections that apply. -->
        <h3>[Relevant subsection — e.g. Color contrast, Legibility, Responsive behavior]</h3>
        <p>[Content.]</p>

        <hr>

        <h2>Usage</h2>
        <p>[Introduce usage guidance for this foundation.]</p>

        <h3>When to use</h3>
        <ul>
            <li>[Guidance point]</li>
        </ul>

        <h3>When not to use</h3>
        <ul>
            <li>[Avoid case — explain what to do instead]</li>
        </ul>

        <h3>[Additional subsections as needed — e.g. Combining values, Responsive behavior]</h3>
        <p>[Content.]</p>

        <hr>

        <h2>Best practices</h2>
        <div class="do-dont-grid">
            <div class="do-section">
                <h3>Do</h3>
                <p><strong>[Practice headline]</strong></p>
                <p>[Explanation.]</p>
                <p><strong>[Practice headline]</strong></p>
                <p>[Explanation.]</p>
            </div>
            <div class="dont-section">
                <h3>Don't</h3>
                <p><strong>[Anti-pattern headline]</strong></p>
                <p>[Explanation.]</p>
                <p><strong>[Anti-pattern headline]</strong></p>
                <p>[Explanation.]</p>
            </div>
        </div>

        <hr>

        <h2>Design tokens reference</h2>
        <p>[Brief intro — what tokens this foundation defines and how they are structured.]</p>

        <pre><code>/* [Token group name] */
--token-name    Mobile: Xrem / Xpx   →   Widescreen: Xrem / Xpx
--token-name    Mobile: Xrem / Xpx   →   Widescreen: Xrem / Xpx

/* [Token group name] */
--token-name    Light: #HEXVAL   Dark: #HEXVAL</code></pre>

        <hr>

        <h2>Resources</h2>
        <ul>
            <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
            <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
            <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
            <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        </ul>

    </div>
</body>
</html>
```
