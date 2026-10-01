/**
 * Nested academic domain taxonomy with sample journals.
 *
 * RUNTIME FETCH: none. The browser loads this local file only (`data.js`).
 * Values are a curated educational snapshot, not a live API response.
 *
 * Canonical source registry lives in `sources` below and is rendered in the UI.
 * Validate with: node scripts/validate-data.mjs
 * Regenerate/expand with: node scripts/expand-data.mjs
 */
window.ATLAS_DATA = {
  "updated": "2026-10",
  "fetch": {
    "runtime": false,
    "localFile": "data.js",
    "method": "No remote fetch at runtime. Journal rows are curated into this static file for GitHub Pages."
  },
  "disclaimer": "Educational snapshot curated in public/data.js (no runtime API fetch). Impact factors and quartiles are illustrative approximations inspired by JCR/Scopus patterns—verify live values in linked primary sources before submission decisions.",
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
                      }
                    ]
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
                    ]
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
                      }
                    ]
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
                      }
                    ]
                  }
                ]
              }
            ]
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
                  }
                ]
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
                  }
                ]
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
                  }
                ]
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
                      }
                    ]
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
                  }
                ]
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
                  }
                ]
              }
            ]
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
          }
        ]
      }
    ]
  }
};
