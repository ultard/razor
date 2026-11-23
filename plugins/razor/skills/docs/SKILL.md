---
name: docs
description: What goes into a document and in what order, from READMEs to proposals and meeting notes.
---

# Docs

`razor:writing` covers how to write sentences. This skill covers what goes into a document and in what order. Follow both.

## Before you write

1. **Name the reader and their task.** Who opens this document, and what do they want to do when they close it? Set up their account, follow a process, decide whether to fund a project, find out what happened during an outage, look up a setting. Write for that task and cut what doesn't serve it.
2. **One document, one job.** A guide walks through a task. A reference lists facts for lookup. An explanation says why things are the way they are. A proposal asks for a decision. A report says what happened. Mixing them makes each one harder to use: a reader looking up a setting doesn't want the history of the team that built it. If a document needs two jobs, give each its own section or file.
3. **Check what already exists.** Read the current docs before adding to them. Update the page that covers the topic instead of writing a second one. Each fact lives in one place, and other pages link to it.
4. **Match the place it lives.** Write in the language the existing docs use, and follow their headings, terms, and templates. A wiki, a repository, and a shared doc each have their own conventions. Use the ones already there.

## Content

5. **Describe how things are now.** A guide, reference, or policy describes the current state in the present tense. No "we recently added", "the new process", "was changed to": the reader doesn't know what came before and doesn't need to. History belongs in a changelog or a report, where it is the subject.
6. **Only what you checked.** Every number, date, name, price, setting, step, and command comes from a source you saw: the product, the code, the data, a person who knows. If you couldn't check something, say so or leave it out. Don't fill gaps with what sounds likely.
7. **Exact names.** Copy button labels, menu paths, file names, field names, commands, and error messages exactly as the reader will see them: "Settings > Billing > Invoices", not "the billing section". The reader will look for the exact text on screen or search for it.
8. **Steps the reader can follow as written.** No skipped steps, no "configure it as needed" without saying how. A command block runs when pasted. A placeholder says what to put in it. After a step with a visible result, say what the reader should see.
9. **Real examples.** A short real example beats a paragraph about what is possible: a filled-in form, a sample request, an actual email from the process. Use realistic values when the meaning of the value matters.
10. **Absolute dates and named owners.** "By 14 March", not "next week". "Anna Petrova owns the vendor contract", not "the team handles it". Relative dates and vague owners go wrong the day after the document is written.
11. **Link instead of copying.** If another page, the tool's own docs, or a policy already explains something, link to it. Copies go stale.
12. **No filler sections.** No "Introduction" that repeats the title, no "Overview" that lists the headings below it, no "Conclusion", no list of adjectives ("fast", "flexible", "powerful"). If a section would be empty without filler, delete it.
13. **Screenshots only where words can't do it.** A screenshot helps when the reader must find something on a crowded screen. It goes stale with every interface change and can't be searched, so the text around it still names the labels.
14. **Update the docs when the thing changes.** When a product, process, or code changes, find the pages that describe it and fix them in the same change. Search for the old name to find every mention.

## Structure

15. **The point first.** The first paragraph says what the document is for and its main content: the answer, the ask, the result. A reader who stops there should still have what they need most.
16. **Most needed first.** Order sections by how many readers need them. Setup and the basic case come before options; options come before internals and edge cases.
17. **Headings the reader would look for.** A heading names a task or a thing: "Request access", "Refund policy", "Configure the cache". Not "Getting started with the power of X". A reader who only reads the headings should know what's on the page.
18. **Short pages are fine.** A page is as long as its job. Don't pad a page to look complete, and don't split a short topic across several pages.

## By document type

### README

19. **Order:** what the project is, in one or two concrete sentences; how to install it; the smallest example that does something useful; then configuration, details, and links to further docs.
20. **The first sentence says what it does,** in terms of what the reader gets: "Razor is a set of Claude Code plugins with skills for writing, code review, and debugging." Not "Razor is a powerful, flexible toolkit".
21. **No decoration.** No walls of badges, no emoji headings, no marketing. A license or contributing section only if it says something specific to this project.

### Guides, how-tos, runbooks

22. **State what the reader needs before step one:** access, accounts, tools, files, approvals, how long it takes.
23. **Numbered steps, one action each.** Say who does a step when it isn't the reader: "Ask IT to add you to the `finance-ro` group".
24. **Say how to know it worked** at the end: what the reader should see, receive, or be able to do.
25. **Troubleshooting only for problems that happen.** List real problems with the exact message or symptom and the fix. Don't invent problems to make the section look full.
26. **A runbook is read under stress.** Put the first thing to check at the top, keep each step to one action, and say who to call when the steps don't help.

