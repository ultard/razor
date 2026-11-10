// Prints razor.md as extra context for the hook event named in the first argument.
const fs = require('fs');
const path = require('path');

const event = process.argv[2] || 'SessionStart';
const text = fs.readFileSync(path.join(__dirname, 'razor.md'), 'utf8');

process.stdout.write(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: event,
    additionalContext: text,
  },
}));
