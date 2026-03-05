import './spacing.css';

const spacingScale = {
  mobile: [
    ['xs', 2],
    ['sm', 4],
    ['md', 8],
    ['lg', 12],
    ['xl', 16],
    ['xxl', 24],
    ['xxxl', 32],
  ],
  widescreen: [
    ['xs', 4],
    ['sm', 8],
    ['md', 16],
    ['lg', 24],
    ['xl', 32],
    ['xxl', 48],
    ['xxxl', 64],
  ],
};

const radiusScale = {
  mobile: [
    ['xs', 2],
    ['sm', 4],
    ['md', 8],
    ['lg', 16],
    ['xl', 24],
    ['xxl', 32],
    ['round', 100, true],
  ],
  widescreen: [
    ['xs', 4],
    ['sm', 8],
    ['md', 16],
    ['lg', 32],
    ['xl', 48],
    ['xxl', 64],
    ['round', 100, true],
  ],
};

const spacingCssSnippet = `/* Usage examples */
.card {
  padding: var(--spacing-xl);         /* 1rem / 16px mobile, 2rem / 32px widescreen */
  margin-bottom: var(--spacing-xxxl); /* 2rem / 32px mobile, 4rem / 64px widescreen */
  border-radius: var(--border-radius-md);
}

.button-group {
  display: flex;
  gap: var(--spacing-sm); /* 0.25rem / 4px mobile, 0.5rem / 8px widescreen */
}

.form-field + .form-field {
  margin-top: var(--spacing-lg); /* 0.75rem / 12px mobile, 1.5rem / 24px widescreen */
}`;

const spacingTokenSnippet = `/* Spacing tokens */
--spacing-xs     Mobile: 0.125rem / 2px   ->   Widescreen: 0.25rem / 4px
--spacing-sm     Mobile: 0.25rem / 4px    ->   Widescreen: 0.5rem / 8px
--spacing-md     Mobile: 0.5rem / 8px     ->   Widescreen: 1rem / 16px
--spacing-lg     Mobile: 0.75rem / 12px   ->   Widescreen: 1.5rem / 24px
--spacing-xl     Mobile: 1rem / 16px      ->   Widescreen: 2rem / 32px
--spacing-xxl    Mobile: 1.5rem / 24px    ->   Widescreen: 3rem / 48px
--spacing-xxxl   Mobile: 2rem / 32px      ->   Widescreen: 4rem / 64px

/* Border-radius tokens */
--border-radius-xs     Mobile: 0.125rem / 2px    ->   Widescreen: 0.25rem / 4px
--border-radius-sm     Mobile: 0.25rem / 4px     ->   Widescreen: 0.5rem / 8px
--border-radius-md     Mobile: 0.5rem / 8px      ->   Widescreen: 1rem / 16px
--border-radius-lg     Mobile: 1rem / 16px       ->   Widescreen: 2rem / 32px
--border-radius-xl     Mobile: 1.5rem / 24px     ->   Widescreen: 3rem / 48px
--border-radius-xxl    Mobile: 2rem / 32px       ->   Widescreen: 4rem / 64px
--border-radius-round  Fixed: 6.25rem / 100px    ->   Fixed: 6.25rem / 100px`;

