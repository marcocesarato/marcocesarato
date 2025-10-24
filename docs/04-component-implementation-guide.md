# Step 3: Component Implementation Guide

## Overview

This guide provides a systematic approach to implementing components in the Liquid Glass UI library. Each component follows consistent patterns for maintainability, testability, and framework compatibility.

## Component Checklist

### Foundation Components (Priority 1) - Week 1-2

- [ ] **Button** (`lg-button`) - Primary interactive element
  - Effort: 8 hours
  - Variants: primary, secondary, tertiary, ghost, outlined
  - Sizes: xs, sm, md, lg, xl
  - States: default, hover, active, disabled, loading
  - Tests: unit, a11y, visual

- [ ] **Input** (`lg-input`) - Text input field
  - Effort: 10 hours
  - Types: text, password, email, number, search
  - States: default, focus, error, disabled
  - Features: prefix/suffix icons, clear button

- [ ] **Card** (`lg-card`) - Content container with glass effect
  - Effort: 6 hours
  - Variants: elevated, flat, outlined
  - Sections: header, body, footer

- [ ] **Badge** (`lg-badge`) - Status indicator
  - Effort: 4 hours
  - Variants: solid, glass, outlined
  - Colors: primary, success, warning, error

- [ ] **Spinner** (`lg-spinner`) - Loading indicator
  - Effort: 4 hours
  - Sizes: xs, sm, md, lg
  - Variants: circular, linear

### Form Components (Priority 2) - Week 3

- [ ] **Checkbox** (`lg-checkbox`) - Boolean input
  - Effort: 6 hours
  - States: unchecked, checked, indeterminate, disabled

- [ ] **Radio** (`lg-radio`) - Single selection input
  - Effort: 6 hours
  - Group management with `lg-radio-group`

- [ ] **Switch** (`lg-switch`) - Toggle control
  - Effort: 5 hours
  - Sizes: sm, md, lg

- [ ] **Slider** (`lg-slider`) - Range input
  - Effort: 8 hours
  - Single and range variants
  - Step controls and value labels

- [ ] **Select** (`lg-select`) - Dropdown selection
  - Effort: 12 hours
  - Single and multi-select
  - Search and filtering
  - Virtual scrolling for large lists

### Display Components (Priority 3) - Week 4

- [ ] **Avatar** (`lg-avatar`) - User representation
  - Effort: 5 hours
  - Variants: image, initials, icon
  - Sizes: xs, sm, md, lg, xl

- [ ] **Icon** (`lg-icon`) - SVG icon display
  - Effort: 6 hours
  - Icon library integration
  - Custom SVG support

- [ ] **Divider** (`lg-divider`) - Visual separator
  - Effort: 3 hours
  - Horizontal and vertical
  - With label option

- [ ] **Tooltip** (`lg-tooltip`) - Contextual help
  - Effort: 8 hours
  - Positioning engine
  - Trigger modes: hover, click, focus

### Container Components (Priority 4) - Week 5-6

- [ ] **Modal** (`lg-modal`) - Dialog overlay
  - Effort: 12 hours
  - Sizes: sm, md, lg, fullscreen
  - Focus trap and keyboard handling
  - Backdrop click handling

- [ ] **Drawer** (`lg-drawer`) - Side panel
  - Effort: 10 hours
  - Positions: left, right, top, bottom
  - Overlay and push modes

- [ ] **Panel** (`lg-panel`) - Glass panel container
  - Effort: 5 hours
  - Collapsible option
  - Header and footer sections

- [ ] **Tabs** (`lg-tabs`) - Tabbed interface
  - Effort: 10 hours
  - Horizontal and vertical
  - Scrollable tab bar
  - Lazy loading

### Navigation Components (Priority 5) - Week 7

- [ ] **Navigation** (`lg-navigation`) - Navigation bar
  - Effort: 12 hours
  - Fixed and sticky positioning
  - Mobile responsive
  - Hamburger menu integration

- [ ] **Sidebar** (`lg-sidebar`) - Side navigation
  - Effort: 10 hours
  - Collapsible sections
  - Active state management

- [ ] **Breadcrumb** (`lg-breadcrumb`) - Navigation trail
  - Effort: 6 hours
  - Separator customization
  - Truncation for long paths

- [ ] **Pagination** (`lg-pagination`) - Page navigation
  - Effort: 8 hours
  - Compact and full modes
  - Jump to page

### Data Display Components (Priority 6) - Week 8-9

- [ ] **Table** (`lg-table`) - Data table
  - Effort: 20 hours
  - Sorting and filtering
  - Row selection
  - Virtual scrolling
  - Responsive mode

