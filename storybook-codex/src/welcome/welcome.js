import './welcome.css';
import { createLink } from '../components/link/link';

const COVER_TITLE = 'The Delta Design System';
const COVER_BODY =
  'An open-source design system that can be used to build responsive sites, apps, and prototypes quickly.';

const ABOUT_INTRO = [
  "The Delta Design System is an open-source design system for building responsive websites, applications, and prototypes. It provides semantic, flexible, and customizable components with code that's efficient and maintainable.",
  'The name "Delta" refers to the mathematical symbol for change (Delta). This design system embraces the constant evolution of web design and user experience. Design systems are living things that must adapt as best practices and patterns evolve.',
];

const ABOUT_SECTIONS = [
  {
    heading: 'Who is this for?',
    paragraphs: [
      'The Delta Design System serves designers who want consistent, accessible components, developers who need semantic and efficient code, and teams building responsive web experiences. If you value simplicity over complexity, this system is for you.',
    ],
  },
  {
    heading: 'The origins',
    paragraphs: [
      'I create handcrafted, responsive websites and applications, and I frequently found myself reusing my own code. I loved frameworks like Bootstrap, Foundation, and Materialize, but I always worked harder to customize and simplify the code, never entirely satisfied with the results.',
      'The Delta Design System started with a simple goal: create something relatively simple yet efficient and effective.',
    ],
  },
  {
    heading: 'Essential influences',
    groups: [
      {
        title: 'Responsive web design',
        body: `Ethan Marcotte's <a class="dds-welcome-about__inline-link" href="https://alistapart.com/article/responsive-web-design/" target="_blank" rel="noreferrer">Responsive Web Design</a> article changed everything. Responsive design brought focus to how we build for the web. Every project should start with this approach.`,
      },
      {
        title: 'Flexbox',
        body: `<a class="dds-welcome-about__inline-link" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank" rel="noreferrer">Flexbox</a> replaced frustrating floats and absolute positioning with an intuitive layout system that just makes sense.`,
      },
      {
        title: 'Sass',
        body: `<a class="dds-welcome-about__inline-link" href="https://sass-lang.com" target="_blank" rel="noreferrer">Sass</a> enabled flexible, robust styling while keeping code tidy. It made wholesale adjustments possible without searching through endless lines of CSS.`,
      },
    ],
  },
  {
    heading: 'Principles',
    groups: [
      {
        title: 'Efficiency',
        body: 'Make the best thing the easiest thing. Simplicity matters, and the least amount of code is the right amount of code. Standards are codified to help designers and developers efficiently deliver quality experiences.',
      },
      {
        title: 'Accessibility',
        body: "Accessibility is not negotiable. Standards are built with priority on Section 508 compliance and WCAG guidelines at every step. No shortcuts when it comes to accessibility.",
      },
      {
        title: 'Flexibility',
        body: "Reduce, reuse, recycle. Review and repurpose proven patterns, avoid unnecessary new components, and adapt as needs change.",
      },
    ],
  },
  {
    heading: 'A living system',
    paragraphs: [
      "Design systems are not static artifacts. They're living ecosystems that evolve.",
      'The Delta Design System represents constant iteration, always improving and never done. It responds to change by adapting to new patterns and best practices. It grows through community contribution and collaboration. Changes serve real needs, not trends.',
      'A design system that does not change becomes obsolete. The Delta Design System embraces evolution as a core feature, not a bug.',
    ],
  },
  {
    heading: 'Technical foundation',
    lists: [
      {
        title: 'Built with modern standards',
        items: [
          'Semantic HTML5',
          'Responsive CSS with Flexbox and Grid',
          'Sass for maintainable styling',
          'Atomic design methodology',
          'Mobile-first approach',
          'Progressive enhancement',
        ],
      },
      {
        title: 'Integrates with',
        items: ['React, Vue, Angular, Svelte', 'Static site generators', 'Any modern framework', 'Vanilla JavaScript'],
      },
    ],
  },
  {
    heading: 'Design philosophy',
    groups: [
      {
        title: 'Code quality matters',
        body: 'Semantic markup, readable architecture, and performance-aware implementation are baseline expectations.',
      },
      {
        title: 'Design over decoration',
        body: 'Components should communicate clearly and reinforce hierarchy, spacing rhythm, and intent.',
      },
      {
        title: 'Users over aesthetics',
        body: 'Accessibility, speed, and interaction clarity take priority over novelty.',
      },
    ],
  },
  {
    heading: "What's included",
    groups: [
      {
        title: 'Foundations',
        body: 'Color system with semantic tokens. Typography scale and guidelines. Spacing and layout system. Grid structures for responsive design.',
      },
      {
        title: 'Components',
        body: 'Atoms: basic building blocks like buttons, inputs, and icons. Molecules: simple component groups like form fields and search bars. Organisms: complex UI sections like navigation, headers, and cards.',
      },
      {
        title: 'Resources',
        body: 'Design tokens in JSON format. Figma component library. Code snippets and examples. Usage guidelines and patterns.',
      },
    ],
  },
  {
    heading: 'Contributing',
    paragraphs: [
      'This project needs you. Document best practices. Contribute components. Report issues and suggest improvements. Share how you use The Delta Design System. Help others in the community.',
      'Whatever your expertise, I need you.',
      'The Delta Design System represents constant iteration, always improving and never done. It responds to change by adapting to new patterns and best practices. It grows through community contribution and collaboration. Changes serve real needs, not trends.',
    ],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/cdfournier/delta-design-system' },
      { label: 'Report issues', href: 'https://github.com/cdfournier/delta-design-system/issues' },
      { label: 'View projects', href: 'https://github.com/cdfournier/delta-design-system/projects' },
    ],
  },
  {
    heading: 'Version history',
    paragraphs: [
      'Current version: 3.0.0 (2026). Complete redesign in Figma. Updated design tokens system. Enhanced accessibility features. Semantic state terminology using invalid and valid states. Comprehensive documentation.',
      'Previous versions:',
    ],
    lists: [
      {
        title: '',
        items: ['Version 2.5.2 (2021): Original open source release', 'Earlier iterations: Personal framework'],
      },
    ],
  },
  {
    heading: 'License',
    paragraphs: ['MIT License. Open source and free to use.'],
    link: {
      label: 'View License',
      href: 'https://github.com/cdfournier/delta-design-system/blob/master/LICENSE',
    },
  },
  {
    heading: 'About me',
    paragraphs: [
      'Chris Fournier, designer and developer.',
      "I'm passionate about responsive, semantic, and accessible design and design systems.",
    ],
    link: { label: 'chris.blackcoffeeshoppe.com', href: 'https://chris.blackcoffeeshoppe.com' },
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/cdfournier/delta-design-system' },
      { label: 'Website', href: 'https://cdfournier.github.io/delta-design-system/' },
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/tHT8Je5cvRTXFN9XQ7XqhA/The-Delta-Design-System',
      },
    ],
  },
];

