import { createButton } from '../button/button';
import { createLink } from '../link/link';
import './content.css';

/**
 * @param {{
 *  variant?: 'title+p'|'h+p';
 *  eyebrow?: boolean;
 *  eyebrowText?: string;
 *  heading?: string;
 *  body?: string;
 *  cta?: 'off'|'link'|'one-button'|'two-buttons'|boolean;
 *  ctaLinkLabel?: string;
 *  ctaLinkSize?: 'p'|'small'|'fine';
 *  ctaLinkArrow?: boolean;
 *  ctaButtonLabel?: string;
 *  ctaButtonVariant?: 'primary'|'secondary'|'white';
 *  ctaButtonStyle?: 'solid'|'transparent'|'outline';
 *  ctaButtonIconPosition?: 'none'|'left'|'right'|'only';
 *  ctaButtonIcon?: 'arrow'|'search';
 *  ctaButtonDisabled?: boolean;
 *  ctaSecondaryButtonLabel?: string;
 *  ctaSecondaryButtonVariant?: 'primary'|'secondary'|'white';
 *  ctaSecondaryButtonStyle?: 'solid'|'transparent'|'outline';
 *  ctaSecondaryButtonIconPosition?: 'none'|'left'|'right'|'only';
 *  ctaSecondaryButtonIcon?: 'arrow'|'search';
 *  ctaSecondaryButtonDisabled?: boolean;
 *  footer?: boolean;
 *  footerText?: string;
 *  padded?: boolean;
 *  className?: string;
 * }} params
 */
export function createContent({
  variant = 'title+p',
  eyebrow = false,
  eyebrowText = 'Small',
  heading,
  body = 'Body',
  cta = 'off',
  ctaLinkLabel = 'Link',
  ctaLinkSize = 'p',
  ctaLinkArrow = true,
  ctaButtonLabel = 'Label',
  ctaButtonVariant = 'primary',
  ctaButtonStyle = 'solid',
  ctaButtonIconPosition = 'none',
  ctaButtonIcon = 'arrow',
  ctaButtonDisabled = false,
  ctaSecondaryButtonLabel = 'Label',
  ctaSecondaryButtonVariant = 'primary',
  ctaSecondaryButtonStyle = 'transparent',
  ctaSecondaryButtonIconPosition = 'none',
  ctaSecondaryButtonIcon = 'arrow',
  ctaSecondaryButtonDisabled = false,
  footer = false,
  footerText = 'Fine',
  padded = true,
  className = '',
} = {}) {
  const headingText = heading ?? (variant === 'title+p' ? 'Title Heading' : 'Heading');
  const variantClass = variant === 'title+p' ? 'title-p' : 'h-p';

  const classes = [
    'dds-content',
    `dds-content--${variantClass}`,
    padded ? 'dds-content--padded' : 'dds-content--unpadded',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const headingMarkup =
    variant === 'title+p'
      ? `<h1 class="dds-content__title">${headingText}</h1>`
      : `<h2 class="dds-content__heading">${headingText}</h2>`;

  const ctaMode = typeof cta === 'boolean' ? (cta ? 'two-buttons' : 'off') : cta;
  const ctaItems = {
    off: '',
    link: createLink({ label: ctaLinkLabel, size: ctaLinkSize, arrow: ctaLinkArrow }),
    'one-button': createButton({
      label: ctaButtonLabel,
      variant: ctaButtonVariant,
      style: ctaButtonStyle,
      iconPosition: ctaButtonIconPosition,
      icon: ctaButtonIcon,
      disabled: ctaButtonDisabled,
    }),
    'two-buttons':
      createButton({
        label: ctaSecondaryButtonLabel,
        variant: ctaSecondaryButtonVariant,
        style: ctaSecondaryButtonStyle,
        iconPosition: ctaSecondaryButtonIconPosition,
        icon: ctaSecondaryButtonIcon,
        disabled: ctaSecondaryButtonDisabled,
      }) +
      createButton({
        label: ctaButtonLabel,
        variant: ctaButtonVariant,
        style: ctaButtonStyle,
        iconPosition: ctaButtonIconPosition,
        icon: ctaButtonIcon,
        disabled: ctaButtonDisabled,
      }),
  };
  const ctaMarkup =
    ctaMode === 'off'
      ? ''
      : `
      <div class="dds-content__cta">
        ${ctaItems[ctaMode] ?? ctaItems.off}
      </div>
    `;

  const footerMarkup = footer
    ? `
      <div class="dds-content__footer">
        <p class="dds-content__fine">${footerText}</p>
      </div>
    `
    : '';

  return `
    <section class="${classes}">
      ${eyebrow ? `<p class="dds-content__eyebrow">${eyebrowText}</p>` : ''}
      <div class="dds-content__group">
        ${headingMarkup}
        <p class="dds-content__body">${body}</p>
      </div>
      ${ctaMarkup}
      ${footerMarkup}
    </section>
  `;
}

export function createContentShowcase() {
  return `
    <div class="dds-content-showcase">
      ${createContent({ variant: 'title+p' })}
      ${createContent({ variant: 'h+p' })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'link', footer: true })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'one-button', footer: false })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'two-buttons', footer: false })}
    </div>
  `;
}
