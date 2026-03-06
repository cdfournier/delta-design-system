import './buttons.css';

function figureShell(content) {
  return `<section class="dds-buttons-fig">${content}</section>`;
}

function iconDot() {
  return '<span class="dds-button__icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" fill="currentColor" /></svg></span>';
}

function iconPlus() {
  return '<span class="dds-button__icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></span>';
}

function iconSearch() {
  return '<span class="dds-button__icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.5" /><path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg></span>';
}

export function createButtonsAnatomyFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__card">
      <div class="dds-button-row">
        <button class="dds-button dds-button--primary-solid" type="button">Label</button>
        <button class="dds-button dds-button--secondary-solid" type="button">Label ${iconPlus()}</button>
      </div>
    </div>
  `);
}

export function createButtonsVariantsFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__card">
      <div class="dds-button-row">
        <button class="dds-button dds-button--primary-solid" type="button">Primary</button>
        <button class="dds-button dds-button--secondary-solid" type="button">Secondary</button>
        <button class="dds-button dds-button--white-solid" type="button">White</button>
      </div>
    </div>
  `);
}

export function createButtonsStyleFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__card">
      <div class="dds-button-row">
        <button class="dds-button dds-button--primary-solid" type="button">Solid</button>
        <button class="dds-button dds-button--outline-primary" type="button">Transparent</button>
      </div>
    </div>
  `);
}

export function createButtonsIconOnlyFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__card">
      <div class="dds-buttons-fig__stack">
        <div class="dds-buttons-fig__icon-only-wrap">
          <div class="dds-buttons-fig__icon-only-row">
            <button class="dds-button dds-button--icon dds-button--primary-solid" type="button" aria-label="Search">${iconSearch()}</button>
            <button class="dds-button dds-button--icon dds-button--outline-primary" type="button" aria-label="Search">${iconSearch()}</button>
            <button class="dds-button dds-button--icon dds-button--primary-transparent" type="button" aria-label="Search">${iconSearch()}</button>
          </div>
          <span class="dds-buttons-fig__icon-divider" aria-hidden="true"></span>
          <div class="dds-buttons-fig__icon-only-row">
            <button class="dds-button dds-button--icon dds-button--secondary-solid" type="button" aria-label="Search">${iconSearch()}</button>
            <button class="dds-button dds-button--icon dds-button--outline-secondary" type="button" aria-label="Search">${iconSearch()}</button>
            <button class="dds-button dds-button--icon dds-button--secondary-transparent" type="button" aria-label="Search">${iconSearch()}</button>
          </div>
        </div>

        <div class="dds-buttons-fig__card dds-buttons-fig__card--dark">
          <div class="dds-buttons-fig__icon-only-row">
            <button class="dds-button dds-button--icon dds-button--white-solid" type="button" aria-label="Search">${iconSearch()}</button>
            <button class="dds-button dds-button--icon dds-button--outline-white" type="button" aria-label="Search">${iconSearch()}</button>
            <button class="dds-button dds-button--icon dds-button--white-transparent" type="button" aria-label="Search">${iconSearch()}</button>
          </div>
        </div>
      </div>
    </div>
  `);
}

export function createButtonsHoverFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__card">
      <div class="dds-buttons-fig__hover-wrap">
        <div class="dds-buttons-fig__hover-group">
          <button class="dds-button dds-button--primary-solid" type="button">Default</button>
          <span class="dds-buttons-fig__hover-arrow" aria-hidden="true">→</span>
          <button class="dds-button dds-button--outline-primary" type="button">Hover</button>
        </div>
        <span class="dds-buttons-fig__icon-divider" aria-hidden="true"></span>
        <div class="dds-buttons-fig__hover-group">
          <button class="dds-button dds-button--secondary-solid" type="button">Default</button>
          <span class="dds-buttons-fig__hover-arrow" aria-hidden="true">→</span>
          <button class="dds-button dds-button--outline-secondary" type="button">Hover</button>
        </div>
        <span class="dds-buttons-fig__icon-divider" aria-hidden="true"></span>
        <div class="dds-buttons-fig__hover-group">
          <button class="dds-button dds-button--white-solid" type="button">Default</button>
          <span class="dds-buttons-fig__hover-arrow" aria-hidden="true">→</span>
          <button class="dds-button dds-button--white-hover" type="button">Hover</button>
        </div>
      </div>
    </div>
  `);
}

export function createButtonsDisabledFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__card">
      <div class="dds-button-row">
        <button class="dds-button dds-button--disabled" type="button" disabled aria-disabled="true">Primary disabled</button>
        <button class="dds-button dds-button--outline-disabled" type="button" disabled aria-disabled="true">Secondary transparent disabled</button>
      </div>
    </div>
  `);
}

export function createButtonsBestPracticesFigure() {
  return figureShell(`
    <div class="dds-buttons-fig__do-dont-grid">
      <section class="dds-buttons-fig__do">
        <h4>Do</h4>
        <p><strong>Lead with action verbs</strong></p>
        <p>Start button labels with clear verbs such as "Save changes" or "Create account".</p>
        <p><strong>Limit primary buttons per section</strong></p>
        <p>Use one primary button per section or view to preserve clear hierarchy.</p>
        <p><strong>Match style to hierarchy</strong></p>
        <p>Use solid for primary actions and transparent for low-emphasis actions.</p>
        <p><strong>Preserve focus states</strong></p>
        <p>Keep default focus behavior so keyboard users can track active controls.</p>
      </section>
      <section class="dds-buttons-fig__dont">
        <h4>Don't</h4>
        <p><strong>Don't use vague labels</strong></p>
        <p>Avoid generic text like "Click here" or "OK" without context.</p>
        <p><strong>Don't rely on color alone</strong></p>
        <p>State differences should also be communicated by border/text/shape changes.</p>
        <p><strong>Don't use buttons for navigation</strong></p>
        <p>Use links for page navigation and reserve buttons for actions.</p>
        <p><strong>Don't make touch targets too small</strong></p>
        <p>Maintain at least 44x44px targets on touch devices.</p>
      </section>
    </div>
  `);
}
