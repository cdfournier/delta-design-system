export default {
  title: 'Atoms/Buttons',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'white'],
      description: 'Color palette',
      table: { defaultValue: { summary: 'primary' } },
    },
    style: {
      control: { type: 'select' },
      options: ['solid', 'transparent'],
      description: 'Visual treatment',
      table: { defaultValue: { summary: 'solid' } },
    },
    label: {
      control: { type: 'text' },
      description: 'Button label text',
    },
  },
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Buttons</h1>
      <p>Buttons trigger actions or navigate users through interfaces. They communicate interactive affordance through visual weight, color, and feedback states.</p>

      <hr>

      <h2>Anatomy</h2>
      <p>Buttons consist of:</p>
      <ul>
        <li><strong>Label:</strong> Action-oriented text describing what the button does</li>
        <li><strong>Container:</strong> Background and border that defines the clickable area and communicates variant and style</li>
        <li><strong>Icon (optional):</strong> Visual reinforcement placed before (left) or after (right) the label</li>
      </ul>

      <hr>

      <h2>Variants</h2>
      <p>Buttons have two axes of variation: <strong>variant</strong> (color palette) and <strong>style</strong> (visual treatment). These combine to produce the full set of button appearances.</p>

      <h3>Variant</h3>
      <p>Variant controls the color palette and communicates hierarchy.</p>
      <ul>
        <li><strong>Primary (default):</strong> Uses the brand red palette. For the most important action on a page. Limit to one primary button per section to maintain clear hierarchy.</li>
        <li><strong>Secondary:</strong> Uses the brand teal palette. For supporting actions that complement the primary action without competing for attention.</li>
        <li><strong>White:</strong> Uses white as the foreground color. For buttons placed on dark or colored backgrounds where primary and secondary colors would lack contrast.</li>
      </ul>

      <div class="component-demo">
        <div class="button-group">
          <button class="button button-primary-solid" type="button">Primary</button>
          <button class="button button-secondary-solid" type="button">Secondary</button>
        </div>
        <div class="button-group" style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">
          <button class="button button-white-solid" type="button">White</button>
        </div>
        <div class="button-group">
          <button class="button button-primary-solid" type="button">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Primary
          </button>
          <button class="button button-secondary-solid" type="button">
            Secondary
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="button-group" style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">
          <button class="button button-white-solid" type="button">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            White
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>

      <h3>Style</h3>
      <p>Style controls the visual weight and fill treatment of buttons. Regular buttons support two styles: solid and transparent.</p>
      <ul>
        <li><strong>Solid (default):</strong> Filled background provides maximum visual weight. Use for primary and important secondary actions.</li>
        <li><strong>Transparent:</strong> Transparent background with a transparent border in the default state. On hover, the background becomes solid and the border becomes visible in the variant color — the inverse of the solid style. The lowest visual weight. Use for low-emphasis actions, inline controls, or contexts where minimal visual presence is required.</li>
      </ul>

      <div class="component-demo">
        <p style="font-size: var(--small-font-size); line-height: var(--small-line-height); font-weight: 700; margin-bottom: var(--spacing-xl); text-transform: uppercase; letter-spacing: 0.05em;">Primary</p>
        <div class="button-group" style="margin-bottom: var(--spacing-xl);">
          <button class="button button-primary-solid" type="button">Solid</button>
          <button class="button button-primary-transparent" type="button">Transparent</button>
        </div>
        <p style="font-size: var(--small-font-size); line-height: var(--small-line-height); font-weight: 700; margin-bottom: var(--spacing-xl); text-transform: uppercase; letter-spacing: 0.05em;">Secondary</p>
        <div class="button-group" style="margin-bottom: var(--spacing-xl);">
          <button class="button button-secondary-solid" type="button">Solid</button>
          <button class="button button-secondary-transparent" type="button">Transparent</button>
        </div>
        <p style="font-size: var(--small-font-size); line-height: var(--small-line-height); font-weight: 700; margin-bottom: var(--spacing-xl); text-transform: uppercase; letter-spacing: 0.05em;">White (shown on dark background)</p>
        <div class="button-group" style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">
          <button class="button button-white-solid" type="button">Solid</button>
          <button class="button button-white-transparent" type="button">Transparent</button>
        </div>
      </div>

      <h3>Icon-only buttons</h3>
      <p>Icon-only buttons display a single icon without a text label, providing a compact interactive element for toolbars, navigation, and space-constrained interfaces. Icon buttons support all three variants (primary, secondary, white) and all three styles (solid, outline, transparent).</p>
      <p>Icon buttons use a circular border-radius (<code>border-radius/round</code>) and uniform padding on all sides. Because there is no visible label, icon-only buttons require accessible labeling — use either a visually hidden <code>&lt;span&gt;</code> element or the <code>aria-label</code> attribute to provide screen readers with a descriptive label.</p>
      <p>The outline style is available only for icon-only buttons — it provides a middle weight between solid and transparent, useful when you need more visual presence than transparent offers but don't want the full weight of a solid fill.</p>

      <div class="component-demo">
        <p style="font-size: var(--small-font-size); line-height: var(--small-line-height); font-weight: 700; margin-bottom: var(--spacing-xl); text-transform: uppercase; letter-spacing: 0.05em;">Primary Icon Buttons</p>
        <div class="button-group" style="margin-bottom: var(--spacing-xl);">
          <button class="button button-primary-solid button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-primary-outline button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-primary-transparent button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <p style="font-size: var(--small-font-size); line-height: var(--small-line-height); font-weight: 700; margin-bottom: var(--spacing-xl); text-transform: uppercase; letter-spacing: 0.05em;">Secondary Icon Buttons</p>
        <div class="button-group" style="margin-bottom: var(--spacing-xl);">
          <button class="button button-secondary-solid button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-secondary-outline button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-secondary-transparent button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <p style="font-size: var(--small-font-size); line-height: var(--small-line-height); font-weight: 700; margin-bottom: var(--spacing-xl); text-transform: uppercase; letter-spacing: 0.05em;">White Icon Buttons (shown on dark background)</p>
        <div class="button-group" style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">
          <button class="button button-white-solid button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-white-outline button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-white-transparent button-icon" type="button" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <hr>

      <h2>States</h2>
      <p>Button states provide visual feedback about interaction and availability. All states apply across every variant and style combination.</p>

      <h3>Default</h3>
      <p>The resting state before any user interaction. Buttons clearly indicate they are interactive through their color, border, and shape.</p>

      <h3>Hover</h3>
      <p>Regular buttons invert their appearance on hover: solid buttons swap to a transparent background with a visible border, and transparent buttons gain a solid filled background. Icon-only outline buttons invert between outline and solid fill. This inverse pattern creates an immediate and consistent visual response across all button types.</p>

      <div class="component-demo">
        <div class="button-group">
          <button class="button button-primary-solid" type="button">Default</button>
          <button class="button" type="button" style="background-color: var(--global-white); color: var(--brand-primary); border-color: var(--brand-primary);">Hover</button>
          <button class="button button-secondary-solid" type="button">Default</button>
          <button class="button" type="button" style="background-color: var(--global-white); color: var(--brand-secondary); border-color: var(--brand-secondary);">Hover</button>
        </div>
        <div class="button-group" style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">
          <button class="button button-white-solid" type="button">Default</button>
          <button class="button" type="button" style="background-color: var(--brand-primary); color: var(--global-white); border-color: var(--global-white);">Hover</button>
        </div>
      </div>

      <h3>Focus</h3>
      <p>Focus state uses the browser default focus ring to ensure keyboard users receive clear and reliable visual feedback. Do not suppress or override the default focus outline.</p>

      <h3>Disabled</h3>
      <p>Disabled buttons use the <code>status/disabled</code> token (#808080) for both background and border, with white text. Transparent style buttons use #808080 for text only, with no fill or border. Include both the <code>disabled</code> HTML attribute and <code>aria-disabled="true"</code> to ensure proper accessibility behavior.</p>

      <div class="component-demo">
        <div class="button-group">
          <button class="button button-primary-solid" type="button" disabled aria-disabled="true">Disabled solid</button>
          <button class="button button-primary-transparent" type="button" disabled aria-disabled="true">Disabled transparent</button>
          <button class="button button-primary-solid button-icon" type="button" disabled aria-disabled="true" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-primary-outline button-icon" type="button" disabled aria-disabled="true" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button button-primary-transparent button-icon" type="button" disabled aria-disabled="true" aria-label="Search">
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <hr>

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

      <hr>

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

      <hr>

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

      <hr>

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

      <hr>

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
        <li><strong>aria-disabled="true":</strong> Apply alongside the <code>disabled</code> HTML attribute on disabled buttons to ensure both visual and programmatic disabled state are communicated</li>
        <li><strong>aria-label:</strong> Use only if no visible label is present and a visually hidden span is not feasible</li>
        <li><strong>aria-pressed:</strong> Use on toggle buttons that switch between on/off states</li>
        <li><strong>aria-expanded:</strong> Use on buttons that open or close a region (e.g. accordions, dropdowns)</li>
      </ul>

      <h3>Focus management</h3>
      <p>Do not suppress or override the browser default focus ring. The default focus outline provides keyboard users with reliable visual feedback across browsers and operating systems. Where custom focus styles are needed, ensure they meet WCAG 2.1 AA requirements: a minimum 3:1 contrast ratio for the focus indicator against adjacent colors.</p>

      <h3>Color contrast</h3>
      <p>All button text must meet WCAG AA contrast requirements (4.5:1 for normal text). Primary and secondary variants on solid and outline styles achieve this. White buttons on dark backgrounds are designed with sufficient contrast in mind — verify contrast when placing white buttons on non-system background colors. Disabled buttons intentionally use reduced contrast (<code>status/disabled</code>) to visually communicate unavailability; this is an accepted WCAG exception for disabled components.</p>

      <hr>

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
        <li><strong>Lead with action verbs:</strong> Start labels with clear verbs — "Save changes," "Delete item," "Create account"</li>
        <li><strong>Be specific:</strong> Avoid generic labels like "Click here," "Submit," or "OK" without contextual meaning</li>
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
          <p>Start button labels with clear verbs: "Save changes," "Delete item," "Create account." Action-first labels make it immediately clear what the button does.</p>

          <p><strong>Limit primary buttons per section</strong></p>
          <p>Use one primary button per section or view to maintain a clear visual hierarchy and guide users to the most important action.</p>

          <p><strong>Match style to hierarchy</strong></p>
          <p>Use solid for primary actions, outline for secondary actions, and transparent for low-emphasis or inline controls. Mixing hierarchy levels creates visual noise.</p>

          <p><strong>Preserve focus states</strong></p>
          <p>Ensure keyboard users can clearly see which button has focus. Never suppress the default focus ring without a high-contrast replacement.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't use vague labels</strong></p>
          <p>Avoid generic text like "Click here," "Submit," or "OK" without context. Labels should describe the specific action and its outcome.</p>

          <p><strong>Don't rely on color alone</strong></p>
          <p>Button states should communicate through shape, border, and text changes — not just color. This ensures accessibility for color-blind users.</p>

          <p><strong>Don't use buttons for navigation</strong></p>
          <p>Use links for navigating between pages or to external URLs. Buttons are for actions; using them for navigation confuses assistive technology users.</p>

          <p><strong>Don't make buttons too small</strong></p>
          <p>Maintain a minimum 44×44px touch target for all interactive elements on mobile. Small targets cause accidental taps and frustrate users.</p>
        </div>
      </div>

      <hr>

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
  font-family: var(--font-family);
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

/* Icon-only button */
.button-icon {
  padding: var(--sm);
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
}

/* White outline (icon buttons only, for dark backgrounds) */
.button-white-outline {
  background-color: transparent;
  color: var(--global-white);
  border-color: var(--global-white);
}
.button-white-outline:hover,
.button-white-outline:focus-visible {
  background-color: var(--global-white);
  color: var(--brand-primary);
  border-color: var(--global-white);
}

/* White transparent (for dark backgrounds) */
.button-white-transparent {
  background-color: transparent;
  color: var(--global-white);
  border-color: transparent;
}
.button-white-transparent:hover,
.button-white-transparent:focus-visible {
  background-color: var(--global-white);
  color: var(--brand-primary);
  border-color: var(--global-white);
}

/* Disabled — solid and outline styles */
.button:disabled,
.button[aria-disabled="true"] {
  background-color: var(--status-disabled);
  color: var(--global-white);
  border-color: var(--status-disabled);
  cursor: not-allowed;
}

/* Disabled — transparent style override */
.button-primary-transparent:disabled,
.button-primary-transparent[aria-disabled="true"],
.button-secondary-transparent:disabled,
.button-secondary-transparent[aria-disabled="true"],
.button-white-transparent:disabled,
.button-white-transparent[aria-disabled="true"] {
  background-color: transparent;
  color: var(--status-disabled);
  border-color: transparent;
}

/* Disabled — outline style (icon buttons only) */
.button-icon.button-primary-outline:disabled,
.button-icon.button-primary-outline[aria-disabled="true"],
.button-icon.button-secondary-outline:disabled,
.button-icon.button-secondary-outline[aria-disabled="true"] {
  background-color: transparent;
  color: var(--status-disabled);
  border-color: var(--status-disabled);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components-button-font-size      Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--components-button-line-height    Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px

/* Spacing */
--components-button-padding-t-b    Mobile: 0.5rem / 8px     →   Widescreen: 0.75rem / 12px
--components-button-padding-l-r    Mobile: 1.5rem / 24px    →   Widescreen: 2rem / 32px
--components-button-padding-gap    0.25rem / 4px (fixed)
--sm                               Mobile: 0.25rem / 4px    →   Widescreen: 0.5rem / 8px

/* Border-radius */
--components-button-border-radius  2rem / 32px (fixed)
--border-radius-round              6.25rem / 100px (fixed) — icon buttons

/* Colors */
--brand-primary        Light: #FF5247   Dark: #FF5247
--brand-secondary      Light: #003442   Dark: #003442
--global-white         Light: #FFFFFF   Dark: #FFFFFF
--status-disabled      Light: #808080   Dark: #808080</code></pre>

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" target="_blank">ARIA Authoring Practices: Button Pattern</a> — W3C accessible button implementation</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" target="_blank">MDN: button element</a> — Semantic HTML for buttons</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" target="_blank">WCAG 2.1: Understanding Target Size</a> — Accessibility requirements for touch targets</li>
        <li><a href="https://www.nngroup.com/articles/button-states-communicate-interaction/" target="_blank">Nielsen Norman Group: Button States</a> — Designing effective button states</li>
      </ul>
    </div>
  `;
};

export const Playground = {
  tags: ['!autodocs'],
  args: {
    variant: 'primary',
    style: 'solid',
    label: 'Button',
  },
  render: (args) => {
    const button = `<button class="button button-${args.variant}-${args.style}" type="button">${args.label}</button>`;
    const inner = args.variant === 'white'
      ? `<div class="button-group" style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">${button}</div>`
      : `<div class="button-group">${button}</div>`;
    return `
      <div class="delta-docs" style="padding: 32px 24px;">
        <div class="component-demo">
          ${inner}
        </div>
      </div>
    `;
  },
};
