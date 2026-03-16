function createHeadersDocumentation() {
  return `
    <style>
      .delta-docs .header-specimen-shell {
        background: var(--page-background);
      }

      [data-color-mode='dark'] .delta-docs .header-specimen-shell {
        background: var(--brand-secondary);
      }

      .delta-docs .header-specimen {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
        width: 100%;
      }

      .delta-docs .header-specimen__top,
      .delta-docs .header-specimen__panel {
        width: 100%;
        padding: var(--spacing-md);
        border-radius: var(--border-radius-md);
        background: var(--section-background);
        backdrop-filter: blur(15px);
      }

      .delta-docs .header-specimen__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-md);
        width: 100%;
      }

      .delta-docs .header-specimen__logo-space {
        display: block;
        width: 2.5625rem;
        height: 2rem;
        flex: 0 0 auto;
      }

      .delta-docs .header-specimen__menu-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        padding: var(--spacing-xs);
        border: 0;
        border-radius: var(--border-radius-round);
        background: transparent;
        color: var(--text-link);
        cursor: pointer;
      }

      .delta-docs .header-specimen__menu-icon {
        position: relative;
        display: block;
        width: 1.5rem;
        height: 1.5rem;
      }

      .delta-docs .header-specimen__menu-icon--closed::before,
      .delta-docs .header-specimen__menu-icon--closed::after,
      .delta-docs .header-specimen__menu-icon--closed span,
      .delta-docs .header-specimen__menu-icon--open::before,
      .delta-docs .header-specimen__menu-icon--open::after {
        content: '';
        position: absolute;
        display: block;
        background: currentColor;
      }

      .delta-docs .header-specimen__menu-icon--closed::before,
      .delta-docs .header-specimen__menu-icon--closed::after,
      .delta-docs .header-specimen__menu-icon--closed span {
        left: 0.25rem;
        width: 1rem;
        height: 0.0625rem;
      }

      .delta-docs .header-specimen__menu-icon--closed::before {
        top: 0.4375rem;
      }

      .delta-docs .header-specimen__menu-icon--closed span {
        top: 0.75rem;
      }

      .delta-docs .header-specimen__menu-icon--closed::after {
        top: 1.0625rem;
      }

      .delta-docs .header-specimen__menu-icon--open::before,
      .delta-docs .header-specimen__menu-icon--open::after {
        top: 0.75rem;
        left: 0.3125rem;
        width: 0.875rem;
        height: 0.0625rem;
        transform-origin: center;
      }

      .delta-docs .header-specimen__menu-icon--open::before {
        transform: rotate(45deg);
      }

      .delta-docs .header-specimen__menu-icon--open::after {
        transform: rotate(-45deg);
      }

      .delta-docs .header-specimen__nav {
        display: flex;
        align-items: center;
        gap: var(--spacing-xl);
        flex: 1 1 auto;
        min-width: 0;
      }

      .delta-docs .header-specimen__links {
        display: flex;
        align-items: center;
        gap: var(--spacing-xl);
        flex: 1 1 auto;
        min-width: 0;
        margin: 0;
        padding: 0 0 0 var(--spacing-xxxl);
        list-style: none;
      }

      .delta-docs .header-specimen__links--mobile {
        flex-direction: column;
        align-items: flex-end;
        gap: var(--spacing-md);
        padding-left: 0;
      }

      .delta-docs .header-specimen__link-item {
        padding-top: var(--spacing-xs);
        padding-bottom: var(--spacing-xs);
        margin: 0;
      }

      .delta-docs .header-specimen__link {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        color: var(--text-link);
        font-family: var(--font-family-body);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
        white-space: nowrap;
      }

      .delta-docs .header-specimen__link:hover,
      .delta-docs .header-specimen__link:focus-visible,
      [data-color-mode='dark'] .delta-docs .header-specimen__link:hover,
      [data-color-mode='dark'] .delta-docs .header-specimen__link:focus-visible {
        color: var(--text-hover);
      }

      .delta-docs .header-specimen__link--desktop {
        font-size: var(--p-font-size);
        line-height: var(--p-line-height);
      }

      .delta-docs .header-specimen__link--mobile {
        font-size: var(--small-font-size);
        line-height: var(--small-line-height);
      }

      .delta-docs .header-specimen__toggle {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--spacing-md);
        flex: 0 0 auto;
      }

      .delta-docs .header-specimen__toggle--mobile {
        width: 100%;
        padding-top: var(--spacing-lg);
      }

      .delta-docs .header-specimen__toggle-icon {
        display: inline-flex;
        width: 1.25rem;
        height: 1.25rem;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        color: var(--components-background-primary);
      }

      .delta-docs .header-specimen__toggle-icon svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-width: var(--components-input-icon-stroke-width);
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .delta-docs .header-specimen__toggle-label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .delta-docs .header-specimen__toggle-input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .delta-docs .header-specimen__toggle-track {
        position: relative;
        display: inline-flex;
        width: var(--components-input-switch-width);
        height: var(--components-input-switch-height);
        align-items: center;
        justify-content: flex-start;
        padding: var(--components-input-switch-padding);
        border: var(--docs-rule-width) solid var(--components-background-primary);
        border-radius: var(--border-radius-round);
        background: transparent;
      }

      .delta-docs .header-specimen__toggle-thumb {
        display: block;
        width: var(--components-input-switch-thumb-size);
        height: var(--components-input-switch-thumb-size);
        border-radius: var(--border-radius-round);
        background: var(--components-background-primary);
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      .delta-docs .header-specimen__toggle-input:checked + .header-specimen__toggle-track {
        background: var(--components-background-primary);
      }

      .delta-docs .header-specimen__toggle-input:checked + .header-specimen__toggle-track .header-specimen__toggle-thumb {
        background: var(--text-inverse);
        transform: translateX(calc(var(--components-input-switch-width) - var(--components-input-switch-thumb-size) - (var(--components-input-switch-padding) * 2)));
      }

      .delta-docs .header-specimen__toggle-text {
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

      .delta-docs .header-specimen--mobile {
        width: 18rem;
      }

      .delta-docs .header-specimen--mobile .header-specimen__panel {
        display: none;
      }

      .delta-docs .header-specimen--mobile[data-menu-open='true'] .header-specimen__panel {
        display: block;
      }

      .delta-docs .header-specimen--mobile[data-menu-open='false'] .header-specimen__menu-icon--open {
        display: none;
      }

      .delta-docs .header-specimen--mobile[data-menu-open='true'] .header-specimen__menu-icon--closed {
        display: none;
      }

      .delta-docs .header-specimen--desktop {
        width: 100%;
      }

      .delta-docs .header-specimen__states {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xl);
        align-items: flex-start;
      }

      @media (max-width: 48rem) {
        .delta-docs .header-specimen__links {
          gap: var(--spacing-md);
          padding-left: var(--spacing-xl);
        }
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

      <div class="delta-docs__demo header-specimen-shell" aria-label="Header anatomy specimen">
        <header class="header-specimen header-specimen--desktop">
          <div class="header-specimen__top">
            <div class="header-specimen__row">
              <div class="header-specimen__logo-space" aria-hidden="true">
                <svg class="header__logo-mark" viewBox="0 0 216 168" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <polygon points="108,0 0,168 108,168" fill="var(--components-logo-left)"/>
                  <polygon points="108,0 216,168 108,168" fill="var(--components-logo-right)"/>
                </svg>
              </div>
              <nav class="header-specimen__nav" aria-label="Primary navigation">
                <ul class="header-specimen__links">
                  <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--desktop" href="/foundations">Link</a></li>
                  <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--desktop" href="/atoms">Link</a></li>
                  <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--desktop" href="/molecules">Link</a></li>
                  <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--desktop" href="/organisms">Link</a></li>
                  <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--desktop" href="/contact">Link</a></li>
                </ul>
                <div class="header-specimen__toggle">
                  <span class="header-specimen__toggle-icon" aria-hidden="true">
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
                  <label class="header-specimen__toggle-label">
                    <input class="header-specimen__toggle-input" type="checkbox" role="switch" aria-checked="false" aria-label="Toggle dark mode" />
                    <span class="header-specimen__toggle-track" aria-hidden="true">
                      <span class="header-specimen__toggle-thumb"></span>
                    </span>
                    <span class="header-specimen__toggle-text">Dark mode</span>
                  </label>
                  <span class="header-specimen__toggle-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0A7 7 0 0 0 21 12.79Z"></path>
                    </svg>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>The Header has two layout variants determined by viewport size, and a state variant for the mobile menu:</p>
      <ul>
        <li><strong>Widescreen:</strong> Single horizontal top bar with all navigation visible inline; links have no trailing icons; color mode toggle sits at the right of the navigation row; no menu toggle button</li>
        <li><strong>Mobile — closed:</strong> Compact top bar showing only the logo and hamburger menu button; navigation and color mode toggle are hidden until the menu is opened</li>
        <li><strong>Mobile — open:</strong> Top bar remains visible with the logo and a close (X) button; navigation dropdown appears below, containing the vertical link list with trailing arrow icons and the color mode toggle at the bottom</li>
      </ul>

      <hr />

      <h2>States</h2>
      <p>The Header's primary interactive state is the mobile menu open/closed toggle. Individual navigation links follow the standard link states documented in the Link component:</p>
      <ul>
        <li><strong>Default (closed):</strong> Mobile header displays only the top bar with the logo and hamburger icon; all navigation is hidden; on widescreen, this is the only state — navigation is always visible</li>
        <li><strong>Open (mobile only):</strong> Navigation dropdown is visible below the top bar; hamburger icon is replaced by a close (X) icon; color mode toggle is accessible at the bottom of the dropdown</li>
        <li><strong>Focus:</strong> All interactive elements (logo link, navigation links, menu toggle button, and color mode toggle) must show a visible focus ring when navigated by keyboard; focus indicators rely on browser defaults, enhanced as needed for visibility against the backdrop blur background</li>
      </ul>

      <div class="delta-docs__demo header-specimen-shell" aria-label="Header state specimens">
        <div class="header-specimen__states">
          <header class="header-specimen header-specimen--mobile" data-menu-open="false">
            <div class="header-specimen__top">
              <div class="header-specimen__row">
                <div class="header-specimen__logo-space" aria-hidden="true">
                  <svg class="header__logo-mark" viewBox="0 0 216 168" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <polygon points="108,0 0,168 108,168" fill="var(--components-logo-left)"/>
                    <polygon points="108,0 216,168 108,168" fill="var(--components-logo-right)"/>
                  </svg>
                </div>
                <button class="header-specimen__menu-button" type="button" aria-label="Open menu" aria-expanded="false">
                  <span class="header-specimen__menu-icon header-specimen__menu-icon--closed" aria-hidden="true"><span></span></span>
                  <span class="header-specimen__menu-icon header-specimen__menu-icon--open" aria-hidden="true"></span>
                </button>
              </div>
            </div>
            <nav class="header-specimen__panel" aria-label="Primary navigation">
              <ul class="header-specimen__links header-specimen__links--mobile">
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/foundations">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/atoms">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/molecules">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/organisms">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/contact">Link</a></li>
              </ul>
              <div class="header-specimen__toggle header-specimen__toggle--mobile">
                <span class="header-specimen__toggle-icon" aria-hidden="true">
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
                <label class="header-specimen__toggle-label">
                  <input class="header-specimen__toggle-input" type="checkbox" role="switch" aria-checked="false" aria-label="Toggle dark mode" />
                  <span class="header-specimen__toggle-track" aria-hidden="true">
                    <span class="header-specimen__toggle-thumb"></span>
                  </span>
                  <span class="header-specimen__toggle-text">Dark mode</span>
                </label>
                <span class="header-specimen__toggle-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0A7 7 0 0 0 21 12.79Z"></path>
                  </svg>
                </span>
              </div>
            </nav>
          </header>

          <header class="header-specimen header-specimen--mobile" data-menu-open="true">
            <div class="header-specimen__top">
              <div class="header-specimen__row">
                <div class="header-specimen__logo-space" aria-hidden="true">
                  <svg class="header__logo-mark" viewBox="0 0 216 168" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <polygon points="108,0 0,168 108,168" fill="var(--components-logo-left)"/>
                    <polygon points="108,0 216,168 108,168" fill="var(--components-logo-right)"/>
                  </svg>
                </div>
                <button class="header-specimen__menu-button" type="button" aria-label="Close menu" aria-expanded="true">
                  <span class="header-specimen__menu-icon header-specimen__menu-icon--closed" aria-hidden="true"><span></span></span>
                  <span class="header-specimen__menu-icon header-specimen__menu-icon--open" aria-hidden="true"></span>
                </button>
              </div>
            </div>
            <nav class="header-specimen__panel" aria-label="Primary navigation">
              <ul class="header-specimen__links header-specimen__links--mobile">
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/foundations">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/atoms">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/molecules">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/organisms">Link</a></li>
                <li class="header-specimen__link-item"><a class="header-specimen__link header-specimen__link--mobile" href="/contact">Link</a></li>
              </ul>
              <div class="header-specimen__toggle header-specimen__toggle--mobile">
                <span class="header-specimen__toggle-icon" aria-hidden="true">
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
                <label class="header-specimen__toggle-label">
                  <input class="header-specimen__toggle-input" type="checkbox" role="switch" aria-checked="false" aria-label="Toggle dark mode" />
                  <span class="header-specimen__toggle-track" aria-hidden="true">
                    <span class="header-specimen__toggle-thumb"></span>
                  </span>
                  <span class="header-specimen__toggle-text">Dark mode</span>
                </label>
                <span class="header-specimen__toggle-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0A7 7 0 0 0 21 12.79Z"></path>
                  </svg>
                </span>
              </div>
            </nav>
          </header>
        </div>
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
  padding: var(--spacing-md);
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
    padding-left: var(--spacing-xxxl);
  }
}

.header-links {
  display: flex;
  gap: var(--spacing-xl);
  list-style: none;
  align-items: center;
}

.header-links li {
  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);
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
  margin-top: var(--spacing-xl);
  padding: var(--spacing-md);
  background-color: var(--section-background);
  backdrop-filter: blur(15px);
  border-radius: var(--border-radius-md);
}

.header[data-size="mobile"][data-state="open"] .header-nav-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-end;
}

.header-links-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  list-style: none;
}

.header-links-mobile li {
  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);
}

.header-links-mobile a {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  color: var(--text-link);
  text-decoration: underline;
}

/* Color mode toggle */
.header-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.header[data-size="mobile"] .header-toggle {
  display: none;
}

.header[data-size="mobile"][data-state="open"] .header-toggle {
  display: flex;
  padding-top: var(--spacing-lg);
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

      <script>
        (() => {
          const article = document.currentScript ? document.currentScript.closest('.delta-docs') : null;
          if (!article) return;

          const syncMobileMenu = (specimen) => {
            const isOpen = specimen.dataset.menuOpen === 'true';
            const button = specimen.querySelector('.header-specimen__menu-button');
            if (!button) return;
            button.setAttribute('aria-expanded', String(isOpen));
            button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
          };

          article.querySelectorAll('.header-specimen--mobile').forEach((specimen) => {
            syncMobileMenu(specimen);

            const button = specimen.querySelector('.header-specimen__menu-button');
            if (button) {
              button.addEventListener('click', () => {
                specimen.dataset.menuOpen = specimen.dataset.menuOpen === 'true' ? 'false' : 'true';
                syncMobileMenu(specimen);
              });
            }
          });

          article.querySelectorAll('.header-specimen__toggle-input').forEach((input) => {
            input.addEventListener('change', () => {
              input.setAttribute('aria-checked', String(input.checked));
            });
          });
        })();
      </script>

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
  title: 'Organisms/Headers',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Documentation = () => createHeadersDocumentation();
