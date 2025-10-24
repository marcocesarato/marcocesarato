import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-card')
export class LgCard extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      background: var(--lg-glass-white);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-lg);
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 8px 16px 0 rgba(0, 0, 0, 0.12);
      transition: all var(--lg-duration-normal) var(--lg-ease-fluid);
      overflow: hidden;
    }

    :host([hoverable]:hover) {
      transform: translateY(-2px);
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 12px 24px 0 rgba(0, 0, 0, 0.15);
    }

    :host([data-computed-theme="dark"]) {
      background: var(--lg-glass-dark);
      border-color: rgba(255, 255, 255, 0.1);
    }

    .card-header {
      padding: var(--lg-space-4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card-body {
      padding: var(--lg-space-4);
    }

    .card-footer {
      padding: var(--lg-space-4);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  `;

  @property({ type: Boolean }) hoverable = false;

  render() {
    return html`
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-card': LgCard;
  }
}