- [ ] **List** (`lg-list`) - Vertical list
  - Effort: 8 hours
  - With `lg-list-item`
  - Virtual scrolling
  - Drag and drop ordering

- [ ] **Menu** (`lg-menu`) - Dropdown menu
  - Effort: 10 hours
  - Nested menus
  - Icons and shortcuts
  - Keyboard navigation

### Feedback Components (Priority 7) - Week 10

- [ ] **Alert** (`lg-alert`) - Inline notification
  - Effort: 6 hours
  - Variants: info, success, warning, error
  - Closable option

- [ ] **Toast** (`lg-toast`) - Temporary notification
  - Effort: 10 hours
  - Positioning: top, bottom, corners
  - Queue management
  - Auto-dismiss

- [ ] **Dialog** (`lg-dialog`) - Confirmation dialog
  - Effort: 8 hours
  - Variants: confirm, alert, prompt
  - Customizable actions

- [ ] **Progress** (`lg-progress`) - Progress indicator
  - Effort: 6 hours
  - Linear and circular
  - Determinate and indeterminate

### Advanced Components (Priority 8) - Week 11-12

- [ ] **Dropdown** (`lg-dropdown`) - General purpose dropdown
  - Effort: 12 hours
  - Positioning engine
  - Portal rendering

- [ ] **Popover** (`lg-popover`) - Floating content
  - Effort: 10 hours
  - Arrow positioning
  - Auto-flip on viewport edge

- [ ] **Accordion** (`lg-accordion`) - Collapsible sections
  - Effort: 8 hours
  - Single and multiple expansion
  - Animated transitions

- [ ] **Chip** (`lg-chip`) - Compact element
  - Effort: 5 hours
  - Removable option
  - Avatar integration

### Layout Components (Priority 9) - Week 13

- [ ] **Container** (`lg-container`) - Content wrapper
  - Effort: 4 hours
  - Max-width variants

- [ ] **Grid** (`lg-grid`) - Grid layout
  - Effort: 6 hours
  - Responsive columns
  - Gap control

- [ ] **Stack** (`lg-stack`) - Flexbox layout
  - Effort: 4 hours
  - Horizontal and vertical
  - Alignment options

- [ ] **Spacer** (`lg-spacer`) - Flexible space
  - Effort: 2 hours
  - Fill available space

## Component Implementation Pattern

### File Structure

For each component, create the following files:

```
src/components/[component-name]/
├── lg-[component-name].ts          # Main component logic
├── lg-[component-name].styles.ts   # Component styles
├── lg-[component-name].test.ts     # Unit tests
├── index.ts                         # Public exports
└── README.md                        # Component documentation
```

### Step-by-Step Implementation

#### 1. Create Component Class

```typescript
// src/components/button/lg-button.ts
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';
import { buttonStyles } from './lg-button.styles';

/**
 * A button component with liquid glass effect.
 *
 * @element lg-button
 *
 * @slot - Default slot for button content
 * @slot prefix - Content before button text
 * @slot suffix - Content after button text
 *
 * @fires lg-click - Fired when button is clicked
 * @fires lg-focus - Fired when button receives focus
 * @fires lg-blur - Fired when button loses focus
 *
 * @csspart button - The button element
 * @csspart content - The button content wrapper
 *
 * @cssprop --lg-button-bg - Background color
 * @cssprop --lg-button-color - Text color
 * @cssprop --lg-button-padding - Button padding
 * @cssprop --lg-button-radius - Border radius
 */
@customElement('lg-button')
export class LgButton extends LiquidGlassElement {
  static styles = [buttonStyles];

  // Public properties
  @property({ type: String }) variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outlined' = 'primary';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';
  @property({ type: Boolean }) fullWidth = false;

  // Internal state
  @state() private _isFocused = false;

  render() {
    const classes = {
      'lg-button': true,
      [`lg-button--${this.variant}`]: true,
      [`lg-button--${this.size}`]: true,
      'lg-button--disabled': this.disabled,
      'lg-button--loading': this.loading,
      'lg-button--full-width': this.fullWidth,
      'lg-button--focused': this._isFocused,
    };

    return html`
      <button
        part="button"
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        aria-disabled=${this.disabled || this.loading}
        aria-busy=${this.loading}
      >
        ${this.loading ? html`<lg-spinner size="sm" class="lg-button__spinner"></lg-spinner>` : nothing}
        <span part="content" class="lg-button__content">
          <slot name="prefix"></slot>
          <slot></slot>
          <slot name="suffix"></slot>
        </span>
      </button>
    `;
  }

  private _handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('lg-click', {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleFocus(e: FocusEvent) {
    this._isFocused = true;
    this.dispatchEvent(
      new CustomEvent('lg-focus', {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleBlur(e: FocusEvent) {
    this._isFocused = false;
    this.dispatchEvent(
      new CustomEvent('lg-blur', {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-button': LgButton;
  }
}
```

