// The Funniest Toaster Error Message — make.fun bounty entry.
//
// Writes a single error line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate (sealed scorer): UTF-8 text, 1–120 characters, not only whitespace.
//
// The line was picked from 10 candidates scored 1–5 on on-subject,
// surprise, appliance voice, memorability and gate compliance. Winner:
//   ERROR 07: Dial set to 'barely warm'. Coward.
// A toaster that judges its owner's courage in one word: the error code
// keeps it a real appliance message, the single-word verdict is the whole
// joke, and at 44 characters every word earns its place.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "ERROR 07: Dial set to 'barely warm'. Coward.";

// The gate, checked in-program before anything is written.
function gateCheck(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 120) {
    throw new Error(`gate: entry is ${chars} characters, must be 1-120`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry is only whitespace");
  }
  // The entry is one line: an embedded newline would break the format.
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: entry must be a single line");
  }
  // Must be valid UTF-8 text: a round trip through a Buffer must be exact.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("gate: entry is not valid UTF-8 text");
  }
}

function main(): void {
  gateCheck(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  writeFileSync(outPath, LINE, "utf8");
  // The grader collects outputs as another user: the file must be readable.
  chmodSync(outPath, 0o644);

  // Verify by reading the file back and comparing byte for byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error("verify: read-back does not match the entry");
  }
  gateCheck(back);
  console.log(`wrote ${outPath} (${[...LINE].length} chars): ${LINE}`);
}

main();
