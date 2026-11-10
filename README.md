# Razor

A plugin for Claude Code and Codex with skills that stop models from writing more than the task needs: extra code, padded docs, filler text.

- `code` keeps changes small and readable: reuse what exists, shallow nesting, full names, grouped imports.
- `review` reviews a change or a whole repository and reports bugs, risks and code that can go. It changes nothing.
- `docs` writes short docs: what it is, a working example, formatting only where it helps.
- `commits` matches the repository's commit style. In a new repository it uses Conventional Commits in English. No co-author lines.
- `writing` removes AI patterns from any text: inflated words, filler, chatbot phrases.

A hook adds a short guide at the start of each session and each subagent, so the model knows which skill to load. The hook needs Node.js.

Install in Claude Code:

```
/plugin marketplace add ultard/razor
/plugin install razor@razor
```

The Codex manifest is in `.codex-plugin`, but Codex support hasn't been tested yet.
