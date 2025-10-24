import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-alert')
export class LgAlert extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--lg-space-4) 0;
    }

    :host([hidden]) {
      display: none;
    }

    .alert {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: var(--lg-space-3);
      padding: var(--lg-space-4);
      background: var(--lg-glass-white);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: var(--lg-radius-lg);
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }

    .variant-info {
      background: rgba(0, 122, 255, 0.15);
      border-color: rgba(0, 122, 255, 0.3);
    }

    .variant-success {
      background: rgba(52, 199, 89, 0.15);
      border-color: rgba(52, 199, 89, 0.3);
    }

    .variant-warning {
      background: rgba(255, 149, 0, 0.15);
      border-color: rgba(255, 149, 0, 0.3);
    }

    .variant-error {
      background: rgba(255, 59, 48, 0.15);
      border-color: rgba(255, 59, 48, 0.3);
    }

    .icon {
      flex-shrink: 0;
      font-size: 20px;
      line-height: 1;
    }

    .variant-info .icon { color: var(--lg-accent-blue); }
    .variant-success .icon { color: var(--lg-accent-green); }
    .variant-warning .icon { color: var(--lg-accent-orange); }
    .variant-error .icon { color: var(--lg-accent-red); }

    .content {
      flex: 1;
    }

    .title {
      font-weight: 600;
      margin-bottom: var(--lg-space-1);
      color: var(--lg-text-primary);
    }

    .message {
      color: var(--lg-text-secondary);
      font-size: var(--lg-text-sm);
    }

    .close-button {
      background: transparent;
      border: none;
      font-size: 20px;
      color: var(--lg-text-secondary);
      cursor: pointer;
      padding: 0;
      line-height: 1;
      flex-shrink: 0;
      transition: color var(--lg-duration-fast);
    }

    .close-button:hover {
      color: var(--lg-text-primary);
    }
  `;

  @property({ type: String }) variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @property({ type: String }) title = '';
  @property({ type: Boolean }) closable = false;

  render() {
    const icons = {
      info: 'ℹ',
      success: '✓',
      warning: '⚠',
      error: '✕',
    };

    return html`
      <div class="alert variant-${this.variant}" role="alert">
        <span class="icon">${icons[this.variant]}</span>
        <div class="content">
          ${this.title ? html`<div class="title">${this.title}</div>` : ''}
          <div class="message"><slot></slot></div>
        </div>
        ${this.closable
          ? html`<button class="close-button" @click=${this._handleClose} aria-label="Close">×</button>`
          : ''}
      </div>
    `;
  }

  private _handleClose() {
    this.style.display = 'none';
    this.dispatchCustomEvent('lg-close');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-alert': LgAlert;
  }
}
