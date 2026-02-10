import './spacing.css';

const spacingTokens = [
  ['xs', '--space-xs-px', '--space-xs'],
  ['sm', '--space-sm-px', '--space-sm'],
  ['md', '--space-md-px', '--space-md'],
  ['lg', '--space-lg-px', '--space-lg'],
  ['xl', '--space-xl-px', '--space-xl'],
  ['xxl', '--space-xxl-px', '--space-xxl'],
  ['xxxl', '--space-xxxl-px', '--space-xxxl'],
  ['xxxxxl', '--space-xxxxxl-px', '--space-xxxxxl'],
];

const radiusTokens = [
  ['xs', '--radius-xs-px', '--radius-xs'],
  ['sm', '--radius-sm-px', '--radius-sm'],
  ['md', '--radius-md-px', '--radius-md'],
  ['lg', '--radius-lg-px', '--radius-lg'],
  ['xl', '--radius-xl-px', '--radius-xl'],
  ['xxl', '--radius-xxl-px', '--radius-xxl'],
  ['round', '--radius-round-px', '--radius-round'],
];

const pxValues = {
  mobile: {
    '--space-xs-px': 2,
    '--space-sm-px': 4,
    '--space-md-px': 8,
    '--space-lg-px': 12,
    '--space-xl-px': 16,
    '--space-xxl-px': 20,
    '--space-xxxl-px': 24,
    '--space-xxxxxl-px': 32,
    '--radius-xs-px': 2,
    '--radius-sm-px': 4,
    '--radius-md-px': 8,
    '--radius-lg-px': 16,
    '--radius-xl-px': 24,
    '--radius-xxl-px': 32,
    '--radius-round-px': 100,
  },
  widescreen: {
    '--space-xs-px': 4,
    '--space-sm-px': 8,
    '--space-md-px': 16,
    '--space-lg-px': 24,
    '--space-xl-px': 32,
    '--space-xxl-px': 40,
    '--space-xxxl-px': 48,
    '--space-xxxxxl-px': 64,
    '--radius-xs-px': 4,
    '--radius-sm-px': 8,
    '--radius-md-px': 16,
    '--radius-lg-px': 32,
    '--radius-xl-px': 48,
    '--radius-xxl-px': 64,
    '--radius-round-px': 100,
  },
};

export function createSpacingScale({ spaceMode = 'mobile' } = {}) {
  const rows = spacingTokens
    .map(([token, pxToken]) => {
      const px = pxValues[spaceMode][pxToken];
      const rem = (px / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
      return `
        <div class="spacing-row">
          <span class="spacing-token">${token}</span>
          <div class="spacing-bar-wrap"><div class="spacing-bar" style="width: ${px}px;"></div></div>
          <span class="spacing-value">${px}px / ${rem}rem</span>
        </div>
      `;
    })
    .join('');

  return `
    <section class="spacing-page" data-space-mode="${spaceMode}">
      <p class="spacing-mode-note">Space mode: ${spaceMode}</p>
      <div class="spacing-grid">${rows}</div>
    </section>
  `;
}

export function createSpacingReference({ spaceMode = 'mobile' } = {}) {
  const rows = spacingTokens
    .map(([token, pxToken]) => {
      const px = pxValues[spaceMode][pxToken];
      const rem = (px / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
      return `<tr><td>${token}</td><td>${px}px</td><td>${rem}rem</td></tr>`;
    })
    .join('');

  return `
    <section class="spacing-page" data-space-mode="${spaceMode}">
      <p class="spacing-mode-note">Space mode: ${spaceMode}</p>
      <table class="spacing-table">
        <thead>
          <tr><th>Token</th><th>Value (px)</th><th>Value (rem)</th></tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>
  `;
}

export function createRadiusScale({ spaceMode = 'mobile' } = {}) {
  const items = radiusTokens
    .map(([token, pxToken, remToken]) => {
      const px = pxValues[spaceMode][pxToken];
      const rem = (px / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
      return `
        <article class="radius-item">
          <div class="radius-shape" style="border-radius: var(${remToken});"></div>
          <p class="radius-label">${token}: ${px}px / ${rem}rem</p>
        </article>
      `;
    })
    .join('');

  return `
    <section class="spacing-page" data-space-mode="${spaceMode}">
      <p class="spacing-mode-note">Space mode: ${spaceMode}</p>
      <div class="radius-grid">${items}</div>
    </section>
  `;
}
