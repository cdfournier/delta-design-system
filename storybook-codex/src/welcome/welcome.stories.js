import { createWelcomeCoverPage, createWelcomeAboutPage } from './welcome';

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome pages for the Delta Design System Storybook: Cover and About.',
      },
    },
  },
};

export default meta;

export const Cover = {
  render: () => createWelcomeCoverPage(),
  parameters: {
    docs: {
      description: {
        story: 'Top cover page for the Welcome section.',
      },
    },
  },
};

export const About = {
  render: () => createWelcomeAboutPage(),
  parameters: {
    docs: {
      description: {
        story: 'About page for the Welcome section.',
      },
    },
  },
};

export const __namedExportsOrder = ['Cover', 'About'];
