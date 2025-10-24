import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-spinner')
export class LgSpinner extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .spinner {
      display: inline-block;
      border: 3px solid rgba(0, 122, 255, 0.2);
      border-top-color: var(--lg-accent-blue);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    .size-sm { width: 16px; height: 16px; border-width: 2px; }
    .size-md { width: 24px; height: 24px; }
    .size-lg { width: 32px; height: 32px; border-width: 4px; }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';

  render() {
    return html`<div class="spinner size-${this.size}"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-spinner': LgSpinner;
  }
}