function remPx(px) {
  const rem = (px / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
  return `${rem}rem / ${px}px`;
}

function scaleSpecimen(mode = 'mobile') {
  const rows = spacingScale[mode] || spacingScale.mobile;
  return `
    <div class="dds-spacing-fig__specimen">
      ${rows
        .map(
          ([token, px]) => `
            <div class="dds-spacing-fig__row">
              <span class="dds-spacing-fig__label">${token}</span>
              <span class="dds-spacing-fig__bar-wrap" aria-hidden="true">
                <span class="dds-spacing-fig__bar" style="width:${px}px"></span>
              </span>
              <span class="dds-spacing-fig__value">${remPx(px)}</span>
            </div>
          `,
        )
        .join('')}
    </div>
  `;
}

function figureShell(content) {
  return `<section class="dds-spacing-fig">${content}</section>`;
}

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function radiusSpecimen(mode = 'mobile') {
  const rows = radiusScale[mode] || radiusScale.mobile;
  return `
    <div class="dds-spacing-fig__radius-grid">
      ${rows
        .map(
          ([token, px, fixed]) => `
            <div class="dds-spacing-fig__radius-item">
              <span class="dds-spacing-fig__radius-box" style="border-radius:${px}px" aria-hidden="true"></span>
              <span class="dds-spacing-fig__radius-label">${token} - ${fixed ? `${px}px (fixed)` : `${px}px`}</span>
            </div>
          `,
        )
        .join('')}
    </div>
  `;
}

function spacingReferenceTable() {
  return `
    <div class="dds-spacing-fig__table-wrap">
      <table class="dds-spacing-fig__table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          ${spacingScale.mobile
            .map(([token, mobilePx]) => {
              const widescreenPx = (spacingScale.widescreen.find(([key]) => key === token) || [null, mobilePx])[1];
              return `
                <tr>
                  <td><code>${token}</code></td>
                  <td>${remPx(mobilePx)}</td>
                  <td>${remPx(widescreenPx)}</td>
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function borderRadiusReferenceTable() {
  return `
    <div class="dds-spacing-fig__table-wrap">
      <table class="dds-spacing-fig__table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          ${radiusScale.mobile
            .map(([token, mobilePx, mobileFixed]) => {
              const widescreenEntry = radiusScale.widescreen.find(([key]) => key === token) || [null, mobilePx, mobileFixed];
              const [, widescreenPx, widescreenFixed] = widescreenEntry;
              const tokenName = `border-radius/${token}`;
              const mobileValue = mobileFixed ? `${remPx(mobilePx)} (fixed)` : remPx(mobilePx);
              const widescreenValue = widescreenFixed ? `${remPx(widescreenPx)} (fixed)` : remPx(widescreenPx);
              return `
                <tr>
                  <td><code>${tokenName}</code></td>
                  <td>${mobileValue}</td>
                  <td>${widescreenValue}</td>
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function bestPracticesGrid() {
  return `
    <div class="dds-spacing-fig__do-dont-grid">
      <section class="dds-spacing-fig__do">
        <p><strong>Do</strong></p>
        <p><strong>Use spacing tokens</strong></p>
        <p>Reference tokens like <code>--spacing-xl</code> instead of arbitrary pixel values. Tokens ensure spacing scales automatically at the widescreen breakpoint.</p>
        <p><strong>Let spacing scale responsively</strong></p>
        <p>Trust the system to handle responsive spacing adjustments. Tokens update automatically at <code>80rem</code> without any additional media query work.</p>
        <p><strong>Match spacing to content relationships</strong></p>
        <p>Use tighter spacing for related elements, looser spacing for distinct sections. Proximity communicates grouping.</p>
        <p><strong>Scale spacing with element size</strong></p>
        <p>Larger elements typically need proportionally larger spacing around them to maintain visual balance.</p>
      </section>
      <section class="dds-spacing-fig__dont">
        <p><strong>Don't</strong></p>
        <p><strong>Don't use arbitrary values</strong></p>
        <p>Avoid one-off spacing like 13px or 27px. If you need something between two steps, use the closer token and do not invent a new value.</p>
        <p><strong>Don't override responsive scaling</strong></p>
        <p>Avoid hardcoding px values in component styles. This prevents spacing from adjusting at the widescreen breakpoint.</p>
        <p><strong>Don't skip steps in the scale</strong></p>
        <p>If you need spacing between <code>md</code> and <code>xl</code>, use <code>lg</code>. The scale exists to prevent gaps in the token hierarchy.</p>
        <p><strong>Don't rely on spacing alone for structure</strong></p>
        <p>Use visual elements like borders and background colors together with spacing to create clear, robust separations between sections.</p>
      </section>
    </div>
  `;
}

function codeFigure(code) {
  return `
    <section class="dds-spacing-fig__section">
      <pre><code>${esc(code)}</code></pre>
    </section>
  `;
}

export function createSpacingScaleFigure({ mode = 'mobile' } = {}) {
  return figureShell(scaleSpecimen(mode));
}

export function createSpacingReferenceTableFigure() {
  return figureShell(spacingReferenceTable());
}

export function createBorderRadiusScaleFigure({ mode = 'mobile' } = {}) {
  return figureShell(radiusSpecimen(mode));
}

export function createBorderRadiusReferenceTableFigure() {
  return figureShell(borderRadiusReferenceTable());
}

export function createSpacingBestPracticesFigure() {
  return figureShell(bestPracticesGrid());
}

export function createSpacingCssCodeFigure() {
  return figureShell(codeFigure(spacingCssSnippet));
}

export function createSpacingTokenCodeFigure() {
  return figureShell(codeFigure(spacingTokenSnippet));
}

export { spacingCssSnippet, spacingTokenSnippet };