#### 2. Create Component Styles

```typescript
// src/components/button/lg-button.styles.ts
import { css } from 'lit';

export const buttonStyles = css`
  :host {
    display: inline-block;
    vertical-align: middle;
  }

  :host([hidden]) {
    display: none;
  }

  .lg-button {
    /* Reset */
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 0;
    border: none;
    outline: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    /* Glass effect */
    background: var(--lg-button-bg, rgba(255, 255, 255, 0.7));
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);

    /* Shape */
    border: 1px solid var(--lg-button-border, rgba(255, 255, 255, 0.2));
    border-radius: var(--lg-button-radius, var(--lg-radius-md, 12px));

    /* Typography */
    font-family: var(--lg-font-system);
    font-weight: var(--lg-font-medium, 500);
    color: var(--lg-button-color, rgba(0, 0, 0, 0.9));
    text-align: center;
    white-space: nowrap;

    /* Effects */
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
                0 4px 8px 0 rgba(0, 0, 0, 0.12);

    /* Behavior */
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  }

  /* Sizes */
  .lg-button--xs {
    padding: 6px 12px;
    font-size: 12px;
  }

  .lg-button--sm {
    padding: 8px 16px;
    font-size: 14px;
  }

  .lg-button--md {
    padding: 12px 24px;
    font-size: 16px;
  }

  .lg-button--lg {
    padding: 14px 28px;
    font-size: 18px;
  }

  .lg-button--xl {
    padding: 16px 32px;
    font-size: 20px;
  }

  /* Variants */
  .lg-button--primary {
    --lg-button-bg: rgba(0, 122, 255, 0.8);
    --lg-button-border: rgba(255, 255, 255, 0.25);
    --lg-button-color: white;
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
                0 8px 16px 0 rgba(0, 122, 255, 0.3);
  }

  .lg-button--secondary {
    --lg-button-bg: rgba(175, 82, 222, 0.8);
    --lg-button-border: rgba(255, 255, 255, 0.25);
    --lg-button-color: white;
  }

  .lg-button--tertiary {
    --lg-button-bg: rgba(255, 255, 255, 0.5);
    --lg-button-border: rgba(255, 255, 255, 0.2);
    --lg-button-color: rgba(0, 0, 0, 0.9);
  }

  .lg-button--ghost {
    --lg-button-bg: transparent;
    --lg-button-border: transparent;
    box-shadow: none;
  }

  .lg-button--outlined {
    --lg-button-bg: transparent;
    --lg-button-border: rgba(0, 122, 255, 0.5);
    --lg-button-color: rgba(0, 122, 255, 1);
    backdrop-filter: none;
    box-shadow: none;
  }

  /* States */
  .lg-button:hover:not(.lg-button--disabled):not(.lg-button--loading) {
    transform: translateY(-1px);
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4),
                0 6px 12px 0 rgba(0, 0, 0, 0.15);
  }

  .lg-button:active:not(.lg-button--disabled):not(.lg-button--loading) {
    transform: translateY(0);
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
                0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  .lg-button--focused:focus-visible {
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
                0 4px 8px 0 rgba(0, 0, 0, 0.12),
                0 0 0 3px rgba(0, 122, 255, 0.5);
  }

  .lg-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .lg-button--loading {
    cursor: wait;
    pointer-events: none;
  }

  .lg-button--full-width {
    width: 100%;
  }

  /* Content */
  .lg-button__content {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .lg-button__spinner {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .lg-button--loading .lg-button__content {
    visibility: hidden;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    .lg-button {
      --lg-button-bg: rgba(20, 20, 30, 0.7);
      --lg-button-border: rgba(255, 255, 255, 0.1);
      --lg-button-color: rgba(255, 255, 255, 0.95);
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .lg-button {
      transition: none;
    }
  }
`;
```

#### 3. Create Unit Tests

```typescript
// src/components/button/lg-button.test.ts
import { expect, describe, it, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { LgButton } from './lg-button';
import './index';

describe('lg-button', () => {
  let element: LgButton;

  beforeEach(async () => {
    element = await fixture<LgButton>(html`<lg-button>Click Me</lg-button>`);
  });

  it('should render', () => {
    expect(element).toBeInstanceOf(LgButton);
  });

  it('should have default properties', () => {
    expect(element.variant).toBe('primary');
    expect(element.size).toBe('md');
    expect(element.disabled).toBe(false);
    expect(element.loading).toBe(false);
  });

  it('should render slot content', () => {
    const button = element.shadowRoot?.querySelector('button');
    const slot = button?.querySelector('slot:not([name])');
    expect(slot).toBeTruthy();
  });

  it('should emit lg-click event when clicked', async () => {
    const clickHandler = vi.fn();
    element.addEventListener('lg-click', clickHandler);

    const button = element.shadowRoot?.querySelector('button');
    button?.click();

    expect(clickHandler).toHaveBeenCalledOnce();
  });

  it('should not emit lg-click when disabled', async () => {
    element.disabled = true;
    await element.updateComplete;

    const clickHandler = vi.fn();
    element.addEventListener('lg-click', clickHandler);

    const button = element.shadowRoot?.querySelector('button');
    button?.click();

    expect(clickHandler).not.toHaveBeenCalled();
  });

  it('should apply variant classes', async () => {
    element.variant = 'secondary';
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('lg-button--secondary')).toBe(true);
  });

  it('should apply size classes', async () => {
    element.size = 'lg';
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('lg-button--lg')).toBe(true);
  });

  it('should show spinner when loading', async () => {
    element.loading = true;
    await element.updateComplete;

    const spinner = element.shadowRoot?.querySelector('lg-spinner');
    expect(spinner).toBeTruthy();
  });

  it('should have proper ARIA attributes when disabled', async () => {
    element.disabled = true;
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-disabled')).toBe('true');
  });

  it('should have proper ARIA attributes when loading', async () => {
    element.loading = true;
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-busy')).toBe('true');
  });
});
```

#### 4. Create Exports

```typescript
// src/components/button/index.ts
export { LgButton } from './lg-button';
export type { LgButton as LgButtonElement } from './lg-button';
```

#### 5. Create Storybook Story

```typescript
// stories/button.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/button';

const meta: Meta = {
  title: 'Components/Button',
  component: 'lg-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'outlined'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => html`
    <lg-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?fullWidth=${args.fullWidth}
    >
      Click Me
    </lg-button>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <lg-button variant="primary">Primary</lg-button>
      <lg-button variant="secondary">Secondary</lg-button>
      <lg-button variant="tertiary">Tertiary</lg-button>
      <lg-button variant="ghost">Ghost</lg-button>
      <lg-button variant="outlined">Outlined</lg-button>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <lg-button size="xs">Extra Small</lg-button>
      <lg-button size="sm">Small</lg-button>
      <lg-button size="md">Medium</lg-button>
      <lg-button size="lg">Large</lg-button>
      <lg-button size="xl">Extra Large</lg-button>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <lg-button>Default</lg-button>
      <lg-button disabled>Disabled</lg-button>
      <lg-button loading>Loading</lg-button>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <lg-button>
        <span slot="prefix">←</span>
        Back
      </lg-button>
      <lg-button>
        Next
        <span slot="suffix">→</span>
      </lg-button>
      <lg-button>
        <span slot="prefix">✓</span>
        Save
        <span slot="suffix">⌘S</span>
      </lg-button>
    </div>
  `,
};

export const FullWidth: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <lg-button fullWidth variant="primary">Full Width Button</lg-button>
    </div>
  `,
};
```

## Component Testing Strategy

### Unit Tests
- Component renders correctly
- Props/attributes work as expected
- Events are fired correctly
- State changes are handled
- Edge cases are covered

### Accessibility Tests
- Keyboard navigation works
- ARIA attributes are correct
- Focus management is proper
- Screen reader compatibility

### Visual Regression Tests
- Component looks correct in all states
- Responsive behavior is correct
- Dark mode renders properly
- Browser compatibility

## Framework Integration Examples

### React Usage

```tsx
import { Button } from '@liquid-glass/ui/react';

function App() {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={() => console.log('Clicked!')}
    >
      Click Me
    </Button>
  );
}
```

### Vue Usage

```vue
<template>
  <lg-button
    variant="primary"
    size="lg"
    @lg-click="handleClick"
  >
    Click Me
  </lg-button>
</template>

<script setup>
import '@liquid-glass/ui';

const handleClick = () => console.log('Clicked!');
</script>
```

### Angular Usage

```typescript
@Component({
  template: `
    <lg-button
      variant="primary"
      size="lg"
      (lg-click)="handleClick()"
    >
      Click Me
    </lg-button>
  `
})
export class AppComponent {
  handleClick() {
    console.log('Clicked!');
  }
}
```

## Summary

**Total Estimated Time**: ~13 weeks for full component library

**Immediate Next Steps**:
1. Implement base `LiquidGlassElement` class
2. Implement design tokens
3. Create Button component (first component)
4. Set up Storybook
5. Configure testing
6. Iterate on remaining components

This systematic approach ensures consistency, quality, and maintainability across all components in the Liquid Glass UI library.
