function createBlockquotesDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Blockquotes</h1>
      <p>Blockquotes render a styled quotation with a prominent accent border, quote text, and a cite attribution link. They support three orientation variants that control the position of the accent border and text alignment.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Blockquotes consist of:</p>
      <ul>
        <li><strong>Container:</strong> A flex column that holds the quote and cite elements, with padding and a gap between them</li>
        <li><strong>Accent border:</strong> A 4px solid border in <code>brand/primary</code> positioned according to the orientation variant</li>
        <li><strong>Quote text:</strong> The quoted content, rendered in bold using the <code>components/blockquote/quote</code> composite token</li>
        <li><strong>Cite text:</strong> An attribution link rendered in bold and underlined, using the <code>components/blockquote/cite</code> composite token</li>
      </ul>

      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the blockquote anatomy specimen exactly as shown in the verified reference documentation.</p>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Blockquotes have one property &mdash; <code>orientation</code> &mdash; with three values that control where the accent border appears and how the text aligns.</p>
      <ul>
        <li><strong>Left (default):</strong> 4px accent border on the left edge, text left-aligned. Use for standard inline quotations within flowing content.</li>
        <li><strong>Center:</strong> 4px accent border on the top and bottom edges, text center-aligned. Use for pull quotes or featured testimonials that deserve visual prominence.</li>
        <li><strong>Right:</strong> 4px accent border on the right edge, text right-aligned. Use when compositional balance in the layout calls for a mirrored treatment.</li>
      </ul>

      <hr />

      <h2>States</h2>
      <p>Blockquotes are static display components. The quote text has no interactive states. The cite element is an interactive link and inherits standard link states.</p>

      <hr />

      <h2>Typography</h2>
      <p>Both the quote and cite text use Montserrat Bold (700). Typography tokens are scoped under <code>components/blockquote/…</code> and scale responsively by aliasing to global typography tokens.</p>

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
            <td>Quote font-size</td>
            <td><code>components/blockquote/quote/font-size</code></td>
            <td>0.75rem / 12px (small)</td>
            <td>1.5rem / 24px (p)</td>
          </tr>
          <tr>
            <td>Quote line-height</td>
            <td><code>components/blockquote/quote/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>2.25rem / 36px</td>
          </tr>
          <tr>
            <td>Cite font-size</td>
            <td><code>components/blockquote/cite/font-size</code></td>
            <td>0.625rem / 10px (fine)</td>
            <td>1.25rem / 20px (small)</td>
          </tr>
          <tr>
            <td>Cite line-height</td>
            <td><code>components/blockquote/cite/line-height</code></td>
            <td>1rem / 16px</td>
            <td>1.875rem / 30px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Spacing</h2>
      <p>Padding and gap use global spacing tokens and scale responsively between mobile/tablet and widescreen.</p>

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
          <tr>
            <td>gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Colors</h2>
      <p>Blockquotes use semantic color tokens so they respond correctly to light and dark mode. The accent border color is the one exception &mdash; it uses <code>brand/primary</code> and does not change between modes.</p>

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
            <td>Accent border</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
          <tr>
            <td>Quote text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Cite text</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Dark mode note:</strong> In dark mode, both the quote text and cite text resolve to <code>global/white</code> (#FFFFFF), meaning the cite link loses its color distinction from the quote text. The solid underline decoration on the cite element becomes the primary visual differentiator.</p>

      <hr />

      <h2>Accessibility</h2>
      <p>Always use the <code>&lt;blockquote&gt;</code> element for quoted content. Never apply blockquote styling to non-quoted text. The cite attribution should be rendered as an <code>&lt;a&gt;</code> element when a source URL is available, wrapped inside a <code>&lt;cite&gt;</code> element.</p>

      <h3>Keyboard navigation</h3>
      <p>The cite link must be keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the cite link</li>
        <li><strong>Shift + Tab:</strong> Moves focus back to the previous focusable element</li>
        <li><strong>Enter:</strong> Activates the cite link</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Screen readers do not consistently announce the <code>&lt;blockquote&gt;</code> element, but the semantic HTML still provides correct document structure. Cite link text should describe the source clearly enough to be understood out of context.</p>

      <h3>ARIA attributes</h3>
      <p>Blockquotes rely on native HTML semantics and do not require additional ARIA attributes in standard usage. If the blockquote is part of a more complex interactive pattern, consider the following:</p>
      <ul>
        <li><strong>aria-label:</strong> Use on the cite link if the visible text alone does not clearly identify the source out of context</li>
        <li><strong>aria-describedby:</strong> May be used to associate introductory text with the blockquote when the surrounding context is not conveyed by the DOM order alone</li>
      </ul>

      <h3>Focus management</h3>
      <p>The blockquote container itself is not focusable. Focus applies only to the cite link when present. The cite link must have a visible focus indicator &mdash; the browser default is acceptable. Do not suppress the outline or replace it with a color-only indicator.</p>

      <h3>Color contrast</h3>
      <p>In dark mode, the cite link color changes from <code>brand/primary</code> to <code>global/white</code> to maintain sufficient contrast against the dark background. The underline decoration provides an additional non-color differentiator for users who cannot distinguish colors.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <ul>
        <li><strong>External quotes:</strong> Citing content from other sources or authors</li>
        <li><strong>Testimonials:</strong> Highlighting customer or user feedback</li>
        <li><strong>Pull quotes:</strong> Emphasizing key passages from your own content</li>
      </ul>

      <h3>When not to use</h3>
      <ul>
        <li><strong>Indentation only:</strong> Don&apos;t use blockquotes just to indent text &mdash; use margin or padding instead</li>
        <li><strong>Visual styling only:</strong> Don&apos;t use blockquotes for decorative purposes without actual quoted content</li>
        <li><strong>Short inline quotes:</strong> Use the <code>&lt;q&gt;</code> element for short, inline quotations within a paragraph</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Attribute all external quotes:</strong> Always provide a cite attribution when quoting another person or source</li>
        <li><strong>Keep quotes intact:</strong> Don&apos;t modify quoted text &mdash; use ellipses (…) to indicate omitted content</li>
        <li><strong>Write meaningful cite text:</strong> The cite link should identify the author and source clearly, not just say &quot;Source&quot; or &quot;Read more&quot;</li>
        <li><strong>Provide surrounding context:</strong> Introduce quotes with adjacent text that explains their relevance</li>
      </ul>

      <h3>Placement</h3>
      <p>Use <strong>left</strong> as the default for most contexts &mdash; it integrates naturally into flowing content. Use <strong>center</strong> when the quote deserves featured prominence, such as a hero testimonial or section break. Use <strong>right</strong> sparingly, and only when the surrounding layout specifically benefits from a mirrored composition.</p>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Use semantic HTML</strong></p>
          <p>Always use <code>&lt;blockquote&gt;</code> and <code>&lt;cite&gt;</code> tags for proper document structure.</p>

          <p><strong>Attribute external sources</strong></p>
          <p>Include a cite attribution with a link to the source when quoting external content.</p>

          <p><strong>Keep quotes accurate</strong></p>
          <p>Preserve the original wording. Use ellipses to indicate omitted content.</p>

          <p><strong>Introduce the quote</strong></p>
          <p>Provide surrounding text that gives the quote context and relevance.</p>
        </div>

        <div class="dont-section">
          <h3>Don&apos;t</h3>

          <p><strong>Don&apos;t misuse for indentation</strong></p>
          <p>Never use blockquotes just to indent or visually offset non-quoted content.</p>

          <p><strong>Don&apos;t modify quoted text</strong></p>
          <p>Don&apos;t alter quotes to fit your message. Preserve the original meaning.</p>

          <p><strong>Don&apos;t use headings inside blockquotes</strong></p>
          <p>Quotes are not headings. Apply blockquote styles via CSS, not heading tags.</p>

          <p><strong>Don&apos;t over-use center or right orientations</strong></p>
          <p>Use left as the default. Center and right orientations should be intentional, not decorative.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Left orientation (default) --&gt;
&lt;blockquote class="blockquote blockquote--left"&gt;
  &lt;p&gt;We should embrace the fact that the web doesn&apos;t have the same constraints, and design for this flexibility.&lt;/p&gt;
  &lt;cite&gt;&lt;a href="https://alistapart.com/article/dao/"&gt;John Allsopp, A Dao of Web Design&lt;/a&gt;&lt;/cite&gt;
&lt;/blockquote&gt;

&lt;!-- Center orientation --&gt;
&lt;blockquote class="blockquote blockquote--center"&gt;
  &lt;p&gt;Now more than ever, we&apos;re designing work meant to be viewed along a gradient of different experiences.&lt;/p&gt;
  &lt;cite&gt;&lt;a href="https://alistapart.com/article/responsive-web-design/"&gt;Ethan Marcotte, Responsive Web Design&lt;/a&gt;&lt;/cite&gt;
&lt;/blockquote&gt;

&lt;!-- Right orientation --&gt;
&lt;blockquote class="blockquote blockquote--right"&gt;
  &lt;p&gt;Now more than ever, we&apos;re designing work meant to be viewed along a gradient of different experiences.&lt;/p&gt;
  &lt;cite&gt;&lt;a href="https://alistapart.com/article/responsive-web-design/"&gt;Ethan Marcotte, Responsive Web Design&lt;/a&gt;&lt;/cite&gt;
&lt;/blockquote&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Base styles */
.blockquote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--md); /* Mobile: 8px, Widescreen: 16px */
  padding: var(--xl); /* Mobile: 16px, Widescreen: 32px */
}

