#!/usr/bin/env node
/**
 * Load public/data.js, backfill provenance, expand coverage, rewrite file.
 * Run: node scripts/expand-data.mjs && node scripts/validate-data.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "public", "data.js");

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), ctx);
const data = ctx.window.ATLAS_DATA;

function j(partial) {
  const predatory = Boolean(partial.predatory);
  const openAccess = Boolean(partial.openAccess);
  const metricSourceIds =
    partial.metricSourceIds ||
    (predatory
      ? ["predatory", "jcr", "jcr-quartile"]
      : openAccess
        ? ["jcr", "jcr-quartile", "doaj"]
        : ["jcr", "jcr-quartile"]);
  return {
    openAccess: false,
    ...partial,
    predatory,
    openAccess,
    metricSourceIds,
  };
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

function upsertChild(parent, child) {
  const kids = ensureChildren(parent);
  const existing = kids.find((c) => c.id === child.id);
  if (existing) {
    if (child.journals?.length) {
      existing.journals = [...(existing.journals || []), ...child.journals];
    }
    if (child.children?.length) {
      for (const gc of child.children) upsertChild(existing, gc);
    }
    if (child.description && !existing.description) existing.description = child.description;
    return existing;
  }
  kids.push(child);
  return child;
}

function addJournals(node, list) {
  node.journals = [...(node.journals || []), ...list.map(j)];
}

/** Backfill metricSourceIds on every journal. */
function backfillSources(node) {
  for (const journal of node.journals || []) {
    if (!Array.isArray(journal.metricSourceIds) || !journal.metricSourceIds.length) {
      journal.metricSourceIds = journal.predatory
        ? ["predatory", "jcr", "jcr-quartile"]
        : journal.openAccess
          ? ["jcr", "jcr-quartile", "doaj"]
          : ["jcr", "jcr-quartile"];
    }
  }
  for (const c of node.children || []) backfillSources(c);
}

backfillSources(data.root);

