---
name: critique
description: Feedback on a design, mockup, or page that names each problem and its fix, ordered by impact.
---

# Critique

A critique finds what stops the design from doing its job and says how to fix it. It is not a description of the screen and not a list of taste.

## Before you start

1. **Know the job.** Ask or infer who uses this screen and what they come to do. Every point in the critique is measured against that.
2. **Know the stage.** An early sketch gets feedback on direction and flow. A finished screen gets feedback on details. Don't polish pixels on a sketch.
3. **Look at the real thing.** Take a screenshot or open the page. Check it at phone width too.

## What to check, in order

4. **Purpose.** Can a new user tell in five seconds what this is and what to do next?
5. **Hierarchy.** Is the most important thing the most visible? Is there one clear primary action, or do several compete?
6. **Flow.** Can the user finish the main task without guessing? Look at empty, loading, error, and long-content states, not only the happy one.
7. **Consistency.** The same thing looks and is named the same everywhere. Spacing, radius, and type follow one system.
8. **Accessibility.** Contrast, focus, labels, target size. Use `razor-design:a11y` for a full audit.
9. **Words.** Labels, buttons, and errors, as in `razor-design:ux-copy`.
10. **Defaults.** Parts that look templated rather than chosen for this subject, as listed in `razor-design:visual`.

## How to write it

11. **Each point has a place, a problem, and a fix:** "The 'Export' and 'Delete' buttons have the same weight in the toolbar, so the destructive action is as easy to hit as the safe one. Make Delete secondary and move it into the menu."
12. **Order by impact.** What blocks the main task first. Taste last, and labeled as taste.
13. **Say what works** in a line or two, so it survives the next revision. No compliments for padding.
14. **Don't redesign in the critique.** Suggest the smallest change that fixes each problem. If the direction itself is wrong, say so once, plainly, with the reason.

## Before you finish

- Is every point tied to the user's job, with a concrete fix?
- Are the points ordered by how much they hurt?
- Did you look at the states other than the happy path?
