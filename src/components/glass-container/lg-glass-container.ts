import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-glass-container')
export class LgGlassContainer extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      background: var(--lg-glass-white);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-lg);
      padding: var(--lg-space-6);
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 8px 16px 0 rgba(0, 0, 0, 0.12);
    }

    :host([intensity="subtle"]) {
      background: var(--lg-glass-white-subtle);
      backdrop-filter: blur(10px) saturate(150%);
      -webkit-backdrop-filter: blur(10px) saturate(150%);
    }

    :host([intensity="strong"]) {
      background: var(--lg-glass-white-strong);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
    }

    :host([data-computed-theme="dark"]) {
      background: var(--lg-glass-dark);
      border-color: rgba(255, 255, 255, 0.1);
    }
  `;

  @property({ type: String }) intensity: 'subtle' | 'medium' | 'strong' = 'medium';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-glass-container': LgGlassContainer;
  }
}
