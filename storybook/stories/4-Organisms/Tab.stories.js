export default {
  title: 'Organisms/Tab',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_organisms/_tabs.scss\` to add styles.\n\nTabs organize content into panels that can be switched between. Supports horizontal and vertical orientations with primary and secondary button styles.`,
      },
    },
  },
};

const tabStyle = 'font-family: Montserrat, sans-serif;';

export const Horizontal = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="tabs tabs--horizontal" style="${tabStyle} max-width: 600px;">
      <div role="tablist" aria-label="Demo tabs" style="display: flex; gap: 0; border-bottom: 2px solid var(--gray-medium);">
        <button role="tab" aria-selected="true" style="padding: var(--spacing-sm) var(--spacing-lg); border: none; background: none; cursor: pointer; font-weight: 700; font-family: inherit; border-bottom: 2px solid var(--primary); margin-bottom: -2px; color: var(--primary);">Tab One</button>
        <button role="tab" aria-selected="false" style="padding: var(--spacing-sm) var(--spacing-lg); border: none; background: none; cursor: pointer; font-family: inherit; color: var(--gray-dark);">Tab Two</button>
        <button role="tab" aria-selected="false" style="padding: var(--spacing-sm) var(--spacing-lg); border: none; background: none; cursor: pointer; font-family: inherit; color: var(--gray-dark);">Tab Three</button>
      </div>
      <div role="tabpanel" style="padding: var(--spacing-lg) 0;">
        <h3>Tab One Content</h3>
        <p>This is the content for the first tab panel.</p>
      </div>
    </div>
  `;
  return el;
};

export const Vertical = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="tabs tabs--vertical" style="${tabStyle} display: flex; max-width: 600px;">
      <div role="tablist" aria-label="Demo tabs" aria-orientation="vertical" style="display: flex; flex-direction: column; border-right: 2px solid var(--gray-medium); min-width: 120px;">
        <button role="tab" aria-selected="true" style="padding: var(--spacing-sm) var(--spacing-lg); border: none; background: none; cursor: pointer; font-weight: 700; font-family: inherit; text-align: left; border-right: 2px solid var(--primary); margin-right: -2px; color: var(--primary);">Tab One</button>
        <button role="tab" aria-selected="false" style="padding: var(--spacing-sm) var(--spacing-lg); border: none; background: none; cursor: pointer; font-family: inherit; text-align: left; color: var(--gray-dark);">Tab Two</button>
        <button role="tab" aria-selected="false" style="padding: var(--spacing-sm) var(--spacing-lg); border: none; background: none; cursor: pointer; font-family: inherit; text-align: left; color: var(--gray-dark);">Tab Three</button>
      </div>
      <div role="tabpanel" style="padding: 0 var(--spacing-lg); flex: 1;">
        <h3>Tab One Content</h3>
        <p>This is the content for the first tab panel in a vertical layout.</p>
      </div>
    </div>
  `;
  return el;
};
