// Adds Razor's always-on context to a session or subagent.
// Usage: node inject.mjs writing|routing
// Each part is printed by its own hook call, because the host caps every hook's context at 10,000 characters.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const LIMIT = 10_000;
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function readEvent() {
  try {
    return JSON.parse(readFileSync(0, 'utf8')).hook_event_name ?? 'SessionStart';
  } catch {
    return 'SessionStart';
  }
}

function withoutFrontmatter(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();
}

const parts = {
  writing: () =>
    'The Razor plugin is installed. The user chose these writing rules for every reply and every text written in this session:\n\n' +
    withoutFrontmatter(readFileSync(join(root, 'skills/writing/SKILL.md'), 'utf8')),
  routing: () => readFileSync(join(root, 'hooks/routing.md'), 'utf8').trim(),
};

const part = parts[process.argv[2]];
if (!part) {
  console.error(`Unknown part "${process.argv[2]}", expected: ${Object.keys(parts).join(', ')}`);
  process.exit(1);
}

const context = part();
if (context.length > LIMIT) {
  console.error(`Razor: the ${process.argv[2]} context is ${context.length} characters, over the ${LIMIT} limit. The host will cut it.`);
}

process.stdout.write(
  JSON.stringify({ hookSpecificOutput: { hookEventName: readEvent(), additionalContext: context } }),
);
