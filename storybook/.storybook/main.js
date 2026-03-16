/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
