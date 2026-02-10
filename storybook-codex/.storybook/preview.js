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
      document.documentElement.setAttribute('data-color-mode', context.globals.colorMode);
      document.documentElement.setAttribute('data-space-mode', context.globals.spaceMode);
      document.documentElement.setAttribute('data-breakpoint-mode', context.globals.breakpoint);
      return story();
    },
  ],
  parameters: {
    controls: {
      expanded: true,
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#ffffff' },
        { name: 'card', value: '#eeeeee' },
      ],
    },
    options: {
      storySort: (a, b) => {
        const normalizeEntry = (entry) => (Array.isArray(entry) ? entry[1] ?? {} : entry ?? {});
        const rankTopLevel = (entry) => {
          const story = normalizeEntry(entry);
          const title = story.title ?? story.kind ?? '';
          const topLevel = title.split('/')[0] ?? '';
          const order = ['Foundations', 'Symbols'];
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
