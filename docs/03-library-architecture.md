# Step 2: Liquid Glass Design System - Library Architecture

## Overview

This document outlines the complete architecture for the Liquid Glass Design System library. The library is built as a framework-agnostic web component library using modern tooling and best practices.

## Project Structure

```
liquid-glass-ui/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Continuous integration
│       ├── release.yml               # Automated releases
│       └── visual-regression.yml     # Visual testing
│
├── .storybook/
│   ├── main.ts                       # Storybook configuration
│   ├── preview.ts                    # Global decorators and parameters
│   ├── manager.ts                    # Storybook manager customization
│   └── theme.ts                      # Custom Storybook theme
│
├── docs/
│   ├── getting-started.md            # Quick start guide
│   ├── design-tokens.md              # Design token documentation
│   ├── components/                   # Component documentation
│   │   ├── button.md
│   │   ├── card.md
│   │   └── ...
│   ├── frameworks/                   # Framework integration guides
│   │   ├── react.md
│   │   ├── vue.md
│   │   └── angular.md
│   └── accessibility.md              # Accessibility guidelines
│
├── src/
│   ├── components/                   # Component source files
│   │   ├── button/
│   │   │   ├── lg-button.ts         # Component logic
│   │   │   ├── lg-button.styles.ts  # Component styles
│   │   │   ├── lg-button.test.ts    # Unit tests
│   │   │   └── index.ts             # Public exports
│   │   │
│   │   ├── card/
│   │   │   ├── lg-card.ts
│   │   │   ├── lg-card.styles.ts
│   │   │   ├── lg-card.test.ts
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts                 # All component exports
│   │
│   ├── tokens/                       # Design tokens
│   │   ├── colors.ts                # Color palette
│   │   ├── spacing.ts               # Spacing scale
│   │   ├── typography.ts            # Typography tokens
│   │   ├── shadows.ts               # Shadow definitions
│   │   ├── radius.ts                # Border radius
│   │   ├── blur.ts                  # Blur values
│   │   └── index.ts                 # Token exports
│   │
│   ├── styles/                       # Global styles and utilities
│   │   ├── globals.css              # CSS reset and base styles
│   │   ├── glass-effects.css        # Reusable glass mixins
│   │   ├── animations.css           # Animation definitions
│   │   └── utilities.css            # Utility classes
│   │
│   ├── utils/                        # Utility functions
│   │   ├── glass-calculator.ts      # Dynamic glass effect calculations
│   │   ├── color-utils.ts           # Color manipulation
│   │   ├── a11y-utils.ts            # Accessibility helpers
│   │   └── platform-detection.ts    # Browser/device detection
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── components.d.ts          # Component prop types
│   │   ├── tokens.d.ts              # Token types
│   │   └── global.d.ts              # Global type augmentation
│   │
│   ├── theme/                        # Theme provider
│   │   ├── theme-provider.ts        # Theme context
│   │   ├── theme-controller.ts      # Theme switching logic
│   │   └── default-theme.ts         # Default theme configuration
│   │
│   ├── framework-wrappers/           # Framework-specific wrappers
│   │   ├── react/
│   │   │   ├── index.ts             # React wrapper entry
│   │   │   └── components.tsx       # React component wrappers
│   │   │
│   │   ├── vue/
│   │   │   ├── index.ts             # Vue wrapper entry
│   │   │   └── components.ts        # Vue component wrappers
│   │   │
│   │   └── angular/
│   │       ├── index.ts             # Angular wrapper entry
│   │       └── module.ts            # Angular module definition
│   │
│   ├── index.ts                      # Main library entry point
│   └── register.ts                   # Auto-register all components
│
├── stories/                          # Storybook stories
│   ├── button.stories.ts
│   ├── card.stories.ts
│   ├── examples/                     # Example compositions
│   │   ├── dashboard.stories.ts
│   │   ├── forms.stories.ts
│   │   └── navigation.stories.ts
│   └── design-tokens.stories.ts
│
├── tests/
│   ├── unit/                         # Additional unit tests
│   ├── integration/                  # Integration tests
│   ├── visual/                       # Visual regression tests
│   │   ├── __snapshots__/
│   │   └── visual.test.ts
│   ├── a11y/                         # Accessibility tests
│   │   └── a11y.test.ts
│   └── setup.ts                      # Test environment setup
│
├── dist/                             # Build output (gitignored)
│   ├── liquid-glass-ui.js           # UMD bundle
│   ├── liquid-glass-ui.es.js        # ES module bundle
│   ├── liquid-glass-ui.d.ts         # TypeScript declarations
│   ├── styles/                       # Compiled CSS
│   └── custom-elements.json          # Web component manifest
│
├── examples/                         # Example applications
│   ├── react-example/
│   ├── vue-example/
│   └── vanilla-example/
│
├── .editorconfig                     # Editor configuration
├── .eslintrc.cjs                     # ESLint configuration
├── .prettierrc                       # Prettier configuration
├── .gitignore
├── package.json
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite build configuration
├── vitest.config.ts                  # Vitest test configuration
├── web-test-runner.config.mjs        # Web component testing
├── LICENSE
└── README.md
```

