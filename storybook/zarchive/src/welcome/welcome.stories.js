function createWelcomeDoc() {
  return `
    <article class="delta-docs">
      <div class="delta-docs__stack">
        <p class="delta-docs__eyebrow">Phase 1 verification harness</p>
        <h1>Welcome</h1>
        <p>
          This page exists only to validate the Storybook infrastructure before any foundation or component
          documentation is written.
        </p>

        <hr />

        <section class="delta-docs__section">
          <h2>What to inspect</h2>
          <p>
            Use the toolbar to check that documentation styles stay scoped inside <code>.delta-docs</code>,
            mobile is the default review state, and dark mode cascades correctly from the story wrapper.
          </p>
          <div class="delta-docs__placeholder">
            <span class="delta-docs__placeholder-label">Placeholder container</span>
            <p>No live component examples belong in Phase 1. This placeholder confirms docs surfaces and token-driven
            spacing render correctly.</p>
          </div>
        </section>

        <hr />

        <section class="delta-docs__section delta-docs__section--tight">
          <h2>Token response</h2>
          <div class="delta-docs__inline-group">
            <span class="delta-docs__sample-chip">Light / Dark</span>
            <span class="delta-docs__sample-chip">Mobile / Tablet / Widescreen</span>
          </div>
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
                <td>gap</td>
                <td><code>spacing/md</code></td>
                <td>0.5rem / 8px</td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>border-radius</td>
                <td><code>border-radius/md</code></td>
                <td>0.5rem / 8px</td>
                <td>1rem / 16px</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

        <section class="delta-docs__section">
          <h2>Best practices</h2>
          <div class="delta-docs__do-dont-grid">
            <div class="delta-docs__practice delta-docs__practice--do">
              <h3>Do</h3>
              <p><strong>Review the wrapper behavior.</strong></p>
              <p>Color mode and breakpoint attributes should live on the story wrapper, not on the preview body.</p>
            </div>
            <div class="delta-docs__practice delta-docs__practice--dont">
              <h3>Don't</h3>
              <p><strong>Trust widescreen by default.</strong></p>
              <p>The first render should be Mobile at 375px so responsive token issues surface immediately.</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  `;
}

const meta = {
  title: 'Welcome',
};

export default meta;

export const Documentation = () => createWelcomeDoc();
