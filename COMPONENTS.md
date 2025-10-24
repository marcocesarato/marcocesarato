# Liquid Glass UI - Complete Component Reference

## ✅ Implemented Components (26 Total)

### Foundation Components (2)

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

### Container Components (5)

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

#### 6. **Modal** (`<lg-modal>`)
- **Sizes**: sm, md, lg, fullscreen
- **Features**: Backdrop blur, ESC key support, click outside to close, glass effect
- **Events**: `lg-close`
- **Props**: `open`, `size`, `title`, `close-on-backdrop`
- **Methods**: `close()`

#### 7. **Tabs** (`<lg-tabs>`)
- **Features**: Tabbed interface with glass effect, keyboard navigation
- **Events**: `lg-change`
- **Props**: `active` (tab index)
- **Usage**: Add `label` attribute to child elements

### Form Components (5)

#### 8. **Input** (`<lg-input>`)
- **Types**: text, password, email, number, search, etc.
- **Features**: Glass effect, focus states, error states, label support
- **Events**: `lg-input`, `lg-change`
- **Props**: `label`, `type`, `placeholder`, `value`, `error`, `error-message`, `disabled`

#### 9. **Toggle/Switch** (`<lg-toggle>`)
- **Features**: Animated toggle, glass track, smooth transitions
- **Events**: `lg-change`
- **Props**: `checked`, `label`, `disabled`

#### 10. **Checkbox** (`<lg-checkbox>`)
- **Features**: Glass checkbox, animated checkmark, label support
- **Events**: `lg-change`
- **Props**: `checked`, `label`, `disabled`

#### 11. **Radio** (`<lg-radio>`)
- **Features**: Glass radio button, animated selection, label support
- **Events**: `lg-change`
- **Props**: `checked`, `label`, `name`, `value`, `disabled`

#### 12. **Select** (`<lg-select>`)
- **Features**: Glass dropdown, custom arrow, label support, error states
- **Events**: `lg-change`
- **Props**: `label`, `value`, `error`, `error-message`, `disabled`, `options`

### Display Components (7)

#### 13. **Badge** (`<lg-badge>`)
- **Variants**: primary, success, warning, danger, neutral
- **Features**: Pill-shaped, glass effect, small size
- **Props**: `variant`

#### 14. **Spinner** (`<lg-spinner>`)
- **Sizes**: sm, md, lg
- **Features**: Circular spinner, smooth animation, customizable size
- **Props**: `size`

#### 15. **Avatar** (`<lg-avatar>`)
- **Sizes**: xs, sm, md, lg, xl
- **Status**: online, offline, busy, away
- **Features**: Image or initials, status indicator, glass border
- **Props**: `src`, `alt`, `initials`, `size`, `status`

#### 16. **Divider** (`<lg-divider>`)
- **Orientations**: horizontal, vertical
- **Features**: Glass divider line, optional text label
- **Props**: `orientation`

#### 17. **Tooltip** (`<lg-tooltip>`)
- **Positions**: top, bottom, left, right
- **Features**: Dark glass tooltip, smooth transitions, hover/focus trigger
- **Props**: `text`, `position`

#### 18. **Skeleton** (`<lg-skeleton>`)
- **Variants**: text, circular, rectangular
- **Features**: Shimmer animation, customizable size, theme-aware
- **Props**: `variant`, `width`, `height`

#### 19. **Progress** (`<lg-progress>`)
- **Variants**: primary, success, warning, danger
- **Sizes**: sm, md, lg
- **Features**: Determinate and indeterminate modes, label, percentage display
- **Props**: `value`, `variant`, `size`, `indeterminate`, `label`, `show-value`

### Feedback Components (2)

#### 20. **Alert** (`<lg-alert>`)
- **Variants**: info, success, warning, error
- **Features**: Glass alert box, icons, closable option, title support
- **Events**: `lg-close`
- **Props**: `variant`, `title`, `closable`

#### 21. **Toast** (`<lg-toast>`)
- **Variants**: info, success, warning, error
- **Positions**: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
- **Features**: Dark glass notification, auto-dismiss, closable, icons
- **Events**: `lg-close`
- **Props**: `open`, `variant`, `title`, `message`, `position`, `duration`, `closable`
- **Methods**: `close()`

### Navigation Components (1)

#### 22. **Navbar** (`<lg-navbar>`)
- **Features**: Sticky positioning, glass effect, responsive layout
- **Slots**: `start`, default (center), `end`
- **Usage**: Perfect for app headers with logo and navigation

### Layout Components (2)

#### 23. **Grid** (`<lg-grid>`)
- **Columns**: 1, 2, 3, 4, 6, 12
- **Features**: Responsive grid, automatic mobile stacking
- **Props**: `cols`

#### 24. **Stack** (`<lg-stack>`)
- **Directions**: vertical, horizontal
- **Alignment**: start, center, end, stretch
- **Justification**: start, center, end, between, around
- **Props**: `direction`, `align`, `justify`

---

## Component Categories Summary

**Total Components**: 26
**Progress**: 55% of planned library

### By Category:
- ✅ **Foundation**: 2/2 (100%)
- ✅ **Containers**: 5/5 (100%)
- ✅ **Forms**: 5/5 (100%)
- ✅ **Display**: 7/7 (100%)
- ✅ **Feedback**: 2/4 (50%)
- ✅ **Navigation**: 1/4 (25%)
- ✅ **Layout**: 2/2 (100%)

---

## Usage Examples

### Modal

