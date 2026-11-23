---
name: visual
description: Visual design with a point of view instead of templated AI defaults.
---

# Visual

Every choice of color, type, and layout is made for this subject. A choice that would look the same on any other project is a default, not a decision. When the brief pins down a look, follow the brief, even when it asks for one of the defaults below.

## Start from the subject

1. **Know what it is for.** Before any design, name the subject, the audience, and the main job of the page. If the brief doesn't say, propose these and confirm with the user.
2. **Take the look from the subject's world.** Its materials, vocabulary, and the things people in that field look at every day. A toy shop for 8-year-olds and a dashboard for analysts should not share a palette.
3. **Use real content.** Design with the brief's actual text and data. If there is none, write plausible content for this subject, not lorem ipsum and not generic marketing lines.

## Defaults to avoid

These come out when nothing is decided. Each is fine when the brief asks for it, and a tell when it shows up on its own.

4. **Palettes:** warm cream background (near `#F4F1EA`) with a serif display and a terracotta accent (near `#D97757`); near-black with one acid-green or vermilion accent; tinted near-black (`#0B0B0B`, `#111`) standing in for black.
5. **Layouts:** content chopped into identical rounded cards with the same radius and the same soft grey shadow; gradient washes as decoration; a newspaper layout with hairline rules and zero radius; a hero made of a big number, a small label, and a gradient accent.
6. **Type:** one word in a headline set in italic, bold, or another color; all-caps tracked-out eyebrow labels above every heading; a monospace face for small labels.
7. **Chrome:** meta strings joined with middle dots (`A · B · C`); labels like `WORD — fragment`; a `→` after every link and button; numbered markers (`01 / 02 / 03`) on content that isn't a sequence.
8. **Motion:** fade-and-slide-up on every section and a hover effect on every card.

## Typography

9. **One or two families.** If two, they differ clearly in role and shape. Pick them for this subject, not the families you would use anywhere.
10. **A real scale.** Set sizes, weights, and line-heights as a scale and stick to it.
11. **Readable lines.** Body text under about 80 characters per line. Serif body text gets slightly more line-height than sans.
12. **Type can be the design.** A headline can carry the page's character through size, weight, and spacing alone.

## Layout and structure

13. **Structure carries information.** Borders, dividers, numbers, and labels each say something about the content. If one says nothing, remove it.
14. **Hierarchy matches importance.** The most important thing is the most visible. Radius, size, and spacing differ where importance differs, instead of one value on everything.
15. **Decide alignment.** Left, centered, or justified is a choice for the whole page, not something that drifts section to section.

## Motion

16. **One orchestrated moment** beats many small effects: one load sequence or one reveal.
17. **Motion answers actions.** Opening, expanding, and confirming can animate to show what changed. Respect `prefers-reduced-motion`.

## Process

18. **Plan before code.** Write a short plan:
    - color: 4 to 6 named hex values;
    - type: the families and their roles;
    - layout: the concept in one sentence, with an ASCII wireframe if it helps;
    - one or two principles that make this page its own.
19. **Check the plan against the brief.** For each part ask: would I produce this for any similar page? If yes, change it and say what changed and why. Only then write code.
20. **Spend boldness in one place.** One element is the memorable thing. Everything around it stays quiet. Before you finish, remove one decoration.
21. **Keep the quality floor** without announcing it: works on mobile, visible keyboard focus, enough contrast, reduced motion respected.
22. **Look at the result.** Take a screenshot if the environment allows it, and fix what looks off before handing it over.

## Before you finish

- Can you name the subject-specific reason for the palette, the type, and the layout?
- Is any item from "Defaults to avoid" there without the brief asking for it?
- Is there one memorable element, and is everything else quieter than it?
- Does it work at phone width, with keyboard focus visible?
