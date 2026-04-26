export default {
  title: 'Molecules/Details',
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Initial open state',
      table: { defaultValue: { summary: 'false' } },
    },
    summaryText: {
      control: { type: 'text' },
      description: 'Summary text',
    },
    bodyText: {
      control: { type: 'text' },
      description: 'Body text',
    },
  },
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Details</h1>
      <p>An expandable disclosure component that reveals and hides content. Details provide progressive disclosure, allowing users to access additional information on demand while keeping interfaces clean and focused.</p>

      <hr>

      <h2>Anatomy</h2>
      <p>The Details component consists of:</p>
      <ul>
        <li><strong>Container:</strong> Bordered wrapper with rounded corners</li>
        <li><strong>Summary:</strong> Always-visible header with text and icon that triggers expansion</li>
        <li><strong>Icon:</strong> Plus (+) when collapsed, minus (−) when expanded</li>
        <li><strong>Body:</strong> Expandable content area, hidden when collapsed</li>
      </ul>

      <div class="component-demo">
        <details class="details">
          <summary class="details-summary">
            <span>Summary</span>
            <span class="details-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </span>
          </summary>
          <div class="details-body">
            <p>Body</p>
          </div>
        </details>
      </div>

      <hr>

      <h2>Variants</h2>
      <p>The Details component has no visual variants. Its appearance changes based solely on its state (collapsed or expanded).</p>

      <hr>

      <h2>States</h2>
      <ul>
        <li><strong>Collapsed (default):</strong> Shows only the summary with a plus (+) icon. Body content is hidden.</li>
        <li><strong>Expanded:</strong> The icon changes to minus (−) and body content becomes visible below the summary.</li>
      </ul>

      <div class="component-demo" style="display: flex; gap: var(--spacing-xl); flex-wrap: wrap; align-items: flex-start;">
        <details class="details" style="flex: 1; min-width: 250px;">
          <summary class="details-summary">
            <span>Summary</span>
            <span class="details-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </span>
          </summary>
          <div class="details-body">
            <p>Body</p>
          </div>
        </details>
        <details class="details" open style="flex: 1; min-width: 250px;">
          <summary class="details-summary">
            <span>Summary</span>
            <span class="details-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
            </span>
          </summary>
          <div class="details-body">
            <p>Body</p>
          </div>
        </details>
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
            <td><code>p/font-size</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>line-height</td>
            <td><code>p/line-height</code></td>
            <td>1.5rem / 24px</td>
            <td>2.25rem / 36px</td>
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
            <td>padding</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>gap</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
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
            <td>Container</td>
            <td><code>border-radius/sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
        </tbody>
      </table>

      <hr>

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
            <td>Container border</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Text and icon</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Details components adapt to light and dark modes through text/default token. Border color remains consistent across modes for visual definition.</p>

      <hr>

      <h2>Accessibility</h2>
      <p>Use native HTML <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements whenever possible — they provide built-in keyboard accessibility, screen reader support, and progressive disclosure without JavaScript. Custom implementations must replicate this behavior using ARIA attributes. Progressive disclosure benefits all users, particularly those using assistive technology, by keeping interfaces simpler by default and revealing complexity only when needed.</p>

      <h3>Keyboard navigation</h3>
      <p>Details components must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the summary (trigger)</li>
        <li><strong>Enter or Space:</strong> Toggles expanded/collapsed state</li>
        <li><strong>Tab:</strong> When expanded, allows navigation into body content</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Native <code>&lt;details&gt;</code> elements are announced with their current state. Custom implementations require proper ARIA attributes:</p>
      <ul>
        <li><strong>role="button":</strong> On the summary/trigger element</li>
        <li><strong>aria-expanded:</strong> "true" when expanded, "false" when collapsed</li>
        <li><strong>aria-controls:</strong> Links trigger to the content region</li>
      </ul>

      <h3>Focus management</h3>
      <p>The summary element must display a clear focus indicator. Content within the expanded body should be keyboard accessible and properly announced by screen readers.</p>

      <h3>Touch targets</h3>
      <p>All interactive elements must meet minimum touch target requirements:</p>
      <ul>
        <li>Minimum 44×44px touch target for the summary trigger</li>
        <li>The icon container (28×28px) is supplementary — the full summary row is the interactive target</li>
      </ul>

      <h3>Color contrast</h3>
      <p>Text and icon colors use the <code>text/default</code> token, which resolves to #000000 on light backgrounds and #FFFFFF on dark. Both meet WCAG AA contrast requirements against their respective background colors. The border color (<code>global/gray-medium</code>, #CCCCCC) is decorative and not subject to contrast requirements.</p>

      <hr>

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use Details components when you need to:</p>
      <ul>
        <li>Progressively disclose secondary or supplementary information</li>
        <li>Build FAQ sections or help documentation</li>
        <li>Create expandable lists or nested navigation</li>
        <li>Hide advanced options or settings until needed</li>
        <li>Reduce visual clutter while keeping information accessible</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use Details when:</p>
      <ul>
        <li>Information is critical and must be immediately visible</li>
        <li>Users need to scan multiple items quickly (use visible lists instead)</li>
        <li>Content should be searchable or indexable (hidden content may not be indexed)</li>
        <li>Building primary navigation (use appropriate navigation components)</li>
      </ul>

      <h3>Content guidelines</h3>
      <p>Best practices for Details content:</p>
      <ul>
        <li><strong>Write clear summaries:</strong> Summary text should accurately describe the hidden content</li>
        <li><strong>Keep summaries concise:</strong> Use 3-8 words that clearly indicate what's inside</li>
        <li><strong>Structure body content clearly:</strong> Use headings, lists, and paragraphs for scannable content</li>
        <li><strong>Consider default state:</strong> Important content shouldn't be hidden by default</li>
        <li><strong>Avoid nesting deeply:</strong> More than 2 levels of nested Details becomes difficult to navigate</li>
      </ul>

      <h3>Placement</h3>
      <p>Details components can appear anywhere secondary or supplementary content needs to be progressively disclosed — inline within body copy, stacked as a list for FAQ sections, or grouped in a sidebar. When stacking multiple Details in a list, use consistent spacing between items (<code>md</code> token). Avoid placing Details inside already-constrained containers such as narrow cards or modal bodies where expanded content may create layout issues.</p>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Use for supplementary information</strong></p>
          <p>Details work best for content that adds value but isn't essential to understanding the main flow.</p>

          <p><strong>Write descriptive summaries</strong></p>
          <p>Summary text should clearly indicate what users will find when they expand the section.</p>

          <p><strong>Use native HTML when possible</strong></p>
          <p>The native details/summary elements provide built-in accessibility and require less JavaScript.</p>

          <p><strong>Group related Details together</strong></p>
          <p>Multiple Details in a list create an effective accordion pattern for FAQs or help content.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't hide critical information</strong></p>
          <p>Essential content, warnings, or key instructions should always be visible, not hidden in Details.</p>

          <p><strong>Don't nest too deeply</strong></p>
          <p>More than 2 levels of nested Details creates confusing navigation and cognitive load.</p>

          <p><strong>Don't use for primary content</strong></p>
          <p>Main page content should be visible. Details are for supplementary or optional information.</p>

          <p><strong>Don't remove focus indicators</strong></p>
          <p>The summary must have a clear focus state for keyboard navigation accessibility.</p>
        </div>
      </div>

      <hr>

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Native HTML implementation (recommended) --&gt;
&lt;details class="details"&gt;
  &lt;summary class="details-summary"&gt;
    &lt;span&gt;Summary&lt;/span&gt;
    &lt;span class="details-icon" aria-hidden="true"&gt;
      &lt;svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"&gt;
        &lt;path d="M12 5v14M5 12h14"/&gt;
      &lt;/svg&gt;
    &lt;/span&gt;
  &lt;/summary&gt;
  &lt;div class="details-body"&gt;
    &lt;p&gt;Body content revealed when expanded.&lt;/p&gt;
  &lt;/div&gt;
