import '../buttons/buttons.css';
import './messages.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function closeIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6L18 18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/><path d="M18 6L6 18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>';
}

function contentBlock({ heading = 'Heading', body = 'Body' } = {}) {
  return `
    <div class="dds-message__content">
      <h2>${escapeHtml(heading)}</h2>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

function closeButton({ label = 'Close', kind = 'default' } = {}) {
  const kindClass = kind === 'inline' ? 'dds-message__close--inline' : kind === 'toast' ? 'dds-message__close--toast' : 'dds-message__close--floating';
  return `<button class="dds-message__close ${kindClass}" type="button" aria-label="${escapeHtml(label)}">${closeIcon()}</button>`;
}

function confirmationActions() {
  return `
    <div class="dds-message__actions">
      <button class="dds-message__action dds-message__action--no" type="button">No</button>
      <button class="dds-message__action dds-message__action--yes" type="button">Yes</button>
    </div>
  `;
}

/**
 * @param {{
 *  variant?: 'modal'|'promo'|'confirmation'|'error'|'success'|'toast';
 *  open?: boolean;
 *  dismissible?: boolean;
 *  message?: string;
 * }} args
 */
export function createMessage({
  variant = 'modal',
  open = true,
  dismissible = true,
  message = '',
} = {}) {
  if (!open) {
    return '<div class="dds-message-state-closed" aria-hidden="true">Message closed</div>';
  }

  if (variant === 'toast') {
    return `
      <section class="dds-toast" role="status" aria-live="polite">
        <p class="dds-toast__message">${escapeHtml(message || 'Toast message')}</p>
        ${dismissible ? closeButton({ label: 'Dismiss', kind: 'toast' }) : ''}
      </section>
    `;
  }

  if (variant === 'error') {
    return `
      <section class="dds-message dds-message--error" role="alert">
        <p class="dds-message__text">${escapeHtml(message || 'Error message')}</p>
        ${dismissible ? closeButton({ label: 'Dismiss error', kind: 'inline' }) : ''}
      </section>
    `;
  }

  if (variant === 'success') {
    return `
      <section class="dds-message dds-message--success" role="status">
        <p class="dds-message__text">${escapeHtml(message || 'Success message')}</p>
        ${dismissible ? closeButton({ label: 'Dismiss success', kind: 'inline' }) : ''}
      </section>
    `;
  }

  if (variant === 'confirmation') {
    return `
      <section class="dds-message dds-message--confirmation" role="alertdialog" aria-label="Confirmation message">
        <p class="dds-message__text">${escapeHtml(message || 'Confirmation message')}</p>
        ${confirmationActions()}
      </section>
    `;
  }

  if (variant === 'promo') {
    return `
      <section class="dds-message dds-message--promo" role="dialog" aria-label="Promo message">
        ${dismissible ? closeButton({ label: 'Close promo', kind: 'default' }) : ''}
        ${contentBlock()}
      </section>
    `;
  }

  return `
    <dialog class="dds-message dds-message--modal" open aria-label="Modal message">
      ${dismissible ? closeButton({ label: 'Close modal', kind: 'default' }) : ''}
      ${contentBlock()}
    </dialog>
  `;
}

function figureShell(content, extraClass = '') {
  return `<section class="dds-messages-fig ${extraClass}"><div class="dds-messages-fig__card">${content}</div></section>`;
}

export function createMessagesAnatomyMessageFigure() {
  return figureShell(createMessage({ variant: 'error' }));
}

export function createMessagesAnatomyToastFigure() {
  return figureShell(createMessage({ variant: 'toast' }));
}

export function createMessagesVariantModalFigure() {
  return figureShell(createMessage({ variant: 'modal' }));
}

export function createMessagesVariantPromoFigure() {
  return figureShell(createMessage({ variant: 'promo' }));
}

export function createMessagesVariantConfirmationFigure() {
  return figureShell(createMessage({ variant: 'confirmation' }));
}

export function createMessagesVariantErrorFigure() {
  return figureShell(createMessage({ variant: 'error' }));
}

export function createMessagesVariantSuccessFigure() {
  return figureShell(createMessage({ variant: 'success' }));
}

export function createMessagesVariantToastFigure() {
  return figureShell(createMessage({ variant: 'toast' }));
}

export function createMessagesBestPracticesFigure() {
  return `
    <div class="dds-messages-doc__do-dont-grid">
      <section class="dds-messages-doc__do">
        <h4>Do</h4>
        <p><strong>Provide clear actions</strong></p>
        <p>Give users obvious next steps, especially in Error and Confirmation messages where recovery or a decision is required.</p>
        <p><strong>Use appropriate severity</strong></p>
        <p>Match the message variant to the importance of the situation.</p>
        <p><strong>Keep Toast messages brief</strong></p>
        <p>Toasts should communicate one key point and require no action to proceed.</p>
        <p><strong>Allow dismissal</strong></p>
        <p>Give users control to close messages once they have read them, except where acknowledgment is required.</p>
      </section>
      <section class="dds-messages-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't interrupt unnecessarily</strong></p>
        <p>Avoid modals for non-critical information that does not need to block the rest of the page.</p>
        <p><strong>Don't use vague error messages</strong></p>
        <p>Always explain what went wrong and what to do next.</p>
        <p><strong>Don't auto-dismiss errors</strong></p>
        <p>Users need time to read and act on Error messages.</p>
        <p><strong>Don't stack multiple messages</strong></p>
        <p>Show one message at a time to avoid competing notifications.</p>
      </section>
    </div>
  `;
}
