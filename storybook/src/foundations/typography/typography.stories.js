import {
  createTypographyBestPracticesFigure,
  createTypographyCssCodeReferenceFigure,
  createTypographyFontFamiliesFigure,
  createTypographyHtmlCodeReferenceFigure,
  createTypographyJsCodeReferenceFigure,
  createTypographyScaleFigure,
  createTypographySizeSpecificationsFigure,
  createTypographyTokenCodeReferenceFigure,
} from './typography';

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const FontFamiliesFigure = {
  name: 'Font families specimens',
  parameters: {
    docs: {
      description: {
        story: 'Font family specimen figure for the Typography documentation page.',
      },
    },
  },
  render: () => createTypographyFontFamiliesFigure(),
};

export const SizeSpecificationsFigure = {
  name: 'Size specifications specimens',
  parameters: {
    docs: {
      description: {
        story: 'Typography size-specimen figure for the documentation page (follows Storybook type-mode toolbar).',
      },
    },
  },
  render: () => createTypographySizeSpecificationsFigure(),
};

export const TypeScaleFigure = {
  name: 'Type scale table',
  parameters: {
    docs: {
      description: {
        story: 'Typography type scale reference table for the documentation page.',
      },
    },
  },
  render: () => createTypographyScaleFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  parameters: {
    docs: {
      description: {
        story: 'Do/Don’t grid figure for the Typography documentation page.',
      },
    },
  },
  render: () => createTypographyBestPracticesFigure(),
};

export const HtmlCodeReference = {
  name: 'HTML code reference',
  parameters: {
    docs: {
      description: {
        story: 'HTML code reference figure for the Typography documentation page.',
      },
    },
  },
  render: () => createTypographyHtmlCodeReferenceFigure(),
};

export const CssCodeReference = {
  name: 'CSS code reference',
  parameters: {
    docs: {
      description: {
        story: 'CSS code reference figure for the Typography documentation page.',
      },
    },
  },
  render: () => createTypographyCssCodeReferenceFigure(),
};

export const JavaScriptCodeReference = {
  name: 'JavaScript code reference',
  parameters: {
    docs: {
      description: {
        story: 'JavaScript code reference figure for the Typography documentation page.',
      },
    },
  },
  render: () => createTypographyJsCodeReferenceFigure(),
};

export const TokenCodeReference = {
  name: 'Design tokens code reference',
  parameters: {
    docs: {
      description: {
        story: 'Design tokens reference figure for the Typography documentation page.',
      },
    },
  },
  render: () => createTypographyTokenCodeReferenceFigure(),
};
