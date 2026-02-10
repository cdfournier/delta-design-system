import { createBanner, createBannerVariantShowcase } from './banner';

const meta = {
  title: 'Organisms/Banners',
  render: (args) => createBanner(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Banner organism composed from image + Content molecule, with background-image and split layouts aligned to Figma variables.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['background-image', 'split'],
      control: { type: 'inline-radio' },
      description: 'Banner layout variant.',
    },
    alignment: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
      description: 'Content alignment inside the banner.',
    },
    size: {
      options: ['mobile', 'desktop'],
      control: { type: 'inline-radio' },
      description: 'Background-image size mode.',
    },
    overlay: {
      control: 'boolean',
      description: 'Show dark overlay on background image variant.',
    },
    height: {
      options: ['hug', 'half', 'full', 'fixed'],
      control: { type: 'inline-radio' },
      description: 'Banner height behavior.',
    },
    fixedHeight: {
      control: { type: 'number', min: 120, max: 1200, step: 4 },
      description: 'Fixed height in px when height is set to `fixed`.',
    },
    maxWidth: {
      control: 'text',
      description: 'Optional max-width value (example: `50.25rem`); leave empty for full-width.',
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
      description: 'Split variant orientation.',
    },
    direction: {
      options: ['default', 'reverse'],
      control: { type: 'inline-radio' },
      description: 'Split variant panel order.',
    },
    heading: { control: 'text', description: 'Heading text in nested Content.' },
    body: { control: 'text', description: 'Body copy in nested Content.' },
    eyebrow: { control: 'boolean', description: 'Show eyebrow text in nested Content.' },
    eyebrowText: { control: 'text', description: 'Eyebrow text.' },
    cta: {
      options: ['off', 'link', 'one-button', 'two-buttons'],
      control: { type: 'inline-radio' },
      description: 'CTA mode in nested Content.',
    },
    footer: { control: 'boolean', description: 'Show footer line in nested Content.' },
    footerText: { control: 'text', description: 'Footer fine text.' },
    imageSrc: { control: 'text', description: 'Image source URL.' },
    imageAlt: { control: 'text', description: 'Image alt text.' },
  },
  args: {
    variant: 'background-image',
    alignment: 'left',
    size: 'mobile',
    overlay: true,
    height: 'hug',
    fixedHeight: 320,
    maxWidth: '',
    orientation: 'vertical',
    direction: 'default',
    heading: 'Title Heading',
    body: 'Body',
    eyebrow: false,
    eyebrowText: 'Small',
    cta: 'off',
    footer: false,
    footerText: 'Fine',
    imageSrc: 'https://www.figma.com/api/mcp/asset/0618e938-8cda-496f-86b3-cd773e818b52',
    imageAlt: 'Banner image',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createBanner(args),
};

export const VariantShowcase = {
  render: () => createBannerVariantShowcase(),
};

export const BackgroundImage = {
  render: () =>
    createBanner({
      variant: 'background-image',
      alignment: 'left',
      size: 'desktop',
      overlay: true,
      maxWidth: '30rem',
      heading: 'Title Heading',
      body: 'Body',
    }),
};

export const SplitVertical = {
  render: () =>
    createBanner({
      variant: 'split',
      orientation: 'vertical',
      direction: 'default',
      maxWidth: '21rem',
      heading: 'Heading',
      body: 'Body',
    }),
};

export const SplitHorizontal = {
  render: () =>
    createBanner({
      variant: 'split',
      orientation: 'horizontal',
      direction: 'default',
      maxWidth: '50.25rem',
      heading: 'Heading',
      body: 'Body',
    }),
};

export const SplitHorizontalReverse = {
  render: () =>
    createBanner({
      variant: 'split',
      orientation: 'horizontal',
      direction: 'reverse',
      maxWidth: '50.25rem',
      heading: 'Heading',
      body: 'Body',
    }),
};
