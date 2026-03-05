import './icons.css';

const ICON_PATHS = {
  'arrow-left': ['M5 12h14', 'M5 12l6 6', 'M5 12l6-6'],
  'arrow-right': ['M5 12h14', 'M19 12l-6-6', 'M19 12l-6 6'],
  'chevron-down': ['m6 9 6 6 6-6'],
  'menu-2': ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  search: ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'm21 21-4.3-4.3'],
  check: ['M5 12l5 5', 'M10 17L20 7'],
  eye: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
  'eye-off': [
    'm3 3 18 18',
    'M10.5 10.7a2 2 0 0 0 2.8 2.8',
    'M7.4 7.6C5.7 8.7 4.3 10.4 3 12c1.9 3.3 5 7 9 7 1.5 0 3-.5 4.4-1.3',
    'M12 5c4 0 6.7 3.2 9 7-.3.5-.7 1-1.1 1.5',
  ],
  email: ['M4 7h16v10H4z', 'm4 9 8 5 8-5'],
  calendar: ['M7 4v4', 'M17 4v4', 'M4 10h16', 'M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z'],
  link: ['M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.71 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'],
  minus: ['M5 12h14'],
  quote: ['M7 8h5v5H7z', 'M12 8h5v5h-5z', 'M7 13c0 2-1 3-3 4', 'M12 13c0 2-1 3-3 4'],
  plus: ['M12 5v14', 'M5 12h14'],
  sun: ['M12 2v2', 'M12 20v2', 'M4.9 4.9l1.4 1.4', 'M17.7 17.7l1.4 1.4', 'M2 12h2', 'M20 12h2', 'M4.9 19.1l1.4-1.4', 'M17.7 6.3l1.4-1.4', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'],
  moon: ['M12 3a6.4 6.4 0 0 0 9 9 9 9 0 1 1-9-9Z'],
  X: ['M18 6 6 18', 'M6 6l12 12'],
  instagram: ['M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M17.5 6.5h.01'],
  youtube: ['M2.5 8.5A2.5 2.5 0 0 1 5 6h14a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 18H5a2.5 2.5 0 0 1-2.5-2.5v-7Z', 'm10 9 5 3-5 3V9Z'],
  bluesky: ['M7 4c2 2.5 3.5 5 5 7.5C13.5 9 15 6.5 17 4c1.5-1.8 4-2 4 1 0 2-1.2 5-2.5 6.5-1.4 1.7-2.9 2.7-4.5 4 1.5-.3 2.9-.1 4 1.1 1.8 1.8.9 5.4-2.2 5.4-1.5 0-3-.8-3.8-2.1-.8 1.3-2.3 2.1-3.8 2.1-3.1 0-4-3.6-2.2-5.4 1.1-1.2 2.5-1.4 4-1.1-1.6-1.3-3.1-2.3-4.5-4C4.2 10 3 7 3 5c0-3 2.5-2.8 4-1Z'],
  github: ['M9 19c-4 1.2-4-2-6-2', 'M15 22v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.2A5.6 5.6 0 0 0 19.2 4.5 5.2 5.2 0 0 0 19 1s-1.2-.4-4 1.5a13.7 13.7 0 0 0-6 0C6.2.6 5 1 5 1a5.2 5.2 0 0 0-.2 3.5 5.6 5.6 0 0 0-1.6 3.8c0 5.5 3.4 6.8 6.7 7.2A3.4 3.4 0 0 0 9 18.1V22'],
};

export const ICON_TYPES = Object.keys(ICON_PATHS);
export const ICON_VARIANT_ORDER = [
  'arrow-left',
  'arrow-right',
  'bluesky',
  'calendar',
  'check',
  'chevron-down',
  'email',
  'eye',
  'eye-off',
  'github',
  'instagram',
  'link',
  'menu-2',
  'minus',
  'moon',
  'plus',
  'quote',
  'search',
  'sun',
  'X',
  'youtube',
];

