import { createLink } from '../links/links';
import '../buttons/buttons.css';
import './content.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function createButton({ label = 'Label', style = 'solid' } = {}) {
  const styleClass = style === 'transparent' ? 'dds-button--outline-primary' : 'dds-button--primary-solid';
  return `<button class="dds-button ${styleClass}" type="button">${escapeHtml(label)}</button>`;
}

function createCtaMarkup({ mode = 'off' } = {}) {
  if (mode === 'off') {
    return '';
  }

  if (mode === 'link') {
    return `<div class="dds-content__cta">${createLink({ label: 'Link', size: 'p', arrow: true })}</div>`;
  }

  if (mode === 'one-button') {
    return `<div class="dds-content__cta">${createButton({ label: 'Label', style: 'solid' })}</div>`;
  }

  return `
    <div class="dds-content__cta">
      ${createLink({ label: 'Link', size: 'p', arrow: true })}
      ${createButton({ label: 'Label', style: 'transparent' })}
      ${createButton({ label: 'Label', style: 'solid' })}
    </div>
  `;
}

/**
 * @param {{
 *  variant?: 'title+p'|'h+p';
 *  eyebrow?: boolean;
 *  eyebrowText?: string;
 *  heading?: string;
 *  body?: string;
 *  cta?: 'off'|'link'|'one-button'|'two-buttons';
 *  footer?: boolean;
 *  footerText?: string;
 *  padded?: boolean;
 *  className?: string;
 * }} args
 */
export function createContent({
  variant = 'title+p',
  eyebrow = false,
  eyebrowText = 'Small',
  heading,
  body = 'Body',
  cta = 'off',
  footer = false,
  footerText = 'Fine',
  padded = true,
  className = '',
} = {}) {
  const validVariant = variant === 'h+p' ? 'h+p' : 'title+p';
  const variantClass = validVariant === 'h+p' ? 'dds-content--h-p' : 'dds-content--title-p';
  const headingText = heading ?? (validVariant === 'h+p' ? 'Heading' : 'Title Heading');

  const classes = [
    'dds-content',
    variantClass,
    padded ? 'dds-content--padded' : 'dds-content--unpadded',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const headingMarkup = validVariant === 'h+p'
    ? `<h2 class="dds-content__heading">${escapeHtml(headingText)}</h2>`
    : `<h1 class="dds-content__title">${escapeHtml(headingText)}</h1>`;

  const bodyClass = validVariant === 'h+p' ? 'dds-content__body dds-content__body--p' : 'dds-content__body dds-content__body--title-p';

  return `
    <section class="${classes}">
      ${eyebrow ? `<p class="dds-content__eyebrow">${escapeHtml(eyebrowText)}</p>` : ''}
      <div class="dds-content__group">
        ${headingMarkup}
        <p class="${bodyClass}">${escapeHtml(body)}</p>
      </div>
      ${createCtaMarkup({ mode: cta })}
      ${footer ? `<div class="dds-content__footer"><p class="dds-content__fine">${escapeHtml(footerText)}</p></div>` : ''}
    </section>
  `;
}

function createFigureShell(content) {
  return `<section class="dds-content-fig"><div class="dds-content-fig__card">${content}</div></section>`;
}

export function createContentAnatomyFigure() {
  return createFigureShell(createContent({
    variant: 'title+p',
    eyebrow: true,
    eyebrowText: 'Eyebrow',
    heading: 'Title Heading',
    body: 'Body',
    cta: 'link',
    footer: true,
    footerText: 'Footer',
    padded: true,
    className: 'dds-content-fig__sample',
  }));
}

export function createContentVariantsStory() {
  return createFigureShell(`
    <div class="dds-content-fig__stack">
      ${createContent({
    variant: 'title+p',
    heading: 'Title Heading',
    body: 'Body',
    padded: true,
  })}
      ${createContent({
    variant: 'h+p',
    heading: 'Heading',
    body: 'Body',
    padded: true,
  })}
      ${createContent({
    variant: 'h+p',
    eyebrow: true,
    cta: 'two-buttons',
    footer: true,
    heading: 'Heading',
    body: 'Body',
    padded: true,
  })}
    </div>
  `);
}

export function createContentStatesStory() {
  return createFigureShell(`
    <div class="dds-content-fig__stack">
      ${createContent({ variant: 'h+p', heading: 'Heading', body: 'Body', cta: 'off', footer: false, padded: true })}
      ${createContent({ variant: 'h+p', heading: 'Heading', body: 'Body', cta: 'two-buttons', footer: true, padded: true })}
    </div>
  `);
}

export function createContentBestPracticesFigure() {
  return `
    <div class="dds-content-doc__do-dont-grid">
      <section class="dds-content-doc__do">
        <h4>Do</h4>
        <p><strong>Maintain proper heading hierarchy</strong></p>
        <p>Use heading levels sequentially to create clear document structure and enable screen reader navigation.</p>
        <p><strong>Keep content focused and scannable</strong></p>
        <p>Limit body text to essential information. Use concise headings that clearly describe content.</p>
        <p><strong>Use eyebrows for context, not decoration</strong></p>
        <p>Eyebrows should provide meaningful category or context information, not just visual embellishment.</p>
        <p><strong>Enable optional elements strategically</strong></p>
        <p>Only include CTAs and footers when they serve a clear purpose for the user.</p>
      </section>

      <section class="dds-content-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't skip heading levels</strong></p>
        <p>Avoid jumping from h1 to h3 or using heading levels out of sequence. This breaks accessibility.</p>
        <p><strong>Don't overload with optional elements</strong></p>
        <p>Having eyebrow + CTA + footer on every instance creates visual clutter and dilutes importance.</p>
        <p><strong>Don't use as a general wrapper</strong></p>
        <p>The Content component is for heading + body patterns. Use other components for different content types.</p>
        <p><strong>Don't rely solely on eyebrows</strong></p>
        <p>Eyebrows supplement headings but can't replace them. Always include a proper heading.</p>
      </section>
    </div>
  `;
}
