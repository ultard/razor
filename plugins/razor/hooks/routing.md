The Razor plugin also has skills for specific kinds of work. Load the matching one before you start that work:

- `razor:code`: before you write, edit, or refactor code, or when the user asks to clean up AI slop in code.
- `razor:web`: together with `razor:code` when you write or change markup, UI components, or CSS for the web.
- `razor:tests`: when you add behavior or fix a bug in a project that has tests, and when you write or fix tests.
- `razor:debug`: when something fails, crashes, or returns a wrong result and the cause isn't known yet.
- `razor:commits`: before you commit, create a branch, or write a PR title or description.
- `razor:review`: when the user asks for a review, before you hand over your own finished change, and when you work through review comments.
- `razor:docs`: before you write or update a README, guides, reference docs, code comments, or text for agents such as CLAUDE.md, AGENTS.md, and SKILL.md files.

Several skills can apply to one task: fixing a bug usually needs debug, code, and tests.
