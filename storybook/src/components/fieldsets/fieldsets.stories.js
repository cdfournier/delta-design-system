function createFieldsetsDocumentation() {
  return `
    <style>
      .delta-docs .fieldset-specimen-shell {
        border-radius: var(--components-fieldset-shell-radius);
        background: var(--components-fieldset-shell-background);
      }

      [data-color-mode='dark'] .delta-docs .fieldset-specimen-shell {
        background: var(--brand-secondary);
      }

      .delta-docs .fieldset-specimen-grid {
        display: grid;
        gap: var(--components-fieldset-shell-gap);
        padding: var(--components-fieldset-shell-padding);
      }

      .delta-docs .fieldset-specimen {
        display: grid;
        gap: var(--components-fieldset-gap);
        width: min(100%, var(--components-fieldset-width));
        min-width: min(100%, var(--components-fieldset-width-min));
        max-width: var(--components-fieldset-width-max);
        min-inline-size: 0;
        margin: 0;
        padding: 0;
        border: 0;
      }

      .delta-docs .fieldset-specimen__label {
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--small-font-size);
        line-height: var(--small-line-height);
        font-weight: var(--font-weight-bold);
      }

      .delta-docs .fieldset-specimen__control {
        display: flex;
        align-items: center;
        gap: var(--components-input-text-padding-gap);
        width: 100%;
        min-width: 0;
        padding: var(--components-input-text-padding);
        border: var(--docs-rule-width) solid var(--surface-border);
        border-radius: var(--components-input-text-border-radius);
        background: var(--page-background);
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--components-input-text-font-size);
        line-height: var(--components-input-text-line-height);
      }

      .delta-docs .fieldset-specimen__input,
      .delta-docs .fieldset-specimen__select {
        flex: 1 1 auto;
        min-width: 0;
        border: 0;
        padding: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: inherit;
        outline: 0;
      }

      .delta-docs .fieldset-specimen__input::placeholder {
        color: var(--components-input-placeholder);
        opacity: 1;
      }

      .delta-docs .fieldset-specimen__select {
        appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
      }

      .delta-docs .fieldset-specimen__icon {
        display: inline-flex;
        width: var(--components-input-icon-size);
        height: var(--components-input-icon-size);
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        color: var(--text-default);
      }

      .delta-docs .fieldset-specimen__icon svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-width: var(--components-input-icon-stroke-width);
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .delta-docs .fieldset-specimen__message {
        margin: 0;
        max-width: var(--components-fieldset-message-max-width);
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--fine-font-size);
        line-height: var(--fine-line-height);
      }

      @media (min-width: 48rem) {
        .delta-docs .fieldset-specimen-grid {
          grid-template-columns: repeat(2, minmax(var(--components-fieldset-width-min), 1fr));
        }
      }
    </style>
    <article class="delta-docs">
      <h1>Fieldsets</h1>
      <p>Fieldsets provide consistent structure for form inputs with labels, validation states, and helper messages. They adapt layout and spacing based on input type, ensuring accessible and predictable form patterns.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>A fieldset consists of:</p>
      <ul>
        <li><strong>Label or legend:</strong> Descriptive text that identifies the input or group. Single inputs use a <code>&lt;label&gt;</code>; choice input groups use a <code>&lt;legend&gt;</code> inside a <code>&lt;fieldset&gt;</code>.</li>
        <li><strong>Legend label (optional):</strong> Fine-print text alongside the legend for supplementary context such as "(Optional)" — applies to checkbox, radio, and switch groups only.</li>
        <li><strong>Input:</strong> The interactive control — text field, password field, select, checkbox, radio button, or switch.</li>
        <li><strong>Message (optional):</strong> Helper text or validation feedback displayed below the input. Enabled by default; can be hidden when not needed.</li>
      </ul>

      <div class="delta-docs__demo fieldset-specimen-shell" aria-label="Fieldsets anatomy specimen">
        <div class="fieldset-specimen-grid">
          <fieldset class="fieldset-specimen">
            <label class="fieldset-specimen__label" for="fieldset-specimen-text">Label</label>
            <div class="fieldset-specimen__control">
              <input class="fieldset-specimen__input" id="fieldset-specimen-text" type="text" placeholder="Placeholder" />
            </div>
            <p class="fieldset-specimen__message">Message text provides context or validation feedback</p>
          </fieldset>

          <fieldset class="fieldset-specimen">
            <label class="fieldset-specimen__label" for="fieldset-specimen-select">Label</label>
            <div class="fieldset-specimen__control">
              <select class="fieldset-specimen__select" id="fieldset-specimen-select">
                <option selected>Select</option>
              </select>
              <span class="fieldset-specimen__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M6 9L12 15L18 9"></path>
                </svg>
              </span>
            </div>
            <p class="fieldset-specimen__message">Message text provides context or validation feedback</p>
          </fieldset>
        </div>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Fieldsets vary by input type. The type determines anatomy, layout, and interaction behavior.</p>
      <ul>
        <li><strong>Text:</strong> Single-line text entry with optional left and right icon slots. Use for names, email addresses, URLs, and other short freeform input.</li>
        <li><strong>Password:</strong> Text input with a show/hide toggle button. Use for sensitive data that should be masked by default.</li>
        <li><strong>Select:</strong> Dropdown menu with a chevron indicator. Use when the user must choose exactly one option from a predefined list.</li>
        <li><strong>Checkbox:</strong> A group of independent selection controls under a shared legend. Use for multiple non-exclusive choices, opt-ins, or feature toggles. Typically 2–4 options.</li>
        <li><strong>Radio:</strong> A group of mutually exclusive selection controls under a shared legend. Use when the user must choose exactly one option from 2–5 alternatives.</li>
        <li><strong>Switch:</strong> A group of binary toggle controls under a shared legend. Use for on/off settings where the effect is immediate.</li>
      </ul>

      <hr />

      <h2>States</h2>
      <ul>
        <li><strong>Default:</strong> The initial, unfocused state. Text inputs show placeholder text; choice inputs are unchecked or unselected.</li>
        <li><strong>Focus:</strong> Applied when an input receives keyboard focus. A 2px primary-colored outline appears with a 2px offset, meeting WCAG 2.1 focus visibility requirements.</li>
        <li><strong>Disabled:</strong> Applied when an input is non-interactive. The element renders at reduced opacity (0.5) and shows a <code>not-allowed</code> cursor. Disabled controls are excluded from tab order.</li>
        <li><strong>Read-only:</strong> Applied to text inputs that display a value the user cannot edit. The field remains in tab order and its value is submitted with the form. Applies to text, password, and select only.</li>
        <li><strong>Invalid:</strong> Applied after failed validation. The input border becomes the invalid (red) color, <code>aria-invalid="true"</code> is set, and the message slot shows an error description linked via <code>aria-describedby</code>.</li>
        <li><strong>Valid:</strong> Applied after successful validation when confirmation is helpful. The input border becomes the valid (green) color. Use sparingly — only when positive confirmation meaningfully helps the user.</li>
        <li><strong>Checkbox values:</strong> Checkboxes have three possible values: unchecked (not selected), checked (selected), and indeterminate (partially selected, used for nested or "select all" patterns).</li>
        <li><strong>Password visibility:</strong> The password input toggles between hidden (characters masked) and shown (characters visible) via the show/hide button. The button label and icon update to reflect the current state.</li>
        <li><strong>Select open/closed:</strong> The select renders in a closed state showing the current value or placeholder. When activated, the dropdown expands to show all available options.</li>
      </ul>

      <hr />

      <h2>Typography</h2>
      <p>Fieldsets define typography for labels, legends, and message text. Input field typography is defined by the individual input components.</p>

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
            <td>label, legend font-size</td>
            <td><code>small/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.25rem / 20px</td>
          </tr>
          <tr>
            <td>label, legend line-height</td>
            <td><code>small/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.875rem / 30px</td>
          </tr>
          <tr>
            <td>legend label, message font-size</td>
            <td><code>fine/font-size</code></td>
            <td>0.625rem / 10px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>legend label, message line-height</td>
            <td><code>fine/line-height</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Input typography:</strong> Text input, password input, select dropdown, and choice input label typography are defined by their respective input components. See the Input documentation for complete specifications.</p>

      <hr />

      <h2>Spacing</h2>
      <p>Fieldsets define spacing between the label/legend, input, and message elements. Internal input spacing is defined by the individual input components.</p>

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
            <td>text, password, select gap</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>checkbox, radio, switch gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>legend padding-bottom</td>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Input spacing:</strong> Padding, gaps, and internal spacing for text inputs, password inputs, selects, checkboxes, radios, and switches are defined by their respective input components. See the Input documentation for complete specifications.</p>

      <hr />

      <h2>Colors</h2>
      <p>Fieldsets define colors for labels, legends, and message text. Input colors, borders, and validation states are defined by the individual input components.</p>

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
            <td>label, legend color</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>message color (default)</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>message color (invalid)</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
          <tr>
            <td>message color (valid)</td>
            <td><code>status/valid</code></td>
            <td>#007000</td>
            <td>#007000</td>
          </tr>
          <tr>
            <td>message color (disabled)</td>
            <td><code>status/disabled</code></td>
            <td>#808080</td>
            <td>#808080</td>
          </tr>
          <tr>
            <td>message color (read-only)</td>
            <td><code>status/read-only</code></td>
            <td>#333333</td>
            <td>#333333</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Input colors:</strong> Text inputs, password inputs, select dropdowns, checkboxes, radios, and switches each define their own colors for backgrounds, borders, text, placeholders, and interactive states. See the Input documentation for complete color specifications.</p>

      <p><strong>Light/dark mode behavior:</strong> Label and message text adapt through the <code>text/default</code> token. In dark mode, note that message text resolves to white (#FFFFFF), the same as label text — ensure message content is always differentiated by position, not color alone.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>All fieldset inputs must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus between form controls in reading order</li>
        <li><strong>Shift + Tab:</strong> Moves focus backward</li>
        <li><strong>Space:</strong> Toggles checkboxes and switches; opens a closed select</li>
        <li><strong>Enter:</strong> Submits the form; activates buttons within the fieldset (e.g. show/hide password)</li>
        <li><strong>Arrow keys:</strong> Navigate between radio buttons within a group</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use proper semantic HTML to ensure assistive technology can interpret form structure correctly. The <code>&lt;fieldset&gt;</code> element groups related controls; <code>&lt;legend&gt;</code> provides the accessible name for the group. Individual text, password, and select inputs use <code>&lt;label for="…"&gt;</code> with matching <code>id</code> attributes to form explicit associations. Choice input labels wrap the control and its text inline.</p>

      <h3>ARIA attributes</h3>
      <p>Use ARIA attributes to communicate input states and relationships:</p>
      <ul>
        <li><strong>aria-invalid="true":</strong> Applied to invalid inputs to signal error state to screen readers</li>
        <li><strong>aria-required="true":</strong> Indicates that a field must be completed before form submission</li>
        <li><strong>aria-describedby:</strong> Links an input to its message element so screen readers announce the helper or error text</li>
        <li><strong>aria-disabled="true":</strong> Applied to disabled inputs where the native <code>disabled</code> attribute cannot be used</li>
        <li><strong>role="switch":</strong> Applied to switch-style checkbox inputs to communicate binary on/off semantics</li>
        <li><strong>role="alert":</strong> Applied to error message containers so validation errors are announced immediately</li>
      </ul>

      <h3>Focus management</h3>
      <p>All interactive elements require a visible focus indicator. Focus moves logically through the form in document reading order. The default focus style is a 2px solid outline in the primary color (<code>#FF5247</code>) with a 2px offset. Do not remove or suppress focus outlines — they are essential for keyboard users and required by WCAG 2.1 SC 2.4.7.</p>

      <h3>Color contrast</h3>
      <p>Label and input text (#000000 on white in light mode) meet the WCAG AA contrast ratio of 4.5:1 for normal text. In dark mode, white text on the secondary-dark background (#01232D) also meets this threshold. Placeholder text (#919191) does not meet AA contrast on white — do not rely on placeholder text to communicate required information; always provide a visible label. Validation border colors (#C00C00, #007000) are supplemented with message text and ARIA attributes so that state is never communicated by color alone.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use Fieldsets when you need to:</p>
      <ul>
        <li>Collect user input with consistent labeling and structure across a form</li>
        <li>Group related choice controls (checkboxes, radios, switches) under a shared label</li>
        <li>Provide inline validation feedback and helper text alongside inputs</li>
        <li>Ensure accessible form markup for screen readers and keyboard users</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use Fieldsets when:</p>
      <ul>
        <li>Building search inputs — use a search-specific pattern with appropriate <code>role="search"</code> semantics instead</li>
        <li>Creating filter or toolbar controls — consider chip groups or inline toggle patterns depending on context</li>
        <li>An input genuinely does not need a visible label — in those rare cases, provide an accessible label via <code>aria-label</code> or <code>aria-labelledby</code> rather than removing the label from the DOM</li>
      </ul>

      <h3>Content guidelines</h3>
      <p>Use these guidelines when writing content for fieldset inputs:</p>
      <ul>
        <li><strong>Write concise labels:</strong> 1–3 words that clearly describe what the input expects. Avoid vague labels like "Field" or "Input".</li>
        <li><strong>Use placeholders for format examples:</strong> Show an example value (e.g. "<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="abc5cac6ceebced3cac6dbc7ce85c8c4c6">[email&#160;protected]</a>") rather than repeating the label or providing instructions. Placeholders disappear on input and cannot replace visible labels.</li>
        <li><strong>Write proactive message text:</strong> Explain constraints and requirements before an error occurs — not just after. For example: "Must be at least 8 characters" rather than "Password too short."</li>
        <li><strong>Keep legends brief:</strong> Group labels should clearly name the group without repeating each option's content.</li>
        <li><strong>Write actionable error messages:</strong> Tell the user exactly what went wrong and what to do to fix it.</li>
      </ul>

      <h3>Input type selection</h3>
      <table>
        <thead>
          <tr>
            <th>Input type</th>
            <th>Use for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text</td>
            <td>Short, single-line text entry: names, emails, URLs, codes</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>Sensitive text that should be masked by default</td>
          </tr>
          <tr>
            <td>Select</td>
            <td>Choosing exactly one option from a predefined list of 5 or more</td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>Multiple independent choices, opt-ins, feature toggles</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td>Single choice from 2–5 mutually exclusive options</td>
          </tr>
          <tr>
            <td>Switch</td>
            <td>Binary on/off settings where the effect is immediate</td>
          </tr>
        </tbody>
      </table>

      <h3>Placement</h3>
      <p>Fieldsets stack vertically within a form, with consistent spacing between each input group. Align inputs to the left edge of the form column. The component has a minimum width of 15.5rem (248px) and maximum width of 26.25rem (420px); it is fluid between these bounds. In wider layouts, multiple fieldsets may be placed side-by-side within a grid, but vertically-stacked single-column forms are preferred for legibility and completion rate.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>

          <p><strong>Use semantic HTML elements</strong></p>
          <p>Native <code>&lt;fieldset&gt;</code>, <code>&lt;legend&gt;</code>, and <code>&lt;label&gt;</code> elements provide built-in accessibility and require less ARIA overhead than custom implementations.</p>

          <p><strong>Group related choice inputs</strong></p>
          <p>Wrap checkbox, radio, and switch groups in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> so assistive technology announces the group context for each control.</p>

          <p><strong>Link messages to inputs</strong></p>
          <p>Always use <code>aria-describedby</code> to associate helper and error messages with their input so screen readers announce the message when the field receives focus.</p>

          <p><strong>Make labels fully clickable</strong></p>
          <p>Use explicit <code>for</code>/<code>id</code> associations or wrap controls in their <code>&lt;label&gt;</code> so users can click anywhere on the label text to focus or activate the input.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>

          <p><strong>Don't use placeholder as a label</strong></p>
          <p>Placeholders disappear when the user starts typing, leaving them with no reminder of what the field expects. Always provide a persistent visible label.</p>

          <p><strong>Don't rely on color alone for state</strong></p>
          <p>Border color changes for invalid and valid states must always be accompanied by message text and ARIA attributes — color alone is insufficient for users with visual impairments.</p>

          <p><strong>Don't hide validation messages prematurely</strong></p>
          <p>Keep error messages visible until the user has corrected the input and validation has passed. Hiding messages while the error persists confuses users.</p>

          <p><strong>Don't make touch targets too small</strong></p>
          <p>Checkbox, radio, and switch controls require a minimum 44×44px touch target. Use label padding to extend the interactive area beyond the visible control.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Text input fieldset --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;label for="email"&gt;Email address&lt;/label&gt;
  &lt;input type="email"
         id="email"
         placeholder="<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="016f606c64416479606c716d642f626e6c">[email&#160;protected]</a>"
         aria-describedby="email-message"&gt;
  &lt;div id="email-message" class="message"&gt;
    We'll never share your email with anyone else.
  &lt;/div&gt;
&lt;/fieldset&gt;

&lt;!-- Password input fieldset --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;label for="password"&gt;Password&lt;/label&gt;
  &lt;div class="input-wrapper"&gt;
    &lt;input type="password"
           id="password"
           placeholder="Enter password"
           aria-describedby="password-message"&gt;
    &lt;button type="button" aria-label="Show password"&gt;
      &lt;!-- Eye icon --&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div id="password-message" class="message"&gt;
    Must be at least 8 characters.
  &lt;/div&gt;
&lt;/fieldset&gt;

&lt;!-- Select fieldset --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;label for="country"&gt;Country&lt;/label&gt;
  &lt;select id="country" aria-describedby="country-message"&gt;
    &lt;option&gt;Select a country&lt;/option&gt;
    &lt;option value="us"&gt;United States&lt;/option&gt;
    &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
  &lt;/select&gt;
  &lt;div id="country-message" class="message"&gt;
    Choose your country of residence.
  &lt;/div&gt;
&lt;/fieldset&gt;

&lt;!-- Checkbox group fieldset --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;legend&gt;
    Interests
    &lt;span class="legend-label"&gt;(Optional)&lt;/span&gt;
  &lt;/legend&gt;
  &lt;div class="checkbox-group"&gt;
    &lt;label&gt;
      &lt;input type="checkbox" value="design"&gt;
      Design
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type="checkbox" value="development"&gt;
      Development
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type="checkbox" value="marketing"&gt;
      Marketing
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="message"&gt;Select all that apply.&lt;/div&gt;
&lt;/fieldset&gt;

&lt;!-- Radio group fieldset --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;legend&gt;Notification preference&lt;/legend&gt;
  &lt;div class="radio-group"&gt;
    &lt;label&gt;
      &lt;input type="radio" name="notifications" value="all" checked&gt;
      All notifications
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type="radio" name="notifications" value="important"&gt;
      Important only
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type="radio" name="notifications" value="none"&gt;
      None
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="message"&gt;Choose how you want to receive notifications.&lt;/div&gt;
&lt;/fieldset&gt;

&lt;!-- Switch group fieldset --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;legend&gt;Privacy settings&lt;/legend&gt;
  &lt;div class="switch-group"&gt;
    &lt;label class="switch-label"&gt;
      &lt;input type="checkbox" role="switch" checked&gt;
      &lt;span class="switch-track"&gt;&lt;/span&gt;
      Profile visibility
    &lt;/label&gt;
    &lt;label class="switch-label"&gt;
      &lt;input type="checkbox" role="switch"&gt;
      &lt;span class="switch-track"&gt;&lt;/span&gt;
      Activity status
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="message"&gt;Control what others can see.&lt;/div&gt;
&lt;/fieldset&gt;

&lt;!-- Invalid state --&gt;
&lt;fieldset class="fieldset"&gt;
  &lt;label for="username"&gt;Username&lt;/label&gt;
  &lt;input type="text"
         id="username"
         value="ab"
         aria-invalid="true"
         aria-describedby="username-error"&gt;
  &lt;div id="username-error" class="message error" role="alert"&gt;
    Username must be at least 3 characters.
  &lt;/div&gt;
&lt;/fieldset&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Fieldset base */
.fieldset {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sm);
}

.fieldset--choice {
  gap: var(--md);
}

/* Label */
.fieldset label,
.fieldset legend {
  display: block;
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  color: var(--text-default);
}

/* Legend bottom padding */
.fieldset legend {
  padding-bottom: var(--xs);
}

/* Legend label (fine print) */
.legend-label {
  font-size: var(--fine-font-size);
  line-height: var(--fine-line-height);
  margin-left: var(--md);
  color: var(--text-default);
}

/* Text, password, select inputs */
.fieldset input[type="text"],
.fieldset input[type="email"],
.fieldset input[type="password"],
.fieldset select {
  padding: var(--components-input-text-padding);
  border: 1px solid var(--global-gray-medium);
  border-radius: var(--components-input-text-border-radius);
  font-size: var(--components-input-text-font-size);
  line-height: var(--components-input-text-line-height);
  color: var(--text-default);
}

.fieldset input::placeholder {
  color: var(--global-gray-dark);
}

/* Input icons */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--components-input-text-padding-gap);
}

/* Input states */
.fieldset input:disabled,
.fieldset select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fieldset input[aria-invalid="true"],
.fieldset select[aria-invalid="true"] {
  border-color: var(--status-invalid);
}

.fieldset input.valid,
.fieldset select.valid {
  border-color: var(--status-valid);
}

/* Checkbox and radio groups */
.checkbox-group,
.radio-group,
.switch-group {
  display: flex;
  flex-direction: column;
  gap: var(--components-input-checkbox-padding-gap);
}

.checkbox-group label,
.radio-group label {
  display: flex;
  align-items: center;
  gap: var(--components-input-checkbox-padding-gap);
  font-size: var(--components-input-checkbox-font-size);
  line-height: var(--components-input-checkbox-line-height);
  color: var(--text-default);
}

/* Message text */
.message {
  font-size: var(--fine-font-size);
  line-height: var(--fine-line-height);
  color: var(--text-default);
}

.message.error {
  color: var(--status-invalid);
}

/* Focus states */
.fieldset input:focus,
.fieldset select:focus {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* Widescreen */
@media (min-width: 80rem) {
  .fieldset {
    gap: var(--sm);
  }
  .fieldset--choice {
    gap: var(--md);
  }
  .fieldset legend {
    padding-bottom: var(--xs);
  }
  .fieldset label,
  .fieldset legend {
    font-size: var(--small-font-size);
    line-height: var(--small-line-height);
  }
  .legend-label {
    font-size: var(--fine-font-size);
    line-height: var(--fine-line-height);
  }
  .fieldset input[type="text"],
  .fieldset input[type="email"],
  .fieldset input[type="password"],
  .fieldset select {
    padding: var(--components-input-text-padding);
    font-size: var(--components-input-text-font-size);
    line-height: var(--components-input-text-line-height);
  }
  .message {
    font-size: var(--fine-font-size);
    line-height: var(--fine-line-height);
  }
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--small-font-size                         Mobile: 0.75rem / 12px   →   Widescreen: 1.25rem / 20px
--small-line-height                       Mobile: 1.25rem / 20px   →   Widescreen: 1.875rem / 30px
--fine-font-size                          Mobile: 0.625rem / 10px  →   Widescreen: 1rem / 16px
--fine-line-height                        Mobile: 1rem / 16px      →   Widescreen: 1.5rem / 24px
--components-input-text-font-size         Mobile: 1rem / 16px      →   Widescreen: 1.5rem / 24px
--components-input-text-line-height       Mobile: 1.25rem / 20px   →   Widescreen: 2rem / 32px
--components-input-checkbox-font-size     1rem / 16px (fixed)
--components-input-checkbox-line-height   1.25rem / 20px (fixed)

/* Spacing */
--xs                                      Mobile: 0.125rem / 2px   →   Widescreen: 0.25rem / 4px
--sm                                      Mobile: 0.25rem / 4px    →   Widescreen: 0.5rem / 8px
--md                                      Mobile: 0.5rem / 8px     →   Widescreen: 1rem / 16px
--components-input-text-padding           Mobile: 0.5rem / 8px     →   Widescreen: 0.75rem / 12px
--components-input-text-padding-gap       0.25rem / 4px (fixed)
--components-input-checkbox-padding       0.125rem / 2px (fixed)
--components-input-checkbox-padding-gap   0.5rem / 8px (fixed)
--components-input-switch-padding         0.25rem / 4px (fixed)
--components-input-switch-padding-gap     0.5rem / 8px (fixed)

/* Border-radius */
--components-input-text-border-radius     0.25rem / 4px (fixed)
--input-checkbox-border-radius            0.25rem / 4px (fixed)
--components-input-switch-border-radius   1rem / 16px (fixed)

/* Colors */
--text-default         Light: #000000   Dark: #FFFFFF
--global-gray-dark     Light: #919191   Dark: #919191
--global-gray-medium   Light: #CCCCCC   Dark: #CCCCCC
--brand-primary        Light: #FF5247   Dark: #FF5247
--status-invalid       Light: #C00C00   Dark: #C00C00
--status-valid         Light: #007000   Dark: #007000
--status-disabled      Light: #808080   Dark: #808080
--status-read-only     Light: #333333   Dark: #333333</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/tutorials/forms/" target="_blank">W3C: Accessible Forms Tutorial</a> — Patterns and best practices for accessible form markup</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" target="_blank">MDN: &lt;fieldset&gt; element</a> — Native HTML fieldset documentation</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend" target="_blank">MDN: &lt;legend&gt; element</a> — Native HTML legend documentation</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/techniques/forms/" target="_blank">WebAIM: Creating Accessible Forms</a> — Form accessibility guidance</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Molecules/Fieldsets',
};

export default meta;

export const Documentation = () => createFieldsetsDocumentation();
