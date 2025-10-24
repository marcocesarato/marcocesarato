/**
 * Design Tokens - Typography
 * iOS-inspired type system
 */

export const typography = {
  // Font families
  fontFamily: {
    system:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    mono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 'Courier New', monospace",
  },

  // Font sizes
  fontSize: {
    xs: '12px',
    sm: '13px',
    base: '15px',
    md: '16px',
    lg: '17px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '28px',
    '4xl': '34px',
    '5xl': '48px',
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export type Typography = typeof typography;
