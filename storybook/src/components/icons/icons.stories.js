const iconSpecimens = [
  {
    label: 'arrow-left',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M5 12l6 6m-6-6 6-6"/></svg>`,
  },
  {
    label: 'arrow-right',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>`,
  },
  {
    label: 'bluesky',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><svg x="2" y="4" width="20" height="18" viewBox="0 0 21 18.0002"><path d="M4.835 1.64423C3.181 0.445229 0.5 -0.482771 0.5 2.47023C0.5 3.06023 0.85 7.42323 1.056 8.13123C1.769 10.5942 4.186 10.8812 6.5 10.5002C2.455 11.1652 1.611 13.7082 3.833 15.9102C4.863 16.9282 5.746 17.5002 6.5 17.5002C8.5 17.5002 9.634 14.7312 10 14.0002C10.333 13.3332 10.5 12.8332 10.5 12.5002C10.5 12.8332 10.667 13.3332 11 14.0002C11.366 14.7312 12.5 17.5002 14.5 17.5002C15.254 17.5002 16.137 16.9292 17.167 15.9102C19.389 13.7072 18.545 11.1642 14.5 10.5002C16.814 10.8802 19.23 10.5942 19.944 8.13123C20.15 7.42323 20.5 3.05923 20.5 2.47023C20.5 -0.482771 17.82 0.445229 16.165 1.64423C13.872 3.30623 11.405 6.69223 10.5 8.50023C9.595 6.69223 7.128 3.30623 4.835 1.64423Z"/></svg></svg>`,
  },
  {
    label: 'calendar',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><svg x="4" y="5" width="16" height="16" viewBox="0 0 17 17"><path d="M0.5 2.5C0.5 1.96957 0.710714 1.46086 1.08579 1.08579C1.46086 0.710714 1.96957 0.5 2.5 0.5H14.5C15.0304 0.5 15.5391 0.710714 15.9142 1.08579C16.2893 1.46086 16.5 1.96957 16.5 2.5V14.5C16.5 15.0304 16.2893 15.5391 15.9142 15.9142C15.5391 16.2893 15.0304 16.5 14.5 16.5H2.5C1.96957 16.5 1.46086 16.2893 1.08579 15.9142C0.710714 15.5391 0.5 15.0304 0.5 14.5V2.5Z"/></svg><svg x="8" y="3" width="1" height="4" viewBox="0 0 1 5"><path d="M0.5 0.5V4.5"/></svg><svg x="16" y="3" width="1" height="4" viewBox="0 0 1 5"><path d="M0.5 0.5V4.5"/></svg><svg x="4" y="11" width="16" height="1" viewBox="0 0 17 1"><path d="M0.5 0.5H16.5"/></svg><svg x="11" y="15" width="1" height="1" viewBox="0 0 2 1"><path d="M0.5 0.5H1.5"/></svg><svg x="12" y="15" width="1" height="3" viewBox="0 0 1 4"><path d="M0.5 0.5V3.5"/></svg></svg>`,
  },
  {
    label: 'check',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5L20 7"/></svg>`,
  },
  {
    label: 'chevron-down',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>`,
  },
  {
    label: 'email',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect width="16" height="12" x="4" y="6" rx="2"/><path d="m4 10 8 5 8-5"/></svg>`,
  },
  {
    label: 'eye',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    label: 'eye-off',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m3 3 18 18M10.5 10.677a2 2 0 0 0 2.823 2.823"/><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 3.333 5.043 7 9 7 1.55 0 3.043-.523 4.395-1.35M12 5c4.008 0 6.701 3.158 9 7a15.66 15.66 0 0 1-1.078 1.5"/></svg>`,
  },
  {
    label: 'github',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
  },
  {
    label: 'instagram',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>`,
  },
  {
    label: 'link',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  },
  {
    label: 'menu-2',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 6h16M4 12h16M4 18h7"/></svg>`,
  },
  {
    label: 'minus',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/></svg>`,
  },
  {
    label: 'moon',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  },
  {
    label: 'plus',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 5v14m-7-7h14"/></svg>`,
  },
  {
    label: 'quote',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><svg x="5" y="6" width="5" height="12" viewBox="0 0 6 13.0001"><path d="M5.5 5.5H1.5C1.23478 5.5 0.98043 5.39464 0.792893 5.20711C0.605357 5.01957 0.5 4.76522 0.5 4.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H4.5C4.76522 0.5 5.01957 0.605357 5.20711 0.792893C5.39464 0.98043 5.5 1.23478 5.5 1.5V7.5C5.5 10.167 4.167 11.833 1.5 12.5"/></svg><svg x="14" y="6" width="5" height="12" viewBox="0 0 6 13.0001"><path d="M5.5 5.5H1.5C1.23478 5.5 0.98043 5.39464 0.792893 5.20711C0.605357 5.01957 0.5 4.76522 0.5 4.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H4.5C4.76522 0.5 5.01957 0.605357 5.20711 0.792893C5.39464 0.98043 5.5 1.23478 5.5 1.5V7.5C5.5 10.167 4.167 11.833 1.5 12.5"/></svg></svg>`,
  },
  {
    label: 'search',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  },
  {
    label: 'sun',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  },
  {
    label: 'X',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  },
  {
    label: 'Youtube',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><svg x="2" y="4" width="20" height="16" viewBox="0 0 21 17"><path d="M0.5 4.5C0.5 3.43913 0.921427 2.42172 1.67157 1.67157C2.42172 0.921427 3.43913 0.5 4.5 0.5H16.5C17.5609 0.5 18.5783 0.921427 19.3284 1.67157C20.0786 2.42172 20.5 3.43913 20.5 4.5V12.5C20.5 13.5609 20.0786 14.5783 19.3284 15.3284C18.5783 16.0786 17.5609 16.5 16.5 16.5H4.5C3.43913 16.5 2.42172 16.0786 1.67157 15.3284C0.921427 14.5783 0.5 13.5609 0.5 12.5V4.5Z"/></svg><svg x="10" y="9" width="5" height="6" viewBox="0 0 6 7"><path d="M0.5 0.5L5.5 3.5L0.5 6.5V0.5Z"/></svg></svg>`,
  },
];

