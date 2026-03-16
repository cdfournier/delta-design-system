# The Delta Design System — Documentation Standards

This document is the authoritative reference for all documentation in The Delta Design System. Upload it at the start of any documentation session. When in doubt, this file wins.

---

## Source of Truth

**Figma is always the source of truth for component specs, token values, and color values.** JSON token exports and older HTML documents may be stale. Always verify values directly from Figma when writing or updating documentation. Use the Figma MCP tools to pull variable definitions and design context from component nodes.

---

## Figma Variable Modes — Verification Workflow

**Always verify token values across all mode contexts.** Figma variables can have different resolved values depending on the node context (mobile vs. widescreen) and mode (light vs. dark). A single `get_variable_defs` call on a component instance only shows one mode — you must query multiple contexts to capture the complete token behavior.

### Critical principle

**When documenting a component, document the complete token system — not just what appears in one instance or context.** The component instance is a window into the underlying design tokens. The documentation must explain the full token behavior across all modes and breakpoints.

### Required workflow for every component

1. **Call `get_variable_defs` on the component node** (e.g. `280-1734`)
   - This typically shows mobile/base mode values
   - Example: `small/font-size` resolves to `12`

2. **Call `get_variable_defs` on the document node** (e.g. `1113-23112`)
   - This typically shows widescreen mode values
   - Example: `small/font-size` resolves to `20`

3. **Compare the results** — identify which tokens have mode-specific variants
   - If values differ, the token is responsive and must be documented with both values
   - If values match, verify whether the token is truly fixed or if you need to check additional mode contexts

4. **Document the full token range** — never assume a token is "fixed" without cross-mode verification
   - ✓ Correct: `small/font-size` scales from 0.75rem / 12px (mobile) to 1.25rem / 20px (widescreen)
   - ✗ Wrong: `small/font-size` is 0.75rem / 12px (this only captures one mode)

### Tokens that commonly have mode variants

- **Typography tokens** (`small/font-size`, `fine/font-size`, `p/font-size`, `h2/font-size`, etc.)
  - Often scale from mobile to widescreen
  - Example: `small` is 12px mobile → 20px widescreen