&lt;/details&gt;

&lt;!-- Multiple Details (accordion pattern) --&gt;
&lt;div class="details-group"&gt;
  &lt;details class="details"&gt;
    &lt;summary class="details-summary"&gt;
      &lt;span&gt;Question 1&lt;/span&gt;
      &lt;span class="details-icon" aria-hidden="true"&gt;+&lt;/span&gt;
    &lt;/summary&gt;
    &lt;div class="details-body"&gt;
      &lt;p&gt;Answer to question 1.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/details&gt;
  
  &lt;details class="details"&gt;
    &lt;summary class="details-summary"&gt;
      &lt;span&gt;Question 2&lt;/span&gt;
      &lt;span class="details-icon" aria-hidden="true"&gt;+&lt;/span&gt;
    &lt;/summary&gt;
    &lt;div class="details-body"&gt;
      &lt;p&gt;Answer to question 2.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/details&gt;
&lt;/div&gt;

&lt;!-- Custom implementation with ARIA --&gt;
&lt;div class="details"&gt;
  &lt;button class="details-summary" 
          aria-expanded="false" 
          aria-controls="content-1"&gt;
    &lt;span&gt;Summary&lt;/span&gt;
    &lt;span class="details-icon" aria-hidden="true"&gt;+&lt;/span&gt;
  &lt;/button&gt;
  &lt;div id="content-1" class="details-body" hidden&gt;
    &lt;p&gt;Body content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Details container */
