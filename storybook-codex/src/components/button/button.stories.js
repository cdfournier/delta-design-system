import { createButton } from './button';

const meta = {
  title: 'Atoms/Button',
  render: (args) => createButton(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button implementation in plain HTML/CSS with Figma-aligned naming (`components/button/*`) and responsive token scaling.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button text label.',
    },
    variant: {
      options: ['primary', 'secondary', 'white'],
      control: { type: 'inline-radio' },
      description: 'Color variant hierarchy from Figma.',
    },
    style: {
      options: ['solid', 'transparent', 'outline'],
      control: { type: 'inline-radio' },
      description: 'Visual style. `outline` is intended for icon-only buttons.',
    },
    iconPosition: {
      options: ['none', 'left', 'right', 'only'],
      control: { type: 'inline-radio' },
      description: 'Text-only, icon-left, icon-right, or icon-only.',
    },
    icon: {
      options: ['arrow', 'search'],
      control: { type: 'inline-radio' },
      description: 'Icon glyph used when icon is enabled.',
    },
    state: {
      options: ['default', 'hover', 'focus'],
      control: { type: 'inline-radio' },
      description: 'Forced preview of interaction visuals.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled availability state.',
    },
  },
  args: {
    label: 'Primary solid',
    variant: 'primary',
    style: 'solid',
    iconPosition: 'none',
    icon: 'arrow',
    state: 'default',
    disabled: false,
  },
};

export default meta;

export const Default = {
  render: (args) => createButton(args),
};

export const Playground = {
  render: (args) => createButton(args),
};

export const Variants = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid' })}
      ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid' })}
      ${createButton({ label: 'White solid', variant: 'white', style: 'solid' })}
    </div>
  `,
};

export const States = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Default', variant: 'primary', style: 'solid', state: 'default' })}
      ${createButton({ label: 'Hover', variant: 'primary', style: 'solid', state: 'hover' })}
      ${createButton({ label: 'Focus', variant: 'primary', style: 'solid', state: 'focus' })}
      ${createButton({ label: 'Disabled', variant: 'primary', style: 'solid', disabled: true })}
    </div>
  `,
};

export const VariantStateMatrix = {
  render: () =>
    `
    <div class="dds-btn-matrix">
      <div class="dds-btn-matrix__row">
        ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid', state: 'default' })}
        ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid', state: 'hover' })}
        ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid', state: 'focus' })}
        ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid', disabled: true })}
      </div>
      <div class="dds-btn-matrix__row">
        ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent', state: 'default' })}
        ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent', state: 'hover' })}
        ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent', state: 'focus' })}
        ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent', disabled: true })}
      </div>
      <div class="dds-btn-matrix__row">
        ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid', state: 'default' })}
        ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid', state: 'hover' })}
        ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid', state: 'focus' })}
        ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid', disabled: true })}
      </div>
      <div class="dds-btn-matrix__row">
        ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent', state: 'default' })}
        ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent', state: 'hover' })}
        ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent', state: 'focus' })}
        ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent', disabled: true })}
      </div>
    </div>
  `,
};
