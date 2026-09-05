# dex-papers

A personal, tag-searchable library of robotics / dexterous-manipulation papers.
PDFs + a self-contained local HTML browser. No build step, no server.

## Layout

```
dex_papers/
├── index.html          # local browser (open via file:// — double-click)
├── overview.html       # card grid, generated from papers.js + groups.js
├── papers.js           # THE database — one object per paper (edit this to add papers)
├── groups.js           # research-area taxonomy, shared by index.html and overview.html
├── teasers.js          # teaser image resolution, shared by both views
├── paper_status.js     # reading status — window.PAPER_STATUS, keyed by exact title
├── paper_ideas.js      # one-line "key idea" per paper, keyed by exact title
├── paper_summaries.js  # structured summary records, keyed by slug
├── overview/           # per-paper summary pages: paper.html renderer + legacy <key>.html
├── overview_assets/    # <key>/teaser.png plus in-report figures (tracked)
├── review/             # snapshots of rewritten summaries
├── scripts/            # summary-audit.mjs, slop-check.mjs
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
plus the self-improvement loops around them (ASPIRE, CaP-X, ENPIRE, Uni-Skill) and
the line they come from (SayCan, Code as Policies, ProgPrompt, Eureka, RoboGen).
The bar is that a robot is in the loop: ReAct, Reflexion and Voyager are the same
literature but no robot, so they stay out.
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
- `overview/<key>.html` — one long-form summary page per paper. This is
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
   the renderer and it skips any field you leave out, so the schema is a menu,
   not a form. Structural: `shortTitle`, `title`, `venue`, `badges`, `tldr`,
   `links` (`{label, url}[]`). Filled for almost every paper: `problem`,
   `pipeline` (`{name, text}[]`), `evidence`, `limitations`, `takeaway`.
   Filled when the paper has something there that no other field already says:
   `coreInsight`, `output`, `figure`, `figureCaption`, `figures`,
   `designDecisions`, `methodDetails`, `equations`, `comparison`
   (`{headers, rows}`), `whatMatters`, `novelty`, `researchNotes`,
   `rewardBaseline`. Omitting a field beats padding it with a restatement.
   `novelty` / `takeaway` / `comparison` rows are inserted unescaped, so
   `<strong>` is allowed there. For a systems paper with no real math, either
   drop `equations` or restate the actual algorithm or interaction loop as
   pseudocode. Never invent notation.
2. Register it in `window.PAPER_SUMMARIES` in `paper_ideas.js`:
   `"<exact papers.js title>": "overview/paper.html?id=<slug>"`. Nothing else may
   follow the slug: the loader matches `?id=([^&]+)$`, so a trailing `&from=...`
   silently skips the image fallback.
3. Set `id: "<slug>"` on the paper's `papers.js` row and save the teaser to
   `overview_assets/<slug>/teaser.png`. `teasers.js` builds the card image from
   `p.id`, so a row without `id` falls back to the generated placeholder. In-report
   figures go beside it as `overview_assets/<slug>/figNN_name.png`.

`node scripts/summary-audit.mjs` reports total / completed / remaining.

Reading and writing one of these is a defined workflow, not a freehand task: invoke
the **`paper-reading` skill** (`.claude/skills/paper-reading/SKILL.md`) before you
start. Its principle is *think broadly, write selectively*: the questions are a
reasoning framework, and the record carries the compressed result rather than one
section per question. It also holds the source protocol, the one-canonical-explanation
rule, the figure and equation rules, the render slots (`references/schema.md`) and the
domain interrogation lists (`references/domain-checks.md`).

**HARD RULES for these pages:**

1. **Depth is about understanding, not length or section count.** A summary must
   answer *why does this paper exist, what did the authors change, why should it
   help, and what does the evidence establish?* How many sections that takes is the
   paper's call, not the schema's: a well-compressed record is the goal, and no
   field is mandatory beyond identity, `tldr` and `links`. What is banned is the
   effortless one-liner that answers none of it.
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