// --- Fill thin medicine / psychology leaves + balance Q2/Q3 ---
const fill = [
  ["surgical-oncology", [j({ name: "European Journal of Surgical Oncology", issn: "0748-7983", if: 3.5, quartile: "Q1", publisher: "Elsevier", focus: "Surgical oncology" }), j({ name: "Journal of Surgical Oncology", issn: "0022-4790", if: 2.3, quartile: "Q2", publisher: "Wiley", focus: "Cancer surgery" })]],
  ["pediatric-oncology", [j({ name: "Pediatric Hematology and Oncology", issn: "0888-0018", if: 1.3, quartile: "Q3", publisher: "Taylor & Francis", focus: "Pediatric hematology-oncology" })]],
  ["interventional-cardio", [j({ name: "Catheterization and Cardiovascular Interventions", issn: "1522-1946", if: 2.1, quartile: "Q2", publisher: "Wiley", focus: "Interventional cardiology" })]],
  ["hiv", [j({ name: "AIDS", issn: "0269-9371", if: 3.4, quartile: "Q1", publisher: "Wolters Kluwer", focus: "HIV/AIDS research" }), j({ name: "Journal of Acquired Immune Deficiency Syndromes", issn: "1525-4135", if: 3.0, quartile: "Q2", publisher: "Wolters Kluwer", focus: "HIV clinical research" })]],
  ["tropical-medicine", [j({ name: "American Journal of Tropical Medicine and Hygiene", issn: "0002-9637", if: 2.3, quartile: "Q2", publisher: "ASTMH", focus: "Tropical medicine" })]],
  ["stroke", [j({ name: "International Journal of Stroke", issn: "1747-493X", if: 5.7, quartile: "Q1", publisher: "SAGE", focus: "Stroke research" }), j({ name: "Journal of Stroke and Cerebrovascular Diseases", issn: "1052-3057", if: 2.0, quartile: "Q3", publisher: "Elsevier", focus: "Cerebrovascular disease" })]],
  ["epilepsy", [j({ name: "Seizure", issn: "1059-1311", if: 2.6, quartile: "Q2", publisher: "Elsevier", focus: "Epilepsy clinical research" })]],
  ["child-psychiatry", [j({ name: "Journal of Child Psychology and Psychiatry", issn: "0021-9630", if: 6.5, quartile: "Q1", publisher: "Wiley", focus: "Child psychiatry & psychology" }), j({ name: "European Child & Adolescent Psychiatry", issn: "1018-8827", if: 4.5, quartile: "Q1", publisher: "Springer", focus: "Child & adolescent psychiatry" })]],
  ["neonatology", [j({ name: "Journal of Perinatology", issn: "0743-8346", if: 2.4, quartile: "Q2", publisher: "Springer Nature", focus: "Perinatal & neonatal medicine" }), j({ name: "Neonatology", issn: "1661-7800", if: 2.8, quartile: "Q2", publisher: "Karger", focus: "Neonatal research" })]],
  ["orthopedics", [j({ name: "Bone & Joint Journal", issn: "2049-4394", if: 3.5, quartile: "Q1", publisher: "Bone & Joint Publishing", focus: "Orthopedic surgery" }), j({ name: "Clinical Orthopaedics and Related Research", issn: "0009-921X", if: 4.2, quartile: "Q1", publisher: "Wolters Kluwer", focus: "Orthopedics" })]],
  ["nuclear-medicine", [j({ name: "European Journal of Nuclear Medicine and Molecular Imaging", issn: "1619-7070", if: 8.6, quartile: "Q1", publisher: "Springer", focus: "Nuclear medicine" })]],
  ["endocrinology", [j({ name: "Diabetes Care", issn: "0149-5992", if: 14.8, quartile: "Q1", publisher: "ADA", focus: "Diabetes clinical care" }), j({ name: "Journal of Clinical Endocrinology & Metabolism", issn: "0021-972X", if: 5.0, quartile: "Q1", publisher: "Endocrine Society", focus: "Clinical endocrinology" })]],
  ["gastroenterology", [j({ name: "Gut", issn: "0017-5749", if: 23.0, quartile: "Q1", publisher: "BMJ", focus: "Gastroenterology & hepatology" }), j({ name: "Clinical Gastroenterology and Hepatology", issn: "1542-3565", if: 10.6, quartile: "Q1", publisher: "Elsevier / AGA", focus: "Clinical GI" })]],
  ["trauma-ptsd", [j({ name: "European Journal of Psychotraumatology", issn: "2000-8066", if: 4.2, quartile: "Q1", openAccess: true, publisher: "Taylor & Francis", focus: "Trauma & PTSD", metricSourceIds: ["jcr", "jcr-quartile", "doaj"] }), j({ name: "Psychological Trauma", issn: "1942-9681", if: 2.7, quartile: "Q2", publisher: "APA", focus: "Trauma psychology" })]],
  ["adolescent-dev", [j({ name: "Journal of Adolescence", issn: "0140-1971", if: 3.0, quartile: "Q1", publisher: "Elsevier", focus: "Adolescent development" }), j({ name: "Journal of Youth and Adolescence", issn: "0047-2891", if: 3.7, quartile: "Q1", publisher: "Springer", focus: "Youth development" })]],
  ["aging-psych", [j({ name: "Journals of Gerontology Series B", issn: "1079-5014", if: 4.8, quartile: "Q1", publisher: "Oxford", focus: "Psychological aging" }), j({ name: "Aging & Mental Health", issn: "1360-7863", if: 2.8, quartile: "Q2", publisher: "Taylor & Francis", focus: "Aging & mental health" })]],
  ["group-processes", [j({ name: "Journal of Experimental Social Psychology", issn: "0022-1031", if: 3.1, quartile: "Q1", publisher: "Elsevier", focus: "Experimental social psychology" }), j({ name: "Social Psychological and Personality Science", issn: "1948-5506", if: 4.1, quartile: "Q1", publisher: "SAGE", focus: "Social & personality science" })]],
  ["school-psych", [j({ name: "School Psychology", issn: "2578-4218", if: 2.9, quartile: "Q2", publisher: "APA", focus: "School psychology practice" }), j({ name: "Psychology in the Schools", issn: "0033-3085", if: 1.8, quartile: "Q3", publisher: "Wiley", focus: "School psychology" })]],
  ["occupational-health-psych", [j({ name: "Work & Stress", issn: "0267-8373", if: 4.9, quartile: "Q1", publisher: "Taylor & Francis", focus: "Occupational stress" }), j({ name: "Occupational Medicine", issn: "0962-7480", if: 1.9, quartile: "Q3", publisher: "Oxford", focus: "Occupational health" })]],
  ["knowledge", [j({ name: "Artificial Intelligence Review", issn: "0269-2821", if: 10.2, quartile: "Q1", publisher: "Springer", focus: "AI surveys" }), j({ name: "Knowledge-Based Systems", issn: "0950-7051", if: 7.2, quartile: "Q1", publisher: "Elsevier", focus: "Knowledge systems" })]],
  ["history-science", [j({ name: "British Journal for the History of Science", issn: "0007-0874", if: 0.9, quartile: "Q2", publisher: "Cambridge", focus: "History of science" }), j({ name: "History of Science", issn: "0073-2753", if: 0.8, quartile: "Q2", publisher: "SAGE", focus: "History of science" })]],
  // Additional Q2/Q3 balance across existing leaves
  ["optics", [j({ name: "Journal of the Optical Society of America A", issn: "1084-7529", if: 1.5, quartile: "Q3", publisher: "Optica", focus: "Optics" }), j({ name: "Journal of Modern Optics", issn: "0950-0340", if: 1.1, quartile: "Q3", publisher: "Taylor & Francis", focus: "Modern optics" })]],
  ["bacteriology", [j({ name: "FEMS Microbiology Letters", issn: "0378-1097", if: 2.1, quartile: "Q3", publisher: "Oxford", focus: "Microbiology letters" }), j({ name: "Archives of Microbiology", issn: "0302-8933", if: 2.3, quartile: "Q3", publisher: "Springer", focus: "Microbiology" })]],
  ["marine-ecology", [j({ name: "Estuarine, Coastal and Shelf Science", issn: "0272-7714", if: 2.6, quartile: "Q2", publisher: "Elsevier", focus: "Coastal science" }), j({ name: "Marine Biology", issn: "0025-3162", if: 2.0, quartile: "Q2", publisher: "Springer", focus: "Marine biology" }), j({ name: "Journal of Experimental Marine Biology and Ecology", issn: "0022-0981", if: 1.8, quartile: "Q3", publisher: "Elsevier", focus: "Experimental marine ecology" })]],
  ["distributed", [j({ name: "Journal of Parallel and Distributed Computing", issn: "0743-7315", if: 3.4, quartile: "Q2", publisher: "Elsevier", focus: "Parallel & distributed computing" }), j({ name: "Concurrency and Computation: Practice and Experience", issn: "1532-0626", if: 1.5, quartile: "Q3", publisher: "Wiley", focus: "Concurrency" })]],
  ["security", [j({ name: "Computers & Security", issn: "0167-4048", if: 4.8, quartile: "Q1", publisher: "Elsevier", focus: "Computer security" }), j({ name: "Journal of Information Security and Applications", issn: "2214-2126", if: 3.7, quartile: "Q2", publisher: "Elsevier", focus: "Security applications" })]],
  ["hci", [j({ name: "Interacting with Computers", issn: "0953-5438", if: 1.5, quartile: "Q3", publisher: "Oxford", focus: "HCI" }), j({ name: "Behaviour & Information Technology", issn: "0144-929X", if: 2.9, quartile: "Q2", publisher: "Taylor & Francis", focus: "HCI & IT" })]],
  ["condensed", [j({ name: "Journal of Physics: Condensed Matter", issn: "0953-8984", if: 2.3, quartile: "Q2", publisher: "IOP", focus: "Condensed matter" }), j({ name: "Solid State Communications", issn: "0038-1098", if: 1.8, quartile: "Q3", publisher: "Elsevier", focus: "Solid state physics" })]],
  ["geology", [j({ name: "Geological Magazine", issn: "0016-7568", if: 1.9, quartile: "Q2", publisher: "Cambridge", focus: "Geology" }), j({ name: "Journal of Geological Society", issn: "0016-7648", if: 2.5, quartile: "Q2", publisher: "Geological Society", focus: "Geology" })]],
  ["microecon", [j({ name: "Journal of Economic Behavior & Organization", issn: "0167-2681", if: 2.2, quartile: "Q2", publisher: "Elsevier", focus: "Behavioral & organizational econ" }), j({ name: "Games and Economic Behavior", issn: "0899-8256", if: 1.0, quartile: "Q3", publisher: "Elsevier", focus: "Game theory" })]],
  ["sociology", [j({ name: "Social Forces", issn: "0037-7732", if: 2.9, quartile: "Q1", publisher: "Oxford", focus: "Sociology" }), j({ name: "Sociological Forum", issn: "0884-8971", if: 1.6, quartile: "Q3", publisher: "Wiley", focus: "Sociology" }), j({ name: "Qualitative Sociology", issn: "0162-0436", if: 1.5, quartile: "Q3", publisher: "Springer", focus: "Qualitative sociology" })]],
  ["higher-ed", [j({ name: "Higher Education Research & Development", issn: "0729-4360", if: 2.5, quartile: "Q2", publisher: "Taylor & Francis", focus: "Higher education" }), j({ name: "Teaching in Higher Education", issn: "1356-2517", if: 2.0, quartile: "Q2", publisher: "Taylor & Francis", focus: "Teaching in HE" })]],
  ["modern-history", [j({ name: "Journal of Contemporary History", issn: "0022-0094", if: 0.7, quartile: "Q2", publisher: "SAGE", focus: "Contemporary history" }), j({ name: "Historical Journal", issn: "0018-246X", if: 0.8, quartile: "Q1", publisher: "Cambridge", focus: "History" })]],
  ["linguistics", [j({ name: "Lingua", issn: "0024-3841", if: 1.1, quartile: "Q2", publisher: "Elsevier", focus: "General linguistics" }), j({ name: "Journal of Phonetics", issn: "0095-4470", if: 1.9, quartile: "Q1", publisher: "Elsevier", focus: "Phonetics" }), j({ name: "Language Sciences", issn: "0388-0001", if: 1.2, quartile: "Q2", publisher: "Elsevier", focus: "Language sciences" })]],
  ["philosophy", [j({ name: "Synthese", issn: "0039-7857", if: 1.5, quartile: "Q1", publisher: "Springer", focus: "Philosophy of science & epistemology" }), j({ name: "Philosophical Studies", issn: "0031-8116", if: 1.2, quartile: "Q1", publisher: "Springer", focus: "Analytic philosophy" }), j({ name: "Erkenntnis", issn: "0165-0106", if: 0.9, quartile: "Q2", publisher: "Springer", focus: "Epistemology & philosophy of science" })]],
  ["emergency", [j({ name: "Emergency Medicine Journal", issn: "1472-0205", if: 2.8, quartile: "Q2", publisher: "BMJ", focus: "Emergency medicine" }), j({ name: "American Journal of Emergency Medicine", issn: "0735-6757", if: 2.5, quartile: "Q2", publisher: "Elsevier", focus: "Emergency medicine" })]],
  ["general-obgyn", [j({ name: "BJOG", issn: "1470-0328", if: 4.7, quartile: "Q1", publisher: "Wiley", focus: "OB/GYN" }), j({ name: "Acta Obstetricia et Gynecologica Scandinavica", issn: "0001-6349", if: 3.1, quartile: "Q2", publisher: "Wiley", focus: "OB/GYN" })]],
  ["pharmacy-practice", [j({ name: "International Journal of Clinical Pharmacy", issn: "2210-7703", if: 2.0, quartile: "Q3", publisher: "Springer", focus: "Clinical pharmacy" }), j({ name: "Journal of the American Pharmacists Association", issn: "1544-3191", if: 1.8, quartile: "Q3", publisher: "Elsevier", focus: "Pharmacy practice" })]],
  ["agronomy", [j({ name: "European Journal of Agronomy", issn: "1161-0301", if: 4.5, quartile: "Q1", publisher: "Elsevier", focus: "Agronomy" }), j({ name: "Crop Science", issn: "0011-183X", if: 1.9, quartile: "Q2", publisher: "Wiley", focus: "Crop science" }), j({ name: "Grass and Forage Science", issn: "0142-5242", if: 1.6, quartile: "Q3", publisher: "Wiley", focus: "Forage science" })]],
  ["civil-eng", [j({ name: "Engineering Structures", issn: "0141-0296", if: 5.6, quartile: "Q1", publisher: "Elsevier", focus: "Structural engineering" }), j({ name: "Journal of Bridge Engineering", issn: "1084-0702", if: 2.7, quartile: "Q2", publisher: "ASCE", focus: "Bridge engineering" })]],
  ["mechanical-eng", [j({ name: "Journal of Sound and Vibration", issn: "0022-460X", if: 3.7, quartile: "Q1", publisher: "Elsevier", focus: "Vibration & acoustics" }), j({ name: "Mechanism and Machine Theory", issn: "0094-114X", if: 4.5, quartile: "Q1", publisher: "Elsevier", focus: "Mechanisms" }), j({ name: "Proceedings of the Institution of Mechanical Engineers Part C", issn: "0954-4062", if: 1.7, quartile: "Q3", publisher: "SAGE", focus: "Mechanical engineering science" })]],
  ["marketing", [j({ name: "Journal of Business Research", issn: "0148-2963", if: 9.8, quartile: "Q1", publisher: "Elsevier", focus: "Business research" }), j({ name: "Industrial Marketing Management", issn: "0019-8501", if: 7.8, quartile: "Q1", publisher: "Elsevier", focus: "B2B marketing" }), j({ name: "Journal of Retailing and Consumer Services", issn: "0969-6989", if: 8.0, quartile: "Q1", publisher: "Elsevier", focus: "Retailing" })]],
  ["attention-perception", [j({ name: "Perception", issn: "0301-0066", if: 1.3, quartile: "Q3", publisher: "SAGE", focus: "Perception" }), j({ name: "Vision Research", issn: "0042-6989", if: 1.6, quartile: "Q3", publisher: "Elsevier", focus: "Vision science" })]],
  ["clinical-neuropsych", [j({ name: "Archives of Clinical Neuropsychology", issn: "0887-6177", if: 2.1, quartile: "Q2", publisher: "Oxford", focus: "Clinical neuropsychology" }), j({ name: "Clinical Neuropsychologist", issn: "1385-4046", if: 2.3, quartile: "Q2", publisher: "Taylor & Francis", focus: "Clinical neuropsychology" })]],
];

