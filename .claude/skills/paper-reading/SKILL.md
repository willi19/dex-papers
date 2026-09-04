---
name: paper-reading
description: Reconstruct a research paper's reasoning and write it into paper_summaries.js. Use when adding, revising or auditing a paper summary, or when asked to read a paper properly rather than skim it.
metadata:
  trigger: Adding or revising an entry in paper_summaries.js; any request to read, analyse or summarise a paper
---

# Paper reading and research notes

## Purpose

Read a paper deeply enough to understand why the work exists, what the authors
changed, why those changes should help, and what the evidence establishes.

The output is not a paper report and not a section-by-section summary. It should read
like concise notes from a researcher who understood the paper and wants to remember
what mattered.

> **Think broadly. Write selectively.**

The reading inspects many details. The notes keep only what a reader needs to
reconstruct the paper's important ideas and reasoning.

## 1. Reading against writing

This skill is a reasoning framework, not an output template. Internally answer:

- What problem is being solved, and why is it hard?
- What is the actual bottleneck?
- What is the authors' key insight?
- What did they change, and why should it help?
- What evidence supports that explanation?
- What does the paper fail to establish?
- What is worth remembering?

Do **not** create a section for every question. When several answers form one causal
story, write one explanation. Prefer:

> Exploration keeps falling into unproductive contact configurations, so the authors
> constrain it from both directions: the contact reward encourages useful body and lid
> contacts, while early termination removes trajectories that have entered known
> failure modes. The ablation supports the interpretation.

over:

> **Problem:** Exploration gets stuck.
> **Insight:** Exploration should be shaped.
> **Design:** Contact reward.
> **Design:** Early termination.
> **Evidence:** Ablation improves performance.

The first keeps the reasoning and drops the repetition. The final document should read
like a researcher explaining the paper to another researcher, not like a filled-in form.

## 2. Build the causal model first

Before writing, construct this internally:

    Problem
      -> why existing approaches struggle
      -> the actual bottleneck
      -> key insight
      -> important design choices
      -> mechanism
      -> evidence
      -> failure and limitation

The model is for reasoning. It does not appear in the output. The writing compresses
the graph into the smallest natural prose that keeps the important causal links.

## 3. Understand before summarising

Do not record what the authors did. For each important component ask what problem it
solves, why this particular solution, and what evidence says it matters:

    Problem -> design decision -> mechanism -> evidence

Then integrate rather than label: "Because X makes exploration difficult, the authors
introduce Y, which gives Z, and the ablation suggests Y matters because ...". Run this
reasoning for important decisions only. Routine implementation choices do not earn it.

## 4. Get the sources

1. PDF first. Repo PDFs are gitignored, so one may not exist locally. Download the
   arXiv PDF into the scratchpad and never commit it.
2. Project page next. Watch the videos. Behaviour no table captures often lives there,
   and so do the failure clips.
3. Code, if the repo exists. Reward weights, termination rules and observation specs in
   code override the paper when they disagree. Say when they disagree.

If you cannot obtain a source, say which one and write nothing that depends on it.
Never reconstruct a number, a figure or a result from memory. See CLAUDE.md rules 2 and 5.

## 5. Claim, evidence, interpretation

Three separate things, never blurred:

- **AUTHOR CLAIM.** What the authors say. Attribute it: "the authors report".
- **EVIDENCE.** What an experiment demonstrates, tied to the comparison that shows it.
- **INTERPRETATION.** Your reasoning. Mark it: "Interpretation:", "the most plausible
  account is", "the paper does not analyse this".

When the paper asserts something it never tests, write **Not demonstrated by the
paper.** That sentence beats a confident paraphrase. When your reading contradicts the
authors, say so and give your reason.

## 6. What to keep and what to cut

The question is not "is this interesting?" but:

> **Would removing this make it harder to understand why the paper works?**

Keep what explains the problem, the bottleneck, the core idea, the important design
choices and their mechanism, the strongest evidence, the binding limitations, and the
research implications.

Cut routine implementation detail, exhaustive hyperparameters, exact dimensions,
training ranges, controller settings, infrastructure, every experiment, secondary
metrics, repeated numbers, and any fact that does not change interpretation.

Separate what is needed to **understand** the paper from what is needed to
**reproduce** it. The default serves understanding, so PPO hyperparameters, network
dimensions, smoothing coefficients, randomisation ranges and communication protocols
normally stay out. Keep such a detail only when it explains a result, reveals a real
design choice, changes interpretation, explains a failure, or carries the central idea.
Do not turn the notes into a reproduction manual.

## 7. Compression

The output is far shorter than the source. Rough ceilings:

    5-10 pages   ->  1-2 pages
    10-20 pages  ->  2-3 pages
    20+ pages    ->  3-4 pages

**These are ceilings, never quotas, and length does not scale with page count.** A
16-page paper whose idea compresses well deserves half a page. Never add material to
reach a target, and never keep material because there is room for it.

Ask, for every paragraph: if I delete this, is an important understanding lost? For
every sentence: does this add information, reasoning or interpretation that is not
already here? For every section: is this explained elsewhere already? Delete, merge,
or replace with a back reference. One precise sentence beats several that circle the
same idea.

