export default {
  title: 'Tokens/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The Delta Design System uses a minor third (1.2) type scale. Headings use the **Ovo** serif font, body text uses **Montserrat** sans-serif.`,
      },
    },
  },
};

export const TypeScale = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">h1.title — var(--h1-title) — 4.209rem</code>
        <h1 class="title">Title Heading</h1>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">h1 — var(--h1) — 3.157rem</code>
        <h1>Heading One</h1>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">h2 — var(--h2) — 2.369rem</code>
        <h2>Heading Two</h2>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">h3 — var(--h3) — 1.777rem</code>
        <h3>Heading Three</h3>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">h4 — var(--h4) — 1.333rem</code>
        <h4>Heading Four</h4>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">p — var(--p) — 1rem</code>
        <p>Body text paragraph. The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">small — var(--small) — 0.8rem</code>
        <p><small>Small text. The quick brown fox jumps over the lazy dog.</small></p>
      </div>
    </div>
  `;
  return el;
};
TypeScale.parameters = { controls: { disable: true } };

export const FontFamilies = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">Heading font — Ovo, serif</code>
        <p style="font-family: 'Ovo', serif; font-size: 2rem; margin-top: 0.5rem;">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
          abcdefghijklmnopqrstuvwxyz<br>
          0123456789
        </p>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">Body font — Montserrat, sans-serif (400)</code>
        <p style="font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 1.25rem; margin-top: 0.5rem;">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
          abcdefghijklmnopqrstuvwxyz<br>
          0123456789
        </p>
      </div>
      <div>
        <code style="font-size: 0.75rem; color: var(--gray-dark);">Body font — Montserrat, sans-serif (700)</code>
        <p style="font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1.25rem; margin-top: 0.5rem;">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
          abcdefghijklmnopqrstuvwxyz<br>
          0123456789
        </p>
      </div>
    </div>
  `;
  return el;
};
FontFamilies.parameters = { controls: { disable: true } };

export const TextElements = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h3>Lists</h3>
        <div style="display: flex; gap: 4rem; flex-wrap: wrap;">
          <div>
            <h4>Unordered List</h4>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </div>
          <div>
            <h4>Ordered List</h4>
            <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <h3>Inline Styles</h3>
        <p>This is <strong>bold text</strong> and this is <em>emphasized text</em>.</p>
        <p>This is a <a href="#">link element</a> within a paragraph.</p>
      </div>
    </div>
  `;
  return el;
};
TextElements.parameters = { controls: { disable: true } };
