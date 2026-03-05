import {
  createChip,
  createChipsAnatomySamplePrimary,
  createChipsBestPracticesFigure,
  createChipsStateSelectedSample,
  createChipsStateHoverSample,
  createChipsVariantDismissibleSample,
  createChipsVariantSelectableSample,
  createChipsVariantWithIconsSample,
  createChipsVariantSecondarySample,
  createChipsVariantPrimarySample,
  createChipsVariantWithAvatarSample,
} from './chips';

const meta = {
  title: 'Atoms/Chips',
  render: (args, context) =>
    createChip({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: { options: ['primary', 'secondary'], control: { type: 'inline-radio' } },
    state: { options: ['default', 'hover', 'focus'], control: { type: 'inline-radio' } },
    leading: { options: ['none', 'avatar', 'arrow', 'check'], control: { type: 'inline-radio' } },
    trailing: { options: ['none', 'avatar', 'close', 'check'], control: { type: 'inline-radio' } },
    selected: { control: 'boolean' },
    checkable: { control: 'boolean' },
    interactive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    sizeMode: { options: ['auto', 'mobile', 'widescreen'], control: { type: 'inline-radio' } },
  },
  args: {
    label: 'Label',
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

export const Playground = {
  name: 'Playground',
};

export const AnatomySamplePrimary = {
  name: 'Anatomy Sample - Primary',
  render: (_args, context) =>
    createChipsAnatomySamplePrimary({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const PrimaryVariantFigure = {
  name: 'Primary Variant Figure',
  render: (_args, context) =>
    createChipsVariantPrimarySample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const SecondaryVariantFigure = {
  name: 'Secondary Variant Figure',
  render: (_args, context) =>
    createChipsVariantSecondarySample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const WithAvatarVariantFigure = {
  name: 'With Avatar Variant Figure',
  render: (_args, context) =>
    createChipsVariantWithAvatarSample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const WithIconsVariantFigure = {
  name: 'With Icons Variant Figure',
  render: (_args, context) =>
    createChipsVariantWithIconsSample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const SelectableVariantFigure = {
  name: 'Selectable Variant Figure',
  render: (_args, context) =>
    createChipsVariantSelectableSample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const DismissibleVariantFigure = {
  name: 'Dismissible Variant Figure',
  render: (_args, context) =>
    createChipsVariantDismissibleSample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const StateHoverFigure = {
  name: 'State Figure - Hover',
  render: (_args, context) =>
    createChipsStateHoverSample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const StateSelectedFigure = {
  name: 'State Figure - Selected',
  render: (_args, context) =>
    createChipsStateSelectedSample({
      sizeMode: context.globals.breakpoint ?? 'mobile',
    }),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  render: () => createChipsBestPracticesFigure(),
};
