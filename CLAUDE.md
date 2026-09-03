# dex-papers

A personal, tag-searchable library of robotics / dexterous-manipulation papers.
PDFs + a self-contained local HTML browser. No build step, no server.

## Layout

```
dex_papers/
├── index.html          # local browser (open via file:// — double-click)
├── papers.js           # THE database — one object per paper (edit this to add papers)
├── paper_status.js     # reading status — window.PAPER_STATUS, keyed by exact title
├── paper_ideas.js      # one-line "key idea" per paper, keyed by exact title
├── paper_summaries.js  # longer summary text, keyed by exact title
├── README.md           # human-facing index / tables
├── references.bib      # BibTeX (optional; not required by the browser)
├── *.pdf               # dexterous-manipulation reading list (repo root)
└── related_works/      # AutoDex (CoRL 2026) related-work PDFs, foldered:
    ├── autonomous/     # self-supervised / autonomous data collection, reset-free RL
    ├── dexterous/      # dexterous policy / VLA / video planning
    ├── real/           # real-world dexterous datasets
    ├── system/         # large-scale data-collection systems & datasets
    └── manus.pdf       # misc
```

## How to add a paper (the main task here)

1. Put the PDF in the right place: reading-list papers at repo root, AutoDex
   related work under `related_works/<folder>/`. **PDFs are git-ignored
   (`*.pdf`) — kept LOCAL only (copyright; the repo is public).** Set `file` to
   the local path if you have the PDF (the browser's PDF button works locally),
   else `null`. New papers are typically added link-only (`file: null`).
2. Add ONE entry to `window.PAPERS` in `papers.js`. Required fields:
   ```js
   {
     title: "Exact Paper Title",
     collection: "Dex Manipulation",   // see "Collections" below — reuse an existing one
     file: "related_works/autonomous/Foo_2024.pdf",  // path RELATIVE to repo root
     arxiv: "https://arxiv.org/abs/XXXX.XXXXX",       // or null
     project: "https://project.page/",               // or null if none
     venue: "CoRL 2024",                              // or "" 
     tags: ["lab", "method", "topic", "hardware"]     // see "Tag conventions"
   }
   ```
3. Commit and push.

The browser reads `papers.js` directly, so the new paper appears on reload — no
other file needs editing. The tag bar and counts are computed automatically.

## HARD RULES

1. **NEVER fabricate URLs.** `arxiv` / `project` must be real links you verified
   (web search). If you can't confirm one, set it to `null` — do not guess a
   `*.github.io` or `sites.google.com` URL.
2. **`file` must match the actual PDF path exactly** (case, spaces, `?` and all).
   The browser URL-encodes each path segment, so spaces/`?` in filenames are fine —
   but the string must match the real file. After adding, verify the file exists.
3. **Commit messages in English.** End-user preference. Do NOT add a
   `Co-Authored-By` trailer to commits.
4. **Reuse existing tags and collections** rather than inventing near-duplicates
   (`imitation-learning`, not `IL` or `imitation`). Check the current set first.
5. **Keep scope honest.** This collection mixes two scopes — dexterous
   *manipulation skills* (RL policies: in-hand reorientation, bottle-cap, tool use)
   and dexterous-grasp *data collection* (AutoDex related work). Tag and place a
   paper by what it actually is; don't relabel to fit.

## Reading status (`paper_status.js`)

Which papers have actually been read lives in `paper_status.js`, keyed by the
**exact `title` string** from `papers.js`:

```js
window.PAPER_STATUS = {
  "Exact Paper Title": { read: true, note: "what was actually checked" }
};
```

**`read` is a human judgement, not a derived flag.** In particular it is NOT
"a summary page exists" — the two differ on purpose, and a paper with an
`overview/<key>.html` page still counts as unread until someone says otherwise.
Absent from the file == unread.

Marking is done in the browser, not by hand-editing:

- Each row carries a `✓ Read` / `○ Unread` badge; clicking it toggles.
- Toggles are stored in `localStorage` under `dexpapers.read` — **this browser
  only**, invisible to git and to other machines.
- **⬇ export read list** (next to `✕ clear filters`) renders the merged result
  as a complete `paper_status.js`. Paste it over the file and commit to make the
  marks permanent. Curated `note` text is preserved on export; newly toggled
  papers get a placeholder note worth replacing with something real.
- The **Reading status** chip bar (`✓ read` / `○ unread`) filters the list, AND-ed
  with the research-area and tag filters.

Invariant worth re-checking after bulk edits: every `overview/<key>.html`
(except `overview/paper.html`, which is a template, not a paper) is reachable
from some entry's `summary:` field. It drifted once — 16 summaries were
unreachable and 10 of those papers were missing from `papers.js` entirely.

## Collections (current)

`Dex Manipulation`, `Grasp Synthesis`, `Compliance Control`, `Agentic Control`,
`VLA`, `Perception`, `Survey`, `Landscape: bimanual-dex`, `Related: autonomous`,
`Related: dexterous`, `Related: real`, `Related: system`, `Related: misc`.

`Agentic Control` is LLM/VLM agents that write, run and repair robot programs,
plus the self-improvement loops around them (ASPIRE, CaP-X, ENPIRE, Uni-Skill).
`index.html` gives them their own research area, driven by the `agentic` /
`code-as-policy` tags.

## Tag conventions

Tags are flat strings; a paper carries 4–8. Drawn from these axes (reuse exact spellings):

- **Lab / org**: `Berkeley`, `MIT`, `NVIDIA`, `Stanford`, `CMU`, `OpenAI`,
  `DeepMind`, `Google`, `UT-Austin`, `Brown`, `TUM` …
- **Method**: `RL`, `imitation-learning`, `sim-to-real`, `teleoperation`,
  `self-supervised`, `reset-free`, `TAMP`, `VLA`, `diffusion`, `equivariant`,
  `one-shot`, `self-improving`, `agentic`, `code-as-policy`, `skill-library`,
  `LLM`, `VLM`, `planning`
- **Topic**: `dexterous`, `grasping`, `manipulation`, `in-hand-reorientation`,
  `tool-use`, `bimanual`, `data-collection`, `dataset`, `scaling`, `reset`,
  `mocap`, `human-video`, `real-world`, `long-horizon`
- **Hardware**: `Allegro`, `Shadow`, `LEAP`, `Inspire`, `D'Claw`, `parallel-jaw`
- **Type**: `survey`, `system`

## Browser behavior (index.html)

- Pure client-side; works from `file://`. Loads `papers.js` via `<script src>`
  (not `fetch`) so there are no CORS issues offline.
- Text search matches title + tags + venue. Tag filtering is **AND** (intersection).
  Collection chips filter by collection. `✕ clear filters` resets.
- PDF buttons open the local file; arXiv/Project open online. A link rendered
  disabled means that field was `null`.

## Overview / summary pages (`overview.html` + `overview/`)

A landscape survey of papers, separate from the main browser:

- `overview.html` — grouped card grid (figure + tagline + links), with a
  **📄 Summary** button per card → its per-paper page, plus a button linking
  back and forth with `index.html`.
- `overview/<key>.html` — one **report-style** summary page per paper. This is
  the **legacy** form: a hand-written standalone HTML file. ~40 of them exist and
  they still work; do not write new ones (see "Writing a new summary" below).
- `overview_assets/<key>.png` — the paper's teaser figure. **Tracked** (the repo
  is public, so these figure crops are published — that is a deliberate choice).
  `papers.js` `image` may also point here (`overview_assets/foo.png`) for papers
  whose figures cannot be hotlinked from arXiv / a project page / an OA
  publisher; a local crop is the only way those cards get a figure at all.

