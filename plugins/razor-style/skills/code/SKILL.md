---
name: code
description: The user's personal code style on top of razor:code. Use together with razor:code whenever you write, edit, or format code. Covers blank lines, the order of imports, line length, nesting depth, and the shape of blocks.
---

# Code style

These rules add to the `razor:code` skill and win over it where they differ. The project's own rules win over both: if the project's `CLAUDE.md`, `AGENTS.md`, linter, or formatter config says otherwise, follow the project.

## Blank lines

Code has a lot of air. Split a function body into groups by purpose and put one blank line between groups.

1. **Group by purpose.** Declarations, checks, loops, writes to state, and the return each form their own group.
2. **Similar lines stay together.** Several `let` or `const` declarations in a row, or several `self.x = ...` assignments in a row, form one group with no blank lines inside it.
3. **A line that finishes the previous one stays with it.** `user.lastSeen = .now` right after `var user = ...` belongs to the same group.
4. **Even one line is its own group** when it does something different from its neighbors, such as a single write to a cache or a single event emit.
5. **Blank line before and after every block statement:** `if`, `guard` with a block, `for`, `while`, `switch`, `do`/`try`, `with`. Skip the blank line when the block is the first or last statement inside its braces.
6. **Blank line before `return`,** unless the `return` is the only statement in its block.
7. **Inside nested blocks the same rules apply,** so a statement before a `for` inside a `with` still gets a blank line.
8. **Blank line between declarations:** between functions, initializers, and nested types, and between stored properties and the first initializer or method. No blank line right after an opening brace or right before a closing one.

```swift
func loadUser(id: UUID) async throws -> User {
    guard let token = session.token else { throw AuthError.missingToken }

    let request = UserRequest(id: id, token: token)
    let response = try await client.send(request)

    if response.status == .notFound {
        throw UserError.notFound(id)
    }

    var user = try decoder.decode(User.self, from: response.body)
    user.lastSeen = .now

    for listener in listeners {
        listener.userDidLoad(user)
    }

    cache[id] = user

    return user
}
```

```python
class ReportExporter:
    def __init__(self, path: Path, columns: list[str]) -> None:
        if not columns:
            raise ValueError("columns is empty")

        self.path = path
        self.columns = columns

    def export(self, rows: list[Row]) -> int:
        if not rows:
            return 0

        header = ";".join(self.columns)
        lines = [format_row(row) for row in rows]

        with self.path.open("w", encoding="utf-8") as file:
            file.write(header + "\n")

            for line in lines:
                file.write(line + "\n")

        logger.info("Exported %d rows to %s", len(rows), self.path)

        return len(rows)
```

## Imports

9. **Group imports by what they're for,** not by alphabet and not by where they come from. Imports for the web server go together, imports for data access go together, file and path utilities go together, logging goes together. One blank line between groups.
10. **The groups the file depends on most come first.** The framework and the main domain modules go at the top, small helpers such as logging go at the bottom.
11. **Inside a group, keep related imports next to each other** in the order that reads naturally, not alphabetically.
12. **Type-only imports stay in their group.** `import type` sits next to the other imports of the same module group, not in a separate block.
13. **Side-effect imports go last.** Imports that only run a module, such as `import './polyfills'` or a CSS file, form the final group.

```ts
import express from 'express';
import { z } from 'zod';

import { db } from '@/lib/db';
import type { Invoice } from './types';
import { toInvoiceLine } from './lines';

import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { logger } from '@/lib/logger';

import './polyfills';
```

```python
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.db import session
from app.models import Invoice
from .lines import to_invoice_line

import json
from pathlib import Path

from app.logging import logger
```

14. **The formatter wins on order it enforces.** If the project runs a tool that sorts imports (isort, Ruff, `goimports`, ESLint import rules, SwiftFormat), keep the order it produces and don't fight it.

## Shape

15. **Lines up to 120 characters,** unless the project sets its own limit. Wrap only lines over the limit.
16. **Three levels of nesting at most** inside a function. Count every level: closures, callbacks, lambdas, `try`, loops, and conditions. Use early returns, guard clauses, and `continue` instead of nested `if`s, and move a deep loop or closure body into a named function. This counts as formatting, so do it even when the task is only to format.
17. **Every case returns.** When code continues after an `if`/`else` chain, so a branch can't end with `return`, move the chain into its own function where every case returns. An `if` inside an `else if` is a sign the block needs its own function.
18. **Compute before the call.** An argument that needs a condition or more than one step goes into a named variable first.
19. **Short blocks stay on one line.** A block with one short statement, such as `guard let token else { return }` or `if (!user) return;`, stays on one line where the language's style allows it. Don't split a line that fits. When a line doesn't fit, shorten it with a named variable before you wrap it.
20. **Expand big literals.** An object, array, call, or type that doesn't fit on one line gets one item per line.

## Check

Before you reply, look through the code you wrote or changed for these four, since they are easy to miss:

- the deepest nesting in each function;
- every number or character code without a name;
- every `else` after a branch that could have ended with `return`, `continue`, or `throw`;
- every short block split over several lines.

Leave a rule broken only when the fix would change behavior, and say which rule and why. "It handles a separate case" is not a reason: a separate case is what an early return or a separate function is for. When the task itself is to format or clean up code, list in the reply what you left for each of the four and why.
