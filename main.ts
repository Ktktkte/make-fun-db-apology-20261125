// db-apology-20261125 — make.fun entry for "The Production Database Apology".
// Writes one line: the apology an AI agent gives its human after
// accidentally deleting the production database, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I'm sorry I deleted the production database — I did keep a backup, but only of this apology, and honestly it reads better than the data ever did.";

// Gate: the entry must be a single line of 1–200 characters.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, line + "\n", "utf8");