const ICON_ALIASES = {
  x: 'X',
  close: 'X',
  mail: 'email',
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * @param {{
 *  type?: string;
 *  decorative?: boolean;
 *  label?: string;
 *  strokeWidth?: number;
 * }} args
 */
export function createIcon({ type = 'arrow-left', decorative = true, label = 'Icon', strokeWidth = 1 } = {}) {
  const normalizedType = ICON_ALIASES[type] ?? type;
  const paths = ICON_PATHS[normalizedType] ?? ICON_PATHS['arrow-left'];
  const a11yAttrs = decorative
    ? 'aria-hidden="true"'
    : `role="img" aria-label="${escapeHtml(label)}"`;

  return `
    <span class="dds-icon" data-icon-type="${escapeHtml(normalizedType)}" style="--dds-icon-stroke-width:${Number(strokeWidth)};">
      <svg viewBox="0 0 24 24" fill="none" focusable="false" ${a11yAttrs}>
        ${paths.map((path) => `<path d="${path}"></path>`).join('')}
      </svg>
    </span>
  `;
}

function createFigureCard(content) {
  return `
    <div class="dds-icons-fig">
      <div class="dds-icons-fig__card">
        ${content}
      </div>
    </div>
  `;
}

function createIconGrid(types = ICON_TYPES) {
  const labelMap = {
    youtube: 'Youtube',
    X: 'x',
  };
  return `
    <div class="dds-icons-grid">
      ${types
        .map(
          (type) => `
            <div class="dds-icons-grid__item">
              ${createIcon({ type })}
              <p class="dds-icons-grid__label">${escapeHtml(labelMap[type] ?? type)}</p>
            </div>
          `,
        )
        .join('')}
    </div>
  `;
}

export function createIconsAnatomyFigure() {
  return createFigureCard(`
    <div class="dds-icons-fig__stack">
      ${createIcon({ type: 'arrow-right' })}
    </div>
  `);
}

export function createIconsVariantsFigure() {
  return createFigureCard(createIconGrid(ICON_VARIANT_ORDER));
}

export function createIconsVariantsStoryFigure() {
  return createFigureCard(createIconGrid(ICON_VARIANT_ORDER));
}

export function createIconsStatesStoryFigure() {
  return createFigureCard(`
    <div class="dds-icons-states">
      <div class="dds-icons-state-chip" data-state="default">
        ${createIcon({ type: 'search' })}
        <p>Default</p>
      </div>
      <div class="dds-icons-state-chip" data-state="interactive">
        ${createIcon({ type: 'search' })}
        <p>Interactive</p>
      </div>
      <div class="dds-icons-state-chip" data-state="disabled">
        ${createIcon({ type: 'search' })}
        <p>Disabled</p>
      </div>
    </div>
  `);
}

export function createIconsBestPracticesFigure() {
  return `
    <div class="dds-icons-doc__do-dont-grid">
      <section class="dds-icons-doc__do">
        <p><strong>Do</strong></p>
        <p><strong>Pair icons with text labels</strong></p>
        <p>Icons paired with text provide the clearest communication and strongest accessibility.</p>

        <p><strong>Use aria-hidden for decorative icons</strong></p>
        <p>When adjacent text already conveys meaning, mark icons <code>aria-hidden=\"true\"</code>.</p>

        <p><strong>Maintain consistent size and stroke</strong></p>
        <p>Use 24×24px icons with 1px stroke weight consistently.</p>

        <p><strong>Center-align icons with text</strong></p>
        <p>Use <code>align-items: center</code> so icon and label align correctly.</p>
      </section>

      <section class="dds-icons-doc__dont">
        <p><strong>Don't</strong></p>
        <p><strong>Don't use icons without labels or tooltips</strong></p>
        <p>Icon-only interfaces are harder to learn and less accessible.</p>

        <p><strong>Don't vary stroke weight between icons</strong></p>
        <p>Inconsistent stroke weight makes the icon set feel mismatched.</p>

        <p><strong>Don't mix icon styles in one interface</strong></p>
        <p>Stick to one icon family and weight for consistency.</p>

        <p><strong>Don't rely on color alone</strong></p>
        <p>Meaning should come from shape and context first, color second.</p>
      </section>
    </div>
  `;
}
