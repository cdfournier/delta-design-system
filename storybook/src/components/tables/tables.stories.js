function createTablesDocumentation() {
  return `
    <style>
      .delta-docs .table-specimen-shell {
        overflow-x: auto;
      }

      .delta-docs .table-specimen {
        display: grid;
        width: min(100%, var(--components-table-specimen-width));
        min-width: var(--components-table-specimen-min-width);
        background: var(--page-background);
      }

      .delta-docs .table-specimen__row {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: var(--spacing-md);
        padding: var(--spacing-sm);
        border-bottom: var(--docs-rule-width) solid var(--neutral-gray-medium);
      }

      .delta-docs .table-specimen__row--header {
        align-items: center;
        background: var(--section-background);
      }

      .delta-docs .table-specimen__cell {
        display: flex;
        align-items: center;
        min-width: 0;
        padding: var(--spacing-sm);
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--components-table-font-size);
        line-height: var(--components-table-line-height);
        white-space: nowrap;
      }

      .delta-docs .table-specimen__cell--header {
        font-weight: var(--font-weight-bold);
      }
    </style>
    <article class="delta-docs">
      <h1>Tables</h1>
      <p>Tables display structured data in rows and columns, making it easy to scan, compare, and understand relationships between data points. Tables are composed of a header row, body rows, and three cell variants.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Tables consist of:</p>
      <ul>
        <li><strong>Table cell:</strong> Individual data cell, available in three variants — text, header, and control</li>
        <li><strong>Header row (tr):</strong> A row of header cells with a distinct background color</li>
        <li><strong>Header row group (thead):</strong> Container for the header row</li>
        <li><strong>Body row (tr):</strong> A row of text or control cells</li>
        <li><strong>Body row group (tbody):</strong> Container for all body rows</li>
        <li><strong>Table (assembled):</strong> The complete component combining thead and tbody within a scroll wrapper</li>
      </ul>

      <div class="delta-docs__demo table-specimen-shell" aria-label="Tables anatomy specimen">
        <div class="table-specimen">
          <div class="table-specimen__row table-specimen__row--header">
            <div class="table-specimen__cell table-specimen__cell--header">Table header</div>
            <div class="table-specimen__cell table-specimen__cell--header">Table header</div>
            <div class="table-specimen__cell table-specimen__cell--header">Table header</div>
            <div class="table-specimen__cell table-specimen__cell--header">Table header</div>
            <div class="table-specimen__cell table-specimen__cell--header">Table header</div>
          </div>
          <div class="table-specimen__row">
            <div class="table-specimen__cell">Table cell</div>
            <div class="table-specimen__cell">Table cell</div>
            <div class="table-specimen__cell">Table cell</div>
            <div class="table-specimen__cell">Table cell</div>
            <div class="table-specimen__cell">Table cell</div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Variants</h2>
      <p>Tables have three cell variants that can be composed into any table structure.</p>
      <ul>
        <li><strong>Text:</strong> Standard body cell for displaying data content. Uses regular-weight text and appears in tbody rows.</li>
        <li><strong>Header:</strong> Column heading cell. Uses bold-weight text and appears in the thead row, which has a distinct background color.</li>
        <li><strong>Control:</strong> Interactive cell containing a checkbox. Used for row selection or other binary inputs. The checkbox uses the brand primary color for its border.</li>
      </ul>

      <hr />

      <h2>Typography</h2>
      <p>Table typography uses component-specific tokens that scale responsively between breakpoints.</p>

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
            <td><code>components/table/font-size</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td>line-height</td>
            <td><code>components/table/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.875rem / 30px</td>
          </tr>
        </tbody>
      </table>

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
            <td>padding</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
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
            <td>Table background</td>
            <td><code>page/background</code></td>
            <td>#FFFFFF (global/white)</td>
            <td>#01232D (brand/secondary-dark)</td>
          </tr>
          <tr>
            <td>Header row background</td>
            <td><code>section/background</code></td>
            <td>#EEEEEE (global/gray-light)</td>
            <td>#003442 (brand/secondary)</td>
          </tr>
          <tr>
            <td>Row border-bottom</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Cell color</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Checkbox border, Checkbox fill (checked)</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Table and header row backgrounds adapt to theme via the <code>page/background</code> and <code>section/background</code> semantic tokens. Cell text inverts for readability. The row border uses the same <code>global/gray-medium</code> value in both modes — verify contrast against dark backgrounds in your implementation.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>All interactive elements within table cells must be fully keyboard accessible:</p>
      <ul>
        <li><strong>Tab:</strong> Moves focus to the next interactive element (checkbox, link) within the table</li>
        <li><strong>Shift + Tab:</strong> Moves focus to the previous interactive element</li>
        <li><strong>Space:</strong> Toggles a focused checkbox</li>
        <li><strong>Enter:</strong> Activates a focused link or button within a cell</li>
      </ul>

      <h3>Screen readers</h3>
      <p>Use proper semantic HTML table elements for correct screen reader interpretation. The table structure must include <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> to separate header and body row groups. All <code>&lt;th&gt;</code> elements must carry a <code>scope="col"</code> attribute so screen readers can associate data cells with their column headings. Provide a <code>&lt;caption&gt;</code> — either visible or visually hidden — describing the table's content so users understand the data before navigating into it.</p>

      <h3>ARIA attributes</h3>
      <p>The following ARIA attributes apply to control cells:</p>
      <ul>
        <li><strong>aria-label:</strong> Use on the select-all checkbox to provide context, e.g. <code>aria-label="Select all rows"</code></li>
        <li><strong>aria-label (row checkboxes):</strong> Describe which row the checkbox controls, e.g. <code>aria-label="Select row: Jane Smith"</code></li>
        <li><strong>indeterminate (property):</strong> Set via JavaScript on the select-all checkbox when only some rows are selected — not an ARIA attribute, but required for correct assistive technology announcement</li>
      </ul>

      <h3>Focus management</h3>
      <p>All interactive elements within table cells must display a visible focus indicator. Use the browser default focus ring or a custom outline that meets the WCAG 2.1 focus contrast requirement. Tab order must flow logically through the table — typically left-to-right, top-to-bottom through interactive cells.</p>

      <h3>Color contrast</h3>
      <p>Cell text must achieve a minimum 4.5:1 contrast ratio against its row background in both light and dark modes. Header text must maintain contrast against the <code>section/background</code> fill. The row border (<code>global/gray-medium</code>, #CCCCCC) uses the same value in dark mode — verify this provides sufficient visual separation against the <code>brand/secondary</code> header background (#003442) in your implementation.</p>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use Tables when you need to:</p>
      <ul>
        <li>Display structured data with clearly defined rows and columns</li>
        <li>Allow users to scan and compare values across multiple attributes</li>
        <li>Present data that has meaningful column headers</li>
        <li>Support row-level selection or actions via control cells</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use Tables when:</p>
      <ul>
        <li>Displaying a single column of items — use a List component instead</li>
        <li>Arranging page layout — tables are for tabular data only; use CSS grid or flexbox for layout</li>
        <li>The data has no meaningful relationship between columns</li>
        <li>A simpler key/value presentation would be clearer — use a Details component instead</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Keep header labels short:</strong> Aim for 1–3 words per column heading to prevent header rows from becoming visually dominant</li>
        <li><strong>Align data consistently:</strong> Numbers are typically right-aligned; text is left-aligned. Choose one alignment per column and apply it to both header and body cells</li>
        <li><strong>Avoid empty cells:</strong> Use a dash or "—" rather than leaving cells blank; empty cells are ambiguous for all users</li>
        <li><strong>Limit column count:</strong> Wide tables with many columns become difficult to scan on narrow screens; consider splitting or summarising data where possible</li>
      </ul>

      <h3>Placement</h3>
      <p>Tables should be wrapped in a horizontally scrollable container (<code>.table-wrapper</code>) at all viewport sizes to gracefully handle overflow on narrow screens. Avoid placing tables inside constrained containers that cannot scroll horizontally. For tables with many rows, consider pagination or virtual scrolling rather than rendering the entire dataset at once.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>

          <p><strong>Use semantic table markup</strong></p>
          <p>Always use <code>&lt;th&gt;</code>, <code>&lt;thead&gt;</code>, and <code>&lt;tbody&gt;</code> for correct screen reader interpretation and column association.</p>

          <p><strong>Provide a caption</strong></p>
          <p>Describe the table's content with a visible or visually-hidden <code>&lt;caption&gt;</code> so users understand the data before reading it.</p>

          <p><strong>Label all control cell checkboxes</strong></p>
          <p>Give every checkbox a descriptive label that identifies which row or set of rows it affects.</p>

          <p><strong>Wrap tables in a scroll container</strong></p>
          <p>Use a horizontally scrollable wrapper to prevent layout breakage on narrow viewports.</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>

          <p><strong>Don't use tables for layout</strong></p>
          <p>Tables are for tabular data only. Use CSS grid or flexbox for page layout — layout tables are inaccessible and semantically incorrect.</p>

          <p><strong>Don't omit header cells</strong></p>
          <p>Columns without headers are inaccessible and confusing. Every column must have a <code>&lt;th&gt;</code> with a <code>scope</code> attribute.</p>

          <p><strong>Don't pack too many columns</strong></p>
          <p>Overly wide tables are hard to scan. Consider splitting data across multiple tables or summarising where possible.</p>

          <p><strong>Don't leave cells empty</strong></p>
          <p>Use a placeholder such as "—" to signal intentional absence of data. Empty cells are ambiguous for all users, including screen reader users.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Table with all three cell variants --&gt;
&lt;div class="table-wrapper"&gt;
  &lt;table class="table"&gt;
    &lt;caption class="visually-hidden"&gt;Team members and their roles&lt;/caption&gt;

    &lt;thead&gt;
      &lt;tr class="table-row"&gt;
        &lt;!-- Control header cell: select-all checkbox --&gt;
        &lt;th class="table-cell table-cell--control" scope="col"&gt;
          &lt;label class="table-checkbox-label"&gt;
            &lt;input type="checkbox"
                   class="table-checkbox"
                   aria-label="Select all rows"&gt;
          &lt;/label&gt;
        &lt;/th&gt;
        &lt;!-- Header cells --&gt;
        &lt;th class="table-cell table-cell--header" scope="col"&gt;Name&lt;/th&gt;
        &lt;th class="table-cell table-cell--header" scope="col"&gt;Role&lt;/th&gt;
        &lt;th class="table-cell table-cell--header" scope="col"&gt;Department&lt;/th&gt;
        &lt;th class="table-cell table-cell--header" scope="col"&gt;Status&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;

    &lt;tbody&gt;
      &lt;tr class="table-row"&gt;
        &lt;!-- Control body cell: row-selection checkbox --&gt;
        &lt;td class="table-cell table-cell--control"&gt;
          &lt;label class="table-checkbox-label"&gt;
            &lt;input type="checkbox"
                   class="table-checkbox"
                   aria-label="Select row: Jane Smith"&gt;
          &lt;/label&gt;
        &lt;/td&gt;
        &lt;!-- Text cells --&gt;
        &lt;td class="table-cell table-cell--text"&gt;Jane Smith&lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Designer&lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Product&lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Active&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class="table-row"&gt;
        &lt;td class="table-cell table-cell--control"&gt;
          &lt;label class="table-checkbox-label"&gt;
            &lt;input type="checkbox"
                   class="table-checkbox"
                   aria-label="Select row: Marcus Lee"&gt;
          &lt;/label&gt;
        &lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Marcus Lee&lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Engineer&lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Platform&lt;/td&gt;
        &lt;td class="table-cell table-cell--text"&gt;Active&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Scroll wrapper for narrow viewports */
.table-wrapper {
  overflow-x: auto;
}

/* Table */
.table {
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Rows */
.table-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: var(--sm);
  gap: var(--md);
  border-bottom: 1px solid var(--global/gray-medium);
}

/* Header row */
thead .table-row {
  background-color: var(--section/background);
  align-items: center;
}

/* Cells — shared */
.table-cell {
  flex: 1 0 0;
  padding: var(--sm);
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--components/table/font-size);
  line-height: var(--components/table/line-height);
  color: var(--text/default);
}

/* Control cell */
.table-cell--control {
  justify-content: center;
}

/* Checkbox — see Inputs documentation */
.table-checkbox {
  appearance: none;
  border: 1px solid var(--brand/primary);
  border-radius: var(--input/checkbox/border-radius);
  cursor: pointer;
  flex-shrink: 0;
}

.table-checkbox:checked {
  background-color: var(--brand/primary);
}

.table-checkbox-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--md);
  font-size: var(--components/table/font-size);
  line-height: var(--components/table/line-height);
  color: var(--text/default);
  cursor: pointer;
}

/* Visually hidden utility */
.visually-hidden {
  position: absolute;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}</code></pre>

      <h3>JavaScript</h3>
      <p>JavaScript is required to manage the indeterminate state of the select-all checkbox when only some rows are selected.</p>
      <pre><code>// Manage select-all checkbox indeterminate state
const selectAll = document.querySelector('.table-checkbox[aria-label="Select all rows"]');
const rowCheckboxes = document.querySelectorAll('.table-checkbox:not([aria-label="Select all rows"])');

function updateSelectAll() {
  const checkedCount = [...rowCheckboxes].filter(cb => cb.checked).length;
  selectAll.checked = checkedCount === rowCheckboxes.length;
  selectAll.indeterminate = checkedCount > 0 &amp;&amp; checkedCount &lt; rowCheckboxes.length;
}

selectAll.addEventListener('change', () => {
  rowCheckboxes.forEach(cb => { cb.checked = selectAll.checked; });
});

rowCheckboxes.forEach(cb => {
  cb.addEventListener('change', updateSelectAll);
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components-table-font-size    Mobile: 1rem / 16px    →   Widescreen: 1.5rem / 24px
--components-table-line-height  Mobile: 1.25rem / 20px →   Widescreen: 1.875rem / 30px

/* Spacing */
--sm    Mobile: 0.25rem / 4px   →   Widescreen: 0.5rem / 8px
--md    Mobile: 0.5rem / 8px    →   Widescreen: 1rem / 16px

/* Colors */
--section-background   Light: #EEEEEE   Dark: #003442
--global-gray-medium   Light: #CCCCCC   Dark: #CCCCCC
--text-default         Light: #000000   Dark: #FFFFFF
--brand-primary        Light: #FF5247   Dark: #FF5247
--page-background      Light: #FFFFFF   Dark: #01232D

/* Checkbox tokens — see Inputs documentation */</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">W3C: Tables Tutorial</a> — Accessible table markup patterns</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank">ARIA Authoring Practices Guide</a> — W3C patterns and widgets</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> — Web accessibility resources</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" target="_blank">MDN: &lt;table&gt;</a> — HTML table reference</li>
        <li><a href="https://www.nngroup.com/articles/data-tables/" target="_blank">Nielsen Norman Group: Data Tables</a> — UX best practices for tabular data</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Molecules/Tables',
};

export default meta;

export const Documentation = () => createTablesDocumentation();
