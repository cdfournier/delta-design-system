import figureImage from '../cards/assets/cards-figure.jpg';
import './tabs.css';

const figmaTabSampleImage = 'https://www.figma.com/api/mcp/asset/a2f65bb9-d627-4e4f-bead-f772810a858c';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function createTabButton({
  label = 'Label',
  selected = false,
  style = 'primary',
  state,
  tabId,
  panelId,
} = {}) {
  const selectedClass = selected ? ' dds-tab-button--selected' : '';
  const styleClass = style === 'secondary' ? ' dds-tab-button--secondary' : ' dds-tab-button--primary';
  const stateAttr = state ? ` data-state="${escapeHtml(state)}"` : '';
  const idAttr = tabId ? ` id="${escapeHtml(tabId)}"` : '';
  const controlsAttr = panelId ? ` aria-controls="${escapeHtml(panelId)}"` : '';

  return `
    <button class="dds-tab-button${selectedClass}${styleClass}"
      role="tab"
      type="button"
      aria-selected="${selected ? 'true' : 'false'}"
      tabindex="${selected ? '0' : '-1'}"${idAttr}${controlsAttr}${stateAttr}
    >
      <span class="dds-tab-button__label">${escapeHtml(label)}</span>
    </button>
  `;
}

function createTabPanel({
  heading = 'Heading',
  body = 'Body',
  selected = false,
  panelId,
  tabId,
  panelOrientation = 'vertical',
  withFigure = true,
  figureSrc,
  figureAlt = '',
  footer,
} = {}) {
  const idAttr = panelId ? ` id="${escapeHtml(panelId)}"` : '';
  const labelledByAttr = tabId ? ` aria-labelledby="${escapeHtml(tabId)}"` : '';
  const hiddenAttr = selected ? '' : ' hidden';
  const orientationClass = panelOrientation === 'horizontal'
    ? ' dds-tab-panel--horizontal'
    : ' dds-tab-panel--vertical';

  return `
    <section class="dds-tab-panel${orientationClass}" role="tabpanel"${idAttr}${labelledByAttr}${hiddenAttr}>
      ${withFigure ? `
        <figure class="dds-tab-panel__figure">
          <img src="${figureSrc || figureImage}" alt="${escapeHtml(figureAlt)}" />
        </figure>
      ` : ''}
      <div class="dds-tab-panel__content">
        <h3>${escapeHtml(heading)}</h3>
        <p>${escapeHtml(body)}</p>
        ${footer ? `
          <div class="dds-tab-panel__footer">
            <p class="dds-tab-panel__fine">${escapeHtml(footer.prefix || '')}<a href="${escapeHtml(footer.href || '#')}" target="_blank" rel="noreferrer">${escapeHtml(footer.linkLabel || '')}</a></p>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

/**
 * @param {{
 * direction?: 'horizontal'|'vertical';
 * style?: 'primary'|'secondary';
 * selectedIndex?: number;
 * labels?: string[];
 * panelOrientation?: 'vertical'|'horizontal';
 * withFigure?: boolean;
 * panelHeading?: string;
 * panelBody?: string;
 * panelFooter?: {prefix?: string; linkLabel?: string; href?: string}|null;
 * figureSrc?: string;
 * figureAlt?: string;
 * ariaLabel?: string;
 * className?: string;
 * }} args
 */
export function createTabs({
  direction = 'horizontal',
  style = 'primary',
  selectedIndex = 0,
  labels = ['Overview', 'Details', 'Specs'],
  panelOrientation,
  withFigure = true,
  panelHeading = 'Heading',
  panelBody = 'Body',
  panelFooter = null,
  figureSrc,
  figureAlt = '',
  ariaLabel = 'Content sections',
  className = '',
} = {}) {
  const resolvedDirection = direction === 'vertical' ? 'vertical' : 'horizontal';
  const resolvedPanelOrientation = panelOrientation
    || (resolvedDirection === 'vertical' ? 'horizontal' : 'vertical');

  const safeSelected = Math.max(0, Math.min(selectedIndex, labels.length - 1));
  const tabsetId = `tabs-${Math.random().toString(36).slice(2, 9)}`;

  const tabButtons = labels
    .map((label, index) => createTabButton({
      label,
      selected: index === safeSelected,
      style,
      tabId: `${tabsetId}-tab-${index + 1}`,
      panelId: `${tabsetId}-panel-${index + 1}`,
    }))
    .join('');

  const tabPanels = labels
    .map((label, index) => createTabPanel({
      heading: index === 0 ? panelHeading : `${label} heading`,
      body: index === 0 ? panelBody : `${label} body content.`,
      selected: index === safeSelected,
      panelId: `${tabsetId}-panel-${index + 1}`,
      tabId: `${tabsetId}-tab-${index + 1}`,
      panelOrientation: resolvedPanelOrientation,
      withFigure,
      figureSrc,
      figureAlt,
      footer: index === 0 ? panelFooter : null,
    }))
    .join('');

  return `
    <section class="dds-tabs ${className}" data-direction="${resolvedDirection}">
      <div class="dds-tablist" role="tablist" aria-label="${escapeHtml(ariaLabel)}" aria-orientation="${resolvedDirection}">
        ${tabButtons}
      </div>
      <div class="dds-tabpanels">
        ${tabPanels}
      </div>
    </section>
  `;
}

function figureShell(content) {
  return `<section class="dds-tabs-fig"><div class="dds-tabs-fig__card">${content}</div></section>`;
}

export function createTabsAnatomyFigure() {
  return figureShell(`
    <div class="dds-tabs-fig__assembled-row dds-tabs-fig__assembled-row--single" aria-label="Assembled horizontal tabs sample">
      ${createTabs({
    direction: 'horizontal',
    style: 'primary',
    selectedIndex: 0,
    labels: ['Intro', 'One', 'Two', 'Three', 'Four'],
    panelOrientation: 'horizontal',
    withFigure: true,
    figureSrc: figmaTabSampleImage,
    figureAlt: '',
    panelHeading: 'The Bull by Pablo Picasso – A Lesson in Abstraction',
    panelBody: 'Pablo Picasso’s The Bull is a series of eleven lithographs created in 1945. It depicts the bull at various stages of abstraction, starting with a fairly realistic depiction and ending with nothing but a few lines.',
    panelFooter: {
      prefix: 'by ',
      linkLabel: 'Dan Scott',
      href: 'https://drawpaintacademy.com/the-bull/',
    },
    ariaLabel: 'Horizontal sample',
    className: 'dds-tabs--sample-desktop',
  })}
    </div>
  `);
}

export function createTabsVariantsFigure() {
  return figureShell(`
    <div class="dds-tabs-fig__variants-grid">
      <div>
        <h4>Horizontal</h4>
        ${createTabs({ direction: 'horizontal', style: 'primary', selectedIndex: 0, withFigure: true, ariaLabel: 'Horizontal tabs' })}
      </div>
      <div>
        <h4>Vertical</h4>
        ${createTabs({ direction: 'vertical', style: 'secondary', selectedIndex: 0, withFigure: true, ariaLabel: 'Vertical tabs' })}
      </div>
    </div>
  `);
}

export function createTabsStatesFigure() {
  return figureShell(`
    <div class="dds-tabs-fig__state-grid">
      ${createTabs({ direction: 'horizontal', style: 'primary', selectedIndex: 0, withFigure: true, ariaLabel: 'Default state sample' })}
      ${createTabs({ direction: 'horizontal', style: 'secondary', selectedIndex: 1, withFigure: true, ariaLabel: 'Selected state sample' })}
    </div>
  `);
}

export function createTabsBestPracticesFigure() {
  return `
    <div class="dds-tabs-doc__do-dont-grid">
      <section class="dds-tabs-doc__do">
        <h4>Do</h4>
        <p><strong>Keep labels scannable</strong></p>
        <p>Use short, descriptive labels that clearly indicate panel content.</p>
        <p><strong>Default to relevant content</strong></p>
        <p>Select the most useful tab for first render.</p>
        <p><strong>Support full keyboard navigation</strong></p>
        <p>Implement roving tabindex with arrow, Home, and End key support.</p>
        <p><strong>Use consistent style in a tablist</strong></p>
        <p>Keep all tabs in a list primary or all secondary.</p>
      </section>

      <section class="dds-tabs-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't overload tab count</strong></p>
        <p>Avoid more than 7–8 tabs in a single list.</p>
        <p><strong>Don't hide critical content</strong></p>
        <p>Core information should be immediately visible without switching tabs.</p>
        <p><strong>Don't use tabs for sequential flows</strong></p>
        <p>Use stepper or wizard patterns for step-by-step tasks.</p>
        <p><strong>Don't use generic labels</strong></p>
        <p>Avoid labels like “Tab 1” or “More”.</p>
      </section>
    </div>
  `;
}
