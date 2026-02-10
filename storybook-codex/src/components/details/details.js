import './details.css';

/**
 * @param {{
 *  summaryText?: string;
 *  bodyText?: string;
 *  state?: 'collapsed'|'expanded';
 *  widthMode?: 'fixed'|'fluid';
 * }} params
 */
export function createDetails({
  summaryText = 'Summary',
  bodyText = 'Body',
  state = 'collapsed',
  widthMode = 'fixed',
} = {}) {
  const open = state === 'expanded';

  return `
    <details class="dds-details dds-details--${widthMode}" ${open ? 'open' : ''}>
      <summary class="dds-details__summary">
        <span class="dds-details__summary-text">${summaryText}</span>
        <span class="dds-details__icon" aria-hidden="true">
          <span class="dds-details__icon-line dds-details__icon-line--horizontal"></span>
          <span class="dds-details__icon-line dds-details__icon-line--vertical"></span>
        </span>
      </summary>
      <div class="dds-details__body">
        <p class="dds-details__body-text">${bodyText}</p>
      </div>
    </details>
  `;
}

export function createDetailsShowcase() {
  return `
    <div class="dds-details-showcase">
      ${createDetails({ state: 'collapsed' })}
      ${createDetails({ state: 'expanded' })}
    </div>
  `;
}

export function createDetailsFaqShowcase() {
  return `
    <div class="dds-details-group">
      ${createDetails({ summaryText: 'Question 1', bodyText: 'Answer to question 1.', state: 'collapsed', widthMode: 'fluid' })}
      ${createDetails({ summaryText: 'Question 2', bodyText: 'Answer to question 2.', state: 'expanded', widthMode: 'fluid' })}
      ${createDetails({ summaryText: 'Question 3', bodyText: 'Answer to question 3.', state: 'collapsed', widthMode: 'fluid' })}
    </div>
  `;
}
