import './typography.css';

const scaleRows = [
  ['h1 title font-size', 'h1-title/font-size', 50, 80],
  ['h1 title line-height', 'h1-title/line-height', 56, 100],
  ['h1 title + p font-size', 'h1-title+p/font-size', 16, 32],
  ['h1 title + p line-height', 'h1-title+p/line-height', 28, 56],
  ['h1 font-size', 'h1/font-size', 50, 72],
  ['h1 line-height', 'h1/line-height', 56, 90],
  ['h2 font-size', 'h2/font-size', 38, 60],
  ['h2 line-height', 'h2/line-height', 42, 74],
  ['h3 font-size', 'h3/font-size', 28, 50],
  ['h3 line-height', 'h3/line-height', 32, 62],
  ['h4 font-size', 'h4/font-size', 24, 42],
  ['h4 line-height', 'h4/line-height', 30, 52],
  ['h5 font-size', 'h5/font-size', 20, 32],
  ['h5 line-height', 'h5/line-height', 26, 40],
  ['p font-size', 'p/font-size', 16, 24],
  ['p line-height', 'p/line-height', 24, 56],
  ['list font-size', 'list/font-size', 16, 24],
  ['list line-height', 'list/line-height', 20, 34],
  ['small font-size', 'small/font-size', 12, 20],
  ['small line-height', 'small/line-height', 20, 30],
  ['fine font-size', 'fine/font-size', 10, 16],
  ['fine line-height', 'fine/line-height', 18, 24],
];

const fontFamilies = [
  {
    label: 'Ovo — Headlines',
    sampleClass: 'dds-typography-fig__sample--ovo',
    sampleHtml: '<p class="dds-typography-fig__font-line">The quick brown fox jumps over the lazy dog</p>',
    details: ['Font: Ovo (serif)', 'Weight: Regular (400)', 'Use: All headings (h1-h5)'],
  },
  {
    label: 'Montserrat — Body & Interface',
    sampleClass: 'dds-typography-fig__sample--montserrat',
    sampleHtml: `
      <p class="dds-typography-fig__font-line dds-typography-fig__font-line--regular">The quick brown fox jumps over the lazy dog - Regular</p>
      <p class="dds-typography-fig__font-line dds-typography-fig__font-line--bold">The quick brown fox jumps over the lazy dog - Bold</p>
    `,
    details: ['Font: Montserrat (sans-serif)', 'Weights: Regular (400), Bold (700)', 'Use: Body copy, lists, interface elements, all components'],
  },
];

