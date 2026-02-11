import { createChip, createChipGroup } from './chip';

const groupItem = (chipMarkup) => `<li>${chipMarkup}</li>`;

const meta = {
  title: 'Atoms/Chips',
  render: (args, context) =>
    createChip({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Chips implementation in plain HTML/CSS with Figma-aligned naming (`components/chip/*`) and responsive token scaling.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip label text.',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
      description: 'Color variant from Figma chip styles.',
    },
    state: {
      options: ['default', 'hover', 'focus'],
      control: { type: 'inline-radio' },
      description: 'Forced preview of interaction state.',
    },
    leading: {
      options: ['none', 'avatar', 'arrow', 'check'],
      control: { type: 'inline-radio' },
      description: 'Leading accessory.',
    },
    trailing: {
      options: ['none', 'avatar', 'close', 'check'],
      control: { type: 'inline-radio' },
      description: 'Trailing accessory.',
    },
    selected: {
      control: 'boolean',
      description: 'Selection state for checkbox-style chips.',
    },
    checkable: {
      control: 'boolean',
      description: 'Applies checkbox semantics (`role="checkbox"` + `aria-checked`).',
    },
    interactive: {
      control: 'boolean',
      description: 'Use `<button>` when true, `<span>` when false.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled availability state.',
    },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in `auto`, or forces a specific size scale.',
    },
  },
  args: {
    label: 'Primary',
    variant: 'primary',
    state: 'default',
    leading: 'none',
    trailing: 'none',
    checkable: false,
    selected: false,
    interactive: true,
    disabled: false,
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const Playground = {};

export const Variants = {
  render: () =>
    `
    <div class="dds-chip-grid">
      <div class="dds-chip-row">
        ${createChip({ label: 'Primary', variant: 'primary' })}
        ${createChip({ label: 'Secondary', variant: 'secondary' })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Avatar leading', variant: 'primary', leading: 'avatar', interactive: false })}
        ${createChip({ label: 'Avatar trailing', variant: 'secondary', trailing: 'avatar', interactive: false })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Icon leading', variant: 'primary', leading: 'arrow' })}
        ${createChip({ label: 'Dismissible', variant: 'secondary', trailing: 'close', interactive: false })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Selectable off', variant: 'primary', checkable: true, selected: false })}
        ${createChip({ label: 'Selectable on', variant: 'primary', checkable: true, selected: true })}
      </div>
    </div>
  `,
};

export const Responsive = {
  parameters: {
    docs: {
      description: {
        story: 'Responsive scaling parity for chip typography and spacing between mobile and widescreen tokens.',
      },
    },
  },
  render: () =>
    createChipGroup(
      [
        groupItem(createChip({ label: 'Primary', variant: 'primary', sizeMode: 'widescreen' })),
        groupItem(createChip({ label: 'Secondary', variant: 'secondary', sizeMode: 'widescreen' })),
        groupItem(createChip({ label: 'Checked', variant: 'primary', checkable: true, selected: true, sizeMode: 'widescreen' })),
      ].join(''),
    ),
};

export const States = {
  render: () =>
    `<div class="dds-chip-grid">
      <div class="dds-chip-row">
        ${createChip({ label: 'Default primary', variant: 'primary', state: 'default' })}
        ${createChip({ label: 'Hover primary', variant: 'primary', state: 'hover' })}
        ${createChip({ label: 'Focus primary', variant: 'primary', state: 'focus' })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Default secondary', variant: 'secondary', state: 'default' })}
        ${createChip({ label: 'Hover secondary', variant: 'secondary', state: 'hover' })}
        ${createChip({ label: 'Focus secondary', variant: 'secondary', state: 'focus' })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Selected', variant: 'primary', checkable: true, selected: true })}
        ${createChip({ label: 'Disabled', variant: 'secondary', disabled: true })}
      </div>
    </div>`,
};
