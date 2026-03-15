import '../src/styles/tokens.css';
import '../src/styles/reset.css';
import '../src/styles/docs.css';

const viewportOptions = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  widescreen: {
    name: 'Widescreen',
    styles: {
      width: '1280px',
      height: '900px',
    },
  },
};

function ensurePreviewFonts(doc) {
  if (doc.head.querySelector('[data-delta-fonts="true"]')) {
    return;
  }

  const preconnectGoogle = doc.createElement('link');
  preconnectGoogle.rel = 'preconnect';
  preconnectGoogle.href = 'https://fonts.googleapis.com';
  preconnectGoogle.setAttribute('data-delta-fonts', 'true');

  const preconnectStatic = doc.createElement('link');
  preconnectStatic.rel = 'preconnect';
  preconnectStatic.href = 'https://fonts.gstatic.com';
  preconnectStatic.crossOrigin = 'anonymous';
  preconnectStatic.setAttribute('data-delta-fonts', 'true');

  const stylesheet = doc.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Ovo&display=swap';
  stylesheet.setAttribute('data-delta-fonts', 'true');

  doc.head.append(preconnectGoogle, preconnectStatic, stylesheet);
}

function resetPreviewDocument(doc, colorMode) {
  const root = doc.documentElement;
  const body = doc.body;

  if (!body) {
    return;
  }

  root.style.background = 'transparent';
  body.style.margin = '0';
  body.style.padding = '0';
  body.style.background = 'transparent';
  body.style.colorScheme = colorMode === 'dark' ? 'dark' : 'light';
}

function normalizeStoryResult(result) {
  if (typeof result === 'string') {
    return result;
  }

  if (result == null) {
    return '';
  }

  if (typeof result === 'object' && 'outerHTML' in result && typeof result.outerHTML === 'string') {
    return result.outerHTML;
  }

  return String(result);
}

/** @type { import('@storybook/html').Preview } */
const preview = {
  globalTypes: {
    colorMode: {
      name: 'Color mode',
      description: 'Preview the story in light or dark mode.',
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
    breakpoint: {
      name: 'Breakpoint',
      description: 'Label the current breakpoint review target.',
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
  initialGlobals: {
    colorMode: 'light',
    breakpoint: 'mobile',
    viewport: { value: 'mobile', isRotated: false },
  },
  decorators: [
    (story, context) => {
      const doc = document;

      ensurePreviewFonts(doc);
      resetPreviewDocument(doc, context.globals.colorMode);
      const storyMarkup = normalizeStoryResult(story());

      return `
        <div
          class="delta-story-root"
          data-color-mode="${context.globals.colorMode}"
          data-breakpoint="${context.globals.breakpoint}"
          data-story-title="${context.title ?? ''}"
        >
          <div class="delta-story-canvas">
            ${storyMarkup}
          </div>
        </div>
      `;
    },
  ],
  parameters: {
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
    viewport: {
      options: viewportOptions,
      defaultViewport: 'mobile',
    },
    options: {
      storySort: (left, right) => {
        const sortIndex = ['Welcome', 'Foundations', 'Atoms', 'Molecules', 'Organisms'];
        const foundationOrder = ['Colors', 'Typography', 'Spacing', 'Grid'];
        const getParts = (entry) => (entry.title ?? '').split('/');
        const getName = (entry) => entry.name ?? '';
        const topLevelLeft = getParts(left)[0] ?? '';
        const topLevelRight = getParts(right)[0] ?? '';
        const topDiff =
          (sortIndex.indexOf(topLevelLeft) === -1 ? sortIndex.length : sortIndex.indexOf(topLevelLeft)) -
          (sortIndex.indexOf(topLevelRight) === -1 ? sortIndex.length : sortIndex.indexOf(topLevelRight));

        if (topDiff !== 0) {
          return topDiff;
        }

        if (topLevelLeft === 'Foundations' && topLevelRight === 'Foundations') {
          const foundationLeft = getParts(left)[1] ?? '';
          const foundationRight = getParts(right)[1] ?? '';
          const foundationDiff =
            (foundationOrder.indexOf(foundationLeft) === -1
              ? foundationOrder.length
              : foundationOrder.indexOf(foundationLeft)) -
            (foundationOrder.indexOf(foundationRight) === -1
              ? foundationOrder.length
              : foundationOrder.indexOf(foundationRight));

          if (foundationDiff !== 0) {
            return foundationDiff;
          }
        }

        const docsRankLeft = /^(docs|documentation)$/i.test(getName(left)) ? 0 : 1;
        const docsRankRight = /^(docs|documentation)$/i.test(getName(right)) ? 0 : 1;

        if (docsRankLeft !== docsRankRight) {
          return docsRankLeft - docsRankRight;
        }

        return (left.title ?? left.id ?? '').localeCompare(right.title ?? right.id ?? '', undefined, {
          numeric: true,
        }) || getName(left).localeCompare(getName(right), undefined, { numeric: true });
      },
    },
  },
};

export default preview;
