# Step 1: iOS 26 Liquid Glass Design System Specifications

## Overview

Liquid Glass is Apple's unified design language introduced at WWDC 2025 for iOS 26, iPadOS 26, macOS Tahoe, watchOS 26, tvOS 26, and visionOS 26. It represents the next evolution of glassmorphism, featuring physically accurate lensing and refraction that respond to light, motion, and the user's environment in real-time.

## Core Visual Principles

### 1. Hierarchy
**Definition**: Liquid Glass controls float above content as a distinct functional layer, creating depth while reducing visual complexity.

**Implementation Guidelines**:
- Interactive elements should visually separate from content using elevation
- Use z-index layering to establish clear visual hierarchy
- Controls emerge from context only when needed
- Maintain content-first approach: the design enhances rather than competes with content

**Visual Cues**:
- Elevated surfaces use glassmorphic treatment
- Base content layers remain solid or slightly translucent
- Clear distinction between interactive and non-interactive elements

### 2. Harmony
**Definition**: The design balances hardware, content, and controls. Device shapes inform UI element design, while rounded forms follow natural touch patterns.

**Implementation Guidelines**:
- UI elements should echo device shape language
- Rounded corners follow natural finger tap areas
- Smooth transitions between states create fluid interactions
- Balance translucency with legibility

**Visual Balance**:
- Controls don't overpower content
- Spacing creates breathing room
- Natural motion follows physics-based animations

### 3. Consistency
**Definition**: Universal design simplifies cross-platform development, maintaining coherence across different screen sizes and platforms.

**Implementation Guidelines**:
- Reusable component patterns across all platforms
- Consistent spacing, sizing, and interaction patterns
- Platform-specific adaptations maintain core design principles
- Predictable behavior creates intuitive user experiences

## Material Characteristics

### The Liquid Glass Material

**Physical Properties**:
- **Translucency**: Semi-transparent surfaces that allow content behind to show through
- **Refraction**: Light bends through the material creating depth perception
- **Reflection**: Subtle environmental reflections on surface
- **Dynamic Adaptation**: Adjusts to light/dark mode automatically
- **Motion Response**: Reacts to device movement (iOS/iPadOS)

**Material Behavior**:
- Adapts tint, opacity, and contrast based on background
- Ensures legibility through dynamic contrast adjustments
- GPU-accelerated for smooth performance
- Maintains accessibility standards

## Design Tokens

### Color Palette

#### Base Glass Colors
```css
/* Light Mode Glass */
--glass-white: rgba(255, 255, 255, 0.7);
--glass-white-strong: rgba(255, 255, 255, 0.85);
--glass-white-subtle: rgba(255, 255, 255, 0.5);

/* Dark Mode Glass */
--glass-dark: rgba(20, 20, 30, 0.7);
--glass-dark-strong: rgba(20, 20, 30, 0.85);
--glass-dark-subtle: rgba(20, 20, 30, 0.5);

/* Adaptive Glass (switches based on content behind) */
--glass-adaptive: rgba(255, 255, 255, 0.7); /* Light content */
--glass-adaptive-dark: rgba(20, 20, 30, 0.7); /* Dark content */
```

#### Accent Colors (Glass-treated)
```css
/* Primary Accents */
--accent-blue-glass: rgba(0, 122, 255, 0.8);
--accent-purple-glass: rgba(175, 82, 222, 0.8);
--accent-pink-glass: rgba(255, 45, 85, 0.8);
--accent-green-glass: rgba(52, 199, 89, 0.8);
--accent-orange-glass: rgba(255, 149, 0, 0.8);

/* Secondary Accents */
--accent-teal-glass: rgba(90, 200, 250, 0.8);
--accent-indigo-glass: rgba(88, 86, 214, 0.8);
--accent-red-glass: rgba(255, 59, 48, 0.8);
--accent-yellow-glass: rgba(255, 214, 10, 0.8);
```

