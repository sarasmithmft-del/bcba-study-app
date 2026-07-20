import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_13_SCHEDULES_QUIZ_BANK } from "@/content/modules/quiz/chapter13SchedulesQuizBank";

export const MOD34_BLUEPRINT: ExtensionBlueprint = {
  id: "mod34",
  chapterNumber: 13,
  activityPrefix: 2340,
  title: "Schedules of Reinforcement",
  codexHeading: "READING — Chapter 13 (Schedules of Reinforcement)",
  codexIntro: `Chapter 13 in Cooper, Heron, and Heward explains how schedules of reinforcement—the rules specifying when reinforcement follows responding—shape response rate, pausing, burstiness, and resistance to extinction. Schedules do not replace the reinforcement processes defined in Chapters 11–12; they arrange when those consequences occur. Analysts translate narrative vignettes into schedule notation (FR, VR, FI, VI) and predict graph patterns from that notation.

Continuous reinforcement (CRF) delivers reinforcement for every response and is common during initial acquisition. Intermittent (partial) schedules reinforce only some responses and generally produce greater resistance to extinction than CRF histories.

Ratio schedules base reinforcement on number of responses. Fixed ratio (FR) delivers reinforcement after a fixed number of responses and produces high, steady rates with a characteristic post-reinforcement pause after each delivery—the pause lengthens as ratio size increases. Variable ratio (VR) delivers reinforcement after a varying number of responses averaging a criterion, producing high steady rates with minimal pausing and strong resistance to extinction (the classic slot-machine pattern).

Interval schedules base reinforcement on time. Fixed interval (FI) delivers reinforcement for the first response after a fixed time period, producing a scalloped pattern with low responding early in the interval and acceleration near the end. Variable interval (VI) uses variable time periods averaging a criterion and yields moderate, relatively steady responding without sharp scalloping.

Concurrent schedules make two or more reinforcement contingencies available simultaneously. The matching law describes how relative rates of responding often align with relative rates of reinforcement across alternatives when substitutable. Schedule thinning systematically shifts from denser to leaner schedules while monitoring performance, MO context, and graph patterns—misreading FR post-reinforcement pauses as noncompliance or punishment is a common clinical error.

For BCBA exam prep: identify response versus time requirement, fixed versus variable, predict pause/scallop/resistance signatures, and link thinning plans to fidelity-visible data—not motivation labels.`,
  footnotes: {
    ch13_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 13 — schedules of reinforcement (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Schedules arrange when reinforcement occurs.",
        "Not quoted from CHH.",
      ],
    },
    ch13_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 13 — ratio schedules (FR, VR) and post-reinforcement pause.",
        "Response-count requirement defines ratio.",
      ],
    },
    ch13_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 13 — interval schedules (FI, VI) and scalloping.",
        "Time requirement defines interval.",
      ],
    },
    ch13_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 13 — concurrent schedules and matching law.",
        "Choice analyzed via relative rates.",
      ],
    },
    ch13_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 13 — schedule thinning and partial reinforcement effects.",
        "Intermittent schedules increase resistance to extinction.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch13_1" },
    { afterSentenceIndex: 3, ref: "ch13_2" },
    { afterSentenceIndex: 4, ref: "ch13_3" },
    { afterSentenceIndex: 5, ref: "ch13_4" },
    { afterSentenceIndex: 6, ref: "ch13_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 13 recap",
    intro:
      "Chapter 13 is about the rules for when reinforcement happens—and those rules create predictable patterns on graphs. Learn the abbreviations (FR, VR, FI, VI) and what pauses and scallops mean.",
    chunks: [
      {
        subtitle: "Ratio = responses; interval = time",
        segments: [
          {
            type: "text",
            text: "Ask first: does reinforcement depend on how many responses occurred (ratio) or how much time passed (interval)? Then ask fixed or variable ",
          },
          { type: "footnote", ref: "ch13_2" },
          { type: "footnote", ref: "ch13_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "FR pause is not punishment",
        segments: [
          {
            type: "text",
            text: "After FR reinforcement, a brief pause then steady responding is normal—the pause grows with larger ratios. Do not treat it as defiance ",
          },
          { type: "footnote", ref: "ch13_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "VR = slot machine; FI = scallop",
        segments: [
          {
            type: "text",
            text: "VR sustains high rates with minimal pausing and tough extinction. FI shows low rate early in the interval then surge near the timer ",
          },
          { type: "footnote", ref: "ch13_2" },
          { type: "footnote", ref: "ch13_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Concurrent choice and thinning",
        segments: [
          {
            type: "text",
            text: "When two reinforcers are available, learners usually shift responses toward the richer option (matching). Thin schedules gradually with data—not overnight extinction ",
          },
          { type: "footnote", ref: "ch13_4" },
          { type: "footnote", ref: "ch13_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include confusing ratio with interval, misreading FR pauses as punishment, calling VR high rate motivation instead of schedule control, and ignoring concurrent choice. Resolve them by translating the vignette to schedule notation before answering.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch13_v1: { label: "[V1]", lines: ["CHH Chapter 13 — continuous reinforcement (CRF)."] },
    ch13_v2: { label: "[V2]", lines: ["CHH Chapter 13 — fixed ratio (FR)."] },
    ch13_v3: { label: "[V3]", lines: ["CHH Chapter 13 — variable ratio (VR)."] },
    ch13_v4: { label: "[V4]", lines: ["CHH Chapter 13 — fixed interval (FI)."] },
    ch13_v5: { label: "[V5]", lines: ["CHH Chapter 13 — variable interval (VI)."] },
    ch13_v6: { label: "[V6]", lines: ["CHH Chapter 13 — matching law / concurrent schedules."] },
    ch13_kc1: { label: "[KC1]", lines: ["Domain F: translate vignette to schedule notation and predict pattern."] },
    ch13_kc2: { label: "[KC2]", lines: ["Domain C: graph pauses/scallops with fidelity-visible thinning data."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 13",
    intro: "Master FR, VR, FI, VI notation and the graph pattern each produces.",
    entries: [
      { term: "Continuous reinforcement (CRF)", definition: "Reinforcement for every response.", footnoteRef: "ch13_v1" },
      { term: "Fixed ratio (FR)", definition: "Reinforcement after fixed number of responses; post-reinforcement pause.", footnoteRef: "ch13_v2" },
      { term: "Variable ratio (VR)", definition: "Reinforcement after varying responses averaging criterion; high rate, strong extinction resistance.", footnoteRef: "ch13_v3" },
      { term: "Fixed interval (FI)", definition: "First response after fixed time reinforced; scalloped pattern.", footnoteRef: "ch13_v4" },
      { term: "Variable interval (VI)", definition: "First response after variable time averaging criterion; moderate steady rate.", footnoteRef: "ch13_v5" },
      { term: "Concurrent schedules", definition: "Two+ contingencies available simultaneously—choice behavior.", footnoteRef: "ch13_v6" },
      { term: "Schedule thinning", definition: "Systematic shift to leaner schedules while monitoring performance.", footnoteRef: "ch13_kc2" },
      { term: "Partial reinforcement", definition: "Intermittent schedule—some but not all responses reinforced.", footnoteRef: "ch13_v5" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 13",
    intro: "Notation → pattern prediction → applied thinning with graphs.",
    concepts: [
      {
        title: "Ratio versus interval dimension",
        segments: [
          { type: "text", text: "Response count (ratio) versus time (interval) is the first discrimination on every schedule stem " },
          { type: "footnote", ref: "ch13_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Signature patterns",
        segments: [
          { type: "text", text: "FR pause after reinforcement; FI scallop toward interval end; VR high steady rate with minimal pause " },
          { type: "footnote", ref: "ch13_v2" },
          { type: "footnote", ref: "ch13_v3" },
          { type: "footnote", ref: "ch13_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Partial reinforcement and extinction",
        segments: [
          { type: "text", text: "Intermittent histories typically resist extinction more than CRF—especially VR " },
          { type: "footnote", ref: "ch13_v5" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Matching and thinning",
        segments: [
          { type: "text", text: "Concurrent choice follows relative reinforcement rates; thin schedules with data and interpret pauses correctly " },
          { type: "footnote", ref: "ch13_v6" },
          { type: "footnote", ref: "ch13_kc2" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each schedule abbreviation to its requirement (responses vs time) and characteristic graph pattern.",
  matchActivityInstructions:
    "Select the schedule notation or pattern description that best fits Cooper Chapter 13.",
  chainActivityInstructions:
    "Sequence schedule analysis: extract response/time requirement → name FR/VR/FI/VI → predict pause/scallop/resistance → link to thinning or maintenance interpretation.",
  mts: [
    {
      sample_stimulus: "Reinforcement after every 5th correct response; brief pause after each reinforcer then steady work.",
      comparison_options: ["FR 5 with post-reinforcement pause", "FI 5 minutes with scalloping", "VI schedule", "Extinction"],
      correct_match: "FR 5 with post-reinforcement pause",
      error_feedback: "Fixed response requirement with characteristic FR pause.",
    },
    {
      sample_stimulus: "Unpredictable number of responses averaging 20 before jackpot; high steady rate, minimal pausing.",
      comparison_options: ["VR schedule", "FR 20 only", "FI 20", "CRF"],
      correct_match: "VR schedule",
      error_feedback: "Variable ratio slot-machine pattern.",
    },
    {
      sample_stimulus: "Low responding early in 2-minute window, then surge just before timer ends.",
      comparison_options: ["FI 2-minute scallop", "FR 2", "VR 2", "CRF"],
      correct_match: "FI 2-minute scallop",
      error_feedback: "Acceleration near interval end is FI signature.",
    },
    {
      sample_stimulus: "Moderate steady responding when reinforcement times vary around 30-second average.",
      comparison_options: ["VI (mean ~30 s)", "FI 30 s", "FR 30", "Extinction"],
      correct_match: "VI (mean ~30 s)",
      error_feedback: "Variable time-based schedule with moderate steady rate.",
    },
    {
      sample_stimulus: "Two activities available; learner spends more time on option delivering twice the reinforcement rate.",
      comparison_options: ["Concurrent schedules / matching law", "Simple FR only", "Respondent conditioning", "Punishment trap"],
      correct_match: "Concurrent schedules / matching law",
      error_feedback: "Choice across simultaneous contingencies.",
    },
    {
      sample_stimulus: "Team moves token economy from FR 2 to FR 5; pauses lengthen but overall rate stays high.",
      comparison_options: ["Expected FR thinning pattern—monitor MO", "Proof punishment started", "Extinction", "FI scallop"],
      correct_match: "Expected FR thinning pattern—monitor MO",
      error_feedback: "Leaner FR increases post-reinforcement pause length.",
    },
    {
      sample_stimulus: "Brief pause after each token delivery on FR 3; teacher labels pause as defiance.",
      comparison_options: ["Misinterpretation—pause is schedule-controlled FR pattern", "Proof of positive punishment", "FI scallop", "Automatic NR"],
      correct_match: "Misinterpretation—pause is schedule-controlled FR pattern",
      error_feedback: "FR pause is not noncompliance by default.",
    },
    {
      sample_stimulus: "Every correct response reinforced during first teaching sessions.",
      comparison_options: ["Continuous reinforcement (CRF)", "VR 1", "FI 1", "Extinction"],
      correct_match: "Continuous reinforcement (CRF)",
      error_feedback: "Every response reinforced = CRF.",
    },
  ],
  chainTitle: "Schedule interpretation ladder",
  chainFragments: [
    { id: "a", text: "Extract response requirement and time requirement from the vignette." },
    { id: "b", text: "Name ratio versus interval and fixed versus variable (FR/VR/FI/VI)." },
    { id: "c", text: "Predict pausing, scalloping, or resistance patterns on the graph." },
    { id: "d", text: "Link schedule to thinning plan or problem-behavior maintenance interpretation." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "FR", back: "Fixed ratio—pause after reinforcer." },
    { front: "VR", back: "Variable ratio—high rate, tough extinction." },
    { front: "FI", back: "Fixed interval—scallop." },
    { front: "VI", back: "Variable interval—steady moderate rate." },
    { front: "CRF", back: "Every response reinforced." },
    { front: "Matching law", back: "Response rate matches reinforcer rate." },
  ],
  worksheet: {
    title: "CHH Chapter 13 — schedules of reinforcement",
    instructions:
      "Translate each scenario to schedule notation and predict the graph pattern. FR pause ≠ punishment.",
    scenario:
      "Scenario A — Reinforcement after every 3rd correct response; brief pause then steady work.",
    scenario_follow_up:
      "Scenario B — Unpredictable responses averaging 15 before reinforcement; high steady rate.\n\nScenario C — Responding surges near end of 1-minute timer.\n\nScenario D — CRF during teaching, then shift to FR 4.\n\nScenario E — Two reinforcers available; more responses to richer option.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Schedule?",
        options: ["FR 3", "FI 3 min", "VI", "Extinction"],
        correct: "FR 3",
      },
      {
        id: "response_2",
        label: "Scenario A · Pattern?",
        options: ["Post-reinforcement pause", "FI scallop only", "Extinction burst", "No pattern"],
        correct: "Post-reinforcement pause",
      },
      {
        id: "response_3",
        label: "Scenario B · Schedule?",
        options: ["VR", "FR 15 fixed every time", "FI 15", "CRF"],
        correct: "VR",
      },
      {
        id: "response_4",
        label: "Scenario C · Schedule?",
        options: ["FI (or FI-like)", "FR", "VR", "CRF"],
        correct: "FI (or FI-like)",
      },
      {
        id: "response_5",
        label: "Scenario D · Programming move?",
        options: ["Schedule thinning from CRF to FR", "Extinction", "Punishment", "NR escape"],
        correct: "Schedule thinning from CRF to FR",
      },
      {
        id: "response_6",
        label: "Scenario E · Concept?",
        options: ["Concurrent schedules / matching", "Simple FR only", "Punishment", "Respondent elicitation"],
        correct: "Concurrent schedules / matching",
      },
      {
        id: "response_7",
        label: "Ratio vs interval—BEST distinction:",
        options: ["Ratio = response count; interval = time", "Both time-based", "Both identical", "Ratio = punishment"],
        correct: "Ratio = response count; interval = time",
      },
      {
        id: "response_8",
        label: "Intermittent vs CRF—extinction resistance:",
        options: ["Intermittent typically higher resistance", "CRF always higher", "No difference", "Extinction only on CRF"],
        correct: "Intermittent typically higher resistance",
      },
    ],
    remediationLog:
      "Rebuild Chapter 13 fluency: response or time? → fixed or variable? → FR pause / FI scallop / VR steady → thinning with graphs.",
  },
  bdsBank: CHAPTER_13_SCHEDULES_QUIZ_BANK,
};
