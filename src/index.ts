/**
 * Liquid Glass UI
 * A framework-agnostic design system library inspired by iOS 26's Liquid Glass design language
 */

// Import global styles
import './styles/globals.css';

// Export all components
export * from './components';

// Export design tokens
export * from './tokens';

// Export base class for custom components
export { LiquidGlassElement } from './base/LiquidGlassElement';

// Export utilities
export * from './utils/color-utils';

// Auto-register all components
import './components/button/lg-button';
import './components/heading/lg-heading';
import './components/container/lg-container';
import './components/glass-container/lg-glass-container';
import './components/card/lg-card';
import './components/input/lg-input';
import './components/toggle/lg-toggle';
import './components/checkbox/lg-checkbox';
import './components/badge/lg-badge';
import './components/spinner/lg-spinner';
import './components/navbar/lg-navbar';
import './components/grid/lg-grid';
import './components/stack/lg-stack';

// Version
export const version = '1.0.0';
