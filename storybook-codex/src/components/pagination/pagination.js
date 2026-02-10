import './pagination.css';

function breakpointWrap(content, sizeMode = 'auto') {
  if (sizeMode === 'auto') {
    return content;
  }

  return `<div data-breakpoint-mode="${sizeMode}">${content}</div>`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * @param {{
 *  total?: number;
 *  current?: number;
 *  label?: string;
 *  hideContainer?: boolean;
 *  interactive?: boolean;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createPagination({
  total = 4,
  current = 1,
  label = 'Pagination',
  hideContainer = false,
  interactive = true,
  sizeMode = 'auto',
} = {}) {
  const pageCount = clamp(Number(total) || 1, 1, 12);
  const activePage = clamp(Number(current) || 1, 1, pageCount);

  const dots = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const selected = page === activePage;

    return `
      <li class="dds-pagination__item" role="listitem">
        <button
          type="button"
          class="dds-pagination__dot ${selected ? 'is-selected' : ''}"
          aria-label="Page ${page}"
          ${selected ? 'aria-current="page"' : ''}
          ${interactive ? '' : 'disabled aria-disabled="true"'}
        ></button>
      </li>
    `;
  }).join('');

  return breakpointWrap(
    `
      <nav class="dds-pagination ${hideContainer ? 'dds-pagination--bare' : ''}" aria-label="${label}">
        <ul class="dds-pagination__list" role="list">
          ${dots}
        </ul>
      </nav>
    `,
    sizeMode,
  );
}

export function createPaginationShowcase() {
  return `
    <div class="dds-pagination-showcase">
      ${createPagination({ total: 4, current: 1 })}
      ${createPagination({ total: 4, current: 2 })}
      ${createPagination({ total: 4, current: 3 })}
      ${createPagination({ total: 4, current: 4 })}
      ${createPagination({ total: 6, current: 3 })}
    </div>
  `;
}
