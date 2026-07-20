import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_10_RESEARCH_QUIZ_BANK } from "@/content/modules/quiz/chapter10ResearchQuizBank";

export const MOD16_BLUEPRINT: ExtensionBlueprint = {
  id: "mod16",
  chapterNumber: 10,
  activityPrefix: 2160,
  title: "Planning and Evaluating Applied Behavior Analysis Research",
  codexHeading: "READING — Chapter 10 (Planning and Evaluating Applied Behavior Analysis Research)",
  codexIntro: `Chapter 10 in Cooper, Heron, and Heward steps back from specific design families (Chapters 8–9) to address how applied behavior analysts plan research and judge whether evidence is trustworthy. The chapter treats research as a disciplined process: start with a meaningful question, select behaviors participants and settings deliberately, choose a design that can answer the question, and evaluate results against multiple validity standards before recommending practice changes.

Single-subject research is central in applied behavior analysis because many clinical questions require idiographic detail—how this learner's behavior changed under specified conditions—not only group averages. Flexible experimental designs allow analysts to adjust phases as data accumulate while maintaining documented procedural integrity. That flexibility is a strength when paired with transparent graphs, replication, and fidelity monitoring.

Planning research distinguishes descriptive, correlational, and experimental approaches. Descriptive work documents behavior without manipulating variables to demonstrate control. Experimental work manipulates independent variables while measuring dependent variables to establish functional relations. Component analysis evaluates which elements of a treatment package are necessary or sufficient—supporting parsimony in intervention design.

Evaluating research requires three intertwined validity frameworks. Internal validity asks whether changes in the dependent variable can be attributed to the independent variable rather than confounds. Cooper outlines a practical sequence: first verify that data validly measure the target behavior; second examine graphic displays for distortion and replot with appropriate scaling if needed; third assess whether baseline conditions provide a credible comparison for intervention effects. External validity asks whether findings generalize across behaviors, settings, people, and time. Social validity—goals, procedures, and outcomes meaningful to consumers—keeps applied research tethered to real-world significance.

Replication strengthens confidence: direct replication repeats the same intervention with similar subjects and behaviors; systematic replication varies some feature while confirming the effect; conceptual replication tests whether different procedures grounded in the same principle produce similar outcomes. Treatment integrity (procedural reliability) must be monitored throughout—high outcome change with low fidelity leaves causal attribution uncertain.

Visual inspection remains the primary analytic tool in single-subject research because it preserves individual data paths, variability, and phase relations. Analysts must also know its limitations—interpretive bias when training is weak—and integrate visual analysis with validity checks rather than treating graphs as automatic proof.

For BCBA exam prep: discriminate internal, external, and social validity; know Cooper's three-step internal validity evaluation; match replication type to vignette; and recognize that planning and evaluation precede confident scale-up—not the reverse.`,
  footnotes: {
    ch10_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 10 — planning applied research; single-subject emphasis (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Flexible designs serve idiographic questions.",
        "Not quoted from CHH.",
      ],
    },
    ch10_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 10 — internal validity and evaluation sequence.",
        "Measurement quality precedes design inference.",
      ],
    },
    ch10_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 10 — external validity and generalization.",
        "Replication supports generality claims.",
      ],
    },
    ch10_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 10 — social validity (goals, procedures, outcomes).",
        "Applied significance requires consumer alignment.",
      ],
    },
    ch10_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 10 — replication types and treatment integrity.",
        "Fidelity monitoring supports internal validity.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch10_1" },
    { afterSentenceIndex: 3, ref: "ch10_2" },
    { afterSentenceIndex: 4, ref: "ch10_3" },
    { afterSentenceIndex: 4, ref: "ch10_4" },
    { afterSentenceIndex: 5, ref: "ch10_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 10 recap",
    intro:
      "Chapter 10 is the quality-control chapter: before you trust a graph or scale a program, ask whether the measurement was solid, the design supports cause-and-effect, the results would matter in real life, and whether anyone else could replicate the effect.",
    chunks: [
      {
        subtitle: "Plan before you prove",
        segments: [
          {
            type: "text",
            text: "Start with a clear question and targets stakeholders care about. Pick behaviors, settings, and designs that can actually answer the question—not whatever is easiest to graph ",
          },
          { type: "footnote", ref: "ch10_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Internal validity—did the IV cause the change?",
        segments: [
          {
            type: "text",
            text: "Check measurement first, then graph integrity, then whether baseline was a fair comparison. Confounds like medication changes or covert procedure drift wreck causal claims ",
          },
          { type: "footnote", ref: "ch10_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "External validity—will it work elsewhere?",
        segments: [
          {
            type: "text",
            text: "One great graph in one room does not automatically generalize. Replication and generalization probes test whether effects travel across people, settings, and time ",
          },
          { type: "footnote", ref: "ch10_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Social validity—does it matter to consumers?",
        segments: [
          {
            type: "text",
            text: "Are the goals right, are the procedures acceptable, and is the outcome big enough to matter in daily life? A technically perfect graph on the wrong target still fails applied standards ",
          },
          { type: "footnote", ref: "ch10_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Replication and fidelity",
        segments: [
          {
            type: "text",
            text: "Repeat demonstrations strengthen confidence, and treatment integrity checks confirm the planned intervention actually ran ",
          },
          { type: "footnote", ref: "ch10_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include confusing internal, external, and social validity; skipping measurement quality review; treating visual inspection as automatic proof; and claiming generalization without replication. Resolve them by naming the validity type, applying Cooper's evaluation sequence, and matching replication language to the vignette.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch10_v1: { label: "[V1]", lines: ["CHH Chapter 10 — internal validity."] },
    ch10_v2: { label: "[V2]", lines: ["CHH Chapter 10 — external validity / generalization."] },
    ch10_v3: { label: "[V3]", lines: ["CHH Chapter 10 — social validity dimensions."] },
    ch10_v4: { label: "[V4]", lines: ["CHH Chapter 10 — direct, systematic, conceptual replication."] },
    ch10_v5: { label: "[V5]", lines: ["CHH Chapter 10 — visual inspection strengths and limits."] },
    ch10_v6: { label: "[V6]", lines: ["CHH Chapter 10 — treatment integrity / procedural reliability."] },
    ch10_kc1: { label: "[KC1]", lines: ["Domain F: evaluate design evidence before causal claims."] },
    ch10_kc2: { label: "[KC2]", lines: ["Domain C: measurement validity and fidelity documentation."] },
    ch10_kc3: { label: "[KC3]", lines: ["Domain E: social validity and transparent reporting."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 10",
    intro: "Discriminate validity types and replication labels before matching vignettes on the exam.",
    entries: [
      { term: "Internal validity", definition: "Confidence DV change is attributable to IV, not confounds.", footnoteRef: "ch10_v1" },
      { term: "External validity", definition: "Extent findings generalize across behaviors, settings, people, time.", footnoteRef: "ch10_v2" },
      { term: "Social validity", definition: "Goals, procedures, and outcomes meaningful/acceptable to consumers.", footnoteRef: "ch10_v3" },
      { term: "Direct replication", definition: "Same IV repeated with similar behavior and subjects.", footnoteRef: "ch10_v4" },
      { term: "Systematic replication", definition: "Effect replicated while varying some feature.", footnoteRef: "ch10_v4" },
      { term: "Conceptual replication", definition: "Different procedures, same underlying principle, similar outcomes.", footnoteRef: "ch10_v4" },
      { term: "Treatment integrity", definition: "Degree planned IV implemented as designed (procedural reliability).", footnoteRef: "ch10_v6" },
      { term: "Component analysis", definition: "Tests which treatment package elements are necessary/sufficient.", footnoteRef: "ch10_kc1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 10",
    intro: "Evaluation integrates measurement, design, validity types, and replication—not any single statistic.",
    concepts: [
      {
        title: "Cooper's internal validity evaluation sequence",
        segments: [
          { type: "text", text: "(1) Valid measurement of target; (2) undistorted graphs; (3) representative baseline before attributing IV effects " },
          { type: "footnote", ref: "ch10_v1" },
          { type: "footnote", ref: "ch10_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Three validity types answer different questions",
        segments: [
          { type: "text", text: "Internal = attribution; external = generalization; social = applied meaningfulness to consumers " },
          { type: "footnote", ref: "ch10_v2" },
          { type: "footnote", ref: "ch10_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Replication strengthens science",
        segments: [
          { type: "text", text: "Direct, systematic, and conceptual replication each test different generality claims " },
          { type: "footnote", ref: "ch10_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Visual inspection with discipline",
        segments: [
          { type: "text", text: "Preserve individual paths and variability; guard against bias and graphic distortion " },
          { type: "footnote", ref: "ch10_v5" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each term to internal, external, or social validity—or to the replication type described in the vignette.",
  matchActivityInstructions:
    "Select the validity type, evaluation step, or replication label that best fits Cooper Chapter 10.",
  chainActivityInstructions:
    "Sequence research planning and evaluation: meaningful question → measurement plan → design selection → fidelity monitoring → validity checks → replication before scale-up.",
  mts: [
    {
      sample_stimulus: "Graph looks impressive but observers never checked whether they were scoring the same behavior.",
      comparison_options: [
        "Step 1 internal validity failure—question measurement before causal claims",
        "External validity proved",
        "Social validity only issue",
        "Direct replication complete",
      ],
      correct_match: "Step 1 internal validity failure—question measurement before causal claims",
      error_feedback: "Cooper's evaluation sequence starts with valid, accurate measurement.",
    },
    {
      sample_stimulus: "Intervention works in clinic but team assumes home generalization without data.",
      comparison_options: [
        "External validity / generalization question requiring evidence",
        "Internal validity automatically satisfied",
        "Measurement reactivity only",
        "Conceptual replication completed",
      ],
      correct_match: "External validity / generalization question requiring evidence",
      error_feedback: "Generalization across settings must be demonstrated—not assumed.",
    },
    {
      sample_stimulus: "Caregivers report procedures are intrusive despite behavioral improvement on graph.",
      comparison_options: [
        "Social validity of procedures concern",
        "Proof measurement invalid",
        "Internal validity only",
        "Respondent extinction",
      ],
      correct_match: "Social validity of procedures concern",
      error_feedback: "Acceptability of procedures is a social validity dimension.",
    },
    {
      sample_stimulus: "Same DRA package replicated with three new learners with similar target behavior.",
      comparison_options: [
        "Direct replication",
        "Descriptive research only",
        "Component analysis",
        "Between-groups confound",
      ],
      correct_match: "Direct replication",
      error_feedback: "Same intervention with similar subjects/behavior is direct replication.",
    },
    {
      sample_stimulus: "DRA effect shown; team tests whether praise-only component produces same benefit.",
      comparison_options: [
        "Component analysis",
        "External validity only",
        "Social validity of goals",
        "Indirect assessment",
      ],
      correct_match: "Component analysis",
      error_feedback: "Isolating package elements tests necessity/sufficiency.",
    },
    {
      sample_stimulus: "Y-axis rescaled between slides so improvement looks larger without notation.",
      comparison_options: [
        "Graph distortion threatening validity evaluation (Step 2)",
        "Perfect reporting",
        "IOA formula error",
        "Systematic replication",
      ],
      correct_match: "Graph distortion threatening validity evaluation (Step 2)",
      error_feedback: "Replot with consistent, proportional scaling and disclose changes.",
    },
    {
      sample_stimulus: "Medication increased same week intervention started; behavior improved.",
      comparison_options: [
        "Confound threatening internal validity",
        "Proof IV caused change",
        "Social validity only",
        "External validity proved",
      ],
      correct_match: "Confound threatening internal validity",
      error_feedback: "Concurrent medication change confounds IV attribution.",
    },
    {
      sample_stimulus: "Fidelity checks show staff delivered only 40% of planned intervention steps.",
      comparison_options: [
        "Treatment integrity failure weakening causal inference",
        "External validity issue only",
        "Proof of mastery",
        "Direct replication",
      ],
      correct_match: "Treatment integrity failure weakening causal inference",
      error_feedback: "Low fidelity means unclear whether planned IV caused change.",
    },
  ],
  chainTitle: "Chapter 10 research evaluation workflow",
  chainFragments: [
    { id: "a", text: "Define socially valid research question and measurable targets." },
    { id: "b", text: "Collect data with valid definitions, IOA, and fidelity monitoring." },
    { id: "c", text: "Inspect graphs for distortion; verify baseline representativeness." },
    { id: "d", text: "Evaluate internal, external, and social validity before recommendations." },
    { id: "e", text: "Replicate (direct, systematic, or conceptual) before broad dissemination." },
  ],
  chainOrder: ["a", "b", "c", "d", "e"],
  safmedTerms: [
    { front: "Internal validity", back: "IV attribution confidence." },
    { front: "External validity", back: "Generalization across conditions." },
    { front: "Social validity", back: "Consumer-meaningful goals/procedures/outcomes." },
    { front: "Direct replication", back: "Same IV, similar context." },
    { front: "Treatment integrity", back: "IV implemented as planned." },
    { front: "Component analysis", back: "Isolate necessary package elements." },
  ],
  worksheet: {
    title: "CHH Chapter 10 — planning & evaluating research",
    instructions:
      "Identify validity type, evaluation step, or replication label. Apply Cooper's internal validity sequence before strong causal claims.",
    scenario:
      "Scenario A — Strong intervention graph; IOA never collected; caregivers say targets are not priorities.",
    scenario_follow_up:
      "Scenario B — Effect shown in clinic only; team plans district rollout.\n\nScenario C — Same procedure replicated with new learner.\n\nScenario D — Y-axis rescaled to exaggerate change; medication changed same week as IV.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · FIRST evaluation concern?",
        options: [
          "Measurement validity (Step 1) and social validity of goals",
          "External validity proved",
          "Direct replication complete",
          "Multielement carryover",
        ],
        correct: "Measurement validity (Step 1) and social validity of goals",
      },
      {
        id: "response_2",
        label: "Scenario B · Primary validity question before rollout?",
        options: [
          "External validity / generalization",
          "IOA formula selection only",
          "Respondent conditioning",
          "Graph font",
        ],
        correct: "External validity / generalization",
      },
      {
        id: "response_3",
        label: "Scenario C · BEST replication label?",
        options: [
          "Direct replication",
          "Descriptive research only",
          "Punishment probe",
          "No replication",
        ],
        correct: "Direct replication",
      },
      {
        id: "response_4",
        label: "Scenario D · Threats include:",
        options: [
          "Graph distortion (Step 2) and confound threatening internal validity",
          "Social validity only",
          "Perfect internal validity",
          "External validity proved",
        ],
        correct: "Graph distortion (Step 2) and confound threatening internal validity",
      },
      {
        id: "response_5",
        label: "Internal validity asks:",
        options: [
          "Whether DV change is attributable to IV",
          "Whether stakeholders like the BCBA",
          "Whether graph is color-coded",
          "Whether MO was abolished",
        ],
        correct: "Whether DV change is attributable to IV",
      },
      {
        id: "response_6",
        label: "Social validity of outcomes asks:",
        options: [
          "Whether change is meaningful in daily life",
          "Whether IOA exceeded 90%",
          "Whether punishment was used",
          "Whether FA had four conditions",
        ],
        correct: "Whether change is meaningful in daily life",
      },
      {
        id: "response_7",
        label: "Low treatment fidelity during intervention:",
        options: [
          "Weakens internal validity attribution",
          "Proves external validity",
          "Eliminates need for graphs",
          "Replaces social validity",
        ],
        correct: "Weakens internal validity attribution",
      },
      {
        id: "response_8",
        label: "Cooper Step 3 internal validity check:",
        options: [
          "Assess baseline representativeness for comparing IV effects",
          "Skip baseline review",
          "Run group ANOVA",
          "Delete variability",
        ],
        correct: "Assess baseline representativeness for comparing IV effects",
      },
    ],
    remediationLog:
      "Rebuild Chapter 10 fluency: plan meaningful question → valid measurement → undistorted graphs → credible baseline → fidelity → name validity type → replicate before scale-up.",
  },
  bdsBank: CHAPTER_10_RESEARCH_QUIZ_BANK,
};
