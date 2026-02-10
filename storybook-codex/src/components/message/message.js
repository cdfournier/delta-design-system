import { createContent } from '../content/content';
import { createIcon } from '../icon/icon';
import './message.css';

function breakpointWrap(content, sizeMode = 'auto') {
  if (sizeMode === 'auto') {
    return content;
  }

  return `<div data-breakpoint-mode="${sizeMode}">${content}</div>`;
}

function createCloseButton({ className = '', label = 'Dismiss' } = {}) {
  return `
    <button type="button" class="dds-message__close ${className}" aria-label="${label}">
      ${createIcon({ type: 'x', decorative: true, strokeWidth: 1.5 })}
    </button>
  `;
}

function createConfirmationButton({ kind = 'no', label = 'No' } = {}) {
  return `
    <button type="button" class="dds-message__confirm-btn dds-message__confirm-btn--${kind}">
      <span class="dds-message__confirm-btn-label">${label}</span>
    </button>
  `;
}

function createInlineMessage({ variant, text, dismissible, yesLabel, noLabel } = {}) {
  if (variant === 'confirmation') {
    return `
      <section class="dds-message dds-message--confirmation" role="alertdialog" aria-live="assertive">
        <p class="dds-message__text">${text}</p>
        <div class="dds-message__actions">
          ${createConfirmationButton({ kind: 'no', label: noLabel })}
          ${createConfirmationButton({ kind: 'yes', label: yesLabel })}
        </div>
      </section>
    `;
  }

  const isSuccess = variant === 'success';

  return `
    <section class="dds-message dds-message--${isSuccess ? 'success' : 'error'}" role="${isSuccess ? 'status' : 'alert'}" aria-live="${isSuccess ? 'polite' : 'assertive'}">
      <p class="dds-message__text">${text}</p>
      ${dismissible ? createCloseButton({ className: 'dds-message__close--inline', label: `Dismiss ${isSuccess ? 'success' : 'error'} message` }) : ''}
    </section>
  `;
}

/**
 * @param {{
 *  variant?: 'modal'|'promo'|'confirmation'|'error'|'success'|'toast';
 *  heading?: string;
 *  body?: string;
 *  text?: string;
 *  dismissible?: boolean;
 *  eyebrow?: boolean;
 *  eyebrowText?: string;
 *  cta?: 'off'|'link'|'one-button'|'two-buttons';
 *  footer?: boolean;
 *  footerText?: string;
 *  yesLabel?: string;
 *  noLabel?: string;
 *  toastClose?: boolean;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createMessage({
  variant = 'modal',
  heading = 'Heading',
  body = 'Body',
  text,
  dismissible = true,
  eyebrow = false,
  eyebrowText = 'Small',
  cta = 'off',
  footer = false,
  footerText = 'Fine',
  yesLabel = 'Yes',
  noLabel = 'No',
  toastClose = true,
  sizeMode = 'auto',
} = {}) {
  if (variant === 'confirmation' || variant === 'error' || variant === 'success') {
    const fallbackText =
      variant === 'confirmation'
        ? 'Confirmation message'
        : variant === 'error'
          ? 'Error message'
          : 'Success message';

    return breakpointWrap(
      createInlineMessage({
        variant,
        text: text ?? fallbackText,
        dismissible,
        yesLabel,
        noLabel,
      }),
      sizeMode,
    );
  }

  if (variant === 'toast') {
    return breakpointWrap(
      `
        <section class="dds-message dds-message--toast" role="status" aria-live="polite">
          <p class="dds-message__text">${text ?? 'Toast message'}</p>
          ${toastClose ? createCloseButton({ className: 'dds-message__close--toast', label: 'Dismiss toast' }) : ''}
        </section>
      `,
      sizeMode,
    );
  }

  const contentMarkup = createContent({
    variant: 'h+p',
    heading,
    body,
    eyebrow,
    eyebrowText,
    cta,
    footer,
    footerText,
    padded: true,
  });

  return breakpointWrap(
    `
      <section class="dds-message dds-message--${variant}" role="dialog" aria-modal="true">
        ${dismissible ? createCloseButton({ className: 'dds-message__close--floating', label: `Close ${variant} message` }) : ''}
        ${contentMarkup}
      </section>
    `,
    sizeMode,
  );
}

export function createMessageShowcase() {
  return `
    <div class="dds-message-showcase">
      ${createMessage({ variant: 'modal', dismissible: true, cta: 'off' })}
      ${createMessage({ variant: 'promo', dismissible: true, cta: 'off' })}
      ${createMessage({ variant: 'confirmation', text: 'Confirmation message' })}
      ${createMessage({ variant: 'error', text: 'Error message' })}
      ${createMessage({ variant: 'success', text: 'Success message' })}
      ${createMessage({ variant: 'toast', text: 'Toast message' })}
    </div>
  `;
}
