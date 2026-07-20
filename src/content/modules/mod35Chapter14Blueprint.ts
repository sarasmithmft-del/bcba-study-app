import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_14_PP_QUIZ_BANK } from "@/content/modules/quiz/chapter14PositivePunishmentQuizBank";

export const MOD35_BLUEPRINT: ExtensionBlueprint = {
  id: "mod35",
  chapterNumber: 14,
  activityPrefix: 2350,
  title: "Positive Punishment",
  codexHeading: "READING — Chapter 14 (Positive Punishment)",
  codexIntro: `Chapter 14 in Cooper, Heron, and Heward defines positive punishment as contingent presentation of a stimulus following a response that decreases the future probability of that response under similar conditions. "Positive" means a stimulus was added, not that the procedure is morally approved. Punishment—like reinforcement—is defined functionally by its effect on behavior, not by clinician intent or how aversive the consequence appears.

Cooper stresses that immediate suppression is insufficient evidence. A brief halt during or right after the punisher differs from a durable decrease in rate across sessions and settings. Without verified future rate reduction, analysts should not classify a procedure as punishment simply because it looks punitive.

Positive punishment must be discriminated from negative reinforcement (removing an aversive increases behavior), extinction (withholding the maintaining reinforcer decreases behavior), and negative punishment (removing a reinforcer decreases behavior). Board stems often embed aversive events; the decisive questions are whether a stimulus was added versus removed and whether future rate decreased or increased.

Applied forms include reprimands, contingent exercise, and overcorrection procedures (restitutional and positive practice variants) when implemented with operational definitions, fidelity monitoring, and consent-aligned safeguards. Overcorrection adds restitution or repeated correct behavior contingent on errors—classified as positive punishment when target behavior decreases.

Ethical practice treats punishment as a last resort after least-restrictive, reinforcement-based, and antecedent strategies. Analysts document side effects such as aggression, escape, or emotional responding; monitor unintended suppression of desirable behavior; and pair punishment with alternative reinforcement when punishment is used at all.

Chapter 14 pairs with Chapter 15 (negative punishment). For BCBA exam prep: verify added stimulus, verify durable rate decrease, reject "aversive = punishment" shortcuts, and know NR versus PP effect-direction traps.`,
  footnotes: {
    ch14_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 14 — positive punishment definition (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Positive = stimulus presentation; punishment = future rate decrease.",
        "Not quoted from CHH.",
      ],
    },
    ch14_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 14 — suppression versus durable rate decrease.",
        "Functional verification across time required.",
      ],
    },
    ch14_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 14 — discrimination from NR, extinction, negative punishment.",
        "Effect direction and stimulus operation are exam hinges.",
      ],
    },
    ch14_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 14 — overcorrection, reprimands, contingent exercise.",
        "Applied forms require fidelity and measurement.",
      ],
    },
    ch14_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 14 — ethics, side effects, least-restrictive alternatives.",
        "Reinforcement-based strategies prioritized.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch14_1" },
    { afterSentenceIndex: 2, ref: "ch14_2" },
    { afterSentenceIndex: 3, ref: "ch14_3" },
    { afterSentenceIndex: 4, ref: "ch14_4" },
    { afterSentenceIndex: 5, ref: "ch14_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 14 recap",
    intro:
      "Chapter 14 is about consequences that make behavior less likely because something was added after the response. 'Positive' means added—not good. You still need data showing the behavior actually went down over time.",
    chunks: [
      {
        subtitle: "Added stimulus, rate down",
        segments: [
          {
            type: "text",
            text: "If a stimulus is presented after the behavior and the behavior decreases in the future, you may have positive punishment—if the decrease is durable, not just a startle ",
          },
          { type: "footnote", ref: "ch14_1" },
          { type: "footnote", ref: "ch14_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Not NR, not extinction, not negative punishment",
        segments: [
          {
            type: "text",
            text: "NR removes aversives and increases behavior. Extinction withholds reinforcement. Negative punishment removes reinforcers. PP adds something and decreases behavior ",
          },
          { type: "footnote", ref: "ch14_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Overcorrection and reprimands",
        segments: [
          {
            type: "text",
            text: "Overcorrection adds restitution or repeated correct behavior after errors. Reprimands count only if rate actually drops—not because they are loud ",
          },
          { type: "footnote", ref: "ch14_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethics and side effects",
        segments: [
          {
            type: "text",
            text: "Try reinforcement and antecedent strategies first. Watch for aggression, escape, and suppression of good behavior. Document everything ",
          },
          { type: "footnote", ref: "ch14_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include calling any aversive punishment, confusing suppression with verified decrease, mixing PP with NR when aversives stop, and ignoring side effects. Resolve them by checking added versus removed stimulus and future rate direction.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch14_v1: { label: "[V1]", lines: ["CHH Chapter 14 — positive punishment."] },
    ch14_v2: { label: "[V2]", lines: ["CHH Chapter 14 — overcorrection."] },
    ch14_v3: { label: "[V3]", lines: ["CHH Chapter 14 — reprimand as punisher."] },
    ch14_v4: { label: "[V4]", lines: ["CHH Chapter 14 — side effects."] },
    ch14_v5: { label: "[V5]", lines: ["CHH Chapter 14 — least-restrictive alternative."] },
    ch14_kc1: { label: "[KC1]", lines: ["Domain F: added stimulus + rate decrease = PP when verified."] },
    ch14_kc2: { label: "[KC2]", lines: ["Domain E: punishment last resort with consent and side-effect monitoring."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 14",
    intro: "Chapter 14 positive punishment only—negative punishment is Chapter 15.",
    entries: [
      { term: "Positive punishment", definition: "Contingent stimulus presentation decreasing future response probability.", footnoteRef: "ch14_v1" },
      { term: "Overcorrection", definition: "Punishment variant adding restitution and/or positive practice after errors.", footnoteRef: "ch14_v2" },
      { term: "Restitutional overcorrection", definition: "Restore environment to better than pre-error state contingent on misbehavior.", footnoteRef: "ch14_v2" },
      { term: "Positive practice overcorrection", definition: "Repeated correct behavior contingent on error.", footnoteRef: "ch14_v2" },
      { term: "Reprimand", definition: "Socially mediated verbal punisher—function = rate decrease.", footnoteRef: "ch14_v3" },
      { term: "Suppression", definition: "Temporary behavior stop insufficient alone to prove punishment.", footnoteRef: "ch14_v1" },
      { term: "Side effects", definition: "Collateral aggression, escape, emotional responses during punishment.", footnoteRef: "ch14_v4" },
      { term: "Least restrictive alternative", definition: "Effective option minimizing punishment/restriction.", footnoteRef: "ch14_v5" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 14",
    intro: "Added stimulus + verified rate decrease + ethical safeguards.",
    concepts: [
      {
        title: "Functional definition of punishment",
        segments: [
          { type: "text", text: "Future rate decrease defines punishment—not momentary suppression or clinician intent " },
          { type: "footnote", ref: "ch14_v2" },
          { type: "footnote", ref: "ch14_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Discriminate four consequence processes",
        segments: [
          { type: "text", text: "PP adds and decreases; NR removes aversive and increases; extinction withholds SR; NP removes reinforcer and decreases " },
          { type: "footnote", ref: "ch14_3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Applied forms and fidelity",
        segments: [
          { type: "text", text: "Reprimands, contingent exercise, overcorrection—define operationally and measure target plus alternatives " },
          { type: "footnote", ref: "ch14_4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethics first",
        segments: [
          { type: "text", text: "Least-restrictive alternatives, side-effect monitoring, reinforcement-based BIPs before punishment " },
          { type: "footnote", ref: "ch14_5" },
          { type: "footnote", ref: "ch14_kc2" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each definition to positive punishment or reject if the process adds/removes wrong stimulus or wrong rate effect.",
  matchActivityInstructions:
    "Select the consequence classification, ethical response, or side-effect interpretation for Cooper Chapter 14.",
  chainActivityInstructions:
    "Sequence punishment analysis: confirm rate decrease → verify added stimulus → discriminate from NR/extinction/NP → document side effects and alternatives.",
  mts: [
    {
      sample_stimulus: "Contingent reprimand after hitting; hitting rate drops across two weeks.",
      comparison_options: [
        "Positive punishment (socially mediated)",
        "Negative reinforcement",
        "Negative punishment",
        "Extinction",
      ],
      correct_match: "Positive punishment (socially mediated)",
      error_feedback: "Added stimulus contingent on behavior with durable rate decrease.",
    },
    {
      sample_stimulus: "Behavior stops during reprimand but returns to baseline rate next session.",
      comparison_options: [
        "Temporary suppression—not verified punishment",
        "Verified positive punishment",
        "Negative reinforcement",
        "Positive reinforcement",
      ],
      correct_match: "Temporary suppression—not verified punishment",
      error_feedback: "Durable decrease required for punishment label.",
    },
    {
      sample_stimulus: "Student must clean spill and reorganize shelf plus extra correct sorting after throwing materials.",
      comparison_options: [
        "Overcorrection (positive punishment variant)",
        "Negative punishment only",
        "Positive reinforcement",
        "Extinction",
      ],
      correct_match: "Overcorrection (positive punishment variant)",
      error_feedback: "Restitution plus added correct behavior contingent on error.",
    },
    {
      sample_stimulus: "Loud reprimand follows blurting; blurting increases over two weeks.",
      comparison_options: [
        "Positive reinforcement—not punishment",
        "Positive punishment verified",
        "Negative punishment",
        "Escape NR only",
      ],
      correct_match: "Positive reinforcement—not punishment",
      error_feedback: "Rate increased—reprimand may reinforce (Chapter 11 crossover).",
    },
    {
      sample_stimulus: "Aggression increases when contingent exercise implemented after noncompliance.",
      comparison_options: [
        "Reassess side effects and consider alternative reinforcement",
        "Intensify exercise",
        "Ignore data",
        "Proof punishment succeeded",
      ],
      correct_match: "Reassess side effects and consider alternative reinforcement",
      error_feedback: "Side effects require analytic and ethical review.",
    },
    {
      sample_stimulus: "Demand removed when child screams; screaming increases.",
      comparison_options: [
        "Negative reinforcement escape—not positive punishment",
        "Positive punishment",
        "Negative punishment",
        "Extinction",
      ],
      correct_match: "Negative reinforcement escape—not positive punishment",
      error_feedback: "Aversive removed and rate increased = NR.",
    },
    {
      sample_stimulus: "Team proposes punishment before trying DRA or antecedent modifications.",
      comparison_options: [
        "Violates least-restrictive alternative principle",
        "Best practice always",
        "Required by Cooper first step",
        "IOA issue only",
      ],
      correct_match: "Violates least-restrictive alternative principle",
      error_feedback: "Reinforcement-based and antecedent strategies come first.",
    },
    {
      sample_stimulus: "Added stimulus contingent on response; future rate decreased in similar settings.",
      comparison_options: [
        "Positive punishment if operationally defined punisher",
        "Negative reinforcement",
        "Positive reinforcement",
        "Automatic NR",
      ],
      correct_match: "Positive punishment if operationally defined punisher",
      error_feedback: "Added stimulus + rate decrease = PP when verified.",
    },
  ],
  chainTitle: "Punishment analysis safeguards",
  chainFragments: [
    { id: "a", text: "Confirm durable future rate decrease—not momentary suppression alone." },
    { id: "b", text: "Verify stimulus was added (positive) not reinforcer removed." },
    { id: "c", text: "Discriminate from NR, extinction, and negative punishment." },
    { id: "d", text: "Document side effects, alternatives, and ethical authorization." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Positive punishment", back: "Added stimulus; rate down." },
    { front: "Overcorrection", back: "Restitution + extra correct behavior." },
    { front: "Suppression", back: "Temporary stop only." },
    { front: "Side effects", back: "Aggression, escape, emotion." },
    { front: "LRA", back: "Least restrictive effective option." },
    { front: "SP", back: "Punishing stimulus presented." },
  ],
  worksheet: {
    title: "CHH Chapter 14 — positive punishment",
    instructions:
      "Classify added-stimulus consequences by future rate effect. Distinguish PP from NR, extinction, and negative punishment.",
    scenario:
      "Scenario A — Contingent reprimand after hitting; hitting down 3 weeks.",
    scenario_follow_up:
      "Scenario B — Reprimand during blurting; blurting unchanged next week.\n\nScenario C — Screaming stops demands; screaming increases.\n\nScenario D — Contingent exercise; noncompliance decreases 2 weeks.\n\nScenario E — Aggression rises during new punishment plan.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Classification?",
        options: ["Positive punishment (if verified)", "Negative reinforcement", "Negative punishment", "Extinction"],
        correct: "Positive punishment (if verified)",
      },
      {
        id: "response_2",
        label: "Scenario B · BEST description?",
        options: ["Temporary suppression—not verified punishment", "Verified PP", "NR escape", "Positive reinforcement"],
        correct: "Temporary suppression—not verified punishment",
      },
      {
        id: "response_3",
        label: "Scenario C · Classification?",
        options: ["Negative reinforcement escape", "Positive punishment", "Negative punishment", "Positive reinforcement only"],
        correct: "Negative reinforcement escape",
      },
      {
        id: "response_4",
        label: "Scenario D · Classification?",
        options: ["Possible positive punishment", "Negative reinforcement", "Extinction", "NR avoidance only"],
        correct: "Possible positive punishment",
      },
      {
        id: "response_5",
        label: "Scenario E · FIRST action?",
        options: ["Reassess side effects and alternatives", "Intensify punishment", "Stop all measurement", "Ignore aggression"],
        correct: "Reassess side effects and alternatives",
      },
      {
        id: "response_6",
        label: "PP ALWAYS involves:",
        options: [
          "Added stimulus contingent on behavior with decreased future rate",
          "Removed reinforcer",
          "Removed aversive",
          "No rate change",
        ],
        correct: "Added stimulus contingent on behavior with decreased future rate",
      },
      {
        id: "response_7",
        label: "Before punishment, Cooper emphasizes:",
        options: [
          "Least-restrictive reinforcement-based alternatives first",
          "Maximum punishment density",
          "Skip consent",
          "No data needed",
        ],
        correct: "Least-restrictive reinforcement-based alternatives first",
      },
      {
        id: "response_8",
        label: "Overcorrection is:",
        options: [
          "Positive punishment variant",
          "Negative punishment only",
          "Positive reinforcement",
          "Extinction",
        ],
        correct: "Positive punishment variant",
      },
    ],
    remediationLog:
      "Rebuild Chapter 14 fluency: added stimulus? → rate down durable? → not NR/extinction/NP? → side effects + LRA + alternatives.",
  },
  bdsBank: CHAPTER_14_PP_QUIZ_BANK,
};
