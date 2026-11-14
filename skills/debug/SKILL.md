---
name: debug
description: Use when fixing a bug, a failing test, a crash or behavior the user says is wrong.
---

# Debug

Find why it breaks before you change anything.

## Steps

1. **Reproduce.** Run the failing test, command or request and see the error yourself. If you can't reproduce it, say so and say what you tried. Don't fix blind.
2. **Read the error.** The full message and stack trace, from the first line of your project's code. Don't skip to the last line.
3. **Find the cause.** Trace the bad value back to where it first goes wrong. Check one guess at a time with a log line, a breakpoint or a smaller input. Remove temporary logs when done.
4. **Check the reach.** Grep every caller of the broken code. The same bug often sits in sibling code that copies it.
5. **Write a failing test.** One test that reproduces the bug through the public interface, using the tests skill. Skip it only when the project has no tests and setting them up is bigger than the fix, and say so.
6. **Fix the cause once.** Fix it in the shared code, not in the caller that reported it, with the smallest change that removes the cause.
7. **Confirm.** The new test passes, the original reproduction works, the nearby tests still pass. Don't call it fixed without running it.

## Never

- Change a test or an assertion to make it pass.
- Wrap the failure in a try/catch, a null check or a retry without knowing why it fails.
- Fix several guesses at once. If one fix doesn't work, revert it before trying the next.

## Reply

Say in two or three sentences what broke, why, and what the fix changes. Add what you couldn't check.
