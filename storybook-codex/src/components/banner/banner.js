import { createContent } from '../content/content';
import './banner.css';

const DEFAULT_IMAGE_SRC = 'https://www.figma.com/api/mcp/asset/0618e938-8cda-496f-86b3-cd773e818b52';

function createBannerBackgroundImage({
  alignment = 'left',
  size = 'mobile',
  overlay = true,
  height = 'hug',
  fixedHeight = 320,
  maxWidth = '',
  heading,
  body,
  cta,
  eyebrow,
  eyebrowText,
  footer,
  footerText,
  imageSrc,
  imageAlt,
} = {}) {
  const maxWidthStyle = maxWidth ? `max-width: ${maxWidth};` : '';
  const fixedHeightStyle = height === 'fixed' ? `--dds-banner-fixed-height: ${fixedHeight}px;` : '';

  return `
    <section class="dds-banner dds-banner--background-image dds-banner--align-${alignment} dds-banner--size-${size} dds-banner--height-${height}" style="${maxWidthStyle} ${fixedHeightStyle}" aria-label="Banner with background image">
      <img class="dds-banner__bg-image" src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
      ${overlay ? '<div class="dds-banner__overlay" aria-hidden="true"></div>' : ''}
      <div class="dds-banner__content-shell">
        ${createContent({
          variant: 'title+p',
          heading,
          body,
          eyebrow,
          eyebrowText,
          cta,
          footer,
          footerText,
          padded: false,
          className: 'dds-content--in-banner-image',
        })}
      </div>
    </section>
  `;
}

function createBannerSplit({
  orientation = 'vertical',
  direction = 'default',
  height = 'hug',
  fixedHeight = 320,
  maxWidth = '',
  heading,
  body,
  cta,
  eyebrow,
  eyebrowText,
  footer,
  footerText,
  imageSrc,
  imageAlt,
} = {}) {
  const maxWidthStyle = maxWidth ? `max-width: ${maxWidth};` : '';
  const fixedHeightStyle = height === 'fixed' ? `--dds-banner-fixed-height: ${fixedHeight}px;` : '';
  const isReversed = direction === 'reverse';
  const figure = `
    <figure class="dds-banner__figure">
      <img class="dds-banner__figure-image" src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
    </figure>
  `;
  const content = `
    <div class="dds-banner__split-content">
      ${createContent({
        variant: 'h+p',
        heading,
        body,
        eyebrow,
        eyebrowText,
        cta,
        footer,
        footerText,
        padded: false,
        className: 'dds-content--in-banner-split',
      })}
    </div>
  `;

  return `
    <section class="dds-banner dds-banner--split dds-banner--split-${orientation} dds-banner--split-${direction} dds-banner--height-${height}" style="${maxWidthStyle} ${fixedHeightStyle}" aria-label="Split banner">
      ${isReversed ? `${content}${figure}` : `${figure}${content}`}
    </section>
  `;
}

/**
 * @param {{
 *  variant?: 'background-image'|'split';
 *  alignment?: 'left'|'center'|'right';
 *  size?: 'mobile'|'desktop';
 *  overlay?: boolean;
 *  height?: 'hug'|'half'|'full'|'fixed';
 *  fixedHeight?: number;
 *  maxWidth?: string;
 *  orientation?: 'vertical'|'horizontal';
 *  direction?: 'default'|'reverse';
 *  heading?: string;
 *  body?: string;
 *  eyebrow?: boolean;
 *  eyebrowText?: string;
 *  cta?: 'off'|'link'|'one-button'|'two-buttons';
 *  footer?: boolean;
 *  footerText?: string;
 *  imageSrc?: string;
 *  imageAlt?: string;
 * }} params
 */
export function createBanner({
  variant = 'background-image',
  alignment = 'left',
  size = 'mobile',
  overlay = true,
  height = 'hug',
  fixedHeight = 320,
  maxWidth = '',
  orientation = 'vertical',
  direction = 'default',
  heading,
  body = 'Body',
  eyebrow = false,
  eyebrowText = 'Small',
  cta = 'off',
  footer = false,
  footerText = 'Fine',
  imageSrc = DEFAULT_IMAGE_SRC,
  imageAlt = 'Banner image',
} = {}) {
  if (variant === 'split') {
    return createBannerSplit({
      orientation,
      direction,
      height,
      fixedHeight,
      maxWidth,
      heading: heading ?? 'Heading',
      body,
      eyebrow,
      eyebrowText,
      cta,
      footer,
      footerText,
      imageSrc,
      imageAlt,
    });
  }

  return createBannerBackgroundImage({
    alignment,
    size,
    overlay,
    height,
    fixedHeight,
    maxWidth,
    heading: heading ?? 'Title Heading',
    body,
    eyebrow,
    eyebrowText,
    cta,
    footer,
    footerText,
    imageSrc,
    imageAlt,
  });
}

export function createBannerVariantShowcase() {
  return `
    <div class="dds-banner-showcase">
      ${createBanner({ variant: 'background-image', alignment: 'left', size: 'mobile', overlay: true })}
      ${createBanner({ variant: 'background-image', alignment: 'center', size: 'desktop', overlay: true, maxWidth: '30rem' })}
      ${createBanner({ variant: 'background-image', alignment: 'right', size: 'desktop', overlay: false, maxWidth: '30rem' })}
      ${createBanner({ variant: 'split', orientation: 'vertical', direction: 'default', maxWidth: '21rem' })}
      ${createBanner({ variant: 'split', orientation: 'vertical', direction: 'reverse', maxWidth: '21rem' })}
      ${createBanner({ variant: 'split', orientation: 'horizontal', direction: 'default', maxWidth: '50.25rem' })}
      ${createBanner({ variant: 'split', orientation: 'horizontal', direction: 'reverse', maxWidth: '50.25rem' })}
    </div>
  `;
}
