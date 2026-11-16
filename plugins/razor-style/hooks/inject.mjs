// Adds the razor-style guide to a session or subagent.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function readEvent() {
  try {
    return JSON.parse(readFileSync(0, 'utf8')).hook_event_name ?? 'SessionStart';
  } catch {
    return 'SessionStart';
  }
}

const context = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'routing.md'), 'utf8').trim();

process.stdout.write(
  JSON.stringify({ hookSpecificOutput: { hookEventName: readEvent(), additionalContext: context } }),
);
