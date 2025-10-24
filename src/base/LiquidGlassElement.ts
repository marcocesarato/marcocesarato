/**
 * Base element for all Liquid Glass UI components
 * Provides common functionality and utilities
 */

import { LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

export class LiquidGlassElement extends LitElement {
  /**
   * Theme: light, dark, or auto (system)
   */
  @property({ type: String, reflect: true })
  theme: 'light' | 'dark' | 'auto' = 'auto';

  /**
   * Disabled state
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Current computed theme (resolved from 'auto')
   */
  protected _computedTheme: 'light' | 'dark' = 'light';

  /**
   * Media query for dark mode detection
   */
  private _darkModeQuery?: MediaQueryList;

  connectedCallback() {
    super.connectedCallback();
    this._setupTheme();
    this._setupA11y();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._darkModeQuery) {
      this._darkModeQuery.removeEventListener('change', this._handleThemeChange);
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('theme')) {
      this._updateComputedTheme();
    }
  }

  /**
   * Setup theme detection
   */
  private _setupTheme() {
    this._darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this._darkModeQuery.addEventListener('change', this._handleThemeChange);
    this._updateComputedTheme();
  }

  /**
   * Handle system theme changes
   */
  private _handleThemeChange = () => {
    this._updateComputedTheme();
    this.requestUpdate();
  };

  /**
   * Update computed theme based on setting
   */
  private _updateComputedTheme() {
    if (this.theme === 'auto') {
      this._computedTheme = this._darkModeQuery?.matches ? 'dark' : 'light';
    } else {
      this._computedTheme = this.theme;
    }

    // Update attribute for CSS targeting
    this.setAttribute('data-computed-theme', this._computedTheme);
  }

  /**
   * Setup accessibility features
   */
  protected _setupA11y() {
    // Can be overridden by components
  }

  /**
   * Calculate glass effect properties based on intensity
   */
  protected calculateGlassEffect(intensity: 'subtle' | 'medium' | 'strong' = 'medium') {
    const effects = {
      subtle: {
        background: 'rgba(255, 255, 255, 0.5)',
        blur: 'blur(10px) saturate(150%)',
        border: 'rgba(255, 255, 255, 0.15)',
      },
      medium: {
        background: 'rgba(255, 255, 255, 0.7)',
        blur: 'blur(20px) saturate(180%)',
        border: 'rgba(255, 255, 255, 0.2)',
      },
      strong: {
        background: 'rgba(255, 255, 255, 0.85)',
        blur: 'blur(40px) saturate(200%)',
        border: 'rgba(255, 255, 255, 0.3)',
      },
    };

    // Adjust for dark mode
    if (this._computedTheme === 'dark') {
      return {
        background: effects[intensity].background.replace('255, 255, 255', '20, 20, 30'),
        blur: effects[intensity].blur,
        border: 'rgba(255, 255, 255, 0.1)',
      };
    }

    return effects[intensity];
  }

  /**
   * Dispatch a custom event with proper typing
   */
  protected dispatchCustomEvent<T = any>(
    name: string,
    detail?: T,
    options?: Omit<CustomEventInit, 'detail'>
  ) {
    this.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        ...options,
      })
    );
  }
}
