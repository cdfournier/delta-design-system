import './chip.css';
import avatarImage from './assets/chip-avatar.jpg';

function iconArrow() {
  return `
    <span class="dds-chip__icon-art dds-chip__icon-art--arrow" aria-hidden="true">
      <span class="dds-chip__icon-part dds-chip__icon-part--arrow-line">
        <svg viewBox="0 0 8 1" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5H7.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span class="dds-chip__icon-part dds-chip__icon-part--arrow-tip-a">
        <svg viewBox="0 0 4 4" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5L3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span class="dds-chip__icon-part dds-chip__icon-part--arrow-tip-b">
        <svg viewBox="0 0 4 4" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 3.5L3.5 0.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
    </span>
  `;
}

function iconCheck() {
  return `
    <span class="dds-chip__icon-art dds-chip__icon-art--check" aria-hidden="true">
      <span class="dds-chip__icon-part dds-chip__icon-part--check-line">
        <svg viewBox="0 0 12 12" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
    </span>
  `;
}

function iconClose() {
  return `
    <span class="dds-chip__icon-art dds-chip__icon-art--close" aria-hidden="true">
      <span class="dds-chip__icon-part dds-chip__icon-part--close-line-a">
        <svg viewBox="0 0 10 10" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span class="dds-chip__icon-part dds-chip__icon-part--close-line-b">
        <svg viewBox="0 0 10 10" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L1 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
    </span>
  `;
}

function chipIcon(type) {
  if (type === 'arrow') return iconArrow();
  if (type === 'check') return iconCheck();
  if (type === 'close') return iconClose();
  return '';
}

function avatarMarkup() {
  return `<span class="dds-chip__avatar" aria-hidden="true"><img src="${avatarImage}" alt="" class="dds-chip__avatar-image" /></span>`;
}

function accessoryMarkup({ type, position, variant, label, disabled = false }) {
  if (type === 'none') {
    return '';
  }

  if (type === 'avatar') {
    return `<span class="dds-chip__accessory dds-chip__accessory--${position} dds-chip__accessory--avatar">${avatarMarkup()}</span>`;
  }

  if (type === 'close') {
    return `
      <span class="dds-chip__accessory dds-chip__accessory--${position} dds-chip__accessory--close">
        <button type="button" class="dds-chip__close-btn dds-chip__close-btn--${variant}" aria-label="Remove ${label} chip" ${disabled ? 'disabled aria-disabled="true"' : ''}>
          ${chipIcon('close')}
        </button>
      </span>
    `;
  }

  return `
    <span class="dds-chip__accessory dds-chip__accessory--${position} dds-chip__accessory--icon" aria-hidden="true">
      <span class="dds-chip__icon-wrap">
        ${chipIcon(type)}
      </span>
    </span>
  `;
}

/**
 * @param {{
 *  label?: string;
 *  variant?: 'primary'|'secondary';
 *  state?: 'default'|'hover'|'focus';
 *  leading?: 'none'|'avatar'|'arrow'|'check';
 *  trailing?: 'none'|'avatar'|'close'|'check';
 *  checkable?: boolean;
 *  selected?: boolean;
 *  disabled?: boolean;
 *  interactive?: boolean;
 *  sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createChip({
  label = 'Chip',
  variant = 'primary',
  state = 'default',
  leading = 'none',
  trailing = 'none',
  checkable = false,
  selected = false,
  disabled = false,
  interactive = true,
  sizeMode = 'auto',
} = {}) {
  const usesDismissButton = leading === 'close' || trailing === 'close';
  const tagName = interactive && !usesDismissButton ? 'button' : 'span';
  const classes = [
    'dds-chip',
    `dds-chip--${variant}`,
    selected ? 'dds-chip--selected' : '',
    !interactive ? 'dds-chip--static' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const isButtonRoot = tagName === 'button';
  const selectedAttr =
    isButtonRoot && checkable ? ` role="checkbox" aria-checked="${selected ? 'true' : 'false'}"` : '';
  const disabledAttr = isButtonRoot && disabled ? ' disabled aria-disabled="true"' : '';
  const typeAttr = isButtonRoot ? ' type="button"' : '';

  let actualLeading = leading;
  let actualTrailing = trailing;
  if (selected) {
    if (actualTrailing === 'avatar' && actualLeading === 'none') {
      actualLeading = 'check';
    } else if (actualTrailing === 'none') {
      actualTrailing = 'check';
    }
  }

  return `
    <${tagName}
      class="${classes}"
      data-state="${state}"
      data-size-mode="${sizeMode}"
      ${typeAttr}${selectedAttr}${disabledAttr}
    >
      ${accessoryMarkup({ type: actualLeading, position: 'leading', variant, label, disabled })}
      <span class="dds-chip__label">${label}</span>
      ${accessoryMarkup({ type: actualTrailing, position: 'trailing', variant, label, disabled })}
    </${tagName}>
  `;
}

export function createChipGroup(content) {
  return `<ul class="dds-chip-group">${content}</ul>`;
}