for (const [id, list] of fill) {
  const node = find(data.root, id);
  if (!node) {
    console.warn("missing domain for fill:", id);
    continue;
  }
  const existing = new Set((node.journals || []).map((x) => x.name.toLowerCase()));
  addJournals(
    node,
    list.filter((x) => !existing.has(x.name.toLowerCase()))
  );
}

// --- New / expanded trees ---
const stm = find(data.root, "stm");
const social = find(data.root, "social");
const arts = find(data.root, "arts-hum");

upsertChild(stm, {
  id: "math",
  name: "Mathematics & Statistics",
  description: "Pure math, applied math, probability, and statistics",
  children: [
    {
      id: "pure-math",
      name: "Pure Mathematics",
      children: [
        {
          id: "algebra",
          name: "Algebra",
          journals: [
            j({ name: "Journal of Algebra", issn: "0021-8693", if: 0.9, quartile: "Q2", publisher: "Elsevier", focus: "Algebra" }),
            j({ name: "Algebra & Number Theory", issn: "1930-8124", if: 1.1, quartile: "Q1", publisher: "MSP", focus: "Algebra & number theory" }),
          ],
        },
        {
          id: "analysis-math",
          name: "Analysis",
          journals: [
            j({ name: "Annals of Mathematics", issn: "0003-486X", if: 5.7, quartile: "Q1", publisher: "Princeton / IAS", focus: "Pure mathematics" }),
            j({ name: "Journal of Functional Analysis", issn: "0022-1236", if: 1.6, quartile: "Q1", publisher: "Elsevier", focus: "Functional analysis" }),
            j({ name: "Acta Mathematica", issn: "0001-5962", if: 3.7, quartile: "Q1", publisher: "Institut Mittag-Leffler", focus: "Mathematics" }),
          ],
        },
      ],
    },
    {
      id: "applied-math",
      name: "Applied Mathematics",
      children: [
        {
          id: "numerical-analysis",
          name: "Numerical Analysis",
          journals: [
            j({ name: "SIAM Journal on Numerical Analysis", issn: "0036-1429", if: 2.6, quartile: "Q1", publisher: "SIAM", focus: "Numerical analysis" }),
            j({ name: "Numerische Mathematik", issn: "0029-599X", if: 1.9, quartile: "Q2", publisher: "Springer", focus: "Numerical mathematics" }),
          ],
        },
        {
          id: "math-biology",
          name: "Mathematical Biology",
          journals: [
            j({ name: "Bulletin of Mathematical Biology", issn: "0092-8240", if: 2.0, quartile: "Q2", publisher: "Springer", focus: "Mathematical biology" }),
            j({ name: "Journal of Mathematical Biology", issn: "0303-6812", if: 2.1, quartile: "Q2", publisher: "Springer", focus: "Math biology" }),
            j({ name: "BioMath Instant Open", issn: "0000-0017", if: 0.2, quartile: "Q4", predatory: true, openAccess: true, publisher: "BioMath Fast", focus: "Predatory math-bio OA" }),
          ],
        },
      ],
    },
    {
      id: "statistics",
      name: "Statistics",
      children: [
        {
          id: "theoretical-stats",
          name: "Theoretical Statistics",
          journals: [
            j({ name: "Annals of Statistics", issn: "0090-5364", if: 3.2, quartile: "Q1", publisher: "IMS", focus: "Theoretical statistics" }),
            j({ name: "Journal of the Royal Statistical Society Series B", issn: "1369-7412", if: 3.5, quartile: "Q1", publisher: "Wiley / RSS", focus: "Statistical methodology" }),
            j({ name: "Biometrika", issn: "0006-3444", if: 2.4, quartile: "Q1", publisher: "Oxford", focus: "Theoretical statistics" }),
          ],
        },
        {
          id: "applied-stats",
          name: "Applied Statistics",
          journals: [
            j({ name: "Journal of the American Statistical Association", issn: "0162-1459", if: 3.0, quartile: "Q1", publisher: "Taylor & Francis / ASA", focus: "Statistics" }),
            j({ name: "Statistics in Medicine", issn: "0277-6715", if: 1.8, quartile: "Q2", publisher: "Wiley", focus: "Biostatistics applications" }),
            j({ name: "Statistical Methods in Medical Research", issn: "0962-2802", if: 1.9, quartile: "Q2", publisher: "SAGE", focus: "Medical statistics" }),
          ],
        },
      ],
    },
  ],
});

