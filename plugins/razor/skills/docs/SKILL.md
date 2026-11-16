---
name: docs
description: What to put in documentation and how to structure it. Use when writing or updating a README, a guide, reference docs, code comments and docstrings, or text for agents such as CLAUDE.md, AGENTS.md, SKILL.md files, and prompts.
---

# Docs

The writing skill covers how to write sentences. This skill covers what goes into a document and in what order. Follow both.

## Before you write

1. **Name the reader and their task.** Who opens this document, and what do they want to do when they close it? Install the tool, look up a flag, understand why the cache exists, fix a failing build. Write for that task and cut what doesn't serve it.
2. **One document, one job.** A reference lists facts. A guide walks through a task. An explanation says why things are the way they are. Mixing them makes each one harder to use: a reader looking up a flag doesn't want the history of the config format. If a document needs two jobs, give each its own section or file.
3. **Check what already exists.** Read the current docs before adding to them. Update the page that covers the topic instead of writing a second one. Each fact lives in one place, and other pages link to it.
4. **Use the project's language and style.** Write docs in the language the project's docs already use, and match its heading style, list style, and terms.

## Content

5. **Describe how it works now.** Present tense, current behavior. No history: "we added", "now supports", "was changed to", "the new parser". The reader doesn't know what came before and doesn't need to. History belongs in commits and the changelog.
6. **Only what you checked.** Every command, flag, path, option, and default must come from the code or from running it. Don't write a flag you think exists. If you couldn't verify something, say so or leave it out.
7. **Exact names.** Copy identifiers, commands, file paths, env vars, versions, and error messages exactly, in code formatting. Don't paraphrase an error message; the reader will search for the exact text.
8. **Commands the reader can copy.** Each command block runs as written: no placeholders without saying what to put there, no `$` prompts mixed into lines the reader will paste, no missing steps between blocks. Show the expected output when it helps the reader confirm the step worked.
9. **Real examples.** A short example that runs beats a paragraph about what is possible. Use realistic values, not `foo` and `bar`, when the meaning of the value matters.
10. **Link instead of copying.** If another doc, the tool's own docs, or the code already explains something, link to it. Copies go stale.
11. **No filler sections.** No "Introduction" that repeats the title, no "Overview" that lists the headings below it, no "Conclusion", no "Features" list of adjectives ("fast", "flexible", "powerful"). If a section would be empty without filler, delete it.
12. **Update docs in the same change as the code.** When you change behavior, find the docs and comments that describe it and fix them. Search for the old name or flag to find every mention.

## Structure

13. **Most needed first.** Order sections by how many readers need them. Installation and the basic example come before configuration; configuration comes before internals.
14. **Headings the reader would look for.** A heading names a task or a thing: "Install", "Configure the cache", "`--dry-run`". Not "Getting started with the power of X".
15. **Short pages are fine.** A page is as long as its job. Don't pad a page to look complete, and don't split a short topic across several pages.

## README

16. **Order:** what the project is, in one or two concrete sentences; how to install it; the smallest example that does something useful; then configuration, details, and links to further docs.
17. **The first sentence says what it does,** in terms of what the reader gets: "Razor is a Claude Code plugin with skills for writing, code review, and debugging." Not "Razor is a powerful, flexible toolkit".
18. **No decoration.** No walls of badges, no emoji headings, no marketing. A license or contributing section only if it says something specific to this project.

## Guides

19. **State what the reader needs before step one:** versions, accounts, access, files.
20. **Numbered steps, one action each.** If a step has a result the reader should see, say what it looks like.
21. **Say how to know it worked** at the end: a command to run, a page to open, the output to expect.
22. **Troubleshooting only for errors that happen.** List real errors with their exact text and the fix. Don't invent problems to make the section look full.

## Reference

23. **Every entry has the same shape.** For an option: name, type, default, what it does, an example if the meaning isn't obvious. Tables work well when entries share fields.
24. **Complete or clearly partial.** A reference that lists most options looks like it lists all of them. List all, or say what is missing and where to find it.
25. **No narrative.** Reference is for lookup. Put the reasoning in an explanation section and link to it.

## Code comments

26. **No comment by default.** Good names and simple code say what the code does. Before you write a comment that explains what code does, try a clearer name or a smaller function.
27. **Comment the why.** Write a comment when the reader can't get the reason from the code: a constraint from outside ("the API returns at most 100 items"), a workaround with a link to the issue, an order that matters, a value chosen on purpose, behavior that looks wrong but isn't.
28. **No comments that repeat the code.** `// increment i`, `// loop over users`, `// constructor`. Delete them.
29. **No change notes in comments.** "// fixed bug", "// added for ticket 123", "// new version", "// changed from X". The comment describes the code as it is; git describes how it changed.
30. **No commented-out code.** Delete it. Git keeps it.
31. **TODO says what and why.** `// TODO: retry on 429 once the client supports backoff` is useful. `// TODO: fix` is not.
32. **Docstrings for public functions and types:** what it does, what each parameter means when the name and type don't make it clear, what it returns, what it throws, and side effects. Don't repeat the types the signature already shows.
33. **Keep comments true.** When you change code, read the comments around it and update or delete the ones that no longer match. A wrong comment is worse than none.
34. **Match the file.** Follow the comment style, language, and docstring format already used in the file and the project.

## Text for agents

This covers CLAUDE.md, AGENTS.md, SKILL.md files, rules, and prompts. The reader is a model. It knows nothing about the project beyond what it reads, follows what it reads closely, and pays for every line in every session.

35. **What the agent needs and wouldn't look for.** The agent can read the code, so don't describe the folder tree or restate `package.json`. Write what the code doesn't show: which conventions the team follows, what to avoid and why, where things are when the layout isn't obvious. Do list the commands that check a change (test, lint, build), even if `package.json` has them: the agent needs them at the moment it finishes, not when it explores. Keep every rule that stops the agent from breaking something, even if a code comment says the same.
36. **Instructions, with the reason.** "Run `pnpm test:unit`, not `pnpm test`: the full suite needs a database." The reason lets the agent handle cases the rule didn't name.
37. **Concrete, not general.** Commands, paths, names, examples. "Write clean code" and "follow best practices" change nothing, because the agent already believes it does that.
38. **Say what to do, not only what not to do.** "Don't use `any`" leaves the agent guessing. "Use `unknown` and narrow it, instead of `any`" tells it what to write.
39. **No shouting.** CAPS, "IMPORTANT", "CRITICAL", "MUST" on every rule make the agent overreact to all of them and lose track of which one matters. Write rules in plain sentences. If one rule really is more important than the rest, say that once.
40. **One rule, one place.** Don't repeat a rule in several sections in different words. If two rules can conflict, say which one wins.
41. **Examples are copied closely.** The agent will reproduce an example's length, format, and wording. Make each example the thing you want, and use more than one when you want variety.
42. **A SKILL.md description says what and when.** The description is the only part the agent sees before it decides to load the skill. Say what the skill does and list the situations and words that should trigger it.
43. **Keep the main file short.** Put long reference material in separate files and say in the main file when to read each one.
44. **Test it on an agent.** Give an agent a real task with the text loaded and read what it does. Fix the text where the agent misread it, not where you guess it might.

## Before you finish

- Did you run or check every command, flag, and default you wrote?
- Are names, paths, and error messages exact?
- Is there any history wording ("now", "new", "added", "changed")?
- Does every section help the reader with the task you named at the start?
- Did you update or remove docs and comments that the change made wrong?
