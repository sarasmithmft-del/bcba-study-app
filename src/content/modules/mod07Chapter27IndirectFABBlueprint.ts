import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_27_INDIRECT_FAB_QUIZ_BANK } from "@/content/modules/quiz/chapter27IndirectFABQuizBank";

export const MOD07_BLUEPRINT: ExtensionBlueprint = {
  id: "mod07",
  chapterNumber: 27,
  activityPrefix: 2070,
  title: "Indirect Functional Behavioral Assessment",
  codexHeading: "READING — Chapter 27 (Indirect Functional Assessment)",
  codexIntro: `Chapter 27 in Cooper, Heron, and Heward positions indirect functional behavioral assessment as the hypothesis-generating stream within multimodal FBA—not stand-alone proof of behavioral function. Indirect methods use structured interviews, FAST-class checklists, MAS-style surveys, and related recall or rating modalities to prioritize where descriptive and experimental corroboration should concentrate.

Structured interviews organize caregiver and educator narratives around routines, antecedent context, response topography, and suspected consequences. Comparable prompts reduce drift from unstructured storytelling and support cross-informant comparison.

Questionnaire-style tools summarize informant estimates about likely maintaining contingencies. FAST, MAS, and QABF-class instruments rank suspected reinforcer domains quickly—but Cooper treats those rankings as provisional hypotheses awaiting corroboration.

A core Chapter 27 caution is source limitation: indirect methods inherit memory error, wording effects, cultural interpretation differences, reporter expectations, and interviewer influence. These limits require explicit uncertainty statements—not deletion of inconvenient recall.

When indirect FAST rankings conflict with descriptive ABC observation, teams document divergence and reconciliation plans openly. Triangulation forbids silent preference for the favorite modality or laundering questionnaire output into completed FA narratives.

Indirect findings translate into testable hypotheses: high escape rankings guide dense descriptive sampling around instructional transitions; high tangible rankings guide observation of contingent tangible deliveries—not immediate treatment certainty.

Social validity and contextual fit steer which indirect hypotheses merit scarce observation hours. Informant disagreement is data—it shapes the next assessment step rather than being averaged away.

For BCBA exam prep: identify indirect modality type, state what corroboration is required, document triangulation when streams disagree, and never treat FAST/MAS output as definitive experimental confirmation.`,
  footnotes: {
    ch27_ind_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 27 — indirect FBA within multimodal functional assessment (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Hypothesis generation stream—not stand-alone proof.",
        "Not quoted from CHH.",
      ],
    },
    ch27_ind_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 27 — structured interviews organizing comparable recall into testable hypotheses.",
      ],
    },
    ch27_ind_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 27 — indirect questionnaires (FAST/MAS-class) estimating suspected contingencies from stakeholder recall.",
      ],
    },
    ch27_ind_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 27 — triangulation: reconcile indirect output with descriptive and experimental streams transparently.",
      ],
    },
    ch27_ind_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 27 — recall limitations, cultural humility, trauma-informed practice, modality-accurate reporting.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch27_ind_1" },
    { afterSentenceIndex: 1, ref: "ch27_ind_2" },
    { afterSentenceIndex: 2, ref: "ch27_ind_3" },
    { afterSentenceIndex: 4, ref: "ch27_ind_4" },
    { afterSentenceIndex: 5, ref: "ch27_ind_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 27 indirect FBA recap",
    intro:
      "Indirect tools start the FBA story fast—they do not finish it. Use interviews and checklists to generate hypotheses, say what you still need to verify, and document when caregiver recall fights what observers actually see.",
    chunks: [
      {
        subtitle: "Indirect generates hypotheses—not verdicts",
        segments: [
          {
            type: "text",
            text: "Structured interviews and FAST/MAS-class tools rank suspected functions and steer observation effort—they do not replace descriptive or experimental corroboration ",
          },
          { type: "footnote", ref: "ch27_ind_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Structured interviews improve comparability",
        segments: [
          {
            type: "text",
            text: "Comparable prompts about routines, antecedents, and consequences reduce unstructured drift between informants ",
          },
          { type: "footnote", ref: "ch27_ind_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Questionnaires prioritize—not certify",
        segments: [
          {
            type: "text",
            text: "FAST and MAS summarize caregiver estimates of reinforcing consequences—they accelerate prioritization, not causal proof ",
          },
          { type: "footnote", ref: "ch27_ind_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Triangulation when modalities disagree",
        segments: [
          {
            type: "text",
            text: "When FAST rankings conflict with descriptive ABC logs, document the clash and extend targeted sampling—never hide discord or pick a favorite silently ",
          },
          { type: "footnote", ref: "ch27_ind_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Honest limits and ethical intake",
        segments: [
          {
            type: "text",
            text: "Recall bias, cultural context, trauma-informed questioning, and modality-accurate reporting belong in every indirect dossier ",
          },
          { type: "footnote", ref: "ch27_ind_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include treating FAST/MAS/QABF outputs as conclusions, smoothing over informant disagreement, skipping uncertainty language, and mislabeling questionnaires as completed FA. Resolve them by documenting hypothesis, uncertainty, and the next corroboration step before function claims harden.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch27_ind_v1: { label: "[V1]", lines: ["CHH Chapter 27 — structured indirect interviews."] },
    ch27_ind_v2: { label: "[V2]", lines: ["CHH Chapter 27 — FAST-class indirect checklists."] },
    ch27_ind_v3: { label: "[V3]", lines: ["CHH Chapter 27 — MAS-class reinforcer-domain surveys."] },
    ch27_ind_v4: { label: "[V4]", lines: ["CHH Chapter 27 — recall and wording limitations."] },
    ch27_ind_v5: { label: "[V5]", lines: ["CHH Chapter 27 — triangulation across FBA modalities."] },
    ch27_ind_v6: { label: "[V6]", lines: ["CHH Chapter 27 — social validity in indirect intake."] },
    ch27_ind_kc1: { label: "[KC1]", lines: ["Domain F: indirect hypothesis generation—not verdict machines."] },
    ch27_ind_kc2: { label: "[KC2]", lines: ["Domain E: honest reporting when recall substitutes for observation."] },
    ch27_ind_kc3: { label: "[KC3]", lines: ["Domain F: triangulation transparency when FAST and ABC diverge."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 27 (Indirect FBA)",
    intro: "Indirect FBA vocabulary—descriptive and experimental streams are mod08/mod09 supplements.",
    entries: [
      { term: "Indirect FBA", definition: "Recall or rating modalities generating hypotheses needing corroboration.", footnoteRef: "ch27_ind_v1" },
      { term: "Structured indirect interview", definition: "Comparable prompts yielding timeline and routine hypotheses before manipulation.", footnoteRef: "ch27_ind_v1" },
      { term: "FAST", definition: "Indirect checklist estimating suspected behavioral-function profiles from respondent rankings.", footnoteRef: "ch27_ind_v2" },
      { term: "MAS", definition: "Indirect survey ranking presumed reinforcer domains for later empirical probes.", footnoteRef: "ch27_ind_v3" },
      { term: "QABF", definition: "Indirect questionnaire scaffolding behavioral-function guesses pending corroboration.", footnoteRef: "ch27_ind_v2" },
      { term: "Recall limitation", definition: "Memory gaps, wording effects, cultural descriptors—professional skepticism required.", footnoteRef: "ch27_ind_v4" },
      { term: "Triangulation", definition: "Open reconciliation among indirect, descriptive, and experimental streams.", footnoteRef: "ch27_ind_v5" },
      { term: "Social validity", definition: "Stakeholder-endorsed priorities shaping which indirect hypotheses merit observation.", footnoteRef: "ch27_ind_v6" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 27 (Indirect FBA)",
    intro: "Hypothesis discipline, triangulation, honest limits, social validity.",
    concepts: [
      {
        title: "Indirect tools accelerate—not finalize—classification",
        segments: [
          { type: "text", text: "Interviews and questionnaires shorten the runway to prioritized contingencies—exam items punish treating recall as airtight functional certificates " },
          { type: "footnote", ref: "ch27_ind_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Triangulation leaves disagreement visible",
        segments: [
          { type: "text", text: "When FAST output fights ABC logs, narrate the clash and extend targeted descriptive sampling instead of overwriting streams " },
          { type: "footnote", ref: "ch27_ind_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Domain E when recall becomes marketing copy",
        segments: [
          { type: "text", text: "Labeling questionnaire output as exhaustive FA or hiding modality conflict is simultaneous ethics and assessment failure " },
          { type: "footnote", ref: "ch27_ind_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Social validity steers observation energy",
        segments: [
          { type: "text", text: "Caregiver-valued routines—not spreadsheet inertia—should prioritize which indirect hypotheses get scarce observation minutes " },
          { type: "footnote", ref: "ch27_ind_v6" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 27 indirect FBA vocabulary or reject if the stem treats questionnaire output as completed FA or skips triangulation when modalities disagree.",
  matchActivityInstructions:
    "Select indirect modality, triangulation response, recall limitation, or ethical reporting fix for Cooper Chapter 27 indirect FBA stems.",
  chainActivityInstructions:
    "Sequence indirect FBA workflow: structured intake → operationalize suspected consequences → summarize convergence vs divergence → schedule descriptive sampling biased toward high-risk routines.",
  mts: [
    {
      sample_stimulus: "Teacher FAST checklist ranks escape highest without verifying latency.",
      comparison_options: [
        "Hypothesis refinement pending corroboration",
        "Experimentally verified escape function",
        "Automatically reinforcement dominance",
        "Completed multi-element FA",
      ],
      correct_match: "Hypothesis refinement pending corroboration",
      error_feedback: "Indirect rankings prioritize hypotheses yet remain provisional until corroborated.",
    },
    {
      sample_stimulus: "FAST tangible hypothesis contradicts descriptive ABC—no tangible deliveries documented.",
      comparison_options: [
        "Extend descriptive sampling focusing on tangible deliveries and contradictory routines",
        "Announce definitive tangible reinforcement diagnosis",
        "Delete FAST responses from records",
        "Switch hypotheses weekly arbitrarily",
      ],
      correct_match: "Extend descriptive sampling focusing on tangible deliveries and contradictory routines",
      error_feedback: "triangulation extends sampling keyed to conflict.",
    },
    {
      sample_stimulus: "Teacher FAST ranks tangible highest but descriptive observation shows aggression almost always precedes instructional demands.",
      comparison_options: [
        "Frame tangible rankings as tentative while intensifying descriptive codes around instructional-demand routines",
        "Announce tangible reinforcement definitive without corroboration",
        "Disregard FAST because anecdotes trump checklists",
        "Stop all interviews with caregivers",
      ],
      correct_match: "Frame tangible rankings as tentative while intensifying descriptive codes around instructional-demand routines",
      error_feedback: "triangulation integrates rather than discards.",
    },
    {
      sample_stimulus: "MAS identifies tangible reinforcers prior to preference assessment probes.",
      comparison_options: [
        "Indirect stimulus ranking prior to empirical probes",
        "Withdrawal design confirmation",
        "Experimental FA termination criterion",
        "Latency shaping metric",
      ],
      correct_match: "Indirect stimulus ranking prior to empirical probes",
      error_feedback: "MAS categorizes reinforcer likelihood indirectly—not definitively.",
    },
    {
      sample_stimulus: "IEP facilitator omits contradictory ABC summaries so FAST rankings match predetermined vendor pitch.",
      comparison_options: [
        "Explicit triangulation admitting modality conflict alongside provisional hypotheses",
        "Selective reporting favoring flashy indirect narratives exclusively",
        "Deleting caregiver interviews indefinitely",
        "Replacing multidisciplinary review with billboard advertisements",
      ],
      correct_match: "Explicit triangulation admitting modality conflict alongside provisional hypotheses",
      error_feedback: "Domain F dossiers disclose disagreement; hiding streams collides with Domain E.",
    },
    {
      sample_stimulus: "Regional brief states exhaustive FA complete yet attachments list only questionnaires.",
      comparison_options: [
        "Relabel modality honestly; document limits; arrange defensible contrasts when safeguards permit",
        "Ship appendix unchanged claiming FA polish",
        "Replace stakeholders with scripted actors",
        "Destroy descriptive datasets that disagree",
      ],
      correct_match: "Relabel modality honestly; document limits; arrange defensible contrasts when safeguards permit",
      error_feedback: "Mislabeling indirect tools as FA violates modality-accurate reporting.",
    },
    {
      sample_stimulus: "Parent interview suggests escape function from homework routines.",
      comparison_options: [
        "Indirect FBA hypothesis—needs descriptive or experimental corroboration",
        "Completed experimental FA",
        "Definitive proof for treatment intensity",
        "Descriptive scatterplot proof alone",
      ],
      correct_match: "Indirect FBA hypothesis—needs descriptive or experimental corroboration",
      error_feedback: "Interviews generate hypotheses—they do not finish FBA alone.",
    },
    {
      sample_stimulus: "Bilingual guardians interpret topography labels differently yet structured prompts gather parallel timeline data.",
      comparison_options: [
        "Structured indirect interview scaffolding comparable hypotheses despite linguistic variation",
        "Experimental FA already certifying reinforcement",
        "Indirect tools permanently replacing interpreters",
        "Scatterplot-exclusive measurement without narration",
      ],
      correct_match: "Structured indirect interview scaffolding comparable hypotheses despite linguistic variation",
      error_feedback: "Structured interviews tame recall into comparable hypotheses while respecting translation.",
    },
  ],
  chainTitle: "Indirect → descriptive bridge",
  chainFragments: [
    { id: "a", text: "Administer normed indirect instruments and structured interviews across caregivers." },
    { id: "b", text: "Operationalize suspected consequences into descriptive coding schemes." },
    { id: "c", text: "Summarize convergence vs divergence themes transparently." },
    { id: "d", text: "Schedule descriptive sampling biased toward high-risk routines and conflicting hypotheses." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Indirect FBA", back: "Hypotheses—not proof." },
    { front: "FAST", back: "Indirect function checklist." },
    { front: "MAS", back: "Reinforcer-domain survey." },
    { front: "Triangulation", back: "Reconcile modality conflict." },
    { front: "Recall limits", back: "Memory/wording skepticism." },
    { front: "Social validity", back: "Stakeholder-valued priorities." },
  ],
  worksheet: {
    title: "CHH Chapter 27 — indirect functional behavioral assessment",
    instructions:
      "Identify indirect method, state its limitation, choose triangulation response, and name the strongest next corroboration step.",
    scenario:
      "FAST ranks tangible reinforcement highest yet archived descriptive ABC logs never document tangible deliveries immediately following episodes.",
    scenario_follow_up:
      "MAS surveys caregivers identifying edible reinforcers prior to preference-assessment probes on-site.\n\nScenario C — FAST ranks tangible highest but descriptive observation shows aggression almost always precedes instructional demands.\n\nScenario D — Bilingual guardians interpret topography labels differently; structured interview protocol gathers parallel timeline data.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · FAST versus ABC divergence—best analytic stance?",
        options: [
          "Flag discrepancy and broaden descriptive sampling",
          "Maintain tangible hypothesis unchanged",
          "Discard descriptive logs as invalid",
        ],
        correct: "Flag discrepancy and broaden descriptive sampling",
      },
      {
        id: "response_2",
        label: "Scenario A · Next permissible analytic step?",
        options: [
          "Preference assessment pairing tangible stimuli",
          "Immediately tangible intervention packet",
          "Terminate referral",
        ],
        correct: "Preference assessment pairing tangible stimuli",
      },
      {
        id: "response_3",
        label: "Scenario B · MAS instrument classification?",
        options: [
          "Indirect reinforcer-domain ranking prior to empirical probes",
          "Experimental FA termination criterion",
          "Continuous duration sampling exclusively",
        ],
        correct: "Indirect reinforcer-domain ranking prior to empirical probes",
      },
      {
        id: "response_4",
        label: "Scenario C · Tangible FAST vs escape descriptive pattern?",
        options: [
          "Frame tangible tentative; intensify descriptive codes around instructional-demand routines",
          "Announce tangible definitive without corroboration",
          "Disregard FAST entirely",
        ],
        correct: "Frame tangible tentative; intensify descriptive codes around instructional-demand routines",
      },
      {
        id: "response_5",
        label: "Triangulation MOST centrally means:",
        options: [
          "Converging indirect, descriptive, and (when feasible) experimental streams before declaring certainty",
          "Accepting whichever modality arrives first regardless of conflicts",
          "Replacing graphs with anecdotes permanently",
        ],
        correct: "Converging indirect, descriptive, and (when feasible) experimental streams before declaring certainty",
      },
      {
        id: "response_6",
        label: "MAS/FAST questionnaires primarily quantify:",
        options: [
          "Caregiver/stakeholder estimates of reinforcing consequences tied to referrals",
          "IRT distributions from continuous recordings",
          "Experimental extinction curves",
        ],
        correct: "Caregiver/stakeholder estimates of reinforcing consequences tied to referrals",
      },
      {
        id: "response_7",
        label: "Social validity checkpoint—BEFORE prioritizing FAST-ranked hypotheses:",
        options: [
          "Ensure caregiver-valued routines remain focal—not mere clinician convenience",
          "Ignore stakeholder priorities whenever graphs look tidy",
          "Declare definitive FA outcomes absent observation",
        ],
        correct: "Ensure caregiver-valued routines remain focal—not mere clinician convenience",
      },
      {
        id: "response_8",
        label: "Scenario D · Documenting multilingual indirect findings requires:",
        options: [
          "Note linguistic descriptors, interviewer supports, provisional hypotheses—not laundering recall as monocausal mastery",
          "Ship English-only brochures regardless of respondent language",
          "Suppress divergence between translated forms silently",
        ],
        correct: "Note linguistic descriptors, interviewer supports, provisional hypotheses—not laundering recall as monocausal mastery",
      },
    ],
    remediationLog:
      "Rebuild Chapter 27 indirect loop: structured intake → discrepancy mapping → targeted descriptive checks → transparent triangulation. Keep hypothesis, uncertainty, and next-step language explicit.",
  },
  bdsBank: CHAPTER_27_INDIRECT_FAB_QUIZ_BANK,
};