upsertChild(stm, {
  id: "environmental",
  name: "Environmental Science",
  description: "Environment, sustainability, and earth-system applications",
  children: [
    {
      id: "env-science-general",
      name: "Environmental Science (General)",
      journals: [
        j({ name: "Environmental Science & Technology", issn: "0013-936X", if: 10.8, quartile: "Q1", publisher: "ACS", focus: "Environmental science & technology" }),
        j({ name: "Science of the Total Environment", issn: "0048-9697", if: 8.2, quartile: "Q1", publisher: "Elsevier", focus: "Environment" }),
        j({ name: "Environmental Pollution", issn: "0269-7491", if: 7.6, quartile: "Q1", publisher: "Elsevier", focus: "Pollution science" }),
        j({ name: "Environmental Research Letters", issn: "1748-9326", if: 5.8, quartile: "Q1", openAccess: true, publisher: "IOP", focus: "Environmental research", metricSourceIds: ["jcr", "jcr-quartile", "doaj"] }),
      ],
    },
    {
      id: "sustainability",
      name: "Sustainability",
      children: [
        {
          id: "sustainable-development",
          name: "Sustainable Development",
          journals: [
            j({ name: "Nature Sustainability", issn: "2398-9629", if: 27.6, quartile: "Q1", publisher: "Nature Portfolio", focus: "Sustainability" }),
            j({ name: "Sustainable Development", issn: "0968-0803", if: 9.9, quartile: "Q1", publisher: "Wiley", focus: "Sustainable development" }),
            j({ name: "Sustainability Rapid World", issn: "0000-0018", if: 0.4, quartile: "Q4", predatory: true, openAccess: true, publisher: "GreenFast OA", focus: "Predatory sustainability mill" }),
          ],
        },
        {
          id: "energy-env",
          name: "Energy & Environment",
          journals: [
            j({ name: "Energy & Environmental Science", issn: "1754-5692", if: 32.4, quartile: "Q1", publisher: "RSC", focus: "Energy & environment" }),
            j({ name: "Renewable and Sustainable Energy Reviews", issn: "1364-0321", if: 15.9, quartile: "Q1", publisher: "Elsevier", focus: "Renewable energy reviews" }),
            j({ name: "Applied Energy", issn: "0306-2619", if: 10.1, quartile: "Q1", publisher: "Elsevier", focus: "Applied energy systems" }),
          ],
        },
      ],
    },
    {
      id: "ecology-env",
      name: "Applied Ecology",
      journals: [
        j({ name: "Journal of Applied Ecology", issn: "0021-8901", if: 4.8, quartile: "Q1", publisher: "Wiley / BES", focus: "Applied ecology" }),
        j({ name: "Ecological Applications", issn: "1051-0761", if: 4.3, quartile: "Q1", publisher: "Wiley / ESA", focus: "Ecological applications" }),
        j({ name: "Restoration Ecology", issn: "1061-2971", if: 2.7, quartile: "Q2", publisher: "Wiley", focus: "Ecological restoration" }),
      ],
    },
  ],
});

