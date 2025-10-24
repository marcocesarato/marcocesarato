import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-avatar')
export class LgAvatar extends LiquidGlassElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .avatar {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--lg-accent-blue);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      overflow: hidden;
      font-weight: 600;
      color: white;
    }

    :host([size="xs"]) .avatar { width: 24px; height: 24px; font-size: 10px; }
    :host([size="sm"]) .avatar { width: 32px; height: 32px; font-size: 12px; }
    :host([size="md"]) .avatar { width: 40px; height: 40px; font-size: 14px; }
    :host([size="lg"]) .avatar { width: 56px; height: 56px; font-size: 18px; }
    :host([size="xl"]) .avatar { width: 80px; height: 80px; font-size: 24px; }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .status {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 30%;
      height: 30%;
      border-radius: 50%;
      border: 2px solid white;
    }

    .status-online { background: var(--lg-accent-green); }
    .status-offline { background: var(--lg-text-tertiary); }
    .status-busy { background: var(--lg-accent-red); }
    .status-away { background: var(--lg-accent-orange); }
  `;

  @property({ type: String }) src = '';
  @property({ type: String }) alt = '';
  @property({ type: String }) initials = '';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) status: 'online' | 'offline' | 'busy' | 'away' | '' = '';

  render() {
    return html`
      <div class="avatar">
        ${this.src
          ? html`<img src=${this.src} alt=${this.alt || ''} />`
          : html`<span>${this.initials || this._getInitials()}</span>`}
        ${this.status ? html`<span class="status status-${this.status}"></span>` : ''}
      </div>
    `;
  }

  private _getInitials(): string {
    if (this.alt) {
      return this.alt
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return '?';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-avatar': LgAvatar;
  }
}
