import {
  createTextInput,
  createSelectInput,
  createCheckbox,
  createRadio,
  createSwitch,
  createPasswordInput,
  createInputMessage,
  createInputFieldset,
  createOptionList,
  createInputShowcase,
} from './input';

const meta = {
  title: 'Atoms/Input',
  render: (args, context) =>
    createTextInput({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Inputs implementation in plain HTML/CSS using Figma-aligned token names (`components/input/*`) with state and variant coverage.',
      },
    },
  },
  argTypes: {
    state: {
      options: ['default', 'value', 'disabled', 'invalid', 'read-only', 'valid'],
      control: { type: 'inline-radio' },
      description: 'Text input state.',
    },
    iconLeft: {
      control: 'boolean',
      description: 'Shows leading icon in text field.',
    },
    iconRight: {
      control: 'boolean',
      description: 'Shows trailing icon in text field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder label for default state.',
    },
    valueText: {
      control: 'text',
      description: 'Displayed text for non-default states.',
    },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in `auto`, or forces a specific size scale.',
    },
  },
  args: {
    state: 'default',
    iconLeft: false,
    iconRight: false,
    placeholder: 'Placeholder',
    valueText: 'Value',
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const Playground = {};

export const VariantShowcase = {
  render: () => createInputShowcase(),
};

export const TextFigure = {
  render: () =>
    `<div class="dds-input-matrix__col">
      ${createTextInput({ state: 'default' })}
    </div>`,
};

export const SelectFigure = {
  render: () =>
    `<div class="dds-input-matrix__col">
      ${createSelectInput({ state: 'default' })}
    </div>`,
};

export const CheckboxFigure = {
  render: () =>
    `<div class="dds-input-matrix__col">
      ${createCheckbox({ state: 'default', value: 'unchecked' })}
    </div>`,
};

export const RadioFigure = {
  render: () =>
    `<div class="dds-input-matrix__col">
      ${createRadio({ state: 'default', checked: false })}
    </div>`,
};

export const SwitchFigure = {
  render: () =>
    `<div class="dds-input-matrix__col">
      ${createSwitch({ state: 'default', checked: false })}
    </div>`,
};

export const PasswordFigure = {
  render: () =>
    `<div class="dds-input-matrix__col">
      ${createPasswordInput({ state: 'default' })}
    </div>`,
};

export const TextStates = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createTextInput({ state: 'default' })}
      ${createTextInput({ state: 'value' })}
      ${createTextInput({ state: 'disabled' })}
      ${createTextInput({ state: 'invalid' })}
      ${createTextInput({ state: 'read-only' })}
      ${createTextInput({ state: 'valid' })}
    </div>
  `,
};

export const SelectStates = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createSelectInput({ state: 'default' })}
      ${createSelectInput({ state: 'open' })}
      ${createSelectInput({ state: 'disabled' })}
      ${createSelectInput({ state: 'invalid' })}
      ${createSelectInput({ state: 'valid' })}
    </div>
  `,
};

export const CheckboxStates = {
  render: () => `
    <div class="dds-input-matrix">
      <div class="dds-input-matrix__row">
        ${createCheckbox({ state: 'default', value: 'unchecked' })}
        ${createCheckbox({ state: 'default', value: 'checked' })}
        ${createCheckbox({ state: 'default', value: 'indeterminate' })}
      </div>
      <div class="dds-input-matrix__row">
        ${createCheckbox({ state: 'disabled', value: 'unchecked' })}
        ${createCheckbox({ state: 'disabled', value: 'checked' })}
        ${createCheckbox({ state: 'disabled', value: 'indeterminate' })}
      </div>
      <div class="dds-input-matrix__row">
        ${createCheckbox({ state: 'invalid', value: 'unchecked' })}
        ${createCheckbox({ state: 'invalid', value: 'checked' })}
        ${createCheckbox({ state: 'invalid', value: 'indeterminate' })}
      </div>
      <div class="dds-input-matrix__row">
        ${createCheckbox({ state: 'valid', value: 'unchecked' })}
        ${createCheckbox({ state: 'valid', value: 'checked' })}
        ${createCheckbox({ state: 'valid', value: 'indeterminate' })}
      </div>
      <div class="dds-input-matrix__row">
        ${createCheckbox({ state: 'default', value: 'unchecked', direction: 'reverse' })}
        ${createCheckbox({ state: 'default', value: 'checked', direction: 'reverse' })}
        ${createCheckbox({ state: 'default', value: 'indeterminate', direction: 'reverse' })}
      </div>
    </div>
  `,
};

