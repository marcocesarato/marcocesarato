# Liquid Glass UI

<div align="center">

![Liquid Glass UI](https://img.shields.io/badge/Liquid%20Glass-UI-blue?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/@liquid-glass/ui?style=flat-square)](https://www.npmjs.com/package/@liquid-glass/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

A framework-agnostic design system library inspired by iOS 26's Liquid Glass design language.

[Documentation](https://liquid-glass-ui.dev) · [Storybook](https://storybook.liquid-glass-ui.dev) · [NPM Package](https://www.npmjs.com/package/@liquid-glass/ui)

</div>

---

## ✨ Features

- 🎨 **Liquid Glass Design** - Physically accurate glassmorphism with refraction and depth
- 🧩 **Framework-Agnostic** - Built with Web Components, works with React, Vue, Angular, and vanilla JS
- 📦 **Tree-Shakable** - Import only what you need, optimized bundle sizes
- ♿ **Accessible** - WCAG AA compliant with full keyboard navigation and screen reader support
- 🌗 **Dark Mode** - Built-in light and dark theme support with auto-detection
- 🎯 **TypeScript** - Fully typed API with excellent IDE autocomplete
- 📱 **Responsive** - Mobile-first design with touch-optimized interactions
- ⚡ **Performance** - GPU-accelerated animations and optimized rendering
- 🧪 **Well-Tested** - Comprehensive unit, integration, and visual regression tests
- 📖 **Documented** - Extensive documentation with interactive examples

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @liquid-glass/ui

# yarn
yarn add @liquid-glass/ui

# pnpm
pnpm add @liquid-glass/ui
```

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module">
      import '@liquid-glass/ui';
    </script>
  </head>
  <body>
    <lg-button variant="primary" size="lg">Click Me</lg-button>
    <lg-card>
      <h2>Beautiful Glass Card</h2>
      <p>Content with stunning liquid glass effect</p>
    </lg-card>
  </body>
</html>
```

### React

```tsx
import { Button, Card } from '@liquid-glass/ui/react';

function App() {
  return (
    <>
      <Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      <Card>
        <h2>Beautiful Glass Card</h2>
        <p>Content with stunning liquid glass effect</p>
      </Card>
    </>
  );
}
```

### Vue 3

```vue
<template>
  <lg-button variant="primary" size="lg" @lg-click="handleClick">
    Click Me
  </lg-button>
  <lg-card>
    <h2>Beautiful Glass Card</h2>
    <p>Content with stunning liquid glass effect</p>
  </lg-card>
</template>

<script setup>
import '@liquid-glass/ui';

const handleClick = () => alert('Clicked!');
</script>
```

### Angular

```typescript
// app.module.ts
import { LiquidGlassUIModule } from '@liquid-glass/ui/angular';

@NgModule({
  imports: [LiquidGlassUIModule],
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<lg-button variant="primary" size="lg" (lg-click)="handleClick()">
  Click Me
</lg-button>
<lg-card>
  <h2>Beautiful Glass Card</h2>
  <p>Content with stunning liquid glass effect</p>
</lg-card>
```

## 📦 Components

### Primitives (Atoms)

- `<lg-button>` - Buttons with glass effect
- `<lg-input>` - Text input fields
- `<lg-checkbox>` - Checkbox inputs
- `<lg-radio>` - Radio buttons
- `<lg-switch>` - Toggle switches
- `<lg-slider>` - Range sliders
- `<lg-badge>` - Status badges
- `<lg-avatar>` - User avatars
- `<lg-icon>` - Icon component
- `<lg-spinner>` - Loading spinners
- `<lg-divider>` - Visual separators

### Composite (Molecules)

- `<lg-card>` - Content cards with glass effect
- `<lg-panel>` - Glass panel containers
- `<lg-list-item>` - List items
- `<lg-menu-item>` - Menu/dropdown items
- `<lg-tab>` - Tab components
- `<lg-chip>` - Chip/tag components
- `<lg-alert>` - Alert notifications
- `<lg-search-field>` - Search inputs with icons

### Complex (Organisms)

- `<lg-modal>` - Modal dialogs
- `<lg-drawer>` - Side drawers/sheets
- `<lg-dropdown>` - Dropdown menus
- `<lg-navigation>` - Navigation bars
- `<lg-tabs>` - Tab containers
- `<lg-table>` - Data tables
- `<lg-dialog>` - Dialog boxes
- `<lg-toast>` - Toast notifications

## 🎨 Design Tokens

Import and use design tokens directly:

```typescript
import { tokens } from '@liquid-glass/ui/tokens';

const myColor = tokens.colors.accentBlueGlass;
const mySpacing = tokens.spacing.space4;
const myRadius = tokens.radius.md;
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/marcocesarato/liquid-glass-ui.git
cd liquid-glass-ui

# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Run tests
npm test

# Build the library
npm run build
```

### Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build library for production
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm run storybook` - Start Storybook
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## 📚 Documentation

- [Getting Started Guide](./docs/getting-started.md)
- [Component API Reference](./docs/components/)
- [Design Tokens](./docs/design-tokens.md)
- [Framework Integration](./docs/frameworks/)
- [Accessibility Guide](./docs/accessibility.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🌐 Browser Support

### Full Support (All Features)
- Chrome/Edge 88+
- Safari 15.4+
- Firefox 103+

### Basic Support (Fallback Styles)
- Chrome 76+
- Safari 13+
- Firefox 90+

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Code of Conduct
- Development workflow
- Submitting pull requests
- Reporting issues

## 📄 License

MIT © [Marco Cesarato](https://github.com/marcocesarato)

## 🙏 Acknowledgments

- Inspired by Apple's iOS 26 Liquid Glass design language
- Built with [Lit](https://lit.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Documented with [Storybook](https://storybook.js.org/)

## 📞 Support

- [GitHub Issues](https://github.com/marcocesarato/liquid-glass-ui/issues)
- [Discussions](https://github.com/marcocesarato/liquid-glass-ui/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/liquid-glass-ui)

---

<div align="center">

**[Website](https://liquid-glass-ui.dev)** • **[Documentation](https://liquid-glass-ui.dev/docs)** • **[Storybook](https://storybook.liquid-glass-ui.dev)**

Made with ❤️ by Marco Cesarato

</div>
