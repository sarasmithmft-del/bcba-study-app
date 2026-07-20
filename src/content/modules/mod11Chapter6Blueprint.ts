import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_06_GRAPHIC_QUIZ_BANK } from "@/content/modules/quiz/chapter06GraphicQuizBank";

export const MOD11_BLUEPRINT: ExtensionBlueprint = {
  id: "mod11",
  chapterNumber: 6,
  activityPrefix: 2110,
  title: "Constructing and Interpreting Graphic Displays of Behavioral Data",
  codexHeading:
    "READING — Chapter 6 (Constructing and Interpreting Graphic Displays of Behavioral Data)",
  codexIntro: `Chapter 6 in Cooper, Heron, and Heward teaches behavior analysts to build and read the graphic displays that organize single-subject data. After Chapters 3–5 establish what to measure and whether observers agree, Chapter 6 asks how to plot data so patterns become visible, auditable, and communicable to teams, families, and funders.

Constructing a graph starts with disciplined plotting: session or time units on the horizontal axis, the measured behavioral dimension on the vertical axis, individual data points for each observation, and data paths connecting sequential sessions so trend is visible. Every phase of an experiment or intervention should be labeled so readers know which condition was in effect. Vertical phase-change lines mark when procedures shifted—without them, reviewers cannot link data patterns to treatment history.

Graphic conventions protect honest inspection. Axes should use proportional scaling; comparable phases should share scaling unless a deliberate, annotated break is unavoidable. Mid-graph rescaling, decorative chartjunk, and selective omission of sessions or baseline periods create false impressions of change—violations of measurement integrity (Domain C) and transparent reporting (Domain E).

Cooper introduces specialized displays including standard celeration (standard ratio) charts for proportional comparison across wide magnitude ranges, and bar graphs when summarizing levels across conditions is appropriate. Line graphs remain the primary workhorse for session-by-session single-subject data because they preserve temporal detail variability analysts need before drawing conclusions.

Chapter 6 also introduces foundational visual inspection: reading level (central tendency within a phase), trend (directional movement over time), and variability (scatter of points around the path). Holistic inspection means synthesizing these features within and across phases—not cherry-picking one flattering dot. Baseline drift before intervention begins must be noted before attributing later change to treatment (deeper interpretation continues in Chapter 7, module Chapter 7).

Structured aids—split-middle lines, guideline bands, celeration overlays on ratio charts—scaffold judgment but never replace fidelity notes, complete data plotting, or documented reconciliation when qualified reviewers disagree.

For BCBA exam prep, Chapter 6 items test graph components (axes, phase lines, labels), graph type selection, scaling ethics, chartjunk versus annotation, and basic inspection vocabulary. When a stem describes construction, fix the graph first; when it describes level/trend/overlap depth, cross-check Chapter 7 study.`,
  footnotes: {
    ch6_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 6 — purposes and components of graphic displays (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Graphs translate Chapters 4–5 measurement into visible time-series patterns.",
        "Not quoted from CHH.",
      ],
    },
    ch6_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 6 — constructing line graphs: axes, data points, paths, phase-change lines, condition labels.",
        "Unlabeled or incomplete graphs fail replication standards.",
      ],
    },
    ch6_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 6 — graphic conventions: proportional scaling, avoiding chartjunk, annotating rescaling.",
        "Exam items often embed axis tricks—name the distortion.",
      ],
    },
    ch6_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 6 — standard ratio charts, bar graphs, cumulative displays as appropriate.",
        "Match graph type to the question and data structure.",
      ],
    },
    ch6_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 6 — introduction to visual inspection: level, trend, variability within phases.",
        "Advanced interpretation overlaps Chapter 7 (see workbook Chapter 7 module).",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch6_1" },
    { afterSentenceIndex: 2, ref: "ch6_2" },
    { afterSentenceIndex: 4, ref: "ch6_3" },
    { afterSentenceIndex: 6, ref: "ch6_4" },
    { afterSentenceIndex: 8, ref: "ch6_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 6 recap",
    intro:
      "Chapter 6 is about building honest graphs and reading them correctly. If the graph is misleading, every decision that follows is on shaky ground.",
    chunks: [
      {
        subtitle: "Build the graph right",
        segments: [
          {
            type: "text",
            text: "Plot sessions on the x-axis, your measured behavior on the y-axis, mark every session, label each phase, and draw phase-change lines when procedures shift ",
          },
          { type: "footnote", ref: "ch6_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Keep scaling honest",
        segments: [
          {
            type: "text",
            text: "Do not rescale axes to create fake cliffs or flat lines. Skip chartjunk. If you must break an axis, say so clearly ",
          },
          { type: "footnote", ref: "ch6_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Choose the display type",
        segments: [
          {
            type: "text",
            text: "Line graphs for session-by-session data; bar graphs for summarized comparisons when appropriate; ratio charts when rates span very different magnitudes ",
          },
          { type: "footnote", ref: "ch6_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Start visual inspection",
        segments: [
          {
            type: "text",
            text: "Look at level, trend, and variability in each phase before claiming success. Note baseline drift early ",
          },
          { type: "footnote", ref: "ch6_5" },
          { type: "text", text: ". Deeper interpretation lives in Chapter 7." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include unlabeled axes, undocumented rescaling, chartjunk versus helpful annotations, plotting only favorable sessions, and confusing bar-graph summaries with session-level trends. Resolve them by checking construction standards before interpreting patterns.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch6_v1: { label: "[V1]", lines: ["CHH Chapter 6 — phase-change line marks condition shift."] },
    ch6_v2: { label: "[V2]", lines: ["CHH Chapter 6 — condition label identifies IV in effect."] },
    ch6_v3: { label: "[V3]", lines: ["CHH Chapter 6 — standard ratio (celeration) chart."] },
    ch6_v4: { label: "[V4]", lines: ["CHH Chapter 6 — chartjunk versus functional annotation."] },
    ch6_v5: { label: "[V5]", lines: ["CHH Chapter 6 — level, trend, variability in visual inspection."] },
    ch6_v6: { label: "[V6]", lines: ["CHH Chapter 6 — bar graph for aggregated comparisons."] },
    ch6_kc1: { label: "[KC1]", lines: ["Domain C: graph construction integrity supports all downstream claims."] },
    ch6_kc2: { label: "[KC2]", lines: ["Domain E: selective plotting or hidden baselines mislead stakeholders."] },
    ch6_exam: {
      label: "[F-ch6]",
      lines: ["Chapter 6 exam items emphasize axes, phases, scaling, graph type, and basic inspection terms."],
    },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 6",
    intro: "Pair each term with what you would look for on a graph or what construction step it requires.",
    entries: [
      { term: "Phase-change line", definition: "Vertical marker separating experimental or intervention conditions.", footnoteRef: "ch6_v1" },
      { term: "Condition label", definition: "Text identifying the procedure active in a graph region.", footnoteRef: "ch6_v2" },
      { term: "Standard ratio chart", definition: "Log-scaled display for proportional rate comparison across magnitudes.", footnoteRef: "ch6_v3" },
      { term: "Chartjunk", definition: "Decorative clutter that obscures data.", footnoteRef: "ch6_v4" },
      { term: "Level", definition: "Central tendency of data within a phase.", footnoteRef: "ch6_v5" },
      { term: "Trend", definition: "Directional movement of data over sessions within a phase.", footnoteRef: "ch6_v5" },
      { term: "Variability", definition: "Scatter of data points around the phase path.", footnoteRef: "ch6_v5" },
      { term: "Bar graph", definition: "Summarized comparison display—may hide session-level detail.", footnoteRef: "ch6_v6" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 6",
    intro: "Construction quality enables inspection. Fix the graph before arguing about treatment effects.",
    concepts: [
      {
        title: "Graph components",
        segments: [
          { type: "text", text: "Axes, points, paths, phase lines, and condition labels let outsiders replay your logic " },
          { type: "footnote", ref: "ch6_v1" },
          { type: "footnote", ref: "ch6_v2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Proportional scaling",
        segments: [
          { type: "text", text: "Consistent, honest axes prevent perceptual illusions—annotate unavoidable breaks " },
          { type: "footnote", ref: "ch6_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Graph type selection",
        segments: [
          { type: "text", text: "Line graphs for time series; bar graphs for summaries; ratio charts for wide rate ranges " },
          { type: "footnote", ref: "ch6_v3" },
          { type: "footnote", ref: "ch6_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Introductory visual inspection",
        segments: [
          { type: "text", text: "Read level, trend, and variability holistically—Chapter 7 extends interpretation " },
          { type: "footnote", ref: "ch6_v5" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each graph construction or inspection term to the vignette—state which axis, line, or feature fixes the problem.",
  matchActivityInstructions:
    "Each item describes a graph scenario. Select the construction standard, display type, or inspection response aligned with Chapter 6.",
  chainActivityInstructions:
    "Sequence graph construction: define dimension → plot all sessions → label phases → check scaling → inspect level/trend/variability.",
  mts: [
    {
      sample_stimulus: "Team publishes graph without y-axis label or unit of measurement.",
      comparison_options: [
        "Missing essential construction element—label the dimension",
        "Acceptable minimalist design",
        "IOA substitute",
        "Proof of treatment fidelity",
      ],
      correct_match: "Missing essential construction element—label the dimension",
      error_feedback: "Readers must know what the y-axis counts or measures.",
    },
    {
      sample_stimulus: "Vertical line drawn at session 8 when DRA replaced extinction.",
      comparison_options: [
        "Phase-change line marking procedural shift",
        "Chartjunk",
        "Negative punishment",
        "IOA formula",
      ],
      correct_match: "Phase-change line marking procedural shift",
      error_feedback: "Phase lines separate conditions when the IV changed.",
    },
    {
      sample_stimulus: "Rates span 2 per session to 400 per session across phases; team uses standard ratio chart.",
      comparison_options: [
        "Appropriate proportional display for wide magnitude range",
        "Wrong—bar graphs only always",
        "Replaces all IOA",
        "Eliminates baseline",
      ],
      correct_match: "Appropriate proportional display for wide magnitude range",
      error_feedback: "Ratio charts standardize logarithmic slope comparison.",
    },
    {
      sample_stimulus: "Fundraising slide uses 3D clip art covering half the data path.",
      comparison_options: ["Chartjunk obscuring data", "Helpful annotation", "Phase-change line", "Split-middle aid"],
      correct_match: "Chartjunk obscuring data",
      error_feedback: "Decorative clutter violates graphic convention discipline.",
    },
    {
      sample_stimulus: "Y-axis rescales from 0–20 to 0–5 at intervention without annotation.",
      comparison_options: [
        "Distorted scaling threatening honest inspection",
        "Standard Cooper practice",
        "Proof of mastery",
        "Latency recording artifact",
      ],
      correct_match: "Distorted scaling threatening honest inspection",
      error_feedback: "Undocumented rescaling exaggerates or hides change.",
    },
    {
      sample_stimulus: "Bar graph shows mean hits per phase only; session-by-session trend invisible.",
      comparison_options: [
        "Summary display may hide within-phase variability—line graph may be needed for detail",
        "Perfect for all single-subject analysis always",
        "Replaces IOA",
        "Automatic FA",
      ],
      correct_match: "Summary display may hide within-phase variability—line graph may be needed for detail",
      error_feedback: "Bar graphs summarize; time-series detail may require line graphs.",
    },
    {
      sample_stimulus: "Baseline points slope upward before treatment; presenter credits flat intervention phase entirely.",
      comparison_options: [
        "Ignored baseline drift—note trend before causal attribution (Ch 6–7)",
        "Correct inspection",
        "IOA error only",
        "Token economy issue",
      ],
      correct_match: "Ignored baseline drift—note trend before causal attribution (Ch 6–7)",
      error_feedback: "Drift before intervention confounds attribution.",
    },
    {
      sample_stimulus: "All sessions plotted, phases labeled, axes proportional, fidelity notes in caption.",
      comparison_options: [
        "Meets core Chapter 6 construction standards",
        "Excessive chartjunk",
        "Eliminates need for measurement",
        "Replaces Chapter 7 entirely",
      ],
      correct_match: "Meets core Chapter 6 construction standards",
      error_feedback: "Complete honest construction supports trustworthy inspection.",
    },
  ],
  chainTitle: "Graph construction workflow",
  chainFragments: [
    { id: "a", text: "Identify measured dimension and session/time x-axis." },
    { id: "b", text: "Plot all sessions with data paths and phase-change lines." },
    { id: "c", text: "Label conditions; verify proportional scaling." },
    { id: "d", text: "Inspect level, trend, variability before strong claims." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  worksheet: {
    title: "CHH Chapter 6 — graphic displays & inspection basics",
    instructions:
      "Each item tests graph construction or introductory inspection from Chapter 6. For deep overlap and practical significance, see Chapter 7 (mod10).",
    scenario:
      "Scenario A — Graph shows intervention gains but y-axis jumps from 0–100 to 0–10 at phase change with no break symbol.",
    scenario_follow_up:
      "Scenario B — Team plots only sessions 10–15 of a 20-session baseline.\n\nScenario C — Ratio chart used for behaviors ranging 1–800 instances per session.\n\nScenario D — Bar graph of mean duration per phase hides daily spikes caregivers report.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Primary problem?",
        options: [
          "Undocumented rescaling distorts visual comparison",
          "Too many data points",
          "IOA above 100%",
          "Correct standard practice",
        ],
        correct: "Undocumented rescaling distorts visual comparison",
      },
      {
        id: "response_2",
        label: "Scenario B · Ethical concern?",
        options: [
          "Selective session plotting misrepresents baseline",
          "Too much variability shown",
          "Excess labeling",
          "Use of line graph",
        ],
        correct: "Selective session plotting misrepresents baseline",
      },
      {
        id: "response_3",
        label: "Scenario C · Ratio chart use?",
        options: [
          "Appropriate for wide magnitude range",
          "Never appropriate in behavior analysis",
          "Replaces event recording",
          "Only for IOA",
        ],
        correct: "Appropriate for wide magnitude range",
      },
      {
        id: "response_4",
        label: "Scenario D · Supplementary display?",
        options: [
          "Session-level line graph to show variability trend",
          "Delete caregiver reports",
          "Remove all labels",
          "Switch to punishment only",
        ],
        correct: "Session-level line graph to show variability trend",
      },
      {
        id: "response_5",
        label: "Phase-change line purpose?",
        options: [
          "Mark when procedure/condition changed",
          "Decorate slides",
          "Calculate IOA",
          "Measure latency",
        ],
        correct: "Mark when procedure/condition changed",
      },
      {
        id: "response_6",
        label: "Chartjunk BEST defined as:",
        options: [
          "Decorative clutter obscuring data",
          "Phase label with fidelity note",
          "Labeled y-axis",
          "Split-middle trend aid",
        ],
        correct: "Decorative clutter obscuring data",
      },
      {
        id: "response_7",
        label: "Variability on a graph refers to:",
        options: [
          "Scatter of points around the phase path",
          "IOA percentage only",
          "Font choice",
          "MO shift",
        ],
        correct: "Scatter of points around the phase path",
      },
      {
        id: "response_8",
        label: "Essential before strong treatment claims from a graph:",
        options: [
          "Honest construction plus holistic read of level, trend, variability",
          "One favorable data point",
          "Hidden baseline",
          "Caregiver approval only without data",
        ],
        correct: "Honest construction plus holistic read of level, trend, variability",
      },
    ],
    remediationLog:
      "Rebuild Chapter 6 fluency: label axes → plot all sessions → mark phases → check scaling → read level/trend/variability → note limits before causal language.",
  },
  bdsBank: CHAPTER_06_GRAPHIC_QUIZ_BANK,
};
