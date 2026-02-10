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

export const VariantShowcase = {
  render: () => createMessageShowcase(),
};

export const Modal = {
  render: () => createMessage({ variant: 'modal', heading: 'Heading', body: 'Body', dismissible: true }),
};

export const Promo = {
  render: () => createMessage({ variant: 'promo', heading: 'Heading', body: 'Body', dismissible: true }),
};

export const Confirmation = {
  render: () => createMessage({ variant: 'confirmation', text: 'Confirmation message' }),
};

export const Error = {
  render: () => createMessage({ variant: 'error', text: 'Error message' }),
};

export const Success = {
  render: () => createMessage({ variant: 'success', text: 'Success message' }),
};

export const Toast = {
  render: () => createMessage({ variant: 'toast', text: 'Toast message' }),
};

export const WidescreenScale = {
  render: () => `
    <div class="dds-message-showcase">
      ${createMessage({ variant: 'error', text: 'Error message', sizeMode: 'widescreen' })}
      ${createMessage({ variant: 'success', text: 'Success message', sizeMode: 'widescreen' })}
      ${createMessage({ variant: 'toast', text: 'Toast message', sizeMode: 'widescreen' })}
    </div>
  `,
};
