import { createBadge } from './badge';

const meta = {
  title: 'Symbols/Badge',
  render: (args) => createBadge(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge implementation in plain HTML/CSS with Figma-aligned naming and variable references. Variants come from `style` in Figma (`primary`, `secondary`, `transparent`).',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge content text.',
    },
    style: {
      options: ['primary', 'secondary', 'transparent'],
      control: { type: 'inline-radio' },
      description: 'Maps to Figma variant property `style`.',
    },
    tokenMode: {
      options: ['symbol', 'library'],
      control: { type: 'inline-radio' },
      description:
        'Switches between token values found in Symbols node and Library docs examples.',
    },
  },
  args: {
    label: '0',
    style: 'transparent',
    tokenMode: 'symbol',
  },
};

export default meta;

export const Transparent = {
  args: {
    style: 'transparent',
  },
};

export const Primary = {
  args: {
    style: 'primary',
  },
};

export const Secondary = {
  args: {
    style: 'secondary',
  },
};

export const LibraryScale = {
  args: {
    style: 'primary',
    tokenMode: 'library',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses the larger token values observed in the Library badge documentation examples.',
      },
    },
  },
};