upsertChild(stm, {
  id: "nursing-allied",
  name: "Nursing & Allied Health",
  children: [
    {
      id: "nursing",
      name: "Nursing",
      children: [
        {
          id: "nursing-research",
          name: "Nursing Research",
          journals: [
            j({ name: "International Journal of Nursing Studies", issn: "0020-7489", if: 7.5, quartile: "Q1", publisher: "Elsevier", focus: "Nursing research" }),
            j({ name: "Journal of Advanced Nursing", issn: "0309-2402", if: 3.1, quartile: "Q1", publisher: "Wiley", focus: "Advanced nursing" }),
            j({ name: "Nursing Research", issn: "0029-6562", if: 2.3, quartile: "Q2", publisher: "Wolters Kluwer", focus: "Nursing science" }),
            j({ name: "Nurse Education Today", issn: "0260-6917", if: 3.6, quartile: "Q1", publisher: "Elsevier", focus: "Nurse education" }),
          ],
        },
        {
          id: "critical-care-nursing",
          name: "Critical Care Nursing",
          journals: [
            j({ name: "Intensive and Critical Care Nursing", issn: "0964-3397", if: 3.4, quartile: "Q1", publisher: "Elsevier", focus: "Critical care nursing" }),
            j({ name: "American Journal of Critical Care", issn: "1062-3264", if: 2.1, quartile: "Q2", publisher: "AACN", focus: "Critical care nursing practice" }),
          ],
        },
      ],
    },
    {
      id: "physiotherapy",
      name: "Physiotherapy & Rehabilitation",
      journals: [
        j({ name: "Physical Therapy", issn: "0031-9023", if: 3.0, quartile: "Q1", publisher: "Oxford / APTA", focus: "Physical therapy" }),
        j({ name: "Archives of Physical Medicine and Rehabilitation", issn: "0003-9993", if: 3.6, quartile: "Q1", publisher: "Elsevier", focus: "Rehab medicine" }),
        j({ name: "Journal of Physiotherapy", issn: "1836-9553", if: 7.0, quartile: "Q1", openAccess: true, publisher: "Elsevier / APA", focus: "Physiotherapy", metricSourceIds: ["jcr", "jcr-quartile", "doaj"] }),
      ],
    },
    {
      id: "midwifery",
      name: "Midwifery",
      journals: [
        j({ name: "Midwifery", issn: "0266-6138", if: 2.5, quartile: "Q1", publisher: "Elsevier", focus: "Midwifery" }),
        j({ name: "Birth", issn: "0730-7659", if: 2.2, quartile: "Q2", publisher: "Wiley", focus: "Perinatal care" }),
      ],
    },
  ],
});

upsertChild(stm, {
  id: "pharmacy",
  name: "Pharmacy & Pharmacology",
  children: [
    {
      id: "pharmacology",
      name: "Pharmacology",
      children: [
        {
          id: "basic-pharm",
          name: "Basic Pharmacology",
          journals: [
            j({ name: "Pharmacological Reviews", issn: "0031-6997", if: 21.1, quartile: "Q1", publisher: "ASPET", focus: "Pharmacology reviews" }),
            j({ name: "British Journal of Pharmacology", issn: "0007-1188", if: 6.8, quartile: "Q1", publisher: "Wiley / BPS", focus: "Pharmacology" }),
            j({ name: "European Journal of Pharmacology", issn: "0014-2999", if: 4.2, quartile: "Q2", publisher: "Elsevier", focus: "Experimental pharmacology" }),
          ],
        },
        {
          id: "clinical-pharm",
          name: "Clinical Pharmacology",
          journals: [
            j({ name: "Clinical Pharmacology & Therapeutics", issn: "0009-9236", if: 6.0, quartile: "Q1", publisher: "Wiley / ASCPT", focus: "Clinical pharmacology" }),
            j({ name: "British Journal of Clinical Pharmacology", issn: "0306-5251", if: 3.1, quartile: "Q2", publisher: "Wiley", focus: "Clinical pharmacology" }),
          ],
        },
      ],
    },
    {
      id: "pharmaceutics",
      name: "Pharmaceutics & Drug Delivery",
      journals: [
        j({ name: "Journal of Controlled Release", issn: "0168-3659", if: 10.5, quartile: "Q1", publisher: "Elsevier", focus: "Drug delivery" }),
        j({ name: "International Journal of Pharmaceutics", issn: "0378-5173", if: 5.3, quartile: "Q1", publisher: "Elsevier", focus: "Pharmaceutics" }),
        j({ name: "Pharma Delivery Mega Journal", issn: "0000-0019", if: 0.3, quartile: "Q4", predatory: true, openAccess: true, publisher: "RxOpen World", focus: "Predatory pharmaceutics OA" }),
      ],
    },
    {
      id: "pharmacy-practice",
      name: "Pharmacy Practice",
      journals: [
        j({ name: "Research in Social and Administrative Pharmacy", issn: "1551-7411", if: 3.0, quartile: "Q2", publisher: "Elsevier", focus: "Pharmacy practice" }),
        j({ name: "American Journal of Health-System Pharmacy", issn: "1079-2082", if: 2.0, quartile: "Q3", publisher: "ASHP", focus: "Health-system pharmacy" }),
      ],
    },
  ],
});

upsertChild(stm, {
  id: "dentistry",
  name: "Dentistry",
  children: [
    {
      id: "general-dentistry",
      name: "General Dentistry",
      journals: [
        j({ name: "Journal of Dental Research", issn: "0022-0345", if: 5.7, quartile: "Q1", publisher: "SAGE / IADR", focus: "Dental research" }),
        j({ name: "Journal of Dentistry", issn: "0300-5711", if: 4.8, quartile: "Q1", publisher: "Elsevier", focus: "Clinical dentistry" }),
        j({ name: "Dental Materials", issn: "0109-5641", if: 5.0, quartile: "Q1", publisher: "Elsevier", focus: "Dental materials" }),
      ],
    },
    {
      id: "orthodontics",
      name: "Orthodontics",
      journals: [
        j({ name: "American Journal of Orthodontics and Dentofacial Orthopedics", issn: "0889-5406", if: 2.7, quartile: "Q1", publisher: "Elsevier", focus: "Orthodontics" }),
        j({ name: "Angle Orthodontist", issn: "0003-3219", if: 2.7, quartile: "Q1", openAccess: true, publisher: "E.H. Angle Society", focus: "Orthodontics", metricSourceIds: ["jcr", "jcr-quartile", "doaj"] }),
      ],
    },
    {
      id: "periodontology",
      name: "Periodontology",
      journals: [
        j({ name: "Journal of Clinical Periodontology", issn: "0303-6979", if: 5.8, quartile: "Q1", publisher: "Wiley", focus: "Periodontology" }),
        j({ name: "Journal of Periodontology", issn: "0022-3492", if: 3.7, quartile: "Q1", publisher: "Wiley / AAP", focus: "Periodontology" }),
      ],
    },
  ],
});

