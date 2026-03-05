import {
  createDetails,
  createDetailsAnatomyFigure,
  createDetailsBestPracticesFigure,
  createDetailsStatesFigure,
} from './details';

const meta = {
  title: 'Molecules/Details',
  render: (args) => createDetails(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    summary: { control: 'text' },
    body: { control: 'text' },
    open: { control: 'boolean' },
  },
  args: {
    summary: 'Summary',
    body: 'Body content revealed when expanded.',
    open: false,
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
        story: 'Details has no visual variants. Appearance changes only by state (collapsed/expanded).',
      },
    },
  },
};

export const States = {
  name: 'States',
  render: () => createDetailsStatesFigure(),
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createDetailsAnatomyFigure(),
};

export const StatesFigure = {
  name: 'States figure',
  render: () => createDetailsStatesFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createDetailsBestPracticesFigure(),
};
