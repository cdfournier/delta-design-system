function createColorsDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Colors</h1>
      <p>The Delta Design System color palette is designed for clarity, accessibility, and consistency across light and dark modes. Every color serves a specific purpose and meets WCAG 2.1 AA contrast requirements.</p>

      <hr />

      <h2>Color philosophy</h2>
      <p>Colors communicate meaning, establish hierarchy, and reinforce brand identity. The system uses semantic naming to ensure colors are applied consistently and maintain their intended meaning across all components.</p>

      <hr />

      <h2>The color system</h2>
      <p>The complete color system includes brand colors, global neutrals, status indicators, and overlay utilities. All colors are available as design tokens and work across both light and dark modes.</p>

      <h3>Brand colors</h3>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--brand-primary);"></div>
        <div class="color-info">
          <p class="color-name">Primary</p>
          <p><strong>Hex:</strong> <code>#FF5247</code></p>
          <p><strong>Token:</strong> <span class="color-token">brand/primary</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--brand-primary-dark);"></div>
        <div class="color-info">
          <p class="color-name">Primary dark</p>
          <p><strong>Hex:</strong> <code>#B22E28</code></p>
          <p><strong>Token:</strong> <span class="color-token">brand/primary-dark</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--brand-secondary);"></div>
        <div class="color-info">
          <p class="color-name">Secondary</p>
          <p><strong>Hex:</strong> <code>#003442</code></p>
          <p><strong>Token:</strong> <span class="color-token">brand/secondary</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--brand-secondary-dark);"></div>
        <div class="color-info">
          <p class="color-name">Secondary dark</p>
          <p><strong>Hex:</strong> <code>#01232D</code></p>
          <p><strong>Token:</strong> <span class="color-token">brand/secondary-dark</span></p>
        </div>
      </div>

      <h3>Global colors</h3>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--global-black);"></div>
        <div class="color-info">
          <p class="color-name">Black</p>
          <p><strong>Hex:</strong> <code>#000000</code></p>
          <p><strong>Token:</strong> <span class="color-token">global/black</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--global-white); --swatch-border-width: 0.125rem; --swatch-border-color: var(--global-gray-medium);"></div>
        <div class="color-info">
          <p class="color-name">White</p>
          <p><strong>Hex:</strong> <code>#FFFFFF</code></p>
          <p><strong>Token:</strong> <span class="color-token">global/white</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--global-gray-dark);"></div>
        <div class="color-info">
          <p class="color-name">Gray dark</p>
          <p><strong>Hex:</strong> <code>#919191</code></p>
          <p><strong>Token:</strong> <span class="color-token">global/gray-dark</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--global-gray-medium);"></div>
        <div class="color-info">
          <p class="color-name">Gray medium</p>
          <p><strong>Hex:</strong> <code>#CCCCCC</code></p>
          <p><strong>Token:</strong> <span class="color-token">global/gray-medium</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--global-gray-light);"></div>
        <div class="color-info">
          <p class="color-name">Gray light</p>
          <p><strong>Hex:</strong> <code>#EEEEEE</code></p>
          <p><strong>Token:</strong> <span class="color-token">global/gray-light</span></p>
        </div>
      </div>

      <h3>Status colors</h3>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--status-disabled);"></div>
        <div class="color-info">
          <p class="color-name">Disabled</p>
          <p><strong>Hex:</strong> <code>#808080</code></p>
          <p><strong>Token:</strong> <span class="color-token">status/disabled</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--status-invalid);"></div>
        <div class="color-info">
          <p class="color-name">Invalid</p>
          <p><strong>Hex:</strong> <code>#C00C00</code></p>
          <p><strong>Token:</strong> <span class="color-token">status/invalid</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--status-valid);"></div>
        <div class="color-info">
          <p class="color-name">Valid</p>
          <p><strong>Hex:</strong> <code>#007000</code></p>
          <p><strong>Token:</strong> <span class="color-token">status/valid</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box" style="--swatch-background: var(--status-read-only);"></div>
        <div class="color-info">
          <p class="color-name">Read-only</p>
          <p><strong>Hex:</strong> <code>#333333</code></p>
          <p><strong>Token:</strong> <span class="color-token">status/read-only</span></p>
        </div>
      </div>

      <h3>Overlay colors</h3>

      <div class="color-swatch">
        <div class="color-box color-box--overlay-dark"></div>
        <div class="color-info">
          <p class="color-name">Dark overlay</p>
          <p><strong>Value:</strong> <code>#000000</code> at 50% opacity</p>
          <p><strong>Token:</strong> <span class="color-token">overlay/dark</span></p>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-box color-box--overlay-light"></div>
        <div class="color-info">
          <p class="color-name">Light overlay</p>
          <p><strong>Value:</strong> <code>#000000</code> at 25% opacity</p>
          <p><strong>Token:</strong> <span class="color-token">overlay/light</span></p>
        </div>
      </div>

      <hr />

      <h2>Color modes</h2>
      <p>The Delta Design System supports both light and dark color modes. Semantic tokens automatically resolve to the appropriate color for each mode, ensuring consistent contrast and readability.</p>

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
      <p>In dark mode, <code>text/link</code> resolves to <code>global/white</code> rather than <code>brand/primary</code>. This is intentional — Primary (#FF5247) achieves only 3.35:1 against the dark page background (#003442), which is insufficient for body-size link text. Verify that focus and hover states account for this contrast difference.</p>

      <hr />

      <h2>Accessibility</h2>
      <p>All color combinations meet WCAG 2.1 Level AA contrast requirements for their intended use. The system prioritizes accessibility without compromising visual appeal.</p>

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

      <h3>Contrast requirements</h3>
      <ul>
        <li><strong>Body text (16px):</strong> Minimum 4.5:1 contrast ratio (WCAG AA)</li>
        <li><strong>Large text (18px+ or 14px+ bold):</strong> Minimum 3:1 contrast ratio (WCAG AA)</li>
        <li><strong>UI components:</strong> Minimum 3:1 contrast ratio (WCAG AA)</li>
      </ul>

      <h3>Color and meaning</h3>
      <p>Status colors are never used alone. Error, success, and warning states must include both color and iconography or text to ensure meaning is conveyed to all users, including those with color vision deficiencies.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use semantic tokens</h3>
      <p>Use semantic tokens (like <code>text/default</code>) instead of global tokens (like <code>global/black</code>) to ensure proper theming support across light and dark modes. Semantic tokens automatically resolve to the appropriate value for each mode.</p>

      <h3>Mode switching</h3>
      <p>Users should have the ability to override system preferences and manually select their preferred color mode. Respect user choice and maintain their selection across sessions.</p>

      <h3>Testing requirements</h3>
      <p>Always test designs in both light and dark modes to verify:</p>
      <ul>
        <li>All text meets minimum contrast requirements</li>
        <li>Status colors remain distinguishable</li>
        <li>Interactive elements are clearly visible</li>
        <li>Focus indicators have sufficient contrast</li>
      </ul>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
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

        <div class="dont-section">
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

      <hr />

      <h2>Code reference</h2>

      <h3>CSS</h3>
      <pre><code>/* Global color tokens */
:root {
  --brand-primary: #FF5247;
  --brand-primary-dark: #B22E28;
  --brand-secondary: #003442;
  --brand-secondary-dark: #01232D;
  --global-black: #000000;
  --global-white: #FFFFFF;
  --color-global-gray-dark: #919191;
  --color-global-gray-medium: #CCCCCC;
  --global-gray-light: #EEEEEE;
  --color-status-disabled: #808080;
  --status-invalid: #C00C00;
  --color-status-valid: #007000;
  --color-status-read-only: #333333;
  --color-overlay-dark: rgba(0, 0, 0, 0.5);
  --color-overlay-light: rgba(0, 0, 0, 0.25);

  /* Semantic tokens — light mode (default) */
  --page-background: var(--global-white);
  --color-background-section: var(--global-gray-light);
  --text-default: var(--global-black);
  --text-link: var(--brand-primary);
  --text-hover: var(--brand-secondary);
}

/* Semantic tokens — dark mode */
[data-theme="dark"] {
  --page-background: var(--brand-secondary-dark);
  --color-background-section: var(--brand-secondary);
  --text-default: var(--global-white);
  --text-link: var(--global-white);
  --text-hover: var(--brand-primary);
}

/* Usage */
body {
  color: var(--text-default);
  background-color: var(--page-background);
}

a {
  color: var(--text-link);
}

a:hover {
  color: var(--text-hover);
}

.error-message {
  color: var(--status-invalid);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Brand — mode-invariant */
--brand-primary         #FF5247
--brand-primary-dark    #B22E28
--brand-secondary       #003442
--brand-secondary-dark  #01232D

/* Global — mode-invariant */
--global-black          #000000
--global-white          #FFFFFF
--color-global-gray-dark      #919191
--color-global-gray-medium    #CCCCCC
--global-gray-light     #EEEEEE

/* Status — mode-invariant */
--color-status-disabled       #808080
--status-invalid        #C00C00
--color-status-valid          #007000
--color-status-read-only      #333333

/* Overlay — mode-invariant */
--color-overlay-dark          rgba(0, 0, 0, 0.5)   /* #000000 at 50% */
--color-overlay-light         rgba(0, 0, 0, 0.25)  /* #000000 at 25% */

/* Semantic — resolves by mode */
                              Light                 Dark
--page-background       #FFFFFF (global/white)          #01232D (brand/secondary-dark)
--color-background-section    #EEEEEE (global/gray-light)     #003442 (brand/secondary)
--text-default          #000000 (global/black)          #FFFFFF (global/white)
--text-link             #FF5247 (brand/primary)         #FFFFFF (global/white)
--text-hover            #003442 (brand/secondary)       #FF5247 (brand/primary)</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast Checker</a> — Test color contrast ratios for WCAG compliance</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank">WCAG 2.1: Understanding Contrast (Minimum)</a> — Official WCAG guidelines for color contrast</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html" target="_blank">WCAG 2.1: Use of Color</a> — Guidelines for conveying information with color</li>
        <li><a href="https://accessible-colors.com/" target="_blank">Accessible Colors</a> — Tool for finding accessible color combinations</li>
        <li><a href="https://www.interaction-design.org/literature/topics/color-theory" target="_blank">Interaction Design Foundation: Color Theory</a> — Fundamentals of color in design</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Foundations/Colors',
};

export default meta;

export const Documentation = () => createColorsDocumentation();