upsertChild(stm, {
  id: "veterinary",
  name: "Veterinary Medicine",
  children: [
    {
      id: "vet-clinical",
      name: "Clinical Veterinary Medicine",
      journals: [
        j({ name: "Journal of Veterinary Internal Medicine", issn: "0891-6640", if: 2.1, quartile: "Q1", openAccess: true, publisher: "Wiley / ACVIM", focus: "Veterinary internal medicine", metricSourceIds: ["jcr", "jcr-quartile", "doaj"] }),
        j({ name: "Veterinary Record", issn: "0042-4900", if: 1.9, quartile: "Q2", publisher: "Wiley / BVA", focus: "Veterinary practice" }),
        j({ name: "Equine Veterinary Journal", issn: "0425-1644", if: 2.1, quartile: "Q1", publisher: "Wiley", focus: "Equine medicine" }),
      ],
    },
    {
      id: "vet-pathology",
      name: "Veterinary Pathology",
      journals: [
        j({ name: "Veterinary Pathology", issn: "0300-9858", if: 2.1, quartile: "Q1", publisher: "SAGE", focus: "Veterinary pathology" }),
        j({ name: "Journal of Comparative Pathology", issn: "0021-9975", if: 1.0, quartile: "Q3", publisher: "Elsevier", focus: "Comparative pathology" }),
      ],
    },
  ],
});

upsertChild(stm, {
  id: "agriculture",
  name: "Agriculture & Food Science",
  children: [
    {
      id: "agronomy",
      name: "Agronomy",
      journals: [
        j({ name: "Field Crops Research", issn: "0378-4290", if: 5.6, quartile: "Q1", publisher: "Elsevier", focus: "Crop science" }),
        j({ name: "Agricultural Systems", issn: "0308-521X", if: 6.1, quartile: "Q1", publisher: "Elsevier", focus: "Farming systems" }),
        j({ name: "Agronomy Journal", issn: "0002-1962", if: 2.1, quartile: "Q2", publisher: "Wiley / ASA", focus: "Agronomy" }),
      ],
    },
    {
      id: "food-science",
      name: "Food Science",
      children: [
        {
          id: "food-chemistry",
          name: "Food Chemistry",
          journals: [
            j({ name: "Food Chemistry", issn: "0308-8146", if: 8.5, quartile: "Q1", publisher: "Elsevier", focus: "Food chemistry" }),
            j({ name: "Journal of Agricultural and Food Chemistry", issn: "0021-8561", if: 5.7, quartile: "Q1", publisher: "ACS", focus: "Ag & food chemistry" }),
            j({ name: "Food Mega Research Express", issn: "0000-0020", if: 0.3, quartile: "Q4", predatory: true, openAccess: true, publisher: "NutriFast Press", focus: "Predatory food science OA" }),
          ],
        },
        {
          id: "food-safety",
          name: "Food Safety",
          journals: [
            j({ name: "Food Control", issn: "0956-7135", if: 5.6, quartile: "Q1", publisher: "Elsevier", focus: "Food safety & quality" }),
            j({ name: "International Journal of Food Microbiology", issn: "0168-1605", if: 4.7, quartile: "Q1", publisher: "Elsevier", focus: "Food microbiology" }),
          ],
        },
      ],
    },
  ],
});

// Expand engineering with materials + civil + mechanical
const engineering = find(data.root, "engineering");
if (engineering) {
  upsertChild(engineering, {
    id: "materials-eng",
    name: "Materials Engineering",
    children: [
      {
        id: "structural-materials",
        name: "Structural Materials",
        journals: [
          j({ name: "Acta Materialia", issn: "1359-6454", if: 8.3, quartile: "Q1", publisher: "Elsevier", focus: "Materials science" }),
          j({ name: "Materials Science and Engineering A", issn: "0921-5093", if: 5.7, quartile: "Q1", publisher: "Elsevier", focus: "Structural materials" }),
          j({ name: "Journal of Materials Science", issn: "0022-2461", if: 3.5, quartile: "Q2", publisher: "Springer", focus: "Materials science" }),
        ],
      },
      {
        id: "nanomaterials",
        name: "Nanomaterials",
        journals: [
          j({ name: "ACS Nano", issn: "1936-0851", if: 15.8, quartile: "Q1", publisher: "ACS", focus: "Nanoscience" }),
          j({ name: "Nano Letters", issn: "1530-6984", if: 9.6, quartile: "Q1", publisher: "ACS", focus: "Nanoscale science" }),
        ],
      },
    ],
  });
  upsertChild(engineering, {
    id: "civil-eng",
    name: "Civil Engineering",
    journals: [
      j({ name: "Journal of Structural Engineering", issn: "0733-9445", if: 3.1, quartile: "Q1", publisher: "ASCE", focus: "Structural engineering" }),
      j({ name: "Construction and Building Materials", issn: "0950-0618", if: 7.4, quartile: "Q1", publisher: "Elsevier", focus: "Construction materials" }),
      j({ name: "Cement and Concrete Research", issn: "0008-8846", if: 10.9, quartile: "Q1", publisher: "Elsevier", focus: "Cement & concrete" }),
      j({ name: "Civil Eng Global Open", issn: "0000-0021", if: 0.2, quartile: "Q4", predatory: true, openAccess: true, publisher: "StructPublish", focus: "Predatory civil eng OA" }),
    ],
  });
  upsertChild(engineering, {
    id: "mechanical-eng",
    name: "Mechanical Engineering",
    journals: [
      j({ name: "International Journal of Mechanical Sciences", issn: "0020-7403", if: 6.4, quartile: "Q1", publisher: "Elsevier", focus: "Mechanical sciences" }),
      j({ name: "Journal of Fluid Mechanics", issn: "0022-1120", if: 3.6, quartile: "Q1", publisher: "Cambridge", focus: "Fluid mechanics" }),
      j({ name: "Mechanical Systems and Signal Processing", issn: "0888-3270", if: 7.9, quartile: "Q1", publisher: "Elsevier", focus: "Dynamics & signal processing" }),
    ],
  });
}

