import './card.css';
import { createContent } from '../content/content';

const DEFAULT_IMAGE_SRC =
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80';

/**
 * @param {{
 *  heading?: string;
 *  body?: string;
 *  contentVariant?: 'title+p'|'h+p';
 *  eyebrow?: boolean;
 *  eyebrowText?: string;
 *  cta?: 'off'|'link'|'one-button'|'two-buttons';
 *  footer?: boolean;
 *  footerText?: string;
 *  imageSrc?: string;
 *  imageAlt?: string;
 *  orientation?: 'vertical'|'horizontal'|'horizontal-reverse'|'mobile';
 *  minWidth?: 'default'|'wide';
 * }} params
 */
export function createCard({
  heading = 'Heading',
  body = 'Body text that provides supporting details and context for the card content.',
  contentVariant = 'h+p',
  eyebrow = false,
  eyebrowText = 'Small',
  cta = 'off',
  footer = false,
  footerText = 'Fine',
  imageSrc = DEFAULT_IMAGE_SRC,
  imageAlt = 'Mountain landscape',
  orientation = 'vertical',
  minWidth = 'default',
} = {}) {
  const isHorizontal = orientation === 'horizontal' || orientation === 'horizontal-reverse';
  const isReversed = orientation === 'horizontal-reverse';

  return `
    <article class="dds-card dds-card--${orientation} dds-card--width-${minWidth}">
      <figure class="dds-card__figure ${isHorizontal ? 'dds-card__figure--horizontal' : ''} ${isReversed ? 'dds-card__figure--reverse' : ''}">
        <img class="dds-card__image" src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
      </figure>
      <div class="dds-card__content">
        ${createContent({
          variant: contentVariant,
          eyebrow,
          eyebrowText,
          heading,
          body,
          cta,
          footer,
          footerText,
          padded: false,
          className: 'dds-content--in-card',
        })}
      </div>
    </article>
  `;
}

export function createCardRow(cards) {
  return `<div class="dds-card-row">${cards}</div>`;
}

export function createCardVariantShowcase() {
  return `
    <div class="dds-card-showcase">
      ${createCard({ orientation: 'vertical' })}
      ${createCard({
        orientation: 'horizontal',
        minWidth: 'wide',
        body: 'Horizontal cards place media and content side-by-side for lists and featured modules.',
      })}
      ${createCard({
        orientation: 'horizontal-reverse',
        minWidth: 'wide',
        body: 'Reversed horizontal cards mirror the visual rhythm while preserving the same content model.',
      })}
      ${createCard({
        orientation: 'mobile',
        body: 'Mobile cards stack media and content in a compact pattern optimized for narrow viewports.',
      })}
    </div>
  `;
}
