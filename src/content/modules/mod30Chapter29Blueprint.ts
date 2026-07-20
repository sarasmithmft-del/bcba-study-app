import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_29_SELF_MANAGEMENT_QUIZ_BANK } from "@/content/modules/quiz/chapter29SelfManagementQuizBank";

export const MOD30_BLUEPRINT: ExtensionBlueprint = {
  id: "mod30",
  chapterNumber: 29,
  activityPrefix: 2300,
  title: "Self-Management",
  codexHeading: "READING — Chapter 29 (Self-Management)",
  codexIntro: `Chapter 29 in Cooper, Heron, and Heward covers self-management—the transfer of stimulus and consequence control toward the performer. Goal setting, self-monitoring, self-evaluation, and self-reinforcement each demand operational clarity so individuals contact actual contingencies rather than aspirational journaling alone.

Self-monitoring occurs when the person records their own behavior against an operational definition for feedback. Self-evaluation compares performance to criterion and adjusts tactics with or without external coaching. Self-reinforcement arranges access to reinforcers contingent on meeting self-set rules when oversight safeguards exist—unlimited self-reinforcement without monitoring collapses guardrails.

Behavior analysts architect prompts, data forms, digital nudges, and environmental supports so self-recording stays low effort and high accuracy. Without IOA spot checks or accuracy incentives, self-monitoring graphs mislead teams optimistically. Collateral verification compares self-recorded data to independent logs before independence claims.

Goal specification defines measurable self-management targets with deadlines and environmental supports clearly listed. Prompt fading transfers control from overt devices to covert self-cues sustainably.

Measurement tracks treatment adherence to self-administered consequences and documents when social validity demands shifting control back to external reinforcers temporarily during crisis windows. When learners skip self-recording under stress, engineer simplified recording cues and intermittent IOA reconciliation—not punishment for charting failures alone.

Ethical practice guards against blaming clients for self-management failures when environments withhold necessary supports, maintains privacy for self-reported data, and avoids coercive self-punishment plans lacking clinical oversight.

Self-management pairs with token economies (Chapter 28) and generalization (Chapter 30): autonomy goals require verification, then maintenance across settings and time.

For BCBA exam prep: check collateral verification, recording feasibility under MO stress, self-reinforcement oversight, and whether self-administered consequences were actually contacted before choosing an answer.`,
  footnotes: {
    ch29_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 29 — self-management overview (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Transfer control toward performer.",
        "Not quoted from CHH.",
      ],
    },
    ch29_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 29 — self-monitoring and accuracy checks.",
        "Collateral verification required.",
      ],
    },
    ch29_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 29 — self-evaluation and self-reinforcement.",
        "Oversight safeguards for autonomy.",
      ],
    },
    ch29_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 29 — goal specification and prompt fading.",
        "Operational clarity and sustainable cues.",
      ],
    },
    ch29_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 29 — ethics, privacy, crisis reversion to external control.",
        "No coercive self-punishment.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch29_1" },
    { afterSentenceIndex: 1, ref: "ch29_2" },
    { afterSentenceIndex: 2, ref: "ch29_3" },
    { afterSentenceIndex: 3, ref: "ch29_4" },
    { afterSentenceIndex: 4, ref: "ch29_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 29 recap",
    intro:
      "Chapter 29 is about teaching people to run their own programs—set goals, track behavior, judge progress, and earn reinforcers—with checks so the data is real and the plan stays safe.",
    chunks: [
      {
        subtitle: "Core self-management tactics",
        segments: [
          {
            type: "text",
            text: "Self-monitoring = record your own behavior. Self-evaluation = compare to a goal and adjust. Self-reinforcement = access reinforcers when you meet self-set rules—with oversight ",
          },
          { type: "footnote", ref: "ch29_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Accuracy and verification",
        segments: [
          {
            type: "text",
            text: "Spot-check self-records against collateral observation. Rosy graphs when nobody is watching usually mean the recording system—not the learner—is broken ",
          },
          { type: "footnote", ref: "ch29_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Feasible recording under stress",
        segments: [
          {
            type: "text",
            text: "When MO or stress blocks recording, simplify cues and verify—not punish charting failures while claiming independence ",
          },
          { type: "footnote", ref: "ch29_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethics and privacy",
        segments: [
          {
            type: "text",
            text: "No coercive self-punishment without oversight. Protect privacy. Temporarily return external reinforcers during crisis. Do not blame clients when supports are missing ",
          },
          { type: "footnote", ref: "ch29_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include claiming self-management mastery without accuracy checks, confusing self-monitoring with self-reinforcement, coercive self-punishment plans, and ignoring MO when self-recording fails under stress. Resolve them by checking collateral verification, recording feasibility, and whether self-administered consequences were actually contacted before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch29_v1: { label: "[V1]", lines: ["CHH Chapter 29 — self-monitoring."] },
    ch29_v2: { label: "[V2]", lines: ["CHH Chapter 29 — self-evaluation."] },
    ch29_v3: { label: "[V3]", lines: ["CHH Chapter 29 — self-reinforcement."] },
    ch29_v4: { label: "[V4]", lines: ["CHH Chapter 29 — goal specification."] },
    ch29_v5: { label: "[V5]", lines: ["CHH Chapter 29 — accuracy check."] },
    ch29_v6: { label: "[V6]", lines: ["CHH Chapter 29 — prompt fading (self-mgmt)."] },
    ch29_kc1: { label: "[KC1]", lines: ["Domain F: discriminate self-mgmt components."] },
    ch29_kc2: { label: "[KC2]", lines: ["Domain C: collateral IOA, adherence tracking."] },
    ch29_kc3: { label: "[KC3]", lines: ["Domain E: privacy, no coercive self-punishment, support not blame."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 29",
    intro: "Chapter 29 self-management—generalization is Chapter 30.",
    entries: [
      { term: "Self-monitoring", definition: "Person records own behavior against operational definition for feedback.", footnoteRef: "ch29_v1" },
      { term: "Self-evaluation", definition: "Compares performance to criterion and adjusts tactics.", footnoteRef: "ch29_v2" },
      { term: "Self-reinforcement", definition: "Access to reinforcers contingent on self-set rules with oversight safeguards.", footnoteRef: "ch29_v3" },
      { term: "Goal specification", definition: "Measurable target with deadlines and environmental supports listed.", footnoteRef: "ch29_v4" },
      { term: "Accuracy check", definition: "Independent verification that self-monitored logs align with observable events.", footnoteRef: "ch29_v5" },
      { term: "Prompt fading (self-mgmt)", definition: "Transfers control from overt devices to covert self-cues sustainably.", footnoteRef: "ch29_v6" },
      { term: "Collateral verification", definition: "Independent observation compared to self-recorded data.", footnoteRef: "ch29_v5" },
      { term: "Crisis reversion", definition: "Temporarily shifting control back to external reinforcers when needed.", footnoteRef: "ch29_kc3" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 29",
    intro: "Components, verification, feasibility, ethics.",
    concepts: [
      {
        title: "Self-monitoring, evaluation, and reinforcement",
        segments: [
          { type: "text", text: "Discriminate recording, criterion comparison, and self-administered consequences—with oversight " },
          { type: "footnote", ref: "ch29_v1" },
          { type: "footnote", ref: "ch29_v2" },
          { type: "footnote", ref: "ch29_v3" },
          { type: "footnote", ref: "ch29_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Collateral verification and IOA",
        segments: [
          { type: "text", text: "Spot checks before independence claims—aspirational journaling misleads " },
          { type: "footnote", ref: "ch29_v5" },
          { type: "footnote", ref: "ch29_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Feasible recording ecology",
        segments: [
          { type: "text", text: "Low-effort forms, digital nudges, simplified cues when MO/stress blocks recording " },
          { type: "footnote", ref: "ch29_v4" },
          { type: "footnote", ref: "ch29_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical self-management",
        segments: [
          { type: "text", text: "Privacy, no coercive self-punishment, crisis reversion, environment—not blame " },
          { type: "footnote", ref: "ch29_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 29 self-management vocabulary or reject if the stem describes mastery without accuracy checks, unlimited self-reinforcement without oversight, or punitive self-charting only.",
  matchActivityInstructions:
    "Select self-mgmt component, verification response, recording redesign, or ethical supervision fix for Cooper Chapter 29.",
  chainActivityInstructions:
    "Sequence self-management workflow: operationalize targets with assent → pilot monitoring with collateral samples → shape evaluation/reinforcement with oversight → review autonomy risks and privacy routinely.",
  mts: [
    {
      sample_stimulus: "Learner skips self-recording when stressed; hero trends only on supervised days.",
      comparison_options: [
        "Engineer simplified recording cues and intermittent IOA reconciliation before mastery claims",
        "Celebrate independence claims",
        "Delete unsupervised sessions quietly",
        "Punish noncompliance with self-charting exclusively",
      ],
      correct_match: "Engineer simplified recording cues and intermittent IOA reconciliation before mastery claims",
      error_feedback: "Verification + feasible ecology.",
    },
    {
      sample_stimulus: "Self-monitored graphs rosy when supervision absent; collateral spot checks disagree.",
      comparison_options: [
        "Engineer simpler recording plus scheduled IOA reconciliation before independence claims",
        "Celebrate heroic trends ignoring mismatches",
        "Punish logging errors exclusively",
        "Delete mismatched sessions quietly",
      ],
      correct_match: "Engineer simpler recording plus scheduled IOA reconciliation before independence claims",
      error_feedback: "Correct action: Engineer simpler recording plus scheduled IOA reconciliation before independence claims",
    },
    {
      sample_stimulus: "Self-reinforcement contract grants unlimited coveted items sans oversight.",
      comparison_options: [
        "Guardrail collapse—tie self-managed reinforcers to monitored rules aligning with wellness plans",
        "Unlimited access always optimal",
        "Clinician review obsolete after first session",
        "Approve for autonomy",
      ],
      correct_match: "Guardrail collapse—tie self-managed reinforcers to monitored rules aligning with wellness plans",
      error_feedback: "Correct action: Guardrail collapse—tie self-managed reinforcers to monitored rules aligning with wellness plans",
    },
    {
      sample_stimulus: "Person tallies own hand-raising during meeting.",
      comparison_options: [
        "Self-monitoring",
        "Self-reinforcement",
        "Self-evaluation only",
        "External punishment",
      ],
      correct_match: "Self-monitoring",
      error_feedback: "Recording own behavior.",
    },
    {
      sample_stimulus: "Person compares daily steps to goal and adjusts walking route.",
      comparison_options: [
        "Self-evaluation",
        "Self-monitoring only",
        "Self-reinforcement only",
        "Respondent extinction",
      ],
      correct_match: "Self-evaluation",
      error_feedback: "Criterion comparison and adjustment.",
    },
    {
      sample_stimulus: "Person accesses preferred break after self-chart shows criterion met; BCBA spot-checks.",
      comparison_options: [
        "Self-reinforcement with oversight safeguards",
        "Self-monitoring only",
        "Coercive self-punishment",
        "Unlimited access without rules",
      ],
      correct_match: "Self-reinforcement with oversight safeguards",
      error_feedback: "Self-administered consequence with monitoring.",
    },
    {
      sample_stimulus: "Team blames client for self-management failure; environment lacks supports.",
      comparison_options: [
        "Domain E—revise supports and recording ecology; do not blame when environment insufficient",
        "Approve blame narrative",
        "Delete all self-data",
        "Coercive self-punishment plan",
      ],
      correct_match: "Domain E—revise supports and recording ecology; do not blame when environment insufficient",
      error_feedback: "Support not blame.",
    },
    {
      sample_stimulus: "Crisis window; learner cannot self-manage safely.",
      comparison_options: [
        "Temporarily revert to external reinforcers and supports",
        "Insist on independence",
        "Punish crisis",
        "Delete crisis data",
      ],
      correct_match: "Temporarily revert to external reinforcers and supports",
      error_feedback: "Crisis reversion.",
    },
  ],
  chainTitle: "Self-management packaging",
  chainFragments: [
    { id: "a", text: "Operationalize targets and prompts with collaborator input including assent." },
    { id: "b", text: "Pilot self-monitoring forms with collateral verification samples." },
    { id: "c", text: "Shape self-evaluation and reinforcement honoring realistic MO contexts." },
    { id: "d", text: "Review autonomy risks and privacy guardrails routinely with supervisors." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Self-monitor", back: "Record own behavior." },
    { front: "Self-evaluate", back: "Compare to criterion." },
    { front: "Self-reinforce", back: "Earn with oversight." },
    { front: "Accuracy check", back: "Collateral IOA." },
    { front: "Goal spec", back: "Measurable target." },
    { front: "Privacy", back: "Protect self-data." },
  ],
  worksheet: {
    title: "CHH Chapter 29 — self-management",
    instructions:
      "Classify self-mgmt component, verification response, ethical concern, and crisis reversion.",
    scenario:
      "Scenario A — Learner skips self-recording when stressed; hero trends on supervised days only.",
    scenario_follow_up:
      "Scenario B — Self-monitored graphs rosy when supervision absent; collateral disagrees.\n\nScenario C — Unlimited self-reinforcement contract without oversight.\n\nScenario D — Person tallies own behavior during meeting.\n\nScenario E — Team blames client; environment lacks recording supports.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best response?",
        options: ["Simplify recording cues; intermittent IOA reconciliation", "Celebrate independence", "Punish charting failures"],
        correct: "Simplify recording cues; intermittent IOA reconciliation",
      },
      {
        id: "response_2",
        label: "Scenario B · Priority?",
        options: ["Simpler recording plus scheduled IOA reconciliation", "Celebrate heroic trends", "Delete mismatched sessions"],
        correct: "Simpler recording plus scheduled IOA reconciliation",
      },
      {
        id: "response_3",
        label: "Scenario C · Supervisory concern?",
        options: ["Guardrail collapse—monitored rules and wellness alignment", "Unlimited access optimal", "Review obsolete"],
        correct: "Guardrail collapse—monitored rules and wellness alignment",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["Self-monitoring", "Self-reinforcement", "Self-evaluation only"],
        correct: "Self-monitoring",
      },
      {
        id: "response_5",
        label: "Scenario E · Ethics-aligned response?",
        options: ["Revise supports and ecology—not blame client", "Approve blame", "Coercive self-punishment"],
        correct: "Revise supports and ecology—not blame client",
      },
      {
        id: "response_6",
        label: "Self-evaluation means:",
        options: ["Compare performance to criterion and adjust", "Record behavior only", "Unlimited reinforcers"],
        correct: "Compare performance to criterion and adjust",
      },
      {
        id: "response_7",
        label: "Accuracy check means:",
        options: ["Collateral verification of self-recorded data", "Optional decoration", "Self-punishment"],
        correct: "Collateral verification of self-recorded data",
      },
      {
        id: "response_8",
        label: "Ethical self-management prioritizes:",
        options: ["Verification, privacy, oversight, support not blame", "Mastery without IOA", "Coercive self-punishment"],
        correct: "Verification, privacy, oversight, support not blame",
      },
    ],
    remediationLog:
      "Rebuild Chapter 29 fluency: which component? → recording feasible under MO? → collateral IOA? → self-reinforcement overseen? → privacy/crisis plan?",
  },
  bdsBank: CHAPTER_29_SELF_MANAGEMENT_QUIZ_BANK,
};
