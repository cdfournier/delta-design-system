import './tab.css';

const TAB_PANEL_IMAGE = 'https://www.figma.com/api/mcp/asset/0959bc14-c6bd-4f09-b7b6-bc0eb2dfd88c';
let tabsEventsBound = false;
let tabsInstanceCounter = 0;

function activateTab(root, nextIndex) {
  if (!root) {
    return;
  }

  const buttons = Array.from(root.querySelectorAll('.dds-tabs__button[role="tab"]'));
  const panels = Array.from(root.querySelectorAll('.dds-tabs__panel[role="tabpanel"]'));
  const bounded = Math.max(0, Math.min(nextIndex, buttons.length - 1));

  buttons.forEach((button, index) => {
    const selected = index === bounded;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-selected', String(selected));
    button.setAttribute('tabindex', selected ? '0' : '-1');
  });

  panels.forEach((panel, index) => {
    const selected = index === bounded;
    panel.hidden = !selected;
    panel.setAttribute('aria-hidden', String(!selected));
  });
}

function bindTabsEvents() {
  if (tabsEventsBound || typeof document === 'undefined') {
    return;
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.dds-tabs__button[role="tab"]');
    if (!button) {
      return;
    }

    const root = button.closest('.dds-tabs[data-interactive="true"]');
    if (!root) {
      return;
    }

    const index = Number(button.dataset.index) || 0;
    activateTab(root, index);
  });

  document.addEventListener('keydown', (event) => {
    const button = event.target.closest('.dds-tabs__button[role="tab"]');
    if (!button) {
      return;
    }

    const root = button.closest('.dds-tabs[data-interactive="true"]');
    if (!root) {
      return;
    }

    const list = button.closest('[role="tablist"]');
    const isVertical = list?.getAttribute('aria-orientation') === 'vertical';
    const key = event.key;
    const isNext = (!isVertical && key === 'ArrowRight') || (isVertical && key === 'ArrowDown');
    const isPrev = (!isVertical && key === 'ArrowLeft') || (isVertical && key === 'ArrowUp');

    if (!(isNext || isPrev || key === 'Home' || key === 'End')) {
      return;
    }

    event.preventDefault();

    const buttons = Array.from(root.querySelectorAll('.dds-tabs__button[role="tab"]'));
    const current = buttons.indexOf(button);
    let target = current;

    if (key === 'Home') {
      target = 0;
    } else if (key === 'End') {
      target = buttons.length - 1;
    } else if (isNext) {
      target = (current + 1) % buttons.length;
    } else if (isPrev) {
      target = (current - 1 + buttons.length) % buttons.length;
    }

    buttons[target]?.focus();
    activateTab(root, target);
  });

  tabsEventsBound = true;
}

function breakpointWrap(content, sizeMode = 'auto') {
  if (sizeMode === 'auto') {
    return content;
  }

  return `<div data-breakpoint-mode="${sizeMode}">${content}</div>`;
}

function normalizeLabels(labels) {
  if (Array.isArray(labels) && labels.length > 0) {
    return labels;
  }

  if (typeof labels === 'string' && labels.trim()) {
    return labels
      .split('\n')
      .map((label) => label.trim())
      .filter(Boolean);
  }

  return ['Label', 'Label', 'Label'];
}

function createTabButton({
  label,
  index,
  selected,
  style = 'primary',
  panelId,
  tabId,
} = {}) {
  const selectedClass = selected ? 'is-selected' : '';
  const buttonClass = `dds-tabs__button ${selectedClass}`.trim();

  return `
    <button
      class="${buttonClass}"
      type="button"
      role="tab"
      id="${tabId}"
      data-index="${index}"
      data-style="${style}"
      aria-selected="${selected}"
      aria-controls="${panelId}"
      tabindex="${selected ? '0' : '-1'}"
    >
      <span class="dds-tabs__button-label">${label}</span>
    </button>
  `;
}

function createTablist({ labels, activeIndex = 0, style = 'primary', direction = 'horizontal', interactive = true, idBase = 'tab' } = {}) {
  return `
    <div class="dds-tabs__tablist dds-tabs__tablist--${direction}" role="tablist" aria-orientation="${direction}">
      ${labels
        .map((label, index) =>
          createTabButton({
            label,
            index,
            selected: index === activeIndex,
            style,
            panelId: `${idBase}-panel-${index}`,
            tabId: `${idBase}-tab-${index}`,
          }),
        )
        .join('')}
    </div>
  `;
}

function createTabPanel({
  heading = 'Heading',
  body = 'Body',
  orientation = 'vertical',
  figure = true,
  panelId,
  tabId,
  selected = true,
} = {}) {
  return `
    <section
      class="dds-tabs__panel dds-tabs__panel--${orientation}"
      role="tabpanel"
      id="${panelId}"
      aria-labelledby="${tabId}"
      aria-hidden="${!selected}"
      ${selected ? '' : 'hidden'}
    >
      ${
        figure
          ? `
        <figure class="dds-tabs__figure">
          <img class="dds-tabs__image" src="${TAB_PANEL_IMAGE}" alt="" loading="lazy" />
        </figure>
      `
          : ''
      }
      <div class="dds-tabs__content">
        <h3 class="dds-tabs__heading">${heading}</h3>
        <p class="dds-tabs__body">${body}</p>
      </div>
    </section>
  `;
}

