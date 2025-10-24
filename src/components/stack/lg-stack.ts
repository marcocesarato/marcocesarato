import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-stack')
export class LgStack extends LiquidGlassElement {
  static styles = css`
    :host {
      display: flex;
      gap: var(--lg-space-4);
    }

    :host([direction="vertical"]) {
      flex-direction: column;
    }

    :host([direction="horizontal"]) {
      flex-direction: row;
    }

    :host([align="start"]) { align-items: flex-start; }
    :host([align="center"]) { align-items: center; }
    :host([align="end"]) { align-items: flex-end; }
    :host([align="stretch"]) { align-items: stretch; }

    :host([justify="start"]) { justify-content: flex-start; }
    :host([justify="center"]) { justify-content: center; }
    :host([justify="end"]) { justify-content: flex-end; }
    :host([justify="between"]) { justify-content: space-between; }
    :host([justify="around"]) { justify-content: space-around; }
  `;

  @property({ type: String }) direction: 'vertical' | 'horizontal' = 'vertical';
  @property({ type: String }) align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @property({ type: String }) justify: 'start' | 'center' | 'end' | 'between' | 'around' = 'start';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-stack': LgStack;
  }
}
