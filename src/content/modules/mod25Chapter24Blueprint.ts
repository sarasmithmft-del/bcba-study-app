import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_24_EXTINCTION_QUIZ_BANK } from "@/content/modules/quiz/chapter24ExtinctionQuizBank";

export const MOD25_BLUEPRINT: ExtensionBlueprint = {
  id: "mod25",
  chapterNumber: 24,
  activityPrefix: 2250,
  title: "Extinction",
  codexHeading: "READING — Chapter 24 (Extinction)",
  codexIntro: `Chapter 24 in Cooper, Heron, and Heward covers extinction—the withdrawal of reinforcement for a previously reinforced response class. When the maintaining reinforcer no longer follows the behavior, response rate typically decreases over time—but not before predictable side effects that teams must prepare for.

Extinction bursts are temporary spikes in intensity or frequency when reinforcement first ceases. They are lawful phenomena, not learner sabotage or noncompliance. Supervisors reframe bursts analytically while verifying extinction integrity and that alternative supports remain in place.

Resurgence occurs when previously extinguished patterns reappear after context changes, alternative reinforcement thins, or intermittent reinforcement histories resurface. Resurgence is not automatic proof of treatment failure—it demands analysis of what shifted in the environment or contingency arrangement.

Planned extinction requires documented schedules, stakeholder consent, and safety reviews before reinforcement truly halts—especially when severe topographies could escalate. Teams pair extinction with reinforcement for alternative repertoires, protective plans, medically informed oversight, and telegraphed strategies families rehearse.

Extinction integrity means observers verify that competing reinforcement did not covertly replenish the target behavior during extinction windows. Slipped reinforcers, undocumented lunch breaks, or staff convenience undermines the phase narrative and requires transparent rework—not cosmetic graphs.

Measurement distinguishes extinction phases from reinforcement returns, documenting magnitude and duration of bursts, resurgence spikes, latency changes, and fidelity notes proving reinforcers honestly stayed withheld.

Extinction differs from punishment and from differential reinforcement procedures (Chapter 25): extinction withholds the maintaining reinforcer; punishment adds aversive consequences; DRA/DRO/DRI/DRL reinforce alternatives or intervals while thinning challenges.

Covert extinction surprises, indefinite withholding without consent, blaming learners for expected bursts, and marketing extinction as humane when punitive undertones saturate staff culture violate ethical standards.

For BCBA exam prep: verify extinction integrity, distinguish burst from resurgence, check alternative reinforcement plans, and reject blame-forward burst interpretation before choosing an answer.`,
  footnotes: {
    ch24_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 24 — extinction as reinforcer withdrawal (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Previously reinforced class no longer contacts maintaining consequence.",
        "Not quoted from CHH.",
      ],
    },
    ch24_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 24 — extinction burst.",
        "Temporary intensity/frequency spike when reinforcement first ceases.",
      ],
    },
    ch24_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 24 — resurgence.",
        "Extinguished patterns reappear after context or reinforcement shifts.",
      ],
    },
    ch24_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 24 — planned extinction, safety reviews, alternative reinforcement.",
        "Document before withholding reinforcement.",
      ],
    },
    ch24_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 24 — extinction integrity and ethical practice.",
        "No covert reinforcement; no blaming bursts.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch24_1" },
    { afterSentenceIndex: 1, ref: "ch24_2" },
    { afterSentenceIndex: 2, ref: "ch24_3" },
    { afterSentenceIndex: 3, ref: "ch24_4" },
    { afterSentenceIndex: 4, ref: "ch24_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 24 recap",
    intro:
      "Chapter 24 is about stopping reinforcement for a behavior that used to pay off—with a safety plan, honest data, and zero surprise that things may get louder before they get quieter.",
    chunks: [
      {
        subtitle: "What extinction is",
        segments: [
          {
            type: "text",
            text: "You withhold the reinforcer that used to maintain the behavior. Over time the behavior should decrease—but only if reinforcement truly stays off ",
          },
          { type: "footnote", ref: "ch24_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Extinction burst",
        segments: [
          {
            type: "text",
            text: "When reinforcement first stops, behavior often spikes in intensity or frequency. That burst is predictable—not sabotage ",
          },
          { type: "footnote", ref: "ch24_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Resurgence",
        segments: [
          {
            type: "text",
            text: "Old behavior can pop back up when settings change, alternatives thin, or intermittent histories resurface. Analyze the shift—do not moralize the learner ",
          },
          { type: "footnote", ref: "ch24_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Safety and integrity",
        segments: [
          {
            type: "text",
            text: "Plan extinction with consent, safety review, and alternative reinforcement. Document that nobody slipped reinforcers during extinction windows ",
          },
          { type: "footnote", ref: "ch24_4" },
          { type: "footnote", ref: "ch24_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include blaming learners for extinction bursts, confusing resurgence with treatment failure without context change, covert reinforcement during extinction, and skipping alternative reinforcement plans. Resolve them by verifying extinction integrity, documenting bursts, and checking for context or reinforcement shifts before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch24_v1: { label: "[V1]", lines: ["CHH Chapter 24 — extinction."] },
    ch24_v2: { label: "[V2]", lines: ["CHH Chapter 24 — extinction burst."] },
    ch24_v3: { label: "[V3]", lines: ["CHH Chapter 24 — resurgence."] },
    ch24_v4: { label: "[V4]", lines: ["CHH Chapter 24 — planned extinction."] },
    ch24_v5: { label: "[V5]", lines: ["CHH Chapter 24 — extinction integrity."] },
    ch24_v6: { label: "[V6]", lines: ["CHH Chapter 24 — alternative reinforcement plan."] },
    ch24_kc1: { label: "[KC1]", lines: ["Domain F: burst vs resurgence vs integrity collapse."] },
    ch24_kc2: { label: "[KC2]", lines: ["Domain C: magnitude/duration of bursts, fidelity logs."] },
    ch24_kc3: { label: "[KC3]", lines: ["Domain E: consent, safety, no covert reinforcement."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 24",
    intro: "Chapter 24 extinction—differential reinforcement is Chapter 25.",
    entries: [
      { term: "Extinction", definition: "Reinforcer withdrawal targeting a response class historically maintained by reinforcement.", footnoteRef: "ch24_v1" },
      { term: "Extinction burst", definition: "Temporary intensity or frequency spike when reinforcement first ceases.", footnoteRef: "ch24_v2" },
      { term: "Resurgence", definition: "Previously extinguished patterns reappear when contexts or reinforcement shift.", footnoteRef: "ch24_v3" },
      { term: "Planned extinction", definition: "Documented schedule and safety reviews before reinforcement truly halts.", footnoteRef: "ch24_v4" },
      { term: "Extinction integrity", definition: "Verification that competing reinforcement did not covertly replenish target behavior.", footnoteRef: "ch24_v5" },
      { term: "Alternative reinforcement plan", definition: "Proactive differential reinforcement scaffolding replacing removed contingencies.", footnoteRef: "ch24_v6" },
      { term: "Multi-element history", definition: "Complex reinforcement histories muddying simple extinction narratives.", footnoteRef: "ch24_v1" },
      { term: "Spontaneous recovery", definition: "Temporary return of extinguished behavior after time passes without reinforcement.", footnoteRef: "ch24_v3" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 24",
    intro: "Withdrawal, bursts, resurgence, integrity, safety, ethics.",
    concepts: [
      {
        title: "Extinction as reinforcer withdrawal",
        segments: [
          { type: "text", text: "Withhold maintaining reinforcer for previously reinforced class—distinct from punishment " },
          { type: "footnote", ref: "ch24_v1" },
          { type: "footnote", ref: "ch24_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Extinction burst and lawful side effects",
        segments: [
          { type: "text", text: "Predictable spike when reinforcement ceases—reframe analytically, not as sabotage " },
          { type: "footnote", ref: "ch24_v2" },
          { type: "footnote", ref: "ch24_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Resurgence and context shifts",
        segments: [
          { type: "text", text: "Extinguished behavior returns after setting change or alternative reinforcement thins—analyze shift " },
          { type: "footnote", ref: "ch24_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Planned extinction, integrity, and ethics",
        segments: [
          { type: "text", text: "Safety review, alternative reinforcement, fidelity logs—no covert slips or blame narratives " },
          { type: "footnote", ref: "ch24_v4" },
          { type: "footnote", ref: "ch24_v5" },
          { type: "footnote", ref: "ch24_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 24 extinction vocabulary or reject if the stem describes punishment, covert reinforcement during extinction, or blame-forward burst interpretation.",
  matchActivityInstructions:
    "Select extinction classification, burst interpretation, resurgence analysis, integrity repair, or ethical supervision response for Cooper Chapter 24.",
  chainActivityInstructions:
    "Sequence extinction workflow: risk review and consent → train teams on bursts/resurgence → graph extinction windows with fidelity notes → layer alternative reinforcement if risk spikes.",
  mts: [
    {
      sample_stimulus: "Burst spikes during extinction; trainer labels learner noncompliant sabotage.",
      comparison_options: [
        "Reframe bursts as predictable phenomena; verify integrity and supports",
        "Approve punishment-forward stance",
        "Restart reinforcement covertly without documentation",
        "Ignore safety plan because graph ascended",
      ],
      correct_match: "Reframe bursts as predictable phenomena; verify integrity and supports",
      error_feedback: "Bursts are lawful—not sabotage.",
    },
    {
      sample_stimulus: "Resurgence after vacation despite intermittent reinforcement history.",
      comparison_options: [
        "Teach resurgence histories; bolster alternatives before blaming learners",
        "Treat resurgence as proof treatment failed",
        "Omit resurgence from reports",
        "Reinforce extinction class covertly",
      ],
      correct_match: "Teach resurgence histories; bolster alternatives before blaming learners",
      error_feedback: "Domain F + E teaching point.",
    },
    {
      sample_stimulus: "Staff admits slipped reinforcers during extinction lunches.",
      comparison_options: [
        "Extinction integrity collapsed—repair fidelity and redo phase narrative transparently",
        "Minor snacks negligible if aggression dipped",
        "Hide slips from supervisor",
        "Punish staff publicly only",
      ],
      correct_match: "Extinction integrity collapsed—repair fidelity and redo phase narrative transparently",
      error_feedback: "Correct action: Extinction integrity collapsed—repair fidelity and redo phase narrative transparently",
    },
    {
      sample_stimulus: "Team adds loud reprimands when behavior persists during extinction.",
      comparison_options: [
        "Punishment added—distinct from extinction alone",
        "Pure extinction procedure",
        "DRA automatically",
        "MO abolishing operation",
      ],
      correct_match: "Punishment added—distinct from extinction alone",
      error_feedback: "Extinction withholds reinforcer only.",
    },
    {
      sample_stimulus: "Severe aggression targeted; no safety review before extinction.",
      comparison_options: [
        "Pause—complete risk review, consent, alternative reinforcement before withholding",
        "Proceed—extinction always safe",
        "Skip documentation",
        "Use punishment instead without review",
      ],
      correct_match: "Pause—complete risk review, consent, alternative reinforcement before withholding",
      error_feedback: "Safety review prerequisite.",
    },
    {
      sample_stimulus: "Behavior decreases after reinforcer withheld consistently with integrity.",
      comparison_options: [
        "Expected extinction effect when integrity maintained",
        "Proof of punishment success",
        "Respondent extinction only",
        "Automatic resurgence",
      ],
      correct_match: "Expected extinction effect when integrity maintained",
      error_feedback: "Lawful decrease over time.",
    },
    {
      sample_stimulus: "Intermittent reinforcement history before extinction phase.",
      comparison_options: [
        "Expect possible burst/resurgence complexity—document history",
        "Ignore history",
        "Extinction impossible always",
        "Skip alternative reinforcement",
      ],
      correct_match: "Expect possible burst/resurgence complexity—document history",
      error_feedback: "Multi-element histories matter.",
    },
    {
      sample_stimulus: "Covert extinction surprise—family not told reinforcement would stop.",
      comparison_options: [
        "Domain E violation—telegraph plan with consent",
        "Acceptable efficiency",
        "Required for bursts",
        "IOA issue only",
      ],
      correct_match: "Domain E violation—telegraph plan with consent",
      error_feedback: "Stakeholder consent required.",
    },
  ],
  chainTitle: "Extinction safety sweep",
  chainFragments: [
    { id: "a", text: "Complete risk review and stakeholder consent scaffolding before thinning reinforcement." },
    { id: "b", text: "Train teams on bursts and resurgence so responses stay analytic not punitive." },
    { id: "c", text: "Graph extinction windows with fidelity notes proving reinforcers truly withheld." },
    { id: "d", text: "Layer alternative reinforcement pathways plus humane degradation plans if risk spikes." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Extinction", back: "Reinforcer withdrawal." },
    { front: "Burst", back: "Predictable initial spike." },
    { front: "Resurgence", back: "Return after context shift." },
    { front: "Integrity", back: "No covert reinforcement." },
    { front: "Planned extinction", back: "Documented safety first." },
    { front: "Alternative plan", back: "DRA/DRO scaffold." },
  ],
  worksheet: {
    title: "CHH Chapter 24 — extinction",
    instructions:
      "Classify extinction vs punishment, burst vs resurgence, integrity status, and ethical supervision response.",
    scenario:
      "Scenario A — Burst spikes during extinction; trainer calls it sabotage.",
    scenario_follow_up:
      "Scenario B — Resurgence after vacation with intermittent history.\n\nScenario C — Staff slipped reinforcers during extinction lunches.\n\nScenario D — Team adds reprimands when behavior persists.\n\nScenario E — Severe behavior targeted with no safety review.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Supervisory correction?",
        options: ["Reframe burst; verify integrity and supports", "Approve punishment stance", "Covertly restart reinforcement"],
        correct: "Reframe burst; verify integrity and supports",
      },
      {
        id: "response_2",
        label: "Scenario B · Teaching point?",
        options: ["Teach resurgence; bolster alternatives", "Treatment failed permanently", "Omit from reports"],
        correct: "Teach resurgence; bolster alternatives",
      },
      {
        id: "response_3",
        label: "Scenario C · Methodological consequence?",
        options: ["Integrity collapsed—repair fidelity transparently", "Snacks negligible", "Hide from supervisor"],
        correct: "Integrity collapsed—repair fidelity transparently",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["Punishment added—not pure extinction", "Pure extinction", "DRA only"],
        correct: "Punishment added—not pure extinction",
      },
      {
        id: "response_5",
        label: "Scenario E · Required action?",
        options: ["Pause; complete risk review and alternative plan", "Proceed without review", "Punish only"],
        correct: "Pause; complete risk review and alternative plan",
      },
      {
        id: "response_6",
        label: "Extinction burst means:",
        options: ["Temporary spike when reinforcement first ceases", "Learner sabotage", "Permanent failure"],
        correct: "Temporary spike when reinforcement first ceases",
      },
      {
        id: "response_7",
        label: "Extinction integrity requires:",
        options: ["Verification reinforcers truly withheld", "Optional notes", "Hero captions only"],
        correct: "Verification reinforcers truly withheld",
      },
      {
        id: "response_8",
        label: "Ethical extinction prioritizes:",
        options: ["Consent, safety review, alternative reinforcement, honest reporting", "Covert surprises", "Blame for bursts"],
        correct: "Consent, safety review, alternative reinforcement, honest reporting",
      },
    ],
    remediationLog:
      "Rebuild Chapter 24 fluency: reinforcer withdrawn? → burst expected? → integrity logged? → resurgence context? → alternatives in place? → safety/consent?",
  },
  bdsBank: CHAPTER_24_EXTINCTION_QUIZ_BANK,
};
