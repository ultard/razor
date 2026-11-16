---
name: debug
description: How to find and fix the cause of a bug. Use when something fails, crashes, returns a wrong result, worked before and stopped, fails only sometimes or only in production, or when a test fails and the reason isn't obvious.
---

# Debug

Find the first place where the program does something wrong, fix it there, and prove the fix. Changing code until the symptom goes away is not debugging.

## Get the facts

1. **Read the whole error.** The full message, the full stack trace, and the log lines around it. The useful line is often not the first one.
2. **Know what should happen.** Write down the input, what you expected, and what happened instead. If the user's report doesn't say, ask or find out before you change anything.
3. **Note when it started** and what changed around that time: code, dependencies, config, data, environment.

## Reproduce

4. **Make it fail on demand.** Find the steps or the input that trigger the bug every time. Without a reproduction you can't tell whether a fix works.
5. **Make the reproduction small.** Cut the input, the steps, and the setup until removing anything else makes the bug go away.
6. **Turn it into a failing test** when the project has tests (see the tests skill). It proves the bug now and guards against it later.

## Find the cause

7. **Look at real values, don't guess.** Add temporary logs or use a debugger to see what the code actually receives and returns at each step. One printed value beats ten theories.
8. **Walk back from the symptom.** Where the program crashed is where a wrong value became visible. Follow that value back until you reach the first place it became wrong. That's the cause.
9. **One hypothesis at a time.** State what you think is wrong and what result would prove it. Change one thing, check, and undo the change if it didn't confirm anything.
10. **Narrow it by halves.** If you don't know where the bug is, check the state in the middle of the path, then in the middle of the half that's wrong. The same works for input: halve it until the smallest failing piece is left.
11. **Compare working and failing.** A case that works and one that doesn't differ somewhere: input, data, config, version, environment. Find the difference.
12. **Check your assumptions.** Is the code you're reading the code that runs? Check which file is loaded, which config is used, which dependency version is installed, and what env vars are set. Suspect caches, build output, and saved state, especially when something fails only after a restart or only on one machine.

## "It worked before"

13. **Read the recent history.** `git log` on the files involved, and the lockfile diff for dependency updates.
14. **Use `git bisect`** when the history is long. Give it a command that fails on the bug, for example the failing test, and let it find the commit: `git bisect run npm test -- test/export.test.js`.

## Bugs you can't reproduce

15. **Collect what exists.** Logs, error reports, request IDs, the input that was used, the time it happened, the version that was running.
16. **List what's different** between where it fails and where you tried: data, load, concurrency, time zone, locale, versions, config.
17. **Write down the hypotheses** with the evidence for and against each one. Check the cheapest one first.
18. **Add logging to confirm, with the user's agreement,** when the evidence runs out. Say what the log will show and which hypothesis it settles.
19. **Don't call it fixed without proof.** If you fixed the likely cause but couldn't reproduce the bug, say so, and say what would confirm the fix.

## Fix

20. **Fix the cause, not the symptom.** A null check, a retry, a default value, or a `try`/`catch` at the place where it crashed hides the bug. A guard is the right fix only when the state it handles is legitimate.
21. **Look for the same bug elsewhere.** Search for the same pattern in the project. Fix the copies that are part of the task and report the rest.
22. **Prove it.** The reproduction now passes, the regression test passes, and the tests around the change still pass.

## When to stop and ask

23. **Stop after three attempts that taught you nothing new,** instead of trying random changes. Undo the failed experiments.
24. **Stop when the next step needs something you don't have:** production data, credentials, access to another system, or a decision about how the program should behave.
25. **Stop before a risky fix:** a data migration, a change to a public API, or anything that's hard to undo.
26. **When you stop, report:** what you checked, what you ruled out, your best hypothesis and the evidence for it, and what you need to continue.

## Clean up

27. **Remove every trace of debugging.** Temporary logs, debug prints, scratch scripts, test files you made to experiment, and experimental changes. What stays is the fix and the regression test.

## Report

28. **Tell the user:**
    - the cause, in one or two sentences: where it is and why it produced the bug
    - how you know: the reproduction, the value you saw, or the commit `git bisect` found
    - what you changed
    - how you checked the fix
    - where else the same bug may exist
    - anything you couldn't verify
