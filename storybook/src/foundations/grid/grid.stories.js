function createGridDocumentation() {
  return `
    <article class="delta-docs">
      <h1>Grid</h1>
      <p>A responsive grid system provides structure and consistency across layouts, helping designers and developers create balanced, organized interfaces.</p>

      <hr />

      <h2>Grid philosophy</h2>
      <p>The Delta Design System uses a flexible, fluid grid that adapts to different screen sizes. The grid separates architecture from presentation &mdash; content is structured using a 12-column system, while the visual display adapts to show 4, 8, or 12 columns based on viewport width.</p>

      <hr />

      <h2>The grid system</h2>

      <p>The grid consists of an architectural layer (12-column structure) and a presentation layer (responsive visual columns).</p>

      <h3>Architecture vs. presentation</h3>

      <p><strong>Architecture layer (12-column system):</strong> The underlying structural foundation that remains constant across all breakpoints. Content is architected using 12-column proportions &mdash; a 6-column span represents 50% width whether on mobile, tablet, or widescreen.</p>

      <p><strong>Presentation layer (4/8/12 visual columns):</strong> How the architecture renders visually at each breakpoint. Mobile displays 4 visible columns, tablet displays 8, widescreen displays all 12. Content automatically wraps to new rows when it exceeds the visible grid.</p>

      <p>The grid always thinks in terms of 12 columns, but displays different numbers of visual columns at each breakpoint. When content exceeds the available visual columns, it wraps to the next row:</p>
      <ul>
        <li><strong>Mobile:</strong> 4 visual columns &mdash; content wraps after column 4</li>
        <li><strong>Tablet:</strong> 8 visual columns &mdash; content wraps after column 8</li>
        <li><strong>Widescreen:</strong> 12 visual columns &mdash; full 12-column structure visible</li>
      </ul>
      <p>A layout with three 4-column items fits perfectly on widescreen (4 + 4 + 4 = 12). On tablet, the first two items display (4 + 4 = 8), and the third wraps to a new row. On mobile, each item wraps to its own row since each spans all 4 visible columns.</p>

      <h3>Grid structure</h3>

      <p>The responsive column structure:</p>
      <ul>
        <li><strong>Mobile:</strong> 4 columns (visual presentation)</li>
        <li><strong>Tablet:</strong> 8 columns (visual presentation)</li>
        <li><strong>Widescreen:</strong> 12 columns (visual presentation)</li>
      </ul>

      <p><strong>Gutters:</strong> 1rem / 16px between columns, consistent across all breakpoints.</p>
      <p><strong>Margins:</strong> Variable based on implementation needs &mdash; no prescribed container max-widths.</p>

      <h3>Breakpoints</h3>

      <table>
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Range</th>
            <th>Columns</th>
            <th>Media query</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mobile</td>
            <td>0&ndash;767px</td>
            <td>4</td>
            <td>Default (no query)</td>
          </tr>
          <tr>
            <td>Tablet</td>
            <td>768&ndash;1279px</td>
            <td>8</td>
            <td><code>@media (min-width: 48rem)</code></td>
          </tr>
          <tr>
            <td>Widescreen</td>
            <td>1280px+</td>
            <td>12</td>
            <td><code>@media (min-width: 80rem)</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Visual grid samples</h3>

      <p><strong>Mobile (4 columns):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the 4-column mobile visual grid sample exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Tablet (8 columns):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the 8-column tablet visual grid sample exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Widescreen (12 columns):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the 12-column widescreen visual grid sample exactly as shown in the reference documentation.</p>
      </div>

      <h3>Fluid grid dynamics</h3>

      <p>The Delta grid system is fluid &mdash; column widths are percentage-based rather than fixed pixels. The 12-column architecture uses proportional widths that scale with the container.</p>

      <p>In the 12-column system, each column represents 1/12th (approximately 8.33%) of the total width. When content spans multiple columns, those proportions combine:</p>
      <ul>
        <li><strong>3 columns:</strong> 25% width (3 ÷ 12 = 0.25)</li>
        <li><strong>6 columns:</strong> 50% width (6 ÷ 12 = 0.50)</li>
        <li><strong>8 columns:</strong> 66.67% width (8 ÷ 12 ≈ 0.667)</li>
        <li><strong>12 columns:</strong> 100% width (12 ÷ 12 = 1.00)</li>
      </ul>

      <p>Columns in a row typically add up to 12, representing 100% of the available width: two equal columns (6 + 6), a sidebar layout (8 + 4), three equal columns (4 + 4 + 4), or an asymmetric split (7 + 5). Columns don't have to add up to 12 &mdash; content can span fewer columns and be centered within the grid &mdash; but understanding this math helps create balanced, intentional layouts.</p>

      <h3>Column spanning</h3>

      <p>Content spans columns using the 12-column architecture. The same column span maintains its proportional width across all breakpoints, but may wrap to new rows based on the visible grid.</p>

      <table>
        <thead>
          <tr>
            <th>Span</th>
            <th>Proportion</th>
            <th>Common use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12 columns</td>
            <td>100%</td>
            <td>Full-width content, headers, banners</td>
          </tr>
          <tr>
            <td>8 columns</td>
            <td>66.67%</td>
            <td>Main content area in sidebar layouts</td>
          </tr>
          <tr>
            <td>6 columns</td>
            <td>50%</td>
            <td>Equal halves, side-by-side content</td>
          </tr>
          <tr>
            <td>4 columns</td>
            <td>33.33%</td>
            <td>Three-up cards or panels</td>
          </tr>
          <tr>
            <td>3 columns</td>
            <td>25%</td>
            <td>Four-up cards, narrow sidebars</td>
          </tr>
        </tbody>
      </table>

      <p>These proportions remain constant &mdash; a 6-column element is always 50% width, whether the viewport displays 4, 8, or 12 visual columns.</p>

      <h3>Common layout patterns</h3>

      <p><strong>Fifty (50/50 split):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the 50/50 split layout pattern exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Thirds (33/33/33 split):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the thirds layout pattern exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Fourths (25/25/25/25 split):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the fourths layout pattern exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Sidebar (66/33 split):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the sidebar layout pattern exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Golden ratio (58/42 split):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the golden ratio layout pattern exactly as shown in the reference documentation.</p>
      </div>

      <p><strong>Centered content (8 columns centered):</strong></p>
      <div class="delta-docs__placeholder">
        <span class="delta-docs__placeholder-label">Step 2 live specimen placeholder</span>
        <p>Render the centered content layout pattern exactly as shown in the reference documentation.</p>
      </div>

      <hr />

      <h2>Accessibility</h2>

      <h3>Visual hierarchy</h3>

      <p>Use the grid to create clear visual hierarchy. Important content should be prominent and easy to locate. The grid helps organize information so users can quickly scan and understand page structure.</p>

      <h3>Reading order</h3>

      <p>Maintain logical reading order in your grid layouts. Screen readers follow DOM order, not visual order. Ensure your HTML structure matches the expected reading sequence.</p>

      <ul>
        <li><strong>Top to bottom:</strong> Content should flow naturally from top to bottom.</li>
        <li><strong>Left to right:</strong> In left-to-right languages, content flows left to right.</li>
        <li><strong>Avoid reordering:</strong> Don't use CSS to visually reorder content in ways that break logical flow.</li>
      </ul>

      <h3>Responsive considerations</h3>

      <p>As layouts reflow at different breakpoints, ensure content remains in a logical order. A multi-column widescreen layout that stacks on mobile should stack in an order that makes sense for screen reader users.</p>

      <hr />

      <h2>Usage</h2>

      <h3>Mobile-first approach</h3>

      <p>Design for mobile first, then enhance for larger screens. Starting with the most constrained viewport forces you to prioritize content, simplify architecture, and make deliberate design decisions.</p>

      <p>Benefits of mobile-first design:</p>
      <ul>
        <li><strong>Content optimization:</strong> Limited space forces focus on essential content.</li>
        <li><strong>Performance:</strong> Mobile constraints encourage lean, efficient designs.</li>
        <li><strong>Progressive enhancement:</strong> Larger screens provide space for better organization and readability &mdash; not additional features that break responsive design.</li>
        <li><strong>Future-proof:</strong> Mobile traffic continues to grow globally.</li>
      </ul>

      <h3>Responsive behavior</h3>

      <p>Content reflows naturally at each breakpoint based on column spans. A widescreen layout with three 4-column items displays all three side-by-side. On tablet's 8-column grid, the first two items fit (4 + 4 = 8), and the third wraps to a new row. On mobile's 4-column grid, each item wraps to its own row.</p>

      <p>Example &mdash; three-column layout at each breakpoint:</p>
      <ul>
        <li><strong>Widescreen (12 columns):</strong> Three items side-by-side, each spanning 4 columns (4 + 4 + 4 = 12).</li>
        <li><strong>Tablet (8 columns):</strong> First two items on row 1 (4 + 4 = 8), third item wraps to row 2.</li>
        <li><strong>Mobile (4 columns):</strong> Each item on its own row (each spans all 4 columns).</li>
      </ul>

      <h3>Grid in Figma</h3>

      <p>Layout Grid styles are included in the Figma file for each breakpoint. Apply them to your frames to instantly set up the grid system:</p>
      <ul>
        <li><strong>Type:</strong> Columns</li>
        <li><strong>Count:</strong> 4 (mobile), 8 (tablet), 12 (widescreen)</li>
        <li><strong>Gutter:</strong> 16px</li>
        <li><strong>Margin:</strong> As needed for your layout</li>
      </ul>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Use the grid consistently</strong></p>
          <p>Align content to the 12-column architecture to maintain visual consistency across your layouts.</p>

          <p><strong>Design mobile-first</strong></p>
          <p>Start with mobile constraints to optimize content and architecture before enhancing for larger viewports.</p>

          <p><strong>Maintain standard gutter widths</strong></p>
          <p>Use consistent 1rem / 16px gutters between columns to preserve the integrity of the grid.</p>

          <p><strong>Center narrow content</strong></p>
          <p>Use fewer columns and center the content area for better readability when text or content doesn't need full width.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't ignore breakpoints</strong></p>
          <p>Failing to plan for mobile and tablet creates poor experiences on those devices.</p>

          <p><strong>Don't eliminate gutters</strong></p>
          <p>Removing gutters creates cramped, difficult-to-read layouts with no breathing room between content.</p>

          <p><strong>Don't break reading order</strong></p>
          <p>Visual reordering that doesn't match DOM order harms accessibility for keyboard and screen reader users.</p>

          <p><strong>Don't create overly complex grids</strong></p>
          <p>Simple, predictable layouts are easier to implement, maintain, and more intuitive for users to navigate.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>CSS</h3>
      <pre><code>/* 12-column grid architecture */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem; /* 16px */
}

/* Column span utilities */
.col-span-3  { grid-column: span 3; }   /* 25% — quarter */
.col-span-4  { grid-column: span 4; }   /* 33.33% — third */
.col-span-6  { grid-column: span 6; }   /* 50% — half */
.col-span-8  { grid-column: span 8; }   /* 66.67% — two-thirds */
.col-span-12 { grid-column: span 12; }  /* 100% — full width */

/* Responsive utilities */
@media (min-width: 48rem) {
  .tablet\\:col-span-8 { grid-column: span 8; }
}

@media (min-width: 80rem) {
  .widescreen\\:col-span-12 { grid-column: span 12; }
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Grid tokens */
--grid-columns-mobile:     4         /* Presentation layer */
--grid-columns-tablet:     8         /* Presentation layer */
--grid-columns-widescreen: 12        /* Presentation layer — also architecture layer */
--grid-gutter:             1rem / 16px (md)

/* Breakpoints (use rem in all media queries) */
--breakpoint-tablet:       48rem  / 768px
--breakpoint-widescreen:   80rem  / 1280px

/* Spacing token used for gutter */
md    Mobile/Tablet: 0.5rem / 8px   →   Widescreen: 1rem / 16px</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> &mdash; W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> &mdash; Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> &mdash; Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> &mdash; HTML, CSS, JavaScript reference</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" target="_blank">MDN: CSS Grid Layout</a> &mdash; Official CSS Grid documentation</li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS-Tricks: Complete Guide to CSS Grid</a> &mdash; Comprehensive CSS Grid reference</li>
        <li><a href="https://web.dev/patterns/layout/" target="_blank">web.dev: Layout Patterns</a> &mdash; Responsive layout patterns and techniques</li>
        <li><a href="https://www.interaction-design.org/literature/article/the-grid-system-building-a-solid-design-layout" target="_blank">IxDF: The Grid System</a> &mdash; Grid fundamentals in design</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Foundations/Grid',
};

export default meta;

export const Documentation = () => createGridDocumentation();
