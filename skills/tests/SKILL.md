---
name: tests
description: Use when writing, changing or fixing tests in any language.
---

# Tests

A test proves one behavior works and fails when it breaks. Write the fewest tests that catch real bugs.

## Before you write

- Find the project's test framework, folders, naming and helpers. Write tests the same way.
- Name the behavior to check in one sentence. If you can't, you don't know what to test yet.
- Run the existing tests first, so you know which failures were already there.

## Rules

- **One behavior per test.** The test name says the behavior: `rejects_expired_token`, not `test_token_2`.
- **Test through the public interface.** Call what real callers call. Don't test private functions or check internal state.
- **Mock only the outside world.** Network, clock, randomness, paid services. Use the project's real code and, where it's cheap, a real database or temp files.
- **Edge cases that matter.** Empty, zero, one, the last item, invalid input, the boundary of a limit. Skip combinations that go through the same code.
- **Arrange, act, assert.** Set up, call once, check the result, separated by blank lines. No logic in the test: no loops or `if`s that decide what to assert.
- **Exact assertions.** Check the value, not just that something came back. Check the error type or message, not just that something failed.
- **Independent tests.** No shared state, no order between tests. Each test sets up what it needs.
- **Deterministic.** Fix the clock, seed the randomness. No `sleep` to wait for something; wait for the condition.

## Check before you finish

- Run the new tests and the ones near them. They pass.
- Break the code under test for a moment, or recall the bug the test is for. The test fails. A test that can't fail is deleted.
- Don't change or delete an existing test to make it pass unless the behavior it checks was meant to change. Say so in the reply.
