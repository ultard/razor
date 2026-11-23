---
name: review
description: Code review that finds problems worth fixing before merge, and handling review comments on your own code.
---

# Review

A review finds problems that would hurt after merge. It is not a summary of the diff and not a list of style preferences.

## What to look for

Check in this order and spend most of the time at the top.

1. **Bugs.** Wrong conditions, off-by-one, missing cases, null or empty input, wrong units, wrong order of operations, errors that are swallowed, races between concurrent requests, resources that are never closed.
2. **Security.** Input that reaches SQL, a shell, HTML, or a file path without the protection `razor-code:quality` describes. Missing permission checks. Secrets in code or logs.
3. **Data.** Migrations that lose or corrupt data, writes without the transaction they need, changes to stored formats that old data won't match.
4. **Breaking changes.** A changed function signature, API response, config key, or default that some caller still relies on. Search for the callers. When the change renames a field, a key, or a function, search the whole repository for the old name (`git grep fullName`), not only for callers of the changed function.
5. **Missing pieces.** Callers that weren't updated, a risky path with no test, docs that now say the wrong thing.
6. **Code quality,** using `razor-code:quality`: duplicated helpers, layers that don't earn their place, slop. Mention these only when they make the code harder to change or easier to break.
7. **Skip what tools catch.** Formatting, import order, and lint rules belong to the formatter and the linter, not the review.

## How to review

8. **Learn the intent first.** Read the PR description, the issue, and the commit messages. A change can be correct code and still not do what it was meant to do.
9. **Read beyond the diff.** Open the changed functions in full, their callers, and the code they call. Many bugs sit in a line the diff didn't touch.
10. **Run it when you can.** Run the tests and the build. A failing test is a finding you don't need to argue for.
11. **Verify every finding.** Before you report a problem, trace the code path, build the input that breaks it, or run it. If you can't support a finding, drop it or mark it clearly as a question.
12. **Few strong findings beat many weak ones.** Ten nitpicks bury the one bug that matters.

## How to report

13. **Most severe first.** Use three levels:
    - **Must fix:** a bug, a security hole, data loss, or a breaking change.
    - **Should fix:** a real problem that won't break things right away, such as a missing test on a risky path.
    - **Minor:** optional, and keep these few and short.
14. **Each finding has:** the location as `file:line`, what is wrong, a concrete case where it fails (this input gives that wrong result), and a suggested fix.
15. **Say how sure you are.** Mark a finding as confirmed when you ran it or traced it fully, and as possible when it depends on something you couldn't check.
16. **No padding.** No praise sections, no retelling of what the diff does, no "overall the code looks good" before the findings.
17. **Nothing found is a valid result.** Say so plainly, and say what you checked.

## After the review

18. **Show the findings and wait.** Don't edit the code until the user says which findings to fix. Don't post comments on GitHub unless the user asks.
19. **Your own change is the exception.** Before you hand over finished work, review your own diff and fix what you find right away (see below).

## Reviewing your own change

20. **Read your whole diff** with `git diff` before you say you're done, the way a reviewer would.
21. **Check it against the task.** Does it do everything that was asked, and nothing that wasn't?
22. **Look for leftovers:** debug output, commented-out code, TODOs, unrelated changes, files you didn't mean to touch.
23. **Run the checks** `razor-code:quality` lists: build, types, lint, and the tests near the change.
24. **Fix, then report.** Fix what you find, and mention anything important you fixed in your summary to the user.

## Handling review comments

25. **Check each comment before acting on it.** Reviewers are sometimes wrong. Read the code the comment points at and confirm the problem is real.
26. **If it's right, fix it.** Keep the fix to what the comment asks for.
27. **If it's wrong, say so with evidence.** Explain why, with the code path, a test, or the output. Be polite and specific. Don't change code just to end the discussion.
28. **If it's unclear, ask** what the reviewer means instead of guessing.
29. **No automatic agreement.** Don't open with "You're right!" before you've checked. Say what you found.
30. **Answer every comment** with what you did: fixed and how, or not fixed and why. Follow `razor-code:commits` for new commits, and don't rewrite pushed history unless the user asks.