## Technology Stack

### Core Technologies

**Build Tool**: Vite 5+
- Fast HMR during development
- Optimized production builds
- Native ES modules support
- Excellent TypeScript integration

**Language**: TypeScript 5+
- Strong type safety
- Better IDE support
- Self-documenting code
- Easier refactoring

**Component Model**: Web Components (Custom Elements v1)
- Framework-agnostic
- Native browser support
- Shadow DOM for style encapsulation
- Lifecycle callbacks

**Styling**: Lit CSS (Tagged Template Literals)
- Scoped styles with Shadow DOM
- TypeScript integration
- No build step required for styles
- Dynamic style updates

### Development Dependencies

**Testing**:
- Vitest - Fast unit testing
- @web/test-runner - Web component testing
- @storybook/test-runner - Visual regression testing
- axe-core - Accessibility testing
- Playwright - E2E testing

**Documentation**:
- Storybook 8+ - Component documentation
- Custom Elements Manifest - Web component metadata
- TypeDoc - API documentation generation

**Code Quality**:
- ESLint - Linting
- Prettier - Code formatting
- Husky - Git hooks
- lint-staged - Pre-commit checks
- Commitlint - Commit message linting

**CI/CD**:
- GitHub Actions - Automated testing and deployment
- Semantic Release - Automated versioning
- Changesets - Version management

## Build Configuration

### Vite Configuration Strategy

**Multiple Entry Points**:
1. **Main Bundle** (`src/index.ts`) - All components
2. **Individual Components** - Tree-shakable imports
3. **React Wrapper** (`src/framework-wrappers/react/index.ts`)
4. **Vue Wrapper** (`src/framework-wrappers/vue/index.ts`)
5. **Angular Wrapper** (`src/framework-wrappers/angular/index.ts`)

**Output Formats**:
- ES Modules (ESM) - Modern bundlers
- UMD - Legacy script tags
- TypeScript Declarations - Type safety

**Optimization**:
- Code splitting by component
- CSS extraction and minification
- Tree-shaking support
- Source maps for debugging

### Package Exports Strategy

```json
{
  "name": "@liquid-glass/ui",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/liquid-glass-ui.umd.cjs",
  "module": "./dist/liquid-glass-ui.es.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/liquid-glass-ui.es.js",
      "require": "./dist/liquid-glass-ui.umd.cjs"
    },
    "./react": {
      "types": "./dist/react/index.d.ts",
      "import": "./dist/react/index.js"
    },
    "./vue": {
      "types": "./dist/vue/index.d.ts",
      "import": "./dist/vue/index.js"
    },
    "./angular": {
      "types": "./dist/angular/index.d.ts",
      "import": "./dist/angular/index.js"
    },
    "./components/*": {
      "types": "./dist/components/*/index.d.ts",
      "import": "./dist/components/*/index.js"
    },
    "./tokens": {
      "types": "./dist/tokens/index.d.ts",
      "import": "./dist/tokens/index.js"
    },
    "./styles/*": "./dist/styles/*",
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

## Web Components Implementation

### Base Component Architecture

All components will extend a base class that provides common functionality:

```typescript
// src/base/LiquidGlassElement.ts
import { LitElement } from 'lit';

