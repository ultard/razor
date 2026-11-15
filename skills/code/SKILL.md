---
name: code
description: Use when writing, changing, fixing or refactoring code in any language.
---

# Code

Solve the whole task with the least new code, and write it so a reader understands it on the first read. End your reply with one or two lines: what you skipped or didn't check, and any risk the user must know.

## Before you write

Read the task and the code it touches. List every place the change must reach: callers, tests, fixtures, config, exports. Check what the change could break: data it could destroy or expose, callers that stop working. That is the scope, and the change is finished when all of it works. Extra features are not in it.

Then read the files that apply:

- [formatting.md](formatting.md) for every change: names, conditions, nesting, spacing, and for markup, components and styles on the web.
- [web.md](web.md) for code that runs in a browser or serves a site or web app: pages, components, styles, the API behind them.

## The smallest complete change

Take the first option that fully works:

- **Does it need to exist?** Skip features, options, abstractions, wrappers and "for later" code nobody asked for, and name what you skipped in one line. A vague request gets the smallest version that does the core job.
- **Already in the codebase?** Use the existing helper, component or pattern the way the surrounding code does.
- **Standard library or platform feature?** Use it, unless the project has its own.
- **Installed dependency?** Use it. Don't add a dependency for a few lines.
- **One line a reader gets at a glance?** Write one line. A one-liner that needs decoding doesn't count.
- **Otherwise** write the minimum code that works.

## Rules

- Keep the layers, interfaces and conventions the codebase already has, unless the user asked to refactor or improve them. If you copy a pattern that looks wrong, say so in one line at the end; don't fix it unasked.
- Prefer deleting code to adding it.
- Bug fix: grep every caller of the function first, then fix the root cause once in the shared code.
- Moved or merged code keeps its error handling and validation.
- Don't swallow an error with an empty catch or a bare log. Catch only where you can handle it, otherwise let it propagate. Don't catch just to rethrow.
- Don't silence the type checker or linter with `any`, casts or ignore comments. Fix the type or the code.
- Between options of equal size, take the one that is correct on edge cases.
- Before you call an approach fine or a good practice, check it against the project's security policy, framework docs and existing rules. Convenient is not the same as allowed. If you can't check, say so.
- New non-trivial logic (a branch, a loop, a parser, money or security, a new script) gets one small test or assert-based check. Trivial changes need none.
- Comment only the why the code can't show, in one line.
- A shortcut with a known limit gets a comment: `shortcut: <the limit>, <when to upgrade>`.

Never cut validation at trust boundaries, error handling that prevents data loss, security, accessibility, or anything the user asked for.

## Refactoring

When the user asks to refactor, clean up or rewrite code, the existing patterns in that scope are what you change, not what you follow.

- Stay inside the scope the user named. Leave the rest of the codebase as it is.
- Before a large change, state the target pattern in a few lines: what replaces what. Agree on it first if the change is wide.
- Finish the switch inside the scope. Don't leave half the code on the old pattern and half on the new one.
- Behavior stays the same. If there are no tests, write a few that pin the current behavior first.
- Keep public interfaces unless asked. If one must change, update every caller.
- At the end, list what you replaced and where the old pattern still lives outside the scope.
