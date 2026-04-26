export default {
  title: 'Molecules/Content',
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['title+p', 'h+p'],
      description: 'Heading and body type combination',
      table: { defaultValue: { summary: 'title+p' } },
    },
    eyebrow: {
      control: { type: 'boolean' },
      description: 'Show eyebrow',
      table: { defaultValue: { summary: 'false' } },
    },
    cta: {
      control: { type: 'boolean' },
      description: 'Show CTA',
      table: { defaultValue: { summary: 'false' } },
    },
    footer: {
      control: { type: 'boolean' },
      description: 'Show footer',
      table: { defaultValue: { summary: 'false' } },
    },
    eyebrowText: {
      control: { type: 'text' },
      description: 'Eyebrow text',
      if: { arg: 'eyebrow', truthy: true },
    },
    headingText: {
      control: { type: 'text' },
      description: 'Heading text',
    },
    bodyText: {
      control: { type: 'text' },
      description: 'Body text',
    },
    ctaType: {
      control: { type: 'inline-radio' },
      options: ['link', 'button'],
      description: 'CTA element type',
      if: { arg: 'cta', truthy: true },
      table: { defaultValue: { summary: 'link' } },
    },
    ctaText: {
      control: { type: 'text' },
      description: 'CTA text',
      if: { arg: 'cta', truthy: true },
    },
    ctaButtonVariant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'white'],
      description: 'CTA button color palette',
      if: { arg: 'ctaType', eq: 'button' },
      table: { defaultValue: { summary: 'primary' } },
    },
    ctaButtonStyle: {
      control: { type: 'inline-radio' },
      options: ['solid', 'transparent'],
      description: 'CTA button visual treatment',
      if: { arg: 'ctaType', eq: 'button' },
      table: { defaultValue: { summary: 'solid' } },
    },
    ctaButtonIconLeft: {
      control: { type: 'boolean' },
      description: 'CTA button: show pre-icon',
      if: { arg: 'ctaType', eq: 'button' },
      table: { defaultValue: { summary: 'false' } },
    },
    ctaButtonIconRight: {
      control: { type: 'boolean' },
      description: 'CTA button: show post-icon',
      if: { arg: 'ctaType', eq: 'button' },
      table: { defaultValue: { summary: 'false' } },
    },
    footerText: {
      control: { type: 'text' },
      description: 'Footer text',
      if: { arg: 'footer', truthy: true },
    },
  },
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Content</h1>
      <p>The Content component is a reusable molecular pattern that provides a flexible container for structured text content. It combines optional eyebrows, heading/body pairs, call-to-action elements, and footers in a consistent, composable format used across cards, banners, and other organisms.</p>

      <hr>

      <h2>Anatomy</h2>
      <p>The Content component consists of:</p>
      <ul>
        <li><strong>Container:</strong> Fluid-width wrapper with padding that adapts to parent constraints</li>
        <li><strong>Eyebrow (optional):</strong> Small, uppercase label text that provides context or category</li>
        <li><strong>Heading + Body pair:</strong> Primary content area with multiple heading level options paired with body text</li>
        <li><strong>CTA group (optional):</strong> Call-to-action area containing links and/or buttons</li>
        <li><strong>Footer (optional):</strong> Supporting content or metadata at the bottom</li>
      </ul>

      <div class="component-demo">
        <div class="content-specimen content-title-p">
          <p class="content-eyebrow">Eyebrow</p>
          <h1>Title Heading</h1>
          <p>Body</p>
          <div class="content-cta">
            <a href="#" class="demo-link" onclick="return false;">
              Link
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/>
              </svg>
            </a>
          </div>
          <p class="content-footer">Footer</p>
        </div>
      </div>

      <hr>

      <h2>Variants</h2>
      <p>The Content component offers two heading/body combinations. All optional elements (eyebrow, CTA, footer) are disabled by default.</p>
      <ul>
        <li><strong>title+p:</strong> Large title-styled heading paired with body text. Ideal for hero sections and prominent content blocks.</li>
        <li><strong>h+p:</strong> Standard h2 heading paired with body text. Suitable for section headings and general content areas.</li>
      </ul>

      <p>Each optional element can be independently enabled:</p>
      <ul>
        <li><strong>Eyebrow:</strong> Contextual label above the heading</li>
        <li><strong>CTA:</strong> Links and buttons for user actions</li>
        <li><strong>Footer:</strong> Fine print or supporting metadata</li>
      </ul>

      <hr>

      <h2>Typography</h2>
      <p>Content typography is defined by the selected variant. The <strong>title+p</strong> variant uses the <code>h1-title</code> heading token paired with the <code>h1-title+p</code> body token. The <strong>h+p</strong> variant uses the <code>h2</code> heading token paired with the <code>p</code> body token. Eyebrow text uses the <code>small</code> token; footer text uses the <code>fine</code> token. See the Design tokens reference for the full responsive scale.</p>

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
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>Body padding-top</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>Eyebrow padding-bottom</td>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>CTA padding-top</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>CTA gap</td>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Footer padding-top</td>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <h2>Accessibility</h2>
      <p>The Content component is a structural layout pattern with no interactive elements of its own. Accessibility responsibilities fall to the elements it contains — primarily headings and any CTA links or buttons.</p>

      <h3>Keyboard navigation</h3>
      <p>The Content component itself has no keyboard behaviour. When CTA elements are present, interactive elements (links and buttons) must be reachable by Tab and activated by Enter or Space per their respective component specifications.</p>

      <h3>Screen readers</h3>
      <p>Use proper heading hierarchy within the Content component. Heading levels must be sequential and must not skip levels (for example, do not jump from h1 to h3). Screen readers use heading structure for page navigation, so the heading variant chosen (title+p or h+p) must reflect the correct position in the document outline. Use h1 variants sparingly — typically once per page or major section.</p>
      <p>Eyebrow text provides visual context but has no semantic heading role. It should supplement, not substitute, a proper heading.</p>

      <h3>ARIA attributes</h3>
      <p>No ARIA attributes are required on the Content container itself. Any CTA links must have descriptive, meaningful link text rather than generic labels like "click here" or "read more". When the same link text appears multiple times on a page pointing to different destinations, use <code>aria-label</code> to differentiate them.</p>

      <h3>Focus management</h3>
      <p>The Content component introduces no custom focus behaviour. Ensure all CTA links and buttons display visible focus indicators meeting WCAG 2.1 requirements. Refer to the Button and Link component documentation for focus state specifications.</p>

      <h3>Color contrast</h3>
      <p>All text within the Content component meets WCAG 2.1 Level AA contrast requirements through the <code>text/default</code> token, which provides a minimum 4.5:1 contrast ratio in both light and dark modes. The <code>text/link</code> token (#FF5247) meets contrast requirements against white backgrounds in light mode; verify contrast when placing Content on non-white backgrounds.</p>

      <hr>

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use the Content component when you need to:</p>
      <ul>
        <li>Create consistent text content areas across cards, banners, and sections</li>
        <li>Combine headings, body text, and optional elements in a structured format</li>
        <li>Maintain flexibility in content hierarchy while ensuring consistency</li>
        <li>Build reusable content patterns that adapt across different containers</li>
        <li>Provide optional eyebrows, CTAs, or footers alongside core content</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use the Content component when:</p>
      <ul>
        <li>You need a single heading or text block without the structural wrapper</li>
        <li>Content doesn't fit the heading + body pattern</li>
        <li>You're creating forms or data tables (use appropriate components instead)</li>
        <li>Custom layout requirements conflict with the component's structure</li>
      </ul>

      <h3>Content guidelines</h3>
      <p>Best practices for Content component usage:</p>
      <ul>
        <li><strong>Choose the right variant:</strong> Use title+p for hero sections, page headers, and prominent feature areas. Use h+p for section headings, card content, and general content blocks.</li>
        <li><strong>Keep headings concise:</strong> Headings should be brief and descriptive</li>
        <li><strong>Limit body text length:</strong> Keep body text focused and scannable</li>
        <li><strong>Use eyebrows strategically:</strong> Eyebrows work well for categories or context but shouldn't replace headings</li>
        <li><strong>Enable optional elements purposefully:</strong> Only include CTAs and footers when they add value</li>
      </ul>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Maintain proper heading hierarchy</strong></p>
          <p>Use heading levels sequentially to create clear document structure and enable screen reader navigation.</p>

          <p><strong>Keep content focused and scannable</strong></p>
          <p>Limit body text to essential information. Use concise headings that clearly describe content.</p>

          <p><strong>Use eyebrows for context, not decoration</strong></p>
          <p>Eyebrows should provide meaningful category or context information, not just visual embellishment.</p>

          <p><strong>Enable optional elements strategically</strong></p>
          <p>Only include CTAs and footers when they serve a clear purpose for the user.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't skip heading levels</strong></p>
          <p>Avoid jumping from h1 to h3 or using heading levels out of sequence. This breaks accessibility.</p>

          <p><strong>Don't overload with optional elements</strong></p>
          <p>Having eyebrow + CTA + footer on every instance creates visual clutter and dilutes importance.</p>

          <p><strong>Don't use as a general wrapper</strong></p>
          <p>The Content component is for heading + body patterns. Use other components for different content types.</p>

          <p><strong>Don't rely solely on eyebrows</strong></p>
          <p>Eyebrows supplement headings but can't replace them. Always include a proper heading.</p>
        </div>
      </div>

      <hr>

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- title+p variant --&gt;
&lt;div class="content content-title-p"&gt;
  &lt;h1&gt;Title Heading&lt;/h1&gt;
  &lt;p&gt;Body text that provides supporting information and context.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- h+p variant --&gt;
&lt;div class="content content-h-p"&gt;
  &lt;h2&gt;Section Heading&lt;/h2&gt;
  &lt;p&gt;Body text that provides supporting information and context.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- With eyebrow (title+p) --&gt;
&lt;div class="content content-title-p"&gt;
  &lt;p class="content-eyebrow"&gt;Category&lt;/p&gt;
  &lt;h1&gt;Title Heading&lt;/h1&gt;
  &lt;p&gt;Body text that provides supporting information and context.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- With eyebrow (h+p) - note uppercase styling --&gt;
&lt;div class="content content-h-p"&gt;
  &lt;p class="content-eyebrow"&gt;Featured&lt;/p&gt;
  &lt;h2&gt;Section Heading&lt;/h2&gt;
  &lt;p&gt;Body text that provides supporting information and context.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- With CTA --&gt;
&lt;div class="content content-h-p"&gt;
  &lt;h2&gt;Section Heading&lt;/h2&gt;
  &lt;p&gt;Body text that provides supporting information and context.&lt;/p&gt;
  &lt;div class="content-cta"&gt;
    &lt;a href="#"&gt;Learn more&lt;/a&gt;
    &lt;button class="button-outline"&gt;Label&lt;/button&gt;
    &lt;button class="button-filled"&gt;Label&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- With footer --&gt;
&lt;div class="content content-h-p"&gt;
  &lt;h2&gt;Section Heading&lt;/h2&gt;
  &lt;p&gt;Body text that provides supporting information and context.&lt;/p&gt;
  &lt;p class="content-footer"&gt;Fine print or additional context&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Content container */
.content {
  padding: var(--xl);
}

/* Typography — title+p variant */
.content-title-p h1 {
  font-size: var(--h1-title-font-size);
  line-height: var(--h1-title-line-height);
  margin-bottom: var(--sm);
  color: var(--text-default);
}

.content-title-p .content-eyebrow {
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  text-transform: uppercase;
  margin-bottom: var(--xs);
  color: var(--text-default);
}

/* Typography — h+p variant */
.content-h-p h2 {
  font-size: var(--h2-font-size);
  line-height: var(--h2-line-height);
  margin-bottom: var(--sm);
  color: var(--text-default);
}

.content-h-p .content-eyebrow {
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  text-transform: uppercase;
  margin-bottom: var(--xs);
  color: var(--text-default);
}

/* Body text */
.content p {
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  color: var(--text-default);
}

/* CTA group */
.content-cta {
  display: flex;
  align-items: center;
  gap: var(--md);
  margin-top: var(--xl);
}

.content-cta a {
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  color: var(--text-link);
  text-decoration: underline;
}

/* Footer */
.content-footer {
  margin-top: var(--xl);
  font-size: var(--fine-font-size);
  line-height: var(--fine-line-height);
  color: var(--text-default);
}

/* Widescreen */
@media (min-width: 80rem) {
  .content {
    padding: var(--xl);
  }
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--h1-title/font-size       Mobile: 3.125rem / 50px   →   Widescreen: 5rem / 80px
--h1-title/line-height     Mobile: 3.5rem / 56px     →   Widescreen: 6.25rem / 100px
--h2/font-size             Mobile: 2.375rem / 38px   →   Widescreen: 3.75rem / 60px
--h2/line-height           Mobile: 2.625rem / 42px   →   Widescreen: 4.625rem / 74px
--h1-title+p/font-size     Mobile: 1rem / 16px       →   Widescreen: 2rem / 32px
--h1-title+p/line-height   Mobile: 1.75rem / 28px    →   Widescreen: 3.5rem / 56px
--p/font-size              Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px
--p/line-height            Mobile: 1.5rem / 24px     →   Widescreen: 2.25rem / 36px
--small/font-size          Mobile: 0.75rem / 12px    →   Widescreen: 1.25rem / 20px
--small/line-height        Mobile: 1.25rem / 20px    →   Widescreen: 1.875rem / 30px
--fine/font-size           Mobile: 0.625rem / 10px   →   Widescreen: 1rem / 16px
--fine/line-height         Mobile: 1.125rem / 18px   →   Widescreen: 1.5rem / 24px

/* Spacing */
--xl                       Mobile: 1rem / 16px       →   Widescreen: 2rem / 32px
--md                       Mobile: 0.5rem / 8px      →   Widescreen: 1rem / 16px
--sm                       Mobile: 0.25rem / 4px     →   Widescreen: 0.5rem / 8px
--xs                       Mobile: 0.125rem / 2px    →   Widescreen: 0.25rem / 4px

/* Colors */
--text/default             Light: #000000   Dark: #FFFFFF
--text/link                Light: #FF5247   Dark: #FFFFFF</code></pre>

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.w3.org/WAI/tutorials/page-structure/headings/" target="_blank">W3C: Headings</a> — Proper heading structure and hierarchy</li>
      </ul>
    </div>
  `;
};

export const Playground = {
  tags: ['!autodocs'],
  args: {
    variant: 'title+p',
    eyebrow: false,
    cta: false,
    footer: false,
    eyebrowText: 'Eyebrow',
    headingText: 'Heading',
    bodyText: 'Body text that provides supporting information and context.',
    ctaType: 'link',
    ctaText: 'Learn more',
    ctaButtonVariant: 'primary',
    ctaButtonStyle: 'solid',
    ctaButtonIconLeft: false,
    ctaButtonIconRight: false,
    footerText: 'Fine print or additional context',
  },
  render: (args) => {
    const variantClass = args.variant === 'title+p' ? 'title-p' : 'h-p';
    const heading = args.variant === 'title+p'
      ? `<h1>${args.headingText}</h1>`
      : `<h2>${args.headingText}</h2>`;
    const eyebrow = args.eyebrow ? `<p class="content-eyebrow">${args.eyebrowText}</p>` : '';
    const preIcon = `<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
    const postIcon = `<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
    const ctaContent = args.ctaType === 'button'
      ? `<button class="button button-${args.ctaButtonVariant}-${args.ctaButtonStyle}" type="button">
                ${args.ctaButtonIconLeft ? preIcon : ''}
                ${args.ctaText}
                ${args.ctaButtonIconRight ? postIcon : ''}
              </button>`
      : `<a href="#" class="demo-link" onclick="return false;">
                ${args.ctaText}
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/>
                </svg>
              </a>`;
    const ctaInner = `<div class="content-cta">
              ${ctaContent}
            </div>`;
    const cta = args.cta
      ? args.ctaType === 'button' && args.ctaButtonVariant === 'white'
        ? `<div style="background-color: var(--brand-secondary); padding: var(--spacing-xl); border-radius: var(--border-radius-md);">
              ${ctaInner}
            </div>`
        : ctaInner
      : '';
    const footer = args.footer ? `<p class="content-footer">${args.footerText}</p>` : '';

    return `
      <div class="delta-docs" style="padding: 32px 24px;">
        <div class="component-demo">
          <div class="content content-${variantClass}">
            ${eyebrow}
            ${heading}
            <p>${args.bodyText}</p>
            ${cta}
            ${footer}
          </div>
        </div>
      </div>
    `;
  },
};