export class LiquidGlassElement extends LitElement {
  // Common properties
  protected theme: 'light' | 'dark' | 'auto' = 'auto';
  protected disabled: boolean = false;

  // Accessibility helpers
  protected setupA11y(): void {}

  // Theme handling
  protected detectSystemTheme(): 'light' | 'dark' {}

  // Glass effect calculation
  protected calculateGlassEffect(intensity: number): object {}

  // Lifecycle
  connectedCallback() {
    super.connectedCallback();
    this.setupA11y();
  }
}
```

### Component Pattern

```typescript
// src/components/button/lg-button.ts
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LiquidGlassElement } from '../../base/LiquidGlassElement';
import { buttonStyles } from './lg-button.styles';

@customElement('lg-button')
export class LgButton extends LiquidGlassElement {
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;

  static styles = [buttonStyles];

  render() {
    return html`
      <button
        class="lg-button lg-button--${this.variant} lg-button--${this.size}"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.loading ? html`<lg-spinner size="sm"></lg-spinner>` : ''}
        <slot></slot>
      </button>
    `;
  }

  private handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent('lg-click', { detail: e }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lg-button': LgButton;
  }
}
```

### Styling with Lit

```typescript
// src/components/button/lg-button.styles.ts
import { css } from 'lit';
import { tokens } from '../../tokens';

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  .lg-button {
    /* Glass effect */
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);

    /* Shape */
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--lg-radius-md, 12px);
    padding: var(--lg-padding-md, 12px 24px);

    /* Typography */
    font-family: var(--lg-font-system);
    font-size: var(--lg-text-md, 16px);
    font-weight: var(--lg-font-medium, 500);
    color: rgba(0, 0, 0, 0.9);

    /* Effects */
    box-shadow:
      inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
      0 4px 8px 0 rgba(0, 0, 0, 0.12);

    /* Behavior */
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
  }

  .lg-button:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
  }

  .lg-button:active:not(:disabled) {
    transform: translateY(0);
  }

  .lg-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lg-button--primary {
    background: rgba(0, 122, 255, 0.8);
    color: white;
  }

  .lg-button--sm {
    padding: 8px 16px;
    font-size: 14px;
  }

  .lg-button--lg {
    padding: 16px 32px;
    font-size: 18px;
  }
`;
```

## Framework Integration Strategy

### React Integration

```typescript
// src/framework-wrappers/react/index.tsx
import React from 'react';
import { createComponent } from '@lit/react';
import { LgButton } from '../../components/button';

export const Button = createComponent({
  tagName: 'lg-button',
  elementClass: LgButton,
  react: React,
  events: {
    onClick: 'lg-click'
  }
});

// Usage:
// import { Button } from '@liquid-glass/ui/react';
// <Button variant="primary" onClick={handleClick}>Click Me</Button>
```

### Vue Integration

```typescript
// src/framework-wrappers/vue/index.ts
import { Plugin } from 'vue';

export const LiquidGlassUI: Plugin = {
  install(app) {
    // Vue automatically handles custom elements
    app.config.compilerOptions.isCustomElement = (tag) =>
      tag.startsWith('lg-');
  }
};

// Usage:
// import { LiquidGlassUI } from '@liquid-glass/ui/vue';
// app.use(LiquidGlassUI);
// <lg-button variant="primary" @lg-click="handleClick">Click Me</lg-button>
```

### Angular Integration

