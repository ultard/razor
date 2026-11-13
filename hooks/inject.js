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
