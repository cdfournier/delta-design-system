export default {
  title: 'Foundations/Spacing',
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Spacing</h1>
      <p>Consistent spacing creates visual rhythm, improves readability, and establishes clear relationships between elements.</p>

      <hr>

      <h2>Spacing philosophy</h2>
      <p>The Delta Design System uses a systematic spacing scale that adapts responsively. On mobile and tablet, spacing values support compact layouts. On widescreen, spacing doubles to match larger typography and take advantage of available screen space.</p>
      <p>Using semantic tokens like <code>--spacing-xl</code> ensures spacing automatically adjusts at the responsive breakpoint. Hardcoding pixel values bypasses this mechanism and creates inconsistency across screen sizes.</p>

      <hr>

      <h2>The spacing system</h2>

      <p>The spacing scale provides values for margins, padding, and gaps throughout the system. Values scale proportionally across breakpoints.</p>

      <h3>Spacing scale</h3>

      <p><strong>Mobile &amp; Tablet:</strong></p>

      <div class="spacing-specimen">
        <div class="spacing-visual">
          <small class="spacing-label">xs</small>
          <div class="spacing-bar" style="width: 0.125rem;"></div>
          <small class="spacing-value">0.125rem / 2px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">sm</small>
          <div class="spacing-bar" style="width: 0.25rem;"></div>
          <small class="spacing-value">0.25rem / 4px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">md</small>
          <div class="spacing-bar" style="width: 0.5rem;"></div>
          <small class="spacing-value">0.5rem / 8px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">lg</small>
          <div class="spacing-bar" style="width: 0.75rem;"></div>
          <small class="spacing-value">0.75rem / 12px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xl</small>
          <div class="spacing-bar" style="width: 1rem;"></div>
          <small class="spacing-value">1rem / 16px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xxl</small>
          <div class="spacing-bar" style="width: 1.25rem;"></div>
          <small class="spacing-value">1.25rem / 20px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xxxl</small>
          <div class="spacing-bar" style="width: 1.5rem;"></div>
          <small class="spacing-value">1.5rem / 24px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xxxxl</small>
          <div class="spacing-bar" style="width: 2rem;"></div>
          <small class="spacing-value">2rem / 32px</small>
        </div>
      </div>

      <p><strong>Widescreen (80rem / 1280px+):</strong></p>

      <div class="spacing-specimen">
        <div class="spacing-visual">
          <small class="spacing-label">xs</small>
          <div class="spacing-bar" style="width: 0.25rem;"></div>
          <small class="spacing-value">0.25rem / 4px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">sm</small>
          <div class="spacing-bar" style="width: 0.5rem;"></div>
          <small class="spacing-value">0.5rem / 8px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">md</small>
          <div class="spacing-bar" style="width: 1rem;"></div>
          <small class="spacing-value">1rem / 16px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">lg</small>
          <div class="spacing-bar" style="width: 1.5rem;"></div>
          <small class="spacing-value">1.5rem / 24px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xl</small>
          <div class="spacing-bar" style="width: 2rem;"></div>
          <small class="spacing-value">2rem / 32px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xxl</small>
          <div class="spacing-bar" style="width: 2.5rem;"></div>
          <small class="spacing-value">2.5rem / 40px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xxxl</small>
          <div class="spacing-bar" style="width: 3rem;"></div>
          <small class="spacing-value">3rem / 48px</small>
        </div>
        <div class="spacing-visual">
          <small class="spacing-label">xxxxl</small>
          <div class="spacing-bar" style="width: 4rem;"></div>
          <small class="spacing-value">4rem / 64px</small>
        </div>
      </div>

      <h3>Spacing reference</h3>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td><code>sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td><code>md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td><code>lg</code></td>
            <td>0.75rem / 12px</td>
            <td>1.5rem / 24px</td>
          </tr>
          <tr>
            <td><code>xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td><code>xxl</code></td>
            <td>1.25rem / 20px</td>
            <td>2.5rem / 40px</td>
          </tr>
          <tr>
            <td><code>xxxl</code></td>
            <td>1.5rem / 24px</td>
            <td>3rem / 48px</td>
          </tr>
          <tr>
            <td><code>xxxxl</code></td>
            <td>2rem / 32px</td>
            <td>4rem / 64px</td>
          </tr>
        </tbody>
      </table>

      <h3>Responsive scaling</h3>

      <p>Spacing values double on widescreen to maintain proportional relationships with the larger typography scale. This creates visual harmony across all screen sizes.</p>

      <ul>
        <li><strong>Mobile/Tablet:</strong> Base spacing scale (2px&ndash;32px)</li>
        <li><strong>Widescreen:</strong> Doubled spacing scale (4px&ndash;64px)</li>
      </ul>

      <h3>Scale rationale</h3>

      <p>The spacing scale follows a logical progression that provides enough granularity for tight component spacing while avoiding arbitrary values. On widescreen, the entire scale doubles to remain proportional with the larger type and layout scale.</p>

      <h3>Relative units</h3>

      <p>The spacing system uses rem units, maintaining consistent relationships with typography as content scales. When users adjust their browser's base font size, spacing scales proportionally with text &mdash; ensuring layouts maintain their visual rhythm for users who customize their reading experience.</p>

      <hr>

      <h2>Border-radius scale</h2>

      <p>Corner rounding follows the same systematic approach as spacing. Border-radius values also scale responsively across breakpoints.</p>

      <p><strong>Mobile &amp; Tablet:</strong></p>

      <div class="radius-grid">
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 0.125rem;"></div>
          <small class="radius-label">xs &mdash; 2px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 0.25rem;"></div>
          <small class="radius-label">sm &mdash; 4px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 0.5rem;"></div>
          <small class="radius-label">md &mdash; 8px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 1rem;"></div>
          <small class="radius-label">lg &mdash; 16px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 1.5rem;"></div>
          <small class="radius-label">xl &mdash; 24px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 2rem;"></div>
          <small class="radius-label">xxl &mdash; 32px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 6.25rem;"></div>
          <small class="radius-label">round &mdash; 100px</small>
        </div>
      </div>

      <p><strong>Widescreen (80rem / 1280px+):</strong></p>

      <div class="radius-grid">
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 0.25rem;"></div>
          <small class="radius-label">xs &mdash; 4px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 0.5rem;"></div>
          <small class="radius-label">sm &mdash; 8px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 1rem;"></div>
          <small class="radius-label">md &mdash; 16px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 2rem;"></div>
          <small class="radius-label">lg &mdash; 32px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 3rem;"></div>
          <small class="radius-label">xl &mdash; 48px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 4rem;"></div>
          <small class="radius-label">xxl &mdash; 64px</small>
        </div>
        <div class="radius-item">
          <div class="radius-specimen" style="border-radius: 6.25rem;"></div>
          <small class="radius-label">round &mdash; 100px</small>
        </div>
      </div>

      <h3>Border-radius reference</h3>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Mobile/Tablet</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>border-radius/xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td><code>border-radius/sm</code></td>
            <td>0.25rem / 4px</td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td><code>border-radius/md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td><code>border-radius/lg</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
          <tr>
            <td><code>border-radius/xl</code></td>
            <td>1.5rem / 24px</td>
            <td>3rem / 48px</td>
          </tr>
          <tr>
            <td><code>border-radius/xxl</code></td>
            <td>2rem / 32px</td>
            <td>4rem / 64px</td>
          </tr>
          <tr>
            <td><code>border-radius/round</code></td>
            <td>6.25rem / 100px</td>
            <td>6.25rem / 100px</td>
          </tr>
        </tbody>
      </table>

      <p><code>border-radius/round</code> does not scale responsively.</p>

      <hr>

      <h2>Accessibility</h2>

      <h3>Touch targets</h3>

      <p>Interactive elements require minimum dimensions for accessibility:</p>
      <ul>
        <li><strong>Minimum touch target:</strong> 44&times;44px (WCAG 2.1 Level AA)</li>
        <li><strong>Recommended touch target:</strong> 48&times;48px for improved usability</li>
        <li><strong>Spacing between targets:</strong> Minimum <code>md</code> (0.5rem / 8px mobile) to prevent mis-taps</li>
      </ul>

      <h3>Visual separation</h3>

      <p>Adequate spacing helps users understand relationships and navigate content:</p>
      <ul>
        <li><strong>Related elements:</strong> Close proximity (<code>sm</code> to <code>md</code>) signals grouping</li>
        <li><strong>Distinct sections:</strong> Larger gaps (<code>xxl</code> to <code>xxxl</code>) create clear boundaries</li>
        <li><strong>White space:</strong> Generous spacing reduces cognitive load and improves readability</li>
      </ul>

      <hr>

      <h2>Usage</h2>

      <h3>When to use each size</h3>

      <p><strong>xs:</strong> Minimal spacing between tightly related elements. Use for fine adjustments or elements that need to feel closely connected.</p>
      <p><strong>sm:</strong> Small internal spacing within components. Use for padding inside compact elements, gaps between icons and labels, or subtle separations.</p>
      <p><strong>md:</strong> Default spacing for related elements. Use for padding in buttons, gaps in component groups, or internal spacing within cards.</p>
      <p><strong>lg:</strong> Moderate spacing between related sections. Use for margins between form fields, spacing in navigation, or gaps in content blocks.</p>
      <p><strong>xl:</strong> Standard spacing between distinct elements. Use for paragraph spacing, margins between components, or padding in containers.</p>
      <p><strong>xxl:</strong> Increased spacing for emphasis. Use for margins around important elements or to create breathing room in dense layouts.</p>
      <p><strong>xxxl:</strong> Large spacing between related sections. Use for separating content areas or creating visual breaks.</p>
      <p><strong>xxxxl:</strong> Maximum spacing between major sections. Use for separating distinct content areas or creating strong visual breaks.</p>

      <h3>Vertical rhythm</h3>

      <p>Consistent vertical spacing creates a predictable reading experience. The spacing system works with typography to establish rhythm:</p>

      <ul>
        <li><strong>Paragraph spacing:</strong> <code>xl</code> (1rem / 16px mobile, 2rem / 32px widescreen)</li>
        <li><strong>Section breaks:</strong> <code>xxxxl</code> (2rem / 32px mobile, 4rem / 64px widescreen) between major content areas</li>
        <li><strong>List item spacing:</strong> <code>xl</code> (1rem / 16px mobile, 2rem / 32px widescreen)</li>
      </ul>

      <h3>Horizontal spacing</h3>

      <p>Horizontal spacing creates relationships and separations between elements:</p>

      <ul>
        <li><strong>Component gaps:</strong> Use <code>md</code> or <code>lg</code> for related elements</li>
        <li><strong>Grid gutters:</strong> <code>xl</code> provides comfortable breathing room</li>
        <li><strong>Button groups:</strong> <code>sm</code> to <code>md</code> keeps actions visually connected</li>
      </ul>

      <h3>Best practices</h3>

      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>

          <p><strong>Use spacing tokens</strong></p>
          <p>Reference tokens like <code>--spacing-xl</code> instead of arbitrary pixel values. Tokens ensure spacing scales automatically at the widescreen breakpoint.</p>

          <p><strong>Let spacing scale responsively</strong></p>
          <p>Trust the system to handle responsive spacing adjustments. Tokens update automatically at <code>80rem</code> without any additional media query work.</p>

          <p><strong>Match spacing to content relationships</strong></p>
          <p>Use tighter spacing for related elements, looser spacing for distinct sections. Proximity communicates grouping.</p>

          <p><strong>Scale spacing with element size</strong></p>
          <p>Larger elements typically need proportionally larger spacing around them to maintain visual balance.</p>
        </div>

        <div class="dont-section">
          <h3>Don't</h3>

          <p><strong>Don't use arbitrary values</strong></p>
          <p>Avoid one-off spacing like 13px or 27px. If you need something between two steps, use the closer token &mdash; don't invent a new value.</p>

          <p><strong>Don't override responsive scaling</strong></p>
          <p>Avoid hardcoding px values in component styles. This prevents spacing from adjusting at the widescreen breakpoint.</p>

          <p><strong>Don't skip steps in the scale</strong></p>
          <p>If you need spacing between <code>md</code> and <code>xl</code>, use <code>lg</code>. The scale exists to prevent gaps in the token hierarchy.</p>

          <p><strong>Don't rely on spacing alone for structure</strong></p>
          <p>Use visual elements like borders and background colors together with spacing to create clear, robust separations between sections.</p>
        </div>
      </div>

      <hr>

      <h2>Code reference</h2>

      <h3>CSS</h3>
      <pre><code>/* Usage examples */
.card {
  padding: var(--spacing-xl);         /* 1rem / 16px mobile, 2rem / 32px widescreen */
  margin-bottom: var(--spacing-xxxxl); /* 2rem / 32px mobile, 4rem / 64px widescreen */
  border-radius: var(--border-radius-md);
}

.button-group {
  display: flex;
  gap: var(--spacing-sm); /* 0.25rem / 4px mobile, 0.5rem / 8px widescreen */
}

.form-field + .form-field {
  margin-top: var(--spacing-lg); /* 0.75rem / 12px mobile, 1.5rem / 24px widescreen */
}</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Spacing tokens */
--spacing-xs       Mobile: 0.125rem / 2px   &rarr;   Widescreen: 0.25rem / 4px
--spacing-sm       Mobile: 0.25rem / 4px    &rarr;   Widescreen: 0.5rem / 8px
--spacing-md       Mobile: 0.5rem / 8px     &rarr;   Widescreen: 1rem / 16px
--spacing-lg       Mobile: 0.75rem / 12px   &rarr;   Widescreen: 1.5rem / 24px
--spacing-xl       Mobile: 1rem / 16px      &rarr;   Widescreen: 2rem / 32px
--spacing-xxl      Mobile: 1.25rem / 20px   &rarr;   Widescreen: 2.5rem / 40px
--spacing-xxxl     Mobile: 1.5rem / 24px    &rarr;   Widescreen: 3rem / 48px
--spacing-xxxxl    Mobile: 2rem / 32px      &rarr;   Widescreen: 4rem / 64px

/* Border-radius tokens */
--border-radius-xs     Mobile: 0.125rem / 2px    &rarr;   Widescreen: 0.25rem / 4px
--border-radius-sm     Mobile: 0.25rem / 4px     &rarr;   Widescreen: 0.5rem / 8px
--border-radius-md     Mobile: 0.5rem / 8px      &rarr;   Widescreen: 1rem / 16px
--border-radius-lg     Mobile: 1rem / 16px       &rarr;   Widescreen: 2rem / 32px
--border-radius-xl     Mobile: 1.5rem / 24px     &rarr;   Widescreen: 3rem / 48px
--border-radius-xxl    Mobile: 2rem / 32px       &rarr;   Widescreen: 4rem / 64px
--border-radius-round  6.25rem / 100px           &rarr;   6.25rem / 100px</code></pre>

      <hr>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length" target="_blank">MDN: CSS Length Units</a> &mdash; Reference for px, rem, and other units</li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius" target="_blank">MDN: border-radius</a> &mdash; CSS border-radius property reference</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" target="_blank">WCAG 2.1: Understanding Target Size</a> &mdash; Touch target accessibility requirements</li>
        <li><a href="https://web.dev/articles/responsive-web-design-basics" target="_blank">web.dev: Responsive Design Basics</a> &mdash; Spacing in responsive layouts</li>
        <li><a href="https://webaim.org/" target="_blank">WebAIM</a> &mdash; Web accessibility resources</li>
      </ul>
    </div>
  `;
};
