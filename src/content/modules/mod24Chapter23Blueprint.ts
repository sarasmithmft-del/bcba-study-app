import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_23_CHAINING_QUIZ_BANK } from "@/content/modules/quiz/chapter23ChainingQuizBank";

export const MOD24_BLUEPRINT: ExtensionBlueprint = {
  id: "mod24",
  chapterNumber: 23,
  activityPrefix: 2240,
  title: "Chaining",
  codexHeading: "READING — Chapter 23 (Chaining)",
  codexIntro: `Chapter 23 in Cooper, Heron, and Heward covers chaining—the sequencing of discrete responses into unified performances. Task analysis decomposes multistep skills into ordered, discriminable response products; forward, backward, or total-task tactics then stitch links with prompt plans fading as each component stabilizes under its own discriminative control.

In a behavior chain, each response produces a stimulus change that functions as the discriminative stimulus for the next response in the series. Analysts decide when to pause linking if earlier links wobble, when to insert error correction minimizing emotional escalation, and when to transfer stimulus control from instructor prompts to naturalistic cues families recognize outside sessions.

Forward chaining teaches initial links to criterion before adding subsequent components sequentially. Backward chaining teaches terminal links first then adds preceding components—useful when terminal products matter most or motivation is low at early steps. Total-task chaining supports the entire chain each trial with systematic prompt fading across components.

Measurement logs inter-response latency across links, prompt levels per component, integrity of chaining checklists, and maintenance probes once entire chains meet fluency. Partial-link mastery without whole-chain integrity misleads community partners; claiming chain mastery from early links alone is a high-yield exam error.

Chaining differs from shaping (Chapter 22): chaining assembles discrete steps into a sequence; shaping differentially reinforces successive approximations toward one terminal topography. Confusing the two procedures remains a common trap.

Dignified task selection, culturally valid chain steps, assent around repetitive drill when fatigue rises, and transparent reporting when community implementation cannot yet reproduce full chains remain ethical priorities.

For BCBA exam prep: check whole-chain integrity, link-level prompt data, inter-response latency, naturalistic SD transfer, and social validity before choosing an answer.`,
  footnotes: {
    ch23_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 23 — behavior chains and task analysis (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Each response becomes SD for the next.",
        "Not quoted from CHH.",
      ],
    },
    ch23_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 23 — forward, backward, and total-task chaining.",
        "Tactic selection matches motivation and safety.",
      ],
    },
    ch23_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 23 — inter-response latency and link-level prompt data.",
        "Whole-chain integrity before mastery claims.",
      ],
    },
    ch23_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 23 — stimulus control transfer to naturalistic SDs.",
        "Maintenance probes after fluency.",
      ],
    },
    ch23_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 23 — social validity, assent, culturally valid chain steps.",
        "Transparent reporting when community cannot reproduce chains.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch23_1" },
    { afterSentenceIndex: 1, ref: "ch23_2" },
    { afterSentenceIndex: 2, ref: "ch23_3" },
    { afterSentenceIndex: 3, ref: "ch23_4" },
    { afterSentenceIndex: 4, ref: "ch23_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 23 recap",
    intro:
      "Chapter 23 is about teaching multistep routines as one smooth performance—each step triggers the next, with data proving the whole sequence works in real life, not just in isolated drills.",
    chunks: [
      {
        subtitle: "Task analysis and behavior chains",
        segments: [
          {
            type: "text",
            text: "Break the skill into ordered steps. Each completed step becomes the cue for the next—that is a behavior chain ",
          },
          { type: "footnote", ref: "ch23_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Chaining tactics",
        segments: [
          {
            type: "text",
            text: "Forward chaining builds from the first step; backward chaining starts at the finish; total-task supports the full sequence each trial while prompts fade. Pick the tactic that fits motivation and safety ",
          },
          { type: "footnote", ref: "ch23_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Whole-chain integrity",
        segments: [
          {
            type: "text",
            text: "Perfect early links do not prove chain mastery. Log prompt levels per link, timing between steps, and whole-chain probes before claiming fluency ",
          },
          { type: "footnote", ref: "ch23_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Natural SDs and ethics",
        segments: [
          {
            type: "text",
            text: "Fade instructor prompts to cues families use at home. Co-author culturally valid steps, honor assent when drill fatigue rises, and report honestly when the community cannot yet run the full chain ",
          },
          { type: "footnote", ref: "ch23_4" },
          { type: "footnote", ref: "ch23_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include claiming chain mastery from partial links only, confusing forward and backward chaining tactics, ignoring inter-response latency, and fading prompts before each link is stable. Resolve them by checking whole-chain integrity, link-level prompt data, and naturalistic SD transfer before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch23_v1: { label: "[V1]", lines: ["CHH Chapter 23 — task analysis."] },
    ch23_v2: { label: "[V2]", lines: ["CHH Chapter 23 — forward chaining."] },
    ch23_v3: { label: "[V3]", lines: ["CHH Chapter 23 — backward chaining."] },
    ch23_v4: { label: "[V4]", lines: ["CHH Chapter 23 — total-task chaining."] },
    ch23_v5: { label: "[V5]", lines: ["CHH Chapter 23 — behavior chain."] },
    ch23_v6: { label: "[V6]", lines: ["CHH Chapter 23 — inter-response chain latency."] },
    ch23_kc1: { label: "[KC1]", lines: ["Domain F: whole-chain integrity before mastery claims."] },
    ch23_kc2: { label: "[KC2]", lines: ["Domain C: link-level prompts, latency, checklist integrity."] },
    ch23_kc3: { label: "[KC3]", lines: ["Domain E: culturally valid steps, assent, honest reporting."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 23",
    intro: "Chapter 23 chaining—shaping is Chapter 22; extinction is Chapter 24.",
    entries: [
      { term: "Task analysis", definition: "Ordered decomposition listing each discriminable response product in a chain.", footnoteRef: "ch23_v1" },
      { term: "Forward chaining", definition: "Teach initial links to criterion before adding subsequent components sequentially.", footnoteRef: "ch23_v2" },
      { term: "Backward chaining", definition: "Teach terminal links first then add preceding components.", footnoteRef: "ch23_v3" },
      { term: "Total-task chaining", definition: "Support entire chain each trial with systematic prompt fading across components.", footnoteRef: "ch23_v4" },
      { term: "Behavior chain", definition: "Sequence wherein each response becomes SD for the next in the series.", footnoteRef: "ch23_v5" },
      { term: "Inter-response chain latency", definition: "Timing between components flagging where fluency or prompts still lag.", footnoteRef: "ch23_v6" },
      { term: "Whole-chain integrity", definition: "Fluent performance across all links under naturalistic SDs—not partial links only.", footnoteRef: "ch23_kc1" },
      { term: "Naturalistic SD transfer", definition: "Fading instructor prompts to cues recognized outside sessions.", footnoteRef: "ch23_v4" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 23",
    intro: "Task analysis, chaining tactics, measurement, SD transfer, ethics.",
    concepts: [
      {
        title: "Behavior chains and task analysis",
        segments: [
          { type: "text", text: "Decompose multistep skills; each response product occasions the next link " },
          { type: "footnote", ref: "ch23_v1" },
          { type: "footnote", ref: "ch23_v5" },
          { type: "footnote", ref: "ch23_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Forward, backward, and total-task tactics",
        segments: [
          { type: "text", text: "Select tactic matching motivation, safety, and where errors cluster " },
          { type: "footnote", ref: "ch23_v2" },
          { type: "footnote", ref: "ch23_v3" },
          { type: "footnote", ref: "ch23_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Link-level measurement and whole-chain probes",
        segments: [
          { type: "text", text: "Prompt levels per component, inter-response latency, checklist integrity before mastery " },
          { type: "footnote", ref: "ch23_v6" },
          { type: "footnote", ref: "ch23_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Social validity and ethical chaining",
        segments: [
          { type: "text", text: "Culturally valid steps, assent-sensitive drill, honest reporting when community cannot reproduce chains " },
          { type: "footnote", ref: "ch23_5" },
          { type: "footnote", ref: "ch23_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 23 chaining vocabulary or reject if the stem describes shaping approximations, partial-link mastery claims, or punishment-first chain correction.",
  matchActivityInstructions:
    "Select chaining tactic, whole-chain integrity assessment, latency interpretation, or ethical task-analysis revision for Cooper Chapter 23.",
  chainActivityInstructions:
    "Sequence chaining workflow: task analysis and social validity review → select chaining tactic → collect link-level data → generalize to natural SDs with maintenance sampling.",
  mts: [
    {
      sample_stimulus: "Learner masters first two links but collapses when entire chain required.",
      comparison_options: [
        "Blend total-task supports or backward chaining; measure whole-chain integrity",
        "Declare chain mastered after partial links",
        "Remove task analysis permanently",
        "Switch to punishment-only correction",
      ],
      correct_match: "Blend total-task supports or backward chaining; measure whole-chain integrity",
      error_feedback: "Partial links ≠ whole-chain mastery.",
    },
    {
      sample_stimulus: "Flawless early-link data; whole-chain classroom probes crumble; marketing claims mastery.",
      comparison_options: [
        "Whole-chain control incomplete—defer mastery claims",
        "Discard task analysis after dual-link success",
        "Default to punitive correction for chain drops",
        "Ignore inter-response latency",
      ],
      correct_match: "Whole-chain control incomplete—defer mastery claims",
      error_feedback: "Domain F + E honesty required.",
    },
    {
      sample_stimulus: "Family cites culturally disrespectful chaining step resisted at home.",
      comparison_options: [
        "Co-author culturally valid substitutions before scripted repetition continues",
        "Insist scripted sequence universal mechanically",
        "Delete chain goal without discussion",
        "Punish home noncompliance",
      ],
      correct_match: "Co-author culturally valid substitutions before scripted repetition continues",
      error_feedback: "Domain E social validity priority.",
    },
    {
      sample_stimulus: "Team differentially reinforces approximations toward one hand-washing motion.",
      comparison_options: [
        "Shaping (Ch 22)—not chaining",
        "Forward chaining",
        "Backward chaining",
        "Total-task chaining",
      ],
      correct_match: "Shaping (Ch 22)—not chaining",
      error_feedback: "Shaping morphs one topography.",
    },
    {
      sample_stimulus: "Long pauses between links three and four during whole-chain probe.",
      comparison_options: [
        "Inter-response latency flags weak intermediary control—adjust prompts/fades",
        "Ignore—endpoint achieved sporadically",
        "Chain mastered automatically",
        "Switch to extinction",
      ],
      correct_match: "Inter-response latency flags weak intermediary control—adjust prompts/fades",
      error_feedback: "Latency exposes weak links.",
    },
    {
      sample_stimulus: "Terminal product (clean hands) most motivating; early steps error-prone.",
      comparison_options: [
        "Consider backward chaining",
        "Forward chaining only always",
        "Abandon task analysis",
        "Punish early-step errors",
      ],
      correct_match: "Consider backward chaining",
      error_feedback: "Terminal-first motivation tactic.",
    },
    {
      sample_stimulus: "Instructor prompts still required on link five; team claims full independence.",
      comparison_options: [
        "Prompt fade incomplete—continue link-level data before independence claims",
        "Accept from marketing",
        "Delete link five",
        "Punish prompt dependence",
      ],
      correct_match: "Prompt fade incomplete—continue link-level data before independence claims",
      error_feedback: "Per-link prompt levels matter.",
    },
    {
      sample_stimulus: "Learner fatigues during repetitive chain drill; assent wavers.",
      comparison_options: [
        "Modify pacing, honor assent, revisit task validity",
        "Continue drill for data quota",
        "Punish fatigue",
        "Skip assent documentation",
      ],
      correct_match: "Modify pacing, honor assent, revisit task validity",
      error_feedback: "Assent-sensitive ethics.",
    },
  ],
  chainTitle: "Chaining assembly",
  chainFragments: [
    { id: "a", text: "Conduct task analysis and social validity review with stakeholders." },
    { id: "b", text: "Select chaining tactic matching motivation and safety constraints." },
    { id: "c", text: "Collect link-level prompt and integrity data before whole-chain claims." },
    { id: "d", text: "Generalize chains to natural SDs with maintenance sampling." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Task analysis", back: "Ordered step decomposition." },
    { front: "Forward chaining", back: "First links to criterion first." },
    { front: "Backward chaining", back: "Terminal links first." },
    { front: "Total-task", back: "Full chain each trial." },
    { front: "Chain latency", back: "Time between links." },
    { front: "Whole-chain integrity", back: "All links under natural SDs." },
  ],
  worksheet: {
    title: "CHH Chapter 23 — chaining",
    instructions:
      "Classify chaining tactics, whole-chain status, latency interpretation, shaping vs chaining, and ethical task-analysis response.",
    scenario:
      "Scenario A — Learner masters first two links; collapses on whole-chain requirement.",
    scenario_follow_up:
      "Scenario B — Early-link data perfect; classroom whole-chain probes fail; marketing claims mastery.\n\nScenario C — Family rejects culturally disrespectful chain step at home.\n\nScenario D — Long latency between links three and four.\n\nScenario E — Learner fatigues; assent wavers during repetitive chain drill.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best priority?",
        options: ["Total-task/backward supports; measure whole-chain integrity", "Declare mastery from partial links", "Punishment-only correction"],
        correct: "Total-task/backward supports; measure whole-chain integrity",
      },
      {
        id: "response_2",
        label: "Scenario B · Most accurate description?",
        options: ["Whole-chain control incomplete—defer mastery claims", "Chain mastered", "Discard task analysis"],
        correct: "Whole-chain control incomplete—defer mastery claims",
      },
      {
        id: "response_3",
        label: "Scenario C · Priority?",
        options: ["Co-author culturally valid substitutions", "Insist universal script", "Punish home noncompliance"],
        correct: "Co-author culturally valid substitutions",
      },
      {
        id: "response_4",
        label: "Scenario D · Interpretation?",
        options: ["Weak intermediary control—adjust prompts/fades", "Ignore latency", "Automatic mastery"],
        correct: "Weak intermediary control—adjust prompts/fades",
      },
      {
        id: "response_5",
        label: "Scenario E · Ethics-aligned response?",
        options: ["Modify pacing; honor assent", "Continue for quota", "Punish fatigue"],
        correct: "Modify pacing; honor assent",
      },
      {
        id: "response_6",
        label: "Behavior chain means:",
        options: ["Each response becomes SD for the next", "One shaped topography only", "Extinction sequence"],
        correct: "Each response becomes SD for the next",
      },
      {
        id: "response_7",
        label: "Backward chaining is useful when:",
        options: ["Terminal products matter most or early steps error-prone", "Never appropriate", "Identical to shaping"],
        correct: "Terminal products matter most or early steps error-prone",
      },
      {
        id: "response_8",
        label: "Ethical chaining prioritizes:",
        options: ["Culturally valid steps, assent, honest whole-chain reporting", "Partial-link marketing claims", "Punishment-first correction"],
        correct: "Culturally valid steps, assent, honest whole-chain reporting",
      },
    ],
    remediationLog:
      "Rebuild Chapter 23 fluency: task analysis valid? → tactic fit? → link prompts/latency logged? → whole-chain probe? → natural SD transfer? → social validity?",
  },
  bdsBank: CHAPTER_23_CHAINING_QUIZ_BANK,
};
