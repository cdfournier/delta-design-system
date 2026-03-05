import {
  createButtonsAnatomyFigure,
  createButtonsBestPracticesFigure,
  createButtonsDisabledFigure,
  createButtonsHoverFigure,
  createButtonsIconOnlyFigure,
  createButtonsStyleFigure,
  createButtonsVariantsFigure,
} from './buttons';

const meta = {
  title: 'Atoms/Buttons',
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createButtonsAnatomyFigure(),
};

export const VariantsFigure = {
  name: 'Variants figure',
  render: () => createButtonsVariantsFigure(),
};

export const StyleFigure = {
  name: 'Style figure',
  render: () => createButtonsStyleFigure(),
};

export const IconOnlyFigure = {
  name: 'Icon-only figure',
  render: () => createButtonsIconOnlyFigure(),
};

export const HoverFigure = {
  name: 'Hover figure',
  render: () => createButtonsHoverFigure(),
};

export const DisabledFigure = {
  name: 'Disabled figure',
  render: () => createButtonsDisabledFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  render: () => createButtonsBestPracticesFigure(),
};
