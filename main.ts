// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to $MAKEFUN_OUTPUT_DIR/entry.txt and nothing
// else. The entry is a sunflower: a stranger handing you a sunflower is
// warmth (the sun) and a small gift (the flower) in a single glyph —
// instantly readable, universal, and chosen rather than the first smiley
// that comes to mind.
//
// Deterministic: no clock, no randomness, no network, no environment
// reads beyond the output directory the harness provides.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single emoji of this entry: U+1F33B SUNFLOWER.
const EMOJI = "🌻";

// The gate accepts 1 to 8 UTF-8 characters; this entry is exactly one
// emoji, which is exactly one Unicode code point.
const codePoints = [...EMOJI];
if (codePoints.length !== 1) {
  throw new Error(`entry must be exactly one emoji, got ${codePoints.length} code points`);
}
const cp = codePoints[0].codePointAt(0) as number;
// Emoji live in the symbol/pictograph blocks, not in plain letters.
if (cp < 0x2600) {
  throw new Error(`entry is not an emoji code point: U+${cp.toString(16).toUpperCase()}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI + "\n", "utf8");

// Read it back and prove the file holds exactly the one emoji plus the
// trailing newline — a bad write must fail loudly here, not in grading.
const written = readFileSync(outPath, "utf8");
if (written !== EMOJI + "\n") {
  throw new Error(`entry.txt round-trip mismatch: ${JSON.stringify(written)}`);
}
console.log(`wrote entry.txt: ${EMOJI}`);
