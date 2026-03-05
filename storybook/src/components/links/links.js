import './links.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function createArrowIcon() {
  return `
    <span class="dds-link__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" class="dds-link__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13 6L19 12L13 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span>
  `;
}

/**
 * @param {{
 *  label?: string;
 *  href?: string;
 *  size?: 'p'|'small'|'fine';
 *  state?: 'default'|'hover';
 *  arrow?: boolean;
 *  ariaCurrent?: 'page'|undefined;
 *  ariaLabel?: string;
 * }} args
 */
export function createLink({
  label = 'Link',
  href = '#',
  size = 'p',
  state = 'default',
  arrow = true,
  ariaCurrent,
  ariaLabel,
} = {}) {
  const sizeClass = ['p', 'small', 'fine'].includes(size) ? size : 'p';
  const stateValue = state === 'hover' ? 'hover' : 'default';
  const classes = [
    'dds-link',
    `dds-link--${sizeClass}`,
    arrow ? 'dds-link--arrow' : 'dds-link--no-arrow',
  ].join(' ');

  const currentAttr = ariaCurrent ? ` aria-current="${escapeHtml(ariaCurrent)}"` : '';
  const labelAttr = ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : '';

  return `
    <a class="${classes}" href="${escapeHtml(href)}" data-state="${stateValue}"${currentAttr}${labelAttr}>
      <span class="dds-link__label">${escapeHtml(label)}</span>
      ${arrow ? createArrowIcon() : ''}
    </a>
  `;
}

function createFigureCard(content, cardClass = '') {
  return `
    <div class="dds-links-fig">
      <div class="dds-links-fig__card ${cardClass}">
        ${content}
      </div>
    </div>
  `;
}

export function createLinksAnatomyFigure() {
  return createFigureCard(
    `<div class="dds-links-fig__row dds-links-fig__row--single">${createLink({ label: 'Example link', size: 'p', state: 'default', arrow: true })}</div>`,
  );
}

export function createLinksVariantPFigure() {
  return createFigureCard(
    `<div class="dds-links-fig__row dds-links-fig__row--single">${createLink({ label: 'Paragraph size link', size: 'p', state: 'default', arrow: true })}</div>`,
  );
}

export function createLinksVariantSmallFigure() {
  return createFigureCard(
    `<div class="dds-links-fig__row dds-links-fig__row--single">${createLink({ label: 'Small size link', size: 'small', state: 'default', arrow: true })}</div>`,
  );
}

export function createLinksVariantFineFigure() {
  return createFigureCard(
    `<div class="dds-links-fig__row dds-links-fig__row--single">${createLink({ label: 'Fine size link', size: 'fine', state: 'default', arrow: true })}</div>`,
  );
}

export function createLinksStateDefaultFigure() {
  return createFigureCard(
    `<div class="dds-links-fig__row dds-links-fig__row--single">${createLink({ label: 'Default link appearance', size: 'p', state: 'default', arrow: true })}</div>`,
  );
}

export function createLinksStateHoverFigure() {
  return createFigureCard(
    `<div class="dds-links-fig__row dds-links-fig__row--single">${createLink({ label: 'Hover state link', size: 'p', state: 'hover', arrow: true })}</div>`,
  );
}

export function createLinksVariantsStoryFigure() {
  return createFigureCard(
    `
      <div class="dds-links-fig__stack">
        <div class="dds-links-fig__row">
          ${createLink({ label: 'P', size: 'p', state: 'default', arrow: true })}
          ${createLink({ label: 'Small', size: 'small', state: 'default', arrow: true })}
          ${createLink({ label: 'Fine', size: 'fine', state: 'default', arrow: true })}
        </div>
      </div>
    `,
  );
}

export function createLinksStatesStoryFigure() {
  return createFigureCard(
    `
      <div class="dds-links-fig__row dds-links-fig__row--states">
        ${createLink({ label: 'Default', size: 'p', state: 'default', arrow: true })}
        ${createLink({ label: 'Hover', size: 'p', state: 'hover', arrow: true })}
      </div>
    `,
  );
}

export function createLinksBestPracticesFigure() {
  return `
    <div class="dds-links-doc__do-dont-grid">
      <section class="dds-links-doc__do">
        <h4>Do</h4>
        <p><strong>Always underline links</strong></p>
        <p>Underlines are required to distinguish links from regular text for all users, especially those with color blindness.</p>

        <p><strong>Write descriptive link text</strong></p>
        <p>Make link purpose clear from the text alone. "Download the annual report" is better than "click here."</p>

        <p><strong>Maintain consistent link styling</strong></p>
        <p>Use the same colors and underline treatment throughout your interface for predictability.</p>

        <p><strong>Open external links appropriately</strong></p>
        <p>When opening links in new tabs, inform users and include proper security attributes.</p>
      </section>

      <section class="dds-links-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't remove underlines</strong></p>
        <p>Links without underlines are hard to distinguish from regular text, creating accessibility barriers.</p>

        <p><strong>Don't use vague link text</strong></p>
        <p>Phrases like "click here" or "read more" without context are meaningless to screen reader users.</p>

        <p><strong>Don't use links for actions</strong></p>
        <p>If clicking triggers an action rather than navigation, use a button element instead of a link.</p>

        <p><strong>Don't force new windows</strong></p>
        <p>Let users decide how to open links. Only use <code>target=\"_blank\"</code> when there's a clear reason (like external sites).</p>
      </section>
    </div>
  `;
}
