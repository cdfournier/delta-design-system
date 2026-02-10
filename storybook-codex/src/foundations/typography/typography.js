import './typography.css';

const rows = [
  ['h1 title', 'typography-h1-title-font-size', 'typography-h1-title-line-height'],
  ['h1 title + p', 'typography-h1-title-plus-p-font-size', 'typography-h1-title-plus-p-line-height'],
  ['h1', 'typography-h1-font-size', 'typography-h1-line-height'],
  ['h2', 'typography-h2-font-size', 'typography-h2-line-height'],
  ['h3', 'typography-h3-font-size', 'typography-h3-line-height'],
  ['h4', 'typography-h4-font-size', 'typography-h4-line-height'],
  ['h5', 'typography-h5-font-size', 'typography-h5-line-height'],
  ['body', 'typography-body-font-size', 'typography-body-line-height'],
  ['list', 'typography-list-font-size', 'typography-list-line-height'],
  ['small', 'typography-small-font-size', 'typography-small-line-height'],
  ['fine', 'typography-fine-font-size', 'typography-fine-line-height'],
];

const pxMap = {
  mobile: {
    'typography-h1-title-font-size': 50,
    'typography-h1-title-line-height': 56,
    'typography-h1-title-plus-p-font-size': 16,
    'typography-h1-title-plus-p-line-height': 28,
    'typography-h1-font-size': 50,
    'typography-h1-line-height': 56,
    'typography-h2-font-size': 38,
    'typography-h2-line-height': 42,
    'typography-h3-font-size': 28,
    'typography-h3-line-height': 32,
    'typography-h4-font-size': 24,
    'typography-h4-line-height': 30,
    'typography-h5-font-size': 20,
    'typography-h5-line-height': 26,
    'typography-body-font-size': 16,
    'typography-body-line-height': 24,
    'typography-list-font-size': 16,
    'typography-list-line-height': 20,
    'typography-small-font-size': 12,
    'typography-small-line-height': 20,
    'typography-fine-font-size': 10,
    'typography-fine-line-height': 18,
  },
  widescreen: {
    'typography-h1-title-font-size': 80,
    'typography-h1-title-line-height': 100,
    'typography-h1-title-plus-p-font-size': 32,
    'typography-h1-title-plus-p-line-height': 56,
    'typography-h1-font-size': 72,
    'typography-h1-line-height': 90,
    'typography-h2-font-size': 60,
    'typography-h2-line-height': 74,
    'typography-h3-font-size': 50,
    'typography-h3-line-height': 62,
    'typography-h4-font-size': 42,
    'typography-h4-line-height': 52,
    'typography-h5-font-size': 32,
    'typography-h5-line-height': 40,
    'typography-body-font-size': 24,
    'typography-body-line-height': 36,
    'typography-list-font-size': 24,
    'typography-list-line-height': 30,
    'typography-small-font-size': 20,
    'typography-small-line-height': 30,
    'typography-fine-font-size': 16,
    'typography-fine-line-height': 24,
  },
};

function tableRows(mode) {
  return rows
    .map(([label, sizeToken, lineToken]) => {
      const sizePx = pxMap[mode][sizeToken];
      const linePx = pxMap[mode][lineToken];
      return `<tr><td>${label}</td><td>${sizePx}px</td><td>${linePx}px</td><td>${(sizePx / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '')}rem</td></tr>`;
    })
    .join('');
}

export function createTypographyScale({ typeMode = 'mobile' } = {}) {
  return `
    <div class="typography-page" data-type-mode="${typeMode}">
      <p class="typography-intro">Typography expresses hierarchy and enables improved consumption of content. This preview uses tokenized type values in rem (with px source values).</p>
      <p class="type-mode-note">Type mode: ${typeMode}</p>
      <table class="type-scale-table">
        <thead>
          <tr><th>Element</th><th>Font size (px)</th><th>Line height (px)</th><th>Font size (rem)</th></tr>
        </thead>
        <tbody>
          ${tableRows(typeMode)}
        </tbody>
      </table>
    </div>
  `;
}

export function createTypographySpecimens({ typeMode = 'mobile' } = {}) {
  return `
    <div class="typography-page" data-type-mode="${typeMode}">
      <p class="type-mode-note">Type mode: ${typeMode}</p>
      <section class="type-grid">
        <article class="type-card">
          <p class="type-card-label">h1 title</p>
          <h1 class="t-h1-title">The quick brown fox</h1>
          <p class="type-card-meta">Ovo / var(--typography-h1-title-font-size)</p>
        </article>
        <article class="type-card">
          <p class="type-card-label">h1 title + p</p>
          <h1 class="t-h1-title">The quick brown fox</h1>
          <p class="t-h1-title-plus-p">The first paragraph after a title can be emphasized for visual hierarchy.</p>
        </article>
        <article class="type-card"><p class="type-card-label">h1</p><h1 class="t-h1">The quick brown fox</h1></article>
        <article class="type-card"><p class="type-card-label">h2</p><h2 class="t-h2">The quick brown fox</h2></article>
        <article class="type-card"><p class="type-card-label">h3</p><h3 class="t-h3">The quick brown fox</h3></article>
        <article class="type-card"><p class="type-card-label">h4</p><h4 class="t-h4">The quick brown fox</h4></article>
        <article class="type-card"><p class="type-card-label">h5</p><h5 class="t-h5">The quick brown fox</h5></article>
        <article class="type-card"><p class="type-card-label">body</p><p class="t-body">Typography expresses hierarchy and enables improved consumption of content.</p></article>
        <article class="type-card"><p class="type-card-label">list</p><ul class="t-list"><li>Readable list content</li><li>Consistent rhythm and spacing</li></ul></article>
        <article class="type-card"><p class="type-card-label">small</p><p class="t-small">Secondary helper content</p></article>
        <article class="type-card"><p class="type-card-label">fine</p><p class="t-fine">Tertiary micro-copy</p></article>
      </section>
    </div>
  `;
}