### Writing a new summary (the current mechanism)

**Do not add `summary:` to `papers.js` by hand, and do not write a new
`overview/<key>.html`.** `paper_ideas.js` injects `p.summary` at load time and
will overwrite whatever `papers.js` says. Three steps instead:

1. Add a structured record to `window.DETAILED_PAPER_SUMMARIES` in
   `paper_summaries.js`, keyed by a kebab-case slug. `overview/paper.html` is
   the renderer and it does **not** guard most fields — these are all required:
   `shortTitle`, `title`, `venue`, `badges`, `tldr`, `problem`, `output`,
   `pipeline` (`{name, text}[]`), `equations` (`{name, formula, meaning}[]`),
   `novelty`, `evidence`, `limitations`, `takeaway`, `links`
   (`{label, url}[]`). Optional: `figure`, `figureCaption`, `methodDetails`,
   `rewardBaseline`, `comparison` (`{headers, rows}`). `novelty` / `takeaway` /
   `comparison` rows are inserted unescaped, so `<strong>` is allowed there.
   For a systems paper with no real math, `equations` should restate the actual
   algorithm or interaction loop as pseudocode — never invent notation.
2. Register it in `window.PAPER_SUMMARIES` in `paper_ideas.js`:
   `"<exact papers.js title>": "overview/paper.html?id=<slug>"`.
