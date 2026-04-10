/**
 * Code Toggle — "Show code" / "Hide code" for specimen blocks
 *
 * Finds every .component-demo element inside a container,
 * extracts its innerHTML, pretty-prints it, and injects a
 * toggle button + collapsible code block after each specimen.
 *
 * Usage:
 *   import { initCodeToggles } from '../../utilities/code-toggle.js';
 *
 *   // Call after the story's HTML is in the DOM:
 *   setTimeout(() => initCodeToggles(document), 0);
 *
 *   // Or in a Storybook decorator/play function.
 */

function prettyPrint(html) {
  let cleaned = html.replace(/\s+/g, ' ').trim();
  cleaned = cleaned.replace(/>\s*</g, '>\n<');

  const lines = cleaned.split('\n');
  let indent = 0;
  const result = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('</')) {
      indent = Math.max(0, indent - 1);
    }

    result.push('  '.repeat(indent) + line);

    if (
      line.startsWith('<') &&
      !line.startsWith('</') &&
      !line.endsWith('/>') &&
      !line.startsWith('<!') &&
      !/^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b/i.test(line)
    ) {
      const tagMatch = line.match(/^<(\w+)/);
      if (tagMatch && !line.includes(`</${tagMatch[1]}>`)) {
        indent++;
      }
    }
  }

  return result.join('\n');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Scans a root element for .component-demo blocks and injects
 * a "Show code" toggle after each one.
 *
 * Safe to call multiple times — skips demos that already have a toggle.
 *
 * @param {HTMLElement|Document} root — the container to scan
 */
export function initCodeToggles(root) {
  const demos = root.querySelectorAll('.component-demo');

  demos.forEach((demo) => {
    // Skip if already processed
    if (demo.nextElementSibling && demo.nextElementSibling.classList.contains('code-toggle-wrapper')) {
      return;
    }

    const specimenHtml = demo.innerHTML;
    const formatted = prettyPrint(specimenHtml);
    const escaped = escapeHtml(formatted);
    const id = 'code-' + Math.random().toString(36).slice(2, 9);

    const wrapper = document.createElement('div');
    wrapper.className = 'code-toggle-wrapper';
    wrapper.innerHTML = `
      <button class="code-toggle-btn" aria-expanded="false" aria-controls="${id}">Show code</button>
      <pre class="code-toggle-block" id="${id}" style="display: none;"><code>${escaped}</code></pre>
    `;

    // Wire up the toggle
    const btn = wrapper.querySelector('.code-toggle-btn');
    const block = wrapper.querySelector('.code-toggle-block');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      block.style.display = expanded ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.textContent = expanded ? 'Show code' : 'Hide code';
    });

    // Insert after the .component-demo block
    demo.parentNode.insertBefore(wrapper, demo.nextSibling);
  });
}
