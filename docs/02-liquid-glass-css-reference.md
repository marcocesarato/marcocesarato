# Liquid Glass CSS Implementation Reference

## Core Glass Effect Recipe

### Basic Glass Surface
```css
.lg-glass {
  /* Glass material base */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  /* Edge definition */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;

  /* Subtle inner glow */
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 4px 8px 0 rgba(0, 0, 0, 0.12);
}
```

### Dark Mode Glass
```css
.lg-glass-dark {
  background: rgba(20, 20, 30, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
```

### Adaptive Glass (Switches Based on Background)
```css
.lg-glass-adaptive {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;

  /* Auto-adjust for dark backgrounds */
  @supports (color: color-mix(in srgb, white, black)) {
    background: color-mix(in srgb, white 70%, transparent);
  }
}

/* Dark theme override */
[data-theme="dark"] .lg-glass-adaptive {
  background: rgba(20, 20, 30, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Glass Intensity Variants

### Subtle Glass
```css
.lg-glass-subtle {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

### Medium Glass (Default)
```css
.lg-glass-medium {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Strong Glass
```css
.lg-glass-strong {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

## Colored Glass Surfaces

### Blue Glass (Primary Accent)
```css
.lg-glass-blue {
  background: rgba(0, 122, 255, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 16px 0 rgba(0, 122, 255, 0.3);
}
```

### Purple Glass
```css
.lg-glass-purple {
  background: rgba(175, 82, 222, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 16px 0 rgba(175, 82, 222, 0.3);
}
```

### Green Glass (Success)
```css
.lg-glass-green {
  background: rgba(52, 199, 89, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 16px 0 rgba(52, 199, 89, 0.3);
}
```

### Red Glass (Error/Danger)
```css
.lg-glass-red {
  background: rgba(255, 59, 48, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 16px 0 rgba(255, 59, 48, 0.3);
}
```

## Interactive States

### Hover State
```css
.lg-button:hover {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  transform: translateY(-1px);
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.4),
    0 6px 12px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
}
```

### Active/Pressed State
```css
.lg-button:active {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  transform: translateY(0);
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
    0 2px 4px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.15s cubic-bezier(0.4, 0, 1, 1);
}
```

### Focus State (Keyboard Navigation)
```css
.lg-button:focus-visible {
  outline: none;
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 4px 8px 0 rgba(0, 0, 0, 0.12),
    0 0 0 3px rgba(0, 122, 255, 0.5);
}
```

### Disabled State
```css
.lg-button:disabled {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  color: rgba(0, 0, 0, 0.3);
  cursor: not-allowed;
  box-shadow: none;
}
```

## Component-Specific Implementations

### Glass Button
```css
.lg-button {
  /* Base glass */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  /* Shape */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 24px;

  /* Typography */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 500;
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
```

### Glass Card
```css
.lg-card {
  /* Base glass */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  /* Shape */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;

  /* Effects */
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 16px 0 rgba(0, 0, 0, 0.12);

  /* Behavior */
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}

.lg-card:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.4),
    0 12px 24px 0 rgba(0, 0, 0, 0.15);
}
```

### Glass Modal
```css
.lg-modal {
  /* Modal backdrop */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lg-modal__content {
  /* Modal glass panel */
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
  box-shadow:
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.4),
    0 24px 48px 0 rgba(0, 0, 0, 0.22);
  animation: modal-enter 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes modal-enter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

### Glass Input Field
```css
.lg-input {
  /* Base glass */
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);

  /* Shape */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 16px;

  /* Typography */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);

  /* Effects */
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
}

.lg-input:focus {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-color: rgba(0, 122, 255, 0.5);
  outline: none;
  box-shadow:
    inset 0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 0 0 3px rgba(0, 122, 255, 0.2);
}

.lg-input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
```

### Glass Navigation Bar
```css
.lg-navbar {
  /* Base glass */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  /* Layout */
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 12px 24px;

  /* Effects */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
    0 2px 8px 0 rgba(0, 0, 0, 0.08);
}
```

### Glass Badge
```css
.lg-badge {
  /* Base glass */
  background: rgba(0, 122, 255, 0.8);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);

  /* Shape */
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 9999px;
  padding: 4px 12px;

  /* Typography */
  font-size: 12px;
  font-weight: 600;
  color: white;

  /* Effects */
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
    0 2px 4px 0 rgba(0, 122, 255, 0.3);
}
```

## Advanced Techniques

### Layered Glass (Depth)
```css
.lg-layer-1 {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1;
}

.lg-layer-2 {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 2;
}

.lg-layer-3 {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  z-index: 3;
}
```

### Animated Glass Shimmer
```css
.lg-shimmer {
  position: relative;
  overflow: hidden;
}

.lg-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% {
    left: 100%;
  }
}
```

### Frosted Edge Glow
```css
.lg-edge-glow {
  position: relative;
}

.lg-edge-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
}
```

### Gradient Glass
```css
.lg-gradient-glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## Browser Fallbacks

### Progressive Enhancement
```css
.lg-glass-fallback {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Enhanced version for supporting browsers */
@supports (backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px)) {
  .lg-glass-fallback {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
```

### Firefox Alternative
```css
/* Firefox doesn't support backdrop-filter well on Windows */
@-moz-document url-prefix() {
  .lg-glass {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  }
}
```

## Performance Optimization

### GPU Acceleration
```css
.lg-animated {
  /* Only use will-change when animating */
  will-change: transform, opacity;
  transform: translateZ(0);
}

.lg-animated.is-animating {
  will-change: transform, opacity, backdrop-filter;
}

/* Remove will-change after animation */
.lg-animated:not(.is-animating) {
  will-change: auto;
}
```

### Reduce Blur on Mobile
```css
@media (max-width: 768px) {
  .lg-glass {
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
  }
}

@media (max-width: 480px) {
  .lg-glass {
    backdrop-filter: blur(10px) saturate(150%);
    -webkit-backdrop-filter: blur(10px) saturate(150%);
  }
}
```

## Accessibility

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  .lg-glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: none;
    border: 2px solid rgba(0, 0, 0, 0.8);
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .lg-glass,
  .lg-button,
  .lg-card {
    transition: none;
    animation: none;
  }
}
```

### Dark Mode Support
```css
@media (prefers-color-scheme: dark) {
  .lg-glass {
    background: rgba(20, 20, 30, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.95);
  }
}

/* Manual dark mode toggle */
[data-theme="dark"] .lg-glass {
  background: rgba(20, 20, 30, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.95);
}
```

## Testing Checklist

When implementing glass effects, verify:

- [ ] Sufficient contrast ratio (WCAG AA: 4.5:1 for text)
- [ ] Visible on varied backgrounds
- [ ] Readable in light and dark modes
- [ ] Focus indicators are clearly visible
- [ ] Performance acceptable on mobile devices
- [ ] Graceful degradation in unsupported browsers
- [ ] Respects prefers-reduced-motion
- [ ] Keyboard navigation works properly
- [ ] Screen readers can access content
- [ ] Touch targets are at least 44x44px

---

Use this reference guide when implementing Liquid Glass components in the design system. All examples follow web standards and include proper fallbacks for browser compatibility.
