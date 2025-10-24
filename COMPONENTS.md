# Liquid Glass UI - Components Reference

## ✅ Implemented Components (15 Total)

### Foundation Components

#### 1. **Button** (`<lg-button>`)
- **Variants**: default, primary, secondary, success, danger, ghost, outline
- **Sizes**: xs, sm, md, lg, xl
- **Features**: Full glass effect, hover states, disabled state, full-width option
- **Events**: `lg-click`
- **Props**: `variant`, `size`, `type`, `disabled`, `full-width`

#### 2. **Heading** (`<lg-heading>`)
- **Levels**: h1-h6
- **Features**: Semantic HTML, responsive typography
- **Props**: `level` (1-6)

### Container Components

#### 3. **Container** (`<lg-container>`)
- **Sizes**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px), full
- **Features**: Responsive max-width, centered layout, padding
- **Props**: `size`

#### 4. **Glass Container** (`<lg-glass-container>`)
- **Intensities**: subtle, medium, strong
- **Features**: Full liquid glass effect, backdrop blur, adaptive to theme
- **Props**: `intensity`

#### 5. **Card** (`<lg-card>`)
- **Features**: Header/body/footer slots, glass effect, hover animation
- **Slots**: `header`, default (body), `footer`
- **Props**: `hoverable`

### Form Components

#### 6. **Input** (`<lg-input>`)
- **Types**: text, password, email, number, search, etc.
- **Features**: Glass effect, focus states, error states, label support
- **Events**: `lg-input`, `lg-change`
- **Props**: `label`, `type`, `placeholder`, `value`, `error`, `error-message`, `disabled`

#### 7. **Toggle/Switch** (`<lg-toggle>`)
- **Features**: Animated toggle, glass track, smooth transitions
- **Events**: `lg-change`
- **Props**: `checked`, `label`, `disabled`

#### 8. **Checkbox** (`<lg-checkbox>`)
- **Features**: Glass checkbox, animated checkmark, label support
- **Events**: `lg-change`
- **Props**: `checked`, `label`, `disabled`

### Display Components

#### 9. **Badge** (`<lg-badge>`)
- **Variants**: primary, success, warning, danger, neutral
- **Features**: Pill-shaped, glass effect, small size
- **Props**: `variant`

#### 10. **Spinner** (`<lg-spinner>`)
- **Sizes**: sm, md, lg
- **Features**: Circular spinner, smooth animation, customizable size
- **Props**: `size`

### Navigation Components

#### 11. **Navbar** (`<lg-navbar>`)
- **Features**: Sticky positioning, glass effect, responsive layout
- **Slots**: `start`, default (center), `end`
- **Usage**: Perfect for app headers with logo and navigation

### Layout Components

#### 12. **Grid** (`<lg-grid>`)
- **Columns**: 1, 2, 3, 4, 6, 12
- **Features**: Responsive grid, automatic mobile stacking
- **Props**: `cols`

#### 13. **Stack** (`<lg-stack>`)
- **Directions**: vertical, horizontal
- **Alignment**: start, center, end, stretch
- **Justification**: start, center, end, between, around
- **Props**: `direction`, `align`, `justify`

---

## Usage Examples

### Basic Button

```html
<lg-button variant="primary" size="lg">Click Me</lg-button>
```

### Form with Glass Container

```html
<lg-glass-container intensity="medium">
  <lg-input label="Email" type="email" placeholder="Enter your email"></lg-input>
  <lg-input label="Password" type="password" placeholder="Enter password"></lg-input>
  <lg-button variant="primary" full-width>Login</lg-button>
</lg-glass-container>
```

### Card with Header and Footer

```html
<lg-card hoverable>
  <div slot="header">
    <lg-heading level="4">Card Title</lg-heading>
  </div>
  <p>Card content goes here</p>
  <div slot="footer">
    <lg-button size="sm" variant="primary">Action</lg-button>
  </div>
</lg-card>
```

### Navbar

```html
<lg-navbar>
  <div slot="start">
    <lg-heading level="3">My App</lg-heading>
  </div>
  <div slot="end">
    <lg-button variant="primary" size="sm">Login</lg-button>
  </div>
</lg-navbar>
```

