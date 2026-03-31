export default {
  title: 'Organisms/Headers',
};

export const Documentation = () => {
  return `
    <div class="delta-docs">

      <h1>Headers</h1>
      <p>The Header provides primary site navigation, branding, and utility controls at the top of every page. It adapts between a compact mobile layout with a collapsible menu and a full widescreen layout with inline navigation and a color mode toggle.</p>

      <hr>

      <h2>Anatomy</h2>
      <p>The Header has two layouts depending on viewport size. Both share a top bar with backdrop blur, a logo, and the color mode toggle — though the toggle moves to the mobile dropdown when open.</p>
      <ul>
        <li><strong>Top bar:</strong> Container with backdrop blur effect, present in all variants</li>
        <li><strong>Logo:</strong> Brand mark, links to home</li>
        <li><strong>Navigation (widescreen):</strong> Horizontal list of text links displayed inline</li>
        <li><strong>Color mode toggle (widescreen):</strong> Sun icon, switch, and moon icon — visible inline in the top bar</li>
        <li><strong>Menu button (mobile):</strong> Hamburger icon when closed; close (X) icon when open</li>
        <li><strong>Navigation dropdown (mobile open):</strong> Vertical list of links, plus the color mode toggle</li>
      </ul>

      <div class="component-demo">

        <header class="header-widescreen-specimen">
          <div class="header-top">
            <div class="row">
              <a href="#" class="logo" aria-label="Home">
                <svg viewBox="0 0 1024 796" aria-hidden="true">
                  <polygon points="512,0 1024,796 512,796" style="fill: var(--components-logo-right)" />
                  <polygon points="512,0 0,796 512,796" style="fill: var(--components-logo-left)" />
                </svg>
              </a>

              <nav aria-label="Primary navigation">
                <ul>
                  <li><a href="#" class="link">Link</a></li>
                  <li><a href="#" class="link">Link</a></li>
                  <li><a href="#" class="link">Link</a></li>
                  <li><a href="#" class="link">Link</a></li>
                  <li><a href="#" class="link">Link</a></li>
                </ul>

                <div class="toggle-color-mode">
                  <svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M5.33334 8.00016C5.33334 8.70741 5.61429 9.38568 6.11438 9.88578C6.61448 10.3859 7.29276 10.6668 8 10.6668C8.70725 10.6668 9.38552 10.3859 9.88562 9.88578C10.3857 9.38568 10.6667 8.70741 10.6667 8.00016C10.6667 7.29292 10.3857 6.61464 9.88562 6.11454C9.38552 5.61445 8.70725 5.3335 8 5.3335C7.29276 5.3335 6.61448 5.61445 6.11438 6.11454C5.61429 6.61464 5.33334 7.29292 5.33334 8.00016Z" stroke="var(--components-background-primary)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 8H2.66667M8 2V2.66667M13.3333 8H14M8 13.3333V14M3.73333 3.73333L4.2 4.2M12.2667 3.73333L11.8 4.2M11.8 11.8L12.2667 12.2667M4.2 11.8L3.73333 12.2667" stroke="var(--components-background-primary)" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input type="checkbox" role="switch" aria-label="Toggle dark mode">
                  <svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1.99996C8.088 1.99996 8.17534 1.99996 8.262 1.99996C7.40556 2.79577 6.85506 3.86653 6.7062 5.02611C6.55733 6.18569 6.81951 7.36078 7.44716 8.34712C8.07481 9.33345 9.02825 10.0687 10.1417 10.4249C11.2552 10.7812 12.4584 10.7361 13.542 10.2973C13.1252 11.3003 12.4439 12.1713 11.5708 12.8175C10.6977 13.4636 9.66563 13.8607 8.58461 13.9662C7.50358 14.0718 6.41418 13.8819 5.4326 13.4169C4.45101 12.9519 3.61408 12.2291 3.01106 11.3257C2.40804 10.4223 2.06157 9.37215 2.00859 8.28728C1.95561 7.2024 2.19812 6.12349 2.71025 5.16564C3.22238 4.20778 3.98491 3.40691 4.91651 2.84845C5.84811 2.28999 6.91384 1.99489 8 1.99463V1.99996Z" stroke="var(--components-background-primary)" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <div class="header-mobile-row">
          <header class="header-mobile-specimen" data-state="closed">
            <div class="header-top">
              <div class="row">
                <a href="#" class="logo" aria-label="Home">
                  <svg viewBox="0 0 1024 796" aria-hidden="true">
                    <polygon points="512,0 1024,796 512,796" style="fill: var(--components-logo-right)" />
                    <polygon points="512,0 0,796 512,796" style="fill: var(--components-logo-left)" />
                  </svg>
                </a>

                <button class="button-menu-toggle" aria-label="Open menu" aria-expanded="false">
                  <svg class="button-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3.33334 5H16.6667" stroke="var(--text-link)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.33334 10H16.6667" stroke="var(--text-link)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.33334 15H16.6667" stroke="var(--text-link)" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <header class="header-mobile-specimen" data-state="open">
            <div class="header-top">
              <div class="row">
                <a href="#" class="logo" aria-label="Home">
                  <svg viewBox="0 0 1024 796" aria-hidden="true">
                    <polygon points="512,0 1024,796 512,796" style="fill: var(--components-logo-right)" />
                    <polygon points="512,0 0,796 512,796" style="fill: var(--components-logo-left)" />
                  </svg>
                </a>

                <button class="button-menu-toggle" aria-label="Close menu" aria-expanded="true">
                  <svg class="button-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M15 5L5 15" stroke="var(--text-link)" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 5L15 15" stroke="var(--text-link)" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <nav aria-label="Primary navigation">
              <ul>
                <li><a href="#" class="link">Link</a></li>
                <li><a href="#" class="link">Link</a></li>
                <li><a href="#" class="link">Link</a></li>
                <li><a href="#" class="link">Link</a></li>
                <li><a href="#" class="link">Link</a></li>
              </ul>

              <div class="toggle-color-mode">
                <svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M5.33334 8.00016C5.33334 8.70741 5.61429 9.38568 6.11438 9.88578C6.61448 10.3859 7.29276 10.6668 8 10.6668C8.70725 10.6668 9.38552 10.3859 9.88562 9.88578C10.3857 9.38568 10.6667 8.70741 10.6667 8.00016C10.6667 7.29292 10.3857 6.61464 9.88562 6.11454C9.38552 5.61445 8.70725 5.3335 8 5.3335C7.29276 5.3335 6.61448 5.61445 6.11438 6.11454C5.61429 6.61464 5.33334 7.29292 5.33334 8.00016Z" stroke="var(--components-background-primary)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 8H2.66667M8 2V2.66667M13.3333 8H14M8 13.3333V14M3.73333 3.73333L4.2 4.2M12.2667 3.73333L11.8 4.2M11.8 11.8L12.2667 12.2667M4.2 11.8L3.73333 12.2667" stroke="var(--components-background-primary)" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="checkbox" role="switch" aria-label="Toggle dark mode">
                <svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1.99996C8.088 1.99996 8.17534 1.99996 8.262 1.99996C7.40556 2.79577 6.85506 3.86653 6.7062 5.02611C6.55733 6.18569 6.81951 7.36078 7.44716 8.34712C8.07481 9.33345 9.02825 10.0687 10.1417 10.4249C11.2552 10.7812 12.4584 10.7361 13.542 10.2973C13.1252 11.3003 12.4439 12.1713 11.5708 12.8175C10.6977 13.4636 9.66563 13.8607 8.58461 13.9662C7.50358 14.0718 6.41418 13.8819 5.4326 13.4169C4.45101 12.9519 3.61408 12.2291 3.01106 11.3257C2.40804 10.4223 2.06157 9.37215 2.00859 8.28728C1.95561 7.2024 2.19812 6.12349 2.71025 5.16564C3.22238 4.20778 3.98491 3.40691 4.91651 2.84845C5.84811 2.28999 6.91384 1.99489 8 1.99463V1.99996Z" stroke="var(--components-background-primary)" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </nav>
          </header>
        </div>

      </div>

      <hr>

      <h2>Variants</h2>
      <p>The Header has two layout variants determined by viewport size, and a state variant for the mobile menu:</p>
      <ul>
        <li><strong>Widescreen:</strong> Single horizontal top bar with all navigation visible inline; color mode toggle sits at the right of the navigation row; no menu toggle button</li>
        <li><strong>Mobile — closed:</strong> Compact top bar showing only the logo and hamburger menu button; navigation and color mode toggle are hidden until the menu is opened</li>
        <li><strong>Mobile — open:</strong> Top bar remains visible with the logo and a close (X) button; navigation dropdown appears below, containing the vertical link list and the color mode toggle at the bottom</li>
      </ul>

      <hr>

      <h2>States</h2>
      <p>The Header's primary interactive state is the mobile menu open/closed toggle. Individual navigation links follow the standard link states documented in the Link component:</p>
      <ul>
        <li><strong>Default (closed):</strong> Mobile header displays only the top bar with the logo and hamburger icon; all navigation is hidden; on widescreen, this is the only state — navigation is always visible</li>
        <li><strong>Open (mobile only):</strong> Navigation dropdown is visible below the top bar; hamburger icon is replaced by a close (X) icon; color mode toggle is accessible at the bottom of the dropdown</li>
        <li><strong>Focus:</strong> All interactive elements (logo link, navigation links, menu toggle button, and color mode toggle) must show a visible focus ring when navigated by keyboard; focus indicators rely on browser defaults, enhanced as needed for visibility against the backdrop blur background</li>
      </ul>

      <hr>

      <h2>Typography</h2>
      <p>Mobile and widescreen layouts use different typography tokens. Mobile navigation links use the <code>small</code> scale; widescreen navigation links use the <code>p</code> scale.</p>

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
            <td>Mobile navigation links font-size</td>
            <td><code>small/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Mobile navigation links line-height</td>
            <td><code>small/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Widescreen navigation links font-size</td>
            <td><code>p/font-size</code></td>
            <td>—</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Widescreen navigation links line-height</td>
            <td><code>p/line-height</code></td>
            <td>—</td>
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
            <td>Top bar padding</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>padding-top, padding-bottom</td>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.125rem / 2px</td>
          </tr>
          <tr>
            <td>Color mode toggle gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>Navigation dropdown padding</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Top bar to dropdown gap</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Mobile navigation links gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Color mode toggle padding-top</td>
            <td><code>lg</code></td>
            <td>0.75rem / 12px</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Widescreen navigation padding-left</td>
            <td><code>xxxl</code></td>
            <td>—</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>Widescreen navigation links gap</td>
            <td><code>xl</code></td>
            <td>—</td>
            <td>1rem / 16px</td>
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
            <td>Top bar border-radius</td>
            <td><code>border-radius/md</code></td>
            <td>0.5rem / 8px</td>
            <td>0.5rem / 8px</td>
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
            <td>background</td>
            <td><code>section/background</code></td>
            <td>#EEEEEE (global/gray-light)</td>
            <td>#003442 (brand/secondary)</td>
          </tr>
          <tr>
            <td>Navigation links</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>

        </tbody>
      </table>

      <p><strong>Light/dark mode behavior:</strong> The top bar and dropdown backgrounds switch between light and dark modes. Navigation link colors also adapt: primary red in light mode, white in dark mode for contrast against the dark background.</p>

      <hr>

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>The Header must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus through logo link, navigation links, menu toggle button, and color mode toggle in order</li>
        <li><strong>Shift + Tab:</strong> Reverses focus order</li>
        <li><strong>Enter / Space:</strong> Activates the focused link or button; toggles the mobile menu or color mode switch</li>
        <li><strong>Escape:</strong> Closes the mobile menu when open and returns focus to the menu toggle button</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use a <code>&lt;header&gt;</code> landmark element to wrap the entire component. Wrap navigation in a <code>&lt;nav&gt;</code> element with <code>aria-label="Primary navigation"</code> to distinguish it from other navigation regions. Use a <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> structure for navigation links so screen readers announce the list count. The menu toggle must be a <code>&lt;button&gt;</code> element — never a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>aria-label="Primary navigation":</strong> Applied to the <code>&lt;nav&gt;</code> element to identify the navigation region</li>
        <li><strong>aria-label="Open menu" / "Close menu":</strong> Applied to the menu toggle button; updated dynamically when the menu state changes</li>
        <li><strong>aria-expanded="false" / "true":</strong> Applied to the menu toggle button; reflects the current open/closed state of the mobile menu</li>
        <li><strong>aria-label="Toggle dark mode":</strong> Applied to the color mode switch input; icons alone are insufficient</li>
        <li><strong>aria-label="Home":</strong> Applied to the logo link to describe its destination</li>
      </ul>

      <h3>Focus management</h3>
      <p>When the mobile menu opens, optionally move focus to the first navigation link to orient keyboard users. When the menu closes — whether by button click, link selection, or Escape key — return focus to the menu toggle button. Ensure all interactive elements have a visible focus ring that remains legible against the backdrop blur background in both light and dark modes.</p>

      <h3>Color contrast</h3>
      <p>Navigation links (#FF5247) must meet 4.5:1 contrast against the background in both modes. Test with backdrop blur applied. Text contrast must be verified in dark mode against #003442.</p>

      <hr>

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use the Header when you need to:</p>
      <ul>
        <li>Provide primary site navigation at the top of every page</li>
        <li>Display brand identity consistently across all pages</li>
        <li>Give users quick access to essential top-level destinations</li>
        <li>Include a persistent utility control such as the color mode toggle</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use the Header when:</p>
      <ul>
        <li>You need secondary or contextual navigation — use in-page tabs, a sidebar, or footer links instead</li>
        <li>You are building a modal, overlay, or focused task flow where primary navigation would distract from the task</li>
        <li>The page is a standalone embed or iframe context where the parent application provides navigation</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Limit navigation links:</strong> 5–7 primary links maximum; too many items reduces effectiveness and mobile usability</li>
        <li><strong>Use concise labels:</strong> 1–2 words per link; avoid jargon or ambiguous terms</li>
        <li><strong>Prioritize by importance:</strong> Order links by how frequently users need them, most important first</li>
        <li><strong>Maintain consistency:</strong> Use identical navigation across all pages to avoid disorienting users</li>
      </ul>

      <h3>Placement</h3>
      <p>The Header is always positioned at the top of the viewport. It can be implemented as <code>position: sticky</code> (scrolls to top and stays fixed) or <code>position: fixed</code> (always visible). A skip navigation link should appear above the Header in the DOM for keyboard users, visually hidden until focused.</p>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Keep navigation focused</strong></p>
          <p>Include only primary destinations. Use the footer or secondary navigation patterns for supplementary links.</p>

          <p><strong>Manage focus properly</strong></p>
          <p>Return focus to the toggle button when the mobile menu closes to maintain a predictable keyboard experience.</p>

          <p><strong>Test both modes</strong></p>
          <p>Verify readability and contrast in both light and dark modes, including with the backdrop blur effect active.</p>

          <p><strong>Provide skip navigation</strong></p>
          <p>Include a visually hidden "Skip to main content" link before the Header so keyboard users can bypass repeated navigation.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't overload with links</strong></p>
          <p>Too many navigation items creates clutter and forces users to hunt for destinations, especially on mobile.</p>

          <p><strong>Don't rely on icons alone</strong></p>
          <p>Provide <code>aria-label</code> or visible text for all icon-only controls including the menu button and color mode toggle.</p>

          <p><strong>Don't forget state indicators</strong></p>
          <p>The menu button must clearly communicate its current state to all users, including those using assistive technology.</p>

          <p><strong>Don't trap keyboard users</strong></p>
          <p>Ensure the mobile menu can be dismissed via the button, a navigation link selection, or the Escape key.</p>
        </div>
      </div>

      <hr>

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Header - Widescreen --&gt;
&lt;header&gt;
  &lt;div class="header-top"&gt;
    &lt;div class="row"&gt;

      &lt;!-- Logo --&gt;
      &lt;a href="/" class="logo" aria-label="Home"&gt;
        &lt;svg viewBox="0 0 1024 796" aria-hidden="true"&gt;&lt;!-- Logo SVG --&gt;&lt;/svg&gt;
      &lt;/a&gt;

      &lt;!-- Navigation --&gt;
      &lt;nav aria-label="Primary navigation"&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="/about" class="link"&gt;About&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/products" class="link"&gt;Products&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/services" class="link"&gt;Services&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/contact" class="link"&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;

        &lt;!-- Color mode toggle --&gt;
        &lt;div class="toggle-color-mode"&gt;
          &lt;svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"&gt;&lt;!-- Sun --&gt;&lt;/svg&gt;
          &lt;input type="checkbox" role="switch" aria-label="Toggle dark mode"&gt;
          &lt;svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"&gt;&lt;!-- Moon --&gt;&lt;/svg&gt;
        &lt;/div&gt;
      &lt;/nav&gt;

    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;!-- Header - Mobile Closed --&gt;
&lt;header data-state="closed"&gt;
  &lt;div class="header-top"&gt;
    &lt;div class="row"&gt;
      &lt;a href="/" class="logo" aria-label="Home"&gt;
        &lt;svg viewBox="0 0 1024 796" aria-hidden="true"&gt;&lt;!-- Logo SVG --&gt;&lt;/svg&gt;
      &lt;/a&gt;
      &lt;button class="button-menu-toggle" aria-label="Open menu" aria-expanded="false"&gt;
        &lt;svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Hamburger --&gt;&lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;!-- Header - Mobile Open --&gt;
&lt;header data-state="open"&gt;
  &lt;div class="header-top"&gt;
    &lt;div class="row"&gt;
      &lt;a href="/" class="logo" aria-label="Home"&gt;
        &lt;svg viewBox="0 0 1024 796" aria-hidden="true"&gt;&lt;!-- Logo SVG --&gt;&lt;/svg&gt;
      &lt;/a&gt;
      &lt;button class="button-menu-toggle" aria-label="Close menu" aria-expanded="true"&gt;
        &lt;svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Close X --&gt;&lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Navigation dropdown --&gt;
  &lt;nav aria-label="Primary navigation"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/about" class="link"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/products" class="link"&gt;Products&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/services" class="link"&gt;Services&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/contact" class="link"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- Color mode toggle --&gt;
    &lt;div class="toggle-color-mode"&gt;
      &lt;svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"&gt;&lt;!-- Sun --&gt;&lt;/svg&gt;
      &lt;input type="checkbox" role="switch" aria-label="Toggle dark mode"&gt;
      &lt;svg class="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"&gt;&lt;!-- Moon --&gt;&lt;/svg&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/header&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Header container */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Top bar */
.header-top {
  padding: var(--md);
  background-color: var(--section\/background);
  backdrop-filter: blur(15px);
  border-radius: var(--border-radius\/md);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  height: var(--components\/width\/by-font-size\/h3);
  aspect-ratio: 1024 / 796;
}

/* Navigation — shared */
nav {
  display: flex;
  gap: var(--xl);
  align-items: center;
}

ul {
  display: flex;
  gap: var(--xl);
  list-style: none;
  align-items: center;
  padding-left: var(--xxxl);
}

li {
  padding-top: var(--xs);
  padding-bottom: var(--xs);
}

.link {
  font-size: var(--p\/font-size);
  line-height: var(--p\/line-height);
  color: var(--text\/link);
  text-decoration: none;
}

.link:hover {
  color: var(--brand\/secondary);
}

/* Mobile menu toggle */
.button-menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--border-radius\/round);
  cursor: pointer;
  padding: 0;
  width: var(--components\/width\/by-font-size\/h4);
  aspect-ratio: 1;
}

/* Mobile navigation dropdown */
header[data-state="open"] nav {
  display: flex;
  flex-direction: column;
  gap: var(--md);
  align-items: flex-end;
  margin-top: var(--xl);
  padding: var(--md);
  background-color: var(--section\/background);
  backdrop-filter: blur(15px);
  border-radius: var(--border-radius\/md);
}

header[data-state="open"] ul {
  flex-direction: column;
  gap: var(--md);
  padding-left: 0;
}

header[data-state="open"] .link {
  font-size: var(--small\/font-size);
  line-height: var(--small\/line-height);
}

/* Color mode toggle */
.toggle-color-mode {
  display: flex;
  align-items: center;
  gap: var(--md);
}

header[data-state="open"] .toggle-color-mode {
  padding-top: var(--lg);
}

.toggle-color-mode .icon {
  width: var(--components\/width\/by-font-size\/p);
  aspect-ratio: 1;
}

input[role="switch"] {
  appearance: none;
  background: transparent;
  border: 1px solid var(--text\/link);
  border-radius: var(--components\/input\/switch\/border-radius);
  padding: var(--components\/input\/switch\/padding);
  cursor: pointer;
}

input[role="switch"]::before {
  content: '';
  display: block;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--text\/link);
}

input[role="switch"]:checked {
  background: var(--text\/link);
}

input[role="switch"]:checked::before {
  background: var(--global\/white);
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>// Mobile menu toggle functionality
const menuToggle = document.querySelector('.button-menu-toggle');
const header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
  const isOpen = header.dataset.state === 'open';

  // Toggle state
  header.dataset.state = isOpen ? 'closed' : 'open';

  // Update ARIA attributes
  menuToggle.setAttribute('aria-expanded', !isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');

  // Move focus to first link when menu opens
  if (!isOpen) {
    const firstLink = header.querySelector('nav .link');
    firstLink?.focus();
  }
});

// Close menu on link click — return focus to toggle
const navLinks = header.querySelectorAll('nav .link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.dataset.state = 'closed';
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.focus();
  });
});

// Close menu on Escape key — return focus to toggle
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.dataset.state === 'open') {
    header.dataset.state = 'closed';
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.focus();
  }
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography — mobile layout */
--small/font-size    0.75rem / 12px (fixed)
--small/line-height  1.25rem / 20px (fixed)

/* Typography — widescreen layout */
--p/font-size    1rem / 16px (fixed)
--p/line-height  1.5rem / 24px (fixed)

/* Spacing */
--xs     0.125rem / 2px (fixed)
--md     0.5rem / 8px (fixed)
--lg     0.75rem / 12px (fixed)
--xl     1rem / 16px (fixed)
--xxxl   1.5rem / 24px (fixed)
--components/input/switch/padding-gap  0.5rem / 8px (fixed)

/* Sizing */
--components/width/by-font-size/h3   Mobile: 1.75rem / 28px   →   Widescreen: 3.125rem / 50px
--components/width/by-font-size/h4   Mobile: 1.5rem / 24px    →   Widescreen: 2.625rem / 42px
--components/width/by-font-size/p    Mobile: 1rem / 16px      →   Widescreen: 1.5rem / 24px

/* Border-radius */
--border-radius/md                     0.5rem / 8px (fixed)
--border-radius/round                  6.25rem / 100px (fixed)
--components/input/switch/border-radius  1rem / 16px (fixed)

/* Colors */
--section/background              Light: #EEEEEE   Dark: #003442
--text/link                       Light: #FF5247   Dark: #FFFFFF
--brand/secondary                 Light: #003442   Dark: #003442
--components/background/primary   Light: #FF5247   Dark: #FFFFFF
--components/logo/left            Light: #003442   Dark: #FF5247
--components/logo/right           Light: #01232D   Dark: #B22E28</code></pre>

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/" target="_blank">ARIA: Disclosure Pattern</a> — W3C guidance for collapsible navigation menus</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header" target="_blank">MDN: &lt;header&gt; element</a> — Semantic header documentation</li>
        <li><a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.nngroup.com/articles/hamburger-menus/" target="_blank">Nielsen Norman Group: Hamburger Menus</a> — Mobile navigation UX research</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter" target="_blank">MDN: backdrop-filter</a> — Backdrop blur documentation</li>
      </ul>

    </div>
  `;
};
