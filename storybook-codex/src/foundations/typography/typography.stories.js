import { createTypographyScale, createTypographySpecimens } from './typography';

const sharedArgTypes = {
  typeMode: {
    options: ['mobile', 'widescreen'],
    control: { type: 'inline-radio' },
    description: 'Switches typography token mode.',
  },
};

const meta = {
  title: 'Foundations/Typography',
  args: {
    typeMode: 'mobile',
  },
  argTypes: sharedArgTypes,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Scale = {
  render: (args) => createTypographyScale(args),
};

export const Specimens = {
  render: (args) => createTypographySpecimens(args),
};
