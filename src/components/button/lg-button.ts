import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-button')
export class LgButton extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      /* Reset */
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin: 0;
      border: none;
      outline: none;
      font-family: inherit;
      cursor: pointer;
      user-select: none;

      /* Glass effect */
      background: var(--lg-glass-white);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);

      /* Shape */
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-md);
      padding: 12px 24px;

      /* Typography */
      font-size: var(--lg-text-md);
      font-weight: 500;
      color: var(--lg-text-primary);

      /* Effects */
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 8px 0 rgba(0, 0, 0, 0.12);
      transition: all var(--lg-duration-normal) var(--lg-ease-fluid);
    }

    /* Sizes */
    .size-xs {
      padding: 6px 12px;
      font-size: var(--lg-text-xs);
    }
    .size-sm {
      padding: 8px 16px;
      font-size: var(--lg-text-sm);
    }
    .size-lg {
      padding: 14px 28px;
      font-size: var(--lg-text-lg);
    }
    .size-xl {
      padding: 16px 32px;
      font-size: var(--lg-text-xl);
    }

    /* Variants */
    .variant-primary {
      background: var(--lg-accent-blue);
      border-color: rgba(255, 255, 255, 0.25);
      color: white;
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 8px 16px 0 rgba(0, 122, 255, 0.3);
    }

    .variant-secondary {
      background: var(--lg-accent-purple);
      border-color: rgba(255, 255, 255, 0.25);
      color: white;
    }

    .variant-success {
      background: var(--lg-accent-green);
      border-color: rgba(255, 255, 255, 0.25);
      color: white;
    }

    .variant-danger {
      background: var(--lg-accent-red);
      border-color: rgba(255, 255, 255, 0.25);
      color: white;
    }

    .variant-ghost {
      background: transparent;
      border-color: transparent;
      box-shadow: none;
    }

    .variant-outline {
      background: transparent;
      border-color: var(--lg-accent-blue);
      color: var(--lg-accent-blue);
      backdrop-filter: none;
      box-shadow: none;
    }

    /* States */
    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 6px 12px 0 rgba(0, 0, 0, 0.15);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }

    button:focus-visible {
      box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 8px 0 rgba(0, 0, 0, 0.12),
        0 0 0 3px rgba(0, 122, 255, 0.5);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .full-width {
      width: 100%;
    }
  `;

  @property({ type: String }) variant: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'ghost' | 'outline' = 'default';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';
  @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;

  render() {
    const classes = {
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      'full-width': this.fullWidth,
    };

    return html`
      <button
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchCustomEvent('lg-click', { originalEvent: e });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-button': LgButton;
  }
}
