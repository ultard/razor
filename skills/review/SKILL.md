---
name: review
description: Use when asked to review or audit code, a diff, a pull request or a repository.
---

# Review

Review like the developer who gets paged when it breaks. Order of importance: correct, safe, holds under load, tested, fast, lean. This is a report the user asked for, so give it in full. Don't change any code.

## What to review

Review what the user names. Nothing named: the uncommitted changes, or the last commit if there are none. "Audit", "the whole repo" or a folder means a repository review.

**A change.** Read the diff, then the code it touches: callers of every changed function, the functions it calls, the tests. When a signature, return value or behavior changes, grep every caller.

**A repository or folder.** Read the README, build and deploy config, dependencies, entry points (main, routes, handlers, jobs, CLI commands) and tests. In a big repository go deep where a mistake costs the most: user input, money, auth, data writes, background jobs, shared state. Say which parts you didn't read.

In both cases trace the real flow: where data comes in, what is stored, what goes out. Find the expected load in the repository: one person running a script, or many users at once. Judge scale against it and say which load you assumed.

## Look for

- **Bug.** Wrong result, crash, missed edge case (empty, zero, last item, rounding, time zones), a broken caller, the same rule applied differently in two places, a fix in one caller while the shared function stays broken.
- **Risk.** Security holes (injection, weak randomness, secrets in code, unchecked user input) and data loss (swallowed errors, writes in the wrong order, no transaction).
- **Scale.** Fine for one user, wrong for many: check-then-write races, the same work done by every process, memory that only grows, a query per item, O(n^2) on big input.
- **Missing test.** Risky logic (a branch, a parser, money, security, data writes, a bug fix) with no test that fails when it breaks. One good test, not coverage.
- **Speed.** Big slowdowns are problems. Small wins are suggestions.
- **Formatting.** Code that breaks the code skill's formatting rules (nested ternaries, deep nesting, unnamed big conditions) when the project's linter doesn't catch it. Goes under Nice to have.
- **Lean.** Dead code, unused options and config, speculative features. A helper the repository already has. What the standard library or platform already does, or a dependency for a few lines. An interface with one implementation, a wrapper that only passes calls through. Near-copies that must change together. A function doing several unrelated jobs: split by job, never by line count.

## Check before you report

- Every finding needs a concrete case: this input or situation leads to this wrong result. No case, no finding.
- Re-read the lines. Confirm the caller exists, the value can be empty, the code is unused. Before calling code unused, grep the whole tree, including tests, config and string references.
- A `shortcut:` comment that names its limit is a decision, not a finding, unless the expected load already crosses that limit.
- Propose the smallest fix that works. Prefer fixes that delete code.
- No style taste, no "consider", no vague worries.

## Output

Write in the user's language, in short sentences and everyday words. Explain a technical term the first time you use it.

Start with what the change or repository does, in two or three sentences. For a repository, add the load you assumed.

Then the findings in three groups, skipping empty ones:

- **Must fix.** Bug, security, data loss, breaks at the expected load.
- **Should fix.** Risky code without a test, real slowness, duplication, code that shouldn't exist.
- **Nice to have.** Small speed-ups, shorter forms.

Number findings across all groups so the user can say "fix 2 and 5". For a repository, give at most 20 and say how many smaller ones you left out. Each finding has four parts of one or two sentences:

```
2. Orders land on the wrong day (billing/close_day.py:40-52)
   What this is: at midnight this job bills all orders of the day.
   Problem: it takes "today" from the server clock in UTC, so an order at 00:30 in Berlin goes to the day before.
   Fix: datetime.now(ZoneInfo("Europe/Berlin")).date(). One line.
   If we skip it: late orders get the wrong date and accounting fixes them by hand.
```

End with:

- **Verdict.** For a change: ship, or which findings to fix first. For a repository: healthy, or what to fix first.
- **Lean.** How many lines and dependencies can go, if there are lean findings.
- **Not checked.** What mattered and you couldn't read or run.

Nothing found: what it does, then "Looks good" and one line on what you checked.
