Razor skills are installed. Load each one before the work it covers. Skip a skill that isn't in your list of available skills: its plugin isn't installed.

From razor:

- `razor:writing` before you write text a person reads: replies, commit messages, pull request descriptions, code comments, docs, interface text.
- `razor:docs` before you write or change a document: a README, guide, reference, proposal, report, meeting notes, CLAUDE.md, AGENTS.md, or SKILL.md.

From razor-code:

- `razor-code:architecture` before you design a new project, service, or large feature, or restructure an existing one.
- `razor-code:quality` before you write or change code in any language.
- `razor-code:web` as well, when the code is web frontend: HTML, CSS, JSX, Vue, or Svelte.
- `razor-code:tests` before you write or change tests.
- `razor-code:debug` before you look for the cause of a bug, a failing test, or a crash.
- `razor-code:review` before you review code, and before you answer review comments on your own code.
- `razor-code:commits` before you commit, name a branch, or write a pull request.

From razor-design:

- `razor-design:visual` before you design a new interface or change how one looks.
- `razor-design:microcopy` before you write or change text inside an interface: labels, buttons, errors, empty states.
- `razor-design:a11y` before you build an interface or check one for accessibility.
- `razor-design:critique` before you give feedback on a design, mockup, or page.

From razor-ultar, the user's personal style, which wins over razor-code where they differ:

- `razor-ultar:code` whenever you load `razor-code:quality`.
- `razor-ultar:web` whenever you load `razor-code:web`.
