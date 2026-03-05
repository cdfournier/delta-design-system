import './pagination.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * @param {{
 *  total?: number;
 *  current?: number;
 *  ariaLabel?: string;
 * }} args
 */
export function createPagination({
  total = 4,
  current = 1,
  ariaLabel = 'Pagination',
} = {}) {
  const count = Math.max(1, Math.min(20, Number(total) || 1));
  const selected = Math.max(1, Math.min(count, Number(current) || 1));

  const items = Array.from({ length: count }, (_, index) => {
    const page = index + 1;
    const selectedAttr = page === selected ? ' aria-current="page"' : '';
    const selectedClass = page === selected ? ' is-selected' : '';
    return `<li class="dds-pagination__item"><button class="dds-pagination__dot${selectedClass}" type="button" aria-label="Page ${page}"${selectedAttr}></button></li>`;
  }).join('');

  return `
    <nav class="dds-pagination" aria-label="${escapeHtml(ariaLabel)}">
      <ul class="dds-pagination__list">
        ${items}
      </ul>
    </nav>
  `;
}

function figureShell(content) {
  return `<section class="dds-pagination-fig"><div class="dds-pagination-fig__card">${content}</div></section>`;
}

export function createPaginationAnatomyFigure() {
  return figureShell(createPagination({ total: 4, current: 1 }));
}

export function createPaginationBestPracticesFigure() {
  return `
    <div class="dds-pagination-doc__do-dont-grid">
      <section class="dds-pagination-doc__do">
        <h4>Do</h4>
        <p><strong>Pair with previous/next controls</strong></p>
        <p>Include arrow buttons alongside the dots for easier sequential navigation.</p>

        <p><strong>Keep all indicators the same size</strong></p>
        <p>Uniform sizing makes selected state the clear differentiator.</p>

        <p><strong>Update selected state immediately</strong></p>
        <p>The filled indicator must always reflect current content position in real time.</p>

        <p><strong>Ensure adequate touch targets</strong></p>
        <p>Expand each dot hit area to at least 44x44px even when the visible dot is small.</p>
      </section>

      <section class="dds-pagination-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't use for more than 10 pages</strong></p>
        <p>Beyond 10 indicators, switch to numbered pagination.</p>

        <p><strong>Don't rely on color alone</strong></p>
        <p>Selected state must be distinguishable through fill and shape, not just color.</p>

        <p><strong>Don't omit keyboard support</strong></p>
        <p>Every indicator must be focusable and activatable by keyboard.</p>

        <p><strong>Don't use dots as decorative indicators</strong></p>
        <p>If non-interactive, use a different component instead of button dots.</p>
      </section>
    </div>
  `;
}
