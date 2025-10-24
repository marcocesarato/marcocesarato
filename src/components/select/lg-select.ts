import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-select')
export class LgSelect extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .select-wrapper {
      position: relative;
    }

    select {
      width: 100%;
      appearance: none;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px) saturate(150%);
      -webkit-backdrop-filter: blur(10px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-md);
      padding: 12px 40px 12px 16px;
      font-family: var(--lg-font-system);
      font-size: var(--lg-text-md);
      color: var(--lg-text-primary);
      cursor: pointer;
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      transition: all var(--lg-duration-normal) var(--lg-ease-fluid);
      outline: none;
    }

    select:hover {
      background: rgba(255, 255, 255, 0.6);
    }

    select:focus {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-color: var(--lg-accent-blue);
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 3px rgba(0, 122, 255, 0.2);
    }

    select:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .arrow {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: var(--lg-text-secondary);
    }

    label {
      display: block;
      margin-bottom: var(--lg-space-2);
      font-size: var(--lg-text-sm);
      font-weight: 500;
      color: var(--lg-text-secondary);
    }

    :host([error]) select {
      border-color: var(--lg-accent-red);
    }

    :host([error]) select:focus {
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 3px rgba(255, 59, 48, 0.2);
    }

    .error-message {
      margin-top: var(--lg-space-2);
      font-size: var(--lg-text-sm);
      color: var(--lg-accent-red);
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) error = false;
  @property({ type: String, attribute: 'error-message' }) errorMessage = '';
  @property({ type: Array }) options: Array<{ label: string; value: string }> = [];

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <div class="select-wrapper">
        <select .value=${this.value} ?disabled=${this.disabled} @change=${this._handleChange}>
          ${this.options.map(
            (option) => html`
              <option value=${option.value} ?selected=${option.value === this.value}>
                ${option.label}
              </option>
            `
          )}
          <slot></slot>
        </select>
        <span class="arrow">▼</span>
      </div>
      ${this.error && this.errorMessage ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
    `;
  }

  private _handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.value = select.value;
    this.dispatchCustomEvent('lg-change', { value: this.value });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-select': LgSelect;
  }
}
