import './grid.css';

const breakpointConfig = {
  mobile: { label: 'Mobile', width: '0-767px', columns: 4 },
  tablet: { label: 'Tablet', width: '768-1279px', columns: 8 },
  widescreen: { label: 'Widescreen', width: '1280px+', columns: 12 },
};

const layoutPatterns = [
  { label: 'Fifty', description: '50 / 50 split', spans: [6, 6] },
  { label: 'Thirds', description: '33 / 33 / 33 split', spans: [4, 4, 4] },
  { label: 'Fourths', description: '25 / 25 / 25 / 25 split', spans: [3, 3, 3, 3] },
  { label: 'Sidebar', description: '66 / 33 split', spans: [8, 4] },
  { label: 'Golden ratio', description: '58 / 42 split', spans: [7, 5] },
];

const spanReference = [
  ['12 columns', '100%', 'Full width'],
  ['8 columns', '66.67%', 'Two-thirds'],
  ['6 columns', '50%', 'Half'],
  ['4 columns', '33.33%', 'Third'],
  ['3 columns', '25%', 'Quarter'],
];

function createVisualColumns(count) {
  return Array.from({ length: count }, (_, index) => `<span class="grid-col-chip">${index + 1}</span>`).join('');
}

function rem(px) {
  return (px / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
}

export function createGridColumns({ breakpoint = 'mobile' } = {}) {
  const config = breakpointConfig[breakpoint];
  return `
    <section class="grid-page">
      <p class="grid-mode-note">
        Breakpoint: ${config.label} (${config.width}) | Visual columns: ${config.columns} | Architecture: 12 columns
      </p>
      <article class="grid-card">
        <h3>Visual grid</h3>
        <p>The architectural model remains 12 columns while presentation changes by breakpoint.</p>
        <div class="grid-preview" style="--grid-preview-columns: ${config.columns};">
          ${createVisualColumns(config.columns)}
        </div>
      </article>
    </section>
  `;
}

export function createGridBreakpoints() {
  const rows = Object.values(breakpointConfig)
    .map((entry) => `<tr><td>${entry.label}</td><td>${entry.width}</td><td>${entry.columns}</td></tr>`)
    .join('');

  return `
    <section class="grid-page">
      <article class="grid-card">
        <h3>Breakpoints</h3>
        <table class="grid-table">
          <thead>
            <tr><th>Breakpoint</th><th>Width</th><th>Columns</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </article>
      <article class="grid-card">
        <h3>Core grid tokens</h3>
        <table class="grid-table">
          <thead>
            <tr><th>Token</th><th>px source</th><th>rem computed</th></tr>
          </thead>
          <tbody>
            <tr><td>--grid-gutter</td><td>16px</td><td>${rem(16)}rem</td></tr>
            <tr><td>--layout-wide-max-width</td><td>1312px</td><td>${rem(1312)}rem</td></tr>
            <tr><td>--layout-golden-wide-max-width</td><td>813.44px</td><td>${rem(813.44)}rem</td></tr>
            <tr><td>--breakpoint-tablet</td><td>768px</td><td>${rem(768)}rem</td></tr>
            <tr><td>--breakpoint-widescreen</td><td>1280px</td><td>${rem(1280)}rem</td></tr>
          </tbody>
        </table>
      </article>
    </section>
  `;
}

export function createGridWrappingDemo({ breakpoint = 'mobile' } = {}) {
  const visualColumns = breakpointConfig[breakpoint].columns;
  const spans = {
    mobile: [4, 4, 4],
    tablet: [4, 4, 4],
    widescreen: [4, 4, 4],
  }[breakpoint];

  const items = spans
    .map(
      (span, index) => `
      <div class="grid-layout-item" style="grid-column: span ${Math.min(span, visualColumns)};">
        Item ${index + 1}<br />
        <small>4-column architecture unit</small>
      </div>
    `,
    )
    .join('');

  return `
    <section class="grid-page">
      <p class="grid-mode-note">
        Breakpoint: ${breakpointConfig[breakpoint].label} | Visual columns: ${visualColumns}
      </p>
      <article class="grid-card">
        <h3>Wrapping behavior (4 + 4 + 4 architecture)</h3>
        <p>Widescreen shows all three in one row. Tablet wraps the third item. Mobile stacks all items.</p>
        <div class="grid-layout-demo" style="--grid-preview-columns: ${visualColumns};">
          ${items}
        </div>
      </article>
    </section>
  `;
}

export function createGridPatterns() {
  const patternBlocks = layoutPatterns
    .map(
      (pattern) => `
      <article class="grid-card">
        <h3>${pattern.label}</h3>
        <p>${pattern.description}</p>
        <div class="grid-pattern-row">
          ${pattern.spans
            .map(
              (span) => `
            <div class="grid-pattern-item" style="grid-column: span ${span};">
              ${span}/12
            </div>
          `,
            )
            .join('')}
        </div>
      </article>
    `,
    )
    .join('');

  const spanRows = spanReference
    .map(([token, percent, use]) => `<tr><td>${token}</td><td>${percent}</td><td>${use}</td></tr>`)
    .join('');

  return `
    <section class="grid-page">
      ${patternBlocks}
      <article class="grid-card">
        <h3>Common column spans</h3>
        <table class="grid-table">
          <thead>
            <tr><th>Architecture span</th><th>Width</th><th>Common usage</th></tr>
          </thead>
          <tbody>${spanRows}</tbody>
        </table>
      </article>
    </section>
  `;
}
