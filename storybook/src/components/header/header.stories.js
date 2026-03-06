import {
  createHeader,
  createHeaderAnatomyFigure,
  createHeaderBestPracticesFigure,
  createHeaderMobileClosedFigure,
  createHeaderMobileVariantsFigure,
  createHeaderMobileOpenFigure,
} from './header';

const meta = {
  title: 'Organisms/Header',
  render: (args) => createHeader(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    size: {
      options: ['widescreen', 'mobile'],
      control: { type: 'inline-radio' },
    },
    state: {
      options: ['closed', 'open'],
      control: { type: 'inline-radio' },
      if: { arg: 'size', eq: 'mobile' },
    },
    colorMode: {
      options: ['light', 'dark'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'widescreen',
    state: 'closed',
    colorMode: 'light',
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
      ${createHeader({ size: 'widescreen', colorMode: 'light' })}
      ${createHeader({ size: 'mobile', state: 'closed', colorMode: 'light' })}
      ${createHeader({ size: 'mobile', state: 'open', colorMode: 'light' })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createHeader({ size: 'mobile', state: 'closed', colorMode: 'light' })}
      ${createHeader({ size: 'mobile', state: 'open', colorMode: 'light' })}
      ${createHeader({ size: 'widescreen', state: 'closed', colorMode: 'dark' })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure - Widescreen',
  render: () => createHeaderAnatomyFigure(),
};

export const MobileClosedFigure = {
  name: 'Anatomy figure - Mobile closed',
  render: () => createHeaderMobileClosedFigure(),
};

export const MobileOpenFigure = {
  name: 'Anatomy figure - Mobile open',
  render: () => createHeaderMobileOpenFigure(),
};

export const MobileVariantsFigure = {
  name: 'Variants figure - Mobile closed/open',
  render: () => createHeaderMobileVariantsFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createHeaderBestPracticesFigure(),
};
