export default {
  title: 'Atoms/Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_atoms/_chips.scss\` to add styles.\n\nChips are compact elements for filtering or making selections. They come in primary and secondary variants, with optional avatars on either side, and can be checked/unchecked.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

const getChipStyles = (variant, checked) => {
  const color = variant === 'primary' ? 'var(--primary)' : 'var(--secondary)';
  if (checked) {
    return `background: ${color}; color: white; border-color: ${color};`;
  }
  return `background: transparent; color: ${color}; border-color: ${color};`;
};

const Template = ({ variant, label, checked }) => {
  const el = document.createElement('span');
  el.className = `chip chip--${variant}${checked ? ' chip--checked' : ''}`;
  el.style.cssText = `display: inline-flex; align-items: center; gap: 2px; padding: 8px 8px; border-radius: 32px; font-family: Montserrat, sans-serif; font-weight: 400; font-size: 12px; line-height: 12px; border: 1px solid; cursor: pointer; transition: all 0.25s ease; ${getChipStyles(variant, checked)}`;
  el.textContent = label;
  return el;
};

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = { variant: 'primary', label: 'Chip', checked: false };

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = { variant: 'primary', label: 'Chip', checked: true };

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = { variant: 'secondary', label: 'Chip', checked: false };

export const SecondaryChecked = Template.bind({});
SecondaryChecked.args = { variant: 'secondary', label: 'Chip', checked: true };

export const AllVariants = () => {
  const el = document.createElement('div');
  el.style.cssText = 'display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;';

  const combos = [
    { variant: 'primary', label: 'Primary', checked: false },
    { variant: 'primary', label: 'Primary', checked: true },
    { variant: 'secondary', label: 'Secondary', checked: false },
    { variant: 'secondary', label: 'Secondary', checked: true },
  ];

  combos.forEach(args => el.appendChild(Template(args)));
  return el;
};
AllVariants.parameters = { controls: { disable: true } };
