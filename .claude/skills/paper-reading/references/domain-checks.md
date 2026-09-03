# Domain interrogation lists

Run the passes that apply before drafting. Each item is a question to answer from the
sources, not a heading to write. Most answers never reach the report; they change
what you write in the sections that do.

## Robotics and manipulation

- Task horizon. How many decisions separate the start from success?
- Contact dynamics. Where does contact make or break the task?
- Exploration difficulty. What fraction of random behaviour makes progress?
- Reward sparsity. Dense, shaped or terminal?
- Reset assumptions. Who or what puts the scene back? A person, a script, nothing?
- Demonstrations. Present, absent, or replaced by something else?
- Privileged information. What does training see that deployment does not?
- Simulation assumptions. What did the simulator fail to model, and how did the
  authors work around it?
- Perception assumptions. What does the policy observe, at what rate, from what
  sensors, with what preprocessing?
- Sim-to-real gap. What crosses it, what does not, and what was tuned to make it
  cross?
- Embodiment dependence. Would this work on a different hand, arm or camera?
- Object generalisation. Trained on what, evaluated on what, and how far apart are
  those two sets?
- Failure recovery. Does the policy recover, or does one mistake end the episode?

Then answer:

> What physical behaviour must emerge for success, and is it learned or hand-encoded?

Behaviour that emerges from a reward is a result. Behaviour scripted into the
initialisation, the termination rules or the controller is a design choice. Papers
mix these, and the distinction is the whole story in many manipulation papers.

## Reinforcement learning

- What makes exploration possible here? Name the specific mechanism.
- What happens if the reward shaping is removed?
- What happens if the initialisation changes?
- What happens if the termination rules are removed?
- What is the exploration strategy actually doing: broadening search, or deleting
  regions of it?
- Asymmetric critic, privileged state, domain randomisation: which of these carries
  the transfer, and does an ablation separate them?
- Seeds. How many trained, how many reported, what spread?
- Is the metric one that a degenerate policy can score well on?

Reward shaping and early termination are two halves of the same idea: one says where
to go, the other deletes where not to go. Reading one without the other misstates
most RL systems papers.

## Agents, VLMs and VLAs

Separate the sources of capability and ask which one the improvement comes from:

    model capability | prompting | planning | tool use | environment feedback
    memory | reflection | training | evaluation

> Is the gain from a better model, better scaffolding, more inference-time compute,
> better tools, better data, or a combination?

Papers rarely isolate this. When the ablations do not separate scaffolding from model
capability, say so.

For a VLM or VLA system, trace the loop concretely:

- What information enters the model? Images, proprioception, language, history?
- What does the model predict? Tokens, actions, a plan, code, a value?
- What gets executed, and by what controller?
- Where does the loop close, and at what rate?
- What is learned end to end, and what is hand-designed around it?
- What happens when a prediction is wrong? Is there any correction path?

## Datasets and data-collection systems

- What is the unit of data, and how much of it exists?
- Who or what generated it: teleoperation, scripted policy, human video, simulation?
- What is the failure rate of collection, and is failed data kept?
- What quality filter runs, and what does it discard?
- Does the paper measure the effect of scale, or assume it?
- Would the collection method survive a new task, or was it built for this one?
