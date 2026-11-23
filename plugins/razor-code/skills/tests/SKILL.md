---
name: tests
description: Tests that catch real bugs.
---

# Tests

A test exists to catch a bug that would hurt. Coverage numbers are not the goal. A few tests that guard what matters beat many tests that check nothing important.

## When to write tests

1. **The project has tests: add them.** New behavior and every bug fix get a test, in the same change. Follow the project's framework, file layout, naming, and test helpers.
2. **The project has no tests: don't start them on your own.** Setting up a test framework is a decision for the user. Say what you would test and offer to set it up.
3. **The user asked for tests: write them,** following the rest of this skill.

## What to test

4. **Start with what would hurt.** Ask: if this broke in production, what would happen? Test first where the answer is bad:
   - money, prices, totals, and anything billed
   - data that could be lost, corrupted, or written to the wrong place
   - permissions and access: who may see or change what
   - parsing and validating input from users, files, and other services
   - migrations and changes to stored data
   - the main path users take every day
5. **Test the edges, not just the middle.** Empty input, one item, many items, the largest allowed value, invalid values, missing fields, duplicates. Bugs live at the edges.
6. **Test the error paths users will hit.** What happens when the input is wrong, the record doesn't exist, or the other service fails.
7. **Every fixed bug gets a regression test** that reproduces the original failure.
8. **Skip what can't break in an interesting way.** Getters, constants, plain wiring between two functions, and behavior of the framework or a library. A test that can only fail when someone deletes the code adds maintenance and no safety.

## A good test

9. **Test behavior through the public interface.** Call the function, endpoint, or command the way real code does, and check what it returns or changes. Don't test private functions or the order of internal calls: a refactor that keeps behavior must not break tests.
10. **The name says the case and the result.** `rejects a refund for a cancelled order`, not `test refund 2`. When it fails, the name alone should tell the reader what broke.
11. **Concrete expected values.** Write the expected result as a literal: `expect(total).toBe(11400)`. Don't compute it with the same logic as the code, because then the test repeats the bug.
12. **Assertions that can fail.** `toBeDefined()`, "doesn't throw", or a status code alone usually pass even when the result is wrong. Check the values that matter. Use snapshots only for output that is meant to stay byte for byte the same, and read the snapshot you commit.
13. **One case per test.** A test checks one situation. Several asserts are fine when they describe the same result.
14. **Short and readable.** Set up the data, run the code, check the result, in that order. Put shared setup in a helper only when several tests use it and the test still reads clearly without opening the helper.

## Honest tests

15. **See the test fail.** A new test for a bug must fail before the fix and pass after. For new behavior, break the code on purpose or check the test against the old code. A test you never saw fail may not test anything.
16. **Don't bend tests to make them pass.** When a test fails, find out whether the code or the test is wrong. Change the expected value only when the test was wrong, and say so.
17. **Don't silence failing tests.** No deleting, skipping, `.only`, `xit`, `@skip`, weaker assertions, or `try`/`catch` around the check to get a green run. If a test can't pass for a reason outside your task, tell the user.
18. **Run what you wrote.** Run the new tests and the tests near the code you changed. Report the result. If you couldn't run them, say so.

## Mocks

19. **Mock what you don't control.** Third-party APIs, email and payment providers, the clock, and randomness. Use the real code for everything you own.
20. **Don't mock the thing under test,** and don't mock so much that the test only checks that the mocks were called. Such a test passes when the real code is broken.
21. **A real database when the project uses one in tests.** Queries, constraints, and transactions behave differently in a mock. Use the project's test database setup if it has one.
22. **Follow the project's approach** to mocks and fakes before you introduce a new library or pattern.

## Flaky tests

A test that fails now and then teaches people to ignore failures. Remove the cause.

23. **Time.** Use a fake clock or pass the time in. Don't depend on the current date, time zone, or how long something takes.
24. **Randomness.** Fix the seed or mock the generator, and assert ranges where the value is random by design.
25. **No sleeps.** Wait for the condition you need (an element appears, a request finishes), not for a fixed number of milliseconds.
26. **Each test owns its data.** Create what it needs and don't rely on another test running first. Use unique names, temporary folders, and random ports so tests can run in parallel.
27. **No real network** to services outside the test, unless the test exists to check that integration.

## End-to-end and UI tests

28. **Only the critical paths.** Sign up, log in, pay, the main thing users come for. Logic and edge cases belong in fast unit tests.
29. **Find elements the way a user does.** By role, label, or visible text, not by CSS classes or DOM structure that change with every redesign.
30. **Wait for what the user would see,** not for timeouts. Use the framework's auto-waiting assertions.
31. **Isolated test data.** Each test creates its own user and records, so tests don't break each other.

## Before you finish

- Do the tests guard something that would hurt if it broke?
- Did you see each new test fail without the fix or the feature?
- Do the assertions check real values?
- Did you leave every existing test as it was, or explain why you changed it?
- Did you run the tests and report the result?
