function createHeadersDocumentation() {
  return `
    <style>
      .delta-docs .header-placeholder {
        margin: 1.5rem 0;
        padding: var(--docs-demo-padding);
        border: var(--docs-rule-width) dashed var(--surface-border);
        border-radius: var(--docs-surface-radius);
        background: var(--surface-subtle);
      }

      .delta-docs .header-placeholder__label {
        margin: 0;
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--small-font-size);
        line-height: var(--small-line-height);
        font-weight: var(--font-weight-bold);
      }

      .delta-docs .header-placeholder__body {
        margin: 0.5rem 0 0;
        color: var(--text-muted);
      }
    </style>
    <article class="delta-docs">
      <h1>Headers</h1>
      <p>The Header provides primary site navigation, branding, and utility controls at the top of every page. It adapts between a compact mobile layout with a collapsible menu and a full widescreen layout with inline navigation and a color mode toggle.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>The Header has two layouts depending on viewport size. Both share a top bar with backdrop blur, a logo, and the color mode toggle — though the toggle moves to the mobile dropdown when open.</p>
      <ul>
        <li><strong>Top bar:</strong> Container with backdrop blur effect, present in all variants</li>
        <li><strong>Logo:</strong> Brand mark, links to home</li>
        <li><strong>Navigation (widescreen):</strong> Horizontal list of text links displayed inline</li>
        <li><strong>Color mode toggle (widescreen):</strong> Sun icon, switch, and moon icon — visible inline in the top bar</li>
        <li><strong>Menu button (mobile):</strong> Hamburger icon when closed; close (X) icon when open</li>
        <li><strong>Navigation dropdown (mobile open):</strong> Vertical list of links with trailing arrow icons, plus the color mode toggle</li>
      </ul>

      <div class="header-placeholder" aria-label="Header anatomy placeholder">
        <p class="header-placeholder__label">Step 1 placeholder: Header anatomy sample</p>
        <p class="header-placeholder__body">Live rendered anatomy specimen will be added in Step 2 after Figma verification and approval.</p>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>The Header has two layout variants determined by viewport size, and a state variant for the mobile menu:</p>
      <ul>
        <li><strong>Widescreen:</strong> Single horizontal top bar with all navigation visible inline; links have no trailing icons; color mode toggle sits at the right of the navigation row; no menu toggle button</li>
        <li><strong>Mobile — closed:</strong> Compact top bar showing only the logo and hamburger menu button; navigation and color mode toggle are hidden until the menu is opened</li>
        <li><strong>Mobile — open:</strong> Top bar remains visible with the logo and a close (X) button; navigation dropdown appears below, containing the vertical link list with trailing arrow icons and the color mode toggle at the bottom</li>
      </ul>

      <div class="header-placeholder" aria-label="Header variants placeholder">
        <p class="header-placeholder__label">Step 1 placeholder: Header variants samples</p>
        <p class="header-placeholder__body">Live rendered widescreen, mobile closed, and mobile open samples will be added in Step 2 after Figma verification and approval.</p>
      </div>

      <hr />

      <h2>States</h2>
      <p>The Header's primary interactive state is the mobile menu open/closed toggle. Individual navigation links follow the standard link states documented in the Link component:</p>
      <ul>
        <li><strong>Default (closed):</strong> Mobile header displays only the top bar with the logo and hamburger icon; all navigation is hidden; on widescreen, this is the only state — navigation is always visible</li>
        <li><strong>Open (mobile only):</strong> Navigation dropdown is visible below the top bar; hamburger icon is replaced by a close (X) icon; color mode toggle is accessible at the bottom of the dropdown</li>
        <li><strong>Focus:</strong> All interactive elements (logo link, navigation links, menu toggle button, and color mode toggle) must show a visible focus ring when navigated by keyboard; focus indicators rely on browser defaults, enhanced as needed for visibility against the backdrop blur background</li>
      </ul>

      <div class="header-placeholder" aria-label="Header states placeholder">
        <p class="header-placeholder__label">Step 1 placeholder: Header state samples</p>
        <p class="header-placeholder__body">Live rendered default, open, and focus state samples will be added in Step 2 after Figma verification and approval.</p>
      </div>

      <hr />

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
            <td>Top bar border-radius</td>
            <td><code>border-radius/md</code></td>
            <td>0.5rem / 8px</td>
            <td>0.5rem / 8px</td>
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

      <hr />

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

      <hr />

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

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Header - Widescreen --&gt;
&lt;header class="header" data-size="widescreen"&gt;
  &lt;div class="header-top"&gt;
    &lt;div class="header-row"&gt;

      &lt;!-- Logo --&gt;
      &lt;a href="/" class="header-logo" aria-label="Home"&gt;
        &lt;svg viewBox="0 0 40 40"&gt;&lt;!-- Logo SVG --&gt;&lt;/svg&gt;
      &lt;/a&gt;

      &lt;!-- Navigation --&gt;
      &lt;nav class="header-nav" aria-label="Primary navigation"&gt;
        &lt;ul class="header-links"&gt;
          &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/products"&gt;Products&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/services"&gt;Services&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;

      &lt;!-- Color mode toggle --&gt;
      &lt;div class="header-toggle"&gt;
        &lt;svg class="header-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Sun --&gt;&lt;/svg&gt;
        &lt;label class="header-toggle-label"&gt;
          &lt;input type="checkbox"
                 class="header-toggle-input"
                 aria-label="Toggle dark mode"&gt;
          &lt;span class="header-toggle-track"&gt;&lt;/span&gt;
        &lt;/label&gt;
        &lt;svg class="header-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Moon --&gt;&lt;/svg&gt;
      &lt;/div&gt;

    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;!-- Header - Mobile Closed --&gt;
&lt;header class="header" data-size="mobile" data-state="closed"&gt;
  &lt;div class="header-top"&gt;
    &lt;div class="header-row"&gt;

      &lt;!-- Logo --&gt;
      &lt;a href="/" class="header-logo" aria-label="Home"&gt;
        &lt;svg viewBox="0 0 40 40"&gt;&lt;!-- Logo SVG --&gt;&lt;/svg&gt;
      &lt;/a&gt;

      &lt;!-- Menu toggle --&gt;
      &lt;button class="header-menu-toggle"
              aria-label="Open menu"
              aria-expanded="false"&gt;
        &lt;svg class="header-menu-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Hamburger --&gt;&lt;/svg&gt;
      &lt;/button&gt;

    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;!-- Header - Mobile Open --&gt;
&lt;header class="header" data-size="mobile" data-state="open"&gt;
  &lt;div class="header-top"&gt;
    &lt;div class="header-row"&gt;

      &lt;!-- Logo --&gt;
      &lt;a href="/" class="header-logo" aria-label="Home"&gt;
        &lt;svg viewBox="0 0 40 40"&gt;&lt;!-- Logo SVG --&gt;&lt;/svg&gt;
      &lt;/a&gt;

      &lt;!-- Menu toggle --&gt;
      &lt;button class="header-menu-toggle"
              aria-label="Close menu"
              aria-expanded="true"&gt;
        &lt;svg class="header-menu-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Close X --&gt;&lt;/svg&gt;
      &lt;/button&gt;

    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Navigation dropdown --&gt;
  &lt;nav class="header-nav-mobile" aria-label="Primary navigation"&gt;
    &lt;ul class="header-links-mobile"&gt;
      &lt;li&gt;
        &lt;a href="/about"&gt;
          About
          &lt;svg viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Arrow --&gt;&lt;/svg&gt;
        &lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/products"&gt;
          Products
          &lt;svg viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Arrow --&gt;&lt;/svg&gt;
        &lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/services"&gt;
          Services
          &lt;svg viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Arrow --&gt;&lt;/svg&gt;
        &lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/contact"&gt;
          Contact
          &lt;svg viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Arrow --&gt;&lt;/svg&gt;
        &lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- Color mode toggle --&gt;
    &lt;div class="header-toggle"&gt;
      &lt;svg class="header-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Sun --&gt;&lt;/svg&gt;
      &lt;label class="header-toggle-label"&gt;
        &lt;input type="checkbox"
               class="header-toggle-input"
               aria-label="Toggle dark mode"&gt;
        &lt;span class="header-toggle-track"&gt;&lt;/span&gt;
      &lt;/label&gt;
      &lt;svg class="header-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"&gt;&lt;!-- Moon --&gt;&lt;/svg&gt;
    &lt;/div&gt;
  &lt;/nav&gt;

&lt;/header&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Header container */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Top bar */
.header-top {
  padding: var(--md);
  background-color: var(--section-background);
  backdrop-filter: blur(15px);
  border-radius: var(--border-radius-md);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.header-logo {
  display: flex;
  align-items: center;
}

/* Widescreen navigation */
.header-nav {
  display: none;
}

@media (min-width: 48rem) {
  .header[data-size="widescreen"] .header-nav {
    display: flex;
    padding-left: var(--xxxl);
  }
}

.header-links {
  display: flex;
  gap: var(--xl);
  list-style: none;
  align-items: center;
}

.header-links li {
  padding-top: var(--xs);
  padding-bottom: var(--xs);
}

.header-links a {
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  color: var(--text-link);
  text-decoration: underline;
}

/* Mobile menu toggle */
.header-menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--border-radius-round);
  cursor: pointer;
  padding: 0;
}

/* Mobile navigation dropdown */
.header-nav-mobile {
  display: none;
  margin-top: var(--xl);
  padding: var(--md);
  background-color: var(--section-background);
  backdrop-filter: blur(15px);
  border-radius: var(--border-radius-md);
}

.header[data-size="mobile"][data-state="open"] .header-nav-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--md);
  align-items: flex-end;
}

.header-links-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--md);
  list-style: none;
}

.header-links-mobile li {
  padding-top: var(--xs);
  padding-bottom: var(--xs);
}

.header-links-mobile a {
  display: flex;
  align-items: center;
  gap: var(--xs);
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  color: var(--text-link);
  text-decoration: underline;
}

/* Color mode toggle */
.header-toggle {
  display: flex;
  align-items: center;
  gap: var(--md);
}

.header[data-size="mobile"] .header-toggle {
  display: none;
}

.header[data-size="mobile"][data-state="open"] .header-toggle {
  display: flex;
  padding-top: var(--lg);
}

.header-toggle-label {
  display: flex;
  align-items: center;
  gap: var(--components-input-switch-padding-gap);
}

.header-toggle-input {
  /* See Fieldsets documentation for complete switch styling */
  border-radius: var(--components-input-switch-border-radius);
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>// Mobile menu toggle functionality
const menuToggle = document.querySelector('.header-menu-toggle');
const header = document.querySelector('.header');

menuToggle.addEventListener('click', () => {
  const isOpen = header.dataset.state === 'open';

  // Toggle state
  header.dataset.state = isOpen ? 'closed' : 'open';

  // Update ARIA attributes
  menuToggle.setAttribute('aria-expanded', !isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');

  // Move focus to first link when menu opens
  if (!isOpen) {
    const firstLink = document.querySelector('.header-links-mobile a');
    firstLink?.focus();
  }
});

// Close menu on link click — return focus to toggle
const mobileLinks = document.querySelectorAll('.header-links-mobile a');
mobileLinks.forEach(link => {
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
small/font-size    0.75rem / 12px (fixed)
small/line-height  1.25rem / 20px (fixed)

/* Typography — widescreen layout */
p/font-size    1rem / 16px (fixed)
p/line-height  1.5rem / 24px (fixed)

/* Spacing */
xs     0.125rem / 2px (fixed)
md     0.5rem / 8px (fixed)
lg     0.75rem / 12px (fixed)
xl     1rem / 16px (fixed)
xxxl   1.5rem / 24px (fixed)
components/input/switch/padding-gap  0.5rem / 8px (fixed)

/* Border-radius */
border-radius/md                     0.5rem / 8px (fixed)
border-radius/round                  6.25rem / 100px (fixed)
components/input/switch/border-radius  1rem / 16px (fixed)

/* Colors */
section/background      Light: #EEEEEE   Dark: #003442
text/link               Light: #FF5247   Dark: #FFFFFF</code></pre>

      <hr />

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
    </article>
  `;
}

export default {
  title: 'Components/Headers',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Documentation = () => createHeadersDocumentation();
