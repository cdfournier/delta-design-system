import { createButton, createButtonRow } from './button';

const meta = {
  title: 'Symbols/Button',
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

export const TextButtons = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid' })}
      ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent' })}
      ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid' })}
      ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent' })}
    </div>
  `,
};

export const Styles = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid' })}
      ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent' })}
      ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid' })}
      ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent' })}
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

export const IconOptions = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Text only', variant: 'primary', style: 'solid' })}
      ${createButton({ label: 'Icon left', variant: 'primary', style: 'solid', iconPosition: 'left', icon: 'arrow' })}
      ${createButton({ label: 'Icon right', variant: 'secondary', style: 'solid', iconPosition: 'right', icon: 'arrow' })}
      ${createButton({ label: 'Search', variant: 'primary', style: 'solid', iconPosition: 'only', icon: 'search' })}
      ${createButton({ label: 'Search', variant: 'primary', style: 'outline', iconPosition: 'only', icon: 'search' })}
    </div>
  `,
};

export const PrimaryTransparentIconRight = {
  args: {
    label: 'Primary transparent',
    variant: 'primary',
    style: 'transparent',
    iconPosition: 'right',
    icon: 'arrow',
    state: 'default',
    disabled: false,
  },
};

export const IconOnlyStates = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Search', variant: 'primary', style: 'solid', iconPosition: 'only', icon: 'search', state: 'default' })}
      ${createButton({ label: 'Search', variant: 'primary', style: 'solid', iconPosition: 'only', icon: 'search', state: 'hover' })}
      ${createButton({ label: 'Search', variant: 'primary', style: 'outline', iconPosition: 'only', icon: 'search', state: 'default' })}
      ${createButton({ label: 'Search', variant: 'primary', style: 'outline', iconPosition: 'only', icon: 'search', disabled: true })}
    </div>
  `,
};

export const OnDarkSurface = {
  render: () =>
    `
    <div class="dds-btn-surface-dark">
      <div class="dds-btn-row">
        ${createButton({ label: 'White solid', variant: 'white', style: 'solid' })}
        ${createButton({ label: 'White transparent', variant: 'white', style: 'transparent' })}
        ${createButton({ label: 'Search', variant: 'white', style: 'outline', iconPosition: 'only', icon: 'search' })}
      </div>
    </div>
  `,
};

export const DisabledParity = {
  render: () =>
    `
    <div class="dds-btn-matrix">
      <div class="dds-btn-matrix__row">
        ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid', disabled: true })}
        ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent', disabled: true })}
        ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid', disabled: true })}
        ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent', disabled: true })}
      </div>
      <div class="dds-btn-surface-dark">
        <div class="dds-btn-row">
          ${createButton({ label: 'White solid', variant: 'white', style: 'solid', disabled: true })}
          ${createButton({ label: 'White transparent', variant: 'white', style: 'transparent', disabled: true })}
          ${createButton({ label: 'Search', variant: 'white', style: 'outline', iconPosition: 'only', icon: 'search', disabled: true })}
        </div>
      </div>
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

export const QuickReference = {
  render: () =>
    `
    <div class="dds-btn-row">
      ${createButton({ label: 'Primary solid', variant: 'primary', style: 'solid' })}
      ${createButton({ label: 'Primary transparent', variant: 'primary', style: 'transparent' })}
      ${createButton({ label: 'Secondary solid', variant: 'secondary', style: 'solid' })}
      ${createButton({ label: 'Secondary transparent', variant: 'secondary', style: 'transparent' })}
    </div>
  `,
};
