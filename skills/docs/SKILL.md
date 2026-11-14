---
name: docs
description: Use when writing or editing a README, guide, API reference, docstring, comment or changelog.
---

# Docs

A doc exists for a reader who has to do something: install, run, call, fix or decide. A sentence that doesn't help them do it is deleted, even when it is true. The writing skill covers sentences; this one covers what goes into a doc, where each fact belongs and how the page looks.

## What to write

- **Write only what was asked.** A request for a README is one README. Don't add guides, architecture pages or a docs folder nobody asked for. A code task produces no new docs; it only fixes the docs the change made wrong.
- **Name the reader and their task first.** One sentence, such as "someone who wants to link this library into their app". If you can't name the task, there is nothing to write.
- **Test each sentence.** Ask what the reader does differently after reading it. If the answer is nothing, delete it.
- **Document what exists.** No target state, no plans, no "not wired up yet", no "draft". If only part works, describe that part.
- **Don't retell the code.** A list of modules, types or files with a phrase next to each repeats what the reader sees in the tree and goes stale on the next rename. Write what the code can't show: what it is for, how to start, what breaks.
- **Start with what it is.** One sentence a newcomer understands. The rest follows the order in which the reader needs it.
- **No empty sections.** No Contributing, Support, Roadmap or FAQ without real content. A license is one line with a link.
- **One way to do it.** Show the main install method, not every package manager.
- **Say it once.** Link instead of repeating. Edit an existing page instead of writing a second one on the same topic.

## Where each fact goes

Most unwanted text is a true fact in the wrong place. Move it or drop it.

| Fact | Place |
|---|---|
| What the project is, how to run it, where to read more | README |
| How one function or type behaves, its limits and errors | Docstring |
| Why a line is written this way | Comment at that line |
| Why a change was made | Commit message |
| Edge cases and invariants | Tests |
| What is done, unfinished or planned | Issue tracker |

A README doesn't describe the API. It links to it.

## Size

- A package README fits on one screen. A project README fits on two. A guide covers one task.
- When a draft is over the limit, remove facts. Don't pack the same facts into fewer words.
- A reader who has never opened the code must understand the first paragraph. Explain a term where it first appears, or don't use it.
- A paragraph has up to three sentences about one thing. A paragraph of unrelated facts is reference material, and it goes to the docstrings.

## Before you write

- Read the code. Every command, flag, default and output in the doc must exist there.
- Run what you can. Don't claim a command works if you didn't run it.

## Code examples

Default to prose. Include a code example only when the user asks for one or the reader can't complete the task without it. Keep it to the smallest one that runs as written. Mark values the reader must supply and say where to get them.

## Formatting

Format to help the reader find or copy something.

- **Headings.** For parts the reader jumps between. No deeper than the third level, never over a single sentence.
- **Lists.** For steps or separate items. Connected sentences are prose. One level of nesting at most.
- **Tables.** For three or more items with the same attributes. A cell holds a word or a phrase. If the cells need sentences, write a list.
- **Code blocks.** For anything the reader copies, with the language set. Inline code for file, function, flag and value names.
- **Callouts.** A warning block only for something that loses data or breaks things. No horizontal lines, no badge walls, no table of contents in a short doc.

## Code comments and docstrings

- Comment why, not what. Write a comment only when the reason isn't visible in the code.
- A docstring states what goes in, what comes out and what it raises. Add what the signature doesn't show: units, limits, defaults, side effects.
- No comments about the edit itself ("added this", "fixed bug"). That goes in the commit message.

## Changelogs

Write what changed for the user and what they must do to upgrade. Skip refactors, test changes and typo fixes.

## Check before you finish

- Reread the doc as the reader you named. Delete every paragraph they would skip.
- The doc is within its size limit.
- Nothing describes status, plans or history.
- Every command was run or matches the code.
