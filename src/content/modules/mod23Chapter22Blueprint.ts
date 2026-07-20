import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_22_SHAPING_QUIZ_BANK } from "@/content/modules/quiz/chapter22ShapingQuizBank";

export const MOD23_BLUEPRINT: ExtensionBlueprint = {
  id: "mod23",
  chapterNumber: 22,
  activityPrefix: 2230,
  title: "Shaping",
  codexHeading: "READING — Chapter 22 (Shaping)",
  codexIntro: `Chapter 22 in Cooper, Heron, and Heward covers shaping—the differential reinforcement of successive approximations toward a terminal topography. Each approximation tier enlarges resemblance to criterion while respecting dimensional grain size so leaps do not strand learners on extinction-heavy plateaus unintentionally.

Programmers articulate operational definitions per approximation, reinforcement schedules that thin only as stability rises, discriminative stimuli clarifying contexts, prompting hierarchies bridging plateaus, and data rules governing when to split dimensions or regress criteria compassionately. Terminal definitions describe the final topography under acceptable stimulus control—not vague labels.

Dimensional grain is the fineness of each leap: too large invites extinction bursts and shaping plateaus; too small wastes contact opportunities. Criterion shifts raise mastery demands once stability meets preset rules within a tier—never from hero slopes alone without variability commentary.

Supervisors watch cumulative records, variability within approximation tiers, and latency between reinforcements documenting whether thinning matches learner stamina. Thinning reinforcement before stability, or dismissing dispersion while captions claim readiness, misleads multidisciplinary readers and sets up collapse.

Shaping plateaus signal need to adjust grain, MO, prompts, or environment—not learner noncompliance or blame. Reinforcement-rich shaping supersedes intimidation choreography; humane error correction aligns with truthful reporting when progress stalls demanding environmental revisions.

Shaping differs from chaining (Chapter 23): shaping morphs one response dimension toward criterion; chaining sequences discrete links into unified performances. Confusing the two is a high-yield exam trap.

For BCBA exam prep: check grain size, MO context, within-tier variability, thinning readiness rules, and humane environmental adjustment before choosing an answer.`,
  footnotes: {
    ch22_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 22 — successive approximations and terminal definitions (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Differential reinforcement toward criterion topography.",
        "Not quoted from CHH.",
      ],
    },
    ch22_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 22 — dimensional grain and criterion shifts.",
        "Leaps too large strand learners on plateaus.",
      ],
    },
    ch22_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 22 — reinforcement thinning and variability within tiers.",
        "Stability thresholds govern thinning moves.",
      ],
    },
    ch22_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 22 — shaping plateaus and environmental adjustment.",
        "Adjust grain/MO/prompts—not blame learners.",
      ],
    },
    ch22_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 22 — humane error correction and reinforcement-rich shaping.",
        "Domain E alignment when progress stalls.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch22_1" },
    { afterSentenceIndex: 1, ref: "ch22_2" },
    { afterSentenceIndex: 2, ref: "ch22_3" },
    { afterSentenceIndex: 3, ref: "ch22_4" },
    { afterSentenceIndex: 4, ref: "ch22_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 22 recap",
    intro:
      "Chapter 22 is about building a new skill one small step at a time—reinforcing closer and closer versions until the final form is stable, with data that shows each step was the right size.",
    chunks: [
      {
        subtitle: "Successive approximations",
        segments: [
          {
            type: "text",
            text: "You reinforce graded steps that move current performance toward a clear terminal definition—not vague labels ",
          },
          { type: "footnote", ref: "ch22_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Grain size and criterion shifts",
        segments: [
          {
            type: "text",
            text: "Each leap must be small enough to keep contact with reinforcement but big enough to make progress. Jump too far and the graph flatlines; raise criteria only when stability rules are met ",
          },
          { type: "footnote", ref: "ch22_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Thinning and variability",
        segments: [
          {
            type: "text",
            text: "Thin schedules only after stability—and note spread within each tier, not just average slopes. Hero captions without variability commentary mislead ",
          },
          { type: "footnote", ref: "ch22_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Plateaus and ethics",
        segments: [
          {
            type: "text",
            text: "Flat lines invite grain, MO, prompt, or environment edits—not blame. Humane reinforcement-rich shaping beats intimidation ",
          },
          { type: "footnote", ref: "ch22_4" },
          { type: "footnote", ref: "ch22_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include criterion jumps too large for current performance, mislabeling shaping plateaus as noncompliance, thinning reinforcement before stability, and confusing shaping with chaining. Resolve them by checking grain size, MO context, and variability within approximation tiers before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch22_v1: { label: "[V1]", lines: ["CHH Chapter 22 — successive approximation."] },
    ch22_v2: { label: "[V2]", lines: ["CHH Chapter 22 — terminal definition."] },
    ch22_v3: { label: "[V3]", lines: ["CHH Chapter 22 — dimensional grain."] },
    ch22_v4: { label: "[V4]", lines: ["CHH Chapter 22 — criterion shift."] },
    ch22_v5: { label: "[V5]", lines: ["CHH Chapter 22 — shaping plateau."] },
    ch22_v6: { label: "[V6]", lines: ["CHH Chapter 22 — reinforcement thinning."] },
    ch22_kc1: { label: "[KC1]", lines: ["Domain F: grain size and criterion logic drive shaping decisions."] },
    ch22_kc2: { label: "[KC2]", lines: ["Domain C: variability within tiers before thinning claims."] },
    ch22_kc3: { label: "[KC3]", lines: ["Domain E: environmental adjustment—not blame—when plateaus persist."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 22",
    intro: "Chapter 22 shaping—chaining is Chapter 23.",
    entries: [
      { term: "Successive approximation", definition: "Reinforcing graded steps morphing performance toward terminal criteria.", footnoteRef: "ch22_v1" },
      { term: "Terminal definition", definition: "Operational description of final topography under acceptable stimulus control.", footnoteRef: "ch22_v2" },
      { term: "Dimensional grain", definition: "Fineness of each leap—too large invites plateaus; too small wastes contact.", footnoteRef: "ch22_v3" },
      { term: "Criterion shift (shaping)", definition: "Raising mastery demands once stability meets preset rules within a tier.", footnoteRef: "ch22_v4" },
      { term: "Shaping plateau", definition: "Stability without progress—adjust grain, MO, or prompts, not blame.", footnoteRef: "ch22_v5" },
      { term: "Reinforcement thinning", definition: "Systematically widening schedule requirements once approximations stabilize.", footnoteRef: "ch22_v6" },
      { term: "Operational definition", definition: "Observable, measurable description of each approximation tier.", footnoteRef: "ch22_v1" },
      { term: "Prompt hierarchy", definition: "Graduated assistance bridging plateaus while fading to independent control.", footnoteRef: "ch22_v3" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 22",
    intro: "Approximations, grain, thinning rules, plateau response, shaping vs chaining.",
    concepts: [
      {
        title: "Successive approximations toward terminal criterion",
        segments: [
          { type: "text", text: "Define terminal and initial repertoires operationally; reinforce closer matches stepwise " },
          { type: "footnote", ref: "ch22_v1" },
          { type: "footnote", ref: "ch22_v2" },
          { type: "footnote", ref: "ch22_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Dimensional grain and criterion shifts",
        segments: [
          { type: "text", text: "Right-size leaps; shift criteria only when stability rules met within tier " },
          { type: "footnote", ref: "ch22_v3" },
          { type: "footnote", ref: "ch22_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Variability before thinning",
        segments: [
          { type: "text", text: "Annotate within-tier dispersion alongside stability thresholds governing each thinning move " },
          { type: "footnote", ref: "ch22_v6" },
          { type: "footnote", ref: "ch22_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Plateau response and ethical shaping",
        segments: [
          { type: "text", text: "Adjust environment, grain, MO—not shame; reinforcement-rich humane error correction " },
          { type: "footnote", ref: "ch22_v5" },
          { type: "footnote", ref: "ch22_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 22 shaping vocabulary or reject if the stem describes chaining, punishment-first plateau response, or thinning without stability evidence.",
  matchActivityInstructions:
    "Select shaping classification, grain adjustment, thinning readiness check, or ethical plateau coaching for Cooper Chapter 22.",
  chainActivityInstructions:
    "Sequence shaping workflow: define terminal and initial repertoires → select grain and reinforcers → plot tiers with variability commentary → adjust environment when plateaus persist.",
  mts: [
    {
      sample_stimulus: "Graph flatlines after massive criterion jumps.",
      comparison_options: [
        "Reduce leap size, verify MO, densify reinforcement until contact resumes",
        "Escalate punishment until graphs move",
        "Cancel shaping permanently",
        "Hide flat panels from reports",
      ],
      correct_match: "Reduce leap size, verify MO, densify reinforcement until contact resumes",
      error_feedback: "Environmental/grain adjustment—not punishment or concealment.",
    },
    {
      sample_stimulus: "Thinning persists while dispersion explodes inside each approximation tier.",
      comparison_options: [
        "Annotate within-tier variability before claiming thinning readiness",
        "Suppress variability for hero captions",
        "Punish learners for jitter",
        "Delete reinforcement after first plateau",
      ],
      correct_match: "Annotate within-tier variability before claiming thinning readiness",
      error_feedback: "Domain C variability commentary required.",
    },
    {
      sample_stimulus: "Massive leaps strand learner on plateau; clinician blames sabotage in staff chat.",
      comparison_options: [
        "Coach analytic accountability—adjust grain/MO/environment; remove blame narratives",
        "Amplify public shaming",
        "Delete plateau sessions quietly",
        "Declare sabotage proven without data",
      ],
      correct_match: "Coach analytic accountability—adjust grain/MO/environment; remove blame narratives",
      error_feedback: "Plateaus invite measurement-led tweaks—Domain E.",
    },
    {
      sample_stimulus: "Team sequences discrete hand-washing links with forward chaining.",
      comparison_options: [
        "Chaining (Ch 23)—not shaping one topography",
        "Shaping successive approximations",
        "Extinction only",
        "DRO procedure",
      ],
      correct_match: "Chaining (Ch 23)—not shaping one topography",
      error_feedback: "Shaping morphs one response; chaining links steps.",
    },
    {
      sample_stimulus: "Average slope rises but individual trials scatter wildly within tier.",
      comparison_options: [
        "Document dispersion before thinning; may need grain or MO adjustment",
        "Thin immediately from slope alone",
        "Ignore scatter",
        "Punish variability",
      ],
      correct_match: "Document dispersion before thinning; may need grain or MO adjustment",
      error_feedback: "Stability ≠ single hero datapoint.",
    },
    {
      sample_stimulus: "Learner contacts reinforcement on every trial at current approximation.",
      comparison_options: [
        "Consider criterion shift only if stability rules preset and met",
        "Jump three tiers immediately",
        "Extinction burst intentional",
        "Remove all prompts without probe",
      ],
      correct_match: "Consider criterion shift only if stability rules preset and met",
      error_feedback: "Preset stability thresholds govern shifts.",
    },
    {
      sample_stimulus: "Grain so fine learner makes no measurable progress for weeks.",
      comparison_options: [
        "Increase leap size thoughtfully while monitoring contact",
        "Punish lack of progress",
        "Abandon terminal definition",
        "Hide cumulative record",
      ],
      correct_match: "Increase leap size thoughtfully while monitoring contact",
      error_feedback: "Too-small grain wastes contact opportunities.",
    },
    {
      sample_stimulus: "Progress stalls despite precise reinforcement; MO undocumented.",
      comparison_options: [
        "Assess MO/reinforcer value and environmental variables before blaming learner",
        "Escalate aversive control",
        "Terminate services",
        "Skip MO analysis",
      ],
      correct_match: "Assess MO/reinforcer value and environmental variables before blaming learner",
      error_feedback: "MO and environment first.",
    },
  ],
  chainTitle: "Shaping ladder",
  chainFragments: [
    { id: "a", text: "Define terminal and initial repertoires operationally with stakeholders." },
    { id: "b", text: "Select grain schedule and reinforcers aligned with MO documentation." },
    { id: "c", text: "Plot successive tiers with variability commentary before thinning." },
    { id: "d", text: "Adjust environments—not shame—when plateaus persist despite precise reinforcement." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Successive approximation", back: "Graded steps toward criterion." },
    { front: "Terminal definition", back: "Final observable topography." },
    { front: "Dimensional grain", back: "Size of each leap." },
    { front: "Criterion shift", back: "Raise demands after stability." },
    { front: "Shaping plateau", back: "Adjust program—not blame." },
    { front: "Thinning", back: "After stability rules met." },
  ],
  worksheet: {
    title: "CHH Chapter 22 — shaping",
    instructions:
      "Classify shaping decisions, grain adjustments, thinning readiness, plateau response, and shaping vs chaining.",
    scenario:
      "Scenario A — Graph flatlines after massive criterion jumps.",
    scenario_follow_up:
      "Scenario B — Thinning continues while dispersion explodes within each tier.\n\nScenario C — Clinician posts about learner sabotage after plateau.\n\nScenario D — Team uses forward chaining for multistep hand washing.\n\nScenario E — Grain so fine that weeks pass with no measurable progress.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best analytic move?",
        options: ["Reduce leap size; verify MO; densify reinforcement", "Escalate punishment", "Hide flat panels"],
        correct: "Reduce leap size; verify MO; densify reinforcement",
      },
      {
        id: "response_2",
        label: "Scenario B · Supervisory ask?",
        options: ["Annotate within-tier variability before thinning claims", "Suppress dispersion", "Punish jitter"],
        correct: "Annotate within-tier variability before thinning claims",
      },
      {
        id: "response_3",
        label: "Scenario C · Code-aligned response?",
        options: ["Coach grain/MO adjustment; remove blame narratives", "Amplify shaming", "Delete plateau data"],
        correct: "Coach grain/MO adjustment; remove blame narratives",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["Chaining—not shaping", "Shaping successive approximations", "Extinction"],
        correct: "Chaining—not shaping",
      },
      {
        id: "response_5",
        label: "Scenario E · Adjustment?",
        options: ["Increase grain size thoughtfully", "Punish learner", "Abandon terminal definition"],
        correct: "Increase grain size thoughtfully",
      },
      {
        id: "response_6",
        label: "Shaping plateau MOST often signals:",
        options: ["Adjust grain/MO/prompts/environment", "Learner noncompliance only", "Permanent failure"],
        correct: "Adjust grain/MO/prompts/environment",
      },
      {
        id: "response_7",
        label: "Reinforcement thinning should occur:",
        options: ["After stability rules met within tier", "Immediately at session start", "Never"],
        correct: "After stability rules met within tier",
      },
      {
        id: "response_8",
        label: "Ethical shaping prioritizes:",
        options: ["Reinforcement-rich humane adjustment when stalled", "Blame-forward narratives", "Concealing flat graphs"],
        correct: "Reinforcement-rich humane adjustment when stalled",
      },
    ],
    remediationLog:
      "Rebuild Chapter 22 fluency: terminal defined? → grain appropriate? → stability + variability logged? → thinning justified? → plateau → environment not blame? → shaping vs chaining?",
  },
  bdsBank: CHAPTER_22_SHAPING_QUIZ_BANK,
};
