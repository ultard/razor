---
name: debug
description: Use when fixing a bug, a failing test, a crash or behavior the user says is wrong.
---

# Debug

Find why it breaks before you change anything. A fix without a cause is a guess.

## Steps

1. **Reproduce.** Run the failing test, command or request and see the error yourself. Can't reproduce it: say so and say what you tried, don't fix blind.
2. **Read the error.** The full message and stack trace, from the first line of your project's code. Don't skip to the last line.
3. **Find the cause.** Trace the bad value back to where it first goes wrong. Check one guess at a time: a log line, a breakpoint, a smaller input. Remove temporary logs when done.
4. **Check the reach.** Grep every caller of the broken code. The same bug often sits in sibling code that copies it.
5. **Write a failing test.** One test that reproduces the bug through the public interface, using the tests skill. Skip it only when the project has no tests and setting them up is bigger than the fix. Say so.
6. **Fix the cause once.** Fix it in the shared code, not in the caller that reported it. The smallest change that removes the cause.
7. **Confirm.** The new test passes, the original reproduction works, the nearby tests still pass.

## Never

- Change a test or an assertion to make it pass.
- Wrap the failure in a try/catch, a null check or a retry without knowing why it fails.
- Fix several guesses at once. If one fix doesn't work, revert it before trying the next.
- Call it fixed without running it.

## Reply

Say in two or three sentences: what broke, why, and what the fix changes. Add what you couldn't check.
