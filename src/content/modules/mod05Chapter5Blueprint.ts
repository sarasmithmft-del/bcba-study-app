import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_05_IOA_QUIZ_BANK } from "@/content/modules/quiz/chapter05IOAQuizBank";

export const MOD05_BLUEPRINT: ExtensionBlueprint = {
  id: "mod05",
  chapterNumber: 5,
  activityPrefix: 2050,
  title: "Improving and Assessing the Quality of Behavioral Measurement",
  codexHeading: "READING — Chapter 5 (Improving and Assessing the Quality of Behavioral Measurement)",
  codexIntro: `Chapter 5 in Cooper, Heron, and Heward closes the measurement loop opened in Chapters 3 and 4. After targets are selected and recording tactics chosen, analysts must ask whether the numbers are trustworthy: Do independent observers apply the same operational definition? Was the intervention implemented as planned? Did observation itself change the behavior?

Interobserver agreement (IOA) quantifies correspondence between observers scoring identical samples. Cooper presents several IOA methods because recording formats differ: total-count IOA compares session totals for event recording; mean count-per-interval IOA compares average counts per interval when session lengths differ; interval-by-interval IOA requires agreement on each interval (the strictest interval method); trial-by-trial IOA fits discrete trial formats where each trial is scored agree or disagree.

Selecting the wrong IOA formula for your data structure is a common board error. Total-count IOA can look acceptable even when observers disagree on when behavior occurred within intervals—interval-by-interval IOA exposes that timing disagreement. Mean count-per-interval IOA helps when observation windows vary in length. Match the IOA method to the grain of your data collection.

Observer training, pilot IOA, and remediation when agreement falls below threshold are professional obligations—not optional paperwork. When IOA is low, analysts pause strong interpretive claims, refine definitions with examples and non-examples, retrain observers on overlapping samples, and document remediation before stakeholders treat graphs as causal proof.

Chapter 5 also addresses procedural integrity (treatment fidelity): whether the independent variable was implemented as designed. High outcome change paired with low fidelity means you cannot confidently attribute results to the planned intervention. Fidelity checklists and direct observation of procedural steps parallel IOA logic applied to treatment delivery.

Measurement reactivity—behavior changing because it is observed—threatens external validity. Cooper discusses allowing habituation when ethical, using unobtrusive measures when possible, and noting reactivity limits in reports. Validity (measuring the right target) and reliability (measuring consistently) both matter: high IOA on a misaligned definition still produces useless precision.

For BCBA exam prep, when a stem mentions two observers and a percentage, first identify the recording method, then select the IOA formula that fits. Second, ask whether the scenario describes IOA, fidelity, reactivity, or ethical reporting—and do not collapse them into one vague "measurement" label.`,
  footnotes: {
    ch5_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 5 — purposes of assessing measurement quality (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "IOA and fidelity protect Domain C measurement claims before Domain F analytic narratives finalize.",
        "Not quoted from CHH.",
      ],
    },
    ch5_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 5 — interobserver agreement: total count, mean count-per-interval, interval-by-interval, trial-by-trial.",
        "Method selection must match recording grain—exam items swap formulas deliberately.",
      ],
    },
    ch5_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 5 — observer training, drift, and remediation when IOA falls below criterion.",
        "Low IOA is a stop signal for strong treatment claims—not a cosmetic statistic.",
      ],
    },
    ch5_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 5 — procedural integrity / treatment fidelity documentation.",
        "Outcome graphs require evidence the planned IV actually ran.",
      ],
    },
    ch5_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 5 — measurement reactivity and validity versus reliability distinctions.",
        "Reliable scoring of the wrong behavior still fails the referral question.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch5_1" },
    { afterSentenceIndex: 2, ref: "ch5_2" },
    { afterSentenceIndex: 4, ref: "ch5_2" },
    { afterSentenceIndex: 6, ref: "ch5_3" },
    { afterSentenceIndex: 8, ref: "ch5_4" },
    { afterSentenceIndex: 10, ref: "ch5_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 5 recap",
    intro:
      "Chapter 5 asks: Can we trust these numbers? IOA checks whether observers agree. Fidelity checks whether treatment ran as planned. Both must be solid before you tell a family the graph proves anything.",
    chunks: [
      {
        subtitle: "What IOA does",
        segments: [
          {
            type: "text",
            text: "IOA compares independent observers on the same samples. If they disagree, the graph might reflect scoring noise—not real behavior change ",
          },
          { type: "footnote", ref: "ch5_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Pick the right IOA formula",
        segments: [
          {
            type: "text",
            text: "Total-count for session totals; mean count-per-interval when session lengths differ; interval-by-interval when you need strict agreement on each interval; trial-by-trial for discrete trials ",
          },
          { type: "footnote", ref: "ch5_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "When IOA is low",
        segments: [
          {
            type: "text",
            text: "Retrain, refine definitions, recollect overlapping data—do not publish victory graphs while observers still disagree ",
          },
          { type: "footnote", ref: "ch5_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Fidelity and reactivity",
        segments: [
          {
            type: "text",
            text: "Fidelity documents whether the intervention matched the plan. Reactivity means observation changed behavior—note it honestly ",
          },
          { type: "footnote", ref: "ch5_4" },
          { type: "text", text: " " },
          { type: "footnote", ref: "ch5_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include using total-count IOA when interval-by-interval is required, treating IOA as proof of treatment effects, confusing IOA with procedural integrity, and reporting a percentage without naming the formula. Resolve them by matching IOA type to data structure and separating reliability from validity.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch5_v1: { label: "[V1]", lines: ["CHH Chapter 5 — interobserver agreement (IOA)."] },
    ch5_v2: { label: "[V2]", lines: ["CHH Chapter 5 — total-count IOA for session event totals."] },
    ch5_v3: { label: "[V3]", lines: ["CHH Chapter 5 — mean count-per-interval IOA when session lengths differ."] },
    ch5_v4: { label: "[V4]", lines: ["CHH Chapter 5 — interval-by-interval IOA (strictest interval agreement)."] },
    ch5_v5: { label: "[V5]", lines: ["CHH Chapter 5 — trial-by-trial IOA for discrete trial programs."] },
    ch5_v6: { label: "[V6]", lines: ["CHH Chapter 5 — procedural integrity / treatment fidelity."] },
    ch5_v7: { label: "[V7]", lines: ["CHH Chapter 5 — observer drift and retraining."] },
    ch5_v8: { label: "[V8]", lines: ["CHH Chapter 5 — measurement reactivity."] },
    ch5_kc1: {
      label: "[KC1]",
      lines: ["Domain C: IOA and fidelity are prerequisites for defensible graphs and phase-change claims."],
    },
    ch5_kc2: {
      label: "[KC2]",
      lines: ["Domain E: report IOA values, methods, and limits—do not cherry-pick sessions or hide low agreement."],
    },
    ch5_exam: {
      label: "[F-ch5]",
      lines: [
        "Exam stems on Chapter 5 test IOA formula selection, fidelity versus agreement, and ethical reporting.",
        "See Chapters 3–4 modules for target selection and recording tactics.",
      ],
    },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 5",
    intro:
      "Master IOA vocabulary by pairing each term with the recording method it fits. Board items often embed the method in the vignette and ask which IOA formula applies.",
    entries: [
      { term: "Interobserver agreement (IOA)", definition: "Quantified correspondence between observers on the same samples.", footnoteRef: "ch5_v1" },
      { term: "Total-count IOA", definition: "Compares session totals between observers for event recording.", footnoteRef: "ch5_v2" },
      { term: "Mean count-per-interval IOA", definition: "Compares average counts per interval—useful when session lengths differ.", footnoteRef: "ch5_v3" },
      { term: "Interval-by-interval IOA", definition: "Percentage of intervals where observers agree—strictest interval method.", footnoteRef: "ch5_v4" },
      { term: "Trial-by-trial IOA", definition: "Agreement on scoring each discrete trial.", footnoteRef: "ch5_v5" },
      { term: "Procedural integrity", definition: "Treatment implemented as planned—also called treatment fidelity.", footnoteRef: "ch5_v6" },
      { term: "Observer drift", definition: "Gradual shift in how an observer applies definitions over time.", footnoteRef: "ch5_v7" },
      { term: "Measurement reactivity", definition: "Behavior changes because it is being observed.", footnoteRef: "ch5_v8" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 5",
    intro:
      "Chapter 5 is the reliability and integrity gate. Chapters 3–4 built what to measure and how to record; Chapter 5 asks whether anyone can trust the record.",
    concepts: [
      {
        title: "IOA method matches data grain",
        segments: [
          { type: "text", text: "Select total-count, mean count-per-interval, interval-by-interval, or trial-by-trial IOA based on how data were collected—not convenience " },
          { type: "footnote", ref: "ch5_v2" },
          { type: "footnote", ref: "ch5_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Low IOA triggers remediation",
        segments: [
          { type: "text", text: "Retrain observers, clarify definitions, and recollect overlap samples before strong causal language " },
          { type: "footnote", ref: "ch5_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Procedural integrity supports inference",
        segments: [
          { type: "text", text: "Document that the planned intervention occurred—otherwise outcome change may reflect uncontrolled drift " },
          { type: "footnote", ref: "ch5_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Validity plus reliability",
        segments: [
          { type: "text", text: "High IOA on the wrong target is reliably wrong. Align definitions with referral questions from Chapter 3 " },
          { type: "footnote", ref: "ch5_exam" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical reporting",
        segments: [
          { type: "text", text: "Report IOA type, sampling plan, and limitations alongside graphs—especially when agreement is imperfect " },
          { type: "footnote", ref: "ch5_kc2" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "For each IOA term, state which recording scenario it fits and one board-style trap (for example, using total-count IOA when interval-by-interval is required).",
  matchActivityInstructions:
    "Read each Chapter 5 vignette and select the IOA method, quality issue, or professional response that best fits Cooper's measurement quality logic.",
  chainActivityInstructions:
    "Sequence the Chapter 5 workflow: definitions stable → pilot IOA → ongoing IOA sampling → fidelity checks → interpret graphs with reported limits.",
  mts: [
    {
      sample_stimulus: "Two observers count elopement instances across a 45-minute session and compare totals of 12 versus 14.",
      comparison_options: ["Total-count IOA", "Interval-by-interval IOA", "Trial-by-trial IOA", "Procedural integrity check"],
      correct_match: "Total-count IOA",
      error_feedback: "Session event totals use total-count IOA—not per-interval or per-trial methods.",
    },
    {
      sample_stimulus: "Observers divide a session into 30 ten-second intervals marking whether aggression occurred in each interval; supervisor requires agreement on every interval.",
      comparison_options: ["Interval-by-interval IOA", "Total-count IOA only", "Caregiver questionnaire IOA", "Latency IOA exclusively"],
      correct_match: "Interval-by-interval IOA",
      error_feedback: "When each interval is scored, interval-by-interval IOA is the strict matching method.",
    },
    {
      sample_stimulus: "DTT program: observers score correct versus incorrect on each discrete trial and compare trial-by-trial agreement.",
      comparison_options: ["Trial-by-trial IOA", "Mean count-per-interval IOA", "Total-count IOA on duration", "Indirect FAST IOA"],
      correct_match: "Trial-by-trial IOA",
      error_feedback: "Discrete trial formats use trial-by-trial agreement.",
    },
    {
      sample_stimulus: "Session A is 20 minutes; Session B is 40 minutes. Team compares average counts per interval rather than raw session totals.",
      comparison_options: ["Mean count-per-interval IOA", "Total-count IOA without adjustment", "No IOA needed", "Trial-by-trial IOA only"],
      correct_match: "Mean count-per-interval IOA",
      error_feedback: "Unequal session lengths favor mean count-per-interval comparisons.",
    },
    {
      sample_stimulus: "IOA is 95% total-count but only 62% interval-by-interval on the same partial-interval data.",
      comparison_options: [
        "Observers agree on overall rate but disagree on interval timing—review definitions",
        "Perfect agreement—publish strong causal claims immediately",
        "Proof of automatic reinforcement",
        "IOA irrelevant because graphs look good",
      ],
      correct_match: "Observers agree on overall rate but disagree on interval timing—review definitions",
      error_feedback: "High total-count with low interval IOA signals timing disagreement within intervals.",
    },
    {
      sample_stimulus: "Checklist shows prompts delivered on only 40% of steps despite graph showing improved accuracy.",
      comparison_options: [
        "Low procedural integrity threatens attribution to the planned intervention",
        "High IOA automatically fixes fidelity",
        "Proof treatment should scale agency-wide",
        "Reason to eliminate all measurement",
      ],
      correct_match: "Low procedural integrity threatens attribution to the planned intervention",
      error_feedback: "Fidelity documents whether the IV ran as designed—separate from IOA.",
    },
    {
      sample_stimulus: "Learner's problem behavior drops sharply only when the principal enters the room, then returns when alone.",
      comparison_options: ["Measurement reactivity to observation", "Proof of extinction", "Negative punishment", "Stimulus equivalence"],
      correct_match: "Measurement reactivity to observation",
      error_feedback: "Behavior changed because of observation context—reactivity threatens typical levels.",
    },
    {
      sample_stimulus: "Agency reports 'IOA 88%' without stating formula, sessions sampled, or behavior defined.",
      comparison_options: [
        "Incomplete reporting—Domain C/E require IOA method transparency",
        "Fully sufficient for funders",
        "Proof of FA conclusion",
        "Substitute for operational definitions",
      ],
      correct_match: "Incomplete reporting—Domain C/E require IOA method transparency",
      error_feedback: "IOA percentages require method, sample, and definition context.",
    },
  ],
  chainTitle: "Measurement quality gate",
  chainFragments: [
    { id: "a", text: "Stabilize operational definitions with examples and non-examples." },
    { id: "b", text: "Pilot IOA on overlapping samples until criterion met." },
    { id: "c", text: "Collect ongoing IOA plus procedural integrity during intervention." },
    { id: "d", text: "Interpret graphs with reported IOA, fidelity, and reactivity limits." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  worksheet: {
    title: "CHH Chapter 5 — IOA & measurement quality",
    instructions:
      "Each item tests Chapter 5 discriminations: IOA formula selection, fidelity versus agreement, remediation when IOA is low, and ethical reporting. Refer to Chapters 3–4 modules for target selection and recording tactics.",
    scenario:
      "Scenario A — Observers compare session totals of 25 versus 30 hits for event-recorded aggression.",
    scenario_follow_up:
      "Scenario B — Partial-interval data: 20 intervals, observers agree on 17.\n\nScenario C — DTT: 50 trials, observers agree on scoring 46.\n\nScenario D — Graph shows gains but fidelity checklist shows 35% prompt delivery.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · BEST IOA method?",
        options: ["Total-count IOA", "Trial-by-trial IOA", "Interval-by-interval only", "No IOA for event recording"],
        correct: "Total-count IOA",
      },
      {
        id: "response_2",
        label: "Scenario B · Interval-by-interval IOA equals?",
        options: ["85% (17/20)", "100% because totals might match", "25% disagreement only", "Cannot compute"],
        correct: "85% (17/20)",
      },
      {
        id: "response_3",
        label: "Scenario C · BEST IOA method?",
        options: ["Trial-by-trial IOA", "Total-count IOA on latency", "Mean count-per-interval on gym intervals", "Questionnaire IOA"],
        correct: "Trial-by-trial IOA",
      },
      {
        id: "response_4",
        label: "Scenario D · PRIMARY concern?",
        options: [
          "Low fidelity weakens causal attribution to the planned intervention",
          "IOA automatically exceeds 100%",
          "Proof of negative reinforcement",
          "Graph colors need change only",
        ],
        correct: "Low fidelity weakens causal attribution to the planned intervention",
      },
      {
        id: "response_5",
        label: "IOA falls below 80% mid-project. FIRST action?",
        options: [
          "Retrain observers and refine definitions before strong interpretive claims",
          "Delete disagreeing observer data silently",
          "Publish treatment success without note",
          "Change target behavior label only",
        ],
        correct: "Retrain observers and refine definitions before strong interpretive claims",
      },
      {
        id: "response_6",
        label: "High total-count IOA with low interval-by-interval IOA MOST suggests:",
        options: [
          "Agreement on overall rate but disagreement on when behavior occurred in intervals",
          "Perfect definitions needing no review",
          "Automatic punishment",
          "MO abolishment",
        ],
        correct: "Agreement on overall rate but disagreement on when behavior occurred in intervals",
      },
      {
        id: "response_7",
        label: "Measurement reactivity refers to:",
        options: [
          "Behavior changing because it is observed",
          "Observers agreeing on every trial",
          "100% procedural integrity",
          "Extinction burst",
        ],
        correct: "Behavior changing because it is observed",
      },
      {
        id: "response_8",
        label: "Exam-style · Reporting IOA without naming the formula violates:",
        options: [
          "Transparent measurement reporting (Domain C/E)",
          "Only scheduling preferences",
          "Respondent conditioning rules",
          "Token economy guidelines exclusively",
        ],
        correct: "Transparent measurement reporting (Domain C/E)",
      },
    ],
    remediationLog:
      "Rebuild Chapter 5 fluency: name the recording method → select matching IOA formula → separate IOA from fidelity → plan remediation when agreement is low → report limits honestly.",
  },
  bdsBank: CHAPTER_05_IOA_QUIZ_BANK,
};
