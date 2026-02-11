import { createMessage, createMessageShowcase } from './message';

const meta = {
  title: 'Molecules/Messages',
  render: (args, context) =>
    createMessage({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Messages provide modal, promo, inline status, confirmation, and toast feedback patterns with Figma-aligned tokens and controls.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['modal', 'promo', 'confirmation', 'error', 'success', 'toast'],
      control: { type: 'inline-radio' },
      description: 'Message pattern variant.',
    },
    heading: { control: 'text', description: 'Heading text for modal/promo variants.' },
    body: { control: 'text', description: 'Body copy for modal/promo variants.' },
    text: { control: 'text', description: 'Message text for inline and toast variants.' },
    dismissible: { control: 'boolean', description: 'Shows close button where applicable.' },
    eyebrow: { control: 'boolean', description: 'Show eyebrow in modal/promo content.' },
    eyebrowText: { control: 'text', description: 'Eyebrow text.' },
    cta: {
      options: ['off', 'link', 'one-button', 'two-buttons'],
      control: { type: 'inline-radio' },
      description: 'CTA mode for modal/promo content.',
    },
    footer: { control: 'boolean', description: 'Show footer in modal/promo content.' },
    footerText: { control: 'text', description: 'Footer text.' },
    yesLabel: { control: 'text', description: 'Confirmation yes button label.' },
    noLabel: { control: 'text', description: 'Confirmation no button label.' },
    toastClose: { control: 'boolean', description: 'Show close button in toast variant.' },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in auto mode, or forces a specific size scale.',
    },
  },
  args: {
    variant: 'modal',
    heading: 'Heading',
    body: 'Body',
    text: 'Toast message',
    dismissible: true,
    eyebrow: false,
    eyebrowText: 'Small',
    cta: 'off',
    footer: false,
    footerText: 'Fine',
    yesLabel: 'Yes',
    noLabel: 'No',
    toastClose: true,
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args, context) =>
    createMessage({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
};

export const Variants = {
  render: () => createMessageShowcase(),
};

export const States = {
  render: () => `
    <div class="dds-message-showcase">
      ${createMessage({ variant: 'error', text: 'Error message', dismissible: true })}
      ${createMessage({ variant: 'success', text: 'Success message', dismissible: true })}
      ${createMessage({ variant: 'confirmation', text: 'Confirmation message', dismissible: true })}
      ${createMessage({ variant: 'toast', text: 'Toast message', toastClose: true })}
    </div>
  `,
};

export const Responsive = {
  parameters: {
    docs: {
      description: {
        story: 'Responsive scaling parity for inline message and toast typography/spacing between mobile and widescreen token modes.',
      },
    },
  },
  render: () => `
    <div class="dds-message-showcase">
      ${createMessage({ variant: 'error', text: 'Error message', sizeMode: 'widescreen' })}
      ${createMessage({ variant: 'success', text: 'Success message', sizeMode: 'widescreen' })}
      ${createMessage({ variant: 'toast', text: 'Toast message', sizeMode: 'widescreen' })}
    </div>
  `,
};
