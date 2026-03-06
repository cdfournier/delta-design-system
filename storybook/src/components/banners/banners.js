import './banners.css';

const BANNER_BACKGROUND_IMAGE =
  'https://www.figma.com/api/mcp/asset/bfd4a9b3-bb2f-475c-ba36-d952d7358b62';
const BANNER_SPLIT_IMAGE =
  'https://www.figma.com/api/mcp/asset/2f541efc-480c-434e-bb57-07170141b073';
const BANNER_BG_ANATOMY_IMAGE =
  'https://www.figma.com/api/mcp/asset/5f01d76b-e5d2-44b1-a4c5-3525c6b53e81';
const BANNER_SPLIT_ANATOMY_IMAGE =
  'https://www.figma.com/api/mcp/asset/161e8eb7-503d-4d89-b838-b20c5028d2e5';

function ctaMarkup(cta = 'off') {
  if (cta === 'link') {
    return '<p class="dds-banner__cta"><a href="#" class="dds-banner__link">Learn more</a></p>';
  }
  if (cta === 'one-button') {
    return '<p class="dds-banner__cta"><button class="dds-banner__button" type="button">Primary action</button></p>';
  }
  if (cta === 'two-buttons') {
    return `
      <p class="dds-banner__cta dds-banner__cta--two">
        <button class="dds-banner__button" type="button">Primary action</button>
        <button class="dds-banner__button dds-banner__button--secondary" type="button">Secondary action</button>
      </p>
    `;
  }
  return '';
}

function contentBlock({ type = 'background-image', heading = 'Title Heading', body = 'Body', cta = 'off' } = {}) {
  const headingTag = type === 'split' ? 'h2' : 'h1';
  const headingClass = type === 'split' ? 'dds-banner__heading dds-banner__heading--split' : 'dds-banner__heading dds-banner__heading--bg';
  const bodyClass = type === 'split' ? 'dds-banner__body dds-banner__body--split' : 'dds-banner__body dds-banner__body--bg';
  return `
    <div class="dds-banner__content">
      <${headingTag} class="${headingClass}">${heading}</${headingTag}>
      <p class="${bodyClass}">${body}</p>
      ${ctaMarkup(cta)}
    </div>
  `;
}

/**
 * @param {{
 * type?: 'background-image'|'split';
 * alignment?: 'left'|'center'|'right';
 * overlay?: boolean;
 * size?: 'mobile'|'desktop';
 * orientation?: 'vertical'|'horizontal';
 * direction?: 'default'|'reverse';
 * cta?: 'off'|'link'|'one-button'|'two-buttons';
 * heading?: string;
 * body?: string;
 * className?: string;
 * }} args
 */
export function createBanner({
  type = 'background-image',
  alignment = 'left',
  overlay = true,
  size = 'mobile',
  orientation = 'vertical',
  direction = 'default',
  cta = 'off',
  heading = 'Title Heading',
  body = 'Supporting text that explains the value proposition.',
  className = '',
} = {}) {
  const customClass = className ? ` ${className}` : '';
  if (type === 'split') {
    return `
      <section class="dds-banner dds-banner--split${customClass}" data-orientation="${orientation}" data-direction="${direction}">
        <figure class="dds-banner__image-panel" aria-hidden="true">
          <img src="${BANNER_SPLIT_IMAGE}" alt="" />
        </figure>
        ${contentBlock({ type, heading, body, cta })}
      </section>
    `;
  }

  return `
    <section class="dds-banner dds-banner--bg${customClass}" data-align="${alignment}" data-size="${size}">
      <figure class="dds-banner__background" aria-hidden="true">
        <img src="${BANNER_BACKGROUND_IMAGE}" alt="" />
      </figure>
      ${overlay ? '<span class="dds-banner__overlay" aria-hidden="true"></span>' : ''}
      ${contentBlock({ type, heading, body, cta })}
    </section>
  `;
}

function figureShell(content) {
  return `<section class="dds-banners-fig" data-breakpoint-mode="widescreen"><div class="dds-banners-fig__card dds-banners-fig__card--component">${content}</div></section>`;
}

export function createBannersAnatomyFigure() {
  return figureShell(`
    <section class="dds-banner dds-banner--bg dds-banner--anatomy-figure" data-align="left" data-size="desktop">
      <figure class="dds-banner__background dds-banner__background--anatomy" aria-hidden="true">
        <img src="${BANNER_BG_ANATOMY_IMAGE}" alt="" />
      </figure>
      <span class="dds-banner__overlay" aria-hidden="true"></span>
      <div class="dds-banner__content dds-banner__content--anatomy-bg">
        <h1 class="dds-banner__title-anatomy">Title Heading</h1>
        <p class="dds-banner__body-anatomy">Body</p>
      </div>
    </section>
  `);
}

export function createBannersAnatomySplitFigure() {
  return figureShell(`
    <section class="dds-banner dds-banner--split dds-banner--anatomy-split" data-orientation="horizontal" data-direction="default">
      <figure class="dds-banner__image-panel dds-banner__image-panel--anatomy" aria-hidden="true">
        <img src="${BANNER_SPLIT_ANATOMY_IMAGE}" alt="" />
      </figure>
      <div class="dds-banner__content dds-banner__content--anatomy-split">
        <h2 class="dds-banner__heading-anatomy">Heading</h2>
        <p class="dds-banner__copy-anatomy">Body</p>
      </div>
    </section>
  `);
}

export function createBannersBestPracticesFigure() {
  return `
    <div class="dds-banners-doc__do-dont-grid">
      <section class="dds-banners-doc__do">
        <h4>Do</h4>
        <p><strong>Use overlays intentionally</strong></p>
        <p>Apply the background-image overlay when text contrast needs support.</p>
        <p><strong>Keep hierarchy clear</strong></p>
        <p>Use one strong heading and concise supporting copy.</p>
        <p><strong>Align content to image composition</strong></p>
        <p>Choose left, center, or right alignment to avoid visual conflict with the focal point.</p>
      </section>
      <section class="dds-banners-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't overload CTAs</strong></p>
        <p>Avoid adding multiple competing actions without clear priority.</p>
        <p><strong>Don't force low-contrast text</strong></p>
        <p>If readability drops, adjust image, overlay, or color usage.</p>
        <p><strong>Don't mix layout directions randomly</strong></p>
        <p>Use split direction deliberately across a sequence to maintain rhythm.</p>
      </section>
    </div>
  `;
}
