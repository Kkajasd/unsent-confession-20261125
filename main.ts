// Unsent: The Micro-Confession Sprint — make.fun entry.
// Writes one two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, then the unsent
// message itself, one line, exactly as it was typed.
const ENTRY =
  "To: my little brother\n" +
  "I was the one who broke your bike, not the neighbour's kid. I let you blame him all summer because saying sorry felt worse than watching you forgive him.\n";

import { mkdirSync, writeFileSync } from "node:fs";

// The grader mounts /output as a bind mount: create it if missing,
// never delete it, and overwrite the entry file in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