- **Spacing tokens** (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxxl`)
  - Typically double from mobile to widescreen
  - Example: `sm` is 4px mobile → 8px widescreen

- **Component-specific tokens** (`components/feedback/height`, `components/table/font-size`, etc.)
  - May have custom scaling patterns
  - Example: `components/feedback/height` is 4px mobile → 12px widescreen (3x scale)

- **Border-radius tokens** (`border-radius/sm`, `border-radius/md`, `border-radius/lg`)
  - Typically double from mobile to widescreen
  - Example: `border-radius/sm` is 4px mobile → 8px widescreen

- **Color tokens** (`text/default`, `link/default`, `background/surface`, etc.)
  - Often have light mode and dark mode variants
  - Example: `text/default` is #000000 (light) → #FFFFFF (dark)

### Common documentation errors to avoid

❌ **Assuming a token is fixed without verification**
- Querying only the component node and documenting those values as universal
- Missing responsive scaling behavior entirely

❌ **Documenting only what you see in one Figma frame**
- The 1440px artboard shows widescreen values, not mobile values
- The component instance may show mobile values, not widescreen values

❌ **Relying on a single `get_variable_defs` call**
- One call captures one mode context only
- You need both component node AND document node to see the full picture

❌ **Ignoring token aliasing and references**
- **CRITICAL:** A token like `components/input/checkbox/font-size` might reference `p/font-size` which DOES scale
- If a token doesn't appear in widescreen `get_variable_defs` output, it doesn't mean it's fixed - it might alias to another token
- You must trace the token chain: if `components/input/checkbox/font-size` → `p/font-size`, and `p/font-size` scales from 16px → 24px, then the checkbox font-size scales too
- **ALWAYS verify in the actual Figma variables panel** - don't just rely on the JSON dump

✅ **Correct approach: Query both contexts, trace token references, verify in Figma UI**
- Component node → mobile values
- Document node → widescreen values
- Trace any token aliases (e.g., `components/X` → `p/font-size`)
- When in doubt, check the Figma variables panel to see the actual resolved values
- Documentation → full responsive range with both endpoints

### Why this matters

Typography, spacing, and other design tokens scale responsively to create appropriate hierarchy and density at different viewport sizes. If documentation only captures mobile values (or only widescreen values), implementers will build components that don't scale correctly, breaking the responsive design system.

**Every token reference in documentation must trace back to its complete definition across all relevant modes.**

---

## Document Types

There are two document types — **Foundation** and **Component** — each with its own HTML template.

**Foundation documents** cover the design system's core building blocks:
- Colors, Typography, Spacing, Grid

Use `foundation_template.html` as the starting point for these documents.

**Component documents** cover UI components organized into three levels:
- Atoms: Badge, Blockquote, Button, Chip, Icon, Input, Link, List
- Molecules: Card, Content, Details, Feedback, Fieldset, Message, Pagination, Table
- Organisms: Banner, Footer, Header, Tabs

Use `component_template.html` as the starting point for these documents.

---

## HTML Template — Head and CSS

Both templates use this exact head and CSS block. Do not deviate.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Document Name] - The Delta Design System</title>
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

        h1 {
            font-family: var(--font-family-heading);
            font-size: 48px; font-weight: 400; line-height: 1.2;
            margin-bottom: 16px; color: var(--color-black);
        }
        h2 {
            font-family: var(--font-family-heading);
            font-size: 32px; font-weight: 400; line-height: 1.3;
            margin-top: 48px; margin-bottom: 16px; color: var(--color-black);
        }
        h3 {
            font-family: var(--font-family-heading);
            font-size: 24px; font-weight: 400; line-height: 1.4;
            margin-top: 32px; margin-bottom: 12px; color: var(--color-black);
        }
        h4 {
            font-family: var(--font-family-heading);
            font-size: 18px; font-weight: 400; line-height: 1.4;
            margin-top: 24px; margin-bottom: 8px; color: var(--color-black);
        }

        p { font-size: 16px; line-height: 1.75; margin-bottom: 16px; }
        strong { font-weight: 700; }
        a { color: var(--color-primary); text-decoration: underline; }
        a:hover { color: var(--color-secondary); }
        ul, ol { margin-left: 24px; margin-bottom: 16px; }
        li { margin-bottom: 8px; line-height: 1.75; }

        code {
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 14px;
            background-color: var(--color-gray-light);
            padding: 2px 6px; border-radius: 3px;
        }
        pre {
            background-color: var(--color-gray-light);
            padding: 16px; border-radius: 4px;
            overflow-x: auto; margin-bottom: 24px;
        }
        pre code { background-color: transparent; padding: 0; }

        table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        th, td { text-align: left; padding: 12px; border-bottom: 1px solid var(--color-gray-medium); }
        th { font-weight: 700; background-color: var(--color-gray-light); }

        hr { border: none; border-top: 1px solid var(--color-gray-medium); margin: 48px 0; }

        .component-demo {
            background-color: var(--color-gray-light);
            padding: 32px; border-radius: 4px; margin: 24px 0;
        }

        .do-dont-grid {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 24px; margin: 24px 0;
        }
        @media (max-width: 48rem) {
            .do-dont-grid { grid-template-columns: 1fr; }
        }
        .do-section { border-left: 4px solid #007000; padding-left: 16px; }
        .dont-section { border-left: 4px solid #C00C00; padding-left: 16px; }
        .do-section h3, .dont-section h3 { margin-top: 0; margin-bottom: 16px; }
        .do-section p strong, .dont-section p strong { display: block; margin-bottom: 4px; }
    </style>
</head>
```

---

## Heading Hierarchy

All headings use Ovo, weight 400, black. **Maximum heading depth is h4.**

| Level | Size | Use |
|-------|------|-----|
| h1 | 48px | Document title only |
| h2 | 32px | Major sections |
| h3 | 24px | Subsections within h2 |
| h4 | 18px | Sub-subsections within h3 — use sparingly |

**h4 must never appear inside Do/Don't sections.** Use `<p><strong>` instead.

---

## Media Queries

**Always use rem, never px, for breakpoint media queries.**

```css
@media (min-width: 48rem)  { /* Tablet — 768px */ }
@media (min-width: 80rem)  { /* Widescreen — 1280px */ }
```

The only exception is component-internal layout queries (e.g. a card component's own min-width behaviour) — these may use px when they reference a specific design token value, not a system breakpoint.

**Breakpoints:**
- Mobile: 0–767px (4-column grid)
- Tablet: 768–1279px (8-column grid)
- Widescreen: 1280px+ (12-column grid)
- 1440px is the Figma frame size only — it is not a code breakpoint

**Never use "Desktop"** — the correct term throughout all documentation is **Widescreen**.

---

## Table Value Format

All numeric values in Typography, Spacing, and Border-radius tables use this format:

```
rem / px (token name or scale alias)
```

**Examples:**
- `0.75rem / 12px (small)`
- `1.5rem / 24px (p)`
- `1rem / 16px (xl)`
- `0.25rem / 4px (sm)`
- `0.25rem / 4px (fixed)` — for hard-coded values not driven by a token

Use `—` to indicate a value that does not apply in a given context (e.g. a token that only exists at one breakpoint).

**Omit from tables entirely:**
- Font-weight
- Font-family
- Width, height, min-width, max-width, min-height, max-height

---

## Spacing Token Scale

Spacing tokens are global and scale responsively. Use these values:

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

---

## Border-radius Token Scale

Border-radius tokens also scale. **Always provide both Mobile/Tablet and Widescreen values.**

| Token | Mobile/Tablet | Widescreen |
|-------|--------------|------------|
| border-radius/sm | 0.25rem / 4px | 0.5rem / 8px |
| border-radius/md | 0.5rem / 8px | 1rem / 16px |
| border-radius/lg | (verify in Figma) | (verify in Figma) |
| border-radius/round | 6.25rem / 100px | 6.25rem / 100px (fixed) |
| button/border-radius | 2rem / 32px | 2rem / 32px (fixed) |

Some border-radius values are fixed (do not scale). When in doubt, verify in Figma.

---

## Foundation Document Structure

```
h1: [Foundation name]
p: Brief description

[hr]
h2: [Overview/Philosophy section — name varies by document]
p: Content

[hr]
h2: [System/Palette/Scale section — name varies by document]

[hr]
h2: Accessibility
h3: [Subsections as needed]

[hr]
h2: Usage
h3: [Subsections as needed]
h3: Best practices
[Do/Don't grid]

[hr]
h2: Design tokens reference
[Code block — token names, values, responsive scale]

[hr]
h2: Resources
```

---

## Component Document Structure

```
h1: [Component name]
p: Brief 1–2 sentence description

[hr]
h2: Anatomy
p: [Component] consists of:
ul: [Element list with strong labels]

[hr]
h2: Variants
[See Variants section below]

[hr]
h2: States
[h3 per state — omit states that don't apply]

[hr]
h2: Typography
[Table: Attribute | Token | Mobile/Tablet | Widescreen]
[Omit if component delegates typography to another component]

[hr]
h2: Spacing
[Table: Attribute | Token | Mobile/Tablet | Widescreen]

[hr]
h2: Border-radius
[Table: Attribute | Token | Mobile/Tablet | Widescreen]
[Omit only if component has no border-radius]

[hr]
h2: Colors
[Table: Attribute | Token | Light mode | Dark mode]
p: Light/dark mode note if relevant

[hr]
h2: Accessibility
h3: Keyboard navigation
h3: Screen readers
h3: ARIA attributes
h3: Focus management
h3: Color contrast
[Omit subsections that don't apply]

[hr]
h2: Usage
h3: When to use
h3: When not to use
h3: Content guidelines
h3: Placement
h3: Best practices
[Do/Don't grid — see below]

[hr]
h2: Code reference
h3: HTML
h3: CSS
h3: JavaScript [only if component requires JS]
h3: Design tokens reference

[hr]
h2: Resources
```

---

## Variants Section

The Variants section is flexible. Choose the format that best fits the component's complexity:

**Simple components** (2–4 variants, minimal differences): Use an unordered list.
```html
<h2>Variants</h2>
<p>Brief description of the variant property.</p>
<ul>
    <li><strong>Left (default):</strong> Description and when to use.</li>
    <li><strong>Center:</strong> Description and when to use.</li>
    <li><strong>Right:</strong> Description and when to use.</li>
</ul>
```

**Complex components** (variants with meaningful structural or visual differences): Use h3 subsections with paragraphs, tables, or lists as appropriate. A component-demo div may be included when a visual example adds real value.
```html
<h2>Variants</h2>
<p>Brief description of what varies.</p>

<h3>[Variant name]</h3>
<p>Description and when to use.</p>
[table or list of variant-specific specs if needed]

<h3>[Variant name]</h3>
<p>Description and when to use.</p>
```

Use judgment. The goal is clarity, not uniformity for its own sake. For complex organisms (like Tabs or Header), document only top-level structural variants — do not drill down into every sub-element's variants.

---

## States Section

Document only states that genuinely apply to the component. Do not include states as empty placeholders.

**Standard states** (use only those that apply):

| State | When to include |
|-------|----------------|
| Default | Always |
| Hover | Interactive components only |
| Active / Pressed | Interactive components only — use this compound form |
| Focus | Interactive components only |
| Disabled | Only if the component supports a disabled state |
| Invalid | Form components with validation |
| Valid | Form components with validation (optional) |
| Loading | Only if component has a loading state |

For complex organisms, document states at the component level — not at the sub-component level.

---

## Best Practices (Do/Don't) Section

The Do/Don't grid lives inside the Usage section, under an h3 called "Best practices", in both Foundation and Component documents.

```html
<h3>Best practices</h3>
```

Do/Don't grid markup (same in both cases):
```html
<div class="do-dont-grid">
    <div class="do-section">
        <h3>Do</h3>
        <p><strong>Practice headline</strong></p>
        <p>Explanation of the good practice.</p>
        <!-- Repeat pattern -->
    </div>
    <div class="dont-section">
        <h3>Don't</h3>
        <p><strong>Anti-pattern headline</strong></p>
        <p>Explanation of what to avoid.</p>
        <!-- Repeat pattern -->
    </div>
</div>
```

**Rules:**
- Use `<p><strong>` for item headlines — never `<h4>`
- Aim for 3–4 items per column, balanced between Do and Don't
- The Do/Don't h3 labels ("Do" / "Don't") are the only h3s inside the grid

---

## Colors Table Format

Colors tables always show both light and dark mode values:

```html
<table>
    <thead>
        <tr>
            <th>Element</th>
            <th>Token</th>
            <th>Light mode</th>
            <th>Dark mode</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Element name</td>
            <td><code>token/name</code></td>
            <td>#HEXVAL (alias name)</td>
            <td>#HEXVAL (alias name)</td>
        </tr>
    </tbody>
</table>
```

When a color is the same in both modes, show the value in both columns and note it is mode-invariant. Always note any accessibility implications of dark mode color changes (e.g. when two elements resolve to the same color).

**Always check both light and dark mode variable values in Figma using `get_variable_defs`.** Do not assume mode-invariance. Color tokens frequently resolve to different values between modes — including cases where a link or icon switches from red (light) to white (dark).

---

## Typography Table Format

Typography tables always use four columns:

```html
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
            <td>Label</td>
            <td><code>token/name</code></td>
            <td>0.75rem / 12px</td>
            <td>1rem / 16px</td>
        </tr>
    </tbody>
</table>
```

Omit the Typography section entirely when a component delegates all text styling to another component (e.g. Cards and Tabs delegate body typography to the Content component).

---

## Spacing Table Format

Spacing tables always use four columns:

```html
<table>
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
        </tr>
    </thead>
</table>
```

Do not include border-radius in the Spacing table — it has its own dedicated section.

---

## Code Reference Section

The Code reference section uses this structure:

```
h2: Code reference
h3: HTML        — semantic markup examples, all variants
h3: CSS         — base styles, variant modifiers, responsive (@media 80rem)
h3: JavaScript  — only if the component requires JS for functionality
h3: Design tokens reference  — token names, values, and responsive scale
```

The Design tokens reference subsection uses a code block (not a table) listing all tokens used by the component with their mobile and widescreen values:

```
--token/name    Mobile: Xrem / Xpx   →   Widescreen: Xrem / Xpx
--token/name    Light: #HEXVAL   Dark: #HEXVAL
```

CSS code examples should use conventional class naming — no BEM double-underscores or double-hyphens. Keep comment styles clean and minimal.

---

## Section Naming — Do Not Vary

These names are fixed. Do not use synonyms or variations:

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

**Never use:** "Overview and anatomy", "Usage and accessibility", "Usage guidelines", "Design tokens", "Code"

---

## Terminology

Use these terms consistently throughout all documentation. When in doubt, prefer semantic terms that align with HTML, CSS, and ARIA standards.

### Document titles and h1 headings

Component document titles and h1 headings use the plural form (e.g. "Badges", "Buttons", "Inputs"). Exception: components whose names are not countable nouns (e.g. "Content", "Feedback", "Pagination") use their natural form.

### Breakpoints

| Use This | Not This |
|----------|----------|
| Mobile | Phone, Small |
| Tablet | Medium |
| **Widescreen** | **Desktop**, Large, Wide |

Widescreen is the established term for the 1280px+ breakpoint across all Delta documentation. Never use "Desktop".

### Component States

| Use This | Not This | Reason |
|----------|----------|--------|
| Default | Normal, Base | Clear starting state |
| Hover | Mouseover | Standard CSS term |
| Active / Pressed | Active, Pressed (alone) | Use the compound form in States sections |
| Focus | Focused, Selected | Matches CSS `:focus` |
| Disabled | Inactive, Unavailable | Matches HTML `disabled` |
| Invalid | Error, Failed | Matches `aria-invalid` |
| Valid | Success, Passed | Semantic opposite of invalid |

### Typography

| Use This | Not This |
|----------|----------|
| Line height | Leading |
| Letter spacing | Tracking |
| Heading | Header, Title (as a type element) |

### Interaction

| Use This | Not This |
|----------|----------|
| Expand | Open, Show |
| Collapse | Close, Hide |
| Select | Choose, Pick |

### Color

Refer to colors using their token names, not their hex values or colour names in prose. In tables, always show both the token and the resolved hex value with its alias.

---

## Writing Style

**Voice and tense:** Use active voice and present tense throughout.
- ✓ "The button displays an invalid state when validation fails."
- ✗ "The button will show an error state when there is a problem."

**Be direct and concise:**
- ✓ "Use primary buttons for the main action on a page."
- ✗ "Primary buttons can be used in situations where you need to indicate the main action."

**Component descriptions:** [Component] is/are [what it is]. Use [component] when [primary purpose].

**Do/Don't items:**
- Do: [Action verb] + [specific guidance]
- Don't: Avoid [anti-pattern] + [brief reason]

---

## What to Omit

Never document these properties — they are not part of the token system and create maintenance overhead:

- Width, height, min-width, max-width, min-height, max-height
- Font-family
- Font-weight — never document it, regardless of value. Bold (700) is a standard weight used throughout the system; it is not an exception and should not be flagged as one.

---

## Related Section

There is no Related section. It has been removed from all documents and should not be added to new ones.

---

## Resources Section

Every document ends with a Resources section. Include links relevant to the component — MDN documentation, WCAG guidelines, ARIA patterns, and any other high-quality references. Use the standard four as a baseline and add document-specific links:

```html
<h2>Resources</h2>
<ul>
    <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
    <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
    <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
    <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
    <!-- Document-specific links -->
</ul>
```

---

## Known Issues in Existing Documents

When updating existing documents, check for and correct these issues:

| Issue | Affected documents |
|-------|-------------------|
| px-based media queries instead of rem | badge, grid, footer, header |
| Bare px values in tables (missing rem) | badge, cards, chips, content, grid, header, icons, inputs, links, spacing, tabs, typography |
| h4 tags in Do/Don't sections | banner, button, cards, feedback, grid, header, inputs, messages, table, tabs |
| "Usage guidelines" instead of "Best practices" | about, badge, grid, typography, spacing (mixed) |
| Accessibility after Usage (wrong order) | typography |
| Missing "Design tokens reference" in Code reference | most documents from the second chat |
| "Related" section still present | check all — should be removed |
| "Desktop" instead of "Widescreen" | check all — use find/replace |
| Missing Token column in Typography table | check all — should be 4 columns |
| Colors table missing Token column or mode columns | check all — should be 4 columns |
| Border-radius documented inside Spacing table | check all — should be its own section |

---

## Table Row Labels

Row labels in Typography, Spacing, Border-radius, and Colors tables use CSS property name format: lowercase and hyphenated. The first column header is always **"Attribute"** across all four table types — Typography, Spacing, Border-radius, and Colors.

**Examples:**
- `font-size` not "Font size" or "Font Size"
- `line-height` not "Line height"
- `padding` not "Padding (all sides)"
- `border-radius` not "Corner radius"
- `gap` not "Gap between cells"

When a property applies to multiple sides, list them with commas:
- `padding-top, padding-bottom` not "Padding (top/bottom)" or "padding-top / padding-bottom"
- `padding-left, padding-right` not "Padding (left/right)"

**Why commas, not slashes:** The `/` character is reserved for nested token name syntax (e.g. `components/chip/padding-t-b`). Using it in row labels creates ambiguity.

When multiple elements share the same property, prepend the element name in plain language:

- `Container border-radius`
- `Label font-size`
- `Header row background`

---

## Colors Table — Alias Names in Value Cells

When a color token resolves through a named alias, include the alias name in parentheses after the hex value:

- `#FF5247 (brand/primary)` — token resolves through a named alias
- `#000000 (global/black)` — token resolves through a named alias

Do not include an alias name when:
- The token has no named intermediate (it is a direct value)
- The alias name would simply repeat the token name already shown in the Token column

**Examples:**
- `components/chip/primary` resolves to `#FF5247 (brand/primary)` ✓ — alias is different from the token name
- `brand/primary` resolves to `#FF5247` ✓ — no alias to add; the token name is already in the Token column

---

## Known Color Token Behaviors

These color token resolved values are established system-wide and do not need to be re-verified in Figma on every component pass. They are always correct unless explicitly noted otherwise.

| Token | Light mode | Dark mode | Notes |
|-------|-----------|-----------|-------|
| `text/default` | #000000 (global/black) | #FFFFFF (global/white) | Always inverts |
| `text/inverse` | #FFFFFF (global/white) | #000000 (global/black) | Always inverts, opposite of text/default |
| `text/link` | #FF5247 (brand/primary) | #FFFFFF (global/white) | Not mode-invariant — switches to white in dark mode |
| `brand/primary` | #FF5247 | #FF5247 | Mode-invariant |
| `brand/secondary` | #003442 | #003442 | Mode-invariant |
| `global/white` | #FFFFFF | #FFFFFF | Mode-invariant |
| `global/black` | #000000 | #000000 | Mode-invariant |
| `page/background` | #FFFFFF (global/white) | #01232D (brand/secondary-dark) | Inverts to darkest brand color |

When a component uses only these tokens for color, dark mode values can be documented from this table without an additional Figma call. If a component uses any other color token not listed here, verify it in Figma.

---

## Table Row Consolidation

Consolidate table rows whenever multiple elements share the same token and values. There is no benefit to repeating identical information.

If body and header cells both use the same token at the same values, one row covers both. Use a generic element label like the property name alone, or qualify it only when disambiguation is needed.

---

## Section Flattening — Typography, Spacing, Border-radius, Colors

Each of these sections should contain a single table by default. Only add h3 subsections when the content is genuinely numerous enough that a single table would be hard to read — typically more than 8-10 rows, or when elements are structurally distinct enough that grouping aids comprehension.

Do not add subsections by default. Start flat, add structure only when it earns its place.

---

## Cross-Component References — Molecules and Organisms

When a molecule or organism contains an embedded component (e.g. a Table containing a Checkbox), do not duplicate that component's full specifications. Document only what is unique to the container. For embedded component details, reference the appropriate component document.

**Example:**
> Checkbox colors follow the Input component — see [Inputs](inputs.html).

This applies to Typography, Spacing, Border-radius, and Colors sections. If the container overrides a value from the embedded component, document only the override and note what it overrides.

---

## Scope of Changes — Do Not Edit on a Whim

Documentation changes must reflect what is already in Figma. The pipeline is **Figma → HTML → Storybook**. Changing prose, restructuring sections, or rewording content in the HTML without a corresponding change in Figma creates inconsistency across the system that is costly to reconcile.

**Permitted without a Figma change:**
- Correcting token values or names to match Figma
- Fixing structural or formatting errors against the standards
- Adding missing required sections

**Requires Figma to be updated first:**
- Rewriting prose descriptions, usage guidance, or Best practices content
- Adding, removing, or restructuring variants or states
- Any content change that would require Figma to be updated to stay in sync

When in doubt, do not change it.

---

## Workflow Notes

- **Start each new documentation chat** by uploading this standards file and the appropriate template (foundation or component)
- **Verify all token values in Figma** before writing specs — do not rely on JSON exports or older HTML documents
- **Always query both component node AND document node** — see "Figma Variable Modes — Verification Workflow" section above for complete methodology
- **Check both light and dark mode** variable values for every color token — never assume mode-invariance
- **Document the complete token behavior** — not just what appears in a single instance or context
- **One document per chat** is the most token-efficient approach for update work
- **For new components**, write from scratch against this standards file and the appropriate template rather than copying an existing doc
- **Variants format** is a judgment call — use a list for simple components, h3 subsections for complex ones
