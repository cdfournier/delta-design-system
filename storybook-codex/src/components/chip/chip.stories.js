import { createChip, createChipGroup } from './chip';

const groupItem = (chipMarkup) => `<li>${chipMarkup}</li>`;

const meta = {
  title: 'Symbols/Chips',
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
    createChipGroup(
      [
        groupItem(createChip({ label: 'Primary', variant: 'primary' })),
        groupItem(createChip({ label: 'Secondary', variant: 'secondary' })),
      ].join(''),
    ),
};

export const WithAvatars = {
  render: () =>
    createChipGroup(
      [
        groupItem(createChip({ label: 'Primary', variant: 'primary', leading: 'avatar', interactive: false })),
        groupItem(createChip({ label: 'Secondary', variant: 'secondary', trailing: 'avatar', interactive: false })),
      ].join(''),
    ),
};

export const WithIcons = {
  render: () =>
    createChipGroup(
      [
        groupItem(createChip({ label: 'Primary', variant: 'primary', leading: 'arrow' })),
        groupItem(createChip({ label: 'Secondary', variant: 'secondary', leading: 'arrow' })),
      ].join(''),
    ),
};

export const Dismissible = {
  render: () =>
    createChipGroup(
      [
        groupItem(createChip({ label: 'Primary', variant: 'primary', trailing: 'close', interactive: false })),
        groupItem(createChip({ label: 'Secondary', variant: 'secondary', trailing: 'close', interactive: false })),
      ].join(''),
    ),
};

export const Selectable = {
  render: () =>
    createChipGroup(
      [
        groupItem(createChip({ label: 'Unchecked', variant: 'primary', checkable: true, selected: false })),
        groupItem(createChip({ label: 'Checked', variant: 'primary', checkable: true, selected: true })),
        groupItem(createChip({ label: 'Unchecked', variant: 'secondary', checkable: true, selected: false })),
        groupItem(createChip({ label: 'Checked', variant: 'secondary', checkable: true, selected: true })),
      ].join(''),
    ),
};

export const SelectionStates = {
  render: () =>
    `<div class="dds-chip-grid">
      <div class="dds-chip-row">
        ${createChip({ label: 'Primary unchecked', variant: 'primary', checkable: true, selected: false })}
        ${createChip({ label: 'Primary checked', variant: 'primary', checkable: true, selected: true })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Secondary unchecked', variant: 'secondary', checkable: true, selected: false })}
        ${createChip({ label: 'Secondary checked', variant: 'secondary', checkable: true, selected: true })}
      </div>
    </div>`,
};

export const HeightParity = {
  render: () =>
    `<div class="dds-chip-grid">
      <div class="dds-chip-row">
        ${createChip({ label: 'Base', variant: 'primary' })}
        ${createChip({ label: 'Icon', variant: 'primary', leading: 'arrow' })}
        ${createChip({ label: 'Checked', variant: 'primary', checkable: true, selected: true })}
        ${createChip({ label: 'Dismiss', variant: 'primary', trailing: 'close', interactive: false })}
      </div>
      <div class="dds-chip-row">
        ${createChip({ label: 'Base', variant: 'secondary' })}
        ${createChip({ label: 'Icon', variant: 'secondary', leading: 'arrow' })}
        ${createChip({ label: 'Checked', variant: 'secondary', checkable: true, selected: true })}
        ${createChip({ label: 'Dismiss', variant: 'secondary', trailing: 'close', interactive: false })}
      </div>
    </div>`,
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
    </div>`,
};

export const WidescreenScale = {
  render: () =>
    createChipGroup(
      [
        groupItem(createChip({ label: 'Primary', variant: 'primary', sizeMode: 'widescreen' })),
        groupItem(createChip({ label: 'Secondary', variant: 'secondary', sizeMode: 'widescreen' })),
        groupItem(createChip({ label: 'Checked', variant: 'primary', checkable: true, selected: true, sizeMode: 'widescreen' })),
      ].join(''),
    ),
};
