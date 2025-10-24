/**
 * Design Tokens - Blur
 * Backdrop filter blur values
 */

export const blur = {
  subtle: 'blur(10px)',
  medium: 'blur(20px)',
  strong: 'blur(40px)',
  extreme: 'blur(60px)',

  // With saturation boost (recommended)
  glass: {
    subtle: 'blur(10px) saturate(150%)',
    medium: 'blur(20px) saturate(180%)',
    strong: 'blur(40px) saturate(200%)',
    extreme: 'blur(60px) saturate(220%)',
  },
} as const;

export type Blur = typeof blur;
