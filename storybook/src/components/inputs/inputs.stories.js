import {
  createInputsAnatomyFigure,
  createInputsBestPracticesFigure,
  createInputsPlayground,
  createInputsStateDefaultFigure,
  createInputsStateDisabledFigure,
  createInputsStateInvalidFigure,
  createInputsStateReadOnlyFigure,
  createInputsStateValidFigure,
  createInputsVariantCheckboxFigure,
  createInputsVariantMessagesFigure,
  createInputsVariantPasswordFigure,
  createInputsVariantRadioFigure,
  createInputsVariantSelectFigure,
  createInputsVariantSwitchFigure,
  createInputsVariantTextFigure,
} from './inputs';

const meta = {
  title: 'Atoms/Inputs',
  render: (args) => createInputsPlayground(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    inputType: {
      options: ['text', 'select', 'checkbox', 'radio', 'switch', 'password'],
      control: { type: 'inline-radio' },
    },
    state: {
      options: ['default', 'valid', 'invalid', 'disabled', 'readonly'],
      control: { type: 'inline-radio' },
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    checked: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    inputType: 'text',
    state: 'default',
    label: 'Label',
    placeholder: 'Enter value',
    helperText: 'Helper text',
    checked: false,
    readOnly: false,
    disabled: false,
  },
};

export default meta;

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createInputsAnatomyFigure(),
};

export const VariantTextFigure = {
  name: 'Variant figure - Text input',
  render: () => createInputsVariantTextFigure(),
};

export const VariantSelectFigure = {
  name: 'Variant figure - Select',
  render: () => createInputsVariantSelectFigure(),
};

export const VariantCheckboxFigure = {
  name: 'Variant figure - Checkbox',
  render: () => createInputsVariantCheckboxFigure(),
};

export const VariantRadioFigure = {
  name: 'Variant figure - Radio',
  render: () => createInputsVariantRadioFigure(),
};

export const VariantSwitchFigure = {
  name: 'Variant figure - Switch',
  render: () => createInputsVariantSwitchFigure(),
};

export const VariantPasswordFigure = {
  name: 'Variant figure - Password',
  render: () => createInputsVariantPasswordFigure(),
};

export const VariantMessagesFigure = {
  name: 'Variant figure - Messages',
  render: () => createInputsVariantMessagesFigure(),
};

export const StateDefaultFigure = {
  name: 'State figure - Default',
  render: () => createInputsStateDefaultFigure(),
};

export const StateDisabledFigure = {
  name: 'State figure - Disabled',
  render: () => createInputsStateDisabledFigure(),
};

export const StateReadOnlyFigure = {
  name: 'State figure - Read-only',
  render: () => createInputsStateReadOnlyFigure(),
};

export const StateValidFigure = {
  name: 'State figure - Valid',
  render: () => createInputsStateValidFigure(),
};

export const StateInvalidFigure = {
  name: 'State figure - Invalid',
  render: () => createInputsStateInvalidFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  render: () => createInputsBestPracticesFigure(),
};
