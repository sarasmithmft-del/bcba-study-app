import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_15_NP_QUIZ_BANK } from "@/content/modules/quiz/chapter15NegativePunishmentQuizBank";

export const MOD36_BLUEPRINT: ExtensionBlueprint = {
  id: "mod36",
  chapterNumber: 15,
  activityPrefix: 2360,
  title: "Negative Punishment",
  codexHeading: "READING — Chapter 15 (Negative Punishment)",
  codexIntro: `Chapter 15 in Cooper, Heron, and Heward defines negative punishment as contingent removal of a reinforcer following a response that decreases the future probability of that response under similar conditions. "Negative" means a reinforcer was removed, not that the procedure is mild or morally preferred. Punishment—like reinforcement—is defined functionally by its effect on behavior, not by clinician intent or how punitive the consequence appears.

Cooper stresses that the removed event must have functioned as reinforcement under relevant motivating operations, and that future rate of the punished response must decrease durably—not merely stop momentarily during the removal period. Without verified reinforcer function and rate reduction, analysts should not classify a procedure as negative punishment simply because something was taken away.

Negative punishment must be discriminated from positive punishment (adding a stimulus decreases behavior), extinction (withholding the maintaining reinforcer for the target response decreases behavior), and negative reinforcement (removing an aversive increases behavior). Board stems often describe token fines, loss of privileges, or timeout—decisive questions are whether a reinforcer was removed (not an aversive), whether removal was contingent on the response, and whether future rate decreased.

Response cost removes a specific amount of reinforcer per instance of target responding. Timeout removes access to reinforcement for a designated period contingent on responding. Both require operational definitions of what is removed, how much or how long, and fidelity monitoring under shifting MO conditions.

Cooper notes risks: punishment traps when attempted removal procedures increase problem behavior via escape negative reinforcement (timeout from aversive demands), inequitable access when MO shifts alter reinforcer value, and confusion between timeout and extinction. Ethical practice pairs negative punishment with proactive reinforcement for alternative behavior, transparent caregiver training, and data on both target and replacement responses.

Chapter 15 completes the consequence-analysis block with Chapters 11–14. For BCBA exam prep: verify reinforcer removal, verify durable rate decrease, discriminate timeout from extinction, and watch for escape-maintained punishment traps.`,
  footnotes: {
    ch15_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 15 — negative punishment definition (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Negative = reinforcer removal; punishment = future rate decrease.",
        "Not quoted from CHH.",
      ],
    },
    ch15_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 15 — response cost and timeout.",
        "Operational definitions of magnitude and duration required.",
      ],
    },
    ch15_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 15 — discrimination from PP, extinction, negative reinforcement.",
        "Removed stimulus type and rate effect are exam hinges.",
      ],
    },
    ch15_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 15 — punishment traps and escape during timeout.",
        "Side effects require analytic review.",
      ],
    },
    ch15_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 15 — alternative reinforcement, caregiver training, MO shifts.",
        "Least-restrictive practice applies to punishment.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch15_1" },
    { afterSentenceIndex: 2, ref: "ch15_1" },
    { afterSentenceIndex: 3, ref: "ch15_3" },
    { afterSentenceIndex: 4, ref: "ch15_2" },
    { afterSentenceIndex: 5, ref: "ch15_4" },
    { afterSentenceIndex: 6, ref: "ch15_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 15 recap",
    intro:
      "Chapter 15 is about consequences that make behavior less likely because something reinforcing was taken away after the response. 'Negative' means removed—not bad. You still need proof the removed item was actually a reinforcer and that behavior went down over time.",
    chunks: [
      {
        subtitle: "Removed reinforcer, rate down",
        segments: [
          {
            type: "text",
            text: "If a reinforcer is removed after the behavior and the behavior decreases in the future, you may have negative punishment—if the item was reinforcing and the decrease is durable ",
          },
          { type: "footnote", ref: "ch15_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Response cost and timeout",
        segments: [
          {
            type: "text",
            text: "Response cost takes a set amount per response (token fines). Timeout blocks access to reinforcement for a set time. Define exactly what, how much, and how long ",
          },
          { type: "footnote", ref: "ch15_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Not PP, not extinction, not NR",
        segments: [
          {
            type: "text",
            text: "PP adds stimuli. Extinction withholds the maintaining reinforcer. NR removes aversives and increases behavior. NP removes reinforcers and decreases behavior ",
          },
          { type: "footnote", ref: "ch15_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Punishment traps and timeout risks",
        segments: [
          {
            type: "text",
            text: "Timeout can backfire if it escapes from hard tasks—problem behavior may increase via NR. Watch MO shifts that change whether tokens or privileges still matter ",
          },
          { type: "footnote", ref: "ch15_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Alternatives and training",
        segments: [
          {
            type: "text",
            text: "Pair NP with reinforcement for replacement behavior. Train caregivers on consistent implementation. Try less restrictive options first ",
          },
          { type: "footnote", ref: "ch15_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include calling any penalty negative punishment, confusing timeout with extinction, ignoring whether the removed event was reinforcing, and missing punishment traps maintained by escape. Resolve them by confirming reinforcer function and future rate change.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch15_v1: { label: "[V1]", lines: ["CHH Chapter 15 — negative punishment."] },
    ch15_v2: { label: "[V2]", lines: ["CHH Chapter 15 — response cost."] },
    ch15_v3: { label: "[V3]", lines: ["CHH Chapter 15 — timeout."] },
    ch15_v4: { label: "[V4]", lines: ["CHH Chapter 15 — punishment trap."] },
    ch15_v5: { label: "[V5]", lines: ["CHH Chapter 15 — alternative reinforcement."] },
    ch15_kc1: { label: "[KC1]", lines: ["Domain F: removed reinforcer + rate decrease = NP when verified."] },
    ch15_kc2: { label: "[KC2]", lines: ["Domain E: NP paired with alternatives; monitor escape traps."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 15",
    intro: "Chapter 15 negative punishment only—positive punishment is Chapter 14.",
    entries: [
      { term: "Negative punishment", definition: "Contingent reinforcer removal decreasing future response probability.", footnoteRef: "ch15_v1" },
      { term: "Response cost", definition: "NP subtype removing specific reinforcer amount per response.", footnoteRef: "ch15_v2" },
      { term: "Timeout", definition: "Loss of access to reinforcement for designated period contingent on responding.", footnoteRef: "ch15_v3" },
      { term: "Loss of privilege", definition: "Contingent removal of preferred activity when it functioned as reinforcer.", footnoteRef: "ch15_v2" },
      { term: "Punishment trap", definition: "Attempted punishment increases problem behavior via escape or related contingencies.", footnoteRef: "ch15_v4" },
      { term: "Alternative reinforcement", definition: "Strengthening replacement responses while target behavior decreases.", footnoteRef: "ch15_v5" },
      { term: "Reinforcer verification", definition: "Confirming removed event functioned as SR under current MO.", footnoteRef: "ch15_v1" },
      { term: "MO shift", definition: "Change in establishing/abolishing operations altering reinforcer value.", footnoteRef: "ch15_v5" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 15",
    intro: "Removed reinforcer + verified rate decrease + timeout/response-cost safeguards.",
    concepts: [
      {
        title: "Functional definition of negative punishment",
        segments: [
          { type: "text", text: "Contingent reinforcer removal with durable future rate decrease—not any penalty or fine " },
          { type: "footnote", ref: "ch15_v1" },
          { type: "footnote", ref: "ch15_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Response cost and timeout",
        segments: [
          { type: "text", text: "Response cost = per-response removal; timeout = period without reinforcement access—both operationally defined " },
          { type: "footnote", ref: "ch15_v2" },
          { type: "footnote", ref: "ch15_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Discriminate four consequence processes",
        segments: [
          { type: "text", text: "NP removes reinforcer and decreases; PP adds and decreases; extinction withholds maintaining SR; NR removes aversive and increases " },
          { type: "footnote", ref: "ch15_3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Punishment traps and ethics",
        segments: [
          { type: "text", text: "Monitor escape during timeout, MO shifts, pair with alternative reinforcement, least-restrictive alternatives first " },
          { type: "footnote", ref: "ch15_4" },
          { type: "footnote", ref: "ch15_kc2" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each definition to negative punishment or reject if the process removes/adds wrong stimulus or wrong rate effect.",
  matchActivityInstructions:
    "Select the consequence classification, timeout/response-cost interpretation, or side-effect response for Cooper Chapter 15.",
  chainActivityInstructions:
    "Sequence negative punishment analysis: verify reinforcer function → specify removal magnitude/duration → confirm rate decrease → monitor traps and alternatives.",
  mts: [
    {
      sample_stimulus: "Two tokens removed per out-of-seat; tokens buy tablet time; out-of-seat decreases two weeks.",
      comparison_options: [
        "Negative punishment (response cost)",
        "Positive punishment",
        "Negative reinforcement",
        "Extinction",
      ],
      correct_match: "Negative punishment (response cost)",
      error_feedback: "Reinforcer removed contingent on behavior with durable rate decrease.",
    },
    {
      sample_stimulus: "Timeout from play area after hitting; hitting rate drops across sessions.",
      comparison_options: [
        "Negative punishment (timeout)",
        "Positive punishment",
        "Negative reinforcement",
        "Extinction only",
      ],
      correct_match: "Negative punishment (timeout)",
      error_feedback: "Access to reinforcement removed for period contingent on hitting.",
    },
    {
      sample_stimulus: "Timeout from math worksheet; problem behavior increases over two weeks.",
      comparison_options: [
        "Punishment trap—possible escape NR from demands",
        "Verified negative punishment",
        "Positive reinforcement",
        "Extinction",
      ],
      correct_match: "Punishment trap—possible escape NR from demands",
      error_feedback: "Timeout may remove learner from aversive task—rate increased.",
    },
    {
      sample_stimulus: "Attention withheld for attention-maintained whining; whining decreases.",
      comparison_options: [
        "Extinction (withholding maintaining reinforcer)",
        "Negative punishment (response cost)",
        "Positive punishment",
        "Negative reinforcement",
      ],
      correct_match: "Extinction (withholding maintaining reinforcer)",
      error_feedback: "Maintaining reinforcer withheld—not contingent removal of separate reinforcer.",
    },
    {
      sample_stimulus: "Token fine after blurting; blurting unchanged; tokens not exchangeable for anything.",
      comparison_options: [
        "Cannot verify NP—tokens may not function as reinforcers",
        "Verified negative punishment",
        "Positive punishment",
        "Negative reinforcement",
      ],
      correct_match: "Cannot verify NP—tokens may not function as reinforcers",
      error_feedback: "Reinforcer function must be verified before NP label.",
    },
    {
      sample_stimulus: "Dessert removed after tantrum; tantrums decrease across settings.",
      comparison_options: [
        "Negative punishment (loss of privilege/response cost)",
        "Positive punishment",
        "Negative reinforcement",
        "Extinction only",
      ],
      correct_match: "Negative punishment (loss of privilege/response cost)",
      error_feedback: "Reinforcer removed contingent on behavior with verified decrease.",
    },
    {
      sample_stimulus: "Removed reinforcer contingent on response; future rate decreased.",
      comparison_options: [
        "Negative punishment if reinforcer function verified",
        "Negative reinforcement",
        "Positive reinforcement",
        "Positive punishment",
      ],
      correct_match: "Negative punishment if reinforcer function verified",
      error_feedback: "Removed reinforcer + rate decrease = NP when verified.",
    },
    {
      sample_stimulus: "Team proposes token fines before trying DRA or antecedent modifications.",
      comparison_options: [
        "Violates least-restrictive alternative principle",
        "Best practice always",
        "Required first step",
        "IOA issue only",
      ],
      correct_match: "Violates least-restrictive alternative principle",
      error_feedback: "Reinforcement-based and antecedent strategies come first.",
    },
  ],
  chainTitle: "Negative punishment workflow",
  chainFragments: [
    { id: "a", text: "Verify the removed event functioned as reinforcement under current MO." },
    { id: "b", text: "Specify removal magnitude (response cost) or duration (timeout) operationally." },
    { id: "c", text: "Measure durable future rate decrease on target and growth on alternatives." },
    { id: "d", text: "Monitor for escape-maintained side effects, punishment traps, and MO shifts." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Negative punishment", back: "Removed reinforcer; rate down." },
    { front: "Response cost", back: "Per-response reinforcer removal." },
    { front: "Timeout", back: "Period without SR access." },
    { front: "Punishment trap", back: "Punishment increases problem behavior." },
    { front: "Extinction", back: "Withhold maintaining SR." },
    { front: "SR−", back: "Reinforcer removed." },
  ],
  worksheet: {
    title: "CHH Chapter 15 — negative punishment",
    instructions:
      "Classify removed-reinforcer consequences by future rate effect. Distinguish NP from PP, extinction, and negative reinforcement.",
    scenario:
      "Scenario A — Two tokens removed per out-of-seat; tokens buy tablet; out-of-seat down 3 weeks.",
    scenario_follow_up:
      "Scenario B — Timeout from play after hitting; hitting down 2 weeks.\n\nScenario C — Timeout from math; problem behavior up 2 weeks.\n\nScenario D — Attention withheld for attention-maintained whining; whining down.\n\nScenario E — Token fine; tokens not exchangeable; blurting unchanged.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Classification?",
        options: ["Negative punishment (response cost)", "Positive punishment", "Negative reinforcement", "Extinction"],
        correct: "Negative punishment (response cost)",
      },
      {
        id: "response_2",
        label: "Scenario B · Classification?",
        options: ["Negative punishment (timeout)", "Positive punishment", "Negative reinforcement", "Positive reinforcement"],
        correct: "Negative punishment (timeout)",
      },
      {
        id: "response_3",
        label: "Scenario C · BEST description?",
        options: ["Punishment trap—possible escape NR", "Verified NP", "Extinction", "Positive punishment"],
        correct: "Punishment trap—possible escape NR",
      },
      {
        id: "response_4",
        label: "Scenario D · Classification?",
        options: ["Extinction", "Negative punishment (response cost)", "Positive punishment", "Negative reinforcement"],
        correct: "Extinction",
      },
      {
        id: "response_5",
        label: "Scenario E · BEST conclusion?",
        options: ["Cannot verify NP—tokens may not be reinforcers", "Verified NP", "Positive punishment", "NR escape"],
        correct: "Cannot verify NP—tokens may not be reinforcers",
      },
      {
        id: "response_6",
        label: "NP ALWAYS involves:",
        options: [
          "Contingent removal of reinforcer with decreased future rate",
          "Added stimulus",
          "Removed aversive",
          "No rate change",
        ],
        correct: "Contingent removal of reinforcer with decreased future rate",
      },
      {
        id: "response_7",
        label: "Timeout differs from extinction because:",
        options: [
          "Timeout removes access for a period contingent on response; extinction withholds maintaining SR",
          "They are identical",
          "Timeout adds stimuli",
          "Extinction removes reinforcers per response",
        ],
        correct: "Timeout removes access for a period contingent on response; extinction withholds maintaining SR",
      },
      {
        id: "response_8",
        label: "Before NP, Cooper emphasizes:",
        options: [
          "Least-restrictive reinforcement-based alternatives first",
          "Maximum fines first",
          "Skip MO assessment",
          "No data on alternatives",
        ],
        correct: "Least-restrictive reinforcement-based alternatives first",
      },
    ],
    remediationLog:
      "Rebuild Chapter 15 fluency: reinforcer removed? → was it SR under MO? → rate down durable? → not PP/extinction/NR? → traps + alternatives.",
  },
  bdsBank: CHAPTER_15_NP_QUIZ_BANK,
};
