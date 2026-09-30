# JournalsMapping / ATLAS

Interactive static site for exploring academic journal status by domain:

- **Impact factor** comparison with distribution charts
- **Quartiles** (Q1–Q4) with filters and donut mix
- **Predatory** journal flags and risk filters
- **Deep domain drill-down** across STEM, social sciences, and humanities

## Local preview

```bash
cd public && python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy

Configured for Render Static Site via `render.yaml` (`staticPublishPath: public`).

## Note

Journal metrics in `public/data.js` are **illustrative** for education and UI demos—not live JCR/Scopus values. Always verify with institutional sources before submission decisions.