const specimens = [
  {
    label: 'H1 Title',
    sampleHtml: '<div class="dds-typography-role dds-typography-role--h1-title">The quick brown fox</div>',
    detail: 'Ovo Regular · Mobile: 50px / 56px lh · Widescreen: 80px / 100px lh',
  },
  {
    label: 'H1 Title + P',
    sampleHtml: `
      <div class="dds-typography-role dds-typography-role--h1-title">The quick brown fox</div>
      <p class="dds-typography-role dds-typography-role--h1-title-plus-p">The first paragraph after an h1 title receives special styling with increased font size for emphasis and improved visual hierarchy.</p>
    `,
    detail: 'Montserrat Regular · Mobile: 16px / 28px lh · Widescreen: 32px / 56px lh',
  },
  {
    label: 'H1',
    sampleHtml: '<div class="dds-typography-role dds-typography-role--h1">The quick brown fox</div>',
    detail: 'Ovo Regular · Mobile: 50px / 56px lh · Widescreen: 72px / 90px lh',
  },
  {
    label: 'H2',
    sampleHtml: '<div class="dds-typography-role dds-typography-role--h2">The quick brown fox</div>',
    detail: 'Ovo Regular · Mobile: 38px / 42px lh · Widescreen: 60px / 74px lh',
  },
  {
    label: 'H3',
    sampleHtml: '<div class="dds-typography-role dds-typography-role--h3">The quick brown fox</div>',
    detail: 'Ovo Regular · Mobile: 28px / 32px lh · Widescreen: 50px / 62px lh',
  },
  {
    label: 'H4',
    sampleHtml: '<div class="dds-typography-role dds-typography-role--h4">The quick brown fox</div>',
    detail: 'Ovo Regular · Mobile: 24px / 30px lh · Widescreen: 42px / 52px lh',
  },
  {
    label: 'H5',
    sampleHtml: '<div class="dds-typography-role dds-typography-role--h5">The quick brown fox</div>',
    detail: 'Ovo Regular · Mobile: 20px / 26px lh · Widescreen: 32px / 40px lh',
  },
  {
    label: 'Body (p)',
    sampleHtml: '<p class="dds-typography-role dds-typography-role--body">Typography expresses hierarchy and enables improved consumption of content.</p>',
    detail: 'Montserrat Regular · Mobile: 16px / 24px lh · Widescreen: 24px / 56px lh',
  },
  {
    label: 'List',
    sampleHtml: '<ul class="dds-typography-role dds-typography-role--list"><li>The quick brown fox jumps over the lazy dog</li><li>Typography expresses hierarchy and enables improved consumption of content</li><li>Good typography helps content fulfill its purpose</li></ul>',
    detail: 'Montserrat Regular · Mobile: 16px / 20px lh · Widescreen: 24px / 34px lh',
  },
  {
    label: 'Small',
    sampleHtml: '<p class="dds-typography-role dds-typography-role--small">The quick brown fox jumps over the lazy dog. Typography expresses hierarchy and enables improved consumption of content.</p>',
    detail: 'Montserrat Regular · Mobile: 12px / 20px lh · Widescreen: 20px / 30px lh',
  },
  {
    label: 'Fine',
    sampleHtml: '<p class="dds-typography-role dds-typography-role--fine">The quick brown fox jumps over the lazy dog. Typography expresses hierarchy and enables improved consumption of content.</p>',
    detail: 'Montserrat Regular · Mobile: 10px / 18px lh · Widescreen: 16px / 24px lh',
  },
];

const htmlSnippet = `<!-- Standard headings -->
<h1>Page title</h1>
<h2>Section heading</h2>
<h3>Subsection heading</h3>
<h4>Sub-subsection heading</h4>
<h5>Minor heading</h5>

<!-- Hero title variant -->
<h1 class="title">Hero Headline</h1>
<p>This paragraph gets automatic large styling.</p>

<!-- Body copy -->
<p>Primary content text.</p>

<!-- Secondary and tertiary text -->
<p class="small">Caption or helper text.</p>
<p class="fine">Legal or micro-copy text.</p>

<!-- Heading with anchor link -->
<h2 id="about-section" class="heading-link">
  <span>About Us</span>
  <button class="heading-link-icon"
          aria-label="Copy link to About Us section"
          data-clipboard-text="https://example.com/page#about-section">
    <svg aria-hidden="true"><!-- link icon SVG --></svg>
  </button>
</h2>`;

