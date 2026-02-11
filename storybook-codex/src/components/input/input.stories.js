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
