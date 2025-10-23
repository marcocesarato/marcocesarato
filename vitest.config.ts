import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Test environment
    environment: 'jsdom',

    // Global setup
    globals: true,

    // Setup files
    setupFiles: ['./tests/setup.ts'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'tests/',
        'dist/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'stories/',
        '.storybook/',
      ],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },

    // File inclusion/exclusion
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist', '.storybook'],

    // Test timeout
    testTimeout: 10000,

    // Reporter
    reporters: ['verbose'],

    // Watch mode
    watch: false,

    // Browser testing (for web components)
    browser: {
      enabled: false, // Enable for browser-specific tests
      name: 'chromium',
      provider: 'playwright',
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@tokens': resolve(__dirname, './src/tokens'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
    },
  },
});
