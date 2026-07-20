import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_18_VB_QUIZ_BANK } from "@/content/modules/quiz/chapter18VerbalBehaviorQuizBank";

export const MOD19_BLUEPRINT: ExtensionBlueprint = {
  id: "mod19",
  chapterNumber: 18,
  activityPrefix: 2190,
  title: "Verbal Behavior",
  codexHeading: "READING — Chapter 18 (Verbal Behavior)",
  codexIntro: `Chapter 18 in Cooper, Heron, and Heward presents verbal behavior as operant behavior reinforced through the mediation of other persons (listeners). Functional classification depends on controlling variables and consequences—not word form alone. The same topography can function as a mand, tact, intraverbal, or echoic depending on context.

A mand is verbal behavior under evocative (MO/EO) control that specifies a reinforcer—the learner requests and receives a specific consequence. A tact is verbal behavior under control of a nonverbal discriminative stimulus, maintained by generalized reinforcement (social praise, attention). An intraverbal is a verbal response to a verbal discriminative stimulus without point-to-point correspondence with a nonverbal referent (fill-ins, conversations, song completions). An echoic is verbal behavior under point-to-point correspondence with a verbal model, reinforced by the listener.

Related operants include textual (reading—written verbal SD) and transcription (writing/speaking from dictation). Autoclitics modify the effect of other verbal behavior on the listener. Hybrid vignettes—hungry learner plus picture on the table—require component analysis before labeling.

Documentation must separate mand sessions (log EO/MO context) from tact/intraverbal sessions (log nonverbal or verbal SDs), tag operant codes per trial, track prompt/model fading in echoic programs, and apply IOA to operant classification. Ethical practice uses reinforcement-rich shaping and transparent reporting—not coercive error correction or mand claims without evocative evidence.

Chapter 18 builds on Chapters 16–17 (MO and SD). For BCBA exam prep: check evocative context, nonverbal SD, verbal SD, and verbal model before classifying; never label by sound alone.`,
  footnotes: {
    ch18_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 18 — verbal behavior and listener-mediated reinforcement (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Verbal behavior = operants reinforced through listener mediation.",
        "Not quoted from CHH.",
      ],
    },
    ch18_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 18 — mand, tact, intraverbal, echoic controlling variables.",
        "Functional classification—not topography alone.",
      ],
    },
    ch18_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 18 — MO/EO documentation for mands; SD logging for tacts/intraverbals.",
        "Operant-coded trial records.",
      ],
    },
    ch18_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 18 — textual, transcription, autoclitic (as covered in assigned edition).",
        "Extended verbal operant classes.",
      ],
    },
    ch18_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 18 — reinforcement-rich shaping; ethical reporting of evocative supports.",
        "No counterfeit mand claims without MO documentation.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch18_1" },
    { afterSentenceIndex: 1, ref: "ch18_2" },
    { afterSentenceIndex: 2, ref: "ch18_3" },
    { afterSentenceIndex: 3, ref: "ch18_4" },
    { afterSentenceIndex: 4, ref: "ch18_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 18 recap",
    intro:
      "Talking is behavior. Listeners deliver the payoff. Before labeling an utterance, ask: Was the learner motivated (mand)? Naming something visible (tact)? Answering words with words (intraverbal)? Copying a model (echoic)?",
    chunks: [
      {
        subtitle: "Listener-mediated reinforcement",
        segments: [
          {
            type: "text",
            text: "Verbal behavior is operant behavior reinforced because someone else (the listener) delivers consequences—not because of the sound alone ",
          },
          { type: "footnote", ref: "ch18_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Four core operants",
        segments: [
          {
            type: "text",
            text: "Mand = request under motivation. Tact = label under nonverbal cue. Intraverbal = verbal fill-in. Echoic = copy the model. Same word can be any of these in different contexts ",
          },
          { type: "footnote", ref: "ch18_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Document what controlled the trial",
        segments: [
          {
            type: "text",
            text: "Log EO/MO for mands. Log nonverbal SDs for tacts. Log verbal SDs for intraverbals. Log model level for echoics. Vague speech-trial summaries fail audit ",
          },
          { type: "footnote", ref: "ch18_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Hybrids and ethics",
        segments: [
          {
            type: "text",
            text: "When hunger and pictures overlap, decompose before classifying. Reinforce approximations; do not claim mand growth while hiding evocative logs ",
          },
          { type: "footnote", ref: "ch18_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include labeling by word form alone, misclassifying tacts as mands when pictures and evocative conditions overlap, treating echoics as mands because imitation occurred, and claiming mand growth without MO documentation. Resolve them by checking controlling variables and trial-level context before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch18_v1: { label: "[V1]", lines: ["CHH Chapter 18 — verbal behavior."] },
    ch18_v2: { label: "[V2]", lines: ["CHH Chapter 18 — mand."] },
    ch18_v3: { label: "[V3]", lines: ["CHH Chapter 18 — tact."] },
    ch18_v4: { label: "[V4]", lines: ["CHH Chapter 18 — intraverbal."] },
    ch18_v5: { label: "[V5]", lines: ["CHH Chapter 18 — echoic."] },
    ch18_kc1: { label: "[KC1]", lines: ["Domain F: classify by controlling variables—not topography."] },
    ch18_kc2: { label: "[KC2]", lines: ["Domain C: EO columns for mands; operant codes per trial."] },
    ch18_kc3: { label: "[KC3]", lines: ["Domain E: transparent mand reporting; reinforcement-rich shaping."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 18",
    intro: "Chapter 18 verbal operants—equivalence-based instruction is Chapter 19.",
    entries: [
      { term: "Verbal behavior", definition: "Operant behavior reinforced through listener mediation.", footnoteRef: "ch18_v1" },
      { term: "Mand", definition: "Request under evocative control specifying a reinforcer.", footnoteRef: "ch18_v2" },
      { term: "Tact", definition: "Label under nonverbal SD; generalized reinforcement.", footnoteRef: "ch18_v3" },
      { term: "Intraverbal", definition: "Verbal SD evokes verbal response without nonverbal referent.", footnoteRef: "ch18_v4" },
      { term: "Echoic", definition: "Point-to-point correspondence with verbal model.", footnoteRef: "ch18_v5" },
      { term: "Textual", definition: "Reading—control by written verbal stimulus.", footnoteRef: "ch18_v4" },
      { term: "Generalized reinforcement", definition: "Social/consequential reinforcement not tied to one specific reinforcer.", footnoteRef: "ch18_v3" },
      { term: "Listener-mediated reinforcement", definition: "Listener behavior produces reinforcement for speaker.", footnoteRef: "ch18_v1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 18",
    intro: "Function over form—document context—reinforce.",
    concepts: [
      {
        title: "Functional verbal operant classification",
        segments: [
          { type: "text", text: "Mand/tact/intraverbal/echoic distinguished by EO, nonverbal SD, verbal SD, and model—not word shape " },
          { type: "footnote", ref: "ch18_v2" },
          { type: "footnote", ref: "ch18_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "MO documentation for mands",
        segments: [
          { type: "text", text: "Mand claims require evocative-context logs beside trial data " },
          { type: "footnote", ref: "ch18_v3" },
          { type: "footnote", ref: "ch18_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Hybrid control decomposition",
        segments: [
          { type: "text", text: "When EO and SD overlap, separate variables before monocausal labels " },
          { type: "footnote", ref: "ch18_v2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Reinforcement-first ethical VB",
        segments: [
          { type: "text", text: "Shape approximations; avoid coercive correction; report evocative evidence honestly " },
          { type: "footnote", ref: "ch18_5" },
          { type: "footnote", ref: "ch18_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each utterance to mand, tact, intraverbal, or echoic by controlling variables—or reject if documentation is insufficient for classification.",
  matchActivityInstructions:
    "Select the verbal-operant classification, documentation fix, or ethical reporting response for Cooper Chapter 18.",
  chainActivityInstructions:
    "Sequence VB programming: define targets and listener consequences → separate mand EO from tact SD → log trial context and operant codes → shape with reinforcement → report transparently.",
  mts: [
    {
      sample_stimulus: "Learner says 'Snack' toward vending area after withheld snacks with logged deprivation.",
      comparison_options: ["Mand under evocative control", "Tact solely because word occurred", "Respondent only", "Echoic"],
      correct_match: "Mand under evocative control",
      error_feedback: "EO-supported requesting.",
    },
    {
      sample_stimulus: "Teacher: 'What is it?' Learner: 'Ladybug!' viewing photo—not requesting task removal.",
      comparison_options: ["Tact under nonverbal SD", "Mand because question asked", "Echoic because teacher spoke", "Intraverbal only"],
      correct_match: "Tact under nonverbal SD",
      error_feedback: "Naming under nonverbal stimulus control.",
    },
    {
      sample_stimulus: "Clinician: 'Cow says…?' Learner: 'Moo' without visible animal.",
      comparison_options: ["Intraverbal", "Tact because animal named", "Mand because clinician spoke", "Echoic only"],
      correct_match: "Intraverbal",
      error_feedback: "Verbal SD → verbal completion.",
    },
    {
      sample_stimulus: "Therapist says 'bubble'; learner approximates 'buh-buh' before praise.",
      comparison_options: ["Echoic under model correspondence", "Mand", "Tact automatically", "Intraverbal only"],
      correct_match: "Echoic under model correspondence",
      error_feedback: "Imitation of verbal model.",
    },
    {
      sample_stimulus: "Dashboard hides EO spreadsheets while claiming organic mand growth.",
      comparison_options: [
        "Reporting breach without evocative evidence",
        "Harmless shorthand",
        "Proof MO obsolete",
        "IOA error only",
      ],
      correct_match: "Reporting breach without evocative evidence",
      error_feedback: "Mand claims need MO documentation.",
    },
    {
      sample_stimulus: "Data sheet tags Mand/Tact/IVB/ECHO with evocative column during mand blocks.",
      comparison_options: [
        "Operant-coded transparent logs",
        "Optional decoration",
        "Proof IOA prohibits VB",
        "Replaces reinforcement",
      ],
      correct_match: "Operant-coded transparent logs",
      error_feedback: "Reviewable VB classification.",
    },
    {
      sample_stimulus: "Juice withheld; learner orients and says 'juice now'; juice delivered—no picture SD.",
      comparison_options: ["Mand specifying reinforcer under EO", "Tact because beverage named", "Echoic only", "Respondent"],
      correct_match: "Mand specifying reinforcer under EO",
      error_feedback: "Classic mand vignette.",
    },
    {
      sample_stimulus: "Hungry learner plus cookie picture says 'cookie'—both EO and SD present.",
      comparison_options: [
        "Decompose evocative and SD variables before classifying",
        "Label mand instantly",
        "Label tact instantly",
        "Ignore MO",
      ],
      correct_match: "Decompose evocative and SD variables before classifying",
      error_feedback: "Hybrid control requires analysis.",
    },
  ],
  chainTitle: "Verbal behavior dossier rollout",
  chainFragments: [
    { id: "a", text: "Define target verbal behaviors and listener-mediated consequences operationally." },
    { id: "b", text: "Discriminate mand evocative supports from SDs controlling tacts/intraverbals." },
    { id: "c", text: "Log evocative states, SDs, prompts, and operant codes per session." },
    { id: "d", text: "Report reinforced shaping with transparent evocative evidence before mand milestone claims." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Verbal behavior", back: "Listener-mediated speaker operants." },
    { front: "Mand", back: "Request under EO control." },
    { front: "Tact", back: "Label under nonverbal SD." },
    { front: "Intraverbal", back: "Verbal SD → verbal reply." },
    { front: "Echoic", back: "Copy verbal model." },
    { front: "Function > form", back: "Classify by controlling variables." },
  ],
  worksheet: {
    title: "CHH Chapter 18 — verbal behavior",
    instructions:
      "Classify each vignette by verbal operant, documentation quality, and ethical reporting. Choose the most defensible answer.",
    scenario:
      "Scenario A — Mand milestones reported; session exports lack EO entries reviewers requested.",
    scenario_follow_up:
      "Scenario B — Juice photos paired with snack withholding on half the trials.\n\nScenario C — Fill-in song lyric after verbal SD.\n\nScenario D — Learner echoes clinician model then receives praise.\n\nScenario E — Appendix EO logs removed; captions claim spontaneous mand overnight.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · FIRST supervisory move?",
        options: [
          "Restore EO/MO narratives beside mand trials before marketing gains",
          "Rename all mands tacts",
          "Delete variable trials",
        ],
        correct: "Restore EO/MO narratives beside mand trials before marketing gains",
      },
      {
        id: "response_2",
        label: "Scenario B · Best analytic stance?",
        options: [
          "Decompose EO, SD, and reinforcer history before labeling",
          "Label mand instantly",
          "Suppress caregiver interviews",
        ],
        correct: "Decompose EO, SD, and reinforcer history before labeling",
      },
      {
        id: "response_3",
        label: "Scenario C · Best operant?",
        options: ["Intraverbal", "Tact exclusively", "Echoic exclusively"],
        correct: "Intraverbal",
      },
      {
        id: "response_4",
        label: "Scenario D · Best emphasis?",
        options: [
          "Echoic under imitation control being reinforced",
          "Mand because imitation occurred",
          "Automatic tact proof",
        ],
        correct: "Echoic under imitation control being reinforced",
      },
      {
        id: "response_5",
        label: "Scenario E · Core problem?",
        options: [
          "Truthful mand reporting and evocative evidence both compromised",
          "Normal reporting",
          "Unrelated to VB",
        ],
        correct: "Truthful mand reporting and evocative evidence both compromised",
      },
      {
        id: "response_6",
        label: "Mand versus tact—MOST accurate?",
        options: [
          "Mand under EO specifies reinforcer; tact under nonverbal SD with generalized reinforcement",
          "Interchangeable labels",
          "Tact under EO; mand under nonverbal SD only",
        ],
        correct: "Mand under EO specifies reinforcer; tact under nonverbal SD with generalized reinforcement",
      },
      {
        id: "response_7",
        label: "Ethical VB development prioritizes:",
        options: [
          "Reinforcement-rich shaping with transparent documentation",
          "Punitive error rituals",
          "Withholding reinforcement until verbatim match",
        ],
        correct: "Reinforcement-rich shaping with transparent documentation",
      },
      {
        id: "response_8",
        label: "Verbal operants classified by:",
        options: [
          "Controlling variables and consequences—not topography alone",
          "Word form only",
          "Speaker age",
        ],
        correct: "Controlling variables and consequences—not topography alone",
      },
    ],
    remediationLog:
      "Rebuild Chapter 18 fluency: EO present? → nonverbal SD? → verbal SD? → model? → operant code + documentation → ethical reporting.",
  },
  bdsBank: CHAPTER_18_VB_QUIZ_BANK,
};