### Responsive Grid

```html
<lg-grid cols="3">
  <lg-card>Card 1</lg-card>
  <lg-card>Card 2</lg-card>
  <lg-card>Card 3</lg-card>
</lg-grid>
```

### Form Controls

```html
<lg-toggle label="Enable notifications" checked></lg-toggle>
<lg-checkbox label="I agree to terms"></lg-checkbox>
```

---

## Design Tokens Available

All components use the design token system:

### Colors
- Glass colors (white, dark, subtle, strong)
- Accent colors (blue, purple, green, red, orange, yellow)
- Text colors (primary, secondary, tertiary)

### Spacing
- Base unit: 4px
- Scale: space-1 through space-24
- Semantic: padding (xs-xl), gap (xs-xl)

### Typography
- Font families (system, mono)
- Font sizes (xs through 5xl)
- Font weights (light through bold)

### Effects
- Border radius (sm through 3xl, full)
- Blur (subtle through extreme)
- Shadows (xs through 2xl, glass effects)
- Animations (duration, easing)

---

## Theme Support

All components automatically support light and dark themes:

```html
<!-- Light theme (default) -->
<lg-button theme="light">Button</lg-button>

<!-- Dark theme -->
<lg-button theme="dark">Button</lg-button>

<!-- Auto (follows system) -->
<lg-button theme="auto">Button</lg-button>
```

---

## Events

All interactive components dispatch custom events:

```javascript
// Button clicks
document.addEventListener('lg-click', (e) => {
  console.log('Button clicked:', e.detail);
});

// Toggle/Checkbox changes
document.addEventListener('lg-change', (e) => {
  console.log('Value changed:', e.detail);
});

// Input changes
document.addEventListener('lg-input', (e) => {
  console.log('Input value:', e.detail.value);
});
```

---

## Accessibility

All components are built with accessibility in mind:

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Disabled states
- ✅ Screen reader support

---

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Safari 15.4+
- ✅ Firefox 103+
- 🔄 Graceful degradation for older browsers

---

## Getting Started

### 1. View the Demo

Open `demo.html` in your browser (after running `npm run dev`):

```bash
npm install
npm run dev
```

Then visit: `http://localhost:3000/demo.html`

### 2. Import in Your Project

```javascript
// Import all components
import '@liquid-glass/ui';

// Or import specific components
import '@liquid-glass/ui/components/button';
import '@liquid-glass/ui/components/card';
```

### 3. Use in HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module">
    import '@liquid-glass/ui';
  </script>
</head>
<body>
  <lg-button variant="primary">Hello World</lg-button>
</body>
</html>
```

---

## Next Steps

### Additional Components to Build

Based on the roadmap in `docs/04-component-implementation-guide.md`, these components are planned:

- **Forms**: Radio, Slider, Select
- **Display**: Avatar, Icon, Divider, Tooltip
- **Containers**: Modal, Drawer, Panel, Tabs
- **Navigation**: Sidebar, Breadcrumb, Pagination
- **Data Display**: Table, List, Menu
- **Feedback**: Alert, Toast, Dialog, Progress
- **Advanced**: Dropdown, Popover, Accordion, Chip

### Contributing

To add a new component:

1. Create component directory: `src/components/[name]/`
2. Create component file: `lg-[name].ts`
3. Export in `src/components/index.ts`
4. Import in `src/index.ts`
5. Add to demo page
6. Create Storybook story
7. Write tests

---

## Component Status Summary

**Total Implemented**: 15 components
**Total Planned**: 47 components
**Progress**: 32% complete

### Categories
- ✅ **Foundation**: 2/2 (100%)
- ✅ **Containers**: 3/3 (100%)
- ✅ **Forms**: 3/8 (38%)
- ✅ **Display**: 2/6 (33%)
- ✅ **Navigation**: 1/4 (25%)
- ✅ **Layout**: 3/3 (100%)
- ⏳ **Data Display**: 0/3 (0%)
- ⏳ **Feedback**: 0/4 (0%)
- ⏳ **Advanced**: 0/4 (0%)

---

## License

MIT © Marco Cesarato
