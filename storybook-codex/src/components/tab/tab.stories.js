import {
  createTabs,
  createTabButtonGroupShowcase,
  createTablistShowcase,
  createTabPanelShowcase,
  createTabsShowcase,
} from './tab';

const meta = {
  title: 'Organisms/Tabs',
  render: (args, context) =>
    createTabs({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tabs organizes related content into labeled panels with horizontal/vertical compositions and Figma token parity.',
      },
    },
  },
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
      description: 'Assembled tabs layout direction.',
    },
    tabStyle: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
      description: 'Selected tab button color style.',
    },
    panelOrientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
      description: 'Panel figure/content arrangement.',
    },
    panelFigure: {
      control: 'boolean',
      description: 'Show or hide panel figure image.',
    },
    labels: {
      control: 'object',
      description: 'Tab labels as string array.',
    },
    activeIndex: {
      control: { type: 'number', min: 0, max: 6, step: 1 },
      description: 'Selected tab index.',
    },
    heading: {
      control: 'text',
      description: 'Panel heading text.',
    },
    body: {
      control: 'text',
      description: 'Panel body text.',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable click and keyboard tab switching.',
    },
    sizeMode: {
      options: ['auto', 'mobile', 'widescreen'],
      control: { type: 'inline-radio' },
      description: 'Uses Breakpoint toolbar in auto mode, or forces a specific size scale.',
    },
  },
  args: {
    direction: 'horizontal',
    tabStyle: 'primary',
    panelOrientation: 'vertical',
    panelFigure: true,
    labels: ['Overview', 'Details', 'Specs'],
    activeIndex: 0,
    heading: 'Heading',
    body: 'Body',
    interactive: true,
    sizeMode: 'auto',
  },
};

export default meta;

export const Default = {};

export const Playground = {
  render: (args, context) =>
    createTabs({
      ...args,
      sizeMode: args.sizeMode === 'auto' ? context.globals.breakpoint ?? 'mobile' : args.sizeMode,
    }),
};

export const VariantShowcase = {
  render: () => createTabsShowcase(),
};

export const TabButtonVariants = {
  render: () => createTabButtonGroupShowcase(),
};

export const TablistVariants = {
  render: () => createTablistShowcase(),
};

export const TabPanelVariants = {
  render: () => createTabPanelShowcase(),
};

export const HorizontalAssembled = {
  render: () => createTabs({ direction: 'horizontal', panelOrientation: 'vertical', panelFigure: true, interactive: false }),
};

export const VerticalAssembled = {
  render: () => createTabs({ direction: 'vertical', panelOrientation: 'horizontal', panelFigure: true, interactive: false }),
};

export const SecondaryStyle = {
  render: () => createTabs({ direction: 'horizontal', tabStyle: 'secondary', panelOrientation: 'vertical', interactive: false }),
};

export const WithoutFigure = {
  render: () => createTabs({ direction: 'horizontal', panelOrientation: 'vertical', panelFigure: false, interactive: false }),
};

export const WidescreenScale = {
  render: () => createTabs({ direction: 'horizontal', panelOrientation: 'vertical', panelFigure: true, interactive: false, sizeMode: 'widescreen' }),
};
