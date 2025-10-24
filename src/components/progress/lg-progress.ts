import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-progress')
export class LgProgress extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .progress {
      position: relative;
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: var(--lg-radius-full);
      overflow: hidden;
    }

    :host([size="sm"]) .progress { height: 4px; }
    :host([size="md"]) .progress { height: 8px; }
    :host([size="lg"]) .progress { height: 12px; }

    .progress-bar {
      height: 100%;
      background: var(--lg-accent-blue);
      border-radius: var(--lg-radius-full);
      transition: width 0.3s ease;
    }

    .variant-success .progress-bar { background: var(--lg-accent-green); }
    .variant-warning .progress-bar { background: var(--lg-accent-orange); }
    .variant-danger .progress-bar { background: var(--lg-accent-red); }

    .progress-bar.indeterminate {
      width: 30% !important;
      animation: indeterminate 1.5s ease-in-out infinite;
    }

    @keyframes indeterminate {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(400%);
      }
    }

    .label {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--lg-space-2);
      font-size: var(--lg-text-sm);
      color: var(--lg-text-secondary);
    }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: String }) variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: String }) label = '';
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false;

  render() {
    const percentage = Math.min(100, Math.max(0, this.value));

    return html`
      ${this.label || this.showValue
        ? html`
            <div class="label">
              <span>${this.label}</span>
              ${this.showValue && !this.indeterminate ? html`<span>${percentage}%</span>` : ''}
            </div>
          `
        : ''}
      <div class="progress variant-${this.variant}">
        <div
          class="progress-bar ${this.indeterminate ? 'indeterminate' : ''}"
          style="width: ${this.indeterminate ? '30' : percentage}%"
          role="progressbar"
          aria-valuenow="${percentage}"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-progress': LgProgress;
  }
}