#### Content Colors
```css
/* Text on Glass */
--text-primary: rgba(0, 0, 0, 0.9);
--text-secondary: rgba(0, 0, 0, 0.6);
--text-tertiary: rgba(0, 0, 0, 0.4);

--text-primary-dark: rgba(255, 255, 255, 0.95);
--text-secondary-dark: rgba(255, 255, 255, 0.7);
--text-tertiary-dark: rgba(255, 255, 255, 0.5);
```

### Blur & Transparency

#### Blur Values
```css
/* Backdrop Blur */
--blur-subtle: blur(10px);
--blur-medium: blur(20px);
--blur-strong: blur(40px);
--blur-extreme: blur(60px);

/* Typical usage: background-filter: var(--blur-medium); */
```

#### Opacity Levels
```css
/* Surface Opacity */
--opacity-glass-subtle: 0.5;
--opacity-glass-medium: 0.7;
--opacity-glass-strong: 0.85;
--opacity-glass-full: 0.95;

/* Content Opacity */
--opacity-inactive: 0.4;
--opacity-disabled: 0.3;
--opacity-hover: 0.8;
--opacity-pressed: 0.6;
```

### Spacing System

#### Base Unit
```css
--space-unit: 4px; /* Base multiplier */

/* Spacing Scale */
--space-1: 4px;   /* 0.25rem */
--space-2: 8px;   /* 0.5rem */
--space-3: 12px;  /* 0.75rem */
--space-4: 16px;  /* 1rem */
--space-5: 20px;  /* 1.25rem */
--space-6: 24px;  /* 1.5rem */
--space-8: 32px;  /* 2rem */
--space-10: 40px; /* 2.5rem */
--space-12: 48px; /* 3rem */
--space-16: 64px; /* 4rem */
--space-20: 80px; /* 5rem */
--space-24: 96px; /* 6rem */
```

#### Semantic Spacing
```css
/* Component Padding */
--padding-xs: var(--space-2);    /* 8px */
--padding-sm: var(--space-3);    /* 12px */
--padding-md: var(--space-4);    /* 16px */
--padding-lg: var(--space-6);    /* 24px */
--padding-xl: var(--space-8);    /* 32px */

/* Component Gaps */
--gap-xs: var(--space-1);   /* 4px */
--gap-sm: var(--space-2);   /* 8px */
--gap-md: var(--space-3);   /* 12px */
--gap-lg: var(--space-4);   /* 16px */
--gap-xl: var(--space-6);   /* 24px */
```

### Typography

#### Font Family
```css
--font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI',
               'Roboto', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono',
             'Courier New', monospace;
```

#### Font Sizes
```css
/* Text Sizes */
--text-xs: 12px;      /* Caption 2 */
--text-sm: 13px;      /* Caption 1 */
--text-base: 15px;    /* Footnote */
--text-md: 16px;      /* Callout */
--text-lg: 17px;      /* Body */
--text-xl: 20px;      /* Headline */
--text-2xl: 22px;     /* Title 3 */
--text-3xl: 28px;     /* Title 2 */
--text-4xl: 34px;     /* Title 1 */
--text-5xl: 48px;     /* Large Title */

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

#### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Border Radius

#### Radius Scale
```css
/* Liquid Glass uses generous rounded corners */
--radius-sm: 8px;      /* Small controls */
--radius-md: 12px;     /* Standard buttons */
--radius-lg: 16px;     /* Cards, panels */
--radius-xl: 20px;     /* Large cards */
--radius-2xl: 24px;    /* Modals, sheets */
--radius-3xl: 32px;    /* Hero sections */
--radius-full: 9999px; /* Pills, circular */
```

### Shadows & Elevation

#### Shadow Layers
```css
/* Elevation Shadows (used with glass surfaces) */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
--shadow-xl: 0 12px 24px 0 rgba(0, 0, 0, 0.18);
--shadow-2xl: 0 24px 48px 0 rgba(0, 0, 0, 0.22);

/* Inner Glow (characteristic of glass edges) */
--glow-inner: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
--glow-inner-dark: inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);
```

#### Border Highlights
```css
/* Subtle borders enhance glass edges */
--border-glass-light: 1px solid rgba(255, 255, 255, 0.2);
--border-glass-dark: 1px solid rgba(255, 255, 255, 0.1);
--border-glass-strong: 1px solid rgba(255, 255, 255, 0.3);
```

### Animation & Motion

#### Duration
```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