const cssSnippet = `/* Base font size */
html {
  font-size: 16px;
}

/* Headings - Ovo */
h1 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 3.125rem; /* 50px */
  line-height: 3.5rem; /* 56px */
}

h1.title {
  font-size: 3.125rem; /* 50px */
  line-height: 3.5rem; /* 56px */
}

h1.title + p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem; /* 16px */
  line-height: 1.75rem; /* 28px */
}

h2 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 2.375rem; /* 38px */
  line-height: 2.625rem; /* 42px */
}

h3 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 1.75rem; /* 28px */
  line-height: 2rem; /* 32px */
}

h4 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 1.5rem; /* 24px */
  line-height: 1.875rem; /* 30px */
}

h5 {
  font-family: 'Ovo', Georgia, serif;
  font-size: 1.25rem; /* 20px */
  line-height: 1.625rem; /* 26px */
}

/* Body - Montserrat */
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
}

.small {
  font-size: 0.75rem; /* 12px */
  line-height: 1.25rem; /* 20px */
}

.fine {
  font-size: 0.625rem; /* 10px */
  line-height: 1.125rem; /* 18px */
}

/* Heading link pattern */
.heading-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.heading-link-icon {
  opacity: 0;
  transition: opacity 0.2s ease;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 1em;
  height: 1em;
}

.heading-link:hover .heading-link-icon {
  opacity: 1;
}

.heading-link:hover {
  color: var(--color-primary);
}

/* Widescreen - 80rem / 1280px */
@media (min-width: 80rem) {
  h1 {
    font-size: 4.5rem; /* 72px */
    line-height: 5.625rem; /* 90px */
  }

  h1.title {
    font-size: 5rem; /* 80px */
    line-height: 6.25rem; /* 100px */
  }

  h1.title + p {
    font-size: 2rem; /* 32px */
    line-height: 3.5rem; /* 56px */
  }

  h2 {
    font-size: 3.75rem; /* 60px */
    line-height: 4.625rem; /* 74px */
  }

  h3 {
    font-size: 3.125rem; /* 50px */
    line-height: 3.875rem; /* 62px */
  }

  h4 {
    font-size: 2.625rem; /* 42px */
    line-height: 3.25rem; /* 52px */
  }

  h5 {
    font-size: 2rem; /* 32px */
    line-height: 2.5rem; /* 40px */
  }

  p {
    font-size: 1.5rem; /* 24px */
    line-height: 3.5rem; /* 56px */
  }

  .small {
    font-size: 1.25rem; /* 20px */
    line-height: 1.875rem; /* 30px */
  }

  .fine {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }
}`;

const jsSnippet = `/* Heading link - copy anchor URL to clipboard */
document.querySelectorAll('.heading-link-icon').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const url = button.dataset.clipboardText;
    try {
      await navigator.clipboard.writeText(url);
      showToast('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  });
});`;

