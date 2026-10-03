# Data sources

ATLAS does **not** fetch journal or conference metrics from the network at runtime.

| What you see | Where it comes from |
|---|---|
| Local dataset | [`public/data.js`](../data.js) loaded by the browser |
| Impact Factor | Styled after [Clarivate JCR](https://jcr.clarivate.com/) (illustrative snapshot values) |
| Quartiles Q1–Q4 | JCR category-rank pattern (illustrative); cross-check via [Scopus](https://www.scopus.com/) / [SCImago](https://www.scimagojr.com/) |
| Open access legitimacy | Verify in [DOAJ](https://doaj.org/) |
| Predatory flags | Educational composites guided by [Think. Check. Submit.](https://thinkchecksubmit.org/) and librarian watchlists (not a live Cabells API) |
| ISSN | [ISSN portal](https://portal.issn.org/) / publisher mastheads; `0000-00xx` = fictional demo predators |
| Conference identity | Illustrative labels only: name, acronym, organizer, focus, cadence (`annual` or `biennial`), and format (`conference`, `symposium`, or `workshop`). Not acceptance rates or citation scores. Confirm the current call for papers with the organizer. |
| Computing venue record | [dblp](https://dblp.org/) is linked so you can confirm a computing series exists. Citation counts and h-indexes are **not** copied. |
| Conference ranks | [CORE Conference Portal](https://portal.core.edu.au/conf-ranks/) publishes its own ranks. This snapshot does **not** store CORE, JCR, or Scopus ranks or any numeric conference score. |
| Conference quality checks | [Think. Check. Attend.](https://thinkchecksubmit.org/think-check-attend/) (sister checklist to Think. Check. Submit.). This map does not flag predatory conferences. |
| Domain tree | OECD FOS–inspired hierarchy curated for deep navigation |

The same registry is embedded in `window.ATLAS_DATA.sources` and rendered in the **Data sources** section of the site.

Conference rows set `illustrative: true` and must not carry journal fields (`if`, `quartile`, `predatory`, and similar).

## Validation

```bash
npm run validate
```

Checks include: unique journal names/ISSNs, IF/quartile ranges, boolean flags, unique conference names/acronyms, conference cadence and format, `illustrative: true` on every conference, rejection of journal-style metrics on conferences, `metricSourceIds` against the sources registry, and domain id uniqueness. GitHub Pages deploys run this script before publish.