#### Easing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy */
--ease-fluid: cubic-bezier(0.23, 1, 0.32, 1); /* Smooth, natural */
```

## Component Hierarchy & Naming Conventions

### Naming Convention: BEM-inspired with Glass prefix

Format: `lg-[component]__[element]--[modifier]`
- `lg-` prefix stands for "Liquid Glass"
- Double underscore for element relationship
- Double dash for modifiers/variants

### Component Hierarchy

#### Foundation Layer (Tokens & Utilities)
```
lg-tokens/          # Design token definitions
lg-utils/           # Utility functions and mixins
lg-theme/           # Theme provider and context
```

#### Primitive Components (Atoms)
```
lg-button           # Button component
lg-input            # Text input
lg-checkbox         # Checkbox input
lg-radio            # Radio button
lg-switch           # Toggle switch
lg-slider           # Range slider
lg-badge            # Status badge
lg-avatar           # User avatar
lg-icon             # Icon component
lg-spinner          # Loading spinner
lg-divider          # Visual separator
lg-label            # Form label
lg-tooltip          # Tooltip overlay
```

#### Composite Components (Molecules)
```
lg-card             # Content card with glass effect
lg-panel            # Glass panel container
lg-list-item        # List item component
lg-menu-item        # Menu/dropdown item
lg-tab              # Tab component
lg-accordion-item   # Accordion section
lg-chip             # Chip/tag component
lg-alert            # Alert/notification
lg-breadcrumb-item  # Breadcrumb step
lg-search-field     # Search input with icon
lg-select           # Dropdown select
```

#### Complex Components (Organisms)
```
lg-modal            # Modal dialog
lg-drawer           # Side drawer/sheet
lg-dropdown         # Dropdown menu
lg-navigation       # Navigation bar
lg-sidebar          # Sidebar navigation
lg-tabs             # Tab container
lg-accordion        # Accordion container
lg-table            # Data table
lg-pagination       # Pagination controls
lg-breadcrumb       # Breadcrumb trail
lg-menu             # Context/dropdown menu
lg-dialog           # Dialog box
lg-toast            # Toast notification
lg-app-bar          # Application bar
lg-toolbar          # Tool toolbar
```

#### Layout Components
```
lg-container        # Content container
lg-grid             # Grid layout
lg-flex             # Flexbox layout
lg-stack            # Vertical/horizontal stack
lg-spacer           # Flexible spacer
lg-section          # Content section
```

### Variant Naming

#### Size Variants
```
--xs                # Extra small
--sm                # Small
--md                # Medium (default)
--lg                # Large
--xl                # Extra large
```

#### Style Variants
```
--primary           # Primary action
--secondary         # Secondary action
--tertiary          # Tertiary action
--ghost             # Ghost/transparent
--outlined          # Outlined style
--filled            # Filled/solid
--glass             # Full glass effect (default for most)
--glass-subtle      # Subtle glass effect
--glass-strong      # Strong glass effect
```

#### State Variants
```
--active            # Active state
--disabled          # Disabled state
--loading           # Loading state
--error             # Error state
--success           # Success state
--warning           # Warning state
```

### Example Usage
```html
<!-- Button with glass effect, large size, primary variant -->
<lg-button class="lg-button--lg lg-button--primary">
  Click Me
</lg-button>

<!-- Card with strong glass effect -->
<lg-card class="lg-card--glass-strong">
  <lg-card__header>Title</lg-card__header>
  <lg-card__body>Content</lg-card__body>
</lg-card>

<!-- Glass panel with custom blur -->
<lg-panel blur="strong" opacity="medium">
  Panel content
