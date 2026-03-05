import { createBadgeAnatomyFigure, createBadgeBestPracticesFigure } from './badge';

const meta = {
  title: 'Atoms/Badges',
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const AnatomyFigure = {
  name: 'Anatomy figure',
  parameters: {
    docs: {
      description: {
        story: 'Badge anatomy figure for the Badge documentation page.',
      },
    },
  },
  render: () => createBadgeAnatomyFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  parameters: {
    docs: {
      description: {
        story: 'Do/Don’t figure for the Badges documentation page.',
      },
    },
  },
  render: () => createBadgeBestPracticesFigure(),
};
