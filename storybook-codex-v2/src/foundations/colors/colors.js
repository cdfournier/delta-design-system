import './colors.css';

const colorGroups = [
  {
    key: 'brand',
    title: 'Brand colors',
    items: [
      { name: 'Primary', token: 'brand/primary', cssVar: '--brand-primary', value: '#FF5247' },
      { name: 'Primary dark', token: 'brand/primary-dark', cssVar: '--brand-primary-dark', value: '#B22E28' },
      { name: 'Secondary', token: 'brand/secondary', cssVar: '--brand-secondary', value: '#003442' },
      { name: 'Secondary dark', token: 'brand/secondary-dark', cssVar: '--brand-secondary-dark', value: '#01232D' },
    ],
  },
  {
    key: 'global',
    title: 'Global colors',
    items: [
      { name: 'Black', token: 'global/black', cssVar: '--global-black', value: '#000000' },
      { name: 'White', token: 'global/white', cssVar: '--global-white', value: '#FFFFFF' },
      { name: 'Gray dark', token: 'global/gray-dark', cssVar: '--global-gray-dark', value: '#919191' },
      { name: 'Gray medium', token: 'global/gray-medium', cssVar: '--global-gray-medium', value: '#CCCCCC' },
      { name: 'Gray light', token: 'global/gray-light', cssVar: '--global-gray-light', value: '#EEEEEE' },
    ],
  },
  {
    key: 'status',
    title: 'Status colors',
    items: [
      { name: 'Disabled', token: 'status/disabled', cssVar: '--status-disabled', value: '#808080' },
      { name: 'Invalid', token: 'status/invalid', cssVar: '--status-invalid', value: '#C00C00' },
      { name: 'Valid', token: 'status/valid', cssVar: '--status-valid', value: '#007000' },
      { name: 'Read-only', token: 'status/read-only', cssVar: '--status-read-only', value: '#333333' },
    ],
  },
  {
    key: 'overlay',
    title: 'Overlay colors',
    items: [
      { name: 'Dark overlay', token: 'overlay/dark', cssVar: '--overlay-dark', value: '#00000080', alpha: true, note: '#000000 at 50% opacity' },
      { name: 'Light overlay', token: 'overlay/light', cssVar: '--overlay-light', value: '#00000040', alpha: true, note: '#000000 at 25% opacity' },
    ],
  },
];

const semanticRows = [
  ['background/page', '#FFFFFF (global/white)', '#01232D (brand/secondary-dark)'],
  ['background/section', '#EEEEEE (global/gray-light)', '#003442 (brand/secondary)'],
  ['text/default', '#000000 (global/black)', '#FFFFFF (global/white)'],
  ['text/link', '#FF5247 (brand/primary)', '#FFFFFF (global/white)'],
  ['text/hover', '#003442 (brand/secondary)', '#FF5247 (brand/primary)'],
];

const lightContrastRows = [
  ['Primary', '#FF5247', 'White', '3.52:1', 'AA (large text, UI)'],
  ['Secondary', '#003442', 'White', '11.58:1', 'AAA'],
  ['Black', '#000000', 'White', '21:1', 'AAA'],
  ['Gray dark', '#919191', 'White', '3.94:1', 'AA (large text)'],
  ['Disabled', '#808080', 'White', '4.54:1', 'AA'],
  ['Invalid', '#C00C00', 'White', '6.51:1', 'AA'],
  ['Valid', '#007000', 'White', '5.25:1', 'AA'],
  ['Read-only', '#333333', 'White', '12.63:1', 'AAA'],
];

const darkContrastRows = [
  ['White', '#FFFFFF', 'Secondary-dark (#01232D)', '17.38:1', 'AAA'],
  ['Primary', '#FF5247', 'Secondary-dark (#01232D)', '5.02:1', 'AA'],
  ['Gray dark', '#919191', 'Secondary-dark (#01232D)', '7.27:1', 'AAA'],
  ['White', '#FFFFFF', 'Secondary (#003442)', '11.58:1', 'AAA'],
  ['Primary', '#FF5247', 'Secondary (#003442)', '3.35:1', 'AA (large text, UI)'],
  ['Gray dark', '#919191', 'Secondary (#003442)', '4.84:1', 'AA'],
  ['Disabled', '#808080', 'Secondary-dark (#01232D)', '3.83:1', 'AA (large text)'],
  ['Invalid', '#C00C00', 'Secondary-dark (#01232D)', '4.49:1', 'AA'],
  ['Valid', '#007000', 'Secondary-dark (#01232D)', '3.53:1', 'AA (large text, UI)'],
  ['Read-only', '#333333', 'Secondary-dark (#01232D)', '8.73:1', 'AAA'],
];

