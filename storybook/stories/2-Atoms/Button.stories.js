export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_atoms/_buttons.scss\` to add styles.\n\nButtons come in three color variants (primary, secondary, white), two styles (solid, transparent), and three states (default, hover, disabled). They use Montserrat Bold at 12px with pill-shaped border-radius.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'white'],
    },
    style: {
      control: { type: 'select' },
      options: ['solid', 'transparent'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const getStyles = (variant, btnStyle, disabled) => {
  const base = 'display: inline-flex; align-items: center; justify-content: center; gap: 4px; padding: 8px 24px; border-radius: 32px; font-family: Montserrat, sans-serif; font-weight: 700; font-size: 12px; line-height: 12px; cursor: pointer; border: 1px solid; transition: all 0.25s ease;';
  const colors = {
    'primary-solid': `background: var(--primary); color: white; border-color: var(--primary);`,
    'primary-transparent': `background: transparent; color: var(--primary); border-color: var(--primary);`,
    'secondary-solid': `background: var(--secondary); color: white; border-color: var(--secondary);`,
    'secondary-transparent': `background: transparent; color: var(--secondary); border-color: var(--secondary);`,
    'white-solid': `background: white; color: var(--secondary); border-color: white;`,
    'white-transparent': `background: transparent; color: white; border-color: white;`,
  };
  const disabledStyle = disabled ? 'opacity: 0.5; cursor: not-allowed;' : '';
  return base + (colors[`${variant}-${btnStyle}`] || '') + disabledStyle;
};

const Template = ({ variant, style: btnStyle, label, disabled }) => {
  const el = document.createElement('button');
  el.className = `btn btn--${variant} btn--${btnStyle}`;
  el.style.cssText = getStyles(variant, btnStyle, disabled);
  el.disabled = disabled;
  el.textContent = label;
  return el;
};

export const PrimarySolid = Template.bind({});
PrimarySolid.args = { variant: 'primary', style: 'solid', label: 'Button', disabled: false };

export const PrimaryTransparent = Template.bind({});
PrimaryTransparent.args = { variant: 'primary', style: 'transparent', label: 'Button', disabled: false };

export const SecondarySolid = Template.bind({});
SecondarySolid.args = { variant: 'secondary', style: 'solid', label: 'Button', disabled: false };

export const SecondaryTransparent = Template.bind({});
SecondaryTransparent.args = { variant: 'secondary', style: 'transparent', label: 'Button', disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { variant: 'primary', style: 'solid', label: 'Button', disabled: true };

export const AllVariants = () => {
  const el = document.createElement('div');
  el.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem;';

  const variants = ['primary', 'secondary', 'white'];
  const styles = ['solid', 'transparent'];

  variants.forEach(variant => {
    const row = document.createElement('div');
    row.style.cssText = `display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; ${variant === 'white' ? 'background: var(--secondary); padding: 1rem; border-radius: var(--border-radius-md);' : ''}`;

    styles.forEach(btnStyle => {
      row.appendChild(Template({ variant, style: btnStyle, label: 'Default', disabled: false }));
      row.appendChild(Template({ variant, style: btnStyle, label: 'Disabled', disabled: true }));
    });

    const label = document.createElement('strong');
    label.style.cssText = `font-family: Montserrat, sans-serif; font-size: 0.75rem; color: ${variant === 'white' ? 'white' : 'var(--gray-dark)'}; width: 100%; margin-bottom: 0.25rem;`;
    label.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    row.prepend(label);

    el.appendChild(row);
  });

  return el;
};
AllVariants.parameters = { controls: { disable: true } };
