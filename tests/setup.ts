import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/web-components';

// Extend expect matchers if needed
expect.extend({
  // Custom matchers can be added here
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock IntersectionObserver for tests
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock ResizeObserver for tests
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any;

// Suppress console warnings in tests (optional)
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = (...args: any[]) => {
    // Filter out specific warnings if needed
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Lit is in dev mode')
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };

  console.error = (...args: any[]) => {
    // Filter out specific errors if needed
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});
