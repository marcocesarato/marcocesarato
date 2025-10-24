import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-modal')
export class LgModal extends LiquidGlassElement {
  static styles = css`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }

    :host([open]) {
      display: flex;
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      animation: fadeIn 0.3s ease-out;
    }

    .modal-content {
      position: relative;
      background: var(--lg-glass-white);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: var(--lg-radius-2xl);
      padding: var(--lg-space-8);
      max-width: 500px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 24px 48px 0 rgba(0, 0, 0, 0.22);
      animation: modalEnter 0.35s cubic-bezier(0.23, 1, 0.32, 1);
    }

    :host([size="sm"]) .modal-content { max-width: 400px; }
    :host([size="md"]) .modal-content { max-width: 600px; }
    :host([size="lg"]) .modal-content { max-width: 800px; }
    :host([size="fullscreen"]) .modal-content {
      max-width: 100%;
      width: 100%;
      height: 100vh;
      max-height: 100vh;
      border-radius: 0;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--lg-space-4);
      padding-bottom: var(--lg-space-4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .modal-body {
      margin-bottom: var(--lg-space-4);
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--lg-space-2);
      padding-top: var(--lg-space-4);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .close-button {
      background: transparent;
      border: none;
      font-size: 24px;
      color: var(--lg-text-secondary);
      cursor: pointer;
      padding: 4px;
      line-height: 1;
      transition: color var(--lg-duration-fast);
    }

    .close-button:hover {
      color: var(--lg-text-primary);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes modalEnter {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(-20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    :host([data-computed-theme="dark"]) .modal-content {
      background: var(--lg-glass-dark);
      border-color: rgba(255, 255, 255, 0.1);
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'fullscreen' = 'md';
  @property({ type: Boolean, attribute: 'close-on-backdrop' }) closeOnBackdrop = true;
  @property({ type: String }) title = '';

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._handleEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleEscape);
  }

  render() {
    return html`
      <div class="backdrop" @click=${this._handleBackdropClick}></div>
      <div class="modal-content" role="dialog" aria-modal="true">
        <div class="modal-header">
          <slot name="header">
            ${this.title ? html`<h3 style="margin: 0;">${this.title}</h3>` : ''}
          </slot>
          <button class="close-button" @click=${this.close} aria-label="Close">×</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  public close() {
    this.open = false;
    this.dispatchCustomEvent('lg-close');
  }

  private _handleBackdropClick() {
    if (this.closeOnBackdrop) {
      this.close();
    }
  }

  private _handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.open) {
      this.close();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-modal': LgModal;
  }
}
