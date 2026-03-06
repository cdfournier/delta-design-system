import {
  createBanner,
  createBannersAnatomyFigure,
  createBannersAnatomySplitFigure,
  createBannersBestPracticesFigure,
} from './banners';

const meta = {
  title: 'Organisms/Banners',
  render: (args) => createBanner(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    type: {
      options: ['background-image', 'split'],
      control: { type: 'inline-radio' },
    },
    alignment: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
      if: { arg: 'type', eq: 'background-image' },
    },
    overlay: {
      control: 'boolean',
      if: { arg: 'type', eq: 'background-image' },
    },
    size: {
      options: ['mobile', 'desktop'],
      control: { type: 'inline-radio' },
      if: { arg: 'type', eq: 'background-image' },
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
      if: { arg: 'type', eq: 'split' },
    },
    direction: {
      options: ['default', 'reverse'],
      control: { type: 'inline-radio' },
      if: { arg: 'type', eq: 'split' },
    },
    cta: {
      options: ['off', 'link', 'one-button', 'two-buttons'],
      control: { type: 'inline-radio' },
    },
    heading: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    type: 'background-image',
    alignment: 'left',
    overlay: true,
    size: 'mobile',
    orientation: 'vertical',
    direction: 'default',
    cta: 'off',
    heading: 'Title Heading',
    body: 'Supporting text that explains the value proposition.',
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
      ${createBanner({ type: 'background-image', alignment: 'left', overlay: true, size: 'desktop', cta: 'off' })}
      ${createBanner({ type: 'background-image', alignment: 'center', overlay: false, size: 'mobile', cta: 'off' })}
      ${createBanner({ type: 'background-image', alignment: 'right', overlay: true, size: 'mobile', cta: 'link' })}
      ${createBanner({ type: 'split', orientation: 'vertical', direction: 'default', cta: 'off' })}
      ${createBanner({ type: 'split', orientation: 'horizontal', direction: 'default', cta: 'one-button' })}
      ${createBanner({ type: 'split', orientation: 'horizontal', direction: 'reverse', cta: 'two-buttons' })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createBanner({ type: 'background-image', alignment: 'left', overlay: true, size: 'desktop', cta: 'off' })}
      ${createBanner({ type: 'background-image', alignment: 'left', overlay: false, size: 'desktop', cta: 'off' })}
      ${createBanner({ type: 'split', orientation: 'horizontal', direction: 'default', cta: 'off' })}
      ${createBanner({ type: 'split', orientation: 'horizontal', direction: 'reverse', cta: 'off' })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure - Background image',
  render: () => createBannersAnatomyFigure(),
};

export const AnatomySplitFigure = {
  name: 'Anatomy figure - Split',
  render: () => createBannersAnatomySplitFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createBannersBestPracticesFigure(),
};
