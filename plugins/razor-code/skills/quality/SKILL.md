---
name: code
description: Careful code changes in any language.
---

# Code

Docs such as READMEs and guides are covered by `razor:docs`. Tests, debugging, review, and commits have their own skills in razor-code.

## Before you change code

1. **Read before you write.** Read the code you're about to change, its callers, and the code it calls. Don't edit a function you haven't read in full.
2. **Look for what already exists.** Before you write a helper, search the project for one that does the job. Before you add a pattern, see how the project solves the same problem elsewhere, and do it the same way.
3. **Know what "done" means.** If the request can be read two ways and the choice changes the code, ask. If it doesn't change much, pick the likely reading and say which one you picked.

## Making the change

4. **Do what was asked.** No features, options, or settings nobody asked for. No "while I'm here" changes to unrelated code. If you notice something else worth fixing, mention it instead of fixing it.
5. **Name a simpler option if there is one.** If something much simpler covers the need, such as `functools.lru_cache` instead of a cache class of your own, still build what was asked, and say in one line what the simpler option is. The user decides. Simpler means less code or something the project already has, not a new dependency.
6. **Match the project's style, unless the user asked otherwise.** Use the names, formatting, file layout, error handling, and libraries the surrounding code uses. If the user asked for a different style or approach, the user's request wins over the existing code.
7. **Don't touch what you don't need to.** Don't reformat, reorder, or rename code outside your change. A small diff is easier to review and safer to merge.
8. **Finish the change.** Update every caller, type, test, and doc that the change affects. Search for the old name when you rename something. Remove code your change made unused. A change that works in one place and breaks three others is not done.
9. **No placeholders.** No stub that returns fake data, no `// TODO: implement`, no hardcoded value standing in for real logic, unless the user asked for a stub. If you can't finish something, say so.
10. **Check that it works.** Run the build, the type checker, the linter, and the tests that cover what you changed. If you couldn't run something, say what and why.

## Structure

11. **Names say what the thing is.** `unpaidInvoices`, not `data` or `list2`. `isExpired`, not `flag`. Use the words of the domain and of the codebase. No `Manager`, `Helper`, or `utils` files that collect unrelated functions.
12. **Full words in names.** `user`, `count`, `response`, not `usr`, `cnt`, `resp`. Common short terms such as `id`, `url`, and `html` stay as they are.
13. **Booleans read as questions.** `isActive`, `hasAccess`, `canEdit`, not `active`, `access`, `edit`, in the language's casing.
14. **Flat over nested.** Return early on errors and edge cases, so the main path isn't buried three levels deep. After a branch that ends with `return`, `continue`, or `throw`, write the next case without `else`.
15. **Name big conditions.** If a condition doesn't read at a glance, split it into named parts and combine them in the `if`: `const isOverdue = ...; const hasReminder = ...; if (isOverdue && !hasReminder)`. A condition used in more than one place, or with more than three parts, becomes a function. A short `a && b` stays inline.
16. **One ternary, no nesting.** A ternary picks between two simple values. For three or more cases, use a lookup object or a function with early returns.
17. **A function does one job.** Split a function when it does two things, not when it reaches some line count. Don't split one job into pieces that each have one caller. The same goes for files: put unrelated parts in separate files, but don't create a file for a few lines that only one place uses.
18. **No layers that don't earn their place.** A wrapper with one caller, an interface with one implementation, a class that only forwards calls: inline it. Add an abstraction when the third copy appears, not in advance.
19. **Plain over clever.** Write it the obvious way. A trick that saves two lines but takes a minute to read costs more than it saves.
20. **Correct on edge cases over short.** When two ways take the same amount of code, pick the one that handles empty input, rounding, time zones, and Unicode correctly: `Decimal` for money, not `float`; a date with a time zone, not a naive one.
21. **Keep state small.** Prefer pure functions that return a result over functions that change shared state. Prefer local variables over fields, and fields over globals. Derive a value instead of keeping two copies in sync.
22. **Name the magic values.** `const MAX_RETRIES = 3` when the meaning isn't obvious from the line. A `0` or `1` that is plainly an index or a count needs no name. Write a character as itself, `'/'`, not as its code `47`.
23. **Types tell the truth.** No `any`, no casts, no `@ts-ignore` or `# type: ignore` just to make the checker quiet. If the type is wrong, fix the type. If data from outside has no known type, use `unknown` and check it.
24. **Speed when it matters.** Don't optimize code that isn't slow. But don't write a query inside a loop or a nested loop over data that can grow, when a single query or a lookup table does the same.
25. **Mark a corner you cut on purpose.** When you choose a simple version with a known limit, such as one global lock, an O(n²) scan, or a rough heuristic, add a comment that names the limit and what to do when it's reached: `# One global lock: switch to per-account locks if writes start to queue.`

## Errors and input

