import { createIcon } from '../icon/icon';
import { createSwitch } from '../input/input';
import { createLink } from '../link/link';
import './footer.css';

const LOGO_RIGHT_SRC = 'https://www.figma.com/api/mcp/asset/263c1ce1-8a39-409b-a42e-7a0cfb504e63';
const LOGO_LEFT_SRC = 'https://www.figma.com/api/mcp/asset/ef6afec1-3d7b-4710-92c1-726b2ebc501d';

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
    <div class="dds-footer__logo-mark" aria-hidden="true">
      <img class="dds-footer__logo-half dds-footer__logo-half--left" src="${LOGO_LEFT_SRC}" alt="" loading="lazy" />
      <img class="dds-footer__logo-half dds-footer__logo-half--right" src="${LOGO_RIGHT_SRC}" alt="" loading="lazy" />
    </div>
  `;
}

/**
 * @param {{
 *  size?: 'mobile'|'desktop';
 *  heading?: string;
 *  fineText?: string;
 *  links?: string[]|string;
 *  showToggle?: boolean;
 *  toggleChecked?: boolean;
 *  toggleLabel?: string;
 * }} params
 */
export function createFooter({
  size = 'mobile',
  heading = 'The Delta Design System',
  fineText = '© Copyright',
  links = ['Link', 'Link', 'Link', 'Link', 'Link'],
  showToggle = true,
  toggleChecked = false,
  toggleLabel = '',
} = {}) {
  const linkItems = normalizeLinks(links);
  const switchMarkup = createSwitch({
    checked: toggleChecked,
    label: toggleLabel,
    state: 'default',
    direction: 'default',
  });

  return `
    <footer class="dds-footer dds-footer--${size}" aria-label="Footer">
      <div class="dds-footer__group">
        <div class="dds-footer__row">
          <nav class="dds-footer__nav" aria-label="Footer navigation">
            <ul class="dds-footer__list">
              ${linkItems
                .map(
                  (label) => `
                <li class="dds-footer__list-item">
                  ${createLink({ label, size: 'small', arrow: false })}
                </li>
              `,
                )
                .join('')}
            </ul>
          </nav>
          <section class="dds-footer__brand" aria-label="Brand">
            <div class="dds-footer__mark-group">
              ${createLogoMark()}
              <h2 class="dds-footer__heading">${heading}</h2>
            </div>
            ${
              showToggle
                ? `
              <div class="dds-footer__toggle" aria-label="Color mode toggle">
                <span class="dds-footer__toggle-icon">${createIcon({ type: 'sun', decorative: true, strokeWidth: 1.5 })}</span>
                ${switchMarkup}
                <span class="dds-footer__toggle-icon">${createIcon({ type: 'moon', decorative: true, strokeWidth: 1.5 })}</span>
              </div>
            `
                : ''
            }
          </section>
        </div>
        <p class="dds-footer__fine">${fineText}</p>
      </div>
    </footer>
  `;
}

export function createFooterShowcase() {
  return `
    <div class="dds-footer-showcase">
      ${createFooter({ size: 'mobile' })}
      ${createFooter({ size: 'desktop' })}
    </div>
  `;
}
