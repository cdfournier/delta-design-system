import './footer.css';

const FOOTER_LOGO_RIGHT_SIDE =
  'https://www.figma.com/api/mcp/asset/9ab89d28-8f1a-4c79-991f-71a6e9968ede';
const FOOTER_LOGO_LEFT_SIDE =
  'https://www.figma.com/api/mcp/asset/1d0e2c7b-3371-4cc5-91fc-ea82b3d855be';
const FOOTER_TOGGLE_ICON_BASE =
  'https://www.figma.com/api/mcp/asset/46042aed-b0ec-4aa9-897c-d6dfe1224685';
const FOOTER_TOGGLE_SUN_CORE =
  'https://www.figma.com/api/mcp/asset/f5a5a029-46f5-4980-873e-c3bee5701b33';
const FOOTER_TOGGLE_SUN_RAYS =
  'https://www.figma.com/api/mcp/asset/72eb7327-7898-4f2a-8767-e8edefb27eb0';
const FOOTER_TOGGLE_SWITCH =
  'https://www.figma.com/api/mcp/asset/e29a4a8a-bade-4605-9e1f-f0be7649ff20';
const FOOTER_TOGGLE_MOON =
  'https://www.figma.com/api/mcp/asset/fe503366-b522-4f4c-b4cb-351c9f71f53c';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function logoMark() {
  return `
    <figure class="dds-footer__logo" aria-hidden="true">
      <img class="dds-footer__logo-side dds-footer__logo-side--left" src="${FOOTER_LOGO_LEFT_SIDE}" alt="" />
      <img class="dds-footer__logo-side dds-footer__logo-side--right" src="${FOOTER_LOGO_RIGHT_SIDE}" alt="" />
    </figure>
  `;
}

function sunIcon() {
  return `
    <span class="dds-footer__toggle-icon" aria-hidden="true">
      <img class="dds-footer__toggle-icon-base" src="${FOOTER_TOGGLE_ICON_BASE}" alt="" />
      <span class="dds-footer__toggle-icon-sun-core-wrap">
        <img class="dds-footer__toggle-icon-sun-core" src="${FOOTER_TOGGLE_SUN_CORE}" alt="" />
      </span>
      <span class="dds-footer__toggle-icon-sun-rays-wrap">
        <img class="dds-footer__toggle-icon-sun-rays" src="${FOOTER_TOGGLE_SUN_RAYS}" alt="" />
      </span>
    </span>
  `;
}

function moonIcon() {
  return `
    <span class="dds-footer__toggle-icon" aria-hidden="true">
      <img class="dds-footer__toggle-icon-base" src="${FOOTER_TOGGLE_ICON_BASE}" alt="" />
      <span class="dds-footer__toggle-icon-moon-wrap">
        <img class="dds-footer__toggle-icon-moon" src="${FOOTER_TOGGLE_MOON}" alt="" />
      </span>
    </span>
  `;
}

/**
 * @param {{
 * size?: 'mobile'|'desktop';
 * colorMode?: 'light'|'dark';
 * heading?: string;
 * links?: {label: string, href?: string}[];
 * fineText?: string;
 * checked?: boolean;
 * }} args
 */
export function createFooter({
  size = 'mobile',
  colorMode = 'light',
  heading = 'The Delta Design System',
  links = [
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
  ],
  fineText = '© Copyright',
  checked = false,
} = {}) {
  const linksMarkup = links
    .map(
      (link) => `
        <li class="dds-footer__link-item">
          <a class="dds-footer__link" href="${escapeHtml(link.href || '#')}">${escapeHtml(link.label)}</a>
        </li>
      `,
    )
    .join('');

  return `
    <footer class="dds-footer" data-size="${size}" data-color-mode="${colorMode}">
      <div class="dds-footer__group">
        <div class="dds-footer__row">
          <nav class="dds-footer__nav" aria-label="Footer navigation">
            <ul class="dds-footer__links">
              ${linksMarkup}
            </ul>
          </nav>

          <div class="dds-footer__brand">
            <div class="dds-footer__logo-mark">
              ${logoMark()}
              <p class="dds-footer__heading">${escapeHtml(heading)}</p>
            </div>

            <div class="dds-footer__toggle">
              ${sunIcon()}
              <label class="dds-footer__toggle-label">
                <input
                  type="checkbox"
                  class="dds-footer__toggle-input"
                  role="switch"
                  aria-checked="${checked ? 'true' : 'false'}"
                  aria-label="Toggle dark mode"
                  ${checked ? 'checked' : ''}
                >
                <span class="dds-footer__toggle-switch-visual" aria-hidden="true">
                  <img src="${FOOTER_TOGGLE_SWITCH}" alt="" />
                </span>
                <span class="dds-footer__toggle-text">Dark mode</span>
              </label>
              ${moonIcon()}
            </div>
          </div>
        </div>

        <p class="dds-footer__fine">${escapeHtml(fineText)}</p>
      </div>
    </footer>
  `;
}

function figureShell(content) {
  return `<section class="dds-footer-fig"><div class="dds-footer-fig__card">${content}</div></section>`;
}

export function createFooterAnatomyFigure() {
  return figureShell(createFooter({ size: 'desktop', colorMode: 'light' }));
}

export function createFooterBestPracticesFigure() {
  return `
    <div class="dds-footer-doc__do-dont-grid">
      <section class="dds-footer-doc__do">
        <h4>Do</h4>
        <p><strong>Keep links focused and minimal</strong></p>
        <p>Include only the most essential navigation items. The Footer supplements, not duplicates, the primary navigation.</p>
        <p><strong>Make the toggle accessible</strong></p>
        <p>Provide a text label for the color mode control, icons alone are not sufficient for keyboard or screen reader users.</p>
        <p><strong>Maintain brand consistency</strong></p>
        <p>Keep the logo, heading, and fine print in sync with the rest of the product. The Footer is often the last thing a user sees on a page.</p>
        <p><strong>Test both layout variants</strong></p>
        <p>Verify the mobile and desktop layouts at their respective breakpoints on real devices, not just resized browser windows.</p>
      </section>
      <section class="dds-footer-doc__dont">
        <h4>Don't</h4>
        <p><strong>Don't overload with links</strong></p>
        <p>Too many links clutter the Footer and reduce its utility. If you need more links, consider a structured sitemap page.</p>
        <p><strong>Don't rely on color alone</strong></p>
        <p>Footer links use color to indicate interactivity, but also change on hover to provide additional feedback. Ensure sufficient contrast.</p>
        <p><strong>Don't place critical actions here</strong></p>
        <p>The Footer is a low-attention zone. Primary calls to action, sign-up prompts, or urgent messages belong in the main content area.</p>
        <p><strong>Don't let the copyright go stale</strong></p>
        <p>An outdated copyright year signals a neglected product. Automate it if possible.</p>
      </section>
    </div>
  `;
}
