import {
  createGridBreakpointsTableFigure,
  createGridBestPracticesFigure,
  createGridColumnSpanningTableFigure,
  createGridCssCodeFigure,
  createGridLayoutPatternFigure,
  createGridTokenCodeFigure,
  createGridVisualSampleFigure,
} from './grid';

const meta = {
  title: 'Foundations/Grid',
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const BreakpointsTableFigure = {
  name: 'Breakpoints table',
  parameters: {
    docs: {
      description: {
        story: 'Breakpoint reference table for the Grid documentation page.',
      },
    },
  },
  render: () => createGridBreakpointsTableFigure(),
};

export const VisualGridMobileFigure = {
  name: 'Visual grid sample (mobile 4 columns)',
  parameters: {
    docs: {
      description: {
        story: 'Mobile visual grid sample for the Grid documentation page.',
      },
    },
  },
  render: () => createGridVisualSampleFigure({ columns: 4 }),
};

export const VisualGridTabletFigure = {
  name: 'Visual grid sample (tablet 8 columns)',
  parameters: {
    docs: {
      description: {
        story: 'Tablet visual grid sample for the Grid documentation page.',
      },
    },
  },
  render: () => createGridVisualSampleFigure({ columns: 8 }),
};

export const VisualGridWidescreenFigure = {
  name: 'Visual grid sample (widescreen 12 columns)',
  parameters: {
    docs: {
      description: {
        story: 'Widescreen visual grid sample for the Grid documentation page.',
      },
    },
  },
  render: () => createGridVisualSampleFigure({ columns: 12 }),
};

export const ColumnSpanningTableFigure = {
  name: 'Column spanning reference table',
  parameters: {
    docs: {
      description: {
        story: 'Column spanning reference table for the Grid documentation page.',
      },
    },
  },
  render: () => createGridColumnSpanningTableFigure(),
};

export const PatternFiftyFigure = {
  name: 'Layout pattern (50/50 split)',
  parameters: {
    docs: {
      description: {
        story: '50/50 split layout pattern sample for the Grid documentation page.',
      },
    },
  },
  render: () =>
    createGridLayoutPatternFigure({
      spans: [6, 6],
      labels: ['6 columns', '6 columns'],
    }),
};

export const PatternThirdsFigure = {
  name: 'Layout pattern (thirds)',
  parameters: {
    docs: {
      description: {
        story: '33/33/33 split layout pattern sample for the Grid documentation page.',
      },
    },
  },
  render: () =>
    createGridLayoutPatternFigure({
      spans: [4, 4, 4],
      labels: ['4 columns', '4 columns', '4 columns'],
    }),
};

export const PatternFourthsFigure = {
  name: 'Layout pattern (fourths)',
  parameters: {
    docs: {
      description: {
        story: '25/25/25/25 split layout pattern sample for the Grid documentation page.',
      },
    },
  },
  render: () =>
    createGridLayoutPatternFigure({
      spans: [3, 3, 3, 3],
      labels: ['3 columns', '3 columns', '3 columns', '3 columns'],
    }),
};

export const PatternSidebarFigure = {
  name: 'Layout pattern (sidebar 66/33)',
  parameters: {
    docs: {
      description: {
        story: '66/33 sidebar layout pattern sample for the Grid documentation page.',
      },
    },
  },
  render: () =>
    createGridLayoutPatternFigure({
      spans: [8, 4],
      labels: ['8 columns (main content)', '4 columns (sidebar)'],
    }),
};

export const PatternGoldenRatioFigure = {
  name: 'Layout pattern (golden ratio 58/42)',
  parameters: {
    docs: {
      description: {
        story: '58/42 golden ratio layout pattern sample for the Grid documentation page.',
      },
    },
  },
  render: () =>
    createGridLayoutPatternFigure({
      spans: [7, 5],
      labels: ['7 columns (golden wide)', '5 columns (golden narrow)'],
    }),
};

export const PatternCenteredContentFigure = {
  name: 'Layout pattern (8 columns centered)',
  parameters: {
    docs: {
      description: {
        story: 'Centered 8-column content layout pattern sample for the Grid documentation page.',
      },
    },
  },
  render: () =>
    createGridLayoutPatternFigure({
      items: [{ column: '3 / 11', label: '8 columns centered' }],
    }),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don’t grid',
  parameters: {
    docs: {
      description: {
        story: 'Do/Don’t grid figure for the Grid documentation page.',
      },
    },
  },
  render: () => createGridBestPracticesFigure(),
};

export const CssCodeFigure = {
  name: 'CSS code reference',
  parameters: {
    docs: {
      description: {
        story: 'CSS code reference figure for the Grid documentation page.',
      },
    },
  },
  render: () => createGridCssCodeFigure(),
};

export const TokenCodeFigure = {
  name: 'Design tokens code reference',
  parameters: {
    docs: {
      description: {
        story: 'Design tokens reference figure for the Grid documentation page.',
      },
    },
  },
  render: () => createGridTokenCodeFigure(),
};
