function createButtonsDocumentation() {
  return `
    <style>
      .delta-docs .button-specimen-card {
        display: inline-flex;
        align-items: center;
        background: var(--section-background);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-xl);
      }

      [data-color-mode='dark'] .delta-docs .button-specimen-card {
        background: var(--brand-secondary);
      }

      .delta-docs .button-specimen-row {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xl);
      }

      .delta-docs .button-specimen-row--icon {
        gap: var(--components-button-demo-section-gap);
      }

      .delta-docs .button-specimen-group {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xl);
      }

      .delta-docs .button-specimen-divider {
        width: var(--docs-rule-width);
        align-self: stretch;
        background: var(--surface-border);
      }

      .delta-docs .button-specimen {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--components-button-padding-gap);
        padding: var(--components-button-padding-t-b) var(--components-button-padding-l-r);
        border: var(--docs-rule-width) solid transparent;
        border-radius: var(--components-button-border-radius);
        background: transparent;
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--components-button-font-size);
        line-height: var(--components-button-line-height);
        font-weight: var(--font-weight-bold);
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        min-width: 0;
      }

      .delta-docs .button-specimen__label {
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .delta-docs .button-specimen--primary {
        background: var(--brand-primary);
        border-color: var(--brand-primary);
        color: var(--global-white);
      }

      .delta-docs .button-specimen--secondary {
        background: var(--brand-secondary);
        border-color: var(--brand-secondary);
        color: var(--global-white);
      }

      .delta-docs .button-specimen--white {
        background: var(--global-white);
        border-color: var(--global-white);
        color: var(--brand-primary);
      }

      .delta-docs .button-specimen--transparent-primary {
        background: transparent;
        border-color: var(--brand-primary);
        color: var(--brand-primary);
      }

      .delta-docs .button-specimen--transparent-secondary {
        background: transparent;
        border-color: var(--brand-secondary);
        color: var(--brand-secondary);
      }

      .delta-docs .button-specimen--disabled {
        background: var(--status-disabled);
        border-color: var(--status-disabled);
        color: var(--global-white);
      }

      .delta-docs .button-specimen--disabled-transparent {
        background: transparent;
        border-color: var(--status-disabled);
        color: var(--status-disabled);
      }

      .delta-docs .button-specimen__icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--components-button-icon-size);
        height: var(--components-button-icon-size);
        flex: 0 0 auto;
      }

      .delta-docs .button-specimen__icon svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
        stroke-width: var(--components-button-icon-stroke-width);
        fill: none;
        vector-effect: non-scaling-stroke;
      }

      .delta-docs .button-specimen--icon-only {
        width: var(--components-button-demo-icon-button-size);
        height: var(--components-button-demo-icon-button-size);
        padding: var(--components-button-icon-padding);
        border-radius: var(--border-radius-round);
      }

      .delta-docs .button-specimen--outline-primary {
        background: transparent;
        border-color: var(--brand-primary);
        color: var(--brand-primary);
      }

      .delta-docs .button-specimen--outline-secondary {
        background: transparent;
        border-color: var(--brand-secondary);
        color: var(--brand-secondary);
      }

      .delta-docs .button-specimen--icon-transparent-primary {
        background: transparent;
        border-color: transparent;
        color: var(--brand-primary);
      }

      .delta-docs .button-specimen--icon-transparent-secondary {
        background: transparent;
        border-color: transparent;
        color: var(--brand-secondary);
      }

      .delta-docs .button-specimen--primary:hover,
      .delta-docs .button-specimen--primary:focus-visible,
      .delta-docs .button-specimen--secondary:hover,
      .delta-docs .button-specimen--secondary:focus-visible,
      .delta-docs .button-specimen--outline-primary:hover,
      .delta-docs .button-specimen--outline-primary:focus-visible,
      .delta-docs .button-specimen--outline-secondary:hover,
      .delta-docs .button-specimen--outline-secondary:focus-visible,
      .delta-docs .button-specimen--icon-transparent-primary:hover,
      .delta-docs .button-specimen--icon-transparent-primary:focus-visible,
      .delta-docs .button-specimen--icon-transparent-secondary:hover,
      .delta-docs .button-specimen--icon-transparent-secondary:focus-visible,
      .delta-docs .button-specimen--transparent-primary:hover,
      .delta-docs .button-specimen--transparent-primary:focus-visible,
      .delta-docs .button-specimen--transparent-secondary:hover,
      .delta-docs .button-specimen--transparent-secondary:focus-visible,
      .delta-docs .button-specimen--white:hover,
      .delta-docs .button-specimen--white:focus-visible {
        outline-offset: var(--spacing-xs);
      }

      .delta-docs .button-specimen--primary:hover,
      .delta-docs .button-specimen--primary:focus-visible {
        background: var(--global-white);
        border-color: var(--brand-primary);
        color: var(--brand-primary);
      }

      .delta-docs .button-specimen--secondary:hover,
      .delta-docs .button-specimen--secondary:focus-visible {
        background: var(--global-white);
        border-color: var(--brand-secondary);
        color: var(--brand-secondary);
      }

      .delta-docs .button-specimen--white:hover,
      .delta-docs .button-specimen--white:focus-visible {
        background: var(--brand-primary);
        border-color: var(--global-white);
        color: var(--global-white);
      }

      .delta-docs .button-specimen--transparent-primary:hover,
      .delta-docs .button-specimen--transparent-primary:focus-visible,
      .delta-docs .button-specimen--outline-primary:hover,
      .delta-docs .button-specimen--outline-primary:focus-visible,
      .delta-docs .button-specimen--icon-transparent-primary:hover,
      .delta-docs .button-specimen--icon-transparent-primary:focus-visible {
        background: var(--brand-primary);
        border-color: var(--brand-primary);
        color: var(--global-white);
      }

      .delta-docs .button-specimen--transparent-secondary:hover,
      .delta-docs .button-specimen--transparent-secondary:focus-visible,
      .delta-docs .button-specimen--outline-secondary:hover,
      .delta-docs .button-specimen--outline-secondary:focus-visible,
      .delta-docs .button-specimen--icon-transparent-secondary:hover,
      .delta-docs .button-specimen--icon-transparent-secondary:focus-visible {
        background: var(--brand-secondary);
        border-color: var(--brand-secondary);
        color: var(--global-white);
      }
    </style>
    <article class="delta-docs">
      <h1>Buttons</h1>
      <p>Buttons trigger actions or navigate users through interfaces. They communicate interactive affordance through visual weight, color, and feedback states.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Buttons consist of:</p>
      <ul>
        <li><strong>Label:</strong> Action-oriented text describing what the button does</li>
        <li><strong>Container:</strong> Background and border that defines the clickable area and communicates variant and style</li>
        <li><strong>Icon (optional):</strong> Visual reinforcement placed before (left) or after (right) the label</li>
      </ul>

      <div class="button-specimen-card" aria-label="Button anatomy specimen">
        <div class="button-specimen-row">
          <button class="button-specimen button-specimen--primary" type="button"><span class="button-specimen__label">Label</span></button>
          <button class="button-specimen button-specimen--secondary" type="button">
            <span class="button-specimen__label">Label</span>
            <span class="button-specimen__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Buttons have two axes of variation: <strong>variant</strong> (color palette) and <strong>style</strong> (visual treatment). These combine to produce the full set of button appearances.</p>

      <h3>Variant</h3>
      <p>Variant controls the color palette and communicates hierarchy.</p>
      <ul>
        <li><strong>Primary (default):</strong> Uses the brand red palette. For the most important action on a page. Limit to one primary button per section to maintain clear hierarchy.</li>
        <li><strong>Secondary:</strong> Uses the brand teal palette. For supporting actions that complement the primary action without competing for attention.</li>
        <li><strong>White:</strong> Uses white as the foreground color. For buttons placed on dark or colored backgrounds where primary and secondary colors would lack contrast.</li>
      </ul>

      <h3>Style</h3>
      <p>Style controls the visual weight and fill treatment of buttons. Regular buttons support two styles: solid and transparent.</p>
      <ul>
        <li><strong>Solid (default):</strong> Filled background provides maximum visual weight. Use for primary and important secondary actions.</li>
        <li><strong>Transparent:</strong> Transparent background with a transparent border in the default state. On hover, the background becomes solid and the border becomes visible in the variant color — the inverse of the solid style. The lowest visual weight. Use for low-emphasis actions, inline controls, or contexts where minimal visual presence is required.</li>
      </ul>

      <div class="button-specimen-card" aria-label="Button variants specimen">
        <div class="button-specimen-row">
          <button class="button-specimen button-specimen--primary" type="button"><span class="button-specimen__label">Primary</span></button>
          <button class="button-specimen button-specimen--secondary" type="button"><span class="button-specimen__label">Secondary</span></button>
          <button class="button-specimen button-specimen--white" type="button"><span class="button-specimen__label">White</span></button>
        </div>
      </div>

      <div class="button-specimen-card" aria-label="Button style specimen">
        <div class="button-specimen-row">
          <button class="button-specimen button-specimen--primary" type="button"><span class="button-specimen__label">Solid</span></button>
          <button class="button-specimen button-specimen--transparent-primary" type="button"><span class="button-specimen__label">Transparent</span></button>
        </div>
      </div>

      <h3>Icon-only buttons</h3>
      <p>Icon-only buttons display a single icon without a text label, providing a compact interactive element for toolbars, navigation, and space-constrained interfaces. Icon buttons support all three variants (primary, secondary, white) and all three styles (solid, outline, transparent).</p>
      <p>Icon buttons use a circular border-radius (<code>border-radius/round</code>) and uniform padding on all sides. Because there is no visible label, icon-only buttons require accessible labeling — use either a visually hidden <code>&lt;span&gt;</code> element or the <code>aria-label</code> attribute to provide screen readers with a descriptive label.</p>
      <p>The outline style is available only for icon-only buttons — it provides a middle weight between solid and transparent, useful when you need more visual presence than transparent offers but don&apos;t want the full weight of a solid fill.</p>

      <div class="button-specimen-card" aria-label="Icon-only button specimens">
        <div class="button-specimen-row button-specimen-row--icon">
          <div class="button-specimen-group" aria-label="Primary icon-only buttons">
            <button class="button-specimen button-specimen--icon-only button-specimen--primary" type="button" aria-label="Primary solid search">
              <span class="button-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L20 20" />
                </svg>
              </span>
            </button>
            <button class="button-specimen button-specimen--icon-only button-specimen--outline-primary" type="button" aria-label="Primary outline search">
              <span class="button-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L20 20" />
                </svg>
              </span>
            </button>
            <button class="button-specimen button-specimen--icon-only button-specimen--icon-transparent-primary" type="button" aria-label="Primary transparent search">
              <span class="button-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L20 20" />
                </svg>
              </span>
            </button>
          </div>
          <span class="button-specimen-divider" aria-hidden="true"></span>
          <div class="button-specimen-group" aria-label="Secondary icon-only buttons">
            <button class="button-specimen button-specimen--icon-only button-specimen--secondary" type="button" aria-label="Secondary solid search">
              <span class="button-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L20 20" />
                </svg>
              </span>
            </button>
            <button class="button-specimen button-specimen--icon-only button-specimen--outline-secondary" type="button" aria-label="Secondary outline search">
              <span class="button-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L20 20" />
                </svg>
              </span>
            </button>
            <button class="button-specimen button-specimen--icon-only button-specimen--icon-transparent-secondary" type="button" aria-label="Secondary transparent search">
              <span class="button-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L20 20" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <hr />

      <h2>States</h2>
      <p>Button states provide visual feedback about interaction and availability. All states apply across every variant and style combination.</p>

      <h3>Default</h3>
      <p>The resting state before any user interaction. Buttons clearly indicate they are interactive through their color, border, and shape.</p>

      <h3>Hover</h3>
      <p>Regular buttons invert their appearance on hover: solid buttons swap to a transparent background with a visible border, and transparent buttons gain a solid filled background. Icon-only outline buttons invert between outline and solid fill. This inverse pattern creates an immediate and consistent visual response across all button types.</p>

      <h3>Focus</h3>
      <p>Focus state uses the browser default focus ring to ensure keyboard users receive clear and reliable visual feedback. Do not suppress or override the default focus outline.</p>

      <h3>Disabled</h3>
      <p>Disabled buttons use the <code>status/disabled</code> token (#808080) for both background and border, with white text. Transparent style buttons use #808080 for text only, with no fill or border. Include both the <code>disabled</code> HTML attribute and <code>aria-disabled=&quot;true&quot;</code> to ensure proper accessibility behavior.</p>

      <div class="button-specimen-card" aria-label="Disabled button specimens">
        <div class="button-specimen-row">
          <button class="button-specimen button-specimen--disabled" type="button" disabled aria-disabled="true"><span class="button-specimen__label">Primary disabled</span></button>
          <button class="button-specimen button-specimen--disabled-transparent" type="button" disabled aria-disabled="true"><span class="button-specimen__label">Secondary transparent disabled</span></button>
        </div>
      </div>

      <hr />

      <h2>Typography</h2>
      <p>Button text uses Montserrat Bold. Font size and line height scale responsively from mobile to widescreen with a 1:1 line-height ratio at both breakpoints.</p>

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
            <td>font-size</td>
            <td><code>components/button/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>line-height</td>
            <td><code>components/button/line-height</code></td>
            <td>0.75rem / 12px</td>
            <td>1.5rem / 24px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Spacing</h2>
      <p>Button padding scales responsively using global spacing tokens. At widescreen, horizontal padding doubles to maintain visual balance with larger layouts.</p>

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
            <td>padding-top, padding-bottom</td>
            <td><code>components/button/padding-t-b</code></td>
            <td>0.5rem / 8px</td>
            <td>0.75rem / 12px</td>
          </tr>
          <tr>
            <td>padding-left, padding-right</td>
            <td><code>components/button/padding-l-r</code></td>
            <td>1.5rem / 24px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>gap</td>
            <td><code>components/button/padding-gap</code></td>
            <td>0.25rem / 4px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>Icon-only button padding</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
        </tbody>
      </table>

      <p>For spacing between buttons in a group, see the Placement subsection under Usage.</p>

      <hr />

      <h2>Border-radius</h2>
      <p>Buttons use a fixed border-radius token that does not scale responsively. The full-round shape is defined by the <code>button/border-radius</code> token.</p>

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
            <td>Button container</td>
            <td><code>components/button/border-radius</code></td>
            <td>2rem / 32px (fixed)</td>
            <td>2rem / 32px (fixed)</td>
          </tr>
          <tr>
            <td>Icon-only button</td>
            <td><code>border-radius/round</code></td>
            <td>6.25rem / 100px (fixed)</td>
            <td>6.25rem / 100px (fixed)</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Colors</h2>
      <p>Button colors vary by variant and state. The disabled state uses a shared token across all variants and styles. Buttons are mode-invariant — the same color values are used in both light and dark mode.</p>

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
            <td>Primary background (default)</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
          <tr>
            <td>Primary background (hover)</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Primary text / border</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
          <tr>
            <td>Secondary background (default)</td>
            <td><code>brand/secondary</code></td>
            <td>#003442</td>
            <td>#003442</td>
          </tr>
          <tr>
            <td>Secondary background (hover)</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Secondary text / border</td>
            <td><code>brand/secondary</code></td>
            <td>#003442</td>
            <td>#003442</td>
          </tr>
          <tr>
            <td>White background (default)</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>White text / border</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>White hover background</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
          <tr>
            <td>Disabled background / border</td>
            <td><code>status/disabled</code></td>
            <td>#808080</td>
            <td>#808080</td>
          </tr>
          <tr>
            <td>Disabled text (transparent style)</td>
            <td><code>status/disabled</code></td>
            <td>#808080</td>
            <td>#808080</td>
          </tr>
          <tr>
            <td>Label text on filled backgrounds</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Button colors are mode-invariant. All variant and state colors resolve to the same values in both light and dark mode.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>All buttons must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the next button</li>
        <li><strong>Shift + Tab:</strong> Moves focus to the previous button</li>
        <li><strong>Enter:</strong> Activates the focused button</li>
        <li><strong>Space:</strong> Activates the focused button (native <code>&lt;button&gt;</code> elements only)</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use semantic <code>&lt;button&gt;</code> elements for actions and <code>&lt;a&gt;</code> elements for navigation. Native <code>&lt;button&gt;</code> elements are announced correctly without additional ARIA. For icon-only buttons, use a visually hidden <code>&lt;span&gt;</code> rather than <code>aria-label</code> — the hidden span approach is more robust for translation tools and voice control software.</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>aria-disabled=&quot;true&quot;:</strong> Apply alongside the <code>disabled</code> HTML attribute on disabled buttons to ensure both visual and programmatic disabled state are communicated</li>
        <li><strong>aria-label:</strong> Use only if no visible label is present and a visually hidden span is not feasible</li>
        <li><strong>aria-pressed:</strong> Use on toggle buttons that switch between on/off states</li>
        <li><strong>aria-expanded:</strong> Use on buttons that open or close a region (e.g. accordions, dropdowns)</li>
      </ul>

      <h3>Focus management</h3>
      <p>Do not suppress or override the browser default focus ring. The default focus outline provides keyboard users with reliable visual feedback across browsers and operating systems. Where custom focus styles are needed, ensure they meet WCAG 2.1 AA requirements: a minimum 3:1 contrast ratio for the focus indicator against adjacent colors.</p>

      <h3>Color contrast</h3>
      <p>All button text must meet WCAG AA contrast requirements (4.5:1 for normal text). Primary and secondary variants on solid and outline styles achieve this. White buttons on dark backgrounds are designed with sufficient contrast in mind — verify contrast when placing white buttons on non-system background colors. Disabled buttons intentionally use reduced contrast (<code>status/disabled</code>) to visually communicate unavailability; this is an accepted WCAG exception for disabled components.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <ul>
        <li><strong>Primary actions:</strong> Main actions a user should take — submit, save, create, confirm</li>
        <li><strong>Secondary actions:</strong> Supporting or alternative actions — cancel, go back, skip</li>
        <li><strong>Form submission:</strong> Triggering form validation and submission</li>
        <li><strong>Navigation triggers:</strong> Opening modals, expanding sections, or switching views</li>
      </ul>

      <h3>When not to use</h3>
      <ul>
        <li><strong>Navigation to new pages:</strong> Use a Link component for navigating between pages or to external URLs</li>
        <li><strong>Inline text emphasis:</strong> Do not use buttons to draw attention to inline text</li>
        <li><strong>Non-interactive elements:</strong> Buttons must always trigger an action — never use them as decorative or static elements</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Lead with action verbs:</strong> Start labels with clear verbs — &quot;Save changes,&quot; &quot;Delete item,&quot; &quot;Create account&quot;</li>
        <li><strong>Be specific:</strong> Avoid generic labels like &quot;Click here,&quot; &quot;Submit,&quot; or &quot;OK&quot; without contextual meaning</li>
        <li><strong>Keep text short:</strong> Button labels should be 1–3 words; four words maximum in rare cases</li>
        <li><strong>Use sentence case:</strong> Capitalize only the first word unless the label contains a proper noun</li>
      </ul>

      <h3>Placement</h3>
      <p>Button placement should follow the natural reading flow and content alignment of the surrounding context.</p>
      <ul>
        <li><strong>Right-aligned groups:</strong> In forms and modals (the most common pattern), place the primary action on the right and secondary actions to its left</li>
        <li><strong>Left-aligned groups:</strong> When buttons align with left-aligned content, place the primary action on the left</li>
        <li><strong>Mobile stacking:</strong> On small screens, buttons in a group typically stack vertically and span the full container width; place the primary action on top</li>
        <li><strong>Spacing between buttons:</strong> Use 0.5rem / 8px (md) between buttons in a group on mobile/tablet, and 1rem / 16px (md) at widescreen</li>
        <li><strong>Destructive actions:</strong> Add extra visual separation between destructive actions (delete, remove) and non-destructive ones to prevent accidental activation</li>
      </ul>

      <h3>Best practices</h3>
      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Lead with action verbs</strong></p>
          <p>Start button labels with clear verbs: &quot;Save changes,&quot; &quot;Delete item,&quot; &quot;Create account.&quot; Action-first labels make it immediately clear what the button does.</p>

          <p><strong>Limit primary buttons per section</strong></p>
          <p>Use one primary button per section or view to maintain a clear visual hierarchy and guide users to the most important action.</p>

          <p><strong>Match style to hierarchy</strong></p>
          <p>Use solid for primary actions, outline for secondary actions, and transparent for low-emphasis or inline controls. Mixing hierarchy levels creates visual noise.</p>

          <p><strong>Preserve focus states</strong></p>
          <p>Ensure keyboard users can clearly see which button has focus. Never suppress the default focus ring without a high-contrast replacement.</p>
        </div>

        <div class="dont-section">
          <h3>Don&apos;t</h3>

          <p><strong>Don&apos;t use vague labels</strong></p>
          <p>Avoid generic text like &quot;Click here,&quot; &quot;Submit,&quot; or &quot;OK&quot; without context. Labels should describe the specific action and its outcome.</p>

          <p><strong>Don&apos;t rely on color alone</strong></p>
          <p>Button states should communicate through shape, border, and text changes — not just color. This ensures accessibility for color-blind users.</p>

          <p><strong>Don&apos;t use buttons for navigation</strong></p>
          <p>Use links for navigating between pages or to external URLs. Buttons are for actions; using them for navigation confuses assistive technology users.</p>

          <p><strong>Don&apos;t make buttons too small</strong></p>
          <p>Maintain a minimum 44×44px touch target for all interactive elements on mobile. Small targets cause accidental taps and frustrate users.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Use &lt;button&gt; for actions --&gt;
&lt;button type="button" class="button button-primary-solid"&gt;
  Save changes
&lt;/button&gt;

&lt;!-- Use &lt;a&gt; for navigation --&gt;
&lt;a href="/page" class="button button-secondary-solid"&gt;
  View details
&lt;/a&gt;

&lt;!-- Transparent style --&gt;
&lt;button type="button" class="button button-secondary-transparent"&gt;
  Learn more
&lt;/button&gt;

&lt;!-- Disabled button --&gt;
&lt;button type="button" class="button button-primary-solid" disabled aria-disabled="true"&gt;
  Submit
&lt;/button&gt;

&lt;!-- Button with icon (left) --&gt;
&lt;button type="button" class="button button-primary-solid"&gt;
  &lt;svg aria-hidden="true" focusable="false" width="16" height="16"&gt;...&lt;/svg&gt;
  Save changes
&lt;/button&gt;

&lt;!-- Icon-only button with aria-label --&gt;
&lt;button type="button" class="button button-primary-solid button-icon" aria-label="Settings"&gt;
  &lt;svg aria-hidden="true" focusable="false" width="16" height="16"&gt;...&lt;/svg&gt;
&lt;/button&gt;

&lt;!-- Icon-only button with visually-hidden label (preferred) --&gt;
&lt;button type="button" class="button button-primary-solid button-icon"&gt;
  &lt;span class="visually-hidden"&gt;Settings&lt;/span&gt;
  &lt;svg aria-hidden="true" focusable="false" width="16" height="16"&gt;...&lt;/svg&gt;
&lt;/button&gt;

&lt;!-- Icon-only button with outline style --&gt;
&lt;button type="button" class="button button-primary-outline button-icon" aria-label="Menu"&gt;
  &lt;svg aria-hidden="true" focusable="false" width="16" height="16"&gt;...&lt;/svg&gt;
&lt;/button&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Visually-hidden utility — for icon-only button labels */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Base button */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--components-button-padding-gap);
  padding: var(--components-button-padding-t-b) var(--components-button-padding-l-r);
  border-radius: var(--components-button-border-radius);
  font-size: var(--components-button-font-size);
  line-height: var(--components-button-line-height);
  font-weight: 700;
  font-family: var(--font-family-body);
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

/* Icon-only button */
.button-icon {
  padding: var(--spacing-sm);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--border-radius-round);
}

/* Primary solid */
.button-primary-solid {
  background-color: var(--brand-primary);
  color: var(--global-white);
  border-color: var(--brand-primary);
}
.button-primary-solid:hover,
.button-primary-solid:focus-visible {
  background-color: var(--global-white);
  color: var(--brand-primary);
  border-color: var(--brand-primary);
}

/* Primary outline (icon buttons only) */
.button-primary-outline {
  background-color: transparent;
  color: var(--brand-primary);
  border-color: var(--brand-primary);
}
.button-primary-outline:hover,
.button-primary-outline:focus-visible {
  background-color: var(--brand-primary);
  color: var(--global-white);
  border-color: var(--brand-primary);
}

/* Primary transparent */
.button-primary-transparent {
  background-color: transparent;
  color: var(--brand-primary);
  border-color: transparent;
}
.button-primary-transparent:hover,
.button-primary-transparent:focus-visible {
  background-color: var(--brand-primary);
  color: var(--global-white);
  border-color: var(--brand-primary);
}

/* Secondary solid */
.button-secondary-solid {
  background-color: var(--brand-secondary);
  color: var(--global-white);
  border-color: var(--brand-secondary);
}
.button-secondary-solid:hover,
.button-secondary-solid:focus-visible {
  background-color: var(--global-white);
  color: var(--brand-secondary);
  border-color: var(--brand-secondary);
}

/* Secondary outline (icon buttons only) */
.button-secondary-outline {
  background-color: transparent;
  color: var(--brand-secondary);
  border-color: var(--brand-secondary);
}
.button-secondary-outline:hover,
.button-secondary-outline:focus-visible {
  background-color: var(--brand-secondary);
  color: var(--global-white);
  border-color: var(--brand-secondary);
}

/* Secondary transparent */
.button-secondary-transparent {
  background-color: transparent;
  color: var(--brand-secondary);
  border-color: transparent;
}
.button-secondary-transparent:hover,
.button-secondary-transparent:focus-visible {
  background-color: var(--brand-secondary);
  color: var(--global-white);
  border-color: var(--brand-secondary);
}

/* White solid (for dark backgrounds) */
.button-white-solid {
  background-color: var(--global-white);
  color: var(--brand-primary);
  border-color: var(--global-white);
}
.button-white-solid:hover,
.button-white-solid:focus-visible {
  background-color: var(--brand-primary);
  color: var(--global-white);
  border-color: var(--global-white);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components-button-font-size      Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--components-button-line-height    Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px

/* Spacing */
--components-button-padding-t-b    Mobile: 0.5rem / 8px     →   Widescreen: 0.75rem / 12px
--components-button-padding-l-r    Mobile: 1.5rem / 24px    →   Widescreen: 2rem / 32px
--components-button-padding-gap    Mobile: 0.25rem / 4px    →   Widescreen: 0.25rem / 4px
--spacing-sm                               Mobile: 0.25rem / 4px    →   Widescreen: 0.5rem / 8px

/* Border-radius */
--components-button-border-radius  Mobile: 2rem / 32px (fixed)        →   Widescreen: 2rem / 32px (fixed)
--border-radius-round              Mobile: 6.25rem / 100px (fixed)    →   Widescreen: 6.25rem / 100px (fixed)

/* Colors */
--brand-primary        Light: #FF5247   Dark: #FF5247
--brand-primary-dark   Light: #B22E28   Dark: #B22E28
--brand-secondary      Light: #003442   Dark: #003442
--brand-secondary-dark Light: #01232D   Dark: #01232D
--global-white         Light: #FFFFFF   Dark: #FFFFFF
--status-disabled      Light: #808080   Dark: #808080</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" target="_blank">WAI-ARIA APG: Button Pattern</a> — Official accessibility guidance for button behavior</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" target="_blank">MDN: &lt;button&gt;</a> — HTML button element reference</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed" target="_blank">MDN: aria-pressed</a> — Guidance for toggle buttons</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" target="_blank">WCAG 2.1: Target Size</a> — Minimum touch target guidance</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Atoms/Buttons',
};

export default meta;

export const Documentation = () => createButtonsDocumentation();
