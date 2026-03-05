/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  framework: '@storybook/html-vite',
  stories: ['../src/**/*.stories.@(js|mdx)', '../src/**/*.docs.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
};

export default config;
