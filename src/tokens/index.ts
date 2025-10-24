/**
 * Design Tokens
 * Liquid Glass UI Design System
 */

export { colors, type Colors } from './colors';
export { spacing, type Spacing } from './spacing';
export { typography, type Typography } from './typography';
export { shadows, type Shadows } from './shadows';
export { radius, type Radius } from './radius';
export { blur, type Blur } from './blur';
export { animations, type Animations } from './animations';

// Combined export
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { shadows } from './shadows';
import { radius } from './radius';
import { blur } from './blur';
import { animations } from './animations';

export const tokens = {
  colors,
  spacing,
  typography,
  shadows,
  radius,
  blur,
  animations,
} as const;

export type Tokens = typeof tokens;
