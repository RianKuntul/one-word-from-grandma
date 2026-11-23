import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Grandma — a single word, nothing else, written to /output/entry.txt.
// The kit grades the file content, so it must be exactly one word: no spaces,
// no punctuation, no extra lines.
//
// The word: "Aiyaaa" — the sound a grandma actually makes (and texts) when her
// grandchild tells her a computer can now talk, think, and write poems. It is
// the whole reaction in one word: half shock, half delight, zero understanding
// of how any of it works — and she would still forward it to the family group
// with three prayer-hand emojis.
const word = "Aiyaaa";

// Hard guard: fail loudly instead of submitting anything that is not one word.
if (word.length < 1 || /\s/.test(word)) {
  throw new Error(
    `Entry must be exactly one non-empty word, got ${JSON.stringify(word)}.`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), word + "\n", "utf8");
console.log("Wrote entry.txt, word:", word);
