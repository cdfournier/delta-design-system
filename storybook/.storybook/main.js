/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/html-vite',
  staticDirs: [
    { from: '../../assets', to: '/assets' },
    { from: '../../css', to: '/css' },
  ],
  core: {
    disableTelemetry: true,
  },
};

export default config;
