# JournalsMapping / ATLAS

Interactive static site for exploring academic journal status by domain:

- **Impact factor** comparison with distribution charts
- **Quartiles** (Q1–Q4) with filters and donut mix
- **Predatory** journal flags and risk filters
- **Deep domain drill-down** (expanded **Medicine** & **Psychology** trees)
- **Clear data provenance** (local `data.js` + linked primary databases)

## Local preview

```bash
cd public && python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

This repo deploys the `public/` folder with GitHub Actions
([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)).

1. Merge to `main` (or run the workflow via **Actions → Deploy GitHub Pages → Run workflow**).
2. In the repo: **Settings → Pages → Source = GitHub Actions**.
3. Site URL (typical): `https://<user>.github.io/JournalsMapping/`

Asset paths are relative, so the project-pages base path works without a bundler.

## Data sources (where values come from)

**Runtime fetch: none.** The browser only loads the local file [`public/data.js`](public/data.js).

| Field | Verify / origin |
|---|---|
| Impact Factor | [Clarivate JCR](https://jcr.clarivate.com/) |
| Quartiles | JCR category rank; cross-check [Scopus](https://www.scopus.com/) / [SCImago](https://www.scimagojr.com/) |
| Open access | [DOAJ](https://doaj.org/) |
| Predatory risk | [Think. Check. Submit.](https://thinkchecksubmit.org/) (+ librarian tools) |
| ISSN | [ISSN portal](https://portal.issn.org/) |

Details: [`public/docs/DATA_SOURCES.md`](public/docs/DATA_SOURCES.md) and the on-page **Data sources** section.

Demo IF/quartile numbers are **illustrative educational snapshots**, not a live Clarivate/Scopus API pull.
