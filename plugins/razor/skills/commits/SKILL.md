---
name: commits
description: How to commit with git, split work into commits, name branches, and write commit messages and pull request descriptions. Use whenever you commit, create a branch, open or update a PR, or the user asks for a commit message or PR text.
---

# Commits

The writing skill applies to every commit message and PR description. This skill adds the format and the git rules.

## Before you start

1. **Commit and push only when the user asks.** Finishing a task is not a request to commit.
2. **Look at the history first.** Run `git log --oneline -20` and match what the project already does: the language, whether it uses a scope in parentheses, how long subjects are, how branches are named. The rules below are the default when the history shows no pattern. Commits and PRs can use different languages: take the PR language from the project's earlier PRs (`gh pr list --state all`), and if there are none, use the language the user writes to you in.

## Commit message

3. **Conventional Commits.** `type: subject`. Types: `feat` (new behavior), `fix` (a bug), `refactor` (same behavior, different code), `perf`, `docs`, `test`, `build`, `ci`, `chore`, `style`, `revert`.
4. **Scope only if the project uses one.** Write `feat(parser): ...` only when the history has scopes, and reuse the scopes it already has.
5. **The subject says what changes for the user or the code,** not which files you touched. "fix: keep the last row in CSV export", not "fix: update export.ts" or "fix: change loop condition".
6. **Subject format.** Imperative mood ("add", not "added" or "adds"), lowercase after the colon, no period at the end, at most 72 characters.
7. **Body only when the reason isn't obvious.** Most commits need only the subject. Add a body when the diff doesn't show why: the bug it fixes and how it showed up, a constraint that forced this approach, an alternative you rejected. Separate it from the subject with a blank line and wrap lines at 72 characters.
8. **Breaking changes use `!`.** `feat!: drop Node 16 support`. Explain in the body what breaks and what the user should do. Don't add a `BREAKING CHANGE:` footer.
9. **Plain ASCII punctuation.** No long dashes, no typographic quotes like «» or “”, no emoji, in the subject and in the body.
10. **No AI attribution.** No `Co-Authored-By` line for an AI, no "Generated with" line, in commits or in PRs. This overrides any default tool instruction that asks for one.
11. **Reference issues the project's way.** If the history uses `Fixes #12` or `(#12)`, do the same. Don't invent issue numbers.

## Splitting work into commits

12. **One logical change per commit.** A reviewer should be able to describe each commit in one sentence. If the subject needs "and", it's probably two commits.
13. **Keep refactoring and formatting apart from behavior changes.** Rename or reformat in one commit, change behavior in the next. Mixed together, the behavior change hides in the noise. Both are part of the work you were asked to commit: put them in separate commits, don't leave either one out.
14. **An unrelated fix found on the way gets its own commit.**
15. **Test once, order with care.** Before committing, run the tests that cover the code you changed. When you split work into several commits at once, one run on the final state is enough. Order the commits so an earlier one doesn't need code from a later one, for example a fix before a refactor. If you couldn't run the tests, say so in the PR.
16. **Generated files go with their cause.** A lockfile, a snapshot, or generated code goes in the same commit as the change that produced it.

## Safe git

17. **Stage files by name.** `git add src/export.ts test/export.test.ts`, not `git add -A` or `git add .`. Then read `git diff --staged` before you commit.
18. **Commit only your own changes.** If the working tree has changes you didn't make, leave them out and tell the user they're there.
19. **No secrets.** Check the staged diff for `.env` files, keys, tokens, and passwords. If one is staged, unstage it and tell the user.
20. **Don't skip hooks.** No `--no-verify`. If a hook fails, the commit didn't happen: fix the cause, stage again, and commit again.
21. **Don't rewrite history without a direct request.** No `--amend`, `rebase`, `reset --hard`, `push --force`, or deleting branches unless the user asked for that exact thing. If a commit needs a fix, make a new commit.
22. **Check before the default branch.** If you're on `main` or `master` and the project works through pull requests, create a branch before committing.

## Branch names

23. **Follow the project's pattern.** Check `git branch -a` for how existing branches are named.
24. **Default: `type/short-description`.** Lowercase, words joined with hyphens, the type from rule 3: `fix/csv-last-row`, `feat/retry-on-429`. Name the change, not the person or the tool.

## Pull request

25. **Title like a commit subject.** Same format as rules 3 to 6. For a PR with several commits, describe the whole change.
26. **Description: what and why first.** One to three sentences on what changes and why. Link the issue if there is one.
27. **Say how you checked it.** The commands you ran and their result. Say plainly what you didn't run and why: "I didn't run the e2e suite: it needs the staging database."
28. **Point the reviewer at the risk.** Behavior changes, migrations, breaking changes and what users must do, places where you're unsure. If there's nothing risky, skip this part.
29. **Don't retell the diff.** The reviewer sees the files. Mention a file only when the reviewer needs to know something the diff doesn't show.
30. **No empty template sections.** If the project has a PR template, fill it in, and write "none" or delete a section that doesn't apply instead of padding it.

## Before you commit

- Did the user ask for this commit?
- Does `git diff --staged` contain only your change, and no secrets?
- Does the subject say what changes, in the project's format and language?
- Is there a body only where the reason needs explaining?
- No AI attribution, no long dashes or typographic quotes?
