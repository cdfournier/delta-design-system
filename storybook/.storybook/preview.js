import '../src/styles/tokens.css';
import '../src/styles/reset.css';
import '../src/styles/docs.css';
import { initCodeToggles } from '../src/utilities/code-toggle.js';

/** @type { import('@storybook/html').Preview } */
const preview = {
  globalTypes: {
    colorMode: {
      description: 'Color mode for components',
      toolbar: {
        title: 'Color mode',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    colorMode: 'light',
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '420px', height: '812px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        widescreen: { name: 'Widescreen', styles: { width: '100%', height: '100%' } },
      },
      defaultViewport: 'widescreen',
    },
    options: {
      storySort: {
        order: [
          'Getting Started', ['Welcome', 'Feature Flags'],
          'Foundations', ['Colors', 'Grid', 'Spacing', 'Typography'],
          'Atoms', ['Badges', 'Blockquotes', 'Buttons', 'Chips', 'Icons', 'Inputs', 'Links'],
          'Molecules', ['Cards', 'Content', 'Details', 'Feedback', 'Fieldsets', 'Messages', 'Pagination', 'Tables'],
          'Organisms', ['Banners', 'Footers', 'Headers', 'Tabs'],
        ],
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (storyFn, context) => {
      const story = storyFn();
      const colorMode = context.globals.colorMode || 'light';

      // Create a wrapper div — this is the element that carries data attributes.
      // CSS custom property overrides cascade from this wrapper, NOT from
      // document.body or document.documentElement (which belong to the manager
      // frame, not the story iframe).
      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-color-mode', colorMode);
      wrapper.style.backgroundColor = 'var(--page-background)';
      wrapper.style.color = 'var(--text-default)';
      wrapper.style.minHeight = '100vh';

      if (typeof story === 'string') {
        wrapper.innerHTML = story;
      } else if (story instanceof HTMLElement) {
        wrapper.appendChild(story);
      }

      // Initialize "Show code" toggles after DOM is rendered
      setTimeout(() => initCodeToggles(wrapper), 0);

      return wrapper;
    },
  ],
};

export default preview;
