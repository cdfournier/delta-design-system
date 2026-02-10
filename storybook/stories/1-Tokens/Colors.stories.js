export default {
  title: 'Tokens/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Delta Design System color palette defined as CSS custom properties in `:root`.',
      },
    },
  },
};

const swatch = (name, variable, hex) => `
  <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
    <div style="width: 48px; height: 48px; border-radius: var(--border-radius-md); background: var(${variable}); border: 1px solid var(--gray-medium); flex-shrink: 0;"></div>
    <div>
      <strong style="font-family: Montserrat, sans-serif; font-size: 0.875rem;">${name}</strong><br>
      <code style="font-size: 0.75rem; color: var(--gray-dark);">${variable}</code>
      <span style="font-size: 0.75rem; color: var(--gray-dark); margin-left: 0.5rem;">${hex}</span>
    </div>
  </div>
`;

const group = (title, swatches) => `
  <div style="margin-bottom: 2rem;">
    <h3 style="margin-bottom: 1rem;">${title}</h3>
    ${swatches}
  </div>
`;

export const BrandColors = () => {
  const el = document.createElement('div');
  el.innerHTML = group('Brand', [
    swatch('Primary', '--primary', '#df3a32'),
    swatch('Secondary', '--secondary', '#003442'),
  ].join(''));
  return el;
};

export const GrayScale = () => {
  const el = document.createElement('div');
  el.innerHTML = group('Grays', [
    swatch('Gray Dark', '--gray-dark', '#919191'),
    swatch('Gray Medium', '--gray-medium', '#cccccc'),
    swatch('Gray Light', '--gray-light', '#eeeeee'),
  ].join(''));
  return el;
};

export const InputStateColors = () => {
  const el = document.createElement('div');
  el.innerHTML = group('Input States', [
    swatch('Invalid', '--input-invalid', '#c00c00'),
    swatch('Valid', '--input-valid', '#008000'),
    swatch('Not Allowed', '--input-not-allowed', '#cccccc'),
    swatch('Read Only', '--input-read-only', '#919191'),
  ].join(''));
  return el;
};

export const AllColors = () => {
  const el = document.createElement('div');
  el.innerHTML = [
    group('Brand', [
      swatch('Primary', '--primary', '#df3a32'),
      swatch('Secondary', '--secondary', '#003442'),
    ].join('')),
    group('Grays', [
      swatch('Gray Dark', '--gray-dark', '#919191'),
      swatch('Gray Medium', '--gray-medium', '#cccccc'),
      swatch('Gray Light', '--gray-light', '#eeeeee'),
    ].join('')),
    group('Input States', [
      swatch('Invalid', '--input-invalid', '#c00c00'),
      swatch('Valid', '--input-valid', '#008000'),
      swatch('Not Allowed', '--input-not-allowed', '#cccccc'),
      swatch('Read Only', '--input-read-only', '#919191'),
    ].join('')),
  ].join('');
  return el;
};
AllColors.parameters = { controls: { disable: true } };
