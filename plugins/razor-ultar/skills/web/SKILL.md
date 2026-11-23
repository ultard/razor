---
name: web
description: The user's personal frontend style.
---

# Web style

These rules add to `razor-code:web` and the other Razor skills and win over them where they differ. The project's own setup wins over both.

## Tailwind

1. **No Tailwind.** Don't add Tailwind to a project, and don't write Tailwind classes in a project that doesn't use it.
2. **The exception is a component library built on Tailwind.** When the project uses or the user picks ready-made UI components that need Tailwind, such as shadcn/ui, Tailwind comes with them. Use it for those components and for code that has to match them.
3. **Style everything else with CSS.** Plain CSS files or CSS Modules, whichever the project already uses. In a new project with no setup yet, use CSS Modules.
4. **A project that already uses Tailwind keeps it.** Follow the existing code there and don't rewrite its styles to CSS unless the user asks.

## Components

5. **Handlers are named by event.** The prop is `onSave`, the function that handles it is `handleSave`. Pass handlers by name, not as multi-line inline arrows.
6. **One attribute per line** when an element's attributes don't fit on one line. The closing bracket goes on its own line.

```tsx
<OrderForm
  order={order}
  isSaving={isSaving}
  onSave={handleSave}
  onCancel={handleCancel}
/>
```

## CSS

7. **Declarations in groups,** in this order: position, box and layout, typography, visual (color, background, border, shadow), motion. In a long rule, put a blank line between groups.
8. **Order in a file:** the root class first, then the parts in the order they appear in the markup, then variants and states.

```css
.card {
  position: relative;

  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);

  font-size: var(--text-sm);

  background: var(--surface);
  border-radius: var(--radius-md);

  transition: box-shadow var(--duration-fast);
}

.title { font-weight: 600; }

.card[data-selected="true"] { box-shadow: var(--shadow-focus); }
```
