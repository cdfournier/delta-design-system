import {
  createFooter,
  createFooterAnatomyFigure,
  createFooterBestPracticesFigure,
} from './footer';

const meta = {
  title: 'Organisms/Footer',
  render: (args) => createFooter(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    size: {
      options: ['mobile', 'desktop'],
      control: { type: 'inline-radio' },
    },
    colorMode: {
      options: ['light', 'dark'],
      control: { type: 'inline-radio' },
    },
    heading: { control: 'text' },
    fineText: { control: 'text' },
    checked: { control: 'boolean' },
  },
  args: {
    size: 'mobile',
    colorMode: 'light',
    heading: 'The Delta Design System',
    fineText: '© Copyright',
    checked: false,
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
      ${createFooter({ size: 'mobile', colorMode: 'light' })}
      ${createFooter({ size: 'desktop', colorMode: 'light' })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createFooter({ size: 'desktop', colorMode: 'light', checked: false })}
      ${createFooter({ size: 'desktop', colorMode: 'dark', checked: true })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createFooterAnatomyFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createFooterBestPracticesFigure(),
};