An important idea gets **one canonical explanation**. The TL;DR states it briefly, one
later passage explains it properly, the evidence refers back to it, and the takeaway
distils the implication. Once the contact reward has been explained, later writing says
"the ablation supports this exploration hypothesis" and does not explain the reward again.

## 8. Natural prose over checklist writing

Do not expose categories such as Problem, Motivation, Mechanism, Evidence and
Interpretation as labels unless doing so genuinely helps the reader navigate. A strong
paragraph carries several of them without naming any. Prefer:

> The difficulty is discovering a useful contact configuration rather than generating
> torque, which is why the authors spend the method on exploration shaping instead of
> policy architecture.

over three labelled fragments saying the same thing.

## 9. TL;DR

Answer "what is this paper about, and why should I care?" in 2 to 3 sentences: the
problem, the central idea, the strongest result. It is not a compressed copy of the
notes, and implementation detail does not belong in it.

## 10. Figures

Inspect every figure before choosing. Include at most 3, and normally the pipeline or
system overview, the main result, and the most informative ablation or qualitative
figure. A figure earns its place by carrying an argument you would otherwise write out.
Place each one next to the argument it carries.

A caption needs two things: what it shows, and why it matters. The record also has
`read` and `supports` slots, and both stay empty by default. Fill `read` when the axes,
colours or stages are not self-evident, and `supports` when the figure's claim is not
obvious from where it sits. Four filled parts per figure is a mini-review, not a caption.

Extraction, when a PDF is available:

```bash
# render the page holding the figure at 200 DPI, then crop
pdftoppm -r 200 -f 3 -l 3 -png paper.pdf out/page
python3 -c "from PIL import Image; im=Image.open('out/page-03.png'); im.crop((L,T,R,B)).save('fig02_pipeline.png')"
```

In this repo figures live in `overview_assets/<key>/` with descriptive names
(`teaser.png`, `fig02_pipeline.png`). That directory is tracked and published. Outside
this repo use `artifacts/paper_figures/`. Crop tight, render at 200 DPI, never ship a
blurry full-page downscale. Never fabricate, redraw or reconstruct a figure, and never
read numbers off a plot and report them as data.

## 11. Equations

Include an equation only when an important idea cannot be understood without it.
Copying a loss because the paper prints it is the thing to avoid.

For each one explain, in plain language, what it tries to achieve, what the meaningful
terms are, why this form matters, and what changes when an important term moves. Skip
trivial notation. Read the form rather than transcribing it: a `min` over sampled
points, a coefficient two orders of magnitude above the objective, a term that is dense
where you expected sparse, each is an argument the authors made without writing it in
prose. If the paper never analyses it, label your reading as interpretation.

## 12. Evidence, results and ablations

Do not summarise every experiment. Ask what claim each one is needed to establish, and
reason:

    claim -> experimental question -> comparison -> result -> interpretation

Write it as one connected statement. Around 2 to 4 pieces of evidence normally survive.
Prefer "the proprioception-only policy reaches 1.33° where the full system reaches 946°,
so the task needs object-relative visual information" over the full protocol and every
measured value.

Numbers appear when they make the argument clearer, never because a table printed them.
Distinguish what a result demonstrates, what it suggests, and what it does not
establish. Watch for metrics a degenerate policy scores well on, and read a metric pair
together when one trades off against the other. Report the spread and the seed
protocol when they change what a mean means.

For ablations ask what changed, what hypothesis that tests, whether the comparison is
fair, whether it establishes causation, and what alternative explanations remain. When
several ablations tell one story, tell it once.

## 13. Novelty

Assess conservatively, and separate conceptual, algorithmic, system, engineering and
evaluation contributions. Standard components are not novel because the paper
foregrounds them. Do not repeat a "first" or "state of the art" claim as established
unless the paper establishes it or you checked the literature yourself.

## 14. Limitations

Prefer the few that change how the contribution should be read, usually 3 to 5 rather
than an exhaustive list. They usually concern
assumptions, generalisation, embodiment, data, simulation, perception, evaluation, task
structure, or missing causal evidence. Do not copy the paper's own limitations section.
Name what the experiments reveal, and answer in one line: what does this paper solve,
and what stays open?

## 15. Research notes

Allowed, and kept apart from what the authors claim: an idea worth reusing, an
unexplored question, a surprising result, a connection to a neighbouring paper. Not
every observation is a research idea. A good one says why it is interesting.

## 16. Domain passes

Robotics, RL, manipulation, agent, VLM and VLA papers each have an interrogation list
in [references/domain-checks.md](references/domain-checks.md). Run the ones that apply
before drafting. They are reading questions, not headings, and almost none of their
answers become sentences.

For an RL paper, reason explicitly about what makes exploration possible. For a
manipulation paper, about what physical behaviour has to emerge and which part of it is
learned rather than hand-specified. For an agent, VLM or VLA paper, about whether the
gain comes from the model, the scaffolding, inference-time compute, the tools, or the data.

