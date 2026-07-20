import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_19_EQ_QUIZ_BANK } from "@/content/modules/quiz/chapter19EquivalenceQuizBank";

export const MOD20_BLUEPRINT: ExtensionBlueprint = {
  id: "mod20",
  chapterNumber: 19,
  activityPrefix: 2200,
  title: "Equivalence-Based Instruction",
  codexHeading: "READING — Chapter 19 (Equivalence-Based Instruction)",
  codexIntro: `Chapter 19 in Cooper, Heron, and Heward presents equivalence-based instruction (EBI) as a way to train a minimal network of conditional discriminations (often via matching-to-sample) and then test for untaught, emergent relations. Stimulus equivalence classes form when stimuli become functionally substitutable after shared reinforced conditional histories and successful probe performance.

Three core tests support equivalence-class claims: reflexivity (identity matching—a stimulus matched to itself), symmetry (reversing a trained direction without direct reversal training, e.g., B→A after A→B), and transitivity (bridging through a shared node without direct training, e.g., B→C after A→B and A→C). Accuracy on directly trained relations alone is insufficient—emergence must be demonstrated on probes.

Measurement must separate teaching blocks from probe sessions, log prompt levels, pre-specify emergence criteria, and apply IOA to ambiguous relational judgments. Training a probe relation before testing contaminates emergence interpretation (e.g., directly teaching B→C then claiming transitive proof). Failed probes signal redesign—not data deletion.

Ethical dissemination requires modest language, published probe appendices, and honest reporting of partial or failed emergence. Chapter 19 pairs with Chapter 20 (relational learning without assuming full equivalence properties).

For BCBA exam prep: ask whether the relation was taught or probed, identify probe type (symmetry/transitivity/reflexivity), confirm separate data streams, and reject equivalence claims from forward training alone.`,
  footnotes: {
    ch19_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 19 — equivalence-based instruction (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Minimal conditional networks tested for emergent relations.",
        "Not quoted from CHH.",
      ],
    },
    ch19_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 19 — reflexivity, symmetry, transitivity probes.",
        "Distinct analytic properties—do not conflate.",
      ],
    },
    ch19_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 19 — separate taught trials from probe outcomes; IOA on relational scoring.",
        "Disaggregated measurement supports audit trails.",
      ],
    },
    ch19_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 19 — nodal training design and transitive emergence.",
        "Hub stimulus selection shapes likely emergent relations.",
      ],
    },
    ch19_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 19 — ethical modesty in reporting; no hidden probe failures.",
        "Redesign when probes fail—not suppression.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch19_1" },
    { afterSentenceIndex: 1, ref: "ch19_2" },
    { afterSentenceIndex: 2, ref: "ch19_3" },
    { afterSentenceIndex: 3, ref: "ch19_4" },
    { afterSentenceIndex: 4, ref: "ch19_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 19 recap",
    intro:
      "EBI teaches a small set of conditional relations, then tests whether untaught relations appear. Emergence is measured—not assumed. Keep teaching trials and probe trials separate.",
    chunks: [
      {
        subtitle: "Taught versus emergent",
        segments: [
          {
            type: "text",
            text: "Mastery on directly trained A→B is not the same as a full equivalence class. You must probe untaught relations and document the results ",
          },
          { type: "footnote", ref: "ch19_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Symmetry, transitivity, reflexivity",
        segments: [
          {
            type: "text",
            text: "Symmetry reverses trained direction (B→A after A→B). Transitivity bridges nodes (B→C after A→B and A→C). Reflexivity matches a stimulus to itself. They are not interchangeable ",
          },
          { type: "footnote", ref: "ch19_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Separate your spreadsheets",
        segments: [
          {
            type: "text",
            text: "One stream for teaching, another for probes—with prompts logged and IOA on tricky relational trials. Never blend them on one graph without legends ",
          },
          { type: "footnote", ref: "ch19_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Report honestly",
        segments: [
          {
            type: "text",
            text: "If probes fail, redesign and reteach—do not delete rows or market Sidman-grade equivalence without appendices ",
          },
          { type: "footnote", ref: "ch19_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include claiming equivalence from trained relations alone, confusing symmetry with transitivity, training probe relations before testing emergence, and hiding failed probe data. Resolve them by checking whether the relation was taught or probed, verifying probe type, and confirming separate data streams before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch19_v1: { label: "[V1]", lines: ["CHH Chapter 19 — equivalence-based instruction."] },
    ch19_v2: { label: "[V2]", lines: ["CHH Chapter 19 — stimulus equivalence class."] },
    ch19_v3: { label: "[V3]", lines: ["CHH Chapter 19 — symmetry probe."] },
    ch19_v4: { label: "[V4]", lines: ["CHH Chapter 19 — transitivity probe."] },
    ch19_v5: { label: "[V5]", lines: ["CHH Chapter 19 — reflexivity probe."] },
    ch19_kc1: { label: "[KC1]", lines: ["Domain F: taught vs emergent; symmetry vs transitivity."] },
    ch19_kc2: { label: "[KC2]", lines: ["Domain C: disaggregated probe ledgers + IOA."] },
    ch19_kc3: { label: "[KC3]", lines: ["Domain E: modest dissemination; no hidden probe failures."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 19",
    intro: "Chapter 19 equivalence—nonequivalence relations are Chapter 20.",
    entries: [
      { term: "Equivalence-based instruction (EBI)", definition: "Minimal conditional training tested for emergent derived relations.", footnoteRef: "ch19_v1" },
      { term: "Stimulus equivalence class", definition: "Stimuli substitutable after shared conditional reinforcement histories.", footnoteRef: "ch19_v2" },
      { term: "Symmetry probe", definition: "Tests reversed mapping without direct reversal training.", footnoteRef: "ch19_v3" },
      { term: "Transitivity probe", definition: "Tests nodal bridge without direct pairwise training.", footnoteRef: "ch19_v4" },
      { term: "Reflexivity probe", definition: "Identity/SAME matching—stimulus to itself.", footnoteRef: "ch19_v5" },
      { term: "Emergent/derived relation", definition: "Relational performance not directly trained but arising from network.", footnoteRef: "ch19_v1" },
      { term: "Nodal training", definition: "Hub stimulus (e.g., A) linked to multiple comparisons (B, C).", footnoteRef: "ch19_v4" },
      { term: "Matching-to-sample", definition: "Procedure training sample→comparison conditional relations.", footnoteRef: "ch19_v1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 19",
    intro: "Probe evidence—not trained accuracy alone—supports equivalence claims.",
    concepts: [
      {
        title: "Taught versus emergent",
        segments: [
          { type: "text", text: "Direct training mastery ≠ equivalence class—probe symmetry, transitivity, reflexivity " },
          { type: "footnote", ref: "ch19_v1" },
          { type: "footnote", ref: "ch19_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Three probe properties",
        segments: [
          { type: "text", text: "Symmetry reverses; transitivity bridges; reflexivity matches identity—discriminate on exams " },
          { type: "footnote", ref: "ch19_v2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Disaggregated measurement",
        segments: [
          { type: "text", text: "Separate teaching from probes; log prompts; IOA on relational trials " },
          { type: "footnote", ref: "ch19_v3" },
          { type: "footnote", ref: "ch19_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical modest reporting",
        segments: [
          { type: "text", text: "Publish probe appendices; report partial emergence; redesign when probes fail " },
          { type: "footnote", ref: "ch19_5" },
          { type: "footnote", ref: "ch19_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each term to EBI vocabulary or reject if the stem describes taught-only performance, wrong probe type, or contaminated probe conditions.",
  matchActivityInstructions:
    "Select EBI rationale, symmetry/transitivity/reflexivity interpretation, or probe-documentation response for Cooper Chapter 19.",
  chainActivityInstructions:
    "Sequence EBI workflow: select nodal set → train minimal network → run separated probes → report emergence modestly with appendices.",
  mts: [
    {
      sample_stimulus: "A→B and A→C trained; B→C probe passes without BC training.",
      comparison_options: [
        "Emergent transitive performance (equivalence scaffolding)",
        "Symmetry only",
        "Respondent reflex only",
        "Proof no verification needed",
      ],
      correct_match: "Emergent transitive performance (equivalence scaffolding)",
      error_feedback: "Nodal bridge without direct BC training.",
    },
    {
      sample_stimulus: "A→B trained flawlessly; B→A symmetry probe fails; team claims equivalence mastery.",
      comparison_options: [
        "Premature claim—symmetry evidence missing",
        "Valid equivalence class",
        "Transitivity verified",
        "Reflexivity sufficient",
      ],
      correct_match: "Premature claim—symmetry evidence missing",
      error_feedback: "Forward training insufficient alone.",
    },
    {
      sample_stimulus: "Taught AB trials blended with symmetry probes on one graph—no legend.",
      comparison_options: [
        "Analytic separation lapse",
        "Ideal hygiene",
        "Symmetry equals transitivity",
        "IOA obsolete",
      ],
      correct_match: "Analytic separation lapse",
      error_feedback: "Cannot audit taught vs emergent.",
    },
    {
      sample_stimulus: "Separate tabs: taught blocks, symmetry probes, transitivity probes, IOA.",
      comparison_options: [
        "Credible equivalence measurement dossier",
        "Optional decoration",
        "Probes subjective—discard",
        "Replaces reinforcement",
      ],
      correct_match: "Credible equivalence measurement dossier",
      error_feedback: "Disaggregated probe structure.",
    },
    {
      sample_stimulus: "C→B directly trained; team claims fresh transitive proof from nodal history.",
      comparison_options: [
        "Contaminated—tested relation was directly trained",
        "Valid transitive emergence",
        "Symmetry verified",
        "Reflexivity only",
      ],
      correct_match: "Contaminated—tested relation was directly trained",
      error_feedback: "Probe relation must be untaught.",
    },
    {
      sample_stimulus: "Transitive failure spreadsheets deleted; dashboard stays green.",
      comparison_options: [
        "Integrity collapse—misrepresented emergence",
        "Harmless aesthetics",
        "IOA bans EBI",
        "Proof EBI invalid",
      ],
      correct_match: "Integrity collapse—misrepresented emergence",
      error_feedback: "Probe suppression unethical.",
    },
    {
      sample_stimulus: "SAME→SAME reflexivity probes run alongside symmetry checks.",
      comparison_options: [
        "Complements fuller equivalence documentation",
        "Replaces transitivity",
        "MO replaces SD",
        "Identical to symmetry",
      ],
      correct_match: "Complements fuller equivalence documentation",
      error_feedback: "Reflexivity alongside other properties.",
    },
    {
      sample_stimulus: "Which probe tests B→A after A→B trained (no B→A training)?",
      comparison_options: ["Symmetry", "Transitivity", "Reflexivity", "Forward training"],
      correct_match: "Symmetry",
      error_feedback: "Reverse direction without direct training.",
    },
  ],
  chainTitle: "Equivalence instruction rollout",
  chainFragments: [
    { id: "a", text: "Select nodal stimuli and baseline conditional relations operationally." },
    { id: "b", text: "Train minimal conditional network with reinforcement-forward error handling." },
    { id: "c", text: "Run symmetry, transitivity, and reflexivity probes separate from teaching." },
    { id: "d", text: "Report emergent outcomes transparently before omnibus mastery claims." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "EBI", back: "Minimal training → test emergence." },
    { front: "Symmetry", back: "Reverse without training." },
    { front: "Transitivity", back: "Nodal bridge untaught." },
    { front: "Reflexivity", back: "Identity/SAME match." },
    { front: "Emergent", back: "Not directly trained." },
    { front: "Probe", back: "Test untaught relation." },
  ],
  worksheet: {
    title: "CHH Chapter 19 — equivalence-based instruction",
    instructions:
      "For each item: Was the relation taught or probed? Which probe type? Are data streams separate? Does reporting match evidence?",
    scenario:
      "Scenario A — Graph blends taught A→B with symmetry B→A probes—no legend.",
    scenario_follow_up:
      "Scenario B — A→B and A→C trained; B→C probe passes.\n\nScenario C — C→B directly trained; team claims new transitive proof.\n\nScenario D — B→A symmetry fails; forward A→B perfect.\n\nScenario E — Transitive failure appendix deleted; marketing claims Sidman-grade equivalence.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · FIRST move?",
        options: [
          "Rebuild visuals separating taught blocks from probe outcomes",
          "Lock blended charts permanently",
          "Rename probes as taught trials",
        ],
        correct: "Rebuild visuals separating taught blocks from probe outcomes",
      },
      {
        id: "response_2",
        label: "Scenario B · Best headline?",
        options: [
          "Emergent transitive performance pending verification",
          "Symmetry proof exclusively",
          "Respondent elicitation only",
        ],
        correct: "Emergent transitive performance pending verification",
      },
      {
        id: "response_3",
        label: "Scenario C · Problem?",
        options: [
          "Direct C→B training contaminates transitive emergence interpretation",
          "Guarantees better ethics",
          "Obsoletes IOA",
        ],
        correct: "Direct C→B training contaminates transitive emergence interpretation",
      },
      {
        id: "response_4",
        label: "Scenario D · Best response?",
        options: [
          "Withhold equivalence claims pending symmetry evidence",
          "Certify mastery because forward trained",
          "Discard probe columns",
        ],
        correct: "Withhold equivalence claims pending symmetry evidence",
      },
      {
        id: "response_5",
        label: "Scenario E · Core problem?",
        options: [
          "Truthful emergence reporting and probe evidence compromised",
          "Normal reporting",
          "Unrelated to EBI",
        ],
        correct: "Truthful emergence reporting and probe evidence compromised",
      },
      {
        id: "response_6",
        label: "Symmetry versus transitivity?",
        options: [
          "Symmetry reverses trained direction; transitivity bridges through shared node",
          "Identical probes",
          "Both test identity only",
        ],
        correct: "Symmetry reverses trained direction; transitivity bridges through shared node",
      },
      {
        id: "response_7",
        label: "Ethical EBI dissemination?",
        options: [
          "Published probe evidence; modest language when partial",
          "Omnibus mastery marketing",
          "Suppress transitive failures",
        ],
        correct: "Published probe evidence; modest language when partial",
      },
      {
        id: "response_8",
        label: "Trained A→B mastery alone:",
        options: [
          "Insufficient for equivalence-class claim",
          "Proves full class",
          "Proves transitivity",
        ],
        correct: "Insufficient for equivalence-class claim",
      },
    ],
    remediationLog:
      "Rebuild Chapter 19 fluency: taught or probed? → symmetry/transitivity/reflexivity? → separate data? → honest reporting → redesign if fail.",
  },
  bdsBank: CHAPTER_19_EQ_QUIZ_BANK,
};
