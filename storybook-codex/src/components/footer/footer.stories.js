import { createFooter, createFooterShowcase } from './footer';

const meta = {
  title: 'Organisms/Footers',
  render: (args) => createFooter(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Footer organism composed from link, icon, and switch atoms for site-wide navigation, branding, and mode controls.',
      },
    },
  },
  argTypes: {
    size: {
      options: ['mobile', 'desktop'],
      control: { type: 'inline-radio' },
      description: 'Footer layout variant.',
    },
    heading: { control: 'text', description: 'Brand heading text.' },
    fineText: { control: 'text', description: 'Fine print text.' },
    links: {
      control: 'object',
      description: 'Navigation labels as an array of strings.',
    },
    showToggle: { control: 'boolean', description: 'Show color-mode switch row.' },
    toggleChecked: { control: 'boolean', description: 'Switch checked state.' },
    toggleLabel: { control: 'text', description: 'Switch label text.' },
  },
  args: {
    size: 'mobile',
    heading: 'The Delta Design System',
    fineText: '© Copyright',
    links: ['Link', 'Link', 'Link', 'Link', 'Link'],
    showToggle: true,
    toggleChecked: false,
    toggleLabel: '',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createFooter(args),
};

export const VariantShowcase = {
  render: () => createFooterShowcase(),
};

export const Mobile = {
  render: () => createFooter({ size: 'mobile' }),
};

export const Desktop = {
  render: () => createFooter({ size: 'desktop' }),
};
