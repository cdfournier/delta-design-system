import {
  createIcon,
  createIconsAnatomyFigure,
  createIconsVariantsFigure,
  createIconsVariantsStoryFigure,
  createIconsStatesStoryFigure,
  createIconsBestPracticesFigure,
  ICON_TYPES,
  ICON_VARIANT_ORDER,
} from './icons';

const meta = {
  title: 'Atoms/Icons',
  render: (args) => createIcon(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    type: {
      options: ICON_VARIANT_ORDER,
      control: { type: 'select' },
    },
    decorative: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 2, step: 0.25 },
    },
  },
  args: {
    type: 'arrow-left',
    decorative: true,
    label: 'Icon',
    strokeWidth: 1,
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => createIconsVariantsStoryFigure(),
};

export const States = {
  name: 'States',
  render: () => createIconsStatesStoryFigure(),
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy Figure',
  render: () => createIconsAnatomyFigure(),
};

export const VariantsFigure = {
  name: 'Variants Figure',
  render: () => createIconsVariantsFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  render: () => createIconsBestPracticesFigure(),
};