## 17. Where the output goes

The notes become one record in `window.DETAILED_PAPER_SUMMARIES` in
`paper_summaries.js`, rendered by `overview/paper.html?id=<key>`. Registration and the
figure conventions are in [references/schema.md](references/schema.md).

**The record's fields are render slots, not a form to fill.** The renderer skips a
field you leave out. Only the identity fields, `tldr` and `links` are structural.
Everything else exists so that the paper has somewhere to put what it has.

Concretely, this is what the freedom means:

- A field can be short. `pipeline` may hold three steps where another paper needs eight.
  Write the steps a reader needs to follow the method, not every stage that exists.
- A field can be absent. `methodDetails`, `designDecisions`, `whatMatters`, `novelty`,
  `coreInsight`, `output`, `comparison`, `equations`, `researchNotes` and `figures` are
  all optional, and dropping one is the correct outcome when its content already lives
  somewhere else.
- A field can be deep. When the maths carries the paper, `equations` earns more space
  than the rest of the record combined.

**Never read the existence of a field as an instruction to populate it.** For each one
ask: does this paper genuinely benefit from this information being shown separately? If
not, leave it empty.

These are the slots that turn redundant most often, and each needs a reason before it
gets filled: `problem`, `output`, `methodDetails`, `whatMatters`, `novelty`,
`rewardBaseline`, `researchNotes`. Do not populate them by default. `output` in
particular tends to restate the evidence, and `whatMatters` tends to restate the core
insight.

A record may legitimately hold only `tldr`, `coreInsight`, `pipeline`, `figures`,
`equations`, `comparison`, `evidence`, `limitations`, `takeaway`, or fewer.

**The goal is not schema completeness. The goal is information completeness.**

`coreInsight` accepts either one paragraph or an array. Use a single paragraph when the
insight is one connected argument, and an array only when the items are independent
insights. The same preference applies wherever a field takes a list: a list of three
fragments that belong to one thought should be one passage.

One fact has one home. Filled fields own this much and refer back rather than restate:

| Field | Owns |
|---|---|
| `tldr` | the story in 2 to 3 sentences |
| `problem` | why the task is hard, why prior work falls short |
| `coreInsight` | the idea, in conceptual terms |
| `pipeline` | how the system runs, input to output |
| `designDecisions` | why a choice was made, when the chain fits nowhere else |
| `equations` | the maths that carries the method |
| `evidence` | which experiment supports which claim |
| `whatMatters` | conclusions synthesised across the evidence |
| `novelty` | what is new, bucketed |
| `limitations` | the ones that bind |
| `takeaway` | lessons that outlive the paper |
| `researchNotes` | ideas worth stealing, open questions |

## 18. Cross-field redundancy check

Before finalising the record, compare every populated field against the others. When
the same idea appears twice:

1. Keep the most informative version.
2. Move it to the field where it belongs most naturally.
3. Delete it from the other field, and delete the field if nothing else is left in it.

The recurring cases:

- The core insight already explains why a design choice matters, so `whatMatters` does
  not repeat it.
- The evidence already explains a result, so `output` does not repeat it.
- A figure caption already explains an ablation, so `evidence` does not reproduce the
  explanation. One of the two refers to the other.
- A method passage already explains an equation's role, so `takeaway` distils the
  lesson instead of restating the mechanism.
- `novelty` restates mechanisms by construction. Prefer one sentence inside the core
  insight: "the novelty is not PPO, it is using contact structure and failure-aware
  termination to make bimanual exploration tractable."

The rendered page should carry each important idea once, in the place where it is most
useful.

## 19. Prose rules

Run the `stop-slop` skill on the finished text. No em dashes anywhere, no adverbs,
active voice with a real subject (the authors, the simulator, a person), no
"not X, it's Y" contrasts, no throat-clearing openers. Verify with
`node scripts/slop-check.mjs <key>`. See CLAUDE.md rule 4.

A style pass never changes a claim. When you rewrite existing prose, extract the numbers
from both versions and compare the multisets before committing.

## 20. Final pass

Before finishing, run one separate compression pass.

**Understanding.** Can the core idea be stated in a few sentences? Is the bottleneck
clear? Is it clear why each major design choice exists?

**Evidence.** Does every major claim have evidence behind it? Is interpretation
distinguishable from demonstrated fact? Have the weak experiments been dropped?

**Figures and equations.** Does each figure carry an argument, and does it sit beside
that argument? Is every equation necessary, and is its role explained?

**Compression.** Is anything repeated? Are implementation details crowding out ideas?
Can a paragraph disappear without harming understanding? Did you fill a field because
the paper had something there, or because the schema listed it? Is this still a set of
notes rather than a rewritten paper?

**The last question.** If a researcher had only these notes and the title, would they
remember what was interesting about the paper? If yes, stop. Do not add more because
more is available.

When the paper cannot answer a question, write that it cannot. Do not guess.

## Core principle

**Deep reading does not mean writing more.** Understand more so that less needs to be
written. Keep the reasoning, the evidence and the insights. Discard everything that
does not carry them.
