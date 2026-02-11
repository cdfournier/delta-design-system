import './input.css';
import { createIcon } from '../icon/icon';
let inputEventsBound = false;
let inputIdCounter = 0;

function nextInputId(prefix) {
  inputIdCounter += 1;
  return `${prefix}-${inputIdCounter}`;
}

function bindInputEvents() {
  if (inputEventsBound || typeof document === 'undefined') {
    return;
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.dds-input-control__toggle[data-password-target]');
    if (!button) {
      return;
    }

    const input = document.getElementById(button.dataset.passwordTarget || '');
    if (!input) {
      return;
    }

    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    button.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    button.classList.toggle('is-active', show);
  });

  inputEventsBound = true;
}

function breakpointWrap(content, sizeMode = 'auto') {
  if (sizeMode === 'auto') {
    return content;
  }

  return `<div data-breakpoint-mode="${sizeMode}">${content}</div>`;
}

function textStateClass(state) {
  return `dds-input-control dds-input-control--${state}`;
}

/**
 * @param {{
 *  state?: 'default'|'value'|'disabled'|'invalid'|'read-only'|'valid';
 *  placeholder?: string;
 *  valueText?: string;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createTextInput({
  state = 'default',
  placeholder = 'Placeholder',
  valueText = 'Value',
  sizeMode = 'auto',
} = {}) {
  const value = state === 'default' ? '' : valueText;
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'read-only';

  const content = `
    <div class="${textStateClass(state)}" data-state="${state}">
      <input
        class="dds-input-control__native"
        type="text"
        placeholder="${placeholder}"
        value="${value}"
        ${isDisabled ? 'disabled' : ''}
        ${isReadOnly ? 'readonly' : ''}
        ${state === 'invalid' ? 'aria-invalid="true"' : ''}
      />
    </div>
  `;

  return breakpointWrap(content, sizeMode);
}

/**
 * @param {{
 *  state?: 'default'|'open'|'disabled'|'invalid'|'valid';
 *  label?: string;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createSelectInput({ state = 'default', label = 'Select', sizeMode = 'auto' } = {}) {
  const content = `
    <div class="${textStateClass(state)} dds-input-control--select" data-state="${state}">
      <select class="dds-input-control__native dds-input-control__select" ${state === 'disabled' ? 'disabled' : ''}>
        <option selected>${label}</option>
        <option>Option</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <span class="dds-input-control__chevron" aria-hidden="true">${createIcon({ type: 'chevron-down', decorative: true, strokeWidth: 2 })}</span>
    </div>
  `;

  return breakpointWrap(content, sizeMode);
}

/**
 * @param {{
 *  state?: 'default'|'value'|'show'|'invalid'|'valid';
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createPasswordInput({ state = 'default', sizeMode = 'auto' } = {}) {
  bindInputEvents();
  const text = state === 'default' ? '' : state === 'show' ? 'Value' : '••••••••••••••••';
  const type = state === 'show' ? 'text' : 'password';
  const id = nextInputId('dds-password');

  const content = `
    <div class="${textStateClass(state === 'show' ? 'value' : state)} dds-input-control--password" data-state="${state}">
      <input
        id="${id}"
        class="dds-input-control__native"
        type="${type}"
        placeholder="Placeholder"
        value="${text}"
        ${state === 'invalid' ? 'aria-invalid="true"' : ''}
      />
      <button
        class="dds-input-control__toggle ${state === 'show' ? 'is-active' : ''}"
        type="button"
        data-password-target="${id}"
        aria-label="${state === 'show' ? 'Hide password' : 'Show password'}"
      >
        <span class="dds-input-control__toggle-icon dds-input-control__toggle-icon--eye">${createIcon({
          type: 'eye',
          decorative: true,
          strokeWidth: 2,
        })}</span>
        <span class="dds-input-control__toggle-icon dds-input-control__toggle-icon--eye-off">${createIcon({
          type: 'eye-off',
          decorative: true,
          strokeWidth: 2,
        })}</span>
      </button>
    </div>
  `;

  return breakpointWrap(content, sizeMode);
}

/**
 * @param {{
 *  state?: 'default'|'disabled'|'invalid'|'valid';
 *  value?: 'unchecked'|'checked'|'indeterminate';
 *  direction?: 'default'|'reverse';
 *  label?: string;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createCheckbox({
  state = 'default',
  value = 'unchecked',
  direction = 'default',
  label = 'Value',
  sizeMode = 'auto',
} = {}) {
  const checked = value !== 'unchecked';
  const id = nextInputId('dds-checkbox');
  const stateIcon =
    value === 'indeterminate'
      ? createIcon({ type: 'minus', decorative: true, strokeWidth: 2 })
      : createIcon({ type: 'check', decorative: true, strokeWidth: 2 });

  const content = `
    <label class="dds-input-choice dds-input-choice--checkbox" data-state="${state}" data-direction="${direction}" data-value="${value}" for="${id}">
      ${direction === 'reverse' ? `<span class="dds-input-choice__label">${label}</span>` : ''}
      <input
        id="${id}"
        class="dds-input-choice__native dds-input-choice__native--checkbox"
        type="checkbox"
        ${checked ? 'checked' : ''}
        ${state === 'disabled' ? 'disabled' : ''}
        ${state === 'invalid' ? 'aria-invalid="true"' : ''}
      />
      <span class="dds-input-choice__visual" aria-hidden="true"><span class="dds-input-choice__icon">${stateIcon}</span></span>
      ${direction === 'default' ? `<span class="dds-input-choice__label">${label}</span>` : ''}
    </label>
  `;

  return breakpointWrap(content, sizeMode);
}

/**
 * @param {{
 *  state?: 'default'|'disabled'|'invalid'|'valid';
 *  checked?: boolean;
 *  label?: string;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createRadio({
  state = 'default',
  checked = false,
  label = 'Value',
  sizeMode = 'auto',
} = {}) {
  const id = nextInputId('dds-radio');

  const content = `
    <label class="dds-input-choice dds-input-choice--radio" data-state="${state}" for="${id}">
      <input
        id="${id}"
        class="dds-input-choice__native dds-input-choice__native--radio"
        name="${id}-group"
        type="radio"
        ${checked ? 'checked' : ''}
        ${state === 'disabled' ? 'disabled' : ''}
        ${state === 'invalid' ? 'aria-invalid="true"' : ''}
      />
      <span class="dds-input-choice__visual" aria-hidden="true"></span>
      <span class="dds-input-choice__label">${label}</span>
    </label>
  `;

  return breakpointWrap(content, sizeMode);
}

/**
 * @param {{
 *  state?: 'default'|'disabled';
 *  checked?: boolean;
 *  direction?: 'default'|'reverse';
 *  label?: string;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createSwitch({
  state = 'default',
  checked = false,
  direction = 'default',
  label = 'Value',
  sizeMode = 'auto',
} = {}) {
  const id = nextInputId('dds-switch');

  const content = `
    <label class="dds-input-choice dds-input-choice--switch" data-state="${state}" data-direction="${direction}" for="${id}">
      ${direction === 'reverse' ? `<span class="dds-input-choice__label">${label}</span>` : ''}
      <input id="${id}" class="dds-input-choice__native dds-input-choice__native--switch" type="checkbox" role="switch" ${checked ? 'checked' : ''} ${state === 'disabled' ? 'disabled' : ''} />
      <span class="dds-input-choice__visual" aria-hidden="true"></span>
      ${direction === 'default' ? `<span class="dds-input-choice__label">${label}</span>` : ''}
    </label>
  `;

  return breakpointWrap(content, sizeMode);
}

/**
 * @param {{state?: 'default'|'disabled'|'invalid'|'read-only'|'valid'; text?: string; sizeMode?: 'auto'|'mobile'|'widescreen'}} params
 */
