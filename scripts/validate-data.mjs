#!/usr/bin/env node
/**
 * Validate ATLAS_DATA in public/data.js.
 * Usage: node scripts/validate-data.mjs
 * Exit 0 = clean; exit 1 = errors (warnings alone still exit 0 unless --strict).
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "public", "data.js");
const strict = process.argv.includes("--strict");

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), ctx);
const data = ctx.window.ATLAS_DATA;

if (!data?.root) {
  console.error("ATLAS_DATA.root missing");
  process.exit(1);
}

const errors = [];
const warnings = [];
const journals = [];
const nameIndex = new Map();
const issnIndex = new Map();
const ids = new Set();

const ISSN_RE = /^\d{4}-\d{3}[\dXx]$/;
const DEMO_ISSN_RE = /^0000-\d{4}$/;
const QUARTILES = new Set(["Q1", "Q2", "Q3", "Q4"]);
const sourceIds = new Set((data.sources || []).map((s) => s.id));

function walk(node, trail = []) {
  const pathNames = [...trail, node.name];
  const label = pathNames.join(" › ");

  if (!node.id || typeof node.id !== "string") {
    errors.push(`Domain missing id at ${label}`);
  } else if (ids.has(node.id)) {
    errors.push(`Duplicate domain id "${node.id}" at ${label}`);
  } else {
    ids.add(node.id);
  }

  if (!node.name) errors.push(`Domain missing name under ${trail.join(" › ") || "(root)"}`);

  for (const j of node.journals || []) {
    const row = { ...j, path: label };
    journals.push(row);

    if (!j.name) errors.push(`Journal missing name in ${label}`);
    const nk = (j.name || "").toLowerCase().trim();
    if (nk) {
      if (nameIndex.has(nk)) {
        errors.push(`Duplicate journal name "${j.name}" (${nameIndex.get(nk)} and ${label})`);
      } else {
        nameIndex.set(nk, label);
      }
    }

    if (!j.issn) {
      errors.push(`Missing ISSN for "${j.name}"`);
    } else if (!ISSN_RE.test(j.issn) && !DEMO_ISSN_RE.test(j.issn)) {
      errors.push(`Bad ISSN format "${j.issn}" for "${j.name}"`);
    } else if (!DEMO_ISSN_RE.test(j.issn)) {
      if (issnIndex.has(j.issn)) {
        errors.push(
          `Duplicate ISSN ${j.issn} for "${issnIndex.get(j.issn)}" and "${j.name}"`
        );
      } else {
        issnIndex.set(j.issn, j.name);
      }
    }

    if (typeof j.if !== "number" || Number.isNaN(j.if) || j.if < 0) {
      errors.push(`Bad IF for "${j.name}": ${j.if}`);
    }
    if (!QUARTILES.has(j.quartile)) {
      errors.push(`Bad quartile for "${j.name}": ${j.quartile}`);
    }
    if (typeof j.predatory !== "boolean") {
      errors.push(`predatory must be boolean on "${j.name}"`);
    }
    if (typeof j.openAccess !== "boolean") {
      errors.push(`openAccess must be boolean on "${j.name}"`);
    }
    if (!j.publisher) errors.push(`Missing publisher on "${j.name}"`);
    if (!j.focus) warnings.push(`Missing focus on "${j.name}"`);

    if (!Array.isArray(j.metricSourceIds) || j.metricSourceIds.length === 0) {
      warnings.push(`Missing metricSourceIds on "${j.name}"`);
    } else {
      for (const sid of j.metricSourceIds) {
        if (!sourceIds.has(sid)) {
          errors.push(`Unknown metricSourceId "${sid}" on "${j.name}"`);
        }
      }
    }

    if (j.predatory && DEMO_ISSN_RE.test(j.issn || "") === false && (j.issn || "").startsWith("0000-") === false) {
      // fictional predators should use 0000-xxxx demo ISSNs
      warnings.push(`Predatory "${j.name}" should use demo ISSN 0000-xxxx`);
    }
    if (j.predatory && j.quartile === "Q1" && j.if > 3) {
      warnings.push(`Suspicious predatory Q1 with IF ${j.if}: "${j.name}"`);
    }
    // Humanities often sit in Q1 with IF < 1; only flag extreme cases.
    if (!j.predatory && j.quartile === "Q1" && j.if < 0.3) {
      warnings.push(`Q1 with extremely low IF (${j.if}): "${j.name}"`);
    }
    if (!j.predatory && j.quartile === "Q4" && j.if > 12) {
      warnings.push(`Q4 with high IF (${j.if}): "${j.name}"`);
    }
  }

  for (const child of node.children || []) walk(child, pathNames);
}

walk(data.root);

if (!data.fetch || data.fetch.runtime !== false) {
  errors.push("fetch.runtime must be false (static dataset)");
}
if (!Array.isArray(data.sources) || data.sources.length < 5) {
  errors.push("sources registry incomplete");
}
for (const s of data.sources || []) {
  if (!s.id || !s.url || !s.field || !s.provider || !s.howWeUse) {
    errors.push(`Incomplete source entry: ${JSON.stringify(s?.id || s)}`);
  }
}

const byQ = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };
let predatory = 0;
for (const j of journals) {
  byQ[j.quartile] = (byQ[j.quartile] || 0) + 1;
  if (j.predatory) predatory++;
}

const q1Share = journals.length ? byQ.Q1 / journals.length : 0;
if (q1Share > 0.75) {
  warnings.push(
    `Q1-heavy dataset (${(q1Share * 100).toFixed(0)}% Q1). Prefer more Q2/Q3 coverage.`
  );
}
if (byQ.Q3 < Math.max(5, journals.length * 0.05)) {
  warnings.push(`Few Q3 journals (${byQ.Q3}).`);
}

const summary = {
  journals: journals.length,
  predatory,
  domains: ids.size,
  byQuartile: byQ,
  maxIf: journals.reduce((m, j) => Math.max(m, j.if), 0),
  sources: (data.sources || []).length,
  errors: errors.length,
  warnings: warnings.length,
};

console.log("ATLAS data validation");
console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.log("\nERRORS:");
  for (const e of errors) console.log(" -", e);
}
if (warnings.length) {
  console.log("\nWARNINGS:");
  for (const w of warnings) console.log(" -", w);
}

if (errors.length || (strict && warnings.length)) {
  process.exit(1);
}
console.log("\nOK");
