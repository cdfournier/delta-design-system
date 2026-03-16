function createFeedbackDocumentation() {
  return `
    <style>
      .delta-docs .feedback-specimen-shell {
        border-radius: var(--components-feedback-shell-radius);
        background: var(--components-feedback-shell-background);
      }

      [data-color-mode='dark'] .delta-docs .feedback-specimen-shell {
        background: var(--brand-secondary);
      }

      .delta-docs .feedback-specimen {
        width: min(100%, var(--components-feedback-max-width));
      }

      .delta-docs .feedback-specimen--progress {
        width: min(100%, var(--components-feedback-progress-width));
      }

      .delta-docs .feedback-specimen--meter {
        width: min(100%, var(--components-feedback-meter-width));
      }

      .delta-docs .feedback-specimen--variant {
        width: min(100%, var(--components-feedback-variant-width));
      }

      .delta-docs .feedback-specimen--value-display {
        width: min(100%, var(--components-feedback-value-display-width));
      }

      .delta-docs .feedback-specimen-stack {
        display: grid;
        gap: var(--components-feedback-stack-gap);
      }

      .delta-docs .feedback-specimen-grid {
        display: grid;
        gap: var(--components-feedback-demo-gap);
      }

      .delta-docs .feedback-specimen__label {
        margin: 0;
        padding-bottom: var(--components-feedback-label-padding-bottom);
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--small-font-size);
        line-height: var(--small-line-height);
        font-weight: var(--font-weight-bold);
      }

      .delta-docs .feedback-specimen__meter-wrap {
        padding: var(--components-feedback-meter-padding);
        border-radius: var(--border-radius-sm);
        background: var(--neutral-gray-medium);
      }

      .delta-docs .feedback-specimen__bar {
        width: 100%;
        height: var(--components-feedback-height);
        overflow: hidden;
        border-radius: var(--border-radius-sm);
        background: var(--neutral-gray-medium);
      }

      .delta-docs .feedback-specimen__bar--meter {
        background: transparent;
      }

      .delta-docs .feedback-specimen__fill {
        display: block;
        height: 100%;
        border-radius: var(--border-radius-sm);
      }

      .delta-docs .feedback-specimen__fill--progress {
        width: var(--components-feedback-progress-value-width);
        background: var(--brand-primary);
      }

      .delta-docs .feedback-specimen__fill--optimum {
        width: var(--components-feedback-meter-optimum-width);
        background: var(--status-valid);
      }

      .delta-docs .feedback-specimen__fill--low {
        width: var(--components-feedback-meter-low-width);
        background: var(--status-invalid);
      }

      .delta-docs .feedback-specimen__fill--high {
        width: var(--components-feedback-meter-high-width);
        background: var(--status-invalid);
      }

      .delta-docs .feedback-specimen__text-row {
        display: flex;
        justify-content: space-between;
        padding-top: var(--components-feedback-text-padding-top);
        color: var(--text-default);
        font-family: var(--font-family-body);
        font-size: var(--fine-font-size);
        line-height: var(--fine-line-height);
        font-weight: var(--font-weight-bold);
      }

      .delta-docs .feedback-specimen__text-row--right {
        justify-content: flex-end;
      }

      @media (min-width: 48rem) {
        .delta-docs .feedback-specimen-grid--three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .delta-docs .feedback-specimen-grid--two {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    </style>
    <article class="delta-docs">
      <h1>Feedback</h1>
      <p>Feedback components provide visual indicators of progress and value states. Progress shows task completion or loading states, while Meter displays values within a known range with semantic color coding.</p>

      <hr />

      <h2>Anatomy</h2>
      <p>Feedback components consist of two related sub-components — Progress and Meter — each with their own structure.</p>

      <h3>Progress</h3>
      <p>Progress components consist of:</p>
      <ul>
        <li><strong>Label:</strong> Text describing what's progressing</li>
        <li><strong>Bar (track):</strong> Background container showing full range</li>
        <li><strong>Value (fill):</strong> Filled portion indicating current progress</li>
        <li><strong>Value text (optional):</strong> Numeric or percentage display</li>
      </ul>

      <div class="delta-docs__demo feedback-specimen-shell" aria-label="Feedback progress anatomy specimen">
        <div class="feedback-specimen feedback-specimen--progress">
          <p class="feedback-specimen__label">Label</p>
          <div class="feedback-specimen__bar">
            <span class="feedback-specimen__fill feedback-specimen__fill--progress"></span>
          </div>
          <div class="feedback-specimen__text-row feedback-specimen__text-row--right">
            <span>Value</span>
          </div>
        </div>
      </div>

      <h3>Meter</h3>
      <p>Meter components consist of:</p>
      <ul>
        <li><strong>Label:</strong> Text describing what's being measured</li>
        <li><strong>Bar container:</strong> Padded wrapper for the meter bar</li>
        <li><strong>Bar (track):</strong> Background showing full range</li>
        <li><strong>Value (fill):</strong> Filled portion with semantic color (green for optimum, red for low/high)</li>
        <li><strong>Min/Max labels (optional):</strong> Range indicators</li>
      </ul>

      <div class="delta-docs__demo feedback-specimen-shell" aria-label="Feedback meter anatomy specimen">
        <div class="feedback-specimen feedback-specimen--meter">
          <p class="feedback-specimen__label">Label</p>
          <div class="feedback-specimen__meter-wrap">
            <div class="feedback-specimen__bar feedback-specimen__bar--meter">
              <span class="feedback-specimen__fill feedback-specimen__fill--optimum"></span>
            </div>
          </div>
          <div class="feedback-specimen__text-row">
            <span>Min</span>
            <span>Max</span>
          </div>
        </div>
      </div>

      <hr />

      <h2>Variants</h2>

      <h3>Progress</h3>
      <p>Progress has one variant controlling value text visibility:</p>
      <ul>
        <li><strong>With value (default):</strong> Shows numeric or percentage text alongside the bar</li>
        <li><strong>Without value:</strong> Displays only the visual bar, no text</li>
      </ul>

      <h3>Meter</h3>
      <p>Meter has two variant dimensions — bounds state and value display:</p>

      <p><strong>Bounds variants</strong></p>
      <ul>
        <li><strong>Optimum:</strong> Green fill indicates value is within the optimal range</li>
        <li><strong>Low:</strong> Red fill indicates value is below the acceptable threshold</li>
        <li><strong>High:</strong> Red fill indicates value exceeds the acceptable threshold</li>
      </ul>

      <div class="delta-docs__demo feedback-specimen-shell" aria-label="Feedback meter bounds variants">
        <div class="feedback-specimen-grid feedback-specimen-grid--three">
          <div class="feedback-specimen feedback-specimen--variant">
            <p class="feedback-specimen__label">Label</p>
            <div class="feedback-specimen__meter-wrap">
              <div class="feedback-specimen__bar feedback-specimen__bar--meter">
                <span class="feedback-specimen__fill feedback-specimen__fill--optimum"></span>
              </div>
            </div>
          </div>
          <div class="feedback-specimen feedback-specimen--variant">
            <p class="feedback-specimen__label">Label</p>
            <div class="feedback-specimen__meter-wrap">
              <div class="feedback-specimen__bar feedback-specimen__bar--meter">
                <span class="feedback-specimen__fill feedback-specimen__fill--low"></span>
              </div>
            </div>
          </div>
          <div class="feedback-specimen feedback-specimen--variant">
            <p class="feedback-specimen__label">Label</p>
            <div class="feedback-specimen__meter-wrap">
              <div class="feedback-specimen__bar feedback-specimen__bar--meter">
                <span class="feedback-specimen__fill feedback-specimen__fill--high"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p><strong>Value display variants</strong></p>
      <ul>
        <li><strong>With min/max (default):</strong> Shows range labels below the bar</li>
        <li><strong>Without min/max:</strong> Displays only the visual meter, no range labels</li>
      </ul>

      <div class="delta-docs__demo feedback-specimen-shell" aria-label="Feedback meter value display variants">
        <div class="feedback-specimen-grid feedback-specimen-grid--two">
          <div class="feedback-specimen feedback-specimen--value-display">
            <p class="feedback-specimen__label">Label</p>
            <div class="feedback-specimen__meter-wrap">
              <div class="feedback-specimen__bar feedback-specimen__bar--meter">
                <span class="feedback-specimen__fill feedback-specimen__fill--optimum"></span>
              </div>
            </div>
            <div class="feedback-specimen__text-row">
              <span>Min</span>
              <span>Max</span>
            </div>
          </div>
          <div class="feedback-specimen feedback-specimen--value-display">
            <p class="feedback-specimen__label">Label</p>
            <div class="feedback-specimen__meter-wrap">
              <div class="feedback-specimen__bar feedback-specimen__bar--meter">
                <span class="feedback-specimen__fill feedback-specimen__fill--optimum"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>States</h2>

      <h3>Progress states</h3>
      <ul>
        <li><strong>Indeterminate:</strong> When duration is unknown (typically animated)</li>
        <li><strong>Determinate:</strong> Shows specific progress percentage</li>
        <li><strong>Complete:</strong> Value reaches 100%</li>
      </ul>

      <h3>Meter states</h3>
      <ul>
        <li><strong>Optimum:</strong> Value within desired range (green)</li>
        <li><strong>Low:</strong> Value below threshold (red)</li>
        <li><strong>High:</strong> Value above threshold (red)</li>
      </ul>

      <hr />

      <h2>Typography</h2>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Label font-size</td>
            <td><code>small/font-size</code></td>
            <td>0.75rem / 12px</td>
            <td>1.25rem / 20px</td>
          </tr>
          <tr>
            <td>Label line-height</td>
            <td><code>small/line-height</code></td>
            <td>1.25rem / 20px</td>
            <td>1.875rem / 30px</td>
          </tr>
          <tr>
            <td>Value, Min, Max font-size</td>
            <td><code>fine/font-size</code></td>
            <td>0.625rem / 10px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>Value, Min, Max line-height</td>
            <td><code>fine/line-height</code></td>
            <td>1rem / 16px</td>
            <td>1.5rem / 24px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Spacing</h2>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>height</td>
            <td><code>components/feedback/height</code></td>
            <td>0.25rem / 4px</td>
            <td>0.75rem / 12px</td>
          </tr>
          <tr>
            <td>padding-bottom (label), padding-top (value text)</td>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>Meter bar padding</td>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Border-radius</h2>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bar border-radius</td>
            <td><code>border-radius/sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>Value fill border-radius</td>
            <td><code>border-radius/sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Colors</h2>

      <h3>Progress</h3>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Token</th>
            <th>Light mode</th>
            <th>Dark mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Label text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Value text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Bar (track)</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Value (fill)</td>
            <td><code>brand/primary</code></td>
            <td>#FF5247</td>
            <td>#FF5247</td>
          </tr>
        </tbody>
      </table>

      <h3>Meter</h3>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Token</th>
            <th>Light mode</th>
            <th>Dark mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Label text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Min/Max text</td>
            <td><code>text/default</code></td>
            <td>#000000 (global/black)</td>
            <td>#FFFFFF (global/white)</td>
          </tr>
          <tr>
            <td>Bar (track)</td>
            <td><code>global/gray-medium</code></td>
            <td>#CCCCCC</td>
            <td>#CCCCCC</td>
          </tr>
          <tr>
            <td>Value — Optimum</td>
            <td><code>status/valid</code></td>
            <td>#007000</td>
            <td>#007000</td>
          </tr>
          <tr>
            <td>Value — Low/High</td>
            <td><code>status/invalid</code></td>
            <td>#C00C00</td>
            <td>#C00C00</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Light/Dark mode behavior:</strong> Text colors adapt through the <code>text/default</code> token (black in light mode, white in dark mode). Bar track and fill colors are mode-invariant — they remain consistent across modes for clarity and immediate recognition.</p>

      <hr />

      <h2>Accessibility</h2>

      <h3>Keyboard navigation</h3>
      <p>Progress and Meter are display-only components with no interactive states. They do not receive keyboard focus and require no keyboard navigation support.</p>

      <h3>Screen readers</h3>
      <p>Use native HTML elements whenever possible — they provide built-in semantics and accessibility support with no additional ARIA required:</p>
      <ul>
        <li><strong>Progress:</strong> Use the <code>&lt;progress&gt;</code> element with <code>value</code> and <code>max</code> attributes. Screen readers will announce the current value and percentage automatically.</li>
        <li><strong>Meter:</strong> Use the <code>&lt;meter&gt;</code> element with <code>value</code>, <code>min</code>, <code>max</code>, <code>low</code>, <code>high</code>, and <code>optimum</code> attributes. This conveys the full range context to assistive technology.</li>
      </ul>
      <p>For dynamic progress updates, add <code>aria-live="polite"</code> to the wrapper element so screen readers announce value changes without interrupting the user.</p>

      <h3>ARIA attributes</h3>
      <p>When custom implementations are required (e.g. styled bars that cannot use native elements), apply these ARIA attributes:</p>
      <ul>
        <li><strong>role="progressbar":</strong> For custom progress indicators</li>
        <li><strong>role="meter":</strong> For custom meter indicators</li>
        <li><strong>aria-valuenow:</strong> The current numeric value</li>
        <li><strong>aria-valuemin:</strong> The minimum value of the range</li>
        <li><strong>aria-valuemax:</strong> The maximum value of the range</li>
        <li><strong>aria-valuetext:</strong> A human-readable description of the value (e.g. "60 percent, optimal")</li>
        <li><strong>aria-labelledby:</strong> Associates the component with its visible label element</li>
      </ul>

      <h3>Focus management</h3>
      <p>Progress and Meter are non-interactive and should not be included in the tab order. Do not add <code>tabindex</code> to these components. Focus management is not applicable.</p>

      <h3>Color contrast</h3>
      <p>Meter states use color to communicate meaning (green for optimum, red for low/high). Color alone must not be the only means of conveying this information:</p>
      <ul>
        <li>Always include visible Min/Max labels to provide range context</li>
        <li>Consider adding supplementary text indicators (e.g. "Low", "Optimal", "High") adjacent to the component when the bounds state is critical to the user's task</li>
        <li>Use <code>aria-valuetext</code> to describe the state for screen reader users</li>
        <li>The status colors (#007000 and #C00C00) meet WCAG AA contrast requirements against white backgrounds</li>
      </ul>

      <hr />

      <h2>Usage</h2>

      <h3>When to use</h3>
      <p>Use Progress when you need to:</p>
      <ul>
        <li>Show task completion percentage</li>
        <li>Display loading states or file uploads</li>
        <li>Indicate steps completed in a multi-step process</li>
        <li>Visualize time remaining for time-based operations</li>
      </ul>
      <p>Use Meter when you need to:</p>
      <ul>
        <li>Show a value within a known range (e.g. disk usage, battery level)</li>
        <li>Display measurements with optimal or suboptimal thresholds</li>
        <li>Indicate capacity, quota usage, or resource consumption</li>
        <li>Visualize ratings or scores with defined ranges</li>
      </ul>

      <h3>When not to use</h3>
      <p>Do not use Progress when:</p>
      <ul>
        <li>The value is static and doesn't move toward completion — use Meter instead</li>
        <li>You need to show a value within a bounded range with semantic meaning — use Meter instead</li>
      </ul>
      <p>Do not use Meter when:</p>
      <ul>
        <li>You are showing a task progressing toward completion — use Progress instead</li>
        <li>There is no defined range or threshold — the component's meaning depends on known min/max bounds</li>
      </ul>

      <h3>Choosing between Progress and Meter</h3>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Progress</th>
            <th>Meter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Purpose</td>
            <td>Task completion / loading</td>
            <td>Value within a range</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>Always brand primary</td>
            <td>Semantic (green/red based on bounds)</td>
          </tr>
          <tr>
            <td>Direction</td>
            <td>Always moves toward 100%</td>
            <td>Can be anywhere in range</td>
          </tr>
          <tr>
            <td>Labels</td>
            <td>Single value or percentage</td>
            <td>Min and max range indicators</td>
          </tr>
        </tbody>
      </table>

      <h3>Content guidelines</h3>
      <ul>
        <li><strong>Write clear labels:</strong> Describe what's being measured or progressing — labels should be specific enough that users understand the context without needing additional explanation</li>
        <li><strong>Show meaningful values:</strong> Include units (%, MB, GB, etc.) when displaying numeric values so users can interpret the number at a glance</li>
        <li><strong>Provide range context:</strong> For Meter, always include min/max labels to clarify the bounds — a value of 60 means nothing without knowing the scale</li>
        <li><strong>Handle indeterminate states:</strong> Use the indeterminate Progress variant (no value attribute) when the duration of an operation is unknown</li>
      </ul>

      <h3>Placement</h3>
      <p>Feedback components are typically placed in close proximity to the content or process they describe. Progress bars are commonly found in upload dialogs, onboarding flows, and multi-step forms. Meter components appear in settings panels, dashboards, and data visualizations where capacity or resource usage is relevant. Both components span the full width of their container by default and should be given sufficient horizontal space to be legible — the minimum width is 16rem / 256px.</p>

      <h3>Best practices</h3>

      <div class="delta-docs__do-dont-grid">
        <div class="delta-docs__practice delta-docs__practice--do">
          <h3>Do</h3>
          <p><strong>Use native HTML elements</strong></p>
          <p>Native progress and meter elements provide built-in accessibility and semantic meaning.</p>
          <p><strong>Provide descriptive labels</strong></p>
          <p>Always label progress and meter components so users understand what's being measured.</p>
          <p><strong>Show progress for long operations</strong></p>
          <p>Any operation taking more than 2 seconds should display progress feedback.</p>
          <p><strong>Use semantic colors appropriately</strong></p>
          <p>Meter colors should match user expectations (green = good, red = warning/error).</p>
        </div>

        <div class="delta-docs__practice delta-docs__practice--dont">
          <h3>Don't</h3>
          <p><strong>Don't confuse progress with meter</strong></p>
          <p>Use Progress for completion, Meter for values within a range. They serve different purposes.</p>
          <p><strong>Don't rely on color alone</strong></p>
          <p>Meter state must be conveyed through labels or text, not just color changes.</p>
          <p><strong>Don't hide progress indicators</strong></p>
          <p>Users need visual feedback during loading or processing to know the system is working.</p>
          <p><strong>Don't use progress for static values</strong></p>
          <p>If the value doesn't change or move toward completion, use Meter instead.</p>
        </div>
      </div>

      <hr />

      <h2>Code reference</h2>

      <h3>HTML</h3>
      <pre><code>&lt;!-- Progress (native) --&gt;
&lt;div class="feedback progress"&gt;
  &lt;label for="progress-1"&gt;Label&lt;/label&gt;
  &lt;progress id="progress-1" value="60" max="100"&gt;60%&lt;/progress&gt;
  &lt;div class="feedback-text"&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;60%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Progress (custom) --&gt;
&lt;div class="feedback progress"&gt;
  &lt;div class="feedback-label" id="progress-label"&gt;Loading...&lt;/div&gt;
  &lt;div class="feedback-bar" 
       role="progressbar" 
       aria-labelledby="progress-label"
       aria-valuenow="60" 
       aria-valuemin="0" 
       aria-valuemax="100"
       aria-valuetext="60 percent"&gt;
    &lt;div class="feedback-value" style="width: 60%"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="feedback-text"&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;60%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Meter (native) --&gt;
&lt;div class="feedback meter"&gt;
  &lt;label for="meter-1"&gt;Disk usage&lt;/label&gt;
  &lt;meter id="meter-1" 
         value="60" 
         min="0" 
         max="100" 
         low="33" 
         high="66" 
         optimum="50"&gt;60%&lt;/meter&gt;
  &lt;div class="feedback-text"&gt;
    &lt;span&gt;0 GB&lt;/span&gt;
    &lt;span&gt;100 GB&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Meter - Optimum (custom) --&gt;
&lt;div class="feedback meter"&gt;
  &lt;div class="feedback-label" id="meter-label"&gt;Battery level&lt;/div&gt;
  &lt;div class="meter-bar"&gt;
    &lt;div class="feedback-bar" 
         role="meter"
         aria-labelledby="meter-label"
         aria-valuenow="60" 
         aria-valuemin="0" 
         aria-valuemax="100"
         aria-valuetext="60 percent, optimal"&gt;
      &lt;div class="feedback-value optimum" style="width: 60%"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="feedback-text"&gt;
    &lt;span&gt;0%&lt;/span&gt;
    &lt;span&gt;100%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Meter - Low state --&gt;
&lt;div class="feedback meter"&gt;
  &lt;div class="feedback-label"&gt;Storage available&lt;/div&gt;
  &lt;div class="meter-bar"&gt;
    &lt;div class="feedback-bar"&gt;
      &lt;div class="feedback-value low" 
           style="width: 15%"
           aria-valuetext="15 percent, critically low"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="feedback-text"&gt;
    &lt;span&gt;0 GB&lt;/span&gt;
    &lt;span&gt;500 GB&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>/* Feedback base */
.feedback {
  max-width: var(--components/feedback/max-width);
}

/* Label */
.feedback-label {
  font-size: var(--small/font-size);
  line-height: var(--small/line-height);
  padding-bottom: var(--sm);
  color: var(--text/default);
}

/* Bar (track) */
.feedback-bar {
  background-color: var(--global/gray-medium);
  border-radius: var(--border-radius/sm);
  overflow: hidden;
  position: relative;
}

/* Value (fill) */
.feedback-value {
  border-radius: var(--border-radius/sm);
  transition: width 0.3s ease;
}

/* Progress colors */
.progress .feedback-value {
  background-color: var(--brand/primary);
}

/* Meter colors */
.meter .feedback-value.optimum {
  background-color: var(--status/valid);
}

.meter .feedback-value.low,
.meter .feedback-value.high {
  background-color: var(--status/invalid);
}

/* Meter bar padding wrapper */
.meter-bar {
  padding: var(--xs);
  background-color: var(--global/gray-medium);
  border-radius: var(--border-radius/sm);
}

/* Value/Min/Max text */
.feedback-text {
  font-size: var(--fine/font-size);
  line-height: var(--fine/line-height);
  padding-top: var(--sm);
  display: flex;
  justify-content: space-between;
  color: var(--text/default);
}

/* Native element styling */
progress,
meter {
  appearance: none;
  border: none;
}

progress::-webkit-progress-bar,
meter::-webkit-meter-bar {
  background-color: var(--global/gray-medium);
  border-radius: var(--border-radius/sm);
}

progress::-webkit-progress-value {
  background-color: var(--brand/primary);
  border-radius: var(--border-radius/sm);
}

meter::-webkit-meter-optimum-value {
  background-color: var(--status/valid);
}

meter::-webkit-meter-suboptimum-value {
  background-color: var(--status/invalid);
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--small/font-size      Mobile: 0.75rem / 12px    →   Widescreen: 1.25rem / 20px
--small/line-height    Mobile: 1.25rem / 20px    →   Widescreen: 1.875rem / 30px
--fine/font-size       Mobile: 0.625rem / 10px   →   Widescreen: 1rem / 16px
--fine/line-height     Mobile: 1rem / 16px       →   Widescreen: 1.5rem / 24px

/* Spacing */
--components/feedback/height     Mobile: 0.25rem / 4px    →   Widescreen: 0.75rem / 12px
--sm                             Mobile: 0.25rem / 4px    →   Widescreen: 0.5rem / 8px
--xs                             Mobile: 0.125rem / 2px   →   Widescreen: 0.25rem / 4px

/* Border-radius */
--border-radius/sm               Mobile: 0.25rem / 4px    →   Widescreen: 0.5rem / 8px

/* Colors */
--text/default         Light: #000000   Dark: #FFFFFF
--global/gray-medium   Light: #CCCCCC   Dark: #CCCCCC
--brand/primary        Light: #FF5247   Dark: #FF5247
--status/valid         Light: #007000   Dark: #007000
--status/invalid       Light: #C00C00   Dark: #C00C00</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" target="_blank">MDN: progress element</a> — Native HTML progress documentation</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" target="_blank">MDN: meter element</a> — Native HTML meter documentation</li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/meter/" target="_blank">ARIA: Meter Pattern</a> — W3C meter accessibility guidance</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">WCAG 2.1 Quick Reference</a> — Accessibility guidelines</li>
        <li><a href="https://www.nngroup.com/articles/progress-indicators/" target="_blank">Nielsen Norman Group: Progress Indicators</a> — UX best practices</li>
      </ul>
    </article>
  `;
}

const meta = {
  title: 'Components/Feedback',
};

export default meta;

export const Documentation = () => createFeedbackDocumentation();
