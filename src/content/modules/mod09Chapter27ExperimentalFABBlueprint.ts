import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_27_EXPERIMENTAL_FA_QUIZ_BANK } from "@/content/modules/quiz/chapter27ExperimentalFAQuizBank";

export const MOD09_BLUEPRINT: ExtensionBlueprint = {
  id: "mod09",
  chapterNumber: 27,
  activityPrefix: 2090,
  title: "Experimental Functional Behavioral Assessment",
  codexHeading: "READING — Chapter 27 (Experimental Functional Analysis)",
  codexIntro: `Chapter 27 in Cooper, Heron, and Heward presents experimental functional analysis as the manipulated-contrast stream within multimodal FBA. Instead of inferring function from impressions alone, analysts arrange controlled condition contrasts to determine which consequences reliably increase responding when safeguards permit manipulation.

Experimental FA begins with safety and ethics infrastructure: informed consent, medical and risk review, clear target definitions, staffing ratios, emergency procedures, and explicit stop criteria. FA quality depends on whether analysis can be conducted safely—not design logic alone.

Interview-informed and record-informed hypotheses guide condition selection. Teams tailor test conditions to realistic contingencies identified during indirect and descriptive intake while preserving interpretable contrast against control or enriched play baselines.

Standard FA logic compares evocative test conditions—attention, escape, tangible arrangements—with control conditions where programmed contingencies stay minimal. Escape test conditions evaluate whether demand removals contingent on targeted behavior elevate future probability. Control/enriched play comparisons provide contrast where reinforcement schedules stay thin.

Interpretation depends on relative response differentiation across conditions and replication when feasible—not single-session spikes. When data are undifferentiated, teams reassess definitions, motivating operations, condition fidelity, or sequence effects before treatment-level conclusions.

Abbreviated multi-element substitutes may be used when full FA choreography exceeds resources—but must be labeled accurately. High-risk topography without adequate staffing warrants descriptive or interrupted probes until safeguards stabilize.

For BCBA exam prep: identify what contingency each condition arranges, verify safeguards and consent, check differentiation and replication, and calibrate confidence to evidence actually collected.`,
  footnotes: {
    ch27_exp_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 27 — experimental functional analysis within multimodal FBA (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Evocative contrasts isolating reinforcer classes when safeguards permit.",
        "Not quoted from CHH.",
      ],
    },
    ch27_exp_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 27 — safety, consent, staffing, termination criteria before FA manipulation.",
      ],
    },
    ch27_exp_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 27 — interview-informed tailoring of FA condition menus.",
      ],
    },
    ch27_exp_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 27 — replication, undifferentiated data, abbreviated substitutes, honest modality labels.",
      ],
    },
    ch27_exp_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 27 — escape, attention, tangible, alone/control condition logic.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch27_exp_1" },
    { afterSentenceIndex: 1, ref: "ch27_exp_2" },
    { afterSentenceIndex: 2, ref: "ch27_exp_3" },
    { afterSentenceIndex: 3, ref: "ch27_exp_4" },
    { afterSentenceIndex: 4, ref: "ch27_exp_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 27 experimental FA recap",
    intro:
      "Experimental FA arranges specific test conditions, compares them to control baselines, protects participants with safeguards, and reports confidence honestly—never labeling interviews or scatterplots as completed FA.",
    chunks: [
      {
        subtitle: "Arranged contrasts discriminate function",
        segments: [
          {
            type: "text",
            text: "Multi-element FA arranges test conditions modeling suspected reinforcer classes and compares them with control baselines when safeguards align ",
          },
          { type: "footnote", ref: "ch27_exp_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Safety rules are part of the method",
        segments: [
          {
            type: "text",
            text: "Consent, staffing, risk review, and stop criteria gate manipulation-heavy sessions—high-risk topography without coverage warrants staged descriptive probes first ",
          },
          { type: "footnote", ref: "ch27_exp_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Escape and control condition logic",
        segments: [
          {
            type: "text",
            text: "Escape test conditions withdraw demands contingent on occurrences; control/enriched play baselines juxtapose minimized programmed reinforcement against evocative spikes ",
          },
          { type: "footnote", ref: "ch27_exp_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "IWFA tailors menus to local hypotheses",
        segments: [
          {
            type: "text",
            text: "Condition selection reflects multimethod hypotheses from indirect and descriptive streams—not generic rotations ignoring ecology ",
          },
          { type: "footnote", ref: "ch27_exp_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Replication and honest abbreviations",
        segments: [
          {
            type: "text",
            text: "Differentiated patterns strengthen when they repeat; abbreviated probes stay labeled accurately when full FA exceeds resources ",
          },
          { type: "footnote", ref: "ch27_exp_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include misidentifying FA condition contingencies, overreading single-session spikes as stable differentiation, running FA ahead of safeguards, and mislabeling indirect or descriptive work as completed FA. Resolve them by verifying condition logic, safety readiness, and replication before final interpretation.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch27_exp_v1: { label: "[V1]", lines: ["CHH Chapter 27 — evocative multi-element contrasts."] },
    ch27_exp_v2: { label: "[V2]", lines: ["CHH Chapter 27 — safeguards and consent scaffolding."] },
    ch27_exp_v3: { label: "[V3]", lines: ["CHH Chapter 27 — interview-informed FA (IWFA)."] },
    ch27_exp_v4: { label: "[V4]", lines: ["CHH Chapter 27 — replication and abbreviated substitutes."] },
    ch27_exp_v5: { label: "[V5]", lines: ["CHH Chapter 27 — escape FA condition logic."] },
    ch27_exp_v6: { label: "[V6]", lines: ["CHH Chapter 27 — control/enriched play comparison baselines."] },
    ch27_exp_kc1: { label: "[KC1]", lines: ["Domain F: condition contingency discrimination."] },
    ch27_exp_kc2: { label: "[KC2]", lines: ["Domain E + G: safeguards before manipulation."] },
    ch27_exp_kc3: { label: "[KC3]", lines: ["Domain C: IOA and procedural integrity in FA."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 27 (Experimental FA)",
    intro: "Experimental FA vocabulary—indirect is mod07; descriptive is mod08.",
    entries: [
      { term: "Experimental FA", definition: "Evocative contrasts isolating reinforcer classes when safeguards permit manipulation.", footnoteRef: "ch27_exp_v1" },
      { term: "Escape FA", definition: "Demand or task removal contingent on behavior isolating escape hypotheses.", footnoteRef: "ch27_exp_v5" },
      { term: "Attention FA", definition: "Social acknowledgement delivered contingent on topography.", footnoteRef: "ch27_exp_v1" },
      { term: "Tangible FA", definition: "Access to leisure or tangibles contingent on occurrences.", footnoteRef: "ch27_exp_v1" },
      { term: "Alone / no-interaction FA", definition: "Solitude analogue minimizing programmed reinforcement.", footnoteRef: "ch27_exp_v1" },
      { term: "Control / enriched play comparison", definition: "Minimized reinforcement baseline juxtaposed against evocative test spikes.", footnoteRef: "ch27_exp_v6" },
      { term: "Interview-informed FA (IWFA)", definition: "Contrast menus shaped by multimethod hypotheses—not generic rotations.", footnoteRef: "ch27_exp_v3" },
      { term: "Safeguards & consent scaffolding", definition: "Protective staffing, risk review, authorization, termination rules before intensive probes.", footnoteRef: "ch27_exp_v2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 27 (Experimental FA)",
    intro: "Condition logic, safeguards, differentiation, replication, honest labels.",
    concepts: [
      {
        title: "Evocative contrasts discriminate reinforcer classes",
        segments: [
          { type: "text", text: "FA isolates reinforcing histories programmers arrange—escape removes demands, attention delivers social acknowledgement, control minimizes programmed reinforcement " },
          { type: "footnote", ref: "ch27_exp_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Domains E + G throttle manipulation until safeguards exist",
        segments: [
          { type: "text", text: "High-risk topography without staffing warrants descriptive or interrupted probes until protective barriers stabilize " },
          { type: "footnote", ref: "ch27_exp_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Control conditions anchor interpretive contrasts",
        segments: [
          { type: "text", text: "Enriched play with minimized evocative tests juxtaposed against test spikes underpin differentiation readings " },
          { type: "footnote", ref: "ch27_exp_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Replication and proportional reporting",
        segments: [
          { type: "text", text: "Abbreviated substitutes and undifferentiated data require transparent limits—not certainty theater " },
          { type: "footnote", ref: "ch27_exp_v4" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Map each vignette to the exact contingency arranged in the FA condition and verify whether safeguards are sufficient before manipulation proceeds.",
  matchActivityInstructions:
    "For each Chapter 27 experimental FA item, identify condition logic first, then decide whether data interpretation and safety sequencing are justified.",
  chainActivityInstructions:
    "Order FA process: verify definitions and risk → obtain consent and safeguards → implement alternating conditions → graph differentiated patterns with replication planning.",
  mts: [
    {
      sample_stimulus: "Therapist removes instructional demands contingent on aggression during escape test segment of multi-element FA.",
      comparison_options: [
        "Escape condition",
        "Attention condition",
        "Alone condition",
        "Control condition only",
      ],
      correct_match: "Escape condition",
      error_feedback: "demand removal contingent on behavior isolates escape hypotheses.",
    },
    {
      sample_stimulus: "Neutral enriched play with toy engagement and no programmed reinforcement contingencies on target behavior.",
      comparison_options: [
        "Control / enriched play comparison baseline",
        "Tangible condition",
        "Escape condition",
        "Attention FA prototype",
      ],
      correct_match: "Control / enriched play comparison baseline",
      error_feedback: "minimized reinforcement provides contrast against evocative spikes.",
    },
    {
      sample_stimulus: "High-risk aggression topography without adequate staffing—supervisor insists on overnight FA solo.",
      comparison_options: [
        "Implement descriptive or interrupted probes until staffing safeguards stabilize",
        "Launch FA overnight solo",
        "Presume tangible reinforcement sans verification",
        "Skip baseline graphs",
      ],
      correct_match: "Implement descriptive or interrupted probes until staffing safeguards stabilize",
      error_feedback: "safeguards precede evocative manipulation.",
    },
    {
      sample_stimulus: "Social praise delivered contingent on targeted behavior during attention test condition.",
      comparison_options: [
        "Attention FA condition",
        "Escape FA condition",
        "Alone condition",
        "Control condition",
      ],
      correct_match: "Attention FA condition",
      error_feedback: "Programmed social acknowledgement isolates attention-maintained hypotheses.",
    },
    {
      sample_stimulus: "Isolation session withholds attention, tangibles, and demands—charting baseline rates.",
      comparison_options: [
        "Alone condition inspecting automatic reinforcement minus programmed mediated consequences",
        "Escape condition guaranteeing demand removal exclusively",
        "Attention FA delivering lavish praise exclusively",
        "Tangible condition exclusively",
      ],
      correct_match: "Alone condition inspecting automatic reinforcement minus programmed mediated consequences",
      error_feedback: "Alone strips evocative manipulations programmed in other conditions.",
    },
    {
      sample_stimulus: "Regional report claims differentiated multi-element FA while attachments list only unstructured interviews.",
      comparison_options: [
        "Honest modality relabel plus ethically staged contrasts when safeguards unlock",
        "Shipping marketing claims unchanged",
        "Replacing safeguards with billboard slogans",
        "Deleting Week 1 data quietly",
      ],
      correct_match: "Honest modality relabel plus ethically staged contrasts when safeguards unlock",
      error_feedback: "Domain E forbids laundering interviews into exhaustive FA absent arranged contrasts.",
    },
    {
      sample_stimulus: "Second clinician reruns abbreviated contrast packet verifying Week 1 attention spike.",
      comparison_options: [
        "Replication strengthening inferential confidence when patterns reproduce ethically",
        "Deleting Week 1 data quietly",
        "Declaring punishment mastery graphically absent data",
        "Skipping IOA permanently",
      ],
      correct_match: "Replication strengthening inferential confidence when patterns reproduce ethically",
      error_feedback: "Replication buttresses differentiated readings when safeguards permit.",
    },
    {
      sample_stimulus: "FAST plus descriptive logs converge on escape-from-demands yet FA rotations linger on generic praise-heavy attention menus only.",
      comparison_options: [
        "Re-sequence evocative contrasts so converging hypotheses lead—escape contexts probed faithfully",
        "Maintain cookbook rotations oblivious to multimodal convergence",
        "Delete consent scaffolding to chase quicker graphs",
        "Label interviews as completed FA",
      ],
      correct_match: "Re-sequence evocative contrasts so converging hypotheses lead—escape contexts probed faithfully",
      error_feedback: "IWFA tailors menus toward ecology-backed priorities.",
    },
  ],
  chainTitle: "FA readiness mini-chain",
  chainFragments: [
    { id: "a", text: "Verify medically cleared topography definitions and risk inventory." },
    { id: "b", text: "Stakeholders authorize FA safeguards plus termination criteria." },
    { id: "c", text: "Implement alternating multi-element iterations with procedural integrity and IOA." },
    { id: "d", text: "Graph differentiated patterns; plan replication probes; report limits honestly." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Escape FA", back: "Demand removal contingent." },
    { front: "Attention FA", back: "Social R+ contingent." },
    { front: "Control/play", back: "Minimized reinforcement." },
    { front: "Alone FA", back: "No programmed R+." },
    { front: "IWFA", back: "Hypothesis-tailored menu." },
    { front: "Safeguards", back: "Consent before manipulation." },
  ],
  worksheet: {
    title: "CHH Chapter 27 — experimental functional analysis",
    instructions:
      "Identify arranged contingency, comparison condition, safeguard adequacy, and supported confidence level for each vignette.",
    scenario:
      "Aggression topography produces documented tissue injury risk yet supervisors insist on launching overnight FA immediately without extra staffing.",
    scenario_follow_up:
      "Therapist removes instructional demands contingent on aggression during escape test; neutral enriched play runs as comparison.\n\nScenario C — Undifferentiated rates across all FA conditions after one session.\n\nScenario D — Grant narrative claims differentiated multi-element FA completed while appendix lists only unstructured interviews.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Immediate stance?",
        options: [
          "Delay FA pending protective barriers plus informed consent review",
          "Proceed overnight unsupervised",
          "Substitute placebo punishers prior to FA",
        ],
        correct: "Delay FA pending protective barriers plus informed consent review",
      },
      {
        id: "response_2",
        label: "Scenario A · Alternate permissible tactic meanwhile?",
        options: [
          "Descriptive or interrupted probes until FA staffing aligns",
          "Terminate referral silently",
          "Ignore differentiation mandate",
        ],
        correct: "Descriptive or interrupted probes until FA staffing aligns",
      },
      {
        id: "response_3",
        label: "Escape test condition MOST directly evaluates whether:",
        options: [
          "Demand removals contingent on targeted behavior elevate future probability",
          "Automatic reinforcement alone sustains responding",
          "Caregiver IQ predicts reinforcer hierarchies",
        ],
        correct: "Demand removals contingent on targeted behavior elevate future probability",
      },
      {
        id: "response_4",
        label: "Control/enriched play comparisons primarily provide:",
        options: [
          "Contrast where programmed contingencies stay minimal absent high-quality reinforcement schedules",
          "Guaranteed punishment exposure",
          "Automatic FA termination rules",
        ],
        correct: "Contrast where programmed contingencies stay minimal absent high-quality reinforcement schedules",
      },
      {
        id: "response_5",
        label: "Scenario B · Therapist removes demands contingent on aggression:",
        options: [
          "Escape FA condition prototype",
          "Control condition prototype",
          "Alone sensory deprivation exclusively",
        ],
        correct: "Escape FA condition prototype",
      },
      {
        id: "response_6",
        label: "Scenario C · Undifferentiated single-session data:",
        options: [
          "Avoid premature certainty—reassess definitions, MO, fidelity, or sequence before strong claims",
          "Announce escape function definitive immediately",
          "Delete undifferentiated sessions silently",
        ],
        correct: "Avoid premature certainty—reassess definitions, MO, fidelity, or sequence before strong claims",
      },
      {
        id: "response_7",
        label: "IWFA MOST centrally reminds clinicians to:",
        options: [
          "Tailor FA contrasts using multimethod hypotheses—not cookie-cutter menus blindly",
          "Eliminate graphs permanently",
          "Skip consent conversations",
        ],
        correct: "Tailor FA contrasts using multimethod hypotheses—not cookie-cutter menus blindly",
      },
      {
        id: "response_8",
        label: "Scenario D · Claiming exhaustive FA without arranged contrasts collapses:",
        options: [
          "Domain E honest reporting plus Domain F accurate modality labeling",
          "Domain A philosophy trivia unrelated to modality mislabel",
          "Domain G hiring charts unrelated to modality mislabel",
        ],
        correct: "Domain E honest reporting plus Domain F accurate modality labeling",
      },
    ],
    remediationLog:
      "Rebuild Chapter 27 FA fluency: condition logic → safeguard readiness → differentiation → replication → honest modality labels. Never claim full FA unless arranged contrasts were conducted.",
  },
  bdsBank: CHAPTER_27_EXPERIMENTAL_FA_QUIZ_BANK,
};
