function createBannersDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Banners</h1>
      <p>Banners are prominent content blocks for hero sections, promotional areas, and feature highlights. They combine imagery with the Content component to create engaging layouts with multiple alignment and orientation options.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Banners consist of two distinct sub-components, each with their own structure:</p>

      <h3>Background image</h3>
      <p>Full-bleed image banner with overlaid content:</p>
      <ul>
        <li><strong>Container:</strong> Outer wrapper with border-radius and overflow clipping</li>
        <li><strong>Background image:</strong> Full-cover image layer filling the container</li>
        <li><strong>Overlay (optional):</strong> Semi-transparent dark layer over the image to improve text readability</li>
        <li><strong>Content:</strong> Content component instance with heading, body text, and optional CTAs</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Background image banner specimen placeholder">
        <p><strong>Step 2 placeholder:</strong> Live Background image banner specimens will be added here.</p>
      </div>

      <h3>Split</h3>
      <p>Two-panel banner with separate image and content regions:</p>
      <ul>
        <li><strong>Container:</strong> Flex wrapper managing panel layout and orientation</li>
        <li><strong>Image panel:</strong> Figure element containing the image with border-radius</li>
        <li><strong>Content panel:</strong> Content component instance with background color and padding</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Split banner specimen placeholder">
        <p><strong>Step 2 placeholder:</strong> Live Split banner specimens will be added here.</p>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Banners have two sub-components, each with their own set of variants.</p>

      <h3>Background image</h3>
      <p>Background image supports three configurable properties:</p>
      <ul>
        <li><strong>Alignment — Left (default):</strong> Content aligned to the left edge with left-aligned text. Use for most hero sections.</li>
        <li><strong>Alignment — Center:</strong> Content centered horizontally with center-aligned text. Use for campaign or announcement heroes.</li>
        <li><strong>Alignment — Right:</strong> Content aligned to the right edge with left-aligned text. Use when the image subject occupies the left.</li>
        <li><strong>Overlay — With overlay:</strong> A 50% black overlay darkens the image to improve text readability. Recommended when image tones are light or variable.</li>
        <li><strong>Overlay — Without overlay:</strong> Image shown without darkening. Only use when the image provides sufficient contrast for all text.</li>
        <li><strong>Size — Mobile:</strong> Height determined by content; no minimum height constraint.</li>
        <li><strong>Size — Widescreen:</strong> Enforces a minimum height of 17.75rem / 284px for visual impact on larger viewports.</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Background image banner variants placeholder">
        <p><strong>Step 2 placeholder:</strong> Live Background image variant specimens will be added here.</p>
      </div>

      <h3>Split</h3>
      <p>Split supports two configurable properties:</p>
      <ul>
        <li><strong>Orientation — Vertical:</strong> Image and content stacked, constrained to a maximum width matching the layout/fifty token.</li>
        <li><strong>Orientation — Horizontal:</strong> Image and content side-by-side at equal flex proportions. Enforces a minimum height for visual balance.</li>
        <li><strong>Direction — Default:</strong> Image panel first, content panel second.</li>
        <li><strong>Direction — Reverse:</strong> Content panel first, image panel second. Useful when alternating split banners in a series.</li>
      </ul>

      <div class="delta-docs__demo" aria-label="Split banner variants placeholder">
        <p><strong>Step 2 placeholder:</strong> Live Split banner variant specimens will be added here.</p>
      </div>

      <hr />

      <h2>Typography</h2>
      <p>Banners use the Content component for all typography. See the <a href="content_documentation.html">Content documentation</a> for complete specifications including eyebrow and footer/fine styles.</p>

      <hr />

      <h2>Spacing</h2>
      <p>Spacing values scale with the global token system. The tables below cover padding and gap only; dimension properties (min-height, max-width) are design intent values visible in Figma and are not documented here.</p>

      <h3>Background image</h3>
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
            <td>padding-left, padding-right</td>
            <td><code>components/banner/padding-l-r</code></td>
            <td>0rem / 0px</td>
            <td>2rem / 32px</td>
          </tr>
        </tbody>
      </table>

      <h3>Split</h3>
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
            <th>Element</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>border-radius</td>
            <td><code>border-radius/md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Colors</h2>

      <h3>Background image</h3>
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
            <td>Background image</td>
            <td>—</td>
            <td colspan="2">User-provided image</td>
          </tr>
          <tr>
            <td>Overlay</td>
            <td><code>overlay/dark</code></td>
            <td>rgba(0, 0, 0, 0.5)</td>
            <td>rgba(0, 0, 0, 0.5)</td>
          </tr>
          <tr>
            <td>Content text</td>
            <td><code>global/white</code></td>
            <td>#FFFFFF</td>
            <td>#FFFFFF</td>
          </tr>
          <tr>
            <td>Links</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF</td>
          </tr>
        </tbody>
      </table>

      <h3>Split</h3>
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
            <td>Image panel</td>
            <td>—</td>
            <td colspan="2">User-provided image</td>
          </tr>
          <tr>
            <td>Content panel background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Content text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Links</td>
            <td><code>text/link</code></td>
            <td>#FF5247 (brand/primary)</td>
            <td>#FFFFFF</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Background image always uses white text over the overlay. Split adapts its content panel background and text to match the active theme.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>Banners themselves are not interactive, but they contain interactive elements through the Content component. All interactive children must be keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the next interactive element (button, link) within the banner</li>
        <li><strong>Shift + Tab:</strong> Moves focus to the previous interactive element</li>
        <li><strong>Enter / Space:</strong> Activates the focused button or link</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use semantic HTML to ensure banner content is read in a logical order. For Background image, when the background is applied as a CSS property rather than an <code>&lt;img&gt;</code> element, the image is decorative and requires no alt text. When using an <code>&lt;img&gt;</code> element for the background, set <code>alt=""</code> if the image is decorative and the text content conveys the full message. For Split, always provide descriptive alt text on the <code>&lt;figure&gt;</code> image.</p>

      <h3>ARIA attributes</h3>
      <ul>
        <li><strong>role="region" + aria-label:</strong> Consider wrapping the banner in a <code>&lt;section&gt;</code> with an <code>aria-label</code> (e.g., "Hero" or "Feature highlight") to give screen reader users a landmark for navigation</li>
        <li><strong>aria-hidden="true":</strong> Apply to purely decorative images so screen readers skip them</li>
        <li><strong>aria-label on CTAs:</strong> If button or link text is generic (e.g., "Learn more"), add an <code>aria-label</code> that includes the topic (e.g., "Learn more about our pricing")</li>
      </ul>

      <h3>Focus management</h3>
      <p>Focus indicators must remain visible on all interactive elements within banners. Do not suppress the browser's default focus ring. When a banner contains a primary CTA, ensure it is the first focusable element in the banner's tab order.</p>

      <h3>Color contrast</h3>
      <p>Text overlaid on imagery must meet a minimum 4.5:1 contrast ratio (WCAG AA). The 50% black overlay (<code>overlay/dark</code>) typically achieves this for white text on mid-tone images, but always verify with real imagery. For Split, the <code>text/default</code> token resolves to black on white in light mode and white on <code>brand/secondary-dark</code> in dark mode — both combinations meet WCAG AA.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use banners when you need to:</p>
      <ul>
        <li>Create a hero section at the top of a page with strong visual impact</li>
        <li>Highlight a feature or promotion with supporting imagery</li>
        <li>Build storytelling sections that pair image and copy at equal visual weight</li>
        <li>Anchor a campaign or landing page with a compelling full-bleed image</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use banners when:</p>
      <ul>
        <li>No imagery is available — use a Content component directly instead</li>
        <li>The content requires more than a heading, short body, and one or two CTAs — use a full page layout rather than a banner</li>
        <li>The section is one of many repeated items — use a Card component instead</li>
        <li>Imagery is purely illustrative with no connection to the message — decorative images reduce credibility in this context</li>
      </ul>

      <h3>Content guidelines</h3>
      <p>Banners content should be concise and action-oriented:</p>
      <ul>
        <li><strong>Keep headlines concise:</strong> 5–10 words maximum for scanability; use the h1-title style for primary heroes, h2 for secondary banners</li>
        <li><strong>Lead with value:</strong> Headlines and body text should communicate benefit to the user, not internal feature names</li>
        <li><strong>Limit body text:</strong> 2–3 sentences maximum; longer copy belongs in the page body below the banner</li>
        <li><strong>Write clear CTAs:</strong> Use action verbs (e.g., "Get Started", "View Plans") rather than generic labels like "Click here"</li>
        <li><strong>Choose images carefully:</strong> Images should reinforce the message, not distract from it; for Background image, confirm readability with real imagery before finalising</li>
      </ul>

      <h3>Placement</h3>
      <p>Background image is designed for full-width hero placement at the top of a page, directly below the site header. Split works well both as a hero alternative and as a mid-page feature section. When using multiple Split components in sequence, alternate direction (default / reverse) to create visual rhythm.</p>

      <h3>Best practices</h3>
      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>
          <p><strong>Use overlay for readability</strong></p>
          <p>Enable the overlay on Background image whenever image tones are light or variable. Readability always takes priority over showing the full image.</p>
          <p><strong>Maintain heading hierarchy</strong></p>
          <p>Use the h1-title style for the primary hero banner and h2 for all secondary banners to preserve a logical document outline.</p>
          <p><strong>Test with real content</strong></p>
          <p>Verify layout and contrast with actual images and copy before finalising. Placeholder images often mask contrast and cropping problems.</p>
          <p><strong>Design mobile-first</strong></p>
          <p>Confirm that banners content is readable and impactful on small screens before scaling up. Content that feels sparse on mobile often works well on desktop.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>
          <p><strong>Don't overload with content</strong></p>
          <p>Banners should be scannable in seconds. Avoid long paragraphs, multiple competing CTAs, or dense copy that belongs in the page body.</p>
          <p><strong>Don't rely on images for critical information</strong></p>
          <p>Text in banners must convey the complete message. Images should enhance, not replace, written content.</p>
          <p><strong>Don't skip contrast checking</strong></p>
          <p>Never sacrifice readability for aesthetics. Enable the overlay or adjust text color until the 4.5:1 contrast ratio is met.</p>
          <p><strong>Don't use low-quality images</strong></p>
          <p>Pixelated or poorly cropped images undermine credibility. Use high-resolution assets that scale cleanly across viewport sizes.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Background image — left aligned, with overlay --&gt;