const tokenSnippet = `/* Headings */
--h1-title/font-size     Mobile: 3.125rem / 50px   ->   Widescreen: 5rem / 80px
--h1-title/line-height   Mobile: 3.5rem / 56px     ->   Widescreen: 6.25rem / 100px
--h1-title+p/font-size   Mobile: 1rem / 16px       ->   Widescreen: 2rem / 32px
--h1-title+p/line-height Mobile: 1.75rem / 28px    ->   Widescreen: 3.5rem / 56px
--h1/font-size           Mobile: 3.125rem / 50px   ->   Widescreen: 4.5rem / 72px
--h1/line-height         Mobile: 3.5rem / 56px     ->   Widescreen: 5.625rem / 90px
--h2/font-size           Mobile: 2.375rem / 38px   ->   Widescreen: 3.75rem / 60px
--h2/line-height         Mobile: 2.625rem / 42px   ->   Widescreen: 4.625rem / 74px
--h3/font-size           Mobile: 1.75rem / 28px    ->   Widescreen: 3.125rem / 50px
--h3/line-height         Mobile: 2rem / 32px       ->   Widescreen: 3.875rem / 62px
--h4/font-size           Mobile: 1.5rem / 24px     ->   Widescreen: 2.625rem / 42px
--h4/line-height         Mobile: 1.875rem / 30px   ->   Widescreen: 3.25rem / 52px
--h5/font-size           Mobile: 1.25rem / 20px    ->   Widescreen: 2rem / 32px
--h5/line-height         Mobile: 1.625rem / 26px   ->   Widescreen: 2.5rem / 40px

/* Body and UI */
--p/font-size            Mobile: 1rem / 16px       ->   Widescreen: 1.5rem / 24px
--p/line-height          Mobile: 1.5rem / 24px     ->   Widescreen: 3.5rem / 56px
--list/font-size         Mobile: 1rem / 16px       ->   Widescreen: 1.5rem / 24px
--list/line-height       Mobile: 1.25rem / 20px    ->   Widescreen: 2.125rem / 34px
--small/font-size        Mobile: 0.75rem / 12px    ->   Widescreen: 1.25rem / 20px
--small/line-height      Mobile: 1.25rem / 20px    ->   Widescreen: 1.875rem / 30px
--fine/font-size         Mobile: 0.625rem / 10px   ->   Widescreen: 1rem / 16px
--fine/line-height       Mobile: 1.125rem / 18px   ->   Widescreen: 1.5rem / 24px`;

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function remPx(px) {
  const rem = (px / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
  return `${rem}rem / ${px}px`;
}

function figureShell(content, attrs = '') {
  return `<section class="dds-typography-fig" ${attrs}>${content}</section>`;
}

function typeScaleTable() {
  return `
    <div class="dds-typography-fig__table-wrap">
      <table class="dds-typography-fig__table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          ${scaleRows
            .map(
              ([label, token, mobilePx, widescreenPx]) => `
                <tr>
                  <td>${label}</td>
                  <td><code>${token}</code></td>
                  <td>${remPx(mobilePx)}</td>
                  <td>${remPx(widescreenPx)}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function fontFamilyCards() {
  return `
    <div class="dds-typography-fig__cards">
      ${fontFamilies
        .map(
          (item) => `
            <article class="dds-typography-fig__card">
              <div class="dds-typography-fig__card-label">${item.label}</div>
              <div class="dds-typography-fig__sample ${item.sampleClass}">${item.sampleHtml}</div>
              <div class="dds-typography-fig__meta">${item.details.join(' · ')}</div>
            </article>
          `,
        )
        .join('')}
    </div>
  `;
}

function specimenCards(typeMode) {
  const modeAttr = typeMode ? ` data-type-mode="${typeMode}"` : '';
  return `
    <div class="dds-typography-fig__cards dds-typography-fig__cards--specimens"${modeAttr}>
      ${specimens
        .map(
          (item) => `
            <article class="dds-typography-fig__card">
              <div class="dds-typography-fig__card-label">${item.label}</div>
              <div class="dds-typography-fig__specimen">${item.sampleHtml}</div>
              <div class="dds-typography-fig__meta">${item.detail}</div>
            </article>
          `,
        )
        .join('')}
    </div>
  `;
}

export function createTypographyScaleFigure() {
  return figureShell(
    `<p class="dds-typography-fig__intro">All values in rem / px format. Token names reference the Figma variable collection. Mobile/Tablet values apply from 0-1279px; widescreen values apply from 1280px (80rem) and above.</p>${typeScaleTable()}`,
  );
}

export function createTypographyFontFamiliesFigure() {
  return figureShell(fontFamilyCards());
}

export function createTypographySizeSpecificationsFigure({ typeMode } = {}) {
  const attrs = typeMode ? `data-type-mode="${typeMode}"` : '';
  return figureShell(specimenCards(typeMode), attrs);
}

export function createTypographyReferenceFigure({ typeMode = 'mobile' } = {}) {
  return figureShell(`
    <section class="dds-typography-fig__section">
      <h3>Font families</h3>
      ${fontFamilyCards()}
    </section>
    <section class="dds-typography-fig__section">
      <h3>Size specifications</h3>
      <p class="dds-typography-fig__intro">Specimens below show ${typeMode} sizes. Typography scales at the 80rem (1280px) breakpoint.</p>
      ${specimenCards(typeMode)}
    </section>
  `);
}

export function createTypographyModesFigure() {
  const compareRoles = [
    ['H1 title', 'dds-typography-role--h1-title', 'The quick brown fox'],
    ['H2', 'dds-typography-role--h2', 'The quick brown fox'],
    ['Body (p)', 'dds-typography-role--body', 'Typography expresses hierarchy and enables improved consumption of content.'],
    ['Small', 'dds-typography-role--small', 'Secondary helper content'],
  ];

  return figureShell(`
    <div class="dds-typography-fig__modes-grid">
      ${['mobile', 'widescreen']
        .map(
          (mode) => `
            <article class="dds-typography-fig__mode-card" data-type-mode="${mode}">
              <h3>${mode === 'mobile' ? 'Mobile / Tablet' : 'Widescreen'} mode</h3>
              <p class="dds-typography-fig__mode-tag">data-type-mode=\"${mode}\"</p>
              <div class="dds-typography-fig__mode-panel">
                ${compareRoles
                  .map(
                    ([label, cls, text]) => `
                      <div class="dds-typography-fig__mode-row">
                        <div class="dds-typography-fig__card-label">${label}</div>
                        <div class="dds-typography-role ${cls}">${text}</div>
                      </div>
                    `,
                  )
                  .join('')}
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  `);
}

export function createTypographyBestPracticesFigure() {
  return figureShell(`
    <div class="dds-typography-fig__do-dont-grid">
      <section class="dds-typography-fig__do">
        <h4 class="dds-typography-fig__column-title">Do</h4>
        <p><strong>Follow heading hierarchy</strong></p>
        <p>Use h1 through h5 in order without skipping levels.</p>
        <p><strong>Use rem units in code</strong></p>
        <p>Implement type sizes using rem so text scales when users change browser base font size.</p>
        <p><strong>Use semantic markup for meaning</strong></p>
        <p>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for meaning, not only visual styling.</p>
        <p><strong>Keep line length in range</strong></p>
        <p>Maintain 45-75 characters per line for body copy.</p>
      </section>
      <section class="dds-typography-fig__dont">
        <h4 class="dds-typography-fig__column-title">Don't</h4>
        <p><strong>Don't skip heading levels</strong></p>
        <p>Jumping from h2 to h4 breaks document structure and assistive navigation.</p>
        <p><strong>Don't use headings for visual sizing</strong></p>
        <p>Choose heading tags for meaning; use CSS classes for size-only changes.</p>
        <p><strong>Don't override line heights arbitrarily</strong></p>
        <p>System line heights are tuned for readability and rhythm.</p>
        <p><strong>Don't use fine text for body copy</strong></p>
        <p>Fine text is reserved for tertiary content and micro-copy.</p>
      </section>
    </div>
  `);
}

export function createTypographyHtmlCodeReferenceFigure() {
  return figureShell(`
    <section class="dds-typography-fig__section">
      <pre><code>${esc(htmlSnippet)}</code></pre>
    </section>
  `);
}

export function createTypographyCssCodeReferenceFigure() {
  return figureShell(`
    <section class="dds-typography-fig__section">
      <pre><code>${esc(cssSnippet)}</code></pre>
    </section>
  `);
}

export function createTypographyJsCodeReferenceFigure() {
  return figureShell(`
    <section class="dds-typography-fig__section">
      <pre><code>${esc(jsSnippet)}</code></pre>
    </section>
  `);
}

export function createTypographyTokenCodeReferenceFigure() {
  return figureShell(`
    <section class="dds-typography-fig__section">
      <pre><code>${esc(tokenSnippet)}</code></pre>
    </section>
  `);
}

export function createTypographyCodeReferenceFigure() {
  return figureShell(`
    <section class="dds-typography-fig__section">
      <h3>HTML</h3>
      <pre><code>${esc(htmlSnippet)}</code></pre>
      <h3>CSS</h3>
      <pre><code>${esc(cssSnippet)}</code></pre>
      <h3>JavaScript</h3>
      <pre><code>${esc(jsSnippet)}</code></pre>
      <h3>Design tokens reference</h3>
      <pre><code>${esc(tokenSnippet)}</code></pre>
    </section>
  `);
}

export { htmlSnippet, cssSnippet, jsSnippet, tokenSnippet };
