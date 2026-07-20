import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_11_PR_QUIZ_BANK } from "@/content/modules/quiz/chapter11PositiveReinforcementQuizBank";

export const MOD02_BLUEPRINT: ExtensionBlueprint = {
  id: "mod02",
  chapterNumber: 11,
  activityPrefix: 2165,
  title: "Positive Reinforcement",
  codexHeading: "READING — Chapter 11 (Positive Reinforcement)",
  codexIntro: `Chapter 11 in Cooper, Heron, and Heward introduces positive reinforcement—the process by which contingent presentation of a stimulus following a response increases the future probability of that response under similar conditions. "Positive" describes addition of a stimulus, not moral approval. Reprimands, attention, or sensory input can function as positive reinforcers if behavior increases.

Reinforcement is defined functionally by its effect on behavior, not by clinician intent or how pleasant the consequence appears. The analytic unit remains the three-term contingency: discriminative stimulus (SD) signals when reinforcement is available, the response occurs, and the reinforcing stimulus (SR) follows contingent on that response.

Cooper distinguishes unconditioned reinforcers (effective without prior learning, such as food and water), conditioned reinforcers (acquire function through pairing with established reinforcers), and generalized conditioned reinforcers (tokens, money, praise paired with many backup reinforcers and therefore effective across varied motivational states). Natural reinforcers occur in everyday routines; contrived reinforcers are arranged specifically for teaching.

Positive reinforcement can be socially mediated when another person delivers the consequence, or automatic when the response itself produces sensory or biological feedback without social mediation. Analysts must separate topography from function: the same-looking behavior may contact different reinforcers, and different forms may belong to one response class if they produce the same functional outcome.

Motivating operations affect reinforcer effectiveness. Deprivation establishes or increases reinforcer value; satiation (abolishing operations) reduces it. The Premack principle states that high-probability behaviors can reinforce low-probability behaviors when made contingent. Reinforcer assessment and preference checks identify idiosyncratic reinforcers before programming contingencies.

Applied procedures such as differential reinforcement of alternative behavior (DRA) combine positive reinforcement for desired responses with extinction or non-reinforcement for problem behavior. When multiple consequences follow a response and behavior increases, analysts may confirm reinforcement occurred while acknowledging that specific reinforcer identification requires further assessment.

Chapter 11 focuses on contingent stimulus presentation that strengthens behavior. Escape, avoidance, punishment, and schedule effects are developed in Chapters 12–15. For BCBA exam prep: verify future rate increase, classify added stimulus as SR, distinguish social versus automatic pathways, and name reinforcer type (unconditioned, conditioned, generalized conditioned).`,
  footnotes: {
    ch11_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 11 — positive reinforcement definition (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Positive = stimulus presentation; reinforcement = future behavior increase.",
        "Not quoted from CHH.",
      ],
    },
    ch11_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 11 — three-term contingency (SD-R-SR).",
        "Functional classification requires effect evidence.",
      ],
    },
    ch11_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 11 — unconditioned, conditioned, and generalized conditioned reinforcers.",
        "Backup reinforcer pairing establishes token and praise value.",
      ],
    },
    ch11_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 11 — socially mediated versus automatic reinforcement.",
        "Source of consequence determines pathway.",
      ],
    },
    ch11_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 11 — MO effects on reinforcer effectiveness; Premack principle; reinforcer assessment.",
        "Deprivation/satiation preview full MO treatment in Chapter 16.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch11_1" },
    { afterSentenceIndex: 2, ref: "ch11_2" },
    { afterSentenceIndex: 3, ref: "ch11_3" },
    { afterSentenceIndex: 4, ref: "ch11_4" },
    { afterSentenceIndex: 5, ref: "ch11_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 11 recap",
    intro:
      "Chapter 11 is about consequences that make behavior more likely: something is added after the response, and the behavior goes up. Your job is to prove the increase with data and name what was added—not whether it felt nice.",
    chunks: [
      {
        subtitle: "Positive = added, not good",
        segments: [
          {
            type: "text",
            text: "If a stimulus is presented after the behavior and the behavior increases, you have positive reinforcement—even when the stimulus looks like a reprimand or attention you'd call unpleasant ",
          },
          { type: "footnote", ref: "ch11_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Map the three-term contingency",
        segments: [
          {
            type: "text",
            text: "Write SD → response → reinforcing consequence. The SD tells the learner when reinforcement is available; the SR is what strengthens the response ",
          },
          { type: "footnote", ref: "ch11_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Know your reinforcer types",
        segments: [
          {
            type: "text",
            text: "Unconditioned reinforcers work without training; conditioned reinforcers are learned through pairing; generalized conditioned reinforcers (tokens, praise) work across many backups ",
          },
          { type: "footnote", ref: "ch11_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Social versus automatic",
        segments: [
          {
            type: "text",
            text: "Ask whether another person delivered the consequence or the behavior produced its own sensory feedback. Isolation tests often reveal automatic maintenance ",
          },
          { type: "footnote", ref: "ch11_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Check MO and assess preferences",
        segments: [
          {
            type: "text",
            text: "Hungry learners may work hard for edibles; satiated learners may not. Assess reinforcer preferences before assuming your chosen reward will function ",
          },
          { type: "footnote", ref: "ch11_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include equating positive with pleasant, calling NR or punishment reinforcement because a stimulus was involved, labeling without future rate increase, and declaring a specific reinforcer when multiple consequences are present without isolation data. Resolve them by checking effect direction, added versus removed stimulus, and whether assessment supports your reinforcer claim.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch11_v1: { label: "[V1]", lines: ["CHH Chapter 11 — positive reinforcement."] },
    ch11_v2: { label: "[V2]", lines: ["CHH Chapter 11 — unconditioned reinforcer."] },
    ch11_v3: { label: "[V3]", lines: ["CHH Chapter 11 — conditioned / generalized conditioned reinforcer."] },
    ch11_v4: { label: "[V4]", lines: ["CHH Chapter 11 — socially mediated vs automatic reinforcement."] },
    ch11_v5: { label: "[V5]", lines: ["CHH Chapter 11 — Premack principle."] },
    ch11_kc1: { label: "[KC1]", lines: ["Domain F: classify positive reinforcement from vignette evidence."] },
    ch11_kc2: { label: "[KC2]", lines: ["Domain C: measure rate change; document contingency and fidelity."] },
    ch11_kc3: { label: "[KC3]", lines: ["Domain E: reinforcer choice, assent, least restrictive reinforcement plans."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 11",
    intro: "Chapter 11 vocabulary only—escape, avoidance, and punishment are Chapters 12–15.",
    entries: [
      { term: "Positive reinforcement", definition: "Contingent presentation of stimulus following response; future frequency increases.", footnoteRef: "ch11_v1" },
      { term: "Unconditioned reinforcer", definition: "Reinforcer effective without prior pairing (e.g., food, water).", footnoteRef: "ch11_v2" },
      { term: "Conditioned reinforcer", definition: "Stimulus acquiring reinforcer function through pairing.", footnoteRef: "ch11_v3" },
      { term: "Generalized conditioned reinforcer", definition: "Paired with many backups; effective across MO states (tokens, praise).", footnoteRef: "ch11_v3" },
      { term: "Socially mediated reinforcement", definition: "Another person delivers reinforcing consequence contingent on behavior.", footnoteRef: "ch11_v4" },
      { term: "Automatic reinforcement", definition: "Response directly produces reinforcing sensory/biological consequence.", footnoteRef: "ch11_v4" },
      { term: "Premack principle", definition: "High-probability behavior reinforces low-probability behavior when contingent.", footnoteRef: "ch11_v5" },
      { term: "Contrived reinforcer", definition: "Deliberately arranged stimulus used to strengthen target behavior.", footnoteRef: "ch11_v1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 11",
    intro: "Classify by future behavior effect and added stimulus—then identify reinforcer type and source.",
    concepts: [
      {
        title: "Functional definition of reinforcement",
        segments: [
          { type: "text", text: "Future increase in responding defines reinforcement; intent and appearance are insufficient " },
          { type: "footnote", ref: "ch11_v1" },
          { type: "footnote", ref: "ch11_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Reinforcer types and assessment",
        segments: [
          { type: "text", text: "Unconditioned, conditioned, and generalized conditioned reinforcers require different programming; assess idiosyncratic preferences " },
          { type: "footnote", ref: "ch11_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Social versus automatic pathways",
        segments: [
          { type: "text", text: "Determine whether another agent mediates the consequence or the response produces its own feedback " },
          { type: "footnote", ref: "ch11_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "MO and Premack in practice",
        segments: [
          { type: "text", text: "Deprivation and satiation shift reinforcer power; high-probability activities can reinforce skill acquisition when contingent " },
          { type: "footnote", ref: "ch11_v5" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each definition to Chapter 11 positive reinforcement vocabulary—reject escape, avoidance, and punishment labels (Chapters 12–15).",
  matchActivityInstructions:
    "Select the reinforcer type, pathway (social vs automatic), or contingency label that best fits Cooper Chapter 11.",
  chainActivityInstructions:
    "Sequence positive reinforcement programming: define response → assess reinforcers/MO → establish SD → deliver contingent SR → monitor rate change and adjust.",
  mts: [
    {
      sample_stimulus: "Stickers delivered after each correct math problem; correct responding increases over weeks.",
      comparison_options: [
        "Positive reinforcement (contrived, socially mediated)",
        "Negative reinforcement escape",
        "Positive punishment",
        "Extinction",
      ],
      correct_match: "Positive reinforcement (contrived, socially mediated)",
      error_feedback: "Added stimulus contingent on correct responses increased behavior—positive reinforcement.",
    },
    {
      sample_stimulus: "Loud reprimands follow blurting; blurting becomes more frequent.",
      comparison_options: [
        "Positive reinforcement via socially mediated attention",
        "Positive punishment",
        "Negative reinforcement avoidance",
        "Automatic punishment",
      ],
      correct_match: "Positive reinforcement via socially mediated attention",
      error_feedback: "Behavior increased after added social stimulus—positive reinforcement regardless of valence.",
    },
    {
      sample_stimulus: "Hand mouthing produces oral sensation; behavior persists alone in empty room at same rate.",
      comparison_options: [
        "Automatic positive reinforcement",
        "Socially mediated positive reinforcement only",
        "Negative reinforcement escape",
        "Positive punishment",
      ],
      correct_match: "Automatic positive reinforcement",
      error_feedback: "Sensory consequence produced directly by response without social mediation.",
    },
    {
      sample_stimulus: "Tokens exchangeable for multiple backup items; tokens maintain responding across sessions.",
      comparison_options: [
        "Generalized conditioned reinforcer",
        "Unconditioned reinforcer only",
        "S-delta",
        "Positive punishment",
      ],
      correct_match: "Generalized conditioned reinforcer",
      error_feedback: "Tokens paired with varied backups—generalized conditioned reinforcer.",
    },
    {
      sample_stimulus: "Free iPad time contingent on homework completion; homework completion rises.",
      comparison_options: [
        "Positive reinforcement / Premack arrangement",
        "Negative punishment",
        "Escape from homework",
        "Extinction",
      ],
      correct_match: "Positive reinforcement / Premack arrangement",
      error_feedback: "High-probability activity added contingent on low-probability behavior—reinforcement.",
    },
    {
      sample_stimulus: "After large snack, edible reinforcers no longer increase correct responding.",
      comparison_options: [
        "Satiation (abolishing operation)",
        "Positive punishment",
        "Establishing operation",
        "Extinction of skill",
      ],
      correct_match: "Satiation (abolishing operation)",
      error_feedback: "Recent access reduced reinforcer effectiveness—MO shift.",
    },
    {
      sample_stimulus: "Green card on desk means praise follows on-task behavior; yellow means praise withheld.",
      comparison_options: [
        "Green = SD for reinforcement; yellow = extinction/S-delta for that contingency",
        "Both are reinforcers",
        "Green = punishment signal",
        "Respondent pairing only",
      ],
      correct_match: "Green = SD for reinforcement; yellow = extinction/S-delta for that contingency",
      error_feedback: "SD signals when reinforcement is available for the response class.",
    },
    {
      sample_stimulus: "Screaming increases after parent delivers massage and reprimands; data do not isolate which consequence maintains screaming.",
      comparison_options: [
        "Reinforcement confirmed by rate increase; specific reinforcer requires further assessment",
        "Definitely automatic reinforcement only",
        "Definitely punishment because reprimands are aversive",
        "Not reinforcement",
      ],
      correct_match: "Reinforcement confirmed by rate increase; specific reinforcer requires further assessment",
      error_feedback: "Effect confirms reinforcement; compound consequences require isolation before naming maintainer.",
    },
  ],
  chainTitle: "Positive reinforcement programming",
  chainFragments: [
    { id: "a", text: "Operationally define target response and measure baseline rate." },
    { id: "b", text: "Conduct reinforcer assessment; note MO (deprivation/satiation)." },
    { id: "c", text: "Establish SD and deliver chosen SR contingent on response." },
    { id: "d", text: "Monitor rate change; adjust reinforcer, MO, or contingency if behavior does not increase." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Positive reinforcement", back: "Added stimulus increases future responding." },
    { front: "Conditioned reinforcer", back: "Learned through pairing." },
    { front: "Generalized SR", back: "Paired with many backups." },
    { front: "Automatic reinforcement", back: "Response produces own consequence." },
    { front: "Premack principle", back: "High-prob behavior reinforces low-prob." },
    { front: "SD", back: "Signals reinforcement availability." },
  ],
  worksheet: {
    title: "CHH Chapter 11 — positive reinforcement",
    instructions:
      "Classify each scenario as positive reinforcement (and name pathway/reinforcer type when possible). Escape, avoidance, and punishment belong to later chapters—use them only as rejected distractors.",
    scenario:
      "Scenario A — Stickers after each correct response; accuracy climbs over two weeks.",
    scenario_follow_up:
      "Scenario B — Reprimands follow blurting; blurting increases.\n\nScenario C — Skin picking persists at equal rates when alone with no demands.\n\nScenario D — Tokens exchanged for varied backup items maintain work completion.\n\nScenario E — After large lunch, edible reinforcers no longer increase responding.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Classification?",
        options: [
          "Positive reinforcement (contrived, socially mediated)",
          "Negative reinforcement escape",
          "Positive punishment",
          "Negative punishment",
        ],
        correct: "Positive reinforcement (contrived, socially mediated)",
      },
      {
        id: "response_2",
        label: "Scenario B · Classification?",
        options: [
          "Positive reinforcement (socially mediated)",
          "Positive punishment",
          "Negative reinforcement avoidance",
          "Extinction",
        ],
        correct: "Positive reinforcement (socially mediated)",
      },
      {
        id: "response_3",
        label: "Scenario C · Most plausible maintainer?",
        options: [
          "Automatic positive reinforcement",
          "Socially mediated positive reinforcement only",
          "Negative reinforcement escape",
          "Positive punishment",
        ],
        correct: "Automatic positive reinforcement",
      },
      {
        id: "response_4",
        label: "Scenario D · Token function?",
        options: [
          "Generalized conditioned reinforcer",
          "Unconditioned reinforcer only",
          "S-delta",
          "Aversive stimulus",
        ],
        correct: "Generalized conditioned reinforcer",
      },
      {
        id: "response_5",
        label: "Scenario E · Best explanation?",
        options: [
          "Satiation (abolishing operation)",
          "Positive punishment",
          "Establishing operation",
          "Extinction of skill",
        ],
        correct: "Satiation (abolishing operation)",
      },
      {
        id: "response_6",
        label: "Positive reinforcement ALWAYS involves:",
        options: [
          "Future increase in behavior and contingent presentation of a stimulus",
          "Future decrease in behavior",
          "Removal of aversive stimuli",
          "Removal of reinforcers",
        ],
        correct: "Future increase in behavior and contingent presentation of a stimulus",
      },
      {
        id: "response_7",
        label: "Premack principle uses:",
        options: [
          "High-probability behavior to reinforce low-probability behavior",
          "Punishment to reinforce behavior",
          "Extinction only",
          "Respondent conditioning",
        ],
        correct: "High-probability behavior to reinforce low-probability behavior",
      },
      {
        id: "response_8",
        label: "Compound consequences and increased behavior—BEST analytic stance?",
        options: [
          "Confirm reinforcement by effect; isolate specific reinforcer before final functional label",
          "Label attention as maintainer without data",
          "Conclude punishment failed",
          "Deny reinforcement because reprimands feel aversive",
        ],
        correct: "Confirm reinforcement by effect; isolate specific reinforcer before final functional label",
      },
    ],
    remediationLog:
      "Rebuild Chapter 11 fluency: future rate up? → stimulus added? → social vs automatic → reinforcer type → MO check → isolate maintainer if multiple consequences.",
  },
  bdsBank: CHAPTER_11_PR_QUIZ_BANK,
};