3. Save the teaser to `overview_assets/<slug>.png`. The loader forces
   `p.image = "overview_assets/<slug>.png"` for every `?id=` summary, so the
   library card's figure breaks without it — a hotlinked `figure` in the record
   does not cover this.

`node scripts/summary-audit.mjs` reports total / completed / remaining.

Reading and writing one of these is a defined workflow, not a freehand task: invoke
the **`paper-reading` skill** (`.claude/skills/paper-reading/SKILL.md`) before you
start. It carries the reading protocol, the section contracts that keep the same fact
from appearing in four sections, the figure and equation rules, the output schema
(`references/schema.md`) and the domain interrogation lists
(`references/domain-checks.md`).

**HARD RULES for these pages:**

1. **Summaries are report-style, never one effortless sentence.** Each
   `overview/<key>.html` must answer, in depth: *what is this paper about? what
   are the key ideas and contributions? what does it do?* Structure it as a
   "What it is" paragraph + "Key ideas" + "Contributions & results" lists.
2. **Ground every summary in the real sources** — read the PDF's figures and,
   when a project page exists, watch/utilize its videos & demos. Don't write
   from vague memory. Only state numbers/claims found in the sources; never
   fabricate results (same spirit as the no-fake-URL rule).
3. **Figures = the paper's own teaser / Figure 1**, cropped tightly and rendered
   at **200 DPI** (use `pdftoppm` + a saturation-based crop; teaser photos are
   colorful, body text is black/white). Do NOT use a blurry full-page downscale —
   the key-idea figure must be legible. The teaser may sit on a later page for
   long tech reports; find it, don't default to page 1.
4. **Run the `stop-slop` skill on every summary before committing.** These pages
   are prose, and the default LLM voice shows: v2 of the twisting-lids summary
   carried 42 em dashes and 37 `-ly` adverbs. Rules that matter here:
   **no em dashes anywhere** (use a comma, colon, period or parentheses), no
   adverbs, active voice with a human subject (`the authors`, `the simulator`,
   `a person`), no "not X, it's Y" contrasts, no throat-clearing openers.
   Check with `node scripts/slop-check.mjs <id>` (no argument = every summary).
   The check counts patterns; the skill does the rewriting.
5. **A style pass must not change a single claim.** When rewriting existing prose
   without the sources at hand, keep every number, mechanism and citation. Verify
   it: extract the numbers from both versions and compare the multisets.
6. **Keep old versions in `review/`.** A rewritten summary gets a snapshot
   (`review/<key>.v<n>.js`) plus a row in `review/index.html`, so the previous
   wording stays readable at `review/paper.html?id=<key>-v<n>`.

## Notes

- `references.bib` is a convenience export, not used by the browser. Keep it in
  sync only if asked.
- Repo is **public**. PDFs are git-ignored (`*.pdf`) and kept local only — do not
  commit copyrighted PDFs. (Note: PDFs committed before the public switch remain
  in git history.)
