import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-radio')
export class LgRadio extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .radio {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    input {
      position: absolute;
      opacity: 0;
    }

    .circle {
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--lg-duration-fast);
    }

    input:checked + .circle {
      background: var(--lg-accent-blue);
      border-color: var(--lg-accent-blue);
    }

    .dot {
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0.5);
      transition: all var(--lg-duration-fast);
    }

    input:checked + .circle .dot {
      opacity: 1;
      transform: scale(1);
    }

    .label {
      margin-left: var(--lg-space-2);
      font-size: var(--lg-text-md);
      color: var(--lg-text-primary);
    }

    input:disabled + .circle {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = '';
  @property({ type: String }) name = '';
  @property({ type: String }) value = '';

  render() {
    return html`
      <label class="radio">
        <input
          type="radio"
          name=${this.name}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        />
        <span class="circle">
          <span class="dot"></span>
        </span>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `;
  }

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchCustomEvent('lg-change', { checked: this.checked, value: this.value });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-radio': LgRadio;
  }
}
