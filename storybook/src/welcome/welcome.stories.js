import { createWelcomeAbout, createWelcomeCover } from './welcome';

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;

export const Cover = {
  name: 'Cover',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    a11y: { disable: true },
    options: { showPanel: false },
  },
  render: () => createWelcomeCover(),
};

export const About = {
  name: 'About',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    a11y: { disable: true },
    options: { showPanel: false },
  },
  render: () => createWelcomeAbout(),
};
