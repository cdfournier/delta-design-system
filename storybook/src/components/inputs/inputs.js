import './inputs.css';

function figureShell(content) {
  return `<section class="dds-inputs-fig">${content}</section>`;
}

function eyeIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12C3.6 8.8 7 6.5 12 6.5C17 6.5 20.4 8.8 22 12C20.4 15.2 17 17.5 12 17.5C7 17.5 3.6 15.2 2 12Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2.8" stroke="currentColor" stroke-width="1.5"/></svg>';
}

function eyeOffIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 3L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10.6 6.8C11.06 6.64 11.53 6.56 12 6.56C17 6.56 20.4 8.82 22 12C21.26 13.47 20.24 14.73 18.94 15.76" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14.12 14.12C13.56 14.68 12.8 15 12 15C10.34 15 9 13.66 9 12C9 11.2 9.32 10.44 9.88 9.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6.12 6.12C4.38 7.33 3.03 9.04 2 12C3.6 15.2 7 17.44 12 17.44C13.57 17.44 14.98 17.22 16.24 16.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
}

if (typeof window !== 'undefined' && !window.__ddsPasswordToggleBound) {
  window.__ddsPasswordToggleBound = true;
  document.addEventListener('click', (event) => {
    const toggle = event.target instanceof Element ? event.target.closest('.dds-input-password-toggle') : null;
    if (!toggle) return;
    const wrapper = toggle.closest('.dds-input-password');
    if (!wrapper) return;
    const input = wrapper.querySelector('.dds-input-password-control');
    if (!(input instanceof HTMLInputElement)) return;

    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    toggle.setAttribute('aria-pressed', String(!showing));
    toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    toggle.innerHTML = showing ? eyeIcon() : eyeOffIcon();
  });
}

function checkIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5L10 17L19 8" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function fieldStart({ label = 'Label', message = '', messageState = '', state = 'default' } = {}) {
  const msgClass = messageState ? ` dds-input-message--${messageState}` : '';
  return `
    <div class="dds-input-field" data-state="${state}">
      <label class="dds-input-label">${label}</label>
  ` +
  (message
    ? `<p class="dds-input-message${msgClass}">${message}</p>`
    : '') +
  '</div>';
}

function createTextField({
  label = 'Text input',
  placeholder = 'Enter your text',
  showLabel = true,
  state = 'default',
  value = '',
  disabled = false,
  readOnly = false,
  message = '',
  messageState = '',
} = {}) {
  return `
    <div class="dds-input-field" data-state="${state}">
      ${showLabel ? `<label class="dds-input-label" for="${label.replace(/\s+/g, '-').toLowerCase()}">${label}</label>` : ''}
      <input class="dds-input-base" id="${label.replace(/\s+/g, '-').toLowerCase()}" type="text" placeholder="${placeholder}" value="${value}" ${disabled ? 'disabled' : ''} ${readOnly ? 'readonly' : ''} />
      ${message ? `<p class="dds-input-message${messageState ? ` dds-input-message--${messageState}` : ''}">${message}</p>` : ''}
    </div>
  `;
}

function createSelectField({ label = 'Select', showLabel = true, state = 'default' } = {}) {
  return `
    <div class="dds-input-field" data-state="${state}">
      ${showLabel ? '<label class="dds-input-label" for="dds-select">Select</label>' : ''}
      <select class="dds-input-select" id="dds-select">
        <option>Select one</option>
        <option>Option one</option>
        <option>Option two</option>
      </select>
    </div>
  `;
}

function createCheckboxField({ label = 'I agree to the terms', checked = false } = {}) {
  return `
    <div class="dds-input-field">
      <div class="dds-input-choices">
        <label class="dds-input-choice dds-input-choice--checkbox">
          <input class="dds-input-checkbox__native" type="checkbox" ${checked ? 'checked' : ''} />
          <span class="dds-input-checkbox__box" aria-hidden="true">
            <span class="dds-input-checkbox__icon">${checkIcon()}</span>
          </span>
          <span class="dds-input-choice__label">${label}</span>
        </label>
      </div>
    </div>
  `;
}

function createRadioField() {
  return `
    <div class="dds-input-field">
      <div class="dds-input-choices">
        <label class="dds-input-choice dds-input-choice--radio">
          <input class="dds-input-radio__native" type="radio" name="dds-radio" checked />
          <span class="dds-input-radio__outer" aria-hidden="true">
            <span class="dds-input-radio__inner"></span>
          </span>
          <span class="dds-input-choice__label">Option 1</span>
        </label>
        <label class="dds-input-choice dds-input-choice--radio">
          <input class="dds-input-radio__native" type="radio" name="dds-radio" />
          <span class="dds-input-radio__outer" aria-hidden="true">
            <span class="dds-input-radio__inner"></span>
          </span>
          <span class="dds-input-choice__label">Option 2</span>
        </label>
      </div>
    </div>
  `;
}

function createSwitchField({ label = 'Enable notifications', checked = false } = {}) {
  return `
    <div class="dds-input-field">
      <label class="dds-input-switch">
        <input class="dds-input-switch__control" type="checkbox" role="switch" ${checked ? 'checked' : ''} />
        <span class="dds-input-choice__label">${label}</span>
      </label>
    </div>
  `;
}

