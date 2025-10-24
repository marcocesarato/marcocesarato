import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-checkbox')
export class LgCheckbox extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .checkbox {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    input {
      position: absolute;
      opacity: 0;
    }

    .box {
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: var(--lg-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--lg-duration-fast);
    }

    input:checked + .box {
      background: var(--lg-accent-blue);
      border-color: var(--lg-accent-blue);
    }

    .checkmark {
      width: 12px;
      height: 12px;
      color: white;
      opacity: 0;
      transform: scale(0.5);
      transition: all var(--lg-duration-fast);
    }

    input:checked + .box .checkmark {
      opacity: 1;
      transform: scale(1);
    }

    .label {
      margin-left: var(--lg-space-2);
      font-size: var(--lg-text-md);
      color: var(--lg-text-primary);
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = '';

  render() {
    return html`
      <label class="checkbox">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        />
        <span class="box">
          <svg class="checkmark" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="2,6 5,9 10,3" />
          </svg>
        </span>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `;
  }

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchCustomEvent('lg-change', { checked: this.checked });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-checkbox': LgCheckbox;
  }
}
