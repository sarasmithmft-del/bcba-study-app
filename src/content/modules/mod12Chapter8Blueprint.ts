import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_08_DESIGN_QUIZ_BANK } from "@/content/modules/quiz/chapter08DesignQuizBank";

export const MOD12_BLUEPRINT: ExtensionBlueprint = {
  id: "mod12",
  chapterNumber: 8,
  activityPrefix: 2120,
  title: "Reversal and Multielement Designs",
  codexHeading: "READING — Chapter 8 (Reversal and Multielement Designs)",
  codexIntro: `Chapter 8 in Cooper, Heron, and Heward introduces two closely related single-subject designs for demonstrating experimental control when graph inspection (Chapter 7) shows promising change: reversal (withdrawal) designs and multielement (alternating treatments) designs.

Reversal designs introduce an intervention, then briefly withdraw it so behavior can move back toward baseline levels—a pattern called resurgence. If withdrawal is followed by recovery when intervention returns, analysts have stronger within-subject evidence that programmed contingencies—not coincidence—controlled the change. Classic ABAB includes baseline (A), intervention (B), withdrawal return toward baseline (A), and reintervention/recovery (B). Stable baseline and a clear initial intervention effect should precede withdrawal so resurgence is interpretable.

Ethical limits are central to Chapter 8. Full withdrawal can harm learners when it removes essential communication, medical supports, or safety-related reinforcement. Cooper directs analysts toward multiple-baseline designs (Chapter 9), abbreviated reversal-lite probes, or multielement comparisons when textbook withdrawal is indefensible—analytic accountability continues, but consent and harm reduction come first. Covert contingency changes violate informed participation and fidelity reporting.

Multielement designs compare two or more active conditions by alternating them across sessions or days on the same graph overlay. They allow rapid comparison without extended withdrawal when conditions are ethically deliverable. Counterbalancing or randomized sequencing distributes order effects (weekday staffing, fatigue, novelty) so they do not impersonate treatment superiority. Analysts must watch for multielement interference and carryover—when effects of one condition bleed into the next—and for generalized enhancement when improvement spreads across all conditions.

Phase fidelity documentation applies to both design families: timestamped notes on which schedule, prompt level, or reinforcement density was active when the graph changed. Domain F items test whether you can narrate resurgence, recovery, alternation, and ethical redesign; Domain E items test refusal of covert removal and honest phase reporting.

For BCBA exam prep: identify design from vignette (withdrawal vs alternation vs staggered baseline preview), name resurgence/recovery/carryover/counterbalancing, and select ethical alternatives when AAC or safety blocks withdrawal.`,
  footnotes: {
    ch8_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 8 — reversal (withdrawal) designs, resurgence, recovery (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "ABAB logic replicates effect within participant.",
        "Not quoted from CHH.",
      ],
    },
    ch8_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 8 — ethical constraints on withdrawal; alternatives when removal is untenable.",
        "Domain E safeguards plus Domain F redesign.",
      ],
    },
    ch8_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 8 — multielement (alternating treatments) designs and counterbalancing.",
        "Compare conditions without full withdrawal when appropriate.",
      ],
    },
    ch8_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 8 — carryover, multielement interference, generalized enhancement.",
        "Tentative language when separation is unclear.",
      ],
    },
    ch8_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 8 — phase fidelity documentation across condition changes.",
        "Links Domain C procedural integrity to Domain F inference.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch8_1" },
    { afterSentenceIndex: 2, ref: "ch8_2" },
    { afterSentenceIndex: 4, ref: "ch8_3" },
    { afterSentenceIndex: 5, ref: "ch8_4" },
    { afterSentenceIndex: 6, ref: "ch8_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 8 recap",
    intro:
      "Chapter 8 is about proving your intervention actually caused the change—by withdrawing it briefly (reversal) or by alternating treatments fairly (multielement)—without crossing ethical lines.",
    chunks: [
      {
        subtitle: "Reversal logic",
        segments: [
          {
            type: "text",
            text: "Remove the intervention briefly; if behavior resurges toward baseline and improves again when you restore treatment (recovery), contingency control is stronger ",
          },
          { type: "footnote", ref: "ch8_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethics first",
        segments: [
          {
            type: "text",
            text: "Never remove essential AAC or safety supports covertly. Use multiple-baseline, multielement, or brief reversal-lite when full withdrawal is unsafe ",
          },
          { type: "footnote", ref: "ch8_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Multielement comparisons",
        segments: [
          {
            type: "text",
            text: "Alternate two or more treatments across sessions, counterbalance order, and watch for carryover between conditions ",
          },
          { type: "footnote", ref: "ch8_3" },
          { type: "footnote", ref: "ch8_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Document every phase change",
        segments: [
          {
            type: "text",
            text: "Fidelity notes must show what procedure was live when the graph shifted ",
          },
          { type: "footnote", ref: "ch8_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include confusing reversal with multielement alternation, ignoring resurgence/recovery, skipping counterbalancing, and covert withdrawal. Resolve them by naming the design, the ethical constraint, and the phase evidence required.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch8_v1: { label: "[V1]", lines: ["CHH Chapter 8 — reversal (withdrawal) design."] },
    ch8_v2: { label: "[V2]", lines: ["CHH Chapter 8 — resurgence."] },
    ch8_v3: { label: "[V3]", lines: ["CHH Chapter 8 — recovery (reintervention) phase."] },
    ch8_v4: { label: "[V4]", lines: ["CHH Chapter 8 — multielement / alternating treatments design."] },
    ch8_v5: { label: "[V5]", lines: ["CHH Chapter 8 — counterbalancing / random rotation."] },
    ch8_v6: { label: "[V6]", lines: ["CHH Chapter 8 — carryover / multielement interference."] },
    ch8_kc1: { label: "[KC1]", lines: ["Domain F: narrate phase logic and experimental control evidence."] },
    ch8_kc2: { label: "[KC2]", lines: ["Domain E: consent, least restrictive design, no covert contingency changes."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 8",
    intro: "Discriminate design family first—reversal versus multielement—then name phase evidence (resurgence, recovery, carryover).",
    entries: [
      { term: "Reversal (withdrawal) design", definition: "IV removed to test whether behavior returns toward baseline.", footnoteRef: "ch8_v1" },
      { term: "Resurgence", definition: "Behavior increases toward baseline levels when intervention withdrawn.", footnoteRef: "ch8_v2" },
      { term: "Recovery", definition: "Behavior improves again when intervention reintroduced after withdrawal.", footnoteRef: "ch8_v3" },
      { term: "Multielement design", definition: "Two+ conditions alternated rapidly for comparison.", footnoteRef: "ch8_v4" },
      { term: "Counterbalancing", definition: "Fair rotation of condition order to control sequence effects.", footnoteRef: "ch8_v5" },
      { term: "Carryover", definition: "Effects of one condition persisting into the next.", footnoteRef: "ch8_v6" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 8",
    intro: "Design choice follows ethics and the question: Can we withdraw safely, or must we alternate/compare instead?",
    concepts: [
      {
        title: "Resurgence + recovery",
        segments: [
          { type: "text", text: "Withdrawal plus regain when IV returns strengthens within-subject control " },
          { type: "footnote", ref: "ch8_v2" },
          { type: "footnote", ref: "ch8_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical alternatives",
        segments: [
          { type: "text", text: "When withdrawal harms, pivot to multielement or multiple-baseline paths " },
          { type: "footnote", ref: "ch8_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Multielement discipline",
        segments: [
          { type: "text", text: "Discriminable conditions, counterbalanced order, monitor carryover " },
          { type: "footnote", ref: "ch8_v4" },
          { type: "footnote", ref: "ch8_v6" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Classify each vignette as reversal, multielement, or ethical alternative—and name the phase event (resurgence, recovery, carryover).",
  matchActivityInstructions:
    "Select the design element, ethical response, or interpretive statement that best fits Cooper Chapter 8.",
  chainActivityInstructions:
    "Sequence reversal/multielement logic: stable baseline → clear effect → ethical design choice → fidelity-documented phase change → interpret resurgence/recovery or alternation.",
  mts: [
    {
      sample_stimulus: "DRA removed for three sessions; aggression rises; DRA restored and aggression drops again.",
      comparison_options: [
        "Reversal with resurgence and recovery",
        "Multiple baseline stagger only",
        "Indirect FAST only",
        "Group t-test",
      ],
      correct_match: "Reversal with resurgence and recovery",
      error_feedback: "Withdrawal and reintroduction pattern is classic reversal logic.",
    },
    {
      sample_stimulus: "AAC device cannot be removed; team alternates two prompting strategies across days with randomized order.",
      comparison_options: [
        "Ethical multielement comparison",
        "Covert reversal",
        "No design possible",
        "Extinction only",
      ],
      correct_match: "Ethical multielement comparison",
      error_feedback: "Alternation replaces unsafe withdrawal while preserving comparison.",
    },
    {
      sample_stimulus: "Condition A always runs Mondays; Condition B always runs Fridays.",
      comparison_options: [
        "Sequence confound—counterbalance needed",
        "Perfect counterbalancing",
        "IOA formula",
        "Baseline stability proof",
      ],
      correct_match: "Sequence confound—counterbalance needed",
      error_feedback: "Weekday pairing confounds condition with order effects.",
    },
    {
      sample_stimulus: "Improvement under Condition X also appears briefly during Condition Y sessions.",
      comparison_options: [
        "Carryover / multielement interference",
        "Proof Condition Y superior",
        "IOA only issue",
        "Respondent extinction",
      ],
      correct_match: "Carryover / multielement interference",
      error_feedback: "Bleed-through complicates which IV caused change.",
    },
    {
      sample_stimulus: "Supervisor discovers covert reinforcement thinning during supposed withdrawal phase.",
      comparison_options: [
        "Domain E violation—halt and redesign with consent",
        "Acceptable shortcut",
        "IOA substitute",
        "Proof of resurgence",
      ],
      correct_match: "Domain E violation—halt and redesign with consent",
      error_feedback: "Covert changes invalidate reversal demonstration and violate ethics.",
    },
    {
      sample_stimulus: "Stable baseline, clear intervention drop, brief ethical withdrawal shows resurgence, recovery on reintroduction.",
      comparison_options: [
        "Strong ABAB demonstration pending fidelity/IOA",
        "Ambiguous always",
        "Delete withdrawal phase",
        "FA completed",
      ],
      correct_match: "Strong ABAB demonstration pending fidelity/IOA",
      error_feedback: "Full phase pattern supports control narrative when ethically done.",
    },
    {
      sample_stimulus: "Overlay graph shows separated paths favoring DRA over extinction with low carryover.",
      comparison_options: [
        "Tentative multielement preference pending interference check",
        "Automatic mastery forever",
        "Reversal complete",
        "No graph needed",
      ],
      correct_match: "Tentative multielement preference pending interference check",
      error_feedback: "Alternation supports comparison—still note carryover and fidelity.",
    },
    {
      sample_stimulus: "High-risk SIB; team proposes full removal of all reinforcement for two weeks.",
      comparison_options: [
        "Redesign—unsafe withdrawal; consider multielement or multiple baseline",
        "Required ABAB",
        "Skip documentation",
        "Hide from caregivers",
      ],
      correct_match: "Redesign—unsafe withdrawal; consider multielement or multiple baseline",
      error_feedback: "Safety and ethics constrain design intensity.",
    },
  ],
  chainTitle: "Chapter 8 design workflow",
  chainFragments: [
    { id: "a", text: "Establish stable baseline and document intervention effect." },
    { id: "b", text: "Select reversal, multielement, or ethical alternative (e.g., multiple baseline)." },
    { id: "c", text: "Implement with counterbalancing and fidelity notes on every phase line." },
    { id: "d", text: "Interpret resurgence/recovery or separated alternation paths; report limits." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  worksheet: {
    title: "CHH Chapter 8 — reversal & multielement designs",
    instructions:
      "Identify design type, phase evidence, and ethical response. Chapter 9 covers multiple baseline in depth.",
    scenario:
      "Scenario A — Brief token removal; problem behavior increases; tokens restored; behavior decreases again.",
    scenario_follow_up:
      "Scenario B — AAC required 24/7; cannot withdraw. Two interventions compared alternating with randomized session order.\n\nScenario C — Treatment A only on early-week sessions; Treatment B only on late-week sessions.\n\nScenario D — Covert schedule thinning during labeled withdrawal phase.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Design evidence?",
        options: [
          "Resurgence and recovery supporting reversal logic",
          "Multiple baseline only",
          "Questionnaire only",
          "Group mean comparison",
        ],
        correct: "Resurgence and recovery supporting reversal logic",
      },
      {
        id: "response_2",
        label: "Scenario B · BEST design?",
        options: [
          "Multielement (alternating treatments) comparison",
          "Forced full ABAB withdrawal",
          "No measurement",
          "Covert removal",
        ],
        correct: "Multielement (alternating treatments) comparison",
      },
      {
        id: "response_3",
        label: "Scenario C · Primary threat?",
        options: [
          "Sequence confound (order/weekday effects)",
          "Perfect counterbalancing",
          "IOA type error",
          "Latency only",
        ],
        correct: "Sequence confound (order/weekday effects)",
      },
      {
        id: "response_4",
        label: "Scenario D · FIRST action?",
        options: [
          "Stop covert change; reopen consent; document honestly; redesign",
          "Continue because graph looks good",
          "Delete withdrawal phase from report",
          "Claim FA done",
        ],
        correct: "Stop covert change; reopen consent; document honestly; redesign",
      },
      {
        id: "response_5",
        label: "Counterbalancing in multielement designs controls:",
        options: ["Order effects", "IOA only", "MO only", "Graph color"],
        correct: "Order effects",
      },
      {
        id: "response_6",
        label: "Carryover MOST challenges:",
        options: [
          "Attributing performance to the correct condition",
          "Axis labeling",
          "Defining behavior",
          "Token economy only",
        ],
        correct: "Attributing performance to the correct condition",
      },
      {
        id: "response_7",
        label: "Recovery phase in ABAB:",
        options: [
          "Reintroduction of intervention after withdrawal",
          "Second baseline only",
          "IOA calculation",
          "FA alone condition",
        ],
        correct: "Reintroduction of intervention after withdrawal",
      },
      {
        id: "response_8",
        label: "When withdrawal is unethical, Cooper Chapter 8 points toward:",
        options: [
          "Multiple-baseline or multielement alternatives",
          "Covert withdrawal",
          "Fabricating data",
          "Abandoning all analysis",
        ],
        correct: "Multiple-baseline or multielement alternatives",
      },
    ],
    remediationLog:
      "Rebuild Chapter 8 fluency: name design → resurgence/recovery OR alternation → counterbalancing → carryover check → ethical limits → fidelity on every phase line.",
  },
  bdsBank: CHAPTER_08_DESIGN_QUIZ_BANK,
};
