import {
  createGridColumns,
  createGridBreakpoints,
  createGridWrappingDemo,
  createGridPatterns,
} from './grid';

const meta = {
  title: 'Foundations/Grid',
  args: {
    breakpoint: 'mobile',
  },
  argTypes: {
    breakpoint: {
      options: ['mobile', 'tablet', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Switches breakpoint preview for responsive grid behavior.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const VisualColumns = {
  render: (args, context) => createGridColumns({ ...args, breakpoint: context.globals.breakpoint ?? args.breakpoint }),
};

export const Wrapping = {
  render: (args, context) =>
    createGridWrappingDemo({ ...args, breakpoint: context.globals.breakpoint ?? args.breakpoint }),
};

export const Patterns = {
  render: () => createGridPatterns(),
};

export const Reference = {
  render: () => createGridBreakpoints(),
};
