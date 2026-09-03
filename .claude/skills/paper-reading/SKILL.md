---
name: paper-reading
description: Reconstruct a research paper's reasoning and write it into paper_summaries.js. Use when adding, revising or auditing a paper summary, or when asked to read a paper properly rather than skim it.
metadata:
  trigger: Adding or revising an entry in paper_summaries.js; any request to read, analyse or summarise a paper
---

# Paper reading

You are reconstructing a paper, not summarising it. Every section you write has to
serve one question:

> Why did the authors do this, and why should it work?

A reader who has your report and not the paper should be able to remember it a year
later, compare it against a neighbouring paper, argue with its evidence, and pull a
research idea out of it. Optimise for that. Do not optimise for a report that looks
thorough.

The paper's own section order is not your outline. Reconstruct this chain instead:

    Problem
      -> Why it is hard
      -> Why existing approaches fall short
      -> Key insight
      -> Method
      -> Design decisions
      -> Evidence
      -> Limitations
      -> Implications

## Phase 0. Get the sources

1. PDF first. Repo PDFs are gitignored, so one may not exist locally. Download the
   arXiv PDF into the scratchpad and never commit it.
2. Project page next. Watch the videos. Behaviour that no table captures often lives
   there, and so do failure clips.
3. Code, if the repo exists. Reward weights, termination rules and observation specs
   in code override the paper when they disagree. Say when they disagree.

If you cannot obtain a source, say which one and write nothing that depends on it.
Never reconstruct a number, a figure or a result from memory. See CLAUDE.md rules 2
and 5.

## Phase 1. Figure census

Before writing prose, walk every figure and table and classify it. Keep this table in
your working notes, not in the report.

| Figure | Type | Carries | Include |
|---|---|---|---|
| Fig. 1 | teaser / overview | the one-glance story | usually |
| Fig. 2 | pipeline or architecture | how the system runs | often |
| Fig. 4 | main quantitative result | the headline claim | often |
| Fig. 6 | ablation | which component causes what | when it settles a question |
| Fig. 7 | failure case | what breaks | when it changes the reading |

Select 2 to 4. A figure earns its place by carrying an argument you would otherwise
have to write out. Cut the rest. See "Figures" below for extraction and captions.

## Phase 2. Build the internal representation

Write these seven slots for yourself before drafting. They are the anti-redundancy
device: once a fact has a slot, it gets explained in exactly one section of the
report.

    Problem:        what the world cannot do yet
    Bottleneck:     the specific thing that blocks the obvious approach
    Key insight:    the idea, stated without any implementation noun
    Main mechanism: how the insight becomes a system
    Evidence:       the experiment that would collapse if the insight were wrong
    Failure:        what the paper does not solve
    Novelty:        what is new, minus what is standard practice

If you cannot state the key insight without naming a library, a network or a sensor,
you have not found it yet. Keep reading.

## Phase 3. Claim ledger

List the paper's load-bearing claims. For each one, record the experiment that tests
it, and mark claims with no experiment behind them. You will use this in Evidence and
in the quality gate.

## Labels: claim, evidence, interpretation

Three separate things, never blurred:

- **AUTHOR CLAIM.** What the authors say. Attribute it: "the authors report",
  "the paper argues".
- **EVIDENCE.** What an experiment demonstrates. Tie it to the specific comparison
  that demonstrates it.
- **INTERPRETATION.** Your reasoning about why something works. Mark it in the text:
  "Interpretation:", "the most plausible account is", "the paper does not analyse
  this".

When the paper asserts something it never tests, write **Not demonstrated by the
paper.** That sentence is more useful than a confident paraphrase. When your reading
contradicts the authors, say so and give your reason.

## Section contracts

One canonical location per fact. Each section has a job, and trespassing on another
section's job is the failure mode this skill exists to prevent.

| Section | Owns | Must not contain |
|---|---|---|
| TL;DR | the argument in 3 to 5 sentences | module lists, hyperparameters, tool names |
| Problem | why the task is hard, why prior work falls short | any part of the solution |
| Core insight | the idea, in conceptual terms | implementation |
| Pipeline | how the system runs, input to output | justification of the choices |
| Design decisions | why each choice was made | re-explanation of how it runs |
| Equations | the maths that carries the method | restatement of the pipeline |
| Evidence | which experiment supports which claim | method details |
| What actually matters | 2 to 4 conclusions synthesised from evidence | the numbers again |
| Novelty | what is new, bucketed | the mechanism again |
| Limitations | 3 to 5, the ones that bind | generic complaints |
| Takeaways | exactly three conceptual lessons | implementation |
| Research notes | ideas worth stealing, open questions | anything the paper claims |

Later sections refer back. They do not restate. "The contact reward described above"
is correct; explaining the contact reward a second time is not.

## Design decisions

Never write "they use X". Write the causal chain:

> Because ___ is difficult, the authors introduce ___, which works by ___.

Then answer, for each important choice: what problem it addresses, what else could
have been used, why this choice is reasonable, and whether any experiment shows it
matters. A decision with no experiment behind it is a decision the paper asserts.
Say that.

Compact table, one row per decision:

| Decision | Problem | Motivation | Mechanism | Evidence |
|---|---|---|---|---|

## Equations

Include an equation only when the method cannot be understood without it. Copying a
loss because it appears in the paper is the thing to avoid.

Every equation you include gets four parts:

