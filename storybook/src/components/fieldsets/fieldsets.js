import './fieldsets.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function iconEye() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12C3.6 8.8 7 6.5 12 6.5C17 6.5 20.4 8.8 22 12C20.4 15.2 17 17.5 12 17.5C7 17.5 3.6 15.2 2 12Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2.8" stroke="currentColor" stroke-width="1.5"/></svg>';
}

function iconChevron() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function iconCheck() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5L10 17L19 8" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function figureShell(content) {
  return `<section class="dds-fieldsets-fig"><div class="dds-fieldsets-fig__card">${content}</div></section>`;
}

function messageMarkup({ showMessage = true, state = 'default', text = 'Message' } = {}) {
  if (!showMessage) return '';
  return `<p class="dds-fieldset__message dds-fieldset__message--${state}">${escapeHtml(text)}</p>`;
}

function textLikeFieldset({
  type = 'text',
  label = 'Label',
  placeholder = 'Placeholder',
  value = '',
  state = 'default',
  showMessage = true,
  message = 'Message',
  disabled = false,
  readOnly = false,
} = {}) {
  const isSelect = type === 'select';
  const isPassword = type === 'password';
  const control = isSelect
    ? `<select class="dds-fieldset__control dds-fieldset__control--select" ${disabled ? 'disabled' : ''} aria-invalid="${state === 'invalid'}"><option>${escapeHtml(value || 'Select')}</option></select><span class="dds-fieldset__control-icon dds-fieldset__control-icon--select" aria-hidden="true">${iconChevron()}</span>`
    : `<input class="dds-fieldset__control ${isPassword ? 'dds-fieldset__control--password' : ''}" type="${isPassword ? 'password' : 'text'}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" ${disabled ? 'disabled' : ''} ${readOnly ? 'readonly' : ''} aria-invalid="${state === 'invalid'}"/>${isPassword ? `<button type="button" class="dds-fieldset__control-icon" aria-label="Show password">${iconEye()}</button>` : ''}`;

  return `
    <div class="dds-fieldset dds-fieldset--text" data-state="${state}">
      <label class="dds-fieldset__label">${escapeHtml(label)}</label>
      <div class="dds-fieldset__control-wrap">${control}</div>
      ${messageMarkup({ showMessage, state, text: message })}
    </div>
  `;
}

function choiceRow(type, value, checked = false, disabled = false) {
  const marker =
    type === 'checkbox'
      ? `<span class="dds-fieldset__marker dds-fieldset__marker--checkbox" aria-hidden="true"><span class="dds-fieldset__check">${iconCheck()}</span></span>`
      : type === 'radio'
        ? '<span class="dds-fieldset__marker dds-fieldset__marker--radio" aria-hidden="true"><span class="dds-fieldset__dot"></span></span>'
        : '<span class="dds-fieldset__marker dds-fieldset__marker--switch" aria-hidden="true"><span class="dds-fieldset__thumb"></span></span>';

  return `
    <label class="dds-fieldset__choice">
      <input class="dds-fieldset__native" type="${type === 'radio' ? 'radio' : 'checkbox'}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} ${type === 'radio' ? 'name="dds-fieldset-radio"' : ''} ${type === 'switch' ? 'role="switch"' : ''} />
      ${marker}
      <span class="dds-fieldset__value">${escapeHtml(value)}</span>
    </label>
  `;
}

function choiceFieldset({
  type = 'checkbox',
  legend = 'Legend',
  legendLabel = false,
  state = 'default',
  showMessage = true,
  message = 'Message',
  disabled = false,
} = {}) {
  return `
    <fieldset class="dds-fieldset dds-fieldset--choice" data-state="${state}">
      <legend class="dds-fieldset__legend">${escapeHtml(legend)} ${legendLabel ? '<span class="dds-fieldset__legend-label">Label</span>' : ''}</legend>
      <div class="dds-fieldset__choices">
        ${choiceRow(type, 'Value', false, disabled)}
        ${choiceRow(type, 'Value', false, disabled)}
        ${choiceRow(type, 'Value', false, disabled)}
        ${choiceRow(type, 'Value', false, disabled)}
      </div>
      ${messageMarkup({ showMessage, state, text: message })}
    </fieldset>
  `;
}

export function createFieldset({
  type = 'text',
  state = 'default',
  showMessage = true,
  legendLabel = false,
} = {}) {
  const disabled = state === 'disabled';
  const readOnly = state === 'readonly';

  if (type === 'checkbox' || type === 'radio' || type === 'switch') {
    return choiceFieldset({
      type,
      state,
      showMessage,
      legendLabel,
      disabled,
      message: state === 'invalid' ? 'Message' : state === 'valid' ? 'Message' : 'Message',
    });
  }

  return textLikeFieldset({
    type,
    state,
    showMessage,
    disabled,
    readOnly,
    value: type === 'select' ? 'Select' : '',
    message: 'Message',
  });
}

export function createFieldsetsAnatomyFigure() {
  return figureShell(`
    <div class="dds-fieldsets-fig__grid">
      ${textLikeFieldset({ type: 'text', label: 'Label', placeholder: 'Placeholder', showMessage: true, message: 'Message' })}
      ${textLikeFieldset({ type: 'select', label: 'Label', value: 'Select', showMessage: true, message: 'Message' })}
    </div>
  `);
}

export function createFieldsetsBestPracticesFigure() {
  return `
    <div class="dds-fieldsets-doc__do-dont-grid">
      <section class="dds-fieldsets-doc__do">
        <h4>Do</h4>
        <p><strong>Use semantic HTML elements</strong></p>
        <p>Native <code>&lt;fieldset&gt;</code>, <code>&lt;legend&gt;</code>, and <code>&lt;label&gt;</code> elements provide built-in accessibility and require less ARIA overhead.</p>
        <p><strong>Group related choice inputs</strong></p>
        <p>Wrap checkbox, radio, and switch groups in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> so assistive technology announces context for each control.</p>
        <p><strong>Link messages to inputs</strong></p>
        <p>Use <code>aria-describedby</code> to associate helper and error messages with each input.</p>
        <p><strong>Make labels fully clickable</strong></p>
        <p>Use explicit <code>for</code>/<code>id</code> associations or wrap controls in labels.</p>
      </section>
      <section class="dds-fieldsets-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't use placeholder as a label</strong></p>
        <p>Placeholders disappear when users type. Always provide a persistent visible label.</p>
        <p><strong>Don't rely on color alone for state</strong></p>
        <p>Pair color with message text and ARIA attributes for valid and invalid states.</p>
        <p><strong>Don't hide validation messages prematurely</strong></p>
        <p>Keep error messages visible until validation has passed.</p>
        <p><strong>Don't make touch targets too small</strong></p>
        <p>Checkbox, radio, and switch controls should meet 44x44px touch target guidance.</p>
      </section>
    </div>
  `;
}
