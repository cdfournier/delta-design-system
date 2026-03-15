function createCardsDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Cards</h1>
      <p>Cards are flexible containers that group related content and actions. They provide a visual framework for organizing information in digestible, scannable sections across the interface.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>A card consists of:</p>
      <ul>
        <li><strong>Container:</strong> The card boundary — carries the background color, border, and border-radius</li>
        <li><strong>Figure (optional):</strong> Image or media content displayed above (vertical) or beside (horizontal) the content area</li>
        <li><strong>Content area:</strong> The text region containing heading and body text, drawn from the Content component</li>
      </ul>

      <p><strong>Note:</strong> Cards use the Content component for their text content area. See the Content component documentation for detailed specifications on headings, body text, and optional elements such as eyebrow, CTA, and footer.</p>

      <div class="delta-docs__placeholder" aria-label="Cards anatomy placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live card anatomy specimens will be added here.</p>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Cards come in two orientations — vertical and horizontal — with the horizontal variant offering a reversed figure position.</p>

      <h3>Vertical</h3>
      <p>The default card orientation with the figure on top and content below. Vertical cards support two height behaviors: <strong>Hug</strong> (height wraps the content) and <strong>Fill</strong> (card stretches to fill its container). They are suited to grid layouts, content galleries, and product listings.</p>

      <div class="delta-docs__placeholder" aria-label="Vertical card placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live vertical card specimens will be added here.</p>
      </div>

      <h3>Horizontal</h3>
      <p>Figure and content displayed side by side. The default places the figure on the left; the reversed sub-variant places it on the right. Horizontal cards work well for list layouts and featured content sections. On mobile, horizontal cards stack vertically, preserving the reading order of the horizontal layout: default cards (figure left) stack with the figure on top, while reversed cards (figure right) stack with content on top.</p>

      <div class="delta-docs__placeholder" aria-label="Horizontal card placeholder">
        <span class="delta-docs__placeholder-label">Step 2 Placeholder</span>
        <p>Live horizontal card specimens will be added here.</p>
      </div>

      <hr />

      <h2>Typography</h2>
      <p>Card typography is determined by the Content component. Users can select any heading level (h1–h4) and any body text style based on their needs. See the Content component documentation for all available typography options and specifications.</p>

      <hr />

      <h2>Spacing</h2>
      <p>The content area padding is the primary spacing token for cards. Width and height constraints are not documented here as they fall outside the token system.</p>

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
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
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
            <td>Card container</td>
            <td><code>border-radius/md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Figure</td>
            <td><code>border-radius/md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
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
            <td>Background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Border</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Cards adapt to light and dark modes through the <code>page/background</code> token for the card surface and <code>text/default</code> for content, ensuring readability in both contexts. The border color is mode-invariant. In dark mode, the card background resolves to <code>#01232D</code> (secondary-dark), which is distinct from the page background — verify contrast against your specific page surface in dark mode.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>Cards themselves are not interactive elements. Ensure any interactive elements within the card content area (links, buttons, form controls) are fully keyboard accessible. See the Content component documentation for specific keyboard navigation patterns.</p>

      <h3>Screen readers</h3>
      <p>Use semantic <code>&lt;article&gt;</code> elements for cards — each card should represent a self-contained piece of content with a meaningful heading. Images must include descriptive alt text; decorative images should use <code>alt=""</code>. When an entire card is clickable, the link text must be descriptive enough to stand alone in a list of links read by a screen reader.</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>aria-label:</strong> Use on a clickable card link when the visible heading alone may be ambiguous — e.g. <code>aria-label="Read more about [topic]"</code></li>
        <li><strong>aria-describedby:</strong> Use to associate supplementary body text with the card heading when the relationship is not implicit from document structure</li>
        <li><strong>aria-hidden="true":</strong> Apply to decorative images (those with <code>alt=""</code>) to remove them from the accessibility tree</li>
      </ul>

      <h3>Focus management</h3>
      <p>When a card contains interactive elements, ensure proper focus order proceeds logically from top to bottom. Focus should move naturally through the card's content without creating focus traps or unexpected jumps. All interactive elements must meet the minimum 44×44px touch target size; when the entire card is interactive, the full card surface serves as the touch target.</p>

      <h3>Color contrast</h3>
      <p>Card heading and body text (black on white) meets a contrast ratio well above the WCAG 2.1 Level AA requirement of 4.5:1. The border color (#CCCCCC on #FFFFFF) provides approximately 1.6:1 contrast — this is intentional as the border is a decorative structural element, not a text or interactive indicator. The hover border (#FF5247) provides sufficient contrast as an interactive state signal when paired with the box-shadow change.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use cards when you need to:</p>
      <ul>
        <li>Present collections of related content in a scannable format</li>
        <li>Create visual hierarchy and group related information</li>
        <li>Display content previews that link to detailed views</li>
        <li>Organize dashboard widgets or feature summaries</li>
        <li>Showcase products, articles, or media content</li>
        <li>Build responsive grid or list layouts</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use cards when:</p>
      <ul>
        <li>Content is too simple for a container — use plain text or lists instead</li>
        <li>A single piece of standalone content doesn't need visual separation from the surrounding page</li>
        <li>Adding visual weight would create unnecessary hierarchy where none is needed</li>
        <li>Building primary navigation — use appropriate navigation components</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Keep headings concise:</strong> Card headings should be brief and descriptive, typically 2–6 words</li>
        <li><strong>Limit body text:</strong> Keep body text to 1–3 sentences that provide essential context — cards are entry points, not destinations</li>
        <li><strong>Use relevant images:</strong> Images should be directly relevant to the content, properly sized, and optimized for performance</li>
        <li><strong>Maintain consistency within a group:</strong> Cards displayed together should use the same variant and carry parallel content structures</li>
        <li><strong>Provide clear affordances:</strong> When cards are clickable, make interactivity obvious through hover states rather than relying on implicit convention</li>
      </ul>

      <h3>Placement</h3>
      <p>Vertical cards are best suited to 2–4 column grid layouts — product galleries, article listings, or content previews. Horizontal cards work well in single-column list contexts, featured content sections, or anywhere a wider layout helps communicate hierarchy. Use the reversed (figure right) sub-variant sparingly and intentionally — it can create useful visual rhythm in alternating-row lists but should not be mixed randomly within a group. On mobile, all horizontal cards stack vertically, preserving the semantic reading order: default cards stack with the figure on top, reversed cards stack with content on top. Design for this from the start rather than treating it as a fallback. Maintain consistent gap values between cards in a grid — use the <code>xl</code> spacing token (16px mobile / 32px widescreen) as a baseline.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>
          <p><strong>Group related content together</strong></p>
          <p>Cards should contain information that naturally belongs together, creating clear mental models for users scanning the page.</p>
          <p><strong>Use consistent card variants within a group</strong></p>
          <p>Within a single row or grid, cards should share the same orientation and maintain consistent dimensions for visual harmony.</p>
          <p><strong>Design cards with similar information density</strong></p>
          <p>When displaying cards together, keep content amounts roughly balanced so cards feel cohesive and users can scan efficiently.</p>
          <p><strong>Optimize images for performance</strong></p>
          <p>Use appropriate image formats, compression, and lazy loading to ensure fast page loads, especially in card-heavy grid layouts.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>
          <p><strong>Don't overuse cards</strong></p>
          <p>Too many cards create visual clutter. Use them purposefully to organize meaningful content groups, not as a default wrapper for every piece of content.</p>
          <p><strong>Don't nest cards within cards</strong></p>
          <p>Nested cards create confusing hierarchy and reduce scannability. Keep card structure flat.</p>
          <p><strong>Don't use cards for single data points</strong></p>
          <p>Simple, isolated information doesn't need a card container. Reserve cards for grouped content with more than one element.</p>
          <p><strong>Don't mix card orientations randomly</strong></p>
          <p>Use consistent orientations within a section. Only vary strategically — for example, alternating reversed cards in a long list — not arbitrarily.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Vertical card (hug height) --&gt;
&lt;article class="card-vertical"&gt;
  &lt;figure class="figure"&gt;
    &lt;img src="image.jpg" alt="Descriptive alt text"&gt;
  &lt;/figure&gt;
  &lt;div class="content"&gt;
    &lt;h3&gt;Card heading&lt;/h3&gt;
    &lt;p&gt;Supporting body text that provides context and information.&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;

&lt;!-- Horizontal card (figure left) --&gt;
&lt;article class="card-horizontal"&gt;
  &lt;figure class="figure"&gt;
    &lt;img src="image.jpg" alt="Descriptive alt text"&gt;
  &lt;/figure&gt;
  &lt;div class="content"&gt;
    &lt;h3&gt;Card heading&lt;/h3&gt;
    &lt;p&gt;Supporting body text that provides context and information.&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;

&lt;!-- Horizontal card (figure right / reversed) --&gt;
&lt;article class="card-horizontal card-horizontal-reverse"&gt;
  &lt;figure class="figure"&gt;
    &lt;img src="image.jpg" alt="Descriptive alt text"&gt;
  &lt;/figure&gt;
  &lt;div class="content"&gt;
    &lt;h3&gt;Card heading&lt;/h3&gt;
    &lt;p&gt;Supporting body text that provides context and information.&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;
</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Base card */
.card {
  background-color: var(--page-background);
  border: 1px solid var(--global-gray-medium);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

/* Vertical card */
.card-vertical {
  display: flex;
  flex-direction: column;
}

/* Horizontal card */
.card-horizontal {
  display: flex;
  flex-direction: column;
}

@media (min-width: 48rem) {
  .card-horizontal {
    flex-direction: row;
  }
}

/* Reversed horizontal card */
.card-horizontal-reverse {
  flex-direction: row-reverse;
}

/* Figure */
.figure {
  overflow: hidden;
  border-radius: var(--border-radius-md);
  flex-shrink: 0;
}

.figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Content area */
.content {
  padding: var(--xl);
  display: flex;
  flex-direction: column;
  gap: var(--sm);
  flex: 1;
}
</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Spacing */
--xl                                          Mobile: 1rem / 16px    →   Widescreen: 2rem / 32px
--sm                                          Mobile: 0.25rem / 4px  →   Widescreen: 0.5rem / 8px

/* Border-radius */
--border-radius/md                            Mobile: 0.5rem / 8px   →   Widescreen: 1rem / 16px

/* Colors */
--page/background                             Light: #FFFFFF   Dark: #01232D
--global/gray-medium                          Light: #CCCCCC   Dark: #CCCCCC
--text/default                                Light: #000000   Dark: #FFFFFF
</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article" target="_blank">MDN: &lt;article&gt; element</a> — Semantic HTML for self-contained content</li>
        <li><a href="https://www.nngroup.com/articles/cards-component/" target="_blank">Nielsen Norman Group: Cards</a> — UX best practices for card components</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Cards',
};

export default meta;

export const Documentation = () => createCardsDocumentation();
