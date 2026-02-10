export default {
  title: 'Tokens/Border Radius',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Border radius tokens for controlling the roundness of element corners.',
      },
    },
  },
};

export const BorderRadiusScale = () => {
  const el = document.createElement('div');
  const sizes = [
    { name: 'Extra Small', variable: '--border-radius-xs', value: '0.125rem (2px)' },
    { name: 'Small', variable: '--border-radius-sm', value: '0.25rem (4px)' },
    { name: 'Medium', variable: '--border-radius-md', value: '0.5rem (8px)' },
    { name: 'Large', variable: '--border-radius-lg', value: '0.75rem (12px)' },
    { name: 'Extra Large', variable: '--border-radius-xl', value: '1rem (16px)' },
  ];

  el.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
      ${sizes.map(s => `
        <div style="text-align: center;">
          <div style="width: 80px; height: 80px; background: var(--secondary); border-radius: var(${s.variable});"></div>
          <strong style="font-family: Montserrat, sans-serif; font-size: 0.875rem; display: block; margin-top: 0.5rem;">${s.name}</strong>
          <code style="font-size: 0.75rem; color: var(--gray-dark);">${s.variable}</code><br>
          <span style="font-size: 0.75rem; color: var(--gray-dark);">${s.value}</span>
        </div>
      `).join('')}
    </div>
  `;
  return el;
};
BorderRadiusScale.parameters = { controls: { disable: true } };
