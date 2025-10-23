# Step 5 & 6: Setup Guide & Integration

## Initial Project Setup

This guide walks you through setting up the Liquid Glass UI library from scratch.

### Prerequisites

Ensure you have the following installed:

```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be v9.0.0 or higher
```

### 1. Install Dependencies

```bash
npm install
```

This will install all dependencies defined in `package.json`, including:
- **Core**: `lit` for web components
- **Build Tools**: Vite, TypeScript, and plugins
- **Testing**: Vitest, Playwright, axe-core
- **Documentation**: Storybook and related addons
- **Code Quality**: ESLint, Prettier, Husky

### 2. Initialize Git Hooks

```bash
npm run prepare
```

This sets up Husky for pre-commit hooks that will:
- Run ESLint on staged files
- Format code with Prettier
- Ensure code quality before commits

### 3. Start Development

You have several options for development:

#### Option A: Storybook Development (Recommended)

```bash
npm run storybook
```

This will:
- Start Storybook on `http://localhost:6006`
- Provide an interactive component playground
- Auto-reload on file changes
- Show component documentation

#### Option B: Vite Development Server

```bash
npm run dev
```

This will:
- Start Vite dev server on `http://localhost:3000`
- Provide fast HMR (Hot Module Replacement)
- Useful for testing integrations

### 4. Run Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage

# Run accessibility tests only
npm run test:a11y
```

### 5. Build the Library

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Generate type declaration files
- Bundle code with Vite/Rollup
- Output to `dist/` directory
- Create both ES and UMD formats

### 6. Lint and Format Code

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix

# Format all files
npm run format

# Check formatting without changes
npm run format:check

# Run type checking
npm run typecheck
```

## Project Structure Walkthrough

After setup, your project should look like this:

```
liquid-glass-ui/
├── .storybook/          # Storybook configuration
│   ├── main.ts          # Main config
│   └── preview.ts       # Preview settings
│
├── docs/                # Documentation
│   ├── 01-design-specifications.md
│   ├── 02-liquid-glass-css-reference.md
│   ├── 03-library-architecture.md
│   ├── 04-component-implementation-guide.md
│   └── 05-setup-guide.md (this file)
│
├── src/                 # Source code (to be created)
│   ├── components/      # Component implementations
│   ├── tokens/          # Design tokens
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   └── index.ts         # Main entry point
│
├── stories/             # Storybook stories (to be created)
│   └── button.stories.ts
│
├── tests/               # Test files
│   └── setup.ts         # Test configuration
│
├── .editorconfig        # Editor configuration
├── .eslintrc.cjs        # ESLint rules
├── .prettierrc          # Prettier config
├── .gitignore           # Git ignore patterns
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite build config
├── vitest.config.ts     # Test config
├── custom-elements.json # Web component manifest
└── README-library.md    # Project README
```

## Development Workflow

### Creating a New Component

1. **Generate Component Structure** (manual for now, script to be added):

```bash
mkdir -p src/components/button
touch src/components/button/lg-button.ts
touch src/components/button/lg-button.styles.ts
touch src/components/button/lg-button.test.ts
touch src/components/button/index.ts
```

2. **Implement Component** (see `04-component-implementation-guide.md`)

3. **Write Tests**:

```typescript
// src/components/button/lg-button.test.ts
import { expect, describe, it } from 'vitest';
import './index';

describe('lg-button', () => {
  it('should render', () => {
    // Test implementation
  });
});
```

4. **Create Storybook Story**:

```typescript
// stories/button.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/components/button';

export default {
  title: 'Components/Button',
  component: 'lg-button',
} as Meta;
```

5. **Develop in Storybook**:

```bash
npm run storybook
```

6. **Run Tests**:

```bash
npm run test:watch
```

7. **Build and Verify**:

```bash
npm run build
```

### Code Quality Checks

Before committing, ensure:

```bash
# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format

# Test
npm test

# Build
npm run build
```

### Committing Changes

Husky will automatically run pre-commit checks. If you want to run them manually:

```bash
npm run lint:fix
npm run format
npm test
```

Then commit:

```bash
git add .
git commit -m "feat: add button component"
```

## Integration with Applications

### Installation in External Projects

Once published to npm:

