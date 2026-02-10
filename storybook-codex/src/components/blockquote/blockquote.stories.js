import { createBlockquote } from './blockquote';

const meta = {
  title: 'Symbols/Blockquote',
  render: (args, context) =>
    createBlockquote({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Blockquote implementation in plain HTML/CSS using Figma-aligned component tokens and semantic `<blockquote>/<cite>` structure.',
      },
    },
  },
  argTypes: {
    quote: {
      control: 'text',
      description: 'Quoted text content.',
    },
    cite: {
      control: 'text',
      description: 'Citation/attribution text.',
    },
    citeUrl: {
      control: 'text',
      description: 'Maps to the native `cite` attribute URL.',
    },
    showCite: {
      control: 'boolean',
      description: 'Show or hide the citation line.',
    },
    background: {
      options: ['page', 'section', 'transparent'],
      control: { type: 'inline-radio' },
      description: 'Background context from foundation colors.',
    },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in `auto`, or forces a specific size scale.',
    },
  },
  args: {
    quote: "Now more than ever, we're designing work meant to be viewed along a gradient of different experiences.",
    cite: 'Ethan Marcotte, Responsive Web Design',
    citeUrl: 'https://alistapart.com/article/responsive-web-design/',
    showCite: true,
    background: 'page',
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const WithoutCite = {
  args: {
    showCite: false,
  },
};

export const SectionBackground = {
  args: {
    background: 'section',
  },
};

export const WidescreenScale = {
  args: {
    sizeMode: 'widescreen',
    quote: 'We should embrace the fact that the web does not have the same constraints, and design for this flexibility.',
    cite: 'John Allsopp, A Dao of Web Design',
    citeUrl: 'https://alistapart.com/article/dao/',
  },
};
