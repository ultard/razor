# Razor

A plugin for Claude Code and Codex with skills that stop models from writing more than the task needs: extra code, padded docs, filler text.

- `code` keeps changes small and readable.
- `tests` writes tests that catch real bugs.
- `debug` finds the cause of a bug before fixing it.
- `review` finds bugs, risks and code that can go.
- `docs` writes short docs.
- `commits` matches the repository's commit style.
- `writing` removes AI patterns from any text.

A hook adds a short guide at the start of each session and each subagent, so the model knows which skill to load. The hook needs Node.js.

Install in Claude Code:

```
/plugin marketplace add ultard/razor
/plugin install razor@razor
```

Install in Codex:

```
codex plugin marketplace add ultard/razor
codex plugin add razor@razor
```

In Codex the skills work, but the hook may not run until you approve it.