const resources = [
  ['WebAIM Contrast Checker', 'https://webaim.org/resources/contrastchecker/', 'Test color contrast ratios for WCAG compliance'],
  ['WCAG 2.1: Understanding Contrast (Minimum)', 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html', 'Official WCAG guidelines for color contrast'],
  ['WCAG 2.1: Use of Color', 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html', 'Guidelines for conveying information with color'],
  ['Accessible Colors', 'https://accessible-colors.com/', 'Tool for finding accessible color combinations'],
  ['Interaction Design Foundation: Color Theory', 'https://www.interaction-design.org/literature/topics/color-theory', 'Fundamentals of color in design'],
];

const cssReferenceSnippet = `/* Primitive color tokens */
:root {
  --global-black: #000000;
  --global-white: #FFFFFF;
  --global-gray-dark: #919191;
  --global-gray-medium: #CCCCCC;
  --global-gray-light: #EEEEEE;
  --brand-primary: #FF5247;
  --brand-primary-dark: #B22E28;
  --brand-secondary: #003442;
  --brand-secondary-dark: #01232D;
  --status-disabled: #808080;
  --status-invalid: #C00C00;
  --status-valid: #007000;
  --status-read-only: #333333;
  --overlay-dark: rgba(0, 0, 0, 0.5);
  --overlay-light: rgba(0, 0, 0, 0.25);

  /* Semantic tokens (light mode default) */
  --background-page: var(--global-white);
  --background-section: var(--global-gray-light);
  --text-default: var(--global-black);
  --text-link: var(--brand-primary);
  --text-hover: var(--brand-secondary);
}

[data-color-mode='dark'] {
  --background-page: var(--brand-secondary-dark);
  --background-section: var(--brand-secondary);
  --text-default: var(--global-white);
  --text-link: var(--global-white);
  --text-hover: var(--brand-primary);
}`;

const tokenReferenceSnippet = `/* Brand (mode-invariant) */
brand/primary          #FF5247
brand/primary-dark     #B22E28
brand/secondary        #003442
brand/secondary-dark   #01232D

/* Global (mode-invariant) */
global/black           #000000
global/white           #FFFFFF
global/gray-dark       #919191
global/gray-medium     #CCCCCC
global/gray-light      #EEEEEE

/* Status (mode-invariant) */
status/disabled        #808080
status/invalid         #C00C00
status/valid           #007000
status/read-only       #333333

/* Overlay (mode-invariant) */
overlay/dark           #000000 at 50%
overlay/light          #000000 at 25%

/* Semantic (resolves by mode) */
background/page        light: global/white        dark: brand/secondary-dark
background/section     light: global/gray-light   dark: brand/secondary
text/default           light: global/black        dark: global/white
text/link              light: brand/primary       dark: global/white
text/hover             light: brand/secondary     dark: brand/primary`;

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function swatchRow(item) {
  return `
    <div class="dds-colors-doc__swatch-row" data-alpha="${item.alpha ? 'true' : 'false'}">
      <div class="dds-colors-doc__swatch-box" aria-hidden="true">
        <div class="dds-colors-doc__swatch-fill" style="background: var(${item.cssVar});"></div>
      </div>
      <div class="dds-colors-doc__swatch-meta">
        <p class="dds-colors-doc__swatch-name">${item.name}</p>
        <p><strong>${item.note ? 'Value' : 'Hex'}:</strong> <code>${item.note ? item.note : item.value}</code></p>
        <p><strong>Token:</strong> <code>${item.token}</code></p>
      </div>
    </div>
  `;
}

function swatchSection(group) {
  return `
    <section class="dds-colors-doc__section" aria-labelledby="dds-colors-${group.key}">
      <h3 id="dds-colors-${group.key}">${group.title}</h3>
      ${swatchList(group)}
    </section>
  `;
}

function swatchList(group) {
  return `
    <div class="dds-colors-doc__swatch-list">
      ${group.items.map(swatchRow).join('')}
    </div>
  `;
}

function getColorGroup(key) {
  return colorGroups.find((group) => group.key === key);
}

function table(headers, rows) {
  return `
    <div class="dds-colors-doc__table-wrap">
      <table class="dds-colors-doc__table">
        <thead>
          <tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows
            .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function referenceTableSection(title, copy, headers, rows) {
  return `
    <section class="dds-colors-doc__section">
      <h3>${title}</h3>
      ${copy ? `<p>${copy}</p>` : ''}
      ${table(headers, rows)}
    </section>
  `;
}

function docShell(title, intro, body) {
  return `
    <article class="dds-colors-doc">
      <header class="dds-colors-doc__header">
        <h2>${title}</h2>
        ${intro ? `<p>${intro}</p>` : ''}
      </header>
      ${body}
    </article>
  `;
}

function figureShell(body) {
  return `<section class="dds-colors-doc">${body}</section>`;
}

export function createColorsScale({ group = 'all' } = {}) {
  if (group !== 'all') {
    return createColorGroupFigure(group);
  }
  return figureShell(colorGroups.map(swatchSection).join(''));
}

function createColorGroupFigure(groupKey) {
  const group = getColorGroup(groupKey);
  if (!group) {
    return figureShell('');
  }
  return figureShell(swatchList(group));
}

export function createBrandColorsFigure() {
  return createColorGroupFigure('brand');
}

export function createGlobalColorsFigure() {
  return createColorGroupFigure('global');
}

export function createStatusColorsFigure() {
  return createColorGroupFigure('status');
}

export function createOverlayColorsFigure() {
  return createColorGroupFigure('overlay');
}

export function createColorsReference() {
  return figureShell(`
    <section class="dds-colors-doc__section">
      <h3>Color modes</h3>
      ${table(
        ['Token', 'Light mode', 'Dark mode'],
        semanticRows.map(([token, light, dark]) => [`<code>${token}</code>`, light, dark]),
      )}
    </section>
  `);
}

export function createColorModesTableFigure() {
  return figureShell(
    table(
      ['Token', 'Light mode', 'Dark mode'],
      semanticRows.map(([token, light, dark]) => [`<code>${token}</code>`, light, dark]),
    ),
  );
}

export function createLightContrastTableFigure() {
  return figureShell(
    table(
      ['Color', 'Hex', 'Background', 'Ratio', 'Level'],
      lightContrastRows,
    ),
  );
}

export function createDarkContrastTableFigure() {
  return figureShell(
    table(
      ['Color', 'Hex', 'Background', 'Ratio', 'Level'],
      darkContrastRows,
    ),
  );
}

export function createColorsAccessibilityFigure() {
  return figureShell(`
    ${referenceTableSection(
      'Light mode contrast ratios',
      '',
      ['Color', 'Hex', 'Background', 'Ratio', 'Level'],
      lightContrastRows,
    )}
    ${referenceTableSection(
      'Dark mode contrast ratios',
      '',
      ['Color', 'Hex', 'Background', 'Ratio', 'Level'],
      darkContrastRows,
    )}
  `);
}

export function createColorsModes() {
  return figureShell(`
    <section class="dds-colors-doc__section">
      <div class="dds-colors-doc__modes-grid">
        <article class="dds-colors-doc__mode-card" data-mode="light">
          <h3>Light mode</h3>
          <div class="dds-colors-doc__mode-panel" style="--background-page: var(--global-white); --background-section: var(--global-gray-light); --text-default: var(--global-black); --text-link: var(--brand-primary); --text-hover: var(--brand-secondary);">
            <section class="dds-colors-doc__mode-surface">
              <h4>Page + section</h4>
              <p>Semantic surfaces and text update through variable resolution.</p>
              <p><a href="#" onclick="return false;">Sample link</a></p>
            </section>
            <ul class="dds-colors-doc__mode-token-list">
              ${semanticRows
                .map(([token, light]) => `<li><code>${token}</code> <span>${light}</span></li>`)
                .join('')}
            </ul>
          </div>
        </article>
        <article class="dds-colors-doc__mode-card" data-mode="dark">
          <h3>Dark mode</h3>
          <div class="dds-colors-doc__mode-panel" style="--background-page: var(--brand-secondary-dark); --background-section: var(--brand-secondary); --text-default: var(--global-white); --text-link: var(--global-white); --text-hover: var(--brand-primary);">
            <section class="dds-colors-doc__mode-surface">
              <h4>Page + section</h4>
              <p>Same structure, different mode-resolved values.</p>
              <p><a href="#" onclick="return false;">Sample link</a></p>
            </section>
            <ul class="dds-colors-doc__mode-token-list">
              ${semanticRows
                .map(([token, _light, dark]) => `<li><code>${token}</code> <span>${dark}</span></li>`)
                .join('')}
            </ul>
          </div>
        </article>
      </div>
    </section>
  `);
}

export function createColorsCodeReferenceFigure() {
  return figureShell(`
    <section class="dds-colors-doc__section">
      <h3>Code reference</h3>
      <h4>CSS</h4>
      <pre><code>${esc(cssReferenceSnippet)}</code></pre>
      <h4>Design tokens reference</h4>
      <pre><code>${esc(tokenReferenceSnippet)}</code></pre>
    </section>
  `);
}

export function createColorsCssCodeFigure() {
  return figureShell(`<pre><code>${esc(cssReferenceSnippet)}</code></pre>`);
}

export function createColorsTokenReferenceCodeFigure() {
  return figureShell(`<pre><code>${esc(tokenReferenceSnippet)}</code></pre>`);
}

export function createColorsBestPracticesFigure() {
  return figureShell(`
    <section class="dds-colors-doc__section">
      <h3>Best practices</h3>
      <div class="dds-colors-doc__do-dont-grid">
        <section class="dds-colors-doc__do" aria-labelledby="dds-colors-do-title">
          <h4 id="dds-colors-do-title">Do</h4>
          <p><strong>Use semantic tokens</strong></p>
          <p>Reference <code>text/default</code> instead of <code>global/black</code> to preserve mode behavior.</p>
          <p><strong>Maintain consistent contrast</strong></p>
          <p>Verify text contrast against each background in both light and dark modes.</p>
          <p><strong>Use status colors appropriately</strong></p>
          <p>Use <code>status/invalid</code> for invalid states, not <code>brand/primary</code>.</p>
          <p><strong>Pair color with other indicators</strong></p>
          <p>Combine status color with iconography, labels, or patterns.</p>
        </section>
        <section class="dds-colors-doc__dont" aria-labelledby="dds-colors-dont-title">
          <h4 id="dds-colors-dont-title">Don't</h4>
          <p><strong>Don't use hex values directly</strong></p>
          <p>Use design tokens so mode switching and consistency remain intact.</p>
          <p><strong>Don't rely on color alone</strong></p>
          <p>Pair color changes with text or iconography.</p>
          <p><strong>Don't use brand colors for status</strong></p>
          <p>Keep brand colors separate from functional status colors.</p>
          <p><strong>Don't override contrast requirements</strong></p>
          <p>Never reduce contrast below WCAG minimums.</p>
        </section>
      </div>
    </section>
  `);
}

export function createColorsBestPracticesGridFigure() {
  return figureShell(`
    <div class="dds-colors-doc__do-dont-grid">
      <section class="dds-colors-doc__do" aria-label="Do">
        <p><strong>Do</strong></p>
        <p><strong>Use semantic tokens</strong></p>
        <p>Reference <code>text/default</code> instead of <code>global/black</code> to preserve mode behavior.</p>
        <p><strong>Maintain consistent contrast</strong></p>
        <p>Verify text contrast against each background in both light and dark modes.</p>
        <p><strong>Use status colors appropriately</strong></p>
        <p>Use <code>status/invalid</code> for invalid states, not <code>brand/primary</code>.</p>
        <p><strong>Pair color with other indicators</strong></p>
        <p>Combine status color with iconography, labels, or patterns.</p>
      </section>
      <section class="dds-colors-doc__dont" aria-label="Don't">
        <p><strong>Don't</strong></p>
        <p><strong>Don't use hex values directly</strong></p>
        <p>Use design tokens so mode switching and consistency remain intact.</p>
        <p><strong>Don't rely on color alone</strong></p>
        <p>Pair color changes with text or iconography.</p>
        <p><strong>Don't use brand colors for status</strong></p>
        <p>Keep brand colors separate from functional status colors.</p>
        <p><strong>Don't override contrast requirements</strong></p>
        <p>Never reduce contrast below WCAG minimums.</p>
      </section>
    </div>
  `);
}

export { cssReferenceSnippet, tokenReferenceSnippet, resources };
