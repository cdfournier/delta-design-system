import {
  createPagination,
  createPaginationAnatomyFigure,
  createPaginationBestPracticesFigure,
} from './pagination';

const meta = {
  title: 'Molecules/Pagination',
  render: (args) => createPagination(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    total: { control: { type: 'number', min: 1, max: 20, step: 1 } },
    current: { control: { type: 'number', min: 1, max: 20, step: 1 } },
    ariaLabel: { control: 'text' },
  },
  args: {
    total: 4,
    current: 1,
    ariaLabel: 'Pagination',
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story: 'Pagination currently supports one indicator type: Dot.',
      },
    },
  },
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);justify-items:start;">
      <div>
        <p style="margin:0 0 var(--space-sm) 0;">Default</p>
        ${createPagination({ total: 4, current: 1 })}
      </div>
      <div>
        <p style="margin:0 0 var(--space-sm) 0;">Selected</p>
        ${createPagination({ total: 4, current: 3 })}
      </div>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createPaginationAnatomyFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createPaginationBestPracticesFigure(),
};