```typescript
// src/framework-wrappers/angular/module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LiquidGlassUIModule {}

// Usage:
// import { LiquidGlassUIModule } from '@liquid-glass/ui/angular';
// imports: [LiquidGlassUIModule]
// <lg-button variant="primary" (lg-click)="handleClick()">Click Me</lg-button>
```

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start Storybook for component development
npm run storybook

# Run tests in watch mode
npm run test:watch

# Build the library
npm run build

# Run all tests
npm run test

# Lint and format
npm run lint
npm run format
```

### Component Development Workflow

1. **Create Component Structure**
   ```bash
   npm run generate:component <component-name>
   ```
   This generates:
   - Component file
   - Styles file
   - Test file
   - Story file
   - Index export

2. **Develop in Storybook**
   - Write component logic
   - Create stories for variants
   - Test interactions visually

3. **Write Tests**
   - Unit tests for logic
   - Accessibility tests
   - Visual regression tests

4. **Document**
   - JSDoc comments
   - Storybook documentation
   - Usage examples

5. **Review & Merge**
   - Run linting and tests
   - Visual review in Storybook
   - Code review

### Release Process

Using Semantic Release for automated versioning:

1. **Commit with Conventional Commits**
   ```
   feat: add new glass modal component
   fix: correct button focus state
   docs: update installation guide
   ```

2. **Automated Release**
   - CI runs all tests
   - Semantic Release determines version
   - Changelog generated
   - npm package published
   - Git tag created

## Performance Considerations

### Bundle Size Optimization

1. **Tree-shaking**: Each component is separately importable
2. **Code splitting**: Dynamic imports for large components
3. **CSS optimization**: Critical CSS inlined, rest lazy-loaded
4. **Minification**: Terser for JS, cssnano for CSS

### Runtime Performance

1. **Virtual DOM**: Lit's efficient rendering
2. **GPU Acceleration**: Transform and opacity for animations
3. **Blur Optimization**: Reduced blur on mobile
4. **Lazy Loading**: Intersection Observer for off-screen components
5. **Memoization**: Cached glass effect calculations

### Target Bundle Sizes

- **Individual Component**: < 5KB (gzipped)
- **Full Library**: < 50KB (gzipped)
- **With All Dependencies**: < 100KB (gzipped)

## Accessibility Strategy

### Requirements

1. **Keyboard Navigation**: All interactive elements
2. **Screen Reader Support**: Proper ARIA labels
3. **Focus Management**: Visible focus indicators
4. **Color Contrast**: WCAG AA minimum
5. **Motion Control**: Respect prefers-reduced-motion

### Testing

- Automated: axe-core in unit tests
- Manual: Screen reader testing
- CI: Accessibility checks on every PR

## Browser Support

### Full Support (All Features)
- Chrome/Edge 88+
- Safari 15.4+
- Firefox 103+

### Basic Support (Fallback Styles)
- IE 11 (with polyfills)
- Chrome 76+
- Safari 13+
- Firefox 90+

### Polyfills
- Custom Elements polyfill for older browsers
- backdrop-filter fallback for IE/Edge legacy

## Security Considerations

1. **XSS Prevention**: Sanitize all user inputs
2. **CSP Compliance**: No inline scripts/styles
3. **Dependency Auditing**: Regular npm audit
4. **Subresource Integrity**: For CDN distribution

## Documentation Strategy

### Component Documentation

Each component includes:
1. **Overview**: Purpose and use cases
2. **Props/Attributes**: Full API reference
3. **Events**: Custom event documentation
4. **Slots**: Content projection options
5. **CSS Custom Properties**: Theming options
6. **Examples**: Common usage patterns
7. **Accessibility**: A11y considerations
8. **Browser Support**: Compatibility notes

### Generated Documentation

- **TypeDoc**: API documentation from TypeScript
- **Custom Elements Manifest**: Standard metadata format
- **Storybook**: Interactive component playground

---

## Next Steps

With this architecture in place, we can now:
- Set up the actual project structure
- Configure build tools
- Implement the first component (Button)
- Set up testing infrastructure
- Configure Storybook

This architecture ensures scalability, maintainability, and excellent developer experience.
