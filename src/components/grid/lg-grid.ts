import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-grid')
export class LgGrid extends LiquidGlassElement {
  static styles = css`
    :host {
      display: grid;
      gap: var(--lg-space-4);
    }

    :host([cols="1"]) { grid-template-columns: repeat(1, 1fr); }
    :host([cols="2"]) { grid-template-columns: repeat(2, 1fr); }
    :host([cols="3"]) { grid-template-columns: repeat(3, 1fr); }
    :host([cols="4"]) { grid-template-columns: repeat(4, 1fr); }
    :host([cols="6"]) { grid-template-columns: repeat(6, 1fr); }
    :host([cols="12"]) { grid-template-columns: repeat(12, 1fr); }

    @media (max-width: 768px) {
      :host([cols="2"]), :host([cols="3"]), :host([cols="4"]), :host([cols="6"]), :host([cols="12"]) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `;

  @property({ type: Number }) cols: 1 | 2 | 3 | 4 | 6 | 12 = 3;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-grid': LgGrid;
  }
}
