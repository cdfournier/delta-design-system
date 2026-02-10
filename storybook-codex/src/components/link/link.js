import './link.css';

function arrowIcon() {
  return `
    <span class="dds-link__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" class="dds-link__icon-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13 6L19 12L13 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span>
  `;
}

/**
 * @param {{
 *  label?: string;
 *  href?: string;
 *  size?: 'p'|'small'|'fine';
 *  state?: 'default'|'hover';
 *  arrow?: boolean;
 * }} params
 */
export function createLink({
  label = 'Link',
  href = '#',
  size = 'p',
  state = 'default',
  arrow = true,
} = {}) {
  return `
    <a class="dds-link dds-link--${size} ${arrow ? 'dds-link--arrow' : 'dds-link--plain'}" data-state="${state}" href="${href}">
      <span class="dds-link__label">${label}</span>
      ${arrow ? arrowIcon() : ''}
    </a>
  `;
}

export function createLinkRow(content) {
  return `<div class="dds-link-row">${content}</div>`;
}

export function createLinksScaleShowcase() {
  return `
    <div class="dds-link-scale-grid">
      ${createLink({ size: 'p', state: 'default', arrow: true })}
      ${createLink({ size: 'p', state: 'hover', arrow: true })}
      ${createLink({ size: 'small', state: 'default', arrow: true })}
      ${createLink({ size: 'small', state: 'hover', arrow: true })}
      ${createLink({ size: 'fine', state: 'default', arrow: true })}
      ${createLink({ size: 'fine', state: 'hover', arrow: true })}
      ${createLink({ size: 'p', state: 'default', arrow: false })}
      ${createLink({ size: 'p', state: 'hover', arrow: false })}
      ${createLink({ size: 'small', state: 'default', arrow: false })}
      ${createLink({ size: 'small', state: 'hover', arrow: false })}
      ${createLink({ size: 'fine', state: 'default', arrow: false })}
      ${createLink({ size: 'fine', state: 'hover', arrow: false })}
    </div>
  `;
}
