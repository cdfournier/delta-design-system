import './header.css';

const HEADER_LOGO_RIGHT_SIDE =
  'https://www.figma.com/api/mcp/asset/9927dace-c3b0-4d03-b76d-8169551fcab0';
const HEADER_LOGO_LEFT_SIDE =
  'https://www.figma.com/api/mcp/asset/8daac8bd-372c-4434-bbc9-99b58587308b';

const HEADER_TOGGLE_ICON_BASE =
  'https://www.figma.com/api/mcp/asset/7b5e6552-87d6-4530-b4e4-0aff81171371';
const HEADER_TOGGLE_SUN_CORE =
  'https://www.figma.com/api/mcp/asset/885503e6-97bf-476a-a6b1-ae6555977d51';
const HEADER_TOGGLE_SUN_RAYS =
  'https://www.figma.com/api/mcp/asset/c710b137-4464-46f0-9674-d0077263f647';
const HEADER_TOGGLE_SWITCH =
  'https://www.figma.com/api/mcp/asset/6ef515c4-bdad-49bb-a72b-28cd476d191e';
const HEADER_TOGGLE_MOON =
  'https://www.figma.com/api/mcp/asset/0584b91a-79b1-440e-8719-3ae6d92728b6';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function logoMarkup(size = 'desktop') {
  const className = size === 'mobile' ? 'dds-header__logo dds-header__logo--mobile' : 'dds-header__logo dds-header__logo--desktop';
  return `
    <a class="${className}" href="#" aria-label="Home">
      <span class="dds-header__logo-inner">
        <span class="dds-header__logo-half dds-header__logo-half--left">
          <img class="dds-header__logo-side" src="${HEADER_LOGO_LEFT_SIDE}" alt="" />
        </span>
        <span class="dds-header__logo-half dds-header__logo-half--right">
          <img class="dds-header__logo-side" src="${HEADER_LOGO_RIGHT_SIDE}" alt="" />
        </span>
      </span>
    </a>
  `;
}

function toggleMarkup() {
  return `
    <div class="dds-header__toggle" aria-label="Color mode toggle">
      <span class="dds-header__toggle-icon" aria-hidden="true">
        <img class="dds-header__toggle-icon-base" src="${HEADER_TOGGLE_ICON_BASE}" alt="" />
        <span class="dds-header__toggle-icon-sun-core-wrap"><img class="dds-header__toggle-icon-sun-core" src="${HEADER_TOGGLE_SUN_CORE}" alt="" /></span>
        <span class="dds-header__toggle-icon-sun-rays-wrap"><img class="dds-header__toggle-icon-sun-rays" src="${HEADER_TOGGLE_SUN_RAYS}" alt="" /></span>
      </span>
      <label class="dds-header__toggle-label">
        <input class="dds-header__toggle-input" type="checkbox" role="switch" aria-label="Toggle dark mode" />
        <span class="dds-header__toggle-switch-visual" aria-hidden="true"><img src="${HEADER_TOGGLE_SWITCH}" alt="" /></span>
      </label>
      <span class="dds-header__toggle-icon" aria-hidden="true">
        <img class="dds-header__toggle-icon-base" src="${HEADER_TOGGLE_ICON_BASE}" alt="" />
        <span class="dds-header__toggle-icon-moon-wrap"><img class="dds-header__toggle-icon-moon" src="${HEADER_TOGGLE_MOON}" alt="" /></span>
      </span>
    </div>
  `;
}

function menuIconMarkup(state = 'closed') {
  if (state === 'open') {
    return `
      <span class="dds-header__menu-icon" aria-hidden="true">
        <span class="dds-header__menu-icon-line-wrap"><span class="dds-header__menu-stroke dds-header__menu-stroke--x1"></span></span>
        <span class="dds-header__menu-icon-line-wrap"><span class="dds-header__menu-stroke dds-header__menu-stroke--x2"></span></span>
      </span>
    `;
  }

  return `
    <span class="dds-header__menu-icon" aria-hidden="true">
      <span class="dds-header__menu-icon-line-top"><span class="dds-header__menu-stroke"></span></span>
      <span class="dds-header__menu-icon-line-middle"><span class="dds-header__menu-stroke"></span></span>
      <span class="dds-header__menu-icon-line-bottom"><span class="dds-header__menu-stroke"></span></span>
    </span>
  `;
}

function linksMarkup({ links, mobile = false }) {
  return links
    .map((link) => {
      const label = escapeHtml(link.label);
      const href = escapeHtml(link.href || '#');
      if (mobile) {
        return `
          <li class="dds-header__mobile-item">
            <a class="dds-header__mobile-link" href="${href}">${label}</a>
          </li>
        `;
      }
      return `<li class="dds-header__desktop-item"><a class="dds-header__desktop-link" href="${href}">${label}</a></li>`;
    })
    .join('');
}

