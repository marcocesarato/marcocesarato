import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';

@customElement('lg-tabs')
export class LgTabs extends LiquidGlassElement {
  static styles = css`
    :host {
      display: block;
    }

    .tabs-container {
      background: var(--lg-glass-white);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--lg-radius-lg);
      overflow: hidden;
    }

    .tabs-header {
      display: flex;
      gap: var(--lg-space-1);
      padding: var(--lg-space-2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      overflow-x: auto;
    }

    .tab-button {
      flex-shrink: 0;
      background: transparent;
      border: none;
      padding: var(--lg-space-3) var(--lg-space-4);
      font-size: var(--lg-text-md);
      font-family: var(--lg-font-system);
      color: var(--lg-text-secondary);
      cursor: pointer;
      border-radius: var(--lg-radius-md);
      transition: all var(--lg-duration-fast);
    }

    .tab-button:hover {
      background: rgba(255, 255, 255, 0.3);
      color: var(--lg-text-primary);
    }

    .tab-button.active {
      background: var(--lg-accent-blue);
      color: white;
    }

    .tabs-content {
      padding: var(--lg-space-4);
    }

    ::slotted([slot^="panel-"]) {
      display: none;
    }

    ::slotted([slot^="panel-"].active) {
      display: block;
    }
  `;

  @property({ type: String }) active = '0';
  @state() private _tabs: Array<{ label: string; value: string }> = [];

  firstUpdated() {
    this._extractTabs();
  }

  render() {
    return html`
      <div class="tabs-container">
        <div class="tabs-header" role="tablist">
          ${this._tabs.map(
            (tab, index) => html`
              <button
                class="tab-button ${this.active === String(index) ? 'active' : ''}"
                role="tab"
                aria-selected="${this.active === String(index)}"
                @click=${() => this._handleTabClick(String(index))}
              >
                ${tab.label}
              </button>
            `
          )}
        </div>
        <div class="tabs-content" role="tabpanel">
          <slot></slot>
        </div>
      </div>
    `;
  }

  private _extractTabs() {
    const slot = this.shadowRoot?.querySelector('slot');
    const elements = slot?.assignedElements() || [];

    this._tabs = elements.map((el, index) => ({
      label: el.getAttribute('label') || `Tab ${index + 1}`,
      value: String(index),
    }));

    this._updateActivePanel();
  }

  private _handleTabClick(value: string) {
    this.active = value;
    this._updateActivePanel();
    this.dispatchCustomEvent('lg-change', { active: this.active });
  }

  private _updateActivePanel() {
    const slot = this.shadowRoot?.querySelector('slot');
    const elements = slot?.assignedElements() || [];

    elements.forEach((el, index) => {
      if (String(index) === this.active) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-tabs': LgTabs;
  }
}
