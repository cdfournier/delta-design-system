import {
  createFeedback,
  createProgressFeedback,
  createMeterFeedback,
  createFeedbackShowcase,
} from './feedback';

const meta = {
  title: 'Molecules/Feedback',
  render: (args) => createFeedback(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Feedback indicators for progress and meter values with Figma-aligned token naming (`components/feedback/*`).',
      },
    },
  },
  argTypes: {
    type: {
      options: ['progress', 'meter'],
      control: { type: 'inline-radio' },
      description: 'Feedback type.',
    },
    label: { control: 'text', description: 'Label text above the bar.' },
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Filled value (0-100).' },
    showValue: { control: 'boolean', description: 'Show value row text.' },
    valueText: { control: 'text', description: 'Progress value text when `showValue` is on.' },
    bounds: {
      options: ['optimum', 'low', 'high'],
      control: { type: 'inline-radio' },
      description: 'Meter semantic bounds color mode.',
    },
    minLabel: { control: 'text', description: 'Meter minimum label.' },
    maxLabel: { control: 'text', description: 'Meter maximum label.' },
  },
  args: {
    type: 'progress',
    label: 'Label',
    percent: 50,
    showValue: true,
    valueText: 'Value',
    bounds: 'optimum',
    minLabel: 'Min',
    maxLabel: 'Max',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createFeedback(args),
};

export const Variants = {
  render: () => createFeedbackShowcase(),
};

export const Progress = {
  render: () => createProgressFeedback({ label: 'Label', percent: 50, showValue: true }),
};

export const ProgressNoValue = {
  render: () => createProgressFeedback({ label: 'Label', percent: 50, showValue: false }),
};

export const MeterOptimum = {
  render: () => createMeterFeedback({ label: 'Label', bounds: 'optimum', percent: 50, showValue: true }),
};

export const MeterLow = {
  render: () => createMeterFeedback({ label: 'Label', bounds: 'low', percent: 16.67, showValue: true }),
};

export const MeterHigh = {
  render: () => createMeterFeedback({ label: 'Label', bounds: 'high', percent: 86.81, showValue: true }),
};

export const MeterNoValue = {
  render: () => createMeterFeedback({ label: 'Label', bounds: 'optimum', percent: 50, showValue: false }),
};
