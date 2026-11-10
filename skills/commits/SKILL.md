---
name: commits
description: Use when writing commits or pull requests.
---

# Commits and pull requests

A commit message and a pull request say what changed and why. The diff already shows how.

## Before you write

- Read the last 20 commits (`git log --oneline -20`) and match their style and language.
- For a pull request, read the template if the repository has one, and a few recent merged pull requests.
- No consistent style, or no commits yet: use Conventional Commits (`feat: ...`, `fix: ...`) in English, without a `BREAKING CHANGE` footer. Mark a breaking change with `!` (`feat!: ...`).

## Commits

- **One change per commit.** Don't mix unrelated files in one commit.
- **Subject.** What changed, up to about 72 characters. No period at the end.
- **Body.** Only when the reason isn't obvious from the subject. Say why, not which files changed.
- **Basic punctuation.** No emojis, no decorative symbols.

## Pull requests

- **Title.** Same style as the commits.
- **Description.** What changed and why, then how it was checked. A small change gets a few sentences without headings.
- **Template.** Fill in the repository's template. Delete sections that don't apply instead of writing "N/A".
- **Links.** Link the issue it closes.

## Never add

- `Co-Authored-By` lines.
- "Generated with" lines or any other mention of an AI tool.
