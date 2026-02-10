export default {
  title: 'Organisms/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The site header with logo and navigation. On mobile, the nav is hidden behind a hamburger menu toggle. On desktop (48rem+), the nav displays inline. The header uses \`position: relative\` in Storybook (overridden from fixed).`,
      },
    },
  },
};

const headerHTML = `
  <header style="position: relative;">
    <div class="logo">
      <a href="#">
        <svg style="display: grid; width: 100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 796">
          <defs><style>.cls-1{fill:#01232d;}.cls-2{fill:#013342;}</style></defs>
          <polygon class="cls-1" points="512 796 1024 796 512 0 512 796"></polygon>
          <polygon class="cls-2" points="0 796 512 796 512 0 0 796"></polygon>
        </svg>
      </a>
    </div>
    <nav aria-labelledby="header-navigation">
      <button class="menu-toggle" aria-expanded="false" aria-controls="header-navigation">
        <svg class="menu-toggle-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path></svg>
        <svg class="menu-toggle-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></svg>
      </button>
      <ul id="header-navigation">
        <li><a href="#">Atoms</a></li>
        <li><a href="#">Molecules</a></li>
        <li><a href="#">Organisms</a></li>
        <li><a href="#">Style</a></li>
      </ul>
    </nav>
  </header>
`;

export const Default = () => {
  const el = document.createElement('div');
  el.innerHTML = headerHTML;

  const header = el.querySelector('header');
  const toggle = el.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen.toString());
  });

  return el;
};

export const MobileOpen = () => {
  const el = document.createElement('div');
  el.innerHTML = headerHTML;

  const header = el.querySelector('header');
  header.classList.add('open');
  const toggle = el.querySelector('.menu-toggle');
  toggle.setAttribute('aria-expanded', 'true');

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen.toString());
  });

  return el;
};
MobileOpen.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};
