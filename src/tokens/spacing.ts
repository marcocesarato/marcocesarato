/**
 * Design Tokens - Spacing
 * 4px base unit scale
 */

export const spacing = {
  // Base unit
  unit: '4px',

  // Spacing scale
  space1: '4px',
  space2: '8px',
  space3: '12px',
  space4: '16px',
  space5: '20px',
  space6: '24px',
  space8: '32px',
  space10: '40px',
  space12: '48px',
  space16: '64px',
  space20: '80px',
  space24: '96px',

  // Semantic spacing
  padding: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  gap: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
} as const;

export type Spacing = typeof spacing;
