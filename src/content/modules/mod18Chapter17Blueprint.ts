import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_17_SC_QUIZ_BANK } from "@/content/modules/quiz/chapter17StimulusControlQuizBank";

export const MOD18_BLUEPRINT: ExtensionBlueprint = {
  id: "mod18",
  chapterNumber: 17,
  activityPrefix: 2180,
  title: "Stimulus Control",
  codexHeading: "READING — Chapter 17 (Stimulus Control)",
  codexIntro: `Chapter 17 in Cooper, Heron, and Heward explains stimulus control as a functional relation between antecedent stimuli and operant behavior established through differential reinforcement and extinction histories. A discriminative stimulus (SD) is an antecedent in the presence of which a response has been reinforced; an S-delta (SΔ) is an antecedent in the presence of which the response has not produced reinforcement. Stimulus control means behavior occurs more often in the presence of SDs and less often in the presence of S-deltas for that response class.

Discrimination is differential responding across antecedent cues based on meaningful stimulus differences. Stimulus generalization is response spread to similar, untrained stimuli—often mapped as a gradient rather than all-or-nothing mastery. Generalization and discrimination coexist: a learner may generalize across dog exemplars while still discriminating dogs from cats.

Prompting supports acquisition, but prompts must fade if the goal is independent responding under naturally occurring SDs. Data must show prompt level, antecedent conditions, and fidelity clearly enough that another clinician could reproduce teaching conditions and verify independence claims. Accuracy alone without prompt tags can mislabel prompt-dependent performance as stimulus control.

Multiple stimulus control occurs when more than one antecedent jointly influences responding—component tests are required before monocausal SD claims. Ethically, teams avoid labeling learners noncompliant when prompt dependence or weak stimulus control better explains the pattern.

Chapter 17 pairs with Chapter 16 (MO alters value; SD signals availability) and Chapter 18 (verbal behavior). For BCBA exam prep: check reinforcement-versus-extinction history, SD versus S-delta, discrimination versus generalization, prompt versus independent performance, and MO versus SD before choosing an answer.`,
  footnotes: {
    ch17_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 17 — stimulus control and discriminative stimuli (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Differential reinforcement histories establish SD/S-delta relations.",
        "Not quoted from CHH.",
      ],
    },
    ch17_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 17 — discrimination versus stimulus generalization; gradients and boundaries.",
        "Generalization and discrimination coexist—not mutually exclusive.",
      ],
    },
    ch17_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 17 — prompting, fading, error-reduction; prompt dependency documentation.",
        "Trial-level prompt data required for independence claims.",
      ],
    },
    ch17_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 17 — multiple stimulus control; component tests before single-cause claims.",
        "Joint antecedent control requires decomposition.",
      ],
    },
    ch17_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 17 — ethical reporting; honest independence language; humane error correction.",
        "Do not market prompted performance as independent SD control.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch17_1" },
    { afterSentenceIndex: 1, ref: "ch17_1" },
    { afterSentenceIndex: 2, ref: "ch17_2" },
    { afterSentenceIndex: 3, ref: "ch17_3" },
    { afterSentenceIndex: 4, ref: "ch17_4" },
    { afterSentenceIndex: 5, ref: "ch17_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 17 recap",
    intro:
      "Stimulus control means a cue matters because reinforcement history taught the learner when responding pays off. Ask: Which cue is the SD? Which is S-delta? What prompt level was active? Where was generalization tested?",
    chunks: [
      {
        subtitle: "SD and S-delta",
        segments: [
          {
            type: "text",
            text: "SD signals reinforcement is available for the response; S-delta signals withholding or extinction. Control comes from different histories across antecedents—not learner character labels ",
          },
          { type: "footnote", ref: "ch17_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Discrimination and generalization",
        segments: [
          {
            type: "text",
            text: "Discrimination = different responding across cues. Generalization = spread to similar untrained stimuli. Map gradients and test boundaries before claiming mastery everywhere ",
          },
          { type: "footnote", ref: "ch17_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Prompts must fade",
        segments: [
          {
            type: "text",
            text: "Record prompt level on every trial. If heavy prompts remain, revise independence language—accuracy alone is not stimulus control ",
          },
          { type: "footnote", ref: "ch17_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Multiple control and ethics",
        segments: [
          {
            type: "text",
            text: "Several cues may share control—run component tests. Report honestly what is prompted versus independent ",
          },
          { type: "footnote", ref: "ch17_4" },
          { type: "footnote", ref: "ch17_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include confusing MO value shifts with SD control, claiming independence while heavy prompts remain, treating generalization as proof discrimination vanished, and ignoring multiple stimulus control. Resolve them by checking reinforcement-versus-extinction history, trial-level prompt data, and gradient evidence before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch17_v1: { label: "[V1]", lines: ["CHH Chapter 17 — discriminative stimulus (SD)."] },
    ch17_v2: { label: "[V2]", lines: ["CHH Chapter 17 — S-delta (SΔ)."] },
    ch17_v3: { label: "[V3]", lines: ["CHH Chapter 17 — discrimination and generalization."] },
    ch17_v4: { label: "[V4]", lines: ["CHH Chapter 17 — prompting and fading."] },
    ch17_v5: { label: "[V5]", lines: ["CHH Chapter 17 — multiple stimulus control."] },
    ch17_kc1: { label: "[KC1]", lines: ["Domain F: SD/S-delta, discrimination, generalization, prompt versus independent control."] },
    ch17_kc2: { label: "[KC2]", lines: ["Domain C: trial-level prompt data and SD fidelity logs."] },
    ch17_kc3: { label: "[KC3]", lines: ["Domain E: honest independence reporting—no hidden prompts."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 17",
    intro: "Chapter 17 stimulus control—motivating operations are Chapter 16; verbal behavior is Chapter 18.",
    entries: [
      { term: "Stimulus control", definition: "Functional relation between antecedents and behavior via differential histories.", footnoteRef: "ch17_v1" },
      { term: "Discriminative stimulus (SD)", definition: "Antecedent signaling reinforcement availability for a response.", footnoteRef: "ch17_v1" },
      { term: "S-delta (SΔ)", definition: "Antecedent correlated with extinction/withholding for that response.", footnoteRef: "ch17_v2" },
      { term: "Discrimination", definition: "Differential responding across meaningful antecedent differences.", footnoteRef: "ch17_v3" },
      { term: "Stimulus generalization", definition: "Response spread to similar untrained stimuli along a gradient.", footnoteRef: "ch17_v3" },
      { term: "Prompt fading", definition: "Systematic withdrawal of supplemental cues toward SD control.", footnoteRef: "ch17_v4" },
      { term: "Multiple stimulus control", definition: "More than one antecedent jointly influences responding.", footnoteRef: "ch17_v5" },
      { term: "Stimulus class", definition: "Stimuli sharing control due to common reinforcement history.", footnoteRef: "ch17_v3" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 17",
    intro: "SD/S-delta history, gradients, prompt transparency, multiple control.",
    concepts: [
      {
        title: "SD/S-delta from differential histories",
        segments: [
          { type: "text", text: "Stimulus control is installed by differential reinforcement and extinction across antecedents—not trait labels " },
          { type: "footnote", ref: "ch17_v1" },
          { type: "footnote", ref: "ch17_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Discrimination and generalization gradients",
        segments: [
          { type: "text", text: "Test spread across exemplars and withholding to contrast classes—both can coexist " },
          { type: "footnote", ref: "ch17_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Prompt transparency",
        segments: [
          { type: "text", text: "Trial-level prompt data beside accuracy—fade toward natural SDs with documented criteria " },
          { type: "footnote", ref: "ch17_v4" },
          { type: "footnote", ref: "ch17_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Multiple control and honest reporting",
        segments: [
          { type: "text", text: "Decompose joint antecedent control; do not market prompted performance as independent " },
          { type: "footnote", ref: "ch17_v5" },
          { type: "footnote", ref: "ch17_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 17 stimulus-control vocabulary or reject if the stem describes MO value shift, consequence process, or undocumented prompt dependence.",
  matchActivityInstructions:
    "Select SD/S-delta interpretation, discrimination versus generalization read, prompt-fading accountability, or multiple-control response for Cooper Chapter 17.",
  chainActivityInstructions:
    "Sequence stimulus-control QA: operationalize SD/S-delta → baseline probes → prompt hierarchy with fade criteria → fidelity/IOA → honest graph interpretation.",
  mts: [
    {
      sample_stimulus: "Blue card: mands reinforced; red card: mands on extinction—identical therapist positioning.",
      comparison_options: ["Discriminative stimulus control / discrimination", "MO satiation exclusively", "Respondent elicitation only", "Negative punishment"],
      correct_match: "Discriminative stimulus control / discrimination",
      error_feedback: "Differential reinforcement across color antecedents.",
    },
    {
      sample_stimulus: "Tact trained to golden retriever; reinforcement for novel dog photos but not cats.",
      comparison_options: [
        "Generalization within dog class plus discrimination from cats",
        "Proof discrimination eliminated",
        "Automatic punishment",
        "MO abolishing SD",
      ],
      correct_match: "Generalization within dog class plus discrimination from cats",
      error_feedback: "Generalization and discrimination coexist.",
    },
    {
      sample_stimulus: "Full physical guidance every correct trial; slides claim independent discrimination mastery.",
      comparison_options: [
        "Reporting integrity breach—undisclosed prompts",
        "Standard minimalism",
        "Proof SD optional",
        "MO satiation",
      ],
      correct_match: "Reporting integrity breach—undisclosed prompts",
      error_feedback: "Hidden prompts invalidate independence claims.",
    },
    {
      sample_stimulus: "Graphs show accuracy only—no prompt level column.",
      comparison_options: [
        "Measurement lapse—SC not verifiable",
        "Ideal measurement hygiene",
        "Proof generalization obsolete",
        "IOA substitute",
      ],
      correct_match: "Measurement lapse—SC not verifiable",
      error_feedback: "Prompt levels required beside accuracy.",
    },
    {
      sample_stimulus: "Two cues jointly correlate with reinforcement unless third indicator appears.",
      comparison_options: [
        "Multiple stimulus control—component tests needed",
        "One SD always sufficient",
        "MO identical to SD",
        "Extinction burst",
      ],
      correct_match: "Multiple stimulus control—component tests needed",
      error_feedback: "Decompose before monocausal claims.",
    },
    {
      sample_stimulus: "Fade from full physical to shadow prompt with dated mastery criteria on data sheet.",
      comparison_options: [
        "Systematic prompt fading with transparent criteria",
        "Permanent physical prompts required",
        "Delete SD definitions",
        "Extinction only",
      ],
      correct_match: "Systematic prompt fading with transparent criteria",
      error_feedback: "Fading toward SD-controlled performance.",
    },
    {
      sample_stimulus: "Cookie card reinforces echoic; Juice card withholds—identical prompting ritual.",
      comparison_options: ["Stimulus discrimination / SD control", "MO exclusively", "Respondent only", "Negative punishment"],
      correct_match: "Stimulus discrimination / SD control",
      error_feedback: "Different antecedents, different reinforcement outcomes.",
    },
    {
      sample_stimulus: "Which best distinguishes MO from SD in a performance drop case?",
      comparison_options: [
        "Check whether value shifted (MO) versus availability cue changed (SD)",
        "MO and SD are interchangeable",
        "SD always changes value",
        "Neither applies",
      ],
      correct_match: "Check whether value shifted (MO) versus availability cue changed (SD)",
      error_feedback: "Ch 16/17 integration hinge.",
    },
  ],
  chainTitle: "Stimulus control integrity sweep",
  chainFragments: [
    { id: "a", text: "Operationalize SD/S-delta topographies, materials, and mastery definitions." },
    { id: "b", text: "Collect baseline discrimination and generalization probes." },
    { id: "c", text: "Implement prompt hierarchy with explicit fade criteria and trial-level integrity." },
    { id: "d", text: "Graph prompted versus independent performance honestly before dissemination." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Stimulus control", back: "Antecedent-behavior relation via history." },
    { front: "SD", back: "Signals reinforcement available." },
    { front: "S-delta", back: "Signals withholding/extinction." },
    { front: "Discrimination", back: "Different responding across cues." },
    { front: "Generalization", back: "Spread to similar stimuli." },
    { front: "Prompt fading", back: "Withdraw prompts toward SD." },
  ],
  worksheet: {
    title: "CHH Chapter 17 — stimulus control",
    instructions:
      "Classify each case using SD/S-delta logic, discrimination/generalization, prompt dependence, and reporting integrity.",
    scenario:
      "Scenario A — Verbal prompts removed; full physical prompts still used on many trials; team reports independent tact performance.",
    scenario_follow_up:
      "Scenario B — Accuracy graphs omit prompt-level columns.\n\nScenario C — Blue vs yellow schedule cards evoke different reinforcement likelihoods.\n\nScenario D — Dog photos generalize; responding withheld to cats.\n\nScenario E — Prompt legend removed from report while claiming pure SD independence.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best interpretation?",
        options: ["Still prompt-mediated—revise independence language", "Pure SD mastery", "Delete physical-prompt trials", "MO only"],
        correct: "Still prompt-mediated—revise independence language",
      },
      {
        id: "response_2",
        label: "Scenario B · Best documentation fix?",
        options: ["Restore trial-level prompt tags with accuracy", "Missing columns acceptable", "Replace graphs with photos only", "Ignore SD fidelity"],
        correct: "Restore trial-level prompt tags with accuracy",
      },
      {
        id: "response_3",
        label: "Scenario C · Best classification?",
        options: ["Discriminative stimulus control", "Respondent only", "MO abolishing SD", "Extinction only"],
        correct: "Discriminative stimulus control",
      },
      {
        id: "response_4",
        label: "Scenario D · Best pairing?",
        options: ["Generalization plus discrimination from non-exemplars", "Discrimination eliminated", "MO only", "Negative punishment"],
        correct: "Generalization plus discrimination from non-exemplars",
      },
      {
        id: "response_5",
        label: "Scenario E · Core problem?",
        options: ["Documentation and independence reporting integrity failure", "Normal reporting", "Proof SC irrelevant", "IOA only"],
        correct: "Documentation and independence reporting integrity failure",
      },
      {
        id: "response_6",
        label: "SD versus S-delta—MOST accurate?",
        options: ["SD signals reinforcement; S-delta signals withholding", "Interchangeable", "SD signals withholding", "Neither applies to operants"],
        correct: "SD signals reinforcement; S-delta signals withholding",
      },
      {
        id: "response_7",
        label: "Multiple salient stimuli co-occur—clinicians should:",
        options: ["Plan component probes before monocausal claims", "Pick one SD arbitrarily", "Delete S-delta probes", "Ignore multiple control"],
        correct: "Plan component probes before monocausal claims",
      },
      {
        id: "response_8",
        label: "Ethical Chapter 17 reporting:",
        options: ["Distinguish prompted from independent with trial data", "Hide prompts while marketing independence", "Blame learner character", "Omit S-delta conditions"],
        correct: "Distinguish prompted from independent with trial data",
      },
    ],
    remediationLog:
      "Rebuild Chapter 17 fluency: SD/S-delta? → discrimination vs generalization? → prompt level? → MO vs SD? → honest reporting.",
  },
  bdsBank: CHAPTER_17_SC_QUIZ_BANK,
};
