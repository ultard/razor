---
name: a11y
description: Interfaces that meet WCAG 2.2 AA.
---

# Accessibility

The interface works for people who use a keyboard, a screen reader, zoom, or high contrast, and for people on a small screen in bright sun. The target is WCAG 2.2 AA unless the project sets another.

## Contrast and color

1. **Text contrast:** at least 4.5:1, or 3:1 for large text (24px, or 18.7px bold). Check actual values, don't eyeball them.
2. **Non-text contrast:** borders of inputs, focus rings, icons that carry meaning, and chart lines need 3:1 against what is next to them.
3. **Color is never the only signal.** An error also has text or an icon. A chart series also has a label or a pattern.
4. **Check both themes** when there is a dark mode.

## Keyboard and focus

5. **Everything clickable is reachable by Tab** and works with Enter or Space. Use `<button>` and `<a href>`, not `<div onClick>`.
6. **Focus is always visible.** Never `outline: none` without a replacement that meets 3:1.
7. **Focus order follows the visual order.** No positive `tabindex`.
8. **Dialogs trap focus,** close on Escape, and return focus to the element that opened them.
9. **A skip link** goes to the main content on pages with long navigation.

## Screen readers

10. **Native elements first.** ARIA only where no element does the job, and then the full pattern: role, state, and keyboard behavior.
11. **Every control has a name:** a visible `<label>`, or `aria-label` for icon-only buttons.
12. **Images:** meaningful ones have `alt` that says what they show in context; decorative ones have `alt=""`.
13. **Headings in order,** one `<h1>`, and landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
14. **Changes are announced.** Toasts, form errors, and async results use a live region or move focus.

## Forms

15. **Labels stay visible.** A placeholder is not a label.
16. **Errors are tied to fields** with `aria-describedby` and say how to fix the value.
17. **Required fields are marked in text,** not only with color or an asterisk without explanation.

## Layout and motion

18. **Zoom to 200% and width 320px** work without horizontal scroll or cut-off text.
19. **Touch targets** are at least 24×24px, and 44×44px for main actions.
20. **Respect `prefers-reduced-motion`.** Nothing flashes more than three times a second. Auto-playing motion longer than five seconds can be paused.

## When you audit

21. **Report each problem** with where it is, which rule it breaks, who it hurts, and the fix. Order by impact, not by rule number.
22. **Test, don't guess:** tab through the page, check contrast with real values, and run an automated checker such as axe if the environment has one. A clean automated pass is not proof: checkers find only part of the problems.

## Before you finish

- Can you reach and use every control with the keyboard alone, and see where focus is?
- Does every control and image have a name?
- Does all text and every meaningful border meet contrast in every theme?
- Does the page work at 320px wide and 200% zoom?
