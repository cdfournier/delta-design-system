import { createHeader, createHeaderShowcase } from './header';

const meta = {
  title: 'Organisms/Headers',
  render: (args) => createHeader(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Header organism with desktop inline nav and mobile closed/open menu states, using link/icon/switch atoms.',
      },
    },
  },
  argTypes: {
    size: {
      options: ['mobile', 'desktop'],
      control: { type: 'inline-radio' },
      description: 'Header size variant.',
    },
    mobileState: {
      options: ['closed', 'open', 'interactive'],
      control: { type: 'inline-radio' },
      description: 'Mobile menu state.',
      if: { arg: 'size', eq: 'mobile' },
    },
    links: {
      control: 'object',
      description: 'Navigation labels as an array of strings.',
    },
    toggleChecked: {
      control: 'boolean',
      description: 'Color mode switch checked state.',
    },
  },
  args: {
    size: 'desktop',
    mobileState: 'closed',
    links: ['Link', 'Link', 'Link', 'Link', 'Link'],
    toggleChecked: false,
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createHeader(args),
};

export const VariantShowcase = {
  render: () => createHeaderShowcase(),
};

export const Desktop = {
  render: () => createHeader({ size: 'desktop' }),
};

export const MobileClosed = {
  render: () => createHeader({ size: 'mobile', mobileState: 'closed' }),
};

export const MobileOpen = {
  render: () => createHeader({ size: 'mobile', mobileState: 'open' }),
};

export const MobileInteractive = {
  render: () => createHeader({ size: 'mobile', mobileState: 'interactive' }),
};
