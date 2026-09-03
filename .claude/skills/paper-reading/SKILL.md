---
name: paper-reading
description: Reconstruct a research paper's reasoning and write it into paper_summaries.js. Use when adding, revising or auditing a paper summary, or when asked to read a paper properly rather than skim it.
metadata:
  trigger: Adding or revising an entry in paper_summaries.js; any request to read, analyse or summarise a paper
---

# Paper reading

You are reconstructing a paper, not summarising it. Every sentence you write has to
serve one question:

> Why did the authors do this, and why should it work?

A reader who has your report and not the paper should be able to remember it a year
later, compare it against a neighbouring paper, argue with its evidence, and pull a
research idea out of it. Optimise for that. Do not optimise for a report that looks
thorough.

## Writing philosophy

**This skill defines how to think about a paper, not how to format the answer.**

The reading framework below is deliberate overkill. It is longer than the report,
and most of what it produces never reaches the page. Use it to make sure the hard
questions got asked. Do not expose it as a checklist.

The questions in this skill are a reasoning framework, not a list of things you must
write. Use them to understand the paper, then compress the understanding into
natural, non-redundant prose.

Two stages, and they have opposite shapes:

    READING   Problem -> Difficulty -> Insight -> Design -> Evidence -> Limits
              long, exhaustive, private

    WRITING   the smallest number of connected passages that preserve the causal
              relations between those things
              short, public

When the problem, the insight, the mechanism and the ablation form one causal story,
write one passage, not four sections. Prefer:

> Unscrewing needs a long sequence of useful contacts, and PPO exploration keeps
> falling into the same unproductive configurations. So the authors shape exploration
> from both sides: a contact reward pulls fingertips onto their assigned surface, and
> early termination deletes rollouts that have entered a known trap. The intensity
> sweep supports the reading, with the disabled run flat on the floor and 50% landing
> between it and the full method.

over:

> **Problem.** Exploration gets trapped.
> **Core insight.** Exploration should be shaped.
> **Design decision.** They use a contact reward.
> **Evidence.** The ablation shows it helps.
> **Takeaway.** Exploration matters.

Both carry the same facts. The second says one thing five times.

Concretely:
- Prefer "Because X, the authors do Y, which gives Z" over three separate sentences.
- Prefer one passage that completes an idea over several that each restate part of it.
- Prefer causal explanation over an inventory of components.
- A section exists because the paper has something to put in it, not because the
  schema lists it. Leave it out otherwise.

The finished page should read like a researcher explaining the paper to another
researcher. Not like a form.

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

Write these seven slots for yourself before drafting. Private notes, never a section
layout.

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
it, and mark claims with no experiment behind them. You will use this when you write
about evidence, and again in the quality gate.

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

## Shaping the output

The report lands in a schema, so the fields are fixed. What is not fixed is how many
of them you fill. The paper decides that.

**Fill these for every paper.** Without them there is no report:
`tldr`, `problem`, `pipeline`, `evidence`, `limitations`, `takeaway`, `links`.

**Fill these when the paper has something there that is not already said elsewhere:**
`coreInsight`, `output`, `figures`, `designDecisions`, `methodDetails`, `equations`,
`comparison`, `whatMatters`, `novelty`, `researchNotes`.

The renderer skips a field you omit. A method too simple to need equations gets no
equations block. A paper whose design decisions are already explained inside the
pipeline gets no decisions table. Padding a field with a restatement is worse than
leaving it empty, because the reader has to read it before discovering it was empty.

One fact has one home. When you do fill a field, this is what it owns:

| Field | Owns | Must not contain |
|---|---|---|
| `tldr` | the story in 2 to 4 sentences | module lists, hyperparameters, tool names |
| `problem` | why the task is hard, why prior work falls short | any part of the solution |
| `coreInsight` | the idea, in conceptual terms | implementation |
| `pipeline` | how the system runs, input to output | justification of the choices |
| `designDecisions` | why each choice was made | how it runs, again |
| `equations` | the maths that carries the method | the pipeline, again |
| `evidence` | which experiment supports which claim | method details |
| `whatMatters` | conclusions synthesised across the evidence | the numbers again |
| `novelty` | what is new, bucketed | the mechanism again |
| `limitations` | the ones that bind, 3 to 5 | generic complaints |
| `takeaway` | conceptual lessons that outlive the paper | implementation |
| `researchNotes` | ideas worth stealing, open questions | anything the paper claims |

Later fields refer back. They do not restate. "The contact reward described above"
is correct; explaining the contact reward a second time is not.

The TL;DR tells the paper's story. It does not cover every important detail, and it
is not a compressed copy of the report. Write what a researcher says out loud when
asked "so what is this paper about?"

## Design decisions

Never write "they use X". Write the causal chain:

> Because ___ is difficult, the authors introduce ___, which works by ___.

Then answer, for each important choice: what problem it addresses, what else could
have been used, why this choice is reasonable, and whether any experiment shows it
matters. A decision with no experiment behind it is a decision the paper asserts.
Say that.

Where the chain already appears in the pipeline or the equations, leave the decision
there and skip the table. The table is for choices that need a row of their own.

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

Write it as one connected statement, not as five labelled parts.

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
and run the ones that apply before drafting. Those lists are reading questions.
Almost none of their answers become sentences.

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
it (axes, colours, stages), why it matters, and which claim it supports. Order the
figures so each one sits beside the argument it carries, the pipeline figure with the
method and the result figure with its claim. "See Figure 3" is not a caption.

## Where the output goes

The report becomes an entry in `paper_summaries.js`, rendered by
`overview/paper.html?id=<key>`. Field mapping, which fields are optional and the
figure conventions are in [references/schema.md](references/schema.md). Read it
before you start writing.

## Compression pass

Mandatory, after drafting and before committing. The report gets shorter here.

1. Pick the three or four keywords naming the paper's central ideas. Count them:
   `node scripts/slop-check.mjs <key>` reports patterns, and a plain
   `grep -o` count on the entry catches the rest. More than three or four mentions of
   one idea means it is being re-explained.
2. For every passage: has this information already appeared? Delete it, merge it,
   or replace it with a back reference.
3. Look for the same causal story split across fields. Problem, insight, decision and
   evidence describing one mechanism belong together, in whichever field owns the
   thing the reader needs. Merge, then delete what the merge made redundant. Dropping
   a field is the correct outcome, not a gap to patch.
4. For every field: does it add anything the reader does not already have? If not,
   remove it.
5. Re-read the TL;DR last. It drifts into a compressed version of the whole report.
   Hold it to 2 to 4 sentences answering only: what problem, what core idea, what
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
- Does each figure sit beside the argument it carries?
- Does every included figure carry an argument?

**Writing**
- Is the TL;DR 2 to 4 sentences?
- Did the compression pass make the report shorter?
- Does each central idea get explained once, with later mentions referring back?
- Can any passage be deleted without losing information?
- Did you fill a field because the paper had something there, or because the schema
  listed it?
- Is it shorter than a naive section-by-section summary would be?

When the paper cannot answer a question, write that it cannot. Do not guess.
