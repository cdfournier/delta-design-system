import { createLink, createLinkRow, createLinksScaleShowcase } from './link';

const meta = {
  title: 'Atoms/Links',
  render: (args) => createLink(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Link implementation in plain HTML/CSS using Figma-aligned naming (`components/link/*`) with size, state, and arrow options.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Link text content.',
    },
    href: {
      control: 'text',
      description: 'Destination URL.',
    },
    size: {
      options: ['p', 'small', 'fine'],
      control: { type: 'inline-radio' },
      description: 'Typography size variant from Figma.',
    },
    state: {
      options: ['default', 'hover'],
      control: { type: 'inline-radio' },
      description: 'Forced visual state preview.',
    },
    arrow: {
      control: 'boolean',
      description: 'Show or hide trailing arrow icon.',
    },
  },
  args: {
    label: 'Link',
    href: '#',
    size: 'p',
    state: 'default',
    arrow: true,
  },
};

export default meta;

export const Default = {};

export const Playground = {};

export const VariantShowcase = {
  render: () => createLinksScaleShowcase(),
};

export const WithArrow = {
  render: () =>
    createLinkRow(
      [
        createLink({ label: 'Link', size: 'p', arrow: true, state: 'default' }),
        createLink({ label: 'Link', size: 'p', arrow: true, state: 'hover' }),
        createLink({ label: 'Link', size: 'small', arrow: true, state: 'default' }),
        createLink({ label: 'Link', size: 'small', arrow: true, state: 'hover' }),
        createLink({ label: 'Link', size: 'fine', arrow: true, state: 'default' }),
        createLink({ label: 'Link', size: 'fine', arrow: true, state: 'hover' }),
      ].join(''),
    ),
};

export const WithoutArrow = {
  render: () =>
    createLinkRow(
      [
        createLink({ label: 'Link', size: 'p', arrow: false, state: 'default' }),
        createLink({ label: 'Link', size: 'p', arrow: false, state: 'hover' }),
        createLink({ label: 'Link', size: 'small', arrow: false, state: 'default' }),
        createLink({ label: 'Link', size: 'small', arrow: false, state: 'hover' }),
        createLink({ label: 'Link', size: 'fine', arrow: false, state: 'default' }),
        createLink({ label: 'Link', size: 'fine', arrow: false, state: 'hover' }),
      ].join(''),
    ),
};

export const States = {
  render: () =>
    createLinkRow(
      [
        createLink({ label: 'Default', size: 'p', state: 'default', arrow: true }),
        createLink({ label: 'Hover', size: 'p', state: 'hover', arrow: true }),
        createLink({ label: 'Default', size: 'p', state: 'default', arrow: false }),
        createLink({ label: 'Hover', size: 'p', state: 'hover', arrow: false }),
      ].join(''),
    ),
};

export const SizeComparison = {
  render: () =>
    `<div class="dds-link-scale-grid">
      <div>${createLink({ label: 'P Link', size: 'p', arrow: true, state: 'default' })}</div>
      <div>${createLink({ label: 'Small Link', size: 'small', arrow: true, state: 'default' })}</div>
      <div>${createLink({ label: 'Fine Link', size: 'fine', arrow: true, state: 'default' })}</div>
    </div>`,
};
