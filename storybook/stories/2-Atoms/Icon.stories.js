export default {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** Icons from the Delta Design System at 24x24px. The Figma design system defines 21 icon types. SVG icons are rendered inline.`,
      },
    },
  },
};

const icons = {
  'arrow-left': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"></path>',
  'arrow-right': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M16.172 11H4v2h12.172l-5.364 5.364 1.414 1.414L20 12l-7.778-7.778-1.414 1.414z"></path>',
  'check': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M10 15.172l9.192-9.193 1.415 1.414L10 17.999l-6.364-6.364 1.414-1.414z"></path>',
  'chevron-down': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>',
  'menu': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>',
  'close': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>',
  'search': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zM11 18c3.867 0 7-3.134 7-7 0-3.867-3.133-7-7-7-3.868 0-7 3.133-7 7 0 3.866 3.132 7 7 7z"></path>',
  'plus': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>',
  'minus': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M5 11h14v2H5z"></path>',
  'sun': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path>',
  'moon': '<path fill="none" d="M0 0h24v24H0z"></path><path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"></path>',
};

export const AllIcons = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1.5rem;">
      ${Object.entries(icons).map(([name, paths]) => `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">${paths}</svg>
          <code style="font-size: 0.625rem; color: var(--gray-dark); text-align: center;">${name}</code>
        </div>
      `).join('')}
    </div>
  `;
  return el;
};
AllIcons.parameters = { controls: { disable: true } };
