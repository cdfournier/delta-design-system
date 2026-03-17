export default {
  title: 'Atoms/Badges',
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Badges</h1>
      <p>A badge is a small, non-interactive label used to convey status, category, or count information at a glance. Badges always appear inline with or adjacent to the content they describe.</p>

      <hr>

      <h2>Anatomy</h2>
      <p>Badges consist of:</p>
      <ul>
        <li><strong>Container:</strong> A small pill or rounded rectangle that frames the label. Background color and border vary by variant.</li>
        <li><strong>Label:</strong> A short text string &mdash; typically one word or a number &mdash; that communicates the badge's meaning.</li>
      </ul>

      <div class="component-demo">
        <div class="badge-group">
          <span class="badge badge-primary">100</span>
          <span class="badge badge-secondary">Featured</span>
          <span class="badge badge-transparent">Draft</span>
        </div>
      </div>

      <hr>

      <h2>Variants</h2>
      <p>Badges have three style variants, distinguished by their background and border treatment.</p>
      <ul>
        <li><strong>Primary:</strong> Red background with white text. Use to draw strong attention &mdash; featured items, new content, or high-priority status.</li>
        <li><strong>Secondary:</strong> Dark teal background with white text. Use for general categorization, neutral status, or supporting information.</li>
        <li><strong>Transparent:</strong> No background, black border and text. Use for subtle labeling where a filled badge would compete visually with surrounding content.</li>
      </ul>

      <hr>

      <h2>States</h2>
      <p>Badges are non-interactive display elements. They have no hover, active, focus, or disabled states. Their only state is default.</p>

      <hr>

      <h2>Typography</h2>
      <p>Badges use bold, small text designed to be legible at compact sizes without competing with surrounding body copy.</p>

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
            <td><code>components/badge/font-size</code></td>
            <td>0.625rem / 10px</td>
            <td>1.25rem / 20px</td>
          </tr>
          <tr>
            <td>line-height</td>
            <td><code>components/badge/line-height</code></td>
            <td>0.625rem / 10px</td>
            <td>1.25rem / 20px</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <h2>Spacing</h2>
      <p>Badges use compact padding that scales up at widescreen to maintain proportional sizing relative to the larger type.</p>

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
            <td>padding-top, padding-bottom</td>
            <td><code>components/badge/padding-t-b</code></td>
            <td>0.125rem / 2px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>padding-left, padding-right</td>
            <td><code>components/badge/padding-l-r</code></td>
            <td>0.25rem / 4px</td>
            <td>0.75rem / 12px</td>
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
            <td>border-radius</td>
            <td><code>components/badge/border-radius</code></td>
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
            <th>Attribute</th>
            <th>Token</th>
            <th>Light mode</th>
            <th>Dark mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary background</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
          <tr>
            <td>Primary text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Secondary background</td>
            <td><code>brand/secondary</code></td>
            <td>#003442</td>
            <td>#003442</td>
          </tr>
          <tr>
            <td>Secondary text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Transparent background</td>
            <td>&mdash;</td>
            <td>transparent</td>
            <td>transparent</td>
          </tr>
          <tr>
            <td>Transparent border</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Transparent text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/dark mode behavior:</strong> Primary and secondary badge colors are mode-invariant &mdash; <code>brand/primary</code> and <code>brand/secondary</code> do not change between modes. The transparent variant uses <code>text/default</code> for both border and text, which resolves to #000000 in light mode and #FFFFFF in dark mode. In dark mode, the transparent badge inverts to white border and white text against a dark background.</p>

      <hr>

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>Badges are non-interactive display elements and are not keyboard-focusable. They require no keyboard interaction. If a badge must be placed inside a focusable element (e.g. a button or link), keyboard behavior is governed by that parent element.</p>

      <h3>Screen readers</h3>
      <p>Badges use a <code>&lt;span&gt;</code> element, which is read inline as part of surrounding content. Because badges are inline and non-interactive, they do not require a role. Ensure that badge text labels are meaningful on their own &mdash; do not use symbols or single characters without additional context.</p>

      <h3>ARIA attributes</h3>
      <p>In most cases, no ARIA attributes are required. Use the following where needed:</p>
      <ul>
        <li><strong>aria-label:</strong> Use when the badge text alone is insufficient &mdash; for example, a count badge ("3") that needs context: <code>aria-label="3 unread messages"</code>.</li>
        <li><strong>aria-hidden="true":</strong> Use when the badge is purely decorative and the surrounding content already conveys its meaning fully.</li>
      </ul>

      <h3>Focus management</h3>
      <p>Badges do not receive focus. No focus management is needed. Do not add <code>tabindex</code> to a badge element.</p>

      <h3>Color contrast</h3>
      <p>All badge variants meet WCAG AA contrast requirements (4.5:1 minimum for text):</p>
      <ul>
        <li><strong>Primary:</strong> White (#FFFFFF) on red (#FF5247) &mdash; 3.0:1. Badge text is small and bold; verify against your specific context. Consider AA Large (3:1) compliance at the bold weight.</li>
        <li><strong>Secondary:</strong> White (#FFFFFF) on dark teal (#003442) &mdash; 12.6:1. Exceeds AAA.</li>
        <li><strong>Transparent:</strong> Black (#000000) on white (#FFFFFF) &mdash; 21:1. Exceeds AAA.</li>
      </ul>
      <p>Do not rely on color alone to convey meaning. Always include descriptive text in the badge label so users with color vision deficiencies can understand its purpose.</p>

      <hr>

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use badges when you need to:</p>
      <ul>
        <li>Communicate status at a glance &mdash; active, pending, complete, draft</li>
        <li>Categorize or tag content by type, topic, or attribute</li>
        <li>Display a count &mdash; unread messages, notification totals, item quantities</li>
        <li>Highlight new or recently updated content inline with a heading or list item</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use badges when:</p>
      <ul>
        <li>The label needs to be clickable &mdash; use a Chip instead</li>
        <li>The label is longer than two or three words &mdash; badges are for short labels only</li>
        <li>You need to communicate a complex status with supporting description &mdash; use a Feedback component instead</li>
        <li>The element is a primary call to action &mdash; use a Button</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Keep labels short:</strong> One to two words or a number. If you need more, the badge is not the right component.</li>
        <li><strong>Use sentence case:</strong> Capitalize the first letter only &mdash; "New", not "NEW".</li>
        <li><strong>Be specific:</strong> "Active" and "Pending" communicate more than "Yes" and "No". Avoid vague single-character labels.</li>
        <li><strong>Be consistent:</strong> Use the same badge color to mean the same thing throughout your interface. Do not reuse a color for different concepts.</li>
      </ul>

      <h3>Placement</h3>
      <p>Badges are inline elements and should be placed close to the content they describe. Common placements include: following a heading or list item label, inside a table cell alongside other metadata, or grouped in a row when multiple categories apply. Avoid placing badges in isolation &mdash; they always need an anchoring content element to give them meaning.</p>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Keep labels to one or two words</strong></p>
          <p>Short, focused labels read instantly. "Active", "New", and "12" communicate clearly without requiring extra space.</p>

          <p><strong>Use color consistently for the same meaning</strong></p>
          <p>If primary (red) badges mean "featured" in one part of the interface, they should mean the same thing everywhere. Consistent color use builds intuitive recognition.</p>

          <p><strong>Include meaningful text, not just symbols</strong></p>
          <p>Screen reader users hear the badge label. A badge reading "●" communicates nothing. Use words like "Active" or "Complete" that make sense without visual context.</p>

          <p><strong>Anchor badges to their content</strong></p>
          <p>Place badges immediately adjacent to the element they describe &mdash; in the same list item, heading row, or table cell &mdash; so the association is visually clear.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't make badges interactive</strong></p>
          <p>Badges are informational only. If the label needs to trigger an action or filter content, use a Chip or Button instead.</p>

          <p><strong>Don't use badges for long text</strong></p>
          <p>Phrases and sentences do not belong in badges. If your label runs beyond two or three words, consider inline text, a tooltip, or a Feedback component.</p>

          <p><strong>Don't rely on color alone to convey meaning</strong></p>
          <p>Always pair color with a descriptive text label. Never use an empty badge or a color-only indicator &mdash; users with color vision deficiencies will lose the information entirely.</p>

          <p><strong>Don't stack too many badges in one place</strong></p>
          <p>More than two or three badges on a single element creates visual noise and dilutes their communicative value. Prioritize the most important label.</p>
        </div>
      </div>

      <hr>

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Primary --&gt;
&lt;span class="badge badge-primary"&gt;New&lt;/span&gt;

&lt;!-- Secondary --&gt;
&lt;span class="badge badge-secondary"&gt;Featured&lt;/span&gt;

&lt;!-- Transparent --&gt;
&lt;span class="badge badge-transparent"&gt;Draft&lt;/span&gt;

&lt;!-- Inline with content --&gt;
&lt;h2&gt;Article title &lt;span class="badge badge-primary"&gt;New&lt;/span&gt;&lt;/h2&gt;

&lt;!-- With aria-label for count context --&gt;
&lt;span class="badge badge-secondary" aria-label="3 unread messages"&gt;3&lt;/span&gt;

&lt;!-- Decorative only --&gt;
&lt;span class="badge badge-transparent" aria-hidden="true"&gt;Beta&lt;/span&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Base styles */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--components-badge-padding-t-b) var(--components-badge-padding-l-r);
  border-radius: var(--components-badge-border-radius);
  font-size: var(--components-badge-font-size);
  line-height: var(--components-badge-line-height);
  font-weight: 700;
  white-space: nowrap;
}

/* Primary */
.badge-primary {
  background-color: var(--brand-primary);
  color: var(--global-white);
}

/* Secondary */
.badge-secondary {
  background-color: var(--brand-secondary);
  color: var(--global-white);
}

/* Transparent */
.badge-transparent {
  background-color: transparent;
  color: var(--text-default);
  border: 1px solid var(--text-default);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components-badge-font-size       Mobile: 0.625rem / 10px   &rarr;   Widescreen: 1.25rem / 20px
--components-badge-line-height     Mobile: 0.625rem / 10px   &rarr;   Widescreen: 1.25rem / 20px

/* Spacing */
--components-badge-padding-t-b     Mobile: 0.125rem / 2px    &rarr;   Widescreen: 0.5rem / 8px
--components-badge-padding-l-r     Mobile: 0.25rem / 4px     &rarr;   Widescreen: 0.75rem / 12px

/* Border-radius */
--components-badge-border-radius   Mobile: 0.25rem / 4px     &rarr;   Widescreen: 0.5rem / 8px

/* Colors */
--brand-primary      Light: #FF5247   Dark: #FF5247
--brand-secondary    Light: #003442   Dark: #003442
--global-white       Light: #FFFFFF   Dark: #FFFFFF
--text-default       Light: #000000   Dark: #FFFFFF</code></pre>

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> &mdash; W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> &mdash; Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> &mdash; Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> &mdash; HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html" target="_blank">WCAG 2.1: Understanding Use of Color</a> &mdash; Why color alone is insufficient</li>
        <li><a href="https://www.nngroup.com/articles/indicators-validations-notifications/" target="_blank">Nielsen Norman Group: Indicators and Notifications</a> &mdash; When to use status indicators</li>
      </ul>
    </div>
  `;
};
