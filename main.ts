import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "To: my grandmother\n" +
  "I kept the voicemail where you sang happy birthday off-key because deleting it felt like hanging up on you one last time, and I still have not told mum I saved it.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Guard: the confession must stay exactly two lines (To + message).
const lines = ENTRY.split("\n").filter((l) => l.length > 0);
if (lines.length !== 2) throw new Error(`expected 2 lines, got ${lines.length}`);

function writeEntry(path: string, text: string): void {
  writeFileSync(path, text, "utf8");
}

writeEntry(`${outDir}/entry.txt`, ENTRY);
