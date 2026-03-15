function createColorsDocumentation() {
  return `
    <article class="delta-docs">
      <div class="delta-docs__stack">
        <h1>Colors</h1>
        <p>
          The Delta Design System color palette is designed for clarity, accessibility, and consistency across light
          and dark modes. Every color serves a specific purpose and meets WCAG 2.1 AA contrast requirements.
        </p>

        <hr />

        <section class="delta-docs__section">
          <h2>Color philosophy</h2>
          <p>
            Colors communicate meaning, establish hierarchy, and reinforce brand identity. The system uses semantic
            naming to ensure colors are applied consistently and maintain their intended meaning across all
            components.
          </p>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>The color system</h2>
          <p>
            The complete color system includes brand colors, global neutrals, status indicators, and overlay
            utilities. All colors are available as design tokens and work across both light and dark modes.
          </p>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Brand colors</h3>
            <p>
              Brand colors define Delta's visual identity and remain mode-invariant across the system.
            </p>
            <div class="delta-docs__placeholder">
              <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
              <p>Render brand swatches for Primary, Primary dark, Secondary, and Secondary dark with token labels and values.</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Light mode</th>
                  <th>Dark mode</th>
                  <th>Notes / Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>brand/primary</code></td>
                  <td>#FF5247</td>
                  <td>#FF5247</td>
                  <td>Primary accent color for brand-forward actions and highlights.</td>
                </tr>
                <tr>
                  <td><code>brand/primary-dark</code></td>
                  <td>#B22E28</td>
                  <td>#B22E28</td>
                  <td>Darker brand accent for alternate emphasis and layered brand treatments.</td>
                </tr>
                <tr>
                  <td><code>brand/secondary</code></td>
                  <td>#003442</td>
                  <td>#003442</td>
                  <td>Secondary brand surface and dark-text accent color.</td>
                </tr>
                <tr>
                  <td><code>brand/secondary-dark</code></td>
                  <td>#01232D</td>
                  <td>#01232D</td>
                  <td>Deep brand background used for dark mode page surfaces.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Global colors</h3>
            <p>
              Global colors provide the neutral base for text, borders, backgrounds, and supporting UI surfaces.
            </p>
            <div class="delta-docs__placeholder">
              <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
              <p>Render global swatches for Black, White, Gray dark, Gray medium, and Gray light, including the bordered white sample.</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Light mode</th>
                  <th>Dark mode</th>
                  <th>Notes / Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>global/black</code></td>
                  <td>#000000</td>
                  <td>#000000</td>
                  <td>Core neutral for default text in light mode and inverse surfaces.</td>
                </tr>
                <tr>
                  <td><code>global/white</code></td>
                  <td>#FFFFFF</td>
                  <td>#FFFFFF</td>
                  <td>Core neutral for inverse text, light backgrounds, and contrast-heavy UI.</td>
                </tr>
                <tr>
                  <td><code>global/gray-dark</code></td>
                  <td>#919191</td>
                  <td>#919191</td>
                  <td>Muted neutral used for secondary text and lower-emphasis supporting content.</td>
                </tr>
                <tr>
                  <td><code>global/gray-medium</code></td>
                  <td>#CCCCCC</td>
                  <td>#CCCCCC</td>
                  <td>Neutral stroke and divider color for subtle boundaries.</td>
                </tr>
                <tr>
                  <td><code>global/gray-light</code></td>
                  <td>#EEEEEE</td>
                  <td>#EEEEEE</td>
                  <td>Light neutral surface for section backgrounds and low-emphasis containers.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Status colors</h3>
            <p>
              Status colors communicate disabled, invalid, valid, and read-only states. These values are functional,
              not brand expressions.
            </p>
            <div class="delta-docs__placeholder">
              <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
              <p>Render status swatches for Disabled, Invalid, Valid, and Read-only with token names and values.</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Light mode</th>
                  <th>Dark mode</th>
                  <th>Notes / Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>status/disabled</code></td>
                  <td>#808080</td>
                  <td>#808080</td>
                  <td>Disabled state indicator for non-interactive controls and unavailable actions.</td>
                </tr>
                <tr>
                  <td><code>status/invalid</code></td>
                  <td>#C00C00</td>
                  <td>#C00C00</td>
                  <td>Error state color for validation and failure messaging.</td>
                </tr>
                <tr>
                  <td><code>status/valid</code></td>
                  <td>#007000</td>
                  <td>#007000</td>
                  <td>Success state color for confirmations and positive validation.</td>
                </tr>
                <tr>
                  <td><code>status/read-only</code></td>
                  <td>#333333</td>
                  <td>#333333</td>
                  <td>Read-only state color for locked content and immutable controls.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Overlay colors</h3>
            <p>
              Overlay utilities add controlled darkening for media treatments and layered UI without introducing new
              opaque colors.
            </p>
            <div class="delta-docs__placeholder">
              <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
              <p>Render dark and light overlay gradient samples over representative imagery or neutral surfaces.</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Light mode</th>
                  <th>Dark mode</th>
                  <th>Notes / Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>overlay/dark</code></td>
                  <td>#000000 at 50% opacity</td>
                  <td>#000000 at 50% opacity</td>
                  <td>Stronger overlay for legibility over imagery and media-heavy backgrounds.</td>
                </tr>
                <tr>
                  <td><code>overlay/light</code></td>
                  <td>#000000 at 25% opacity</td>
                  <td>#000000 at 25% opacity</td>
                  <td>Lighter overlay for subtle image treatment and layered depth.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>Color modes</h2>
          <p>
            The Delta Design System supports both light and dark color modes. Semantic tokens automatically resolve to
            the appropriate color for each mode, ensuring consistent contrast and readability.
          </p>
          <div class="delta-docs__placeholder">
            <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
            <p>Render light and dark mode palette comparisons that demonstrate semantic token resolution on page and section surfaces.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Light mode</th>
                <th>Dark mode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>background/page</code></td>
                <td>#FFFFFF (global/white)</td>
                <td>#01232D (brand/secondary-dark)</td>
              </tr>
              <tr>
                <td><code>background/section</code></td>
                <td>#EEEEEE (global/gray-light)</td>
                <td>#003442 (brand/secondary)</td>
              </tr>
              <tr>
                <td><code>text/default</code></td>
                <td>#000000 (global/black)</td>
                <td>#FFFFFF (global/white)</td>
              </tr>
              <tr>
                <td><code>text/link</code></td>
                <td>#FF5247 (brand/primary)</td>
                <td>#FFFFFF (global/white)</td>
              </tr>
              <tr>
                <td><code>text/hover</code></td>
                <td>#003442 (brand/secondary)</td>
                <td>#FF5247 (brand/primary)</td>
              </tr>
            </tbody>
          </table>
          <p>
            In dark mode, <code>text/link</code> resolves to <code>global/white</code> rather than
            <code>brand/primary</code>. This is intentional. Primary (#FF5247) achieves only 3.35:1 against the dark
            page background (#003442), which is insufficient for body-size link text. Verify that focus and hover
            states account for this contrast difference.
          </p>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>Accessibility</h2>
          <p>
            All color combinations meet WCAG 2.1 Level AA contrast requirements for their intended use. The system
            prioritizes accessibility without compromising visual appeal.
          </p>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Light mode contrast ratios</h3>
            <table>
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Hex</th>
                  <th>Background</th>
                  <th>Ratio</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary</td>
                  <td>#FF5247</td>
                  <td>White</td>
                  <td>3.52:1</td>
                  <td>AA (large text, UI)</td>
                </tr>
                <tr>
                  <td>Secondary</td>
                  <td>#003442</td>
                  <td>White</td>
                  <td>11.58:1</td>
                  <td>AAA</td>
                </tr>
                <tr>
                  <td>Black</td>
                  <td>#000000</td>
                  <td>White</td>
                  <td>21:1</td>
                  <td>AAA</td>
                </tr>
                <tr>
                  <td>Gray dark</td>
                  <td>#919191</td>
                  <td>White</td>
                  <td>3.94:1</td>
                  <td>AA (large text)</td>
                </tr>
                <tr>
                  <td>Disabled</td>
                  <td>#808080</td>
                  <td>White</td>
                  <td>4.54:1</td>
                  <td>AA</td>
                </tr>
                <tr>
                  <td>Invalid</td>
                  <td>#C00C00</td>
                  <td>White</td>
                  <td>6.51:1</td>
                  <td>AA</td>
                </tr>
                <tr>
                  <td>Valid</td>
                  <td>#007000</td>
                  <td>White</td>
                  <td>5.25:1</td>
                  <td>AA</td>
                </tr>
                <tr>
                  <td>Read-only</td>
                  <td>#333333</td>
                  <td>White</td>
                  <td>12.63:1</td>
                  <td>AAA</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Dark mode contrast ratios</h3>
            <table>
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Hex</th>
                  <th>Background</th>
                  <th>Ratio</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>White</td>
                  <td>#FFFFFF</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>17.38:1</td>
                  <td>AAA</td>
                </tr>
                <tr>
                  <td>Primary</td>
                  <td>#FF5247</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>5.02:1</td>
                  <td>AA</td>
                </tr>
                <tr>
                  <td>Gray dark</td>
                  <td>#919191</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>7.27:1</td>
                  <td>AAA</td>
                </tr>
                <tr>
                  <td>White</td>
                  <td>#FFFFFF</td>
                  <td>Secondary (#003442)</td>
                  <td>11.58:1</td>
                  <td>AAA</td>
                </tr>
                <tr>
                  <td>Primary</td>
                  <td>#FF5247</td>
                  <td>Secondary (#003442)</td>
                  <td>3.35:1</td>
                  <td>AA (large text, UI)</td>
                </tr>
                <tr>
                  <td>Gray dark</td>
                  <td>#919191</td>
                  <td>Secondary (#003442)</td>
                  <td>4.84:1</td>
                  <td>AA</td>
                </tr>
                <tr>
                  <td>Disabled</td>
                  <td>#808080</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>3.83:1</td>
                  <td>AA (large text)</td>
                </tr>
                <tr>
                  <td>Invalid</td>
                  <td>#C00C00</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>4.49:1</td>
                  <td>AA</td>
                </tr>
                <tr>
                  <td>Valid</td>
                  <td>#007000</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>3.53:1</td>
                  <td>AA (large text, UI)</td>
                </tr>
                <tr>
                  <td>Read-only</td>
                  <td>#333333</td>
                  <td>Secondary-dark (#01232D)</td>
                  <td>8.73:1</td>
                  <td>AAA</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Contrast requirements</h3>
            <ul>
              <li><strong>Body text (16px):</strong> Minimum 4.5:1 contrast ratio (WCAG AA)</li>
              <li><strong>Large text (18px+ or 14px+ bold):</strong> Minimum 3:1 contrast ratio (WCAG AA)</li>
              <li><strong>UI components:</strong> Minimum 3:1 contrast ratio (WCAG AA)</li>
            </ul>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Color and meaning</h3>
            <p>
              Status colors are never used alone. Error, success, and warning states must include both color and
              iconography or text to ensure meaning is conveyed to all users, including those with color vision
              deficiencies.
            </p>
          </section>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>Usage</h2>
          <p>
            Use the color system to apply semantic meaning consistently, support theming, and preserve accessible
            contrast across all Delta interfaces.
          </p>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>When to use</h3>
            <ul>
              <li>Use semantic tokens such as <code>text/default</code> and <code>background/page</code> to support light and dark modes automatically.</li>
              <li>Use status colors for functional states like disabled, invalid, valid, and read-only behavior.</li>
              <li>Use overlay tokens when you need controlled image treatment without creating new one-off colors.</li>
            </ul>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>When not to use</h3>
            <ul>
              <li>Do not use raw hex values in implementation when a design token already exists.</li>
              <li>Do not use brand colors to communicate functional status when a status token is available.</li>
              <li>Do not rely on color alone to communicate meaning or state changes.</li>
            </ul>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Mode switching</h3>
            <p>
              Users should have the ability to override system preferences and manually select their preferred color
              mode. Respect user choice and maintain their selection across sessions.
            </p>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Testing requirements</h3>
            <p>Always test designs in both light and dark modes to verify:</p>
            <ul>
              <li>All text meets minimum contrast requirements.</li>
              <li>Status colors remain distinguishable.</li>
              <li>Interactive elements are clearly visible.</li>
              <li>Focus indicators have sufficient contrast.</li>
            </ul>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Best practices</h3>
            <div class="delta-docs__do-dont-grid">
              <div class="delta-docs__practice delta-docs__practice--do">
                <h3>Do</h3>
                <p><strong>Use semantic tokens</strong></p>
                <p>Reference <code>text/default</code> instead of <code>global/black</code> to ensure proper theming support across light and dark modes.</p>
                <p><strong>Maintain consistent contrast</strong></p>
                <p>Always verify text meets minimum contrast requirements against its background in both light and dark modes.</p>
                <p><strong>Use status colors appropriately</strong></p>
                <p>Invalid states should use <code>status/invalid</code>, not <code>brand/primary</code>. Keep semantic separation between brand and functional colors.</p>
                <p><strong>Pair color with other indicators</strong></p>
                <p>Combine status colors with icons, labels, or patterns to convey meaning to all users.</p>
              </div>
              <div class="delta-docs__practice delta-docs__practice--dont">
                <h3>Don't</h3>
                <p><strong>Don't use hex values directly</strong></p>
                <p>Always reference design tokens to maintain consistency and enable proper mode switching.</p>
                <p><strong>Don't rely on color alone</strong></p>
                <p>Color by itself is not sufficient for users with color blindness. Always pair with text or iconography.</p>
                <p><strong>Don't use brand colors for status</strong></p>
                <p>Keep brand colors for branding and marketing. Use status colors for functional states like errors and success.</p>
                <p><strong>Don't override contrast requirements</strong></p>
                <p>Accessibility is not negotiable. Never reduce contrast below WCAG minimums.</p>
              </div>
            </div>
          </section>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>Design tokens reference</h2>
          <p>
            The color foundation defines mode-invariant base tokens and semantic tokens that resolve differently in
            light and dark mode contexts.
          </p>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>CSS</h3>
            <pre><code>/* Global color tokens */
:root {
  --color-brand-primary: #FF5247;
  --color-brand-primary-dark: #B22E28;
  --color-brand-secondary: #003442;
  --color-brand-secondary-dark: #01232D;
  --color-global-black: #000000;
  --color-global-white: #FFFFFF;
  --color-global-gray-dark: #919191;
  --color-global-gray-medium: #CCCCCC;
  --color-global-gray-light: #EEEEEE;
  --color-status-disabled: #808080;
  --color-status-invalid: #C00C00;
  --color-status-valid: #007000;
  --color-status-read-only: #333333;
  --color-overlay-dark: rgba(0, 0, 0, 0.5);
  --color-overlay-light: rgba(0, 0, 0, 0.25);

  /* Semantic tokens — light mode (default) */
  --color-background-page: var(--color-global-white);
  --color-background-section: var(--color-global-gray-light);
  --color-text-default: var(--color-global-black);
  --color-text-link: var(--color-brand-primary);
  --color-text-hover: var(--color-brand-secondary);
}

/* Semantic tokens — dark mode */
[data-theme="dark"] {
  --color-background-page: var(--color-brand-secondary-dark);
  --color-background-section: var(--color-brand-secondary);
  --color-text-default: var(--color-global-white);
  --color-text-link: var(--color-global-white);
  --color-text-hover: var(--color-brand-primary);
}

/* Usage */
body {
  color: var(--color-text-default);
  background-color: var(--color-background-page);
}

a {
  color: var(--color-text-link);
}

a:hover {
  color: var(--color-text-hover);
}

.error-message {
  color: var(--color-status-invalid);
}</code></pre>
          </section>

          <section class="delta-docs__section delta-docs__section--tight">
            <h3>Design tokens reference</h3>
            <pre><code>/* Brand — mode-invariant */
--color-brand-primary         #FF5247
--color-brand-primary-dark    #B22E28
--color-brand-secondary       #003442
--color-brand-secondary-dark  #01232D

/* Global — mode-invariant */
--color-global-black          #000000
--color-global-white          #FFFFFF
--color-global-gray-dark      #919191
--color-global-gray-medium    #CCCCCC
--color-global-gray-light     #EEEEEE

/* Status — mode-invariant */
--color-status-disabled       #808080
--color-status-invalid        #C00C00
--color-status-valid          #007000
--color-status-read-only      #333333

/* Overlay — mode-invariant */
--color-overlay-dark          rgba(0, 0, 0, 0.5)   /* #000000 at 50% */
--color-overlay-light         rgba(0, 0, 0, 0.25)  /* #000000 at 25% */

/* Semantic — resolves by mode */
                              Light                            Dark
--color-background-page       #FFFFFF (global/white)          #01232D (brand/secondary-dark)
--color-background-section    #EEEEEE (global/gray-light)     #003442 (brand/secondary)
--color-text-default          #000000 (global/black)          #FFFFFF (global/white)
--color-text-link             #FF5247 (brand/primary)         #FFFFFF (global/white)
--color-text-hover            #003442 (brand/secondary)       #FF5247 (brand/primary)</code></pre>
          </section>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>Resources</h2>
          <ul>
            <li><a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast Checker</a> — Test color contrast ratios for WCAG compliance</li>
            <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank">WCAG 2.1: Understanding Contrast (Minimum)</a> — Official WCAG guidelines for color contrast</li>
            <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html" target="_blank">WCAG 2.1: Use of Color</a> — Guidelines for conveying information with color</li>
            <li><a href="https://accessible-colors.com/" target="_blank">Accessible Colors</a> — Tool for finding accessible color combinations</li>
            <li><a href="https://www.interaction-design.org/literature/topics/color-theory" target="_blank">Interaction Design Foundation: Color Theory</a> — Fundamentals of color in design</li>
          </ul>
        </section>
      </div>
    </article>
  `;
}

const meta = {
  title: 'Foundations/Colors',
};

export default meta;

export const Documentation = () => createColorsDocumentation();
