import './tables.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function checkIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5L9.5 17L19 7.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function dashIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
}

function checkbox({
  label = 'Select row',
  checked = false,
  indeterminate = false,
} = {}) {
  const checkedAttr = checked ? ' checked' : '';
  const stateClass = indeterminate ? ' is-indeterminate' : checked ? ' is-checked' : '';
  return `
    <label class="dds-table__checkbox-wrap${stateClass}">
      <input class="dds-table__checkbox" type="checkbox" aria-label="${escapeHtml(label)}"${checkedAttr} />
      <span class="dds-table__checkbox-mark" aria-hidden="true">${checked ? checkIcon() : indeterminate ? dashIcon() : ''}</span>
    </label>
  `;
}

/**
 * @param {{
 *  rowCount?: number;
 *  selectable?: boolean;
 *  headerState?: 'unchecked'|'checked'|'indeterminate';
 *  selectedRows?: number[];
 * }} args
 */
export function createTable({
  rowCount = 4,
  selectable = true,
  headerState = 'unchecked',
  selectedRows = [],
} = {}) {
  const rows = [
    ['Jane Smith', 'Designer', 'Product', 'Active'],
    ['Marcus Lee', 'Engineer', 'Platform', 'Active'],
    ['Ava Patel', 'Researcher', 'UX', 'Paused'],
    ['Noah Kim', 'Manager', 'Operations', 'Active'],
    ['Sam Rivera', 'Writer', 'Content', 'Draft'],
    ['Alex Chen', 'Developer', 'Web', 'Review'],
  ].slice(0, Math.max(1, Math.min(6, Number(rowCount) || 4)));

  const headerChecked = headerState === 'checked';
  const headerIndeterminate = headerState === 'indeterminate';

  const headControl = selectable
    ? `<th class="dds-table__cell dds-table__cell--header dds-table__cell--control">${checkbox({ label: 'Select all rows', checked: headerChecked, indeterminate: headerIndeterminate })}</th>`
    : '';

  const body = rows
    .map((row, index) => {
      const rowChecked = selectedRows.includes(index + 1);
      const controlCell = selectable
        ? `<td class="dds-table__cell dds-table__cell--control">${checkbox({ label: `Select row: ${row[0]}`, checked: rowChecked })}</td>`
        : '';
      return `
        <tr class="dds-table__row">
          ${controlCell}
          <td class="dds-table__cell dds-table__cell--text">${escapeHtml(row[0])}</td>
          <td class="dds-table__cell dds-table__cell--text">${escapeHtml(row[1])}</td>
          <td class="dds-table__cell dds-table__cell--text">${escapeHtml(row[2])}</td>
          <td class="dds-table__cell dds-table__cell--text">${escapeHtml(row[3])}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <div class="dds-table__scroll">
      <table class="dds-table" aria-label="Team members table">
        <caption class="dds-table__visually-hidden">Team members and their roles</caption>
        <thead>
          <tr class="dds-table__row dds-table__row--header">
            ${headControl}
            <th class="dds-table__cell dds-table__cell--header" scope="col">Name</th>
            <th class="dds-table__cell dds-table__cell--header" scope="col">Role</th>
            <th class="dds-table__cell dds-table__cell--header" scope="col">Department</th>
            <th class="dds-table__cell dds-table__cell--header" scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          ${body}
        </tbody>
      </table>
    </div>
  `;
}

function figureShell(content) {
  return `<section class="dds-tables-fig"><div class="dds-tables-fig__card">${content}</div></section>`;
}

export function createTablesAnatomyFigure() {
  return figureShell(createTable({ rowCount: 2, selectable: false }));
}

export function createTablesBestPracticesFigure() {
  return `
    <div class="dds-tables-doc__do-dont-grid">
      <section class="dds-tables-doc__do">
        <h4>Do</h4>
        <p><strong>Use semantic table markup</strong></p>
        <p>Always use <code>&lt;th&gt;</code>, <code>&lt;thead&gt;</code>, and <code>&lt;tbody&gt;</code> for correct screen reader interpretation and column association.</p>
        <p><strong>Provide a caption</strong></p>
        <p>Describe table content with a visible or visually hidden <code>&lt;caption&gt;</code>.</p>
        <p><strong>Label all control checkboxes</strong></p>
        <p>Give each checkbox a descriptive label that identifies the target row.</p>
        <p><strong>Wrap tables in a scroll container</strong></p>
        <p>Use horizontal scroll so tables remain usable on narrow viewports.</p>
      </section>
      <section class="dds-tables-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't use tables for layout</strong></p>
        <p>Use CSS grid or flexbox for layout, not tabular markup.</p>
        <p><strong>Don't omit header cells</strong></p>
        <p>Every column needs a header for accessibility and comprehension.</p>
        <p><strong>Don't overpack columns</strong></p>
        <p>Very wide tables are difficult to scan and compare.</p>
        <p><strong>Don't leave cells empty</strong></p>
        <p>Use placeholders such as "—" when data is intentionally missing.</p>
      </section>
    </div>
  `;
}