```bash
npm install @liquid-glass/ui
```

### Usage Examples

#### Vanilla JavaScript/HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module">
      // Import all components
      import '@liquid-glass/ui';

      // Or import specific component
      import '@liquid-glass/ui/components/button';
    </script>
  </head>
  <body>
    <lg-button variant="primary">Click Me</lg-button>
  </body>
</html>
```

#### React Project

```tsx
// Install React wrapper
npm install @liquid-glass/ui

// Use in component
import { Button } from '@liquid-glass/ui/react';

function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

#### Vue 3 Project

```bash
# Install library
npm install @liquid-glass/ui
```

```typescript
// main.ts
import { createApp } from 'vue';
import { LiquidGlassUI } from '@liquid-glass/ui/vue';
import App from './App.vue';

createApp(App)
  .use(LiquidGlassUI)
  .mount('#app');
```

```vue
<!-- Component.vue -->
<template>
  <lg-button variant="primary">Click Me</lg-button>
</template>
```

#### Angular Project

```bash
# Install library
npm install @liquid-glass/ui
```

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LiquidGlassUIModule } from '@liquid-glass/ui/angular';

@NgModule({
  imports: [LiquidGlassUIModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

```html
<!-- component.html -->
<lg-button variant="primary" (lg-click)="handleClick()">
  Click Me
</lg-button>
```

### Tree-Shaking (Importing Individual Components)

To minimize bundle size, import only what you need:

```typescript
// Instead of importing everything
import '@liquid-glass/ui';

// Import specific components
import '@liquid-glass/ui/components/button';
import '@liquid-glass/ui/components/card';
import '@liquid-glass/ui/components/input';
```

### Using Design Tokens

```typescript
import { tokens } from '@liquid-glass/ui/tokens';

const myColor = tokens.colors.accentBlueGlass;
const mySpacing = tokens.spacing.space4;

// Use in CSS
const styles = css`
  color: ${myColor};
  padding: ${mySpacing};
`;
```

### Custom Theming

```typescript
// Import library
import '@liquid-glass/ui';

// Set custom CSS properties
document.documentElement.style.setProperty('--lg-button-bg', 'rgba(255, 0, 0, 0.8)');
document.documentElement.style.setProperty('--lg-button-color', 'white');
```

Or via CSS:

```css
:root {
  --lg-button-bg: rgba(255, 0, 0, 0.8);
  --lg-button-color: white;
  --lg-radius-md: 16px;
}
```

## Publishing to npm

### 1. Build the Library

```bash
npm run build
```

### 2. Test the Build

```bash
# Link locally
npm link

# In another project
npm link @liquid-glass/ui
```

### 3. Publish

```bash
# First time
npm login
npm publish --access public

# Updates
npm version patch  # or minor, major
npm publish
```

### 4. Automated Publishing with GitHub Actions

Create `.github/workflows/release.yml` for automated releases on tag push.

## Troubleshooting

### Common Issues

**Issue: Types not working in TypeScript**

```bash
# Ensure declaration files are generated
npm run build
```

**Issue: Styles not applying**

- Check that backdrop-filter is supported in your browser
- Ensure CSS custom properties are defined
- Verify Shadow DOM is enabled

**Issue: Components not registering**

```typescript
// Make sure to import before using
import '@liquid-glass/ui';
// or
import '@liquid-glass/ui/components/button';
```

**Issue: Tests failing**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Update snapshots if needed
npm test -- -u
```

## Next Steps

1. **Implement Base Classes**:
   - Create `LiquidGlassElement` base class
   - Implement design tokens
   - Set up utility functions

2. **Build First Component**:
   - Implement Button component
   - Write comprehensive tests
   - Create Storybook stories

3. **Iterate**:
   - Add more components following the checklist
   - Gather feedback
   - Improve based on usage

4. **Documentation**:
   - Write detailed component docs
   - Create usage examples
   - Record video tutorials

5. **Community**:
   - Open source the library
   - Create contribution guidelines
   - Build a community

---

## Support & Resources

- **Documentation**: See `docs/` folder
- **Examples**: Check `examples/` folder (to be created)
- **Storybook**: Run `npm run storybook`
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

Happy coding! 🎨✨
