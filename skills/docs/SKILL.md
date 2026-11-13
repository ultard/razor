---
name: docs
description: Use when writing or editing a README, guide, API reference, docstring, comment or changelog.
---

# Docs

Documentation helps the reader install, run, call or fix something. Write the least text that gets them there. The writing skill covers sentences; this one covers what goes into a doc and how it looks.

## Before you write

- Name the reader and their task in one sentence. Leave out anything that doesn't serve it.
- Read the code. Every command, flag, default and output in the doc must exist there.
- Run what you can. Don't claim an example works if you didn't run it. If there's nothing to run, check claims against the code.
- Edit existing docs instead of writing a second page on the same topic.

## Content

- **Start with what it is.** One plain sentence, then the shortest working example if there is one. No "Overview" that restates the title.
- **Short descriptions.** Describe an option, function, command or item in one sentence. Put details below, and only if the reader needs them.
- **No feature list.** Show a feature in an example or state it with a number.
- **No empty sections.** No Contributing, Support, Roadmap, FAQ or similar without real content. A license is one line with a link.
- **Don't document the obvious.** Write what the signature doesn't show: units, limits, defaults, side effects, errors.
- **Say it once.** Link instead of repeating. Repeat only a short warning next to a dangerous command.
- **Real examples.** Examples run as written after the stated setup. Mark values the reader must supply and say where to get them.
- **One way to do it.** Show the main install method, not every package manager.
- **No made-up plans.** No "coming soon" or roadmap nobody committed to.
- **Errors and limits.** Say how common failures look and what to do.

## Formatting

Plain paragraphs are the default. Format only to help the reader find or copy something.

- **Headings.** Only in docs longer than a screen, no deeper than the third level, never over one paragraph.
- **Lists.** For steps or separate items to pick from. Connected sentences are prose. One level of nesting at most.
- **Tables.** For three or more items with the same two or more attributes.
- **Code blocks.** For anything the reader copies, with the language set. Inline code for file, function, flag and value names.
- **Callouts.** A warning block only for something that loses data or breaks things. No horizontal lines, no badge walls, no table of contents in a short doc.

## Code comments and docstrings

- Comment why, not what. Write a comment only when the reason isn't visible in the code.
- A docstring states what goes in, what comes out and what it raises.
- No comments about the edit itself ("added this", "fixed bug"). That goes in the commit message.

## Changelogs

Write what changed for the user and what they must do to upgrade. Skip refactors, test changes and typo fixes.

## Check before you finish

- Every command and example was run or matches the code.
- Every section answers something the reader needs.
- No sentence can be deleted without losing information.
