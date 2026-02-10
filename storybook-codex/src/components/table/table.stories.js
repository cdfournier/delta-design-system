import { createTable, createTableShowcase } from './table';

const meta = {
  title: 'Molecules/Tables',
  render: (args, context) =>
    createTable({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'widescreen' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tables present structured data with tokenized header/body styles and horizontal scrolling on overflow.',
      },
    },
  },
  argTypes: {
    columns: {
      control: 'object',
      description: 'Column header labels.',
    },
    rows: {
      control: 'object',
      description: 'Row data as a 2D array. If omitted, rowCount generates placeholder rows.',
    },
    rowCount: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: 'Generated row count when rows are not provided.',
    },
    includeControl: {
      control: 'boolean',
      description: 'Use control variant for the last cell in each row.',
    },
    checkedRows: {
      control: 'object',
      description: 'Row indexes with checked control cell.',
    },
    sizeMode: {
      options: ['auto', 'widescreen', 'mobile'],
      control: { type: 'inline-radio' },
      description: 'Tables are desktop-first; widescreen recommended.',
    },
  },
  args: {
    columns: ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'],
    rows: [
      ['Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell'],
    ],
    rowCount: 1,
    includeControl: true,
    checkedRows: [],
    sizeMode: 'widescreen',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args, context) =>
    createTable({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'widescreen' : args.sizeMode,
    }),
};

export const VariantShowcase = {
  render: () => createTableShowcase(),
};

export const HeaderAndBody = {
  render: () =>
    createTable({
      columns: ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'],
      rows: [['Table cell', 'Table cell', 'Table cell', 'Table cell', 'Table cell']],
      includeControl: false,
      sizeMode: 'widescreen',
    }),
};

export const WithControlCells = {
  render: () =>
    createTable({
      columns: ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'],
      rows: [['Table cell', 'Table cell', 'Table cell', 'Table cell', '']],
      includeControl: true,
      checkedRows: [0],
      sizeMode: 'widescreen',
    }),
};

export const MultipleRows = {
  render: () =>
    createTable({
      columns: ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'],
      rowCount: 6,
      includeControl: false,
      sizeMode: 'widescreen',
    }),
};

export const OverflowScroll = {
  render: () => `
    <div style="width: 44rem; max-width: 100%;">
      ${createTable({
        columns: ['Table header', 'Table header', 'Table header', 'Table header', 'Table header'],
        rowCount: 3,
        includeControl: true,
        checkedRows: [1],
        sizeMode: 'widescreen',
      })}
    </div>
  `,
};
