import {
  createTabs,
  createTabsAnatomyFigure,
  createTabsVariantsFigure,
  createTabsStatesFigure,
  createTabsBestPracticesFigure,
} from './tabs';

const meta = {
  title: 'Organisms/Tabs',
  render: (args) => createTabs(args),
  parameters: {
    layout: 'padded',
    docs: {
      page: null,
    },
  },
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    style: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
    selectedIndex: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
    },
    panelOrientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
    },
    withFigure: {
      control: 'boolean',
    },
    labels: {
      control: 'object',
    },
    ariaLabel: {
      control: 'text',
    },
  },
  args: {
    direction: 'horizontal',
    style: 'primary',
    selectedIndex: 0,
    panelOrientation: 'vertical',
    withFigure: true,
    labels: ['Overview', 'Details', 'Specs'],
    ariaLabel: 'Content sections',
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
      ${createTabs({ direction: 'horizontal', style: 'primary', selectedIndex: 0, panelOrientation: 'vertical', withFigure: true, ariaLabel: 'Horizontal tabs' })}
      ${createTabs({ direction: 'vertical', style: 'secondary', selectedIndex: 0, panelOrientation: 'horizontal', withFigure: true, ariaLabel: 'Vertical tabs' })}
    </div>
  `,
};

export const States = {
  name: 'States',
  render: () => `
    <div style="display:grid;gap:var(--space-xl);">
      ${createTabsStatesFigure()}
      ${createTabs({ direction: 'horizontal', style: 'primary', selectedIndex: 1, panelOrientation: 'vertical', withFigure: true, ariaLabel: 'Selected tab state' })}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
};

export const AnatomyFigure = {
  name: 'Anatomy figure',
  render: () => createTabsAnatomyFigure(),
};

export const VariantsFigure = {
  name: 'Variants figure',
  render: () => createTabsVariantsFigure(),
};

export const BestPracticesFigure = {
  name: 'Best practices Do/Don\'t grid',
  render: () => createTabsBestPracticesFigure(),
};