&lt;div class="background-image alignment-left"&gt;
  &lt;img src="hero.jpg" alt=""&gt;
  &lt;div class="overlay"&gt;&lt;/div&gt;
  &lt;div class="content"&gt;
    &lt;h1&gt;Hero Headline&lt;/h1&gt;
    &lt;p&gt;Supporting text that explains the value proposition.&lt;/p&gt;
    &lt;div class="content-cta"&gt;
      &lt;button class="button-filled"&gt;Get Started&lt;/button&gt;
      &lt;a href="#"&gt;Learn More&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Background image — center aligned, no overlay --&gt;
&lt;div class="background-image alignment-center"&gt;
  &lt;img src="hero.jpg" alt=""&gt;
  &lt;div class="content"&gt;
    &lt;h2&gt;Centered Headline&lt;/h2&gt;
    &lt;p&gt;Centered body text.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Split — vertical, default direction --&gt;
&lt;div class="split orientation-vertical direction-default"&gt;
  &lt;figure class="figure"&gt;
    &lt;img src="feature.jpg" alt="Description of the feature"&gt;
  &lt;/figure&gt;
  &lt;div class="content"&gt;
    &lt;h2&gt;Feature Headline&lt;/h2&gt;
    &lt;p&gt;Description of the feature.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Split — horizontal, reverse direction --&gt;
