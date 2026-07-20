import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_30_GENERALIZATION_MAINTENANCE_QUIZ_BANK } from "@/content/modules/quiz/chapter30GeneralizationMaintenanceQuizBank";

export const MOD31_BLUEPRINT: ExtensionBlueprint = {
  id: "mod31",
  chapterNumber: 30,
  activityPrefix: 2310,
  title: "Generalization and Maintenance of Behavior Change",
  codexHeading: "READING — Chapter 30 (Generalization and Maintenance of Behavior Change)",
  codexIntro: `Chapter 30 in Cooper, Heron, and Heward covers generalization and maintenance—the durable spread of behavior change across settings, people, materials, responses, and time. Generalization is measured, not assumed. Mastery declared on a single therapist in a single room does not prove community-ready performance.

Stimulus generalization occurs when behavior performs under novel antecedent variations tied to programmed training histories. Response generalization involves varied topographies accomplishing the same function across contexts. Exemplar training strategically diversifies discriminative stimuli so learners do not master narrow rote flashcards alone. Indiscriminable contingencies arrange reinforcement difficult to discriminate, supporting wider stimulus control.

Maintenance investigates whether reinforcement schedules, natural communities of reinforcement, and environmental supports endure after formal services thin. Booster probes are scheduled post-treatment samples verifying maintenance reality—not assumed closure. Graphs without longitudinal follow-through misrepresent durability to payers and families.

Measurement overlays stimulus and response samples across people, settings, and materials; intermittent integrity probes post-discharge; social validity interviewing families about functional gains; and honest caveats when data show rapid reversion once artificial supports evaporate. When home data collapse after clinic-only mastery claims, expand exemplars and community supports before claims harden.

Supervisors resist abandoning learners when generalization fails, document cultural constraints affecting community reinforcement, and align maintenance plans with realistic caregiver bandwidth rather than idealized homework packets. Support design—not silent blame—guides failed probes.

Generalization pairs with self-management (Chapter 29) and ethics (Chapter 31): autonomy gains must survive thinning, then reporting must stay honest when durability is fragile.

For BCBA exam prep: check setting, person, and material samples; distinguish acquisition from maintenance; verify booster probe evidence; and note whether reporting caveats fragility when reversion appears after discharge.`,
  footnotes: {
    ch30_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 30 — generalization overview (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Settings, people, materials, responses, time.",
        "Not quoted from CHH.",
      ],
    },
    ch30_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 30 — stimulus and response generalization.",
        "Exemplar training and indiscriminable contingencies.",
      ],
    },
    ch30_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 30 — maintenance and booster probes.",
        "Longitudinal follow-through required.",
      ],
    },
    ch30_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 30 — measurement and social validity.",
        "Honest caveats when reversion appears.",
      ],
    },
    ch30_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 30 — ethics, caregiver bandwidth, community partnerships.",
        "Support design—not blame—when probes fail.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch30_1" },
    { afterSentenceIndex: 1, ref: "ch30_2" },
    { afterSentenceIndex: 2, ref: "ch30_3" },
    { afterSentenceIndex: 3, ref: "ch30_4" },
    { afterSentenceIndex: 4, ref: "ch30_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 30 recap",
    intro:
      "Chapter 30 asks whether skills work beyond the training room and last after services thin—across people, places, materials, and time—with honest measurement.",
    chunks: [
      {
        subtitle: "Generalization is measured, not assumed",
        segments: [
          {
            type: "text",
            text: "Clinic perfection on one therapist does not prove home or community performance. Sample settings, people, and materials before closure claims ",
          },
          { type: "footnote", ref: "ch30_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Stimulus vs response generalization",
        segments: [
          {
            type: "text",
            text: "Stimulus generalization = perform under new antecedent variations. Response generalization = different topographies, same function. Exemplar training and indiscriminable contingencies widen control ",
          },
          { type: "footnote", ref: "ch30_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Maintenance and booster probes",
        segments: [
          {
            type: "text",
            text: "Maintenance = enduring levels after thinning formal supports. Booster probes post-discharge verify reality—graphs without follow-through mislead payers ",
          },
          { type: "footnote", ref: "ch30_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Honest reporting when durability is fragile",
        segments: [
          {
            type: "text",
            text: "When reversion appears after vouchers or artificial supports end, figures must caveat fragility beside slopes—Domain E omission if panels omit limits ",
          },
          { type: "footnote", ref: "ch30_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include declaring generalization from a single setting or person, confusing maintenance with initial acquisition, skipping booster probes post-discharge, and narrow exemplar training without programmed diversity. Resolve them by checking setting, person, and material samples plus maintenance probe evidence before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch30_v1: { label: "[V1]", lines: ["CHH Chapter 30 — stimulus generalization."] },
    ch30_v2: { label: "[V2]", lines: ["CHH Chapter 30 — response generalization."] },
    ch30_v3: { label: "[V3]", lines: ["CHH Chapter 30 — maintenance."] },
    ch30_v4: { label: "[V4]", lines: ["CHH Chapter 30 — exemplar training."] },
    ch30_v5: { label: "[V5]", lines: ["CHH Chapter 30 — indiscriminable contingencies."] },
    ch30_v6: { label: "[V6]", lines: ["CHH Chapter 30 — booster probes."] },
    ch30_kc1: { label: "[KC1]", lines: ["Domain F: discriminate generalization types and maintenance evidence."] },
    ch30_kc2: { label: "[KC2]", lines: ["Domain C: longitudinal samples, integrity probes, honest graphs."] },
    ch30_kc3: { label: "[KC3]", lines: ["Domain E: transparent reporting; support not blame when probes fail."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 30",
    intro: "Chapter 30 generalization and maintenance—ethics is Chapter 31.",
    entries: [
      { term: "Stimulus generalization", definition: "Performing under novel antecedent variations tied to programmed training histories.", footnoteRef: "ch30_v1" },
      { term: "Response generalization", definition: "Varied topographies accomplishing same function generalized across contexts.", footnoteRef: "ch30_v2" },
      { term: "Maintenance", definition: "Enduring levels after thinning formal supports or lengthening probes across time.", footnoteRef: "ch30_v3" },
      { term: "Exemplar training", definition: "Strategic diversification of discriminative stimuli preventing narrow rote mastery only.", footnoteRef: "ch30_v4" },
      { term: "Indiscriminable contingencies", definition: "Arranged reinforcement difficult to discriminate—supports wider stimulus control.", footnoteRef: "ch30_v5" },
      { term: "Booster probes", definition: "Scheduled post-treatment samples verifying maintenance reality—not assumed closure.", footnoteRef: "ch30_v6" },
      { term: "Natural communities of reinforcement", definition: "Everyday contingencies sustaining behavior after formal services thin.", footnoteRef: "ch30_v3" },
      { term: "Social validity (maintenance)", definition: "Stakeholder interviews about functional gains and realistic supports.", footnoteRef: "ch30_kc2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 30",
    intro: "Generalization breadth, maintenance durability, measurement honesty, ethical support.",
    concepts: [
      {
        title: "Stimulus and response generalization",
        segments: [
          { type: "text", text: "Sample antecedent and response variations across contexts—exemplar training and indiscriminable contingencies widen control " },
          { type: "footnote", ref: "ch30_v1" },
          { type: "footnote", ref: "ch30_v2" },
          { type: "footnote", ref: "ch30_v4" },
          { type: "footnote", ref: "ch30_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Maintenance and booster probes",
        segments: [
          { type: "text", text: "Thinning schedules, natural reinforcers, post-discharge probes—do not confuse acquisition with durability " },
          { type: "footnote", ref: "ch30_v3" },
          { type: "footnote", ref: "ch30_v6" },
          { type: "footnote", ref: "ch30_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Honest longitudinal reporting",
        segments: [
          { type: "text", text: "Caveat fragility when reversion follows discharge; omitting limits misleads payers and families " },
          { type: "footnote", ref: "ch30_4" },
          { type: "footnote", ref: "ch30_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Community partnerships and caregiver bandwidth",
        segments: [
          { type: "text", text: "Align maintenance plans with realistic routines; document cultural constraints; iterate supports when probes fail " },
          { type: "footnote", ref: "ch30_5" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 30 generalization/maintenance vocabulary or reject if the stem describes single-setting mastery claims, maintenance assumed without booster probes, or reporting that omits post-discharge reversion.",
  matchActivityInstructions:
    "Select generalization type, maintenance probe response, exemplar redesign, or ethical reporting fix for Cooper Chapter 30.",
  chainActivityInstructions:
    "Sequence generalization/maintenance workflow: design exemplar breadth → schedule thinning and natural reinforcer scouting → collect maintenance samples → iterate supports when probes fail.",
  mts: [
    {
      sample_stimulus: "Mastery declared on single therapist and single room—home data collapse.",
      comparison_options: [
        "Limited stimulus generalization—expand exemplars and community supports before claims harden",
        "Generalization complete automatically",
        "Home data irrelevant",
        "Discharge immediately to save hours",
      ],
      correct_match: "Limited stimulus generalization—expand exemplars and community supports before claims harden",
      error_feedback: "Generalization measured—not assumed.",
    },
    {
      sample_stimulus: "District discharge cites mastery from single therapist/clinic snapshots—home probes absent.",
      comparison_options: [
        "Stimulus generalization undocumented—defer closure claims until community exemplars evidenced",
        "Generalization irrelevant after clinic perfection",
        "Delete stakeholder maintenance interviews",
        "Blame home failures exclusively",
      ],
      correct_match: "Stimulus generalization undocumented—defer closure claims until community exemplars evidenced",
      error_feedback: "Correct action: Stimulus generalization undocumented—defer closure claims until community exemplars evidenced",
    },
    {
      sample_stimulus: "Graphs trumpet durability while rapid reversion appears once vouchers end—panels omit caveat.",
      comparison_options: [
        "Domain E omission—figures must caveat fragility beside slopes so payers understand limits",
        "Reversion irrelevant if discharge signed",
        "Delete post-discharge data preserving optics",
        "Assume natural communities always sustain gains mechanically",
      ],
      correct_match: "Domain E omission—figures must caveat fragility beside slopes so payers understand limits",
      error_feedback: "Correct action: Domain E omission—figures must caveat fragility beside slopes so payers understand limits",
    },
    {
      sample_stimulus: "Learner greets teacher in clinic but not at grocery store with novel cashier.",
      comparison_options: [
        "Limited stimulus generalization—program exemplar diversity across people and settings",
        "Response generalization complete",
        "Maintenance achieved",
        "Home data irrelevant",
      ],
      correct_match: "Limited stimulus generalization—program exemplar diversity across people and settings",
      error_feedback: "Novel antecedent variation failed.",
    },
    {
      sample_stimulus: "Learner uses sign, picture exchange, and speech to request same item across week.",
      comparison_options: [
        "Response generalization—varied topographies, same function",
        "Stimulus generalization only",
        "Maintenance failure",
        "Indiscriminable contingency error",
      ],
      correct_match: "Response generalization—varied topographies, same function",
      error_feedback: "Same function, different responses.",
    },
    {
      sample_stimulus: "Behavior stable at 90% during acquisition; no data 60 days post-discharge.",
      comparison_options: [
        "Maintenance unverified—schedule booster probes before durability claims",
        "Maintenance confirmed by acquisition graph",
        "Discharge sufficient proof",
        "Delete follow-up requirement",
      ],
      correct_match: "Maintenance unverified—schedule booster probes before durability claims",
      error_feedback: "Acquisition ≠ maintenance.",
    },
    {
      sample_stimulus: "Team trains only one flashcard set; fails with new materials.",
      comparison_options: [
        "Narrow exemplar training—diversify discriminative stimuli",
        "Response generalization failure only",
        "Maintenance complete",
        "Blame learner exclusively",
      ],
      correct_match: "Narrow exemplar training—diversify discriminative stimuli",
      error_feedback: "Exemplar breadth required.",
    },
    {
      sample_stimulus: "Home generalization probe fails; team silently stops outreach.",
      comparison_options: [
        "Domain E—iterate supports and document constraints; do not abandon or blame silently",
        "Approve silent discharge",
        "Delete failed probe data",
        "Claim clinic mastery sufficient",
      ],
      correct_match: "Domain E—iterate supports and document constraints; do not abandon or blame silently",
      error_feedback: "Support design—not blame.",
    },
  ],
  chainTitle: "Generalization maintenance sweep",
  chainFragments: [
    { id: "a", text: "Design exemplar breadth and stakeholder routines before proclaiming generalized mastery." },
    { id: "b", text: "Schedule thinning and natural reinforcer scouting with transparent criteria." },
    { id: "c", text: "Collect maintenance samples across people, settings, and materials." },
    { id: "d", text: "Iterate supports when probes fail rather than blaming families silently." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Stimulus gen", back: "Novel antecedents." },
    { front: "Response gen", back: "Varied topographies." },
    { front: "Maintenance", back: "Endures after thin." },
    { front: "Exemplars", back: "Diverse SDs." },
    { front: "Booster probe", back: "Post-discharge check." },
    { front: "Natural community", back: "Everyday R+" },
  ],
  worksheet: {
    title: "CHH Chapter 30 — generalization and maintenance",
    instructions:
      "Classify generalization type, maintenance status, reporting ethics, and support response.",
    scenario:
      "Scenario A — Mastery declared on single therapist/room; home data collapse.",
    scenario_follow_up:
      "Scenario B — Discharge cites clinic snapshots only; home probes absent.\n\nScenario C — Graphs show durability but rapid reversion after vouchers end; no caveat.\n\nScenario D — Learner requests with sign, PECS, and speech for same item.\n\nScenario E — Home probe fails; team stops outreach silently.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best headline?",
        options: ["Limited stimulus generalization—expand exemplars", "Generalization complete", "Discharge immediately"],
        correct: "Limited stimulus generalization—expand exemplars",
      },
      {
        id: "response_2",
        label: "Scenario B · Analytic headline?",
        options: ["Stimulus generalization undocumented—defer closure", "Clinic perfection sufficient", "Blame home exclusively"],
        correct: "Stimulus generalization undocumented—defer closure",
      },
      {
        id: "response_3",
        label: "Scenario C · Reporting lapse?",
        options: ["Domain E omission—caveat fragility beside slopes", "Reversion irrelevant", "Delete post-discharge data"],
        correct: "Domain E omission—caveat fragility beside slopes",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["Response generalization", "Stimulus generalization only", "Maintenance failure"],
        correct: "Response generalization",
      },
      {
        id: "response_5",
        label: "Scenario E · Ethics-aligned response?",
        options: ["Iterate supports; document constraints—not silent blame", "Silent discharge", "Delete failed probes"],
        correct: "Iterate supports; document constraints—not silent blame",
      },
      {
        id: "response_6",
        label: "Booster probes verify:",
        options: ["Maintenance reality post-discharge", "Initial acquisition only", "Clinic flashcard mastery"],
        correct: "Maintenance reality post-discharge",
      },
      {
        id: "response_7",
        label: "Exemplar training prevents:",
        options: ["Narrow rote mastery on single stimuli", "All generalization", "Maintenance"],
        correct: "Narrow rote mastery on single stimuli",
      },
      {
        id: "response_8",
        label: "Honest Chapter 30 reporting prioritizes:",
        options: ["Longitudinal samples, caveats when fragile, stakeholder validity", "Single-setting mastery claims", "Omitting reversion data"],
        correct: "Longitudinal samples, caveats when fragile, stakeholder validity",
      },
    ],
    remediationLog:
      "Rebuild Chapter 30 fluency: which generalization type? → exemplar breadth? → maintenance vs acquisition? → booster probes? → honest reporting when reversion appears?",
  },
  bdsBank: CHAPTER_30_GENERALIZATION_MAINTENANCE_QUIZ_BANK,
};
