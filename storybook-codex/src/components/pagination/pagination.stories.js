import { createPagination, createPaginationShowcase } from './pagination';

const meta = {
  title: 'Molecules/Pagination',
  render: (args, context) =>
    createPagination({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Pagination provides dot-based position indicators for carousels and multi-step flows with Figma-aligned spacing and radius tokens.',
      },
    },
  },
  argTypes: {
    total: { control: { type: 'number', min: 1, max: 12, step: 1 }, description: 'Total number of pages/dots.' },
    current: { control: { type: 'number', min: 1, max: 12, step: 1 }, description: 'Current selected page index (1-based).' },
    label: { control: 'text', description: 'Accessible nav label.' },
    hideContainer: { control: 'boolean', description: 'Hides pill background/padding for bare-dot variant.' },
    interactive: { control: 'boolean', description: 'Enables/disables dot interactions.' },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in auto mode, or forces a specific size scale.',
    },
  },
  args: {
    total: 4,
    current: 1,
    label: 'Pagination',
    hideContainer: false,
    interactive: true,
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args, context) =>
    createPagination({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
};

export const VariantShowcase = {
  render: () => createPaginationShowcase(),
};

export const FourDots = {
  render: () => createPagination({ total: 4, current: 1 }),
};

export const MidSelection = {
  render: () => createPagination({ total: 4, current: 2 }),
};

export const BareDots = {
  render: () => createPagination({ total: 4, current: 1, hideContainer: true }),
};

export const Disabled = {
  render: () => createPagination({ total: 4, current: 2, interactive: false }),
};

export const WidescreenScale = {
  render: () => createPagination({ total: 4, current: 1, sizeMode: 'widescreen' }),
};
