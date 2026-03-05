import {
  createContent,
  createContentAnatomyFigure,
  createContentBestPracticesFigure,
  createContentVariantsStory,
  createContentStatesStory,
} from './content';

const meta = {
  title: 'Molecules/Content',
  render: (args) => createContent(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    variant: {
      options: ['title+p', 'h+p'],
      control: { type: 'inline-radio' },
    },
    eyebrow: { control: 'boolean' },
    eyebrowText: { control: 'text' },
    heading: { control: 'text' },
    body: { control: 'text' },
    cta: {
      options: ['off', 'link', 'one-button', 'two-buttons'],
      control: { type: 'inline-radio' },
    },
    footer: { control: 'boolean' },
    footerText: { control: 'text' },
    padded: { control: 'boolean' },
  },
  args: {
    variant: 'title+p',
    eyebrow: false,
    eyebrowText: 'Small',
    heading: 'Title Heading',
    body: 'Body',
    cta: 'off',
    footer: false,
    footerText: 'Fine',
    padded: true,
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => createContentVariantsStory(),
};

export const States = {
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'Content has no intrinsic visual state machine. Any stateful behavior is inherited from child CTA atoms (links/buttons).',
      },
    },
  },
  render: () => createContentStatesStory(),
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy Figure',
  render: () => createContentAnatomyFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createContentBestPracticesFigure(),
};
