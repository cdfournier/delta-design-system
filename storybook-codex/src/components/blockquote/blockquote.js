import './blockquote.css';

/**
 * @param {{
 *   quote?: string;
 *   cite?: string;
 *   citeUrl?: string;
 *   showCite?: boolean;
 *   background?: 'page'|'section'|'transparent';
 *   sizeMode?: 'auto'|'mobile'|'widescreen';
 * }} params
 */
export function createBlockquote({
  quote = "Now more than ever, we're designing work meant to be viewed along a gradient of different experiences.",
  cite = 'Ethan Marcotte, Responsive Web Design',
  citeUrl = 'https://alistapart.com/article/responsive-web-design/',
  showCite = true,
  background = 'page',
  sizeMode = 'auto',
} = {}) {
  const citeMarkup = showCite ? `<cite class="dds-blockquote__cite">${cite}</cite>` : '';
  const citeAttribute = citeUrl ? ` cite="${citeUrl}"` : '';
  const iconMarkup = `
    <span class="dds-blockquote__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" class="dds-blockquote__icon-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.2 11.2c0-2.9 1.8-4.8 4.5-6.2l.9 1.4c-1.6 1-2.5 2-2.8 3.3h2.9v6.2H5.9v-4.7h.3z" fill="currentColor" />
        <path d="M14.2 11.2c0-2.9 1.8-4.8 4.5-6.2l.9 1.4c-1.6 1-2.5 2-2.8 3.3h2.9v6.2h-5.8v-4.7h.3z" fill="currentColor" />
      </svg>
    </span>
  `;

  return `
    <div class="dds-blockquote-wrap">
      <blockquote class="dds-blockquote dds-blockquote--bg-${background}" data-size-mode="${sizeMode}"${citeAttribute}>
        ${iconMarkup}
        <p class="dds-blockquote__quote">${quote}</p>
        ${citeMarkup}
      </blockquote>
    </div>
  `;
}
