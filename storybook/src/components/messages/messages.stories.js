function createMessagesDocumentation() {
  return `
    <style>
      .delta-docs .messages-specimen-stack {
        display: grid;
        gap: var(--components-messages-demo-gap);
      }

      .delta-docs .messages-specimen-grid {
        display: grid;
        gap: var(--components-messages-demo-gap);
      }

      .delta-docs .messages-specimen-shell {
        border-radius: var(--components-messages-shell-radius);
        background: var(--components-messages-shell-background);
      }

      .delta-docs .messages-specimen {
        display: flex;
        align-items: center;
        gap: var(--components-messages-inline-gap);
        width: min(100%, var(--components-messages-inline-width));
        padding: var(--components-messages-inline-padding);
        border-radius: var(--components-messages-inline-radius);
        background: var(--components-messages-background-invalid);
      }

      .delta-docs .messages-specimen--success {
        background: var(--components-messages-background-valid);
      }

      .delta-docs .messages-specimen--toast {
        width: min(100%, var(--components-messages-toast-width));
        background: var(--components-messages-background-toast);
      }

      .delta-docs .messages-specimen--confirmation {
        width: min(100%, var(--components-messages-inline-width));
      }

      .delta-docs .messages-specimen__text {
        flex: 1 1 auto;
        min-width: 0;
        margin: 0;
        color: var(--global-white);
        font-family: var(--font-family-body);
        font-size: var(--components-messages-font-size);
        line-height: var(--components-messages-line-height);
        font-weight: var(--font-weight-bold);
      }

      .delta-docs .messages-specimen__close {
        display: inline-flex;
        width: var(--components-messages-close-size);
        height: var(--components-messages-close-size);
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        padding: 0;
        border: 0;
        border-radius: var(--border-radius-round);
        background: transparent;
        color: var(--global-white);
        cursor: pointer;
      }

      .delta-docs .messages-specimen__close svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-width: var(--components-messages-close-stroke-width);
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .delta-docs .messages-specimen__actions {
        display: inline-flex;
        align-items: center;
        gap: var(--components-messages-inline-gap);
        flex: 0 0 auto;
      }

      .delta-docs .messages-specimen__action {
        display: inline-flex;
        min-width: var(--components-messages-action-min-width);
        height: var(--components-messages-action-height);
        align-items: center;
        justify-content: center;
        padding: var(--components-button-padding-t-b) var(--components-button-padding-l-r);
        border: var(--docs-rule-width) solid var(--global-white);
        border-radius: var(--components-button-border-radius);
        background: transparent;
        color: var(--global-white);
        font-family: var(--font-family-body);
        font-size: var(--components-button-font-size);
        line-height: var(--components-button-line-height);
        font-weight: var(--font-weight-bold);
        white-space: nowrap;
      }

      .delta-docs .messages-specimen__action--solid {
        background: var(--global-white);
        color: var(--status-invalid);
      }

      .delta-docs .messages-specimen-promo {
        position: relative;
        width: 100%;
        min-height: var(--components-messages-promo-min-height);
        padding: var(--components-messages-promo-padding);
        background: var(--page-background);
      }

      .delta-docs .messages-specimen-promo__close {
        position: absolute;
        top: var(--components-messages-promo-close-offset);
        right: var(--components-messages-promo-close-offset);
        display: inline-flex;
        width: var(--components-messages-promo-close-size);
        height: var(--components-messages-promo-close-size);
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 0;
        border-radius: var(--border-radius-round);
        background: transparent;
        color: var(--text-link);
        cursor: pointer;
      }

      .delta-docs .messages-specimen-promo__close svg {
        width: var(--components-messages-close-size);
        height: var(--components-messages-close-size);
        fill: none;
        stroke: currentColor;
        stroke-width: var(--components-messages-close-stroke-width);
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .delta-docs .messages-specimen-promo__content {
        display: grid;
        gap: 0;
        width: min(100%, var(--components-messages-promo-content-width));
        padding-top: var(--components-messages-promo-content-offset);
      }

      .delta-docs .messages-specimen-promo__title {
        margin: 0;
        color: var(--text-default);
        font-family: var(--font-family-heading);
        font-size: var(--h2-font-size);
        line-height: var(--h2-line-height);
        font-weight: var(--font-weight-regular);
      }

      .delta-docs .messages-specimen-promo__body {
        margin: 0;
        padding-top: var(--spacing-sm);
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--p-font-size);
        line-height: var(--p-line-height);
      }

      @media (min-width: 48rem) {
        .delta-docs .messages-specimen-grid--anatomy {
          grid-template-columns: repeat(2, minmax(0, max-content));
          align-items: start;
        }
      }
    </style>
    <article class="delta-docs">
      <h1>Messages</h1>
      <p>Messages provide user notifications, alerts, and feedback in various contexts. This includes modal dialogs for detailed content, inline notifications for status updates, and toast messages for brief, non-intrusive information.</p>

      <hr />

      <h2>Anatomy</h2>

      <h3>Message component</h3>
      <p>Message variants consist of:</p>
      <ul>
        <li><strong>Container:</strong> Background wrapper with optional border-radius</li>
        <li><strong>Content (Modal/Promo):</strong> Content component with heading, body, and CTAs (see Content documentation)</li>
        <li><strong>Message text (Error/Success/Confirmation):</strong> Bold text label</li>
        <li><strong>Close button:</strong> Dismissal control (X icon)</li>
        <li><strong>Action buttons (Confirmation only):</strong> Yes/No decision buttons</li>
      </ul>

      <h3>Toast component</h3>
      <p>Toast consists of:</p>
      <ul>
        <li><strong>Container:</strong> Dark background wrapper</li>
        <li><strong>Message text:</strong> Brief notification content</li>
        <li><strong>Close button (optional):</strong> Dismissal control</li>
      </ul>

      <div class="messages-specimen-stack">
        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages anatomy message specimen">
          <div class="messages-specimen-grid messages-specimen-grid--anatomy">
            <div class="messages-specimen">
              <p class="messages-specimen__text">Error message</p>
              <button class="messages-specimen__close" type="button" aria-label="Dismiss error">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M6 6L18 18"></path>
                  <path d="M18 6L6 18"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages anatomy toast specimen">
          <div class="messages-specimen-grid messages-specimen-grid--anatomy">
            <div class="messages-specimen messages-specimen--toast">
              <p class="messages-specimen__text">Toast message</p>
              <button class="messages-specimen__close" type="button" aria-label="Dismiss toast">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M6 6L18 18"></path>
                  <path d="M18 6L6 18"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Messages come in six variants covering full-screen dialogs, inline status notifications, and transient toasts.</p>

      <h3>Modal</h3>
      <p>Full-viewport dialog for detailed content, forms, or multi-step workflows. Uses the Content component for flexible layout with heading, body, and CTA areas.</p>

      <h3>Promo</h3>
      <p>Half-viewport promotional banner for announcements, offers, or feature highlights. Uses the Content component.</p>

      <h3>Confirmation</h3>
      <p>Red inline alert with Yes/No action buttons for critical decisions requiring explicit user confirmation before proceeding.</p>

      <h3>Error</h3>
      <p>Red inline notification bar for error messages and failure states. Persists until the user dismisses it or corrects the underlying issue.</p>

      <h3>Success</h3>
      <p>Green inline notification bar for success confirmations and completion states.</p>

      <h3>Toast</h3>
      <p>Simple, non-intrusive notification for brief informational messages that don't require immediate action. Displayed in a fixed dark container, typically auto-dismissed.</p>

      <div class="messages-specimen-stack">
        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages promo specimen">
          <div class="messages-specimen-promo">
            <button class="messages-specimen-promo__close" type="button" aria-label="Close promo banner">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M6 6L18 18"></path>
                <path d="M18 6L6 18"></path>
              </svg>
            </button>
            <div class="messages-specimen-promo__content">
              <h3 class="messages-specimen-promo__title">Promo banner</h3>
              <p class="messages-specimen-promo__body">This is a banner for announcements, offers, or feature highlights. Uses Content component</p>
            </div>
          </div>
        </div>

        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages confirmation specimen">
          <div class="messages-specimen messages-specimen--confirmation">
            <p class="messages-specimen__text">Confirmation message</p>
            <div class="messages-specimen__actions">
              <button class="messages-specimen__action" type="button">No</button>
              <button class="messages-specimen__action messages-specimen__action--solid" type="button">Yes</button>
            </div>
          </div>
        </div>

        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages error specimen">
          <div class="messages-specimen">
            <p class="messages-specimen__text">Error message</p>
            <button class="messages-specimen__close" type="button" aria-label="Dismiss error">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M6 6L18 18"></path>
                <path d="M18 6L6 18"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages success specimen">
          <div class="messages-specimen messages-specimen--success">
            <p class="messages-specimen__text">Success message</p>
            <button class="messages-specimen__close" type="button" aria-label="Dismiss success message">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M6 6L18 18"></path>
                <path d="M18 6L6 18"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="delta-docs__demo messages-specimen-shell" aria-label="Messages toast specimen">
          <div class="messages-specimen messages-specimen--toast">
            <p class="messages-specimen__text">Toast message</p>
            <button class="messages-specimen__close" type="button" aria-label="Dismiss toast">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M6 6L18 18"></path>
                <path d="M18 6L6 18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <hr />

      <h2>States</h2>
      <p>Messages have the following interactive states:</p>

      <ul>
        <li><strong>Open:</strong> The message is visible and interactive. Modal and Promo variants overlay the page content; inline variants (Error, Success, Confirmation) appear inline within the layout; Toast appears in a fixed position.</li>
        <li><strong>Closed:</strong> The message is dismissed and hidden. For Modal variants, focus returns to the triggering element. Inline messages are removed from the layout flow.</li>
        <li><strong>Hover:</strong> Close buttons and Confirmation action buttons show a visual hover state. See the Button documentation for button-specific hover behavior.</li>
        <li><strong>Focus:</strong> All interactive controls — close buttons and Confirmation action buttons — display a visible focus ring using the primary color with a 2px outline and 2px offset.</li>
      </ul>

      <hr />

      <h2>Typography</h2>
      <p>Modal and Promo variants delegate typography to the Content component. Error, Success, Confirmation, and Toast messages use bold message text. Confirmation buttons delegate to the Button component.</p>

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
            <td>Message text font-size</td>
            <td><code>components/messages/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Message text line-height</td>
            <td><code>components/messages/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>2.25rem / 36px</td>
          </tr>
          <tr>
            <td>Confirmation button labels</td>
            <td>—</td>
            <td colspan="2">See Button component documentation</td>
          </tr>
        </tbody>
      </table>

      <hr />

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
            <td>Modal, Promo padding</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>Error, Success, Confirmation, Toast padding</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Error, Success, Confirmation, Toast gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Confirmation buttons</td>
            <td>—</td>
            <td colspan="2">See Button component documentation</td>
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
            <td>Inline messages and Toast container</td>
            <td><code>border-radius/sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>Close button</td>
            <td><code>border-radius/round</code></td>
            <td>6.25rem / 100px (fixed)</td>
            <td>6.25rem / 100px (fixed)</td>
          </tr>
          <tr>
            <td>Confirmation buttons</td>
            <td><code>components/button/border-radius</code></td>
            <td>2rem / 32px (fixed)</td>
            <td>2rem / 32px (fixed)</td>
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
            <td>Modal/Promo — Background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Modal/Promo — Text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Modal/Promo — Close button icon</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Confirmation — Background</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
          <tr>
            <td>Confirmation — Text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Confirmation — "No" button background</td>
            <td>—</td>
            <td>Transparent</td>
            <td>Transparent</td>
          </tr>
          <tr>
            <td>Confirmation — "No" button text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Confirmation — "No" button border</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Confirmation — "Yes" button background</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Confirmation — "Yes" button text</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
          <tr>
            <td>Error — Background</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
          <tr>
            <td>Error — Text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Error — Close button icon</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Success — Background</td>
            <td><code>status/valid</code></td>
            <td>#007000</td>
            <td>#007000</td>
          </tr>
          <tr>
            <td>Success — Text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Success — Close button icon</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Toast — Background</td>
            <td><code>status/read-only</code></td>
            <td>#333333</td>
            <td>#333333</td>
          </tr>
          <tr>
            <td>Toast — Text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Toast — Close icon</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Modal and Promo backgrounds adapt to the active theme via <code>page/background</code>. Modal and Promo text inverts between black and white via <code>text/default</code>. Modal and Promo close button icon uses <code>text/link</code> which is red in light mode and white in dark mode. Status messages (Error, Success, Confirmation) and Toast use fixed semantic colors that do not change between modes.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>All message components must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus between interactive elements within the message</li>
        <li><strong>Shift + Tab:</strong> Moves focus in reverse order</li>
        <li><strong>Enter / Space:</strong> Activates the focused button (close, Yes, No)</li>
        <li><strong>Escape:</strong> Closes dismissible messages and modals</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use <code>role="alert"</code> for Error and Confirmation messages so they are announced immediately by screen readers. Use <code>role="status"</code> with <code>aria-live="polite"</code> for Success and Toast so they announce without interrupting ongoing narration. Modal and Promo variants use the native <code>&lt;dialog&gt;</code> element or <code>role="dialog"</code>. Do not rely solely on color to convey message meaning — always pair color with text.</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>aria-labelledby:</strong> Links the dialog or alert to its heading or message text</li>
        <li><strong>aria-describedby:</strong> Associates the message with supporting content</li>
        <li><strong>aria-live:</strong> Set to <code>"polite"</code> for Toast, <code>"assertive"</code> for critical alerts (Error, Confirmation)</li>
        <li><strong>aria-modal:</strong> Set to <code>"true"</code> on Modal dialogs to restrict screen reader focus to the dialog content</li>
        <li><strong>aria-label:</strong> Provides a descriptive label for icon-only close buttons (e.g. "Close", "Dismiss error")</li>
      </ul>

      <h3>Focus management</h3>
      <p>When a Modal or Promo opens, focus must move into the dialog. Focus must be trapped within the dialog until it is dismissed — Tab and Shift+Tab should cycle only through focusable elements inside the message. When the message closes, focus must return to the element that triggered it. Confirmation, Error, and Success inline messages do not trap focus but close buttons must be reachable by keyboard.</p>

      <h3>Color contrast</h3>
      <p>White text on the Error (#C00C00) and Success (#007000) backgrounds meets the 4.5:1 minimum contrast ratio for normal text. White text on the Toast background (#333333) also meets this threshold. Modal and Promo text uses the <code>text/default</code> token which maintains contrast in both light and dark modes.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use Messages when:</p>
      <ul>
        <li>You need to present complex forms, multi-step workflows, or important content requiring full user attention (Modal)</li>
        <li>You want to announce features, limited-time offers, or onboarding guidance (Promo)</li>
        <li>A destructive or irreversible action requires explicit approval (Confirmation)</li>
        <li>An operation has failed, validation has failed, or a system error occurred (Error)</li>
        <li>An operation completed successfully or changes were saved (Success)</li>
        <li>You need to show brief, low-priority informational messages that don't require user action (Toast)</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use Messages when:</p>
      <ul>
        <li>A simple confirmation would suffice instead of a full Modal dialog</li>
        <li>The message is a warning rather than an error requiring a less severe pattern</li>
        <li>Critical information needs user action (Toast is easily missed)</li>
        <li>Multiple modals would need to be stacked (simplify the workflow instead)</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Be concise:</strong> Use clear, brief language that users can scan quickly, especially for inline and Toast messages.</li>
        <li><strong>Be specific:</strong> Explain what happened and what the user should do next — avoid generic messages like "Something went wrong."</li>
        <li><strong>Be actionable:</strong> Provide clear next steps or recovery options wherever possible.</li>
        <li><strong>Use plain language:</strong> Avoid jargon and technical terms.</li>
        <li><strong>Match tone to severity:</strong> Error messages should feel more serious than Success or Toast messages.</li>
      </ul>

      <h3>Placement</h3>
      <p>Modal and Promo variants overlay the full page and are centered or anchored to the viewport. Inline messages (Error, Success, Confirmation) appear within the page layout — typically above or below the content they relate to, or at the top of a form or content section. Toast appears in a fixed position, typically the bottom-right or bottom-center of the viewport, and should not obstruct primary content or interactive controls.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>

          <p><strong>Provide clear actions</strong></p>
          <p>Give users obvious next steps, especially in Error and Confirmation messages where recovery or a decision is required.</p>

          <p><strong>Use appropriate severity</strong></p>
          <p>Match the message variant to the importance of the situation — reserve Confirmation and Error for genuinely critical moments.</p>

          <p><strong>Keep Toast messages brief</strong></p>
          <p>Toasts should communicate the key point in one short sentence and require no user action to proceed.</p>

          <p><strong>Allow dismissal</strong></p>
          <p>Give users control to close messages once they've read them, except where acknowledgment is required.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>

          <p><strong>Don't interrupt unnecessarily</strong></p>
          <p>Avoid Modal dialogs for non-critical information that doesn't need to block the rest of the page.</p>

          <p><strong>Don't use vague error messages</strong></p>
          <p>Generic messages don't help users recover — always explain what went wrong and what to do next.</p>

          <p><strong>Don't auto-dismiss errors</strong></p>
          <p>Users need time to read and act on Error messages — never remove them automatically.</p>

          <p><strong>Don't stack multiple messages</strong></p>
          <p>Show one message at a time to avoid overwhelming users with competing notifications.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Modal message --&gt;
&lt;dialog class="message message-modal" aria-labelledby="modal-heading" aria-modal="true"&gt;
  &lt;button class="message-close" aria-label="Close"&gt;
    &lt;svg viewBox="0 0 24 24"&gt;&lt;!-- X icon --&gt;&lt;/svg&gt;
  &lt;/button&gt;
  &lt;div class="message-content"&gt;
    &lt;!-- Content component --&gt;
    &lt;h2 id="modal-heading"&gt;Modal Title&lt;/h2&gt;
    &lt;p&gt;Modal content goes here.&lt;/p&gt;
    &lt;div class="content-cta"&gt;
      &lt;button&gt;Primary Action&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/dialog&gt;

&lt;!-- Promo message --&gt;
&lt;div class="message message-promo" role="dialog" aria-labelledby="promo-heading"&gt;
  &lt;button class="message-close" aria-label="Close"&gt;
    &lt;svg viewBox="0 0 24 24"&gt;&lt;!-- X icon --&gt;&lt;/svg&gt;
  &lt;/button&gt;
  &lt;div class="message-content"&gt;
    &lt;!-- Content component --&gt;
    &lt;h2 id="promo-heading"&gt;Promo Title&lt;/h2&gt;
    &lt;p&gt;Promotional content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Confirmation message --&gt;
&lt;div class="message message-confirmation" role="alertdialog" aria-labelledby="confirm-msg"&gt;
  &lt;span id="confirm-msg" class="message-text"&gt;Delete this item?&lt;/span&gt;
  &lt;div class="message-actions"&gt;
    &lt;button class="button-transparent"&gt;No&lt;/button&gt;
    &lt;button class="button-solid"&gt;Yes&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Error message --&gt;
&lt;div class="message message-error" role="alert"&gt;
  &lt;span class="message-text"&gt;An error occurred. Please try again.&lt;/span&gt;
  &lt;button class="message-close" aria-label="Dismiss error"&gt;
    &lt;svg viewBox="0 0 24 24"&gt;&lt;!-- X icon --&gt;&lt;/svg&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;!-- Success message --&gt;
&lt;div class="message message-success" role="status"&gt;
  &lt;span class="message-text"&gt;Changes saved successfully.&lt;/span&gt;
  &lt;button class="message-close" aria-label="Dismiss notification"&gt;
    &lt;svg viewBox="0 0 24 24"&gt;&lt;!-- X icon --&gt;&lt;/svg&gt;
  &lt;/button&gt;
&lt;/div&gt;

&lt;!-- Toast message --&gt;
&lt;div class="toast" role="status" aria-live="polite"&gt;
  &lt;span class="toast-message"&gt;Item added to cart&lt;/span&gt;
  &lt;button class="toast-close" aria-label="Dismiss"&gt;
    &lt;svg viewBox="0 0 24 24"&gt;&lt;!-- X icon --&gt;&lt;/svg&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Modal message */
.message-modal {
  background-color: var(--page-background);
  padding: var(--xl);
  position: relative;
}

@media (min-width: 80rem) {
  .message-modal {
    padding: var(--xl);
  }
}

/* Promo message */
.message-promo {
  background-color: var(--page-background);
  padding: var(--xl);
  position: relative;
}

@media (min-width: 80rem) {
  .message-promo {
    padding: var(--xl);
  }
}

/* Close button (Modal/Promo) */
.message-close {
  position: absolute;
  top: var(--xl);
  right: var(--xl);
  border-radius: var(--border-radius-round);
  border: none;
  background: transparent;
  color: var(--text-default);
  cursor: pointer;
}

@media (min-width: 80rem) {
  .message-close {
    top: var(--xl);
    right: var(--xl);
  }
}

/* Inline messages (Error, Success, Confirmation) */
.message-error,
.message-success,
.message-confirmation {
  padding: var(--md);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--md);
}

@media (min-width: 80rem) {
  .message-error,
  .message-success,
  .message-confirmation {
    padding: var(--md);
    border-radius: var(--border-radius-sm);
    gap: var(--md);
  }
}

.message-error,
.message-confirmation {
  background-color: var(--status-invalid);
}

.message-success {
  background-color: var(--status-valid);
}

/* Message text */
.message-text {
  font-size: var(--components-messages-font-size);
  line-height: var(--components-messages-line-height);
  color: var(--global-white);
  flex: 1;
}

/* Confirmation buttons */
.message-actions {
  display: flex;
  gap: var(--md);
}

.button-transparent {
  background: transparent;
  border: 1px solid var(--global-white);
  color: var(--global-white);
  padding: var(--components-button-padding-t-b) var(--components-button-padding-l-r);
  border-radius: var(--components-button-border-radius);
  font-size: var(--components-button-font-size);
  cursor: pointer;
}

.button-solid {
  background: var(--global-white);
  border: 1px solid var(--global-white);
  color: var(--status-invalid);
  padding: var(--components-button-padding-t-b) var(--components-button-padding-l-r);
  border-radius: var(--components-button-border-radius);
  font-size: var(--components-button-font-size);
  cursor: pointer;
}

/* Toast */
.toast {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--md);
  padding: var(--md);
  background-color: var(--status-read-only);
  border-radius: var(--border-radius-sm);
}

@media (min-width: 80rem) {
  .toast {
    gap: var(--md);
    padding: var(--md);
    border-radius: var(--border-radius-sm);
  }
}

.toast-message {
  font-size: var(--components-messages-font-size);
  line-height: var(--components-messages-line-height);
  color: var(--global-white);
}

.toast-close {
  border-radius: var(--border-radius-round);
  border: none;
  background: transparent;
  color: var(--global-white);
  cursor: pointer;
}

/* Focus states */
.message-close:focus,
.toast-close:focus,
.button-transparent:focus,
.button-solid:focus {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>// Open a modal dialog
function openModal(dialogEl, triggerEl) {
  dialogEl.setAttribute('open', '');
  dialogEl.removeAttribute('hidden');
  // Move focus to the first focusable element inside the dialog
  const focusable = dialogEl.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length) focusable[0].focus();
  // Store trigger so focus can be returned on close
  dialogEl._trigger = triggerEl;
}

// Close a modal dialog and return focus
function closeModal(dialogEl) {
  dialogEl.removeAttribute('open');
  dialogEl.setAttribute('hidden', '');
  if (dialogEl._trigger) dialogEl._trigger.focus();
}

// Trap focus within a dialog
function trapFocus(dialogEl, event) {
  const focusable = Array.from(dialogEl.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ));
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  if (event.key === 'Escape') closeModal(dialogEl);
}

// Auto-dismiss toast after a delay
function showToast(toastEl, duration = 5000) {
  toastEl.removeAttribute('hidden');
  setTimeout(() => {
    toastEl.setAttribute('hidden', '');
  }, duration);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components-messages-font-size    Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--components-messages-line-height  Mobile: 1.25rem / 20px   →   Widescreen: 2.25rem / 36px

/* Spacing */
--xl               Mobile: 1rem / 16px    →   Widescreen: 2rem / 32px
--md               Mobile: 0.5rem / 8px   →   Widescreen: 1rem / 16px

/* Border-radius */
--border-radius-sm     Mobile: 0.25rem / 4px   →   Widescreen: 0.5rem / 8px
--border-radius-round  6.25rem / 100px (fixed)

/* Button tokens (see Buttons documentation) */
--components-button-font-size       Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--components-button-padding-t-b     Mobile: 0.5rem / 8px     →   Widescreen: 0.75rem / 12px
--components-button-padding-l-r     Mobile: 1.5rem / 24px    →   Widescreen: 2rem / 32px
--components-button-border-radius   2rem / 32px (fixed)

/* Colors */
--page-background   Light: #FFFFFF    Dark: #01232D
--text-default      Light: #000000    Dark: #FFFFFF
--text-link         Light: #FF5247    Dark: #FFFFFF
--global-white      #FFFFFF
--status-invalid    #C00C00
--status-valid      #007000
--status-read-only  #333333</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" target="_blank">ARIA: Dialog (Modal) Pattern</a> — W3C modal dialog guidance</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/" target="_blank">ARIA: Alert Pattern</a> — Accessible alert messages</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/" target="_blank">ARIA: Alert Dialog Pattern</a> — Accessible confirmation dialogs</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" target="_blank">MDN: dialog element</a> — Native HTML dialog documentation</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group: Modal Dialogs</a> — UX best practices</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Messages',
};

export default meta;

export const Documentation = () => createMessagesDocumentation();
