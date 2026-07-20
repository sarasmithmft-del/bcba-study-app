import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_07_ANALYSIS_QUIZ_BANK } from "@/content/modules/quiz/chapter07AnalysisQuizBank";

export const MOD10_BLUEPRINT: ExtensionBlueprint = {
  id: "mod10",
  chapterNumber: 7,
  activityPrefix: 2100,
  title: "Analyzing Behavior Change: Basic Assumptions and Strategies",
  codexHeading: "READING — Chapter 7 (Analyzing Behavior Change: Basic Assumptions and Strategies)",
  codexIntro: `Chapter 7 in Cooper, Heron, and Heward teaches how behavior analysts analyze graphed data to decide whether meaningful change occurred. Chapter 6 showed how to construct honest displays; Chapter 7 shows how to read them with professional discipline—not optimism, not decoration, but evidence-based visual inspection.

Cooper states basic assumptions about behavior change: behavior typically changes gradually rather than in one permanent step; it varies from moment to moment and setting to setting; and single-subject time-series graphs let analysts evaluate change for the individual while phases are compared within the same participant. These assumptions set realistic expectations for what graphs can show.

Visual inspection is the primary analytic method for single-subject behavioral data. Reviewers synthesize level (central tendency within a phase), trend (directional movement across sessions), variability (scatter around the path), and slope or celeration on ratio or cumulative displays. Dimensions must cohere. When level improves but variability explodes, or when trend and level tell different stories, language stays cautious until supplementary evidence clarifies the pattern.

Comparing phases requires explicit attention to overlap. When baseline and intervention envelopes share substantial territory, differentiation is ambiguous—exam items often reward tentative language and requests for supplemental metrics (latency, dispersion commentary, stability windows) rather than premature mastery declarations. Clear separation with stable low variability supports stronger—but still integrity-checked—differentiation.

Practical significance asks whether change matters to consumers in daily life: fewer injuries caregivers feel, more inclusion minutes, reduced restraint—not whether insiders admire a tidy line. Pair graphs with stakeholder-meaningful outcomes and report honestly when they diverge.

Analysis never outruns measurement quality. IOA dips, fidelity lapses, selective session plotting, omitted reversal or resurgence phases, and axis distortions (Chapter 6) all weaken conclusions. Domain C measurement and Domain E reporting converge: caption graphs with limits before causal swagger.

For BCBA exam prep, use a repeatable sequence on every graph stem: verify construction integrity → read level, trend, variability within each phase → compare phases for overlap → check baseline drift → note IOA/fidelity → assess practical significance → select language matching the evidence.`,
  footnotes: {
    ch7_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 7 — basic assumptions and visual inspection as primary analytic method (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Builds on Chapter 6 graphic displays and Chapter 5 measurement quality.",
        "Not quoted from CHH.",
      ],
    },
    ch7_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 7 — level, trend, variability, slope/celeration within and across phases.",
        "Synthesis across dimensions—not single-metric triumph—defines inspection.",
      ],
    },
    ch7_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 7 — overlap, baseline drift, and tentative language when differentiation is ambiguous.",
        "High-yield exam trap: overlap plus marketing mastery language.",
      ],
    },
    ch7_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 7 — practical significance and stakeholder-meaningful outcomes.",
        "Graph tidiness ≠ lived improvement.",
      ],
    },
    ch7_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 7 — integrity overlays: IOA, fidelity, complete phase reporting before causal claims.",
        "Links Domain C measurement to Domain E honest reporting.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch7_1" },
    { afterSentenceIndex: 2, ref: "ch7_2" },
    { afterSentenceIndex: 4, ref: "ch7_3" },
    { afterSentenceIndex: 5, ref: "ch7_4" },
    { afterSentenceIndex: 6, ref: "ch7_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 7 recap",
    intro:
      "Chapter 7 teaches you how to read a graph like a behavior analyst: slow down, check every dimension, and match your words to what the data actually show.",
    chunks: [
      {
        subtitle: "Basic assumptions",
        segments: [
          {
            type: "text",
            text: "Behavior usually changes gradually, varies over time, and single-subject graphs let you compare phases for one learner ",
          },
          { type: "footnote", ref: "ch7_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Read all dimensions",
        segments: [
          {
            type: "text",
            text: "Level, trend, variability, and slope/celeration must be read together—not one hero dot ",
          },
          { type: "footnote", ref: "ch7_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Overlap and drift",
        segments: [
          {
            type: "text",
            text: "Heavy overlap means stay tentative. Baseline drift before treatment must be named before you credit intervention ",
          },
          { type: "footnote", ref: "ch7_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Practical significance",
        segments: [
          {
            type: "text",
            text: "Ask whether families and teachers feel the change—not only whether the line looks better ",
          },
          { type: "footnote", ref: "ch7_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include declaring mastery with heavy overlap, ignoring baseline trend, cherry-picking one dimension, and hiding IOA or fidelity problems. Resolve them with the full inspection sequence and honest reporting limits.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch7_v1: { label: "[V1]", lines: ["CHH Chapter 7 — visual inspection."] },
    ch7_v2: { label: "[V2]", lines: ["CHH Chapter 7 — level (central tendency within phase)."] },
    ch7_v3: { label: "[V3]", lines: ["CHH Chapter 7 — trend (directional change within phase)."] },
    ch7_v4: { label: "[V4]", lines: ["CHH Chapter 7 — variability (scatter within phase)."] },
    ch7_v5: { label: "[V5]", lines: ["CHH Chapter 7 — celeration on standard ratio charts."] },
    ch7_v6: { label: "[V6]", lines: ["CHH Chapter 7 — phase overlap and tentative interpretation."] },
    ch7_kc1: { label: "[KC1]", lines: ["Domain F: analytic narration must match graph evidence."] },
    ch7_kc2: { label: "[KC2]", lines: ["Domain C/E: IOA, fidelity, and complete phases before causal language."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 7",
    intro: "Each term answers a different question about the graph. Board items often mix them—discriminate carefully.",
    entries: [
      { term: "Visual inspection", definition: "Systematic reading of graphed data to evaluate behavior change.", footnoteRef: "ch7_v1" },
      { term: "Level", definition: "Central tendency of data within a phase.", footnoteRef: "ch7_v2" },
      { term: "Trend", definition: "Directional movement across sessions within a phase.", footnoteRef: "ch7_v3" },
      { term: "Variability", definition: "Degree of scatter of data points within a phase.", footnoteRef: "ch7_v4" },
      { term: "Celeration", definition: "Multiplicative rate of change on standard ratio charts.", footnoteRef: "ch7_v5" },
      { term: "Overlap", definition: "Shared range between phase envelopes—slows confident differentiation.", footnoteRef: "ch7_v6" },
      { term: "Practical significance", definition: "Whether change matters in stakeholders' daily experience.", footnoteRef: "ch7_kc2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 7",
    intro: "Analysis integrates dimensions, assumptions, and measurement integrity—see Chapters 5–6 for IOA and construction.",
    concepts: [
      {
        title: "Synthesize dimensions",
        segments: [
          { type: "text", text: "Level, trend, variability, and slope must cohere before strong claims " },
          { type: "footnote", ref: "ch7_v2" },
          { type: "footnote", ref: "ch7_v3" },
          { type: "footnote", ref: "ch7_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Overlap cautions language",
        segments: [
          { type: "text", text: "Shared envelopes require tentative interpretation and possible supplemental metrics " },
          { type: "footnote", ref: "ch7_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Practical significance",
        segments: [
          { type: "text", text: "Graph change must connect to outcomes stakeholders value " },
          { type: "footnote", ref: "ch7_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Integrity before causation",
        segments: [
          { type: "text", text: "IOA, fidelity, and complete phase reporting gate causal attributions " },
          { type: "footnote", ref: "ch7_kc1" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "State which inspection dimension (level, trend, variability, overlap) each vignette highlights and how it affects your conclusion language.",
  matchActivityInstructions:
    "Select the most disciplined Chapter 7 interpretation or analytic response for each graphed scenario.",
  chainActivityInstructions:
    "Order the inspection workflow: verify graph integrity → within-phase read → cross-phase comparison → practical significance → report limits.",
  mts: [
    {
      sample_stimulus: "Baseline and intervention data paths share most of the same vertical range.",
      comparison_options: [
        "Tentative differentiation—overlap slows strong claims",
        "Clear superiority proven",
        "Delete baseline",
        "Automatic FA conclusion",
      ],
      correct_match: "Tentative differentiation—overlap slows strong claims",
      error_feedback: "Heavy overlap requires cautious language pending supplements.",
    },
    {
      sample_stimulus: "Baseline slopes upward before treatment; intervention phase flat.",
      comparison_options: [
        "Note baseline drift before blaming intervention",
        "Ignore baseline entirely",
        "Proof treatment failed only",
        "IOA irrelevant",
      ],
      correct_match: "Note baseline drift before blaming intervention",
      error_feedback: "Pre-intervention trend is a confound for attribution.",
    },
    {
      sample_stimulus: "Frequency down sharply; caregivers report no felt improvement at home.",
      comparison_options: [
        "Report graph change with practical significance caveat",
        "Ignore caregivers",
        "Claim mastery",
        "Delete home data",
      ],
      correct_match: "Report graph change with practical significance caveat",
      error_feedback: "Analytic and social validity can diverge—report honestly.",
    },
    {
      sample_stimulus: "Clear level drop, accelerating downward trend, low variability, minimal overlap.",
      comparison_options: [
        "Coherent pattern supporting stronger differentiation pending integrity checks",
        "Ambiguous always",
        "Delete intervention phase",
        "Respondent extinction proved",
      ],
      correct_match: "Coherent pattern supporting stronger differentiation pending integrity checks",
      error_feedback: "Coherent dimensions support clearer—but not automatic—claims.",
    },
    {
      sample_stimulus: "IOA at 62% during intervention phase cited in grant report.",
      comparison_options: [
        "Slow strong conclusions; remediate measurement first",
        "IOA irrelevant",
        "Publish anyway",
        "Switch to punishment",
      ],
      correct_match: "Slow strong conclusions; remediate measurement first",
      error_feedback: "Low IOA undermines trustworthy interpretation.",
    },
    {
      sample_stimulus: "Team inspects only last session dot showing improvement.",
      comparison_options: [
        "Cherry-picking—inspect whole phase holistically",
        "Best practice",
        "Required by Cooper",
        "Latency substitute",
      ],
      correct_match: "Cherry-picking—inspect whole phase holistically",
      error_feedback: "Inspection requires full phase patterns—not one dot.",
    },
    {
      sample_stimulus: "Resurgence phase omitted from ABAB graph in funder deck.",
      comparison_options: [
        "Reporting failure hiding reversal evidence",
        "Standard presentation",
        "Improves inspection",
        "IOA method",
      ],
      correct_match: "Reporting failure hiding reversal evidence",
      error_feedback: "Complete phase display supports honest analysis.",
    },
    {
      sample_stimulus: "Ratio chart shows celeration flattening across intervention.",
      comparison_options: [
        "Rate of change slowed—read celeration with level and variability",
        "IOA only",
        "MO abolished",
        "Graph unusable",
      ],
      correct_match: "Rate of change slowed—read celeration with level and variability",
      error_feedback: "Celeration is one dimension in the synthesis.",
    },
  ],
  chainTitle: "Visual inspection workflow",
  chainFragments: [
    { id: "a", text: "Confirm graph construction and measurement integrity (Ch 5–6)." },
    { id: "b", text: "Read level, trend, variability within each phase." },
    { id: "c", text: "Compare phases—overlap, drift, separation." },
    { id: "d", text: "Match language to evidence; note practical significance and limits." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  worksheet: {
    title: "CHH Chapter 7 — analyzing behavior change",
    instructions:
      "Apply the Chapter 7 inspection sequence. For graph construction issues see Chapter 6; for IOA see Chapter 5.",
    scenario:
      "Scenario A — Marketing claims 80% reduction; graph shows heavy baseline/intervention overlap and high variability.",
    scenario_follow_up:
      "Scenario B — Baseline trends up; intervention flat—team credits treatment failure.\n\nScenario C — Clean level shift, low variability, minimal overlap; IOA 92%.\n\nScenario D — Graph improves; parents report unchanged injury rates at home.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · MOST disciplined interpretation?",
        options: [
          "Tentative—overlap and variability caution mastery language",
          "Declare clear superiority",
          "Delete baseline",
          "Ignore variability",
        ],
        correct: "Tentative—overlap and variability caution mastery language",
      },
      {
        id: "response_2",
        label: "Scenario B · Missing analytic step?",
        options: [
          "Note upward baseline drift before attributing flat intervention to treatment",
          "IOA calculation only",
          "Change graph colors",
          "Run FA immediately",
        ],
        correct: "Note upward baseline drift before attributing flat intervention to treatment",
      },
      {
        id: "response_3",
        label: "Scenario C · Supported stance (with IOA verified)?",
        options: [
          "Clearer differentiated pattern—still note generalization limits",
          "Automatic proof for all settings forever",
          "Delete baseline anyway",
          "Skip practical significance",
        ],
        correct: "Clearer differentiated pattern—still note generalization limits",
      },
      {
        id: "response_4",
        label: "Scenario D · BEST reporting?",
        options: [
          "Pair graph gains with honest practical significance caveat",
          "Hide home injury data",
          "Claim complete success",
          "Stop measuring",
        ],
        correct: "Pair graph gains with honest practical significance caveat",
      },
      {
        id: "response_5",
        label: "Variability within a phase describes:",
        options: [
          "Scatter of data around the phase path",
          "Latency only",
          "IOA percentage",
          "Punishment intensity",
        ],
        correct: "Scatter of data around the phase path",
      },
      {
        id: "response_6",
        label: "Visual inspection is Chapter 7's:",
        options: [
          "Primary method for analyzing single-subject graphs",
          "Optional afterthought",
          "Substitute for definitions",
          "Replacement for all ethics",
        ],
        correct: "Primary method for analyzing single-subject graphs",
      },
      {
        id: "response_7",
        label: "Low fidelity during intervention weakens:",
        options: [
          "Attribution to the planned independent variable",
          "Need for any graphs",
          "IOA forever",
          "Baseline only",
        ],
        correct: "Attribution to the planned independent variable",
      },
      {
        id: "response_8",
        label: "First step on exam graph stem after construction check:",
        options: [
          "Read level, trend, variability within and across phases",
          "Select punishment",
          "Delete outliers silently",
          "Finalize FA",
        ],
        correct: "Read level, trend, variability within and across phases",
      },
    ],
    remediationLog:
      "Rebuild Chapter 7 fluency: integrity check → within-phase dimensions → overlap/drift → practical significance → language matches evidence.",
  },
  bdsBank: CHAPTER_07_ANALYSIS_QUIZ_BANK,
};
