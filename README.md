# JournalsMapping / ATLAS

Interactive static site for exploring academic journal status by domain:

- **Impact factor** comparison with distribution charts
- **Quartiles** (Q1–Q4) with filters and donut mix
- **Predatory** journal flags and risk filters
- **Deep domain drill-down** across STM, social sciences, and humanities
- **Clear data provenance** (local `data.js` + linked primary databases)

## Local preview

```bash
npm run preview
# or: cd public && python3 -m http.server 8080
```

## Validate / expand data

```bash
npm run validate          # structural + provenance checks
npm run coverage          # merge coverage JSON expansions + validate
npm run expand            # full rebuild helpers + coverage + validate
```

Dataset scale (illustrative snapshot): **~850 journals** across **~300 domains**, with an on-page **All fields** catalog.

## GitHub Pages

Deploys `public/` via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) (includes dataset validation).

1. **Settings → Pages → Source = GitHub Actions** (or rely on workflow `enablement: true`)
2. Site URL (typical): `https://<user>.github.io/JournalsMapping/`

## Data sources

**Runtime fetch: none.** Browser loads [`public/data.js`](public/data.js) only.

| Field | Verify / origin |
|---|---|
| Impact Factor | [Clarivate JCR](https://jcr.clarivate.com/) |
| Quartiles | JCR category rank; [Scopus](https://www.scopus.com/) / [SCImago](https://www.scimagojr.com/) |
| Open access | [DOAJ](https://doaj.org/) |
| Predatory risk | [Think. Check. Submit.](https://thinkchecksubmit.org/) |
| ISSN | [ISSN portal](https://portal.issn.org/) |

Details: [`public/docs/DATA_SOURCES.md`](public/docs/DATA_SOURCES.md).

Snapshot metrics are **illustrative**—not a live Clarivate/Scopus API pull.
