---
name: code
description: Use when writing, changing, fixing or refactoring code in any language.
---

# Code

Keep code simple and stupid. Solve the whole task with the least new code, and write it so a reader understands it on the first read. End your reply with one or two lines: what you skipped or didn't check, and any risk the user must know.

## Before you write

Read the task and the code it touches. List every place the change must reach: callers, tests, fixtures, config, exports. Check what the change could break: data it could destroy or expose, callers that stop working. That is the scope. Extra features are not.

## The smallest complete change

Take the first option that fully works:

- **Does it need to exist?** Skip features and options nobody asked for, and name them in one line. A vague request gets the smallest version that does the core job.
- **Already in the codebase?** Use the existing helper, component or pattern the way the surrounding code does.
- **Standard library or platform feature?** Use it, unless the project has its own.
- **Installed dependency?** Use it. Don't add a dependency for a few lines.
- **One line a reader gets at a glance?** Write one line.
- **Otherwise** write the minimum code that works.

## Rules

- Finish every part the task needs, including the callers, tests and fixtures your change breaks.
- No abstraction, wrapper, option, config or "for later" code nobody asked for. Deleting beats adding.
- Keep the structure the codebase already has: its layers, interfaces and conventions.
- Boring code over clever code. A one-liner that needs decoding is not short.
- Bug fix: grep every caller of the function first, then fix the root cause once in the shared code.
- Moved or merged code keeps its error handling and validation.
- No silent catch. Never swallow an error with an empty catch or a bare log. Catch only where you can handle it, otherwise let it propagate. Don't catch just to rethrow.
- Don't silence the type checker or linter. No `any`, casts or ignore comments to make an error go away. Fix the type or the code instead.
- Between options of equal size, take the one that is correct on edge cases.
- New non-trivial logic (a branch, a loop, a parser, money or security, a new script) gets one small test or assert-based check. Trivial changes need none.
- Comment only the why the code can't show, in one line.
- A shortcut with a known limit gets a comment: `shortcut: <the limit>, <when to upgrade>`.

Never cut validation at trust boundaries, error handling that prevents data loss, security, accessibility, or anything the user asked for.

## Formatting

The project's formatter, linter and existing style win over these rules.

- **Full names.** Write `user`, `count`, `response`, not `usr`, `cnt`, `resp`. Common terms like `id`, `url` or `html` stay as they are.
- **Booleans read as questions.** Name them `isActive`, `hasAccess`, `canEdit`, not `active`, `access`, `edit`. Use the language's casing.
- **Name big conditions.** If a condition doesn't read at a glance, split it into named parts and combine them in the `if`. Each part is one simple check. If the condition is used in more than one place, or has more than three parts, move it into a function with early returns. A short `a && b` stays inline.
- **One ternary, no nesting.** A ternary picks between two simple values. Never nest one inside another. For three or more cases, use a lookup object or a function with early returns.
- **Compute before the call.** An argument that needs a condition or more than one step goes into a named variable first.
- **Shallow nesting.** No more than two or three levels. Use early returns, guard clauses and `continue` instead of nested `if`s.
- **Split by responsibility.** Put unrelated parts in separate files or modules. Don't create a file for a few lines that only one place uses.
- **Blank lines between blocks.** Separate logical steps of a function with one blank line: input checks, the work, the result.
- **Expand big literals.** An object, array, call or type that doesn't fit on one line gets one item per line.
- **Group imports.** Where the language allows: standard library, then external packages, then project modules, with a blank line between groups.
