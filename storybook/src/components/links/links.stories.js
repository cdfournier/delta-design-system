function createLinksDocumentation() {
  return `
    <style>
      .delta-docs .link-specimen {
        display: inline-flex;
        align-items: center;
        gap: var(--components-link-gap-default);
        color: var(--text-link);
        font-family: var(--font-family-body);
        font-weight: var(--font-weight-bold);
        text-decoration: underline;
        text-decoration-thickness: from-font;
        text-underline-offset: var(--spacing-xs);
        transition: gap 0.2s ease, color 0.2s ease;
      }

      .delta-docs .link-specimen--hover {
        gap: var(--components-link-gap-hover);
        color: var(--text-hover);
      }

      .delta-docs .link-specimen--p {
        font-size: var(--components-link-p-font-size);
        line-height: var(--components-link-p-line-height);
      }

      .delta-docs .link-specimen--small {
        font-size: var(--components-link-small-font-size);
        line-height: var(--components-link-small-line-height);
      }

      .delta-docs .link-specimen--fine {
        font-size: var(--components-link-fine-font-size);
        line-height: var(--components-link-fine-line-height);
      }

      .delta-docs .link-specimen-row {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--components-link-demo-gap);
      }

      .delta-docs .link-specimen__label {
        white-space: nowrap;
      }

      .delta-docs .link-specimen__icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
      }

      .delta-docs .link-specimen--p .link-specimen__icon {
        width: var(--components-link-p-icon-size);
        height: var(--components-link-p-icon-size);
      }

      .delta-docs .link-specimen--small .link-specimen__icon {
        width: var(--components-link-small-icon-size);
        height: var(--components-link-small-icon-size);
      }

      .delta-docs .link-specimen--fine .link-specimen__icon {
        width: var(--components-link-fine-icon-size);
        height: var(--components-link-fine-icon-size);
      }

      .delta-docs .link-specimen__icon svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
        stroke-width: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        vector-effect: non-scaling-stroke;
      }
    </style>
    <article class="delta-docs">
      <h1>Links</h1>
      <p>Links are navigational elements that allow users to move between pages, sections, or external resources. They are fundamental to web navigation and must be clearly distinguishable from regular text.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>A link consists of:</p>
      <ul>
        <li><strong>Link text:</strong> The clickable text that describes the destination</li>
        <li><strong>Underline:</strong> Visual indicator that text is interactive (always present)</li>
        <li><strong>Arrow icon (optional):</strong> Directional indicator that appears to the right of the text</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Links anatomy specimen">
        <a class="link-specimen link-specimen--p" href="/link">
          <span class="link-specimen__label">Link</span>
          <span class="link-specimen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </span>
        </a>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Links are available in three sizes that correspond to typography scales, ensuring proper visual hierarchy and readability in different contexts.</p>

      <h3>P (Paragraph)</h3>
      <p>Standard link size for body text and primary navigation. This is the most commonly used size.</p>

      <div class="delta-docs__demo" aria-label="Paragraph link specimen">
        <a class="link-specimen link-specimen--p" href="/paragraph-size">
          <span class="link-specimen__label">Paragraph size</span>
          <span class="link-specimen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </span>
        </a>
      </div>

      <h3>Small</h3>
      <p>Compact link size suitable for navigation menus, lists, or supplementary content.</p>

      <div class="delta-docs__demo" aria-label="Small link specimen">
        <a class="link-specimen link-specimen--small" href="/small-size">
          <span class="link-specimen__label">Small size</span>
          <span class="link-specimen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </span>
        </a>
      </div>

      <h3>Fine</h3>
      <p>The smallest link size, used for secondary actions, footnotes, or dense layouts where space is limited.</p>

      <div class="delta-docs__demo" aria-label="Fine link specimen">
        <a class="link-specimen link-specimen--fine" href="/fine-size">
          <span class="link-specimen__label">Fine size</span>
          <span class="link-specimen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </span>
        </a>
      </div>

      <hr />

      <h2>States</h2>

      <h3>Default</h3>
      <p>The initial appearance of a link, using text/link color token.</p>

      <div class="delta-docs__demo" aria-label="Default link state specimen">
        <a class="link-specimen link-specimen--p" href="/default-link">
          <span class="link-specimen__label">Link</span>
          <span class="link-specimen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </span>
        </a>
      </div>

      <h3>Hover</h3>
      <p>When the user hovers over a link, the gap between text and arrow increases from 2px to 4px, and the color changes to text/hover.</p>

      <div class="delta-docs__demo" aria-label="Hover link state specimen">
        <a class="link-specimen link-specimen--p link-specimen--hover" href="/hover-link">
          <span class="link-specimen__label">Link</span>
          <span class="link-specimen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </span>
        </a>
      </div>

      <h3>Visited, focus, and active</h3>
      <p>The Delta Design System does not define custom visited, focus, or active states. These states are handled by browser defaults to ensure consistency with user expectations and accessibility standards.</p>

      <hr />

      <h2>Typography</h2>
      <p>Font size and line height scale with the typographic system across breakpoints.</p>

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
            <td>p font-size</td>
            <td><code>p/font-size</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>p line-height</td>
            <td><code>p/line-height</code></td>
            <td>1.5rem / 24px</td>
            <td>2.25rem / 36px</td>
          </tr>
          <tr>
            <td>small font-size</td>
            <td><code>small/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.25rem / 20px</td>
          </tr>
          <tr>
            <td>small line-height</td>
            <td><code>small/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.875rem / 30px</td>
          </tr>
          <tr>
            <td>fine font-size</td>
            <td><code>fine/font-size</code></td>
            <td>0.625rem / 10px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>fine line-height</td>
            <td><code>fine/line-height</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Spacing</h2>
      <p>The gap between link text and the arrow icon changes on hover, using the xs and sm spacing tokens.</p>

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
            <td>gap (default)</td>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>gap (hover)</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
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
            <td>Link text (default)</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Link text (hover)</td>
            <td><code>text/hover</code></td>
            <td>#003442 (brand/secondary)</td>
            <td>#FF5247 (brand/primary)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/dark mode behavior:</strong> In light mode, links use the primary brand color and change to secondary on hover. In dark mode, links are white at rest and change to primary on hover for visibility against dark backgrounds.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>Links must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the next link or interactive element</li>
        <li><strong>Shift + Tab:</strong> Moves focus to the previous link or interactive element</li>
        <li><strong>Enter:</strong> Activates the link and navigates to the destination</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use semantic HTML <code>&lt;a&gt;</code> elements for all links. Provide descriptive link text that makes sense out of context. Avoid generic phrases like "click here" or "read more" without additional context.</p>

      <h3>ARIA attributes</h3>
      <p>Key ARIA attributes for links:</p>
      <ul>
        <li><strong>aria-label:</strong> Provides additional context when link text alone is insufficient</li>
        <li><strong>aria-describedby:</strong> Links to additional descriptive content about the destination</li>
        <li><strong>aria-current:</strong> Indicates the current page in navigation (set to "page")</li>
        <li><strong>target="_blank":</strong> When opening in new tab, inform users with text or icon, and include <code>rel="noopener noreferrer"</code></li>
      </ul>

      <h3>Focus management</h3>
      <p>Links rely on browser default focus indicators which meet WCAG 2.1 Level AA requirements. Never remove focus indicators with CSS. The visible focus state is critical for keyboard navigation. On mobile, ensure links meet the minimum 44×44px touch target size — use padding to extend the clickable area beyond the visible text when necessary.</p>

      <h3>Color contrast</h3>
      <p>Link colors meet WCAG 2.1 Level AA contrast requirements. The primary brand color provides at least 4.5:1 contrast ratio against white backgrounds. In dark mode, white links provide sufficient contrast against dark backgrounds.</p>
      <p>Links must always be underlined to distinguish them from regular text. Never rely solely on color to indicate a link, as this creates barriers for colorblind users. The underline is a required visual indicator.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use links when you need to:</p>
      <ul>
        <li>Navigate to another page or view within your application</li>
        <li>Navigate to an external website or resource</li>
        <li>Jump to a specific section within the current page (anchor links)</li>
        <li>Provide access to downloadable files or documents</li>
        <li>Direct users to email addresses or phone numbers (mailto: and tel: links)</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use links when:</p>
      <ul>
        <li>Triggering actions like submitting forms, opening modals, or toggling UI elements — use buttons instead</li>
        <li>Performing operations that change data or state — use buttons instead</li>
        <li>Primary calls-to-action that don't navigate to a new destination — use buttons instead</li>
      </ul>
      <p>Remember: Links navigate, buttons act. If clicking performs an action rather than navigation, use a button.</p>

      <h3>Content guidelines</h3>
      <p>Guidelines for link content:</p>
      <ul>
        <li><strong>Write descriptive link text:</strong> Link text should clearly describe the destination. Avoid generic phrases like "click here."</li>
        <li><strong>Keep links concise:</strong> Use the minimum words necessary to describe the destination clearly.</li>
        <li><strong>Make link text unique:</strong> When multiple links appear together, ensure each has distinct, descriptive text.</li>
        <li><strong>Indicate external links:</strong> When linking to external sites, consider adding visual indication (arrow icon or text).</li>
        <li><strong>Use sentence case:</strong> Link text should use sentence case, matching the surrounding content.</li>
      </ul>
      <p>The arrow icon is optional and should be used strategically. Use it for external links, forward navigation or "next step" actions, calls-to-action within prose, or to emphasize important links. Don't use it on every link — reserve it for cases where direction needs emphasis.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>
          <p><strong>Always underline links</strong></p>
          <p>Underlines are required to distinguish links from regular text for all users, especially those with color blindness.</p>
          <p><strong>Write descriptive link text</strong></p>
          <p>Make link purpose clear from the text alone. "Download the annual report" is better than "click here."</p>
          <p><strong>Maintain consistent link styling</strong></p>
          <p>Use the same colors and underline treatment throughout your interface for predictability.</p>
          <p><strong>Open external links appropriately</strong></p>
          <p>When opening links in new tabs, inform users and include proper security attributes.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>
          <p><strong>Don't remove underlines</strong></p>
          <p>Links without underlines are hard to distinguish from regular text, creating accessibility barriers.</p>
          <p><strong>Don't use vague link text</strong></p>
          <p>Phrases like "click here" or "read more" without context are meaningless to screen reader users.</p>
          <p><strong>Don't use links for actions</strong></p>
          <p>If clicking triggers an action rather than navigation, use a button element instead of a link.</p>
          <p><strong>Don't force new windows</strong></p>
          <p>Let users decide how to open links. Only use target="_blank" when there's a clear reason (like external sites).</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Basic link --&gt;
&lt;a href="/about"&gt;About us&lt;/a&gt;

&lt;!-- Link with arrow icon --&gt;
&lt;a href="/learn-more" class="link-with-arrow"&gt;
  Learn more
  &lt;svg viewBox="0 0 16 16" aria-hidden="true"&gt;
    &lt;path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/&gt;
  &lt;/svg&gt;
&lt;/a&gt;

&lt;!-- External link --&gt;
&lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;
  Visit external site
  &lt;svg viewBox="0 0 16 16" aria-hidden="true"&gt;
    &lt;path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/&gt;
  &lt;/svg&gt;
&lt;/a&gt;

&lt;!-- Anchor link --&gt;
&lt;a href="#section-id"&gt;Jump to section&lt;/a&gt;

&lt;!-- Current page indicator --&gt;
&lt;a href="/products" aria-current="page"&gt;Products&lt;/a&gt;

&lt;!-- Link with additional context --&gt;
&lt;a href="/report.pdf" aria-label="Download 2024 Annual Report PDF"&gt;
  Download report
&lt;/a&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Base link styles */
a {
  color: var(--text-link);
  text-decoration: underline;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--text-hover);
}

/* Link with arrow */
.link-with-arrow {
  display: inline-flex;
  align-items: center;
  gap: var(--xs); /* 0.125rem / 2px mobile */
  transition: gap 0.2s ease, color 0.2s ease;
}

.link-with-arrow:hover {
  gap: var(--sm); /* 0.25rem / 4px mobile */
}

.link-with-arrow svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}

/* Size variants */
.link-fine {
  font-size: var(--fine-font-size);     /* 0.625rem / 10px mobile */
  line-height: var(--fine-line-height); /* 1rem / 16px mobile */
}

.link-small {
  font-size: var(--small-font-size);     /* 0.75rem / 12px mobile */
  line-height: var(--small-line-height); /* 1.25rem / 20px mobile */
}

.link-p {
  font-size: var(--p-font-size);      /* 1rem / 16px mobile */
  line-height: var(--p-line-height); /* 1.5rem / 24px mobile */
}

@media (min-width: 80rem) {
  :root {
    --fine-font-size:    1rem;
    --fine-line-height:  1.5rem;
    --small-font-size:   1.25rem;
    --small-line-height: 1.875rem;
    --p-font-size:       1.5rem;
    --p-line-height:     2.25rem;
    --xs:                0.25rem;
    --sm:                0.5rem;
  }

  .link-with-arrow {
    gap: var(--xs); /* 0.25rem / 4px widescreen */
  }

  .link-with-arrow:hover {
    gap: var(--sm); /* 0.5rem / 8px widescreen */
  }
}

/* Focus state */
a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--fine/font-size          Mobile: 0.625rem / 10px   →   Widescreen: 1rem / 16px
--fine/line-height        Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px
--small/font-size         Mobile: 0.75rem / 12px    →   Widescreen: 1.25rem / 20px
--small/line-height       Mobile: 1.25rem / 20px    →   Widescreen: 1.875rem / 30px
--p/font-size             Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px
--p/line-height           Mobile: 1.5rem / 24px     →   Widescreen: 2.25rem / 36px

/* Spacing */
--xs                      Mobile: 0.125rem / 2px    →   Widescreen: 0.25rem / 4px
--sm                      Mobile: 0.25rem / 4px     →   Widescreen: 0.5rem / 8px

/* Colors */
--text/link               Light: #FF5247   Dark: #FFFFFF
--text/hover              Light: #003442   Dark: #FF5247</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.nngroup.com/articles/writing-links/" target="_blank">Nielsen Norman Group: Writing Hyperlinks</a> — Best practices for link text</li>
        <li><a href="https://webaim.org/techniques/hypertext/" target="_blank">WebAIM: Links and Hypertext</a> — Accessible link design</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Atoms/Links',
};

export default meta;

export const Documentation = () => createLinksDocumentation();
