---
name: web
description: Structure of web frontend code.
---

# Web

These rules add to `razor-code:quality` for frontend work. They are about how the code is organized, not about how the page looks.

## Markup and components

For HTML, JSX, Vue, and Svelte templates.

1. **Logic before markup.** Compute flags, labels, class lists, and filtered lists in named variables above the markup. A template holds no chains of `&&`, no nested ternaries, and no `.filter().map()` with conditions inside.
2. **Whole states return early.** Loading, error, and empty states return their own markup before the main one. Don't branch on them deep inside the template.
3. **Not too big.** A component does one job. One that renders a page section, fetches data, and manages a form is three components. Over about 200 lines, or with several pieces of state that don't affect each other, it splits along those jobs.
4. **Not too small.** A new component needs a reason: it is reused, it has its own state, or it is a part a reader looks for by name, such as a table row or a filter panel. Markup used once and under about 30 lines stays inline. No wrappers that only pass props through, and no chain where one prop travels through three tiny components to reach the one that uses it.
5. **Stable keys.** A list item's `key` is the record's id, never the index, unless the list never changes order.
6. **Elements by meaning.** `<button>` for actions, `<a href>` for navigation, `<nav>`, `<main>`, `<ul>`, and headings in order. A `<div>` is for layout only. Every form field has a `<label>`, and every image that carries meaning has `alt` text.

## CSS

7. **Class names by role.** `.title`, `.actions`, `.row`, not by look: `.red`, `.big`, `.mt16`. A variant or state is a modifier class or an attribute: `.button[data-variant="danger"]`, `[aria-expanded="true"]`.
8. **Flat selectors.** One class per selector, plus a state or a pseudo-class. No ids, no tag chains like `.card div span`, no `!important`. Nest one level at most.
9. **Values from tokens.** Colors, spacing, radius, font sizes, and durations come from the project's variables. A raw value appears only where no token fits, and gets a one-line comment if it isn't obvious.
10. **Media and container queries sit next to the rule they change,** not collected at the end of the file.
11. **Styles live with their component.** Global CSS holds only tokens, the reset, fonts, and base typography.

## Before you finish

- Is the logic out of the markup?
- Does every list have a stable key?
- Is every clickable thing a `<button>` or a link, and does every field have a label?
- Any raw color or size where the project has a token?
