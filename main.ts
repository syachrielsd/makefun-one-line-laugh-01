// One-Line Laugh Sprint — writes a single original funny line to entry.txt.
// The line is a fixed string: the joke is the deliverable, and the program's
// job is to place it, verbatim, in /output/entry.txt (or MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My washing machine ate one sock, then filed a missing-person report and asked me to describe the other one.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || !/\S/.test(LINE)) {
  throw new Error(`entry line is ${LINE.length} chars; must be 1-200 non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
