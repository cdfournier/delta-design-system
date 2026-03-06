import {
  createFieldset,
  createFieldsetsAnatomyFigure,
  createFieldsetsBestPracticesFigure,
} from './fieldsets';

const meta = {
  title: 'Molecules/Fieldsets',
  render: (args) => createFieldset(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'select', 'checkbox', 'radio', 'switch'],
      control: { type: 'inline-radio' },
    },
    state: {
      options: ['default', 'focus', 'disabled', 'readonly', 'invalid', 'valid'],
      control: { type: 'inline-radio' },
    },
    showMessage: { control: 'boolean' },
    legendLabel: { control: 'boolean' },
  },
  args: {
    type: 'text',
    state: 'default',
    showMessage: true,
    legendLabel: false,
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => `
    <div style="display:grid; gap: var(--space-xl);">
      ${createFieldset({ type: 'text' })}
      ${createFieldset({ type: 'password' })}
      ${createFieldset({ type: 'select' })}
      ${createFieldset({ type: 'checkbox' })}
      ${createFieldset({ type: 'radio' })}
      ${createFieldset({ type: 'switch' })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid; gap: var(--space-xl);">
      ${createFieldset({ type: 'text', state: 'default' })}
      ${createFieldset({ type: 'text', state: 'invalid' })}
      ${createFieldset({ type: 'text', state: 'valid' })}
      ${createFieldset({ type: 'text', state: 'readonly' })}
      ${createFieldset({ type: 'text', state: 'disabled' })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createFieldsetsAnatomyFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createFieldsetsBestPracticesFigure(),
};