.details {
  padding: var(--md);
  border: 1px solid var(--global\/gray-medium);
  border-radius: var(--border-radius\/sm);
  display: flex;
  flex-direction: column;
  gap: var(--sm);
}

@media (min-width: 80rem) {
  .details {
    padding: var(--md);
    gap: var(--sm);
  }
}

/* Summary */
.details-summary {
  display: flex;
  align-items: center;
  gap: var(--sm);
  cursor: pointer;
  font-size: var(--p\/font-size);
  line-height: var(--p\/line-height);
  font-weight: 700;
  color: var(--text\/default);
  list-style: none;
  user-select: none;
}

/* Remove default marker */
.details-summary::-webkit-details-marker {
  display: none;
}

/* Icon container */
.details-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: var(--sm);
  margin-left: auto;
}

.details-icon svg {
  display: block;
  stroke: currentColor;
}

/* Body content */
.details-body {
  font-size: var(--p\/font-size);
  line-height: var(--p\/line-height);
  color: var(--text\/default);
}

/* Icon change on open (native details) */
details[open] .details-icon svg path:last-child {
  display: none;
}

/* Focus state */
.details-summary:focus {
  outline: 2px solid var(--brand\/primary);
  outline-offset: 2px;
}

/* Details group (accordion) */
.details-group .details + .details {
  margin-top: var(--sm);
}</code></pre>

      <h3>JavaScript</h3>
      <p>Native <code>&lt;details&gt;</code> requires no JavaScript. For custom implementations:</p>
      <pre><code>// Custom details toggle
const detailsTrigger = document.querySelector('.details-summary');
const detailsContent = document.querySelector('.details-body');

detailsTrigger.addEventListener('click', () => {
  const isExpanded = detailsTrigger.getAttribute('aria-expanded') === 'true';
  
  detailsTrigger.setAttribute('aria-expanded', !isExpanded);
  detailsContent.hidden = isExpanded;
  
  // Update icon
  const icon = detailsTrigger.querySelector('.details-icon');
  icon.textContent = isExpanded ? '+' : '−';
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Spacing */
--md                  Mobile: 0.5rem / 8px    →   Widescreen: 1rem / 16px
--sm                  Mobile: 0.25rem / 4px   →   Widescreen: 0.5rem / 8px

/* Border-radius */
--border-radius-sm    Mobile: 0.25rem / 4px   →   Widescreen: 0.5rem / 8px

/* Typography */
--p-font-size         Mobile: 1rem / 16px     →   Widescreen: 1.5rem / 24px
--p-line-height       Mobile: 1.5rem / 24px   →   Widescreen: 2.25rem / 36px

/* Colors */
--text-default        Light: #000000   Dark: #FFFFFF
--global-gray-medium  Light: #CCCCCC   Dark: #CCCCCC
--brand-primary       Light: #FF5247   Dark: #FF5247</code></pre>

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/" target="_blank">ARIA: Disclosure Pattern</a> — W3C guidance for expandable sections</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" target="_blank">MDN: details element</a> — Native HTML details documentation</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://inclusive-components.design/collapsible-sections/" target="_blank">Inclusive Components: Collapsible Sections</a> — Accessible accordion patterns</li>
      </ul>
    </div>
  `;
};

export const Playground = {
  tags: ['!autodocs'],
  args: {
    open: false,
    summaryText: 'Summary',
    bodyText: 'Body',
  },
  render: (args) => {
    return `
      <div class="delta-docs" style="padding: 32px 24px;">
        <div class="component-demo">
          <details class="details"${args.open ? ' open' : ''}>
            <summary class="details-summary">
              <span>${args.summaryText}</span>
              <span class="details-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14"/>
                  <path d="M12 5v14"/>
                </svg>
              </span>
            </summary>
            <div class="details-body">
              <p>${args.bodyText}</p>
            </div>
          </details>
        </div>
      </div>
    `;
  },
};
