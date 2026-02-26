import {
  createBrandColorsFigure,
  createColorsBestPracticesGridFigure,
  createColorsCssCodeFigure,
  createColorsTokenReferenceCodeFigure,
  createColorModesTableFigure,
  createDarkContrastTableFigure,
  createGlobalColorsFigure,
  createLightContrastTableFigure,
  createOverlayColorsFigure,
  createStatusColorsFigure,
} from './colors';

const swatchRenderers = {
  brand: createBrandColorsFigure,
  global: createGlobalColorsFigure,
  status: createStatusColorsFigure,
  overlay: createOverlayColorsFigure,
};

const contrastRenderers = {
  light: createLightContrastTableFigure,
  dark: createDarkContrastTableFigure,
};

const codeRenderers = {
  css: createColorsCssCodeFigure,
  tokens: createColorsTokenReferenceCodeFigure,
};

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const Scale = {
  name: 'Color system swatches',
  args: {
    group: 'brand',
  },
  argTypes: {
    group: {
      control: 'select',
      options: ['brand', 'global', 'status', 'overlay'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Color-system swatch figure for a single color group.',
      },
    },
  },
  render: ({ group }) => (swatchRenderers[group] || swatchRenderers.brand)(),
};

export const Reference = {
  name: 'Color modes table',
  parameters: {
    docs: {
      description: {
        story: 'Semantic token light/dark mode mapping table for the Colors documentation page.',
      },
    },
  },
  render: () => createColorModesTableFigure(),
};

export const Modes = {
  name: 'Contrast ratios table',
  args: {
    mode: 'light',
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility contrast-ratios table for a single mode.',
      },
    },
  },
  render: ({ mode }) => (contrastRenderers[mode] || contrastRenderers.light)(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  parameters: {
    docs: {
      description: {
        story: 'Do/Don’t grid figure for the Colors documentation page.',
      },
    },
  },
  render: () => createColorsBestPracticesGridFigure(),
};

export const CodeReference = {
  name: 'Code reference',
  args: {
    kind: 'css',
  },
  argTypes: {
    kind: {
      control: 'radio',
      options: ['css', 'tokens'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Code-reference figure for a single code block variant.',
      },
    },
  },
  render: ({ kind }) => (codeRenderers[kind] || codeRenderers.css)(),
};