.blockquote p {
  font-size: var(--components-blockquote-quote-font-size); /* Mobile: 12px, Widescreen: 24px */
  line-height: var(--components-blockquote-quote-line-height); /* Mobile: 20px, Widescreen: 36px */
  font-weight: 700;
  color: var(--text-default);
  margin: 0;
}

.blockquote cite a {
  font-size: var(--components-blockquote-cite-font-size); /* Mobile: 10px, Widescreen: 20px */
  line-height: var(--components-blockquote-cite-line-height); /* Mobile: 16px, Widescreen: 30px */
  font-weight: 700;
  color: var(--text-link);
  text-decoration: underline;
  text-decoration-style: solid;
}

/* Orientation variants */
.blockquote--left {
  border-left: 4px solid var(--brand-primary);
  text-align: left;
  align-items: flex-start;
}

.blockquote--center {
  border-top: 4px solid var(--brand-primary);
  border-bottom: 4px solid var(--brand-primary);
  text-align: center;
  align-items: center;
}

.blockquote--right {
  border-right: 4px solid var(--brand-primary);
  text-align: right;
  align-items: flex-end;
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components-blockquote-quote-font-size    Mobile: 0.75rem / 12px   →   Widescreen: 1.5rem / 24px
--components-blockquote-quote-line-height  Mobile: 1.25rem / 20px   →   Widescreen: 2.25rem / 36px
--components-blockquote-cite-font-size     Mobile: 0.625rem / 10px  →   Widescreen: 1.25rem / 20px
--components-blockquote-cite-line-height   Mobile: 1rem / 16px      →   Widescreen: 1.875rem / 30px

/* Spacing */
--xl   Mobile: 1rem / 16px     →   Widescreen: 2rem / 32px
--md   Mobile: 0.5rem / 8px    →   Widescreen: 1rem / 16px

/* Colors */
--brand-primary    Light: #FF5247   Dark: #FF5247
--text-default     Light: #000000   Dark: #FFFFFF
--text-link        Light: #FF5247   Dark: #FFFFFF</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="_blank">MDN: blockquote element</a> &mdash; Official HTML blockquote documentation</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" target="_blank">MDN: cite element</a> &mdash; Official HTML cite documentation</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html" target="_blank">WCAG 2.1: Use of Color</a> &mdash; Accessibility requirements for color-only distinctions</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html" target="_blank">WCAG 2.1: Meaningful Sequence</a> &mdash; Semantic structure for accessibility</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Blockquotes',
};

export default meta;

export const Documentation = () => createBlockquotesDocumentation();
