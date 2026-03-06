import './feedback.css';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function clampPercent(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.min(100, numeric));
}

/**
 * @param {{
 *  type?: 'progress'|'meter';
 *  label?: string;
 *  percent?: number;
 *  bounds?: 'optimum'|'low'|'high';
 *  showValue?: boolean;
 *  valueText?: string;
 *  showRange?: boolean;
 *  minLabel?: string;
 *  maxLabel?: string;
 * }} args
 */
export function createFeedback({
  type = 'progress',
  label = 'Label',
  percent = 60,
  bounds = 'optimum',
  showValue = true,
  valueText = 'Value',
  showRange = true,
  minLabel = 'Min',
  maxLabel = 'Max',
} = {}) {
  const safePercent = clampPercent(percent);
  const fillWidth = `${safePercent}%`;
  const safeType = type === 'meter' ? 'meter' : 'progress';
  const safeBounds = ['optimum', 'low', 'high'].includes(bounds) ? bounds : 'optimum';

  const progressMarkup = `
    <div class="dds-feedback dds-feedback--progress">
      <p class="dds-feedback__label">${escapeHtml(label)}</p>
      <div class="dds-feedback__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${safePercent}" aria-label="${escapeHtml(label)}">
        <div class="dds-feedback__fill dds-feedback__fill--progress" style="width: ${fillWidth};"></div>
      </div>
      ${showValue ? `<p class="dds-feedback__value-row">${escapeHtml(valueText)}</p>` : ''}
    </div>
  `;

  const meterMarkup = `
    <div class="dds-feedback dds-feedback--meter">
      <p class="dds-feedback__label">${escapeHtml(label)}</p>
      <div class="dds-feedback__meter-shell">
        <div class="dds-feedback__bar" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${safePercent}" aria-label="${escapeHtml(label)}">
          <div class="dds-feedback__fill dds-feedback__fill--${safeBounds}" style="width: ${fillWidth};"></div>
        </div>
      </div>
      ${showRange ? `<p class="dds-feedback__range-row"><span>${escapeHtml(minLabel)}</span><span>${escapeHtml(maxLabel)}</span></p>` : ''}
    </div>
  `;

  return safeType === 'meter' ? meterMarkup : progressMarkup;
}

function figureShell(content) {
  return `<section class="dds-feedback__fig"><div class="dds-feedback__fig-card">${content}</div></section>`;
}

export function createFeedbackAnatomyProgressFigure() {
  return figureShell(createFeedback({ type: 'progress', showValue: true, valueText: 'Value' }));
}

export function createFeedbackAnatomyMeterFigure() {
  return figureShell(createFeedback({ type: 'meter', bounds: 'optimum', showRange: true }));
}

export function createFeedbackMeterBoundsFigure() {
  return figureShell(`
    <div class="dds-feedback__fig-col">
      ${createFeedback({ type: 'meter', label: 'Optimum', bounds: 'optimum', percent: 60, showRange: false })}
      ${createFeedback({ type: 'meter', label: 'Low', bounds: 'low', percent: 30, showRange: false })}
      ${createFeedback({ type: 'meter', label: 'High', bounds: 'high', percent: 90, showRange: false })}
    </div>
  `);
}

export function createFeedbackMeterValueDisplayFigure() {
  return figureShell(`
    <div class="dds-feedback__fig-grid">
      ${createFeedback({ type: 'meter', label: 'Label', bounds: 'optimum', percent: 60, showRange: true, minLabel: 'Min', maxLabel: 'Max' })}
      ${createFeedback({ type: 'meter', label: 'Label', bounds: 'optimum', percent: 60, showRange: false })}
    </div>
  `);
}

export function createFeedbackBestPracticesFigure() {
  return `
    <div class="dds-feedback__do-dont-grid">
      <section class="dds-feedback__do">
        <h4>Do</h4>
        <p><strong>Use native HTML elements</strong></p>
        <p>Native progress and meter elements provide built-in accessibility and semantic meaning.</p>

        <p><strong>Provide descriptive labels</strong></p>
        <p>Always label progress and meter components so users understand what is being measured.</p>

        <p><strong>Show progress for long operations</strong></p>
        <p>Any operation taking more than 2 seconds should display progress feedback.</p>

        <p><strong>Use semantic colors appropriately</strong></p>
        <p>Meter colors should match user expectations: green means good and red means warning/error.</p>
      </section>

      <section class="dds-feedback__dont">
        <h4>Don't</h4>
        <p><strong>Don't confuse progress with meter</strong></p>
        <p>Use Progress for completion and Meter for values in a known range.</p>

        <p><strong>Don't rely on color alone</strong></p>
        <p>Meter state must be conveyed through labels or text, not only by color.</p>

        <p><strong>Don't hide progress indicators</strong></p>
        <p>Users need visible feedback during loading or processing to know the system is working.</p>

        <p><strong>Don't use progress for static values</strong></p>
        <p>If a value does not move toward completion, use Meter instead.</p>
      </section>
    </div>
  `;
}
