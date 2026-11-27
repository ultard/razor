import { readFileSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8"));
const reminder = readFileSync(path.join(import.meta.dirname, "reminder.md"), "utf8");

console.log(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      additionalContext: reminder,
    },
  }),
);
