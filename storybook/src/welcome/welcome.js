import './welcome.css';
import { createLink } from '../components/links/links';

function externalLinkRow(label, href) {
  return `
    <div class="dds-welcome-about__link-row">
      ${createLink({ label, href, size: 'small', arrow: true })}
    </div>
  `;
}

export function createWelcomeCover() {
  return `
    <section class="dds-welcome-cover" aria-labelledby="dds-welcome-cover-title">
      <span class="dds-welcome-cover__mark" aria-hidden="true">
        <span class="dds-welcome-cover__mark-left"></span>
        <span class="dds-welcome-cover__mark-right"></span>
      </span>
      <h1 id="dds-welcome-cover-title" class="dds-welcome-cover__title">The Delta Design System</h1>
      <p class="dds-welcome-cover__subtitle">
        An open-source design system that can be used to build responsive sites, apps, and prototypes quickly.
      </p>
    </section>
  `;
}

export function createWelcomeAbout() {
  return `
    <article class="dds-welcome-about" aria-labelledby="dds-welcome-about-title">
      <header class="dds-welcome-about__section">
        <h1 id="dds-welcome-about-title" class="dds-welcome-about__title">About The Delta Design System</h1>
        <p class="dds-welcome-about__lede">
          The Delta Design System is an open-source design system for building responsive websites, applications, and prototypes. It provides semantic, flexible, and customizable components with code that's efficient and maintainable.
        </p>
        <p>
          The name "Delta" refers to the mathematical symbol for change (Δ). This design system embraces the constant evolution of web design and user experience. Design systems are living things that must adapt as best practices and patterns evolve.
        </p>
      </header>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-for">
        <h2 id="dds-about-for">Who is this for?</h2>
        <p>
          The Delta Design System serves designers who want consistent, accessible components, developers who need semantic and efficient code, and teams building responsive web experiences. If you value simplicity over complexity, this system is for you.
        </p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-origins">
        <h2 id="dds-about-origins">The origins</h2>
        <p>
          I create handcrafted, responsive websites and applications, and I frequently found myself reusing my own code. I loved frameworks like Bootstrap, Foundation, and Materialize, but I always worked harder to customize and simplify the code, never entirely satisfied with the results.
        </p>
        <p>
          The Delta Design System started with a simple goal: create something relatively simple yet efficient and effective.
        </p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-influences">
        <h2 id="dds-about-influences">Essential influences</h2>
        <h3>Responsive web design</h3>
        <p>
          Ethan Marcotte's
          <a class="dds-welcome-about__inline-link" href="https://alistapart.com/article/responsive-web-design/">Responsive Web Design</a>
          article changed everything. Responsive design brought focus to how we build for the web. Every project should start with this approach.
        </p>
        <h3>Flexbox</h3>
        <p>
          <a class="dds-welcome-about__inline-link" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a>
          replaced frustrating floats and absolute positioning with an intuitive layout system that just makes sense.
        </p>
        <h3>Sass</h3>
        <p>
          <a class="dds-welcome-about__inline-link" href="https://sass-lang.com">Sass</a>
          enabled flexible, robust styling while keeping code tidy. It made wholesale adjustments possible without searching through endless lines of CSS.
        </p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-principles">
        <h2 id="dds-about-principles">Principles</h2>

        <h3>Efficiency</h3>
        <p>Simplicity matters. You'll own what you build and support its continued evolution. We need to be nimble.</p>
        <p>
          Never do something just because we can or because it's cool. Only do something because it's the right thing for the purpose. The least amount of code is the right amount of code.
        </p>
        <p>
          Standards are codified to help designers and developers efficiently deliver quality experiences. The goal is to simplify and standardize.
        </p>

        <h3>Accessibility</h3>
        <p>
          Standards are built with priority on
          <a class="dds-welcome-about__inline-link" href="https://www.section508.gov/">Section 508 compliance</a>
          and
          <a class="dds-welcome-about__inline-link" href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG guidelines</a>
          at every step.
        </p>
        <p>
          From colors to code, accessibility is built in. No shortcuts when it comes to accessibility. We all need to become experts on this topic. There's always more to do, and qualified input is welcome.
        </p>

        <h3>Flexibility</h3>
        <p>
          Review, test, evaluate, and repurpose patterns from other foundations and style guides to leverage tried-and-true best practices.
        </p>
        <p>
          Don't create new components unless the pattern is applicable elsewhere. Work should be smart, methodical, efficient, and functional. Use available tools only when they make us more effective. Adapt and evolve as needs change.
        </p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-living">
        <h2 id="dds-about-living">A living system</h2>
        <p>Design systems are not static artifacts. They're living ecosystems that evolve.</p>
        <p>
          The Delta Design System represents constant iteration, always improving and never done. It responds to change by adapting to new patterns and best practices. It grows through community contribution and collaboration. Changes serve real needs, not trends.
        </p>
        <p>
          A design system that doesn't change becomes obsolete. The Delta Design System embraces evolution as a core feature, not a bug.
        </p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-foundation">
        <h2 id="dds-about-foundation">Technical foundation</h2>
        <p><strong>Built with modern standards:</strong></p>
        <ul>
          <li>Semantic HTML5</li>
          <li>Responsive CSS with Flexbox and Grid</li>
          <li>Sass for maintainable styling</li>
          <li>Atomic design methodology</li>
          <li>Mobile-first approach</li>
          <li>Progressive enhancement</li>
        </ul>
        <p><strong>Integrates with:</strong></p>
        <ul>
          <li>React, Vue, Angular, Svelte</li>
          <li>Static site generators</li>
          <li>Any modern framework</li>
          <li>Vanilla JavaScript</li>
        </ul>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-philosophy">
        <h2 id="dds-about-philosophy">Design philosophy</h2>
        <h3>Code quality matters</h3>
        <p>Semantic markup for accessibility and SEO. Clean, readable CSS architecture. Minimal JavaScript footprint. Performance-first approach.</p>
        <h3>Design over decoration</h3>
        <p>Purpose-driven components. Clear visual hierarchy. Consistent spacing and rhythm. Thoughtful color usage.</p>
        <h3>Users over aesthetics</h3>
        <p>Accessibility first. Fast load times. Intuitive interactions. Cross-device consistency.</p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-included">
        <h2 id="dds-about-included">What's included</h2>
        <h3>Foundations</h3>
        <p>Color system with semantic tokens. Typography scale and guidelines. Spacing and layout system. Grid structures for responsive design.</p>
        <h3>Components</h3>
        <p><strong>Atoms:</strong> Basic building blocks like buttons, inputs, and icons.</p>
        <p><strong>Molecules:</strong> Simple component groups like form fields and search bars.</p>
        <p><strong>Organisms:</strong> Complex UI sections like navigation, headers, and cards.</p>
        <h3>Resources</h3>
        <p>Design tokens in JSON format. Figma component library. Code snippets and examples. Usage guidelines and patterns.</p>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-contributing">
        <h2 id="dds-about-contributing">Contributing</h2>
        <p>
          This project needs you. Document best practices. Contribute components. Report issues and suggest improvements. Share how you use The Delta Design System. Help others in the community.
        </p>
        <p>Whatever your expertise, I need you.</p>
        ${externalLinkRow('github.com/cdfournier/delta-design-system', 'https://github.com/cdfournier/delta-design-system')}
        ${externalLinkRow('github.com/cdfournier/delta-design-system/issues', 'https://github.com/cdfournier/delta-design-system/issues')}
        ${externalLinkRow('github.com/cdfournier/delta-design-system/projects', 'https://github.com/cdfournier/delta-design-system/projects')}
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-history">
        <h2 id="dds-about-history">Version history</h2>
        <p><strong>Current version:</strong> 3.0.0 (2026)</p>
        <p>Complete redesign in Figma. Updated design tokens system. Enhanced accessibility features. Semantic state terminology using invalid and valid states. Comprehensive documentation.</p>
        <p><strong>Previous versions:</strong></p>
        <ul>
          <li>Version 2.5.2 (2021): Original open source release</li>
          <li>Earlier iterations: Personal framework</li>
        </ul>
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-license">
        <h2 id="dds-about-license">License</h2>
        <p>MIT License. Open source and free to use.</p>
        ${externalLinkRow('View License', 'https://github.com/cdfournier/delta-design-system/blob/master/LICENSE')}
      </section>

      <section class="dds-welcome-about__section" aria-labelledby="dds-about-me">
        <h2 id="dds-about-me">About me</h2>
        <p>I'm passionate about responsive, semantic, and accessible design and design systems.</p>
        ${externalLinkRow('chris.blackcoffeeshoppe.com', 'https://chris.blackcoffeeshoppe.com')}
      </section>
    </article>
  `;
}
