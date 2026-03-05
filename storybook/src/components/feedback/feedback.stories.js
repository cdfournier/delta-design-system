import {
  createFeedback,
  createFeedbackAnatomyMeterFigure,
  createFeedbackAnatomyProgressFigure,
  createFeedbackBestPracticesFigure,
  createFeedbackMeterBoundsFigure,
  createFeedbackMeterValueDisplayFigure,
} from './feedback';

const meta = {
  title: 'Molecules/Feedback',
  render: (args) => createFeedback(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    type: {
      options: ['progress', 'meter'],
      control: { type: 'inline-radio' },
    },
    label: { control: 'text' },
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    bounds: {
      options: ['optimum', 'low', 'high'],
      control: { type: 'inline-radio' },
      if: { arg: 'type', eq: 'meter' },
    },
    showValue: { control: 'boolean', if: { arg: 'type', eq: 'progress' } },
    valueText: { control: 'text', if: { arg: 'showValue' } },
    showRange: { control: 'boolean', if: { arg: 'type', eq: 'meter' } },
    minLabel: { control: 'text', if: { arg: 'showRange' } },
    maxLabel: { control: 'text', if: { arg: 'showRange' } },
  },
  args: {
    type: 'progress',
    label: 'Label',
    percent: 60,
    bounds: 'optimum',
    showValue: true,
    valueText: 'Value',
    showRange: true,
    minLabel: 'Min',
    maxLabel: 'Max',
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
};

export const States = {
  name: 'States',
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyProgressFigure = {
  name: 'Anatomy progress figure',
  render: () => createFeedbackAnatomyProgressFigure(),
};

export const AnatomyMeterFigure = {
  name: 'Anatomy meter figure',
  render: () => createFeedbackAnatomyMeterFigure(),
};

export const MeterBoundsFigure = {
  name: 'Meter bounds figure',
  render: () => createFeedbackMeterBoundsFigure(),
};

export const MeterValueDisplayFigure = {
  name: 'Meter value display figure',
  render: () => createFeedbackMeterValueDisplayFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createFeedbackBestPracticesFigure(),
};
