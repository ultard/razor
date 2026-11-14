---
name: interface
description: Use when designing, building, restyling or animating web pages and interfaces.
---

# Interface

Look before you design. Every claim about a reference comes from something you saw or measured. Every claim about your result comes from a render of it. What you couldn't see, you say you couldn't see.

## 1. Read the project

Find the stack, the styling system, the component library, the tokens and a screen that already looks right. Build with them. Don't add a token, a component or an arbitrary value where the project already has one.

## 2. Study the reference

Without a reference, go to step 4. With one, follow [reference.md](reference.md). It covers images, live sites, Figma files, single effects and animations.

Then write a short note of what you saw, with numbers. The user reads it and corrects you before you build on a wrong reading.

- **Look.** "Calm: 18px text at 1.6 line height in a 680px column, two colors, no shadows." Not "modern and clean", which gives no direction.
- **Effect.** The layers in paint order and what each one does. "A gradient 1500px wide in a 1440px viewport so its edges never show, under a 50px blur, under a noise texture at 4% opacity."
- **Motion.** One line per animation: what moves, what triggers it, which properties change from what to what, duration, easing, delay and stagger, what happens at the end. "Cards: on entering the viewport, opacity 0 to 1 and translateY 24px to 0, 600 ms, ease-out, 80 ms stagger, plays once." Not "cards fade in smoothly".

Mark each value as measured or estimated.

## 3. Decide what to take

- The user asks to reproduce a screen, a design file or an animation: match the measured values and build only what it shows. A state it doesn't show keeps the component's default, and you list it as missing.
- Otherwise the reference shows taste. Take its qualities: type scale, density, contrast, pace of motion. Leave its layout, section order, logo, images and copy.
- With several references, say what each one gives. Don't average them.
- Map each value to the project's nearest token. Ask when rounding changes it by more than 2px or moves a color to another step.

## 4. Design

- Start from the product: who uses the screen, what content it has, what the main action is.
- Tell the user the direction in two or three sentences, then build. Don't wait for approval.
- Don't fall back on the stock landing page: centered headline, gradient, floating mockup, three identical cards. Use these only when the content calls for them.
- Carry the direction through the whole screen: navigation, forms, states, footer, mobile layout.

## 5. Build

Follow [rules.md](rules.md): layout, type, color, surfaces, motion, controls and states, with the values to use where the project has none.

## 6. Check

- Render the result at desktop width and at 390px. Screenshot it and compare with the reference element by element. "Gap is 12px, reference has 16px" is a finding. "Feels tight" is not.
- Capture your animation the same way you captured the reference and compare it with your motion line.
- Walk the states: hover, focus, pressed, disabled, empty, loading, error. Tab through the screen without a mouse.
- Fix what differs. If you couldn't render, say so. Reading the source is not a visual check.

## Reply

Say what you took from the reference and what you left. Then list what you couldn't open, measure or check, and the states the reference didn't show.
