export default {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_atoms/_badges.scss\` to add styles.\n\nBadges are small status indicators with three variants: primary, secondary, and transparent. They use Montserrat Bold at 10px with rounded corners.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent'],
    },
    label: { control: 'text' },
  },
};

const variantStyles = {
  primary: 'background: var(--primary); color: white; border: 1px solid var(--primary);',
  secondary: 'background: var(--secondary); color: white; border: 1px solid var(--secondary);',
  transparent: 'background: transparent; color: black; border: 1px solid currentColor;',
};

const Template = ({ variant, label }) => {
  const el = document.createElement('span');
  el.className = `badge badge--${variant}`;
  el.style.cssText = `display: inline-flex; align-items: center; justify-content: center; padding: 2px 4px; border-radius: var(--border-radius-sm); font-family: Montserrat, sans-serif; font-weight: 700; font-size: 10px; line-height: 11px; ${variantStyles[variant]}`;
  el.textContent = label;
  return el;
};

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', label: '3' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', label: '5' };

export const Transparent = Template.bind({});
Transparent.args = { variant: 'transparent', label: '7' };

export const AllVariants = () => {
  const el = document.createElement('div');
  el.style.cssText = 'display: flex; gap: 1rem; align-items: center;';
  ['primary', 'secondary', 'transparent'].forEach(variant => {
    const badge = Template({ variant, label: '3' });
    el.appendChild(badge);
  });
  return el;
};
AllVariants.parameters = { controls: { disable: true } };
