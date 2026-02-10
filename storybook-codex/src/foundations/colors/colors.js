import './colors.css';

const palette = {
  brand: [
    { name: 'Primary', token: 'brand/primary', cssVar: '--brand-primary', value: '#FF5247' },
    { name: 'Primary dark', token: 'brand/primary-dark', cssVar: '--brand-primary-dark', value: '#B22E28' },
    { name: 'Secondary', token: 'brand/secondary', cssVar: '--brand-secondary', value: '#003442' },
    { name: 'Secondary dark', token: 'brand/secondary-dark', cssVar: '--brand-secondary-dark', value: '#01232D' },
  ],
  global: [
    { name: 'Black', token: 'global/black', cssVar: '--global-black', value: '#000000' },
    { name: 'White', token: 'global/white', cssVar: '--global-white', value: '#FFFFFF' },
    { name: 'Gray dark', token: 'global/gray-dark', cssVar: '--global-gray-dark', value: '#919191' },
    { name: 'Gray medium', token: 'global/gray-medium', cssVar: '--global-gray-medium', value: '#CCCCCC' },
    { name: 'Gray light', token: 'global/gray-light', cssVar: '--global-gray-light', value: '#EEEEEE' },
  ],
  status: [
    { name: 'Disabled', token: 'status/disabled', cssVar: '--status-disabled', value: '#808080' },
    { name: 'Invalid', token: 'status/invalid', cssVar: '--status-invalid', value: '#C00C00' },
    { name: 'Valid', token: 'status/valid', cssVar: '--status-valid', value: '#007000' },
    { name: 'Read-only', token: 'status/read-only', cssVar: '--status-read-only', value: '#333333' },
  ],
  overlay: [
    { name: 'Dark overlay', token: 'overlay/dark', cssVar: '--overlay-dark', value: '#00000080' },
    { name: 'Light overlay', token: 'overlay/light', cssVar: '--overlay-light', value: '#00000040' },
  ],
};

function colorCard(item) {
  return `
    <article class="color-card">
      <div class="color-chip" style="background: var(${item.cssVar});"></div>
      <div class="color-meta">
        <p class="color-name">${item.name}</p>
        <p class="color-token">${item.token}</p>
        <p class="color-value">${item.value}</p>
      </div>
    </article>
  `;
}

function section(title, items) {
  return `
    <section class="colors-section">
      <h3 class="colors-heading">${title}</h3>
      <div class="colors-grid">
        ${items.map(colorCard).join('')}
      </div>
    </section>
  `;
}

export function createColorPalette() {
  return `
    <div class="colors-page" data-color-mode="light">
      ${section('Brand colors', palette.brand)}
      ${section('Global colors', palette.global)}
      ${section('Status colors', palette.status)}
      ${section('Overlay colors', palette.overlay)}
    </div>
  `;
}

export function createSemanticColorPreview() {
  return `
    <div class="semantic-preview">
      <article class="semantic-card">
        <strong>Page + text</strong>
        <span>background/page + text/default</span>
        <span>This text follows mode-resolved semantic tokens.</span>
      </article>
      <article class="semantic-card">
        <strong>Link semantics</strong>
        <span>text/link + text/hover</span>
        <a href="#" aria-label="example link">Example link</a>
      </article>
      <article class="semantic-card">
        <strong>Status colors</strong>
        <span class="status-row">
          <span class="status-pill" style="background: var(--status-valid);">valid</span>
          <span class="status-pill" style="background: var(--status-invalid);">invalid</span>
          <span class="status-pill" style="background: var(--status-disabled);">disabled</span>
        </span>
      </article>
    </div>
  `;
}
