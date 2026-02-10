import { createIcon, createIconButtonDemo, createIconSet, ICON_NAMES } from './icon';

const NAVIGATION_ICONS = ['arrow-left', 'arrow-right', 'chevron-down', 'chevron-up', 'link', 'menu-2'];
const UI_ICONS = ['search', 'check', 'plus', 'minus', 'x', 'calendar', 'eye', 'eye-off', 'quote'];
const SOCIAL_ICONS = ['github', 'instagram', 'youtube', 'bluesky', 'email'];

const meta = {
  title: 'Atoms/Icons',
  render: (args) => createIcon(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon implementation in plain HTML/CSS using Tabler-style paths and Figma-aligned variants (`components/icon/*`).',
      },
    },
  },
  argTypes: {
    type: {
      options: ICON_NAMES,
      control: { type: 'select' },
      description: 'Icon variant name.',
    },
    decorative: {
      control: 'boolean',
      description: 'If true, icon is hidden from screen readers.',
    },
    label: {
      control: 'text',
      description: 'Accessible label used when decorative is false.',
    },
    size: {
      options: ['default', 'large'],
      control: { type: 'inline-radio' },
      description: 'Icon frame size option.',
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 2, step: 0.25 },
      description: 'SVG stroke width in px.',
    },
  },
  args: {
    type: 'arrow-left',
    decorative: true,
    label: 'Arrow left',
    size: 'default',
    strokeWidth: 1,
  },
};

export default meta;

export const Default = {};

export const Playground = {};

export const VariantShowcase = {
  render: () => createIconSet(),
};

export const Navigation = {
  render: () => createIconSet(NAVIGATION_ICONS),
};

export const UI = {
  render: () => createIconSet(UI_ICONS),
};

export const Social = {
  render: () => createIconSet(SOCIAL_ICONS),
};

export const States = {
  render: () => `
    <div class="dds-icon-row">
      <div class="dds-icon-figure">${createIcon({ type: 'arrow-right' })}</div>
      <div class="dds-icon-figure" style="color: var(--brand-primary)">${createIcon({ type: 'arrow-right' })}</div>
      <div class="dds-icon-figure" style="color: var(--status-disabled)">${createIcon({ type: 'arrow-right' })}</div>
    </div>
  `,
};

export const OnDarkSurface = {
  render: () => `
    <div class="dds-icon-on-dark" data-color-mode="dark">
      ${createIcon({ type: 'sun' })}
      ${createIcon({ type: 'moon' })}
      ${createIcon({ type: 'menu-2' })}
    </div>
  `,
};

export const IconButtons = {
  render: () => createIconButtonDemo(),
};
