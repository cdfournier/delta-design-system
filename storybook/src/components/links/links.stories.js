import {
  createLink,
  createLinksAnatomyFigure,
  createLinksVariantPFigure,
  createLinksVariantSmallFigure,
  createLinksVariantFineFigure,
  createLinksStateDefaultFigure,
  createLinksStateHoverFigure,
  createLinksVariantsStoryFigure,
  createLinksStatesStoryFigure,
  createLinksBestPracticesFigure,
} from './links';

const meta = {
  title: 'Atoms/Links',
  render: (args) => createLink(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    size: {
      options: ['p', 'small', 'fine'],
      control: { type: 'inline-radio' },
    },
    state: {
      options: ['default', 'hover'],
      control: { type: 'inline-radio' },
    },
    arrow: { control: 'boolean' },
    ariaCurrent: {
      options: [undefined, 'page'],
      control: { type: 'inline-radio' },
    },
    ariaLabel: { control: 'text' },
  },
  args: {
    label: 'Link',
    href: '#',
    size: 'p',
    state: 'default',
    arrow: true,
    ariaCurrent: undefined,
    ariaLabel: '',
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => createLinksVariantsStoryFigure(),
};

export const States = {
  name: 'States',
  render: () => createLinksStatesStoryFigure(),
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy Figure',
  render: () => createLinksAnatomyFigure(),
};

export const VariantPFigure = {
  name: 'Variant Figure - P',
  render: () => createLinksVariantPFigure(),
};

export const VariantSmallFigure = {
  name: 'Variant Figure - Small',
  render: () => createLinksVariantSmallFigure(),
};

export const VariantFineFigure = {
  name: 'Variant Figure - Fine',
  render: () => createLinksVariantFineFigure(),
};

export const StateDefaultFigure = {
  name: 'State Figure - Default',
  render: () => createLinksStateDefaultFigure(),
};

export const StateHoverFigure = {
  name: 'State Figure - Hover',
  render: () => createLinksStateHoverFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  render: () => createLinksBestPracticesFigure(),
};
