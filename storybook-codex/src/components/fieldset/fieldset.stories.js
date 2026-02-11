import { createFieldset, createFieldsetShowcase } from './fieldset';

const meta = {
  title: 'Molecules/Fieldsets',
  render: (args, context) =>
    createFieldset({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Fieldsets compose input atoms into complete form groups with Figma-aligned width, spacing, typography, and validation messaging.',
      },
    },
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'select', 'checkbox', 'radio', 'switch'],
      control: { type: 'inline-radio' },
      description: 'Input variant used inside the fieldset.',
    },
    state: {
      options: ['default', 'value', 'disabled', 'invalid', 'read-only', 'valid', 'open', 'show'],
      control: { type: 'inline-radio' },
      description: 'State for text/password/select types. Choice variants map unsupported states to default.',
    },
    showMessage: { control: 'boolean', description: 'Shows helper/validation message row.' },
    messageState: {
      options: ['default', 'disabled', 'invalid', 'read-only', 'valid'],
      control: { type: 'inline-radio' },
      description: 'Optional explicit message state override.',
    },
    messageText: { control: 'text', description: 'Helper/validation message content.' },
    legendText: { control: 'text', description: 'Top label/legend text.' },
    showLegendLabel: { control: 'boolean', description: 'Shows the secondary legend label (choice groups only).' },
    legendLabel: { control: 'text', description: 'Secondary legend label text.' },
    itemLabel: { control: 'text', description: 'Choice row label text for checkbox/radio/switch items.' },
    checkboxPattern: {
      options: ['all-unchecked', 'first-checked', 'alternating', 'all-checked', 'mixed'],
      control: { type: 'inline-radio' },
      description: 'Checkbox item value distribution.',
    },
    radioSelection: {
      options: [1, 2, 3, 4],
      control: { type: 'inline-radio' },
      description: 'Selected radio item index.',
    },
    switchPattern: {
      options: ['all-off', 'first-on', 'alternating', 'all-on'],
      control: { type: 'inline-radio' },
      description: 'Switch item on/off distribution.',
    },
    direction: {
      options: ['default', 'reverse'],
      control: { type: 'inline-radio' },
      description: 'Choice row direction for checkbox/switch.',
    },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in auto mode, or forces a specific size scale.',
    },
  },
  args: {
    type: 'text',
    state: 'default',
    showMessage: true,
    messageState: 'default',
    messageText: 'Message',
    legendText: 'Label',
    showLegendLabel: false,
    legendLabel: 'Label',
    itemLabel: 'Value',
    checkboxPattern: 'mixed',
    radioSelection: 2,
    switchPattern: 'alternating',
    direction: 'default',
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args, context) =>
    createFieldset({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
};

export const Variants = {
  render: () => createFieldsetShowcase(),
};

export const States = {
  render: () => `
    <div class="dds-fieldset-showcase">
      ${createFieldset({ type: 'text', state: 'default' })}
      ${createFieldset({ type: 'text', state: 'invalid', messageState: 'invalid', messageText: 'Invalid message' })}
      ${createFieldset({ type: 'text', state: 'valid', messageState: 'valid', messageText: 'Valid message' })}
      ${createFieldset({ type: 'checkbox', state: 'invalid', messageState: 'invalid', legendText: 'Legend', checkboxPattern: 'first-checked' })}
      ${createFieldset({ type: 'switch', state: 'disabled', messageState: 'disabled', legendText: 'Legend', switchPattern: 'all-on' })}
    </div>
  `,
};

export const Responsive = {
  parameters: {
    docs: {
      description: {
        story: 'Responsive scaling parity for fieldset width, type, and spacing between mobile and widescreen token modes.',
      },
    },
  },
  render: () => `
    <div class="dds-fieldset-showcase">
      ${createFieldset({ type: 'text', sizeMode: 'widescreen' })}
      ${createFieldset({ type: 'checkbox', legendText: 'Legend', checkboxPattern: 'alternating', sizeMode: 'widescreen' })}
    </div>
  `,
};