export function createInputMessage({ state = 'default', text = 'Message', sizeMode = 'auto' } = {}) {
  return breakpointWrap(`<p class="dds-input-message" data-state="${state}">${text}</p>`, sizeMode);
}

/**
 * @param {{
 *  type?: 'text'|'password'|'select'|'checkbox'|'radio'|'switch';
 *  state?: 'default'|'value'|'disabled'|'invalid'|'read-only'|'valid'|'open'|'show';
 *  legendLabel?: string;
 *  helperMessage?: string;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createInputFieldset({
  type = 'text',
  state = 'default',
  legendLabel = 'Label',
  helperMessage = 'Message',
  sizeMode = 'auto',
} = {}) {
  const heading = type === 'checkbox' || type === 'radio' || type === 'switch' ? 'Legend' : 'Label';
  const mappedState = state === 'open' || state === 'show' ? 'default' : state;

  let body = '';
  if (type === 'text') body = createTextInput({ state });
  if (type === 'password') body = createPasswordInput({ state });
  if (type === 'select') body = createSelectInput({ state: state === 'value' ? 'default' : state });
  if (type === 'checkbox') {
    body = `<div class="dds-input-choice-list">
      ${createCheckbox({ state: mappedState, value: 'unchecked' })}
      ${createCheckbox({ state: mappedState, value: 'checked' })}
      ${createCheckbox({ state: mappedState, value: 'indeterminate' })}
      ${createCheckbox({ state: mappedState, value: 'unchecked' })}
    </div>`;
  }
  if (type === 'radio') {
    body = `<div class="dds-input-choice-list">
      ${createRadio({ state: mappedState, checked: false })}
      ${createRadio({ state: mappedState, checked: true })}
      ${createRadio({ state: mappedState, checked: false })}
      ${createRadio({ state: mappedState, checked: false })}
    </div>`;
  }
  if (type === 'switch') {
    const switchState = state === 'disabled' ? 'disabled' : 'default';
    body = `<div class="dds-input-choice-list">
      ${createSwitch({ state: switchState, checked: false })}
      ${createSwitch({ state: switchState, checked: true })}
      ${createSwitch({ state: switchState, checked: false })}
      ${createSwitch({ state: switchState, checked: true })}
    </div>`;
  }

  return breakpointWrap(
    `<fieldset class="dds-input-fieldset" data-type="${type}">
      <legend class="dds-input-fieldset__legend">${heading}${type === 'checkbox' || type === 'radio' || type === 'switch' ? `<span class="dds-input-fieldset__legend-label">${legendLabel}</span>` : ''}</legend>
      ${body}
      ${createInputMessage({ state: mappedState, text: helperMessage })}
    </fieldset>`,
    sizeMode,
  );
}

/**
 * @param {{checkedRows?: number[]; hoverIndex?: number; sizeMode?: 'auto'|'mobile'|'widescreen'}} params
 */
