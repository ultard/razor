The razor-style plugin is installed. It adds the user's personal style on top of the Razor skills:

- `razor-style:code`: load it together with `razor:code` whenever you write or edit code.
- `razor-style:web`: load it together with `razor:web` whenever you write or change styles, markup, or UI components for the web.

Order of precedence: the project's own rules (CLAUDE.md, AGENTS.md, linter and formatter config, the styling setup it already uses) come first, then razor-style, then razor.
