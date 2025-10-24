/**
 * Design Tokens - Animations
 * Duration and easing functions
 */

export const animations = {
  // Duration
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },

  // Easing functions
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    fluid: 'cubic-bezier(0.23, 1, 0.32, 1)',
  },
} as const;

export type Animations = typeof animations;