/**
 * @param {{
 *  direction?: 'horizontal'|'vertical';
 *  tabStyle?: 'primary'|'secondary';
 *  panelOrientation?: 'vertical'|'horizontal';
 *  panelFigure?: boolean;
 *  labels?: string[]|string;
 *  activeIndex?: number;
 *  heading?: string;
 *  body?: string;
 *  interactive?: boolean;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createTabs({
  direction = 'horizontal',
  tabStyle = 'primary',
  panelOrientation = 'vertical',
  panelFigure = true,
  labels = ['Overview', 'Details', 'Specs'],
  activeIndex = 0,
  heading = 'Heading',
  body = 'Body',
  interactive = true,
  sizeMode = 'auto',
} = {}) {
  const normalizedLabels = normalizeLabels(labels);
  const boundedIndex = Math.max(0, Math.min(Number(activeIndex) || 0, normalizedLabels.length - 1));
  tabsInstanceCounter += 1;
  const idBase = `tabs-${direction}-${panelOrientation}-${tabStyle}-${tabsInstanceCounter}`;
  bindTabsEvents();

  return breakpointWrap(
    `
      <div class="dds-tabs dds-tabs--${direction} dds-tabs--panel-${panelOrientation}" data-interactive="${interactive}">
        ${createTablist({
          labels: normalizedLabels,
          activeIndex: boundedIndex,
          style: tabStyle,
          direction: direction === 'vertical' ? 'vertical' : 'horizontal',
          interactive,
          idBase,
        })}
        <div class="dds-tabs__panels dds-tabs__panels--${direction}">
          ${normalizedLabels
            .map((label, index) =>
              createTabPanel({
                heading,
                body,
                orientation: panelOrientation,
                figure: panelFigure,
                panelId: `${idBase}-panel-${index}`,
                tabId: `${idBase}-tab-${index}`,
                selected: index === boundedIndex,
              }),
            )
            .join('')}
        </div>
      </div>
    `,
    sizeMode,
  );
}

export function createTabButtonGroupShowcase() {
  return `
    <div class="dds-tabs-showcase__button-row">
      ${createTabButton({ label: 'Label', index: 0, selected: false, style: 'primary', panelId: 'x-1', tabId: 'x-1', interactive: false })}
      ${createTabButton({ label: 'Label', index: 1, selected: true, style: 'primary', panelId: 'x-2', tabId: 'x-2', interactive: false })}
      ${createTabButton({ label: 'Label', index: 2, selected: false, style: 'primary', panelId: 'x-3', tabId: 'x-3', interactive: false })}
      ${createTabButton({ label: 'Label', index: 3, selected: true, style: 'secondary', panelId: 'x-4', tabId: 'x-4', interactive: false })}
    </div>
  `;
}

export function createTablistShowcase() {
  return `
    <div class="dds-tabs-showcase__list-row">
      ${createTablist({ labels: ['Label', 'Label', 'Label'], activeIndex: 0, style: 'primary', direction: 'horizontal', interactive: false, idBase: 'list-h' })}
      ${createTablist({ labels: ['Label', 'Label', 'Label'], activeIndex: 0, style: 'primary', direction: 'vertical', interactive: false, idBase: 'list-v' })}
    </div>
  `;
}

export function createTabPanelShowcase() {
  return `
    <div class="dds-tabs-showcase__panel-grid">
      ${createTabPanel({ panelId: 'panel-v-figure', tabId: 'tab-v-figure', selected: true, orientation: 'vertical', figure: true })}
      ${createTabPanel({ panelId: 'panel-h-figure', tabId: 'tab-h-figure', selected: true, orientation: 'horizontal', figure: true })}
      ${createTabPanel({ panelId: 'panel-v-content', tabId: 'tab-v-content', selected: true, orientation: 'vertical', figure: false })}
      ${createTabPanel({ panelId: 'panel-h-content', tabId: 'tab-h-content', selected: true, orientation: 'horizontal', figure: false })}
    </div>
  `;
}

export function createTabsShowcase() {
  return `
    <div class="dds-tabs-showcase">
      ${createTabs({ direction: 'horizontal', tabStyle: 'primary', panelOrientation: 'vertical', panelFigure: true, interactive: false })}
      ${createTabs({ direction: 'vertical', tabStyle: 'primary', panelOrientation: 'horizontal', panelFigure: true, interactive: false })}
      ${createTabs({ direction: 'horizontal', tabStyle: 'secondary', panelOrientation: 'vertical', panelFigure: false, interactive: false })}
    </div>
  `;
}
