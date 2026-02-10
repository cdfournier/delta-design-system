import './feedback.css';

function clampPercent(value) {
  return Math.max(0, Math.min(100, value));
}

/**
 * @param {{
 *  label?: string;
 *  percent?: number;
 *  showValue?: boolean;
 *  valueText?: string;
 * }} params
 */
export function createProgressFeedback({
  label = 'Label',
  percent = 50,
  showValue = true,
  valueText,
} = {}) {
  const width = clampPercent(percent);

  return `
    <div class="dds-feedback dds-feedback--progress" role="group" aria-label="Progress">
      <p class="dds-feedback__label">${label}</p>
      <div class="dds-feedback__track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(width)}">
        <div class="dds-feedback__fill dds-feedback__fill--progress" style="width: ${width}%;"></div>
      </div>
      ${showValue ? `<p class="dds-feedback__value dds-feedback__value--right">${valueText ?? 'Value'}</p>` : ''}
    </div>
  `;
}

/**
 * @param {{
 *  label?: string;
 *  percent?: number;
 *  bounds?: 'optimum'|'low'|'high';
 *  showValue?: boolean;
 *  minLabel?: string;
 *  maxLabel?: string;
 * }} params
 */
export function createMeterFeedback({
  label = 'Label',
  percent = 50,
  bounds = 'optimum',
  showValue = true,
  minLabel = 'Min',
  maxLabel = 'Max',
} = {}) {
  const width = clampPercent(percent);

  return `
    <div class="dds-feedback dds-feedback--meter" role="group" aria-label="Meter ${bounds}">
      <p class="dds-feedback__label">${label}</p>
      <div class="dds-feedback__meter-shell">
        <div class="dds-feedback__track" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(width)}">
          <div class="dds-feedback__fill dds-feedback__fill--${bounds}" style="width: ${width}%;"></div>
        </div>
      </div>
      ${showValue ? `<p class="dds-feedback__value dds-feedback__value--spread"><span>${minLabel}</span><span>${maxLabel}</span></p>` : ''}
    </div>
  `;
}

/**
 * @param {{
 *  type?: 'progress'|'meter';
 *  label?: string;
 *  percent?: number;
 *  showValue?: boolean;
 *  valueText?: string;
 *  bounds?: 'optimum'|'low'|'high';
 *  minLabel?: string;
 *  maxLabel?: string;
 * }} params
 */
export function createFeedback({
  type = 'progress',
  label = 'Label',
  percent = 50,
  showValue = true,
  valueText = 'Value',
  bounds = 'optimum',
  minLabel = 'Min',
  maxLabel = 'Max',
} = {}) {
  if (type === 'meter') {
    return createMeterFeedback({ label, percent, bounds, showValue, minLabel, maxLabel });
  }

  return createProgressFeedback({ label, percent, showValue, valueText });
}

export function createFeedbackShowcase() {
  return `
    <div class="dds-feedback-showcase">
      ${createProgressFeedback({ percent: 50, showValue: true })}
      ${createMeterFeedback({ bounds: 'optimum', percent: 50, showValue: true })}
      ${createMeterFeedback({ bounds: 'low', percent: 16.67, showValue: true })}
      ${createMeterFeedback({ bounds: 'high', percent: 86.81, showValue: true })}
    </div>
  `;
}
