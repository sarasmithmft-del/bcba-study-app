import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_27_FBA_QUIZ_BANK } from "@/content/modules/quiz/chapter27FunctionalBehaviorAssessmentQuizBank";

export const MOD28_BLUEPRINT: ExtensionBlueprint = {
  id: "mod28",
  chapterNumber: 27,
  activityPrefix: 2280,
  title: "Functional Behavior Assessment",
  codexHeading: "READING — Chapter 27 (Functional Behavior Assessment)",
  codexIntro: `Chapter 27 in Cooper, Heron, and Heward covers Functional Behavior Assessment (FBA)—the multimodal process of localizing reinforcing or punishing outcomes that maintain challenging behavior. FBA aggregates indirect, descriptive, and when safeguards permit experimental modalities. Incomplete indirect work should not stand in for corroborating evidence.

Indirect FBA uses recall or rating modalities—interviews, questionnaires, FAST-style rankings—to generate hypotheses needing corroboration, not stand-alone proof. Descriptive FBA summarizes naturalistic correlates through ABC logs, scatter summaries, and structured observation without programmed evocative contrasts.

Experimental functional analysis (FA) arranges controlled contrasts isolating suspected reinforcer classes when staffing, consent, and safety safeguards permit manipulation. Abbreviated multi-element substitutes may be used when full FA choreography exceeds resources—but must be labeled accurately.

Triangulation openly reconciles discrepant modalities before treatment intensity locks in. When indirect FAST rankings conflict with descriptive observation, teams document divergence and reconciliation plans—not silent preference for the favorite modality.

Hypothesis statements operationalize suspected antecedents, consequences, and setting events maintaining behavior. Modality-accurate reporting labels methods honestly—never laundering interviews into “FA completed” narratives.

Measurement inventories topography risks, IOA on descriptive codes, episode definitions, timestamp integrity, and honesty when modalities are mislabeled. Domain E breaches arise when grant prose overstates evidence strength.

Guardrails respect assent, trauma-informed interviews, cultural humility during indirect tools, medically informed plans before intensive manipulation, and supervisory ratios whenever aggression topography escalates risk.

For BCBA exam prep: identify modality type, check evidence depth, verify triangulation when sources disagree, and ensure conclusions match the assessment actually conducted before choosing an answer.`,
  footnotes: {
    ch27_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 27 — FBA multimodal overview (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Indirect, descriptive, experimental streams.",
        "Not quoted from CHH.",
      ],
    },
    ch27_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 27 — indirect and descriptive FBA.",
        "Hypothesis generation vs corroboration.",
      ],
    },
    ch27_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 27 — experimental FA and safeguards.",
        "Manipulation when consent and safety align.",
      ],
    },
    ch27_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 27 — triangulation and hypothesis statements.",
        "Reconcile discrepant modalities openly.",
      ],
    },
    ch27_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 27 — modality-accurate reporting and ethics.",
        "Assent, trauma-informed practice, cultural humility.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch27_1" },
    { afterSentenceIndex: 1, ref: "ch27_2" },
    { afterSentenceIndex: 2, ref: "ch27_3" },
    { afterSentenceIndex: 3, ref: "ch27_4" },
    { afterSentenceIndex: 4, ref: "ch27_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 27 recap",
    intro:
      "Chapter 27 is about figuring out what keeps problem behavior going—using the right assessment tools, saying honestly which tools you used, and not treating a parent interview as a full experimental analysis.",
    chunks: [
      {
        subtitle: "Three assessment streams",
        segments: [
          {
            type: "text",
            text: "Indirect tools generate hypotheses; descriptive observation maps correlates in real settings; experimental FA tests suspected functions with controlled contrasts when safe ",
          },
          { type: "footnote", ref: "ch27_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Indirect is not proof",
        segments: [
          {
            type: "text",
            text: "Questionnaires and FAST rankings start the story—they do not finish it without descriptive or experimental corroboration ",
          },
          { type: "footnote", ref: "ch27_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Triangulation",
        segments: [
          {
            type: "text",
            text: "When modalities disagree, document the conflict and reconciliation plan openly before locking treatment intensity ",
          },
          { type: "footnote", ref: "ch27_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Honest labels and ethics",
        segments: [
          {
            type: "text",
            text: "Report what you actually did—never label interviews as completed FA. Respect assent, trauma-informed practice, and cultural humility ",
          },
          { type: "footnote", ref: "ch27_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include treating indirect tools as definitive FA, mislabeling descriptive data as experimental FA, ignoring triangulation when modalities disagree, and skipping hypothesis statements before intervention. Resolve them by checking modality type, evidence depth, and whether conclusions match the assessment actually conducted before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch27_v1: { label: "[V1]", lines: ["CHH Chapter 27 — indirect FBA."] },
    ch27_v2: { label: "[V2]", lines: ["CHH Chapter 27 — descriptive FBA."] },
    ch27_v3: { label: "[V3]", lines: ["CHH Chapter 27 — experimental FA."] },
    ch27_v4: { label: "[V4]", lines: ["CHH Chapter 27 — triangulation."] },
    ch27_v5: { label: "[V5]", lines: ["CHH Chapter 27 — hypothesis statement."] },
    ch27_v6: { label: "[V6]", lines: ["CHH Chapter 27 — modality-accurate reporting."] },
    ch27_kc1: { label: "[KC1]", lines: ["Domain F: modality discrimination and hypothesis logic."] },
    ch27_kc2: { label: "[KC2]", lines: ["Domain C: IOA, episode definitions, timestamp integrity."] },
    ch27_kc3: { label: "[KC3]", lines: ["Domain E: honest reporting, assent, cultural humility."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 27",
    intro: "Chapter 27 FBA—token economies are Chapter 28.",
    entries: [
      { term: "Indirect FBA", definition: "Recall or rating modalities generating hypotheses needing corroboration.", footnoteRef: "ch27_v1" },
      { term: "Descriptive FBA", definition: "Naturalistic observation summarizing correlates without programmed contrasts.", footnoteRef: "ch27_v2" },
      { term: "Experimental FA", definition: "Evocative contrasts isolating reinforcer classes when safeguards permit.", footnoteRef: "ch27_v3" },
      { term: "Triangulation", definition: "Open reconciliation of discrepant modalities before treatment intensity locks in.", footnoteRef: "ch27_v4" },
      { term: "Hypothesis statement", definition: "Operational summary of antecedent, consequence, and setting events maintaining behavior.", footnoteRef: "ch27_v5" },
      { term: "Modality-accurate reporting", definition: "Labels methods honestly—never laundering interviews into FA completed narratives.", footnoteRef: "ch27_v6" },
      { term: "ABC recording", definition: "Descriptive log linking antecedents, behavior, and consequences.", footnoteRef: "ch27_v2" },
      { term: "Setting event", definition: "Contextual variable altering MO for challenging behavior.", footnoteRef: "ch27_v5" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 27",
    intro: "Modalities, triangulation, hypothesis, safeguards, honest reporting.",
    concepts: [
      {
        title: "Indirect, descriptive, and experimental streams",
        segments: [
          { type: "text", text: "Layer modalities by evidence strength—indirect hypotheses, descriptive correlates, experimental tests when safe " },
          { type: "footnote", ref: "ch27_v1" },
          { type: "footnote", ref: "ch27_v2" },
          { type: "footnote", ref: "ch27_v3" },
          { type: "footnote", ref: "ch27_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Triangulation and hypothesis statements",
        segments: [
          { type: "text", text: "Document modality conflicts; publish operational hypothesis before intervention intensity " },
          { type: "footnote", ref: "ch27_v4" },
          { type: "footnote", ref: "ch27_v5" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Measurement and IOA in descriptive FBA",
        segments: [
          { type: "text", text: "Topography risks, episode definitions, IOA on codes, timestamp integrity " },
          { type: "footnote", ref: "ch27_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical FBA guardrails",
        segments: [
          { type: "text", text: "Modality-accurate reporting, assent, trauma-informed interviews, cultural humility, medical/safety review before FA " },
          { type: "footnote", ref: "ch27_v6" },
          { type: "footnote", ref: "ch27_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 27 FBA vocabulary or reject if the stem describes indirect tools labeled as completed FA, silent modality preference, or intervention without hypothesis statement.",
  matchActivityInstructions:
    "Select FBA modality, triangulation response, modality-accurate reporting fix, or ethical safeguard for Cooper Chapter 27.",
  chainActivityInstructions:
    "Sequence FBA workflow: inventory risks and consent → layer indirect/descriptive with transparent conflicts → plan experimental contrasts when safeguards align → publish modality-accurate summaries.",
  mts: [
    {
      sample_stimulus: "Grant claims multi-element FA complete; appendix only questionnaires.",
      comparison_options: [
        "Relabel modalities honestly; stage supervised contrasts when staffing and consent allow",
        "Ship narrative unchanged",
        "Fabricate FA graphs",
        "Delete caregiver input",
      ],
      correct_match: "Relabel modalities honestly; stage supervised contrasts when staffing and consent allow",
      error_feedback: "Modality-accurate reporting required.",
    },
    {
      sample_stimulus: "Grant cites full FA; appendix only questionnaires.",
      comparison_options: [
        "Relabel modalities honestly; outline supervised contrasts when safeguards permit",
        "Ship unchanged because questionnaires faster",
        "Fabricate FA spikes",
        "Delete caregiver interviews",
      ],
      correct_match: "Relabel modalities honestly; outline supervised contrasts when safeguards permit",
      error_feedback: "Correct action: Relabel modalities honestly; outline supervised contrasts when safeguards permit",
    },
    {
      sample_stimulus: "Indirect FAST conflicts with descriptive observation; team picks favorite silently.",
      comparison_options: [
        "Document divergence and reconciliation plan openly before treatment intensity freezes",
        "Hide discord preserving confidence",
        "Delete weaker modality arbitrarily",
        "Skip hypothesis statement",
      ],
      correct_match: "Document divergence and reconciliation plan openly before treatment intensity freezes",
      error_feedback: "Correct action: Document divergence and reconciliation plan openly before treatment intensity freezes",
    },
    {
      sample_stimulus: "Team begins intensive intervention without hypothesis statement.",
      comparison_options: [
        "Pause—publish operational hypothesis from assessment data first",
        "Proceed—graphs will reveal function",
        "Use punishment until function clear",
        "Skip descriptive work",
      ],
      correct_match: "Pause—publish operational hypothesis from assessment data first",
      error_feedback: "Hypothesis before intensity.",
    },
    {
      sample_stimulus: "ABC scatter summary shows attention follows challenging behavior in 80% of episodes.",
      comparison_options: [
        "Descriptive FBA correlate—hypothesis not yet experimentally confirmed",
        "Definitive experimental FA proof",
        "Indirect FAST only",
        "Treatment mastery",
      ],
      correct_match: "Descriptive FBA correlate—hypothesis not yet experimentally confirmed",
      error_feedback: "Descriptive ≠ experimental proof.",
    },
    {
      sample_stimulus: "Controlled attention vs escape vs play conditions arranged with IOA.",
      comparison_options: [
        "Experimental FA modality",
        "Indirect interview only",
        "Descriptive ABC only",
        "Hypothesis statement only",
      ],
      correct_match: "Experimental FA modality",
      error_feedback: "Programmed contrasts.",
    },
    {
      sample_stimulus: "Parent interview suggests escape function.",
      comparison_options: [
        "Indirect FBA hypothesis—needs corroboration",
        "Completed experimental FA",
        "Definitive proof for treatment",
        "Descriptive scatterplot",
      ],
      correct_match: "Indirect FBA hypothesis—needs corroboration",
      error_feedback: "Indirect generates hypotheses.",
    },
    {
      sample_stimulus: "Aggression topography; no medical/safety review before FA manipulation.",
      comparison_options: [
        "Pause—complete safeguards, consent, supervisory ratios before experimental contrasts",
        "Proceed—FA always safe",
        "Skip documentation",
        "Label interview as FA",
      ],
      correct_match: "Pause—complete safeguards, consent, supervisory ratios before experimental contrasts",
      error_feedback: "Safety guardrails.",
    },
  ],
  chainTitle: "FBA triangulation chain",
  chainFragments: [
    { id: "a", text: "Inventory referral risks and consent scaffolding before assessment depth decisions." },
    { id: "b", text: "Layer indirect and descriptive streams documenting conflicts transparently." },
    { id: "c", text: "Plan defensible experimental contrasts only when safeguards align." },
    { id: "d", text: "Publish modality-accurate summaries stakeholders can audit before treatment claims." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Indirect FBA", back: "Hypotheses—not proof." },
    { front: "Descriptive", back: "Naturalistic correlates." },
    { front: "Experimental FA", back: "Controlled contrasts." },
    { front: "Triangulation", back: "Reconcile conflicts." },
    { front: "Hypothesis", back: "Operational summary." },
    { front: "Honest labels", back: "Match methods used." },
  ],
  worksheet: {
    title: "CHH Chapter 27 — functional behavior assessment",
    instructions:
      "Classify FBA modality, triangulation response, reporting fix, hypothesis requirement, and ethical safeguard.",
    scenario:
      "Scenario A — Grant claims FA complete; appendix only questionnaires.",
    scenario_follow_up:
      "Scenario B — FAST conflicts with descriptive observation; team picks favorite silently.\n\nScenario C — Intensive intervention planned without hypothesis statement.\n\nScenario D — ABC scatter shows attention after 80% of episodes.\n\nScenario E — Aggression targeted; no safety review before FA.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Accountable fix?",
        options: ["Relabel modalities honestly; plan contrasts when safe", "Ship unchanged", "Fabricate graphs"],
        correct: "Relabel modalities honestly; plan contrasts when safe",
      },
      {
        id: "response_2",
        label: "Scenario B · Supervisory stance?",
        options: ["Document divergence and reconciliation openly", "Hide discord", "Delete weaker modality"],
        correct: "Document divergence and reconciliation openly",
      },
      {
        id: "response_3",
        label: "Scenario C · Required action?",
        options: ["Publish operational hypothesis first", "Proceed without hypothesis", "Punish until clear"],
        correct: "Publish operational hypothesis first",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["Descriptive correlate—not experimental proof", "Definitive FA proof", "Treatment mastery"],
        correct: "Descriptive correlate—not experimental proof",
      },
      {
        id: "response_5",
        label: "Scenario E · Required action?",
        options: ["Complete safeguards before experimental FA", "Proceed without review", "Label interview as FA"],
        correct: "Complete safeguards before experimental FA",
      },
      {
        id: "response_6",
        label: "Indirect FBA provides:",
        options: ["Hypotheses needing corroboration", "Definitive experimental proof", "Treatment completion"],
        correct: "Hypotheses needing corroboration",
      },
      {
        id: "response_7",
        label: "Triangulation means:",
        options: ["Open reconciliation when modalities disagree", "Pick favorite silently", "Delete conflicting data"],
        correct: "Open reconciliation when modalities disagree",
      },
      {
        id: "response_8",
        label: "Ethical FBA prioritizes:",
        options: ["Modality-accurate reporting, assent, cultural humility", "Laundering interviews into FA claims", "Overstating evidence in grants"],
        correct: "Modality-accurate reporting, assent, cultural humility",
      },
    ],
    remediationLog:
      "Rebuild Chapter 27 fluency: which modality? → evidence depth matches label? → modalities agree? → hypothesis published? → safeguards before FA? → honest reporting?",
  },
  bdsBank: CHAPTER_27_FBA_QUIZ_BANK,
};
