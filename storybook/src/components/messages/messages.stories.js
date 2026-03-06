import {
  createMessage,
  createMessagesAnatomyMessageFigure,
  createMessagesAnatomyToastFigure,
  createMessagesBestPracticesFigure,
  createMessagesVariantConfirmationFigure,
  createMessagesVariantErrorFigure,
  createMessagesVariantModalFigure,
  createMessagesVariantPromoFigure,
  createMessagesVariantSuccessFigure,
  createMessagesVariantToastFigure,
} from './messages';

const meta = {
  title: 'Molecules/Messages',
  render: (args) => createMessage(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    variant: {
      options: ['modal', 'promo', 'confirmation', 'error', 'success', 'toast'],
      control: { type: 'inline-radio' },
    },
    open: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    message: { control: 'text' },
  },
  args: {
    variant: 'modal',
    open: true,
    dismissible: true,
    message: '',
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const Variants = {
  name: 'Variants',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createMessage({ variant: 'modal' })}
      ${createMessage({ variant: 'promo' })}
      ${createMessage({ variant: 'confirmation' })}
      ${createMessage({ variant: 'error' })}
      ${createMessage({ variant: 'success' })}
      ${createMessage({ variant: 'toast' })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);max-width:var(--components-message-inline-width);">
      ${createMessage({ variant: 'error', open: true })}
      ${createMessage({ variant: 'error', open: false })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyMessageFigure = {
  name: 'Anatomy figure - Message',
  render: () => createMessagesAnatomyMessageFigure(),
};

export const AnatomyToastFigure = {
  name: 'Anatomy figure - Toast',
  render: () => createMessagesAnatomyToastFigure(),
};

export const VariantModalFigure = {
  name: 'Variant figure - Modal',
  render: () => createMessagesVariantModalFigure(),
};

export const VariantPromoFigure = {
  name: 'Variant figure - Promo',
  render: () => createMessagesVariantPromoFigure(),
};

export const VariantConfirmationFigure = {
  name: 'Variant figure - Confirmation',
  render: () => createMessagesVariantConfirmationFigure(),
};

export const VariantErrorFigure = {
  name: 'Variant figure - Error',
  render: () => createMessagesVariantErrorFigure(),
};

export const VariantSuccessFigure = {
  name: 'Variant figure - Success',
  render: () => createMessagesVariantSuccessFigure(),
};

export const VariantToastFigure = {
  name: 'Variant figure - Toast',
  render: () => createMessagesVariantToastFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createMessagesBestPracticesFigure(),
};
