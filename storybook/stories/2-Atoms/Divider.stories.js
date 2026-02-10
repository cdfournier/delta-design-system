export default {
  title: 'Atoms/Divider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system.\n\nDividers provide visual separation between content sections in horizontal and vertical orientations.`,
      },
    },
  },
};

export const Horizontal = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="padding: 1rem;">
      <p>Content above the divider</p>
      <hr class="divider divider--horizontal" style="border: none; border-top: 1px solid var(--gray-medium); margin: var(--spacing-lg) 0;">
      <p>Content below the divider</p>
    </div>
  `;
  return el;
};

export const Vertical = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--spacing-lg); padding: 1rem;">
      <span>Left</span>
      <div class="divider divider--vertical" style="width: 1px; height: 2rem; background: var(--gray-medium);"></div>
      <span>Right</span>
    </div>
  `;
  return el;
};
