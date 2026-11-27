---
name: architecture
description: Designing the structure of a new project, service, or large feature before writing it: the parts, their boundaries, the data model, and technology choices. Also for restructuring an existing system.
---

# Architecture

Designing a project means deciding what the parts are, what each one owns, how data moves between them, and how they behave when something fails. Spend most of the thought on decisions that are expensive to change later, and settle the rest in code. `razor-code:quality` covers how to write each change once the design is set.

## Before you design

1. **Start from requirements with numbers.** Who uses it, what they do, how much data there is, how many requests per second, which response times matter, what data must never be lost. Ask when an unknown would change the design. Don't design for load or features nobody asked for: "might reach a million users" is not a requirement.
2. **Read the existing system first.** In an existing project, the new part follows the project's layout, libraries, and its way of handling config, errors, and data access. A second way of doing the same thing costs every future reader.
3. **Find the decisions that are hard to undo.** The data model and storage, public APIs and file or message formats, the language and framework, the boundaries between services, the auth model. These get the thought and the user's approval. Folder names and internal function signatures are cheap to change later, so don't deliberate over them.

## Design the whole product

4. **Design the finished product, not a first version.** The design covers everything the requirements ask for, and each part is the one you'd keep. No "MVP", "v1", "for now", "a temporary solution", or "we can redo this later", unless the user asked to deliver in stages. A shortcut in the design stays in the product, because the code built on it makes it hard to replace.
5. **Don't choose by how long it takes to build.** You write the code, so "this would take a team weeks" or "too complex to implement" is not a reason to pick a weaker option. Choose by what the result is like: correct, reliable, easy to change, cheap to run. Don't estimate the work in developer days, and don't offer a simpler option only because it's less work.
6. **Simple means fewer parts in the result, not less effort.** The rules below about the simplest structure and about leaving things out are about what the product needs. When the right design needs more code, write more code.

## Shape of the system

7. **Start with the simplest structure that works.** One deployable app, one database, one module per area of the domain. Split into separate services only for a reason you can name: parts that scale differently, a different team or release schedule, a security boundary. A network call between services is slower than a function call, can fail, and needs its own deploy, logs, and versioning.
8. **Group code by domain, not by technical layer.** `billing/`, `invoices/`, `auth/`, each with its own handlers, logic, and storage, instead of `controllers/`, `services/`, `models/` with every feature spread across all three. A change to invoices then touches one folder. If the project already uses another layout, follow it.
9. **Dependencies point one way.** Domain logic doesn't import the web framework, the ORM's session, or the HTTP client. Code at the edges (request handlers, CLI, queue consumers) calls into the core, and the core calls storage and other services through functions it owns. No import cycles between modules. A quick check: can you test the business rules without starting a server or a database?
10. **Each module exposes a small interface and hides the rest.** Other modules call its exported functions. They don't read its tables, its internal types, or its files directly. Design the interface from how callers will use it, not from how the module stores things.
11. **Put each rule in one place.** If "an invoice can't be edited after it's sent" is checked in the handler, the UI, and a background job, the three will drift apart. Put it in the module that owns invoices, and have the others call it.

## Data

12. **Design the data model first.** Tables or collections, keys, relations, what's required, what's unique. Code can be rewritten in a day. Data in production needs a migration, and every client that reads it must keep working.
13. **Make invalid states impossible to store.** Use `NOT NULL`, `UNIQUE`, foreign keys, and `CHECK` constraints. Use one `status` field with defined values instead of three booleans that can contradict each other. A constraint in the database holds for every code path, including the ones written next year.
14. **One source of truth for each fact.** A counter, a cache, a search index, or a copied field is derived data. Name the code that updates it, and make it possible to rebuild it from the source.
15. **Plan for the data to change.** Use migrations from the first table. Put a version in formats that are stored or sent between systems. Use IDs that don't encode meaning: a username or email as a primary key turns a rename into a migration.

## Failures and concurrency

16. **Decide what happens when each outside call fails.** For every call to another service, a database, or a file system: the timeout, whether to retry and how many times, and what the user sees. A call without a timeout can hang a whole worker pool.
17. **Make retried operations safe.** An operation that may run twice, such as a payment, a webhook, or a queue message, needs an idempotency key or a unique constraint, so the second run does nothing.
18. **Keep things that must happen together in one transaction.** When they can't be, such as a database write and an email, write the event to the database in the same transaction and send it from there with a retrying worker. Don't call the outside service in the middle of a transaction.
19. **Say what happens when two requests do the same thing at once.** Two users book the last seat, or one user double-clicks "Pay". Name the answer in the design: a unique constraint, a row lock, a version column, a single queue consumer.

## Technology

20. **Prefer tools the project and team already use.** A new database, queue, or framework needs a requirement the current stack can't meet. PostgreSQL alone covers a job queue (`SELECT ... FOR UPDATE SKIP LOCKED`), full-text search, and JSON documents for many projects before a separate system is needed.
21. **Check a new dependency before you build on it.** The license, the date of the last release, open issues about the feature you need, and how hard it would be to replace. The more of the design depends on it, the more this matters.

## Building it

22. **Build one thin path end to end first.** One real request through every layer to storage and back, deployed or at least run the way it will run. It finds integration problems while the design is still cheap to change. This is the order of the work, not a cut-down product: the rest is built on the same path until the design is complete.
23. **Leave out what the requirements don't need, but don't block what's next.** No plugin system, no abstraction over a second database nobody plans to use. If the next step is known, such as a second currency or a second tenant, check that the design doesn't turn it into a rewrite, and stop there.

## Writing the design down

24. **Write the design before the code when it spans many files or needs approval.** Include the requirements, the parts and what each owns, the data model, the path of one main request through the system, the decisions with the options you rejected, the risks, and the open questions. Follow `razor:docs` for proposals and decision records. For a change that fits in one pull request, a short plan in your reply is enough.
25. **Show the hard-to-undo decisions to the user before you commit to them.** State each one, the alternative, and what it costs to change later. Ask when the choice depends on something only the user knows, such as budget, team skills, or plans for the product.
26. **Record decisions where the project keeps them.** If the project has decision records, an `ARCHITECTURE.md`, or a `docs/` folder, add to it. Otherwise put the reasons in the pull request description.

## Changing an existing design

27. **Change in steps that each keep the system working.** Add the new path next to the old one, move callers over one by one, then delete the old path. A rewrite that replaces everything at once stays broken until it's finished.
28. **When the current design fights a feature, say so.** Propose the restructuring as its own change before the feature, instead of forcing the feature into a structure that doesn't fit it.

## Before you finish

- Are the requirements written with numbers, and does every part of the design serve one of them?
- Does the design cover the whole product, with no part marked as temporary or "for v1"?
- Did you reject any option only because it takes more work to build?
- Which decisions are hard to undo, and did the user see them?
- Does each fact and each rule live in one place?
- Do dependencies between modules point one way, with no cycles?
- For each outside call: timeout, retry, and what the user sees?
- What happens when the same operation runs twice, or two requests run at once?
- Does every new service, database, or dependency have a reason the current stack can't meet?
