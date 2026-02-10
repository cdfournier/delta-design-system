import './badge.css';

/**
 * @param {{ label?: string; style?: 'primary'|'secondary'|'transparent'; tokenMode?: 'symbol'|'library' }} params
 */
export function createBadge({
  label = '0',
  style = 'transparent',
  tokenMode = 'symbol',
} = {}) {
  const styleClass = `dds-badge--${style}`;
  return `<span class="dds-badge ${styleClass}" data-token-mode="${tokenMode}">${label}</span>`;
}
