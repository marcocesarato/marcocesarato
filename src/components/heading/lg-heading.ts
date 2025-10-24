import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-heading')
export class LgHeading extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-family: var(--lg-font-system);
      font-weight: 600;
      color: var(--lg-text-primary);
      line-height: 1.2;
    }

    h1 { font-size: var(--lg-text-5xl); }
    h2 { font-size: var(--lg-text-4xl); }
    h3 { font-size: var(--lg-text-3xl); }
    h4 { font-size: var(--lg-text-2xl); }
    h5 { font-size: var(--lg-text-xl); }
    h6 { font-size: var(--lg-text-lg); }
  `;

  @property({ type: Number }) level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  render() {
    switch (this.level) {
      case 1: return html`<h1><slot></slot></h1>`;
      case 2: return html`<h2><slot></slot></h2>`;
      case 3: return html`<h3><slot></slot></h3>`;
      case 4: return html`<h4><slot></slot></h4>`;
      case 5: return html`<h5><slot></slot></h5>`;
      case 6: return html`<h6><slot></slot></h6>`;
      default: return html`<h1><slot></slot></h1>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-heading': LgHeading;
  }
}
