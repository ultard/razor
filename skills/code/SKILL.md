---
name: code
description: Use when writing, changing, fixing or refactoring code in any language.
---

# Code

Solve the whole task with the least new code, and write it so a reader understands it on the first read.

## Before you write

Pick the mode first:

- **An ordinary task**, such as a feature, a fix or a change. Follow the project, as the sections below say.
- **A request to refactor, improve, clean up or rewrite code.** Work by the Refactoring section. Inside the scope the user named, the project's patterns and the smallest-change list don't bind you.

Read the task and the code it touches. List every place the change must reach: callers, tests, fixtures, config, exports. Check what the change could break: data it could destroy or expose, callers that stop working. That list is the scope. The change is finished when all of it works, and extra features are not in it.

Then read the files that apply:

- [formatting.md](formatting.md) for every change: names, conditions, nesting, spacing, and markup, components and styles on the web.
- [web.md](web.md) for code that runs in a browser or serves a site or web app: pages, components, styles, the API behind them.

## The smallest complete change

Go down the list and take the first option that fully works:

1. **Nothing.** Skip features, options, abstractions, wrappers and "for later" code nobody asked for. A vague request gets the smallest version that does the core job.
2. **Code the project already has.** Use the existing helper, component or pattern the way the surrounding code does.
3. **The standard library or a platform feature**, unless the project has its own.
4. **An installed dependency.** Don't add a new one for a few lines.
5. **One line** a reader gets at a glance. A one-liner that needs decoding doesn't count.
6. **The minimum new code that works.**

## Rules

- Keep the layers, interfaces and conventions the codebase already has, unless the user asked to refactor or improve them. If a pattern you copy looks wrong, report it and don't fix it unasked.
- Prefer deleting code to adding it.
- Between options of equal size, take the one that is correct on edge cases.
- Fix a bug at its root cause, once, in the shared code. Grep every caller of the function first.
- Moved or merged code keeps its error handling and validation.
- Catch an error only where you can handle it, otherwise let it propagate. No empty catch, no catch that only logs, no catch that only rethrows.
- Don't silence the type checker or linter with `any`, casts or ignore comments. Fix the type or the code.
- Before you call an approach fine or a good practice, check it against the project's security policy, framework docs and existing rules. Convenient is not the same as allowed. If you can't check, say so.
- New non-trivial logic (a branch, a loop, a parser, money or security, a new script) gets one small test or assert-based check. Trivial changes need none.
- Comment only the why the code can't show, in one line.
- A shortcut with a known limit gets a comment: `shortcut: <the limit>, <when to upgrade>`.

Never cut validation at trust boundaries, error handling that prevents data loss, security, accessibility, or anything the user asked for.

## Refactoring

When the user asks to refactor, improve, clean up or rewrite code, the existing patterns in that scope are what you change, not what you follow.

- **Target.** Rewrite toward the rules of this skill, [formatting.md](formatting.md), [web.md](web.md) and the idioms of the language and framework, not toward the project's habits. When the project has two patterns for one job, take the better one, not the more common one.
- **Measure.** Judge the result by how much simpler and clearer the code became, not by the size of the diff. A large diff is fine. Still add no features and no "for later" abstractions.
- **What stays.** Behavior stays the same: if there are no tests, first write a few that pin the current behavior. Public interfaces stay unless the user asked to change them. The code outside the scope stays as it is.
- **Plan.** State the target pattern in a few lines, what replaces what, then do it. Ask first only when you must change a public interface or go outside the scope. If an interface changes, update every caller.
- **Finish the switch** inside the scope. Don't leave half the code on the old pattern and half on the new one.

## Reply

End with a line or two. Include only what applies:

- What you skipped or didn't check.
- A risk the user must know.
- A pattern you copied that looks wrong, with an offer to refactor it as a separate step.
- A formatting rule you left broken, and why.
- After a refactoring: what you replaced, and where the old pattern still lives outside the scope.
