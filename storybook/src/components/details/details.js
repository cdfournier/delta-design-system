import './details.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function detailsIcon() {
  return `
    <span class="dds-details__icon" aria-hidden="true">
      <svg class="dds-details__icon-svg" viewBox="0 0 24 24" fill="none" role="presentation">
        <line class="dds-details__icon-line dds-details__icon-line--vertical" x1="12" y1="5" x2="12" y2="19" />
        <line class="dds-details__icon-line" x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  `;
}

/**
 * @param {{
 *  summary?: string;
 *  body?: string;
 *  open?: boolean;
 *  width?: 'auto'|'token';
 * }} args
 */
export function createDetails({
  summary = 'Summary',
  body = 'Body content revealed when expanded.',
  open = false,
  width = 'token',
} = {}) {
  const widthClass = width === 'auto' ? 'dds-details--auto' : '';
  const openAttr = open ? ' open' : '';

  return `
    <details class="dds-details ${widthClass}"${openAttr}>
      <summary class="dds-details__summary">
        <span class="dds-details__summary-text">${escapeHtml(summary)}</span>
        ${detailsIcon()}
      </summary>
      <div class="dds-details__body">
        <p>${escapeHtml(body)}</p>
      </div>
    </details>
  `;
}

function figureShell(content) {
  return `<section class="dds-details-fig"><div class="dds-details-fig__card">${content}</div></section>`;
}

export function createDetailsAnatomyFigure() {
  return figureShell(`
    <div class="dds-details-fig__stack">
      ${createDetails({
    summary: 'Summary',
    body: 'Body content that provides additional information when expanded.',
    open: true,
    width: 'auto',
  })}
    </div>
  `);
}

export function createDetailsStatesFigure() {
  return figureShell(`
    <div class="dds-details-fig__row">
      <div class="dds-details-fig__item">
        ${createDetails({
    summary: 'Summary',
    body: 'Body content is hidden in collapsed state.',
    open: false,
    width: 'auto',
  })}
      </div>
      <div class="dds-details-fig__item">
        ${createDetails({
    summary: 'Summary',
    body: 'Body content is visible in expanded state.',
    open: true,
    width: 'auto',
  })}
      </div>
    </div>
  `);
}

export function createDetailsBestPracticesFigure() {
  return `
    <div class="dds-details-doc__do-dont-grid">
      <section class="dds-details-doc__do">
        <h4>Do</h4>
        <p><strong>Use for supplementary information</strong></p>
        <p>Details work best for content that adds value but isn't essential to understanding the main flow.</p>

        <p><strong>Write descriptive summaries</strong></p>
        <p>Summary text should clearly indicate what users will find when they expand the section.</p>

        <p><strong>Use native HTML when possible</strong></p>
        <p>The native details/summary elements provide built-in accessibility and require less JavaScript.</p>

        <p><strong>Group related Details together</strong></p>
        <p>Multiple Details in a list create an effective accordion pattern for FAQs or help content.</p>
      </section>

      <section class="dds-details-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't hide critical information</strong></p>
        <p>Essential content, warnings, or key instructions should always be visible, not hidden in Details.</p>

        <p><strong>Don't nest too deeply</strong></p>
        <p>More than 2 levels of nested Details creates confusing navigation and cognitive load.</p>

        <p><strong>Don't use for primary content</strong></p>
        <p>Main page content should be visible. Details are for supplementary or optional information.</p>

        <p><strong>Don't remove focus indicators</strong></p>
        <p>The summary must have a clear focus state for keyboard navigation accessibility.</p>
      </section>
    </div>
  `;
}
