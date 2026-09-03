# Where the report goes

The report is one object in `window.DETAILED_PAPER_SUMMARIES` in `paper_summaries.js`,
keyed by a slug. `overview/paper.html?id=<key>` renders it. Nothing else needs
editing, except the title-to-URL map in `paper_ideas.js` for a new paper.

## Field map

| Report section | Field | Shape | Required |
|---|---|---|---|
| identity | `shortTitle`, `title`, `venue`, `badges` | strings, string[] | yes |
| teaser | `figure`, `figureCaption` | string paths | yes |
| TL;DR | `tldr` | one string, 3 to 5 sentences | yes |
| 1. Problem | `problem` | string[] | yes |
| 2. Core insight | `coreInsight` | string[], 1 to 3 items | yes |
| what you get | `output` | string[] | yes |
| 3. Pipeline | `pipeline` | `{name, text}[]` | yes |
| in-report figures | `figures` | `{src, title, shows, read, matters, supports}[]` | when useful |
| 4. Design decisions | `designDecisions` | `{decision, problem, motivation, mechanism, evidence}[]` | yes |
| deeper analysis | `methodDetails` | `{name, text}[]` | optional |
| 5. Equations | `equations` | `{name, formula, intuition, terms, matters, consequence}[]` | when the method needs them |
| 6. Evidence | `evidence` | string[] | yes |
| numbers table | `comparison` | `{headers, rows}` | when a table clarifies |
| 7. What actually matters | `whatMatters` | string[], 2 to 4 | yes |
| 8. Novelty | `novelty` | string[], bucketed | yes |
| 9. Limitations | `limitations` | string[], 3 to 5 | yes |
| 10. Takeaways | `takeaway` | string[], exactly 3 | yes |
| 11. Research notes | `researchNotes` | string[] | optional |
| links | `links` | `{label, url}[]` | yes |

`equations` accepts the older `{name, formula, meaning}` form, still used by earlier
entries. New entries use the four-part form. The renderer handles both.

`methodDetails` is for analysis that does not fit a decision row: reading the form of
an equation, questioning the paper's framing, an accidental property worth recording.
It is not a second pipeline.

## Prose conventions inside fields

- Inline HTML is allowed and used: `<strong>` for the lead of a bullet, `<em>` for a
  term being introduced. Nothing else.
- Label interpretation inside the text. The renderer has no separate slot for it.
  "Interpretation:", "the paper does not analyse this", "Not demonstrated by the
  paper."
- No em dashes. See CLAUDE.md rule 4 and `scripts/slop-check.mjs`.

## Figures

- Teaser: `overview_assets/<key>.png`, referenced from the entry as
  `../overview_assets/<key>.png` because the renderer sits in `overview/`.
- In-report figures: `overview_assets/<key>/figNN_name.png`, referenced as
  `../overview_assets/<key>/figNN_name.png`.
- 200 DPI, cropped tight. `overview_assets/` is tracked, so these get published.
- Each entry in `figures` carries all four caption parts. A figure without them is a
  decoration, so cut it instead.

## Versioning

Rewriting an existing summary means the previous wording still has readers. Snapshot
it before overwriting:

1. `review/<key>.v<n>.js`, assigning into `window.DETAILED_PAPER_SUMMARIES` under
   `"<key>-v<n>"`, with a header comment giving the date, the source commit and what
   changed.
2. A `<script src>` line and a version tab in `review/paper.html`.
3. A row in `review/index.html` and `review/README.md`.

See CLAUDE.md rule 6.

## Checks

```bash
node scripts/slop-check.mjs <key>     # prose patterns; exits non-zero when flagged
node scripts/summary-audit.mjs        # coverage across the library
node -e 'global.window={};require("./paper_summaries.js");console.log("parses")'
```