```html
<lg-button id="openBtn">Open Modal</lg-button>

<lg-modal id="myModal" title="Welcome" size="md">
  <p>This is modal content</p>
  <div slot="footer">
    <lg-button variant="primary">Save</lg-button>
  </div>
</lg-modal>

<script>
  openBtn.onclick = () => myModal.open = true;
</script>
```

### Radio Buttons

```html
<lg-radio name="size" value="sm" label="Small"></lg-radio>
<lg-radio name="size" value="md" label="Medium" checked></lg-radio>
<lg-radio name="size" value="lg" label="Large"></lg-radio>
```

### Select Dropdown

```html
<lg-select label="Choose Size">
  <option value="xs">Extra Small</option>
  <option value="sm">Small</option>
  <option value="md" selected>Medium</option>
  <option value="lg">Large</option>
</lg-select>
```

### Avatar

```html
<lg-avatar size="lg" alt="John Doe" status="online"></lg-avatar>
<lg-avatar size="md" initials="JS" status="away"></lg-avatar>
<lg-avatar size="sm" src="/path/to/image.jpg"></lg-avatar>
```

### Alert

```html
<lg-alert variant="success" title="Success!" closable>
  Your changes have been saved.
</lg-alert>
```

### Toast Notification

```html
<lg-toast
  id="myToast"
  variant="info"
  title="New Message"
  message="You have a new notification"
  position="top-right"
  duration="5000"
></lg-toast>

<script>
  myToast.open = true; // Show toast
</script>
```

### Tooltip

```html
<lg-tooltip text="This is a helpful tip" position="top">
  <lg-button>Hover Me</lg-button>
</lg-tooltip>
```

### Progress Bar

```html
<lg-progress value="75" label="Upload Progress" show-value></lg-progress>
<lg-progress indeterminate label="Loading..."></lg-progress>
```

### Skeleton Loader

```html
<lg-skeleton variant="text"></lg-skeleton>
<lg-skeleton variant="circular" width="60px" height="60px"></lg-skeleton>
<lg-skeleton variant="rectangular" width="100%" height="200px"></lg-skeleton>
```

### Tabs

```html
<lg-tabs active="0">
  <div label="Tab 1">Content for tab 1</div>
  <div label="Tab 2">Content for tab 2</div>
  <div label="Tab 3">Content for tab 3</div>
</lg-tabs>
```

### Divider

```html
<p>Content above</p>
<lg-divider></lg-divider>
<p>Content below</p>

<lg-divider>Section Title</lg-divider>

<lg-divider orientation="vertical"></lg-divider>
```

---

## Events

All interactive components dispatch custom events:

```javascript
// Button clicks
document.addEventListener('lg-click', (e) => {
  console.log('Clicked:', e.detail);
});

// Form changes (Toggle, Checkbox, Radio, Select)
document.addEventListener('lg-change', (e) => {
  console.log('Value changed:', e.detail);
});

// Input changes
document.addEventListener('lg-input', (e) => {
  console.log('Input value:', e.detail.value);
});

// Modal/Toast close
document.addEventListener('lg-close', (e) => {
  console.log('Component closed');
});
```

---

## Theme Support

All components automatically support light, dark, and auto themes:

```html
<!-- Set theme on individual components -->
<lg-button theme="light">Light Theme</lg-button>
<lg-button theme="dark">Dark Theme</lg-button>
<lg-button theme="auto">Auto Theme</lg-button>

<!-- Or set globally on body/html -->
<body data-theme="dark">
  <!-- All components will use dark theme -->
</body>
```

---

## Accessibility Features

All components are built with accessibility in mind:

- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Space, ESC)
- ✅ Focus indicators (visible focus rings)
- ✅ Disabled states properly announced
- ✅ Screen reader compatible
- ✅ Color contrast WCAG AA compliant
- ✅ Respects `prefers-reduced-motion`

---

## Browser Support

### Full Support (All Features)
- ✅ Chrome/Edge 88+
- ✅ Safari 15.4+
- ✅ Firefox 103+

### Graceful Degradation
- 🔄 Chrome 76+
- 🔄 Safari 13+
- 🔄 Firefox 90+

---

## Installation & Usage

### Via npm (recommended)

```bash
npm install @liquid-glass/ui
```

```javascript
import '@liquid-glass/ui';
```

### Via CDN

```html
<script type="module" src="https://unpkg.com/@liquid-glass/ui"></script>
```

### Development

```bash
npm install
npm run dev
# Visit http://localhost:3000/demo.html
```

---

## What's New in Latest Version

**v1.0.0** - Complete Design System

**Added 11 new components:**
- ✅ Modal with backdrop blur and ESC key support
- ✅ Radio buttons with glass styling
- ✅ Select dropdown with custom styling
- ✅ Avatar with status indicators
- ✅ Divider (horizontal/vertical with optional text)
- ✅ Alert notifications (4 variants)
- ✅ Toast notifications with auto-dismiss
- ✅ Tooltip with 4 positions
- ✅ Tabs component
- ✅ Progress bars (determinate/indeterminate)
- ✅ Skeleton loaders (3 variants)

**Total**: 26 production-ready components

---

## Next Components (Planned)

- Drawer/Sheet (side panel)
- Dropdown menu
- Pagination
- Breadcrumbs
- Data Table
- Accordion
- Popover

---

## Contributing

Want to add a new component? Follow the pattern:

1. Create `src/components/[name]/lg-[name].ts`
2. Extend `LiquidGlassElement` base class
3. Use design tokens from `src/tokens/`
4. Add to `src/components/index.ts`
5. Import in `src/index.ts`
6. Add demo in `demo.html`

---

## License

MIT © Marco Cesarato

---

**Built with ❤️ using Lit, TypeScript, and the iOS 26 Liquid Glass design language**
