function createFootersDocumentation() {
  return `
    <style>
      .delta-docs .footer-specimen {
        width: 100%;
        padding: var(--components-footer-outer-padding);
        background: var(--page-background);
      }

      .delta-docs .footer-specimen__group {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: var(--components-footer-group-padding);
        border-radius: var(--components-footer-group-radius);
        background: var(--section-background);
      }

      .delta-docs .footer-specimen__row {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--components-footer-toggle-gap);
        width: 100%;
      }

      .delta-docs .footer-specimen__nav {
        width: 100%;
        padding-top: var(--components-footer-nav-padding);
        padding-bottom: var(--components-footer-nav-padding);
      }

      .delta-docs .footer-specimen__links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--components-footer-links-gap);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .delta-docs .footer-specimen__links li,
      .delta-docs .footer-specimen__link-item {
        margin-top: 0;
        padding-top: var(--components-footer-link-item-padding);
        padding-bottom: var(--components-footer-link-item-padding);
      }

      .delta-docs .footer-specimen__link {
        display: inline-block;
        color: var(--text-link);
        font-family: var(--font-family-body);
        font-size: var(--small-font-size);
        line-height: var(--small-line-height);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
      }

      .delta-docs .footer-specimen__link:hover,
      .delta-docs .footer-specimen__link:focus-visible {
        color: var(--text-hover);
      }

      [data-color-mode='dark'] .delta-docs .footer-specimen__link:hover,
      [data-color-mode='dark'] .delta-docs .footer-specimen__link:focus-visible {
        color: var(--text-hover);
      }

      .delta-docs .footer-specimen__brand {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: var(--components-footer-brand-max-width);
        min-width: 0;
      }

      .delta-docs .footer-specimen__wordmark {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--components-footer-brand-gap);
        width: 100%;
        padding-top: var(--components-footer-brand-padding-top);
      }

      .delta-docs .footer-specimen__logo-mark {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .delta-docs .footer-specimen__logo {
        width: var(--components-footer-logo-width);
        height: var(--components-footer-logo-height);
      }

      .delta-docs .footer-specimen__logo-left {
        fill: var(--components-logo-left);
      }

      .delta-docs .footer-specimen__logo-right {
        fill: var(--components-logo-right);
      }

      .delta-docs .footer-specimen__heading {
        margin: 0;
        color: var(--text-default);
        font-family: var(--font-family-heading);
        font-size: var(--h2-font-size);
        line-height: var(--h2-line-height);
        font-weight: var(--font-weight-regular);
        text-align: center;
      }

      .delta-docs .footer-specimen__heading--wordmark {
        max-width: var(--components-footer-brand-max-width);
      }

      .delta-docs .footer-specimen__toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--components-footer-toggle-gap);
        width: 100%;
        padding-top: var(--components-footer-toggle-padding-top);
      }

      .delta-docs .footer-specimen__toggle-icon {
        display: inline-flex;
        width: var(--components-footer-toggle-icon-size);
        height: var(--components-footer-toggle-icon-size);
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        color: var(--components-background-primary);
      }

      .delta-docs .footer-specimen__toggle-icon svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-width: var(--components-input-icon-stroke-width);
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .delta-docs .footer-specimen__toggle-label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .delta-docs .footer-specimen__toggle-input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .delta-docs .footer-specimen__toggle-track {
        position: relative;
        display: inline-flex;
        width: var(--components-input-switch-width);
        height: var(--components-input-switch-height);
        align-items: center;
        justify-content: flex-start;
        padding: var(--components-input-switch-padding);
        border: var(--docs-rule-width) solid var(--brand-primary);
        border-radius: var(--border-radius-round);
        background: transparent;
      }

      .delta-docs .footer-specimen__toggle-thumb {
        display: block;
        width: var(--components-input-switch-thumb-size);
        height: var(--components-input-switch-thumb-size);
        border-radius: var(--border-radius-round);
        background: var(--brand-primary);
        transition: transform 0.2s ease;
      }

      .delta-docs .footer-specimen__toggle-input:checked + .footer-specimen__toggle-track {
        background: var(--brand-primary);
      }

      .delta-docs .footer-specimen__toggle-input:checked + .footer-specimen__toggle-track .footer-specimen__toggle-thumb {
        background: var(--global-white);
        transform: translateX(calc(var(--components-input-switch-width) - var(--components-input-switch-thumb-size) - (var(--components-input-switch-padding) * 2)));
      }

      .delta-docs .footer-specimen__toggle-text {
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

      .delta-docs .footer-specimen__copyright {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: var(--components-footer-copyright-padding-top);
      }

      .delta-docs .footer-specimen__copyright-text {
        margin: 0;
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--fine-font-size);
        line-height: var(--fine-line-height);
        font-weight: var(--font-weight-regular);
        text-align: center;
      }

      @media (min-width: 48rem) {
        .delta-docs .footer-specimen__row {
          flex-direction: row;
          align-items: center;
        }

        .delta-docs .footer-specimen__nav {
          flex: 1 1 auto;
        }

        .delta-docs .footer-specimen__links {
          align-items: flex-start;
        }

        .delta-docs .footer-specimen__brand {
          margin-left: auto;
        }

        .delta-docs .footer-specimen__copyright {
          justify-content: flex-end;
        }

        .delta-docs .footer-specimen__copyright-text {
          text-align: right;
        }
      }
    </style>
    <article class="delta-docs">
      <h1>Footers</h1>
      <p>The Footer provides site-wide navigation, branding, and utility controls at the bottom of every page. It adapts between stacked and horizontal layouts across breakpoints, and includes an integrated color mode toggle.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>The Footer consists of:</p>
      <ul>
        <li><strong>Outer container:</strong> Full-width wrapper that provides outer padding and establishes the page-level background.</li>
        <li><strong>Group container:</strong> Inner container with a distinct background color and border-radius that visually groups all footer content.</li>
        <li><strong>Navigation section:</strong> A labeled <code>&lt;nav&gt;</code> containing an unordered list of text links.</li>
        <li><strong>Brand section:</strong> Logo mark and site heading, center-aligned. On widescreen, this is constrained to a maximum width and pushed to the right.</li>
        <li><strong>Color mode toggle:</strong> A Switch component flanked by sun and moon icons for toggling light and dark mode.</li>
        <li><strong>Fine print:</strong> Copyright or legal text, rendered below the group container in fine/small type.</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Footer anatomy specimen">
        <footer class="footer-specimen">
          <div class="footer-specimen__group">
            <div class="footer-specimen__row">
              <nav class="footer-specimen__nav" aria-label="Footer navigation">
                <ul class="footer-specimen__links">
                  <li class="footer-specimen__link-item"><a class="footer-specimen__link" href="/link-1">Link</a></li>
                  <li class="footer-specimen__link-item"><a class="footer-specimen__link" href="/link-2">Link</a></li>
                  <li class="footer-specimen__link-item"><a class="footer-specimen__link" href="/link-3">Link</a></li>
                  <li class="footer-specimen__link-item"><a class="footer-specimen__link" href="/link-4">Link</a></li>
                  <li class="footer-specimen__link-item"><a class="footer-specimen__link" href="/link-5">Link</a></li>
                </ul>
              </nav>

              <div class="footer-specimen__brand">
                <div class="footer-specimen__wordmark">
                  <div class="footer-specimen__logo-mark" aria-hidden="true">
                    <svg class="footer-specimen__logo" viewBox="0 0 216 168" focusable="false" aria-hidden="true">
                      <polygon class="footer-specimen__logo-left" points="0,168 108,0 108,168" />
                      <polygon class="footer-specimen__logo-right" points="108,0 216,168 108,168" />
                    </svg>
                  </div>
                  <h3 class="footer-specimen__heading footer-specimen__heading--wordmark">The Delta Design System</h3>
                </div>

                <div class="footer-specimen__toggle">
                  <span class="footer-specimen__toggle-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2V4"></path>
                      <path d="M12 20V22"></path>
                      <path d="M4.93 4.93L6.34 6.34"></path>
                      <path d="M17.66 17.66L19.07 19.07"></path>
                      <path d="M2 12H4"></path>
                      <path d="M20 12H22"></path>
                      <path d="M4.93 19.07L6.34 17.66"></path>
                      <path d="M17.66 6.34L19.07 4.93"></path>
                    </svg>
                  </span>
                  <label class="footer-specimen__toggle-label">
                    <input class="footer-specimen__toggle-input" type="checkbox" role="switch" aria-checked="false" aria-label="Toggle dark mode" />
                    <span class="footer-specimen__toggle-track" aria-hidden="true">
                      <span class="footer-specimen__toggle-thumb"></span>
                    </span>
                    <span class="footer-specimen__toggle-text">Dark mode</span>
                  </label>
                  <span class="footer-specimen__toggle-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="footer-specimen__copyright">
              <p class="footer-specimen__copyright-text">© Copyright</p>
            </div>
          </div>
        </footer>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>The Footer has two layout variants driven by the <code>data-size</code> attribute, corresponding to the mobile and widescreen breakpoints.</p>
      <ul>
        <li><strong>Mobile:</strong> A vertically stacked layout for narrow viewports. Navigation links are center-aligned. The brand section sits below the nav, also center-aligned. Use this layout below the tablet breakpoint (768px).</li>
        <li><strong>Widescreen:</strong> A horizontal layout for wider viewports. Navigation links align to the left; the brand section is pushed to the right with <code>margin-left: auto</code>. Use this layout at the tablet breakpoint and above (768px+).</li>
      </ul>

      <hr />

      <h2>States</h2>
      <ul>
        <li><strong>Default:</strong> The footer renders with a light gray group container background, black text for the heading and fine print, and red link text with underlines. The color mode toggle defaults to the light mode position.</li>
        <li><strong>Hover:</strong> Navigation links follow the standard link hover behavior: color transitions from <code>text/link</code> (#FF5247) to <code>text/link</code> hover state. Arrow icons move with the link element.</li>
        <li><strong>Focus:</strong> All interactive elements — navigation links and the color mode toggle — display visible focus indicators. Focus styles defer to the browser default or the global focus ring defined in the design system.</li>
      </ul>

      <hr />

      <h2>Typography</h2>
      <p>Navigation links use the <code>small</code> type token with bold weight. The heading uses the <code>h2</code> type token. Fine print uses the <code>fine</code> token. All text tokens scale responsively between mobile and widescreen breakpoints.</p>

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
            <td>Navigation link font-size</td>
            <td><code>small/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.25rem / 20px</td>
          </tr>
          <tr>
            <td>Navigation link line-height</td>
            <td><code>small/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.875rem / 30px</td>
          </tr>
          <tr>
            <td>Heading font-size</td>
            <td><code>h2/font-size</code></td>
            <td>1.5rem / 24px</td>
            <td>3.75rem / 60px</td>
          </tr>
          <tr>
            <td>Heading line-height</td>
            <td><code>h2/line-height</code></td>
            <td>1.875rem / 30px</td>
            <td>4.625rem / 74px</td>
          </tr>
          <tr>
            <td>Fine print font-size</td>
            <td><code>fine/font-size</code></td>
            <td>0.625rem / 10px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Fine print line-height</td>
            <td><code>fine/line-height</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
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
            <td>Outer container padding</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>Group container padding</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>Nav padding-top, padding-bottom</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Link list gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Link item padding-top, padding-bottom</td>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>Brand mark padding-top</td>
            <td><code>lg</code></td>
            <td>0.75rem / 12px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Brand mark gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Toggle padding-top</td>
            <td><code>lg</code></td>
            <td>0.75rem / 12px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Toggle gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Border-radius</h2>

      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Group container</td>
            <td><code>border-radius/lg</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Colors</h2>

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
            <td>Group container background</td>
            <td><code>section/background</code></td>
            <td>#EEEEEE (global/gray-light)</td>
            <td>#003442 (brand/secondary)</td>
          </tr>
          <tr>
            <td>Page background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Navigation links</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Heading, fine print, switch label text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Switch thumb (active)</td>
            <td><code>components/background/primary</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Background and text colors adapt to the active theme. Navigation links change from red (#FF5247) in light mode to white (#FFFFFF) in dark mode for improved contrast. The switch thumb also changes from primary red (#FF5247) to white (#FFFFFF) in dark mode. In dark mode, heading and fine print text both resolve to white against the secondary-colored group container.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>The Footer must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus through navigation links in order, then to the color mode toggle.</li>
        <li><strong>Shift + Tab:</strong> Moves focus in reverse order.</li>
        <li><strong>Enter:</strong> Activates the focused navigation link or toggle.</li>
        <li><strong>Space:</strong> Toggles the color mode switch when focused.</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use semantic HTML to ensure correct landmark and list behavior. The <code>&lt;footer&gt;</code> element is announced as a contentinfo landmark. Navigation must be wrapped in <code>&lt;nav aria-label="Footer navigation"&gt;</code> to distinguish it from other navigation landmarks on the page. Links should use descriptive text — avoid "Click here" or "Read more".</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>aria-label on &lt;nav&gt;:</strong> Always provide <code>aria-label="Footer navigation"</code> to disambiguate from the primary navigation.</li>
        <li><strong>aria-label on toggle:</strong> The color mode switch input must have <code>aria-label="Toggle dark mode"</code> or equivalent — icon-only controls are not accessible without a text label.</li>
        <li><strong>aria-checked on switch:</strong> Use <code>aria-checked</code> to communicate the current toggle state to assistive technology.</li>
        <li><strong>aria-hidden on decorative icons:</strong> Sun and moon icons are decorative and must have <code>aria-hidden="true"</code>.</li>
      </ul>

      <h3>Focus management</h3>
      <p>All interactive elements must display a visible focus indicator. The footer does not trap focus or manage focus programmatically — standard tab order applies. Ensure focus ring styles meet 3:1 contrast against adjacent colors.</p>

      <h3>Color contrast</h3>
      <p>Navigation link text (#FF5247) against the light mode group container (#EEEEEE) must meet 4.5:1 for normal text — verify this passes. In dark mode, white text on #003442 meets the 4.5:1 requirement. Icon-only controls (sun/moon) require 3:1 contrast against their background. Test all states in both light and dark modes.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use the Footer when you need to:</p>
      <ul>
        <li>Provide secondary site-wide navigation at the bottom of a page.</li>
        <li>Display copyright, legal notices, or persistent utility controls.</li>
        <li>Offer a color mode toggle accessible from any page.</li>
        <li>Reinforce brand identity with the logo and system name.</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use the Footer when:</p>
      <ul>
        <li>You need primary navigation — use the Header component instead.</li>
        <li>You are building an embedded or widget context where a full-page footer is inappropriate — use a simpler fine-print or attribution element.</li>
        <li>The page already has the Footer — there should only ever be one Footer per page.</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Limit navigation links:</strong> 4–6 links is ideal for scannability. The Footer is not a site map.</li>
        <li><strong>Prioritize utility links:</strong> About, Contact, Privacy, and Terms are the most common and expected footer links.</li>
        <li><strong>Keep fine print concise:</strong> Copyright year and essential legal text only. Long legal blocks belong on dedicated pages.</li>
        <li><strong>Keep the copyright year current:</strong> Update annually — stale years undermine credibility.</li>
        <li><strong>Label the toggle:</strong> Always include a visible or screen-reader-accessible label for the color mode toggle, not just icons.</li>
      </ul>

      <h3>Placement</h3>
      <p>The Footer sits at the very bottom of the page, outside the main content area. It spans the full viewport width. On pages with minimal content, use a sticky footer pattern to ensure it does not float in the middle of the viewport.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>
          <p><strong>Keep links focused and minimal</strong></p>
          <p>Include only the most essential navigation items. The Footer supplements, not duplicates, the primary navigation.</p>

          <p><strong>Make the toggle accessible</strong></p>
          <p>Provide a text label for the color mode control — icons alone are not sufficient for keyboard or screen reader users.</p>

          <p><strong>Maintain brand consistency</strong></p>
          <p>Keep the logo, heading, and fine print in sync with the rest of the product. The Footer is often the last thing a user sees on a page.</p>

          <p><strong>Test both layout variants</strong></p>
          <p>Verify the mobile and widescreen layouts at their respective breakpoints on real devices, not just resized browser windows.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>
          <p><strong>Don't overload with links</strong></p>
          <p>Too many links clutter the Footer and reduce its utility. If you need more links, consider a structured sitemap page.</p>

          <p><strong>Don't rely on color alone</strong></p>
          <p>Footer links use color to indicate interactivity, but also change on hover to provide additional feedback. Ensure sufficient contrast.</p>

          <p><strong>Don't place critical actions here</strong></p>
          <p>The Footer is a low-attention zone. Primary calls to action, sign-up prompts, or urgent messages belong in the main content area.</p>

          <p><strong>Don't let the copyright go stale</strong></p>
          <p>An outdated copyright year signals a neglected product. Automate it if possible.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Footer - Mobile layout (default) --&gt;
&lt;footer class="footer" data-size="mobile"&gt;
  &lt;div class="footer-group"&gt;
    &lt;div class="footer-row"&gt;

      &lt;!-- Navigation --&gt;
      &lt;nav class="footer-nav" aria-label="Footer navigation"&gt;
        &lt;ul class="footer-links"&gt;
          &lt;li class="footer-link-item"&gt;
            &lt;a href="/about" class="footer-link"&gt;About&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="footer-link-item"&gt;
            &lt;a href="/contact" class="footer-link"&gt;Contact&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="footer-link-item"&gt;
            &lt;a href="/privacy" class="footer-link"&gt;Privacy&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="footer-link-item"&gt;
            &lt;a href="/terms" class="footer-link"&gt;Terms&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;

      &lt;!-- Brand --&gt;
      &lt;div class="footer-brand"&gt;
        &lt;div class="footer-logo-mark"&gt;
          &lt;svg class="footer-logo" viewBox="0 0 40 40" aria-hidden="true"&gt;
            &lt;!-- Delta logo --&gt;
          &lt;/svg&gt;
          &lt;p class="footer-heading"&gt;The Delta Design System&lt;/p&gt;
        &lt;/div&gt;

        &lt;!-- Color mode toggle --&gt;
        &lt;div class="footer-toggle"&gt;
          &lt;svg class="footer-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;
            &lt;!-- Sun icon --&gt;
          &lt;/svg&gt;
          &lt;label class="footer-toggle-label"&gt;
            &lt;input
              type="checkbox"
              class="footer-toggle-input"
              role="switch"
              aria-checked="false"
              aria-label="Toggle dark mode"&gt;
            &lt;span class="footer-toggle-track"&gt;&lt;/span&gt;
            &lt;span class="footer-toggle-text"&gt;Dark mode&lt;/span&gt;
          &lt;/label&gt;
          &lt;svg class="footer-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;
            &lt;!-- Moon icon --&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;

    &lt;/div&gt;

    &lt;!-- Fine print --&gt;
    &lt;p class="footer-fine"&gt;&amp;copy; 2026 The Delta Design System. All rights reserved.&lt;/p&gt;
  &lt;/div&gt;
&lt;/footer&gt;

&lt;!-- Footer - Widescreen layout --&gt;
&lt;footer class="footer" data-size="widescreen"&gt;
  &lt;!-- Same structure; layout shifts are handled via CSS --&gt;
&lt;/footer&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* ---- Outer container ---- */
.footer {
  padding: var(--spacing-xl);
}

/* ---- Group container ---- */
.footer-group {
  padding: var(--spacing-xl);
  background-color: var(--section-background);
  border-radius: var(--border-radius-lg);
}

/* ---- Row ---- */
.footer-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer[data-size="widescreen"] .footer-row {
  flex-direction: row;
  align-items: center;
}

/* ---- Navigation ---- */
.footer-nav {
  padding-top: var(--spacing-md);
  padding-bottom: var(--spacing-md);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: center;
}

.footer[data-size="widescreen"] .footer-links {
  align-items: flex-start;
}

.footer-link-item {
  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);
}

/* ---- Links ---- */
.footer-link {
  display: inline-block;
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  color: var(--text-link);
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

/* ---- Brand ---- */
.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer[data-size="widescreen"] .footer-brand {
  margin-left: auto;
}

.footer-logo-mark {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding-top: var(--spacing-lg);
}

.footer-heading {
  font-family: var(--font-family-heading);
  font-size: var(--h2-font-size);
  line-height: var(--h2-line-height);
  color: var(--text-default);
}

/* ---- Color mode toggle ---- */
.footer-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding-top: var(--spacing-lg);
  justify-content: center;
}

.footer-toggle-label {
  display: flex;
  align-items: center;
  gap: var(--components-input-switch-padding-gap);
  cursor: pointer;
}

.footer-toggle-input {
  /* Full switch styling: see Fieldsets documentation */
  border-radius: var(--components-input-switch-border-radius);
}

.footer-toggle-text {
  /* Visually hidden but accessible to screen readers */
  position: absolute;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  padding: 0;
  margin: -1px;
}

/* ---- Fine print ---- */
.footer-fine {
  font-size: var(--fine-font-size);
  line-height: var(--fine-line-height);
  color: var(--text-default);
  text-align: center;
  margin-top: 0;
}

/* ---- Widescreen ---- */
@media (min-width: 80rem) {
  .footer-group {
    border-radius: var(--border-radius-lg);
  }
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>// Color mode toggle
const toggle = document.querySelector('.footer-toggle-input');

toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  toggle.setAttribute('aria-checked', String(isDark));
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--small-font-size    Mobile: 0.75rem / 12px   →   Widescreen: 1.25rem / 20px
--small-line-height  Mobile: 1.25rem / 20px   →   Widescreen: 1.875rem / 30px
--h2/font-size       Mobile: 1.5rem / 24px    →   Widescreen: 3.75rem / 60px
--h2/line-height     Mobile: 1.875rem / 30px  →   Widescreen: 4.625rem / 74px
--fine-font-size     Mobile: 0.625rem / 10px  →   Widescreen: 1rem / 16px
--fine-line-height   Mobile: 1rem / 16px      →   Widescreen: 1.5rem / 24px

/* Spacing */
--spacing-xl    Mobile: 1rem / 16px      →   Widescreen: 2rem / 32px
--spacing-lg    Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--spacing-md    Mobile: 0.5rem / 8px     →   Widescreen: 1rem / 16px
--spacing-xs    Mobile: 0.125rem / 2px   →   Widescreen: 0.25rem / 4px
--components/input/switch/padding-gap   Mobile: 0.5rem / 8px   →   Widescreen: 1rem / 16px

/* Border-radius */
--border-radius/lg                       Mobile: 1rem / 16px   →   Widescreen: 2rem / 32px
--components/input/switch/border-radius  Mobile: 1rem / 16px   →   Widescreen: 2rem / 32px

/* Colors */
--section-background              Light: #EEEEEE   Dark: #003442
--page/background                 Light: #FFFFFF   Dark: #01232D
--text-default                    Light: #000000   Dark: #FFFFFF
--text/link                       Light: #FF5247   Dark: #FFFFFF
--components/background/primary   Light: #FF5247   Dark: #FFFFFF
--components/logo/left            Light: #003442   Dark: #FF5247
--components/logo/right           Light: #01232D   Dark: #B22E28</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/contentinfo.html" target="_blank">ARIA: Contentinfo Landmark</a> — Footer landmark pattern from the W3C</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer" target="_blank">MDN: &lt;footer&gt; element</a> — Semantic footer documentation</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank">ARIA Authoring Practices Guide: Switch Pattern</a> — Toggle switch accessibility pattern</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.nngroup.com/articles/footers/" target="_blank">Nielsen Norman Group: Website Footers</a> — UX best practices for footers</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Organisms/Footers',
};

export default meta;

export const Documentation = () => createFootersDocumentation();
