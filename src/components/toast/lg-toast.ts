import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-toast')
export class LgToast extends LiquidGlassElement {
  static styles = css`
    :host {
      position: fixed;
      z-index: 2000;
      display: none;
    }

    :host([open]) {
      display: block;
    }

    :host([position="top-left"]) { top: var(--lg-space-4); left: var(--lg-space-4); }
    :host([position="top-center"]) { top: var(--lg-space-4); left: 50%; transform: translateX(-50%); }
    :host([position="top-right"]) { top: var(--lg-space-4); right: var(--lg-space-4); }
    :host([position="bottom-left"]) { bottom: var(--lg-space-4); left: var(--lg-space-4); }
    :host([position="bottom-center"]) { bottom: var(--lg-space-4); left: 50%; transform: translateX(-50%); }
    :host([position="bottom-right"]) { bottom: var(--lg-space-4); right: var(--lg-space-4); }

    .toast {
      display: flex;
      align-items: center;
      gap: var(--lg-space-3);
      min-width: 300px;
      padding: var(--lg-space-4);
      background: rgba(20, 20, 30, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--lg-radius-lg);
      color: white;
      box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.3);
      animation: toastEnter 0.3s ease-out;
    }

    .variant-success { border-left: 4px solid var(--lg-accent-green); }
    .variant-error { border-left: 4px solid var(--lg-accent-red); }
    .variant-warning { border-left: 4px solid var(--lg-accent-orange); }
    .variant-info { border-left: 4px solid var(--lg-accent-blue); }

    .icon {
      font-size: 20px;
      flex-shrink: 0;
    }

    .content {
      flex: 1;
    }

    .title {
      font-weight: 600;
      margin-bottom: 4px;
    }

    .message {
      font-size: var(--lg-text-sm);
      opacity: 0.9;
    }

    .close-button {
      background: transparent;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      opacity: 0.7;
      transition: opacity var(--lg-duration-fast);
    }

    .close-button:hover {
      opacity: 1;
    }

    @keyframes toastEnter {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @property({ type: String }) title = '';
  @property({ type: String }) message = '';
  @property({ type: String }) position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' = 'top-right';
  @property({ type: Number }) duration = 5000;
  @property({ type: Boolean }) closable = true;

  private _timer?: number;

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('open') && this.open) {
      if (this.duration > 0) {
        clearTimeout(this._timer);
        this._timer = window.setTimeout(() => {
          this.close();
        }, this.duration);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
  }

  render() {
    const icons = {
      info: 'ℹ',
      success: '✓',
      warning: '⚠',
      error: '✕',
    };

    return html`
      <div class="toast variant-${this.variant}" role="alert">
        <span class="icon">${icons[this.variant]}</span>
        <div class="content">
          ${this.title ? html`<div class="title">${this.title}</div>` : ''}
          <div class="message">${this.message || html`<slot></slot>`}</div>
        </div>
        ${this.closable
          ? html`<button class="close-button" @click=${this.close} aria-label="Close">×</button>`
          : ''}
      </div>
    `;
  }

  public close() {
    this.open = false;
    clearTimeout(this._timer);
    this.dispatchCustomEvent('lg-close');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-toast': LgToast;
  }
}
