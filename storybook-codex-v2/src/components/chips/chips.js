import './chips.css';
import avatarImage from './assets/chips-avatar.jpg';

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

function iconMail() {
  return `
    <span class="dds-chip__icon-art dds-chip__icon-art--mail" aria-hidden="true">
      <span class="dds-chip__icon-part dds-chip__icon-part--mail-box">
        <svg viewBox="0 0 16 16" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"></rect>
        </svg>
      </span>
      <span class="dds-chip__icon-part dds-chip__icon-part--mail-flap">
        <svg viewBox="0 0 16 16" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 4.5L8 9L13.5 4.5" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
    </span>
  `;
}

function iconCheck() {
  return `
    <span class="dds-chip__icon-art dds-chip__icon-art--check" aria-hidden="true">
      <svg viewBox="0 0 24 24" class="dds-chip__icon-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9.5 16.5L4 11" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
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
  if (type === 'mail') return iconMail();
  if (type === 'check') return iconCheck();
  if (type === 'close') return iconClose();
  return '';
}

function avatarMarkup() {
  return `<span class="dds-chip__avatar" aria-hidden="true"><img src="${avatarImage}" alt="" class="dds-chip__avatar-image" /></span>`;
}

function accessoryMarkup({ type, position, variant, label, disabled = false }) {
  if (type === 'none') return '';

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

  if (type === 'check') {
    return `
      <span class="dds-chip__accessory dds-chip__accessory--${position} dds-chip__accessory--toggle" aria-hidden="true">
        <span class="dds-chip__icon-wrap">
          ${chipIcon(type)}
        </span>
      </span>
    `;
  }

  return `
    <span class="dds-chip__accessory dds-chip__accessory--${position} dds-chip__accessory--icon dds-chip__accessory--icon-${type}" aria-hidden="true">
      <span class="dds-chip__icon-wrap">${chipIcon(type)}</span>
    </span>
  `;
}

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

  const isButtonRoot = tagName === 'button';
  const selectedAttr = isButtonRoot && checkable ? ` role="checkbox" aria-checked="${selected ? 'true' : 'false'}"` : '';
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

  const classes = [
    'dds-chip',
    `dds-chip--${variant}`,
    selected ? 'dds-chip--selected' : '',
    !interactive ? 'dds-chip--static' : '',
    actualLeading === 'avatar' ? 'dds-chip--avatar-leading' : '',
    actualTrailing === 'avatar' ? 'dds-chip--avatar-trailing' : '',
  ]
    .filter(Boolean)
    .join(' ');

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

function figureShell(content) {
  return `<section class="dds-chips-fig"><div class="dds-chips-fig__card">${content}</div></section>`;
}

export function createChipsAnatomySamplePrimary({ sizeMode = 'mobile' } = {}) {
  return figureShell(`
    <div class="dds-chip-row">
      ${createChip({ label: 'Primary', variant: 'primary', interactive: false, sizeMode })}
      ${createChip({
        label: 'Secondary',
        variant: 'secondary',
        selected: true,
        interactive: true,
        sizeMode,
      })}
      ${createChip({
        label: 'Chip',
        variant: 'primary',
        leading: 'mail',
        interactive: false,
        sizeMode,
      })}
      ${createChip({
        label: 'Chip',
        variant: 'secondary',
        leading: 'avatar',
        trailing: 'close',
        interactive: false,
        sizeMode,
      })}
    </div>
  `);
}

export function createChipsVariantPrimarySample({ sizeMode = 'mobile' } = {}) {
  return figureShell(`
    <div class="dds-chip-row">
      ${createChip({
        label: 'Primary',
        variant: 'primary',
        interactive: false,
        sizeMode,
      })}
    </div>
  `);
}

export function createChipsVariantSecondarySample({ sizeMode = 'mobile' } = {}) {
  return figureShell(`
    <div class="dds-chip-row">
      ${createChip({
        label: 'Secondary',
        variant: 'secondary',
        interactive: false,
        sizeMode,
      })}
    </div>
  `);
}

export function createChipsVariantWithAvatarSample({ sizeMode = 'mobile' } = {}) {
  return figureShell(`
    <div class="dds-chip-row">
      ${createChip({
        label: 'Avatar left',
        variant: 'primary',
        leading: 'avatar',
        interactive: false,
        sizeMode,
      })}
      ${createChip({
        label: 'Avatar right',
        variant: 'primary',
        trailing: 'avatar',
        interactive: false,
        sizeMode,
      })}
      ${createChip({
        label: 'Avatar left',
        variant: 'secondary',
        leading: 'avatar',
        interactive: false,
        sizeMode,
      })}
      ${createChip({
        label: 'Avatar right',
        variant: 'secondary',
        trailing: 'avatar',
        interactive: false,
        sizeMode,
      })}
    </div>
  `);
}