// Social sciences expansions
upsertChild(social, {
  id: "political-science",
  name: "Political Science",
  children: [
    {
      id: "comparative-politics",
      name: "Comparative Politics",
      journals: [
        j({ name: "American Political Science Review", issn: "0003-0554", if: 5.8, quartile: "Q1", publisher: "Cambridge / APSA", focus: "Political science" }),
        j({ name: "Comparative Political Studies", issn: "0010-4140", if: 3.4, quartile: "Q1", publisher: "SAGE", focus: "Comparative politics" }),
        j({ name: "World Politics", issn: "0043-8871", if: 3.7, quartile: "Q1", publisher: "Cambridge / Princeton", focus: "International & comparative politics" }),
      ],
    },
    {
      id: "ir",
      name: "International Relations",
      journals: [
        j({ name: "International Organization", issn: "0020-8183", if: 5.7, quartile: "Q1", publisher: "Cambridge", focus: "International relations" }),
        j({ name: "International Studies Quarterly", issn: "0020-8833", if: 2.5, quartile: "Q1", publisher: "Oxford / ISA", focus: "IR research" }),
        j({ name: "European Journal of International Relations", issn: "1354-0661", if: 3.0, quartile: "Q1", publisher: "SAGE", focus: "IR theory & empirics" }),
        j({ name: "Global IR Open Digest", issn: "0000-0022", if: 0.2, quartile: "Q4", predatory: true, openAccess: true, publisher: "PoliFast Journals", focus: "Predatory IR OA" }),
      ],
    },
    {
      id: "public-policy",
      name: "Public Policy",
      journals: [
        j({ name: "Journal of Policy Analysis and Management", issn: "0276-8739", if: 2.8, quartile: "Q1", publisher: "Wiley / APPAM", focus: "Policy analysis" }),
        j({ name: "Policy Studies Journal", issn: "0190-292X", if: 2.7, quartile: "Q1", publisher: "Wiley", focus: "Policy studies" }),
      ],
    },
  ],
});

