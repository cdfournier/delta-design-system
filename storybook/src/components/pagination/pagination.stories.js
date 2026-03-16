function createPaginationDocumentation() {
  return `
    <style>
      .delta-docs .pagination-specimen-nav {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .delta-docs .pagination-specimen {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        margin: 0;
        padding: var(--spacing-md) var(--spacing-xl);
        border-radius: var(--border-radius-xxl);
        background: var(--page-background);
        list-style: none;
      }

      [data-color-mode='dark'] .delta-docs .pagination-specimen {
        background: var(--brand-secondary);
      }

      .delta-docs .pagination-specimen__item {
        display: flex;
      }

      .delta-docs .pagination-specimen__dot {
        width: var(--components-pagination-dot-size);
        height: var(--components-pagination-dot-size);
        padding: 0;
        border: var(--components-pagination-dot-border-width) solid var(--neutral-gray-medium);
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
      }

      .delta-docs .pagination-specimen__dot--selected {
        background: var(--neutral-gray-medium);
        border-color: var(--neutral-gray-medium);
      }
    </style>
    <article class="delta-docs">
      <h1>Pagination</h1>
      <p>Pagination provides visual navigation for carousels, slideshows, and multi-step flows. Dot indicators show the current position and total number of pages or slides.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Pagination consists of:</p>
      <ul>
        <li><strong>Nav container:</strong> Semantic <code>&lt;nav&gt;</code> wrapper that identifies the control to assistive technology.</li>
        <li><strong>List (ul):</strong> Inner container providing the pill-shaped background, padding, and gap between indicators.</li>
        <li><strong>Indicator buttons:</strong> Individual interactive elements — one per page or slide — rendered as <code>&lt;button&gt;</code> elements inside <code>&lt;li&gt;</code> items.</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Pagination anatomy specimen">
        <nav class="pagination-specimen-nav" aria-label="Pagination">
          <ul class="pagination-specimen">
            <li class="pagination-specimen__item">
              <button class="pagination-specimen__dot pagination-specimen__dot--selected" type="button" aria-label="Page 1" aria-current="page"></button>
            </li>
            <li class="pagination-specimen__item">
              <button class="pagination-specimen__dot" type="button" aria-label="Page 2"></button>
            </li>
            <li class="pagination-specimen__item">
              <button class="pagination-specimen__dot" type="button" aria-label="Page 3"></button>
            </li>
            <li class="pagination-specimen__item">
              <button class="pagination-specimen__dot" type="button" aria-label="Page 4"></button>
            </li>
          </ul>
        </nav>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Pagination currently supports one indicator type. Additional types may be introduced in future releases.</p>
      <ul>
        <li><strong>Dot (default):</strong> A small circular indicator. The selected state is filled; unselected indicators show only a border. Suitable for carousels, slideshows, and onboarding flows with up to 10 steps.</li>
      </ul>

      <hr />

      <h2>States</h2>

      <ul>
        <li><strong>Default:</strong> Unselected indicators display a circular border with a transparent fill, using the <code>global/gray-medium</code> color token.</li>
        <li><strong>Selected:</strong> The current page or slide indicator is filled. Both fill and border use <code>global/gray-medium</code> (#CCCCCC) in light and dark mode. Only one indicator is selected at a time.</li>
        <li><strong>Hover:</strong> On pointer hover, the indicator fills with <code>global/gray-medium</code> (#CCCCCC) — the same appearance as the selected state.</li>
        <li><strong>Focus:</strong> Keyboard focus displays a 2px outline using the primary color token (<code>#FF5247</code>) with a 4px offset, ensuring the focus ring is visible against both the pill background and the page surface.</li>
      </ul>

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
            <td>padding-left, padding-right</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>padding-top, padding-bottom</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>gap</td>
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
            <th>Attribute</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Container (list)</td>
            <td><code>border-radius/xxl</code></td>
            <td>2rem / 32px</td>
            <td>4rem / 64px</td>
          </tr>
          <tr>
            <td>Indicator buttons</td>
            <td>—</td>
            <td colspan="2">50% (circular, fixed)</td>
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
            <td>Container background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Indicator border</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Indicator fill — default</td>
            <td>—</td>
            <td>Transparent</td>
            <td>Transparent</td>
          </tr>
          <tr>
            <td>Indicator fill — hover, selected</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> The container background adapts to the active theme via the <code>page/background</code> token, resolving to <code>global/white</code> (#FFFFFF) in light mode and <code>brand/secondary-dark</code> (#01232D) in dark mode. Indicator border and fill colors use <code>global/gray-medium</code> (#CCCCCC) throughout — verify that #CCCCCC maintains sufficient contrast against the dark container background when implementing.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>Pagination must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab / Shift + Tab:</strong> Moves focus sequentially between indicator buttons.</li>
        <li><strong>Enter / Space:</strong> Activates the focused indicator and navigates to the corresponding page or slide.</li>
        <li><strong>Arrow keys (optional enhancement):</strong> May be used to move between indicators when the component uses a roving tabindex pattern.</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use a <code>&lt;nav&gt;</code> element with a descriptive <code>aria-label</code> (for example, "Pagination" or "Slideshow navigation") so screen readers announce the landmark. Indicator buttons must use <code>&lt;button&gt;</code> elements — not <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> — so they are announced as interactive controls. Wrap buttons in <code>&lt;li&gt;</code> items within a <code>&lt;ul&gt;</code> so the list structure is conveyed.</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>aria-label on nav:</strong> Describes the landmark — use "Pagination" for generic use cases or a more specific label such as "Slideshow navigation" when context allows.</li>
        <li><strong>aria-label on each button:</strong> Identifies the destination — for example, "Page 1" or "Slide 2 of 5". Include the total when it aids orientation.</li>
        <li><strong>aria-current="page":</strong> Applied to the currently selected indicator button to communicate the active position to screen reader users. Remove from all others.</li>
      </ul>

      <h3>Focus management</h3>
      <p>Each indicator button must display a visible focus indicator. The recommended implementation uses <code>outline</code> with <code>outline-offset</code> rather than a box shadow, so the ring remains legible against both the pill background and the surrounding page. Focus should not be programmatically moved when a dot is activated unless the associated content itself manages focus (for example, a modal or full-page transition).</p>

      <h3>Color contrast</h3>
      <p>The selected and hover indicator (#CCCCCC fill on white container in light mode; #CCCCCC fill on dark container in dark mode) meets the WCAG 2.1 AA 3:1 non-text contrast requirement in light mode — verify the contrast ratio in dark mode against the resolved <code>page/background</code> value (#01232D), as gray on dark teal is a lower-contrast pairing. The default indicator border (#CCCCCC on white) is below 3:1 — this is acceptable because shape and fill are the primary selected-state cues, not border color alone. The focus outline (#FF5247 on white) meets the 3:1 minimum.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use Pagination when you need to:</p>
      <ul>
        <li>Indicate position within an image carousel or slideshow.</li>
        <li>Show progress through an onboarding or setup flow.</li>
        <li>Navigate between sections in a multi-step form.</li>
        <li>Display the current slide in a presentation with a small, fixed number of slides (typically 2–10).</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use Pagination when:</p>
      <ul>
        <li>Content has more than 10 pages or steps — use a numbered pagination component instead, where specific pages can be identified and accessed directly.</li>
        <li>Users need to jump to a specific page by number — dot indicators do not communicate page numbers.</li>
        <li>The content is a data table or search results list — use a numbered pagination pattern with explicit page controls.</li>
        <li>Linear progression is not the primary interaction — consider a stepper or progress bar instead.</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>One indicator per page:</strong> Never show more or fewer dots than there are pages or slides.</li>
        <li><strong>Keep counts manageable:</strong> More than 10 indicators becomes difficult to scan and use. Consider capping visible indicators with an ellipsis pattern for larger sets.</li>
        <li><strong>Write descriptive aria-labels:</strong> Labels like "Slide 3 of 5" are more useful to screen reader users than "Page 3" alone when the total count provides meaningful context.</li>
      </ul>

      <h3>Placement</h3>
      <p>Position pagination below the associated content it controls, centered horizontally relative to the content area. Maintain consistent vertical spacing between the content and the pagination control. When paired with previous/next arrow buttons, keep the dots centered and place the arrows symmetrically on either side.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>

          <p><strong>Pair with previous/next controls</strong></p>
          <p>Include arrow buttons alongside the dots for easier sequential navigation, especially on touch devices where swiping may not be obvious.</p>

          <p><strong>Keep all indicators the same size</strong></p>
          <p>Uniform sizing makes the selected state (fill vs. empty) the clear differentiator, rather than scale or prominence.</p>

          <p><strong>Update the selected state immediately</strong></p>
          <p>The filled indicator must always reflect the current content position in real time, including when content advances automatically.</p>

          <p><strong>Ensure adequate touch targets</strong></p>
          <p>Expand the interactive area of each dot to at least 44×44px using padding or a pseudo-element, even if the visual dot remains small.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>

          <p><strong>Don't use for more than 10 pages</strong></p>
          <p>Beyond 10 indicators the component becomes unwieldy. Switch to a numbered pagination pattern that lets users identify and reach specific pages.</p>

          <p><strong>Don't rely on color alone</strong></p>
          <p>The selected state must be distinguishable through fill and shape, not just color, to remain accessible to users with color vision deficiencies.</p>

          <p><strong>Don't omit keyboard support</strong></p>
          <p>Every dot must be reachable and activatable by keyboard. Do not suppress focus outlines or leave indicators as non-focusable elements.</p>

          <p><strong>Don't use dots as purely decorative indicators</strong></p>
          <p>If the dots are not interactive, they should not be rendered as buttons. Use a different component — such as a progress indicator — for non-interactive position tracking.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Basic pagination --&gt;
&lt;nav aria-label="Pagination"&gt;
  &lt;ul class="pagination"&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot selected"
              aria-label="Page 1"
              aria-current="page"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Page 2"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Page 3"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Page 4"&gt;&lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;!-- Slideshow pagination with total count in labels --&gt;
&lt;nav aria-label="Slideshow navigation"&gt;
  &lt;ul class="pagination"&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot selected"
              aria-label="Slide 1 of 5"
              aria-current="page"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Slide 2 of 5"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Slide 3 of 5"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Slide 4 of 5"&gt;&lt;/button&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;button class="pagination-dot"
              aria-label="Slide 5 of 5"&gt;&lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Nav container */
.pagination-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pagination list — pill container */
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--md);           /* 0.5rem / 8px mobile */
  padding: var(--md) var(--xl); /* 0.5rem 1rem / 8px 16px mobile */
  background-color: var(--page-background);
  border-radius: var(--border-radius-xxl); /* 2rem / 32px mobile */
  list-style: none;
}

@media (min-width: 80rem) {
  .pagination {
    gap: var(--md);           /* 1rem / 16px widescreen */
    padding: var(--md) var(--xl); /* 1rem 2rem / 16px 32px widescreen */
    border-radius: var(--border-radius-xxl); /* 4rem / 64px widescreen */
  }
}

/* Indicator dot */
.pagination-dot {
  position: relative;
  padding: 0;
  border: 2px solid var(--global-gray-medium); /* #CCCCCC */
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

/* Expanded touch target */
.pagination-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Touch target expanded to 44px minimum via padding or layout */
}

/* Selected and hover state */
.pagination-dot.selected,
.pagination-dot[aria-current="page"],
.pagination-dot:hover {
  background-color: var(--global-gray-medium); /* #CCCCCC */
  border-color: var(--global-gray-medium);
}

/* Focus state */
.pagination-dot:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 4px;
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>// Basic pagination — update selected state and sync with content
const dots = document.querySelectorAll('.pagination-dot');
let currentIndex = 0;

function updatePagination(index) {
  dots.forEach(dot => {
    dot.classList.remove('selected');
    dot.removeAttribute('aria-current');
  });

  dots[index].classList.add('selected');
  dots[index].setAttribute('aria-current', 'page');

  currentIndex = index;
}

// Click handler
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updatePagination(index);
    navigateToPage(index);
  });
});

// Implement based on your content structure
function navigateToPage(index) {
  console.log(\`Navigate to page \${index + 1}\`);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Spacing */
--md                  Mobile: 0.5rem / 8px   →   Widescreen: 1rem / 16px
--xl                  Mobile: 1rem / 16px    →   Widescreen: 2rem / 32px

/* Border-radius */
--border-radius-xxl   Mobile: 2rem / 32px   →   Widescreen: 4rem / 64px

/* Colors */
--page-background     Light: #FFFFFF   Dark: #01232D
--global-gray-medium  Light: #CCCCCC   Dark: #CCCCCC</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/carousel/" target="_blank">ARIA: Carousel Pattern</a> — W3C guidance for carousel navigation and pagination controls</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav" target="_blank">MDN: nav element</a> — Semantic navigation documentation</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current" target="_blank">MDN: aria-current</a> — Usage and browser support</li>
        <li><a href="https://www.nngroup.com/articles/mobile-carousels/" target="_blank">Nielsen Norman Group: Carousels</a> — UX best practices for carousel navigation</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Pagination',
};

export default meta;

export const Documentation = () => createPaginationDocumentation();
