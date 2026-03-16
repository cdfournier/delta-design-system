function createChipsDocumentation() {
  return `
    <style>
      .delta-docs .chip-specimen-card {
        display: inline-flex;
        align-items: center;
        background: var(--components-chip-specimen-shell-background);
        border-radius: var(--components-chip-specimen-shell-radius);
        padding: var(--components-chip-specimen-shell-padding);
      }

      [data-color-mode='dark'] .delta-docs .chip-specimen-card {
        background: var(--brand-secondary);
      }

      [data-color-mode='dark'] .delta-docs .chip--primary {
        border-color: transparent;
      }

      .delta-docs .chip-specimen-row {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-md);
        flex-wrap: wrap;
      }

      .delta-docs .chip-specimen-group {
        display: inline-flex;
        align-items: center;
        gap: var(--components-chip-specimen-divider-gap);
      }

      .delta-docs .chip-specimen-divider {
        width: var(--components-chip-specimen-divider-width);
        align-self: stretch;
        background: var(--components-chip-specimen-divider-color);
      }

      .delta-docs .chip {
        display: inline-flex;
        align-items: center;
        gap: var(--components-chip-padding-gap);
        padding: 0 var(--components-chip-padding-l-r);
        border: var(--docs-rule-width) solid transparent;
        border-radius: var(--components-chip-border-radius);
        background: var(--components-chip-primary);
        color: var(--text-inverse);
        font-family: var(--font-family-body);
        font-size: var(--components-chip-font-size);
        line-height: var(--components-chip-line-height);
        font-weight: var(--font-weight-regular);
        text-decoration: none;
      }

      .delta-docs .chip--primary {
        background: var(--components-chip-primary);
        border-color: transparent;
      }

      .delta-docs .chip--primary-hover {
        background: var(--components-chip-primary-dark);
        border-color: var(--components-chip-primary);
      }

      .delta-docs .chip--secondary {
        background: var(--components-chip-secondary);
        border-color: var(--components-chip-secondary);
      }

      .delta-docs .chip--secondary-hover {
        background: var(--components-chip-secondary-dark);
      }

      .delta-docs .chip--primary-hover,
      .delta-docs .chip--secondary-hover {
        color: var(--global-white);
      }

      .delta-docs .chip--primary-hover .chip__label,
      .delta-docs .chip--secondary-hover .chip__label {
        color: var(--global-white);
      }

      .delta-docs .chip__label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 0;
        padding: var(--components-chip-padding-t-b) 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .delta-docs .chip__icon,
      .delta-docs .chip__toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--components-chip-icon-size);
        height: var(--components-chip-icon-size);
        padding: var(--components-chip-icon-padding);
        flex: 0 0 auto;
      }

      .delta-docs .chip__check {
        width: var(--components-chip-check-size);
        height: var(--components-chip-check-size);
      }

      .delta-docs .chip__icon svg,
      .delta-docs .chip__toggle svg {
        width: var(--components-chip-icon-graphic-size);
        height: var(--components-chip-icon-graphic-size);
        stroke: currentColor;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .delta-docs .chip__icon svg *,
      .delta-docs .chip__toggle svg *,
      .delta-docs .chip__dismiss-icon svg * {
        stroke-width: var(--components-chip-icon-stroke-width);
      }

      .delta-docs .chip--avatar-left {
        padding-left: var(--components-chip-padding-edge-with-avatar);
      }

      .delta-docs .chip--avatar-right {
        padding-right: var(--components-chip-padding-edge-with-avatar);
      }

      .delta-docs .chip__avatar {
        width: var(--components-chip-avatar-size);
        height: var(--components-chip-avatar-size);
        border: var(--components-chip-avatar-border-width) solid var(--components-chip-avatar-border-primary);
        border-radius: var(--border-radius-round);
        overflow: hidden;
        flex: 0 0 auto;
      }

      .delta-docs .chip--secondary .chip__avatar,
      .delta-docs .chip--secondary-hover .chip__avatar {
        border-color: var(--components-chip-avatar-border-secondary);
      }

      .delta-docs .chip__avatar-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .delta-docs .chip__dismiss {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--components-chip-dismiss-size);
        height: var(--components-chip-dismiss-size);
        padding: var(--components-chip-button-padding-outer);
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        flex: 0 0 auto;
      }

      .delta-docs .chip__dismiss-inner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: var(--components-chip-button-padding-inner);
        border-radius: var(--border-radius-round);
        background: var(--components-chip-button-primary);
      }

      .delta-docs .chip--secondary .chip__dismiss-inner,
      .delta-docs .chip--secondary-hover .chip__dismiss-inner {
        background: var(--components-chip-button-secondary);
      }

      .delta-docs .chip__dismiss-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--components-chip-dismiss-icon-size);
        height: var(--components-chip-dismiss-icon-size);
        color: var(--components-chip-dismiss-icon-primary);
      }

      .delta-docs .chip--secondary .chip__dismiss-icon,
      .delta-docs .chip--secondary-hover .chip__dismiss-icon {
        color: var(--components-chip-dismiss-icon-secondary);
      }

      [data-color-mode='dark'] .delta-docs .chip__dismiss-inner {
        border: 0;
        background: var(--components-chip-button-primary);
      }

      [data-color-mode='dark'] .delta-docs .chip--secondary .chip__dismiss-inner,
      [data-color-mode='dark'] .delta-docs .chip--secondary-hover .chip__dismiss-inner {
        border: 0;
        background: var(--components-chip-button-secondary);
      }

      [data-color-mode='dark'] .delta-docs .chip__dismiss-icon {
        color: var(--global-white);
      }

      [data-color-mode='dark'] .delta-docs .chip--secondary .chip__dismiss-icon,
      [data-color-mode='dark'] .delta-docs .chip--secondary-hover .chip__dismiss-icon {
        color: var(--global-white);
      }

      .delta-docs .chip__dismiss-icon svg {
        width: var(--components-chip-dismiss-icon-size);
        height: var(--components-chip-dismiss-icon-size);
        stroke: currentColor;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    </style>
    <article class="delta-docs">
        <h1>Chips</h1>
        <p>Chips are compact, interactive elements that represent an input, attribute, or action. They allow users to enter information, make selections, filter content, or trigger actions in a space-efficient way.</p>

        <hr>

        <h2>Anatomy</h2>
        <p>Chips consist of:</p>
        <ul>
            <li><strong>Container:</strong> The pill-shaped background that holds all chip elements, using the component border-radius token.</li>
            <li><strong>Label:</strong> Text describing the chip's content or action. Always present.</li>
            <li><strong>Avatar (optional):</strong> A circular image representing a person or entity, positioned at the leading or trailing edge of the chip.</li>
            <li><strong>Icon (optional):</strong> A small decorative or functional icon, positioned as a leading or trailing element alongside the label.</li>
            <li><strong>Toggle (optional):</strong> A checkmark icon that appears when a chip is in the selected state.</li>
            <li><strong>Dismiss button (optional):</strong> A close button (<code>.button-chip</code>) that allows users to remove the chip. Has its own inner and outer padding tokens.</li>
        </ul>

        <div class="chip-specimen-card" aria-label="Chips anatomy specimen">
          <div class="chip-specimen-row">
            <button class="chip chip--primary" type="button"><span class="chip__label">Primary</span></button>
            <button class="chip chip--secondary" type="button">
              <span class="chip__label">Secondary</span>
              <span class="chip__toggle" aria-hidden="true">
                <svg class="chip__check" viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                  <path d="M10 3L4.5 8.5L2 6" stroke-width="2"></path>
                </svg>
              </span>
            </button>
            <button class="chip chip--primary" type="button">
              <span class="chip__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke-width="1.5"></rect>
                  <path d="M4 7L12 13L20 7" stroke-width="1.5"></path>
                </svg>
              </span>
              <span class="chip__label">Chip</span>
            </button>
            <span class="chip chip--secondary chip--avatar-left">
              <span class="chip__avatar" aria-hidden="true">
                <img class="chip__avatar-image" src="https://www.figma.com/api/mcp/asset/8ae19004-f754-4447-8b81-2cca08f1439d" alt="" />
              </span>
              <span class="chip__label">Chip</span>
              <button class="chip__dismiss" type="button" aria-label="Remove Chip">
                <span class="chip__dismiss-inner">
                  <span class="chip__dismiss-icon" aria-hidden="true">
                    <svg viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                      <path d="M9 3L3 9" stroke-width="2"></path>
                      <path d="M3 3L9 9" stroke-width="2"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </span>
          </div>
        </div>

        <hr>

        <h2>Variants</h2>
        <p>Chips have two color variants. Within each variant, the type property controls whether an avatar appears and on which side, while boolean properties enable optional leading icons, trailing icons, a dismiss button, and a selected (checked) state.</p>

        <h3>Primary</h3>
        <p>Uses the brand primary color. Use primary chips when chips are the main interactive or filtering element on a surface.</p>

        <div class="chip-specimen-card" aria-label="Primary chip specimen">
          <div class="chip-specimen-row chip-specimen-row--tight">
            <button class="chip chip--primary" type="button"><span class="chip__label">Primary</span></button>
          </div>
        </div>

        <h3>Secondary</h3>
        <p>Uses the brand secondary color. Use secondary chips for less prominent selections, or to create visual hierarchy alongside primary elements.</p>

        <div class="chip-specimen-card" aria-label="Secondary chip specimen">
          <div class="chip-specimen-row chip-specimen-row--tight">
            <button class="chip chip--secondary" type="button"><span class="chip__label">Secondary</span></button>
          </div>
        </div>

        <h3>With avatar</h3>
        <p>The <code>avatar-left</code> and <code>avatar-right</code> types place a circular avatar image at the leading or trailing edge of the chip. Use for chips that represent a person or named entity. The chip container uses <code>&lt;span&gt;</code> for non-interactive avatar chips.</p>

        <div class="chip-specimen-card" aria-label="Avatar chip specimens">
          <div class="chip-specimen-row">
            <span class="chip chip--primary chip--avatar-left">
              <span class="chip__avatar" aria-hidden="true">
                <img class="chip__avatar-image" src="https://www.figma.com/api/mcp/asset/a317bbcc-f39b-4cd7-b746-976fff43b1a9" alt="" />
              </span>
              <span class="chip__label">Avatar left</span>
            </span>
            <span class="chip chip--primary chip--avatar-right">
              <span class="chip__label">Avatar right</span>
              <span class="chip__avatar" aria-hidden="true">
                <img class="chip__avatar-image" src="https://www.figma.com/api/mcp/asset/a317bbcc-f39b-4cd7-b746-976fff43b1a9" alt="" />
              </span>
            </span>
            <span class="chip chip--secondary chip--avatar-left">
              <span class="chip__avatar" aria-hidden="true">
                <img class="chip__avatar-image" src="https://www.figma.com/api/mcp/asset/a317bbcc-f39b-4cd7-b746-976fff43b1a9" alt="" />
              </span>
              <span class="chip__label">Avatar left</span>
            </span>
            <span class="chip chip--secondary chip--avatar-right">
              <span class="chip__label">Avatar right</span>
              <span class="chip__avatar" aria-hidden="true">
                <img class="chip__avatar-image" src="https://www.figma.com/api/mcp/asset/a317bbcc-f39b-4cd7-b746-976fff43b1a9" alt="" />
              </span>
            </span>
          </div>
        </div>

        <h3>Selectable</h3>
        <p>When the <code>checked</code> property is enabled, a checkmark icon appears inside the chip to indicate a selected state. Use <code>role="checkbox"</code> and <code>aria-checked</code> for correct accessibility semantics. Toggle the <code>checked</code> class and <code>aria-checked</code> attribute via JavaScript.</p>

        <div class="chip-specimen-card" aria-label="Selectable chip specimens">
          <div class="chip-specimen-row">
            <button class="chip chip--primary" type="button" role="checkbox" aria-checked="false"><span class="chip__label">Unchecked</span></button>
            <button class="chip chip--primary" type="button" role="checkbox" aria-checked="true">
              <span class="chip__label">Checked</span>
              <span class="chip__toggle" aria-hidden="true">
                <svg class="chip__check" viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                  <path d="M10 3L4.5 8.5L2 6" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <h3>Dismissible</h3>
        <p>When the <code>dismissable</code> property is enabled, a dismiss button (<code>.button-chip</code>) appears at the trailing edge of the chip. The chip container should be a <code>&lt;span&gt;</code>; the dismiss action uses a nested <code>&lt;button&gt;</code>. Use when users need to remove the chip from a set.</p>

        <div class="chip-specimen-card" aria-label="Dismissible chip specimens">
          <div class="chip-specimen-row">
            <span class="chip chip--primary">
              <span class="chip__label">Primary</span>
              <button class="chip__dismiss" type="button" aria-label="Remove Primary">
                <span class="chip__dismiss-inner">
                  <span class="chip__dismiss-icon" aria-hidden="true">
                    <svg viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                      <path d="M9 3L3 9" stroke-width="2"></path>
                      <path d="M3 3L9 9" stroke-width="2"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </span>
            <span class="chip chip--secondary">
              <span class="chip__label">Secondary</span>
              <button class="chip__dismiss" type="button" aria-label="Remove Secondary">
                <span class="chip__dismiss-inner">
                  <span class="chip__dismiss-icon" aria-hidden="true">
                    <svg viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                      <path d="M9 3L3 9" stroke-width="2"></path>
                      <path d="M3 3L9 9" stroke-width="2"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </span>
          </div>
        </div>

        <hr>

        <h2>States</h2>
        <p>Interactive chips respond visually to user interaction. Static chips (avatar type, non-interactive) do not have hover or focus states.</p>

        <h3>Default</h3>
        <p>The resting state before any user interaction. Chips display their base background color.</p>

        <div class="chip-specimen-card" aria-label="Default chip state specimen">
          <div class="chip-specimen-row chip-specimen-row--tight">
            <button class="chip chip--primary" type="button"><span class="chip__label">Primary</span></button>
            <button class="chip chip--secondary" type="button"><span class="chip__label">Secondary</span></button>
          </div>
        </div>

        <h3>Hover</h3>
        <p>When the cursor moves over interactive chips, the background darkens to the <code>-dark</code> variant of the chip color token. The border color uses the base chip color token.</p>

        <div class="chip-specimen-card" aria-label="Hover chip state specimen">
          <div class="chip-specimen-row">
            <div class="chip-specimen-group">
              <button class="chip chip--primary" type="button"><span class="chip__label">Chip</span></button>
              <span class="chip__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M4 12H20" stroke-width="1.5"></path>
                  <path d="M13 5L20 12L13 19" stroke-width="1.5"></path>
                </svg>
              </span>
              <button class="chip chip--primary-hover" type="button"><span class="chip__label">Chip</span></button>
            </div>
            <span class="chip-specimen-divider" aria-hidden="true"></span>
            <div class="chip-specimen-group">
              <button class="chip chip--secondary" type="button"><span class="chip__label">Chip</span></button>
              <span class="chip__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M4 12H20" stroke-width="1.5"></path>
                  <path d="M13 5L20 12L13 19" stroke-width="1.5"></path>
                </svg>
              </span>
              <button class="chip chip--secondary-hover" type="button"><span class="chip__label">Chip</span></button>
            </div>
          </div>
        </div>

        <h3>Focus</h3>
        <p>Keyboard focus uses the same visual treatment as hover — the background darkens to the <code>-dark</code> color token. This provides consistent feedback across pointer and keyboard interactions. The browser default focus ring remains visible for users who rely on it.</p>

        <h3>Selected (checked)</h3>
        <p>For selectable chips with <code>checked=yes</code>, a checkmark icon appears at the leading or trailing position depending on the chip type. The background color remains the base chip color (does not darken).</p>

        <div class="chip-specimen-card" aria-label="Selected chip state specimen">
          <div class="chip-specimen-row">
            <button class="chip chip--primary" type="button" role="checkbox" aria-checked="false"><span class="chip__label">Unchecked</span></button>
            <button class="chip chip--primary" type="button" role="checkbox" aria-checked="true">
              <span class="chip__label">Checked</span>
              <span class="chip__toggle" aria-hidden="true">
                <svg class="chip__check" viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                  <path d="M10 3L4.5 8.5L2 6" stroke-width="2"></path>
                </svg>
              </span>
            </button>
            <button class="chip chip--secondary" type="button" role="checkbox" aria-checked="false"><span class="chip__label">Unchecked</span></button>
            <button class="chip chip--secondary" type="button" role="checkbox" aria-checked="true">
              <span class="chip__label">Checked</span>
              <span class="chip__toggle" aria-hidden="true">
                <svg class="chip__check" viewBox="0 0 12 12" focusable="false" aria-hidden="true">
                  <path d="M10 3L4.5 8.5L2 6" stroke-width="2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <hr>

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
                    <td>font-size</td>
                    <td><code>components/chip/font-size</code></td>
                    <td>0.75rem / 12px</td>
                    <td>1.5rem / 24px</td>
                </tr>
                <tr>
                    <td>line-height</td>
                    <td><code>components/chip/line-height</code></td>
                    <td>0.75rem / 12px</td>
                    <td>1.5rem / 24px</td>
                </tr>
            </tbody>
        </table>

        <hr>

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
                    <td>padding-top, padding-bottom</td>
                    <td><code>components/chip/padding-t-b</code></td>
                    <td>0.5rem / 8px</td>
                    <td>0.75rem / 12px</td>
                </tr>
                <tr>
                    <td>padding-left, padding-right</td>
                    <td><code>components/chip/padding-l-r</code></td>
                    <td>0.5rem / 8px</td>
                    <td>1.25rem / 20px</td>
                </tr>
                <tr>
                    <td>gap</td>
                    <td><code>components/chip/padding-gap</code></td>
                    <td>0.125rem / 2px</td>
                    <td>0.25rem / 4px</td>
                </tr>
                <tr>
                    <td>Dismiss button padding-outer</td>
                    <td><code>components/chip/button/padding-outer</code></td>
                    <td>0.25rem / 4px</td>
                    <td>0.625rem / 10px</td>
                </tr>
                <tr>
                    <td>Dismiss button padding-inner</td>
                    <td><code>components/chip/button/padding-inner</code></td>
                    <td>0.125rem / 2px</td>
                    <td>0.25rem / 4px</td>
                </tr>
                <tr>
                    <td>Chip group gap</td>
                    <td><code>xs</code></td>
                    <td>0.125rem / 2px</td>
                    <td>0.25rem / 4px</td>
                </tr>
            </tbody>
        </table>

        <hr>

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
                    <td>Chip container</td>
                    <td><code>components/chip/border-radius</code></td>
                    <td>2rem / 32px (fixed)</td>
                    <td>2rem / 32px (fixed)</td>
                </tr>
                <tr>
                    <td>Avatar</td>
                    <td><code>border-radius/round</code></td>
                    <td>6.25rem / 100px (fixed)</td>
                    <td>6.25rem / 100px (fixed)</td>
                </tr>
                <tr>
                    <td>Dismiss button</td>
                    <td><code>border-radius/round</code></td>
                    <td>6.25rem / 100px (fixed)</td>
                    <td>6.25rem / 100px (fixed)</td>
                </tr>
            </tbody>
        </table>

        <hr>

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
                    <td>Primary background (default)</td>
                    <td><code>components/chip/primary</code></td>
                    <td>#FF5247 (brand/primary)</td>
                    <td>#FFFFFF (global/white)</td>
                </tr>
                <tr>
                    <td>Primary background (hover/focus)</td>
                    <td><code>components/chip/primary-dark</code></td>
                    <td>#B22E28 (brand/primary-dark)</td>
                    <td>#B22E28 (brand/primary-dark)</td>
                </tr>
                <tr>
                    <td>Secondary background (default)</td>
                    <td><code>components/chip/secondary</code></td>
                    <td>#003442 (brand/secondary)</td>
                    <td>#FFFFFF (global/white)</td>
                </tr>
                <tr>
                    <td>Secondary background (hover/focus)</td>
                    <td><code>components/chip/secondary-dark</code></td>
                    <td>#01232D (brand/secondary-dark)</td>
                    <td>#01232D (brand/secondary-dark)</td>
                </tr>
                <tr>
                    <td>Label text</td>
                    <td><code>text/inverse</code></td>
                    <td>#FFFFFF (global/white)</td>
                    <td>#000000 (global/black)</td>
                </tr>
                <tr>
                    <td>Primary dismiss button background</td>
                    <td><code>components/chip/button/primary</code></td>
                    <td>#FFFFFF (global/white)</td>
                    <td>#FF5247 (brand/primary)</td>
                </tr>
                <tr>
                    <td>Secondary dismiss button background</td>
                    <td><code>components/chip/button/secondary</code></td>
                    <td>#FFFFFF (global/white)</td>
                    <td>#003442 (brand/secondary)</td>
                </tr>
            </tbody>
        </table>

        <p><strong>Light/Dark mode behavior:</strong> Chips use an inverted color scheme in dark mode — backgrounds become white while text becomes black. In dark mode, all chip backgrounds resolve to #FFFFFF and label text resolves to #000000 via <code>text/inverse</code>, maintaining contrast. Note that in dark mode, primary and secondary chips are visually indistinguishable by background color alone; ensure sufficient surrounding context differentiates them where both variants appear.</p>

        <hr>

        <h2>Accessibility</h2>

        <h3>Keyboard navigation</h3>
        <p>Chips must be fully keyboard accessible:</p>
        <ul>
            <li><strong>Tab:</strong> Moves focus to the next chip or interactive element.</li>
            <li><strong>Shift + Tab:</strong> Moves focus to the previous chip or interactive element.</li>
            <li><strong>Enter or Space:</strong> Activates the chip — toggles selection for selectable chips, or triggers the chip action.</li>
            <li><strong>Delete or Backspace:</strong> Removes a dismissible chip when the chip has focus.</li>
        </ul>

        <h3>Screen readers</h3>
        <p>Use semantic HTML elements appropriate to the chips' behavior. Interactive chips use <code>&lt;button&gt;</code> elements. Static chips used purely for display (such as avatar chips with no action) use <code>&lt;span&gt;</code> elements. Selectable chips use <code>&lt;button&gt;</code> with <code>role="checkbox"</code> and <code>aria-checked</code> to communicate their current state. Dismissible chips use a <code>&lt;span&gt;</code> container with a nested <code>&lt;button&gt;</code> for the dismiss action.</p>

        <h3>ARIA attributes</h3>
        <p>Key ARIA attributes for chips:</p>
        <ul>
            <li><strong>aria-label:</strong> Required on dismiss buttons to provide descriptive text identifying which chip will be removed — for example, "Remove Email chip".</li>
            <li><strong>aria-checked:</strong> Used with <code>role="checkbox"</code> on selectable chips. Set to <code>"true"</code> when selected and <code>"false"</code> when unselected.</li>
            <li><strong>role="checkbox":</strong> Applied to selectable chip buttons to indicate they can be toggled on and off.</li>
        </ul>

        <h3>Focus management</h3>
        <p>Chips use the same darkened background color for both hover and focus states, providing consistent visual feedback for keyboard users. The browser default focus outline remains visible. When a dismissible chip is removed, move focus to the next chip in the group, or to the chip group container if no chips remain.</p>

        <h3>Color contrast</h3>
        <p>Both primary (#FF5247) and secondary (#003442) chips backgrounds use white text (#FFFFFF) via the <code>text/inverse</code> token. Secondary chips comfortably meet WCAG 2.1 Level AA contrast requirements. Primary chips should be verified at their specific use context — the red background with white text passes AA at normal text sizes. In dark mode, all chips display black text on white backgrounds, which meets AAA.</p>

        <hr>

        <h2>Usage</h2>

        <h3>When to use</h3>
        <p>Use chips when you need to:</p>
        <ul>
            <li>Display multiple selections or filters in a compact, scannable space.</li>
            <li>Represent user input that can be modified or removed (such as tags or applied filters).</li>
            <li>Allow users to toggle between multiple non-exclusive options.</li>
            <li>Show selected items from a multi-select interaction.</li>
            <li>Display contact suggestions or mentions in messaging and search interfaces.</li>
        </ul>

        <h3>When not to use</h3>
        <p>Do not use chips when:</p>
        <ul>
            <li>A primary navigation or critical action is needed — use buttons instead.</li>
            <li>Only one option can be selected — consider radio buttons for better semantics.</li>
            <li>Labels are too long to fit compactly — consider a select or checkbox list instead.</li>
            <li>Communicating status or counts — use badges instead.</li>
        </ul>

        <h3>Content guidelines</h3>
        <p>Guidelines for chips content:</p>
        <ul>
            <li><strong>Keep labels concise:</strong> Aim for 1–3 words. Chips are designed for compact contexts; long labels undermine their purpose.</li>
            <li><strong>Use clear language:</strong> Labels should be immediately understandable without additional context.</li>
            <li><strong>Be consistent:</strong> Use parallel language patterns across chips in the same group — for example, all nouns or all adjectives, not a mix.</li>
            <li><strong>Avoid truncation:</strong> If a label must be truncated to fit, it is too long for a chip. Use a different component or shorter phrasing.</li>
        </ul>

        <h3>Placement</h3>
        <p>Group related chips together in a <code>&lt;ul&gt;</code> with <code>&lt;li&gt;</code> wrappers for proper list semantics and screen reader support. The chips group container uses <code>display: flex; flex-wrap: wrap</code> so chips reflow naturally to multiple lines rather than overflowing. Avoid placing chips inside other interactive components such as buttons or links.</p>

        <h3>Best practices</h3>

        <div class="do-dont-grid">
            <div class="do-section">
                <h3>Do</h3>

                <p><strong>Use the correct semantic element for the chips' role</strong></p>
                <p>Use <code>&lt;button&gt;</code> for interactive chips, <code>&lt;span&gt;</code> for static or display-only chips, and wrap groups in <code>&lt;ul&gt;</code> lists for proper accessibility.</p>

                <p><strong>Provide descriptive dismiss button labels</strong></p>
                <p>Include specific <code>aria-label</code> values on dismiss buttons — for example, "Remove Email chip" — so screen reader users know exactly which chip will be removed.</p>

                <p><strong>Keep chips groups visually consistent</strong></p>
                <p>Use a single variant (primary or secondary) within a chips group. Mix variants only when you need to express a deliberate visual hierarchy.</p>

                <p><strong>Allow chips to wrap naturally</strong></p>
                <p>Let chips groups reflow to multiple lines rather than forcing horizontal scrolling or truncating labels.</p>
            </div>

            <div class="dont-section">
                <h3>Don't</h3>

                <p><strong>Don't use chips for primary or critical actions</strong></p>
                <p>Chips are for selections and filters, not for actions like "Submit" or "Delete account". Use buttons for those interactions.</p>

                <p><strong>Don't use overly long labels</strong></p>
                <p>If a label exceeds 3–4 words, reconsider the component. Long chips labels break the compact visual pattern chips are designed to create.</p>

                <p><strong>Don't forget removal feedback for dismissible chips</strong></p>
                <p>When a chip is removed, communicate the change to screen readers and move focus appropriately. Consider whether an undo mechanism is needed.</p>

                <p><strong>Don't use chips when only one option is valid</strong></p>
                <p>Chips work best for multi-select or filter scenarios. For single-select options, use radio buttons or a select component instead.</p>
            </div>
        </div>

        <hr>

        <h2>Code reference</h2>

        <h3>HTML</h3>
        <pre><code>&lt;!-- Basic interactive chip --&gt;
&lt;button class="chip chip-primary"&gt;Label&lt;/button&gt;

&lt;!-- Static chip with avatar (leading) --&gt;
&lt;span class="chip chip-secondary"&gt;
  &lt;span class="chip-avatar"&gt;&lt;/span&gt;
  Jane Smith
&lt;/span&gt;

&lt;!-- Static chip with avatar (trailing) --&gt;
&lt;span class="chip chip-primary"&gt;
  Jane Smith
  &lt;span class="chip-avatar"&gt;&lt;/span&gt;
&lt;/span&gt;

&lt;!-- Selectable chip --&gt;
&lt;button class="chip chip-secondary" role="checkbox" aria-checked="false"&gt;
  Option
  &lt;svg class="check-icon" viewBox="0 0 12 12" fill="none"&gt;
    &lt;path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"/&gt;
  &lt;/svg&gt;
&lt;/button&gt;

&lt;!-- Dismissible chip --&gt;
&lt;span class="chip chip-primary"&gt;
  Label
  &lt;button class="chip-close button-chip" aria-label="Remove Label chip"&gt;
    &lt;svg viewBox="0 0 12 12" fill="none"&gt;
      &lt;path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="2"
            stroke-linecap="round"/&gt;
    &lt;/svg&gt;
  &lt;/button&gt;
&lt;/span&gt;

&lt;!-- Chip group (list structure) --&gt;
&lt;ul class="chip-group"&gt;
  &lt;li&gt;&lt;button class="chip chip-primary"&gt;Design&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;&lt;button class="chip chip-primary"&gt;Development&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;&lt;button class="chip chip-primary"&gt;Research&lt;/button&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

        <h3>CSS</h3>
        <pre><code>/* Chip base */
.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--components-chip-padding-gap);
  padding: var(--components-chip-padding-t-b) var(--components-chip-padding-l-r);
  border-radius: var(--components-chip-border-radius);
  font-size: var(--components-chip-font-size);
  line-height: var(--components-chip-line-height);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
}

/* Primary variant */
.chip-primary {
  background-color: var(--components-chip-primary);
  color: var(--text-inverse);
  border-color: var(--components-chip-primary);
}
.chip-primary:hover,
.chip-primary:focus {
  background-color: var(--components-chip-primary-dark);
  border-color: var(--components-chip-primary-dark);
}

/* Secondary variant */
.chip-secondary {
  background-color: var(--components-chip-secondary);
  color: var(--text-inverse);
  border-color: var(--components-chip-secondary);
}
.chip-secondary:hover,
.chip-secondary:focus {
  background-color: var(--components-chip-secondary-dark);
}

/* Checkmark toggle (hidden by default, shown when checked) */
.chip .check-icon {
  display: none;
  width: 0.75rem;
  height: 0.75rem;
}
.chip.checked .check-icon {
  display: block;
}

/* Avatar */
.chip-avatar {
  border-radius: var(--border-radius-round);
  overflow: hidden;
}

/* Dismiss button — outer wrapper */
.button-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: var(--components-chip-button-padding-outer);
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

/* Dismiss button — inner circle */
.button-chip-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: var(--components-chip-button-padding-inner);
  border-radius: var(--border-radius-round);
  background-color: var(--components-chip-button-primary);
  transition: background-color 0.15s ease;
}
.chip-secondary .button-chip-inner {
  background-color: var(--components-chip-button-secondary);
}
.button-chip:hover .button-chip-inner {
  background-color: var(--components-chip-primary);
}
.chip-secondary .button-chip:hover .button-chip-inner {
  background-color: var(--components-chip-secondary);
}

/* Chip group container */
.chip-group {
  display: flex;
  gap: var(--xs);
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Widescreen */
@media (min-width: 80rem) {
  :root {
    --components-chip-font-size: 1.5rem;
    --components-chip-line-height: 1.5rem;
    --components-chip-padding-t-b: 0.75rem;
    --components-chip-padding-l-r: 1.25rem;
    --components-chip-padding-gap: 0.25rem;
    --components-chip-button-padding-outer: 0.625rem;
    --components-chip-button-padding-inner: 0.25rem;
  }
}</code></pre>

        <h3>JavaScript</h3>
        <pre><code>// Toggle selectable chips
document.querySelectorAll('.chip[role="checkbox"]').forEach(chip => {
  chip.addEventListener('click', () => {
    const isChecked = chip.getAttribute('aria-checked') === 'true';
    chip.setAttribute('aria-checked', String(!isChecked));
    chip.classList.toggle('checked');
  });
});

// Handle chip removal
document.querySelectorAll('.button-chip button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const chip = button.closest('.chip');
    const listItem = chip.closest('li');
    const group = chip.closest('.chip-group');

    // Move focus before removing
    const chips = [...(group ? group.querySelectorAll('.chip') : [])];
    const currentIndex = chips.indexOf(chip);
    const nextFocus = chips[currentIndex + 1] || chips[currentIndex - 1];

    if (listItem) {
      listItem.remove();
    } else {
      chip.remove();
    }

    if (nextFocus) nextFocus.focus();
    else if (group) group.focus();

    // Fire custom event for state management
    document.dispatchEvent(new CustomEvent('chipRemoved', {
      detail: { chipText: chip.textContent.trim() }
    }));
  });
});

// Keyboard deletion support (Delete/Backspace on focused chip)
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('keydown', (e) => {
    const dismissBtn = chip.querySelector('.button-chip');
    if ((e.key === 'Delete' || e.key === 'Backspace') && dismissBtn) {
      e.preventDefault();
      dismissBtn.click();
    }
  });
});</code></pre>

        <h3>Design tokens reference</h3>
        <pre><code>/* Typography */
--components/chip/font-size      Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--components/chip/line-height    Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px

/* Spacing */
--components/chip/padding-t-b           Mobile: 0.5rem / 8px    →   Widescreen: 0.75rem / 12px
--components/chip/padding-l-r           Mobile: 0.5rem / 8px    →   Widescreen: 1.25rem / 20px
--components/chip/padding-gap           Mobile: 0.125rem / 2px  →   Widescreen: 0.25rem / 4px
--components/chip/button/padding-outer  Mobile: 0.25rem / 4px   →   Widescreen: 0.625rem / 10px
--components/chip/button/padding-inner  Mobile: 0.125rem / 2px  →   Widescreen: 0.25rem / 4px
--xs (chip group gap)                   Mobile: 0.125rem / 2px  →   Widescreen: 0.25rem / 4px

/* Border-radius */
--components/chip/border-radius  2rem / 32px (fixed)
--border-radius/round            6.25rem / 100px (fixed)

/* Colors */
--components/chip/primary          Light: #FF5247   Dark: #FFFFFF
--components/chip/primary-dark     Light: #B22E28   Dark: #B22E28
--components/chip/secondary        Light: #003442   Dark: #FFFFFF
--components/chip/secondary-dark   Light: #01232D   Dark: #01232D
--components/chip/button/primary   Light: #FFFFFF   Dark: #FF5247
--components/chip/button/secondary Light: #FFFFFF   Dark: #003442
--text/inverse                     Light: #FFFFFF   Dark: #000000</code></pre>

        <hr>

        <h2>Resources</h2>
        <ul>
            <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
            <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
            <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
            <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
            <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/" target="_blank">ARIA Checkbox Pattern</a> — W3C guidance for checkbox role used in selectable chips</li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role" target="_blank">MDN: ARIA checkbox role</a> — Attributes and usage for role="checkbox"</li>
        </ul>
    </article>
  `;
}

const meta = {
  title: 'Atoms/Chips',
};

export default meta;

export const Documentation = () => createChipsDocumentation();
