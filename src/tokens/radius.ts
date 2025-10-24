/**
 * Design Tokens - Border Radius
 * Rounded corners for glass surfaces
 */

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
} as const;

export type Radius = typeof radius;
