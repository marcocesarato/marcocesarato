/**
 * Design Tokens - Colors
 * Liquid Glass UI Color System
 */

export const colors = {
  // Base Glass Colors - Light Mode
  glass: {
    white: 'rgba(255, 255, 255, 0.7)',
    whiteStrong: 'rgba(255, 255, 255, 0.85)',
    whiteSubtle: 'rgba(255, 255, 255, 0.5)',
    dark: 'rgba(20, 20, 30, 0.7)',
    darkStrong: 'rgba(20, 20, 30, 0.85)',
    darkSubtle: 'rgba(20, 20, 30, 0.5)',
  },

  // Accent Colors - Glass Treated
  accent: {
    blue: 'rgba(0, 122, 255, 0.8)',
    purple: 'rgba(175, 82, 222, 0.8)',
    pink: 'rgba(255, 45, 85, 0.8)',
    green: 'rgba(52, 199, 89, 0.8)',
    orange: 'rgba(255, 149, 0, 0.8)',
    red: 'rgba(255, 59, 48, 0.8)',
    teal: 'rgba(90, 200, 250, 0.8)',
    indigo: 'rgba(88, 86, 214, 0.8)',
    yellow: 'rgba(255, 214, 10, 0.8)',
  },

  // Text Colors
  text: {
    primary: 'rgba(0, 0, 0, 0.9)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    tertiary: 'rgba(0, 0, 0, 0.4)',
    primaryDark: 'rgba(255, 255, 255, 0.95)',
    secondaryDark: 'rgba(255, 255, 255, 0.7)',
    tertiaryDark: 'rgba(255, 255, 255, 0.5)',
  },

  // Border Colors
  border: {
    light: 'rgba(255, 255, 255, 0.2)',
    medium: 'rgba(255, 255, 255, 0.3)',
    strong: 'rgba(255, 255, 255, 0.4)',
    dark: 'rgba(255, 255, 255, 0.1)',
  },

  // Semantic Colors
  semantic: {
    success: 'rgba(52, 199, 89, 0.8)',
    warning: 'rgba(255, 149, 0, 0.8)',
    error: 'rgba(255, 59, 48, 0.8)',
    info: 'rgba(0, 122, 255, 0.8)',
  },
} as const;

export type Colors = typeof colors;
