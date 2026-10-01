# Data sources

ATLAS does **not** fetch journal metrics from the network at runtime.

| What you see | Where it comes from |
|---|---|
| Local dataset | [`public/data.js`](../public/data.js) loaded by the browser |
| Impact Factor | Styled after [Clarivate JCR](https://jcr.clarivate.com/) (illustrative snapshot values) |
| Quartiles Q1–Q4 | JCR category-rank pattern (illustrative); cross-check via [Scopus](https://www.scopus.com/) / [SCImago](https://www.scimagojr.com/) |
| Open access legitimacy | Verify in [DOAJ](https://doaj.org/) |
| Predatory flags | Educational composites guided by [Think. Check. Submit.](https://thinkchecksubmit.org/) and librarian watchlists (not a live Cabells API) |
| ISSN | [ISSN portal](https://portal.issn.org/) / publisher mastheads; `0000-00xx` = fictional demo predators |
| Domain tree | OECD FOS–inspired hierarchy curated for deep navigation |

The same registry is embedded in `window.ATLAS_DATA.sources` and rendered in the **Data sources** section of the site.
