# dex-papers

A personal, tag-searchable library of robotics / dexterous-manipulation papers.
PDFs + a self-contained local HTML browser. No build step, no server.

## Layout

```
dex_papers/
├── index.html          # local browser (open via file:// — double-click)
├── papers.js           # THE database — one object per paper (edit this to add papers)
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
   related work under `related_works/<folder>/`.
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

## Collections (current)

`Dex Manipulation`, `Survey`, `Related: autonomous`, `Related: dexterous`,
`Related: real`, `Related: system`, `Related: misc`.

## Tag conventions

Tags are flat strings; a paper carries 4–8. Drawn from these axes (reuse exact spellings):

- **Lab / org**: `Berkeley`, `MIT`, `NVIDIA`, `Stanford`, `CMU`, `OpenAI`,
  `DeepMind`, `Google`, `UT-Austin`, `Brown`, `TUM` …
- **Method**: `RL`, `imitation-learning`, `sim-to-real`, `teleoperation`,
  `self-supervised`, `reset-free`, `TAMP`, `VLA`, `diffusion`, `equivariant`,
  `one-shot`, `self-improving`
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
- `overview/<key>.html` — one **report-style** summary page per paper.
- `overview_assets/<key>.png` — the paper's teaser figure. **Git-ignored**
  (`.gitignore`) — kept local only (copyright; do not upload). Reproducible
  anytime by re-rendering, so missing on a fresh clone is expected.

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

## Notes

- `references.bib` is a convenience export, not used by the browser. Keep it in
  sync only if asked.
- Repo is currently **private**. To make public:
  `gh repo edit willi19/dex-papers --visibility public --accept-visibility-change-warning`
