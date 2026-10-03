/**
 * Nested academic domain taxonomy with sample journals and conferences.
 *
 * RUNTIME FETCH: none. The browser loads this local file only (`data.js`).
 * Values are a curated educational snapshot, not a live API response.
 * Conference rows store series identity only — not CORE, JCR, or Scopus ranks.
 *
 * Canonical source registry lives in `sources` below and is rendered in the UI.
 * Validate with: node scripts/validate-data.mjs
 * Expand with: node scripts/expand-data.mjs && node scripts/apply-coverage.mjs
 */
window.ATLAS_DATA = {
  "updated": "2026-10",
  "fetch": {
    "runtime": false,
    "localFile": "data.js",
    "method": "No remote fetch at runtime. Journal and conference rows are curated into this static file for GitHub Pages."
  },
  "disclaimer": "Educational snapshot curated in public/data.js (no runtime API fetch). Journal impact factors and quartiles are illustrative approximations inspired by JCR/Scopus patterns. Conference rows list series identity only (name, acronym, organizer, cadence, format) and are not CORE, JCR, or Scopus scores. Verify live values in linked primary sources before submission or attendance decisions.",
  "sources": [
    {
      "id": "jcr",
      "field": "Impact Factor (IF)",
      "provider": "Clarivate Journal Citation Reports (JCR) / Web of Science",
      "url": "https://jcr.clarivate.com/",
      "howWeUse": "IF numbers in this demo are illustrative approximations styled after JCR Journal Impact Factor. ATLAS does not call Clarivate APIs.",
      "access": "Institutional / paid subscription"
    },
    {
      "id": "jcr-quartile",
      "field": "Quartile (Q1–Q4)",
      "provider": "Clarivate JCR category rankings (and often mirrored via Scopus/SCImago)",
      "url": "https://jcr.clarivate.com/",
      "howWeUse": "Quartiles reflect relative rank within a subject category. Demo values are assigned for teaching the Q1–Q4 pattern.",
      "access": "Institutional / paid subscription"
    },
    {
      "id": "scopus",
      "field": "CiteScore / SJR alternatives",
      "provider": "Scopus (Elsevier) & SCImago Journal Rank",
      "url": "https://www.scopus.com/",
      "secondaryUrl": "https://www.scimagojr.com/",
      "howWeUse": "Not stored as separate columns here; listed so researchers know where to cross-check rankings beyond IF.",
      "access": "Scopus often institutional; SCImago is publicly browsable"
    },
    {
      "id": "doaj",
      "field": "Open-access legitimacy",
      "provider": "Directory of Open Access Journals (DOAJ)",
      "url": "https://doaj.org/",
      "howWeUse": "OA badges in the demo are illustrative. Use DOAJ to confirm legitimate open-access journals.",
      "access": "Public"
    },
    {
      "id": "predatory",
      "field": "Predatory / deceptive journals",
      "provider": "Think. Check. Submit. + Cabells Predatory Reports + librarian watchlists",
      "url": "https://thinkchecksubmit.org/",
      "secondaryUrl": "https://cabells.com/predatory-reports",
      "howWeUse": "Red 'Predatory' flags are educational composites (spam solicitation, fake boards, guaranteed acceptance). Not a live Cabells feed.",
      "access": "Think. Check. Submit. is public; Cabells is subscription"
    },
    {
      "id": "issn",
      "field": "ISSN identifiers",
      "provider": "ISSN International Centre / publisher mastheads",
      "url": "https://portal.issn.org/",
      "howWeUse": "Real ISSNs used where widely known; placeholder ISSNs (0000-00xx) mark fictional predatory examples.",
      "access": "Public"
    },
    {
      "id": "taxonomy",
      "field": "Domain / subdomain tree",
      "provider": "OECD Fields of Science and Technology (FOS) inspired hierarchy + common faculty structures",
      "url": "https://www.oecd.org/science/inno/38235147.pdf",
      "howWeUse": "Hierarchy is curated for navigation depth (medicine & psychology expanded). Not an official OECD dump.",
      "access": "Public PDF"
    },
    {
      "id": "venue-identity",
      "field": "Conference series identity",
      "provider": "Organizing society or foundation",
      "url": "https://thinkchecksubmit.org/think-check-attend/",
      "howWeUse": "Name, acronym, organizer, focus, cadence, and format are illustrative labels so you can browse widely known series inside a domain. They are not acceptance rates, citation counts, or ranks. Confirm the current call for papers with the organizer.",
      "access": "Public"
    },
    {
      "id": "dblp",
      "field": "Computing venue record",
      "provider": "dblp computer science bibliography",
      "url": "https://dblp.org/",
      "howWeUse": "Linked on computing conferences so you can confirm the series in a public bibliography. ATLAS does not copy citation counts or h-indexes from dblp.",
      "access": "Public"
    },
    {
      "id": "core-portal",
      "field": "Conference ranks (not stored)",
      "provider": "CORE Conference Portal",
      "url": "https://portal.core.edu.au/conf-ranks/",
      "howWeUse": "CORE publishes its own ranks. This snapshot does not store those ranks or any numeric conference score. Open the portal to check a computing venue yourself.",
      "access": "Public"
    },
    {
      "id": "think-check-attend",
      "field": "Conference quality checks",
      "provider": "Think. Check. Attend.",
      "url": "https://thinkchecksubmit.org/think-check-attend/",
      "howWeUse": "Checklist for judging whether a meeting is a suitable place to present. This map does not flag predatory conferences and does not score them.",
      "access": "Public"
    }
  ],
  "root": {
    "id": "academia",
    "name": "Academia",
    "description": "All research domains",
    "children": [
      {
        "id": "stm",
        "name": "Science, Technology & Medicine",
        "description": "STEM and clinical research",
        "children": [
          {
            "id": "life",
            "name": "Life Sciences",
            "description": "Biology and living systems",
            "children": [
              {
                "id": "molbio",
                "name": "Molecular Biology",
                "description": "Molecules of life",
                "children": [
                  {
                    "id": "genetics",
                    "name": "Genetics",
                    "description": "Heredity and variation",
                    "children": [
                      {
                        "id": "human-genetics",
                        "name": "Human Genetics",
                        "description": "Human genome and disease",
                        "journals": [
                          {
                            "name": "Nature Genetics",
                            "issn": "1061-4036",
                            "if": 31.7,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Nature Portfolio",
                            "focus": "Human & medical genetics",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "American Journal of Human Genetics",
                            "issn": "0002-9297",
                            "if": 9.8,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Cell Press / ASHG",
                            "focus": "Clinical human genetics",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Human Molecular Genetics",
                            "issn": "0964-6906",
                            "if": 3.9,
                            "quartile": "Q2",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Oxford University Press",
                            "focus": "Molecular basis of disease",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Global Human Gene Reports",
                            "issn": "0000-0001",
                            "if": 0.4,
                            "quartile": "Q4",
                            "predatory": true,
                            "openAccess": true,
                            "publisher": "Rapid Scholar Press",
                            "focus": "Solicits broadly; opaque peer review",
                            "metricSourceIds": [
                              "predatory",
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Genome Medicine",
                            "issn": "1756-994X",
                            "if": 10.5,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": true,
                            "publisher": "BMC",
                            "focus": "Genome Medicine",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile",
                              "doaj"
                            ]
                          },
                          {
                            "name": "European Journal of Human Genetics",
                            "issn": "1018-4813",
                            "if": 3.7,
                            "quartile": "Q2",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Springer Nature",
                            "focus": "European Journal of Human Genetics",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          }
                        ]
                      },
                      {
                        "id": "plant-genetics",
                        "name": "Plant Genetics",
                        "description": "Crop and plant genomes",
                        "journals": [
                          {
                            "name": "The Plant Cell",
                            "issn": "1040-4651",
                            "if": 11.6,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "ASPB",
                            "focus": "Plant molecular genetics",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Plant Journal",
                            "issn": "0960-7412",
                            "if": 6.4,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Wiley",
                            "focus": "Plant biology & genetics",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "AgriGene Fast Track",
                            "issn": "0000-0002",
                            "if": 0.2,
                            "quartile": "Q4",
                            "predatory": true,
                            "openAccess": true,
                            "publisher": "AgriMega Open",
                            "focus": "Pay-to-publish; fake editorial board",
                            "metricSourceIds": [
                              "predatory",
                              "jcr",
                              "jcr-quartile"
                            ]
                          }
                        ]
                      }
                    ],
                    "journals": [
                      {
                        "name": "Genetics",
                        "issn": "0016-6731",
                        "if": 3.3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Genetics Society of America",
                        "focus": "Classical & molecular genetics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "genomics",
                    "name": "Genomics",
                    "description": "Genome-scale biology",
                    "journals": [
                      {
                        "name": "Genome Biology",
                        "issn": "1474-760X",
                        "if": 12.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "BMC / Springer Nature",
                        "focus": "Genomics & computational biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Genome Research",
                        "issn": "1088-9051",
                        "if": 8.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cold Spring Harbor Lab Press",
                        "focus": "Genome structure & function",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "BMC Genomics",
                        "issn": "1471-2164",
                        "if": 3.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "BMC",
                        "focus": "Open genomics research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "GigaScience",
                        "issn": "2047-217X",
                        "if": 4.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Oxford",
                        "focus": "GigaScience",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Genomics",
                        "issn": "0888-7543",
                        "if": 3.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Genomics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "cell-signaling",
                    "name": "Cell Signaling",
                    "description": "Pathways and transduction",
                    "journals": [
                      {
                        "name": "Cell",
                        "issn": "0092-8674",
                        "if": 45.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cell Press",
                        "focus": "Broad cell biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Molecular Cell",
                        "issn": "1097-2765",
                        "if": 16,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cell Press",
                        "focus": "Molecular mechanisms",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Cellular Signal Express",
                        "issn": "0000-0003",
                        "if": 0.6,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "BioWorld Instant",
                        "focus": "Aggressive spam solicitation",
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ],
                "journals": [
                  {
                    "name": "EMBO Journal",
                    "issn": "0261-4189",
                    "if": 9.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "EMBO Press",
                    "focus": "Molecular life sciences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "ecology",
                "name": "Ecology & Evolution",
                "description": "Organisms and environments",
                "children": [
                  {
                    "id": "marine-ecology",
                    "name": "Marine Ecology",
                    "description": "Ocean ecosystems",
                    "journals": [
                      {
                        "name": "Marine Ecology Progress Series",
                        "issn": "0171-8630",
                        "if": 2.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Inter-Research",
                        "focus": "Marine ecological processes",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Limnology and Oceanography",
                        "issn": "0024-3590",
                        "if": 3.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ASLO / Wiley",
                        "focus": "Aquatic sciences",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Estuarine, Coastal and Shelf Science",
                        "issn": "0272-7714",
                        "if": 2.6,
                        "quartile": "Q2",
                        "publisher": "Elsevier",
                        "focus": "Coastal science",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Marine Biology",
                        "issn": "0025-3162",
                        "if": 2,
                        "quartile": "Q2",
                        "publisher": "Springer",
                        "focus": "Marine biology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of Experimental Marine Biology and Ecology",
                        "issn": "0022-0981",
                        "if": 1.8,
                        "quartile": "Q3",
                        "publisher": "Elsevier",
                        "focus": "Experimental marine ecology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "conservation",
                    "name": "Conservation Biology",
                    "description": "Biodiversity protection",
                    "journals": [
                      {
                        "name": "Conservation Biology",
                        "issn": "0888-8892",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / SCB",
                        "focus": "Conservation science & policy",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Biological Conservation",
                        "issn": "0006-3207",
                        "if": 5.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Biodiversity conservation",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "World Conservation Bulletin",
                        "issn": "0000-0004",
                        "if": 0.3,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "EcoPublish Global",
                        "focus": "Listed on predatory watchlists",
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Conservation Letters",
                        "issn": "1755-263X",
                        "if": 5.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Wiley",
                        "focus": "Conservation Letters",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Oryx",
                        "issn": "0030-6053",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cambridge",
                        "focus": "Oryx",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "evolutionary-bio",
                    "name": "Evolutionary Biology",
                    "description": "Origins and adaptation",
                    "journals": [
                      {
                        "name": "Evolution",
                        "issn": "0014-3820",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SSE / Oxford",
                        "focus": "Evolutionary theory",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Molecular Biology and Evolution",
                        "issn": "0737-4038",
                        "if": 8.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford University Press",
                        "focus": "Molecular evolution",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Evolutionary Biology",
                        "issn": "1010-061X",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Journal of Evolutionary Biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Evolution Letters",
                        "issn": "2056-3744",
                        "if": 3.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Oxford",
                        "focus": "Evolution Letters",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "microbiology",
                "name": "Microbiology",
                "description": "Microbes and hosts",
                "children": [
                  {
                    "id": "virology",
                    "name": "Virology",
                    "journals": [
                      {
                        "name": "Journal of Virology",
                        "issn": "0022-538X",
                        "if": 4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ASM",
                        "focus": "Virus biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nature Reviews Microbiology",
                        "issn": "1740-1526",
                        "if": 69.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Microbiology reviews",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Viruses",
                        "issn": "1999-4915",
                        "if": 3.8,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "MDPI",
                        "focus": "Viruses",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Journal of General Virology",
                        "issn": "0022-1317",
                        "if": 3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Microbiology Society",
                        "focus": "Journal of General Virology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "bacteriology",
                    "name": "Bacteriology",
                    "journals": [
                      {
                        "name": "mBio",
                        "issn": "2150-7511",
                        "if": 5.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "ASM",
                        "focus": "Broad microbiology OA",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Applied and Environmental Microbiology",
                        "issn": "0099-2240",
                        "if": 3.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ASM",
                        "focus": "Applied microbes",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "FEMS Microbiology Letters",
                        "issn": "0378-1097",
                        "if": 2.1,
                        "quartile": "Q3",
                        "publisher": "Oxford",
                        "focus": "Microbiology letters",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Archives of Microbiology",
                        "issn": "0302-8933",
                        "if": 2.3,
                        "quartile": "Q3",
                        "publisher": "Springer",
                        "focus": "Microbiology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "neuroscience",
                "name": "Neuroscience",
                "journals": [],
                "children": [
                  {
                    "id": "systems-neuro",
                    "name": "Systems Neuroscience",
                    "journals": [
                      {
                        "name": "Neuron",
                        "issn": "0896-6273",
                        "if": 14.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cell Press",
                        "focus": "Neuron",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nature Neuroscience",
                        "issn": "1097-6256",
                        "if": 21.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Nature Neuroscience",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Neuroscience",
                        "issn": "0270-6474",
                        "if": 4.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SfN",
                        "focus": "Journal of Neuroscience",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "eLife",
                        "issn": "2050-084X",
                        "if": 6.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "eLife",
                        "focus": "eLife",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "cellular-neuro",
                    "name": "Cellular & Molecular Neuroscience",
                    "journals": [
                      {
                        "name": "Molecular Psychiatry",
                        "issn": "1359-4184",
                        "if": 9.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer Nature",
                        "focus": "Molecular Psychiatry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Glia",
                        "issn": "0894-1491",
                        "if": 5.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Glia",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Neurochemistry",
                        "issn": "0022-3042",
                        "if": 4.2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Journal of Neurochemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "computational-neuro",
                    "name": "Computational Neuroscience",
                    "journals": [
                      {
                        "name": "PLOS Computational Biology",
                        "issn": "1553-734X",
                        "if": 3.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "PLOS",
                        "focus": "PLOS Computational Biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Journal of Computational Neuroscience",
                        "issn": "0929-5313",
                        "if": 1.5,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Journal of Computational Neuroscience",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Network Neuroscience",
                        "issn": "2472-1751",
                        "if": 3.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "MIT Press",
                        "focus": "Network Neuroscience",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "immunology-basic",
                "name": "Immunology",
                "journals": [],
                "children": [
                  {
                    "id": "basic-immuno",
                    "name": "Basic Immunology",
                    "journals": [
                      {
                        "name": "Nature Immunology",
                        "issn": "1529-2908",
                        "if": 27.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Nature Immunology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Immunity",
                        "issn": "1074-7613",
                        "if": 25.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cell Press",
                        "focus": "Immunity",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Immunology",
                        "issn": "0022-1767",
                        "if": 3.6,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AAI",
                        "focus": "Journal of Immunology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Frontiers in Immunology",
                        "issn": "1664-3224",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Frontiers",
                        "focus": "Frontiers in Immunology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "innate-immunity",
                    "name": "Innate Immunity",
                    "journals": [
                      {
                        "name": "Nature Reviews Immunology",
                        "issn": "1474-1733",
                        "if": 67.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Nature Reviews Immunology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Mucosal Immunology",
                        "issn": "1933-0219",
                        "if": 7.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer Nature",
                        "focus": "Mucosal Immunology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "developmental-bio",
                "name": "Developmental Biology",
                "journals": [
                  {
                    "name": "Development",
                    "issn": "0950-1991",
                    "if": 4.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Company of Biologists",
                    "focus": "Development",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Developmental Cell",
                    "issn": "1534-5807",
                    "if": 10.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cell Press",
                    "focus": "Developmental Cell",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Developmental Biology",
                    "issn": "0012-1606",
                    "if": 2.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Developmental Biology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Genesis",
                    "issn": "1526-954X",
                    "if": 1.6,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Genesis",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "biophysics",
                "name": "Biophysics",
                "journals": [
                  {
                    "name": "Biophysical Journal",
                    "issn": "0006-3495",
                    "if": 3.4,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cell Press / Biophysical Society",
                    "focus": "Biophysical Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Structure",
                    "issn": "0969-2126",
                    "if": 4.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cell Press",
                    "focus": "Structure",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Molecular Biology",
                    "issn": "0022-2836",
                    "if": 4.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Molecular Biology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Proteins: Structure, Function, and Bioinformatics",
                    "issn": "0887-3585",
                    "if": 2.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Proteins: Structure, Function, and Bioinformatics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "plant-bio",
                "name": "Plant Biology",
                "journals": [],
                "children": [
                  {
                    "id": "botany",
                    "name": "Botany",
                    "journals": [
                      {
                        "name": "New Phytologist",
                        "issn": "0028-646X",
                        "if": 8.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "New Phytologist",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Plant Physiology",
                        "issn": "0032-0889",
                        "if": 6.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ASPB / Oxford",
                        "focus": "Plant Physiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Annals of Botany",
                        "issn": "0305-7364",
                        "if": 3.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford",
                        "focus": "Annals of Botany",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "American Journal of Botany",
                        "issn": "0002-9122",
                        "if": 2.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / BSA",
                        "focus": "American Journal of Botany",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "plant-pathology",
                    "name": "Plant Pathology",
                    "journals": [
                      {
                        "name": "Molecular Plant Pathology",
                        "issn": "1464-6722",
                        "if": 4.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Molecular Plant Pathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Plant Pathology",
                        "issn": "0032-0862",
                        "if": 2.6,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Plant Pathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Phytopathology",
                        "issn": "0031-949X",
                        "if": 3.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Phytopathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "zoology",
                "name": "Zoology & Animal Biology",
                "journals": [
                  {
                    "name": "Journal of Experimental Biology",
                    "issn": "0022-0949",
                    "if": 2.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Company of Biologists",
                    "focus": "Journal of Experimental Biology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Animal Behaviour",
                    "issn": "0003-3472",
                    "if": 2.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Animal Behaviour",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Zoology",
                    "issn": "0952-8369",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley / ZSL",
                    "focus": "Journal of Zoology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Zoological Journal of the Linnean Society",
                    "issn": "0024-4082",
                    "if": 2.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Zoological Journal of the Linnean Society",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "bioinformatics",
                "name": "Bioinformatics",
                "journals": [
                  {
                    "name": "Bioinformatics",
                    "issn": "1367-4803",
                    "if": 4.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Bioinformatics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Nucleic Acids Research",
                    "issn": "0305-1048",
                    "if": 14.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "Oxford",
                    "focus": "Nucleic Acids Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "Briefings in Bioinformatics",
                    "issn": "1467-5463",
                    "if": 9.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Briefings in Bioinformatics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "BMC Bioinformatics",
                    "issn": "1471-2105",
                    "if": 2.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "BMC",
                    "focus": "BMC Bioinformatics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "Bioinfo Mega Fast Track",
                    "issn": "0000-0032",
                    "if": 0.4,
                    "quartile": "Q4",
                    "predatory": true,
                    "openAccess": true,
                    "publisher": "SeqPublish",
                    "focus": "Predatory bioinformatics OA",
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "physical",
            "name": "Physical Sciences",
            "description": "Physics, chemistry, earth",
            "children": [
              {
                "id": "physics",
                "name": "Physics",
                "children": [
                  {
                    "id": "particle",
                    "name": "Particle & High-Energy Physics",
                    "journals": [
                      {
                        "name": "Physical Review Letters",
                        "issn": "0031-9007",
                        "if": 8.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Flagship physics letters",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of High Energy Physics",
                        "issn": "1029-8479",
                        "if": 5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "SISSA / Springer",
                        "focus": "HEP theory & experiment",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Quantum Frontier Instant",
                        "issn": "0000-0005",
                        "if": 0.5,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "Nova Quantum Press",
                        "focus": "Guaranteed acceptance claims",
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Physical Review D",
                        "issn": "2470-0010",
                        "if": 5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Physical Review D",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Physical Journal C",
                        "issn": "1434-6044",
                        "if": 4.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "European Physical Journal C",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "think-check-attend"
                        ],
                        "name": "International Conference on High Energy Physics",
                        "acronym": "ICHEP",
                        "organizer": "IUPAP Commission C11",
                        "focus": "High energy physics",
                        "cadence": "biennial",
                        "format": "conference"
                      }
                    ]
                  },
                  {
                    "id": "condensed",
                    "name": "Condensed Matter",
                    "journals": [
                      {
                        "name": "Physical Review B",
                        "issn": "2469-9950",
                        "if": 3.7,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Condensed matter physics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nature Physics",
                        "issn": "1745-2473",
                        "if": 19.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Broad physics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of Physics: Condensed Matter",
                        "issn": "0953-8984",
                        "if": 2.3,
                        "quartile": "Q2",
                        "publisher": "IOP",
                        "focus": "Condensed matter",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Solid State Communications",
                        "issn": "0038-1098",
                        "if": 1.8,
                        "quartile": "Q3",
                        "publisher": "Elsevier",
                        "focus": "Solid state physics",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "optics",
                    "name": "Optics & Photonics",
                    "journals": [
                      {
                        "name": "Optica",
                        "issn": "2334-2536",
                        "if": 8.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Optica Publishing Group",
                        "focus": "Optics research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Applied Optics",
                        "issn": "1559-128X",
                        "if": 1.7,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Optica Publishing Group",
                        "focus": "Applied optical systems",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of the Optical Society of America A",
                        "issn": "1084-7529",
                        "if": 1.5,
                        "quartile": "Q3",
                        "publisher": "Optica",
                        "focus": "Optics",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of Modern Optics",
                        "issn": "0950-0340",
                        "if": 1.1,
                        "quartile": "Q3",
                        "publisher": "Taylor & Francis",
                        "focus": "Modern optics",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "astrophysics",
                    "name": "Astronomy & Astrophysics",
                    "journals": [
                      {
                        "name": "Astrophysical Journal",
                        "issn": "0004-637X",
                        "if": 4.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IOP / AAS",
                        "focus": "Astrophysical Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Astronomy & Astrophysics",
                        "issn": "0004-6361",
                        "if": 5.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "EDP Sciences",
                        "focus": "Astronomy & Astrophysics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Monthly Notices of the Royal Astronomical Society",
                        "issn": "0035-8711",
                        "if": 4.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / RAS",
                        "focus": "Monthly Notices of the Royal Astronomical Society",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Astronomical Journal",
                        "issn": "0004-6256",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IOP / AAS",
                        "focus": "Astronomical Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Publications of the Astronomical Society of the Pacific",
                        "issn": "0004-6280",
                        "if": 3.3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IOP",
                        "focus": "Publications of the Astronomical Society of the Pacific",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "quantum",
                    "name": "Quantum Information & Quantum Physics",
                    "journals": [
                      {
                        "name": "PRX Quantum",
                        "issn": "2691-3399",
                        "if": 9.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "APS",
                        "focus": "PRX Quantum",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Quantum Science Journal",
                        "issn": "2521-327X",
                        "if": 5.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Quantum Verein",
                        "focus": "Quantum Science Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Physical Review A",
                        "issn": "2469-9926",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Physical Review A",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "npj Quantum Information",
                        "issn": "2056-6387",
                        "if": 7.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Nature Portfolio",
                        "focus": "npj Quantum Information",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "nuclear-physics",
                    "name": "Nuclear Physics",
                    "journals": [
                      {
                        "name": "Physical Review C",
                        "issn": "2469-9985",
                        "if": 3.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Physical Review C",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nuclear Physics A",
                        "issn": "0375-9474",
                        "if": 1.5,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Nuclear Physics A",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Physical Journal A",
                        "issn": "1434-6001",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "European Physical Journal A",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "soft-matter",
                    "name": "Soft Matter & Statistical Physics",
                    "journals": [
                      {
                        "name": "Soft Matter",
                        "issn": "1744-683X",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Soft Matter",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Physical Review E",
                        "issn": "2470-0045",
                        "if": 2.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APS",
                        "focus": "Physical Review E",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Statistical Mechanics",
                        "issn": "1742-5468",
                        "if": 2.2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IOP",
                        "focus": "Journal of Statistical Mechanics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "chemistry",
                "name": "Chemistry",
                "children": [
                  {
                    "id": "organic-chem",
                    "name": "Organic Chemistry",
                    "journals": [
                      {
                        "name": "Journal of the American Chemical Society",
                        "issn": "0002-7863",
                        "if": 14.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Broad chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Organic Letters",
                        "issn": "1523-7060",
                        "if": 4.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Organic synthesis letters",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Rapid Organic Chemistry World",
                        "issn": "0000-0006",
                        "if": 0.3,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "ChemFast OA",
                        "focus": "Predatory OA mill",
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Organic & Biomolecular Chemistry",
                        "issn": "1477-0520",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Organic & Biomolecular Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Tetrahedron",
                        "issn": "0040-4020",
                        "if": 2.1,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Tetrahedron",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "materials-chem",
                    "name": "Materials Chemistry",
                    "journals": [
                      {
                        "name": "Advanced Materials",
                        "issn": "0935-9648",
                        "if": 27.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Materials science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Chemistry of Materials",
                        "issn": "0897-4756",
                        "if": 7.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Materials chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Materials Chemistry A",
                        "issn": "2050-7488",
                        "if": 10.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Journal of Materials Chemistry A",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "ACS Applied Materials & Interfaces",
                        "issn": "1944-8244",
                        "if": 8.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "ACS Applied Materials & Interfaces",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "analytical-chem",
                    "name": "Analytical Chemistry",
                    "journals": [
                      {
                        "name": "Analytical Chemistry",
                        "issn": "0003-2700",
                        "if": 6.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Analytical Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Analytica Chimica Acta",
                        "issn": "0003-2670",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Analytica Chimica Acta",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Talanta",
                        "issn": "0039-9140",
                        "if": 5.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Talanta",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Analyst",
                        "issn": "0003-2654",
                        "if": 3.6,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Analyst",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "inorganic-chem",
                    "name": "Inorganic Chemistry",
                    "journals": [
                      {
                        "name": "Inorganic Chemistry",
                        "issn": "0020-1669",
                        "if": 4.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Inorganic Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Dalton Transactions",
                        "issn": "1477-9226",
                        "if": 3.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Dalton Transactions",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Journal of Inorganic Chemistry",
                        "issn": "1434-1948",
                        "if": 2.2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "European Journal of Inorganic Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "physical-chem",
                    "name": "Physical Chemistry",
                    "journals": [
                      {
                        "name": "Journal of Physical Chemistry Letters",
                        "issn": "1948-7185",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Journal of Physical Chemistry Letters",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Physical Chemistry C",
                        "issn": "1932-7447",
                        "if": 3.3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Journal of Physical Chemistry C",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Physical Chemistry Chemical Physics",
                        "issn": "1463-9076",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Physical Chemistry Chemical Physics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Chemical Physics",
                        "issn": "0021-9606",
                        "if": 3.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AIP",
                        "focus": "Journal of Chemical Physics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "biochemistry",
                    "name": "Biochemistry",
                    "journals": [
                      {
                        "name": "Journal of Biological Chemistry",
                        "issn": "0021-9258",
                        "if": 4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Elsevier / ASBMB",
                        "focus": "Journal of Biological Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Biochemistry",
                        "issn": "0006-2960",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "Biochemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nature Chemical Biology",
                        "issn": "1552-4450",
                        "if": 12.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Nature Chemical Biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "ACS Chemical Biology",
                        "issn": "1554-8929",
                        "if": 3.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACS",
                        "focus": "ACS Chemical Biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "green-chem",
                    "name": "Green & Environmental Chemistry",
                    "journals": [
                      {
                        "name": "Green Chemistry",
                        "issn": "1463-9262",
                        "if": 9.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Green Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "ChemSusChem",
                        "issn": "1864-5631",
                        "if": 7.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "ChemSusChem",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Environmental Science: Nano",
                        "issn": "2051-8153",
                        "if": 5.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSC",
                        "focus": "Environmental Science: Nano",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "earth",
                "name": "Earth & Planetary",
                "children": [
                  {
                    "id": "climate",
                    "name": "Climate Science",
                    "journals": [
                      {
                        "name": "Nature Climate Change",
                        "issn": "1758-678X",
                        "if": 27.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Climate research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Climate",
                        "issn": "0894-8755",
                        "if": 4.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMS",
                        "focus": "Climate dynamics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Climate Dynamics",
                        "issn": "0930-7575",
                        "if": 3.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Climate Dynamics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Climatic Change",
                        "issn": "0165-0009",
                        "if": 4.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Climatic Change",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Wiley Interdisciplinary Reviews: Climate Change",
                        "issn": "1757-7780",
                        "if": 8.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Wiley Interdisciplinary Reviews: Climate Change",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "geology",
                    "name": "Geology",
                    "journals": [
                      {
                        "name": "Geology",
                        "issn": "0091-7613",
                        "if": 4.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "GSA",
                        "focus": "Geologic processes",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Earth and Planetary Science Letters",
                        "issn": "0012-821X",
                        "if": 4.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Earth & planetary science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Geological Magazine",
                        "issn": "0016-7568",
                        "if": 1.9,
                        "quartile": "Q2",
                        "publisher": "Cambridge",
                        "focus": "Geology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of Geological Society",
                        "issn": "0016-7648",
                        "if": 2.5,
                        "quartile": "Q2",
                        "publisher": "Geological Society",
                        "focus": "Geology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "oceanography",
                    "name": "Oceanography",
                    "journals": [
                      {
                        "name": "Journal of Physical Oceanography",
                        "issn": "0022-3670",
                        "if": 3.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMS",
                        "focus": "Journal of Physical Oceanography",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Geophysical Research: Oceans",
                        "issn": "2169-9275",
                        "if": 3.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AGU / Wiley",
                        "focus": "Journal of Geophysical Research: Oceans",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Ocean Science",
                        "issn": "1812-0784",
                        "if": 3.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Copernicus",
                        "focus": "Ocean Science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Deep Sea Research Part I",
                        "issn": "0967-0637",
                        "if": 2.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Deep Sea Research Part I",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "atmospheric",
                    "name": "Atmospheric Science",
                    "journals": [
                      {
                        "name": "Journal of the Atmospheric Sciences",
                        "issn": "0022-4928",
                        "if": 3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMS",
                        "focus": "Journal of the Atmospheric Sciences",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Atmospheric Chemistry and Physics",
                        "issn": "1680-7316",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Copernicus",
                        "focus": "Atmospheric Chemistry and Physics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Quarterly Journal of the Royal Meteorological Society",
                        "issn": "0035-9009",
                        "if": 3.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / RMetS",
                        "focus": "Quarterly Journal of the Royal Meteorological Society",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Bulletin of the American Meteorological Society",
                        "issn": "0003-0007",
                        "if": 6.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMS",
                        "focus": "Bulletin of the American Meteorological Society",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "geophysics",
                    "name": "Geophysics",
                    "journals": [
                      {
                        "name": "Journal of Geophysical Research: Solid Earth",
                        "issn": "2169-9313",
                        "if": 3.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AGU / Wiley",
                        "focus": "Journal of Geophysical Research: Solid Earth",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Geophysical Research Letters",
                        "issn": "0094-8276",
                        "if": 4.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AGU / Wiley",
                        "focus": "Geophysical Research Letters",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Geophysical Journal International",
                        "issn": "0956-540X",
                        "if": 2.8,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford",
                        "focus": "Geophysical Journal International",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "hydrology",
                    "name": "Hydrology",
                    "journals": [
                      {
                        "name": "Water Resources Research",
                        "issn": "0043-1397",
                        "if": 4.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AGU / Wiley",
                        "focus": "Water Resources Research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Hydrology and Earth System Sciences",
                        "issn": "1027-5606",
                        "if": 5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Copernicus",
                        "focus": "Hydrology and Earth System Sciences",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Journal of Hydrology",
                        "issn": "0022-1694",
                        "if": 5.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Journal of Hydrology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "planetary",
                    "name": "Planetary Science",
                    "journals": [
                      {
                        "name": "Icarus",
                        "issn": "0019-1035",
                        "if": 2.8,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Icarus",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Geophysical Research: Planets",
                        "issn": "2169-9097",
                        "if": 3.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AGU / Wiley",
                        "focus": "Journal of Geophysical Research: Planets",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Planetary and Space Science",
                        "issn": "0032-0633",
                        "if": 1.8,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Planetary and Space Science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "think-check-attend"
                    ],
                    "name": "AGU Fall Meeting",
                    "acronym": "AGU",
                    "organizer": "American Geophysical Union",
                    "focus": "Earth and space science",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              }
            ]
          },
          {
            "id": "cs",
            "name": "Computer Science",
            "description": "Computing and information",
            "children": [
              {
                "id": "ai",
                "name": "Artificial Intelligence",
                "children": [
                  {
                    "id": "ml",
                    "name": "Machine Learning",
                    "children": [
                      {
                        "id": "nlp",
                        "name": "Natural Language Processing",
                        "journals": [
                          {
                            "name": "Computational Linguistics",
                            "issn": "0891-2017",
                            "if": 5.3,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": true,
                            "publisher": "MIT Press / ACL",
                            "focus": "NLP theory & practice",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile",
                              "doaj"
                            ]
                          },
                          {
                            "name": "Transactions of the ACL",
                            "issn": "2307-387X",
                            "if": 7.6,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": true,
                            "publisher": "ACL / MIT Press",
                            "focus": "NLP research",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile",
                              "doaj"
                            ]
                          },
                          {
                            "name": "AI Language Mega Journal",
                            "issn": "0000-0007",
                            "if": 0.8,
                            "quartile": "Q4",
                            "predatory": true,
                            "openAccess": true,
                            "publisher": "NeuralPublish Ltd",
                            "focus": "Fake metrics; spam invites",
                            "metricSourceIds": [
                              "predatory",
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Natural Language Engineering",
                            "issn": "1351-3249",
                            "if": 1.9,
                            "quartile": "Q2",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Cambridge",
                            "focus": "Natural Language Engineering",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Computer Speech & Language",
                            "issn": "0885-2308",
                            "if": 3.1,
                            "quartile": "Q2",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Elsevier",
                            "focus": "Computer Speech & Language",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          }
                        ],
                        "conferences": [
                          {
                            "illustrative": true,
                            "metricSourceIds": [
                              "venue-identity",
                              "dblp",
                              "core-portal",
                              "think-check-attend"
                            ],
                            "name": "Annual Meeting of the Association for Computational Linguistics",
                            "acronym": "ACL",
                            "organizer": "Association for Computational Linguistics",
                            "focus": "Computational linguistics and natural language processing",
                            "cadence": "annual",
                            "format": "conference"
                          }
                        ]
                      },
                      {
                        "id": "cv",
                        "name": "Computer Vision",
                        "journals": [
                          {
                            "name": "IEEE TPAMI",
                            "issn": "0162-8828",
                            "if": 20.8,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "IEEE",
                            "focus": "Pattern analysis & vision",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "International Journal of Computer Vision",
                            "issn": "0920-5691",
                            "if": 11.6,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Springer",
                            "focus": "Computer vision",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Computer Vision and Image Understanding",
                            "issn": "1077-3142",
                            "if": 3.7,
                            "quartile": "Q2",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Elsevier",
                            "focus": "Computer Vision and Image Understanding",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Pattern Recognition",
                            "issn": "0031-3203",
                            "if": 7.5,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Elsevier",
                            "focus": "Pattern Recognition",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          }
                        ],
                        "conferences": [
                          {
                            "illustrative": true,
                            "metricSourceIds": [
                              "venue-identity",
                              "dblp",
                              "core-portal",
                              "think-check-attend"
                            ],
                            "name": "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
                            "acronym": "CVPR",
                            "organizer": "IEEE Computer Society and the Computer Vision Foundation",
                            "focus": "Computer vision and pattern recognition",
                            "cadence": "annual",
                            "format": "conference"
                          },
                          {
                            "illustrative": true,
                            "metricSourceIds": [
                              "venue-identity",
                              "dblp",
                              "core-portal",
                              "think-check-attend"
                            ],
                            "name": "IEEE/CVF International Conference on Computer Vision",
                            "acronym": "ICCV",
                            "organizer": "IEEE Computer Society and the Computer Vision Foundation",
                            "focus": "Computer vision",
                            "cadence": "biennial",
                            "format": "conference"
                          }
                        ]
                      },
                      {
                        "id": "rl",
                        "name": "Reinforcement Learning",
                        "journals": [
                          {
                            "name": "Journal of Machine Learning Research",
                            "issn": "1532-4435",
                            "if": 6,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": true,
                            "publisher": "JMLR",
                            "focus": "ML theory & methods",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile",
                              "doaj"
                            ]
                          },
                          {
                            "name": "Machine Learning",
                            "issn": "0885-6125",
                            "if": 5.6,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Springer",
                            "focus": "ML algorithms",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "IEEE Transactions on Neural Networks and Learning Systems",
                            "issn": "2162-237X",
                            "if": 10.2,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "IEEE",
                            "focus": "IEEE Transactions on Neural Networks and Learning Systems",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          },
                          {
                            "name": "Neural Networks",
                            "issn": "0893-6080",
                            "if": 6,
                            "quartile": "Q1",
                            "predatory": false,
                            "openAccess": false,
                            "publisher": "Elsevier",
                            "focus": "Neural Networks",
                            "metricSourceIds": [
                              "jcr",
                              "jcr-quartile"
                            ]
                          }
                        ]
                      }
                    ],
                    "journals": [
                      {
                        "name": "Nature Machine Intelligence",
                        "issn": "2522-5839",
                        "if": 23.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "ML & AI research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "dblp",
                          "core-portal",
                          "think-check-attend"
                        ],
                        "name": "Conference on Neural Information Processing Systems",
                        "acronym": "NeurIPS",
                        "organizer": "Neural Information Processing Systems Foundation",
                        "focus": "Neural information processing and machine learning",
                        "cadence": "annual",
                        "format": "conference"
                      },
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "dblp",
                          "core-portal",
                          "think-check-attend"
                        ],
                        "name": "International Conference on Machine Learning",
                        "acronym": "ICML",
                        "organizer": "International Machine Learning Society",
                        "focus": "Machine learning",
                        "cadence": "annual",
                        "format": "conference"
                      },
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "dblp",
                          "core-portal",
                          "think-check-attend"
                        ],
                        "name": "IEEE International Workshop on Machine Learning for Signal Processing",
                        "acronym": "MLSP",
                        "organizer": "IEEE Signal Processing Society",
                        "focus": "Machine learning methods for signal processing",
                        "cadence": "annual",
                        "format": "workshop"
                      }
                    ]
                  },
                  {
                    "id": "knowledge",
                    "name": "Knowledge Representation",
                    "journals": [
                      {
                        "name": "Artificial Intelligence",
                        "issn": "0004-3702",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Core AI journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Artificial Intelligence Review",
                        "issn": "0269-2821",
                        "if": 10.2,
                        "quartile": "Q1",
                        "publisher": "Springer",
                        "focus": "AI surveys"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Knowledge-Based Systems",
                        "issn": "0950-7051",
                        "if": 7.2,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Knowledge systems"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "systems",
                "name": "Systems & Networks",
                "children": [
                  {
                    "id": "distributed",
                    "name": "Distributed Systems",
                    "journals": [
                      {
                        "name": "ACM TOCS",
                        "issn": "0734-2071",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACM",
                        "focus": "Computer systems",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "IEEE Transactions on Parallel and Distributed Systems",
                        "issn": "1045-9219",
                        "if": 3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IEEE",
                        "focus": "Parallel & distributed computing",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of Parallel and Distributed Computing",
                        "issn": "0743-7315",
                        "if": 3.4,
                        "quartile": "Q2",
                        "publisher": "Elsevier",
                        "focus": "Parallel & distributed computing",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Concurrency and Computation: Practice and Experience",
                        "issn": "1532-0626",
                        "if": 1.5,
                        "quartile": "Q3",
                        "publisher": "Wiley",
                        "focus": "Concurrency",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "dblp",
                          "core-portal",
                          "think-check-attend"
                        ],
                        "name": "ACM Symposium on Principles of Distributed Computing",
                        "acronym": "PODC",
                        "organizer": "ACM SIGACT and ACM SIGOPS",
                        "focus": "Principles of distributed computing",
                        "cadence": "annual",
                        "format": "symposium"
                      }
                    ]
                  },
                  {
                    "id": "security",
                    "name": "Security & Privacy",
                    "journals": [
                      {
                        "name": "IEEE Security & Privacy",
                        "issn": "1540-7993",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IEEE",
                        "focus": "Security practice",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "ACM TOPS",
                        "issn": "2471-2566",
                        "if": 2.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACM",
                        "focus": "Privacy & security",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "CyberShield Open Reviews",
                        "issn": "0000-0008",
                        "if": 0.4,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "SecureWorld Journals",
                        "focus": "No real peer review",
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Computers & Security",
                        "issn": "0167-4048",
                        "if": 4.8,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Computer security",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Journal of Information Security and Applications",
                        "issn": "2214-2126",
                        "if": 3.7,
                        "quartile": "Q2",
                        "publisher": "Elsevier",
                        "focus": "Security applications",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "dblp",
                          "core-portal",
                          "think-check-attend"
                        ],
                        "name": "IEEE Symposium on Security and Privacy",
                        "acronym": "S&P",
                        "organizer": "IEEE Computer Society",
                        "focus": "Computer security and privacy",
                        "cadence": "annual",
                        "format": "symposium"
                      }
                    ]
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "ACM Workshop on Hot Topics in Networks",
                    "acronym": "HotNets",
                    "organizer": "ACM SIGCOMM",
                    "focus": "Early-stage computer networking topics",
                    "cadence": "annual",
                    "format": "workshop"
                  }
                ]
              },
              {
                "id": "hci",
                "name": "Human–Computer Interaction",
                "journals": [
                  {
                    "name": "ACM TOCHI",
                    "issn": "1073-0516",
                    "if": 4.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "HCI research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "International Journal of Human-Computer Studies",
                    "issn": "1071-5819",
                    "if": 4.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "HCI & usability",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Interacting with Computers",
                    "issn": "0953-5438",
                    "if": 1.5,
                    "quartile": "Q3",
                    "publisher": "Oxford",
                    "focus": "HCI",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Behaviour & Information Technology",
                    "issn": "0144-929X",
                    "if": 2.9,
                    "quartile": "Q2",
                    "publisher": "Taylor & Francis",
                    "focus": "HCI & IT",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "ACM CHI Conference on Human Factors in Computing Systems",
                    "acronym": "CHI",
                    "organizer": "ACM SIGCHI",
                    "focus": "Human-computer interaction",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "software-eng",
                "name": "Software Engineering",
                "journals": [
                  {
                    "name": "IEEE Transactions on Software Engineering",
                    "issn": "0098-5589",
                    "if": 6.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "IEEE",
                    "focus": "IEEE Transactions on Software Engineering",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "ACM Transactions on Software Engineering and Methodology",
                    "issn": "1049-331X",
                    "if": 4.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "ACM Transactions on Software Engineering and Methodology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Empirical Software Engineering",
                    "issn": "1382-3256",
                    "if": 3.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Empirical Software Engineering",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Systems and Software",
                    "issn": "0164-1212",
                    "if": 3.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Systems and Software",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Software Mega Code Open",
                    "issn": "0000-0033",
                    "if": 0.3,
                    "quartile": "Q4",
                    "predatory": true,
                    "openAccess": true,
                    "publisher": "DevPublish",
                    "focus": "Predatory SE OA",
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": [],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "International Conference on Software Engineering",
                    "acronym": "ICSE",
                    "organizer": "ACM and IEEE Computer Society",
                    "focus": "Software engineering",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "databases",
                "name": "Databases & Data Management",
                "journals": [
                  {
                    "name": "VLDB Journal",
                    "issn": "1066-8888",
                    "if": 4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "VLDB Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "ACM Transactions on Database Systems",
                    "issn": "0362-5915",
                    "if": 1.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "ACM Transactions on Database Systems",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Information Systems",
                    "issn": "0306-4379",
                    "if": 3.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Information Systems",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Data Mining and Knowledge Discovery",
                    "issn": "1384-5810",
                    "if": 3.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Data Mining and Knowledge Discovery",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": [],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "International Conference on Very Large Data Bases",
                    "acronym": "VLDB",
                    "organizer": "VLDB Endowment",
                    "focus": "Data management and very large databases",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "theory-cs",
                "name": "Theory of Computation",
                "journals": [
                  {
                    "name": "Journal of the ACM",
                    "issn": "0004-5411",
                    "if": 2.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "Journal of the ACM",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "SIAM Journal on Computing",
                    "issn": "0097-5397",
                    "if": 1.6,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SIAM",
                    "focus": "SIAM Journal on Computing",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Theoretical Computer Science",
                    "issn": "0304-3975",
                    "if": 1,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Theoretical Computer Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Algorithmica",
                    "issn": "0178-4617",
                    "if": 0.9,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Algorithmica",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": [],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "ACM Symposium on Theory of Computing",
                    "acronym": "STOC",
                    "organizer": "ACM SIGACT",
                    "focus": "Theory of computing",
                    "cadence": "annual",
                    "format": "symposium"
                  }
                ]
              },
              {
                "id": "graphics",
                "name": "Computer Graphics & Visualization",
                "journals": [
                  {
                    "name": "ACM Transactions on Graphics",
                    "issn": "0730-0301",
                    "if": 4.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "ACM Transactions on Graphics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "IEEE Transactions on Visualization and Computer Graphics",
                    "issn": "1077-2626",
                    "if": 4.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "IEEE",
                    "focus": "IEEE Transactions on Visualization and Computer Graphics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Computer Graphics Forum",
                    "issn": "0167-7055",
                    "if": 2.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Computer Graphics Forum",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": [],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "ACM SIGGRAPH Conference",
                    "acronym": "SIGGRAPH",
                    "organizer": "ACM SIGGRAPH",
                    "focus": "Computer graphics and interactive techniques",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "robotics",
                "name": "Robotics",
                "journals": [
                  {
                    "name": "International Journal of Robotics Research",
                    "issn": "0278-3649",
                    "if": 5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "International Journal of Robotics Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "IEEE Transactions on Robotics",
                    "issn": "1552-3098",
                    "if": 7.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "IEEE",
                    "focus": "IEEE Transactions on Robotics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Autonomous Robots",
                    "issn": "0929-5593",
                    "if": 3.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Autonomous Robots",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Robotics and Autonomous Systems",
                    "issn": "0921-8890",
                    "if": 4.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Robotics and Autonomous Systems",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": [],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "IEEE International Conference on Robotics and Automation",
                    "acronym": "ICRA",
                    "organizer": "IEEE Robotics and Automation Society",
                    "focus": "Robotics and automation",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "programming-languages",
                "name": "Programming Languages",
                "journals": [
                  {
                    "name": "ACM Transactions on Programming Languages and Systems",
                    "issn": "0164-0925",
                    "if": 1.4,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "ACM Transactions on Programming Languages and Systems",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Proceedings of the ACM on Programming Languages",
                    "issn": "2475-1421",
                    "if": 1.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "ACM",
                    "focus": "Proceedings of the ACM on Programming Languages",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "Journal of Functional Programming",
                    "issn": "0956-7968",
                    "if": 1,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "Journal of Functional Programming",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "information-retrieval",
                "name": "Information Retrieval & Search",
                "journals": [
                  {
                    "name": "ACM Transactions on Information Systems",
                    "issn": "1046-8188",
                    "if": 5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACM",
                    "focus": "ACM Transactions on Information Systems",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Information Retrieval Journal",
                    "issn": "1386-4564",
                    "if": 1.8,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Information Retrieval Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Information Processing and Management",
                    "issn": "0306-4573",
                    "if": 7.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Information Processing and Management",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": [],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "International ACM SIGIR Conference on Research and Development in Information Retrieval",
                    "acronym": "SIGIR",
                    "organizer": "ACM SIGIR",
                    "focus": "Information retrieval",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              }
            ]
          },
          {
            "id": "medicine",
            "name": "Clinical Medicine",
            "description": "Patient-facing research across specialties",
            "children": [
              {
                "id": "oncology",
                "name": "Oncology",
                "description": "Cancer research and care",
                "children": [
                  {
                    "id": "medical-oncology",
                    "name": "Medical Oncology",
                    "journals": [
                      {
                        "name": "The Lancet Oncology",
                        "issn": "1470-2045",
                        "if": 51.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "Clinical oncology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Clinical Oncology",
                        "issn": "0732-183X",
                        "if": 42.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ASCO",
                        "focus": "Clinical cancer research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Cancer Cure Rapid Communications",
                        "issn": "0000-0009",
                        "if": 0.7,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "OncoMega Press",
                        "focus": "Misleading cure claims",
                        "metricSourceIds": [
                          "predatory"
                        ]
                      },
                      {
                        "name": "Cancer Discovery",
                        "issn": "2159-8278",
                        "if": 28.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AACR",
                        "focus": "Cancer Discovery",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nature Reviews Cancer",
                        "issn": "1474-175X",
                        "if": 72.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Nature Reviews Cancer",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Cancer Cell",
                        "issn": "1535-6108",
                        "if": 48.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cell Press",
                        "focus": "Cancer Cell",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "think-check-attend"
                        ],
                        "name": "ASCO Annual Meeting",
                        "acronym": "ASCO",
                        "organizer": "American Society of Clinical Oncology",
                        "focus": "Clinical oncology",
                        "cadence": "annual",
                        "format": "conference"
                      }
                    ]
                  },
                  {
                    "id": "radiation-oncology",
                    "name": "Radiation Oncology",
                    "journals": [
                      {
                        "name": "International Journal of Radiation Oncology",
                        "issn": "0360-3016",
                        "if": 6.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ASTRO",
                        "focus": "Radiation oncology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Radiotherapy and Oncology",
                        "issn": "0167-8140",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ESTRO",
                        "focus": "Clinical radiotherapy",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "surgical-oncology",
                    "name": "Surgical Oncology",
                    "journals": [
                      {
                        "name": "Annals of Surgical Oncology",
                        "issn": "1068-9265",
                        "if": 3.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Cancer surgery outcomes",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "European Journal of Surgical Oncology",
                        "issn": "0748-7983",
                        "if": 3.5,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Surgical oncology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Surgical Oncology",
                        "issn": "0022-4790",
                        "if": 2.3,
                        "quartile": "Q2",
                        "publisher": "Wiley",
                        "focus": "Cancer surgery"
                      }
                    ]
                  },
                  {
                    "id": "pediatric-oncology",
                    "name": "Pediatric Oncology",
                    "journals": [
                      {
                        "name": "Pediatric Blood & Cancer",
                        "issn": "1545-5009",
                        "if": 2.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Childhood cancer",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Pediatric Hematology and Oncology",
                        "issn": "0888-0018",
                        "if": 1.3,
                        "quartile": "Q3",
                        "publisher": "Taylor & Francis",
                        "focus": "Pediatric hematology-oncology"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "cardiology",
                "name": "Cardiology",
                "description": "Heart and vascular medicine",
                "children": [
                  {
                    "id": "general-cardiology",
                    "name": "General Cardiology",
                    "journals": [
                      {
                        "name": "Circulation",
                        "issn": "0009-7322",
                        "if": 35.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AHA / Wolters Kluwer",
                        "focus": "Cardiovascular medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Heart Journal",
                        "issn": "0195-668X",
                        "if": 39.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / ESC",
                        "focus": "Cardiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "JACC",
                        "issn": "0735-1097",
                        "if": 21.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ACC",
                        "focus": "JACC",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Nature Reviews Cardiology",
                        "issn": "1759-5009",
                        "if": 40.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Nature Portfolio",
                        "focus": "Nature Reviews Cardiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "think-check-attend"
                        ],
                        "name": "American College of Cardiology Annual Scientific Session",
                        "acronym": "ACC",
                        "organizer": "American College of Cardiology",
                        "focus": "Cardiology",
                        "cadence": "annual",
                        "format": "conference"
                      }
                    ]
                  },
                  {
                    "id": "electrophysiology",
                    "name": "Electrophysiology",
                    "journals": [
                      {
                        "name": "Heart Rhythm",
                        "issn": "1547-5271",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Arrhythmia & devices",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "JACC: Clinical Electrophysiology",
                        "issn": "2405-500X",
                        "if": 5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ACC",
                        "focus": "Clinical EP",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "interventional-cardio",
                    "name": "Interventional Cardiology",
                    "journals": [
                      {
                        "name": "JACC: Cardiovascular Interventions",
                        "issn": "1936-8798",
                        "if": 9.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ACC",
                        "focus": "Coronary & structural intervention",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Catheterization and Cardiovascular Interventions",
                        "issn": "1522-1946",
                        "if": 2.1,
                        "quartile": "Q2",
                        "publisher": "Wiley",
                        "focus": "Interventional cardiology"
                      }
                    ]
                  },
                  {
                    "id": "heart-failure",
                    "name": "Heart Failure",
                    "journals": [
                      {
                        "name": "JACC: Heart Failure",
                        "issn": "2213-1779",
                        "if": 10.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ACC",
                        "focus": "Heart failure research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Journal of Heart Failure",
                        "issn": "1388-9842",
                        "if": 10.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / HFA",
                        "focus": "Heart failure",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "infectious",
                "name": "Infectious Disease",
                "children": [
                  {
                    "id": "clinical-id",
                    "name": "Clinical Infectious Disease",
                    "journals": [
                      {
                        "name": "The Lancet Infectious Diseases",
                        "issn": "1473-3099",
                        "if": 36.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "Infectious disease",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Clinical Infectious Diseases",
                        "issn": "1058-4838",
                        "if": 8.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / IDSA",
                        "focus": "Clinical ID",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hiv",
                    "name": "HIV / AIDS",
                    "journals": [
                      {
                        "name": "The Lancet HIV",
                        "issn": "2352-3018",
                        "if": 12.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "HIV research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "AIDS",
                        "issn": "0269-9371",
                        "if": 3.4,
                        "quartile": "Q1",
                        "publisher": "Wolters Kluwer",
                        "focus": "HIV/AIDS research"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Acquired Immune Deficiency Syndromes",
                        "issn": "1525-4135",
                        "if": 3,
                        "quartile": "Q2",
                        "publisher": "Wolters Kluwer",
                        "focus": "HIV clinical research"
                      }
                    ]
                  },
                  {
                    "id": "tropical-medicine",
                    "name": "Tropical Medicine",
                    "journals": [
                      {
                        "name": "PLOS Neglected Tropical Diseases",
                        "issn": "1935-2735",
                        "if": 3.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "PLOS",
                        "focus": "NTDs",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "American Journal of Tropical Medicine and Hygiene",
                        "issn": "0002-9637",
                        "if": 2.3,
                        "quartile": "Q2",
                        "publisher": "ASTMH",
                        "focus": "Tropical medicine"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "neurology",
                "name": "Neurology",
                "children": [
                  {
                    "id": "general-neurology",
                    "name": "General Neurology",
                    "journals": [
                      {
                        "name": "The Lancet Neurology",
                        "issn": "1474-4422",
                        "if": 46.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "Clinical neurology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Neurology",
                        "issn": "0028-3878",
                        "if": 8.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AAN / Wolters Kluwer",
                        "focus": "Neurology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Brain",
                        "issn": "0006-8950",
                        "if": 11.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford",
                        "focus": "Brain",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Annals of Neurology",
                        "issn": "0364-5134",
                        "if": 8.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Annals of Neurology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "think-check-attend"
                        ],
                        "name": "American Academy of Neurology Annual Meeting",
                        "acronym": "AAN",
                        "organizer": "American Academy of Neurology",
                        "focus": "Neurology",
                        "cadence": "annual",
                        "format": "conference"
                      }
                    ]
                  },
                  {
                    "id": "stroke",
                    "name": "Stroke",
                    "journals": [
                      {
                        "name": "Stroke",
                        "issn": "0039-2499",
                        "if": 8.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AHA",
                        "focus": "Cerebrovascular disease",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "International Journal of Stroke",
                        "issn": "1747-493X",
                        "if": 5.7,
                        "quartile": "Q1",
                        "publisher": "SAGE",
                        "focus": "Stroke research"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Stroke and Cerebrovascular Diseases",
                        "issn": "1052-3057",
                        "if": 2,
                        "quartile": "Q3",
                        "publisher": "Elsevier",
                        "focus": "Cerebrovascular disease"
                      }
                    ]
                  },
                  {
                    "id": "epilepsy",
                    "name": "Epilepsy",
                    "journals": [
                      {
                        "name": "Epilepsia",
                        "issn": "0013-9580",
                        "if": 5.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / ILAE",
                        "focus": "Epilepsy research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Seizure",
                        "issn": "1059-1311",
                        "if": 2.6,
                        "quartile": "Q2",
                        "publisher": "Elsevier",
                        "focus": "Epilepsy clinical research"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "psychiatry-med",
                "name": "Psychiatry",
                "children": [
                  {
                    "id": "general-psychiatry",
                    "name": "General Psychiatry",
                    "journals": [
                      {
                        "name": "JAMA Psychiatry",
                        "issn": "2168-622X",
                        "if": 22.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMA",
                        "focus": "Psychiatry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "The Lancet Psychiatry",
                        "issn": "2215-0366",
                        "if": 30.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "Clinical psychiatry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Global Psychiatry Instant",
                        "issn": "0000-0014",
                        "if": 0.4,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "MindPublish Hub",
                        "focus": "Guaranteed acceptance spam",
                        "metricSourceIds": [
                          "predatory"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "child-psychiatry",
                    "name": "Child & Adolescent Psychiatry",
                    "journals": [
                      {
                        "name": "Journal of the American Academy of Child & Adolescent Psychiatry",
                        "issn": "0890-8567",
                        "if": 9.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / AACAP",
                        "focus": "Child psychiatry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Child Psychology and Psychiatry",
                        "issn": "0021-9630",
                        "if": 6.5,
                        "quartile": "Q1",
                        "publisher": "Wiley",
                        "focus": "Child psychiatry & psychology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "European Child & Adolescent Psychiatry",
                        "issn": "1018-8827",
                        "if": 4.5,
                        "quartile": "Q1",
                        "publisher": "Springer",
                        "focus": "Child & adolescent psychiatry"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "pediatrics",
                "name": "Pediatrics",
                "children": [
                  {
                    "id": "general-pediatrics",
                    "name": "General Pediatrics",
                    "journals": [
                      {
                        "name": "JAMA Pediatrics",
                        "issn": "2168-6203",
                        "if": 18,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMA",
                        "focus": "Pediatrics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Pediatrics",
                        "issn": "0031-4005",
                        "if": 6.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AAP",
                        "focus": "Child health",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "neonatology",
                    "name": "Neonatology",
                    "journals": [
                      {
                        "name": "Journal of Pediatrics",
                        "issn": "0022-3476",
                        "if": 3.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Pediatric & neonatal medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Perinatology",
                        "issn": "0743-8346",
                        "if": 2.4,
                        "quartile": "Q2",
                        "publisher": "Springer Nature",
                        "focus": "Perinatal & neonatal medicine"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Neonatology",
                        "issn": "1661-7800",
                        "if": 2.8,
                        "quartile": "Q2",
                        "publisher": "Karger",
                        "focus": "Neonatal research"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "surgery",
                "name": "Surgery",
                "children": [
                  {
                    "id": "general-surgery",
                    "name": "General Surgery",
                    "journals": [
                      {
                        "name": "Annals of Surgery",
                        "issn": "0003-4932",
                        "if": 10.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wolters Kluwer",
                        "focus": "Surgical science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "JAMA Surgery",
                        "issn": "2168-6254",
                        "if": 14.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMA",
                        "focus": "Surgery",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "British Journal of Surgery",
                        "issn": "0007-1323",
                        "if": 8.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford",
                        "focus": "British Journal of Surgery",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Surgery",
                        "issn": "0039-6060",
                        "if": 3.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Surgery",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "orthopedics",
                    "name": "Orthopedics",
                    "journals": [
                      {
                        "name": "Journal of Bone and Joint Surgery",
                        "issn": "0021-9355",
                        "if": 4.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "JBJS",
                        "focus": "Orthopedic surgery",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Bone & Joint Journal",
                        "issn": "2049-4394",
                        "if": 3.5,
                        "quartile": "Q1",
                        "publisher": "Bone & Joint Publishing",
                        "focus": "Orthopedic surgery"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Clinical Orthopaedics and Related Research",
                        "issn": "0009-921X",
                        "if": 4.2,
                        "quartile": "Q1",
                        "publisher": "Wolters Kluwer",
                        "focus": "Orthopedics"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "radiology",
                "name": "Radiology & Imaging",
                "children": [
                  {
                    "id": "diagnostic-radiology",
                    "name": "Diagnostic Radiology",
                    "journals": [
                      {
                        "name": "Radiology",
                        "issn": "0033-8419",
                        "if": 12.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "RSNA",
                        "focus": "Diagnostic imaging",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Radiology",
                        "issn": "0938-7994",
                        "if": 4.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Clinical radiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Journal of Radiology",
                        "issn": "0720-048X",
                        "if": 2.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "European Journal of Radiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "American Journal of Roentgenology",
                        "issn": "0361-803X",
                        "if": 4.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ARRS",
                        "focus": "American Journal of Roentgenology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nuclear-medicine",
                    "name": "Nuclear Medicine",
                    "journals": [
                      {
                        "name": "Journal of Nuclear Medicine",
                        "issn": "0161-5505",
                        "if": 9.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SNMMI",
                        "focus": "Molecular imaging",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "European Journal of Nuclear Medicine and Molecular Imaging",
                        "issn": "1619-7070",
                        "if": 8.6,
                        "quartile": "Q1",
                        "publisher": "Springer",
                        "focus": "Nuclear medicine"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "internal-medicine",
                "name": "Internal Medicine",
                "children": [
                  {
                    "id": "general-im",
                    "name": "General Internal Medicine",
                    "journals": [
                      {
                        "name": "The Lancet",
                        "issn": "0140-6736",
                        "if": 98.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "General medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "NEJM",
                        "issn": "0028-4793",
                        "if": 96.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Massachusetts Medical Society",
                        "focus": "General medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "JAMA",
                        "issn": "0098-7484",
                        "if": 63.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMA",
                        "focus": "General medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "endocrinology",
                    "name": "Endocrinology",
                    "journals": [
                      {
                        "name": "The Lancet Diabetes & Endocrinology",
                        "issn": "2213-8587",
                        "if": 44,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / Lancet",
                        "focus": "Diabetes & endocrinology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Diabetes Care",
                        "issn": "0149-5992",
                        "if": 14.8,
                        "quartile": "Q1",
                        "publisher": "ADA",
                        "focus": "Diabetes clinical care"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Clinical Endocrinology & Metabolism",
                        "issn": "0021-972X",
                        "if": 5,
                        "quartile": "Q1",
                        "publisher": "Endocrine Society",
                        "focus": "Clinical endocrinology"
                      }
                    ]
                  },
                  {
                    "id": "gastroenterology",
                    "name": "Gastroenterology",
                    "journals": [
                      {
                        "name": "Gastroenterology",
                        "issn": "0016-5085",
                        "if": 25.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AGA / Elsevier",
                        "focus": "GI medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Gut",
                        "issn": "0017-5749",
                        "if": 23,
                        "quartile": "Q1",
                        "publisher": "BMJ",
                        "focus": "Gastroenterology & hepatology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Clinical Gastroenterology and Hepatology",
                        "issn": "1542-3565",
                        "if": 10.6,
                        "quartile": "Q1",
                        "publisher": "Elsevier / AGA",
                        "focus": "Clinical GI"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "public-health",
                "name": "Public Health & Epidemiology",
                "children": [
                  {
                    "id": "epidemiology",
                    "name": "Epidemiology",
                    "journals": [
                      {
                        "name": "International Journal of Epidemiology",
                        "issn": "0300-5771",
                        "if": 7.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford University Press",
                        "focus": "Epidemiologic methods",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "American Journal of Epidemiology",
                        "issn": "0002-9262",
                        "if": 5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / SER",
                        "focus": "Epidemiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Epidemiology",
                        "issn": "1044-3983",
                        "if": 4.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wolters Kluwer",
                        "focus": "Epidemiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Journal of Epidemiology",
                        "issn": "0393-2990",
                        "if": 7.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "European Journal of Epidemiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "conferences": [
                      {
                        "illustrative": true,
                        "metricSourceIds": [
                          "venue-identity",
                          "think-check-attend"
                        ],
                        "name": "Society for Epidemiologic Research Annual Meeting",
                        "acronym": "SER",
                        "organizer": "Society for Epidemiologic Research",
                        "focus": "Epidemiologic research",
                        "cadence": "annual",
                        "format": "conference"
                      }
                    ]
                  },
                  {
                    "id": "global-health",
                    "name": "Global Health",
                    "journals": [
                      {
                        "name": "The Lancet Global Health",
                        "issn": "2214-109X",
                        "if": 25.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Elsevier / Lancet",
                        "focus": "Global health",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "World Health Mega Open",
                        "issn": "0000-0015",
                        "if": 0.3,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "HealthWorld Fast",
                        "focus": "Predatory global-health OA",
                        "metricSourceIds": [
                          "predatory"
                        ]
                      },
                      {
                        "name": "BMJ Global Health",
                        "issn": "2059-7908",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "BMJ",
                        "focus": "BMJ Global Health",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      },
                      {
                        "name": "Global Public Health",
                        "issn": "1744-1692",
                        "if": 2.3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Taylor & Francis",
                        "focus": "Global Public Health",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "obgyn",
                "name": "Obstetrics & Gynecology",
                "children": [
                  {
                    "id": "general-obgyn",
                    "name": "General OB/GYN",
                    "journals": [
                      {
                        "name": "American Journal of Obstetrics & Gynecology",
                        "issn": "0002-9378",
                        "if": 8.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "OB/GYN",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Obstetrics & Gynecology",
                        "issn": "0029-7844",
                        "if": 5.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ACOG / Wolters Kluwer",
                        "focus": "Green Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "BJOG",
                        "issn": "1470-0328",
                        "if": 4.7,
                        "quartile": "Q1",
                        "publisher": "Wiley",
                        "focus": "OB/GYN",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Acta Obstetricia et Gynecologica Scandinavica",
                        "issn": "0001-6349",
                        "if": 3.1,
                        "quartile": "Q2",
                        "publisher": "Wiley",
                        "focus": "OB/GYN",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "emergency",
                "name": "Emergency Medicine",
                "journals": [
                  {
                    "name": "Annals of Emergency Medicine",
                    "issn": "0196-0644",
                    "if": 5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier / ACEP",
                    "focus": "Emergency medicine",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Resuscitation",
                    "issn": "0300-9572",
                    "if": 5.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Resuscitation science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Emergency Medicine Journal",
                    "issn": "1472-0205",
                    "if": 2.8,
                    "quartile": "Q2",
                    "publisher": "BMJ",
                    "focus": "Emergency medicine",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "American Journal of Emergency Medicine",
                    "issn": "0735-6757",
                    "if": 2.5,
                    "quartile": "Q2",
                    "publisher": "Elsevier",
                    "focus": "Emergency medicine",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "dermatology",
                "name": "Dermatology",
                "journals": [],
                "children": [
                  {
                    "id": "general-derm",
                    "name": "General Dermatology",
                    "journals": [
                      {
                        "name": "Journal of the American Academy of Dermatology",
                        "issn": "0190-9622",
                        "if": 12.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / AAD",
                        "focus": "Dermatology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "British Journal of Dermatology",
                        "issn": "0007-0963",
                        "if": 9.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / BAD",
                        "focus": "Dermatology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "JAMA Dermatology",
                        "issn": "2168-6068",
                        "if": 11.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMA",
                        "focus": "Dermatology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Investigative Dermatology",
                        "issn": "0022-202X",
                        "if": 5.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Skin biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Dermatologic Surgery",
                        "issn": "1076-0512",
                        "if": 2.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wolters Kluwer",
                        "focus": "Derm surgery",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Skin Cure Global Open",
                        "issn": "0000-0031",
                        "if": 0.3,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "DermFast Press",
                        "focus": "Predatory dermatology OA",
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "ophthalmology",
                "name": "Ophthalmology",
                "journals": [
                  {
                    "name": "Ophthalmology",
                    "issn": "0161-6420",
                    "if": 12.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier / AAO",
                    "focus": "Ophthalmology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "JAMA Ophthalmology",
                    "issn": "2168-6165",
                    "if": 7.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "AMA",
                    "focus": "JAMA Ophthalmology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "American Journal of Ophthalmology",
                    "issn": "0002-9394",
                    "if": 4.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "American Journal of Ophthalmology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "British Journal of Ophthalmology",
                    "issn": "0007-1161",
                    "if": 3.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "BMJ",
                    "focus": "British Journal of Ophthalmology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Investigative Ophthalmology & Visual Science",
                    "issn": "0146-0404",
                    "if": 3.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ARVO",
                    "focus": "Vision science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Eye",
                    "issn": "0950-222X",
                    "if": 3,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer Nature",
                    "focus": "Eye",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "anesthesiology",
                "name": "Anesthesiology",
                "journals": [
                  {
                    "name": "Anesthesiology",
                    "issn": "0003-3022",
                    "if": 8.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer / ASA",
                    "focus": "Anesthesiology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "British Journal of Anaesthesia",
                    "issn": "0007-0912",
                    "if": 9.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "British Journal of Anaesthesia",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Anesthesia & Analgesia",
                    "issn": "0003-2999",
                    "if": 4.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer",
                    "focus": "Anesthesia & Analgesia",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "European Journal of Anaesthesiology",
                    "issn": "0265-0215",
                    "if": 3.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer",
                    "focus": "European Journal of Anaesthesiology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Regional Anesthesia & Pain Medicine",
                    "issn": "1098-7339",
                    "if": 4.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "BMJ",
                    "focus": "Regional Anesthesia & Pain Medicine",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "rheumatology",
                "name": "Rheumatology",
                "journals": [
                  {
                    "name": "Annals of the Rheumatic Diseases",
                    "issn": "0003-4967",
                    "if": 20.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "BMJ",
                    "focus": "Annals of the Rheumatic Diseases",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Arthritis & Rheumatology",
                    "issn": "2326-5191",
                    "if": 10.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley / ACR",
                    "focus": "Arthritis & Rheumatology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Rheumatology",
                    "issn": "1462-0324",
                    "if": 4.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Rheumatology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Rheumatology",
                    "issn": "0315-162X",
                    "if": 3.2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Journal of Rheumatology",
                    "focus": "Journal of Rheumatology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "nephrology",
                "name": "Nephrology",
                "journals": [
                  {
                    "name": "Journal of the American Society of Nephrology",
                    "issn": "1046-6673",
                    "if": 10.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ASN",
                    "focus": "Journal of the American Society of Nephrology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Kidney International",
                    "issn": "0085-2538",
                    "if": 14.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier / ISN",
                    "focus": "Kidney International",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Nephrology Dialysis Transplantation",
                    "issn": "0931-0509",
                    "if": 4.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Nephrology Dialysis Transplantation",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "American Journal of Kidney Diseases",
                    "issn": "0272-6386",
                    "if": 8.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier / NKF",
                    "focus": "American Journal of Kidney Diseases",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Clinical Journal of the American Society of Nephrology",
                    "issn": "1555-9041",
                    "if": 8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ASN",
                    "focus": "Clinical Journal of the American Society of Nephrology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "pulmonology",
                "name": "Pulmonology & Critical Care",
                "journals": [],
                "children": [
                  {
                    "id": "respiratory",
                    "name": "Respiratory Medicine",
                    "journals": [
                      {
                        "name": "American Journal of Respiratory and Critical Care Medicine",
                        "issn": "1073-449X",
                        "if": 19.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ATS",
                        "focus": "American Journal of Respiratory and Critical Care Medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Respiratory Journal",
                        "issn": "0903-1936",
                        "if": 16.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "ERS",
                        "focus": "European Respiratory Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Chest",
                        "issn": "0012-3692",
                        "if": 8.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / ACCP",
                        "focus": "Chest",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Thorax",
                        "issn": "0040-6376",
                        "if": 9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "BMJ",
                        "focus": "Thorax",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Respiratory Medicine",
                        "issn": "0954-6111",
                        "if": 3.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Respiratory Medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "critical-care",
                    "name": "Critical Care",
                    "journals": [
                      {
                        "name": "Critical Care Medicine",
                        "issn": "0090-3493",
                        "if": 7.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wolters Kluwer / SCCM",
                        "focus": "Critical Care Medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Intensive Care Medicine",
                        "issn": "0342-4642",
                        "if": 27.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Intensive Care Medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Critical Care",
                        "issn": "1364-8535",
                        "if": 15.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "BMC",
                        "focus": "Critical Care",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "hematology",
                "name": "Hematology",
                "journals": [
                  {
                    "name": "Blood",
                    "issn": "0006-4971",
                    "if": 21,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ASH",
                    "focus": "Blood",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Lancet Haematology",
                    "issn": "2352-3026",
                    "if": 24.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier / Lancet",
                    "focus": "Lancet Haematology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Blood Advances",
                    "issn": "2473-9529",
                    "if": 7.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "ASH",
                    "focus": "Blood Advances",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "British Journal of Haematology",
                    "issn": "0007-1048",
                    "if": 3.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "British Journal of Haematology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Haematologica",
                    "issn": "0390-6078",
                    "if": 8.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "Ferrata Storti Foundation",
                    "focus": "Haematologica",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "urology",
                "name": "Urology",
                "journals": [
                  {
                    "name": "European Urology",
                    "issn": "0302-2838",
                    "if": 23.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "European Urology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Urology",
                    "issn": "0022-5347",
                    "if": 5.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer / AUA",
                    "focus": "Journal of Urology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "BJU International",
                    "issn": "1464-4096",
                    "if": 4.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "BJU International",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Urology",
                    "issn": "0090-4295",
                    "if": 2.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Urology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "otolaryngology",
                "name": "Otolaryngology (ENT)",
                "journals": [
                  {
                    "name": "JAMA Otolaryngology–Head & Neck Surgery",
                    "issn": "2168-618X",
                    "if": 6.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "AMA",
                    "focus": "JAMA Otolaryngology–Head & Neck Surgery",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Laryngoscope",
                    "issn": "0023-852X",
                    "if": 2.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Laryngoscope",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Otolaryngology–Head and Neck Surgery",
                    "issn": "0194-5998",
                    "if": 2.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE / AAO-HNS",
                    "focus": "Otolaryngology–Head and Neck Surgery",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Hearing Research",
                    "issn": "0378-5955",
                    "if": 2.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Hearing Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "pathology",
                "name": "Pathology",
                "journals": [],
                "children": [
                  {
                    "id": "anatomic-path",
                    "name": "Anatomic Pathology",
                    "journals": [
                      {
                        "name": "Modern Pathology",
                        "issn": "0893-3952",
                        "if": 7.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / USCAP",
                        "focus": "Modern Pathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "American Journal of Surgical Pathology",
                        "issn": "0147-5185",
                        "if": 4.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wolters Kluwer",
                        "focus": "American Journal of Surgical Pathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Histopathology",
                        "issn": "0309-0167",
                        "if": 4.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Histopathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "clinical-path",
                    "name": "Clinical Pathology & Lab Medicine",
                    "journals": [
                      {
                        "name": "Clinical Chemistry",
                        "issn": "0009-9147",
                        "if": 8.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / AACC",
                        "focus": "Clinical Chemistry",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Clinical Chemistry and Laboratory Medicine",
                        "issn": "1434-6621",
                        "if": 3.8,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "De Gruyter",
                        "focus": "Clinical Chemistry and Laboratory Medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Archives of Pathology & Laboratory Medicine",
                        "issn": "0003-9985",
                        "if": 3.2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "CAP",
                        "focus": "Archives of Pathology & Laboratory Medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ],
                    "children": []
                  }
                ]
              },
              {
                "id": "immunology-allergy",
                "name": "Immunology & Allergy (Clinical)",
                "journals": [
                  {
                    "name": "Journal of Allergy and Clinical Immunology",
                    "issn": "0091-6749",
                    "if": 11.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Allergy and Clinical Immunology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Allergy",
                    "issn": "0105-4538",
                    "if": 12.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Allergy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Clinical & Experimental Allergy",
                    "issn": "0954-7894",
                    "if": 4.3,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Clinical & Experimental Allergy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Clinical Immunology",
                    "issn": "0271-9142",
                    "if": 3.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Journal of Clinical Immunology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "family-medicine",
                "name": "Family & Primary Care Medicine",
                "journals": [
                  {
                    "name": "Annals of Family Medicine",
                    "issn": "1544-1709",
                    "if": 4.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "Annals of Family Medicine",
                    "focus": "Annals of Family Medicine",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "British Journal of General Practice",
                    "issn": "0960-1644",
                    "if": 4.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "RCGP",
                    "focus": "British Journal of General Practice",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Family Practice",
                    "issn": "0263-2136",
                    "if": 2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Family Practice",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "BMC Primary Care",
                    "issn": "2731-4553",
                    "if": 2.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "BMC",
                    "focus": "BMC Primary Care",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "geriatrics",
                "name": "Geriatrics & Gerontology",
                "journals": [
                  {
                    "name": "Journal of the American Geriatrics Society",
                    "issn": "0002-8614",
                    "if": 4.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Journal of the American Geriatrics Society",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Age and Ageing",
                    "issn": "0002-0729",
                    "if": 6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Age and Ageing",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journals of Gerontology Series A",
                    "issn": "1079-5006",
                    "if": 4.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Journals of Gerontology Series A",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Gerontology",
                    "issn": "0304-324X",
                    "if": 3.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Karger",
                    "focus": "Gerontology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "diabetes-metabolism",
                "name": "Diabetes & Metabolism",
                "journals": [
                  {
                    "name": "Diabetes",
                    "issn": "0012-1797",
                    "if": 6.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ADA",
                    "focus": "Diabetes",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Diabetologia",
                    "issn": "0012-186X",
                    "if": 8.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Diabetologia",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Obesity Reviews",
                    "issn": "1467-7881",
                    "if": 7.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Obesity Reviews",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Metabolism-Clinical and Experimental",
                    "issn": "0026-0495",
                    "if": 9.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Metabolism-Clinical and Experimental",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "rehabilitation-med",
                "name": "Physical Medicine & Rehabilitation",
                "journals": [
                  {
                    "name": "American Journal of Physical Medicine & Rehabilitation",
                    "issn": "0894-9115",
                    "if": 2.2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer",
                    "focus": "American Journal of Physical Medicine & Rehabilitation",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "PM&R",
                    "issn": "1934-1482",
                    "if": 2.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "PM&R",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Rehabilitation Medicine",
                    "issn": "1650-1977",
                    "if": 2.3,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "Foundation for Rehabilitation Information",
                    "focus": "Journal of Rehabilitation Medicine",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "Clinical Rehabilitation",
                    "issn": "0269-2155",
                    "if": 2.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Clinical Rehabilitation",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "palliative",
                "name": "Palliative & Pain Medicine",
                "journals": [
                  {
                    "name": "Journal of Pain and Symptom Management",
                    "issn": "0885-3924",
                    "if": 3.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Pain and Symptom Management",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Palliative Medicine",
                    "issn": "0269-2163",
                    "if": 3.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Palliative Medicine",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Pain",
                    "issn": "0304-3959",
                    "if": 5.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer / IASP",
                    "focus": "Pain",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Pain",
                    "issn": "1526-5900",
                    "if": 4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Pain",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "European Journal of Pain",
                    "issn": "1090-3801",
                    "if": 3.2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "European Journal of Pain",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Pain Mega Open Cure",
                    "issn": "0000-0040",
                    "if": 0.2,
                    "quartile": "Q4",
                    "predatory": true,
                    "openAccess": true,
                    "publisher": "PainFast",
                    "focus": "Predatory pain OA",
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "engineering",
            "name": "Engineering",
            "children": [
              {
                "id": "biomed-eng",
                "name": "Biomedical Engineering",
                "journals": [
                  {
                    "name": "Nature Biomedical Engineering",
                    "issn": "2157-846X",
                    "if": 26.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Nature Portfolio",
                    "focus": "Bioengineering",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "IEEE Transactions on Biomedical Engineering",
                    "issn": "0018-9294",
                    "if": 4.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "IEEE",
                    "focus": "BME methods",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "dblp",
                      "core-portal",
                      "think-check-attend"
                    ],
                    "name": "Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
                    "acronym": "EMBC",
                    "organizer": "IEEE Engineering in Medicine and Biology Society",
                    "focus": "Biomedical engineering",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "electrical",
                "name": "Electrical Engineering",
                "journals": [
                  {
                    "name": "IEEE Transactions on Power Systems",
                    "issn": "0885-8950",
                    "if": 6.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "IEEE",
                    "focus": "Power systems",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "IEEE Journal of Solid-State Circuits",
                    "issn": "0018-9200",
                    "if": 5.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "IEEE",
                    "focus": "Integrated circuits",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Global EE Research Express",
                    "issn": "0000-0010",
                    "if": 0.3,
                    "quartile": "Q4",
                    "predatory": true,
                    "openAccess": true,
                    "publisher": "EngineerOpen Hub",
                    "focus": "Indexed nowhere credible",
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "materials-eng",
                "name": "Materials Engineering",
                "children": [
                  {
                    "id": "structural-materials",
                    "name": "Structural Materials",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Acta Materialia",
                        "issn": "1359-6454",
                        "if": 8.3,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Materials science"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Materials Science and Engineering A",
                        "issn": "0921-5093",
                        "if": 5.7,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Structural materials"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Materials Science",
                        "issn": "0022-2461",
                        "if": 3.5,
                        "quartile": "Q2",
                        "publisher": "Springer",
                        "focus": "Materials science"
                      },
                      {
                        "name": "Scripta Materialia",
                        "issn": "1359-6462",
                        "if": 5.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Scripta Materialia",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Materials & Design",
                        "issn": "0264-1275",
                        "if": 7.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Materials & Design",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nanomaterials",
                    "name": "Nanomaterials",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "ACS Nano",
                        "issn": "1936-0851",
                        "if": 15.8,
                        "quartile": "Q1",
                        "publisher": "ACS",
                        "focus": "Nanoscience"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Nano Letters",
                        "issn": "1530-6984",
                        "if": 9.6,
                        "quartile": "Q1",
                        "publisher": "ACS",
                        "focus": "Nanoscale science"
                      },
                      {
                        "name": "Nano Today",
                        "issn": "1748-0132",
                        "if": 16.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Nano Today",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Small",
                        "issn": "1613-6810",
                        "if": 13,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Small",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "civil-eng",
                "name": "Civil Engineering",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Structural Engineering",
                    "issn": "0733-9445",
                    "if": 3.1,
                    "quartile": "Q1",
                    "publisher": "ASCE",
                    "focus": "Structural engineering"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Construction and Building Materials",
                    "issn": "0950-0618",
                    "if": 7.4,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Construction materials"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Cement and Concrete Research",
                    "issn": "0008-8846",
                    "if": 10.9,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Cement & concrete"
                  },
                  {
                    "openAccess": true,
                    "predatory": true,
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Civil Eng Global Open",
                    "issn": "0000-0021",
                    "if": 0.2,
                    "quartile": "Q4",
                    "publisher": "StructPublish",
                    "focus": "Predatory civil eng OA"
                  },
                  {
                    "openAccess": false,
                    "name": "Engineering Structures",
                    "issn": "0141-0296",
                    "if": 5.6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Structural engineering",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of Bridge Engineering",
                    "issn": "1084-0702",
                    "if": 2.7,
                    "quartile": "Q2",
                    "publisher": "ASCE",
                    "focus": "Bridge engineering",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "mechanical-eng",
                "name": "Mechanical Engineering",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "International Journal of Mechanical Sciences",
                    "issn": "0020-7403",
                    "if": 6.4,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Mechanical sciences"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Fluid Mechanics",
                    "issn": "0022-1120",
                    "if": 3.6,
                    "quartile": "Q1",
                    "publisher": "Cambridge",
                    "focus": "Fluid mechanics"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Mechanical Systems and Signal Processing",
                    "issn": "0888-3270",
                    "if": 7.9,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Dynamics & signal processing"
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of Sound and Vibration",
                    "issn": "0022-460X",
                    "if": 3.7,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Vibration & acoustics",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Mechanism and Machine Theory",
                    "issn": "0094-114X",
                    "if": 4.5,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Mechanisms",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Proceedings of the Institution of Mechanical Engineers Part C",
                    "issn": "0954-4062",
                    "if": 1.7,
                    "quartile": "Q3",
                    "publisher": "SAGE",
                    "focus": "Mechanical engineering science",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "chemical-eng",
                "name": "Chemical Engineering",
                "journals": [
                  {
                    "name": "Chemical Engineering Journal",
                    "issn": "1385-8947",
                    "if": 13.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Chemical Engineering Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "AIChE Journal",
                    "issn": "0001-1541",
                    "if": 3.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "AIChE Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Industrial & Engineering Chemistry Research",
                    "issn": "0888-5885",
                    "if": 3.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACS",
                    "focus": "Industrial & Engineering Chemistry Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Chemical Engineering Science",
                    "issn": "0009-2509",
                    "if": 4.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Chemical Engineering Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "aerospace",
                "name": "Aerospace Engineering",
                "journals": [
                  {
                    "name": "AIAA Journal",
                    "issn": "0001-1452",
                    "if": 2.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "AIAA",
                    "focus": "AIAA Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Aircraft",
                    "issn": "0021-8669",
                    "if": 1.5,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "AIAA",
                    "focus": "Journal of Aircraft",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Aerospace Science and Technology",
                    "issn": "1270-9638",
                    "if": 5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Aerospace Science and Technology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Progress in Aerospace Sciences",
                    "issn": "0376-0421",
                    "if": 10.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Progress in Aerospace Sciences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "industrial-eng",
                "name": "Industrial & Systems Engineering",
                "journals": [
                  {
                    "name": "International Journal of Production Economics",
                    "issn": "0925-5273",
                    "if": 9.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "International Journal of Production Economics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "European Journal of Operational Research",
                    "issn": "0377-2217",
                    "if": 6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "European Journal of Operational Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "IISE Transactions",
                    "issn": "2472-5854",
                    "if": 2.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "IISE Transactions",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Computers & Industrial Engineering",
                    "issn": "0360-8352",
                    "if": 6.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Computers & Industrial Engineering",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "environmental-eng",
                "name": "Environmental Engineering",
                "journals": [
                  {
                    "name": "Water Research",
                    "issn": "0043-1354",
                    "if": 11.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Water Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Hazardous Materials",
                    "issn": "0304-3894",
                    "if": 12.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Hazardous Materials",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Environmental Engineering Science",
                    "issn": "1092-8758",
                    "if": 1.6,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Mary Ann Liebert",
                    "focus": "Environmental Engineering Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "nuclear-eng",
                "name": "Nuclear Engineering",
                "journals": [
                  {
                    "name": "Nuclear Engineering and Design",
                    "issn": "0029-5493",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Nuclear Engineering and Design",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Annals of Nuclear Energy",
                    "issn": "0306-4549",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Annals of Nuclear Energy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Nuclear Science and Engineering",
                    "issn": "0029-5639",
                    "if": 1.2,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis / ANS",
                    "focus": "Nuclear Science and Engineering",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "math",
            "name": "Mathematics & Statistics",
            "description": "Pure math, applied math, probability, and statistics",
            "children": [
              {
                "id": "pure-math",
                "name": "Pure Mathematics",
                "children": [
                  {
                    "id": "algebra",
                    "name": "Algebra",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Algebra",
                        "issn": "0021-8693",
                        "if": 0.9,
                        "quartile": "Q2",
                        "publisher": "Elsevier",
                        "focus": "Algebra"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Algebra & Number Theory",
                        "issn": "1930-8124",
                        "if": 1.1,
                        "quartile": "Q1",
                        "publisher": "MSP",
                        "focus": "Algebra & number theory"
                      },
                      {
                        "name": "Advances in Mathematics",
                        "issn": "0001-8708",
                        "if": 1.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Advances in Mathematics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Pure and Applied Algebra",
                        "issn": "0022-4049",
                        "if": 0.8,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Journal of Pure and Applied Algebra",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "analysis-math",
                    "name": "Analysis",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Annals of Mathematics",
                        "issn": "0003-486X",
                        "if": 5.7,
                        "quartile": "Q1",
                        "publisher": "Princeton / IAS",
                        "focus": "Pure mathematics"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Functional Analysis",
                        "issn": "0022-1236",
                        "if": 1.6,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Functional analysis"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Acta Mathematica",
                        "issn": "0001-5962",
                        "if": 3.7,
                        "quartile": "Q1",
                        "publisher": "Institut Mittag-Leffler",
                        "focus": "Mathematics"
                      },
                      {
                        "name": "Inventiones Mathematicae",
                        "issn": "0020-9910",
                        "if": 2.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Inventiones Mathematicae",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Duke Mathematical Journal",
                        "issn": "0012-7094",
                        "if": 2.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Duke",
                        "focus": "Duke Mathematical Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "applied-math",
                "name": "Applied Mathematics",
                "children": [
                  {
                    "id": "numerical-analysis",
                    "name": "Numerical Analysis",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "SIAM Journal on Numerical Analysis",
                        "issn": "0036-1429",
                        "if": 2.6,
                        "quartile": "Q1",
                        "publisher": "SIAM",
                        "focus": "Numerical analysis"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Numerische Mathematik",
                        "issn": "0029-599X",
                        "if": 1.9,
                        "quartile": "Q2",
                        "publisher": "Springer",
                        "focus": "Numerical mathematics"
                      },
                      {
                        "name": "Mathematics of Computation",
                        "issn": "0025-5718",
                        "if": 1.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "AMS",
                        "focus": "Mathematics of Computation",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "IMA Journal of Numerical Analysis",
                        "issn": "0272-4979",
                        "if": 2.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford",
                        "focus": "IMA Journal of Numerical Analysis",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "math-biology",
                    "name": "Mathematical Biology",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Bulletin of Mathematical Biology",
                        "issn": "0092-8240",
                        "if": 2,
                        "quartile": "Q2",
                        "publisher": "Springer",
                        "focus": "Mathematical biology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Mathematical Biology",
                        "issn": "0303-6812",
                        "if": 2.1,
                        "quartile": "Q2",
                        "publisher": "Springer",
                        "focus": "Math biology"
                      },
                      {
                        "openAccess": true,
                        "predatory": true,
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "BioMath Instant Open",
                        "issn": "0000-0017",
                        "if": 0.2,
                        "quartile": "Q4",
                        "publisher": "BioMath Fast",
                        "focus": "Predatory math-bio OA"
                      },
                      {
                        "name": "Mathematical Biosciences",
                        "issn": "0025-5564",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Mathematical Biosciences",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Theoretical Biology",
                        "issn": "0022-5193",
                        "if": 1.9,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Journal of Theoretical Biology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "statistics",
                "name": "Statistics",
                "children": [
                  {
                    "id": "theoretical-stats",
                    "name": "Theoretical Statistics",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Annals of Statistics",
                        "issn": "0090-5364",
                        "if": 3.2,
                        "quartile": "Q1",
                        "publisher": "IMS",
                        "focus": "Theoretical statistics"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of the Royal Statistical Society Series B",
                        "issn": "1369-7412",
                        "if": 3.5,
                        "quartile": "Q1",
                        "publisher": "Wiley / RSS",
                        "focus": "Statistical methodology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Biometrika",
                        "issn": "0006-3444",
                        "if": 2.4,
                        "quartile": "Q1",
                        "publisher": "Oxford",
                        "focus": "Theoretical statistics"
                      },
                      {
                        "name": "Bernoulli",
                        "issn": "1350-7265",
                        "if": 1.4,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Bernoulli Society",
                        "focus": "Bernoulli",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Statistical Science",
                        "issn": "0883-4237",
                        "if": 3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IMS",
                        "focus": "Statistical Science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "applied-stats",
                    "name": "Applied Statistics",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of the American Statistical Association",
                        "issn": "0162-1459",
                        "if": 3,
                        "quartile": "Q1",
                        "publisher": "Taylor & Francis / ASA",
                        "focus": "Statistics"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Statistics in Medicine",
                        "issn": "0277-6715",
                        "if": 1.8,
                        "quartile": "Q2",
                        "publisher": "Wiley",
                        "focus": "Biostatistics applications"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Statistical Methods in Medical Research",
                        "issn": "0962-2802",
                        "if": 1.9,
                        "quartile": "Q2",
                        "publisher": "SAGE",
                        "focus": "Medical statistics"
                      },
                      {
                        "name": "Biometrics",
                        "issn": "0006-341X",
                        "if": 1.6,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Biometrics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Annals of Applied Statistics",
                        "issn": "1932-6157",
                        "if": 1.6,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "IMS",
                        "focus": "Annals of Applied Statistics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "think-check-attend"
                    ],
                    "name": "Joint Statistical Meetings",
                    "acronym": "JSM",
                    "organizer": "American Statistical Association and partner societies",
                    "focus": "Statistics",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              }
            ]
          },
          {
            "id": "environmental",
            "name": "Environmental Science",
            "description": "Environment, sustainability, and earth-system applications",
            "children": [
              {
                "id": "env-science-general",
                "name": "Environmental Science (General)",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Environmental Science & Technology",
                    "issn": "0013-936X",
                    "if": 10.8,
                    "quartile": "Q1",
                    "publisher": "ACS",
                    "focus": "Environmental science & technology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Science of the Total Environment",
                    "issn": "0048-9697",
                    "if": 8.2,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Environment"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Environmental Pollution",
                    "issn": "0269-7491",
                    "if": 7.6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Pollution science"
                  },
                  {
                    "openAccess": true,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ],
                    "name": "Environmental Research Letters",
                    "issn": "1748-9326",
                    "if": 5.8,
                    "quartile": "Q1",
                    "publisher": "IOP",
                    "focus": "Environmental research"
                  },
                  {
                    "name": "Environment International",
                    "issn": "0160-4120",
                    "if": 10.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Environment International",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Cleaner Production",
                    "issn": "0959-6526",
                    "if": 9.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Cleaner Production",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "sustainability",
                "name": "Sustainability",
                "children": [
                  {
                    "id": "sustainable-development",
                    "name": "Sustainable Development",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Nature Sustainability",
                        "issn": "2398-9629",
                        "if": 27.6,
                        "quartile": "Q1",
                        "publisher": "Nature Portfolio",
                        "focus": "Sustainability"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Sustainable Development",
                        "issn": "0968-0803",
                        "if": 9.9,
                        "quartile": "Q1",
                        "publisher": "Wiley",
                        "focus": "Sustainable development"
                      },
                      {
                        "openAccess": true,
                        "predatory": true,
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Sustainability Rapid World",
                        "issn": "0000-0018",
                        "if": 0.4,
                        "quartile": "Q4",
                        "publisher": "GreenFast OA",
                        "focus": "Predatory sustainability mill"
                      },
                      {
                        "name": "Sustainability Science",
                        "issn": "1862-4065",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Sustainability Science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Ecological Economics",
                        "issn": "0921-8009",
                        "if": 5.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Ecological Economics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "energy-env",
                    "name": "Energy & Environment",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Energy & Environmental Science",
                        "issn": "1754-5692",
                        "if": 32.4,
                        "quartile": "Q1",
                        "publisher": "RSC",
                        "focus": "Energy & environment"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Renewable and Sustainable Energy Reviews",
                        "issn": "1364-0321",
                        "if": 15.9,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Renewable energy reviews"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Applied Energy",
                        "issn": "0306-2619",
                        "if": 10.1,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Applied energy systems"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ecology-env",
                "name": "Applied Ecology",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Applied Ecology",
                    "issn": "0021-8901",
                    "if": 4.8,
                    "quartile": "Q1",
                    "publisher": "Wiley / BES",
                    "focus": "Applied ecology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Ecological Applications",
                    "issn": "1051-0761",
                    "if": 4.3,
                    "quartile": "Q1",
                    "publisher": "Wiley / ESA",
                    "focus": "Ecological applications"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Restoration Ecology",
                    "issn": "1061-2971",
                    "if": 2.7,
                    "quartile": "Q2",
                    "publisher": "Wiley",
                    "focus": "Ecological restoration"
                  },
                  {
                    "name": "Journal of Ecology",
                    "issn": "0022-0477",
                    "if": 5.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley / BES",
                    "focus": "Journal of Ecology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Ecology Letters",
                    "issn": "1461-023X",
                    "if": 7.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Ecology Letters",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "nursing-allied",
            "name": "Nursing & Allied Health",
            "children": [
              {
                "id": "nursing",
                "name": "Nursing",
                "children": [
                  {
                    "id": "nursing-research",
                    "name": "Nursing Research",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "International Journal of Nursing Studies",
                        "issn": "0020-7489",
                        "if": 7.5,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Nursing research"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Advanced Nursing",
                        "issn": "0309-2402",
                        "if": 3.1,
                        "quartile": "Q1",
                        "publisher": "Wiley",
                        "focus": "Advanced nursing"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Nursing Research",
                        "issn": "0029-6562",
                        "if": 2.3,
                        "quartile": "Q2",
                        "publisher": "Wolters Kluwer",
                        "focus": "Nursing science"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Nurse Education Today",
                        "issn": "0260-6917",
                        "if": 3.6,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Nurse education"
                      },
                      {
                        "name": "Journal of Clinical Nursing",
                        "issn": "0962-1067",
                        "if": 3.2,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Journal of Clinical Nursing",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Nursing Scholarship",
                        "issn": "1527-6546",
                        "if": 2.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / STTI",
                        "focus": "Journal of Nursing Scholarship",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "critical-care-nursing",
                    "name": "Critical Care Nursing",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Intensive and Critical Care Nursing",
                        "issn": "0964-3397",
                        "if": 3.4,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Critical care nursing"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "American Journal of Critical Care",
                        "issn": "1062-3264",
                        "if": 2.1,
                        "quartile": "Q2",
                        "publisher": "AACN",
                        "focus": "Critical care nursing practice"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "physiotherapy",
                "name": "Physiotherapy & Rehabilitation",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Physical Therapy",
                    "issn": "0031-9023",
                    "if": 3,
                    "quartile": "Q1",
                    "publisher": "Oxford / APTA",
                    "focus": "Physical therapy"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Archives of Physical Medicine and Rehabilitation",
                    "issn": "0003-9993",
                    "if": 3.6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Rehab medicine"
                  },
                  {
                    "openAccess": true,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ],
                    "name": "Journal of Physiotherapy",
                    "issn": "1836-9553",
                    "if": 7,
                    "quartile": "Q1",
                    "publisher": "Elsevier / APA",
                    "focus": "Physiotherapy"
                  },
                  {
                    "name": "Physiotherapy",
                    "issn": "0031-9406",
                    "if": 3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Physiotherapy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Orthopaedic & Sports Physical Therapy",
                    "issn": "0190-6011",
                    "if": 4.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "JOSPT",
                    "focus": "Journal of Orthopaedic & Sports Physical Therapy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "midwifery",
                "name": "Midwifery",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Midwifery",
                    "issn": "0266-6138",
                    "if": 2.5,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Midwifery"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Birth",
                    "issn": "0730-7659",
                    "if": 2.2,
                    "quartile": "Q2",
                    "publisher": "Wiley",
                    "focus": "Perinatal care"
                  },
                  {
                    "name": "Women and Birth",
                    "issn": "1871-5192",
                    "if": 2.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Women and Birth",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "BMC Pregnancy and Childbirth",
                    "issn": "1471-2393",
                    "if": 2.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "BMC",
                    "focus": "BMC Pregnancy and Childbirth",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "pharmacy",
            "name": "Pharmacy & Pharmacology",
            "children": [
              {
                "id": "pharmacology",
                "name": "Pharmacology",
                "children": [
                  {
                    "id": "basic-pharm",
                    "name": "Basic Pharmacology",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Pharmacological Reviews",
                        "issn": "0031-6997",
                        "if": 21.1,
                        "quartile": "Q1",
                        "publisher": "ASPET",
                        "focus": "Pharmacology reviews"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "British Journal of Pharmacology",
                        "issn": "0007-1188",
                        "if": 6.8,
                        "quartile": "Q1",
                        "publisher": "Wiley / BPS",
                        "focus": "Pharmacology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "European Journal of Pharmacology",
                        "issn": "0014-2999",
                        "if": 4.2,
                        "quartile": "Q2",
                        "publisher": "Elsevier",
                        "focus": "Experimental pharmacology"
                      },
                      {
                        "name": "Biochemical Pharmacology",
                        "issn": "0006-2952",
                        "if": 4.8,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Biochemical Pharmacology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Pharmacology & Therapeutics",
                        "issn": "0163-7258",
                        "if": 11.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Pharmacology & Therapeutics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "clinical-pharm",
                    "name": "Clinical Pharmacology",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Clinical Pharmacology & Therapeutics",
                        "issn": "0009-9236",
                        "if": 6,
                        "quartile": "Q1",
                        "publisher": "Wiley / ASCPT",
                        "focus": "Clinical pharmacology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "British Journal of Clinical Pharmacology",
                        "issn": "0306-5251",
                        "if": 3.1,
                        "quartile": "Q2",
                        "publisher": "Wiley",
                        "focus": "Clinical pharmacology"
                      },
                      {
                        "name": "Clinical Pharmacokinetics",
                        "issn": "0312-5963",
                        "if": 4.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Clinical Pharmacokinetics",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "European Journal of Clinical Pharmacology",
                        "issn": "0031-6970",
                        "if": 2.3,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "European Journal of Clinical Pharmacology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "pharmaceutics",
                "name": "Pharmaceutics & Drug Delivery",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Controlled Release",
                    "issn": "0168-3659",
                    "if": 10.5,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Drug delivery"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "International Journal of Pharmaceutics",
                    "issn": "0378-5173",
                    "if": 5.3,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Pharmaceutics"
                  },
                  {
                    "openAccess": true,
                    "predatory": true,
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Pharma Delivery Mega Journal",
                    "issn": "0000-0019",
                    "if": 0.3,
                    "quartile": "Q4",
                    "publisher": "RxOpen World",
                    "focus": "Predatory pharmaceutics OA"
                  }
                ]
              },
              {
                "id": "pharmacy-practice",
                "name": "Pharmacy Practice",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Research in Social and Administrative Pharmacy",
                    "issn": "1551-7411",
                    "if": 3,
                    "quartile": "Q2",
                    "publisher": "Elsevier",
                    "focus": "Pharmacy practice"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "American Journal of Health-System Pharmacy",
                    "issn": "1079-2082",
                    "if": 2,
                    "quartile": "Q3",
                    "publisher": "ASHP",
                    "focus": "Health-system pharmacy"
                  },
                  {
                    "openAccess": false,
                    "name": "International Journal of Clinical Pharmacy",
                    "issn": "2210-7703",
                    "if": 2,
                    "quartile": "Q3",
                    "publisher": "Springer",
                    "focus": "Clinical pharmacy",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of the American Pharmacists Association",
                    "issn": "1544-3191",
                    "if": 1.8,
                    "quartile": "Q3",
                    "publisher": "Elsevier",
                    "focus": "Pharmacy practice",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "dentistry",
            "name": "Dentistry",
            "children": [
              {
                "id": "general-dentistry",
                "name": "General Dentistry",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Dental Research",
                    "issn": "0022-0345",
                    "if": 5.7,
                    "quartile": "Q1",
                    "publisher": "SAGE / IADR",
                    "focus": "Dental research"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Dentistry",
                    "issn": "0300-5711",
                    "if": 4.8,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Clinical dentistry"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Dental Materials",
                    "issn": "0109-5641",
                    "if": 5,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Dental materials"
                  },
                  {
                    "name": "Clinical Oral Investigations",
                    "issn": "1432-6981",
                    "if": 3.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Clinical Oral Investigations",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Oral Rehabilitation",
                    "issn": "0305-182X",
                    "if": 2.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Journal of Oral Rehabilitation",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "orthodontics",
                "name": "Orthodontics",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "American Journal of Orthodontics and Dentofacial Orthopedics",
                    "issn": "0889-5406",
                    "if": 2.7,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Orthodontics"
                  },
                  {
                    "openAccess": true,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ],
                    "name": "Angle Orthodontist",
                    "issn": "0003-3219",
                    "if": 2.7,
                    "quartile": "Q1",
                    "publisher": "E.H. Angle Society",
                    "focus": "Orthodontics"
                  },
                  {
                    "name": "European Journal of Orthodontics",
                    "issn": "0141-5387",
                    "if": 2.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "European Journal of Orthodontics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Progress in Orthodontics",
                    "issn": "2196-1042",
                    "if": 3.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "Springer",
                    "focus": "Progress in Orthodontics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  }
                ]
              },
              {
                "id": "periodontology",
                "name": "Periodontology",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Clinical Periodontology",
                    "issn": "0303-6979",
                    "if": 5.8,
                    "quartile": "Q1",
                    "publisher": "Wiley",
                    "focus": "Periodontology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Periodontology",
                    "issn": "0022-3492",
                    "if": 3.7,
                    "quartile": "Q1",
                    "publisher": "Wiley / AAP",
                    "focus": "Periodontology"
                  },
                  {
                    "name": "Periodontology 2000",
                    "issn": "0906-6713",
                    "if": 15,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Periodontology 2000",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Periodontal Research",
                    "issn": "0022-3484",
                    "if": 3.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Journal of Periodontal Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "veterinary",
            "name": "Veterinary Medicine",
            "children": [
              {
                "id": "vet-clinical",
                "name": "Clinical Veterinary Medicine",
                "journals": [
                  {
                    "openAccess": true,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ],
                    "name": "Journal of Veterinary Internal Medicine",
                    "issn": "0891-6640",
                    "if": 2.1,
                    "quartile": "Q1",
                    "publisher": "Wiley / ACVIM",
                    "focus": "Veterinary internal medicine"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Veterinary Record",
                    "issn": "0042-4900",
                    "if": 1.9,
                    "quartile": "Q2",
                    "publisher": "Wiley / BVA",
                    "focus": "Veterinary practice"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Equine Veterinary Journal",
                    "issn": "0425-1644",
                    "if": 2.1,
                    "quartile": "Q1",
                    "publisher": "Wiley",
                    "focus": "Equine medicine"
                  },
                  {
                    "name": "Veterinary Journal",
                    "issn": "1090-0233",
                    "if": 2.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Veterinary Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Small Animal Practice",
                    "issn": "0022-4510",
                    "if": 1.5,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Journal of Small Animal Practice",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "vet-pathology",
                "name": "Veterinary Pathology",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Veterinary Pathology",
                    "issn": "0300-9858",
                    "if": 2.1,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "Veterinary pathology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Comparative Pathology",
                    "issn": "0021-9975",
                    "if": 1,
                    "quartile": "Q3",
                    "publisher": "Elsevier",
                    "focus": "Comparative pathology"
                  },
                  {
                    "name": "Veterinary Clinical Pathology",
                    "issn": "0275-6382",
                    "if": 1.1,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Veterinary Clinical Pathology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Veterinary Diagnostic Investigation",
                    "issn": "1040-6387",
                    "if": 1.3,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Journal of Veterinary Diagnostic Investigation",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "agriculture",
            "name": "Agriculture & Food Science",
            "children": [
              {
                "id": "agronomy",
                "name": "Agronomy",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Field Crops Research",
                    "issn": "0378-4290",
                    "if": 5.6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Crop science"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Agricultural Systems",
                    "issn": "0308-521X",
                    "if": 6.1,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Farming systems"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Agronomy Journal",
                    "issn": "0002-1962",
                    "if": 2.1,
                    "quartile": "Q2",
                    "publisher": "Wiley / ASA",
                    "focus": "Agronomy"
                  },
                  {
                    "openAccess": false,
                    "name": "European Journal of Agronomy",
                    "issn": "1161-0301",
                    "if": 4.5,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Agronomy",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Crop Science",
                    "issn": "0011-183X",
                    "if": 1.9,
                    "quartile": "Q2",
                    "publisher": "Wiley",
                    "focus": "Crop science",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Grass and Forage Science",
                    "issn": "0142-5242",
                    "if": 1.6,
                    "quartile": "Q3",
                    "publisher": "Wiley",
                    "focus": "Forage science",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "food-science",
                "name": "Food Science",
                "children": [
                  {
                    "id": "food-chemistry",
                    "name": "Food Chemistry",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Food Chemistry",
                        "issn": "0308-8146",
                        "if": 8.5,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Food chemistry"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Agricultural and Food Chemistry",
                        "issn": "0021-8561",
                        "if": 5.7,
                        "quartile": "Q1",
                        "publisher": "ACS",
                        "focus": "Ag & food chemistry"
                      },
                      {
                        "openAccess": true,
                        "predatory": true,
                        "metricSourceIds": [
                          "predatory",
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Food Mega Research Express",
                        "issn": "0000-0020",
                        "if": 0.3,
                        "quartile": "Q4",
                        "publisher": "NutriFast Press",
                        "focus": "Predatory food science OA"
                      },
                      {
                        "name": "Food Research International",
                        "issn": "0963-9969",
                        "if": 7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Food Research International",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "LWT",
                        "issn": "0023-6438",
                        "if": 6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "LWT",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "food-safety",
                    "name": "Food Safety",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Food Control",
                        "issn": "0956-7135",
                        "if": 5.6,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Food safety & quality"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "International Journal of Food Microbiology",
                        "issn": "0168-1605",
                        "if": 4.7,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Food microbiology"
                      },
                      {
                        "name": "Food Microbiology",
                        "issn": "0740-0020",
                        "if": 4.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Food Microbiology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Food Protection",
                        "issn": "0362-028X",
                        "if": 2.2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier / IAFP",
                        "focus": "Journal of Food Protection",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "architecture",
            "name": "Architecture & Built Environment",
            "journals": [],
            "children": [
              {
                "id": "architecture-design",
                "name": "Architecture",
                "journals": [
                  {
                    "name": "Building and Environment",
                    "issn": "0360-1323",
                    "if": 7.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Building and Environment",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Architecture",
                    "issn": "1360-2365",
                    "if": 0.7,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Journal of Architecture",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Architectural Science Review",
                    "issn": "0003-8628",
                    "if": 1.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Architectural Science Review",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Frontiers of Architectural Research",
                    "issn": "2095-2635",
                    "if": 2.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "KeAi / Elsevier",
                    "focus": "Frontiers of Architectural Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "urban-planning",
                "name": "Urban Planning",
                "journals": [
                  {
                    "name": "Urban Studies",
                    "issn": "0042-0980",
                    "if": 4.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Urban Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of the American Planning Association",
                    "issn": "0194-4363",
                    "if": 3.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis / APA",
                    "focus": "Journal of the American Planning Association",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Cities",
                    "issn": "0264-2751",
                    "if": 6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Cities",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Landscape and Urban Planning",
                    "issn": "0169-2046",
                    "if": 7.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Landscape and Urban Planning",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "sports-science",
            "name": "Sports Science & Kinesiology",
            "journals": [],
            "children": [
              {
                "id": "exercise-phys",
                "name": "Exercise Physiology",
                "journals": [
                  {
                    "name": "Medicine & Science in Sports & Exercise",
                    "issn": "0195-9131",
                    "if": 4.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wolters Kluwer / ACSM",
                    "focus": "Medicine & Science in Sports & Exercise",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Applied Physiology",
                    "issn": "8750-7587",
                    "if": 3.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "APS",
                    "focus": "Journal of Applied Physiology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "European Journal of Applied Physiology",
                    "issn": "1439-6319",
                    "if": 2.8,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "European Journal of Applied Physiology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "sport-performance",
                "name": "Sport Performance",
                "journals": [
                  {
                    "name": "Sports Medicine",
                    "issn": "0112-1642",
                    "if": 9.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Sports Medicine",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Sports Sciences",
                    "issn": "0264-0414",
                    "if": 2.6,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Journal of Sports Sciences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "International Journal of Sports Physiology and Performance",
                    "issn": "1555-0265",
                    "if": 3.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Human Kinetics",
                    "focus": "International Journal of Sports Physiology and Performance",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Sport Science Instant OA",
                    "issn": "0000-0034",
                    "if": 0.2,
                    "quartile": "Q4",
                    "predatory": true,
                    "openAccess": true,
                    "publisher": "AthletePublish",
                    "focus": "Predatory sports OA",
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "transportation",
            "name": "Transportation",
            "journals": [
              {
                "name": "Transportation Research Part B: Methodological",
                "issn": "0191-2615",
                "if": 6.1,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Transportation Research Part B: Methodological",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Transportation Research Part C: Emerging Technologies",
                "issn": "0968-0900",
                "if": 7.6,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Transportation Research Part C: Emerging Technologies",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Transportation Research Part A: Policy and Practice",
                "issn": "0965-8564",
                "if": 6.3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Transportation Research Part A: Policy and Practice",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Transport Geography",
                "issn": "0966-6923",
                "if": 5.7,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Journal of Transport Geography",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "IEEE Transactions on Intelligent Transportation Systems",
                "issn": "1524-9050",
                "if": 7.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "IEEE",
                "focus": "IEEE Transactions on Intelligent Transportation Systems",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "materials-science",
            "name": "Materials Science (Cross-cutting)",
            "journals": [],
            "children": [
              {
                "id": "metals",
                "name": "Metals & Metallurgy",
                "journals": [
                  {
                    "name": "Metallurgical and Materials Transactions A",
                    "issn": "1073-5623",
                    "if": 2.3,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Metallurgical and Materials Transactions A",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Corrosion Science",
                    "issn": "0010-938X",
                    "if": 7.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Corrosion Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Alloys and Compounds",
                    "issn": "0925-8388",
                    "if": 5.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Alloys and Compounds",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "polymers",
                "name": "Polymers",
                "journals": [
                  {
                    "name": "Macromolecules",
                    "issn": "0024-9297",
                    "if": 5.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "ACS",
                    "focus": "Macromolecules",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Polymer",
                    "issn": "0032-3861",
                    "if": 4.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Polymer",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Progress in Polymer Science",
                    "issn": "0079-6700",
                    "if": 23.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Progress in Polymer Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "ceramics",
                "name": "Ceramics",
                "journals": [
                  {
                    "name": "Journal of the American Ceramic Society",
                    "issn": "0002-7820",
                    "if": 3.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Journal of the American Ceramic Society",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of the European Ceramic Society",
                    "issn": "0955-2219",
                    "if": 5.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of the European Ceramic Society",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Ceramics International",
                    "issn": "0272-8842",
                    "if": 5.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Ceramics International",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "energy",
            "name": "Energy Research",
            "journals": [],
            "children": [
              {
                "id": "energy-storage",
                "name": "Energy Storage",
                "journals": [
                  {
                    "name": "Nature Energy",
                    "issn": "2058-7546",
                    "if": 49.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Nature Portfolio",
                    "focus": "Nature Energy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Joule",
                    "issn": "2542-4351",
                    "if": 38.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cell Press",
                    "focus": "Joule",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Energy Storage Materials",
                    "issn": "2405-8297",
                    "if": 18.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Energy Storage Materials",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Power Sources",
                    "issn": "0378-7753",
                    "if": 8.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Journal of Power Sources",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "solar",
                "name": "Solar Energy",
                "journals": [
                  {
                    "name": "Solar Energy Materials and Solar Cells",
                    "issn": "0927-0248",
                    "if": 6.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Solar Energy Materials and Solar Cells",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Progress in Photovoltaics",
                    "issn": "1062-7995",
                    "if": 6.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Progress in Photovoltaics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Solar Energy",
                    "issn": "0038-092X",
                    "if": 6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Solar Energy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "ocean-eng",
            "name": "Ocean & Marine Engineering",
            "journals": [
              {
                "name": "Ocean Engineering",
                "issn": "0029-8018",
                "if": 4.8,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Ocean Engineering",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Coastal Engineering",
                "issn": "0378-3839",
                "if": 4.3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Coastal Engineering",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Marine Structures",
                "issn": "0951-8339",
                "if": 3.6,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Marine Structures",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Applied Ocean Research",
                "issn": "0141-1187",
                "if": 3.8,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Applied Ocean Research",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          }
        ]
      },
      {
        "id": "social",
        "name": "Social & Behavioral Sciences",
        "description": "Society, mind, and markets",
        "children": [
          {
            "id": "psychology",
            "name": "Psychology",
            "description": "Mind, behavior, and mental processes",
            "children": [
              {
                "id": "cognitive",
                "name": "Cognitive Psychology",
                "description": "Attention, memory, language, reasoning",
                "children": [
                  {
                    "id": "memory-cognition",
                    "name": "Memory & Learning",
                    "journals": [
                      {
                        "name": "Cognitive Psychology",
                        "issn": "0010-0285",
                        "if": 3.2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Cognitive processes",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Memory and Language",
                        "issn": "0749-596X",
                        "if": 2.7,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Memory & language",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Memory & Cognition",
                        "issn": "0090-502X",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer",
                        "focus": "Memory & Cognition",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Quarterly Journal of Experimental Psychology",
                        "issn": "1747-0218",
                        "if": 1.4,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SAGE",
                        "focus": "Quarterly Journal of Experimental Psychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "attention-perception",
                    "name": "Attention & Perception",
                    "journals": [
                      {
                        "name": "Journal of Experimental Psychology: Human Perception and Performance",
                        "issn": "0096-1523",
                        "if": 2.1,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Perception & attention",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Attention, Perception, & Psychophysics",
                        "issn": "1943-3921",
                        "if": 1.7,
                        "quartile": "Q3",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Springer / Psychonomic Society",
                        "focus": "Perception science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Perception",
                        "issn": "0301-0066",
                        "if": 1.3,
                        "quartile": "Q3",
                        "publisher": "SAGE",
                        "focus": "Perception",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Vision Research",
                        "issn": "0042-6989",
                        "if": 1.6,
                        "quartile": "Q3",
                        "publisher": "Elsevier",
                        "focus": "Vision science",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "general-cognitive",
                    "name": "General Cognitive Science",
                    "journals": [
                      {
                        "name": "Psychological Science",
                        "issn": "0956-7976",
                        "if": 4.9,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SAGE / APS",
                        "focus": "Empirical psychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Mind & Behavior International",
                        "issn": "0000-0011",
                        "if": 0.5,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "PsycheFast Journals",
                        "focus": "Predatory psychology OA",
                        "metricSourceIds": [
                          "predatory"
                        ]
                      }
                    ]
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "think-check-attend"
                    ],
                    "name": "Annual Meeting of the Cognitive Science Society",
                    "acronym": "CogSci",
                    "organizer": "Cognitive Science Society",
                    "focus": "Cognitive science",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "clinical-psych",
                "name": "Clinical Psychology",
                "description": "Assessment, psychopathology, intervention",
                "children": [
                  {
                    "id": "clinical-science",
                    "name": "Clinical Science",
                    "journals": [
                      {
                        "name": "Clinical Psychological Science",
                        "issn": "2167-7026",
                        "if": 4.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SAGE / APS",
                        "focus": "Clinical science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of Consulting and Clinical Psychology",
                        "issn": "0022-006X",
                        "if": 4.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Clinical practice research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "psychopathology",
                    "name": "Psychopathology",
                    "journals": [
                      {
                        "name": "Journal of Abnormal Psychology",
                        "issn": "0021-843X",
                        "if": 4.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Psychopathology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Behaviour Research and Therapy",
                        "issn": "0005-7967",
                        "if": 4.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "CBT & behavior therapy",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "trauma-ptsd",
                    "name": "Trauma & PTSD",
                    "journals": [
                      {
                        "name": "Journal of Traumatic Stress",
                        "issn": "0894-9867",
                        "if": 2.7,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / ISTSS",
                        "focus": "Trauma research",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": true,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ],
                        "name": "European Journal of Psychotraumatology",
                        "issn": "2000-8066",
                        "if": 4.2,
                        "quartile": "Q1",
                        "publisher": "Taylor & Francis",
                        "focus": "Trauma & PTSD"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Psychological Trauma",
                        "issn": "1942-9681",
                        "if": 2.7,
                        "quartile": "Q2",
                        "publisher": "APA",
                        "focus": "Trauma psychology"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "developmental-psych",
                "name": "Developmental Psychology",
                "children": [
                  {
                    "id": "child-development",
                    "name": "Child Development",
                    "journals": [
                      {
                        "name": "Child Development",
                        "issn": "0009-3920",
                        "if": 4.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / SRCD",
                        "focus": "Child development",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Developmental Psychology",
                        "issn": "0012-1649",
                        "if": 3.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Lifespan development",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "adolescent-dev",
                    "name": "Adolescence",
                    "journals": [
                      {
                        "name": "Journal of Research on Adolescence",
                        "issn": "1050-8392",
                        "if": 3.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / SRA",
                        "focus": "Adolescent development",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Adolescence",
                        "issn": "0140-1971",
                        "if": 3,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Adolescent development"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Youth and Adolescence",
                        "issn": "0047-2891",
                        "if": 3.7,
                        "quartile": "Q1",
                        "publisher": "Springer",
                        "focus": "Youth development"
                      }
                    ]
                  },
                  {
                    "id": "aging-psych",
                    "name": "Aging & Adult Development",
                    "journals": [
                      {
                        "name": "Psychology and Aging",
                        "issn": "0882-7974",
                        "if": 3.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Adult development & aging",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journals of Gerontology Series B",
                        "issn": "1079-5014",
                        "if": 4.8,
                        "quartile": "Q1",
                        "publisher": "Oxford",
                        "focus": "Psychological aging"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Aging & Mental Health",
                        "issn": "1360-7863",
                        "if": 2.8,
                        "quartile": "Q2",
                        "publisher": "Taylor & Francis",
                        "focus": "Aging & mental health"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "social-psych",
                "name": "Social Psychology",
                "children": [
                  {
                    "id": "attitudes-persuasion",
                    "name": "Attitudes & Persuasion",
                    "journals": [
                      {
                        "name": "Journal of Personality and Social Psychology",
                        "issn": "0022-3514",
                        "if": 6.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Personality & social psych",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Personality and Social Psychology Bulletin",
                        "issn": "0146-1672",
                        "if": 3.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SAGE / SPSP",
                        "focus": "Social & personality",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "group-processes",
                    "name": "Group Processes",
                    "journals": [
                      {
                        "name": "Group Processes & Intergroup Relations",
                        "issn": "1368-4302",
                        "if": 2.7,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "SAGE",
                        "focus": "Intergroup relations",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Experimental Social Psychology",
                        "issn": "0022-1031",
                        "if": 3.1,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Experimental social psychology"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Social Psychological and Personality Science",
                        "issn": "1948-5506",
                        "if": 4.1,
                        "quartile": "Q1",
                        "publisher": "SAGE",
                        "focus": "Social & personality science"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "neuropsych",
                "name": "Neuropsychology & Neuroscience of Behavior",
                "children": [
                  {
                    "id": "clinical-neuropsych",
                    "name": "Clinical Neuropsychology",
                    "journals": [
                      {
                        "name": "Neuropsychology",
                        "issn": "0894-4105",
                        "if": 2.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Brain–behavior relationships",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Journal of the International Neuropsychological Society",
                        "issn": "1355-6177",
                        "if": 2.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Cambridge / INS",
                        "focus": "Neuropsychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Archives of Clinical Neuropsychology",
                        "issn": "0887-6177",
                        "if": 2.1,
                        "quartile": "Q2",
                        "publisher": "Oxford",
                        "focus": "Clinical neuropsychology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "name": "Clinical Neuropsychologist",
                        "issn": "1385-4046",
                        "if": 2.3,
                        "quartile": "Q2",
                        "publisher": "Taylor & Francis",
                        "focus": "Clinical neuropsychology",
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "cognitive-neuro",
                    "name": "Cognitive Neuroscience",
                    "journals": [
                      {
                        "name": "Journal of Cognitive Neuroscience",
                        "issn": "0898-929X",
                        "if": 3.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "MIT Press",
                        "focus": "Cognitive neuroscience",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "NeuroImage",
                        "issn": "1053-8119",
                        "if": 5.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": true,
                        "publisher": "Elsevier",
                        "focus": "Brain imaging methods",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile",
                          "doaj"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "educational-psych",
                "name": "Educational Psychology",
                "children": [
                  {
                    "id": "learning-instruction",
                    "name": "Learning & Instruction",
                    "journals": [
                      {
                        "name": "Journal of Educational Psychology",
                        "issn": "0022-0663",
                        "if": 5.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Educational psychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Learning and Instruction",
                        "issn": "0959-4752",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Instructional psychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "school-psych",
                    "name": "School Psychology",
                    "journals": [
                      {
                        "name": "School Psychology Review",
                        "issn": "0279-6015",
                        "if": 2.5,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "NASP / Taylor & Francis",
                        "focus": "School psychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "School Psychology",
                        "issn": "2578-4218",
                        "if": 2.9,
                        "quartile": "Q2",
                        "publisher": "APA",
                        "focus": "School psychology practice"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Psychology in the Schools",
                        "issn": "0033-3085",
                        "if": 1.8,
                        "quartile": "Q3",
                        "publisher": "Wiley",
                        "focus": "School psychology"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "io-psych",
                "name": "Industrial-Organizational Psychology",
                "children": [
                  {
                    "id": "work-org",
                    "name": "Work & Organizations",
                    "journals": [
                      {
                        "name": "Journal of Applied Psychology",
                        "issn": "0021-9010",
                        "if": 7.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "I-O psychology",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Personnel Psychology",
                        "issn": "0031-5826",
                        "if": 5.5,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Personnel & selection",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "occupational-health-psych",
                    "name": "Occupational Health Psychology",
                    "journals": [
                      {
                        "name": "Journal of Occupational Health Psychology",
                        "issn": "1076-8998",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Work stress & health",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Work & Stress",
                        "issn": "0267-8373",
                        "if": 4.9,
                        "quartile": "Q1",
                        "publisher": "Taylor & Francis",
                        "focus": "Occupational stress"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Occupational Medicine",
                        "issn": "0962-7480",
                        "if": 1.9,
                        "quartile": "Q3",
                        "publisher": "Oxford",
                        "focus": "Occupational health"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "health-psych",
                "name": "Health Psychology",
                "children": [
                  {
                    "id": "behavioral-medicine",
                    "name": "Behavioral Medicine",
                    "journals": [
                      {
                        "name": "Health Psychology",
                        "issn": "0278-6133",
                        "if": 3.7,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Health behavior",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Annals of Behavioral Medicine",
                        "issn": "0883-6612",
                        "if": 3.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Oxford / SBM",
                        "focus": "Behavioral medicine",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "affective-science",
                "name": "Affective Science",
                "children": [
                  {
                    "id": "emotion",
                    "name": "Emotion",
                    "journals": [
                      {
                        "name": "Emotion",
                        "issn": "1528-3542",
                        "if": 3.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "APA",
                        "focus": "Emotion science",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Cognition and Emotion",
                        "issn": "0269-9931",
                        "if": 2,
                        "quartile": "Q2",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Taylor & Francis",
                        "focus": "Emotion & cognition",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Emotion Science Rapid OA",
                        "issn": "0000-0016",
                        "if": 0.2,
                        "quartile": "Q4",
                        "predatory": true,
                        "openAccess": true,
                        "publisher": "AffectPublish",
                        "focus": "Fake metrics; spam invites",
                        "metricSourceIds": [
                          "predatory"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "personality",
                "name": "Personality Psychology",
                "journals": [
                  {
                    "name": "Journal of Personality",
                    "issn": "0022-3506",
                    "if": 3.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Journal of Personality",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "European Journal of Personality",
                    "issn": "0890-2070",
                    "if": 4.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "European Journal of Personality",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Personality and Individual Differences",
                    "issn": "0191-8869",
                    "if": 3,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Personality and Individual Differences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "psychometrics",
                "name": "Psychometrics & Quantitative Methods",
                "journals": [
                  {
                    "name": "Psychometrika",
                    "issn": "0033-3123",
                    "if": 2.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer / Psychometric Society",
                    "focus": "Psychometrika",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Psychological Methods",
                    "issn": "1082-989X",
                    "if": 7.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "APA",
                    "focus": "Psychological Methods",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Multivariate Behavioral Research",
                    "issn": "0027-3171",
                    "if": 3.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Multivariate Behavioral Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Behavior Research Methods",
                    "issn": "1554-351X",
                    "if": 4.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Behavior Research Methods",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "cultural-psych",
                "name": "Cultural Psychology",
                "journals": [
                  {
                    "name": "Journal of Cross-Cultural Psychology",
                    "issn": "0022-0221",
                    "if": 2.4,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Journal of Cross-Cultural Psychology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Culture & Psychology",
                    "issn": "1354-067X",
                    "if": 1.5,
                    "quartile": "Q3",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Culture & Psychology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "economics",
            "name": "Economics",
            "children": [
              {
                "id": "microecon",
                "name": "Microeconomics",
                "journals": [
                  {
                    "name": "American Economic Review",
                    "issn": "0002-8282",
                    "if": 10.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "AEA",
                    "focus": "General economics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Econometrica",
                    "issn": "0012-9682",
                    "if": 6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Econometric Society",
                    "focus": "Econometrics & theory",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of Economic Behavior & Organization",
                    "issn": "0167-2681",
                    "if": 2.2,
                    "quartile": "Q2",
                    "publisher": "Elsevier",
                    "focus": "Behavioral & organizational econ",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Games and Economic Behavior",
                    "issn": "0899-8256",
                    "if": 1,
                    "quartile": "Q3",
                    "publisher": "Elsevier",
                    "focus": "Game theory",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "development-econ",
                "name": "Development Economics",
                "journals": [
                  {
                    "name": "Journal of Development Economics",
                    "issn": "0304-3878",
                    "if": 4.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Development economics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "World Development",
                    "issn": "0305-750X",
                    "if": 5.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Multidisciplinary development",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Economic Development and Cultural Change",
                    "issn": "0013-0079",
                    "if": 2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "University of Chicago Press",
                    "focus": "Economic Development and Cultural Change",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "World Bank Economic Review",
                    "issn": "0258-6770",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "World Bank Economic Review",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "American Economic Association Annual Meeting",
                "acronym": "AEA",
                "organizer": "American Economic Association",
                "focus": "Economics",
                "cadence": "annual",
                "format": "conference"
              }
            ]
          },
          {
            "id": "sociology",
            "name": "Sociology",
            "journals": [
              {
                "name": "American Sociological Review",
                "issn": "0003-1224",
                "if": 9.1,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE / ASA",
                "focus": "Sociology",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Annual Review of Sociology",
                "issn": "0360-0572",
                "if": 10.2,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Annual Reviews",
                "focus": "Sociology reviews",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Social Science Mega Open",
                "issn": "0000-0012",
                "if": 0.2,
                "quartile": "Q4",
                "predatory": true,
                "openAccess": true,
                "publisher": "SocioWorld Press",
                "focus": "Vanity publishing",
                "metricSourceIds": [
                  "predatory",
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Social Forces",
                "issn": "0037-7732",
                "if": 2.9,
                "quartile": "Q1",
                "publisher": "Oxford",
                "focus": "Sociology",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Sociological Forum",
                "issn": "0884-8971",
                "if": 1.6,
                "quartile": "Q3",
                "publisher": "Wiley",
                "focus": "Sociology",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Qualitative Sociology",
                "issn": "0162-0436",
                "if": 1.5,
                "quartile": "Q3",
                "publisher": "Springer",
                "focus": "Qualitative sociology",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ]
          },
          {
            "id": "education",
            "name": "Education Research",
            "children": [
              {
                "id": "higher-ed",
                "name": "Higher Education",
                "journals": [
                  {
                    "name": "Studies in Higher Education",
                    "issn": "0307-5079",
                    "if": 3.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Higher education",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Higher Education",
                    "issn": "0018-1560",
                    "if": 3.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Tertiary education",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Higher Education Research & Development",
                    "issn": "0729-4360",
                    "if": 2.5,
                    "quartile": "Q2",
                    "publisher": "Taylor & Francis",
                    "focus": "Higher education",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Teaching in Higher Education",
                    "issn": "1356-2517",
                    "if": 2,
                    "quartile": "Q2",
                    "publisher": "Taylor & Francis",
                    "focus": "Teaching in HE",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "learning-sciences",
                "name": "Learning Sciences",
                "journals": [
                  {
                    "name": "Journal of the Learning Sciences",
                    "issn": "1050-8406",
                    "if": 4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Learning sciences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Educational Researcher",
                    "issn": "0013-189X",
                    "if": 5.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE / AERA",
                    "focus": "Education research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Instructional Science",
                    "issn": "0020-4277",
                    "if": 2.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Instructional Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Computers & Education",
                    "issn": "0360-1315",
                    "if": 8.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Computers & Education",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "American Educational Research Association Annual Meeting",
                "acronym": "AERA",
                "organizer": "American Educational Research Association",
                "focus": "Education research",
                "cadence": "annual",
                "format": "conference"
              }
            ]
          },
          {
            "id": "political-science",
            "name": "Political Science",
            "children": [
              {
                "id": "comparative-politics",
                "name": "Comparative Politics",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "American Political Science Review",
                    "issn": "0003-0554",
                    "if": 5.8,
                    "quartile": "Q1",
                    "publisher": "Cambridge / APSA",
                    "focus": "Political science"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Comparative Political Studies",
                    "issn": "0010-4140",
                    "if": 3.4,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "Comparative politics"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "World Politics",
                    "issn": "0043-8871",
                    "if": 3.7,
                    "quartile": "Q1",
                    "publisher": "Cambridge / Princeton",
                    "focus": "International & comparative politics"
                  },
                  {
                    "name": "British Journal of Political Science",
                    "issn": "0007-1234",
                    "if": 4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "British Journal of Political Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Political Analysis",
                    "issn": "1047-1987",
                    "if": 4.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "Political Analysis",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "ir",
                "name": "International Relations",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "International Organization",
                    "issn": "0020-8183",
                    "if": 5.7,
                    "quartile": "Q1",
                    "publisher": "Cambridge",
                    "focus": "International relations"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "International Studies Quarterly",
                    "issn": "0020-8833",
                    "if": 2.5,
                    "quartile": "Q1",
                    "publisher": "Oxford / ISA",
                    "focus": "IR research"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "European Journal of International Relations",
                    "issn": "1354-0661",
                    "if": 3,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "IR theory & empirics"
                  },
                  {
                    "openAccess": true,
                    "predatory": true,
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Global IR Open Digest",
                    "issn": "0000-0022",
                    "if": 0.2,
                    "quartile": "Q4",
                    "publisher": "PoliFast Journals",
                    "focus": "Predatory IR OA"
                  },
                  {
                    "name": "International Security",
                    "issn": "0162-2889",
                    "if": 4.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "MIT Press",
                    "focus": "International Security",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Security Studies",
                    "issn": "0963-6412",
                    "if": 2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Security Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "public-policy",
                "name": "Public Policy",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Policy Analysis and Management",
                    "issn": "0276-8739",
                    "if": 2.8,
                    "quartile": "Q1",
                    "publisher": "Wiley / APPAM",
                    "focus": "Policy analysis"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Policy Studies Journal",
                    "issn": "0190-292X",
                    "if": 2.7,
                    "quartile": "Q1",
                    "publisher": "Wiley",
                    "focus": "Policy studies"
                  },
                  {
                    "name": "Policy Sciences",
                    "issn": "0032-2687",
                    "if": 3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Policy Sciences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of European Public Policy",
                    "issn": "1350-1763",
                    "if": 4.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Journal of European Public Policy",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "American Political Science Association Annual Meeting",
                "acronym": "APSA",
                "organizer": "American Political Science Association",
                "focus": "Political science",
                "cadence": "annual",
                "format": "conference"
              }
            ]
          },
          {
            "id": "business",
            "name": "Business & Management",
            "children": [
              {
                "id": "management",
                "name": "Management",
                "children": [
                  {
                    "id": "strategy",
                    "name": "Strategy",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Strategic Management Journal",
                        "issn": "0143-2095",
                        "if": 6.5,
                        "quartile": "Q1",
                        "publisher": "Wiley / SMS",
                        "focus": "Strategic management"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Academy of Management Journal",
                        "issn": "0001-4273",
                        "if": 9.5,
                        "quartile": "Q1",
                        "publisher": "AOM",
                        "focus": "Management research"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Organization Science",
                        "issn": "1047-7039",
                        "if": 4.1,
                        "quartile": "Q1",
                        "publisher": "INFORMS",
                        "focus": "Organization theory"
                      },
                      {
                        "name": "Strategic Entrepreneurship Journal",
                        "issn": "1932-4391",
                        "if": 5.6,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley / SMS",
                        "focus": "Strategic Entrepreneurship Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Long Range Planning",
                        "issn": "0024-6301",
                        "if": 6.3,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Long Range Planning",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ob-hr",
                    "name": "Organizational Behavior & HR",
                    "journals": [
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Journal of Management",
                        "issn": "0149-2063",
                        "if": 9.3,
                        "quartile": "Q1",
                        "publisher": "SAGE",
                        "focus": "Management"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Human Resource Management",
                        "issn": "0090-4848",
                        "if": 5.2,
                        "quartile": "Q1",
                        "publisher": "Wiley",
                        "focus": "HRM"
                      },
                      {
                        "openAccess": false,
                        "predatory": false,
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ],
                        "name": "Leadership Quarterly",
                        "issn": "1048-9843",
                        "if": 7.5,
                        "quartile": "Q1",
                        "publisher": "Elsevier",
                        "focus": "Leadership"
                      },
                      {
                        "name": "Organizational Behavior and Human Decision Processes",
                        "issn": "0749-5978",
                        "if": 3.4,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Elsevier",
                        "focus": "Organizational Behavior and Human Decision Processes",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      },
                      {
                        "name": "Human Resource Management Journal",
                        "issn": "0954-5395",
                        "if": 5.1,
                        "quartile": "Q1",
                        "predatory": false,
                        "openAccess": false,
                        "publisher": "Wiley",
                        "focus": "Human Resource Management Journal",
                        "metricSourceIds": [
                          "jcr",
                          "jcr-quartile"
                        ]
                      }
                    ]
                  }
                ],
                "conferences": [
                  {
                    "illustrative": true,
                    "metricSourceIds": [
                      "venue-identity",
                      "think-check-attend"
                    ],
                    "name": "Academy of Management Annual Meeting",
                    "acronym": "AOM",
                    "organizer": "Academy of Management",
                    "focus": "Management and organization studies",
                    "cadence": "annual",
                    "format": "conference"
                  }
                ]
              },
              {
                "id": "marketing",
                "name": "Marketing",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Marketing",
                    "issn": "0022-2429",
                    "if": 11.5,
                    "quartile": "Q1",
                    "publisher": "SAGE / AMA",
                    "focus": "Marketing"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Consumer Research",
                    "issn": "0093-5301",
                    "if": 5.7,
                    "quartile": "Q1",
                    "publisher": "Oxford",
                    "focus": "Consumer research"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Marketing Research",
                    "issn": "0022-2437",
                    "if": 5.1,
                    "quartile": "Q1",
                    "publisher": "SAGE / AMA",
                    "focus": "Marketing research methods"
                  },
                  {
                    "openAccess": true,
                    "predatory": true,
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Marketing Science Rapid",
                    "issn": "0000-0023",
                    "if": 0.3,
                    "quartile": "Q4",
                    "publisher": "MarketOpen Hub",
                    "focus": "Predatory marketing OA"
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of Business Research",
                    "issn": "0148-2963",
                    "if": 9.8,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Business research",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Industrial Marketing Management",
                    "issn": "0019-8501",
                    "if": 7.8,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "B2B marketing",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of Retailing and Consumer Services",
                    "issn": "0969-6989",
                    "if": 8,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Retailing",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "finance",
                "name": "Finance",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Finance",
                    "issn": "0022-1082",
                    "if": 7.2,
                    "quartile": "Q1",
                    "publisher": "Wiley / AFA",
                    "focus": "Finance"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Financial Economics",
                    "issn": "0304-405X",
                    "if": 8,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Financial economics"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Review of Financial Studies",
                    "issn": "0893-9454",
                    "if": 5.8,
                    "quartile": "Q1",
                    "publisher": "Oxford",
                    "focus": "Financial studies"
                  },
                  {
                    "name": "Journal of Financial and Quantitative Analysis",
                    "issn": "0022-1090",
                    "if": 3.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "Journal of Financial and Quantitative Analysis",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Review of Finance",
                    "issn": "1572-3097",
                    "if": 4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Review of Finance",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "accounting",
                "name": "Accounting",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Accounting and Economics",
                    "issn": "0165-4101",
                    "if": 4.8,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Accounting research"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "The Accounting Review",
                    "issn": "0001-4826",
                    "if": 4.2,
                    "quartile": "Q1",
                    "publisher": "AAA",
                    "focus": "Accounting"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Accounting, Organizations and Society",
                    "issn": "0361-3682",
                    "if": 3.6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Accounting & organizations"
                  },
                  {
                    "name": "Contemporary Accounting Research",
                    "issn": "0823-9150",
                    "if": 3.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Contemporary Accounting Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Review of Accounting Studies",
                    "issn": "1380-665X",
                    "if": 3.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Review of Accounting Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "anthropology",
            "name": "Anthropology",
            "children": [
              {
                "id": "cultural-anthro",
                "name": "Cultural Anthropology",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "American Anthropologist",
                    "issn": "0002-7294",
                    "if": 2,
                    "quartile": "Q1",
                    "publisher": "Wiley / AAA",
                    "focus": "Anthropology"
                  },
                  {
                    "openAccess": true,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ],
                    "name": "Cultural Anthropology",
                    "issn": "0886-7356",
                    "if": 2.5,
                    "quartile": "Q1",
                    "publisher": "SCA",
                    "focus": "Cultural anthropology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of the Royal Anthropological Institute",
                    "issn": "1359-0987",
                    "if": 1.6,
                    "quartile": "Q2",
                    "publisher": "Wiley / RAI",
                    "focus": "Social anthropology"
                  },
                  {
                    "name": "Current Anthropology",
                    "issn": "0011-3204",
                    "if": 2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "University of Chicago Press",
                    "focus": "Current Anthropology",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Ethnos",
                    "issn": "0014-1844",
                    "if": 1.2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Ethnos",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "archaeology",
                "name": "Archaeology",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Archaeological Science",
                    "issn": "0305-4403",
                    "if": 2.6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Archaeological science"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Antiquity",
                    "issn": "0003-598X",
                    "if": 1.7,
                    "quartile": "Q1",
                    "publisher": "Cambridge",
                    "focus": "Archaeology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "American Antiquity",
                    "issn": "0002-7316",
                    "if": 2.2,
                    "quartile": "Q1",
                    "publisher": "Cambridge / SAA",
                    "focus": "American archaeology"
                  },
                  {
                    "name": "Journal of Archaeological Method and Theory",
                    "issn": "1072-5369",
                    "if": 2.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Journal of Archaeological Method and Theory",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Archaeological and Anthropological Sciences",
                    "issn": "1866-9557",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Springer",
                    "focus": "Archaeological and Anthropological Sciences",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "communication",
            "name": "Communication & Media",
            "children": [
              {
                "id": "comm-research",
                "name": "Communication Research",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Communication",
                    "issn": "0021-9916",
                    "if": 5,
                    "quartile": "Q1",
                    "publisher": "Oxford / ICA",
                    "focus": "Communication"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Communication Research",
                    "issn": "0093-6502",
                    "if": 4.6,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "Communication research"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "New Media & Society",
                    "issn": "1461-4448",
                    "if": 4.5,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "Digital media & society"
                  },
                  {
                    "name": "Human Communication Research",
                    "issn": "0360-3989",
                    "if": 3.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Human Communication Research",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Communication Theory",
                    "issn": "1050-3293",
                    "if": 3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Communication Theory",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "journalism",
                "name": "Journalism Studies",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journalism",
                    "issn": "1464-8849",
                    "if": 2.9,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "Journalism studies"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Digital Journalism",
                    "issn": "2167-0811",
                    "if": 4.5,
                    "quartile": "Q1",
                    "publisher": "Taylor & Francis",
                    "focus": "Digital journalism"
                  },
                  {
                    "openAccess": true,
                    "predatory": true,
                    "metricSourceIds": [
                      "predatory",
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Media Studies Instant",
                    "issn": "0000-0024",
                    "if": 0.2,
                    "quartile": "Q4",
                    "publisher": "PressFast OA",
                    "focus": "Predatory media studies"
                  },
                  {
                    "name": "Journalism Studies",
                    "issn": "1461-670X",
                    "if": 2.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Journalism Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journalism Practice",
                    "issn": "1751-2786",
                    "if": 2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Journalism Practice",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "law",
            "name": "Law",
            "children": [
              {
                "id": "law-reviews",
                "name": "Law Reviews & Jurisprudence",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Harvard Law Review",
                    "issn": "0017-811X",
                    "if": 3.5,
                    "quartile": "Q1",
                    "publisher": "Harvard Law Review Assn.",
                    "focus": "US law"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Yale Law Journal",
                    "issn": "0044-0094",
                    "if": 3.5,
                    "quartile": "Q1",
                    "publisher": "Yale Law Journal Co.",
                    "focus": "US law"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Modern Law Review",
                    "issn": "0026-7961",
                    "if": 1.8,
                    "quartile": "Q1",
                    "publisher": "Wiley",
                    "focus": "UK / comparative law"
                  },
                  {
                    "name": "Stanford Law Review",
                    "issn": "0038-9765",
                    "if": 3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Stanford Law Review",
                    "focus": "Stanford Law Review",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Columbia Law Review",
                    "issn": "0010-1958",
                    "if": 2.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Columbia Law Review Assn.",
                    "focus": "Columbia Law Review",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "international-law",
                "name": "International Law",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "American Journal of International Law",
                    "issn": "0002-9300",
                    "if": 2.4,
                    "quartile": "Q1",
                    "publisher": "Cambridge / ASIL",
                    "focus": "International law"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "European Journal of International Law",
                    "issn": "0938-5428",
                    "if": 1.9,
                    "quartile": "Q1",
                    "publisher": "Oxford",
                    "focus": "International law"
                  }
                ]
              },
              {
                "id": "criminology",
                "name": "Criminology",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Criminology",
                    "issn": "0011-1384",
                    "if": 4.8,
                    "quartile": "Q1",
                    "publisher": "Wiley / ASC",
                    "focus": "Criminology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "British Journal of Criminology",
                    "issn": "0007-0955",
                    "if": 2.7,
                    "quartile": "Q1",
                    "publisher": "Oxford",
                    "focus": "Criminology"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Journal of Quantitative Criminology",
                    "issn": "0748-4518",
                    "if": 3.1,
                    "quartile": "Q1",
                    "publisher": "Springer",
                    "focus": "Quantitative criminology"
                  },
                  {
                    "name": "Justice Quarterly",
                    "issn": "0741-8825",
                    "if": 2.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Justice Quarterly",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Crime & Delinquency",
                    "issn": "0011-1287",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Crime & Delinquency",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "Association of American Law Schools Annual Meeting",
                "acronym": "AALS",
                "organizer": "Association of American Law Schools",
                "focus": "Legal education and scholarship",
                "cadence": "annual",
                "format": "conference"
              }
            ]
          },
          {
            "id": "geography",
            "name": "Geography",
            "children": [
              {
                "id": "human-geography",
                "name": "Human Geography",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Progress in Human Geography",
                    "issn": "0309-1325",
                    "if": 6.5,
                    "quartile": "Q1",
                    "publisher": "SAGE",
                    "focus": "Human geography"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Annals of the American Association of Geographers",
                    "issn": "2469-4452",
                    "if": 3.1,
                    "quartile": "Q1",
                    "publisher": "Taylor & Francis",
                    "focus": "Geography"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Transactions of the Institute of British Geographers",
                    "issn": "0020-2754",
                    "if": 3.3,
                    "quartile": "Q1",
                    "publisher": "Wiley / RGS",
                    "focus": "Geography"
                  },
                  {
                    "name": "Geoforum",
                    "issn": "0016-7185",
                    "if": 3.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "Geoforum",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Environment and Planning A",
                    "issn": "0308-518X",
                    "if": 3.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "SAGE",
                    "focus": "Environment and Planning A",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "gis",
                "name": "GIS & Spatial Analysis",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "International Journal of Geographical Information Science",
                    "issn": "1365-8816",
                    "if": 4.3,
                    "quartile": "Q1",
                    "publisher": "Taylor & Francis",
                    "focus": "GIScience"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Computers, Environment and Urban Systems",
                    "issn": "0198-9715",
                    "if": 6,
                    "quartile": "Q1",
                    "publisher": "Elsevier",
                    "focus": "Urban analytics & GIS"
                  },
                  {
                    "name": "Cartography and Geographic Information Science",
                    "issn": "1523-0406",
                    "if": 2,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Taylor & Francis",
                    "focus": "Cartography and Geographic Information Science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Transactions in GIS",
                    "issn": "1361-1682",
                    "if": 2.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Transactions in GIS",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "social-work",
            "name": "Social Work",
            "journals": [
              {
                "name": "British Journal of Social Work",
                "issn": "0045-3102",
                "if": 1.5,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford",
                "focus": "British Journal of Social Work",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Social Work",
                "issn": "0037-8046",
                "if": 2.3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford / NASW",
                "focus": "Social Work",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Child Abuse & Neglect",
                "issn": "0145-2134",
                "if": 3.4,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Child Abuse & Neglect",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Children and Youth Services Review",
                "issn": "0190-7409",
                "if": 2.4,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Children and Youth Services Review",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Social Work",
                "issn": "1468-0173",
                "if": 1.6,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Journal of Social Work",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "public-admin",
            "name": "Public Administration",
            "journals": [
              {
                "name": "Public Administration Review",
                "issn": "0033-3352",
                "if": 5.2,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Wiley / ASPA",
                "focus": "Public Administration Review",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Public Administration Research and Theory",
                "issn": "1053-1858",
                "if": 4.2,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford",
                "focus": "Journal of Public Administration Research and Theory",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Public Management Review",
                "issn": "1471-9037",
                "if": 4.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Taylor & Francis",
                "focus": "Public Management Review",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Governance",
                "issn": "0952-1895",
                "if": 2.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Wiley",
                "focus": "Governance",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "demography",
            "name": "Demography",
            "journals": [
              {
                "name": "Demography",
                "issn": "0070-3370",
                "if": 3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Springer / PAA",
                "focus": "Demography",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Population and Development Review",
                "issn": "0098-7921",
                "if": 3.3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Wiley",
                "focus": "Population and Development Review",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Population Studies",
                "issn": "0032-4728",
                "if": 2.1,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Taylor & Francis",
                "focus": "Population Studies",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Demographic Research",
                "issn": "1435-9871",
                "if": 1.8,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": true,
                "publisher": "Max Planck Institute",
                "focus": "Demographic Research",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile",
                  "doaj"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "library-info",
            "name": "Library & Information Science",
            "journals": [
              {
                "name": "Journal of the Association for Information Science and Technology",
                "issn": "2330-1635",
                "if": 2.4,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Wiley / ASIS&T",
                "focus": "Journal of the Association for Information Science and Technology",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Library & Information Science Research",
                "issn": "0740-8188",
                "if": 2.3,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Library & Information Science Research",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Documentation",
                "issn": "0022-0418",
                "if": 1.9,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Emerald",
                "focus": "Journal of Documentation",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Academic Librarianship",
                "issn": "0099-1333",
                "if": 2.5,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Journal of Academic Librarianship",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Scientometrics",
                "issn": "0138-9130",
                "if": 3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Springer",
                "focus": "Scientometrics",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "gender-studies",
            "name": "Gender & Feminist Studies",
            "journals": [
              {
                "name": "Signs",
                "issn": "0097-9740",
                "if": 1.6,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "University of Chicago Press",
                "focus": "Signs",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Feminist Theory",
                "issn": "1464-7001",
                "if": 1.8,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Feminist Theory",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Gender & Society",
                "issn": "0891-2432",
                "if": 3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Gender & Society",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Men and Masculinities",
                "issn": "1097-184X",
                "if": 2,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Men and Masculinities",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "tourism",
            "name": "Tourism & Hospitality",
            "journals": [
              {
                "name": "Tourism Management",
                "issn": "0261-5177",
                "if": 10.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Tourism Management",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Annals of Tourism Research",
                "issn": "0160-7383",
                "if": 9.1,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Annals of Tourism Research",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Travel Research",
                "issn": "0047-2875",
                "if": 7,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Journal of Travel Research",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "International Journal of Hospitality Management",
                "issn": "0278-4319",
                "if": 9.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "International Journal of Hospitality Management",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Tourism Mega Open World",
                "issn": "0000-0035",
                "if": 0.3,
                "quartile": "Q4",
                "predatory": true,
                "openAccess": true,
                "publisher": "TravelFast Journals",
                "focus": "Predatory tourism OA",
                "metricSourceIds": [
                  "predatory",
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "area-studies",
            "name": "Area & International Studies",
            "journals": [],
            "children": [
              {
                "id": "asian-studies",
                "name": "Asian Studies",
                "journals": [
                  {
                    "name": "Journal of Asian Studies",
                    "issn": "0021-9118",
                    "if": 1.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge / AAS",
                    "focus": "Journal of Asian Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Modern Asian Studies",
                    "issn": "0026-7498",
                    "if": 1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "Modern Asian Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "China Quarterly",
                    "issn": "0305-7410",
                    "if": 2.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "China Quarterly",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "african-studies",
                "name": "African Studies",
                "journals": [
                  {
                    "name": "African Affairs",
                    "issn": "0001-9909",
                    "if": 2.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "African Affairs",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Modern African Studies",
                    "issn": "0022-278X",
                    "if": 1.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "Journal of Modern African Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Africa",
                    "issn": "0001-9720",
                    "if": 1.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge / IAI",
                    "focus": "Africa",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              },
              {
                "id": "latin-american-studies",
                "name": "Latin American Studies",
                "journals": [
                  {
                    "name": "Latin American Research Review",
                    "issn": "0023-8791",
                    "if": 0.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": true,
                    "publisher": "Cambridge / LASA",
                    "focus": "Latin American Research Review",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile",
                      "doaj"
                    ]
                  },
                  {
                    "name": "Journal of Latin American Studies",
                    "issn": "0022-216X",
                    "if": 1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Cambridge",
                    "focus": "Journal of Latin American Studies",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "id": "sociolinguistics",
            "name": "Sociolinguistics & Discourse",
            "journals": [
              {
                "name": "Journal of Sociolinguistics",
                "issn": "1360-6441",
                "if": 1.8,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Wiley",
                "focus": "Journal of Sociolinguistics",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Discourse & Society",
                "issn": "0957-9265",
                "if": 1.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Discourse & Society",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Language in Society",
                "issn": "0047-4045",
                "if": 1.7,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Cambridge",
                "focus": "Language in Society",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          }
        ]
      },
      {
        "id": "arts-hum",
        "name": "Arts & Humanities",
        "description": "Culture, language, history",
        "children": [
          {
            "id": "history",
            "name": "History",
            "children": [
              {
                "id": "modern-history",
                "name": "Modern History",
                "journals": [
                  {
                    "name": "The American Historical Review",
                    "issn": "0002-8762",
                    "if": 2.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford / AHA",
                    "focus": "History",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Past & Present",
                    "issn": "0031-2746",
                    "if": 1.8,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford University Press",
                    "focus": "Social history",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Journal of Contemporary History",
                    "issn": "0022-0094",
                    "if": 0.7,
                    "quartile": "Q2",
                    "publisher": "SAGE",
                    "focus": "Contemporary history",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "name": "Historical Journal",
                    "issn": "0018-246X",
                    "if": 0.8,
                    "quartile": "Q1",
                    "publisher": "Cambridge",
                    "focus": "History",
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              },
              {
                "id": "history-science",
                "name": "History of Science",
                "journals": [
                  {
                    "name": "Isis",
                    "issn": "0021-1753",
                    "if": 1.1,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Chicago / HSS",
                    "focus": "History of science",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "British Journal for the History of Science",
                    "issn": "0007-0874",
                    "if": 0.9,
                    "quartile": "Q2",
                    "publisher": "Cambridge",
                    "focus": "History of science"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "History of Science",
                    "issn": "0073-2753",
                    "if": 0.8,
                    "quartile": "Q2",
                    "publisher": "SAGE",
                    "focus": "History of science"
                  }
                ]
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "American Historical Association Annual Meeting",
                "acronym": "AHA",
                "organizer": "American Historical Association",
                "focus": "Historical research",
                "cadence": "annual",
                "format": "conference"
              }
            ]
          },
          {
            "id": "linguistics",
            "name": "Linguistics",
            "journals": [
              {
                "name": "Language",
                "issn": "0097-8507",
                "if": 2.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "LSA",
                "focus": "Linguistics",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Linguistics",
                "issn": "0022-2267",
                "if": 1.4,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Cambridge University Press",
                "focus": "Theoretical linguistics",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "World Language Studies Online",
                "issn": "0000-0013",
                "if": 0.1,
                "quartile": "Q4",
                "predatory": true,
                "openAccess": true,
                "publisher": "LinguaFast",
                "focus": "Predatory linguistics outlet",
                "metricSourceIds": [
                  "predatory",
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Lingua",
                "issn": "0024-3841",
                "if": 1.1,
                "quartile": "Q2",
                "publisher": "Elsevier",
                "focus": "General linguistics",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Journal of Phonetics",
                "issn": "0095-4470",
                "if": 1.9,
                "quartile": "Q1",
                "publisher": "Elsevier",
                "focus": "Phonetics",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Language Sciences",
                "issn": "0388-0001",
                "if": 1.2,
                "quartile": "Q2",
                "publisher": "Elsevier",
                "focus": "Language sciences",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": [
              {
                "id": "applied-linguistics",
                "name": "Applied Linguistics",
                "journals": [
                  {
                    "name": "Applied Linguistics",
                    "issn": "0142-6001",
                    "if": 3.6,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Oxford",
                    "focus": "Applied Linguistics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "TESOL Quarterly",
                    "issn": "0039-8322",
                    "if": 2.7,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley / TESOL",
                    "focus": "TESOL Quarterly",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Language Learning",
                    "issn": "0023-8333",
                    "if": 3.4,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Language Learning",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Modern Language Journal",
                    "issn": "0026-7902",
                    "if": 3.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Modern Language Journal",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "System",
                    "issn": "0346-251X",
                    "if": 4.9,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Elsevier",
                    "focus": "System",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "Annual Meeting of the Linguistic Society of America",
                "acronym": "LSA",
                "organizer": "Linguistic Society of America",
                "focus": "Linguistics",
                "cadence": "annual",
                "format": "conference"
              }
            ]
          },
          {
            "id": "philosophy",
            "name": "Philosophy",
            "journals": [
              {
                "name": "Philosophical Review",
                "issn": "0031-8108",
                "if": 3.4,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Duke University Press",
                "focus": "Philosophy",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Mind",
                "issn": "0026-4423",
                "if": 2.3,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford University Press",
                "focus": "Philosophy & logic",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Synthese",
                "issn": "0039-7857",
                "if": 1.5,
                "quartile": "Q1",
                "publisher": "Springer",
                "focus": "Philosophy of science & epistemology",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Philosophical Studies",
                "issn": "0031-8116",
                "if": 1.2,
                "quartile": "Q1",
                "publisher": "Springer",
                "focus": "Analytic philosophy",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "openAccess": false,
                "name": "Erkenntnis",
                "issn": "0165-0106",
                "if": 0.9,
                "quartile": "Q2",
                "publisher": "Springer",
                "focus": "Epistemology & philosophy of science",
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": [
              {
                "id": "ethics",
                "name": "Ethics",
                "journals": [
                  {
                    "name": "Ethics",
                    "issn": "0014-1704",
                    "if": 2.1,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "University of Chicago Press",
                    "focus": "Ethics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Journal of Medical Ethics",
                    "issn": "0306-6800",
                    "if": 3.3,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "BMJ",
                    "focus": "Journal of Medical Ethics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Bioethics",
                    "issn": "0269-9702",
                    "if": 1.9,
                    "quartile": "Q2",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Wiley",
                    "focus": "Bioethics",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ],
                "children": []
              }
            ],
            "conferences": [
              {
                "illustrative": true,
                "metricSourceIds": [
                  "venue-identity",
                  "think-check-attend"
                ],
                "name": "Philosophy of Science Association Biennial Meeting",
                "acronym": "PSA",
                "organizer": "Philosophy of Science Association",
                "focus": "Philosophy of science",
                "cadence": "biennial",
                "format": "conference"
              }
            ]
          },
          {
            "id": "literature",
            "name": "Literary Studies",
            "children": [
              {
                "id": "english-lit",
                "name": "English & Comparative Literature",
                "journals": [
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "PMLA",
                    "issn": "0030-8129",
                    "if": 0.9,
                    "quartile": "Q1",
                    "publisher": "MLA",
                    "focus": "Literary studies"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "Modern Language Quarterly",
                    "issn": "0026-7929",
                    "if": 0.4,
                    "quartile": "Q2",
                    "publisher": "Duke",
                    "focus": "Literary history & criticism"
                  },
                  {
                    "openAccess": false,
                    "predatory": false,
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ],
                    "name": "New Literary History",
                    "issn": "0028-6087",
                    "if": 1,
                    "quartile": "Q1",
                    "publisher": "Johns Hopkins",
                    "focus": "Literary theory"
                  },
                  {
                    "name": "ELH",
                    "issn": "0013-8304",
                    "if": 0.5,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "Johns Hopkins",
                    "focus": "ELH",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  },
                  {
                    "name": "Critical Inquiry",
                    "issn": "0093-1896",
                    "if": 1.2,
                    "quartile": "Q1",
                    "predatory": false,
                    "openAccess": false,
                    "publisher": "University of Chicago Press",
                    "focus": "Critical Inquiry",
                    "metricSourceIds": [
                      "jcr",
                      "jcr-quartile"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "art-history",
            "name": "Art History",
            "journals": [
              {
                "openAccess": false,
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ],
                "name": "The Art Bulletin",
                "issn": "0004-3079",
                "if": 0.6,
                "quartile": "Q1",
                "publisher": "CAA / Taylor & Francis",
                "focus": "Art history"
              },
              {
                "openAccess": false,
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ],
                "name": "Art History",
                "issn": "0141-6790",
                "if": 0.5,
                "quartile": "Q1",
                "publisher": "Wiley / AAH",
                "focus": "Art history"
              },
              {
                "openAccess": false,
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ],
                "name": "Oxford Art Journal",
                "issn": "0142-6540",
                "if": 0.4,
                "quartile": "Q2",
                "publisher": "Oxford",
                "focus": "Art history & criticism"
              }
            ]
          },
          {
            "id": "musicology",
            "name": "Musicology",
            "journals": [
              {
                "openAccess": false,
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ],
                "name": "Journal of the American Musicological Society",
                "issn": "0003-0139",
                "if": 0.7,
                "quartile": "Q1",
                "publisher": "AMS / University of California Press",
                "focus": "Musicology"
              },
              {
                "openAccess": false,
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ],
                "name": "Music Analysis",
                "issn": "0262-5245",
                "if": 0.5,
                "quartile": "Q2",
                "publisher": "Wiley",
                "focus": "Music analysis"
              },
              {
                "openAccess": false,
                "predatory": false,
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ],
                "name": "Ethnomusicology",
                "issn": "0014-1836",
                "if": 0.8,
                "quartile": "Q1",
                "publisher": "University of Illinois Press / SEM",
                "focus": "Ethnomusicology"
              }
            ]
          },
          {
            "id": "theology",
            "name": "Religious Studies & Theology",
            "journals": [
              {
                "name": "Journal of the American Academy of Religion",
                "issn": "0002-7189",
                "if": 0.7,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford / AAR",
                "focus": "Journal of the American Academy of Religion",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Religion",
                "issn": "0048-721X",
                "if": 0.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Taylor & Francis",
                "focus": "Religion",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Biblical Literature",
                "issn": "0021-9231",
                "if": 0.5,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "SBL Press",
                "focus": "Journal of Biblical Literature",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Numen",
                "issn": "0029-5973",
                "if": 0.6,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Brill",
                "focus": "Numen",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "film-media",
            "name": "Film, Television & Media Arts",
            "journals": [
              {
                "name": "Screen",
                "issn": "0036-9544",
                "if": 0.7,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford",
                "focus": "Screen",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Cinema and Media Studies",
                "issn": "2578-4900",
                "if": 0.6,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "University of Texas Press / SCMS",
                "focus": "Journal of Cinema and Media Studies",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Film and Video",
                "issn": "0742-4671",
                "if": 0.3,
                "quartile": "Q3",
                "predatory": false,
                "openAccess": false,
                "publisher": "University of Illinois Press",
                "focus": "Journal of Film and Video",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Television & New Media",
                "issn": "1527-4764",
                "if": 2.2,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "SAGE",
                "focus": "Television & New Media",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "theatre",
            "name": "Theatre & Performance",
            "journals": [
              {
                "name": "Theatre Journal",
                "issn": "0192-2882",
                "if": 0.4,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Johns Hopkins",
                "focus": "Theatre Journal",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "TDR/The Drama Review",
                "issn": "1054-2043",
                "if": 0.3,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "MIT Press",
                "focus": "TDR/The Drama Review",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Performance Research",
                "issn": "1352-8165",
                "if": 0.4,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Taylor & Francis",
                "focus": "Performance Research",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "classics",
            "name": "Classics",
            "journals": [
              {
                "name": "Classical Quarterly",
                "issn": "0009-8388",
                "if": 0.5,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Cambridge",
                "focus": "Classical Quarterly",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Journal of Roman Studies",
                "issn": "0075-4358",
                "if": 0.9,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Cambridge / Roman Society",
                "focus": "Journal of Roman Studies",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "American Journal of Philology",
                "issn": "0002-9475",
                "if": 0.5,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Johns Hopkins",
                "focus": "American Journal of Philology",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "design",
            "name": "Design Studies",
            "journals": [
              {
                "name": "Design Studies",
                "issn": "0142-694X",
                "if": 3.2,
                "quartile": "Q1",
                "predatory": false,
                "openAccess": false,
                "publisher": "Elsevier",
                "focus": "Design Studies",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Design Issues",
                "issn": "0747-9360",
                "if": 1.1,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "MIT Press",
                "focus": "Design Issues",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "International Journal of Design",
                "issn": "1991-3761",
                "if": 1.5,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": true,
                "publisher": "Chinese Institute of Design",
                "focus": "International Journal of Design",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile",
                  "doaj"
                ]
              }
            ],
            "children": []
          },
          {
            "id": "digital-humanities",
            "name": "Digital Humanities",
            "journals": [
              {
                "name": "Digital Scholarship in the Humanities",
                "issn": "2055-7671",
                "if": 0.9,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford",
                "focus": "Digital Scholarship in the Humanities",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "LLC Digital Scholarship Legacy",
                "issn": "0268-114X",
                "if": 0.8,
                "quartile": "Q2",
                "predatory": false,
                "openAccess": false,
                "publisher": "Oxford",
                "focus": "LLC Digital Scholarship Legacy",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile"
                ]
              },
              {
                "name": "Digital Humanities Quarterly",
                "issn": "1938-4122",
                "if": 0.5,
                "quartile": "Q3",
                "predatory": false,
                "openAccess": true,
                "publisher": "ADHO",
                "focus": "Digital Humanities Quarterly",
                "metricSourceIds": [
                  "jcr",
                  "jcr-quartile",
                  "doaj"
                ]
              }
            ],
            "children": []
          }
        ]
      }
    ]
  }
};
