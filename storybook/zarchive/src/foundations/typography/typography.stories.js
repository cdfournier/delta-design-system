function createTypographyDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Typography</h1>
      <p>Typography expresses hierarchy and enables improved consumption of content. Good typography helps content fulfill its purpose of communication.</p>

      <hr />

      <h2>Typography philosophy</h2>
      <p>Clear, readable typography is fundamental to effective communication. The Delta Design System uses two carefully selected typefaces and a systematic scale to create hierarchy, establish rhythm, and maintain consistency across all screen sizes.</p>

      <hr />

      <h2>The typography system</h2>
      <p>The system includes font families, scales, sizes, weights, and spacing optimized for legibility and hierarchy.</p>

      <h3>Font families</h3>

      <div class="type-specimen">
        <div class="type-specimen-header">Ovo &mdash; Headlines</div>
        <div class="type-specimen-example">
          <p class="type-family-heading-sample">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div class="type-details">Font: Ovo (serif) &nbsp;&bull;&nbsp; Weight: Regular (400) &nbsp;&bull;&nbsp; Use: All headings (h1&ndash;h5) &nbsp;&bull;&nbsp; Source: <a href="https://fonts.google.com/specimen/Ovo" target="_blank">Google Fonts</a></div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">Montserrat &mdash; Body &amp; Interface</div>
        <div class="type-specimen-example">
          <p class="type-family-body-sample">The quick brown fox jumps over the lazy dog &mdash; Regular</p>
          <p class="type-family-body-sample"><strong>The quick brown fox jumps over the lazy dog &mdash; Bold</strong></p>
        </div>
        <div class="type-details">Font: Montserrat (sans-serif) &nbsp;&bull;&nbsp; Weights: Regular (400), Bold (700) &nbsp;&bull;&nbsp; Use: Body copy, lists, interface elements, all components &nbsp;&bull;&nbsp; Source: <a href="https://fonts.google.com/specimen/Montserrat" target="_blank">Google Fonts</a></div>
      </div>

      <h3>Type scales</h3>
      <p>Font sizes follow systematic scales that create consistent visual rhythm. Headlines (h1&ndash;h5) use a 1.200 Minor Third scale with Ovo. Body copy uses a 1.250 Major Third scale with Montserrat. These scales provide subtle but powerful consistency across screen sizes while maintaining clear hierarchy.</p>
      <p>All values in rem / px format. Token names reference the Figma variable collection. Mobile/Tablet values apply from 0&ndash;1279px; Widescreen values apply from 1280px (80rem) and above.</p>

      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>h1 title font-size</td>
            <td><code>h1-title/font-size</code></td>
            <td>3.125rem / 50px</td>
            <td>5rem / 80px</td>
          </tr>
          <tr>
            <td>h1 title line-height</td>
            <td><code>h1-title/line-height</code></td>
            <td>3.5rem / 56px</td>
            <td>6.25rem / 100px</td>
          </tr>
          <tr>
            <td>h1 title + p font-size</td>
            <td><code>h1-title+p/font-size</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>h1 title + p line-height</td>
            <td><code>h1-title+p/line-height</code></td>
            <td>1.75rem / 28px</td>
            <td>3.5rem / 56px</td>
          </tr>
          <tr>
            <td>h1 font-size</td>
            <td><code>h1/font-size</code></td>
            <td>3.125rem / 50px</td>
            <td>4.5rem / 72px</td>
          </tr>
          <tr>
            <td>h1 line-height</td>
            <td><code>h1/line-height</code></td>
            <td>3.5rem / 56px</td>
            <td>5.625rem / 90px</td>
          </tr>
          <tr>
            <td>h2 font-size</td>
            <td><code>h2/font-size</code></td>
            <td>2.375rem / 38px</td>
            <td>3.75rem / 60px</td>
          </tr>
          <tr>
            <td>h2 line-height</td>
            <td><code>h2/line-height</code></td>
            <td>2.625rem / 42px</td>
            <td>4.625rem / 74px</td>
          </tr>
          <tr>
            <td>h3 font-size</td>
            <td><code>h3/font-size</code></td>
            <td>1.75rem / 28px</td>
            <td>3.125rem / 50px</td>
          </tr>
          <tr>
            <td>h3 line-height</td>
            <td><code>h3/line-height</code></td>
            <td>2rem / 32px</td>
            <td>3.875rem / 62px</td>
          </tr>
          <tr>
            <td>h4 font-size</td>
            <td><code>h4/font-size</code></td>
            <td>1.5rem / 24px</td>
            <td>2.625rem / 42px</td>
          </tr>
          <tr>
            <td>h4 line-height</td>
            <td><code>h4/line-height</code></td>
            <td>1.875rem / 30px</td>
            <td>3.25rem / 52px</td>
          </tr>
          <tr>
            <td>h5 font-size</td>
            <td><code>h5/font-size</code></td>
            <td>1.25rem / 20px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td>h5 line-height</td>
            <td><code>h5/line-height</code></td>
            <td>1.625rem / 26px</td>
            <td>2.5rem / 40px</td>
          </tr>
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
            <td>3.5rem / 56px</td>
          </tr>
          <tr>
            <td>list font-size</td>
            <td><code>list/font-size</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>list line-height</td>
            <td><code>list/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>2.125rem / 34px</td>
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

      <h3>Relative units</h3>
      <p>The Delta Design System uses rem units for all typography. Rem units are relative to the root <code>&lt;html&gt;</code> element's font size, not individual parent containers. When users adjust their browser's base font size, rem-based typography scales proportionally &mdash; ensuring text remains readable for users with visual impairments while maintaining proper layout and hierarchy. The spacing system also uses rem units to maintain consistent relationships between typography and layout.</p>

      <h3>Size specifications</h3>
      <p>Specimens below show mobile sizes. Typography scales at the 80rem (1280px) breakpoint &mdash; see the type scale table for all values.</p>

      <div class="type-specimen">
        <div class="type-specimen-header">H1 Title</div>
        <div class="type-specimen-example">
          <p class="specimen-h1-title">The quick brown fox</p>
        </div>
        <div class="type-details">Ovo Regular &nbsp;&bull;&nbsp; Mobile: 50px / 56px lh &nbsp;&bull;&nbsp; Widescreen: 80px / 100px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">H1 Title + P</div>
        <div class="type-specimen-example">
          <p class="specimen-h1-title">The quick brown fox</p>
          <p class="specimen-h1-title-plus-p">The first paragraph after an h1 title receives special styling with increased font size for emphasis and improved visual hierarchy.</p>
        </div>
        <div class="type-details">Montserrat Regular &nbsp;&bull;&nbsp; Mobile: 16px / 28px lh &nbsp;&bull;&nbsp; Widescreen: 32px / 56px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">H1</div>
        <div class="type-specimen-example">
          <p class="specimen-h1">The quick brown fox</p>
        </div>
        <div class="type-details">Ovo Regular &nbsp;&bull;&nbsp; Mobile: 50px / 56px lh &nbsp;&bull;&nbsp; Widescreen: 72px / 90px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">H2</div>
        <div class="type-specimen-example">
          <p class="specimen-h2">The quick brown fox</p>
        </div>
        <div class="type-details">Ovo Regular &nbsp;&bull;&nbsp; Mobile: 38px / 42px lh &nbsp;&bull;&nbsp; Widescreen: 60px / 74px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">H3</div>
        <div class="type-specimen-example">
          <p class="specimen-h3">The quick brown fox</p>
        </div>
        <div class="type-details">Ovo Regular &nbsp;&bull;&nbsp; Mobile: 28px / 32px lh &nbsp;&bull;&nbsp; Widescreen: 50px / 62px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">H4</div>
        <div class="type-specimen-example">
          <p class="specimen-h4">The quick brown fox</p>
        </div>
        <div class="type-details">Ovo Regular &nbsp;&bull;&nbsp; Mobile: 24px / 30px lh &nbsp;&bull;&nbsp; Widescreen: 42px / 52px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">H5</div>
        <div class="type-specimen-example">
          <p class="specimen-h5">The quick brown fox</p>
        </div>
        <div class="type-details">Ovo Regular &nbsp;&bull;&nbsp; Mobile: 20px / 26px lh &nbsp;&bull;&nbsp; Widescreen: 32px / 40px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">Body (p)</div>
        <div class="type-specimen-example">
          <p class="specimen-p">The quick brown fox jumps over the lazy dog. Typography expresses hierarchy and enables improved consumption of content.</p>
        </div>
        <div class="type-details">Montserrat Regular &nbsp;&bull;&nbsp; Mobile: 16px / 24px lh &nbsp;&bull;&nbsp; Widescreen: 24px / 56px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">List</div>
        <div class="type-specimen-example">
          <ul class="specimen-list">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>Typography expresses hierarchy and enables improved consumption of content</li>
            <li>Good typography helps content fulfill its purpose</li>
          </ul>
        </div>
        <div class="type-details">Montserrat Regular &nbsp;&bull;&nbsp; Mobile: 16px / 20px lh &nbsp;&bull;&nbsp; Widescreen: 24px / 34px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">Small</div>
        <div class="type-specimen-example">
          <p class="specimen-small">The quick brown fox jumps over the lazy dog. Typography expresses hierarchy and enables improved consumption of content.</p>
        </div>
        <div class="type-details">Montserrat Regular &nbsp;&bull;&nbsp; Mobile: 12px / 20px lh &nbsp;&bull;&nbsp; Widescreen: 20px / 30px lh</div>
      </div>

      <div class="type-specimen">
        <div class="type-specimen-header">Fine</div>
        <div class="type-specimen-example">
          <p class="specimen-fine">The quick brown fox jumps over the lazy dog. Typography expresses hierarchy and enables improved consumption of content.</p>
        </div>
        <div class="type-details">Montserrat Regular &nbsp;&bull;&nbsp; Mobile: 10px / 16px lh &nbsp;&bull;&nbsp; Widescreen: 16px / 24px lh</div>
      </div>

      <hr />

      <h2>Accessibility</h2>

      <h3>Heading hierarchy</h3>
      <p>Proper heading hierarchy is essential for screen readers and document structure. Headings create the document outline that assistive technologies use for navigation. Never skip heading levels &mdash; always start from h1, then h2, and so on. Use one h1 per page; additional top-level sections should use h2. Each heading level should be a logical subsection of the level above it.</p>

      <h3>Contrast and readability</h3>
      <p>All typography meets WCAG 2.1 Level AA contrast requirements. Body text at 16px and above uses black on white, achieving a 21:1 ratio (AAA compliant). Small text (12px) should be used for secondary content only and meets AA for large text. Fine text (10px) should be used sparingly for tertiary content at large text sizing only. Line length should stay within 45&ndash;75 characters per line for optimal readability.</p>

      <h3>Responsive sizing</h3>
      <p>Typography scales automatically at the 80rem (1280px) breakpoint using CSS custom properties with two variable modes: mobile and widescreen. Mobile sizes prioritize readability on small screens. Widescreen sizes leverage additional space for improved hierarchy and visual impact. Never override type scale values directly &mdash; use the token system to ensure sizing adjusts correctly across breakpoints.</p>

      <h3>Semantic markup</h3>
      <p>Use semantic HTML elements for their intended meaning, not their visual appearance. Use <code>&lt;strong&gt;</code> for importance and <code>&lt;em&gt;</code> for stress emphasis rather than applying bold or italic styles directly. If larger or smaller text is needed without changing semantic meaning, use CSS classes &mdash; never change heading tags just to resize text.</p>

      <hr />

      <h2>Usage</h2>

      <h3>Semantic hierarchy</h3>
      <p><strong>h1&ndash;h5:</strong> Semantic section headings using Ovo. These establish document structure and are critical for accessibility.</p>
      <p><strong>Body copy (p):</strong> Primary content using Montserrat Regular.</p>
      <p><strong>Lists (ol, ul):</strong> Ordered and unordered lists using Montserrat Regular.</p>
      <p><strong>Small:</strong> Secondary content, captions, helper text.</p>
      <p><strong>Fine:</strong> Tertiary content, legal text, micro-copy.</p>

      <h3>Special styles</h3>
      <p><strong>h1 title:</strong> A special variant of h1 that scales larger on widescreen (80px vs 72px). Use once per page for hero sections or landing pages.</p>
      <p><strong>h1 title + p:</strong> The first paragraph following an h1 with the <code>.title</code> class automatically receives increased font size (16px/28px mobile, 32px/56px widescreen) for improved visual hierarchy and emphasis.</p>

      <pre><code>&lt;h1 class="title"&gt;Hero Headline&lt;/h1&gt;
