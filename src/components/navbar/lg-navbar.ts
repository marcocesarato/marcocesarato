import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-navbar')
export class LgNavbar extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--lg-glass-white);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--lg-space-3) var(--lg-space-6);
      max-width: 1280px;
      margin: 0 auto;
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
      gap: var(--lg-space-4);
    }

    :host([data-computed-theme="dark"]) {
      background: var(--lg-glass-dark);
      border-color: rgba(255, 255, 255, 0.1);
    }
  `;

  render() {
    return html`
      <nav class="navbar">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-navbar': LgNavbar;
  }
}
