import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-badge')
export class LgBadge extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      background: var(--lg-accent-blue);
      backdrop-filter: blur(10px) saturate(180%);
      -webkit-backdrop-filter: blur(10px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: var(--lg-radius-full);
      font-size: var(--lg-text-xs);
      font-weight: 600;
      color: white;
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 2px 4px 0 rgba(0, 122, 255, 0.3);
    }

    .variant-success { background: var(--lg-accent-green); }
    .variant-warning { background: var(--lg-accent-orange); }
    .variant-danger { background: var(--lg-accent-red); }
    .variant-neutral { background: var(--lg-glass-white); color: var(--lg-text-primary); }
  `;

  @property({ type: String }) variant: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' = 'primary';

  render() {
    return html`
      <span class="badge variant-${this.variant}">
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-badge': LgBadge;
  }
}