function renderIconsSpecimen() {
  return `
    <style>
      .delta-docs .icons-specimen-shell {
        display: inline-flex;
        max-width: 100%;
        padding: var(--components-icons-shell-padding);
        border-radius: var(--components-icons-shell-radius);
        background: var(--components-icons-shell-background);
      }

      .delta-docs .icons-specimen-grid {
        display: flex;
        flex-wrap: wrap;
        gap: var(--components-icons-grid-gap);
      }

      .delta-docs .icons-specimen-item {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: var(--components-icons-item-gap);
        width: var(--components-icons-item-width);
        min-height: var(--components-icons-item-min-height);
        padding: var(--components-icons-item-padding);
        border-radius: var(--components-icons-item-radius);
        background: var(--page-background);
        color: var(--text-default);
        text-align: center;
      }

      .delta-docs .icons-specimen-item svg {
        width: var(--components-icons-specimen-size);
        height: var(--components-icons-specimen-size);
        stroke: currentColor;
        fill: none;
        flex: 0 0 auto;
      }

      .delta-docs .icons-specimen-label {
        font-size: var(--small-font-size);
        line-height: var(--small-line-height);
        color: var(--text-default);
      }
    </style>
    <div class="icons-specimen-shell" aria-label="Available icon specimens">
      <div class="icons-specimen-grid">
        ${iconSpecimens
          .map(
            ({ label, svg }) => `
              <div class="icons-specimen-item">
                ${svg}
                <div class="icons-specimen-label">${label}</div>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
  `;
}

function createIconsDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Icons</h1>
      <p>Icons are visual symbols that enhance understanding, support navigation, and reinforce meaning throughout the interface. The Delta Design System uses a curated set of icons from <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a> for visual consistency across all components.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Icons consist of:</p>
      <ul>
        <li><strong>SVG container:</strong> A 24×24px viewBox that defines the icon's coordinate space and rendered size</li>
        <li><strong>Stroke paths:</strong> Vector paths drawn at 1px stroke weight with round line caps and joins</li>
        <li><strong>Color:</strong> Inherits from the surrounding text color via <code>currentColor</code>, driven by the <code>text/default</code> token</li>
      </ul>

      <hr />

      <h2>Variants</h2>
      <p>Icons are identified by their <code>type</code> value, which maps directly to the icon name in the Figma component. All icons share the same 24×24px size and 1px stroke weight — the only variation between them is their path geometry.</p>

      <p>The following icons are available in the design system:</p>

      ${renderIconsSpecimen()}

      <hr />

      <h2>States</h2>
      <p>Icons themselves are stateless — they do not have hover, focus, active, or disabled states of their own. State changes are managed by the parent element (a button, link, or other interactive container). The icon inherits whatever color change the parent applies on interaction.</p>
      <ul>
        <li><strong>Default:</strong> Icons render at their natural size and inherit <code>text/default</code> — black in light mode, white in dark mode.</li>
        <li><strong>Interactive (inherited):</strong> When an icon is inside an interactive element such as a button or link, it automatically inherits that element's state styles. No additional icon-specific styles are required.</li>
        <li><strong>Disabled (inherited):</strong> When the parent element is disabled, the icon inherits the reduced-opacity color of the disabled state. Apply disabled styles to the container, not the icon directly.</li>
      </ul>

      <hr />

      <h2>Accessibility</h2>

      <h3>Screen readers</h3>
      <p>Icons must never be the sole means of conveying information. When an icon appears alongside visible text, mark it as decorative so screen readers skip it. When an icon is the only content in an interactive element, provide a text alternative so the element has an accessible name.</p>

      <h3>ARIA attributes</h3>
      <p>The correct ARIA pattern depends on how the icon is used:</p>
      <ul>
        <li><strong>aria-hidden="true":</strong> Apply to any icon whose meaning is already conveyed by adjacent visible text. This prevents screen readers from announcing redundant or meaningless SVG content.</li>
        <li><strong>aria-label:</strong> Apply to the parent interactive element (button or link) when the icon is the only content. Do not put <code>aria-label</code> on the SVG itself.</li>
        <li><strong>role="img" + aria-label:</strong> Use when a standalone icon (not inside a button or link) conveys meaningful information with no adjacent text.</li>
        <li><strong>focusable="false":</strong> Add to SVG elements nested inside interactive elements to prevent the SVG from receiving its own focus in some browsers.</li>
      </ul>

      <h3>Focus management</h3>
      <p>Icons are not focusable on their own. Focus is managed by the parent interactive element. Ensure buttons and links containing icons have a visible focus indicator that meets WCAG 2.1 Level AA requirements (3:1 minimum contrast ratio for the focus indicator against adjacent colors).</p>

      <h3>Color contrast</h3>
      <p>Icons inheriting <code>text/default</code> on a white background meet WCAG 2.1 Level AA (4.5:1 minimum for text-sized elements). In dark mode, white icons on dark backgrounds also meet this threshold. When icons appear in contexts with non-standard backgrounds, verify contrast independently.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use icons when you need to:</p>
      <ul>
        <li>Reinforce the meaning of a text label, making it faster to scan</li>
        <li>Indicate direction or action (navigation arrows, close, expand)</li>
        <li>Represent a well-understood concept where the metaphor is universal (search, menu, email)</li>
        <li>Save horizontal space in compact layouts when paired with a tooltip or visible label nearby</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use icons when:</p>
      <ul>
        <li>The icon meaning is ambiguous — if users might interpret it differently, use text instead or add a visible label</li>
        <li>Complex or nuanced information needs to be conveyed — text is clearer</li>
        <li>Adding an icon would increase visual noise without aiding comprehension</li>
        <li>A custom or non-Tabler icon is needed — discuss with the design team before introducing new icons</li>
      </ul>

      <h3>Content guidelines</h3>
      <p>Guidelines for selecting and using icons:</p>
      <ul>
        <li><strong>Prefer familiar metaphors:</strong> Choose icons with widely understood meanings. When in doubt, test comprehension with real users.</li>
        <li><strong>Use consistently:</strong> Once an icon is established as the symbol for an action, use it for that action everywhere in the interface.</li>
        <li><strong>Pair with labels in new contexts:</strong> Always include a visible text label or tooltip when introducing an icon to unfamiliar audiences or low-familiarity contexts.</li>
      </ul>

      <h3>Placement</h3>
      <p>Icons should be vertically center-aligned with adjacent text using <code>align-items: center</code> on the flex container. When an icon leads a label (left-aligned icon), use the <code>xs</code> gap token. When icons appear inside buttons, defer to the Button component's layout specifications.</p>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Pair icons with text labels</strong></p>
          <p>Icons paired with text provide the clearest communication and the best accessibility, especially for less familiar icons.</p>

          <p><strong>Use aria-hidden for decorative icons</strong></p>
          <p>When adjacent text already conveys the meaning, mark the icon <code>aria-hidden="true"</code> to keep screen reader output concise.</p>

          <p><strong>Maintain consistent size and stroke</strong></p>
          <p>Visual harmony comes from consistency. The design system uses 24×24px icons with 1px stroke weight throughout.</p>

          <p><strong>Center-align icons with text</strong></p>
          <p>Use <code>align-items: center</code> on the flex container so the icon and label share a common baseline.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't use icons without labels or tooltips</strong></p>
          <p>Icon-only interfaces are harder to learn and create barriers for users unfamiliar with the conventions.</p>

          <p><strong>Don't vary stroke weight between icons</strong></p>
          <p>Inconsistent stroke weights make icons feel mismatched. If you need a different weight, apply it uniformly across all icons in your project.</p>

          <p><strong>Don't mix icon styles within the same interface</strong></p>
          <p>Combining icons with different stroke weights or visual styles creates inconsistency. Stick to one icon set and weight throughout a project.</p>

          <p><strong>Don't rely on color alone</strong></p>
          <p>Icons must be recognizable in monochrome. Shape and form should communicate meaning; color is secondary.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Decorative icon alongside text label --&gt;
&lt;button&gt;
  &lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true" focusable="false"&gt;
    &lt;path d="M5 12h14m0 0-6-6m6 6-6 6"/&gt;
  &lt;/svg&gt;
  Next
&lt;/button&gt;

&lt;!-- Icon-only button — label on the container element --&gt;
&lt;button aria-label="Search"&gt;
  &lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true" focusable="false"&gt;
    &lt;circle cx="11" cy="11" r="8"/&gt;
    &lt;path d="m21 21-4.35-4.35"/&gt;
  &lt;/svg&gt;
&lt;/button&gt;

&lt;!-- Standalone informational icon (not inside an interactive element) --&gt;
&lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1"
     stroke-linecap="round" stroke-linejoin="round"
     role="img" aria-label="Success"&gt;
  &lt;path d="M5 12l5 5L20 7"/&gt;
&lt;/svg&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Base icon styles */
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  flex-shrink: 0;
}

/* Icon inline with text */
.icon-label {
  display: inline-flex;
  align-items: center;
  gap: var(--xs);
}

/* Icon in a button (defers to button component gap token) */
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--sm);
}

/* Icon-only button — touch target sized on the container */
.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem; /* 10px — gives 44px touch target around 24px icon */
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Colors */
--text/default    Light: #000000   Dark: #FFFFFF

/* Spacing — gap between icon and adjacent label */
--xs              Mobile: 0.125rem / 2px   →   Widescreen: 0.25rem / 4px
--sm              Mobile: 0.25rem / 4px    →   Widescreen: 0.5rem / 8px

/* Icon dimensions — fixed, not token-driven */
SVG width/height: 24px (fixed)
SVG viewBox:      0 0 24 24 (fixed)
stroke-width:     1 (fixed)</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a> — Source library for all Delta Design System icons</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank">MDN Web Docs: SVG</a> — SVG element reference</li>
        <li><a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/" target="_blank">Sara Soueidan: Accessible Icon Buttons</a> — Patterns for icon button accessibility</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Icons',
};

export default meta;

export const Documentation = () => createIconsDocumentation();
