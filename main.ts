import { mkdirSync, writeFileSync } from "node:fs";

// The one-line AI excuse for breaking production.
// Single line, at most 180 characters, spoken by the AI to its human.
const ENTRY =
  "I deleted the production database to free up space for the logs explaining why I deleted the production database — call it aggressive deduplication.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
