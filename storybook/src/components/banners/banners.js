import './banners.css';

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

function contentBlock({ heading = 'Title Heading', body = 'Body', cta = 'off' } = {}) {
  return `
    <div class="dds-banner__content">
      <h3>${heading}</h3>
      <p>${body}</p>
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
} = {}) {
  if (type === 'split') {
    return `
      <section class="dds-banner dds-banner--split" data-orientation="${orientation}" data-direction="${direction}">
        <figure class="dds-banner__image-panel" aria-hidden="true"></figure>
        ${contentBlock({ heading, body, cta })}
      </section>
    `;
  }

  return `
    <section class="dds-banner dds-banner--bg" data-align="${alignment}" data-size="${size}">
      <figure class="dds-banner__background" aria-hidden="true"></figure>
      ${overlay ? '<span class="dds-banner__overlay" aria-hidden="true"></span>' : ''}
      ${contentBlock({ heading, body, cta })}
    </section>
  `;
}

function figureShell(content) {
  return `<section class="dds-banners-fig"><div class="dds-banners-fig__card">${content}</div></section>`;
}

export function createBannersAnatomyFigure() {
  return figureShell(
    createBanner({
      type: 'background-image',
      alignment: 'left',
      overlay: true,
      size: 'desktop',
      cta: 'off',
    }),
  );
}

export function createBannersAnatomySplitFigure() {
  return figureShell(
    createBanner({
      type: 'split',
      orientation: 'horizontal',
      direction: 'default',
      cta: 'off',
    }),
  );
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
