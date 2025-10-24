import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-tooltip')
export class LgTooltip extends LiquidGlassElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    .tooltip {
      position: absolute;
      z-index: 1000;
      padding: var(--lg-space-2) var(--lg-space-3);
      background: rgba(20, 20, 30, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: var(--lg-radius-md);
      font-size: var(--lg-text-sm);
      color: white;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateY(4px);
      transition: opacity 0.2s, transform 0.2s;
    }

    .tooltip.show {
      opacity: 1;
      transform: translateY(0);
    }

    .tooltip.position-top {
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(-4px);
    }

    .tooltip.position-top.show {
      transform: translateX(-50%) translateY(0);
    }

    .tooltip.position-bottom {
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(4px);
    }

    .tooltip.position-bottom.show {
      transform: translateX(-50%) translateY(0);
    }

    .tooltip.position-left {
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%) translateX(-4px);
    }

    .tooltip.position-left.show {
      transform: translateY(-50%) translateX(0);
    }

    .tooltip.position-right {
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%) translateX(4px);
    }

    .tooltip.position-right.show {
      transform: translateY(-50%) translateX(0);
    }
  `;

  @property({ type: String }) text = '';
  @property({ type: String }) position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @state() private _show = false;

  render() {
    return html`
      <div
        @mouseenter=${this._handleShow}
        @mouseleave=${this._handleHide}
        @focus=${this._handleShow}
        @blur=${this._handleHide}
      >
        <slot></slot>
      </div>
      ${this.text
        ? html`
            <div class="tooltip position-${this.position} ${this._show ? 'show' : ''}" role="tooltip">
              ${this.text}
            </div>
          `
        : ''}
    `;
  }

  private _handleShow() {
    this._show = true;
  }

  private _handleHide() {
    this._show = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-tooltip': LgTooltip;
  }
}
