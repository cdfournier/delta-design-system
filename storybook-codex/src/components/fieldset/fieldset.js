import '../input/input.css';
import './fieldset.css';

import {
  createCheckbox,
  createInputMessage,
  createPasswordInput,
  createRadio,
  createSelectInput,
  createSwitch,
  createTextInput,
} from '../input/input';

function breakpointWrap(content, sizeMode = 'auto') {
  if (sizeMode === 'auto') {
    return content;
  }

  return `<div data-breakpoint-mode="${sizeMode}">${content}</div>`;
}

function mapChoiceState(state) {
  if (state === 'open' || state === 'show' || state === 'value' || state === 'read-only') {
    return 'default';
  }

  return state;
}

function getCheckboxValues(pattern) {
  if (pattern === 'all-checked') return ['checked', 'checked', 'checked', 'checked'];
  if (pattern === 'alternating') return ['checked', 'unchecked', 'checked', 'unchecked'];
  if (pattern === 'mixed') return ['unchecked', 'checked', 'indeterminate', 'unchecked'];
  if (pattern === 'first-checked') return ['checked', 'unchecked', 'unchecked', 'unchecked'];
  return ['unchecked', 'unchecked', 'unchecked', 'unchecked'];
}

function getSwitchValues(pattern) {
  if (pattern === 'all-on') return [true, true, true, true];
  if (pattern === 'alternating') return [true, false, true, false];
  if (pattern === 'first-on') return [true, false, false, false];
  return [false, false, false, false];
}

function createLegend({ type, legendText, legendLabel, showLegendLabel }) {
  if (type === 'text' || type === 'password' || type === 'select') {
    return `<label class="dds-fieldset__label">${legendText}</label>`;
  }

  return `<legend class="dds-fieldset__legend">${legendText}${showLegendLabel ? `<span class="dds-fieldset__legend-label">${legendLabel}</span>` : ''}</legend>`;
}

function createBody({ type, state, checkboxPattern, switchPattern, direction, itemLabel, radioSelection }) {
  const choiceState = mapChoiceState(state);
  const textState = state === 'open' || state === 'show' ? 'default' : state;
  const passwordState = ['default', 'value', 'show', 'invalid', 'valid'].includes(state) ? state : 'default';
  const selectState = ['default', 'open', 'disabled', 'invalid', 'valid'].includes(state) ? state : 'default';

  if (type === 'text') {
    return createTextInput({ state: textState });
  }

  if (type === 'password') {
    return createPasswordInput({ state: passwordState });
  }

  if (type === 'select') {
    return createSelectInput({ state: selectState });
  }

  if (type === 'checkbox') {
    const values = getCheckboxValues(checkboxPattern);

    return `<div class="dds-fieldset__choices">${values
      .map((value) => createCheckbox({ state: choiceState, value, direction, label: itemLabel }))
      .join('')}</div>`;
  }

  if (type === 'radio') {
    return `<div class="dds-fieldset__choices">${[1, 2, 3, 4]
      .map((index) => createRadio({ state: choiceState, checked: radioSelection === index, label: itemLabel }))
      .join('')}</div>`;
  }

  const switchState = choiceState === 'disabled' ? 'disabled' : 'default';
  const values = getSwitchValues(switchPattern);

  return `<div class="dds-fieldset__choices">${values
    .map((checked) => createSwitch({ state: switchState, checked, direction, label: itemLabel }))
    .join('')}</div>`;
}

/**
 * @param {{
 *  type?: 'text'|'password'|'select'|'checkbox'|'radio'|'switch';
 *  state?: 'default'|'value'|'disabled'|'invalid'|'read-only'|'valid'|'open'|'show';
 *  showMessage?: boolean;
 *  showLegendLabel?: boolean;
 *  legendText?: string;
 *  legendLabel?: string;
 *  itemLabel?: string;
 *  messageText?: string;
 *  messageState?: 'default'|'disabled'|'invalid'|'read-only'|'valid';
 *  checkboxPattern?: 'all-unchecked'|'first-checked'|'alternating'|'all-checked'|'mixed';
 *  switchPattern?: 'all-off'|'first-on'|'alternating'|'all-on';
 *  direction?: 'default'|'reverse';
 *  radioSelection?: 1|2|3|4;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createFieldset({
  type = 'text',
  state = 'default',
  showMessage = true,
  showLegendLabel = false,
  legendText = type === 'text' || type === 'password' || type === 'select' ? 'Label' : 'Legend',
  legendLabel = 'Label',
  itemLabel = 'Value',
  messageText = 'Message',
  messageState,
  checkboxPattern = 'mixed',
  switchPattern = 'alternating',
  direction = 'default',
  radioSelection = 2,
  sizeMode = 'auto',
} = {}) {
  const resolvedMessageState = messageState ?? mapChoiceState(state);

  const content = `<fieldset class="dds-fieldset" data-type="${type}">
      ${createLegend({ type, legendText, legendLabel, showLegendLabel })}
      ${createBody({ type, state, checkboxPattern, switchPattern, direction, itemLabel, radioSelection })}
      ${showMessage ? `<div class="dds-fieldset__message-wrap">${createInputMessage({ state: resolvedMessageState, text: messageText })}</div>` : ''}
    </fieldset>`;

  return breakpointWrap(content, sizeMode);
}

export function createFieldsetShowcase() {
  return `<div class="dds-fieldset-showcase">
    ${createFieldset({ type: 'text', state: 'default' })}
    ${createFieldset({ type: 'password', state: 'default' })}
    ${createFieldset({ type: 'select', state: 'default' })}
    ${createFieldset({ type: 'checkbox', state: 'default', checkboxPattern: 'mixed', legendText: 'Legend' })}
    ${createFieldset({ type: 'radio', state: 'default', radioSelection: 2, legendText: 'Legend' })}
    ${createFieldset({ type: 'switch', state: 'default', switchPattern: 'alternating', legendText: 'Legend' })}
  </div>`;
}
