# Where the report goes

The report is one object in `window.DETAILED_PAPER_SUMMARIES` in `paper_summaries.js`,
keyed by a slug. `overview/paper.html?id=<key>` renders it. A new paper needs two more
edits: the title-to-URL map in `paper_ideas.js`
(`"<exact papers.js title>": "overview/paper.html?id=<key>"`, nothing after the slug,
because the loader matches `?id=([^&]+)$`), and `id: "<key>"` on the paper's `papers.js`
row, which is what `teasers.js` builds the library card image from.

## Field map

The renderer skips any field you leave out, so these are render slots, not a form. Only
identity, `tldr` and `links` are structural. Everything else exists so the paper has
somewhere to put what it has, and a slot can be short, deep or absent. The item counts
below are the usual range, never a quota. See "Where the output goes" in SKILL.md.

| Report section | Field | Shape | When |
|---|---|---|---|
| identity | `shortTitle`, `title`, `venue`, `badges` | strings, string[] | always |
| teaser | `figure`, `figureCaption` | string paths | always |
| TL;DR | `tldr` | one string, 2 to 3 sentences | always |
| links | `links` | `{label, url}[]` | always |
| Problem | `problem` | string[] | usually |
| Pipeline | `pipeline` | `{name, text}[]` | usually, and only the steps a reader has to follow |
| Evidence | `evidence` | string[] | usually, around 2 to 4 that carry a claim |
| Limitations | `limitations` | string[] | usually, the ones that bind |
| Takeaways | `takeaway` | string[] | usually, a small number |
| Core insight | `coreInsight` | one string (preferred) or string[] | when the idea does not fit inside `problem` or `pipeline`. One paragraph when it is one connected argument; an array only for independent insights |
| what you get | `output` | string[] | rarely. Results belong in `evidence` |
| in-report figures | `figures` | `{src, title, shows, matters}` plus optional `read`, `supports` | when a figure carries an argument |
| Design decisions | `designDecisions` | `{decision, problem, motivation, mechanism, evidence}[]` | when a choice needs a row the pipeline cannot hold |
| deeper analysis | `methodDetails` | `{name, text}[]` | rarely, and only for analysis the pipeline and core insight cannot carry |
| Equations | `equations` | `{name, formula, intuition, terms, matters, consequence}[]` | when the method cannot be understood without the maths |
| numbers table | `comparison` | `{headers, rows}` | when a table clarifies |
| What actually matters | `whatMatters` | string[] | when synthesis across experiments adds something |
| Novelty | `novelty` | string[], bucketed | when what is new needs separating from standard practice |
| Research notes | `researchNotes` | string[] | when you have ideas worth stealing |

These slots turn redundant most often and each needs a reason before it is filled:
`problem`, `output`, `methodDetails`, `whatMatters`, `novelty`, `rewardBaseline`,
`researchNotes`. An omitted field is a decision, and it is the right one whenever
filling it would restate something the reader already has. Padding a field costs the reader more than
the missing section does. Merging a field's content into the field that owns the same
causal story, then dropping it, is the intended move.

`equations` accepts the older `{name, formula, meaning}` form, still used by earlier
entries. New entries use the four-part form. The renderer handles both.

`methodDetails` is for analysis that does not fit a decision row: reading the form of
an equation, questioning the paper's framing, an accidental property worth recording.
It is not a second pipeline.

Section order is fixed by the renderer. Order the `figures` array so each figure sits
beside the argument it carries.

## Prose conventions inside fields

- Inline HTML is allowed and used: `<strong>` for the lead of a bullet, `<em>` for a
  term being introduced. Nothing else.
- Label interpretation inside the text. The renderer has no separate slot for it.
  "Interpretation:", "the paper does not analyse this", "Not demonstrated by the
  paper."
- No em dashes. See CLAUDE.md rule 4 and `scripts/slop-check.mjs`.

## Figures

- Everything for one paper lives in `overview_assets/<key>/`.
- Teaser: `overview_assets/<key>/teaser.png`, referenced from the entry as
  `../overview_assets/<key>/teaser.png` because the renderer sits in `overview/`.
  The same file is the library card image, resolved from `papers.js` `id`.
- In-report figures: `overview_assets/<key>/figNN_name.png`, referenced as
  `../overview_assets/<key>/figNN_name.png`.
- 200 DPI, cropped tight. `overview_assets/` is tracked, so these get published.
- A `figures` entry needs `shows` and `matters`. `read` and `supports` stay empty unless
  the axes are unobvious or the figure's claim is not clear from where it sits. A figure
  with nothing to say in `matters` is decoration, so cut the figure instead.

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
