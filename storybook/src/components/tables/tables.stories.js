import {
  createTable,
  createTablesAnatomyFigure,
  createTablesBestPracticesFigure,
} from './tables';

const meta = {
  title: 'Molecules/Tables',
  render: (args) => createTable(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    rowCount: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
    },
    selectable: { control: 'boolean' },
    headerState: {
      options: ['unchecked', 'checked', 'indeterminate'],
      control: { type: 'inline-radio' },
    },
    selectedRows: {
      control: { type: 'object' },
      description: '1-based row indices to mark as selected',
    },
  },
  args: {
    rowCount: 4,
    selectable: true,
    headerState: 'unchecked',
    selectedRows: [],
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createTable({ rowCount: 3, selectable: false })}
      ${createTable({ rowCount: 3, selectable: true, headerState: 'unchecked', selectedRows: [] })}
      ${createTable({ rowCount: 3, selectable: true, headerState: 'checked', selectedRows: [1, 2, 3] })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createTable({ rowCount: 3, selectable: true, headerState: 'unchecked', selectedRows: [] })}
      ${createTable({ rowCount: 3, selectable: true, headerState: 'indeterminate', selectedRows: [2] })}
      ${createTable({ rowCount: 3, selectable: true, headerState: 'checked', selectedRows: [1, 2, 3] })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createTablesAnatomyFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createTablesBestPracticesFigure(),
};
