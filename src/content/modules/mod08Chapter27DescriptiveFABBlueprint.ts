import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_27_DESCRIPTIVE_FAB_QUIZ_BANK } from "@/content/modules/quiz/chapter27DescriptiveFABQuizBank";

export const MOD08_BLUEPRINT: ExtensionBlueprint = {
  id: "mod08",
  chapterNumber: 27,
  activityPrefix: 2080,
  title: "Descriptive Assessment Methods",
  codexHeading: "READING — Chapter 27 (Descriptive Assessment Methods)",
  codexIntro: `Chapter 27 in Cooper, Heron, and Heward treats descriptive functional behavioral assessment as the naturalistic correlational stream within multimodal FBA. Descriptive methods summarize when and where behavior clusters, what antecedents and consequences co-occur, and which routines deserve denser observation—without programmed evocative contrasts.

Descriptive FBA asks practical questions first: when does behavior concentrate, in which transitions does it spike, who is present, and what events often follow? Scatterplots and time-block summaries detect temporal concentration and pinpoint windows needing denser qualitative observation.

ABC narrative recording preserves sequential antecedent–behavior–consequence detail at the episode level. Sequential documentation supports hypothesis building—it does not guarantee experimental control or replace manipulated FA when safeguards permit.

Temporal covariation links overlapping timing signatures across events. Cooper emphasizes overlap as a directional signal motivating sharper assessment questions—not proof of maintaining contingency without corroboration.

Ecological validity requires observation in classrooms, homes, transitions, and naturally occurring routines where intervention decisions will apply—not idealized simulations divorced from consumer ecology.

Measurement discipline remains mandatory: operational definitions, stable coding boundaries, interobserver agreement, episode definitions, and timestamp integrity keep descriptive summaries auditable before strong claims propagate.

Interpretation stays conservative: descriptive FBA is correlational. Teams separate pattern statements from causal statements and report modality-accurate language—never labeling scatter summaries as completed multi-element FA.

For BCBA exam prep: identify descriptive method type, state what pattern it reveals, name what it cannot prove, and specify the next assessment step before choosing an answer.`,
  footnotes: {
    ch27_desc_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 27 — descriptive FBA within multimodal functional assessment (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Naturalistic correlates without programmed contrasts.",
        "Not quoted from CHH.",
      ],
    },
    ch27_desc_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 27 — scatterplot/time-block summaries exposing temporal clustering.",
      ],
    },
    ch27_desc_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 27 — ABC narrative recording synthesizing sequential dependencies.",
      ],
    },
    ch27_desc_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 27 — temporal covariation motivating hypotheses versus guaranteeing function.",
      ],
    },
    ch27_desc_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 27 — ecological validity, IOA, conservative interpretation, modality-accurate reporting.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch27_desc_1" },
    { afterSentenceIndex: 2, ref: "ch27_desc_2" },
    { afterSentenceIndex: 3, ref: "ch27_desc_3" },
    { afterSentenceIndex: 4, ref: "ch27_desc_4" },
    { afterSentenceIndex: 5, ref: "ch27_desc_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 27 descriptive FBA recap",
    intro:
      "Descriptive FBA reads behavior patterns in real settings with professional accuracy—scatterplots show where to look, ABC logs show what happened in order, and honest captions keep correlation separate from cause.",
    chunks: [
      {
        subtitle: "Descriptive summarizes correlates—not manipulated proof",
        segments: [
          {
            type: "text",
            text: "Naturalistic observation maps antecedent and consequence correlates without programmed evocative contrasts—hypothesis support, not experimental confirmation alone ",
          },
          { type: "footnote", ref: "ch27_desc_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Scatterplots steer scarce observation time",
        segments: [
          {
            type: "text",
            text: "Time-block matrices pinpoint temporal windows needing denser qualitative observation before teams escalate contingency tests ",
          },
          { type: "footnote", ref: "ch27_desc_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "ABC narratives preserve sequence",
        segments: [
          {
            type: "text",
            text: "Sequential antecedent–behavior–consequence documentation fuels hypothesis building while staying correlational—not experimental FA ",
          },
          { type: "footnote", ref: "ch27_desc_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Temporal overlap motivates—not certifies",
        segments: [
          {
            type: "text",
            text: "Repeated timing overlap between behavior and environmental events is directional evidence for sharper follow-up—not functional verdicts by itself ",
          },
          { type: "footnote", ref: "ch27_desc_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "IOA and honest captions",
        segments: [
          {
            type: "text",
            text: "Observer agreement, ecological validity, and modality-accurate reporting keep descriptive graphs from outrunning measurement integrity ",
          },
          { type: "footnote", ref: "ch27_desc_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include treating temporal covariation as proof of function, mislabeling scatter summaries as completed FA, overlooking IOA in descriptive work, and writing causal conclusions from correlational data. Resolve them by separating descriptive evidence from causal claims in every report.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch27_desc_v1: { label: "[V1]", lines: ["CHH Chapter 27 — scatterplot/time-block displays."] },
    ch27_desc_v2: { label: "[V2]", lines: ["CHH Chapter 27 — ABC narrative recording."] },
    ch27_desc_v3: { label: "[V3]", lines: ["CHH Chapter 27 — temporal covariation."] },
    ch27_desc_v4: { label: "[V4]", lines: ["CHH Chapter 27 — ecological validity."] },
    ch27_desc_v5: { label: "[V5]", lines: ["CHH Chapter 27 — interobserver agreement on descriptive codes."] },
    ch27_desc_v6: { label: "[V6]", lines: ["CHH Chapter 27 — latency overlays sharpening temporal hypotheses."] },
    ch27_desc_kc1: { label: "[KC1]", lines: ["Domain F: correlational narration before manipulated contrasts."] },
    ch27_desc_kc2: { label: "[KC2]", lines: ["Domain C: IOA, episode definitions, timestamp integrity."] },
    ch27_desc_kc3: { label: "[KC3]", lines: ["Domain E: modality-accurate captions on descriptive graphs."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 27 (Descriptive FBA)",
    intro: "Descriptive FBA vocabulary—indirect tools are mod07; experimental FA is mod09.",
    entries: [
      { term: "Descriptive FBA", definition: "Naturalistic observation summarizing correlates without programmed contrasts.", footnoteRef: "ch27_desc_v1" },
      { term: "Scatterplot (time-block)", definition: "Matrices plotting where occurrences concentrate relative to ecological anchors.", footnoteRef: "ch27_desc_v1" },
      { term: "ABC narrative", definition: "Sequential qualitative antecedent–behavior–consequence summaries fueling hypotheses.", footnoteRef: "ch27_desc_v2" },
      { term: "Temporal covariation", definition: "Shared timing patterns provoking hypotheses—not guaranteed functional diagnoses.", footnoteRef: "ch27_desc_v3" },
      { term: "Ecological validity", definition: "Observation mirrors natural instructional and caregiving contingencies.", footnoteRef: "ch27_desc_v4" },
      { term: "Interobserver agreement (IOA)", definition: "Cross-rater coding correspondence guarding definitional fidelity.", footnoteRef: "ch27_desc_v5" },
      { term: "Latency codomain", definition: "Elapsed interval from evocative onset to qualified response.", footnoteRef: "ch27_desc_v6" },
      { term: "ABC recording", definition: "Descriptive log linking antecedents, behavior, and consequences in natural settings.", footnoteRef: "ch27_desc_v2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 27 (Descriptive FBA)",
    intro: "Patterns before causes, IOA before strong claims, honest modality labels.",
    concepts: [
      {
        title: "Correlations narrate—they do not impersonate FA",
        segments: [
          { type: "text", text: "Descriptive arcs inventory ecology while refusing to stand in for differentiated experimental contrasts " },
          { type: "footnote", ref: "ch27_desc_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Scatterplots focus observer bandwidth",
        segments: [
          { type: "text", text: "Temporal spikes signal where descriptive density buys clarity before escalating to experimental tests " },
          { type: "footnote", ref: "ch27_desc_v1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Domain C measurement underwrites Domain F narratives",
        segments: [
          { type: "text", text: "Episode definitions, IOA on codes, and timestamp integrity keep prevalence summaries trustworthy " },
          { type: "footnote", ref: "ch27_desc_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Stakeholder briefing discipline",
        segments: [
          { type: "text", text: "Mislabeling correlational slides as exhaustive FA violates Domain E stakeholder honesty " },
          { type: "footnote", ref: "ch27_desc_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 27 descriptive FBA vocabulary or reject if the stem treats temporal overlap as experimental proof or mislabels descriptive data as completed FA.",
  matchActivityInstructions:
    "Select descriptive method, pattern interpretation, IOA safeguard, or modality-accurate reporting fix for Cooper Chapter 27 descriptive FBA stems.",
  chainActivityInstructions:
    "Order descriptive workflow: define ecological observation windows → collect ABC narratives → summarize recurrent motifs → brief stakeholders with hypothesis-vs-proof caveats.",
  mts: [
    {
      sample_stimulus: "Clinician plots occurrences across classroom periods detecting spikes before transitions.",
      comparison_options: [
        "Scatterplot analysis",
        "Experimental functional analysis",
        "Standardized IQ assessment",
        "Indirect FAST checklist only",
      ],
      correct_match: "Scatterplot analysis",
      error_feedback: "Scatterplots visualize temporal covariation absent systematic manipulation.",
    },
    {
      sample_stimulus: "Observers narrate antecedent–behavior–consequence chains verbatim in time order.",
      comparison_options: [
        "ABC narrative recording",
        "Whole-interval tally exclusively",
        "Permanent product only",
        "Experimental escape condition",
      ],
      correct_match: "ABC narrative recording",
      error_feedback: "sequential qualitative detailing aligns with ABC narratives.",
    },
    {
      sample_stimulus: "Scatterplot matrices show dense bursts during unstructured transitions—team schedules denser ABC sampling there first.",
      comparison_options: [
        "Pinpoint temporal windows needing denser qualitative observation",
        "Obviate descriptive ABC summaries entirely",
        "Prove causal reinforcers without experimentation",
        "Eliminate interobserver calibration",
      ],
      correct_match: "Pinpoint temporal windows needing denser qualitative observation",
      error_feedback: "scatterplots localize hotspots and guide observation density.",
    },
    {
      sample_stimulus: "Temporal spikes precede transitions without tangible deliveries documented afterward.",
      comparison_options: [
        "Infer escape from transition demands pending corroboration",
        "Certify tangible reinforcement dominance",
        "Conclude behavior is respondent-only",
        "Ignore spikes completely",
      ],
      correct_match: "Infer escape from transition demands pending corroboration",
      error_feedback: "correlational topography supports tentative escape hypotheses.",
    },
    {
      sample_stimulus: "Two coders tally transition-linked aggression after operational definitions rehearse aloud.",
      comparison_options: [
        "IOA guarding definitional fidelity before interpreting descriptive prevalence",
        "Deleting divergent coder rows secretly",
        "Replacing graphed data with marketing snapshots",
        "Certifying respondent extinction cures graphically",
      ],
      correct_match: "IOA guarding definitional fidelity before interpreting descriptive prevalence",
      error_feedback: "Descriptive dashboards hinge on observable agreement.",
    },
    {
      sample_stimulus: "Regional director captions scatter-only slide 'Experimental FA proved escape-maintained aggression.'",
      comparison_options: [
        "Relabel honestly as correlational descriptive evidence pending modality-accurate contrasts",
        "Ship captions unchanged because slides look polished",
        "Delete contradictory ABC appendices silently",
        "Issue punishment plans immediately from hotspots",
      ],
      correct_match: "Relabel honestly as correlational descriptive evidence pending modality-accurate contrasts",
      error_feedback: "Correlation slides mislabeled as FA violate stakeholder honesty.",
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
      error_feedback: "Descriptive prevalence supports hypotheses—it does not equal FA.",
    },
    {
      sample_stimulus: "Team defines scatterplot anchors using authentic campus bells and transitions rather than sterile lab cues.",
      comparison_options: [
        "Ecological validity prioritizing dignified ecological windows",
        "Ignoring classroom transitions permanently",
        "Fabricating hotspots absent stakeholder input",
        "Replacing anchors with billboard schedules unrelated to site ecology",
      ],
      correct_match: "Ecological validity prioritizing dignified ecological windows",
      error_feedback: "Descriptive tools stay faithful to ecology consumers navigate daily.",
    },
  ],
  chainTitle: "Descriptive convergence workflow",
  chainFragments: [
    { id: "a", text: "Define observation windows honoring ecological validity." },
    { id: "b", text: "Collect concurrent ABC narratives tied to coded exemplars." },
    { id: "c", text: "Summarize recurrent ABC motifs and scatterplot hotspots linking MO variables." },
    { id: "d", text: "Brief stakeholders with graphical summaries plus hypothesis-vs-proof caveats." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Descriptive FBA", back: "Naturalistic correlates." },
    { front: "Scatterplot", back: "Temporal hotspot map." },
    { front: "ABC narrative", back: "Sequential episode log." },
    { front: "Covariation", back: "Timing overlap—not proof." },
    { front: "Ecological validity", back: "Real-setting observation." },
    { front: "IOA", back: "Coder agreement check." },
  ],
  worksheet: {
    title: "CHH Chapter 27 — descriptive functional behavioral assessment",
    instructions:
      "Identify descriptive method, describe the pattern shown, state what it cannot prove, and name the next assessment step.",
    scenario:
      "Scatterplot spikes concentrate immediately before unstructured transitions while tangible deliveries rarely appear afterward.",
    scenario_follow_up:
      "Observers concurrently transcribe verbatim ABC chains tying transitions to challenging episodes.\n\nScenario C — Two coders disagree on episode boundaries until definitions are rehearsed aloud.\n\nScenario D — District slide deck captions scatterplots as completed experimental FA while attachments include only annotated time-block summaries.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Strongest supported hypothesis?",
        options: [
          "Escape from transitions emerges as plausible hypothesis",
          "Tangible reinforcement confirmed definitively",
          "Automatic reinforcement ruled out categorically",
        ],
        correct: "Escape from transitions emerges as plausible hypothesis",
      },
      {
        id: "response_2",
        label: "Scenario A · Responsible follow-up?",
        options: [
          "Layer latency-coded transitions plus ethically phased contrast probes",
          "Dismiss descriptive spikes",
          "Issue punitive contingency immediately",
        ],
        correct: "Layer latency-coded transitions plus ethically phased contrast probes",
      },
      {
        id: "response_3",
        label: "Scenario B · Tool classification?",
        options: [
          "Descriptive sequential qualitative recording",
          "Indirect FAST checklist exclusively",
          "Withdrawal design replication only",
        ],
        correct: "Descriptive sequential qualitative recording",
      },
      {
        id: "response_4",
        label: "Scatterplots MOST help clinicians by:",
        options: [
          "Pinpointing temporal windows needing denser qualitative observation",
          "Obviating descriptive ABC summaries",
          "Proving causal reinforcers without experimentation",
        ],
        correct: "Pinpointing temporal windows needing denser qualitative observation",
      },
      {
        id: "response_5",
        label: "ABC narrative recordings primarily support:",
        options: [
          "Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building",
          "Guaranteeing experimental control",
          "Replacing informed consent conversations",
        ],
        correct: "Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building",
      },
      {
        id: "response_6",
        label: "Scenario C · Primary safeguard?",
        options: [
          "IOA guarding definitional fidelity before interpreting descriptive prevalence",
          "Deleting divergent coder rows secretly",
          "Certifying function from single observer",
        ],
        correct: "IOA guarding definitional fidelity before interpreting descriptive prevalence",
      },
      {
        id: "response_7",
        label: "Temporal covariation MOST closely refers to:",
        options: [
          "Aligned timing patterns motivating hypotheses across environmental events",
          "Guaranteed experimental isolation absent manipulation",
          "Respondent extinction termination criteria",
        ],
        correct: "Aligned timing patterns motivating hypotheses across environmental events",
      },
      {
        id: "response_8",
        label: "Scenario D · Labeling correlational slides as exhaustive FA merges:",
        options: [
          "Domain E honest modality reporting plus Domain F accurate assessment labeling",
          "Domain A phylogeny glossaries exclusively",
          "Domain G punishment protocol menus exclusively",
        ],
        correct: "Domain E honest modality reporting plus Domain F accurate assessment labeling",
      },
    ],
    remediationLog:
      "Rebuild Chapter 27 descriptive fluency: ecological windows → ABC and IOA quality → pattern summary → hypothesis vs proof boundaries in every report.",
  },
  bdsBank: CHAPTER_27_DESCRIPTIVE_FAB_QUIZ_BANK,
};
