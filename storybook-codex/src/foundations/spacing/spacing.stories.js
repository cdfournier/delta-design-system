import { createSpacingScale, createSpacingReference, createRadiusScale } from './spacing';

const meta = {
  title: 'Foundations/Spacing',
  args: {
    spaceMode: 'mobile',
  },
  argTypes: {
    spaceMode: {
      options: ['mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Switches spacing token mode.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Scale = {
  render: (args) => createSpacingScale(args),
};

export const Reference = {
  render: (args) => createSpacingReference(args),
};

export const Radius = {
  render: (args) => createRadiusScale(args),
};