function renderParagraphs(paragraphs = []) {
  return paragraphs.map((paragraph) => `<p class="dds-welcome-about__body">${paragraph}</p>`).join('');
}

function renderGroups(groups = []) {
  return groups
    .map(
      (group) => `
      <div class="dds-welcome-about__group">
        <h3 class="dds-welcome-about__subheading">${group.title}</h3>
        <p class="dds-welcome-about__body">${group.body}</p>
      </div>
    `,
    )
    .join('');
}

function renderLists(lists = []) {
  return lists
    .map(
      (list) => `
      <div class="dds-welcome-about__group">
        ${list.title ? `<h3 class="dds-welcome-about__subheading">${list.title}</h3>` : ''}
        <ul class="dds-welcome-about__list">
          ${list.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `,
    )
    .join('');
}

function renderLinks(links = []) {
  if (!links.length) {
    return '';
  }

  return `<div class="dds-welcome-about__links">${links
    .map((link) =>
      createLink({
        label: link.label,
        href: link.href || '#',
        size: 'p',
        arrow: true,
      }),
    )
    .join('')}</div>`;
}

function renderLink(link) {
  if (!link) {
    return '';
  }

  return createLink({
    label: link.label,
    href: link.href || '#',
    size: 'p',
    arrow: true,
  });
}

export function createWelcomeCoverPage() {
  return `
    <section class="dds-welcome-cover" aria-labelledby="dds-welcome-cover-title">
      <div class="dds-welcome-cover__mark" aria-hidden="true"></div>
      <div class="dds-welcome-cover__content">
        <h1 id="dds-welcome-cover-title" class="dds-welcome-cover__title">${COVER_TITLE}</h1>
        <p class="dds-welcome-cover__body">${COVER_BODY}</p>
      </div>
    </section>
  `;
}

export function createWelcomeAboutPage() {
  return `
    <article class="dds-welcome-about" aria-labelledby="dds-welcome-about-title">
      <section class="dds-welcome-about__section dds-welcome-about__section--intro">
        <h1 id="dds-welcome-about-title" class="dds-welcome-about__title">About The Delta Design System</h1>
        ${renderParagraphs(ABOUT_INTRO)}
      </section>
      ${ABOUT_SECTIONS.map(
        (section) => `
        <section class="dds-welcome-about__section" aria-label="${section.heading}">
          <h2 class="dds-welcome-about__heading">${section.heading}</h2>
          ${renderParagraphs(section.paragraphs)}
          ${renderGroups(section.groups)}
          ${renderLists(section.lists)}
          ${renderLinks(section.links)}
          ${renderLink(section.link)}
        </section>
      `,
      ).join('')}
    </article>
  `;
}
