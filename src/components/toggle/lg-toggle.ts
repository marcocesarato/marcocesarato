import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-toggle')
export class LgToggle extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .toggle {
      position: relative;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .track {
      position: relative;
      width: 52px;
      height: 32px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-full);
      transition: all var(--lg-duration-normal) var(--lg-ease-fluid);
    }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 26px;
      height: 26px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      transition: all var(--lg-duration-normal) var(--lg-ease-fluid);
    }

    input:checked + .track {
      background: var(--lg-accent-blue);
    }

    input:checked + .track .thumb {
      transform: translateX(20px);
    }

    input:disabled + .track {
      opacity: 0.5;
      cursor: not-allowed;
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
      <label class="toggle">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        />
        <span class="track">
          <span class="thumb"></span>
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
    'lg-toggle': LgToggle;
  }
}
