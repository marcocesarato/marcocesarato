/**
 * Design Tokens - Shadows
 * Elevation and glass effects
 */

export const shadows = {
  // Elevation shadows
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
  md: '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
  lg: '0 8px 16px 0 rgba(0, 0, 0, 0.15)',
  xl: '0 12px 24px 0 rgba(0, 0, 0, 0.18)',
  '2xl': '0 24px 48px 0 rgba(0, 0, 0, 0.22)',

  // Inner glow for glass edges
  glow: {
    inner: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
    innerDark: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
  },

  // Combined glass effect shadows
  glass: {
    default: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 8px 0 rgba(0, 0, 0, 0.12)',
    strong: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 8px 16px 0 rgba(0, 0, 0, 0.15)',
    subtle: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
  },
} as const;

export type Shadows = typeof shadows;
