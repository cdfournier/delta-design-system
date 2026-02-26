import './grid.css';

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function figureShell(content) {
  return `<section class="dds-grid-fig">${content}</section>`;
}

const gridCssSnippet = `/* 12-column grid architecture */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem; /* 16px */
}

/* Column span utilities */
.col-span-3  { grid-column: span 3; }   /* 25% - quarter */
.col-span-4  { grid-column: span 4; }   /* 33.33% - third */
.col-span-6  { grid-column: span 6; }   /* 50% - half */
.col-span-8  { grid-column: span 8; }   /* 66.67% - two-thirds */
.col-span-12 { grid-column: span 12; }  /* 100% - full width */

/* Responsive utilities */
@media (min-width: 48rem) {
  .tablet\\:col-span-8 { grid-column: span 8; }
}

@media (min-width: 80rem) {
  .widescreen\\:col-span-12 { grid-column: span 12; }
}`;

const gridTokenSnippet = `/* Grid tokens */
--grid-columns-mobile:     4         /* Presentation layer */
--grid-columns-tablet:     8         /* Presentation layer */
--grid-columns-widescreen: 12        /* Presentation layer - also architecture layer */
--grid-gutter:             1rem / 16px (md)

/* Breakpoints (use rem in all media queries) */
--breakpoint-tablet:       48rem  / 768px
--breakpoint-widescreen:   80rem  / 1280px

/* Spacing token used for gutter */
md    Mobile/Tablet: 0.5rem / 8px   ->   Widescreen: 1rem / 16px`;

function breakpointsTable() {
  const rows = [
    ['Mobile', '0-767px', '4', 'Default (no query)', false],
    ['Tablet', '768-1279px', '8', '@media (min-width: 48rem)', true],
    ['Widescreen', '1280px+', '12', '@media (min-width: 80rem)', true],
  ];

  return `
    <div class="dds-grid-fig__table-wrap">
      <table class="dds-grid-fig__table">
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Range</th>
            <th>Columns</th>
            <th>Media query</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ([name, range, columns, query, isCode]) => `
                <tr>
                  <td>${esc(name)}</td>
                  <td>${esc(range)}</td>
                  <td>${esc(columns)}</td>
                  <td>${isCode ? `<code>${esc(query)}</code>` : esc(query)}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

export function createGridBreakpointsTableFigure() {
  return figureShell(breakpointsTable());
}

function visualGridSample({ columns = 4 } = {}) {
  return `
    <div class="dds-grid-fig__sample">
      <div class="dds-grid-fig__sample-grid dds-grid-fig__sample-grid--${columns}">
        ${Array.from({ length: columns })
          .map(
            (_, index) => `
              <span class="dds-grid-fig__sample-col" aria-hidden="true">${index + 1}</span>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

export function createGridVisualSampleFigure({ columns = 4 } = {}) {
  return figureShell(visualGridSample({ columns }));
}

function columnSpanningTable() {
  const rows = [
    ['12 columns', '100%', 'Full-width content, headers, banners'],
    ['8 columns', '66.67%', 'Main content area in sidebar layouts'],
    ['6 columns', '50%', 'Equal halves, side-by-side content'],
    ['4 columns', '33.33%', 'Three-up cards or panels'],
    ['3 columns', '25%', 'Four-up cards, narrow sidebars'],
  ];

  return `
    <div class="dds-grid-fig__table-wrap">
      <table class="dds-grid-fig__table">
        <thead>
          <tr>
            <th>Span</th>
            <th>Proportion</th>
            <th>Common use</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ([span, proportion, commonUse]) => `
                <tr>
                  <td>${esc(span)}</td>
                  <td>${esc(proportion)}</td>
                  <td>${esc(commonUse)}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

export function createGridColumnSpanningTableFigure() {
  return figureShell(columnSpanningTable());
}

function layoutPatternSample({ spans = [], labels = [], items = [] } = {}) {
  const normalizedItems =
    items.length > 0
      ? items
      : spans.map((span, index) => ({
          span,
          label: labels[index] || `${span} columns`,
        }));

  const markup = normalizedItems
    .map((item) => {
      const style = item.column
        ? `grid-column: ${item.column};`
        : `grid-column: span ${item.span};`;
      const label = item.label || (item.span ? `${item.span} columns` : '');
      return `
        <div class="dds-grid-fig__pattern-item" style="${style}">
          ${esc(label)}
        </div>
      `;
    })
    .join('');

  return `
    <div class="dds-grid-fig__sample">
      <div class="dds-grid-fig__sample-grid dds-grid-fig__sample-grid--12">
        ${markup}
      </div>
    </div>
  `;
}

export function createGridLayoutPatternFigure({ spans = [], labels = [], items = [] } = {}) {
  return figureShell(layoutPatternSample({ spans, labels, items }));
}

function bestPracticesGrid() {
  return `
    <div class="dds-grid-fig__do-dont-grid">
      <section class="dds-grid-fig__do">
        <p><strong>Do</strong></p>
        <p><strong>Use the grid consistently</strong></p>
        <p>Align content to the 12-column architecture to maintain visual consistency across your layouts.</p>
        <p><strong>Design mobile-first</strong></p>
        <p>Start with mobile constraints to optimize content and architecture before enhancing for larger viewports.</p>
        <p><strong>Maintain standard gutter widths</strong></p>
        <p>Use consistent <code>1rem / 16px</code> gutters between columns to preserve the integrity of the grid.</p>
        <p><strong>Center narrow content</strong></p>
        <p>Use fewer columns and center the content area for better readability when text or content doesn't need full width.</p>
      </section>
      <section class="dds-grid-fig__dont">
        <p><strong>Don't</strong></p>
        <p><strong>Ignore breakpoints</strong></p>
        <p>Failing to plan for mobile and tablet creates poor experiences on those devices.</p>
        <p><strong>Eliminate gutters</strong></p>
        <p>Removing gutters creates cramped, difficult-to-read layouts with no breathing room between content.</p>
        <p><strong>Break reading order</strong></p>
        <p>Visual reordering that doesn't match DOM order harms accessibility for keyboard and screen reader users.</p>
        <p><strong>Create overly complex grids</strong></p>
        <p>Simple, predictable layouts are easier to implement, maintain, and more intuitive for users to navigate.</p>
      </section>
    </div>
  `;
}

export function createGridBestPracticesFigure() {
  return figureShell(bestPracticesGrid());
}

function codeFigure(code) {
  return `
    <section class="dds-grid-fig__section">
      <pre><code>${esc(code)}</code></pre>
    </section>
  `;
}

export function createGridCssCodeFigure() {
  return figureShell(codeFigure(gridCssSnippet));
}

export function createGridTokenCodeFigure() {
  return figureShell(codeFigure(gridTokenSnippet));
}