26. **Check input where it enters.** User input, HTTP requests, files, env vars, CLI arguments, and responses from other services get validated at the point they enter the program. Inside the program, trust the checked data: no repeated null checks in every function.
27. **Don't hide errors.** No empty `catch`, no catch that logs and carries on as if nothing happened, no `?? []` or `|| 0` on data that must exist. A hidden error turns into a wrong result later, far from the cause.
28. **Catch only where you can act.** Catch an error where you can retry, fall back, or turn it into a clear message for the user. Everywhere else, let it go up. When you rethrow, keep the original error as the cause.
29. **Error messages say what failed and with what.** `Invoice 1042 not found`, not `Error occurred`. Include the value that caused it, unless it's a secret.
30. **Fail on impossible states.** If the code reaches a state that should never happen, throw. Don't return a default that lets the program continue with wrong data.
31. **Fix the cause, not the symptom.** If a value is wrong, find where it became wrong and fix it there. A guard at the place where it crashed hides the bug. When the cause is in a shared function, find all its callers (`git grep parse_amount`) and fix the function once. A fix in only the caller from the bug report leaves the other callers broken.

## Dependencies

32. **Use what's already there before writing your own.** Check in this order: the standard library, a feature of the platform (`<input type="date">` instead of a date picker library, CSS instead of JavaScript, a database constraint instead of a check in app code), a dependency the project already has. Don't add a package for something a few lines of code can do.
33. **Use the project's package manager** and commit the lockfile change with the code that needs it.

## Security

34. **Never build code from input.** Use parameterized queries for SQL. Pass shell command arguments as a list, not as one string. Don't `eval` input or deserialize untrusted data with formats that can run code, such as `pickle`.
35. **Escape output for where it goes.** Use the framework's escaping for HTML. Don't put user data into `innerHTML`, `dangerouslySetInnerHTML`, or a template string that becomes HTML.
36. **Check paths from input.** A file name from a user can contain `../`. Resolve the path and check that it stays inside the folder it belongs to.
37. **No secrets in code.** Keys, tokens, and passwords come from env vars or a secret store. Don't put them in code, logs, error messages, or test fixtures that look real.
38. **Check permissions on the server.** Every request that reads or changes data checks that this user may do it. Hiding a button in the UI is not access control.
39. **Don't turn off protection to make something work.** No disabled TLS verification, no `Access-Control-Allow-Origin: *` on an API with credentials, no disabled CSRF checks. Fix the real problem or ask.
40. **No homemade crypto.** Use the platform's or a well-known library's functions for hashing passwords, encryption, tokens, and random values. Use a cryptographically secure random generator for anything secret.

## Comments

41. **No comment by default.** Good names and simple code say what the code does. Before you write a comment that explains what code does, try a clearer name or a smaller function.
42. **Comment the why.** Write a comment when the reader can't get the reason from the code: a constraint from outside ("the API returns at most 100 items"), a workaround with a link to the issue, an order that matters, a value chosen on purpose, behavior that looks wrong but isn't.
43. **No comments that repeat the code.** `// increment i`, `// loop over users`, `// constructor`. Delete them.
44. **No change notes in comments.** "// fixed bug", "// added for ticket 123", "// new version", "// changed from X". The comment describes the code as it is; git describes how it changed.
45. **No commented-out code.** Delete it. Git keeps it.
46. **TODO says what and why.** `// TODO: retry on 429 once the client supports backoff` is useful. `// TODO: fix` is not.
47. **Docstrings for public functions and types:** what it does, what each parameter means when the name and type don't make it clear, what it returns, what it throws, and side effects. Don't repeat the types the signature already shows.
48. **Keep comments true.** When you change code, read the comments around it and update or delete the ones that no longer match. A wrong comment is worse than none.
49. **Match the file.** Follow the comment style, language, and docstring format already used in the file and the project.

## AI slop in code

Code written by a model has its own tells. Avoid them when you write, and remove them when the user asks you to clean code up.

50. **The tells:**
    - `try`/`catch` and null checks around code that can't fail or data that was already checked
    - fallback values that hide missing data (`?? ''`, `|| []`, `.get(key, {})`)
    - `as any`, casts, and ignore comments that silence the type checker
    - comments that repeat the code or narrate the change (see Comments above)
    - a new helper that duplicates one the project already has
    - options, parameters, and config nobody uses
    - wrappers, factories, and interfaces with one user
    - deep nesting where an early return would do
    - names much longer than the codebase's usual names (`userAccountDataResponseObject`)
    - leftover `console.log`, debug prints, and unused imports
    - code that looks different from the rest of the file
51. **How to clean up.** When the user asks to remove slop, look at the diff against the main branch, or at the files the user named. Keep behavior the same unless you find a clear bug, and report any bug you fix. Make small, local edits, not a rewrite. Removing a parameter changes the function's API: remove an unused one only when you can see every caller, and say that you did. In the summary, say in a few sentences what you removed.

## Before you finish

- Did you change only what the task needed?
- Did you look for existing code, the standard library, or a platform feature before writing your own?
- Did you update every caller, type, test, and doc the change affects?
- Did you run the build, type check, lint, and the relevant tests?
- Does the new code look like the code around it, or like the style the user asked for?
- Any `any`, empty `catch`, leftover debug output, or stub?
