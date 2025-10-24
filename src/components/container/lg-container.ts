import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-container')
export class LgContainer extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--lg-space-4);
      padding-right: var(--lg-space-4);
    }

    :host([size="sm"]) { max-width: 640px; }
    :host([size="md"]) { max-width: 768px; }
    :host([size="lg"]) { max-width: 1024px; }
    :host([size="xl"]) { max-width: 1280px; }
    :host([size="2xl"]) { max-width: 1536px; }
    :host([size="full"]) { max-width: 100%; }
  `;

  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'lg';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-container': LgContainer;
  }
}
