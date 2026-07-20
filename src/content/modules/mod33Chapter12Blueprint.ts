import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_12_NR_QUIZ_BANK } from "@/content/modules/quiz/chapter12NegativeReinforcementQuizBank";

export const MOD33_BLUEPRINT: ExtensionBlueprint = {
  id: "mod33",
  chapterNumber: 12,
  activityPrefix: 2330,
  title: "Negative Reinforcement",
  codexHeading: "READING — Chapter 12 (Negative Reinforcement)",
  codexIntro: `Chapter 12 in Cooper, Heron, and Heward defines negative reinforcement as a process in which contingent removal, reduction, or postponement of an aversive stimulus increases the future probability of the response that produced that change. "Negative" refers to subtraction of stimulation, not to moral judgment. Negative reinforcement strengthens behavior—the same functional direction as positive reinforcement, but through a different stimulus operation.

Functional verification is non-negotiable: if future response rate does not increase under similar conditions when the aversive reduction is contingent, the negative reinforcement label is not supported—regardless of how unpleasant the antecedent appears or how intuitive the label feels.

Escape and avoidance are the chapter's central discriminations. Escape negative reinforcement occurs when responding terminates or reduces an aversive stimulus that is already present (for example, taking medication while a migraine is underway). Avoidance negative reinforcement occurs when responding prevents or postpones contact with an aversive before it begins (for example, completing homework early so scheduled detention never occurs). Mislabeling avoidance as escape—or calling any difficult task "negative reinforcement" without data—collapses assessment precision.

Negative reinforcement can be socially mediated when another person removes or postpones the aversive contingent on behavior, or automatic when the response itself directly produces reduction of uncomfortable internal or sensory stimulation without social mediation. Aversive stimuli are defined functionally: events the organism escapes or avoids, which may include demands, noise, social contact, or tasks—not only events clinicians find unpleasant.

Applied arrangements include break contingencies, demand fading paired with escape from difficult trials, token systems that buy postponement of nonpreferred activities, and escape-maintained problem behavior identified through functional assessment. Motivating operations alter aversive value: establishing operations can increase escape and avoidance responding; abolishing operations can reduce it.

Ethical implementation requires least-restrictive alternatives, assent-aware practice, and honest reporting when escape-maintained behavior signals that the environment may be aversive. Treatment should reform antecedents, teach functionally equivalent replacement skills, and use validated procedures—not merely intensify demands while labeling all resistance as "manipulation."

Chapter 12 pairs with Chapter 11 (positive reinforcement) and precedes Chapter 13 (schedules). For BCBA exam prep: verify rate increase, classify removal versus addition, discriminate escape from avoidance by temporal relation to the aversive, and reject the trap that negative reinforcement is punishment.`,
  footnotes: {
    ch12_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 12 — negative reinforcement definition (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Negative = removal/postponement; reinforcement = future behavior increase.",
        "Not quoted from CHH.",
      ],
    },
    ch12_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 12 — escape versus avoidance.",
        "Temporal relation to aversive contact is the discriminator.",
      ],
    },
    ch12_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 12 — socially mediated versus automatic NR.",
        "Mediation pathway affects assessment and intervention.",
      ],
    },
    ch12_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 12 — applied NR arrangements and MO context.",
        "Functional verification required before labeling.",
      ],
    },
    ch12_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 12 — ethical implementation and least-restrictive alternatives.",
        "Escape-maintained behavior may signal aversive environments.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch12_1" },
    { afterSentenceIndex: 2, ref: "ch12_2" },
    { afterSentenceIndex: 3, ref: "ch12_3" },
    { afterSentenceIndex: 4, ref: "ch12_4" },
    { afterSentenceIndex: 5, ref: "ch12_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 12 recap",
    intro:
      "Chapter 12 is about behavior that increases because something aversive goes away or never arrives. The behavior goes up—that is reinforcement—even though the word 'negative' sounds like punishment to most people.",
    chunks: [
      {
        subtitle: "Negative = removed, not bad",
        segments: [
          {
            type: "text",
            text: "If a response removes, reduces, or postpones an aversive and the behavior increases, you have negative reinforcement. The word negative describes subtraction of stimulation ",
          },
          { type: "footnote", ref: "ch12_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Escape versus avoidance",
        segments: [
          {
            type: "text",
            text: "Escape stops something already happening (pain now). Avoidance prevents something from starting (detention never occurs because homework finished early). Timing is everything ",
          },
          { type: "footnote", ref: "ch12_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Social versus automatic",
        segments: [
          {
            type: "text",
            text: "Ask whether another person removed the aversive or the behavior itself produced relief (scratching an itch, self-injury with sensory consequence) ",
          },
          { type: "footnote", ref: "ch12_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Verify with data",
        segments: [
          {
            type: "text",
            text: "A hard task alone is not NR. You need contingent aversive reduction and a documented increase in future rate ",
          },
          { type: "footnote", ref: "ch12_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethics and environment",
        segments: [
          {
            type: "text",
            text: "When behavior is escape-maintained, ask whether the setting is too aversive and whether replacement skills and antecedent reform are in place ",
          },
          { type: "footnote", ref: "ch12_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include calling NR punishment, labeling any unpleasant task as NR without rate data, confusing escape with avoidance, and ignoring MO shifts. Resolve them by checking future rate direction, temporal relation to the aversive, and mediation pathway before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch12_v1: { label: "[V1]", lines: ["CHH Chapter 12 — negative reinforcement."] },
    ch12_v2: { label: "[V2]", lines: ["CHH Chapter 12 — escape."] },
    ch12_v3: { label: "[V3]", lines: ["CHH Chapter 12 — avoidance."] },
    ch12_v4: { label: "[V4]", lines: ["CHH Chapter 12 — socially mediated NR."] },
    ch12_v5: { label: "[V5]", lines: ["CHH Chapter 12 — automatic NR."] },
    ch12_kc1: { label: "[KC1]", lines: ["Domain F: escape/avoidance discrimination from vignette evidence."] },
    ch12_kc2: { label: "[KC2]", lines: ["Domain C: document MO, mediation, and rate change."] },
    ch12_kc3: { label: "[KC3]", lines: ["Domain E: least-restrictive alternatives when NR maintains problem behavior."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 12",
    intro: "Chapter 12 scope only—punishment is Chapters 14–15; positive reinforcement is Chapter 11.",
    entries: [
      { term: "Negative reinforcement", definition: "Contingent removal/reduction/postponement of aversive; future rate increases.", footnoteRef: "ch12_v1" },
      { term: "Escape", definition: "NR in which responding terminates or reduces an aversive already present.", footnoteRef: "ch12_v2" },
      { term: "Avoidance", definition: "NR in which responding prevents or delays aversive before contact.", footnoteRef: "ch12_v3" },
      { term: "Aversive stimulus", definition: "Event organism escapes or avoids—defined functionally.", footnoteRef: "ch12_v1" },
      { term: "Socially mediated NR", definition: "Another person removes/postpones aversive contingent on behavior.", footnoteRef: "ch12_v4" },
      { term: "Automatic NR", definition: "Response directly produces aversive reduction without social mediator.", footnoteRef: "ch12_v5" },
      { term: "Discriminated avoidance", definition: "SD signals impending aversive; response prevents contact.", footnoteRef: "ch12_v3" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 12",
    intro: "Classify by effect (rate up), operation (remove/postpone aversive), and timing (escape vs avoidance).",
    concepts: [
      {
        title: "NR reinforces—it does not punish",
        segments: [
          { type: "text", text: "Future responding increases; punishment decreases it—never collapse the labels because an aversive is involved " },
          { type: "footnote", ref: "ch12_v1" },
          { type: "footnote", ref: "ch12_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Escape versus avoidance timing",
        segments: [
          { type: "text", text: "Already present aversive = escape; prevented/delayed aversive = avoidance " },
          { type: "footnote", ref: "ch12_v2" },
          { type: "footnote", ref: "ch12_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Mediation and MO",
        segments: [
          { type: "text", text: "Document social versus automatic pathways and MO conditions that alter aversive value " },
          { type: "footnote", ref: "ch12_v4" },
          { type: "footnote", ref: "ch12_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical response to escape-maintained behavior",
        segments: [
          { type: "text", text: "Reform aversive contexts, teach replacements, use validated procedures with assent—not silent escalation of demands " },
          { type: "footnote", ref: "ch12_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each definition to Chapter 12 NR vocabulary—reject punishment labels unless future rate decreases.",
  matchActivityInstructions:
    "Select escape, avoidance, mediation type, or process discrimination that best fits Cooper Chapter 12.",
  chainActivityInstructions:
    "Sequence NR analysis: identify aversive → classify escape vs avoidance → verify rate increase → document MO/mediation → plan ethical intervention.",
  mts: [
    {
      sample_stimulus: "Migraine active; medication taken; pain stops; pill-taking increases next episode.",
      comparison_options: [
        "Escape (negative reinforcement)",
        "Avoidance (negative reinforcement)",
        "Positive reinforcement",
        "Positive punishment",
      ],
      correct_match: "Escape (negative reinforcement)",
      error_feedback: "Ongoing aversive terminated by response—increase confirms NR escape.",
    },
    {
      sample_stimulus: "Homework finished Thursday; Monday detention never occurs; early completion increases.",
      comparison_options: [
        "Avoidance (negative reinforcement)",
        "Escape (negative reinforcement)",
        "Negative punishment",
        "Extinction",
      ],
      correct_match: "Avoidance (negative reinforcement)",
      error_feedback: "Aversive prevented before contact—avoidance NR.",
    },
    {
      sample_stimulus: "Screaming; teacher removes worksheet; screaming increases across weeks.",
      comparison_options: [
        "Escape via socially mediated NR",
        "Positive reinforcement",
        "Positive punishment",
        "Negative punishment",
      ],
      correct_match: "Escape via socially mediated NR",
      error_feedback: "Demand removed contingent on screaming; rate increased.",
    },
    {
      sample_stimulus: "Scratching reduces itch; scratching persists when alone without social contact.",
      comparison_options: [
        "Automatic NR",
        "Socially mediated escape only",
        "Positive punishment",
        "Negative punishment",
      ],
      correct_match: "Automatic NR",
      error_feedback: "Response directly produces sensory reduction—automatic pathway.",
    },
    {
      sample_stimulus: "Long route chosen; warning bell never sounds on that route; route use increases.",
      comparison_options: [
        "Avoidance NR",
        "Escape from ongoing bell",
        "Positive reinforcement",
        "Respondent extinction",
      ],
      correct_match: "Avoidance NR",
      error_feedback: "Aversive prevented before contact.",
    },
    {
      sample_stimulus: "Break contingent on task completion; work rate increases.",
      comparison_options: [
        "NR (escape/postponement from demands)",
        "Positive punishment",
        "Extinction",
        "Positive punishment only",
      ],
      correct_match: "NR (escape/postponement from demands)",
      error_feedback: "Postponement/removal of nonpreferred activity strengthened work.",
    },
    {
      sample_stimulus: "Contingent reprimand added; target behavior decreases over sessions.",
      comparison_options: [
        "Positive punishment—not NR",
        "Negative reinforcement escape",
        "Avoidance NR",
        "Positive reinforcement",
      ],
      correct_match: "Positive punishment—not NR",
      error_feedback: "Rate decreased after stimulus added—punishment not reinforcement.",
    },
    {
      sample_stimulus: "Warning tone precedes shock; lever press cancels tone; lever pressing increases.",
      comparison_options: [
        "Discriminated avoidance NR",
        "Escape from ongoing shock only",
        "Positive reinforcement",
        "Negative punishment",
      ],
      correct_match: "Discriminated avoidance NR",
      error_feedback: "SD signals impending aversive; response prevents contact.",
    },
  ],
  chainTitle: "NR analysis workflow",
  chainFragments: [
    { id: "a", text: "Identify the aversive condition and whether it is present or threatened." },
    { id: "b", text: "Classify escape versus avoidance from temporal relation to the aversive." },
    { id: "c", text: "Verify future response rate increases; document social vs automatic mediation and MO." },
    { id: "d", text: "Plan ethical intervention: antecedent reform, replacement skills, validated procedures." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Negative reinforcement", back: "Remove/postpone aversive; rate up." },
    { front: "Escape", back: "Stop ongoing aversive." },
    { front: "Avoidance", back: "Prevent aversive contact." },
    { front: "Social NR", back: "Person removes aversive." },
    { front: "Automatic NR", back: "Response produces relief." },
    { front: "Aversive", back: "Escaped/avoided event." },
  ],
  worksheet: {
    title: "CHH Chapter 12 — negative reinforcement",
    instructions:
      "Classify escape vs avoidance and social vs automatic NR. Verify rate increase. NR is not punishment.",
    scenario:
      "Scenario A — Pill terminates active migraine; pill-taking increases.",
    scenario_follow_up:
      "Scenario B — Homework done Thursday; Monday detention never occurs; early work increases.\n\nScenario C — Screaming; teacher removes worksheet; screaming increases.\n\nScenario D — Scratching reduces itch when alone.\n\nScenario E — Reprimands added; blurting decreases.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Classification?",
        options: ["Escape NR", "Avoidance NR", "Positive reinforcement", "Positive punishment"],
        correct: "Escape NR",
      },
      {
        id: "response_2",
        label: "Scenario B · Classification?",
        options: ["Avoidance NR", "Escape NR", "Negative punishment", "Extinction"],
        correct: "Avoidance NR",
      },
      {
        id: "response_3",
        label: "Scenario C · Classification?",
        options: [
          "Escape via socially mediated NR",
          "Positive reinforcement",
          "Positive punishment",
          "Automatic NR only",
        ],
        correct: "Escape via socially mediated NR",
      },
      {
        id: "response_4",
        label: "Scenario D · Pathway?",
        options: ["Automatic NR", "Socially mediated escape only", "Positive punishment", "Negative punishment"],
        correct: "Automatic NR",
      },
      {
        id: "response_5",
        label: "Scenario E · Classification?",
        options: ["Positive punishment—not NR", "Escape NR", "Avoidance NR", "Positive reinforcement"],
        correct: "Positive punishment—not NR",
      },
      {
        id: "response_6",
        label: "NR versus punishment—BEST distinction:",
        options: [
          "NR increases behavior; punishment decreases it",
          "Both decrease behavior",
          "NR adds stimuli",
          "Identical processes",
        ],
        correct: "NR increases behavior; punishment decreases it",
      },
      {
        id: "response_7",
        label: "Avoidance versus escape:",
        options: [
          "Avoidance prevents aversive before contact; escape stops ongoing aversive",
          "Identical timing",
          "Escape prevents; avoidance stops ongoing",
          "Both are punishment",
        ],
        correct: "Avoidance prevents aversive before contact; escape stops ongoing aversive",
      },
      {
        id: "response_8",
        label: "Escape-maintained aggression—MOST ethical FIRST step:",
        options: [
          "Assess function; reform aversive context; teach replacement with assent safeguards",
          "Increase aversive demands silently",
          "Label as manipulation only",
          "Skip documentation",
        ],
        correct: "Assess function; reform aversive context; teach replacement with assent safeguards",
      },
    ],
    remediationLog:
      "Rebuild Chapter 12 fluency: rate up? → aversive removed/postponed? → escape vs avoidance timing → social vs automatic → NR not punishment.",
  },
  bdsBank: CHAPTER_12_NR_QUIZ_BANK,
};
