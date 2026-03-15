function createInputsDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Inputs</h1>
      <p>Form inputs allow users to enter information, make selections, and provide data. The Delta Design System provides a comprehensive set of input components that are accessible, consistent, and easy to implement.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Input components share common structural elements:</p>
      <ul>
        <li><strong>Input field:</strong> The interactive area where users enter or select data</li>
        <li><strong>Label:</strong> Text that describes what information is expected</li>
        <li><strong>Border:</strong> Visual container that defines the input boundary</li>
        <li><strong>Helper text (optional):</strong> Additional guidance or instructions</li>
        <li><strong>Validation message (optional):</strong> Feedback indicating valid, invalid, or error states</li>
        <li><strong>Icon (optional):</strong> Visual indicator for input type, state, or action</li>
      </ul>

      <div class="delta-docs__placeholder" aria-label="Inputs anatomy placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live anatomy specimen will be added here.</p>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>The Delta Design System includes multiple input types, each designed for specific data entry needs.</p>

      <h3>Text input</h3>
      <p>Single-line text fields for entering short text, email addresses, phone numbers, URLs, and numerical data. Text inputs are the most common input type.</p>

      <div class="delta-docs__placeholder" aria-label="Text input placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live text input specimen will be added here.</p>
      </div>

      <h3>Select</h3>
      <p>Dropdown menus that allow users to choose a single option from a predefined list. Use selects when there are 5 or more options.</p>

      <div class="delta-docs__placeholder" aria-label="Select placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live select specimen will be added here.</p>
      </div>

      <h3>Checkbox</h3>
      <p>Square controls for selecting multiple options from a list or toggling a single option on or off.</p>

      <div class="delta-docs__placeholder" aria-label="Checkbox placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live checkbox specimen will be added here.</p>
      </div>

      <h3>Radio</h3>
      <p>Circular controls for selecting exactly one option from a group. Radio buttons should always appear in groups of two or more.</p>

      <div class="delta-docs__placeholder" aria-label="Radio placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live radio specimen will be added here.</p>
      </div>

      <h3>Switch</h3>
      <p>Toggle controls for turning a setting on or off. Switches provide immediate feedback and are best for settings that take effect instantly.</p>

      <div class="delta-docs__placeholder" aria-label="Switch placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live switch specimen will be added here.</p>
      </div>

      <h3>Password</h3>
      <p>Secure text fields that obscure entered characters with bullets or asterisks. Typically include a show/hide toggle for visibility control.</p>

      <div class="delta-docs__placeholder" aria-label="Password placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live password specimen will be added here.</p>
      </div>

      <h3>Messages</h3>
      <p>Contextual text that provides helper information, validation feedback, or error messages. Messages appear below input fields and use color coding to indicate state.</p>

      <div class="delta-docs__placeholder" aria-label="Messages placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live message specimens will be added here.</p>
      </div>

      <hr />

      <h2>States</h2>
      <p>All input components share common interaction states that provide visual feedback to users.</p>

      <h3>Default</h3>
      <p>The resting state of an input before any user interaction. Borders use <code>global/gray-medium</code> (#CCCCCC).</p>

      <div class="delta-docs__placeholder" aria-label="Default input state placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live default-state specimen will be added here.</p>
      </div>

      <h3>Hover</h3>
      <p>The cursor-over state. No visual border change occurs on hover — the cursor changes to a text insertion pointer to indicate the field is interactive.</p>

      <h3>Focus</h3>
      <p>Applied when an input receives keyboard or pointer focus. The browser default focus outline is used, providing a visible ring around the element. Never remove focus indicators — they are essential for keyboard navigation and WCAG compliance.</p>

      <h3>Disabled</h3>
      <p>Indicates the input is not currently interactive. Uses <code>status/disabled</code> (#808080) for both border and text color to signal unavailability.</p>

      <div class="delta-docs__placeholder" aria-label="Disabled input state placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live disabled-state specimen will be added here.</p>
      </div>

      <h3>Read-only</h3>
      <p>Displays data that cannot be edited but can be read and copied. Uses <code>status/read-only</code> (#333333) for the border to differentiate from disabled.</p>

      <div class="delta-docs__placeholder" aria-label="Read-only input state placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live read-only-state specimen will be added here.</p>
      </div>

      <h3>Valid</h3>
      <p>Indicates successful validation. Uses <code>status/valid</code> (#007000) for both the border and validation message to confirm correct input.</p>

      <div class="delta-docs__placeholder" aria-label="Valid input state placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live valid-state specimen will be added here.</p>
      </div>

      <h3>Invalid</h3>
      <p>Indicates validation failure. Uses <code>status/invalid</code> (#C00C00) for both the border and error message to highlight the issue.</p>

      <div class="delta-docs__placeholder" aria-label="Invalid input state placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live invalid-state specimen will be added here.</p>
      </div>

      <hr />

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
            <td>Input text font-size</td>
            <td><code>components/input/text/font-size</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Input text line-height</td>
            <td><code>components/input/text/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>Checkbox &amp; radio label font-size</td>
            <td><code>components/input/checkbox/font-size</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Checkbox &amp; radio label line-height</td>
            <td><code>components/input/checkbox/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.75rem / 28px</td>
          </tr>
          <tr>
            <td>Message font-size</td>
            <td><code>fine/font-size</code></td>
            <td>0.625rem / 10px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Message line-height</td>
            <td><code>fine/line-height</code></td>
            <td>1.125rem / 18px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Label font-size</td>
            <td><code>small/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.25rem / 20px</td>
          </tr>
          <tr>
            <td>Label line-height</td>
            <td><code>small/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.875rem / 30px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Spacing</h2>

      <h3>Text input, Select, and Password</h3>
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
            <td>Padding</td>
            <td><code>components/input/text/padding</code></td>
            <td>0.5rem / 8px</td>
            <td>0.75rem / 12px</td>
          </tr>
          <tr>
            <td>Icon gap</td>
            <td><code>components/input/text/padding-gap</code></td>
            <td>0.25rem / 4px</td>
            <td>0.25rem / 4px (fixed)</td>
          </tr>
        </tbody>
      </table>

      <h3>Checkbox and Radio</h3>
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
            <td>Internal padding</td>
            <td><code>components/input/checkbox/padding</code></td>
            <td>0.125rem / 2px</td>
            <td>0.125rem / 2px (fixed)</td>
          </tr>
          <tr>
            <td>Label gap</td>
            <td><code>components/input/checkbox/padding-gap</code></td>
            <td>0.5rem / 8px</td>
            <td>0.5rem / 8px (fixed)</td>
          </tr>
          <tr>
            <td>Radio inner padding</td>
            <td><code>components/input/radio/before/padding</code></td>
            <td>0.25rem / 4px</td>
            <td>0.375rem / 6px</td>
          </tr>
        </tbody>
      </table>

      <h3>Switch</h3>
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
            <td>Track padding</td>
            <td><code>components/input/switch/padding</code></td>
            <td>0.25rem / 4px</td>
            <td>0.25rem / 4px (fixed)</td>
          </tr>
          <tr>
            <td>Label gap</td>
            <td><code>components/input/switch/padding-gap</code></td>
            <td>0.5rem / 8px</td>
            <td>0.5rem / 8px (fixed)</td>
          </tr>
        </tbody>
      </table>

      <hr />

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
            <td>Text input, Select, Password</td>
            <td><code>components/input/text/border-radius</code></td>
            <td>0.25rem / 4px</td>
            <td>0.25rem / 4px (fixed)</td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td><code>components/input/checkbox/border-radius</code></td>
            <td>0.25rem / 4px</td>
            <td>0.25rem / 4px (fixed)</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td><code>border-radius/round</code></td>
            <td>6.25rem / 100px (fixed)</td>
            <td>6.25rem / 100px (fixed)</td>
          </tr>
          <tr>
            <td>Switch track</td>
            <td><code>components/input/switch/border-radius</code></td>
            <td>1rem / 16px</td>
            <td>1rem / 16px (fixed)</td>
          </tr>
          <tr>
            <td>Switch thumb</td>
            <td><code>border-radius/round</code></td>
            <td>6.25rem / 100px (fixed)</td>
            <td>6.25rem / 100px (fixed)</td>
          </tr>
        </tbody>
      </table>

      <hr />

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
            <td>Default border</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Input text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Placeholder text</td>
            <td><code>global/gray-dark</code></td>
            <td>#919191</td>
            <td>#919191</td>
          </tr>
          <tr>
            <td>Disabled border</td>
            <td><code>status/disabled</code></td>
            <td>#808080</td>
            <td>#808080</td>
          </tr>
          <tr>
            <td>Disabled text</td>
            <td><code>status/disabled</code></td>
            <td>#808080</td>
            <td>#808080</td>
          </tr>
          <tr>
            <td>Read-only border</td>
            <td><code>status/read-only</code></td>
            <td>#333333</td>
            <td>#333333</td>
          </tr>
          <tr>
            <td>Valid border</td>
            <td><code>status/valid</code></td>
            <td>#007000</td>
            <td>#007000</td>
          </tr>
          <tr>
            <td>Valid message</td>
            <td><code>status/valid</code></td>
            <td>#007000</td>
            <td>#007000</td>
          </tr>
          <tr>
            <td>Invalid border</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
          <tr>
            <td>Invalid message</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
          <tr>
            <td>Checkbox border (checked)</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
          <tr>
            <td>Option label text</td>
            <td><code>components/option/label</code></td>
            <td>#000000 (global/black)</td>
            <td>#000000 (global/black)</td>
          </tr>
          <tr>
            <td>Option list hover</td>
            <td><code>components/option/hover</code></td>
            <td>#EEEEEE (global/gray-light)</td>
            <td>#EEEEEE (global/gray-light)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Background and text colors invert between light and dark modes for readability. Status colors (valid, invalid, disabled, read-only) and brand colors are mode-invariant. In dark mode, note that disabled text (#808080) and placeholder text (#919191) are visually similar against the dark background — ensure sufficient contrast in dark mode implementations.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>All input components must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the next input or interactive element</li>
        <li><strong>Shift + Tab:</strong> Moves focus to the previous input or interactive element</li>
        <li><strong>Space:</strong> Toggles checkboxes, radio buttons, and switches</li>
        <li><strong>Enter:</strong> Submits forms (when focus is on an input)</li>
        <li><strong>Arrow keys:</strong> Navigates between radio button options in a group</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use semantic HTML and proper labeling to ensure inputs are announced correctly. Every input must have an associated label using either the <code>for</code> attribute or by wrapping the input. Group related inputs (radio buttons, checkboxes) using <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements.</p>

      <h3>ARIA attributes</h3>
      <p>Key ARIA attributes for inputs:</p>
      <ul>
        <li><strong>aria-label:</strong> Provides a label when a visible label is not present</li>
        <li><strong>aria-labelledby:</strong> Associates the input with a label element</li>
        <li><strong>aria-describedby:</strong> Links helper text or validation messages to the input</li>
        <li><strong>aria-invalid:</strong> Set to "true" when input validation fails</li>
        <li><strong>aria-required:</strong> Indicates required fields</li>
        <li><strong>role="switch":</strong> Use for toggle switches to differentiate from checkboxes</li>
      </ul>

      <h3>Focus management</h3>
      <p>Inputs rely on browser default focus indicators which meet WCAG 2.1 Level AA requirements. Maintain sufficient color contrast between focus states and backgrounds. Never remove focus indicators with CSS. On mobile, ensure all interactive elements meet the minimum 44×44px touch target size — extend checkbox and radio button click areas to include their labels.</p>

      <h3>Color contrast</h3>
      <p>All input states meet WCAG 2.1 Level AA contrast requirements. Border colors provide at least 3:1 contrast against backgrounds. Text colors provide at least 4.5:1 contrast for normal text and 3:1 for large text.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use input components when you need to:</p>
      <ul>
        <li>Collect information from users through forms</li>
        <li>Allow users to make selections or configure settings</li>
        <li>Enable data entry for search, filtering, or creating content</li>
        <li>Provide authentication fields for login or registration</li>
        <li>Gather feedback through surveys or questionnaires</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use input components when:</p>
      <ul>
        <li>Displaying read-only information — use text or labels instead</li>
        <li>Triggering actions — use buttons instead</li>
        <li>Providing navigation — use links or navigation components</li>
        <li>Showing status or counts — use badges or indicators instead</li>
      </ul>

      <h3>Content guidelines</h3>
      <p>Guidelines for input content:</p>
      <ul>
        <li><strong>Write clear labels:</strong> Use concise, descriptive labels that clearly indicate what information is expected. Avoid ambiguous terms.</li>
        <li><strong>Provide helpful placeholder text:</strong> Use placeholders to show examples or format requirements, not as a replacement for labels.</li>
        <li><strong>Write actionable error messages:</strong> Tell users what went wrong and how to fix it. Be specific and constructive.</li>
        <li><strong>Keep helper text brief:</strong> Provide just enough context without overwhelming users with information.</li>
        <li><strong>Use sentence case:</strong> Labels and helper text should use sentence case, not title case or all caps.</li>
      </ul>

      <h3>Placement</h3>
      <p>Position input components within forms and layouts according to their relationship to surrounding content. Stack inputs vertically in a single column for most forms — this improves readability and reduces errors. Use a multi-column layout only for short, closely related fields such as city, state, and postal code. Place labels consistently above their inputs, aligning to the left edge of the field. Match the input type to the data being collected:</p>

      <table>
        <thead>
          <tr>
            <th>Input type</th>
            <th>Best for</th>
            <th>Not suitable for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text input</td>
            <td>Short, free-form text entry (names, emails, search)</td>
            <td>Long text (use textarea), selecting from options (use select)</td>
          </tr>
          <tr>
            <td>Select</td>
            <td>Choosing from 5+ predefined options</td>
            <td>2–4 options (use radio), multiple selections (use checkboxes)</td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>Multiple selections, single toggles (terms acceptance)</td>
            <td>Mutually exclusive options (use radio)</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td>Selecting exactly one from 2–5 visible options</td>
            <td>Multiple selections (use checkbox), 6+ options (use select)</td>
          </tr>
          <tr>
            <td>Switch</td>
            <td>Settings that take effect immediately</td>
            <td>Form submissions requiring an explicit save action</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>Secure authentication credentials</td>
            <td>Non-sensitive information (use text input)</td>
          </tr>
        </tbody>
      </table>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Label every input</strong></p>
          <p>Always provide visible labels for inputs. Labels should be positioned above or to the left of the input field for clarity.</p>

          <p><strong>Validate inline when possible</strong></p>
          <p>Provide real-time validation feedback as users complete fields to help them correct errors immediately.</p>

          <p><strong>Group related inputs</strong></p>
          <p>Use fieldsets and legends to organize related inputs logically, making forms easier to scan and complete.</p>

          <p><strong>Indicate required fields clearly</strong></p>
          <p>Mark required fields with an asterisk (*) and include a legend explaining the notation at the form start.</p>

          <p><strong>Use appropriate input types</strong></p>
          <p>Choose the HTML input type that matches the data being collected for better mobile keyboards and validation.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't use placeholder as label</strong></p>
          <p>Placeholders disappear when users type and create accessibility issues. Always provide persistent labels.</p>

          <p><strong>Don't disable copy/paste</strong></p>
          <p>Allow users to copy and paste in all fields. Disabling this functionality frustrates users and harms accessibility.</p>

          <p><strong>Don't make forms unnecessarily long</strong></p>
          <p>Only ask for information you actually need. Long forms increase abandonment and user frustration.</p>

          <p><strong>Don't use unclear validation messages</strong></p>
          <p>Avoid generic errors like "Invalid input." Explain specifically what's wrong and how to fix it.</p>

          <p><strong>Don't rely solely on color</strong></p>
          <p>Use icons, text, and other visual indicators alongside color to communicate state for colorblind users.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>

      <h4>Text input</h4>
      <pre><code>&lt;!-- Basic text input --&gt;
&lt;label for="username"&gt;Username&lt;/label&gt;
&lt;input type="text" id="username" name="username" /&gt;

&lt;!-- With helper text --&gt;
&lt;label for="email"&gt;Email address&lt;/label&gt;
&lt;input type="email" id="email" name="email" aria-describedby="email-help" /&gt;
&lt;p id="email-help"&gt;We'll never share your email.&lt;/p&gt;

&lt;!-- With validation --&gt;
&lt;label for="email-invalid"&gt;Email address&lt;/label&gt;
&lt;input type="email" id="email-invalid" name="email"
       aria-invalid="true" aria-describedby="email-error" /&gt;
&lt;p id="email-error" role="alert"&gt;Please enter a valid email address.&lt;/p&gt;</code></pre>

      <h4>Select</h4>
      <pre><code>&lt;label for="country"&gt;Country&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value=""&gt;Select a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h4>Checkbox</h4>
      <pre><code>&lt;!-- Single checkbox --&gt;
&lt;div&gt;
  &lt;input type="checkbox" id="terms" name="terms" /&gt;
  &lt;label for="terms"&gt;I agree to the terms and conditions&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Checkbox group --&gt;
&lt;fieldset&gt;
  &lt;legend&gt;Select your interests&lt;/legend&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="design" name="interests" value="design" /&gt;
    &lt;label for="design"&gt;Design&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="dev" name="interests" value="development" /&gt;
    &lt;label for="dev"&gt;Development&lt;/label&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</code></pre>

      <h4>Radio</h4>
      <pre><code>&lt;fieldset&gt;
  &lt;legend&gt;Choose a plan&lt;/legend&gt;
  &lt;div&gt;
    &lt;input type="radio" id="basic" name="plan" value="basic" /&gt;
    &lt;label for="basic"&gt;Basic&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="radio" id="pro" name="plan" value="pro" /&gt;
    &lt;label for="pro"&gt;Professional&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="radio" id="enterprise" name="plan" value="enterprise" /&gt;
    &lt;label for="enterprise"&gt;Enterprise&lt;/label&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</code></pre>

      <h4>Switch</h4>
      <pre><code>&lt;div&gt;
  &lt;input type="checkbox" id="notifications" role="switch" /&gt;
  &lt;label for="notifications"&gt;Enable notifications&lt;/label&gt;
&lt;/div&gt;</code></pre>

      <h4>Password</h4>
      <pre><code>&lt;label for="password"&gt;Password&lt;/label&gt;
&lt;input type="password" id="password" name="password"
       aria-describedby="password-requirements" /&gt;
&lt;p id="password-requirements"&gt;
  Must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.
&lt;/p&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Text input, Select, Password — base styles */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="url"],
input[type="number"],
select {
  display: block;
  width: 100%;
  padding: var(--components-input-text-padding);
  border: 1px solid var(--global-gray-medium);
  border-radius: var(--components-input-text-border-radius);
  font-size: var(--components-input-text-font-size);
  line-height: var(--components-input-text-line-height);
  font-family: var(--font-family);
  background-color: var(--page-background);
  color: var(--text-default);
}

/* Focus state */
input:focus,
select:focus {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* Disabled state */
input:disabled,
select:disabled {
  border-color: var(--status-disabled);
  color: var(--status-disabled);
  cursor: not-allowed;
}

/* Read-only state */
input[readonly] {
  border-color: var(--status-read-only);
}

/* Valid state */
input[aria-invalid="false"],
input.valid {
  border-color: var(--status-valid);
}

/* Invalid state */
input[aria-invalid="true"],
input.invalid {
  border-color: var(--status-invalid);
  color: var(--status-invalid);
}

/* Message text */
.message {
  font-size: var(--fine-font-size);
  line-height: var(--fine-line-height);
  margin-top: var(--components-input-text-padding-gap);
  color: var(--text-default);
}

.message.valid    { color: var(--status-valid); }
.message.invalid  { color: var(--status-invalid); }
.message.disabled { color: var(--status-disabled); }
.message.read-only { color: var(--status-read-only); }

/* Checkbox and radio — label wrapper */
.checkbox-label,
.radio-label {
  display: inline-flex;
  align-items: center;
  gap: var(--components-input-checkbox-padding-gap);
  font-size: var(--components-input-checkbox-font-size);
  line-height: var(--components-input-checkbox-line-height);
}

/* Widescreen */
@media (min-width: 80rem) {
  :root {
    --components-input-text-font-size:    1.5rem;
    --components-input-text-line-height:  2rem;
    --components-input-text-padding:      0.75rem;
    --components-input-checkbox-font-size:   1.5rem;
    --components-input-checkbox-line-height: 1.75rem;
    --components-input-checkbox-height:      1.75rem;
    --components-input-radio-before-padding: 0.375rem;
    --components-input-switch-max-width:     3.5rem;
  }
}</code></pre>

      <h3>JavaScript</h3>
      <p>Example validation script for form inputs:</p>
      <pre><code>// Email validation example
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', () => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const isValid = emailRegex.test(emailInput.value);

  emailInput.setAttribute('aria-invalid', !isValid);

  if (isValid) {
    emailError.textContent = '';
    emailError.style.display = 'none';
  } else {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
  }
});

// Password visibility toggle
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-password');

toggleButton.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  toggleButton.textContent = type === 'password' ? 'Show' : 'Hide';
  toggleButton.setAttribute('aria-label',
    type === 'password' ? 'Show password' : 'Hide password'
  );
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components/input/text/font-size        Mobile: 1rem / 16px   →   Widescreen: 1.5rem / 24px
--components/input/text/line-height      Mobile: 1.25rem / 20px   →   Widescreen: 2rem / 32px
--components/input/checkbox/font-size    Mobile: 1rem / 16px   →   Widescreen: 1.5rem / 24px
--components/input/checkbox/line-height  Mobile: 1.25rem / 20px   →   Widescreen: 1.75rem / 28px
--fine/font-size                         Mobile: 0.625rem / 10px   →   Widescreen: 1rem / 16px
--fine/line-height                       Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px
--small/font-size                        Mobile: 0.75rem / 12px    →   Widescreen: 1.25rem / 20px
--small/line-height                      Mobile: 1.25rem / 20px    →   Widescreen: 1.875rem / 30px

/* Spacing */
--components/input/text/padding          Mobile: 0.5rem / 8px   →   Widescreen: 0.75rem / 12px
--components/input/text/padding-gap      0.25rem / 4px (fixed)
--components/input/checkbox/padding      0.125rem / 2px (fixed)
--components/input/checkbox/padding-gap  0.5rem / 8px (fixed)
--components/input/radio/before/padding  Mobile: 0.25rem / 4px   →   Widescreen: 0.375rem / 6px
--components/input/switch/padding        0.25rem / 4px (fixed)
--components/input/switch/padding-gap    0.5rem / 8px (fixed)
--components/input/switch/max-width        Mobile: 2.25rem / 36px   →   Widescreen: 3.5rem / 56px

/* Border-radius */
--components/input/text/border-radius      0.25rem / 4px (fixed)
--components/input/checkbox/border-radius  0.25rem / 4px (fixed)
--components/input/switch/border-radius    1rem / 16px (fixed)
--border-radius/round                      6.25rem / 100px (fixed)

/* Colors */
--global/gray-medium    Light: #CCCCCC   Dark: #CCCCCC
--global/gray-dark      Light: #919191   Dark: #919191
--page/background       Light: #FFFFFF   Dark: #01232D
--text/default          Light: #000000   Dark: #FFFFFF
--brand/primary         Light: #FF5247   Dark: #FF5247
--status/disabled       Light: #808080   Dark: #808080
--status/read-only      Light: #333333   Dark: #333333
--status/valid          Light: #007000   Dark: #007000
--status/invalid              Light: #C00C00   Dark: #C00C00
--components/option/label      Light: #000000   Dark: #000000
--components/option/hover      Light: #EEEEEE   Dark: #EEEEEE</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.w3.org/WAI/tutorials/forms/" target="_blank">W3C Form Tutorials</a> — Accessible form design patterns</li>
        <li><a href="https://www.nngroup.com/articles/form-design-placeholders/" target="_blank">Nielsen Norman Group: Form Design</a> — UX best practices for forms</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Inputs',
};

export default meta;

export const Documentation = () => createInputsDocumentation();
