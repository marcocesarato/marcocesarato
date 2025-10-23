import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  core: {
    disableTelemetry: true,
  },

  typescript: {
    check: false,
    reactDocgen: false,
  },

  viteFinal: async (config) => {
    // Customize Vite config for Storybook
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': '/src',
          '@components': '/src/components',
          '@tokens': '/src/tokens',
          '@utils': '/src/utils',
          '@styles': '/src/styles',
        },
      },
    };
  },
};

export default config;
