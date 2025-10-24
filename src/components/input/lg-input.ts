import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-input')
export class LgInput extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px) saturate(150%);
      -webkit-backdrop-filter: blur(10px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-md);
      padding: 12px 16px;
      font-family: var(--lg-font-system);
      font-size: var(--lg-text-md);
      color: var(--lg-text-primary);
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      transition: all var(--lg-duration-normal) var(--lg-ease-fluid);
      outline: none;
    }

    input::placeholder {
      color: var(--lg-text-tertiary);
    }

    input:focus {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-color: var(--lg-accent-blue);
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 3px rgba(0, 122, 255, 0.2);
    }

    input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([error]) input {
      border-color: var(--lg-accent-red);
    }

    :host([error]) input:focus {
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 3px rgba(255, 59, 48, 0.2);
    }

    label {
      display: block;
      margin-bottom: var(--lg-space-2);
      font-size: var(--lg-text-sm);
      font-weight: 500;
      color: var(--lg-text-secondary);
    }

    .error-message {
      margin-top: var(--lg-space-2);
      font-size: var(--lg-text-sm);
      color: var(--lg-accent-red);
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) error = false;
  @property({ type: String, attribute: 'error-message' }) errorMessage = '';

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <div class="input-wrapper">
        <input
          type=${this.type}
          placeholder=${this.placeholder}
          .value=${this.value}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
      </div>
      ${this.error && this.errorMessage ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
    `;
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchCustomEvent('lg-input', { value: this.value });
  }

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchCustomEvent('lg-change', { value: this.value });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-input': LgInput;
  }
}
