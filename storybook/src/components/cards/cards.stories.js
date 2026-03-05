import {
  createCard,
  createCardsVariantVerticalFigure,
  createCardsVariantHorizontalFigure,
  createCardsStatesFigure,
  createCardsVariantsStoryFigure,
  createCardsStatesStoryFigure,
  createCardsBestPracticesFigure,
} from './cards';

const meta = {
  title: 'Molecules/Cards',
  render: (args) => createCard(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    heading: { control: 'text' },
    body: { control: 'text' },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
    },
    reverse: { control: 'boolean' },
    height: {
      options: ['hug', 'fill'],
      control: { type: 'inline-radio' },
    },
    clickable: { control: 'boolean' },
    state: {
      options: ['default', 'hover'],
      control: { type: 'inline-radio' },
    },
    href: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
  args: {
    heading: 'Heading',
    body: 'Body',
    orientation: 'vertical',
    reverse: false,
    height: 'hug',
    clickable: false,
    state: 'default',
    href: '#',
    ariaLabel: '',
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => createCardsVariantsStoryFigure(),
};

export const States = {
  name: 'States',
  render: () => createCardsStatesStoryFigure(),
};

export const Playground = {
  name: 'Playground',
};

export const VariantVerticalFigure = {
  name: 'Variant Figure - Vertical',
  render: () => createCardsVariantVerticalFigure(),
};

export const VariantHorizontalFigure = {
  name: 'Variant Figure - Horizontal',
  render: () => createCardsVariantHorizontalFigure(),
};

export const StatesFigure = {
  name: 'States Figure',
  render: () => createCardsStatesFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createCardsBestPracticesFigure(),
};
