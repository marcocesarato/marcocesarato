import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-divider')
export class LgDivider extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--lg-space-4) 0;
    }

    :host([orientation="vertical"]) {
      display: inline-block;
      height: auto;
      margin: 0 var(--lg-space-4);
    }

    .divider {
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin: 0;
    }

    :host([orientation="vertical"]) .divider {
      border-top: none;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      height: 100%;
      min-height: 20px;
    }

    .divider-with-text {
      display: flex;
      align-items: center;
      gap: var(--lg-space-3);
    }

    .divider-with-text::before,
    .divider-with-text::after {
      content: '';
      flex: 1;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .text {
      font-size: var(--lg-text-sm);
      color: var(--lg-text-secondary);
      white-space: nowrap;
    }
  `;

  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    const hasText = this.textContent?.trim();

    if (hasText && this.orientation === 'horizontal') {
      return html`
        <div class="divider-with-text">
          <span class="text"><slot></slot></span>
        </div>
      `;
    }

    return html`<hr class="divider" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-divider': LgDivider;
  }
}
