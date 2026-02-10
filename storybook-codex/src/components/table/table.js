import { createIcon } from '../icon/icon';
import './table.css';

function breakpointWrap(content, sizeMode = 'auto') {
  if (sizeMode === 'auto') {
    return content;
  }

  return `<div data-breakpoint-mode="${sizeMode}">${content}</div>`;
}

function normalizeColumns(columns) {
  if (Array.isArray(columns) && columns.length > 0) {
    return columns;
  }

  if (typeof columns === 'string' && columns.trim()) {
    return columns
      .split('\n')
      .map((column) => column.trim())
      .filter(Boolean);
  }

  return ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'];
}

function normalizeRows(rows, columnCount, rowCount = 1) {
  if (Array.isArray(rows) && rows.length > 0) {
    return rows.map((row) => {
      const normalized = Array.isArray(row) ? row.slice(0, columnCount) : [String(row)];
      while (normalized.length < columnCount) {
        normalized.push('Table cell');
      }
      return normalized;
    });
  }

  const safeCount = Math.max(1, Number(rowCount) || 1);
  return Array.from({ length: safeCount }, () => Array.from({ length: columnCount }, () => 'Table cell'));
}

function createControlCell({ checked = false, label = 'Select row' } = {}) {
  const id = `dds-table-control-${Math.random().toString(36).slice(2, 9)}`;

  return `
    <td class="dds-table__cell dds-table__cell--control">
      <label class="dds-table__control" for="${id}" aria-label="${label}">
        <input class="dds-table__control-native dds-table__control-native--row" id="${id}" type="checkbox" ${checked ? 'checked' : ''} />
        <span class="dds-table__control-visual" aria-hidden="true">
          <span class="dds-table__control-icon">${createIcon({ type: 'check', decorative: true, strokeWidth: 2 })}</span>
        </span>
      </label>
    </td>
  `;
}

function createControlHeaderCell({ checked = false, label = 'Select all rows' } = {}) {
  const id = `dds-table-control-head-${Math.random().toString(36).slice(2, 9)}`;

  return `
    <th class="dds-table__cell dds-table__cell--control dds-table__cell--control-header" scope="col">
      <label class="dds-table__control" for="${id}" aria-label="${label}">
        <input
          class="dds-table__control-native dds-table__control-native--head"
          id="${id}"
          type="checkbox"
          ${checked ? 'checked' : ''}
          onchange="(function(input){const table=input.closest('.dds-table');if(!table){return;}const rows=[...table.querySelectorAll('.dds-table__control-native--row')];rows.forEach((rowInput)=>{rowInput.checked=input.checked;});})(this)"
        />
        <span class="dds-table__control-visual" aria-hidden="true">
          <span class="dds-table__control-icon">${createIcon({ type: 'check', decorative: true, strokeWidth: 2 })}</span>
        </span>
      </label>
    </th>
  `;
}

/**
 * @param {{
 *  columns?: string[]|string;
 *  rows?: string[][];
 *  rowCount?: number;
 *  includeControl?: boolean;
 *  checkedRows?: number[];
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createTable({
  columns = ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'],
  rows,
  rowCount = 1,
  includeControl = false,
  checkedRows = [],
  sizeMode = 'auto',
} = {}) {
  const normalizedColumns = normalizeColumns(columns);
  const normalizedRows = normalizeRows(rows, normalizedColumns.length, rowCount);
  const allRowsChecked =
    includeControl &&
    normalizedRows.length > 0 &&
    normalizedRows.every((_, index) => checkedRows.includes(index));

  return breakpointWrap(
    `
      <div class="dds-table-scroll" role="region" aria-label="Table" tabindex="0">
        <table class="dds-table">
          <thead class="dds-table__head">
            <tr class="dds-table__row dds-table__row--head">
              ${includeControl ? createControlHeaderCell({ checked: allRowsChecked }) : ''}
              ${normalizedColumns
                .slice(includeControl ? 1 : 0)
                .map(
                  (column) => `
                <th class="dds-table__cell dds-table__cell--header" scope="col">
                  <span class="dds-table__header-text">${column}</span>
                </th>
              `,
                )
                .join('')}
            </tr>
          </thead>
          <tbody class="dds-table__body">
            ${normalizedRows
              .map(
                (row, rowIndex) => `
              <tr class="dds-table__row dds-table__row--body">
                ${includeControl ? createControlCell({ checked: checkedRows.includes(rowIndex), label: `Select row ${rowIndex + 1}` }) : ''}
                ${row
                  .slice(includeControl ? 1 : 0)
                  .map(
                    (cell) => `
                      <td class="dds-table__cell">
                        <span class="dds-table__cell-text">${cell}</span>
                      </td>
                    `,
                  )
                  .join('')}
              </tr>
            `,
              )
              .join('')}
          </tbody>
        </table>
      </div>
    `,
    sizeMode,
  );
}

export function createTableShowcase() {
  return `
    <div class="dds-table-showcase">
      ${createTable({ rowCount: 1, includeControl: true, checkedRows: [0] })}
      ${createTable({ rowCount: 2 })}
      ${createTable({ rowCount: 4 })}
    </div>
  `;
}
