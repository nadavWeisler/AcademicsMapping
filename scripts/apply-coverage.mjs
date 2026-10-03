#!/usr/bin/env node
/**
 * Merge scripts/expansions/coverage.json into public/data.js
 * Idempotent by journal name / domain id.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "public", "data.js");
const coverageFiles = [
  path.join(__dirname, "expansions", "coverage.json"),
  path.join(__dirname, "expansions", "coverage-more.json"),
];

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), ctx);
const data = ctx.window.ATLAS_DATA;
const coverage = { upserts: [], fills: {} };
for (const coveragePath of coverageFiles) {
  if (!fs.existsSync(coveragePath)) continue;
  const part = JSON.parse(fs.readFileSync(coveragePath, "utf8"));
  coverage.upserts.push(...(part.upserts || []));
  Object.assign(coverage.fills, part.fills || {});
}

function find(node, id) {
  if (node.id === id) return node;
  for (const c of node.children || []) {
    const hit = find(c, id);
    if (hit) return hit;
  }
  return null;
}

function ensureChildren(node) {
  if (!node.children) node.children = [];
  return node.children;
}

function addJournals(node, list = []) {
  const seen = new Set((node.journals || []).map((x) => x.name.toLowerCase()));
  const add = list.filter((x) => x?.name && !seen.has(x.name.toLowerCase()));
  node.journals = [...(node.journals || []), ...add];
  return add.length;
}

function upsertChild(parent, child) {
  const kids = ensureChildren(parent);
  let existing = kids.find((c) => c.id === child.id);
  if (!existing) {
    // clone lightly
    existing = {
      id: child.id,
      name: child.name,
      description: child.description,
      journals: [],
      children: [],
    };
    kids.push(existing);
  }
  if (child.description && !existing.description) existing.description = child.description;
  addJournals(existing, child.journals || []);
  for (const gc of child.children || []) upsertChild(existing, gc);
  return existing;
}

let added = 0;
for (const { parentId, child } of coverage.upserts || []) {
  const parent = find(data.root, parentId);
  if (!parent) {
    console.warn("missing parent", parentId, "for", child.id);
    continue;
  }
  const before = JSON.stringify(parent).length;
  upsertChild(parent, child);
  if (JSON.stringify(parent).length !== before) added++;
}

for (const [id, list] of Object.entries(coverage.fills || {})) {
  if (!list?.length) continue;
  const node = find(data.root, id);
  if (!node) {
    console.warn("missing fill target", id);
    continue;
  }
  addJournals(node, list);
}

// Global unique journal names (keep first)
function uniquify(node, global = new Set()) {
  if (node.journals) {
    node.journals = node.journals.filter((x) => {
      const k = x.name.toLowerCase();
      if (global.has(k)) return false;
      global.add(k);
      return true;
    });
  }
  for (const c of node.children || []) uniquify(c, global);
}
uniquify(data.root);

// Unique ISSNs (non-demo): if clash, suffix demo-style warning by skipping later
function uniquifyIssn(node, global = new Map()) {
  if (node.journals) {
    node.journals = node.journals.filter((x) => {
      if (!x.issn || String(x.issn).startsWith("0000-")) return true;
      if (global.has(x.issn)) {
        console.warn(`dropping dup ISSN ${x.issn} (${x.name} vs ${global.get(x.issn)})`);
        return false;
      }
      global.set(x.issn, x.name);
      return true;
    });
  }
  for (const c of node.children || []) uniquifyIssn(c, global);
}
uniquifyIssn(data.root);

data.updated = "2026-10";

const header = `/**
 * Nested academic domain taxonomy with sample journals.
 *
 * RUNTIME FETCH: none. The browser loads this local file only (\`data.js\`).
 * Values are a curated educational snapshot, not a live API response.
 *
 * Canonical source registry lives in \`sources\` below and is rendered in the UI.
 * Validate with: node scripts/validate-data.mjs
 * Expand with: node scripts/expand-data.mjs && node scripts/apply-coverage.mjs
 */
`;

fs.writeFileSync(dataPath, header + `window.ATLAS_DATA = ${JSON.stringify(data, null, 2)};\n`);

function count(node, acc = { domains: 0, journals: 0 }) {
  acc.domains++;
  acc.journals += (node.journals || []).length;
  for (const c of node.children || []) count(c, acc);
  return acc;
}
console.log("Wrote", dataPath, count(data.root), "touched parents", added);
