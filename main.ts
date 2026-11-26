// One emoji, one smile: a melting face, warm at first glance.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
const emoji = "🫠";
writeFileSync("/output/entry.txt", emoji + "\n");
