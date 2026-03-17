export default {
  title: 'Welcome',
};

export const Infrastructure = () => {
  return `
    <div class="delta-docs">
      <h1>The Delta Design System</h1>
      <p>Infrastructure smoke test. If you can read this with correct fonts and spacing, Phase 1 is working.</p>

      <hr>

      <h2>Token verification</h2>

      <h3>Typography scale</h3>
      <div style="font-size: var(--h1-font-size); line-height: var(--h1-line-height); font-family: 'Ovo', Georgia, serif;">h1 — should be 50px mobile, 72px widescreen</div>
      <div style="font-size: var(--p-font-size); line-height: var(--p-line-height);">p — should be 16px mobile, 24px widescreen</div>
      <div style="font-size: var(--small-font-size); line-height: var(--small-line-height);">small — should be 12px mobile, 20px widescreen</div>
      <div style="font-size: var(--fine-font-size); line-height: var(--fine-line-height);">fine — should be 10px mobile, 16px widescreen</div>

      <hr>

      <h3>Spacing scale</h3>
      <div style="display: flex; gap: 8px; align-items: flex-end; margin-bottom: 24px;">
        <div style="width: var(--spacing-xs); height: var(--spacing-xs); background: var(--brand-primary);" title="xs"></div>
        <div style="width: var(--spacing-sm); height: var(--spacing-sm); background: var(--brand-primary);" title="sm"></div>
        <div style="width: var(--spacing-md); height: var(--spacing-md); background: var(--brand-primary);" title="md"></div>
        <div style="width: var(--spacing-lg); height: var(--spacing-lg); background: var(--brand-primary);" title="lg"></div>
        <div style="width: var(--spacing-xl); height: var(--spacing-xl); background: var(--brand-primary);" title="xl"></div>
        <div style="width: var(--spacing-xxl); height: var(--spacing-xxl); background: var(--brand-primary);" title="xxl"></div>
        <div style="width: var(--spacing-xxxl); height: var(--spacing-xxxl); background: var(--brand-primary);" title="xxxl"></div>
        <div style="width: var(--spacing-xxxxl); height: var(--spacing-xxxxl); background: var(--brand-primary);" title="xxxxl"></div>
      </div>

      <hr>

      <h3>Color mode</h3>
      <p>Background should be white (light) or #01232D (dark). Text should be black (light) or white (dark). Toggle the Color mode toolbar to verify.</p>
      <p>This text uses <code>--text-default</code>.</p>
      <p><a href="#">This link</a> uses <code>--text-link</code> — should be #FF5247 (light) or #FFFFFF (dark).</p>

      <hr>

      <h3>CSS isolation</h3>
      <p>The heading above should use Ovo at 24px. This paragraph should use Montserrat at 16px. If Storybook's default styles are bleeding in, these will look wrong.</p>

      <hr>

      <h2>Table test</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Mobile</th>
            <th>Widescreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>spacing-xs</code></td>
            <td>0.125rem / 2px</td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td><code>spacing-md</code></td>
            <td>0.5rem / 8px</td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td><code>spacing-xl</code></td>
            <td>1rem / 16px</td>
            <td>2rem / 32px</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <h2>Do / Don't grid test</h2>
      <div class="do-dont-grid">
        <div class="do-section">
          <h3>Do</h3>
          <p><strong>Verify at mobile first</strong></p>
          <p>Default viewport is 375px. Check mobile token values resolve correctly before switching to widescreen.</p>
        </div>
        <div class="dont-section">
          <h3>Don't</h3>
          <p><strong>Skip viewport verification</strong></p>
          <p>Widescreen should never be the default. Always confirm mobile values first.</p>
        </div>
      </div>
    </div>
  `;
};
