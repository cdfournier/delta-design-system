import { createDetails, createDetailsShowcase, createDetailsFaqShowcase } from './details';

const meta = {
  title: 'Molecules/Details',
  render: (args) => createDetails(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Native details/summary disclosure component in plain HTML/CSS with Figma-aligned naming (`components/details/*`).',
      },
    },
  },
  argTypes: {
    summaryText: { control: 'text', description: 'Summary trigger text.' },
    bodyText: { control: 'text', description: 'Expandable body text.' },
    state: {
      options: ['collapsed', 'expanded'],
      control: { type: 'inline-radio' },
      description: 'Default open/closed state at render.',
    },
    widthMode: {
      options: ['fixed', 'fluid'],
      control: { type: 'inline-radio' },
      description: 'Fixed preview width or parent-fluid width.',
    },
  },
  args: {
    summaryText: 'Summary',
    bodyText: 'Body',
    state: 'collapsed',
    widthMode: 'fixed',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createDetails(args),
};

export const States = {
  render: () => createDetailsShowcase(),
};

export const Collapsed = {
  render: () => createDetails({ state: 'collapsed' }),
};

export const Expanded = {
  render: () => createDetails({ state: 'expanded' }),
};

export const FAQGroup = {
  render: () => createDetailsFaqShowcase(),
};