</lg-panel>
```

## Best Practices & Guidelines

### DO's ✓

1. **Layering**: Place elements in logical visual layers - headers over glass panels, cards over backgrounds
2. **Blur Usage**: Apply blur effects behind interactive surfaces to enhance contrast
3. **Content Focus**: Use Liquid Glass with minimal distractions; avoid visual noise
4. **Contrast**: Ensure sufficient contrast for text legibility (minimum 4.5:1 for body text)
5. **Varied Backgrounds**: Place glassmorphic elements over varied backgrounds to emphasize depth
6. **Semantic HTML**: Use proper semantic elements for accessibility
7. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
8. **ARIA Labels**: Provide appropriate ARIA labels for screen readers
9. **Motion Sensitivity**: Respect prefers-reduced-motion for animations
10. **Dark Mode**: Test components in both light and dark modes

### DON'Ts ✗

1. **Over-blur**: Don't make backgrounds so blurred that content becomes unrecognizable
2. **Low Contrast**: Avoid text-on-glass combinations with insufficient contrast
3. **Excessive Layering**: Don't stack too many glass layers (max 3-4 levels)
4. **Flat Backgrounds**: Avoid using glassmorphism on solid, flat backgrounds (defeats the purpose)
5. **Performance Issues**: Don't overuse blur effects on low-end devices
6. **Accessibility Neglect**: Never sacrifice accessibility for aesthetics
7. **Inconsistent Blur**: Don't vary blur radius inconsistently across similar components
8. **Overuse**: Don't make everything glass - use strategically for hierarchy
9. **Ignore Context**: Don't use same opacity/blur values regardless of background
10. **Heavy Borders**: Avoid thick, opaque borders that break the glass illusion

### Accessibility Considerations

#### Color Contrast
- Light text on glass: minimum 4.5:1 contrast ratio
- Large text (18pt+): minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 against background

#### Focus Indicators
```css
/* Visible focus ring for keyboard navigation */
--focus-ring: 0 0 0 3px rgba(0, 122, 255, 0.5);
--focus-ring-dark: 0 0 0 3px rgba(90, 200, 250, 0.5);
```

#### Motion & Animation
```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  --duration-fast: 0ms;
  --duration-normal: 0ms;
  --duration-slow: 0ms;
  --duration-slower: 0ms;
}
```

#### Screen Reader Support
- All interactive elements must have accessible names
- Provide text alternatives for icon-only buttons
- Use ARIA live regions for dynamic content
- Ensure proper heading hierarchy

### Performance Guidelines

1. **GPU Acceleration**: Use `will-change: backdrop-filter` sparingly, only for animating elements
2. **Backdrop Filter Limits**: Limit blur radius to 40px maximum for performance
3. **Layer Limits**: Keep glassmorphic layers to 3-4 maximum in viewport
4. **Intersection Observer**: Lazy-load glass effects for off-screen elements
5. **Mobile Optimization**: Reduce blur intensity on mobile devices (50-75% of desktop values)

## Platform-Specific Considerations

### Web (Primary Target)
- Use `backdrop-filter` for blur effects (with fallback for unsupported browsers)
- CSS Custom Properties for theming
- Web Components for framework-agnostic usage

### iOS/iPadOS
- Native SwiftUI `Material` types
- Motion response using device gyroscope
- Dynamic Type support for text scaling

### macOS
- Window chrome with vibrancy effects
- Integrate with system appearance settings
- Respect system accent colors

## Browser Support Requirements

### Modern Browsers (Full Support)
- Chrome/Edge 88+
- Safari 15.4+
- Firefox 103+

### Progressive Enhancement
- Provide solid color fallbacks for unsupported browsers
- Use `@supports (backdrop-filter: blur())` for feature detection
- Graceful degradation maintains functionality without glass effects

## Design Tools & Resources

### Recommended Tools
- **Figma**: For design mockups and prototypes
- **Storybook**: For component documentation
- **Chromatic**: For visual regression testing
- **Accessibility Insights**: For accessibility testing

### Color Picker Tools
- Use RGBA/HSLA with alpha channel
- Test on multiple backgrounds
- Verify contrast ratios with WCAG tools

---

## Next Steps

With these specifications in place, we can now proceed to:
- **Step 2**: Design the library architecture
- **Step 3**: Implement components following these guidelines
- **Step 4**: Set up comprehensive testing
- **Step 5**: Configure Storybook for documentation
- **Step 6**: Create integration guides

This design system will ensure consistency, accessibility, and a premium user experience across all platforms.