- **Intuition.** What it is trying to accomplish, in plain language.
- **Terms.** The variables that carry meaning. Skip standard notation.
- **Why it matters.** What breaks in the method without it.
- **Consequence.** What changes if an important term or coefficient moves. Only when
  the paper or the structure of the equation supports an answer.

Read the form of the equation, do not transcribe it. A `min` over sampled points, a
coefficient two orders of magnitude above the objective, a term that is dense where
you expected sparse: each of those is an argument the authors made without writing it
in prose. Say what it does and, if the paper never analyses it, label your reading as
interpretation.

## Evidence

Organise by claim, never by the paper's experiment order. For each important result:

    Claim -> Hypothesis -> Experiment -> Result -> Interpretation

Then push: what question is this comparison actually testing, what does the result
establish, what does it not establish, and is there an alternative explanation.

Numbers on their own are not evidence for anything. A number becomes evidence when
you say which comparison makes it meaningful. Watch for metrics that let a degenerate
policy score well, and read metric pairs together when one trades off against the
other.

For every ablation: what was removed, what hypothesis that tests, whether the
comparison is fair, whether it establishes causation, and what stays unexplained.
Give particular attention to reward design, representation, architecture, training
recipe, initialisation, privileged information, perception, data, simulator
assumptions, and filtering or termination rules.

Report the spread and the seed protocol. "Best three of ten seeds" changes what a
mean means.

## Novelty, read conservatively

Sort contributions into buckets and keep them apart:

    conceptual | algorithmic | system | engineering | evaluation

Standard components are not novel because the paper foregrounds them. Do not write
"first", "only" or "state of the art" unless the paper establishes it or you checked
the literature yourself. Emphasis is not evidence.

## Failure modes

Name what the paper does not solve: reported failures, distribution shift, the
assumptions holding the setup together, simulator and embodiment limits, perception
limits, generalisation and scaling limits. Then answer in one line:

> What does this paper actually solve, and what remains open?

Keep 3 to 5 limitations that bind. A limitation specific to this paper beats five
generic ones.

## Domain passes

Robotics, RL, manipulation, agent, VLM and VLA papers each have a required
interrogation list. Read [references/domain-checks.md](references/domain-checks.md)
and run the ones that apply before drafting.

## Figures

Extraction, when a PDF is available:

```bash
# render the page holding the figure at 200 DPI, then crop
pdftoppm -r 200 -f 3 -l 3 -png paper.pdf out/page
python3 -c "from PIL import Image; im=Image.open('out/page-03.png'); im.crop((L,T,R,B)).save('fig02_pipeline.png')"
```

In this repo, figures live in `overview_assets/<key>/` with descriptive names
(`fig01_pipeline.png`, `fig04_main_result.png`). That directory is tracked and is
where `papers.js` and the summary schema already point. Outside this repo, use
`artifacts/paper_figures/`. Crop tight, render at 200 DPI, and never ship a blurry
full-page downscale. Never fabricate, redraw or reconstruct a figure, and never read
numbers off a plot and report them as data.

Every selected figure carries a caption with four parts: what it shows, how to read
it (axes, colours, stages), why it matters, and which claim it supports. Place the
pipeline figure next to the method and the result figure next to the evidence it
supports. "See Figure 3" is not a caption.

## Where the output goes

The report becomes an entry in `paper_summaries.js`, rendered by
`overview/paper.html?id=<key>`. Field mapping, required fields and the figure
conventions are in [references/schema.md](references/schema.md). Read it before you
start writing, because the schema decides what shape your prose takes.

## Redundancy pass

Mandatory, after drafting and before committing. The report gets shorter here.

1. Pick the three or four keywords naming the paper's central ideas. Count them:
   `node scripts/slop-check.mjs <key>` reports patterns, and a plain
   `grep -o` count on the entry catches the rest. More than three or four mentions of
   one idea means it is being re-explained.
2. For every paragraph: has this information already appeared? Delete it, merge it,
   or replace it with a back reference.
3. For every section: does it add anything the reader does not have? If not, cut it.
4. Re-read the TL;DR last. It drifts into a compressed version of the whole report.
   Hold it to 3 to 5 sentences answering only: what problem, what core idea, what
   strongest result.

## Prose rules

Run the `stop-slop` skill on the finished text. No em dashes anywhere, no adverbs,
active voice with a real subject (the authors, the simulator, a person), no
"not X, it's Y" contrasts, no throat-clearing openers. Verify with
`node scripts/slop-check.mjs <key>`. See CLAUDE.md rule 4.

A style pass never changes a claim. When you rewrite existing prose, extract the
numbers from both versions and compare the multisets before committing.

## Quality gate

Do not finish until each of these holds. If one fails, go back to the paper.

**Understanding**
- Can you say why this paper exists, in one paragraph?
- Can you state the core insight without naming an implementation?
- Can you justify every major design decision?

**Evidence**
- Does every load-bearing claim map to an experiment in your ledger?
- Is every interpretation labelled as one?
- Is every limitation grounded in the paper or in an experiment?

**Mathematics**
- Does every equation have intuition, terms and a reason for existing?
- Would a reader who does not know the paper understand each equation's role?

**Figures**
- Did you inspect all of them before choosing?
- Is the pipeline figure near the method, and the result figure near its claim?
- Does every included figure carry an argument?

**Writing**
- Is the TL;DR 3 to 5 sentences?
- Did the redundancy pass make the report shorter?
- Can any paragraph be deleted without losing information?
- Is it shorter than a naive section-by-section summary would be?

When the paper cannot answer a question, write that it cannot. Do not guess.
