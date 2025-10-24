import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-skeleton')
export class LgSkeleton extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
    }

    .skeleton {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.3) 25%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0.3) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: var(--lg-radius-md);
    }

    :host([variant="text"]) .skeleton {
      height: 1em;
      margin-bottom: 0.5em;
    }

    :host([variant="circular"]) .skeleton {
      border-radius: 50%;
    }

    :host([variant="rectangular"]) .skeleton {
      border-radius: var(--lg-radius-md);
    }

    :host([width]) .skeleton {
      width: var(--skeleton-width);
    }

    :host([height]) .skeleton {
      height: var(--skeleton-height);
    }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    :host([data-computed-theme="dark"]) .skeleton {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.05) 25%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 75%
      );
    }
  `;

  @property({ type: String }) variant: 'text' | 'circular' | 'rectangular' = 'text';
  @property({ type: String }) width = '';
  @property({ type: String }) height = '';

  connectedCallback() {
    super.connectedCallback();
    if (this.width) {
      this.style.setProperty('--skeleton-width', this.width);
    }
    if (this.height) {
      this.style.setProperty('--skeleton-height', this.height);
    }
  }

  render() {
    return html`<div class="skeleton"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-skeleton': LgSkeleton;
  }
}
