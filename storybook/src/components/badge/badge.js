import './badge.css';

function figureShell(content) {
  return `<section class="dds-badge-fig">${content}</section>`;
}

function anatomyFigure() {
  return `
    <div class="dds-badge-fig__card">
      <div class="dds-badge-fig__row">
        <span class="dds-badge dds-badge--primary">New</span>
        <span class="dds-badge dds-badge--secondary">Featured</span>
        <span class="dds-badge dds-badge--transparent">Draft</span>
      </div>
    </div>
  `;
}

export function createBadgeAnatomyFigure() {
  return figureShell(anatomyFigure());
}

function bestPracticesFigure() {
  return `
    <div class="dds-badge-fig__do-dont-grid">
      <section class="dds-badge-fig__do">
        <h4 class="dds-badge-fig__column-title">Do</h4>
        <p><strong>Keep labels to one or two words</strong></p>
        <p>Short, focused labels read instantly. "Active", "New", and "12" communicate clearly without requiring extra space.</p>
        <p><strong>Use color consistently for the same meaning</strong></p>
        <p>If primary (red) badges mean "featured" in one part of the interface, they should mean the same thing everywhere. Consistent color use builds intuitive recognition.</p>
        <p><strong>Include meaningful text, not just symbols</strong></p>
        <p>Screen reader users hear the badge label. A badge reading "●" communicates nothing. Use words like "Active" or "Complete" that make sense without visual context.</p>
        <p><strong>Anchor badges to their content</strong></p>
        <p>Place badges immediately adjacent to the element they describe, in the same list item, heading row, or table cell, so the association is visually clear.</p>
      </section>
      <section class="dds-badge-fig__dont">
        <h4 class="dds-badge-fig__column-title">Don't</h4>
        <p><strong>Don't make badges interactive</strong></p>
        <p>Badges are informational only. If the label needs to trigger an action or filter content, use a Chip or Button instead.</p>
        <p><strong>Don't use badges for long text</strong></p>
        <p>Phrases and sentences do not belong in badges. If your label runs beyond two or three words, consider inline text, a tooltip, or a Feedback component.</p>
        <p><strong>Don't rely on color alone to convey meaning</strong></p>
        <p>Always pair color with a descriptive text label. Never use an empty badge or a color-only indicator, users with color vision deficiencies will lose the information entirely.</p>
        <p><strong>Don't stack too many badges in one place</strong></p>
        <p>More than two or three badges on a single element creates visual noise and dilutes their communicative value. Prioritize the most important label.</p>
      </section>
    </div>
  `;
}

export function createBadgeBestPracticesFigure() {
  return figureShell(bestPracticesFigure());
}
