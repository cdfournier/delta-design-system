import { createColorPalette, createSemanticColorPreview } from './colors';

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Foundation color tokens and semantic light/dark mode behavior for the Delta Design System.',
      },
    },
  },
};

export default meta;

export const Palette = {
  render: () => createColorPalette(),
};

export const SemanticModes = {
  render: () => createSemanticColorPreview(),
};
