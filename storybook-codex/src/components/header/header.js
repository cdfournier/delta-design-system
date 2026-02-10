import { createIcon } from '../icon/icon';
import { createSwitch } from '../input/input';
import { createLink } from '../link/link';
import './header.css';

const LOGO_RIGHT_SRC = 'https://www.figma.com/api/mcp/asset/0bbf85fc-fa4b-4d52-a152-84be6b95575d';
const LOGO_LEFT_SRC = 'https://www.figma.com/api/mcp/asset/2e43662d-f76a-491c-886d-1c60bdaa9ba8';

function normalizeLinks(links) {
  if (Array.isArray(links) && links.length > 0) {
    return links;
  }

  if (typeof links === 'string' && links.trim()) {
    return links
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return ['Link', 'Link', 'Link', 'Link', 'Link'];
}

function createLogoMark() {
  return `
    <div class="dds-header__logo-mark" aria-hidden="true">
      <img class="dds-header__logo-half dds-header__logo-half--left" src="${LOGO_LEFT_SRC}" alt="" loading="lazy" />
      <img class="dds-header__logo-half dds-header__logo-half--right" src="${LOGO_RIGHT_SRC}" alt="" loading="lazy" />
    </div>
  `;
}

function createToggle({ checked = false } = {}) {
  return `
    <div class="dds-header__toggle">
      <span class="dds-header__toggle-icon">${createIcon({ type: 'sun', decorative: true, strokeWidth: 1.5 })}</span>
      ${createSwitch({ checked, label: '', state: 'default', direction: 'default' })}
      <span class="dds-header__toggle-icon">${createIcon({ type: 'moon', decorative: true, strokeWidth: 1.5 })}</span>
    </div>
  `;
}

function createDesktop({ links, toggleChecked }) {
  return `
    <div class="dds-header__top">
      <div class="dds-header__row">
        ${createLogoMark()}
        <nav class="dds-header__nav dds-header__nav--desktop" aria-label="Primary navigation">
          <ul class="dds-header__list dds-header__list--desktop">
            ${links
              .map(
                (label) => `
              <li class="dds-header__list-item">${createLink({ label, size: 'p', arrow: false })}</li>
            `,
              )
              .join('')}
          </ul>
        </nav>
        ${createToggle({ checked: toggleChecked })}
      </div>
    </div>
  `;
}

function createMobile({ links, mobileState, toggleChecked }) {
  const isInteractive = mobileState === 'interactive';
  const isOpen = mobileState === 'open';

  return `
    <div class="dds-header__top">
      <div class="dds-header__row">
        ${createLogoMark()}
        <button
          type="button"
          class="dds-header__menu-button"
          aria-expanded="${isOpen}"
          aria-label="${isOpen ? 'Close menu' : 'Open menu'}"
          ${isInteractive ? `onclick="(function(btn){const root=btn.closest('.dds-header');if(!root){return;}const panel=root.querySelector('.dds-header__panel');const open=root.classList.toggle('dds-header--menu-open');btn.setAttribute('aria-expanded', String(open));btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');if(panel){panel.setAttribute('aria-hidden', String(!open));}})(this)"` : ''}
        >
          <span class="dds-header__menu-button-icon dds-header__menu-button-icon--menu">${createIcon({ type: 'menu-2', decorative: true, strokeWidth: 1.5 })}</span>
          <span class="dds-header__menu-button-icon dds-header__menu-button-icon--close">${createIcon({ type: 'x', decorative: true, strokeWidth: 1.5 })}</span>
        </button>
      </div>
    </div>
    <nav class="dds-header__panel" aria-label="Mobile navigation" aria-hidden="${String(!isOpen)}">
      <ul class="dds-header__list dds-header__list--mobile">
        ${links
          .map(
            (label) => `
          <li class="dds-header__list-item">${createLink({ label, size: 'p', arrow: false })}</li>
        `,
          )
          .join('')}
      </ul>
      ${createToggle({ checked: toggleChecked })}
    </nav>
  `;
}

/**
 * @param {{
 *  size?: 'mobile'|'desktop';
 *  mobileState?: 'closed'|'open'|'interactive';
 *  links?: string[]|string;
 *  toggleChecked?: boolean;
 * }} params
 */
export function createHeader({
  size = 'desktop',
  mobileState = 'closed',
  links = ['Link', 'Link', 'Link', 'Link', 'Link'],
  toggleChecked = false,
} = {}) {
  const normalizedLinks = normalizeLinks(links);
  const isMobile = size === 'mobile';
  const isMenuOpen = isMobile && mobileState === 'open';
  const isInteractive = isMobile && mobileState === 'interactive';

  return `
    <header class="dds-header dds-header--${size} ${isMenuOpen ? 'dds-header--menu-open' : ''} ${isInteractive ? 'dds-header--interactive' : ''}">
      ${isMobile ? createMobile({ links: normalizedLinks, mobileState, toggleChecked }) : createDesktop({ links: normalizedLinks, toggleChecked })}
    </header>
  `;
}

export function createHeaderShowcase() {
  return `
    <div class="dds-header-showcase">
      ${createHeader({ size: 'mobile', mobileState: 'closed' })}
      ${createHeader({ size: 'mobile', mobileState: 'open' })}
      ${createHeader({ size: 'mobile', mobileState: 'interactive' })}
      ${createHeader({ size: 'desktop' })}
    </div>
  `;
}