/**
 * @param {{
 * size?: 'widescreen'|'mobile';
 * state?: 'closed'|'open';
 * colorMode?: 'light'|'dark';
 * links?: {label: string, href?: string}[];
 * stretch?: boolean;
 * }} args
 */
export function createHeader({
  size = 'widescreen',
  state = 'closed',
  colorMode = 'light',
  stretch = false,
  links = [
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
  ],
} = {}) {
  if (size === 'mobile') {
    return `
      <header class="dds-header dds-header--mobile" data-state="${state}" data-color-mode="${colorMode}">
        <div class="dds-header__topbar">
          <div class="dds-header__row">
            ${logoMarkup('mobile')}
            <button class="dds-header__menu-toggle" type="button" aria-label="${state === 'open' ? 'Close menu' : 'Open menu'}" aria-expanded="${state === 'open' ? 'true' : 'false'}">
              <span class="dds-header__menu-button-shell">${menuIconMarkup(state)}</span>
            </button>
          </div>
        </div>

        ${
          state === 'open'
            ? `
          <nav class="dds-header__mobile-panel" aria-label="Primary navigation">
            <ul class="dds-header__mobile-list">
              ${linksMarkup({ links, mobile: true })}
            </ul>
            ${toggleMarkup()}
          </nav>
        `
            : ''
        }
      </header>
    `;
  }

  return `
    <header class="dds-header dds-header--widescreen${stretch ? ' dds-header--stretch' : ''}" data-color-mode="${colorMode}">
      <div class="dds-header__topbar">
        <div class="dds-header__row">
          ${logoMarkup('desktop')}
          <div class="dds-header__desktop-main">
            <nav class="dds-header__desktop-nav" aria-label="Primary navigation">
              <ul class="dds-header__desktop-list">
                ${linksMarkup({ links, mobile: false })}
              </ul>
            </nav>
            ${toggleMarkup()}
          </div>
        </div>
      </div>
    </header>
  `;
}

function figureShell(content, mode = 'desktop') {
  const figureClass = mode === 'mobile' ? 'dds-header-fig dds-header-fig--mobile' : 'dds-header-fig dds-header-fig--desktop';
  return `<section class="${figureClass}"><div class="dds-header-fig__card">${content}</div></section>`;
}

export function createHeaderAnatomyFigure() {
  return figureShell(createHeader({ size: 'widescreen', state: 'closed', stretch: true }), 'desktop');
}

export function createHeaderMobileClosedFigure() {
  return figureShell(createHeader({ size: 'mobile', state: 'closed' }), 'mobile');
}

export function createHeaderMobileOpenFigure() {
  return figureShell(createHeader({ size: 'mobile', state: 'open' }), 'mobile');
}

export function createHeaderMobileVariantsFigure() {
  return figureShell(
    `
      <div class="dds-header-fig__mobile-variants">
        ${createHeader({ size: 'mobile', state: 'closed' })}
        ${createHeader({ size: 'mobile', state: 'open' })}
      </div>
    `,
    'desktop',
  );
}

export function createHeaderBestPracticesFigure() {
  return `
    <div class="dds-header-doc__do-dont-grid">
      <section class="dds-header-doc__do">
        <h4>Do</h4>
        <p><strong>Keep navigation focused</strong></p>
        <p>Include only primary destinations. Use the footer or secondary navigation patterns for supplementary links.</p>
        <p><strong>Manage focus properly</strong></p>
        <p>Return focus to the toggle button when the mobile menu closes to maintain a predictable keyboard experience.</p>
        <p><strong>Test both modes</strong></p>
        <p>Verify readability and contrast in both light and dark modes, including with the backdrop blur effect active.</p>
        <p><strong>Provide skip navigation</strong></p>
        <p>Include a visually hidden “Skip to main content” link before the Header so keyboard users can bypass repeated navigation.</p>
      </section>
      <section class="dds-header-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't overload with links</strong></p>
        <p>Too many navigation items creates clutter and forces users to hunt for destinations, especially on mobile.</p>
        <p><strong>Don't rely on icons alone</strong></p>
        <p>Provide aria-label or visible text for all icon-only controls including the menu button and color mode toggle.</p>
        <p><strong>Don't forget state indicators</strong></p>
        <p>The menu button must clearly communicate its current state to all users, including those using assistive technology.</p>
        <p><strong>Don't trap keyboard users</strong></p>
        <p>Ensure the mobile menu can be dismissed via the button, a navigation link selection, or the Escape key.</p>
      </section>
    </div>
  `;
}
