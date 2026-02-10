import { createCard, createCardRow, createCardVariantShowcase } from './card';

const meta = {
  title: 'Molecules/Cards',
  render: (args) => createCard(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card implementation in plain HTML/CSS using Figma-aligned naming (`components/card/*`) and responsive token scaling.',
      },
    },
  },
  argTypes: {
    heading: { control: 'text', description: 'Card heading text.' },
    body: { control: 'text', description: 'Card body copy.' },
    contentVariant: {
      options: ['title+p', 'h+p'],
      control: { type: 'inline-radio' },
      description: 'Curated Content heading/body pair used inside Card.',
    },
    eyebrow: { control: 'boolean', description: 'Shows content eyebrow inside card.' },
    eyebrowText: { control: 'text', description: 'Eyebrow text inside card content.' },
    cta: {
      options: ['off', 'link', 'one-button', 'two-buttons'],
      control: { type: 'inline-radio' },
      description: 'Curated CTA mode for content inside card.',
    },
    footer: { control: 'boolean', description: 'Shows content footer inside card.' },
    footerText: { control: 'text', description: 'Footer text inside card content.' },
    imageSrc: { control: 'text', description: 'Figure image source URL.' },
    imageAlt: { control: 'text', description: 'Figure alt text.' },
    orientation: {
      options: ['vertical', 'horizontal', 'horizontal-reverse', 'mobile'],
      control: { type: 'inline-radio' },
      description: 'Card layout orientation variant.',
    },
    minWidth: {
      options: ['default', 'wide'],
      control: { type: 'inline-radio' },
      description: 'Use `wide` for horizontal parity examples.',
    },
  },
  args: {
    heading: 'Heading',
    body: 'Body text that provides supporting details and context for the card content.',
    contentVariant: 'h+p',
    eyebrow: false,
    eyebrowText: 'Small',
    cta: 'off',
    footer: false,
    footerText: 'Fine',
    imageSrc:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Mountain landscape',
    orientation: 'vertical',
    minWidth: 'default',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createCard(args),
};

export const Variants = {
  render: () => createCardVariantShowcase(),
};

export const Vertical = {
  render: () => createCard({ orientation: 'vertical', contentVariant: 'h+p' }),
};

export const Horizontal = {
  render: () =>
    createCard({
      orientation: 'horizontal',
      minWidth: 'wide',
      contentVariant: 'h+p',
      body: 'Horizontal cards place media and content side-by-side for list layouts and featured content.',
    }),
};

export const HorizontalReversed = {
  render: () =>
    createCard({
      orientation: 'horizontal-reverse',
      minWidth: 'wide',
      contentVariant: 'h+p',
      body: 'Reversed horizontal cards switch media placement while preserving hierarchy and spacing.',
    }),
};

export const Comparison = {
  render: () =>
    createCardRow(
      createCard({ orientation: 'vertical' }) +
        createCard({ orientation: 'mobile' }) +
        createCard({ orientation: 'horizontal', minWidth: 'wide' })
    ),
};
