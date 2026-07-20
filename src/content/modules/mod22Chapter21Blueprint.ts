import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_21_IMITATION_QUIZ_BANK } from "@/content/modules/quiz/chapter21ImitationModelingQuizBank";

export const MOD22_BLUEPRINT: ExtensionBlueprint = {
  id: "mod22",
  chapterNumber: 21,
  activityPrefix: 2220,
  title: "Imitation, Modeling, and Observational Learning",
  codexHeading: "READING — Chapter 21 (Imitation, Modeling, and Observational Learning)",
  codexIntro: `Chapter 21 in Cooper, Heron, and Heward covers imitation, modeling, and observational learning as foundations for motor and vocal repertoires later folded into tacts, intraverbals, echoics, and adaptive chains. Imitation involves topographies echoing modeled acts under formal resemblance control with listener-mediated reinforcement—not every behavior change after watching others.

Generalized imitation is responding similarly across novel demonstrators and settings without per-model retraining when histories support transfer. Claiming generalized imitation from a single therapist model is a common error; programming expands exemplar diversity and probes novel models before mastery claims.

Model stimuli are observable demonstrations cueing reproduction—discriminable from nondemonstrative prompts. Model fidelity (documented accuracy of demonstrations), trial-by-trial imitation accuracy, and latency from model offset to learner echo are Domain C metrics. Analysts discriminate modeling effects from mere stimulus enhancement by documenting which modeled dimensions controlled behavior.

Observational learning involves repertoire changes after witnessing others contact contingencies without direct trial-by-trial shaping on every step. Peer, caregiver, video, and delayed models are valid when consent, assent, and fidelity are handled ethically.

Cooper emphasizes reinforcement-forward shaping of approximations, humane error correction, assent-sensitive pacing, and transparency when scripted models substitute for naturalistic demonstrations. Coercive escalation when models increase intensity violates professional ethics.

For BCBA exam prep: check demonstrator diversity, formal similarity control, model fidelity logs, generalized imitation probes, and observational-learning evidence before choosing an answer.`,
  footnotes: {
    ch21_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 21 — imitation under formal resemblance control (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Listener-mediated reinforcement maintains imitative topographies.",
        "Not quoted from CHH.",
      ],
    },
    ch21_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 21 — generalized imitation across novel models and settings.",
        "Single-model success insufficient for generalization claims.",
      ],
    },
    ch21_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 21 — modeling, observational learning, stimulus enhancement discrimination.",
        "Document modeled dimensions controlling behavior.",
      ],
    },
    ch21_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 21 — model fidelity, latency, trial-by-trial accuracy.",
        "Domain C measurement for imitation programming.",
      ],
    },
    ch21_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 21 — consent-sensitive media modeling, assent, humane shaping ethics.",
        "Avoid coercive model escalation.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch21_1" },
    { afterSentenceIndex: 1, ref: "ch21_2" },
    { afterSentenceIndex: 2, ref: "ch21_3" },
    { afterSentenceIndex: 3, ref: "ch21_4" },
    { afterSentenceIndex: 4, ref: "ch21_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 21 recap",
    intro:
      "Chapter 21 is about learning by watching and copying—with data to prove it generalizes across people and settings, not just one therapist in one room.",
    chunks: [
      {
        subtitle: "Imitation basics",
        segments: [
          {
            type: "text",
            text: "The learner copies a model's action or sound under formal similarity control. A reinforcing listener (mediator) maintains the match—not punishment for clumsy early tries ",
          },
          { type: "footnote", ref: "ch21_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Generalized imitation",
        segments: [
          {
            type: "text",
            text: "Success with one therapist does not prove generalized imitation. Probe novel demonstrators and settings before mastery labels ",
          },
          { type: "footnote", ref: "ch21_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Model fidelity and latency",
        segments: [
          {
            type: "text",
            text: "Log how models were presented, trial accuracy, and how fast the learner copies after the model stops. Missing fidelity while claiming generalized mastery is a red flag ",
          },
          { type: "footnote", ref: "ch21_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Observational learning and ethics",
        segments: [
          {
            type: "text",
            text: "Learners can change behavior after watching others contact consequences—not always immediate echo. Use consent-sensitive media, honor assent, and avoid coercive model escalation ",
          },
          { type: "footnote", ref: "ch21_3" },
          { type: "footnote", ref: "ch21_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include declaring generalized imitation from a single model, confusing observational learning with direct shaping on every step, ignoring model fidelity documentation, and treating latency as irrelevant. Resolve them by checking demonstrator diversity, formal similarity control, and generalization probe evidence before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch21_v1: { label: "[V1]", lines: ["CHH Chapter 21 — imitation."] },
    ch21_v2: { label: "[V2]", lines: ["CHH Chapter 21 — generalized imitation."] },
    ch21_v3: { label: "[V3]", lines: ["CHH Chapter 21 — model stimuli."] },
    ch21_v4: { label: "[V4]", lines: ["CHH Chapter 21 — observational learning."] },
    ch21_v5: { label: "[V5]", lines: ["CHH Chapter 21 — model fidelity and latency."] },
    ch21_kc1: { label: "[KC1]", lines: ["Domain F: generalized imitation requires novel-model probe evidence."] },
    ch21_kc2: { label: "[KC2]", lines: ["Domain C: fidelity logs, accuracy, latency slices."] },
    ch21_kc3: { label: "[KC3]", lines: ["Domain E: assent, consent, humane shaping—no coercive escalation."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 21",
    intro: "Chapter 21 imitation and modeling—shaping is Chapter 22.",
    entries: [
      { term: "Imitative repertoire", definition: "Topographies echoing modeled acts under formal resemblance control.", footnoteRef: "ch21_v1" },
      { term: "Generalized imitation", definition: "Imitating across novel demonstrators/settings without per-model retraining.", footnoteRef: "ch21_v2" },
      { term: "Model stimuli", definition: "Observable demonstrations cueing learner reproduction.", footnoteRef: "ch21_v3" },
      { term: "Observational learning", definition: "Repertoire change after witnessing others contact contingencies.", footnoteRef: "ch21_v4" },
      { term: "Latency to imitation", definition: "Time from model offset to learner echo.", footnoteRef: "ch21_v5" },
      { term: "Model fidelity", definition: "Documented accuracy of how demonstrations were presented.", footnoteRef: "ch21_v5" },
      { term: "Formal similarity", definition: "Point-to-point correspondence between model and learner topography.", footnoteRef: "ch21_v1" },
      { term: "Stimulus enhancement", definition: "Increased salience—not same as observational learning without contingency evidence.", footnoteRef: "ch21_v4" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 21",
    intro: "Resemblance control, generalization probes, fidelity, ethical shaping.",
    concepts: [
      {
        title: "Imitation under formal similarity",
        segments: [
          { type: "text", text: "Model-resemblance plus listener-mediated reinforcement—foundation for echoics and motor chains " },
          { type: "footnote", ref: "ch21_v1" },
          { type: "footnote", ref: "ch21_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Generalized imitation probes",
        segments: [
          { type: "text", text: "Novel demonstrators and settings—do not certify from single-model success " },
          { type: "footnote", ref: "ch21_v2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Model fidelity and latency",
        segments: [
          { type: "text", text: "Document demonstrations, accuracy, and fluency timing alongside generalization probes " },
          { type: "footnote", ref: "ch21_v5" },
          { type: "footnote", ref: "ch21_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical modeling practice",
        segments: [
          { type: "text", text: "Consent-sensitive media, assent, reinforcement-forward shaping—de-escalate coercion " },
          { type: "footnote", ref: "ch21_5" },
          { type: "footnote", ref: "ch21_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 21 vocabulary or reject if the stem describes single-model overclaim, missing fidelity, or coercive modeling.",
  matchActivityInstructions:
    "Select imitation classification, generalization probe response, fidelity fix, or ethical coaching note for Cooper Chapter 21.",
  chainActivityInstructions:
    "Sequence imitation workflow: baseline assessment → model/reinforcer selection → reinforcement-forward shaping → generalized probes and fidelity documentation.",
  mts: [
    {
      sample_stimulus: "Learner imitates therapist only; fails with novel clinician.",
      comparison_options: [
        "Expand exemplar diversity; probe generalized imitation",
        "Generalized imitation mastered",
        "Delete imitation goals",
        "Respondent extinction only",
      ],
      correct_match: "Expand exemplar diversity; probe generalized imitation",
      error_feedback: "Single-model success ≠ generalization.",
    },
    {
      sample_stimulus: "Model fidelity missing; district claims generalized imitation mastery.",
      comparison_options: [
        "Reinstate fidelity logs, latency, novel-model probes",
        "Accept from applause",
        "Delete goals when latency varies",
        "Poster exposure proves observational learning",
      ],
      correct_match: "Reinstate fidelity logs, latency, novel-model probes",
      error_feedback: "Domain C + F documentation required.",
    },
    {
      sample_stimulus: "Clinician raises voice after clumsy imitation approximations.",
      comparison_options: [
        "De-escalate; reinforcement-forward humane error correction",
        "Approve intensity for graph movement",
        "Assent irrelevant",
        "MO excuses intimidation",
      ],
      correct_match: "De-escalate; reinforcement-forward humane error correction",
      error_feedback: "Domain E coaching priority.",
    },
    {
      sample_stimulus: "Peer model demonstrates; learner later performs similar act after witnessing reinforcement.",
      comparison_options: [
        "Possible observational learning—document contingencies",
        "Automatic imitation proof",
        "Negative punishment",
        "Stimulus enhancement only always",
      ],
      correct_match: "Possible observational learning—document contingencies",
      error_feedback: "Verify controlling variables.",
    },
    {
      sample_stimulus: "Video model used; assent withdrawn mid-session.",
      comparison_options: [
        "Honor assent withdrawal; modify/stop media modeling",
        "Continue for data",
        "Punish withdrawal",
        "Skip documentation",
      ],
      correct_match: "Honor assent withdrawal; modify/stop media modeling",
      error_feedback: "Assent-sensitive ethics.",
    },
    {
      sample_stimulus: "High accuracy with therapist; fails novel peer model.",
      comparison_options: [
        "Limited generalization—program exemplar diversity",
        "Generalized imitation verified",
        "Terminate imitation",
        "MO only",
      ],
      correct_match: "Limited generalization—program exemplar diversity",
      error_feedback: "Novel exemplar probe failed.",
    },
    {
      sample_stimulus: "Awkward motor approximation during shaping.",
      comparison_options: [
        "Reinforce approximation; shape humanely toward terminal form",
        "Punish immediately",
        "Terminate program",
        "Coercive model escalation",
      ],
      correct_match: "Reinforce approximation; shape humanely toward terminal form",
      error_feedback: "Reinforcement-forward shaping.",
    },
    {
      sample_stimulus: "Echoic drill—learner copies therapist saying rabbit before praise.",
      comparison_options: [
        "Vocal imitation (echoic) under formal similarity",
        "Mand because therapist spoke",
        "Tact only",
        "Intraverbal exclusively",
      ],
      correct_match: "Vocal imitation (echoic) under formal similarity",
      error_feedback: "Ch 18/21 integration.",
    },
  ],
  chainTitle: "Imitation and modeling workflow",
  chainFragments: [
    { id: "a", text: "Assess baseline imitation and developmental constraints." },
    { id: "b", text: "Select models and reinforcers with cultural validity and assent-sensitive pacing." },
    { id: "c", text: "Shape formally similar responses with reinforcement-forward error care." },
    { id: "d", text: "Probe generalized imitation; document media consent and model fidelity." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Imitation", back: "Formal similarity to model." },
    { front: "Generalized imitation", back: "Novel models/settings." },
    { front: "Model fidelity", back: "Demo accuracy logged." },
    { front: "Latency", back: "Model offset to echo." },
    { front: "Observational learning", back: "Learn from witnessed contingencies." },
    { front: "Assent", back: "Honor withdrawal in drills." },
  ],
  worksheet: {
    title: "CHH Chapter 21 — imitation and modeling",
    instructions:
      "Classify imitation vs observational learning, generalization status, documentation quality, and ethical response.",
    scenario:
      "Scenario A — High accuracy imitating therapist; fails with novel clinician.",
    scenario_follow_up:
      "Scenario B — Model fidelity logs missing; marketing claims generalized imitation mastery.\n\nScenario C — Clinician raises voice after clumsy approximations.\n\nScenario D — Peer model used; learner performs act after witnessing peer get reinforcement.\n\nScenario E — Video modeling; learner withdraws assent mid-session.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best conclusion?",
        options: ["Expand exemplar diversity; probe generalization", "Generalized imitation mastered", "Delete imitation goals"],
        correct: "Expand exemplar diversity; probe generalization",
      },
      {
        id: "response_2",
        label: "Scenario B · Most urgent action?",
        options: ["Reinstate fidelity logs and novel-model probes", "Accept from applause", "Delete goals for latency jitter"],
        correct: "Reinstate fidelity logs and novel-model probes",
      },
      {
        id: "response_3",
        label: "Scenario C · Ethics-aligned coaching?",
        options: ["De-escalate; reinforcement-forward shaping", "Approve intensity for graphs", "Assent irrelevant"],
        correct: "De-escalate; reinforcement-forward shaping",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["Possible observational learning—verify contingencies", "Automatic imitation proof", "Negative punishment"],
        correct: "Possible observational learning—verify contingencies",
      },
      {
        id: "response_5",
        label: "Scenario E · Required response?",
        options: ["Honor assent withdrawal", "Continue session", "Punish withdrawal"],
        correct: "Honor assent withdrawal",
      },
      {
        id: "response_6",
        label: "Generalized imitation requires:",
        options: ["Success across novel demonstrators when probed", "One therapist only", "No probes"],
        correct: "Success across novel demonstrators when probed",
      },
      {
        id: "response_7",
        label: "Model fidelity means:",
        options: ["Documented accuracy of demonstrations", "Optional notes", "Caregiver applause"],
        correct: "Documented accuracy of demonstrations",
      },
      {
        id: "response_8",
        label: "Ethical imitation programming prioritizes:",
        options: ["Assent, consent, humane shaping, transparent logs", "Coercive escalation", "Single-model mastery claims"],
        correct: "Assent, consent, humane shaping, transparent logs",
      },
    ],
    remediationLog:
      "Rebuild Chapter 21 fluency: formal similarity? → fidelity + latency logged? → novel-model probes? → observational vs direct shaping? → ethical assent/consent?",
  },
  bdsBank: CHAPTER_21_IMITATION_QUIZ_BANK,
};
