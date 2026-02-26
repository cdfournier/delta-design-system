import '../src/styles/tokens.css';
import '../src/styles/global.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  globalTypes: {
    colorMode: {
      name: 'Color mode',
      description: 'Global color mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
    spaceMode: {
      name: 'Space mode',
      description: 'Global spacing mode',
      defaultValue: 'mobile',
      toolbar: {
        icon: 'component',
        items: [
          { value: 'mobile', title: 'Mobile' },
          { value: 'widescreen', title: 'Widescreen' },
        ],
        showName: true,
      },
    },
    breakpoint: {
      name: 'Breakpoint',
      description: 'Global breakpoint preview',
      defaultValue: 'mobile',
      toolbar: {
        icon: 'browser',
        items: [
          { value: 'mobile', title: 'Mobile' },
          { value: 'tablet', title: 'Tablet' },
          { value: 'widescreen', title: 'Widescreen' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const typeMode = context.globals.breakpoint === 'widescreen' ? 'widescreen' : 'mobile';
      const root = document.documentElement;
      root.setAttribute('data-color-mode', context.globals.colorMode);
      root.setAttribute('data-space-mode', context.globals.spaceMode);
      root.setAttribute('data-breakpoint-mode', context.globals.breakpoint);
      root.setAttribute('data-type-mode', typeMode);

      const body = document.body;
      if (body) {
        body.setAttribute('data-color-mode', context.globals.colorMode);
        body.setAttribute('data-space-mode', context.globals.spaceMode);
        body.setAttribute('data-breakpoint-mode', context.globals.breakpoint);
        body.setAttribute('data-type-mode', typeMode);
        body.classList.add('dds-storybook-body');

        const computed = window.getComputedStyle(root);
        body.style.backgroundColor = computed.getPropertyValue('--background-page').trim();
        body.style.color = computed.getPropertyValue('--text-default').trim();
        body.style.fontFamily = computed.getPropertyValue('--font-family-body').trim();
        body.style.colorScheme = context.globals.colorMode === 'dark' ? 'dark' : 'light';
      }

      const rootNodes = ['#storybook-root', '#root'];
      rootNodes.forEach((selector) => {
        const node = document.querySelector(selector);
        if (!node) return;
        node.setAttribute('data-color-mode', context.globals.colorMode);
        node.setAttribute('data-space-mode', context.globals.spaceMode);
        node.setAttribute('data-breakpoint-mode', context.globals.breakpoint);
        node.setAttribute('data-type-mode', typeMode);
      });

      return story();
    },
  ],
  parameters: {
    controls: {
      expanded: true,
    },
    backgrounds: {
      default: 'surface-light',
      values: [
        { name: 'surface-light', value: '#ffffff' },
        { name: 'section-light', value: '#eeeeee' },
        { name: 'surface-dark', value: '#01232d' },
        { name: 'section-dark', value: '#003442' },
      ],
    },
    options: {
      storySort: (a, b) => {
        const normalizeEntry = (entry) => (Array.isArray(entry) ? entry[1] ?? {} : entry ?? {});
        const rankTopLevel = (entry) => {
          const story = normalizeEntry(entry);
          const title = story.title ?? story.kind ?? '';
          const topLevel = title.split('/')[0] ?? '';
          const order = ['Welcome', 'Foundations', 'Atoms', 'Molecules', 'Organisms'];
          const index = order.indexOf(topLevel);
          return index === -1 ? order.length : index;
        };
        const rankDocs = (entry) => {
          const story = normalizeEntry(entry);
          const title = story.title ?? story.kind ?? '';
          const name = story.name ?? '';
          const titleLeaf = title.split('/').pop() ?? '';
          const isDocs = name === 'Docs' || name === 'Documentation' || titleLeaf === 'Documentation';
          return isDocs ? 0 : 1;
        };
        const rankWelcomeStories = (entry) => {
          const story = normalizeEntry(entry);
          const title = story.title ?? story.kind ?? '';
          const name = story.name ?? '';
          if (title !== 'Welcome') {
            return Number.MAX_SAFE_INTEGER;
          }
          const order = ['Cover', 'About'];
          const index = order.indexOf(name);
          return index === -1 ? order.length : index;
        };
        const alpha = (left, right) =>
          String(left ?? '')
            .toLowerCase()
            .localeCompare(String(right ?? '').toLowerCase(), undefined, { numeric: true });

        const topLevelDiff = rankTopLevel(a) - rankTopLevel(b);
        if (topLevelDiff !== 0) {
          return topLevelDiff;
        }

        const docsDiff = rankDocs(a) - rankDocs(b);
        if (docsDiff !== 0) {
          return docsDiff;
        }

        const welcomeDiff = rankWelcomeStories(a) - rankWelcomeStories(b);
        if (welcomeDiff !== 0) {
          return welcomeDiff;
        }

        const storyA = normalizeEntry(a);
        const storyB = normalizeEntry(b);
        const titleDiff = alpha(storyA.title ?? storyA.kind, storyB.title ?? storyB.kind);
        if (titleDiff !== 0) {
          return titleDiff;
        }
        return alpha(storyA.name, storyB.name);
      },
    },
  },
};

export default preview;