upsertChild(social, {
  id: "business",
  name: "Business & Management",
  children: [
    {
      id: "management",
      name: "Management",
      children: [
        {
          id: "strategy",
          name: "Strategy",
          journals: [
            j({ name: "Strategic Management Journal", issn: "0143-2095", if: 6.5, quartile: "Q1", publisher: "Wiley / SMS", focus: "Strategic management" }),
            j({ name: "Academy of Management Journal", issn: "0001-4273", if: 9.5, quartile: "Q1", publisher: "AOM", focus: "Management research" }),
            j({ name: "Organization Science", issn: "1047-7039", if: 4.1, quartile: "Q1", publisher: "INFORMS", focus: "Organization theory" }),
          ],
        },
        {
          id: "ob-hr",
          name: "Organizational Behavior & HR",
          journals: [
            j({ name: "Journal of Management", issn: "0149-2063", if: 9.3, quartile: "Q1", publisher: "SAGE", focus: "Management" }),
            j({ name: "Human Resource Management", issn: "0090-4848", if: 5.2, quartile: "Q1", publisher: "Wiley", focus: "HRM" }),
            j({ name: "Leadership Quarterly", issn: "1048-9843", if: 7.5, quartile: "Q1", publisher: "Elsevier", focus: "Leadership" }),
          ],
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      journals: [
        j({ name: "Journal of Marketing", issn: "0022-2429", if: 11.5, quartile: "Q1", publisher: "SAGE / AMA", focus: "Marketing" }),
        j({ name: "Journal of Consumer Research", issn: "0093-5301", if: 5.7, quartile: "Q1", publisher: "Oxford", focus: "Consumer research" }),
        j({ name: "Journal of Marketing Research", issn: "0022-2437", if: 5.1, quartile: "Q1", publisher: "SAGE / AMA", focus: "Marketing research methods" }),
        j({ name: "Marketing Science Rapid", issn: "0000-0023", if: 0.3, quartile: "Q4", predatory: true, openAccess: true, publisher: "MarketOpen Hub", focus: "Predatory marketing OA" }),
      ],
    },
    {
      id: "finance",
      name: "Finance",
      journals: [
        j({ name: "Journal of Finance", issn: "0022-1082", if: 7.2, quartile: "Q1", publisher: "Wiley / AFA", focus: "Finance" }),
        j({ name: "Journal of Financial Economics", issn: "0304-405X", if: 8.0, quartile: "Q1", publisher: "Elsevier", focus: "Financial economics" }),
        j({ name: "Review of Financial Studies", issn: "0893-9454", if: 5.8, quartile: "Q1", publisher: "Oxford", focus: "Financial studies" }),
      ],
    },
    {
      id: "accounting",
      name: "Accounting",
      journals: [
        j({ name: "Journal of Accounting and Economics", issn: "0165-4101", if: 4.8, quartile: "Q1", publisher: "Elsevier", focus: "Accounting research" }),
        j({ name: "The Accounting Review", issn: "0001-4826", if: 4.2, quartile: "Q1", publisher: "AAA", focus: "Accounting" }),
        j({ name: "Accounting, Organizations and Society", issn: "0361-3682", if: 3.6, quartile: "Q1", publisher: "Elsevier", focus: "Accounting & organizations" }),
      ],
    },
  ],
});

upsertChild(social, {
  id: "anthropology",
  name: "Anthropology",
  children: [
    {
      id: "cultural-anthro",
      name: "Cultural Anthropology",
      journals: [
        j({ name: "American Anthropologist", issn: "0002-7294", if: 2.0, quartile: "Q1", publisher: "Wiley / AAA", focus: "Anthropology" }),
        j({ name: "Cultural Anthropology", issn: "0886-7356", if: 2.5, quartile: "Q1", openAccess: true, publisher: "SCA", focus: "Cultural anthropology", metricSourceIds: ["jcr", "jcr-quartile", "doaj"] }),
        j({ name: "Journal of the Royal Anthropological Institute", issn: "1359-0987", if: 1.6, quartile: "Q2", publisher: "Wiley / RAI", focus: "Social anthropology" }),
      ],
    },
    {
      id: "archaeology",
      name: "Archaeology",
      journals: [
        j({ name: "Journal of Archaeological Science", issn: "0305-4403", if: 2.6, quartile: "Q1", publisher: "Elsevier", focus: "Archaeological science" }),
        j({ name: "Antiquity", issn: "0003-598X", if: 1.7, quartile: "Q1", publisher: "Cambridge", focus: "Archaeology" }),
        j({ name: "American Antiquity", issn: "0002-7316", if: 2.2, quartile: "Q1", publisher: "Cambridge / SAA", focus: "American archaeology" }),
      ],
    },
  ],
});

upsertChild(social, {
  id: "communication",
  name: "Communication & Media",
  children: [
    {
      id: "comm-research",
      name: "Communication Research",
      journals: [
        j({ name: "Journal of Communication", issn: "0021-9916", if: 5.0, quartile: "Q1", publisher: "Oxford / ICA", focus: "Communication" }),
        j({ name: "Communication Research", issn: "0093-6502", if: 4.6, quartile: "Q1", publisher: "SAGE", focus: "Communication research" }),
        j({ name: "New Media & Society", issn: "1461-4448", if: 4.5, quartile: "Q1", publisher: "SAGE", focus: "Digital media & society" }),
      ],
    },
    {
      id: "journalism",
      name: "Journalism Studies",
      journals: [
        j({ name: "Journalism", issn: "1464-8849", if: 2.9, quartile: "Q1", publisher: "SAGE", focus: "Journalism studies" }),
        j({ name: "Digital Journalism", issn: "2167-0811", if: 4.5, quartile: "Q1", publisher: "Taylor & Francis", focus: "Digital journalism" }),
        j({ name: "Media Studies Instant", issn: "0000-0024", if: 0.2, quartile: "Q4", predatory: true, openAccess: true, publisher: "PressFast OA", focus: "Predatory media studies" }),
      ],
    },
  ],
});

upsertChild(social, {
  id: "law",
  name: "Law",
  children: [
    {
      id: "law-reviews",
      name: "Law Reviews & Jurisprudence",
      journals: [
        j({ name: "Harvard Law Review", issn: "0017-811X", if: 3.5, quartile: "Q1", publisher: "Harvard Law Review Assn.", focus: "US law" }),
        j({ name: "Yale Law Journal", issn: "0044-0094", if: 3.5, quartile: "Q1", publisher: "Yale Law Journal Co.", focus: "US law" }),
        j({ name: "Modern Law Review", issn: "0026-7961", if: 1.8, quartile: "Q1", publisher: "Wiley", focus: "UK / comparative law" }),
      ],
    },
    {
      id: "international-law",
      name: "International Law",
      journals: [
        j({ name: "American Journal of International Law", issn: "0002-9300", if: 2.4, quartile: "Q1", publisher: "Cambridge / ASIL", focus: "International law" }),
        j({ name: "European Journal of International Law", issn: "0938-5428", if: 1.9, quartile: "Q1", publisher: "Oxford", focus: "International law" }),
      ],
    },
    {
      id: "criminology",
      name: "Criminology",
      journals: [
        j({ name: "Criminology", issn: "0011-1384", if: 4.8, quartile: "Q1", publisher: "Wiley / ASC", focus: "Criminology" }),
        j({ name: "British Journal of Criminology", issn: "0007-0955", if: 2.7, quartile: "Q1", publisher: "Oxford", focus: "Criminology" }),
        j({ name: "Journal of Quantitative Criminology", issn: "0748-4518", if: 3.1, quartile: "Q1", publisher: "Springer", focus: "Quantitative criminology" }),
      ],
    },
  ],
});

upsertChild(social, {
  id: "geography",
  name: "Geography",
  children: [
    {
      id: "human-geography",
      name: "Human Geography",
      journals: [
        j({ name: "Progress in Human Geography", issn: "0309-1325", if: 6.5, quartile: "Q1", publisher: "SAGE", focus: "Human geography" }),
        j({ name: "Annals of the American Association of Geographers", issn: "2469-4452", if: 3.1, quartile: "Q1", publisher: "Taylor & Francis", focus: "Geography" }),
        j({ name: "Transactions of the Institute of British Geographers", issn: "0020-2754", if: 3.3, quartile: "Q1", publisher: "Wiley / RGS", focus: "Geography" }),
      ],
    },
    {
      id: "gis",
      name: "GIS & Spatial Analysis",
      journals: [
        j({ name: "International Journal of Geographical Information Science", issn: "1365-8816", if: 4.3, quartile: "Q1", publisher: "Taylor & Francis", focus: "GIScience" }),
        j({ name: "Computers, Environment and Urban Systems", issn: "0198-9715", if: 6.0, quartile: "Q1", publisher: "Elsevier", focus: "Urban analytics & GIS" }),
      ],
    },
  ],
});

// Arts expansions
if (arts) {
  upsertChild(arts, {
    id: "literature",
    name: "Literary Studies",
    children: [
      {
        id: "english-lit",
        name: "English & Comparative Literature",
        journals: [
          j({ name: "PMLA", issn: "0030-8129", if: 0.9, quartile: "Q1", publisher: "MLA", focus: "Literary studies" }),
          j({ name: "Modern Language Quarterly", issn: "0026-7929", if: 0.4, quartile: "Q2", publisher: "Duke", focus: "Literary history & criticism" }),
          j({ name: "New Literary History", issn: "0028-6087", if: 1.0, quartile: "Q1", publisher: "Johns Hopkins", focus: "Literary theory" }),
        ],
      },
    ],
  });
  upsertChild(arts, {
    id: "art-history",
    name: "Art History",
    journals: [
      j({ name: "The Art Bulletin", issn: "0004-3079", if: 0.6, quartile: "Q1", publisher: "CAA / Taylor & Francis", focus: "Art history" }),
      j({ name: "Art History", issn: "0141-6790", if: 0.5, quartile: "Q1", publisher: "Wiley / AAH", focus: "Art history" }),
      j({ name: "Oxford Art Journal", issn: "0142-6540", if: 0.4, quartile: "Q2", publisher: "Oxford", focus: "Art history & criticism" }),
    ],
  });
  upsertChild(arts, {
    id: "musicology",
    name: "Musicology",
    journals: [
      j({ name: "Journal of the American Musicological Society", issn: "0003-0139", if: 0.7, quartile: "Q1", publisher: "AMS / University of California Press", focus: "Musicology" }),
      j({ name: "Music Analysis", issn: "0262-5245", if: 0.5, quartile: "Q2", publisher: "Wiley", focus: "Music analysis" }),
      j({ name: "Ethnomusicology", issn: "0014-1836", if: 0.8, quartile: "Q1", publisher: "University of Illinois Press / SEM", focus: "Ethnomusicology" }),
    ],
  });
}

// Deduplicate journals within each node by name
function dedupe(node) {
  if (node.journals?.length) {
    const seen = new Set();
    node.journals = node.journals.filter((x) => {
      const k = x.name.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }
  for (const c of node.children || []) dedupe(c);
}
dedupe(data.root);

data.updated = "2026-10";
data.disclaimer =
  "Educational snapshot curated in public/data.js (no runtime API fetch). Impact factors and quartiles are illustrative approximations inspired by JCR/Scopus patterns—verify live values in linked primary sources before submission decisions.";

const header = `/**
 * Nested academic domain taxonomy with sample journals.
 *
 * RUNTIME FETCH: none. The browser loads this local file only (\`data.js\`).
 * Values are a curated educational snapshot, not a live API response.
 *
 * Canonical source registry lives in \`sources\` below and is rendered in the UI.
 * Validate with: node scripts/validate-data.mjs
 * Regenerate/expand with: node scripts/expand-data.mjs
 */
`;

const body = `window.ATLAS_DATA = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(dataPath, header + body);
console.log("Wrote", dataPath);

function count(node, acc = { domains: 0, journals: 0 }) {
  acc.domains++;
  acc.journals += (node.journals || []).length;
  for (const c of node.children || []) count(c, acc);
  return acc;
}
console.log(count(data.root));