### Reference

27. **Every entry has the same shape.** For a setting: name, allowed values, default, what it does, an example if the meaning isn't obvious. For a role or a term: name, definition, who it applies to. Tables work well when entries share fields.
28. **Complete or clearly partial.** A list that covers most items looks like it covers all of them. List all, or say what is missing and where to find it.
29. **No narrative.** Reference is for lookup. Put the reasoning in an explanation and link to it.

### Proposals and design docs

30. **The ask in the first paragraph:** what you propose, what it costs, and who has to decide by when.
31. **The problem before the solution.** Describe the problem with facts the reader can check: numbers, examples, complaints. If the reader doesn't agree there is a problem, the solution doesn't matter.
32. **Real options.** Include the options you rejected, doing nothing among them, with the reason for each. Don't add weak options to make the chosen one look good.
33. **Costs and risks stated plainly:** money, time, people, what gets worse, what could go wrong. Say what is still unknown and how you'll find out.
34. **Mark what is decided and what is open.** A reader should see at a glance which parts they are asked to approve and which are still up for discussion.

### Decision records

35. **Context, decision, consequences.** What forced the choice, what was chosen, what it makes easier and harder. Name who decided and the date.
36. **Don't rewrite old decisions.** When a decision changes, write a new record and link the two. The old record stays as it was, so the reasoning at the time can still be read.

### Reports and postmortems

37. **The result first:** what happened, the impact in numbers, and whether it is over. "Checkout was down for 42 minutes on 3 May; about 1,900 orders failed."
38. **A timeline with absolute times** and the time zone, from the first sign to the fix.
39. **Causes, not culprits.** Describe what the process or system allowed to happen, not who made a mistake. People hide facts from reports that look for someone to blame.
40. **Actions with owners and dates.** Each follow-up names one person and a date. "We'll improve monitoring" is not an action.

### Meeting notes

41. **Decisions and action items at the top.** Each action names one owner and a due date. The discussion goes below, short, and only where the reasoning will matter later.
42. **Not a transcript.** Record what was decided and why, and the open questions. Skip who said what, unless it matters who agreed.

## Text for agents

This covers CLAUDE.md, AGENTS.md, SKILL.md files, rules, and prompts. The reader is a model. It knows nothing beyond what it reads, follows what it reads closely, and pays for every line in every session.

43. **What the agent needs and wouldn't look for.** If the agent can read the source, such as code, a folder, or a linked file, don't restate it. Write what the source doesn't show: which conventions the team follows, what to avoid and why, where things are when it isn't obvious. Do list the commands that check a change (test, lint, build), even if config files have them: the agent needs them at the moment it finishes, not when it explores. Keep every rule that stops the agent from breaking something.
44. **Instructions, with the reason.** "Run `pnpm test:unit`, not `pnpm test`: the full suite needs a database." The reason lets the agent handle cases the rule didn't name.
45. **Concrete, not general.** Commands, paths, names, examples. "Write clean code" and "follow best practices" change nothing, because the agent already believes it does that.
46. **Say what to do, not only what not to do.** "Don't use `any`" leaves the agent guessing. "Use `unknown` and narrow it, instead of `any`" tells it what to write.
47. **No shouting.** CAPS, "IMPORTANT", "CRITICAL", "MUST" on every rule make the agent overreact to all of them and lose track of which one matters. Write rules in plain sentences. If one rule really is more important than the rest, say that once.
48. **One rule, one place.** Don't repeat a rule in several sections in different words. If two rules can conflict, say which one wins.
49. **Examples are copied closely.** The agent will reproduce an example's length, format, and wording. Make each example the thing you want, and use more than one when you want variety.
50. **A SKILL.md description says what and when.** The description is the only part the agent sees before it decides to load the skill. Say what the skill does and list the situations and words that should trigger it.
51. **Keep the main file short.** Put long reference material in separate files and say in the main file when to read each one.
52. **Test it on an agent.** Give an agent a real task with the text loaded and read what it does. Fix the text where the agent misread it, not where you guess it might.

## Before you finish

- Can the reader you named do their task with this document alone, or with the links it gives?
- Did you check every number, name, date, step, and command you wrote?
- Are labels, paths, and messages exact?
- Is the main point in the first paragraph?
- Does every action have one owner and an absolute date?
- Is there history wording ("now", "new", "added", "changed") in a document about the current state?
- Did you update or remove other pages that this change made wrong?