export const RadioStates = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createRadio({ state: 'default', checked: false })}
      ${createRadio({ state: 'default', checked: true })}
      ${createRadio({ state: 'disabled', checked: false })}
      ${createRadio({ state: 'disabled', checked: true })}
      ${createRadio({ state: 'invalid', checked: false })}
      ${createRadio({ state: 'invalid', checked: true })}
      ${createRadio({ state: 'valid', checked: false })}
      ${createRadio({ state: 'valid', checked: true })}
    </div>
  `,
};

export const SwitchStates = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createSwitch({ state: 'default', checked: false, direction: 'default' })}
      ${createSwitch({ state: 'default', checked: true, direction: 'default' })}
      ${createSwitch({ state: 'default', checked: false, direction: 'reverse' })}
      ${createSwitch({ state: 'default', checked: true, direction: 'reverse' })}
      ${createSwitch({ state: 'disabled', checked: false, direction: 'default' })}
      ${createSwitch({ state: 'disabled', checked: true, direction: 'default' })}
      ${createSwitch({ state: 'disabled', checked: false, direction: 'reverse' })}
      ${createSwitch({ state: 'disabled', checked: true, direction: 'reverse' })}
    </div>
  `,
};

export const PasswordStates = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createPasswordInput({ state: 'default' })}
      ${createPasswordInput({ state: 'value' })}
      ${createPasswordInput({ state: 'show' })}
      ${createPasswordInput({ state: 'invalid' })}
      ${createPasswordInput({ state: 'valid' })}
    </div>
  `,
};

export const Messages = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createInputMessage({ state: 'default', text: 'Message' })}
      ${createInputMessage({ state: 'disabled', text: 'Message' })}
      ${createInputMessage({ state: 'invalid', text: 'Message' })}
      ${createInputMessage({ state: 'read-only', text: 'Message' })}
      ${createInputMessage({ state: 'valid', text: 'Message' })}
    </div>
  `,
};

export const FieldsetTypes = {
  render: () => `
    <div class="dds-input-matrix">
      ${createInputFieldset({ type: 'text' })}
      ${createInputFieldset({ type: 'password' })}
      ${createInputFieldset({ type: 'select' })}
      ${createInputFieldset({ type: 'checkbox' })}
      ${createInputFieldset({ type: 'radio' })}
      ${createInputFieldset({ type: 'switch' })}
    </div>
  `,
};

export const Options = {
  render: () => createOptionList({ checkedRows: [2, 3], hoverIndex: 1 }),
};

export const WidescreenScale = {
  render: () => `
    <div class="dds-input-matrix__col">
      ${createTextInput({ state: 'default', sizeMode: 'widescreen' })}
      ${createSelectInput({ state: 'default', sizeMode: 'widescreen' })}
      ${createCheckbox({ state: 'default', value: 'checked', sizeMode: 'widescreen' })}
      ${createRadio({ state: 'default', checked: true, sizeMode: 'widescreen' })}
      ${createSwitch({ state: 'default', checked: true, sizeMode: 'widescreen' })}
      ${createPasswordInput({ state: 'value', sizeMode: 'widescreen' })}
      ${createInputMessage({ state: 'default', text: 'Message', sizeMode: 'widescreen' })}
    </div>
  `,
};