&lt;div class="split orientation-horizontal direction-reverse"&gt;
  &lt;div class="content"&gt;
    &lt;h2&gt;Feature Headline&lt;/h2&gt;
    &lt;p&gt;Description of the feature.&lt;/p&gt;
    &lt;div class="content-cta"&gt;
      &lt;button class="button-outline"&gt;Learn More&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;figure class="figure"&gt;
    &lt;img src="feature.jpg" alt="Description of the feature"&gt;
  &lt;/figure&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Background image */
.background-image {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.background-image img {
  position: absolute;
  inset: 0;
  object-fit: cover;
  border-radius: inherit;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background-color: var(--overlay-dark);
  border-radius: inherit;
}

/* Content */
.content {
  position: relative;
  z-index: 1;
  padding: var(--xl);
  color: var(--global-white);
}

/* Alignment variants */
.background-image.alignment-left .content {
  align-items: flex-start;
  text-align: left;
}

.background-image.alignment-center .content {
  align-items: center;
  margin: 0 auto;
  text-align: center;
}

.background-image.alignment-right .content {
  align-items: flex-end;
  margin-left: auto;
  text-align: left;
}

@media (min-width: 80rem) {
  .background-image {
    padding-left: var(--components-banner-padding-l-r);
    padding-right: var(--components-banner-padding-l-r);
  }
}

/* Split */
.split {
  display: flex;
  background-color: var(--page-background);
  color: var(--text-default);
}

/* Vertical orientation */
.split.orientation-vertical {
  flex-direction: column;
}

.split.orientation-vertical .content {
  padding-top: var(--xl);
  padding-bottom: var(--xl);
}

/* Horizontal orientation */
.split.orientation-horizontal {
  flex-direction: row;
  align-items: center;
  gap: var(--md);
}

.split.orientation-horizontal .figure,
.split.orientation-horizontal .content {
  flex: 1;
}

.split.orientation-horizontal .content {
  padding: var(--xl);
}

/* Reverse direction */
.split.orientation-vertical.direction-reverse {
  flex-direction: column-reverse;
}

.split.orientation-horizontal.direction-reverse {
  flex-direction: row-reverse;
}

/* Figure / image */
.figure {
  margin: 0;
  overflow: clip;
  border-radius: var(--border-radius-md);
}

.figure img {
  object-fit: cover;
  border-radius: inherit;
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Spacing */
--xl                            Mobile: 1rem / 16px    →   Widescreen: 2rem / 32px
--md                            Mobile: 0.5rem / 8px   →   Widescreen: 1rem / 16px
--components-banner-padding-l-r Mobile: 0rem / 0px     →   Widescreen: 2rem / 32px

/* Border-radius */
--border-radius-md   Mobile: 0.5rem / 8px   →   Widescreen: 1rem / 16px

/* Colors */
--overlay-dark      Light: rgba(0, 0, 0, 0.5)   Dark: rgba(0, 0, 0, 0.5)
--global-white      Light: #FFFFFF               Dark: #FFFFFF
--text-default      Light: #000000               Dark: #FFFFFF
--text-link         Light: #FF5247               Dark: #FFFFFF
--page-background   Light: #FFFFFF               Dark: #01232D</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/tutorials/images/" target="_blank">W3C: Images Tutorial</a> — Accessible image implementation</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" target="_blank">MDN: Responsive Images</a> — Using srcset and picture element</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> — HTML, CSS, JavaScript reference</li>
        <li><a href="https://www.nngroup.com/articles/hero-image/" target="_blank">Nielsen Norman Group: Hero Images</a> — UX best practices for hero banners</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Banners',
};

export default meta;

export const Documentation = () => createBannersDocumentation();