function createPasswordField({ label = 'Password', showLabel = true, state = 'default', value = 'Value' } = {}) {
  return `
    <div class="dds-input-field" data-state="${state}">
      ${showLabel ? `<label class="dds-input-label" for="dds-password">${label}</label>` : ''}
      <div class="dds-input-password">
        <input class="dds-input-password-control" id="dds-password" type="password" value="${value}" />
        <button class="dds-input-password-toggle" type="button" aria-label="Show password" aria-pressed="false">${eyeIcon()}</button>
      </div>
    </div>
  `;
}

export function createInputsPlayground({
  inputType = 'text',
  state = 'default',
  label = 'Label',
  placeholder = 'Enter value',
  helperText = '',
  checked = false,
  readOnly = false,
  disabled = false,
} = {}) {
  if (inputType === 'select') {
    return figureShell(`<div class="dds-inputs-fig__card">${createSelectField({ label, state })}</div>`);
  }
  if (inputType === 'checkbox') {
    return figureShell(`<div class="dds-inputs-fig__card">${createCheckboxField({ label, checked })}</div>`);
  }
  if (inputType === 'radio') {
    return figureShell(`<div class="dds-inputs-fig__card">${createRadioField()}</div>`);
  }
  if (inputType === 'switch') {
    return figureShell(`<div class="dds-inputs-fig__card">${createSwitchField({ label, checked })}</div>`);
  }
  if (inputType === 'password') {
    return figureShell(`<div class="dds-inputs-fig__card">${createPasswordField({ label, state })}</div>`);
  }

  return figureShell(
    `<div class="dds-inputs-fig__card">${createTextField({
      label,
      placeholder,
      state,
      disabled,
      readOnly,
      message: helperText,
      messageState: state === 'valid' ? 'valid' : state === 'invalid' ? 'invalid' : '',
    })}</div>`,
  );
}

export function createInputsAnatomyFigure() {
  return figureShell(`<div class="dds-inputs-fig__card dds-inputs-fig__card--anatomy">${createTextField({ label: 'Email address', placeholder: 'Enter your email', message: "We'll never share your email with anyone else." })}</div>`);
}

export function createInputsVariantTextFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createTextField({ showLabel: false, placeholder: '', value: 'Value' })}</div>`);
}

export function createInputsVariantSelectFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createSelectField({ showLabel: false })}</div>`);
}

export function createInputsVariantCheckboxFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createCheckboxField({ label: 'I agree to the terms and conditions' })}</div>`);
}

export function createInputsVariantRadioFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createRadioField()}</div>`);
}

export function createInputsVariantSwitchFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createSwitchField({ checked: false })}</div>`);
}

export function createInputsVariantPasswordFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createPasswordField({ showLabel: false })}</div>`);
}

export function createInputsVariantMessagesFigure() {
  return figureShell(`
    <div class="dds-inputs-fig__card dds-inputs-fig__stack">
      <p class="dds-input-message">Helper text provides additional guidance.</p>
      <p class="dds-input-message dds-input-message--valid">This input is valid.</p>
      <p class="dds-input-message dds-input-message--invalid">This input contains an error.</p>
    </div>
  `);
}

export function createInputsStateDefaultFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createTextField({ label: 'Default state', placeholder: 'Default state' })}</div>`);
}

export function createInputsStateDisabledFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createTextField({ label: 'Disabled state', placeholder: 'Disabled state', state: 'disabled', disabled: true, message: 'Disabled helper text', messageState: 'disabled' })}</div>`);
}

export function createInputsStateReadOnlyFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createTextField({ label: 'Read-only state', value: 'Read-only value', state: 'readonly', readOnly: true, message: 'Read-only value', messageState: 'readonly' })}</div>`);
}

export function createInputsStateValidFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createTextField({ label: 'Valid state', value: 'user@example.com', state: 'valid', message: 'Email address is valid', messageState: 'valid' })}</div>`);
}

export function createInputsStateInvalidFigure() {
  return figureShell(`<div class="dds-inputs-fig__card">${createTextField({ label: 'Invalid state', value: 'invalid-email', state: 'invalid', message: 'Please enter a valid email address', messageState: 'invalid' })}</div>`);
}

export function createInputsBestPracticesFigure() {
  return figureShell(`
    <div class="dds-inputs-fig__do-dont-grid">
      <section class="dds-inputs-fig__do">
        <p><strong>Do</strong></p>
        <p><strong>Label every input</strong></p>
        <p>Always provide visible labels and keep them close to their fields.</p>
        <p><strong>Validate inline when possible</strong></p>
        <p>Provide immediate, actionable feedback as users complete fields.</p>
        <p><strong>Group related inputs</strong></p>
        <p>Use fieldsets and legends to organize connected choices.</p>
      </section>
      <section class="dds-inputs-fig__dont">
        <p><strong>Don’t</strong></p>
        <p><strong>Don’t use placeholder as label</strong></p>
        <p>Placeholders disappear and should not replace persistent labels.</p>
        <p><strong>Don’t rely on color alone</strong></p>
        <p>Pair color with text and iconography for state communication.</p>
        <p><strong>Don’t use vague errors</strong></p>
        <p>Replace generic messages with specific recovery guidance.</p>
      </section>
    </div>
  `);
}
