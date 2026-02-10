import { createContent, createContentShowcase } from './content';

const meta = {
  title: 'Molecules/Content',
  render: (args) => createContent(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Content implementation in plain HTML/CSS with Figma-aligned naming (`components/content/*`) and reusable optional slots.',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['title+p', 'h+p'],
      control: { type: 'inline-radio' },
      description: 'Heading/body type pairing.',
    },
    eyebrow: { control: 'boolean', description: 'Shows eyebrow text above heading.' },
    eyebrowText: { control: 'text', description: 'Eyebrow label.' },
    heading: { control: 'text', description: 'Heading text content.' },
    body: { control: 'text', description: 'Body copy.' },
    cta: {
      options: ['off', 'link', 'one-button', 'two-buttons'],
      control: { type: 'inline-radio' },
      description: 'CTA layer mode: hidden, link only, one button, or two buttons.',
    },
    ctaLinkLabel: { control: 'text', description: 'CTA link label.' },
    ctaLinkSize: {
      options: ['p', 'small', 'fine'],
      control: { type: 'inline-radio' },
      description: 'CTA link size variant.',
    },
    ctaLinkArrow: { control: 'boolean', description: 'Shows arrow icon on CTA link.' },
    ctaButtonLabel: { control: 'text', description: 'Primary CTA button label.' },
    ctaButtonVariant: {
      options: ['primary', 'secondary', 'white'],
      control: { type: 'inline-radio' },
      description: 'Primary CTA button variant.',
    },
    ctaButtonStyle: {
      options: ['solid', 'transparent', 'outline'],
      control: { type: 'inline-radio' },
      description: 'Primary CTA button style.',
    },
    ctaButtonIconPosition: {
      options: ['none', 'left', 'right', 'only'],
      control: { type: 'inline-radio' },
      description: 'Primary CTA button icon position.',
    },
    ctaButtonIcon: {
      options: ['arrow', 'search'],
      control: { type: 'inline-radio' },
      description: 'Primary CTA button icon.',
    },
    ctaButtonDisabled: { control: 'boolean', description: 'Disable primary CTA button.' },
    ctaSecondaryButtonLabel: { control: 'text', description: 'Secondary CTA button label (two-buttons mode).' },
    ctaSecondaryButtonVariant: {
      options: ['primary', 'secondary', 'white'],
      control: { type: 'inline-radio' },
      description: 'Secondary CTA button variant.',
    },
    ctaSecondaryButtonStyle: {
      options: ['solid', 'transparent', 'outline'],
      control: { type: 'inline-radio' },
      description: 'Secondary CTA button style.',
    },
    ctaSecondaryButtonIconPosition: {
      options: ['none', 'left', 'right', 'only'],
      control: { type: 'inline-radio' },
      description: 'Secondary CTA button icon position.',
    },
    ctaSecondaryButtonIcon: {
      options: ['arrow', 'search'],
      control: { type: 'inline-radio' },
      description: 'Secondary CTA button icon.',
    },
    ctaSecondaryButtonDisabled: { control: 'boolean', description: 'Disable secondary CTA button.' },
    footer: { control: 'boolean', description: 'Shows footer fine text row.' },
    footerText: { control: 'text', description: 'Footer text content.' },
  },
  args: {
    variant: 'title+p',
    eyebrow: false,
    eyebrowText: 'Small',
    heading: 'Title Heading',
    body: 'Body',
    cta: 'off',
    ctaLinkLabel: 'Link',
    ctaLinkSize: 'p',
    ctaLinkArrow: true,
    ctaButtonLabel: 'Label',
    ctaButtonVariant: 'primary',
    ctaButtonStyle: 'solid',
    ctaButtonIconPosition: 'none',
    ctaButtonIcon: 'arrow',
    ctaButtonDisabled: false,
    ctaSecondaryButtonLabel: 'Label',
    ctaSecondaryButtonVariant: 'primary',
    ctaSecondaryButtonStyle: 'transparent',
    ctaSecondaryButtonIconPosition: 'none',
    ctaSecondaryButtonIcon: 'arrow',
    ctaSecondaryButtonDisabled: false,
    footer: false,
    footerText: 'Fine',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args) => createContent(args),
};

export const Variants = {
  render: () => createContentShowcase(),
};

export const TitlePlusParagraph = {
  render: () => createContent({ variant: 'title+p', heading: 'Title Heading', body: 'Body' }),
};

export const HeadingPlusParagraph = {
  render: () => createContent({ variant: 'h+p', heading: 'Heading', body: 'Body' }),
};

export const OptionalElements = {
  render: () =>
    createContent({
      variant: 'h+p',
      eyebrow: true,
      eyebrowText: 'Small',
      heading: 'Heading',
      body: 'Body',
      cta: 'two-buttons',
      footer: true,
      footerText: 'Fine',
    }),
};

export const CTAOptions = {
  render: () =>
    `
    <div class="dds-content-showcase">
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'link', ctaLinkSize: 'p' })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'link', ctaLinkSize: 'small', ctaLinkArrow: true })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'one-button', ctaButtonVariant: 'primary', ctaButtonStyle: 'solid' })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'one-button', ctaButtonVariant: 'secondary', ctaButtonStyle: 'transparent', ctaButtonIconPosition: 'right', ctaButtonIcon: 'arrow' })}
      ${createContent({ variant: 'h+p', eyebrow: true, cta: 'two-buttons', ctaSecondaryButtonVariant: 'secondary', ctaSecondaryButtonStyle: 'transparent', ctaButtonVariant: 'primary', ctaButtonStyle: 'solid' })}
    </div>
  `,
};
