export default {
  title: 'Tokens/Spacing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Spacing tokens used throughout the Delta Design System for padding, margins, and gaps.',
      },
    },
  },
};

const spacingItem = (name, variable, value) => `
  <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <div style="width: var(${variable}); height: var(${variable}); background: var(--primary); border-radius: var(--border-radius-xs); flex-shrink: 0; min-width: 4px; min-height: 4px;"></div>
    <div style="flex: 1;">
      <strong style="font-family: Montserrat, sans-serif; font-size: 0.875rem;">${name}</strong><br>
      <code style="font-size: 0.75rem; color: var(--gray-dark);">${variable}: ${value}</code>
    </div>
    <div style="background: var(--gray-light); height: 24px; width: var(${variable}); border-radius: var(--border-radius-xs);"></div>
  </div>
`;

export const SpacingScale = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div>
      <h3 style="margin-bottom: 1.5rem;">Spacing Scale</h3>
      ${spacingItem('Extra Small', '--spacing-xs', '0.25rem (4px)')}
      ${spacingItem('Small', '--spacing-sm', '0.5rem (8px)')}
      ${spacingItem('Medium', '--spacing-md', '0.75rem (12px)')}
      ${spacingItem('Large', '--spacing-lg', '1rem (16px)')}
      ${spacingItem('Extra Large', '--spacing-xl', '2rem (32px)')}
    </div>
  `;
  return el;
};
SpacingScale.parameters = { controls: { disable: true } };

export const SpacingDemo = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div>
      <h3 style="margin-bottom: 1.5rem;">Spacing Applied as Padding</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${['xs', 'sm', 'md', 'lg', 'xl'].map(size => `
          <div style="padding: var(--spacing-${size}); background: var(--gray-light); border: 1px dashed var(--gray-medium); border-radius: var(--border-radius-sm);">
            <div style="background: var(--secondary); color: white; padding: 0.5rem; border-radius: var(--border-radius-sm); font-family: Montserrat, sans-serif; font-size: 0.875rem;">
              --spacing-${size}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return el;
};
SpacingDemo.parameters = { controls: { disable: true } };