&lt;p&gt;This paragraph gets special styling automatically.&lt;/p&gt;</code></pre>

      <h3>Heading links</h3>
      <p>Heading links allow users to copy deep links to specific sections of content. On hover, a link icon appears next to the heading. When clicked, the anchor URL for that section is copied to the clipboard. This pattern is particularly useful for documentation, long-form content such as case studies and articles, and any content where deep linking enhances shareability.</p>
      <p>Heading links are available for h2, h3, h4, and h5 elements. h1 elements do not include this feature, as page-level navigation is handled through primary navigation or the URL itself.</p>
      <ul>
        <li><strong>Default:</strong> The heading appears normally with no visible link icon.</li>
        <li><strong>Hover:</strong> A link icon fades in to the right of the heading text. Heading color changes to <code>text/link</code> (light mode: #FF5247, dark mode: #FFFFFF).</li>
        <li><strong>Activated:</strong> The anchor URL is copied to clipboard. Provide a brief toast or tooltip confirming the action.</li>
      </ul>

      <h3>Line length</h3>
      <p>Long lines of text are difficult to read. The ideal range is 45&ndash;75 characters per line. The Delta Design System controls line length through max-width values on text containers. Test line length by adding asterisks at the 45th and 75th characters &mdash; if both appear on the same line, either decrease container width or increase font size.</p>

      <h3>Best practices</h3>
      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Follow heading hierarchy</strong></p>
          <p>Use h1 through h5 in order without skipping levels. This preserves document structure for screen readers and search engines.</p>

          <p><strong>Use rem units in code</strong></p>
          <p>Always implement type sizes using rem so that text scales correctly when users change their browser's base font size.</p>

          <p><strong>Use semantic markup for meaning</strong></p>
          <p>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for semantic meaning, not visual styling. Apply CSS classes when appearance alone is the goal.</p>

          <p><strong>Keep line length in range</strong></p>
          <p>Maintain 45&ndash;75 characters per line for body copy to optimize readability across all screen sizes.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't skip heading levels</strong></p>
          <p>Jumping from h2 to h4 breaks document structure and creates a confusing experience for keyboard and screen reader users.</p>

          <p><strong>Don't use headings for visual sizing</strong></p>
          <p>If you need larger or smaller text, use CSS classes. Choosing heading tags for their size rather than their meaning undermines accessibility.</p>

          <p><strong>Don't override line heights arbitrarily</strong></p>
          <p>The system's line heights are optimized for readability at each size. Overriding them without a clear reason degrades legibility.</p>

          <p><strong>Don't use fine text for body copy</strong></p>
          <p>Small and fine sizes are reserved for captions and tertiary content. Using them for primary content creates accessibility and readability issues.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Standard headings --&gt;
&lt;h1&gt;Page title&lt;/h1&gt;
&lt;h2&gt;Section heading&lt;/h2&gt;
&lt;h3&gt;Subsection heading&lt;/h3&gt;
&lt;h4&gt;Sub-subsection heading&lt;/h4&gt;
&lt;h5&gt;Minor heading&lt;/h5&gt;

&lt;!-- Hero title variant --&gt;
&lt;h1 class="title"&gt;Hero Headline&lt;/h1&gt;
&lt;p&gt;This paragraph gets automatic large styling.&lt;/p&gt;

&lt;!-- Body copy --&gt;
&lt;p&gt;Primary content text.&lt;/p&gt;

&lt;!-- Secondary and tertiary text --&gt;
&lt;p class="small"&gt;Caption or helper text.&lt;/p&gt;
&lt;p class="fine"&gt;Legal or micro-copy text.&lt;/p&gt;

&lt;!-- Heading with anchor link --&gt;
&lt;h2 id="about-section" class="heading-link"&gt;
  &lt;span&gt;About Us&lt;/span&gt;
  &lt;button class="heading-link-icon"
          aria-label="Copy link to About Us section"
          data-clipboard-text="https://example.com/page#about-section"&gt;
    &lt;svg aria-hidden="true"&gt;&lt;!-- link icon SVG --&gt;&lt;/svg&gt;
  &lt;/button&gt;
&lt;/h2&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Base font size */
html {
  font-size: 16px;
}

/* Headings — Ovo */
h1 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 3.125rem; /* 50px */
  line-height: 3.5rem; /* 56px */
}

