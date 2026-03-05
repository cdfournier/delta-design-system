import {
  createBlockquotesAnatomyFigure,
  createBlockquotesBestPracticesFigure,
  createBlockquotesVariantsFigure,
} from './blockquotes';

const meta = {
  title: 'Atoms/Blockquotes',
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
        story: 'Blockquotes anatomy figure for the Blockquotes documentation page.',
      },
    },
  },
  render: () => createBlockquotesAnatomyFigure(),
};

export const VariantsFigure = {
  name: 'Variants figure',
  parameters: {
    docs: {
      description: {
        story: 'Blockquotes variants figure for the Blockquotes documentation page.',
      },
    },
  },
  render: () => createBlockquotesVariantsFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  parameters: {
    docs: {
      description: {
        story: 'Do/Don’t figure for the Blockquotes documentation page.',
      },
    },
  },
  render: () => createBlockquotesBestPracticesFigure(),
};
