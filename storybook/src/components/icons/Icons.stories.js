export default {
  title: 'Atoms/Icons',
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Icons</h1>
      <p>Icons are visual symbols that enhance understanding, support navigation, and reinforce meaning throughout the interface. The Delta Design System uses a curated set of icons from <a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a> for visual consistency across all components.</p>

      <hr>

      <h2>Anatomy</h2>
      <p>Icons consist of:</p>
      <ul>
        <li><strong>SVG container:</strong> A 24×24px viewBox that defines the icon's coordinate space and rendered size</li>
        <li><strong>Stroke paths:</strong> Vector paths drawn at 1px stroke weight with round line caps and joins</li>
        <li><strong>Color:</strong> Inherits from the surrounding text color via <code>currentColor</code>, driven by the <code>text/default</code> token</li>
      </ul>

      <hr>

      <h2>Variants</h2>
      <p>Icons are identified by their <code>type</code> value, which maps directly to the icon name in the Figma component. All icons share the same 24×24px size and 1px stroke weight — the only variation between them is their path geometry.</p>

      <p>The following icons are available in the design system:</p>

      <div class="component-demo">
        <div class="icon-grid">
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M5 12l6 6m-6-6 6-6"/>
            </svg>
            <span>arrow-left</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14m0 0-6-6m6 6-6 6"/>
            </svg>
            <span>arrow-right</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856"/>
            </svg>
            <span>bluesky</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"/>
              <path d="M16 3v4"/>
              <path d="M8 3v4"/>
              <path d="M4 11h16"/>
              <path d="M11 15h1"/>
              <path d="M12 15v3"/>
            </svg>
            <span>calendar</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12l5 5L20 7"/>
            </svg>
            <span>check</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
            <span>chevron-down</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <rect width="16" height="12" x="4" y="6" rx="2"/>
              <path d="m4 10 8 5 8-5"/>
            </svg>
            <span>email</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>eye</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 3 18 18M10.5 10.677a2 2 0 0 0 2.823 2.823"/>
              <path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 3.333 5.043 7 9 7 1.55 0 3.043-.523 4.395-1.35M12 5c4.008 0 6.701 3.158 9 7a15.66 15.66 0 0 1-1.078 1.5"/>
            </svg>
            <span>eye-off</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
            </svg>
            <span>github</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            <span>instagram</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            <span>link</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6l16 0"/>
              <path d="M4 12l16 0"/>
              <path d="M4 18l16 0"/>
            </svg>
            <span>menu-2</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/>
            </svg>
            <span>minus</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
            <span>moon</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14m-7-7h14"/>
            </svg>
            <span>plus</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/>
              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/>
            </svg>
            <span>quote</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <span>search</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
            <span>sun</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
            <span>X</span>
          </div>
          <div class="icon-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <path d="m2 10 10 5 10-5"/>
            </svg>
            <span>youtube</span>
          </div>
        </div>
      </div>

      <hr>

      <h2>States</h2>
      <p>Icons themselves are stateless — they do not have hover, focus, active, or disabled states of their own. State changes are managed by the parent element (a button, link, or other interactive container). The icon inherits whatever color change the parent applies on interaction.</p>
      <ul>
        <li><strong>Default:</strong> Icons render at their natural size and inherit <code>text/default</code> — black in light mode, white in dark mode.</li>
        <li><strong>Interactive (inherited):</strong> When an icon is inside an interactive element such as a button or link, it automatically inherits that element's state styles. No additional icon-specific styles are required.</li>
        <li><strong>Disabled (inherited):</strong> When the parent element is disabled, the icon inherits the reduced-opacity color of the disabled state. Apply disabled styles to the container, not the icon directly.</li>
      </ul>

      <hr>

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

      <hr>

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

      <hr>

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

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://tabler.io/icons" target="_blank" rel="noopener noreferrer">Tabler Icons</a> — Source library for all Delta Design System icons</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank">MDN Web Docs: SVG</a> — SVG element reference</li>
        <li><a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/" target="_blank">Sara Soueidan: Accessible Icon Buttons</a> — Patterns for icon button accessibility</li>
      </ul>
    </div>
  `;
};
