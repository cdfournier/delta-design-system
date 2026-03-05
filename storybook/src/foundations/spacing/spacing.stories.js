import {
  createBorderRadiusReferenceTableFigure,
  createBorderRadiusScaleFigure,
  createSpacingBestPracticesFigure,
  createSpacingCssCodeFigure,
  createSpacingReferenceTableFigure,
  createSpacingScaleFigure,
  createSpacingTokenCodeFigure,
} from './spacing';

const meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const Scale = {
  name: 'Spacing scale specimens',
  args: {
    mode: 'mobile',
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['mobile', 'widescreen'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Spacing scale specimen figure for a single breakpoint mode.',
      },
    },
  },
  render: ({ mode }) => createSpacingScaleFigure({ mode }),
};

export const SpacingScaleMobileFigure = {
  name: 'Spacing scale (mobile/tablet)',
  render: () => createSpacingScaleFigure({ mode: 'mobile' }),
};

export const SpacingScaleWidescreenFigure = {
  name: 'Spacing scale (widescreen)',
  render: () => createSpacingScaleFigure({ mode: 'widescreen' }),
};

export const SpacingReferenceFigure = {
  name: 'Spacing reference table',
  parameters: {
    docs: {
      description: {
        story: 'Spacing token reference table for the Spacing documentation page.',
      },
    },
  },
  render: () => createSpacingReferenceTableFigure(),
};

export const BorderRadiusScaleMobileFigure = {
  name: 'Border-radius scale (mobile/tablet)',
  render: () => createBorderRadiusScaleFigure({ mode: 'mobile' }),
};

export const BorderRadiusScaleWidescreenFigure = {
  name: 'Border-radius scale (widescreen)',
  render: () => createBorderRadiusScaleFigure({ mode: 'widescreen' }),
};

export const BorderRadiusReferenceFigure = {
  name: 'Border-radius reference table',
  parameters: {
    docs: {
      description: {
        story: 'Border-radius token reference table for the Spacing documentation page.',
      },
    },
  },
  render: () => createBorderRadiusReferenceTableFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  parameters: {
    docs: {
      description: {
        story: 'Do/Don’t grid figure for the Spacing documentation page.',
      },
    },
  },
  render: () => createSpacingBestPracticesFigure(),
};

export const CssCodeFigure = {
  name: 'CSS code reference',
  parameters: {
    docs: {
      description: {
        story: 'CSS code reference figure for the Spacing documentation page.',
      },
    },
  },
  render: () => createSpacingCssCodeFigure(),
};

export const TokenCodeFigure = {
  name: 'Design tokens code reference',
  parameters: {
    docs: {
      description: {
        story: 'Design tokens reference figure for the Spacing documentation page.',
      },
    },
  },
  render: () => createSpacingTokenCodeFigure(),
};
