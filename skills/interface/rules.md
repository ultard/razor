# Interface rules

The project's tokens, components and density come first. The numbers here are for where the project has none.

## Layout

- Group with space first, a background second and a line last. The gap between groups is at least twice the gap inside one.
- Pick a few alignment edges and put everything on them.
- One primary action per view, and only it gets the filled accent color. More than three secondary actions go into a menu.
- The most important content sits at the top and the leading edge. Visual order matches DOM order.
- A control looks like a control: a background, a border or an underline.
- Hidden content has a visible cue. Let the next item show 16 to 32px past the scroll edge or add a disclosure control. Truncated text has a way to the full text.
- Put breakpoints where the content stops fitting, not at device widths. Use container queries for a reusable component.
- A box with text takes `min-height` and `max-width`, never a fixed size. Labels grow in translation.
- Use `minmax(0, 1fr)` on a grid track and `min-width: 0` on a flex child that holds long text. Use `100%` instead of `100vw` and `100dvh` instead of `100vh`.
- Use logical properties such as `margin-inline-start` when the interface can be mirrored for right-to-left languages.
- With a sticky header, set `scroll-padding-top` to its height.

## Type

- At most three font families and a small set of sizes. Each size has its own line height and weight.
- Body text is 16px, interface text 14px, captions 13px, nothing below 12px. Set sizes in `rem`.
- Line height has no unit: 1.1 for display text, 1.2 to 1.3 for headings, 1.5 to 1.6 for body. Text that wraps to three lines or more gets at least 1.4.
- Letter spacing is in `em`: -0.01 to -0.02 for headings from 24px, 0.05 for small uppercase labels, 0 for body.
- A line of long text holds 60 to 75 characters.
- Below 18px the weight is 400 or more.
- Load every weight the design uses. A browser fakes a missing weight and distorts the letters.
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.
- `font-variant-numeric: tabular-nums` on timers, counters, prices and number columns.
- Inputs have 16px text on mobile. iOS zooms the page on anything smaller.
- Rendered text uses real quotes, dashes and the ellipsis character.

## Color

- One neutral ramp, one accent ramp and only the status colors the product shows. Build ramps in `oklch()` and keep the hue the same along a ramp.
- Components use tokens named by role, such as `--color-text-secondary`. They don't use raw values or palette steps such as `--blue-600`.
- One color has one meaning across the interface.
- Color is never the only signal. Add an icon, a label or an underline.
- Contrast is 4.5:1 for text. It is 3:1 for text from 24px, for bold text from 18.67px, and for control borders, icons and focus rings. Compute it against the background the text renders on. Don't judge it by eye.
- A dark theme is not the light ramp reversed. Lower the accent's chroma and compute contrast again.

## Surfaces

- For nested rounded boxes, the outer radius is the inner radius plus the padding. This holds up to about 24px of padding.
- Shadows show elevation, borders show structure. Use layered transparent shadows for raised surfaces and keep borders on dividers, inputs and table cells.
- Content images get a 1px inset outline: black at 10% alpha in a light theme, white at 10% in a dark one.
- Center by eye where geometry looks off. A button gets 2px less padding on its icon side, and a play triangle moves toward its point.
- One icon library per screen. Icons use `currentColor`, and their stroke follows the text weight, from 1.5px at 400 to 2.5px at 700.
- Hover styles go inside `@media (hover: hover)`. On touch, `:hover` sticks after a tap.
- Scrollable dialogs, drawers and menus get `overscroll-behavior: contain`.

## Motion

- Every animation has a job: show a change of state, answer an action or point at something. Motion is never the only feedback.
- Use transitions for interactive states, because they reverse when the user changes their mind halfway. Use keyframes only for a sequence that runs once.
- Typing, row hover and tab switches respond at once, or in 150 ms at most on `opacity` or color. Keep larger motion for rare moments such as a first load or a success state.
- A pressed button scales to 0.96 over 150 ms with `ease-out`. A disabled one doesn't.
- An entrance changes opacity from 0 to 1, `translateY` from 12px to 0 and blur from 4px to 0 over 300 ms with `ease-out`. Stagger the title, the text and the actions by 100 ms.
- An exit is shorter and smaller than the entrance: 150 ms.
- An icon swap is a cross-fade over 300 ms with `cubic-bezier(0.2, 0, 0, 1)`: scale 0.25 to 1, opacity 0 to 1, blur 4px to 0. Springs have no bounce.
- Name the properties in `transition`, never `all`. Animate `transform`, `opacity` and `filter`.
- The default state doesn't animate on first render.
- Turn transitions off while the theme switches, or every color animates at once.
- Run movement, scale and blur only under `prefers-reduced-motion: no-preference`. Under reduced motion, cross-fade opacity.

## Controls

- Use native elements: `<button>` for an action, `<a href>` for navigation, `<label>` for an input, `<dialog>` with `showModal()` for a modal. No `<div onClick>`.
- Every pointer action has a keyboard path. Escape closes an overlay. Focus moves into an overlay when it opens and returns to the trigger when it closes.
- Style `:focus-visible`. Never remove an outline without a replacement.
- A hit area is at least 24 by 24px. Aim for 44px on touch and 40px on desktop, and extend a small control with a pseudo-element.
- Every input has a label. A placeholder is not a label. Set `type`, `inputmode` and `autocomplete`, and never block paste.
- Validate on submit and keep the submit button enabled. Mark a failing field with `aria-invalid`, link its error text with `aria-describedby` and focus the first failing field.
- An icon-only button has an `aria-label`. An image has `alt`, empty when it is decorative.
- Never set `maximum-scale=1` or `user-scalable=no`. The page works at 320px width and at 200% zoom.
- A toast with an action or an error stays until the user dismisses it.

## States

Design every state the component has: hover, focus, pressed, selected, disabled, loading, empty and error.

Then try to break it with the content it will get:

- Text: an empty string, one word, several sentences, one long word with no place to break.
- Items: none, one, ten times the usual number.
- Width: a 320px container and a very wide one.
- Theme: dark, if the project has one.