h1.title {
  font-size: 3.125rem; /* 50px */
  line-height: 3.5rem; /* 56px */
}

h1.title + p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;    /* 16px */
  line-height: 1.75rem; /* 28px */
}

h2 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 2.375rem; /* 38px */
  line-height: 2.625rem; /* 42px */
}

h3 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 1.75rem; /* 28px */
  line-height: 2rem;  /* 32px */
}

h4 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 1.5rem;  /* 24px */
  line-height: 1.875rem; /* 30px */
}

h5 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 1.25rem; /* 20px */
  line-height: 1.625rem; /* 26px */
}

/* Body — Montserrat */
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;    /* 16px */
  line-height: 1.5rem; /* 24px */
}

.small {
  font-size: 0.75rem; /* 12px */
  line-height: 1.25rem; /* 20px */
}

.fine {
  font-size: 0.625rem; /* 10px */
  line-height: 1rem; /* 16px */
}

/* Heading link pattern */
.heading-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.heading-link-icon {
  opacity: 0;
  transition: opacity 0.2s ease;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 1em;
  height: 1em;
}

.heading-link:hover .heading-link-icon {
  opacity: 1;
}

.heading-link:hover {
  color: var(--brand-primary);
}

/* Widescreen — 80rem / 1280px */
@media (min-width: 80rem) {
  h1 {
    font-size: 4.5rem;   /* 72px */
    line-height: 5.625rem; /* 90px */
  }

  h1.title {
    font-size: 5rem;     /* 80px */
    line-height: 6.25rem; /* 100px */
  }

  h1.title + p {
    font-size: 2rem;     /* 32px */
    line-height: 3.5rem; /* 56px */
  }

  h2 {
    font-size: 3.75rem;  /* 60px */
    line-height: 4.625rem; /* 74px */
  }

  h3 {
    font-size: 3.125rem; /* 50px */
    line-height: 3.875rem; /* 62px */
  }

  h4 {
    font-size: 2.625rem; /* 42px */
    line-height: 3.25rem; /* 52px */
  }

  h5 {
    font-size: 2rem;     /* 32px */
    line-height: 2.5rem; /* 40px */
  }

  p {
    font-size: 1.5rem;   /* 24px */
    line-height: 3.5rem; /* 56px */
  }

  .small {
    font-size: 1.25rem;  /* 20px */
    line-height: 1.875rem; /* 30px */
  }

  .fine {
    font-size: 1rem;     /* 16px */
    line-height: 1.5rem; /* 24px */
  }
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>/* Heading link — copy anchor URL to clipboard */
document.querySelectorAll('.heading-link-icon').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const url = button.dataset.clipboardText;
    try {
      await navigator.clipboard.writeText(url);
      showToast('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  });
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Headings */
--h1-title/font-size     Mobile: 3.125rem / 50px   →   Widescreen: 5rem / 80px
--h1-title/line-height   Mobile: 3.5rem / 56px     →   Widescreen: 6.25rem / 100px
--h1-title+p/font-size   Mobile: 1rem / 16px       →   Widescreen: 2rem / 32px
--h1-title+p/line-height Mobile: 1.75rem / 28px    →   Widescreen: 3.5rem / 56px
--h1/font-size           Mobile: 3.125rem / 50px   →   Widescreen: 4.5rem / 72px
--h1/line-height         Mobile: 3.5rem / 56px     →   Widescreen: 5.625rem / 90px
--h2/font-size           Mobile: 2.375rem / 38px   →   Widescreen: 3.75rem / 60px
--h2/line-height         Mobile: 2.625rem / 42px   →   Widescreen: 4.625rem / 74px
--h3/font-size           Mobile: 1.75rem / 28px    →   Widescreen: 3.125rem / 50px
--h3/line-height         Mobile: 2rem / 32px       →   Widescreen: 3.875rem / 62px
--h4/font-size           Mobile: 1.5rem / 24px     →   Widescreen: 2.625rem / 42px
--h4/line-height         Mobile: 1.875rem / 30px   →   Widescreen: 3.25rem / 52px
--h5/font-size           Mobile: 1.25rem / 20px    →   Widescreen: 2rem / 32px
--h5/line-height         Mobile: 1.625rem / 26px   →   Widescreen: 2.5rem / 40px

/* Body and UI */
--p/font-size            Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px
--p/line-height          Mobile: 1.5rem / 24px     →   Widescreen: 3.5rem / 56px
--list/font-size         Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px
--list/line-height       Mobile: 1.25rem / 20px    →   Widescreen: 2.125rem / 34px
--small-font-size        Mobile: 0.75rem / 12px    →   Widescreen: 1.25rem / 20px
--small-line-height      Mobile: 1.25rem / 20px    →   Widescreen: 1.875rem / 30px
--fine-font-size         Mobile: 0.625rem / 10px   →   Widescreen: 1rem / 16px
--fine-line-height       Mobile: 1rem / 16px.      →   Widescreen: 1.5rem / 24px</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> &mdash; W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> &mdash; Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> &mdash; Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> &mdash; HTML, CSS, JavaScript reference</li>
        <li><a href="https://fonts.google.com/specimen/Ovo" target="_blank">Ovo on Google Fonts</a> &mdash; Headline typeface</li>
        <li><a href="https://fonts.google.com/specimen/Montserrat" target="_blank">Montserrat on Google Fonts</a> &mdash; Body and interface typeface</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html" target="_blank">WCAG 2.1: Understanding Text Spacing</a> &mdash; Accessibility requirements for text spacing</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" target="_blank">MDN: CSS Values and Units</a> &mdash; Understanding rem, em, and other relative units</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Foundations/Typography',
};

export default meta;

export const Documentation = () => createTypographyDocumentation();