export function createOptionList({ checkedRows = [2], hoverIndex = 1, sizeMode = 'auto' } = {}) {
  const rows = Array.from({ length: 10 }, (_, i) => {
    const checked = checkedRows.includes(i);
    return `<li class="dds-input-options__row ${hoverIndex === i ? 'dds-input-options__row--hover' : ''}">
      <span class="dds-input-options__check">${checked ? '✓' : ''}</span>
      <span class="dds-input-options__label">Option</span>
    </li>`;
  }).join('');

  return breakpointWrap(`<ul class="dds-input-options">${rows}</ul>`, sizeMode);
}

export function createInputShowcase() {
  return `
    <div class="dds-input-showcase-grid">
      <section class="dds-input-showcase-col">
        <h4>Text</h4>
        ${createTextInput({ state: 'default' })}
        ${createTextInput({ state: 'value' })}
        ${createTextInput({ state: 'disabled' })}
        ${createTextInput({ state: 'invalid' })}
        ${createTextInput({ state: 'read-only' })}
        ${createTextInput({ state: 'valid' })}
      </section>
      <section class="dds-input-showcase-col">
        <h4>Select</h4>
        ${createSelectInput({ state: 'default' })}
        ${createSelectInput({ state: 'open' })}
        ${createSelectInput({ state: 'disabled' })}
        ${createSelectInput({ state: 'invalid' })}
        ${createSelectInput({ state: 'valid' })}
      </section>
      <section class="dds-input-showcase-col">
        <h4>Password</h4>
        ${createPasswordInput({ state: 'default' })}
        ${createPasswordInput({ state: 'value' })}
        ${createPasswordInput({ state: 'show' })}
        ${createPasswordInput({ state: 'invalid' })}
        ${createPasswordInput({ state: 'valid' })}
      </section>
      <section class="dds-input-showcase-col">
        <h4>Checkbox</h4>
        ${createCheckbox({ state: 'default', value: 'unchecked' })}
        ${createCheckbox({ state: 'default', value: 'checked' })}
        ${createCheckbox({ state: 'default', value: 'indeterminate' })}
      </section>
      <section class="dds-input-showcase-col">
        <h4>Radio</h4>
        ${createRadio({ state: 'default', checked: false })}
        ${createRadio({ state: 'default', checked: true })}
      </section>
      <section class="dds-input-showcase-col">
        <h4>Switch</h4>
        ${createSwitch({ state: 'default', checked: false })}
        ${createSwitch({ state: 'default', checked: true })}
      </section>
    </div>
  `;
}

export function createInputStateLegend() {
  return ['default', 'disabled', 'invalid', 'read-only', 'valid']
    .map((state) => `<tr><td>${state}</td><td>${createInputMessage({ state, text: 'Message' })}</td></tr>`)
    .join('');
}
