import './button.css';

function iconSvg(name, iconPosition) {
  const arrowDirection = iconPosition === 'left' ? 'left' : 'right';

  if (name === 'arrow') {
    return `
      <span class="dds-btn__icon-art dds-btn__icon-art--arrow dds-btn__icon-art--arrow-${arrowDirection}" aria-hidden="true">
        <span class="dds-btn__icon-part dds-btn__icon-part--arrow-line">
          <svg viewBox="0 0 8 1" class="dds-btn__icon-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.5H7.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span class="dds-btn__icon-part dds-btn__icon-part--arrow-tip-a">
          <svg viewBox="0 0 4 4" class="dds-btn__icon-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.5L3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span class="dds-btn__icon-part dds-btn__icon-part--arrow-tip-b">
          <svg viewBox="0 0 4 4" class="dds-btn__icon-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 3.5L3.5 0.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </span>
    `;
  }

  if (name === 'search') {
    return `
      <span class="dds-btn__icon-art dds-btn__icon-art--search" aria-hidden="true">
        <span class="dds-btn__icon-part dds-btn__icon-part--search-ring">
          <svg viewBox="0 0 10.3333 10.3333" class="dds-btn__icon-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 5.16667C0.5 5.7795 0.620707 6.38634 0.855229 6.95252C1.08975 7.51871 1.43349 8.03316 1.86683 8.4665C2.30017 8.89984 2.81462 9.24358 3.38081 9.4781C3.947 9.71263 4.55383 9.83333 5.16667 9.83333C5.7795 9.83333 6.38634 9.71263 6.95252 9.4781C7.51871 9.24358 8.03316 8.89984 8.4665 8.4665C8.89984 8.03316 9.24358 7.51871 9.4781 6.95252C9.71263 6.38634 9.83333 5.7795 9.83333 5.16667C9.83333 4.55383 9.71263 3.947 9.4781 3.38081C9.24358 2.81462 8.89984 2.30017 8.4665 1.86683C8.03316 1.43349 7.51871 1.08975 6.95252 0.855229C6.38634 0.620707 5.7795 0.5 5.16667 0.5C4.55383 0.5 3.947 0.620707 3.38081 0.855229C2.81462 1.08975 2.30017 1.43349 1.86683 1.86683C1.43349 2.30017 1.08975 2.81462 0.855229 3.38081C0.620707 3.947 0.5 4.55383 0.5 5.16667Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span class="dds-btn__icon-part dds-btn__icon-part--search-handle">
          <svg viewBox="0 0 5 5" class="dds-btn__icon-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 4.5L0.5 0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </span>
    `;
  }

  return '';
}

/**
 * @param {{
 *   label?: string;
 *   variant?: 'primary'|'secondary'|'white';
 *   style?: 'solid'|'transparent'|'outline';
 *   iconPosition?: 'none'|'left'|'right'|'only';
 *   icon?: 'arrow'|'search';
 *   state?: 'default'|'hover'|'focus';
 *   disabled?: boolean;
 * }} params
 */
export function createButton({
  label = 'Label',
  variant = 'primary',
  style = 'solid',
  iconPosition = 'none',
  icon = 'arrow',
  state = 'default',
  disabled = false,
} = {}) {
  const normalizedStyle =
    style === 'outline' && iconPosition !== 'only'
      ? 'transparent'
      : iconPosition === 'only' && style === 'outline'
        ? 'outline'
        : style;
  const iconMarkup = iconSvg(icon, iconPosition);
  const classes = `dds-btn dds-btn--${variant} dds-btn--${normalizedStyle} dds-btn--icon-${iconPosition}`;

  const leftIcon = iconPosition === 'left' ? `<span class="dds-btn__icon-wrap">${iconMarkup}</span>` : '';
  const rightIcon = iconPosition === 'right' ? `<span class="dds-btn__icon-wrap">${iconMarkup}</span>` : '';
  const iconOnly = iconPosition === 'only' ? `<span class="dds-btn__icon-wrap">${iconMarkup}</span>` : '';
  const labelMarkup = iconPosition === 'only' ? `<span class="dds-btn__sr">${label}</span>` : `<span class="dds-btn__label">${label}</span>`;

  return `
    <button
      type="button"
      class="${classes}"
      data-state="${state}"
      ${disabled ? 'disabled aria-disabled="true"' : ''}
    >
      ${leftIcon}
      ${iconOnly}
      ${labelMarkup}
      ${rightIcon}
    </button>
  `;
}

export function createButtonRow() {
  return `
    <div class="dds-btn-row">
      ${createButton({ label: 'Primary', variant: 'primary', style: 'solid' })}
      ${createButton({ label: 'Secondary', variant: 'secondary', style: 'solid' })}
      ${createButton({ label: 'White', variant: 'white', style: 'solid' })}
      ${createButton({ label: 'Transparent', variant: 'primary', style: 'transparent' })}
    </div>
  `;
}
