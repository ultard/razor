---
name: microcopy
description: Clear, specific words inside an interface.
---

# UX copy

Words in an interface help someone understand and use it. They are part of the design, not decoration. `razor:writing` covers sentences in general; this skill covers the text inside a product.

## Naming

1. **Name things the way users think of them,** not the way the system is built. A user manages notifications, not webhook config.
2. **One thing, one name.** An action keeps its name through the whole flow: the button says "Publish", the toast says "Published", the menu says "Publish".
3. **Plain over clever.** A new user should understand every label without context.

## Buttons and actions

4. **A button says what happens.** "Save changes", "Delete project", "Send invite". Not "Submit", "OK", "Continue" when something more specific fits.
5. **Verbs first, sentence case.** "Create project", not "Project Creation" or "CREATE".
6. **Destructive confirmations name the object and the result.** "Delete 'Q3 report'? This can't be undone." The buttons are "Delete" and "Cancel", not "Yes" and "No".

## Errors

7. **Say what happened and how to fix it.** "Password must be at least 12 characters", not "Invalid input".
8. **No apologies, no blame, no jokes.** "Something went wrong" is never the whole message.
9. **Put the error next to the cause.** A field error sits under the field. A page-level error says which part failed.

## Empty and waiting states

10. **An empty state is a next step.** Say what will appear here and give the action that makes it appear: "No invoices yet. Create your first invoice."
11. **Loading text is rare.** Use it only when the wait is long, and then say what is happening: "Importing 1,240 rows".

## Tone

12. **Plain verbs, no filler.** Cut "simply", "just", "easily", "please note".
13. **Every piece of text does one job.** If a label, hint, and tooltip all say the same thing, keep one.
14. **Match the audience.** A tool for engineers can be terse. A tool for first-time users explains more. Neither sells.

## Before you finish

- Does every button say what it does?
- Does every error say how to fix it?
- Is each action called the same thing everywhere?
- Is there text that repeats other text on the same screen?
