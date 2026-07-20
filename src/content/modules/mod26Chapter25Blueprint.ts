import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_25_DIFFERENTIAL_REINFORCEMENT_QUIZ_BANK } from "@/content/modules/quiz/chapter25DifferentialReinforcementQuizBank";

export const MOD26_BLUEPRINT: ExtensionBlueprint = {
  id: "mod26",
  chapterNumber: 25,
  activityPrefix: 2260,
  title: "Differential Reinforcement",
  codexHeading: "READING — Chapter 25 (Differential Reinforcement)",
  codexIntro: `Chapter 25 in Cooper, Heron, and Heward covers differential reinforcement—procedures that thicken desirable response classes while thinning challenges by arranging reinforcement contingencies differentially. Cooper contrasts DRA, DRO, DRI, and DRL families, clarifying how schedule parameters, interval windows, and measurement definitions determine whether procedures deliver ethical alternatives versus masked punishment.

DRA (differential reinforcement of alternative behavior) reinforces an adaptive or incompatible alternative while withholding reinforcement for the challenge behavior. DRO (differential reinforcement of other behavior) reinforces intervals without the target topography—any behavior except the target earns reinforcement during the interval. DRI (differential reinforcement of incompatible behavior) reinforces a topography that physically blocks the challenge. DRL (differential reinforcement of low rates) reinforces lengthened spacing when reduction—not elimination—is clinically valid.

Design work specifies dimensionally accurate definitions of both target and deceleration responses, IOA on thin or intermittent targets, MO documentation when reinforcer values swing, and integrity that reinforcers truly follow targeted adaptive classes rather than sliding into arbitrary token economies or hollow praise.

Graphical logic pairs reinforced alternative trends with deceleration metrics, notes practical significance for stakeholders, and cautions when partial reinforcement histories render simple DRO or DRL manipulations messy interpretively.

Full-session DRO intervals spanning entire sessions risk coercion when reinforcement density punishes unavoidable lapses. DRO windows weaponized as coercive delays violate ethical guardrails—reinforcement must contact meaningfully during adaptive intervals.

Differential reinforcement pairs naturally with extinction (Chapter 24): extinction withholds reinforcer for target; DRA/DRO/DRI/DRL add reinforcement for alternatives or intervals. Confusing DR subtypes is a high-yield exam trap.

Guardrails prevent misleading claims that differential reinforcement substitutes for medical needs, honor assent-aware pacing during dense schedules, and keep transparent notes when procedures approximate omission control.

For BCBA exam prep: identify DR subtype, verify reinforcer delivery integrity, check both target and deceleration definitions, and monitor MO shifts before choosing an answer.`,
  footnotes: {
    ch25_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 25 — differential reinforcement overview (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "DRA, DRO, DRI, DRL families.",
        "Not quoted from CHH.",
      ],
    },
    ch25_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 25 — DRA and alternative behavior definition.",
        "Reinforce adaptive class; withhold target reinforcer.",
      ],
    },
    ch25_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 25 — DRO interval design.",
        "Reinforce intervals without target topography.",
      ],
    },
    ch25_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 25 — DRI and DRL distinctions.",
        "Incompatible topography vs low-rate spacing.",
      ],
    },
    ch25_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 25 — reinforcement fidelity, MO, ethical guardrails.",
        "Avoid omission-based coercion; assent-aware pacing.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch25_1" },
    { afterSentenceIndex: 1, ref: "ch25_2" },
    { afterSentenceIndex: 2, ref: "ch25_3" },
    { afterSentenceIndex: 3, ref: "ch25_4" },
    { afterSentenceIndex: 4, ref: "ch25_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 25 recap",
    intro:
      "Chapter 25 is about changing behavior by reinforcing what you want (or calm intervals) while not reinforcing the problem behavior—with definitions tight enough to prove the right thing is actually getting paid off.",
    chunks: [
      {
        subtitle: "DRA, DRO, DRI, DRL",
        segments: [
          {
            type: "text",
            text: "DRA pays for an alternative; DRO pays for time without the target behavior; DRI pays for a physically incompatible response; DRL pays for slower rates when full elimination is not the goal ",
          },
          { type: "footnote", ref: "ch25_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Definitions and integrity",
        segments: [
          {
            type: "text",
            text: "Define both the behavior you are trying to reduce and the behavior or interval you are reinforcing. Log MO shifts and verify reinforcers actually land on the adaptive class—not empty praise ",
          },
          { type: "footnote", ref: "ch25_2" },
          { type: "footnote", ref: "ch25_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "DRO coercion trap",
        segments: [
          {
            type: "text",
            text: "If intervals are long and reinforcement is rare, DRO can feel like punishment. Full-session DRO with vanishing reinforcement density is a red flag ",
          },
          { type: "footnote", ref: "ch25_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Graph both sides",
        segments: [
          {
            type: "text",
            text: "Track alternative acceleration and challenge deceleration together. Partial reinforcement histories can muddy simple DRO/DRL stories—document MO and integrity ",
          },
          { type: "footnote", ref: "ch25_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include confusing DRA, DRO, DRI, and DRL, implementing DRO without meaningful reinforcement density, claiming DRA success without alternative behavior definition, and ignoring MO shifts during DR procedures. Resolve them by identifying the DR subtype, checking reinforcer delivery integrity, and verifying both target and deceleration definitions before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch25_v1: { label: "[V1]", lines: ["CHH Chapter 25 — DRA."] },
    ch25_v2: { label: "[V2]", lines: ["CHH Chapter 25 — DRO."] },
    ch25_v3: { label: "[V3]", lines: ["CHH Chapter 25 — DRI."] },
    ch25_v4: { label: "[V4]", lines: ["CHH Chapter 25 — DRL."] },
    ch25_v5: { label: "[V5]", lines: ["CHH Chapter 25 — full-session DRO caveat."] },
    ch25_v6: { label: "[V6]", lines: ["CHH Chapter 25 — alternative reinforcement fidelity."] },
    ch25_kc1: { label: "[KC1]", lines: ["Domain F: DR subtype discrimination drives item logic."] },
    ch25_kc2: { label: "[KC2]", lines: ["Domain C: dual graphs, IOA, MO overlays."] },
    ch25_kc3: { label: "[KC3]", lines: ["Domain E: omission coercion, assent, medical limits."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 25",
    intro: "Chapter 25 differential reinforcement—antecedent interventions are Chapter 26.",
    entries: [
      { term: "DRA", definition: "Differential reinforcement of alternative behavior—densifies adaptive repertoire.", footnoteRef: "ch25_v1" },
      { term: "DRO", definition: "Differential reinforcement of other behavior—reinforces intervals without target topography.", footnoteRef: "ch25_v2" },
      { term: "DRI", definition: "Differential reinforcement of incompatible behavior—topography blocks challenge.", footnoteRef: "ch25_v3" },
      { term: "DRL", definition: "Differential reinforcement of low rates—reinforces lengthened spacing.", footnoteRef: "ch25_v4" },
      { term: "Full-session DRO caveat", definition: "Interval spanning entire sessions risks coercion if reinforcement density punishes lapses.", footnoteRef: "ch25_v5" },
      { term: "Alternative reinforcement fidelity", definition: "Verified delivery of enriched reinforcer for targeted adaptive class.", footnoteRef: "ch25_v6" },
      { term: "Omission-based coercion", definition: "Sparse reinforcement during DR intervals functioning as punishment.", footnoteRef: "ch25_v5" },
      { term: "Deceleration metric", definition: "Measurement of challenge behavior reduction alongside alternative acceleration.", footnoteRef: "ch25_kc2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 25",
    intro: "DR subtypes, dual measurement, MO, ethical interval design.",
    concepts: [
      {
        title: "DRA, DRO, DRI, DRL discrimination",
        segments: [
          { type: "text", text: "Match subtype to clinical goal—alternative, interval, incompatible, or low-rate spacing " },
          { type: "footnote", ref: "ch25_v1" },
          { type: "footnote", ref: "ch25_v2" },
          { type: "footnote", ref: "ch25_v3" },
          { type: "footnote", ref: "ch25_v4" },
          { type: "footnote", ref: "ch25_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Operational definitions and IOA",
        segments: [
          { type: "text", text: "Define target and deceleration classes dimensionally; IOA on thin intermittent targets " },
          { type: "footnote", ref: "ch25_v6" },
          { type: "footnote", ref: "ch25_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Dual-graph logic and partial histories",
        segments: [
          { type: "text", text: "Pair alternative acceleration with challenge deceleration; note messy partial reinforcement histories " },
          { type: "footnote", ref: "ch25_4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical guardrails for DR intervals",
        segments: [
          { type: "text", text: "Meaningful reinforcement density, assent-aware pacing, no weaponized DRO delays " },
          { type: "footnote", ref: "ch25_v5" },
          { type: "footnote", ref: "ch25_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 25 DR vocabulary or reject if the stem describes pure extinction without alternative reinforcement, punishment-only deceleration, or undefined alternative behavior.",
  matchActivityInstructions:
    "Select DR subtype, reinforcement density fix, dual-graph interpretation, or ethical interval redesign for Cooper Chapter 25.",
  chainActivityInstructions:
    "Sequence DR workflow: operationalize target and deceleration classes → select DR tactic → graph acceleration and deceleration with MO/integrity overlays → review social validity and assent.",
  mts: [
    {
      sample_stimulus: "Team implements DRO; reinforcers arrive rarely even when intervals clean.",
      comparison_options: [
        "Schedule may function as omission coercion—fix reinforcement density and humane spacing",
        "Proof of automatic mastery",
        "Ignore because behavior decreased",
        "Replace with punishment exclusively",
      ],
      correct_match: "Schedule may function as omission coercion—fix reinforcement density and humane spacing",
      error_feedback: "Reinforcement must contact meaningfully.",
    },
    {
      sample_stimulus: "DRA schedules lean; alternatives rarely contact reinforcement while challenge falls.",
      comparison_options: [
        "Unintentional omission-based coercion—densify reinforcement and watch interval burdens",
        "Proof thin DR always humane",
        "Delete deceleration metrics",
        "Replace DR with punishment only",
      ],
      correct_match: "Unintentional omission-based coercion—densify reinforcement and watch interval burdens",
      error_feedback: "Correct action: Unintentional omission-based coercion—densify reinforcement and watch interval burdens",
    },
    {
      sample_stimulus: "Full-session DRO; vanishing reinforcement density; learner tears; team doubles down.",
      comparison_options: [
        "Revisit humane interval design—verify meaningful reinforcement before escalating",
        "Extend painful intervals for grit",
        "Ignore assent",
        "Delete graphs",
      ],
      correct_match: "Revisit humane interval design—verify meaningful reinforcement before escalating",
      error_feedback: "Correct action: Revisit humane interval design—verify meaningful reinforcement before escalating",
    },
    {
      sample_stimulus: "Reinforce hands-on-desk; hands cannot simultaneously hit peer.",
      comparison_options: [
        "DRI—incompatible topography",
        "DRO interval only",
        "DRL low rate",
        "Pure extinction",
      ],
      correct_match: "DRI—incompatible topography",
      error_feedback: "Physical incompatibility.",
    },
    {
      sample_stimulus: "Reinforce mand for break instead of tantrum.",
      comparison_options: [
        "DRA—alternative adaptive behavior",
        "DRO only",
        "DRL",
        "Positive punishment",
      ],
      correct_match: "DRA—alternative adaptive behavior",
      error_feedback: "Alternative reinforced.",
    },
    {
      sample_stimulus: "Reinforce any 30-second interval without stereotypy.",
      comparison_options: [
        "DRO—interval without target topography",
        "DRA alternative",
        "DRI incompatible",
        "Extinction only",
      ],
      correct_match: "DRO—interval without target topography",
      error_feedback: "Other behavior interval.",
    },
    {
      sample_stimulus: "Goal is fewer requests per hour—not zero requests.",
      comparison_options: [
        "DRL—low rate reinforcement",
        "DRO always",
        "DRA only",
        "Extinction",
      ],
      correct_match: "DRL—low rate reinforcement",
      error_feedback: "Reduction not elimination.",
    },
    {
      sample_stimulus: "Team claims DRA success but never defined alternative behavior.",
      comparison_options: [
        "Definition gap—operationalize alternative before mastery claims",
        "Accept from deceleration graph alone",
        "Punish target only",
        "Skip IOA",
      ],
      correct_match: "Definition gap—operationalize alternative before mastery claims",
      error_feedback: "Dual definition required.",
    },
  ],
  chainTitle: "Differential reinforcement setup",
  chainFragments: [
    { id: "a", text: "Operationalize dimensions for target and decelerated classes with consensus." },
    { id: "b", text: "Select DR tactic matching clinical goals—not generic checklists blindly." },
    { id: "c", text: "Graph both acceleration and deceleration with MO and integrity overlays." },
    { id: "d", text: "Review social validity and assent when intervals feel punishing to learners." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "DRA", back: "Reinforce alternative." },
    { front: "DRO", back: "Reinforce interval without target." },
    { front: "DRI", back: "Reinforce incompatible form." },
    { front: "DRL", back: "Reinforce low rate." },
    { front: "Fidelity", back: "Reinforcer hits adaptive class." },
    { front: "Coercion check", back: "Density + assent review." },
  ],
  worksheet: {
    title: "CHH Chapter 25 — differential reinforcement",
    instructions:
      "Classify DR subtype, identify coercion risks, dual-graph interpretation, and ethical interval response.",
    scenario:
      "Scenario A — DRO implemented; reinforcers rare despite clean intervals.",
    scenario_follow_up:
      "Scenario B — DRA lean; alternatives rarely reinforced; challenge falls.\n\nScenario C — Full-session DRO; tears; team doubles interval expectations.\n\nScenario D — Reinforce hands-on-desk to block hitting.\n\nScenario E — Team claims DRA success without defining alternative.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Immediate concern?",
        options: ["Omission coercion—fix reinforcement density", "Automatic mastery", "Ignore decrease"],
        correct: "Omission coercion—fix reinforcement density",
      },
      {
        id: "response_2",
        label: "Scenario B · Looming concern?",
        options: ["Unintentional omission coercion—densify reinforcement", "Thin DR always humane", "Delete deceleration metrics"],
        correct: "Unintentional omission coercion—densify reinforcement",
      },
      {
        id: "response_3",
        label: "Scenario C · Ethical priority?",
        options: ["Revisit humane interval design", "Extend painful intervals", "Ignore assent"],
        correct: "Revisit humane interval design",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["DRI", "DRO only", "DRL"],
        correct: "DRI",
      },
      {
        id: "response_5",
        label: "Scenario E · Fix?",
        options: ["Operationalize alternative behavior", "Accept deceleration only", "Punish target"],
        correct: "Operationalize alternative behavior",
      },
      {
        id: "response_6",
        label: "DRA means:",
        options: ["Reinforce alternative behavior", "Reinforce any interval", "Reinforce low rate only"],
        correct: "Reinforce alternative behavior",
      },
      {
        id: "response_7",
        label: "DRO means:",
        options: ["Reinforce intervals without target topography", "Reinforce incompatible form only", "Extinction only"],
        correct: "Reinforce intervals without target topography",
      },
      {
        id: "response_8",
        label: "Ethical DR prioritizes:",
        options: ["Meaningful reinforcement density, assent, dual definitions", "Weaponized long intervals", "Undefined alternatives"],
        correct: "Meaningful reinforcement density, assent, dual definitions",
      },
    ],
    remediationLog:
      "Rebuild Chapter 25 fluency: DR subtype? → target + alternative/interval defined? → reinforcer fidelity? → dual graphs? → MO shift? → coercion/assent check?",
  },
  bdsBank: CHAPTER_25_DIFFERENTIAL_REINFORCEMENT_QUIZ_BANK,
};
