import './cards.css';
import cardFigureImage from './assets/cards-figure.jpg';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function createCardInner({
  heading = 'Heading',
  body = 'Body',
  orientation = 'vertical',
  height = 'hug',
}) {
  const isHorizontal = orientation === 'horizontal';
  const contentMarkup = `
    <div class="dds-card__content">
      <h2 class="dds-card__heading">${escapeHtml(heading)}</h2>
      <p class="dds-card__body">${escapeHtml(body)}</p>
    </div>
  `;

  const figureMarkup = `
    <figure class="dds-card__figure" aria-hidden="true">
      <img src="${cardFigureImage}" alt="" class="dds-card__image" />
    </figure>
  `;

  if (!isHorizontal) {
    return `${figureMarkup}${contentMarkup}`;
  }

  return `${figureMarkup}${contentMarkup}`;
}

/**
 * @param {{
 *  heading?: string;
 *  body?: string;
 *  orientation?: 'vertical'|'horizontal';
 *  reverse?: boolean;
 *  height?: 'hug'|'fill';
 *  clickable?: boolean;
 *  state?: 'default'|'hover';
 *  href?: string;
 *  ariaLabel?: string;
 * }} args
 */
export function createCard({
  heading = 'Heading',
  body = 'Body',
  orientation = 'vertical',
  reverse = false,
  height = 'hug',
  clickable = false,
  state = 'default',
  href = '#',
  ariaLabel = '',
} = {}) {
  const validOrientation = orientation === 'horizontal' ? 'horizontal' : 'vertical';
  const validHeight = height === 'fill' ? 'fill' : 'hug';
  const validState = state === 'hover' ? 'hover' : 'default';

  const cardClasses = [
    'dds-card',
    `dds-card--${validOrientation}`,
    reverse ? 'dds-card--reverse' : '',
    validHeight === 'fill' ? 'dds-card--fill' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const inner = createCardInner({
    heading,
    body,
    orientation: validOrientation,
    height: validHeight,
  });

  if (!clickable) {
    return `<article class="${cardClasses}" data-state="${validState}">${inner}</article>`;
  }

  const label = ariaLabel.trim()
    ? ariaLabel
    : `Read more about ${heading}`;

  return `
    <a class="dds-card-link" href="${escapeHtml(href)}" aria-label="${escapeHtml(label)}" data-state="${validState}">
      <article class="${cardClasses}">
        ${inner}
      </article>
    </a>
  `;
}

function figureShell(content) {
  return `<section class="dds-cards-fig"><div class="dds-cards-fig__card">${content}</div></section>`;
}

export function createCardsVariantVerticalFigure() {
  return figureShell(`
    <div class="dds-cards-fig__row dds-cards-fig__row--vertical">
      ${createCard({ orientation: 'vertical', height: 'hug', heading: 'Heading', body: 'Body' })}
    </div>
  `);
}

export function createCardsVariantHorizontalFigure() {
  return figureShell(`
    <div class="dds-cards-fig__stack">
      ${createCard({ orientation: 'horizontal', reverse: false, heading: 'Heading', body: 'Body' })}
      ${createCard({ orientation: 'horizontal', reverse: true, heading: 'Heading', body: 'Body' })}
    </div>
  `);
}

export function createCardsStatesFigure() {
  return figureShell(`
    <div class="dds-cards-fig__stack">
      ${createCard({ orientation: 'vertical', clickable: true, state: 'default', heading: 'Default state', body: 'Card surface with default border and no elevation.' })}
      ${createCard({ orientation: 'vertical', clickable: true, state: 'hover', heading: 'Hover state', body: 'Border changes to brand primary with shadow elevation.' })}
    </div>
  `);
}

export function createCardsVariantsStoryFigure() {
  return figureShell(`
    <div class="dds-cards-fig__stack">
      ${createCard({ orientation: 'vertical', heading: 'Vertical', body: 'Figure on top, content below.' })}
      ${createCard({ orientation: 'horizontal', heading: 'Horizontal', body: 'Figure and content side by side.' })}
      ${createCard({ orientation: 'horizontal', reverse: true, heading: 'Horizontal reversed', body: 'Figure appears on the opposite side.' })}
    </div>
  `);
}

export function createCardsStatesStoryFigure() {
  return createCardsStatesFigure();
}

export function createCardsBestPracticesFigure() {
  return `
    <div class="dds-cards-doc__do-dont-grid">
      <section class="dds-cards-doc__do">
        <h4>Do</h4>
        <p><strong>Group related content together</strong></p>
        <p>Cards should contain information that naturally belongs together, creating clear mental models for users scanning the page.</p>

        <p><strong>Use consistent card variants within a group</strong></p>
        <p>Within a single row or grid, cards should share the same orientation and maintain consistent dimensions for visual harmony.</p>

        <p><strong>Design cards with similar information density</strong></p>
        <p>When displaying cards together, keep content amounts roughly balanced so cards feel cohesive and users can scan efficiently.</p>

        <p><strong>Optimize images for performance</strong></p>
        <p>Use appropriate image formats, compression, and lazy loading to ensure fast page loads, especially in card-heavy grid layouts.</p>
      </section>

      <section class="dds-cards-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't overuse cards</strong></p>
        <p>Too many cards create visual clutter. Use them purposefully to organize meaningful content groups, not as a default wrapper for every piece of content.</p>

        <p><strong>Don't nest cards within cards</strong></p>
        <p>Nested cards create confusing hierarchy and reduce scannability. Keep card structure flat.</p>

        <p><strong>Don't use cards for single data points</strong></p>
        <p>Simple, isolated information doesn't need a card container. Reserve cards for grouped content with more than one element.</p>

        <p><strong>Don't mix card orientations randomly</strong></p>
        <p>Use consistent orientations within a section. Only vary strategically, for example alternating reversed cards in a long list, not arbitrarily.</p>
      </section>
    </div>
  `;
}
